'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import {
  ArrowLeft, MapPin, Sparkles, MessageCircle, QrCode,
  ChevronDown, ChevronUp, Loader2, AlertCircle, Info,
  Award, IndianRupee, Tag as TagIcon, Leaf, Package, CheckCircle2, X,
  Star, Camera, Lock, Image as ImageIcon, Trash2, ShoppingBag, Plus,
  ChevronLeft, ChevronRight
} from 'lucide-react';
import { useMockAuth } from '@/context/MockAuthContext';
import { useCart } from '@/context/CartContext';
import AuthGateModal from '@/components/AuthGateModal';
import { getLocalizedProduct, getLocalizedArtisan } from '@/lib/i18n/productContent';
import { getProductGallery } from '@/lib/craftImages';

interface SafeArtisan {
  id: string;
  fullName: string;
  district: string;
  state: string;
  primaryCraft: string;
  experienceYears: number;
  profileImage?: string | null;
  bioEnglish?: string | null;
  isPehchanVerified?: boolean;
}

interface ReviewItem {
  id: string;
  productId: string;
  rating: number;
  reviewText: string;
  customerDisplayName: string;
  verifiedPurchase: boolean;
  photos: string[];
  createdAt: string;
}

interface ReviewSummary {
  averageRating: number;
  totalReviews: number;
  distribution: Record<number, number>;
}

interface ProductDetail {
  id: string;
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
  suggestedRetailMin: number;
  suggestedRetailMax: number;
  finalListingPrice: number;
  pricingRationale?: string | null;
  aiQualityScore?: number | null;
  aiQualityFeedback?: string | null;
  primaryImageUrl: string;
  artisan?: SafeArtisan | null;
}

function ExpandableText({ text, minChars = 160 }: { text: string; minChars?: number }) {
  const [expanded, setExpanded] = useState(false);
  if (!text) return null;
  const isLong = text.length > minChars;

  return (
    <div className="relative">
      <p
        className={`text-sm text-stone-700 leading-relaxed transition-all duration-200 ${
          !expanded && isLong ? 'line-clamp-3' : ''
        }`}
      >
        {text}
      </p>
      {isLong && (
        <button
          type="button"
          onClick={() => setExpanded((v) => !v)}
          className="mt-2 inline-flex items-center gap-1 text-xs font-bold text-terracotta-600 hover:text-terracotta-700 transition-colors cursor-pointer py-1 px-1.5 -ml-1 rounded hover:bg-terracotta-50 focus:outline-none focus:ring-1 focus:ring-terracotta-400"
        >
          {expanded ? (
            <>
              <ChevronUp className="w-3.5 h-3.5" />
              <span>Read less</span>
            </>
          ) : (
            <>
              <ChevronDown className="w-3.5 h-3.5" />
              <span>Read more</span>
            </>
          )}
        </button>
      )}
    </div>
  );
}

function SectionCard({
  title,
  icon,
  children,
}: {
  title: string;
  icon?: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <div className="bg-white rounded-2xl border border-stone-200/80 p-5 shadow-sm">
      <div className="flex items-center gap-2 mb-3 pb-2.5 border-b border-stone-100">
        {icon && <span className="text-terracotta-600">{icon}</span>}
        <h2 className="text-sm font-extrabold text-stone-900">{title}</h2>
      </div>
      {children}
    </div>
  );
}

export default function ProductDetailPage() {
  const params = useParams();
  const { t, language, isAuthenticated } = useMockAuth();
  const { addToCart, items: cartItems } = useCart();
  const [product, setProduct] = useState<ProductDetail | null>(null);
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [showAuthGate, setShowAuthGate] = useState(false);
  const [authGateAction, setAuthGateAction] = useState<'checkout' | 'contact' | 'rfq' | 'review'>('contact');
  const [showUpiInfo, setShowUpiInfo] = useState(false);
  const [showRfqModal, setShowRfqModal] = useState(false);
  const [rfqName, setRfqName] = useState('');
  const [rfqPhone, setRfqPhone] = useState('');
  const [rfqEmail, setRfqEmail] = useState('');
  const [rfqQuantity, setRfqQuantity] = useState(25);
  const [rfqChannel, setRfqChannel] = useState('Corporate Gifting');
  const [rfqMessage, setRfqMessage] = useState('');
  const [rfqSubmitting, setRfqSubmitting] = useState(false);
  const [rfqSuccess, setRfqSuccess] = useState(false);
  const [rfqError, setRfqError] = useState<string | null>(null);

  const handleRfqSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setRfqError(null);
    if (!rfqName.trim()) {
      setRfqError(t('Please enter your full name.', 'कृपया अपना नाम दर्ज करें।'));
      return;
    }
    const cleanDigits = rfqPhone.replace(/\D/g, '');
    if (cleanDigits.length < 10) {
      setRfqError(t('Please enter a valid 10-digit mobile/WhatsApp number.', 'कृपया 10 अंकों का मोबाइल नंबर दर्ज करें।'));
      return;
    }
    if (rfqQuantity < 1) {
      setRfqError(t('Please enter a valid quantity.', 'कृपया मान्य मात्रा दर्ज करें।'));
      return;
    }

    setRfqSubmitting(true);
    try {
      const res = await fetch('/api/inquiries', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          productId: product?.id,
          buyerName: rfqName,
          buyerPhone: rfqPhone,
          buyerEmail: rfqEmail || undefined,
          bulkQuantity: rfqQuantity,
          intendedUse: rfqChannel,
          message: rfqMessage,
        }),
      });
      const data = await res.json();
      if (data.success) {
        setRfqSuccess(true);
      } else {
        setRfqError(data.error || 'Failed to submit RFQ');
      }
    } catch (err: any) {
      setRfqError(err.message || 'Submission error');
    } finally {
      setRfqSubmitting(false);
    }
  };

  const id =
    typeof params?.id === 'string'
      ? params.id
    : Array.isArray(params?.id)
    ? params.id[0]
    : '';

  // Customer Reviews State
  const [reviews, setReviews] = useState<ReviewItem[]>([]);
  const [reviewSummary, setReviewSummary] = useState<ReviewSummary>({
    averageRating: 0,
    totalReviews: 0,
    distribution: { 5: 0, 4: 0, 3: 0, 2: 0, 1: 0 },
  });
  const [reviewsLoading, setReviewsLoading] = useState(true);
  const [selectedPhotoPreview, setSelectedPhotoPreview] = useState<string | null>(null);

  // Write Review State
  const [reviewRating, setReviewRating] = useState(5);
  const [reviewHoverRating, setReviewHoverRating] = useState(0);
  const [reviewDisplayName, setReviewDisplayName] = useState('');
  const [reviewText, setReviewText] = useState('');
  const [reviewPrivateNote, setReviewPrivateNote] = useState('');
  const [reviewPhotos, setReviewPhotos] = useState<string[]>([]);
  const [reviewSubmitting, setReviewSubmitting] = useState(false);
  const [reviewSuccess, setReviewSuccess] = useState(false);
  const [reviewError, setReviewError] = useState<string | null>(null);
  const [showReviewForm, setShowReviewForm] = useState(false);

  const loadReviews = async () => {
    if (!id) return;
    try {
      const res = await fetch(`/api/reviews?productId=${id}`);
      const data = await res.json();
      if (data.success) {
        setReviews(data.reviews || []);
        if (data.summary) {
          setReviewSummary(data.summary);
        }
      }
    } catch (e) {
      console.error('Error fetching reviews:', e);
    } finally {
      setReviewsLoading(false);
    }
  };

  const handlePhotoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files || files.length === 0) return;

    if (reviewPhotos.length + files.length > 3) {
      setReviewError(t('Maximum 3 photos allowed.', 'अधिकतम 3 तस्वीरें स्वीकार्य हैं।'));
      return;
    }

    Array.from(files).forEach((file) => {
      if (!['image/jpeg', 'image/png', 'image/webp'].includes(file.type)) {
        setReviewError(t('Only JPEG, PNG, and WebP images are allowed.', 'केवल JPEG, PNG और WebP चित्र स्वीकार्य हैं।'));
        return;
      }
      if (file.size > 2 * 1024 * 1024) {
        setReviewError(t('Each image must be under 2MB.', 'प्रत्येक छवि 2MB से कम होनी चाहिए।'));
        return;
      }
      const reader = new FileReader();
      reader.onload = () => {
        if (typeof reader.result === 'string') {
          setReviewPhotos((prev) => (prev.length < 3 ? [...prev, reader.result as string] : prev));
        }
      };
      reader.readAsDataURL(file);
    });
    e.target.value = '';
  };

  const handleReviewSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setReviewError(null);

    if (reviewRating < 1 || reviewRating > 5) {
      setReviewError(t('Please select a star rating between 1 and 5.', 'कृपया 1 से 5 स्टार रेटिंग चुनें।'));
      return;
    }
    if (reviewText.trim().length < 5) {
      setReviewError(t('Review must be at least 5 characters.', 'समीक्षा कम से कम 5 अक्षरों की होनी चाहिए।'));
      return;
    }
    if (reviewText.trim().length > 1000) {
      setReviewError(t('Review cannot exceed 1000 characters.', 'समीक्षा 1000 अक्षरों से अधिक नहीं हो सकती।'));
      return;
    }
    if (reviewPrivateNote.trim().length > 500) {
      setReviewError(t('Private note cannot exceed 500 characters.', 'निजी नोट 500 अक्षरों से अधिक नहीं हो सकता।'));
      return;
    }

    setReviewSubmitting(true);
    try {
      const res = await fetch('/api/reviews', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          productId: id,
          rating: reviewRating,
          reviewText: reviewText.trim(),
          customerDisplayName: reviewDisplayName.trim() || undefined,
          privateNote: reviewPrivateNote.trim() || undefined,
          photos: reviewPhotos.length > 0 ? reviewPhotos : undefined,
        }),
      });
      const data = await res.json();
      if (data.success) {
        setReviewSuccess(true);
        setReviewText('');
        setReviewDisplayName('');
        setReviewPrivateNote('');
        setReviewPhotos([]);
        setReviewRating(5);
        await loadReviews();
      } else {
        setReviewError(data.error || 'Failed to submit review');
      }
    } catch (err: any) {
      setReviewError(err.message || 'Submission error');
    } finally {
      setReviewSubmitting(false);
    }
  };

  useEffect(() => {
    if (!id) return;
    loadReviews();
    fetch(`/api/products/${id}`)
      .then((r) => r.json())
      .then((data) => {
        if (data.success) setProduct(data.product);
        else setError(data.error || 'Product not found.');
      })
      .catch(() => setError('Failed to load product. Please try again.'))
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen bg-stone-50 flex items-center justify-center">
        <div className="flex flex-col items-center gap-3 text-stone-500">
          <Loader2 className="w-8 h-8 animate-spin text-terracotta-500" />
          <p className="text-sm font-semibold">
            {t('Loading product…', 'उत्पाद लोड हो रहा है…')}
          </p>
        </div>
      </div>
    );
  }

  if (error || !product) {
    return (
      <div className="min-h-screen bg-stone-50 flex items-center justify-center px-4">
        <div className="text-center max-w-sm">
          <AlertCircle className="w-10 h-10 text-red-400 mx-auto mb-3" />
          <p className="font-bold text-stone-800">
            {t('Product not found', 'उत्पाद नहीं मिला')}
          </p>
          {error && <p className="text-xs text-stone-500 mt-1">{error}</p>}
          <Link
            href="/marketplace"
            className="mt-4 inline-flex items-center gap-1.5 text-xs font-bold text-terracotta-600 hover:text-terracotta-700"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            {t('Back to Marketplace', 'बाज़ार पर वापस जाएं')}
          </Link>
        </div>
      </div>
    );
  }

  const loc = getLocalizedProduct(product, language);
  const locArtisan = getLocalizedArtisan(product.artisan, language);

  const displayTitle = loc.title;
  const secondaryTitle = loc.secondaryTitle;

  const tags = product.tags
    ? product.tags.split(',').map((s) => s.trim()).filter(Boolean)
    : [];

  const qualityScore = product.aiQualityScore ?? 0;
  const qualityClass =
    qualityScore >= 80
      ? 'text-emerald-700 bg-emerald-50 border-emerald-200'
      : qualityScore >= 60
      ? 'text-amber-700 bg-amber-50 border-amber-200'
      : 'text-stone-600 bg-stone-50 border-stone-200';

  const whatsappHref = `/api/contact/whatsapp/${product.id}`;

  const hasPricingData =
    product.suggestedRetailMin > 0 || product.suggestedRetailMax > 0;
  const hasRationale =
    product.pricingRationale &&
    product.pricingRationale !== 'Fair pricing evaluation pending artisan confirmation.';

  const gallery = product ? getProductGallery(product) : [];
  const activeImage = gallery[activeImageIndex] || gallery[0];

  return (
    <div className="min-h-screen bg-stone-50 pb-24">
      {/* Sticky breadcrumb */}
      <div className="sticky top-16 z-30 bg-white/90 backdrop-blur-sm border-b border-stone-200/80 shadow-xs">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-3 flex items-center gap-2 min-w-0">
          <Link
            href="/marketplace"
            className="flex items-center gap-1.5 text-xs font-bold text-stone-600 hover:text-stone-900 transition-colors shrink-0"
          >
            <ArrowLeft aria-hidden="true" focusable="false" className="w-4 h-4 shrink-0" />
            <span>{t('Marketplace', 'बाज़ार')}</span>
          </Link>
          <span className="text-stone-300 shrink-0" aria-hidden="true">›</span>
          <span className="text-xs text-stone-500 truncate">{loc.title}</span>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 pt-6 space-y-4">
        {/* Hero: Multi-View Image Gallery + Title + Price + Actions */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          {/* Multi-View Product Gallery */}
          <div className="flex flex-col gap-2.5">
            <div className="relative aspect-square sm:aspect-[4/3] lg:aspect-square rounded-2xl overflow-hidden bg-stone-100 shadow-sm group">
              {activeImage && (
                <img
                  src={activeImage.url}
                  alt={activeImage.alt}
                  className="w-full h-full object-cover transition-opacity duration-200"
                />
              )}

              {/* View Role Badge */}
              {activeImage && (
                <div className="absolute top-3 left-3 flex flex-col gap-1.5 z-10">
                  <span className="px-2.5 py-0.5 rounded-full text-[11px] font-extrabold bg-stone-900/85 backdrop-blur-md text-white shadow-xs">
                    {(activeImage.roleLabel as any)[language] || activeImage.roleLabel.en}
                  </span>
                  {loc.giCraftRegion && (
                    <span className="px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-white/95 backdrop-blur-md text-terracotta-700 border border-terracotta-200 flex items-center gap-1 shadow-xs">
                      <MapPin aria-hidden="true" focusable="false" className="w-2.5 h-2.5 shrink-0" />
                      <span>{loc.giCraftRegion}</span>
                    </span>
                  )}
                </div>
              )}

              {qualityScore > 0 && (
                <div
                  className={`absolute top-3 right-3 px-2 py-0.5 rounded-full text-[11px] font-bold border flex items-center gap-1 z-10 ${qualityClass}`}
                >
                  <Sparkles aria-hidden="true" focusable="false" className="w-2.5 h-2.5 shrink-0" />
                  <span>AI {qualityScore}%</span>
                </div>
              )}

              {/* Gallery Arrow Controls */}
              {gallery.length > 1 && (
                <>
                  <button
                    type="button"
                    onClick={() => setActiveImageIndex((prev) => (prev > 0 ? prev - 1 : gallery.length - 1))}
                    className="absolute left-2.5 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/50 hover:bg-black/75 text-white flex items-center justify-center transition-all opacity-80 group-hover:opacity-100 cursor-pointer z-10"
                    aria-label={t('Previous image', 'पिछली तस्वीर')}
                  >
                    <ChevronLeft className="w-4 h-4" aria-hidden="true" focusable="false" />
                  </button>
                  <button
                    type="button"
                    onClick={() => setActiveImageIndex((prev) => (prev < gallery.length - 1 ? prev + 1 : 0))}
                    className="absolute right-2.5 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/50 hover:bg-black/75 text-white flex items-center justify-center transition-all opacity-80 group-hover:opacity-100 cursor-pointer z-10"
                    aria-label={t('Next image', 'अगली तस्वीर')}
                  >
                    <ChevronRight className="w-4 h-4" aria-hidden="true" focusable="false" />
                  </button>
                </>
              )}

              {/* Explanatory Context Caption Overlay */}
              {activeImage && (
                <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-stone-950/85 via-stone-900/50 to-transparent p-3 pt-6 text-white text-[11px] leading-snug font-medium">
                  {(activeImage.caption as any)[language] || activeImage.caption.en}
                </div>
              )}
            </div>

            {/* Thumbnail Selectors */}
            {gallery.length > 1 && (
              <div className="flex items-center gap-2 overflow-x-auto pb-1">
                {gallery.map((view, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setActiveImageIndex(idx)}
                    className={`relative rounded-xl overflow-hidden shrink-0 border-2 transition-all cursor-pointer p-0.5 ${
                      activeImageIndex === idx
                        ? 'border-terracotta-600 ring-2 ring-terracotta-400/30'
                        : 'border-stone-200 opacity-70 hover:opacity-100'
                    }`}
                  >
                    <img
                      src={view.url}
                      alt={view.alt}
                      className="w-14 h-14 sm:w-16 sm:h-16 rounded-lg object-cover"
                    />
                    <span className="sr-only">{(view.roleLabel as any)[language] || view.roleLabel.en}</span>
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Details column */}
          <div className="flex flex-col">
            <div>
              <h1 className="text-xl sm:text-2xl font-extrabold text-stone-900 leading-tight">
                {displayTitle}
              </h1>
              {secondaryTitle && (
                <p className="text-sm text-stone-500 mt-0.5 font-medium">{secondaryTitle}</p>
              )}
            </div>

            {/* Price row */}
            <div className="mt-4 flex items-end gap-3 flex-wrap">
              <div>
                <div className="text-[11px] text-stone-400 font-medium uppercase tracking-wide">
                  {t('Direct Artisan Price', 'कारीगर मूल्य')}
                </div>
                <div className="flex items-baseline gap-0.5">
                  <span className="text-2xl font-extrabold text-stone-900">₹</span>
                  <span className="text-3xl font-extrabold text-stone-900">
                    {product.finalListingPrice.toLocaleString('en-IN')}
                  </span>
                </div>
              </div>
              {hasPricingData && (
                <div className="text-[11px] text-emerald-700 font-semibold bg-emerald-50 px-2.5 py-1.5 rounded-xl border border-emerald-200 leading-tight">
                  <div>{t('Market range', 'बाज़ार दर')}: ₹{product.suggestedRetailMin}–₹{product.suggestedRetailMax}</div>
                  <div className="text-[9px] text-emerald-600 font-medium mt-0.5">{t('Zero middleman', 'शून्य बिचौलिया')}</div>
                </div>
              )}
            </div>

            {/* Spec chips */}
            <div className="mt-4 flex flex-wrap gap-2">
              {loc.materialsUsed && (
                <span className="flex items-center gap-1 text-[11px] font-medium text-stone-700 bg-stone-100 px-2.5 py-1 rounded-lg">
                  <Leaf aria-hidden="true" className="w-3 h-3 text-emerald-600 shrink-0" />
                  <span>{loc.materialsUsed}</span>
                </span>
              )}
              {loc.colors && (
                <span className="text-[11px] font-medium text-stone-700 bg-stone-100 px-2.5 py-1 rounded-lg">
                  🎨 {loc.colors}
                </span>
              )}
              {(loc.dimensions || product.dimensions) && (
                <span className="text-[11px] font-medium text-stone-700 bg-stone-100 px-2.5 py-1 rounded-lg">
                  📐 {loc.dimensions || product.dimensions}
                </span>
              )}
            </div>

            {/* Artisan mini-card (Clickable Storefront Link) */}
            {product.artisan && (
              <Link
                href={`/marketplace?artisanId=${product.artisan.id}`}
                className="mt-4 flex items-center gap-2.5 p-2.5 bg-stone-50 hover:bg-amber-50/80 rounded-xl border border-stone-200 hover:border-amber-300 transition-all group/artisan"
                title={t(`View all crafts by ${product.artisan.fullName}`, `${product.artisan.fullName} की सभी कृतियां देखें`)}
              >
                <img
                  src={
                    product.artisan.profileImage ||
                    'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100'
                  }
                  alt={product.artisan.fullName}
                  className="w-9 h-9 rounded-full object-cover shrink-0 group-hover/artisan:ring-2 group-hover/artisan:ring-amber-400 transition-all"
                />
                <div className="flex-1 min-w-0">
                  <div className="text-xs font-bold text-stone-800 group-hover/artisan:text-terracotta-700 transition-colors truncate flex items-center gap-1.5">
                    <span>{locArtisan.fullName || product.artisan.fullName}</span>
                    {product.artisan.isPehchanVerified && (
                      <span className="text-[9px] bg-blue-50 text-blue-700 border border-blue-200 px-1.5 py-0.5 rounded font-bold shrink-0">
                        {t('Pehchan ✓', 'पहचान ✓')}
                      </span>
                    )}
                  </div>
                  <div className="text-[10px] text-stone-500 flex items-center gap-0.5 mt-0.5">
                    <MapPin aria-hidden="true" className="w-2.5 h-2.5 shrink-0" />
                    <span>{locArtisan.location || `${product.artisan.district}, ${product.artisan.state}`}</span>
                  </div>
                </div>
                <span className="text-[11px] font-bold text-terracotta-600 group-hover/artisan:translate-x-0.5 transition-transform shrink-0 flex items-center gap-0.5">
                  <span>{t('View Crafts', 'शिल्प देखें')}</span>
                  <span aria-hidden="true">→</span>
                </span>
              </Link>
            )}

{/* Action Hierarchy: Retail & B2B Separated */}
            <div className="mt-6 space-y-4">
              {/* Primary Action: Add to Cart */}
              <div className="mb-4">
                <button
                  type="button"
                  id="detail-add-to-cart-btn"
                  onClick={() => {
                    if (product) addToCart(product as any, 1);
                  }}
                  className={`w-full py-3.5 px-4 rounded-xl font-bold text-sm transition-all shadow-sm flex items-center justify-center gap-2 cursor-pointer active:scale-[0.99] ${
                    product && cartItems.some((i) => i.product.id === product.id)
                      ? 'bg-emerald-600 hover:bg-emerald-700 text-white'
                      : 'bg-stone-900 hover:bg-stone-800 text-white'
                  }`}
                >
                  {product && cartItems.some((i) => i.product.id === product.id) ? (
                    <>
                      <CheckCircle2 aria-hidden="true" className="w-4 h-4 text-emerald-200 shrink-0" />
                      <span>{t('Added to Cart — View Cart', 'टोकरी में जोड़ा गया — टोकरी देखें')}</span>
                    </>
                  ) : (
                    <>
                      <ShoppingBag aria-hidden="true" className="w-4 h-4 text-amber-300 shrink-0" />
                      <span>{t('Add to Craft Cart', 'टोकरी में जोड़ें')}</span>
                    </>
                  )}
                </button>
              </div>

              {/* 1. Direct Purchase / Contact */}
              <div>
                <span className="text-[11px] font-extrabold text-stone-400 uppercase tracking-wider block mb-2">
                  {t('Direct Purchase / Contact', 'सीधी खरीद / संपर्क')}
                </span>
                <div className="grid grid-cols-2 gap-2.5">
                  <button
                    type="button"
                    id="detail-whatsapp-btn"
                    onClick={() => {
                      if (!isAuthenticated) {
                        setAuthGateAction('contact');
                        setShowAuthGate(true);
                      } else {
                        window.open(whatsappHref, '_blank');
                      }
                    }}
                    className="flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm transition-colors shadow-sm cursor-pointer"
                  >
                    <MessageCircle aria-hidden="true" className="w-4 h-4 shrink-0" />
                    <span>WhatsApp</span>
                  </button>
                  <button
                    id="detail-upi-btn"
                    type="button"
                    onClick={() => {
                      if (!isAuthenticated) {
                        setAuthGateAction('contact');
                        setShowAuthGate(true);
                      } else {
                        setShowUpiInfo((v) => !v);
                      }
                    }}
                    className="flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-stone-900 hover:bg-stone-800 text-white font-bold text-sm transition-colors shadow-sm cursor-pointer"
                  >
                    <QrCode aria-hidden="true" className="w-4 h-4 text-amber-400 shrink-0" />
                    <span>{t('Pay via UPI', 'UPI भुगतान')}</span>
                  </button>
                </div>
              </div>

              {/* UPI info panel — no raw UPI ID exposed */}
              {showUpiInfo && (
                <div className="p-4 bg-amber-50 border border-amber-200 rounded-2xl text-xs text-amber-900 animate-in fade-in duration-150">
                  <div className="flex items-start gap-2.5">
                    <QrCode className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
                    <div>
                      <p className="font-extrabold mb-1.5">
                        {t('UPI Payment Available', 'UPI भुगतान उपलब्ध')}
                      </p>
                      <p className="leading-relaxed text-amber-800">
                        {t(
                          'This artisan accepts direct UPI payments. Tap the WhatsApp button to contact them — they will share UPI payment details directly. 100% of your payment reaches the artisan with zero commission.',
                          'यह कारीगर सीधे UPI भुगतान स्वीकार करते हैं। WhatsApp बटन दबाएं और वे सीधे UPI विवरण साझा करेंगे। आपका 100% भुगतान बिना किसी कमीशन के कारीगर तक पहुंचता है।'
                        )}
                      </p>
                      <button
                        type="button"
                        onClick={() => {
                          if (!isAuthenticated) {
                            setAuthGateAction('contact');
                            setShowAuthGate(true);
                          } else {
                            window.open(whatsappHref, '_blank');
                          }
                        }}
                        className="mt-2 inline-flex items-center gap-1.5 font-bold text-emerald-700 hover:text-emerald-800 transition-colors cursor-pointer"
                      >
                        <MessageCircle className="w-3.5 h-3.5" />
                        <span>{t('Contact for UPI details', 'UPI विवरण के लिए संपर्क करें')}</span>
                      </button>
                    </div>
                  </div>
                </div>
              )}

              {/* 2. For Bulk / Institutional Orders */}
              <div className="pt-3 border-t border-stone-200/80">
                <span className="text-[11px] font-extrabold text-stone-400 uppercase tracking-wider block mb-2">
                  {t('For Bulk / Institutional Orders', 'थोक एवं संस्थागत ऑर्डर')}
                </span>
                <button
                  id="detail-rfq-btn"
                  type="button"
                  onClick={() => {
                    if (!isAuthenticated) {
                      setAuthGateAction('rfq');
                      setShowAuthGate(true);
                    } else {
                      setShowRfqModal(true);
                      setRfqSuccess(false);
                      setRfqError(null);
                    }
                  }}
                  className="w-full flex items-center justify-between py-3 px-4 rounded-xl bg-gradient-to-r from-amber-500 via-orange-500 to-amber-600 hover:from-amber-600 hover:to-orange-600 text-white font-bold text-xs sm:text-sm transition-all shadow-md group/rfq border border-amber-400/40 active:scale-[0.99] cursor-pointer"
                >
                  <div className="flex items-center gap-2">
                    <Package className="w-4 h-4 text-amber-100 group-hover/rfq:scale-110 transition-transform" />
                    <span>{t('Request Bulk Order / Quote (RFQ)', 'थोक ऑर्डर / कोटेशन अनुरोध (RFQ)')}</span>
                  </div>
                  <span className="text-[10px] bg-black/25 text-white px-2.5 py-1 rounded-full uppercase tracking-wider font-extrabold border border-white/20">
                    B2B / Wholesale
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Description */}
        {loc.description && (
          <SectionCard
            title={t('About This Craft', 'इस शिल्प के बारे में')}
            icon={<Info aria-hidden="true" className="w-4 h-4" />}
          >
            <ExpandableText
              text={loc.description}
            />
          </SectionCard>
        )}

        {/* Cultural Heritage Story */}
        {loc.culturalHeritageStory && (
          <SectionCard
            title={t('Cultural Heritage Story', 'सांस्कृतिक विरासत')}
            icon={<Award aria-hidden="true" className="w-4 h-4" />}
          >
            <div className="flex items-center gap-1.5 mb-2.5">
              <span className="text-xl">🏺</span>
              <span className="text-[11px] font-semibold text-stone-400 uppercase tracking-wide">
                {t("Artisan's Story", 'कारीगर की कहानी')}
              </span>
            </div>
            <ExpandableText text={loc.culturalHeritageStory} />
          </SectionCard>
        )}

        {/* AI Quality Score */}
        {(qualityScore > 0 || product.aiQualityFeedback) && (
          <SectionCard
            title={t('AI Catalog Quality', 'AI कैटलॉग गुणवत्ता')}
            icon={<Sparkles aria-hidden="true" className="w-4 h-4" />}
          >
            {qualityScore > 0 && (
              <div className="flex items-center gap-3 mb-2">
                <div
                  className={`text-lg font-extrabold px-3 py-1 rounded-xl border ${qualityClass}`}
                >
                  {qualityScore}%
                </div>
                <div>
                  <div className="text-xs font-bold text-stone-800">
                    {t('Listing Quality Score', 'लिस्टिंग गुणवत्ता स्कोर')}
                  </div>
                  <div className="text-[10px] text-stone-500">
                    {t('AI-verified catalog completeness', 'AI-सत्यापित कैटलॉग पूर्णता')}
                  </div>
                </div>
              </div>
            )}
            {product.aiQualityFeedback && (
              <p className="text-xs text-stone-600 bg-stone-50 p-2.5 rounded-xl border border-stone-100 leading-relaxed">
                {product.aiQualityFeedback}
              </p>
            )}
          </SectionCard>
        )}

        {/* Fair Pricing Rationale */}
        {hasPricingData && hasRationale && (
          <SectionCard
            title={t('AI Fair Pricing Breakdown', 'AI उचित मूल्य निर्धारण')}
            icon={<IndianRupee aria-hidden="true" className="w-4 h-4" />}
          >
            <div className="grid grid-cols-3 gap-3 mb-4">
              <div className="text-center bg-stone-50 rounded-xl p-3 border border-stone-100">
                <div className="text-[10px] font-semibold text-stone-500 mb-1 uppercase">
                  {t('Minimum', 'न्यूनतम')}
                </div>
                <div className="text-base font-extrabold text-stone-700">
                  ₹{product.suggestedRetailMin}
                </div>
              </div>
              <div className="text-center bg-amber-50 rounded-xl p-3 border border-amber-200">
                <div className="text-[10px] font-semibold text-amber-700 mb-1 uppercase">
                  {t('Fair', 'उचित')}
                </div>
                <div className="text-base font-extrabold text-amber-800">
                  ₹{product.suggestedRetailMax}
                </div>
              </div>
              <div className="text-center bg-terracotta-50 rounded-xl p-3 border border-terracotta-200">
                <div className="text-[10px] font-semibold text-terracotta-700 mb-1 uppercase">
                  {t('Listed', 'सूचीबद्ध')}
                </div>
                <div className="text-base font-extrabold text-terracotta-800">
                  ₹{product.finalListingPrice}
                </div>
              </div>
            </div>
            {hasRationale && (
              <ExpandableText text={loc.pricingRationale || product.pricingRationale!} />
            )}
          </SectionCard>
        )}

        {/* Tags */}
        {tags.length > 0 && (
          <SectionCard
            title={t('Tags', 'टैग')}
            icon={<TagIcon className="w-4 h-4" />}
          >
            <div className="flex flex-wrap gap-2">
              {tags.map((tag) => {
                const cleanTag = tag.replace(/^#/, '').trim();
                return (
                  <Link
                    key={tag}
                    href={`/?search=${encodeURIComponent(cleanTag)}`}
                    onClick={(e) => e.stopPropagation()}
                    className="inline-flex items-center gap-0.5 text-[11px] font-semibold text-stone-700 hover:text-terracotta-700 bg-stone-100 hover:bg-amber-100/80 border border-stone-200 hover:border-amber-300 px-2.5 py-1 rounded-full transition-all cursor-pointer shadow-2xs hover:shadow-xs group/tag"
                    title={t(`Explore crafts tagged #${cleanTag}`, `#${cleanTag} टैग किए गए शिल्प खोजें`)}
                  >
                    <span className="text-stone-400 group-hover/tag:text-terracotta-600">#</span>
                    <span>{cleanTag}</span>
                  </Link>
                );
              })}
            </div>
          </SectionCard>
        )}

        {/* Artisan Section */}
        {product.artisan && (
          <SectionCard
            title={t('About the Artisan', 'कारीगर के बारे में')}
            icon={<Award className="w-4 h-4" />}
          >
            <div className="flex items-start gap-3">
              <Link
                href={`/artisan/${product.artisan.id}`}
                className="shrink-0 hover:opacity-90 transition-opacity"
              >
                <img
                  src={
                    product.artisan.profileImage ||
                    'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100'
                  }
                  alt={product.artisan.fullName}
                  className="w-14 h-14 rounded-2xl object-cover shadow-sm ring-1 ring-stone-200 hover:ring-2 hover:ring-amber-400 transition-all"
                />
              </Link>
              <div className="flex-1 min-w-0">
                <div className="flex flex-wrap items-center gap-2">
                  <Link
                    href={`/artisan/${product.artisan.id}`}
                    className="font-extrabold text-stone-900 text-base hover:text-terracotta-600 transition-colors"
                  >
                    {product.artisan.fullName}
                  </Link>
                  {product.artisan.isPehchanVerified && (
                    <span className="text-[9px] bg-blue-50 text-blue-700 border border-blue-200 px-1.5 py-0.5 rounded font-bold">
                      Pehchan Verified ✓
                    </span>
                  )}
                </div>
                <div className="flex items-center gap-1 text-xs text-stone-500 mt-0.5">
                  <MapPin className="w-3 h-3 shrink-0" />
                  {product.artisan.district}, {product.artisan.state}
                </div>
                <div className="text-xs text-stone-600 mt-0.5">
                  {locArtisan.primaryCraft || product.artisan.primaryCraft}
                  {' · '}
                  {product.artisan.experienceYears}+ {t('years experience', 'वर्षों का अनुभव')}
                </div>
              </div>
            </div>

            {locArtisan.bio && (
              <div className="mt-3 pt-3 border-t border-stone-100">
                <ExpandableText text={locArtisan.bio} />
              </div>
            )}

            <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              <Link
                href={`/artisan/${product.artisan.id}`}
                className="w-full flex items-center justify-center gap-1.5 py-2.5 rounded-xl bg-amber-50 hover:bg-amber-100 text-amber-900 border border-amber-200 font-bold text-xs transition-colors"
              >
                <span>{t(`View ${product.artisan.fullName}'s Profile & Crafts`, `${product.artisan.fullName} का प्रोफ़ाइल व कृतियां देखें`)}</span>
                <span>→</span>
              </Link>
              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                {t('Contact Artisan on WhatsApp', 'WhatsApp पर कारीगर से संपर्क करें')}
              </a>
            </div>
          </SectionCard>
        )}

        {/* Customer Reviews Section */}
        <SectionCard
          title={t('Customer Reviews & Community Feedback', 'ग्राहक समीक्षाएं एवं प्रतिक्रिया')}
          icon={<Star aria-hidden="true" className="w-4 h-4 text-amber-500 fill-amber-500 shrink-0" />}
        >
          {/* Rating Summary Header */}
          <div className="flex flex-col md:flex-row gap-6 items-center p-4 bg-stone-50/80 rounded-2xl border border-stone-200/80">
            {/* Average & Stars */}
            <div className="text-center md:text-left shrink-0 md:pr-6 md:border-r border-stone-200">
              <div className="text-3xl font-black text-stone-900 tracking-tight">
                {reviewSummary.averageRating > 0 ? reviewSummary.averageRating.toFixed(1) : '—'}
                <span className="text-sm font-semibold text-stone-400"> / 5</span>
              </div>
              <div className="flex items-center justify-center md:justify-start gap-0.5 my-1.5 text-amber-500">
                {[1, 2, 3, 4, 5].map((s) => (
                  <Star
                    key={s}
                    aria-hidden="true"
                    className={`w-4 h-4 ${
                      s <= Math.round(reviewSummary.averageRating)
                        ? 'fill-amber-400 text-amber-500'
                        : 'text-stone-300'
                    }`}
                  />
                ))}
              </div>
              <p className="text-xs text-stone-500 font-medium">
                {t(`Based on ${reviewSummary.totalReviews} reviews`, `${reviewSummary.totalReviews} समीक्षाओं के आधार पर`)}
              </p>
            </div>

            {/* Distribution Bars */}
            <div className="flex-1 w-full space-y-1.5">
              {[5, 4, 3, 2, 1].map((stars) => {
                const count = reviewSummary.distribution[stars] || 0;
                const pct = reviewSummary.totalReviews > 0 ? Math.round((count / reviewSummary.totalReviews) * 100) : 0;
                return (
                  <div key={stars} className="flex items-center gap-2 text-xs">
                    <span className="w-6 font-bold text-stone-600 text-right">{stars}★</span>
                    <div className="flex-1 h-2 bg-stone-200 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-amber-500 rounded-full transition-all duration-300"
                        style={{ width: `${pct}%` }}
                      />
                    </div>
                    <span className="w-8 text-[11px] text-stone-400 text-right">{count}</span>
                  </div>
                );
              })}
            </div>

            {/* Write Review Action CTA */}
            <div className="shrink-0 text-center">
              <button
                type="button"
                id="toggle-write-review-btn"
                onClick={() => {
                  if (!isAuthenticated) {
                    setAuthGateAction('review');
                    setShowAuthGate(true);
                  } else {
                    setShowReviewForm((prev) => !prev);
                  }
                }}
                className="px-4 py-2.5 rounded-xl bg-stone-900 hover:bg-stone-800 text-white text-xs font-bold transition-colors shadow-sm flex items-center gap-1.5 cursor-pointer"
              >
                <Star aria-hidden="true" className="w-3.5 h-3.5 text-amber-400 fill-amber-400 shrink-0" />
                <span>{showReviewForm ? t('Close Form', 'फॉर्म बंद करें') : t('Write a Review', 'समीक्षा लिखें')}</span>
              </button>
            </div>
          </div>

          {/* Write Review Form */}
          {showReviewForm && (
            <form onSubmit={handleReviewSubmit} className="mt-5 p-4 sm:p-5 bg-amber-50/40 rounded-2xl border border-amber-200/70 space-y-4">
              <div className="flex items-center justify-between pb-2 border-b border-amber-200/50">
                <h3 className="font-extrabold text-sm text-stone-900 flex items-center gap-1.5">
                  <Star className="w-4 h-4 text-amber-600" />
                  <span>{t('Share Your Experience', 'अपना अनुभव साझा करें')}</span>
                </h3>
                <span className="text-[10px] text-stone-500">{t('Community Review', 'समुदाय समीक्षा')}</span>
              </div>

              {reviewError && (
                <div className="p-3 bg-red-50 text-red-700 border border-red-200 rounded-xl text-xs flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 shrink-0" />
                  <span>{reviewError}</span>
                </div>
              )}

              {reviewSuccess && (
                <div className="p-3 bg-emerald-50 text-emerald-800 border border-emerald-200 rounded-xl text-xs flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 shrink-0 text-emerald-600" />
                  <span>{t('Review submitted successfully! Thank you for supporting our master artisan.', 'समीक्षा सफलतापूर्वक दर्ज की गई! कारीगर का समर्थन करने के लिए धन्यवाद।')}</span>
                </div>
              )}

              {/* Star Selector */}
              <div>
                <label className="block text-xs font-bold text-stone-800 mb-1.5">
                  {t('Overall Rating *', 'कुल रेटिंग *')}
                </label>
                <div className="flex items-center gap-1.5">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      type="button"
                      onMouseEnter={() => setReviewHoverRating(star)}
                      onMouseLeave={() => setReviewHoverRating(0)}
                      onClick={() => setReviewRating(star)}
                      className="p-1 -ml-1 text-stone-300 hover:scale-110 transition-transform focus:outline-none"
                    >
                      <Star
                        className={`w-6 h-6 ${
                          star <= (reviewHoverRating || reviewRating)
                            ? 'text-amber-500 fill-amber-400'
                            : 'text-stone-300'
                        }`}
                      />
                    </button>
                  ))}
                  <span className="ml-2 text-xs font-extrabold text-stone-700">
                    {reviewHoverRating || reviewRating} / 5 {t('Stars', 'स्टार')}
                  </span>
                </div>
              </div>

              {/* Name & Display */}
              <div>
                <label className="block text-xs font-bold text-stone-800 mb-1">
                  {t('Your Name / Display Name (Optional)', 'आपका नाम / प्रदर्शित नाम (वैकल्पिक)')}
                </label>
                <input
                  type="text"
                  maxLength={60}
                  value={reviewDisplayName}
                  onChange={(e) => setReviewDisplayName(e.target.value)}
                  placeholder="e.g. Anand Sharma"
                  className="w-full px-3 py-2 text-xs rounded-xl border border-stone-200 bg-white focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500"
                />
              </div>

              {/* Review Text */}
              <div>
                <div className="flex items-center justify-between mb-1">
                  <label className="text-xs font-bold text-stone-800">
                    {t('Your Public Review *', 'सार्वजनिक समीक्षा *')}
                  </label>
                  <span className="text-[10px] text-stone-400">{reviewText.length}/1000</span>
                </div>
                <textarea
                  rows={3}
                  required
                  value={reviewText}
                  onChange={(e) => setReviewText(e.target.value)}
                  placeholder={t('Describe the texture, finish, quality, craft authenticity, or how it arrived...', 'शिल्प की बनावट, गुणवत्ता, प्रामाणिकता आदि के बारे में लिखें...')}
                  className="w-full px-3 py-2 text-xs rounded-xl border border-stone-200 bg-white focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500"
                />
              </div>

              {/* Photos Upload */}
              <div>
                <label className="block text-xs font-bold text-stone-800 mb-1">
                  {t('Customer Photos (Optional, max 3)', 'तस्वीरें (वैकल्पिक, अधिकतम 3)')}
                </label>
                <div className="flex flex-wrap items-center gap-2">
                  {reviewPhotos.map((photo, index) => (
                    <div key={index} className="relative w-16 h-16 rounded-xl overflow-hidden border border-stone-200 group">
                      <img src={photo} alt={`Uploaded ${index + 1}`} className="w-full h-full object-cover" />
                      <button
                        type="button"
                        onClick={() => setReviewPhotos((prev) => prev.filter((_, i) => i !== index))}
                        className="absolute inset-0 bg-black/50 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                        title={t('Remove photo', 'फोटो हटाएं')}
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  ))}

                  {reviewPhotos.length < 3 && (
                    <label className="w-16 h-16 rounded-xl border-2 border-dashed border-stone-300 hover:border-amber-500 bg-white flex flex-col items-center justify-center cursor-pointer transition-colors text-stone-400 hover:text-amber-600">
                      <Camera className="w-5 h-5 mb-0.5" />
                      <span className="text-[9px] font-bold">{t('Add', 'जोड़ें')}</span>
                      <input
                        type="file"
                        accept="image/jpeg,image/png,image/webp"
                        onChange={handlePhotoUpload}
                        className="hidden"
                      />
                    </label>
                  )}
                </div>
                <p className="text-[10px] text-stone-400 mt-1">
                  {t('Supported: JPEG, PNG, WebP (max 2MB per photo)', 'समर्थित: JPEG, PNG, WebP (अधिकतम 2MB प्रति फोटो)')}
                </p>
              </div>

              {/* Private Note To Artisan */}
              <div className="p-3.5 bg-white rounded-xl border border-amber-200/80 text-xs space-y-1.5">
                <div className="flex items-center gap-1.5 font-bold text-amber-900">
                  <Lock className="w-3.5 h-3.5 text-amber-700" />
                  <span>{t('Private Note to Artisan (Optional)', 'कारीगर को निजी संदेश (वैकल्पिक)')}</span>
                </div>
                <p className="text-[11px] text-amber-800 leading-relaxed">
                  🔒 Visible only to the artisan — Share private feedback on packaging, sizing, or finish. Never shown publicly.
                </p>
                <textarea
                  rows={2}
                  maxLength={500}
                  value={reviewPrivateNote}
                  onChange={(e) => setReviewPrivateNote(e.target.value)}
                  placeholder={t('e.g. Loved the surrender of cooling water, but double wrap the spout next time...', 'जैसे: उत्पाद बहुत पसंद आया, पैकेजिंग में थोड़ी और सुरक्षा रखें...')}
                  className="w-full px-3 py-2 text-xs rounded-xl border border-stone-200 bg-stone-50/50 focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500"
                />
              </div>

              {/* Form Buttons */}
              <div className="flex items-center justify-end gap-2.5 pt-2">
                <button
                  type="button"
                  onClick={() => setShowReviewForm(false)}
                  className="px-4 py-2 text-xs font-bold text-stone-600 hover:text-stone-900 rounded-xl hover:bg-stone-100 transition-colors"
                >
                  {t('Cancel', 'रद्द करें')}
                </button>
                <button
                  type="submit"
                  disabled={reviewSubmitting}
                  className="px-5 py-2 text-xs font-bold text-white bg-terracotta-600 hover:bg-terracotta-700 rounded-xl transition-colors shadow-sm disabled:opacity-50 flex items-center gap-1.5"
                >
                  {reviewSubmitting ? (
                    <>
                      <Loader2 className="w-3.5 h-3.5 animate-spin" />
                      <span>{t('Submitting...', 'भेज रहे हैं...')}</span>
                    </>
                  ) : (
                    <span>{t('Submit Review', 'समीक्षा दर्ज करें')}</span>
                  )}
                </button>
              </div>
            </form>
          )}

          {/* Reviews List */}
          <div className="mt-5 space-y-3.5">
            {reviewsLoading ? (
              <div className="py-8 text-center text-stone-400">
                <Loader2 className="w-5 h-5 animate-spin mx-auto mb-2" />
                <p className="text-xs">{t('Loading reviews…', 'समीक्षाएं लोड हो रही हैं…')}</p>
              </div>
            ) : reviews.length === 0 ? (
              <div className="py-8 text-center bg-stone-50/60 rounded-2xl border border-dashed border-stone-200 p-6">
                <Star className="w-8 h-8 text-amber-300 mx-auto mb-2" />
                <p className="text-xs font-bold text-stone-700">
                  {t('No reviews yet', 'अभी तक कोई समीक्षा नहीं')}
                </p>
                <p className="text-[11px] text-stone-500 mt-1 max-w-xs mx-auto">
                  {t('Be the first to share your experience with this handcrafted piece!', 'इस हस्तनिर्मित कलाकृति के साथ अपना अनुभव साझा करने वाले पहले व्यक्ति बनें!')}
                </p>
              </div>
            ) : (
              reviews.map((rev) => (
                <div
                  key={rev.id}
                  className="p-4 bg-stone-50/70 hover:bg-stone-50 rounded-2xl border border-stone-200/80 transition-colors"
                >
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <div className="flex items-center gap-2">
                      <span className="font-bold text-xs text-stone-900">
                        {rev.customerDisplayName}
                      </span>
                      {rev.verifiedPurchase && (
                        <span className="text-[9px] bg-emerald-50 text-emerald-700 border border-emerald-200 px-1.5 py-0.5 rounded font-bold">
                          Verified Buyer ✓
                        </span>
                      )}
                    </div>
                    <span className="text-[10px] text-stone-400">
                      {new Date(rev.createdAt).toLocaleDateString(language === 'hi' ? 'hi-IN' : 'en-IN', {
                        day: 'numeric',
                        month: 'short',
                        year: 'numeric',
                      })}
                    </span>
                  </div>

                  {/* Stars */}
                  <div className="flex items-center gap-0.5 mt-1 text-amber-500">
                    {[1, 2, 3, 4, 5].map((s) => (
                      <Star
                        key={s}
                        className={`w-3.5 h-3.5 ${
                          s <= rev.rating
                            ? 'fill-amber-400 text-amber-500'
                            : 'text-stone-300'
                        }`}
                      />
                    ))}
                  </div>

                  {/* Review text */}
                  <p className="text-xs text-stone-700 mt-2 leading-relaxed whitespace-pre-line">
                    {rev.reviewText}
                  </p>

                  {/* Photos */}
                  {rev.photos && rev.photos.length > 0 && (
                    <div className="flex gap-2 overflow-x-auto pb-1 mt-3 scrollbar-thin">
                      {rev.photos.map((photoUrl, pIdx) => (
                        <button
                          key={pIdx}
                          type="button"
                          onClick={() => setSelectedPhotoPreview(photoUrl)}
                          className="w-16 h-16 rounded-xl overflow-hidden border border-stone-200 shrink-0 hover:opacity-90 hover:ring-2 hover:ring-amber-400 transition-all cursor-zoom-in"
                        >
                          <img
                            src={photoUrl}
                            alt={`Review photo ${pIdx + 1}`}
                            className="w-full h-full object-cover"
                          />
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              ))
            )}
          </div>
        </SectionCard>

        {/* GI Disclaimer */}
        {product.isGiInformational && (
          <div className="bg-amber-50 border border-amber-200/80 rounded-2xl p-4 text-xs text-amber-800 flex items-start gap-2">
            <Info aria-hidden="true" className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
            <div>
              <p className="font-bold mb-0.5">
                {t('Informational GI Assistance', 'सूचनात्मक जीआई सहायता')}
              </p>
              <p className="leading-relaxed">
                {product.giDisclaimer ||
                  t(
                    'This listing indicates traditional regional craft characteristics. It is not a legal GI certificate.',
                    'यह लिस्टिंग पारंपरिक क्षेत्रीय शिल्प विशेषताओं को दर्शाती है। यह कानूनी जीआई प्रमाणपत्र नहीं है।'
                  )}
              </p>
            </div>
          </div>
        )}
      </div>

      {/* B2B Bulk RFQ Modal */}
      {showRfqModal && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-white rounded-3xl max-w-lg w-full p-6 shadow-2xl border border-stone-200 animate-in fade-in zoom-in-95 duration-150 my-8">
            <div className="flex items-center justify-between pb-3 border-b border-stone-100">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center">
                  <Package className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="font-extrabold text-base text-stone-900">
                    {t('B2B Bulk Procurement RFQ', 'थोक खरीद पूछताछ (RFQ)')}
                  </h3>
                  <p className="text-[11px] text-stone-500">
                    {loc.title} · ₹{product.finalListingPrice} / unit
                  </p>
                </div>
              </div>
              <button
                onClick={() => setShowRfqModal(false)}
                className="p-1 rounded-lg text-stone-400 hover:text-stone-700 hover:bg-stone-100 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {rfqSuccess ? (
              <div className="py-8 text-center space-y-3">
                <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h4 className="font-extrabold text-lg text-stone-900">
                  {t('Bulk Quote Request Submitted Successfully', 'थोक कोटेशन अनुरोध सफलतापूर्वक भेजा गया')}
                </h4>
                <p className="text-xs text-stone-600 max-w-sm mx-auto leading-relaxed">
                  {t(
                    'Bulk quote request submitted successfully. The artisan has received your inquiry directly and will reach out via WhatsApp / phone.',
                    'थोक कोटेशन अनुरोध सफलतापूर्वक भेजा गया। कारीगर को आपकी पूछताछ सीधे प्राप्त हुई है और वे व्हाट्सएप / फोन के माध्यम से संपर्क करेंगे।'
                  )}
                </p>
                <div className="pt-3">
                  <button
                    onClick={() => {
                      setShowRfqModal(false);
                      setRfqSuccess(false);
                    }}
                    className="px-6 py-2.5 rounded-xl bg-stone-900 text-white font-bold text-xs hover:bg-stone-800 transition-colors"
                  >
                    {t('Done', 'पूर्ण')}
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleRfqSubmit} className="mt-4 space-y-3.5">
                {rfqError && (
                  <div className="p-3 bg-red-50 text-red-700 border border-red-200 rounded-xl text-xs flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 shrink-0" />
                    <span>{rfqError}</span>
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[11px] font-bold text-stone-700 mb-1">
                      {t('Your Name *', 'आपका नाम *')}
                    </label>
                    <input
                      type="text"
                      required
                      value={rfqName}
                      onChange={(e) => setRfqName(e.target.value)}
                      placeholder="e.g. Anand Sharma"
                      className="w-full px-3 py-2 text-xs rounded-xl border border-stone-200 focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold text-stone-700 mb-1">
                      {t('WhatsApp / Mobile *', 'मोबाइल / WhatsApp *')}
                    </label>
                    <input
                      type="tel"
                      required
                      value={rfqPhone}
                      onChange={(e) => setRfqPhone(e.target.value)}
                      placeholder="e.g. 9876543210"
                      className="w-full px-3 py-2 text-xs rounded-xl border border-stone-200 focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[11px] font-bold text-stone-700 mb-1">
                      {t('Required Quantity *', 'मांगी गई मात्रा *')}
                    </label>
                    <input
                      type="number"
                      required
                      min={5}
                      value={rfqQuantity}
                      onChange={(e) => setRfqQuantity(parseInt(e.target.value, 10) || 5)}
                      className="w-full px-3 py-2 text-xs rounded-xl border border-stone-200 focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold text-stone-700 mb-1">
                      {t('Intended Channel / Purpose', 'उपयोग / बाज़ार श्रेणी')}
                    </label>
                    <select
                      value={rfqChannel}
                      onChange={(e) => setRfqChannel(e.target.value)}
                      className="w-full px-3 py-2 text-xs rounded-xl border border-stone-200 focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500 bg-white"
                    >
                      <option value="Corporate Gifting">Corporate Gifting</option>
                      <option value="Boutique Retail">Boutique Retail</option>
                      <option value="Hotel/Hospitality">Hotel/Hospitality</option>
                      <option value="Wedding/Events">Wedding/Events</option>
                      <option value="Export">Export</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] font-bold text-stone-700 mb-1">
                    {t('Email Address (Optional)', 'ईमेल (वैकल्पिक)')}
                  </label>
                  <input
                    type="email"
                    value={rfqEmail}
                    onChange={(e) => setRfqEmail(e.target.value)}
                    placeholder="e.g. anand@company.com"
                    className="w-full px-3 py-2 text-xs rounded-xl border border-stone-200 focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-bold text-stone-700 mb-1">
                    {t('Customization & Delivery Notes', 'अनुकूलन एवं विवरण')}
                  </label>
                  <textarea
                    rows={3}
                    value={rfqMessage}
                    onChange={(e) => setRfqMessage(e.target.value)}
                    placeholder={t('Mention any custom branding, required delivery timeline, or bulk packaging needs...', 'कस्टम ब्रांडिंग, डिलीवरी समय आदि दर्ज करें...')}
                    className="w-full px-3 py-2 text-xs rounded-xl border border-stone-200 focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500 resize-none"
                  />
                </div>

                <div className="pt-2 flex items-center justify-end gap-2.5">
                  <button
                    type="button"
                    onClick={() => setShowRfqModal(false)}
                    className="px-4 py-2 text-xs font-bold text-stone-600 hover:text-stone-900 rounded-xl hover:bg-stone-100 transition-colors"
                  >
                    {t('Cancel', 'रद्द करें')}
                  </button>
                  <button
                    type="submit"
                    disabled={rfqSubmitting}
                    className="px-5 py-2 text-xs font-bold text-white bg-amber-600 hover:bg-amber-700 rounded-xl transition-colors shadow-sm disabled:opacity-50 flex items-center gap-1.5"
                  >
                    {rfqSubmitting ? (
                      <>
                        <Loader2 className="w-3.5 h-3.5 animate-spin" />
                        <span>{t('Submitting...', 'भेज रहे हैं...')}</span>
                      </>
                    ) : (
                      <>
                        <Package className="w-3.5 h-3.5" />
                        <span>{t('Submit Bulk RFQ', 'थोक RFQ भेजें')}</span>
                      </>
                    )}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}

      {/* Customer Review Photo Lightbox Modal */}
      {selectedPhotoPreview && (
        <div
          className="fixed inset-0 z-50 bg-black/85 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setSelectedPhotoPreview(null)}
        >
          <div
            className="relative max-w-2xl max-h-[85vh] bg-stone-950 rounded-2xl overflow-hidden p-2 shadow-2xl border border-stone-800"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedPhotoPreview(null)}
              className="absolute top-4 right-4 p-1.5 rounded-full bg-black/70 text-white hover:bg-black transition-colors z-10"
              title={t('Close preview', 'पूर्वावलोकन बंद करें')}
            >
              <X className="w-5 h-5" />
            </button>
            <img
              src={selectedPhotoPreview}
              alt="Review photo full preview"
              className="max-h-[80vh] w-auto max-w-full mx-auto object-contain rounded-xl"
            />
          </div>
        </div>
      )}

      {/* Security Auth Gate Modal for Protected Guest Actions */}
      <AuthGateModal
        isOpen={showAuthGate}
        onClose={() => setShowAuthGate(false)}
        actionType={authGateAction}
        returnUrl={`/product/${product?.id || ''}`}
      />
    </div>
  );
}
