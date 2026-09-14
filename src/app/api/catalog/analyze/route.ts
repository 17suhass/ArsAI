import { NextRequest, NextResponse } from 'next/server';
import { analyzeCraftWithGemini, GeminiConfigError, GeminiParseError } from '@/lib/gemini';

export const dynamic = 'force-dynamic';
export const maxDuration = 60;

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData();
    const imageFile = formData.get('image') as File | null;
    const imageUrlParam = (formData.get('imageUrl') as string) || '';
    const transcript = (formData.get('transcript') as string) || '';
    const notes = (formData.get('notes') as string) || '';
    const language = (formData.get('language') as 'en' | 'hi') || 'en';

    let imageBase64 = '';
    let mimeType = 'image/jpeg';
    let finalImageUrl = '';

    if (imageFile && imageFile.size > 0) {
      const maxSizeBytes = 5 * 1024 * 1024; // 5 MB
      if (imageFile.size > maxSizeBytes) {
        return NextResponse.json(
          { success: false, error: 'Image is too large. Please use a photo under 5 MB.', code: 'IMAGE_TOO_LARGE' },
          { status: 400 }
        );
      }

      const allowedTypes = ['image/jpeg', 'image/jpg', 'image/png', 'image/webp', 'image/heic'];
      if (!allowedTypes.includes(imageFile.type)) {
        return NextResponse.json(
          { success: false, error: 'Unsupported image format. Use JPG, PNG, or WebP.', code: 'INVALID_IMAGE_TYPE' },
          { status: 400 }
        );
      }

      const arrayBuffer = await imageFile.arrayBuffer();
      imageBase64 = Buffer.from(arrayBuffer).toString('base64');
      mimeType = imageFile.type;
      finalImageUrl = `data:${imageFile.type};base64,${imageBase64}`;
    } else if (imageUrlParam) {
      if (imageUrlParam.startsWith('data:image/')) {
        const matches = imageUrlParam.match(/^data:(image\/[a-zA-Z0-9.+_-]+);base64,(.+)$/);
        if (matches) {
          mimeType = matches[1];
          imageBase64 = matches[2];
          finalImageUrl = imageUrlParam;
        } else {
          return NextResponse.json(
            { success: false, error: 'Invalid base64 image data.', code: 'INVALID_IMAGE' },
            { status: 400 }
          );
        }
      } else if (imageUrlParam.startsWith('http://') || imageUrlParam.startsWith('https://')) {
        try {
          const res = await fetch(imageUrlParam);
          if (!res.ok) throw new Error(`HTTP ${res.status}`);
          const ab = await res.arrayBuffer();
          imageBase64 = Buffer.from(ab).toString('base64');
          mimeType = res.headers.get('content-type') || 'image/jpeg';
          finalImageUrl = imageUrlParam;
        } catch (fetchErr: any) {
          console.error('Failed to fetch remote preset image:', fetchErr);
          return NextResponse.json(
            { success: false, error: 'Could not load preset image. Please upload a photo directly.', code: 'IMAGE_FETCH_FAILED' },
            { status: 400 }
          );
        }
      } else {
        return NextResponse.json(
          { success: false, error: 'Unrecognized image format.', code: 'INVALID_IMAGE' },
          { status: 400 }
        );
      }
    } else {
      return NextResponse.json(
        { success: false, error: 'A product photo is required. Please upload or capture an image.', code: 'NO_IMAGE' },
        { status: 400 }
      );
    }

    const draft = await analyzeCraftWithGemini(
      imageBase64,
      mimeType,
      transcript.trim(),
      notes.trim(),
      language,
      finalImageUrl
    );

    return NextResponse.json({ success: true, draft });
  } catch (err: unknown) {
    console.error('[/api/catalog/analyze]', err);

    if (err instanceof GeminiConfigError) {
      return NextResponse.json(
        { success: false, error: err.message, code: err.code },
        { status: 503 }
      );
    }
    if (err instanceof GeminiParseError) {
      return NextResponse.json(
        { success: false, error: err.message, code: err.code },
        { status: 422 }
      );
    }

    const message = err instanceof Error ? err.message : 'An unexpected error occurred.';
    return NextResponse.json(
      { success: false, error: `AI analysis failed: ${message}. Please try again.`, code: 'UNKNOWN' },
      { status: 500 }
    );
  }
}
