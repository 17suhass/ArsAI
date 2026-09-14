/**
 * POST /api/pricing/estimate
 * Phase 4 — Fair Pricing Assistant
 * Fetches the product and artisan context from the DB, then calls Gemini
 * to produce a 3-tier fair pricing estimate (min / fair / premium).
 * The Gemini API key stays server-side. Never exposed to the client.
 */
import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/lib/db';
import { 
  getPricingEstimateWithGemini, 
  GeminiConfigError, 
  GeminiParseError,
  GeminiServiceBusyError,
  GeminiQuotaError,
  GeminiNetworkError
} from '@/lib/gemini';

export const dynamic = 'force-dynamic';
export const maxDuration = 60;

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { productId, artisanCostPrice, artisanExpectedPrice } = body as {
      productId: string;
      artisanCostPrice?: number;
      artisanExpectedPrice?: number;
    };

    if (!productId || typeof productId !== 'string') {
      return NextResponse.json(
        { success: false, error: 'productId is required.' },
        { status: 400 }
      );
    }

    // Fetch product with artisan context
    const product = await prisma.product.findUnique({
      where: { id: productId },
      include: { artisan: true },
    });

    if (!product) {
      return NextResponse.json(
        { success: false, error: 'Product not found.' },
        { status: 404 }
      );
    }

    // Use submitted artisanCostPrice if provided (artisan may have updated it),
    // otherwise fall back to the stored value
    const costPrice =
      typeof artisanCostPrice === 'number' && isFinite(artisanCostPrice) && artisanCostPrice >= 0
        ? artisanCostPrice
        : product.artisanCostPrice;

    const expectedPrice =
      typeof artisanExpectedPrice === 'number' && isFinite(artisanExpectedPrice) && artisanExpectedPrice > 0
        ? artisanExpectedPrice
        : undefined;

    const isPehchan = !!product.artisan?.pehchanCardNo;
    const exp = product.artisan?.experienceYears || 0;
    const repTier = isPehchan 
      ? (exp >= 15 ? 'National Pehchan Master Craftsman' : 'Pehchan Certified Artisan')
      : (exp >= 10 ? 'Senior Generational Craftsman' : 'Regional Heritage Artisan');

    const estimate = await getPricingEstimateWithGemini({
      title:                 product.title,
      craftCategory:         product.craftCategory,
      materials:             product.materialsUsed,
      dimensions:            product.dimensions,
      colors:                product.colors,
      region:                product.giCraftRegion,
      artisanCostPrice:      costPrice,
      artisanExpectedPrice:  expectedPrice,
      estimatedLaborDays:    product.estimatedLaborDays,
      state:                 product.artisan?.state || 'India',
      district:              product.artisan?.district || undefined,
      experienceYears:       product.artisan?.experienceYears || undefined,
      descriptionEnglish:    product.descriptionEnglish,
      artisanReputationTier: repTier,
    });

    return NextResponse.json({ success: true, estimate });
  } catch (err: unknown) {
    console.error('[/api/pricing/estimate]', err);

    if (err instanceof GeminiQuotaError) {
      return NextResponse.json(
        {
          success: false,
          error: 'AI service rate limit or quota reached. Please try again shortly.',
          code: 'QUOTA_EXCEEDED',
        },
        { status: 429 }
      );
    }

    if (err instanceof GeminiServiceBusyError) {
      return NextResponse.json(
        {
          success: false,
          error: 'AI service is temporarily busy. Your information is safe. Please try again shortly.',
          code: 'SERVICE_BUSY',
        },
        { status: 503 }
      );
    }

    if (err instanceof GeminiConfigError) {
      return NextResponse.json(
        {
          success: false,
          error: 'AI pricing is not configured. Please contact the administrator.',
          code: err.code,
        },
        { status: 503 }
      );
    }

    if (err instanceof GeminiParseError) {
      return NextResponse.json(
        {
          success: false,
          error: 'Could not understand the AI pricing response. Please try again.',
          code: err.code,
        },
        { status: 422 }
      );
    }

    if (err instanceof GeminiNetworkError) {
      return NextResponse.json(
        {
          success: false,
          error: 'Network error connecting to AI service. Please check your connection and try again.',
          code: 'NETWORK_ERROR',
        },
        { status: 502 }
      );
    }

    return NextResponse.json(
      { success: false, error: 'Pricing analysis failed. Please try again.', code: 'UNKNOWN' },
      { status: 500 }
    );
  }
}
