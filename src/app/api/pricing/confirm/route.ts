/**
 * POST /api/pricing/confirm
 * Phase 4 — Fair Pricing Assistant
 * Persists the artisan's confirmed final price and the AI suggested ranges
 * into the Product row. Safe update — no data is deleted.
 */
import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/lib/db';
import type { PricingConfirmPayload } from '@/lib/types';
import { evaluatePremiumEligibility } from '@/lib/artisanEligibility';

export const dynamic = 'force-dynamic';

export async function POST(req: NextRequest) {
  try {
    const body: PricingConfirmPayload = await req.json();

    const {
      productId,
      artisanCostPrice,
      suggestedRetailMin,
      suggestedRetailMax,
      suggestedRetailPremium,
      finalListingPrice,
      pricingRationale,
      pricingFactors,
    } = body;

    if (!productId || typeof productId !== 'string') {
      return NextResponse.json(
        { success: false, error: 'productId is required.' },
        { status: 400 }
      );
    }

    if (typeof finalListingPrice !== 'number' || finalListingPrice < 0) {
      return NextResponse.json(
        { success: false, error: 'A valid final price is required.' },
        { status: 400 }
      );
    }

    // Verify product exists and fetch artisan info
    const product = await prisma.product.findUnique({
      where: { id: productId },
      select: { id: true, artisanId: true },
    });

    if (!product) {
      return NextResponse.json(
        { success: false, error: 'Product not found. Cannot confirm pricing.' },
        { status: 404 }
      );
    }

    // Server-side Premium Pricing Enforcement
    const fairMax = typeof suggestedRetailMax === 'number' ? suggestedRetailMax : 0;
    const isAttemptingPremium = finalListingPrice > fairMax && fairMax > 0;

    if (isAttemptingPremium) {
      const artisanProducts = await prisma.product.findMany({
        where: { artisanId: product.artisanId },
        select: {
          status: true,
          reviews: { select: { rating: true } },
        },
      });

      const publishedCount = artisanProducts.filter((p) => p.status === 'PUBLISHED').length;
      const allReviews = artisanProducts.flatMap((p) => p.reviews);
      const reviewCount = allReviews.length;
      const avgRating = reviewCount > 0
        ? allReviews.reduce((sum, r) => sum + r.rating, 0) / reviewCount
        : 0;

      const eligibility = evaluatePremiumEligibility({
        averageRating: avgRating,
        reviewCount,
        publishedProductCount: publishedCount,
        hasActiveSubscription: false,
      });

      if (!eligibility.isEligible) {
        return NextResponse.json(
          {
            success: false,
            error: 'Premium pricing is currently unavailable for this artisan.',
            eligibility,
          },
          { status: 403 }
        );
      }
    }

    await prisma.product.update({
      where: { id: productId },
      data: {
        status:                 'PUBLISHED', // Phase 4: publish only after artisan confirms pricing
        artisanCostPrice:       typeof artisanCostPrice === 'number' ? artisanCostPrice : 0,
        suggestedRetailMin:     typeof suggestedRetailMin === 'number' ? suggestedRetailMin : 0,
        suggestedRetailMax:     typeof suggestedRetailMax === 'number' ? suggestedRetailMax : 0,
        suggestedRetailPremium: typeof suggestedRetailPremium === 'number' ? suggestedRetailPremium : null,
        finalListingPrice:      finalListingPrice,
        pricingRationale:       pricingRationale || null,
        pricingFactors:         pricingFactors || null,
      },
    });

    return NextResponse.json({ success: true });
  } catch (err: unknown) {
    console.error('[/api/pricing/confirm]', err);
    const message = err instanceof Error ? err.message : 'Unknown error';
    return NextResponse.json(
      { success: false, error: `Failed to confirm pricing: ${message}` },
      { status: 500 }
    );
  }
}
