import { NextResponse } from 'next/server';
import prisma from '@/lib/db';

export const dynamic = 'force-dynamic';

export async function GET() {
  try {
    const artisans = await prisma.artisanProfile.findMany({
      orderBy: { createdAt: 'asc' },
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
          select: {
            id: true,
            title: true,
            titleHindi: true,
            craftCategory: true,
            giCraftRegion: true,
            finalListingPrice: true,
            primaryImageUrl: true,
            reviews: {
              select: {
                id: true,
                rating: true,
              },
            },
          },
        },
      },
    });

    const sanitizedList = artisans.map((artisan) => {
      let totalReviews = 0;
      let sumRating = 0;

      artisan.products.forEach((p) => {
        p.reviews.forEach((r) => {
          totalReviews += 1;
          sumRating += r.rating;
        });
      });

      const averageRating = totalReviews > 0 ? Number((sumRating / totalReviews).toFixed(1)) : 5.0;

      // Clean @username
      const username = artisan.upiId
        ? artisan.upiId.split('@')[0].replace(/\./g, '')
        : artisan.fullName.toLowerCase().replace(/[^a-z0-9]/g, '');

      return {
        id: artisan.id,
        fullName: artisan.fullName,
        username: `@${username}`,
        primaryCraft: artisan.primaryCraft,
        state: artisan.state,
        district: artisan.district,
        experienceYears: artisan.experienceYears,
        bioEnglish: artisan.bioEnglish,
        bioLocal: artisan.bioLocal,
        profileImage: artisan.profileImage || artisan.user?.avatarUrl,
        isPehchanVerified: Boolean(artisan.pehchanCardNo),
        stats: {
          totalProducts: artisan.products.length,
          totalReviews,
          averageRating,
        },
        sampleProducts: artisan.products.slice(0, 3).map((p) => ({
          id: p.id,
          title: p.title,
          price: p.finalListingPrice,
          image: p.primaryImageUrl,
          craftCategory: p.craftCategory,
        })),
      };
    });

    return NextResponse.json({
      success: true,
      count: sanitizedList.length,
      artisans: sanitizedList,
    });
  } catch (error: any) {
    console.error('Error fetching public artisans:', error);
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
