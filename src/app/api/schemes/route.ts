import { NextResponse } from 'next/server';
import prisma from '@/lib/db';

export const dynamic = 'force-dynamic';

export async function GET() {
  try {
    const schemes = await prisma.governmentScheme.findMany({
      orderBy: { code: 'asc' },
    });
    return NextResponse.json({ success: true, schemes });
  } catch (error: any) {
    console.error('Error fetching schemes:', error);
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
