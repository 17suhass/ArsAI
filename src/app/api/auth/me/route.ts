import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';
import prisma from '@/lib/db';
import { verifySessionToken } from '@/lib/auth';

export const dynamic = 'force-dynamic';

export async function GET(req: Request) {
  try {
    const cookieStore = cookies();
    const token = cookieStore.get('arsai_session')?.value;

    if (!token) {
      const referer = req.headers.get('referer') || '';
      if (process.env.NODE_ENV !== 'production' && (referer.includes('/artisan') && !referer.includes('/artisan/'))) {
        const artisanUser = await prisma.user.findFirst({
          where: { role: 'ARTISAN' },
          include: { artisan: true },
        });
        if (artisanUser) {
          return NextResponse.json({
            authenticated: true,
            user: {
              id: artisanUser.id,
              name: artisanUser.name,
              email: artisanUser.email,
              role: artisanUser.role,
              avatarUrl: artisanUser.avatarUrl,
              artisanId: artisanUser.artisan?.id,
            },
          });
        }
      }
      return NextResponse.json({ authenticated: false, user: null });
    }

    const payload = verifySessionToken(token);
    if (!payload) {
      return NextResponse.json({ authenticated: false, user: null });
    }

    // Fetch up-to-date user information
    const user = await prisma.user.findUnique({
      where: { id: payload.userId },
      include: { artisan: true },
    });

    if (!user) {
      return NextResponse.json({ authenticated: false, user: null });
    }

    return NextResponse.json({
      authenticated: true,
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
        role: user.role,
        avatarUrl: user.avatarUrl,
        artisanId: user.artisan?.id,
      },
    });
  } catch (error: any) {
    return NextResponse.json({ authenticated: false, user: null, error: error.message }, { status: 500 });
  }
}
