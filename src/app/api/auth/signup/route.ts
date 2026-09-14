import { NextResponse } from 'next/server';
import prisma from '@/lib/db';
import { hashPassword, createSessionToken } from '@/lib/auth';

export const dynamic = 'force-dynamic';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, password, role } = body;

    if (!name || !email || !password || !role) {
      return NextResponse.json(
        { success: false, error: 'Full name, email/phone, password, and account role are required.' },
        { status: 400 }
      );
    }

    // Strictly forbid public creation of ADMIN accounts
    if (role !== 'ARTISAN' && role !== 'BUYER') {
      return NextResponse.json(
        { success: false, error: 'Invalid role selection. Only Artisan and Buyer accounts can be registered.' },
        { status: 403 }
      );
    }

    if (password.length < 6) {
      return NextResponse.json(
        { success: false, error: 'Password must be at least 6 characters.' },
        { status: 400 }
      );
    }

    const cleanEmail = email.trim().toLowerCase();

    // Check if user already exists
    const existing = await prisma.user.findFirst({
      where: { email: cleanEmail },
    });

    if (existing) {
      return NextResponse.json(
        { success: false, error: 'An account with this email/mobile already exists. Please sign in.' },
        { status: 409 }
      );
    }

    const securePasswordHash = hashPassword(password);
    const defaultAvatar = role === 'ARTISAN'
      ? 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150'
      : 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150';

    const newUser = await prisma.user.create({
      data: {
        name: name.trim(),
        email: cleanEmail,
        role: role,
        passwordHash: securePasswordHash,
        avatarUrl: defaultAvatar,
      },
    });

    // If new user is an artisan, initialize their ArtisanProfile
    let artisanId: string | undefined;
    if (role === 'ARTISAN') {
      const profile = await prisma.artisanProfile.create({
        data: {
          userId: newUser.id,
          fullName: newUser.name,
          phone: cleanEmail.includes('@') ? '+91 98765 00000' : cleanEmail,
          state: 'Uttar Pradesh',
          district: 'Khurja',
          primaryCraft: 'Terracotta Pottery',
          experienceYears: 5,
          preferredLanguage: 'hi',
        },
      });
      artisanId = profile.id;
    }

    let redirectUrl = '/';
    if (role === 'ARTISAN') redirectUrl = '/artisan';

    const token = createSessionToken({
      userId: newUser.id,
      email: newUser.email,
      name: newUser.name,
      role: newUser.role as 'ARTISAN' | 'BUYER',
      avatarUrl: newUser.avatarUrl,
    });

    const safeUser = {
      id: newUser.id,
      name: newUser.name,
      email: newUser.email,
      role: newUser.role,
      avatarUrl: newUser.avatarUrl,
      artisanId,
    };

    const response = NextResponse.json({
      success: true,
      user: safeUser,
      redirectUrl,
    });

    response.cookies.set('arsai_session', token, {
      httpOnly: false,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      path: '/',
      maxAge: 7 * 24 * 60 * 60,
    });

    response.cookies.set('arsai_role', role, {
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      path: '/',
      maxAge: 7 * 24 * 60 * 60,
    });

    return response;
  } catch (error: any) {
    console.error('Signup error:', error);
    return NextResponse.json(
      { success: false, error: error.message || 'Account registration failed' },
      { status: 500 }
    );
  }
}
