import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';
import prisma from '@/lib/db';
import { verifySessionToken } from '@/lib/auth';

export const dynamic = 'force-dynamic';

function getSessionUser() {
  const cookieStore = cookies();
  const token = cookieStore.get('arsai_session')?.value;
  if (!token) return null;
  return verifySessionToken(token);
}

export async function GET(req: Request) {
  try {
    const session = getSessionUser();
    if (!session) {
      return NextResponse.json({ success: false, error: 'Unauthorized' }, { status: 401 });
    }

    const whereClause: any = {};
    if (session.role !== 'ADMIN') {
      whereClause.buyerId = session.userId;
    }

    const orders = await prisma.order.findMany({
      where: whereClause,
      include: {
        items: {
          include: {
            product: {
              select: {
                id: true,
                title: true,
                titleHindi: true,
                primaryImageUrl: true,
                craftCategory: true,
                artisan: {
                  select: {
                    id: true,
                    fullName: true,
                    district: true,
                    state: true,
                  }
                }
              }
            }
          }
        }
      },
      orderBy: { createdAt: 'desc' },
    });

    return NextResponse.json({ success: true, orders });
  } catch (error: any) {
    console.error('Error fetching orders:', error);
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}

export async function POST(req: Request) {
  try {
    const session = getSessionUser();
    if (!session) {
      return NextResponse.json({ success: false, error: 'Authentication required to place an order' }, { status: 401 });
    }

    const body = await req.json();
    const { 
      items, 
      deliveryName, 
      deliveryPhone, 
      deliveryAddress, 
      deliveryCity, 
      deliveryState, 
      deliveryPincode, 
      paymentMethod = 'DEMO_PAYMENT' 
    } = body;

    // Field validations
    if (!items || !Array.isArray(items) || items.length === 0) {
      return NextResponse.json({ success: false, error: 'Cart items cannot be empty' }, { status: 400 });
    }

    if (!deliveryName?.trim() || !deliveryPhone?.trim() || !deliveryAddress?.trim() || !deliveryCity?.trim() || !deliveryState?.trim() || !deliveryPincode?.trim()) {
      return NextResponse.json({ success: false, error: 'Please provide all required delivery details' }, { status: 400 });
    }

    const productIds = items.map((i: any) => i.productId);
    const dbProducts = await prisma.product.findMany({
      where: {
        id: { in: productIds },
        status: 'PUBLISHED',
      },
    });

    if (dbProducts.length !== productIds.length) {
      return NextResponse.json({ success: false, error: 'One or more items in your cart are no longer available.' }, { status: 400 });
    }

    const productMap = new Map(dbProducts.map(p => [p.id, p]));

    let calculatedSubtotal = 0;
    const orderItemData: Array<{ productId: string; quantity: number; unitPrice: number; subtotal: number }> = [];

    for (const item of items) {
      const dbProd = productMap.get(item.productId);
      if (!dbProd) continue;

      const qty = Math.max(1, parseInt(item.quantity, 10) || 1);
      const unitPrice = dbProd.finalListingPrice; // Server-side validated price snapshot
      const lineSubtotal = unitPrice * qty;

      calculatedSubtotal += lineSubtotal;
      orderItemData.push({
        productId: dbProd.id,
        quantity: qty,
        unitPrice,
        subtotal: lineSubtotal,
      });
    }

    const deliveryFee = 0; // Free delivery for SIH platform
    const calculatedTotal = calculatedSubtotal + deliveryFee;

    // Unique order number: ARSAI-XXXXX
    const randomCode = Math.floor(10000 + Math.random() * 90000);
    const orderNumber = `ARSAI-${randomCode}`;

    const order = await prisma.order.create({
      data: {
        orderNumber,
        buyerId: session.userId,
        status: 'PLACED',
        paymentStatus: paymentMethod === 'COD' ? 'PENDING' : 'PAID',
        paymentMethod,
        subtotal: calculatedSubtotal,
        deliveryFee,
        total: calculatedTotal,
        deliveryName: deliveryName.trim(),
        deliveryPhone: deliveryPhone.trim(),
        deliveryAddress: deliveryAddress.trim(),
        deliveryCity: deliveryCity.trim(),
        deliveryState: deliveryState.trim(),
        deliveryPincode: deliveryPincode.trim(),
        items: {
          create: orderItemData.map(item => ({
            productId: item.productId,
            quantity: item.quantity,
            unitPrice: item.unitPrice,
            subtotal: item.subtotal,
          })),
        },
      },
      include: {
        items: {
          include: {
            product: true,
          }
        }
      }
    });

    return NextResponse.json({ success: true, order });
  } catch (error: any) {
    console.error('Error creating order:', error);
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
