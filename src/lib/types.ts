export type UserRole = 'ARTISAN' | 'BUYER' | 'ADMIN';

export type SupportedLanguage =
  | 'en' // English
  | 'kn' // Kannada (ಕನ್ನಡ)
  | 'hi' // Hindi (हिन्दी)
  | 'ta' // Tamil (தமிழ்)
  | 'te' // Telugu (తెలుగు)
  | 'ml' // Malayalam (മലയാളം)
  | 'mr' // Marathi (मराठी)
  | 'bn' // Bengali (বাংলা)
  | 'gu' // Gujarati (ગુજરાતી)
  | 'pa' // Punjabi (ਪੰਜਾਬੀ)
  | 'or' // Odia (ଓଡ଼ିଆ)
  | 'as' // Assamese (অসমীয়া)
  | 'ur'; // Urdu (اردو)

export interface MockUserSession {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  avatarUrl: string;
  artisanId?: string;
}

export interface ArtisanSummary {
  id: string;
  fullName: string;
  phone?: string;
  upiId?: string | null;
  state: string;
  district: string;
  primaryCraft: string;
  experienceYears: number;
  pehchanCardNo?: string | null;
  isPehchanVerified?: boolean;
  bioEnglish?: string | null;
  bioLocal?: string | null;
  profileImage?: string | null;
}

export interface ProductItem {
  id: string;
  artisanId: string;
  title: string;
  titleHindi?: string | null;
  descriptionEnglish: string;
  descriptionHindi?: string | null;
  culturalHeritageStory?: string | null;
  craftCategory: string;
  giCraftRegion?: string | null;
  isGiInformational: boolean;
  giDisclaimer?: string | null;
  materialsUsed: string;
  dimensions?: string | null;
  colors?: string | null;
  tags?: string | null;
  artisanCostPrice: number;
  estimatedLaborDays?: number | null;
  suggestedRetailMin: number;
  suggestedRetailMax: number;
  finalListingPrice: number;
  pricingRationale?: string | null;
  aiQualityScore?: number | null;
  aiQualityFeedback?: string | null;
  primaryImageUrl: string;
  status: string;
  createdAt: string;
  artisan?: ArtisanSummary;
}

export interface SchemeItem {
  id: string;
  code: string;
  name: string;
  nameHindi: string;
  nodalMinistry: string;
  briefDescription: string;
  briefDescriptionHindi: string;
  keyBenefits: string;
  keyBenefitsHindi: string;
  targetCrafts: string;
  targetStates: string;
  officialPortalUrl: string;
  isInformational: boolean;
}

// ─────────────────────────────────────────────
// Phase 3: AI Catalog Pipeline Types
// ─────────────────────────────────────────────

/** Structured output returned by the Gemini AI analysis pipeline */
export interface AiCatalogDraft {
  // AI Analysis fields
  craftName: string;
  craftCategory: string;
  materials: string;
  colors: string;
  region: string;
  confidence: 'high' | 'medium' | 'low';

  // Generated catalog content (bilingual)
  titleEn: string;
  titleHi: string;
  descriptionEn: string;
  descriptionHi: string;
  culturalStory: string;
  tags: string;

  // Quality assessment
  qualityScore: number;      // 0–100
  qualityFeedback: string;

  // Preserved from upload (base64 data URI for prototype)
  imageUrl: string;
}

/** Payload sent to /api/catalog/save after artisan approval */
export interface CatalogSavePayload {
  artisanDbId: string;        // ArtisanProfile.id from DB
  titleEn: string;
  titleHi: string;
  descriptionEn: string;
  descriptionHi: string;
  culturalStory: string;
  craftCategory: string;
  materials: string;
  colors: string;
  region: string;
  tags: string;
  qualityScore: number;
  qualityFeedback: string;
  imageUrl: string;           // base64 data URI
}

/** Response from /api/catalog/analyze */
export interface AnalyzeApiResponse {
  success: true;
  draft: AiCatalogDraft;
}

/** Error response from any Phase 3 API route */
export interface ApiErrorResponse {
  success: false;
  error: string;
  code?: string;
}

// ─────────────────────────────────────────────
// Phase 4: Fair Pricing Assistant Types
// ─────────────────────────────────────────────

export interface MarketComparable {
  title: string;
  priceRange: string;
  source: string;
  notes: string;
}

/** Structured AI pricing estimate returned by Gemini & Market Benchmark Engine */
export interface AiPricingDraft {
  minPrice: number;        // Suggested minimum / entry price
  fairPrice: number;       // Suggested fair / recommended price
  premiumPrice: number;    // Suggested premium price
  marketRangeMin: number;  // Current comparable market range minimum
  marketRangeMax: number;  // Current comparable market range maximum
  artisanExpectedPrice?: number; // Artisan's expected selling price
  comparables: MarketComparable[]; // Grounded Indian market comparables
  sanityCheckApplied: boolean;
  sanityAdjustmentNotice?: string;
  explanation: string;     // Why this range was suggested (1-3 sentences)
  factors: string[];       // Factors considered (e.g. ["craft category", "materials", "region"])
  disclaimer: string;      // AI disclaimer (always present)
}

/** Payload sent to /api/pricing/confirm when artisan confirms their price */
export interface PricingConfirmPayload {
  productId: string;
  artisanCostPrice: number;
  suggestedRetailMin: number;
  suggestedRetailMax: number;       // the "fair" price AI suggested
  suggestedRetailPremium: number;
  finalListingPrice: number;        // artisan's chosen final price
  pricingRationale: string;         // AI explanation stored for record
  pricingFactors: string;           // comma-separated factors
}

