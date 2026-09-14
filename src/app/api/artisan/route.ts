import { NextResponse } from 'next/server';
import prisma from '@/lib/db';

export const dynamic = 'force-dynamic';

export async function GET() {
  try {
    const artisan = await prisma.artisanProfile.findFirst({
      where: {
        OR: [
          { user: { role: 'ARTISAN' } },
          { fullName: { contains: 'Ramesh' } },
        ],
      },
      include: {
        user: true,
        products: {
          orderBy: { createdAt: 'desc' },
          include: {
            inquiries: true,
            reviews: {
              orderBy: { createdAt: 'desc' },
            },
          }
        },
      }
    });

    if (!artisan) {
      return NextResponse.json({ success: false, error: 'Artisan not found' }, { status: 404 });
    }

    return NextResponse.json({ success: true, artisan });
  } catch (error: any) {
    console.error('Error fetching artisan:', error);
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}

export async function PATCH(req: Request) {
  try {
    const body = await req.json();
    const existing = await prisma.artisanProfile.findFirst();

    if (!existing) {
      return NextResponse.json({ success: false, error: 'Artisan profile not found' }, { status: 404 });
    }

    const updateData: any = {};
    if (body.fullName !== undefined) updateData.fullName = body.fullName.trim();
    if (body.phone !== undefined) updateData.phone = body.phone.trim();
    if (body.upiId !== undefined) updateData.upiId = body.upiId.trim();
    if (body.state !== undefined) updateData.state = body.state.trim();
    if (body.district !== undefined) updateData.district = body.district.trim();
    if (body.primaryCraft !== undefined) updateData.primaryCraft = body.primaryCraft.trim();
    if (body.experienceYears !== undefined) updateData.experienceYears = parseInt(body.experienceYears, 10) || 0;
    if (body.bioEnglish !== undefined) updateData.bioEnglish = body.bioEnglish.trim();
    if (body.bioLocal !== undefined) updateData.bioLocal = body.bioLocal.trim();
    if (body.profileImage !== undefined) updateData.profileImage = body.profileImage.trim();
    if (body.pehchanCardNo !== undefined) updateData.pehchanCardNo = body.pehchanCardNo.trim();

    const updated = await prisma.artisanProfile.update({
      where: { id: existing.id },
      data: updateData,
      include: {
        user: true,
        products: {
          orderBy: { createdAt: 'desc' },
          include: {
            inquiries: true,
            reviews: {
              orderBy: { createdAt: 'desc' },
            },
          },
        },
      },
    });

    return NextResponse.json({ success: true, artisan: updated });
  } catch (error: any) {
    console.error('Error updating artisan profile:', error);
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
