import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/lib/db';
import type { CatalogSavePayload } from '@/lib/types';

export const dynamic = 'force-dynamic';

export async function POST(req: NextRequest) {
  try {
    const body: CatalogSavePayload = await req.json();

    const {
      artisanDbId,
      titleEn, titleHi,
      descriptionEn, descriptionHi,
      culturalStory,
      craftCategory,
      materials, colors, region, tags,
      qualityScore, qualityFeedback,
      imageUrl,
    } = body;

    if (!titleEn || !descriptionEn || !craftCategory || !imageUrl) {
      return NextResponse.json(
        { success: false, error: 'Required fields are missing (title, description, category, or photo). Please review and try again.' },
        { status: 400 }
      );
    }

    let artisan = artisanDbId ? await prisma.artisanProfile.findUnique({ where: { id: artisanDbId } }) : null;
    if (!artisan) {
      artisan = await prisma.artisanProfile.findFirst();
    }

    if (!artisan) {
      return NextResponse.json(
        { success: false, error: 'Artisan profile not found.' },
        { status: 404 }
      );
    }

    const product = await prisma.product.create({
      data: {
        artisanId:            artisan.id,
        title:                titleEn.slice(0, 200),
        titleHindi:           titleHi ? titleHi.slice(0, 200) : null,
        descriptionEnglish:   descriptionEn,
        descriptionHindi:     descriptionHi || null,
        culturalHeritageStory: culturalStory || null,
        craftCategory:        craftCategory,
        giCraftRegion:        region || null,
        isGiInformational:    true,
        materialsUsed:        materials || 'Natural materials',
        colors:               colors || null,
        tags:                 tags || null,
        aiQualityScore:       typeof qualityScore === 'number' ? qualityScore : 65,
        aiQualityFeedback:    qualityFeedback || null,
        primaryImageUrl:      imageUrl,
        status:               'DRAFT', // Phase 4: stays DRAFT until artisan confirms pricing
        // Phase 3 placeholder pricing — will be set in Phase 4
        artisanCostPrice:     0,
        suggestedRetailMin:   0,
        suggestedRetailMax:   0,
        finalListingPrice:    0,
        pricingRationale:     'Fair pricing evaluation pending artisan confirmation.',
      },
    });

    return NextResponse.json({ success: true, productId: product.id });
  } catch (err: unknown) {
    console.error('[/api/catalog/save]', err);
    const message = err instanceof Error ? err.message : 'Unknown error';
    return NextResponse.json(
      { success: false, error: `Failed to save listing: ${message}` },
      { status: 500 }
    );
  }
}
