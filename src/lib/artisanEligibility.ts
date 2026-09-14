/**
 * Artisan Premium Pricing Eligibility Engine
 * 
 * Rules:
 * Premium pricing requires an active eligible subscription OR
 * demonstrated marketplace reputation:
 * - Average Rating >= 4.5
 * - Review Count >= 20
 * - Published Product Count >= 10
 * 
 * Centralized business logic shared between API routes and UI components.
 */

export interface ArtisanEligibilityMetrics {
  averageRating: number;
  reviewCount: number;
  publishedProductCount: number;
  hasActiveSubscription?: boolean;
}

export interface ArtisanEligibilityResult {
  isEligible: boolean;
  reason: string;
  metrics: {
    averageRating: number;
    targetRating: number;
    reviewCount: number;
    targetReviews: number;
    publishedProductCount: number;
    targetPublishedProducts: number;
    hasActiveSubscription: boolean;
  };
  progress: {
    ratingMet: boolean;
    reviewsMet: boolean;
    productsMet: boolean;
  };
}

export const PREMIUM_REQUIREMENTS = {
  MIN_RATING: 4.5,
  MIN_REVIEWS: 20,
  MIN_PUBLISHED_PRODUCTS: 10,
} as const;

export function evaluatePremiumEligibility(metrics: ArtisanEligibilityMetrics): ArtisanEligibilityResult {
  const ratingMet = metrics.averageRating >= PREMIUM_REQUIREMENTS.MIN_RATING;
  const reviewsMet = metrics.reviewCount >= PREMIUM_REQUIREMENTS.MIN_REVIEWS;
  const productsMet = metrics.publishedProductCount >= PREMIUM_REQUIREMENTS.MIN_PUBLISHED_PRODUCTS;
  
  const hasSub = Boolean(metrics.hasActiveSubscription);
  const meetsReputation = ratingMet && reviewsMet && productsMet;
  const isEligible = hasSub || meetsReputation;

  return {
    isEligible,
    metrics: {
      averageRating: Number(metrics.averageRating.toFixed(1)),
      targetRating: PREMIUM_REQUIREMENTS.MIN_RATING,
      reviewCount: metrics.reviewCount,
      targetReviews: PREMIUM_REQUIREMENTS.MIN_REVIEWS,
      publishedProductCount: metrics.publishedProductCount,
      targetPublishedProducts: PREMIUM_REQUIREMENTS.MIN_PUBLISHED_PRODUCTS,
      hasActiveSubscription: hasSub,
    },
    progress: {
      ratingMet,
      reviewsMet,
      productsMet,
    },
    reason: isEligible
      ? 'Eligible for premium pricing based on verified reputation or active subscription.'
      : 'Premium pricing is currently unavailable for this artisan.',
  };
}
