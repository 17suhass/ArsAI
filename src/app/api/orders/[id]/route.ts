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

export async function GET(
  req: Request,
  { params }: { params: { id: string } }
) {
  try {
    const session = getSessionUser();
    if (!session) {
      return NextResponse.json({ success: false, error: 'Unauthorized' }, { status: 401 });
    }

    const order = await prisma.order.findFirst({
      where: {
        OR: [
          { id: params.id },
          { orderNumber: params.id }
        ],
        ...(session.role !== 'ADMIN' ? { buyerId: session.userId } : {}),
      },
      include: {
        items: {
          include: {
            product: {
              include: {
                artisan: {
                  select: {
                    id: true,
                    fullName: true,
                    district: true,
                    state: true,
                    primaryCraft: true,
                  }
                }
              }
            }
          }
        }
      }
    });

    if (!order) {
      return NextResponse.json({ success: false, error: 'Order not found or unauthorized' }, { status: 404 });
    }

    return NextResponse.json({ success: true, order });
  } catch (error: any) {
    console.error('Error fetching order detail:', error);
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
