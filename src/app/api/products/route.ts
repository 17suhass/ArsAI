import { NextResponse } from 'next/server';
import prisma from '@/lib/db';

export const dynamic = 'force-dynamic';

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const category = searchParams.get('category');
    const search = searchParams.get('search');
    const artisanId = searchParams.get('artisanId');

    const region = searchParams.get('region');

    const statusParam = searchParams.get('status');
    const includeAll = searchParams.get('includeAll');

    const whereClause: any = {};
    if (includeAll === 'true' || statusParam === 'ALL') {
      // Return all statuses (for Admin Market Intelligence)
    } else if (statusParam) {
      whereClause.status = statusParam;
    } else {
      whereClause.status = 'PUBLISHED';
    }

    if (artisanId) {
      whereClause.artisanId = artisanId;
    }

    if (category && category !== 'ALL') {
      whereClause.craftCategory = category;
    }

    const andConditions: any[] = [];

    if (region && region !== 'ALL') {
      andConditions.push({
        OR: [
          { giCraftRegion: { contains: region } },
          { artisan: { district: { contains: region } } },
          { artisan: { state: { contains: region } } },
        ],
      });
    }

    if (search) {
      andConditions.push({
        OR: [
          { title: { contains: search } },
          { titleHindi: { contains: search } },
          { materialsUsed: { contains: search } },
          { craftCategory: { contains: search } },
          { giCraftRegion: { contains: search } },
          { artisan: { fullName: { contains: search } } },
          { artisan: { district: { contains: search } } },
          { artisan: { state: { contains: search } } },
          { artisan: { primaryCraft: { contains: search } } },
        ],
      });
    }

    if (andConditions.length > 0) {
      whereClause.AND = andConditions;
    }

    const products = await prisma.product.findMany({
      where: whereClause,
      include: {
        artisan: {
          select: {
            id: true,
            fullName: true,
            district: true,
            state: true,
            primaryCraft: true,
            pehchanCardNo: true,
            profileImage: true,
          }
        }
      },
      orderBy: { createdAt: 'desc' },
    });

    const sanitizedProducts = products.map((product) => {
      if (!product.artisan) return product;
      const { pehchanCardNo, ...artisanRest } = product.artisan;
      return {
        ...product,
        artisan: {
          ...artisanRest,
          isPehchanVerified: !!pehchanCardNo,
        },
      };
    });

    return NextResponse.json({ success: true, products: sanitizedProducts });
  } catch (error: any) {
    console.error('Error fetching products:', error);
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
