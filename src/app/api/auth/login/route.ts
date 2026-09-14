import { NextResponse } from 'next/server';
import prisma from '@/lib/db';
import { verifyPassword, createSessionToken } from '@/lib/auth';

export const dynamic = 'force-dynamic';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { email, password } = body;

    if (!email || !password) {
      return NextResponse.json(
        { success: false, error: 'Email/phone and password are required.' },
        { status: 400 }
      );
    }

    const cleanEmail = email.trim().toLowerCase();
    const user = await prisma.user.findFirst({
      where: {
        OR: [
          { email: cleanEmail },
          // Allow login by raw email prefix e.g. ramesh or aditi for demo convenience
          { email: `${cleanEmail}@arsai.org` },
        ],
      },
      include: { artisan: true },
    });

    if (!user) {
      return NextResponse.json(
        { success: false, error: 'Invalid credentials. No user found with this email/mobile.' },
        { status: 401 }
      );
    }

    // Verify password against stored secure hash
    const isValid = verifyPassword(password, user.passwordHash);
    if (!isValid) {
      return NextResponse.json(
        { success: false, error: 'Invalid email or password.' },
        { status: 401 }
      );
    }

    const role = user.role as 'ARTISAN' | 'BUYER' | 'ADMIN';
    let redirectUrl = '/marketplace';
    if (role === 'ARTISAN') redirectUrl = '/artisan';
    if (role === 'ADMIN') redirectUrl = '/admin';
    if (role === 'BUYER') redirectUrl = '/marketplace';

    const token = createSessionToken({
      userId: user.id,
      email: user.email,
      name: user.name,
      role: role,
      avatarUrl: user.avatarUrl,
    });

    const safeUser = {
      id: user.id,
      name: user.name,
      email: user.email,
      role: user.role,
      avatarUrl: user.avatarUrl,
      artisanId: user.artisan?.id,
    };

    const response = NextResponse.json({
      success: true,
      user: safeUser,
      redirectUrl,
    });

    // Set secure auth cookies
    response.cookies.set('arsai_session', token, {
      httpOnly: false, // Accessible to client context for fast state sync
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      path: '/',
      maxAge: 7 * 24 * 60 * 60, // 7 days
    });

    response.cookies.set('arsai_role', role, {
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      path: '/',
      maxAge: 7 * 24 * 60 * 60,
    });

    return response;
  } catch (error: any) {
    console.error('Login error:', error);
    return NextResponse.json(
      { success: false, error: error.message || 'Authentication failed' },
      { status: 500 }
    );
  }
}
