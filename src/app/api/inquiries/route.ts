import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/lib/db';

export const dynamic = 'force-dynamic';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { productId, buyerName, buyerPhone, buyerEmail, bulkQuantity, intendedUse, message } = body;

    // Validation
    if (!productId || typeof productId !== 'string') {
      return NextResponse.json({ success: false, error: 'Valid Product ID is required.' }, { status: 400 });
    }

    if (!buyerName || typeof buyerName !== 'string' || buyerName.trim().length < 2) {
      return NextResponse.json({ success: false, error: 'Buyer full name is required.' }, { status: 400 });
    }

    const cleanPhone = (buyerPhone || '').replace(/\D/g, '');
    if (cleanPhone.length < 10) {
      return NextResponse.json(
        { success: false, error: 'A valid 10-digit mobile/WhatsApp number is required.' },
        { status: 400 }
      );
    }

    // Verify product exists and is published
    const product = await prisma.product.findUnique({
      where: { id: productId, status: 'PUBLISHED' },
      select: { id: true, title: true, artisanId: true }
    });

    if (!product) {
      return NextResponse.json({ success: false, error: 'Product not found or not published.' }, { status: 404 });
    }

    const parsedQty = bulkQuantity ? parseInt(String(bulkQuantity), 10) : null;
    const formattedMessage = [
      intendedUse ? `[Intended Channel: ${intendedUse}]` : null,
      message ? message.trim() : 'Bulk procurement inquiry requested via ArsAI B2B portal.'
    ].filter(Boolean).join('\n\n');

    const inquiry = await prisma.inquiry.create({
      data: {
        productId: product.id,
        buyerName: buyerName.trim(),
        buyerPhone: cleanPhone,
        buyerEmail: buyerEmail ? buyerEmail.trim() : null,
        type: 'B2B_BULK_RFQ',
        bulkQuantity: parsedQty && !isNaN(parsedQty) ? parsedQty : 25,
        message: formattedMessage,
        status: 'PENDING',
      },
      select: {
        id: true,
        productId: true,
        buyerName: true,
        type: true,
        bulkQuantity: true,
        status: true,
        createdAt: true,
      }
    });

    return NextResponse.json({
      success: true,
      message: 'Bulk procurement RFQ submitted successfully to artisan.',
      inquiry
    }, { status: 201 });
  } catch (error: unknown) {
    const errMsg = error instanceof Error ? error.message : 'Unknown server error';
    console.error('[/api/inquiries POST]', error);
    return NextResponse.json({ success: false, error: errMsg }, { status: 500 });
  }
}

export async function PATCH(req: NextRequest) {
  try {
    const body = await req.json();
    const { inquiryId, status } = body;

    if (!inquiryId || typeof inquiryId !== 'string') {
      return NextResponse.json({ success: false, error: 'Inquiry ID is required.' }, { status: 400 });
    }

    const validStatuses = ['PENDING', 'CONTACTED', 'CLOSED'];
    if (!status || !validStatuses.includes(status)) {
      return NextResponse.json(
        { success: false, error: `Status must be one of: ${validStatuses.join(', ')}` },
        { status: 400 }
      );
    }

    const updated = await prisma.inquiry.update({
      where: { id: inquiryId },
      data: { status },
    });

    return NextResponse.json({ success: true, inquiry: updated });
  } catch (error: unknown) {
    const errMsg = error instanceof Error ? error.message : 'Unknown server error';
    console.error('[/api/inquiries PATCH]', error);
    return NextResponse.json({ success: false, error: errMsg }, { status: 500 });
  }
}
