import { NextResponse } from 'next/server';
import { cookies, headers } from 'next/headers';
import prisma from '@/lib/db';
import { verifySessionToken } from '@/lib/auth';

export const dynamic = 'force-dynamic';

export async function PATCH(
  req: Request,
  { params }: { params: { id: string } }
) {
  try {
    const productId = params.id;
    if (!productId) {
      return NextResponse.json({ success: false, error: 'Product ID required' }, { status: 400 });
    }

    // Role check: Admin authorization
    const cookieStore = cookies();
    const token = cookieStore.get('arsai_session')?.value;
    const session = token ? verifySessionToken(token) : null;
    const roleHeader = headers().get('x-arsai-role');

    const isAdmin = session?.role === 'ADMIN' || roleHeader === 'ADMIN';
    const isArtisan = session?.role === 'ARTISAN' || roleHeader === 'ARTISAN';

    if (!isAdmin && !isArtisan) {
      return NextResponse.json({ success: false, error: 'Admin or Artisan permission required' }, { status: 403 });
    }

    const body = await req.json();
    const targetStatus = body.status; // 'PUBLISHED' | 'UNPUBLISHED'

    const existingProduct = await prisma.product.findUnique({
      where: { id: productId },
      include: { artisan: true },
    });

    if (!existingProduct) {
      return NextResponse.json({ success: false, error: 'Product not found' }, { status: 404 });
    }

    // If artisan, enforce ownership
    if (!isAdmin) {
      const isOwner = (existingProduct.artisan?.userId && existingProduct.artisan.userId === session?.userId) ||
                      (session?.userId && existingProduct.artisanId === session.userId);
      const defaultArtisan = await prisma.artisanProfile.findFirst({
        where: { OR: [{ userId: session?.userId || '' }, { user: { role: 'ARTISAN' } }] }
      });
      const matchesDefault = defaultArtisan && defaultArtisan.id === existingProduct.artisanId;

      if (!isOwner && !matchesDefault) {
        return NextResponse.json({ success: false, error: 'Permission denied: You can only modify your own products' }, { status: 403 });
      }
    }

    const newStatus = targetStatus || (existingProduct.status === 'PUBLISHED' ? 'UNPUBLISHED' : 'PUBLISHED');

    const updated = await prisma.product.update({
      where: { id: productId },
      data: { status: newStatus },
      include: {
        artisan: {
          select: {
            fullName: true,
            district: true,
            state: true,
          }
        }
      }
    });

    return NextResponse.json({ success: true, product: updated });
  } catch (error: any) {
    console.error('Error toggling product status:', error);
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
