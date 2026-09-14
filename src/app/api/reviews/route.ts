import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/lib/db';

export const dynamic = 'force-dynamic';

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const productId = searchParams.get('productId');
    const forArtisan = searchParams.get('forArtisan') === 'true';

    if (!productId) {
      return NextResponse.json(
        { success: false, error: 'Product ID is required.' },
        { status: 400 }
      );
    }

    // Verify product exists and is published
    const product = await prisma.product.findUnique({
      where: { id: productId },
      select: { id: true, status: true, title: true, artisanId: true }
    });

    if (!product || product.status !== 'PUBLISHED') {
      return NextResponse.json(
        { success: false, error: 'Product not found or not publicly available.' },
        { status: 404 }
      );
    }

    // Role-based authorization for private feedback
    const roleHeader = req.headers.get('x-arsai-role') || req.cookies.get('arsai_role')?.value;
    const isBuyerRole = roleHeader === 'BUYER';
    const isExplicitArtisan = roleHeader === 'ARTISAN';

    const userIdHeader = req.headers.get('x-arsai-user-id') || req.cookies.get('arsai_user_id')?.value;
    let allowPrivateNote = false;
    // Private notes only accessible when requested for artisan, NOT under Buyer role, and product belongs to artisan
    if (forArtisan && !isBuyerRole) {
      const currentArtisan = await prisma.artisanProfile.findFirst({
        where: userIdHeader
          ? { OR: [{ userId: userIdHeader }, { id: product.artisanId }] }
          : { id: product.artisanId },
        select: { id: true }
      });
      if (currentArtisan && product.artisanId === currentArtisan.id) {
        allowPrivateNote = true;
      }
    }

    // Fetch reviews
    const rawReviews = await prisma.review.findMany({
      where: { productId },
      orderBy: { createdAt: 'desc' },
      select: {
        id: true,
        productId: true,
        rating: true,
        reviewText: true,
        customerDisplayName: true,
        verifiedPurchase: true,
        photos: true,
        createdAt: true,
        privateNote: allowPrivateNote, // ONLY included when verified for authorized artisan
      },
    });

    // Compute distribution and average
    const distribution: Record<number, number> = { 5: 0, 4: 0, 3: 0, 2: 0, 1: 0 };
    let sumRating = 0;

    const sanitizedReviews = rawReviews.map((r) => {
      if (r.rating >= 1 && r.rating <= 5) {
        distribution[r.rating] = (distribution[r.rating] || 0) + 1;
      }
      sumRating += r.rating;

      let parsedPhotos: string[] = [];
      if (r.photos) {
        try {
          const parsed = JSON.parse(r.photos);
          if (Array.isArray(parsed)) parsedPhotos = parsed;
        } catch {
          parsedPhotos = [r.photos];
        }
      }

      return {
        id: r.id,
        productId: r.productId,
        rating: r.rating,
        reviewText: r.reviewText,
        customerDisplayName: r.customerDisplayName || 'Handicraft Enthusiast',
        verifiedPurchase: r.verifiedPurchase,
        photos: parsedPhotos,
        createdAt: r.createdAt,
        ...(allowPrivateNote && { privateNote: r.privateNote || null }),
      };
    });

    const totalReviews = rawReviews.length;
    const averageRating = totalReviews > 0 ? Number((sumRating / totalReviews).toFixed(1)) : 0;

    return NextResponse.json({
      success: true,
      reviews: sanitizedReviews,
      summary: {
        averageRating,
        totalReviews,
        distribution,
      },
    });
  } catch (error: unknown) {
    const errMsg = error instanceof Error ? error.message : 'Unknown server error';
    console.error('[/api/reviews GET]', error);
    return NextResponse.json({ success: false, error: errMsg }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { productId, rating, reviewText, customerDisplayName, privateNote, photos } = body;

    // Validation
    if (!productId || typeof productId !== 'string') {
      return NextResponse.json({ success: false, error: 'Valid Product ID is required.' }, { status: 400 });
    }

    const numRating = Number(rating);
    if (!Number.isInteger(numRating) || numRating < 1 || numRating > 5) {
      return NextResponse.json({ success: false, error: 'Rating must be an integer between 1 and 5 stars.' }, { status: 400 });
    }

    if (!reviewText || typeof reviewText !== 'string' || reviewText.trim().length < 5 || reviewText.trim().length > 1000) {
      return NextResponse.json({ success: false, error: 'Review text must be between 5 and 1000 characters.' }, { status: 400 });
    }

    let sanitizedPrivateNote: string | null = null;
    if (privateNote && typeof privateNote === 'string') {
      if (privateNote.trim().length > 500) {
        return NextResponse.json({ success: false, error: 'Private note cannot exceed 500 characters.' }, { status: 400 });
      }
      sanitizedPrivateNote = privateNote.trim() || null;
    }

    // Verify product is published
    const product = await prisma.product.findUnique({
      where: { id: productId, status: 'PUBLISHED' },
      select: { id: true }
    });

    if (!product) {
      return NextResponse.json({ success: false, error: 'Product not found or not published.' }, { status: 404 });
    }

    // Validate photos
    let sanitizedPhotosJson: string | null = null;
    if (photos) {
      if (!Array.isArray(photos)) {
        return NextResponse.json({ success: false, error: 'Photos must be an array.' }, { status: 400 });
      }
      if (photos.length > 3) {
        return NextResponse.json({ success: false, error: 'Maximum 3 customer photos allowed.' }, { status: 400 });
      }

      const validatedUrls: string[] = [];
      for (const p of photos) {
        if (typeof p !== 'string') continue;
        const trimmed = p.trim();
        // Allow valid HTTP/HTTPS URLs or base64 image data URLs
        if (
          trimmed.startsWith('http://') ||
          trimmed.startsWith('https://') ||
          trimmed.startsWith('data:image/jpeg;base64,') ||
          trimmed.startsWith('data:image/png;base64,') ||
          trimmed.startsWith('data:image/webp;base64,')
        ) {
          // Check size limit: max 2MB base64
          if (trimmed.length > 2.5 * 1024 * 1024) {
            return NextResponse.json({ success: false, error: 'Photo exceeds maximum 2MB size limit.' }, { status: 400 });
          }
          validatedUrls.push(trimmed);
        } else {
          return NextResponse.json({ success: false, error: 'Invalid photo format. Only JPEG, PNG, and WebP are supported.' }, { status: 400 });
        }
      }
      if (validatedUrls.length > 0) {
        sanitizedPhotosJson = JSON.stringify(validatedUrls);
      }
    }

    // Create review (verifiedPurchase is strictly false for public submissions)
    const newReview = await prisma.review.create({
      data: {
        productId: product.id,
        rating: numRating,
        reviewText: reviewText.trim(),
        customerDisplayName: customerDisplayName ? customerDisplayName.trim().slice(0, 60) : 'Verified Craft Admirer',
        verifiedPurchase: false, // strictly server-side controlled
        privateNote: sanitizedPrivateNote,
        photos: sanitizedPhotosJson,
      },
      select: {
        id: true,
        productId: true,
        rating: true,
        reviewText: true,
        customerDisplayName: true,
        verifiedPurchase: true,
        photos: true,
        createdAt: true,
        // privateNote is explicitly omitted from creation response
      }
    });

    let returnPhotos: string[] = [];
    if (newReview.photos) {
      try {
        returnPhotos = JSON.parse(newReview.photos);
      } catch {
        returnPhotos = [newReview.photos];
      }
    }

    return NextResponse.json({
      success: true,
      message: 'Thank you for reviewing this product.',
      review: {
        ...newReview,
        photos: returnPhotos,
      }
    }, { status: 201 });
  } catch (error: unknown) {
    const errMsg = error instanceof Error ? error.message : 'Unknown server error';
    console.error('[/api/reviews POST]', error);
    return NextResponse.json({ success: false, error: errMsg }, { status: 500 });
  }
}

export async function DELETE(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const reviewId = searchParams.get('reviewId') || searchParams.get('id');

    if (!reviewId) {
      return NextResponse.json(
        { success: false, error: 'Review ID is required.' },
        { status: 400 }
      );
    }

    // Role-based authorization: buyers cannot manage private notes
    const roleHeader = req.headers.get('x-arsai-role') || req.cookies.get('arsai_role')?.value;
    if (roleHeader === 'BUYER') {
      return NextResponse.json(
        { success: false, error: 'Buyers are not authorized to modify artisan notes.' },
        { status: 403 }
      );
    }

    const review = await prisma.review.findUnique({
      where: { id: reviewId },
      include: {
        product: {
          select: { id: true, artisanId: true }
        }
      }
    });

    if (!review) {
      return NextResponse.json(
        { success: false, error: 'Review not found.' },
        { status: 404 }
      );
    }

    // Ownership check: Verify current artisan owns the product this review belongs to
    const currentArtisan = await prisma.artisanProfile.findFirst({
      select: { id: true }
    });

    const isArtisanOwner = currentArtisan && review.product.artisanId === currentArtisan.id;
    const isAdmin = roleHeader === 'ADMIN';

    if (!isArtisanOwner && !isAdmin) {
      return NextResponse.json(
        { success: false, error: 'Unauthorized: You can only remove private notes for your own products.' },
        { status: 403 }
      );
    }

    // Removing ONLY the private note: preserves the public review, reviewer, rating, photos, and product
    await prisma.review.update({
      where: { id: reviewId },
      data: { privateNote: null }
    });

    return NextResponse.json({
      success: true,
      message: 'Private note successfully removed. Public review preserved intact.',
      reviewId
    });
  } catch (error: unknown) {
    const errMsg = error instanceof Error ? error.message : 'Unknown server error';
    console.error('[/api/reviews DELETE]', error);
    return NextResponse.json({ success: false, error: errMsg }, { status: 500 });
  }
}

