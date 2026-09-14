import { NextResponse } from 'next/server';
import prisma from '@/lib/db';

export const dynamic = 'force-dynamic';

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const { id } = params;
    const cleanId = id.startsWith('@') ? id.slice(1) : id;

    const artisan = await prisma.artisanProfile.findFirst({
      where: {
        OR: [
          { id },
          { userId: id },
          { upiId: { startsWith: `${cleanId}@` } },
          { upiId: cleanId },
        ],
      },
      include: {
        user: {
          select: {
            id: true,
            name: true,
            avatarUrl: true,
          },
        },
        products: {
          where: { status: 'PUBLISHED' },
          orderBy: { createdAt: 'desc' },
          include: {
            reviews: {
              orderBy: { createdAt: 'desc' },
              select: {
                id: true,
                rating: true,
                reviewText: true,
                customerDisplayName: true,
                verifiedPurchase: true,
                photos: true,
                createdAt: true,
                // NEVER select privateNote for public/buyer API
              },
            },
          },
        },
      },
    });

    if (!artisan) {
      return NextResponse.json({ success: false, error: 'Artisan not found' }, { status: 404 });
    }

    // Compute aggregate review statistics
    let totalReviews = 0;
    let sumRating = 0;
    const allReviews: any[] = [];

    artisan.products.forEach((product) => {
      product.reviews.forEach((rev) => {
        totalReviews += 1;
        sumRating += rev.rating;
        allReviews.push({
          ...rev,
          productTitle: product.title,
          productId: product.id,
          photos: typeof rev.photos === 'string' ? (() => { try { return JSON.parse(rev.photos); } catch { return [rev.photos]; } })() : (rev.photos || []),
        });
      });
    });

    const averageRating = totalReviews > 0 ? Number((sumRating / totalReviews).toFixed(1)) : 0;

    // Derived clean username (e.g. @rameshpotter)
    const username = artisan.upiId
      ? artisan.upiId.split('@')[0].replace(/\./g, '')
      : artisan.fullName.toLowerCase().replace(/[^a-z0-9]/g, '');

    // Sanitized public artisan profile (NO phone, NO raw upiId, NO pehchanCardNo)
    const publicProfile = {
      id: artisan.id,
      fullName: artisan.fullName,
      username: `@${username}`,
      primaryCraft: artisan.primaryCraft,
      experienceYears: artisan.experienceYears,
      state: artisan.state,
      district: artisan.district,
      bioEnglish: artisan.bioEnglish,
      bioLocal: artisan.bioLocal,
      profileImage: artisan.profileImage || artisan.user?.avatarUrl,
      isPehchanVerified: Boolean(artisan.pehchanCardNo),
      stats: {
        totalProducts: artisan.products.length,
        totalReviews,
        averageRating,
      },
      products: artisan.products.map((p) => ({
        id: p.id,
        title: p.title,
        titleHindi: p.titleHindi,
        craftCategory: p.craftCategory,
        primaryImageUrl: p.primaryImageUrl,
        finalListingPrice: p.finalListingPrice,
        giCraftRegion: p.giCraftRegion,
        materialsUsed: p.materialsUsed,
        culturalHeritageStory: p.culturalHeritageStory,
        reviewCount: p.reviews.length,
        averageRating: p.reviews.length > 0
          ? Number((p.reviews.reduce((acc, r) => acc + r.rating, 0) / p.reviews.length).toFixed(1))
          : 0,
      })),
      reviews: allReviews,
    };

    return NextResponse.json({ success: true, artisan: publicProfile });
  } catch (error: any) {
    console.error('Error fetching public artisan profile:', error);
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
