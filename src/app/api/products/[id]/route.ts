import { NextRequest, NextResponse } from 'next/server';
import { cookies, headers } from 'next/headers';
import prisma from '@/lib/db';
import { verifySessionToken } from '@/lib/auth';

export const dynamic = 'force-dynamic';

export async function GET(
  _req: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const product = await prisma.product.findUnique({
      where: { id: params.id, status: 'PUBLISHED' },
      include: {
        artisan: {
          select: {
            id: true,
            fullName: true,       // public: artisan trade name
            district: true,       // public: regional context
            state: true,          // public: regional context
            primaryCraft: true,   // public: craft specialty
            experienceYears: true,// public: credibility signal
            profileImage: true,   // public: artisan photo
            bioEnglish: true,     // public: artisan bio
            pehchanCardNo: true,  // used server-side only to derive isPehchanVerified
            // phone — intentionally excluded (server-side WhatsApp redirect only)
            // upiId — intentionally excluded (never exposed publicly)
          },
        },
      },
    });

    if (!product) {
      return NextResponse.json(
        { success: false, error: 'Product not found.' },
        { status: 404 }
      );
    }

    // Strip pehchanCardNo value completely — send only boolean isPehchanVerified
    const { artisan, ...productRest } = product;
    let safeArtisan = null;
    if (artisan) {
      const { pehchanCardNo, ...artisanRest } = artisan;
      safeArtisan = {
        ...artisanRest,
        isPehchanVerified: !!pehchanCardNo,
      };
    }

    return NextResponse.json({ success: true, product: { ...productRest, artisan: safeArtisan } });
  } catch (error: unknown) {
    const msg = error instanceof Error ? error.message : 'Unknown error';
    console.error('[/api/products/[id]]', error);
    return NextResponse.json({ success: false, error: msg }, { status: 500 });
  }
}

export async function PATCH(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const cookieStore = cookies();
    const token = cookieStore.get('arsai_session')?.value;
    const session = token ? verifySessionToken(token) : null;
    const roleHeader = headers().get('x-arsai-role') || req.headers.get('x-arsai-role');
    const userIdHeader = headers().get('x-arsai-user-id') || req.headers.get('x-arsai-user-id');

    const role = session?.role || roleHeader;
    const userId = session?.userId || userIdHeader;
    const isAdmin = role === 'ADMIN';
    const isArtisan = role === 'ARTISAN';

    if (!isAdmin && !isArtisan) {
      return NextResponse.json(
        { success: false, error: 'Authentication required. Only artisans and admins can modify products.' },
        { status: 401 }
      );
    }

    const product = await prisma.product.findUnique({
      where: { id: params.id },
      include: { artisan: true },
    });

    if (!product) {
      return NextResponse.json({ success: false, error: 'Product not found.' }, { status: 404 });
    }

    // Ownership check for artisans
    if (!isAdmin) {
      const isOwner = (product.artisan?.userId && product.artisan.userId === userId) ||
                      (userId && product.artisanId === userId);
      // Fallback: if single active artisan profile
      const defaultArtisan = await prisma.artisanProfile.findFirst({
        where: { OR: [{ userId: userId || '' }, { user: { role: 'ARTISAN' } }] }
      });
      const matchesDefault = defaultArtisan && defaultArtisan.id === product.artisanId;

      if (!isOwner && !matchesDefault) {
        return NextResponse.json(
          { success: false, error: 'Unauthorized: You can only modify your own products.' },
          { status: 403 }
        );
      }
    }

    const body = await req.json();
    const targetStatus = body.status; // 'PUBLISHED' | 'UNPUBLISHED' | 'DRAFT'

    if (!targetStatus || !['PUBLISHED', 'UNPUBLISHED', 'DRAFT'].includes(targetStatus)) {
      return NextResponse.json({ success: false, error: 'Invalid product status.' }, { status: 400 });
    }

    const updated = await prisma.product.update({
      where: { id: params.id },
      data: { status: targetStatus },
    });

    return NextResponse.json({
      success: true,
      message: targetStatus === 'UNPUBLISHED'
        ? 'Product removed from marketplace (unpublished).'
        : 'Product published to marketplace.',
      product: updated,
    });
  } catch (error: unknown) {
    const msg = error instanceof Error ? error.message : 'Unknown error';
    console.error('[/api/products/[id] PATCH]', error);
    return NextResponse.json({ success: false, error: msg }, { status: 500 });
  }
}

export async function DELETE(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const cookieStore = cookies();
    const token = cookieStore.get('arsai_session')?.value;
    const session = token ? verifySessionToken(token) : null;
    const roleHeader = headers().get('x-arsai-role') || req.headers.get('x-arsai-role');
    const userIdHeader = headers().get('x-arsai-user-id') || req.headers.get('x-arsai-user-id');

    const role = session?.role || roleHeader;
    const userId = session?.userId || userIdHeader;
    const isAdmin = role === 'ADMIN';
    const isArtisan = role === 'ARTISAN';

    if (!isAdmin && !isArtisan) {
      return NextResponse.json(
        { success: false, error: 'Authentication required.' },
        { status: 401 }
      );
    }

    const product = await prisma.product.findUnique({
      where: { id: params.id },
      include: { artisan: true },
    });

    if (!product) {
      return NextResponse.json({ success: false, error: 'Product not found.' }, { status: 404 });
    }

    // Ownership check for artisans
    if (!isAdmin) {
      const isOwner = (product.artisan?.userId && product.artisan.userId === userId) ||
                      (userId && product.artisanId === userId);
      const defaultArtisan = await prisma.artisanProfile.findFirst({
        where: { OR: [{ userId: userId || '' }, { user: { role: 'ARTISAN' } }] }
      });
      const matchesDefault = defaultArtisan && defaultArtisan.id === product.artisanId;

      if (!isOwner && !matchesDefault) {
        return NextResponse.json(
          { success: false, error: 'Unauthorized: You can only remove your own crafts.' },
          { status: 403 }
        );
      }
    }

    // DRAFT products can be cleanly deleted
    if (product.status === 'DRAFT') {
      await prisma.product.delete({ where: { id: params.id } });
      return NextResponse.json({
        success: true,
        message: 'Draft product removed cleanly.',
      });
    }

    // PUBLISHED products must NOT be permanently deleted — they are unpublished
    // Check if query param or header specifically asks to unpublish
    const updated = await prisma.product.update({
      where: { id: params.id },
      data: { status: 'UNPUBLISHED' },
    });

    return NextResponse.json({
      success: true,
      message: 'Product removed from marketplace (unpublished). Historical orders and reviews have been preserved.',
      product: updated,
    });
  } catch (error: unknown) {
    const msg = error instanceof Error ? error.message : 'Unknown error';
    console.error('[/api/products/[id] DELETE]', error);
    return NextResponse.json({ success: false, error: msg }, { status: 500 });
  }
}
