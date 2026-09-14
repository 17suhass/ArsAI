import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/lib/db';

export const dynamic = 'force-dynamic';

export async function GET(
  _req: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const product = await prisma.product.findUnique({
      where: { id: params.id, status: 'PUBLISHED' },
      select: {
        title: true,
        finalListingPrice: true,
        artisan: {
          select: {
            fullName: true,
            phone: true, // read server-side only — never sent to browser as JSON
          },
        },
      },
    });

    if (!product || !product.artisan) {
      return NextResponse.json({ success: false, error: 'Product not found.' }, { status: 404 });
    }

    const phone = (product.artisan.phone || '919876543210').replace(/\D/g, '');
    const message = encodeURIComponent(
      `Namaste ${product.artisan.fullName}, I am interested in purchasing your "${product.title}" listed on ArsAI for ₹${product.finalListingPrice}. Please share order details.`
    );

    return NextResponse.redirect(`https://wa.me/${phone}?text=${message}`, { status: 302 });
  } catch (error: unknown) {
    const msg = error instanceof Error ? error.message : 'Unknown error';
    console.error('[/api/contact/whatsapp/[id]]', error);
    return NextResponse.json({ success: false, error: msg }, { status: 500 });
  }
}
