/**
 * src/lib/gemini.ts
 * Server-side Gemini AI pipeline for ArsAI Phase 3.
 * MUST only be imported from server-side code (API routes).
 * The API key is read from process.env — NEVER exposed to the client.
 */

import { GoogleGenAI } from '@google/genai';
import type { AiCatalogDraft, AiPricingDraft } from './types';

const MODEL = process.env.GEMINI_MODEL || 'gemini-3.5-flash';

function getAiClient(): GoogleGenAI {
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey || apiKey === 'your_gemini_api_key_here') {
    throw new GeminiConfigError(
      'GEMINI_API_KEY is not configured. Add it to your .env.local file. ' +
      'Get a free key at: https://aistudio.google.com/apikey'
    );
  }
  return new GoogleGenAI({ apiKey });
}

export class GeminiConfigError extends Error {
  readonly code = 'GEMINI_CONFIG_ERROR';
  constructor(message: string) {
    super(message);
    this.name = 'GeminiConfigError';
  }
}

export class GeminiParseError extends Error {
  readonly code = 'GEMINI_PARSE_ERROR';
  constructor(message: string) {
    super(message);
    this.name = 'GeminiParseError';
  }
}

export class GeminiServiceBusyError extends Error {
  readonly code = 'SERVICE_BUSY';
  constructor(message: string = 'AI service is temporarily busy. Your information is safe. Please try again shortly.') {
    super(message);
    this.name = 'GeminiServiceBusyError';
  }
}

export class GeminiQuotaError extends Error {
  readonly code = 'QUOTA_EXCEEDED';
  constructor(message: string = 'AI service rate limit or quota reached. Please try again later.') {
    super(message);
    this.name = 'GeminiQuotaError';
  }
}

export class GeminiNetworkError extends Error {
  readonly code = 'NETWORK_ERROR';
  constructor(message: string = 'Network error connecting to AI service. Please check your connection and try again.') {
    super(message);
    this.name = 'GeminiNetworkError';
  }
}

function buildPrompt(transcript: string, notes: string, language: 'en' | 'hi'): string {
  const langLabel = language === 'hi' ? 'Hindi' : 'English';
  return `You are an expert in Indian traditional handicrafts and artisanal products.
Help a marginalized artisan create a professional digital catalog for their handmade product.

ARTISAN CONTEXT:
- Voice/Text: "${transcript || 'Not provided'}"
- Notes: "${notes || 'Not provided'}"
- Language: ${langLabel}

RULES:
1. Be honest about confidence. Do not claim certainty on things you cannot determine.
2. Do NOT fabricate GI tags or certifications.
3. Be warm, authentic, and highlight craftsmanship.
4. Return ONLY valid JSON — no markdown fences.

Return a JSON object with these exact keys:
{
  "craftName": "Short common name (English)",
  "craftCategory": "Pottery and Ceramics | Textile and Weaving | Wood Carving | Metal Craft | Painting and Art | Jewelry and Accessories | Bamboo and Cane | Leather Craft | Stone Craft | Other",
  "materials": "Comma-separated materials",
  "colors": "Comma-separated colors",
  "region": "Region/tradition or Traditional Indian Craft",
  "confidence": "high | medium | low",
  "titleEn": "Marketplace title English max 80 chars",
  "titleHi": "Marketplace title Hindi max 80 chars",
  "descriptionEn": "2-3 sentence description English",
  "descriptionHi": "2-3 sentence description Hindi",
  "culturalStory": "2-3 sentences educational cultural context. No invented histories.",
  "tags": "8-10 comma-separated tags",
  "qualityScore": <0-100 integer: +40 image clear, +20 product identifiable, +20 description present, +10 materials mentioned, +10 use case. Deduct for blurry or vague>,
  "qualityFeedback": "1-2 sentences improvement advice"
}

Return ONLY the JSON.`;
}

function sanitize(raw: unknown, imageUrl: string): AiCatalogDraft {
  if (typeof raw !== 'object' || raw === null) {
    throw new GeminiParseError('AI returned non-object response');
  }
  const o = raw as Record<string, unknown>;
  const s = (k: string, fb: string) =>
    typeof o[k] === 'string' && (o[k] as string).trim() ? (o[k] as string).trim() : fb;
  const n = (k: string, fb: number) =>
    typeof o[k] === 'number' && isFinite(o[k] as number)
      ? Math.max(0, Math.min(100, Math.round(o[k] as number)))
      : fb;
  const rawC = o['confidence'];
  const confidence: 'high' | 'medium' | 'low' =
    rawC === 'high' || rawC === 'medium' || rawC === 'low' ? rawC : 'medium';
  return {
    craftName:       s('craftName',       'Handcrafted Product'),
    craftCategory:   s('craftCategory',   'Other'),
    materials:       s('materials',       'Natural materials'),
    colors:          s('colors',          'Natural tones'),
    region:          s('region',          'Traditional Indian Craft'),
    confidence,
    titleEn:         s('titleEn',         'Handcrafted Artisan Product'),
    titleHi:         s('titleHi',         '\u0939\u0938\u094d\u0924\u0928\u093f\u0930\u094d\u092e\u093f\u0924 \u0936\u093f\u0932\u094d\u092a \u0909\u0924\u094d\u092a\u093e\u0926'),
    descriptionEn:   s('descriptionEn',   'A beautifully handcrafted product made with traditional techniques.'),
    descriptionHi:   s('descriptionHi',   '\u092a\u093e\u0930\u0902\u092a\u0930\u093f\u0915 \u0924\u0915\u0928\u0940\u0915\u094b\u0902 \u0938\u0947 \u0928\u093f\u0930\u094d\u092e\u093f\u0924 \u090f\u0915 \u0938\u0941\u0902\u0926\u0930 \u0939\u0938\u094d\u0924\u0928\u093f\u0930\u094d\u092e\u093f\u0924 \u0936\u093f\u0932\u094d\u092a \u0909\u0924\u094d\u092a\u093e\u0926\u0964'),
    culturalStory:   s('culturalStory',   'This craft represents a rich tradition of Indian artisanship passed down through generations.'),
    tags:            s('tags',            'handmade, artisan, traditional, Indian craft'),
    qualityScore:    n('qualityScore',     65),
    qualityFeedback: s('qualityFeedback', 'Add more details about materials and dimensions to improve your listing.'),
    imageUrl,
  };
}

export async function analyzeCraftWithGemini(
  imageBase64: string,
  mimeType: string,
  transcript: string,
  notes: string,
  language: 'en' | 'hi',
  imageUrl: string
): Promise<AiCatalogDraft> {
  const ai = getAiClient();
  let response: any = null;
  let attempts = 0;
  const maxAttempts = 3;

  while (attempts < maxAttempts) {
    try {
      attempts++;
      response = await ai.models.generateContent({
        model: MODEL,
        contents: [
          {
            role: 'user',
            parts: [
              { text: buildPrompt(transcript, notes, language) },
              { inlineData: { mimeType, data: imageBase64 } },
            ],
          },
        ],
        config: {
          temperature: 0.2,
          maxOutputTokens: 4096,
          responseMimeType: 'application/json',
        },
      });
      break;
    } catch (err: any) {
      const errMsg = String(err?.message || err);
      const isTransient = errMsg.includes('503') || errMsg.includes('429') || errMsg.includes('high demand') || errMsg.includes('UNAVAILABLE');
      if (isTransient && attempts < maxAttempts) {
        console.warn(`[gemini] Transient 503 spike, retrying attempt ${attempts + 1} of ${maxAttempts}...`);
        await new Promise((resolve) => setTimeout(resolve, 2000 * attempts));
        continue;
      }
      throw err;
    }
  }

  const rawText = response.text;
  if (!rawText || !rawText.trim()) {
    throw new GeminiParseError('Gemini returned an empty response. Please try again.');
  }

  const firstBrace = rawText.indexOf('{');
  const lastBrace = rawText.lastIndexOf('}');
  const cleaned = (firstBrace !== -1 && lastBrace !== -1 && lastBrace > firstBrace)
    ? rawText.slice(firstBrace, lastBrace + 1).trim()
    : rawText.replace(/^```(?:json)?\s*/i, '').replace(/\s*```\s*$/, '').trim();

  let parsed: unknown;
  try {
    parsed = JSON.parse(cleaned);
  } catch {
    console.error('[gemini] Parse failed. Raw:', rawText.slice(0, 400));
    throw new GeminiParseError(
      'Could not understand the AI response. Try again with a clearer image or description.'
    );
  }
  return sanitize(parsed, imageUrl);
}

// ─────────────────────────────────────────────────────────────────────────────
// Phase 4: Fair Pricing Estimate with Market Comparables & Sanity Checks
// ─────────────────────────────────────────────────────────────────────────────

import {
  getComparableMarketBenchmarks,
  performPriceSanityCheck,
  type MarketBenchmarkResult,
} from './marketComparables';

export interface PricingInput {
  title: string;
  craftCategory: string;
  materials: string;
  dimensions?: string | null;
  colors?: string | null;
  region?: string | null;
  artisanCostPrice: number;        // artisan's stated base production cost
  artisanExpectedPrice?: number;   // artisan's expected selling price
  estimatedLaborDays?: number | null;
  state?: string;                  // artisan's state/region
  district?: string;
  experienceYears?: number;
  descriptionEnglish?: string;
  artisanReputationTier?: string;
}

function buildPricingPrompt(p: PricingInput, benchmark: MarketBenchmarkResult): string {
  return `You are an expert in Indian traditional handicraft market pricing. Help a rural artisan understand a fair, market-realistic price range for their handmade craft product.

PRODUCT INFORMATION:
- Title: ${p.title}
- Craft Category: ${p.craftCategory}
- Materials Used: ${p.materials}
- Dimensions: ${p.dimensions || 'Not specified'}
- Colors: ${p.colors || 'Not specified'}
- Craft Region/Tradition: ${p.region || 'Traditional Indian Craft'}
- Artisan's State: ${p.state || 'India'}
- Artisan's District: ${p.district || 'Not specified'}
- Artisan's Craft Experience: ${p.experienceYears ?? 'Not specified'} years
- Artisan Reputation / Accreditation: ${p.artisanReputationTier || 'Generational Artisan'}
- Artisan Stated Base Production Cost (materials + basic labor): ₹${p.artisanCostPrice}
- Artisan Expected Selling Price: ${p.artisanExpectedPrice ? `₹${p.artisanExpectedPrice}` : 'Not specified'}
- Estimated Labor Days: ${p.estimatedLaborDays ?? 'Not specified'}
- Description: ${p.descriptionEnglish || 'Not provided'}

REALISTIC CURRENT INDIAN MARKET BENCHMARKS:
- Identified Product Type: ${benchmark.productType}
- Current Comparable Indian Marketplace Range: ₹${benchmark.marketRangeMin} – ₹${benchmark.marketRangeMax}
- Typical Fair Retail Anchor: ₹${benchmark.typicalRetailFair}
- Craftsmanship & Material Context: ${benchmark.craftsmanshipNote}
- Sample Comparable Market Listings:
${benchmark.comparables.map((c) => `  * ${c.title} (${c.priceRange}) [Source: ${c.source}]`).join('\n')}

CRITICAL PRICING RULES:
1. Base your estimate on real Indian marketplace realities and the comparable evidence above.
2. DO NOT over-inflate prices for everyday utilitarian items. If the product is a basic everyday pen, wooden tool, or simple clay pot, recommend an accessible price within or close to the comparable market range (₹${benchmark.marketRangeMin}–₹${benchmark.marketRangeMax}), NOT an exorbitant collector price.
3. If the product is an intricate masterwork or uses luxury materials, price it higher according to its true complexity.
4. minPrice must be >= artisanCostPrice (never below production cost).
5. All prices must be in Indian Rupees (₹). Return numbers only (no currency symbols in JSON values).
6. Be honest about uncertainty. The disclaimer must always state this is an AI estimate, not a guaranteed market price.
7. Return ONLY valid JSON — no markdown fences, no explanation outside the JSON.

Return a JSON object with EXACTLY these keys:
{
  "minPrice": <number: minimum suggested price in INR — must be >= artisanCostPrice>,
  "fairPrice": <number: fair/recommended price in INR — grounded in realistic market comparables>,
  "premiumPrice": <number: premium price in INR for quality-conscious or boutique buyers>,
  "explanation": "2-3 sentences explaining why this range was suggested, referencing the specific category, materials, and regional comparable prices.",
  "factors": ["factor1", "factor2", "factor3", "factor4"],
  "disclaimer": "This is an AI-assisted price estimate based on the product information you provided and current Indian handicraft market comparables. It is NOT a guaranteed market price. You are always in 100% control of your final listing price."
}

The "factors" array must list 4-6 specific factors considered (e.g. "craft category: ${p.craftCategory}", "materials used", "market comparable range: ₹${benchmark.marketRangeMin}–₹${benchmark.marketRangeMax}", "production cost: ₹${p.artisanCostPrice}").

Return ONLY the JSON.`;
}

function sanitizePricing(raw: unknown, artisanCostPrice: number): {
  minPrice: number;
  fairPrice: number;
  premiumPrice: number;
  explanation: string;
  factors: string[];
  disclaimer: string;
} {
  if (typeof raw !== 'object' || raw === null) {
    throw new GeminiParseError('AI pricing returned non-object response');
  }
  const o = raw as Record<string, unknown>;

  const safeNum = (k: string, fallback: number): number => {
    const v = o[k];
    if (typeof v === 'number' && isFinite(v) && v >= 0) return Math.round(v);
    if (typeof v === 'string') {
      const n = parseFloat(v.replace(/[^0-9.]/g, ''));
      if (isFinite(n) && n >= 0) return Math.round(n);
    }
    return fallback;
  };

  const safeStr = (k: string, fb: string): string =>
    typeof o[k] === 'string' && (o[k] as string).trim() ? (o[k] as string).trim() : fb;

  const safeFactors = (k: string): string[] => {
    const v = o[k];
    if (Array.isArray(v)) return v.filter((x) => typeof x === 'string').slice(0, 8) as string[];
    if (typeof v === 'string') return v.split(',').map((s) => s.trim()).filter(Boolean).slice(0, 8);
    return ['Craft category', 'Materials used', 'Region and tradition', 'Production cost'];
  };

  const floor = Math.max(artisanCostPrice, 0);
  const minP = Math.max(safeNum('minPrice', Math.max(floor, 50)), floor);
  const fairP = Math.max(safeNum('fairPrice', Math.round(minP * 1.5)), minP);
  const premP = Math.max(safeNum('premiumPrice', Math.round(fairP * 1.4)), fairP);

  return {
    minPrice: minP,
    fairPrice: fairP,
    premiumPrice: premP,
    explanation: safeStr('explanation', 'This estimate is based on the craft category, materials, and current Indian handicraft market patterns.'),
    factors: safeFactors('factors'),
    disclaimer: safeStr('disclaimer', 'This is an AI-assisted price estimate based on the product information you provided. It is NOT a guaranteed market price. You are always in control of your final price.'),
  };
}

export async function getPricingEstimateWithGemini(input: PricingInput): Promise<AiPricingDraft> {
  const benchmark = getComparableMarketBenchmarks({
    title: input.title,
    category: input.craftCategory,
    materials: input.materials,
    dimensions: input.dimensions,
    description: input.descriptionEnglish,
  });

  const ai = getAiClient();
  let response: any = null;

  // Single request — zero automatic retries to strictly preserve free-tier API quota
  try {
    response = await ai.models.generateContent({
      model: MODEL,
      contents: [
        {
          role: 'user',
          parts: [{ text: buildPricingPrompt(input, benchmark) }],
        },
      ],
      config: {
        temperature: 0.15,
        maxOutputTokens: 2048,
        responseMimeType: 'application/json',
      },
    });
  } catch (err: unknown) {
    const status = (err as any)?.status;
    const errMsg = String((err as any)?.message || err);
    console.error(`[gemini/pricing] Error calling model ${MODEL}:`, status ? `HTTP ${status}` : '', errMsg.slice(0, 250));

    // 401 / 403 Authentication / API Key problem
    if (
      status === 401 ||
      status === 403 ||
      errMsg.includes('API_KEY_INVALID') ||
      errMsg.includes('API key not valid') ||
      errMsg.includes('UNAUTHENTICATED')
    ) {
      throw new GeminiConfigError('Gemini API authentication failed. Please verify your GEMINI_API_KEY in .env.local.');
    }

    // 429 Quota / Rate limit exhausted
    if (
      status === 429 ||
      errMsg.includes('429') ||
      errMsg.includes('RESOURCE_EXHAUSTED') ||
      errMsg.includes('Quota exceeded') ||
      errMsg.includes('quota')
    ) {
      throw new GeminiQuotaError('AI pricing quota or rate limit reached. Please try again shortly.');
    }

    // 503 Service Unavailable / High demand
    if (
      status === 503 ||
      errMsg.includes('503') ||
      errMsg.includes('UNAVAILABLE') ||
      errMsg.includes('high demand') ||
      errMsg.includes('overloaded') ||
      errMsg.includes('temporarily unavailable')
    ) {
      throw new GeminiServiceBusyError('AI service is temporarily busy. Your information is safe. Please try again shortly.');
    }

    // Network failure
    if (
      errMsg.includes('fetch failed') ||
      errMsg.includes('ENOTFOUND') ||
      errMsg.includes('ECONNRESET') ||
      errMsg.includes('ETIMEDOUT') ||
      errMsg.includes('network')
    ) {
      throw new GeminiNetworkError('Network error connecting to AI service. Please check your connection and try again.');
    }

    throw new Error('AI pricing request failed. Please try again.');
  }

  const rawText = response?.text;
  if (!rawText || !rawText.trim()) {
    throw new GeminiParseError('Gemini returned an empty pricing response. Please try again.');
  }

  let cleaned = rawText.trim();
  if (cleaned.startsWith('```')) {
    cleaned = cleaned.replace(/^```(?:json)?\s*/i, '').replace(/\s*```$/i, '').trim();
  }
  const firstBrace = cleaned.indexOf('{');
  const lastBrace = cleaned.lastIndexOf('}');
  if (firstBrace !== -1 && lastBrace !== -1 && lastBrace > firstBrace) {
    cleaned = cleaned.slice(firstBrace, lastBrace + 1).trim();
  }

  let parsed: unknown;
  try {
    parsed = JSON.parse(cleaned);
  } catch {
    console.error('[gemini/pricing] Parse failed. Raw:', rawText.slice(0, 300));
    throw new GeminiParseError(
      'Could not understand the AI pricing response. Please try again.'
    );
  }

  const sanitized = sanitizePricing(parsed, input.artisanCostPrice);

  // Deterministic sanity check against market comparables, base cost floor & artisan expected price
  const sanity = performPriceSanityCheck({
    rawMin: sanitized.minPrice,
    rawFair: sanitized.fairPrice,
    rawPremium: sanitized.premiumPrice,
    baseCost: input.artisanCostPrice,
    artisanExpectedPrice: input.artisanExpectedPrice,
    benchmark,
  });

  return {
    minPrice: sanity.minPrice,
    fairPrice: sanity.fairPrice,
    premiumPrice: sanity.premiumPrice,
    marketRangeMin: sanity.marketRangeMin,
    marketRangeMax: sanity.marketRangeMax,
    artisanExpectedPrice: input.artisanExpectedPrice,
    comparables: benchmark.comparables,
    sanityCheckApplied: sanity.sanityCheckApplied,
    sanityAdjustmentNotice: sanity.sanityAdjustmentNotice,
    explanation: sanitized.explanation,
    factors: sanitized.factors,
    disclaimer: sanitized.disclaimer,
  };
}
