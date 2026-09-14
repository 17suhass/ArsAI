import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/lib/db';
import { evaluatePremiumEligibility } from '@/lib/artisanEligibility';

export const dynamic = 'force-dynamic';

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const productId = searchParams.get('productId');
    const artisanId = searchParams.get('artisanId');

    let targetArtisanId = artisanId;

    if (!targetArtisanId && productId) {
      const product = await prisma.product.findUnique({
        where: { id: productId },
        select: { artisanId: true },
      });
      targetArtisanId = product?.artisanId || null;
    }

    if (!targetArtisanId) {
      // Fallback to the active artisan profile
      const defaultArtisan = await prisma.artisanProfile.findFirst({
        select: { id: true },
      });
      targetArtisanId = defaultArtisan?.id || null;
    }

    if (!targetArtisanId) {
      return NextResponse.json(
        { success: false, error: 'Artisan profile not found.' },
        { status: 404 }
      );
    }

    // Query real catalog and review metrics
    const products = await prisma.product.findMany({
      where: { artisanId: targetArtisanId },
      select: {
        status: true,
        reviews: {
          select: { rating: true },
        },
      },
    });

    const publishedProductCount = products.filter((p) => p.status === 'PUBLISHED').length;
    const allReviews = products.flatMap((p) => p.reviews);
    const reviewCount = allReviews.length;
    const averageRating = reviewCount > 0
      ? allReviews.reduce((sum, r) => sum + r.rating, 0) / reviewCount
      : 0;

    const result = evaluatePremiumEligibility({
      averageRating,
      reviewCount,
      publishedProductCount,
      hasActiveSubscription: false,
    });

    return NextResponse.json({
      success: true,
      artisanId: targetArtisanId,
      eligibility: result,
    });
  } catch (err: unknown) {
    console.error('[/api/artisan/eligibility]', err);
    return NextResponse.json(
      { success: false, error: 'Failed to compute artisan eligibility' },
      { status: 500 }
    );
  }
}
