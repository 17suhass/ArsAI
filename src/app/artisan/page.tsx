'use client';

import React, { useState, useEffect, Suspense } from 'react';
import Link from 'next/link';
import { useRouter, useSearchParams } from 'next/navigation';
import { useMockAuth } from '@/context/MockAuthContext';
import AuthGuard from '@/components/AuthGuard';
import { 
  Camera, Mic, Sparkles, Package, TrendingUp, Landmark, 
  MessageSquare, ExternalLink, ShieldCheck, CheckCircle2, 
  MapPin, Phone, HelpCircle, ArrowRight, IndianRupee, AlertCircle,
  Clock, Check, Tag, Star, Lock, ThumbsUp, Heart, Edit3, User, X, Info,
  ChevronDown, ChevronUp, EyeOff, Eye, Archive, Trash2
} from 'lucide-react';
import { getRecommendedMarketChannels, getMarketplaceReadiness } from '@/lib/marketLinkage';
import { getLocalizedProduct, getLocalizedArtisan } from '@/lib/i18n/productContent';

interface ArtisanFeedbackReview {
  id: string;
  productId: string;
  productTitle: string;
  rating: number;
  reviewText: string;
  customerDisplayName: string;
  verifiedPurchase: boolean;
  photos: string[];
  createdAt: string;
  privateNote?: string | null;
}

interface ProductFeedbackStats {
  productId: string;
  productTitle: string;
  reviewCount: number;
  averageRating: number;
}

interface ProductFeedbackGroup {
  product: any;
  reviews: ArtisanFeedbackReview[];
  summary: {
    averageRating: number;
    totalReviews: number;
  };
}

function getReviewHeadline(text: string, rating: number): string {
  if (!text) return rating >= 5 ? 'Exceptional Craftsmanship' : 'Customer Feedback';
  const firstSentence = text.split(/[.!?]/)[0]?.trim();
  if (firstSentence && firstSentence.length <= 65) {
    return firstSentence;
  }
  if (firstSentence && firstSentence.length > 65) {
    return firstSentence.slice(0, 60).trim() + '…';
  }
  return rating >= 5 ? 'Exceptional Craftsmanship' : rating === 4 ? 'Great Quality & Finish' : 'Verified Buyer Feedback';
}

function ArtisanDashboardContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const tabParam = searchParams.get('tab');
  const { currentUser, language, t } = useMockAuth();
  const [artisanData, setArtisanData] = useState<any>(null);
  const [schemes, setSchemes] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState<'listings' | 'inquiries' | 'feedback' | 'schemes'>(
    tabParam === 'inquiries' || tabParam === 'schemes' || tabParam === 'feedback' ? tabParam : 'listings'
  );
  const [inquiriesList, setInquiriesList] = useState<any[]>([]);
  const [productFeedbackGroups, setProductFeedbackGroups] = useState<ProductFeedbackGroup[]>([]);
  const [feedbackReviews, setFeedbackReviews] = useState<ArtisanFeedbackReview[]>([]);
  const [productFeedbackStats, setProductFeedbackStats] = useState<ProductFeedbackStats[]>([]);
  const [overallRating, setOverallRating] = useState(0);
  const [totalReviewsCount, setTotalReviewsCount] = useState(0);
  const [selectedFeedbackProduct, setSelectedFeedbackProduct] = useState<string>('ALL');
  const [feedbackLoading, setFeedbackLoading] = useState(true);
  const [showMoreDetailsModal, setShowMoreDetailsModal] = useState(false);
  const [showEditProfileModal, setShowEditProfileModal] = useState(false);
  const [showAccountVerificationModal, setShowAccountVerificationModal] = useState(false);
  const [verificationUpiId, setVerificationUpiId] = useState('');
  const [savingVerification, setSavingVerification] = useState(false);
  const [verificationMessage, setVerificationMessage] = useState('');
  const [editFormData, setEditFormData] = useState<any>({});
  const [savingProfile, setSavingProfile] = useState(false);
  const [profileSaveSuccess, setProfileSaveSuccess] = useState(false);

  // Craft Removal / Unpublish & Feedback UI states
  const [isCustomerReviewsExpanded, setIsCustomerReviewsExpanded] = useState(true);
  const [showAllFilterProducts, setShowAllFilterProducts] = useState(false);
  const [productToUnpublish, setProductToUnpublish] = useState<any>(null);
  const [productToDeleteDraft, setProductToDeleteDraft] = useState<any>(null);
  const [isUnpublishing, setIsUnpublishing] = useState(false);
  const [isDeletingDraft, setIsDeletingDraft] = useState(false);
  const [expandedPrivateNotes, setExpandedPrivateNotes] = useState<Record<string, boolean>>({});

  const togglePrivateNote = (reviewId: string) => {
    setExpandedPrivateNotes((prev) => ({
      ...prev,
      [reviewId]: !prev[reviewId],
    }));
  };


  const handleConfirmUnpublish = async () => {
    if (!productToUnpublish) return;
    setIsUnpublishing(true);
    try {
      const res = await fetch(`/api/products/${productToUnpublish.id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
          'x-arsai-role': 'ARTISAN',
          'x-arsai-user-id': currentUser?.id || '',
        },
        body: JSON.stringify({ status: 'UNPUBLISHED' }),
      });
      const data = await res.json();
      if (data.success) {
        setArtisanData((prev: any) => {
          if (!prev) return prev;
          return {
            ...prev,
            products: prev.products.map((p: any) =>
              p.id === productToUnpublish.id ? { ...p, status: 'UNPUBLISHED' } : p
            ),
          };
        });
        setProductToUnpublish(null);
      } else {
        alert(data.error || 'Failed to unpublish product');
      }
    } catch (e) {
      console.error('Error unpublishing product:', e);
      alert('Error unpublishing product');
    } finally {
      setIsUnpublishing(false);
    }
  };

  const handleRepublishProduct = async (product: any) => {
    try {
      const res = await fetch(`/api/products/${product.id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
          'x-arsai-role': 'ARTISAN',
          'x-arsai-user-id': currentUser?.id || '',
        },
        body: JSON.stringify({ status: 'PUBLISHED' }),
      });
      const data = await res.json();
      if (data.success) {
        setArtisanData((prev: any) => {
          if (!prev) return prev;
          return {
            ...prev,
            products: prev.products.map((p: any) =>
              p.id === product.id ? { ...p, status: 'PUBLISHED' } : p
            ),
          };
        });
      } else {
        alert(data.error || 'Failed to republish product');
      }
    } catch (e) {
      console.error('Error republishing product:', e);
      alert('Error republishing product');
    }
  };

  const handleConfirmDeleteDraft = async () => {
    if (!productToDeleteDraft) return;
    setIsDeletingDraft(true);
    try {
      const res = await fetch(`/api/products/${productToDeleteDraft.id}`, {
        method: 'DELETE',
        headers: {
          'x-arsai-role': 'ARTISAN',
          'x-arsai-user-id': currentUser?.id || '',
        },
      });
      const data = await res.json();
      if (data.success) {
        setArtisanData((prev: any) => {
          if (!prev) return prev;
          return {
            ...prev,
            products: prev.products.filter((p: any) => p.id !== productToDeleteDraft.id),
          };
        });
        setProductToDeleteDraft(null);
      } else {
        alert(data.error || 'Failed to delete draft');
      }
    } catch (e) {
      console.error('Error deleting draft:', e);
      alert('Error deleting draft');
    } finally {
      setIsDeletingDraft(false);
    }
  };

  useEffect(() => {
    if (tabParam === 'inquiries' || tabParam === 'schemes' || tabParam === 'listings' || tabParam === 'feedback') {
      setActiveTab(tabParam);
    }
  }, [tabParam]);

  useEffect(() => {
    async function loadData() {
      try {
        const [artisanRes, schemesRes] = await Promise.all([
          fetch('/api/artisan'),
          fetch('/api/schemes')
        ]);
        const aData = await artisanRes.json();
        const sData = await schemesRes.json();
        if (aData.success) {
          setArtisanData(aData.artisan);
          const inqs = (aData.artisan?.products || []).flatMap((p: any) => 
            (p.inquiries || []).map((inq: any) => ({ ...inq, productTitle: p.title }))
          );
          setInquiriesList(inqs);

          // Fetch reviews for each product with forArtisan=true
          if (aData.artisan?.products?.length > 0) {
            try {
              const reviewResults = await Promise.all(
                aData.artisan.products.map(async (prod: any) => {
                  try {
                    const revRes = await fetch(`/api/reviews?productId=${prod.id}&forArtisan=true`, {
                      headers: { 'x-arsai-role': 'ARTISAN' },
                    });
                    const revData = await revRes.json();
                    if (revData.success) {
                      return {
                        product: prod,
                        reviews: (revData.reviews || []).map((r: any) => ({ ...r, productTitle: prod.title })),
                        summary: revData.summary || { averageRating: 0, totalReviews: 0 },
                      };
                    }
                  } catch (e) {
                    console.error('Failed to load reviews for product', prod.id, e);
                  }
                  // Fallback to reviews included on product
                  const prodReviews = (prod.reviews || []).map((r: any) => ({
                    ...r,
                    productTitle: prod.title,
                    photos: typeof r.photos === 'string' ? (() => { try { return JSON.parse(r.photos); } catch { return [r.photos]; } })() : (r.photos || []),
                  }));
                  const avg = prodReviews.length > 0
                    ? Number((prodReviews.reduce((acc: number, cur: any) => acc + (cur.rating || 0), 0) / prodReviews.length).toFixed(1))
                    : 0;
                  return {
                    product: prod,
                    reviews: prodReviews,
                    summary: { averageRating: avg, totalReviews: prodReviews.length },
                  };
                })
              );

              const allReviews: ArtisanFeedbackReview[] = [];
              const stats: ProductFeedbackStats[] = [];
              let totalSum = 0;
              let totalCount = 0;

              reviewResults.forEach(({ product, reviews, summary }) => {
                allReviews.push(...reviews);
                stats.push({
                  productId: product.id,
                  productTitle: product.title,
                  reviewCount: summary.totalReviews,
                  averageRating: summary.averageRating,
                });
                totalSum += summary.averageRating * summary.totalReviews;
                totalCount += summary.totalReviews;
              });

              setProductFeedbackGroups(reviewResults);
              setFeedbackReviews(allReviews);
              setProductFeedbackStats(stats);
              setTotalReviewsCount(totalCount);
              setOverallRating(totalCount > 0 ? Number((totalSum / totalCount).toFixed(1)) : 0);
            } catch (err) {
              console.error('Error fetching artisan reviews:', err);
            } finally {
              setFeedbackLoading(false);
            }
          } else {
            setFeedbackLoading(false);
          }
        }
        if (sData.success) setSchemes(sData.schemes);
      } catch (err) {
        console.error('Failed to load artisan dashboard', err);
      } finally {
        setLoading(false);
      }
    }
    loadData();
  }, []);

  const handleUpdateInquiryStatus = async (inquiryId: string, newStatus: string) => {
    try {
      const res = await fetch('/api/inquiries', {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ inquiryId, status: newStatus }),
      });
      const data = await res.json();
      if (data.success) {
        setInquiriesList((prev) =>
          prev.map((inq) => (inq.id === inquiryId ? { ...inq, status: newStatus } : inq))
        );
      }
    } catch (err) {
      console.error('Failed to update inquiry status', err);
    }
  };

  const handleSaveProfile = async (e: React.FormEvent) => {
    e.preventDefault();
    setSavingProfile(true);
    try {
      // Sanitize: strip upiId and pehchanCardNo from normal profile edits
      const { upiId, pehchanCardNo, ...sanitizedData } = editFormData;
      const res = await fetch('/api/artisan', {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(sanitizedData),
      });
      const data = await res.json();
      if (data.success && data.artisan) {
        setArtisanData(data.artisan);
        setProfileSaveSuccess(true);
        setTimeout(() => {
          setShowEditProfileModal(false);
          setProfileSaveSuccess(false);
        }, 1000);
      }
    } catch (err) {
      console.error('Failed to update profile', err);
    } finally {
      setSavingProfile(false);
    }
  };

  const handleSaveVerificationUpi = async (e: React.FormEvent) => {
    e.preventDefault();
    setSavingVerification(true);
    setVerificationMessage('');
    try {
      const res = await fetch('/api/artisan', {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ upiId: verificationUpiId.trim() }),
      });
      const data = await res.json();
      if (data.success && data.artisan) {
        setArtisanData(data.artisan);
        setVerificationMessage(t('UPI Payout account updated successfully.', 'UPI पेआउट खाता सफलतापूर्वक अपडेट किया गया।'));
        setTimeout(() => {
          setVerificationMessage('');
        }, 3000);
      }
    } catch (err) {
      console.error('Failed to update verification data', err);
    } finally {
      setSavingVerification(false);
    }
  };

  if (loading) {
    return (
      <div className="max-w-5xl mx-auto px-4 py-16 text-center animate-pulse">
        <div className="w-20 h-20 bg-stone-200 rounded-full mx-auto mb-4" />
        <div className="h-6 w-48 bg-stone-200 rounded mx-auto mb-2" />
        <div className="h-4 w-64 bg-stone-200 rounded mx-auto" />
      </div>
    );
  }

  const products = artisanData?.products || [];
  const locArtisan = artisanData ? getLocalizedArtisan(artisanData, language) : null;
  const username = artisanData?.upiId
    ? artisanData.upiId.split('@')[0].replace(new RegExp('\\.', 'g'), '')
    : (artisanData?.fullName ? artisanData.fullName.toLowerCase().replace(new RegExp('[^a-z0-9]', 'g'), '') : 'artisan');

  return (
    <div className="min-h-screen bg-stone-100/60 pb-24">
      {/* 3. CLEAN ARTISAN DASHBOARD HEADER (No congested wall of metadata) */}
      <section className="bg-gradient-to-br from-terracotta-700 via-terracotta-800 to-amber-900 text-white pt-8 pb-10 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 text-center sm:text-left">
            {/* Profile Photo */}
            <div className="relative shrink-0">
              <img
                src={artisanData?.profileImage || 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300'}
                alt={artisanData?.fullName}
                className="w-24 h-24 sm:w-28 sm:h-28 rounded-3xl object-cover ring-4 ring-white/20 shadow-xl"
              />
              <span className="absolute -bottom-1 -right-1 bg-emerald-500 text-white p-1 rounded-full text-xs shadow">
                <CheckCircle2 className="w-4 h-4" />
              </span>
            </div>

            {/* Profile Info & Actions */}
            <div className="flex-1 min-w-0 space-y-2">
              <div>
                <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
                  {artisanData?.fullName}
                </h1>
                <p className="text-amber-200 text-xs sm:text-sm font-semibold mt-0.5">
                  @{username}
                </p>
                <p className="text-stone-200 text-xs sm:text-sm font-medium mt-1">
                  {locArtisan?.primaryCraft || artisanData?.primaryCraft}
                </p>
              </div>

              {/* Short Bio */}
              {(artisanData?.bioEnglish || artisanData?.bioLocal) && (
                <p className="text-stone-200 text-xs max-w-2xl line-clamp-2 leading-relaxed opacity-90 italic">
                  "{locArtisan?.bio || artisanData?.bioEnglish}"
                </p>
              )}

              {/* Rating & Review Summary */}
              <div className="flex items-center justify-center sm:justify-start gap-2 pt-1 text-xs">
                <div className="flex items-center gap-1 font-bold text-amber-300 bg-black/25 px-2.5 py-1 rounded-lg border border-white/10">
                  <Star className="w-3.5 h-3.5 fill-amber-300 text-amber-300" />
                  <span>{overallRating > 0 ? overallRating.toFixed(1) : '5.0'}</span>
                </div>
                <span className="text-white/40">•</span>
                <span className="text-stone-200 font-semibold">
                  {totalReviewsCount} {t('Reviews', 'समीक्षाएं')}
                </span>
              </div>

              {/* Action Button: See More Details (Account management and KYC reside in Settings) */}
              <div className="pt-3 flex flex-wrap items-center justify-center sm:justify-start gap-3">
                <button
                  type="button"
                  id="artisan-see-details-btn"
                  onClick={() => setShowMoreDetailsModal(true)}
                  className="px-4 py-2 rounded-xl bg-white/15 hover:bg-white/25 text-white font-bold text-xs border border-white/20 transition-colors flex items-center gap-1.5 cursor-pointer shadow-xs"
                >
                  <Info className="w-3.5 h-3.5 text-white/80" />
                  <span>{t('See More Details', 'अधिक विवरण देखें')}</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 -mt-6">
        {/* Phase 2 Teaser: Snap & Speak Action Box */}
        <div className="bg-white rounded-3xl p-5 sm:p-6 shadow-xl border border-stone-200/80 mb-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4 text-center sm:text-left">
            <div className="w-14 h-14 rounded-2xl bg-amber-100 text-amber-800 flex items-center justify-center shrink-0 shadow-inner">
              <Camera className="w-7 h-7 text-terracotta-600" />
            </div>
            <div>
              <div className="flex items-center justify-center sm:justify-start gap-2">
                <h2 className="text-lg font-extrabold text-stone-900">
                  {t('Snap & Speak New Craft', 'नया शिल्प जोड़ें (फोटो और आवाज)')}
                </h2>
                <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-terracotta-100 text-terracotta-800 uppercase tracking-wider">
                  AI-Powered Cataloging
                </span>
              </div>
              <p className="text-xs text-stone-500 mt-1 max-w-md">
                {t(
                  'No complex typing. Just take a photo and speak 2 sentences in Hindi or English. Gemini AI generates the catalog.',
                  'कोई जटिल फॉर्म नहीं। बस एक फोटो लें और हिंदी में दो वाक्य बोलें। जेमिनी एआई कैटलॉग तैयार करेगा।'
                )}
              </p>
            </div>
          </div>

          <Link
            href="/artisan/new"
            className="w-full sm:w-auto px-6 py-3.5 rounded-2xl bg-gradient-to-r from-terracotta-600 to-amber-700 hover:from-terracotta-700 hover:to-amber-800 text-white font-extrabold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-lg shadow-terracotta-600/25 active:scale-95 transition-all"
          >
            <Camera className="w-4 h-4" />
            <Mic className="w-4 h-4 text-amber-300" />
            <span>{t('Add New Craft (Snap & Speak)', 'नया शिल्प जोड़ें (फोटो और आवाज)')}</span>
          </Link>
        </div>

        {/* Dashboard Navigation Tabs */}
        <div className="flex bg-stone-200/70 p-1 rounded-2xl mb-6 text-xs font-bold gap-1 overflow-x-auto">
          <button
            onClick={() => setActiveTab('listings')}
            className={`flex-1 min-w-[120px] py-2.5 rounded-xl transition-all flex items-center justify-center gap-1.5 ${
              activeTab === 'listings' ? 'bg-white text-stone-900 shadow-sm' : 'text-stone-600 hover:text-stone-900'
            }`}
          >
            <Package className="w-4 h-4" />
            <span>{t('Catalog', 'कैटलॉग')} ({products.length})</span>
          </button>
          <button
            onClick={() => setActiveTab('inquiries')}
            className={`flex-1 min-w-[120px] py-2.5 rounded-xl transition-all flex items-center justify-center gap-1.5 ${
              activeTab === 'inquiries' ? 'bg-white text-stone-900 shadow-sm' : 'text-stone-600 hover:text-stone-900'
            }`}
          >
            <MessageSquare className="w-4 h-4 text-emerald-600" />
            <span>{t('Inquiries & RFQs', 'खरीदार पूछताछ')} ({inquiriesList.length})</span>
          </button>
          <button
            id="tab-feedback-btn"
            onClick={() => setActiveTab('feedback')}
            className={`flex-1 min-w-[120px] py-2.5 rounded-xl transition-all flex items-center justify-center gap-1.5 ${
              activeTab === 'feedback' ? 'bg-white text-stone-900 shadow-sm' : 'text-stone-600 hover:text-stone-900'
            }`}
          >
            <Star className="w-4 h-4 text-amber-500 fill-amber-500" />
            <span>{t('Customer Feedback', 'ग्राहक समीक्षा')} ({totalReviewsCount})</span>
          </button>
          <button
            onClick={() => setActiveTab('schemes')}
            className={`flex-1 min-w-[120px] py-2.5 rounded-xl transition-all flex items-center justify-center gap-1.5 ${
              activeTab === 'schemes' ? 'bg-white text-stone-900 shadow-sm' : 'text-stone-600 hover:text-stone-900'
            }`}
          >
            <Landmark className="w-4 h-4 text-amber-600" />
            <span>{t('Govt Schemes', 'सरकारी योजनाएं')} ({schemes.length})</span>
          </button>
        </div>

        {/* TAB 1: Published Catalog & AI Quality Score */}
        {activeTab === 'listings' && (
          <div className="space-y-4">
            {/* 5. Small Review Summary on Dashboard (Requirement 5) */}
            <div className="bg-white rounded-3xl p-5 border border-stone-200/80 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-3.5 text-center sm:text-left">
                <div className="w-12 h-12 rounded-2xl bg-amber-50 text-amber-600 border border-amber-200/80 flex items-center justify-center shrink-0 shadow-2xs">
                  <Star className="w-6 h-6 fill-amber-400 text-amber-500" />
                </div>
                <div>
                  <div className="flex items-center justify-center sm:justify-start gap-2">
                    <h3 className="font-extrabold text-stone-900 text-sm sm:text-base">
                      {t('Customer Reviews', 'ग्राहक समीक्षा')}
                    </h3>
                    <span className="text-xs font-black text-amber-700 bg-amber-100/80 px-2 py-0.5 rounded-lg">
                      {overallRating > 0 ? `${overallRating.toFixed(1)} ★` : '5.0 ★'}
                    </span>
                  </div>
                  <p className="text-xs text-stone-500 mt-0.5">
                    {totalReviewsCount} {t('verified community reviews across your catalog', 'आपके शिल्पों पर प्राप्त सत्यापित समीक्षाएं')}
                  </p>
                </div>
              </div>

              <button
                type="button"
                onClick={() => setActiveTab('feedback')}
                className="px-4 py-2 bg-stone-100 hover:bg-stone-200 text-stone-800 text-xs font-bold rounded-xl transition-colors shrink-0"
              >
                {t('View All Feedback →', 'सभी समीक्षाएं देखें →')}
              </button>
            </div>

            {products.map((product: any) => {
              const loc = getLocalizedProduct(product, language);
              return (
              <div
                key={product.id}
                onClick={() => router.push(`/product/${product.id}`)}
                className="bg-white rounded-3xl p-5 border border-stone-200/80 shadow-sm flex flex-col md:flex-row gap-5 items-center md:items-stretch cursor-pointer hover:border-terracotta-300 hover:shadow-md transition-all group"
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    router.push(`/product/${product.id}`);
                  }
                }}
              >
                {/* Product Thumbnail */}
                <div className="w-full md:w-48 aspect-square rounded-2xl overflow-hidden bg-stone-100 relative shrink-0">
                  <img
                    src={product.primaryImageUrl}
                    alt={loc.title}
                    className="w-full h-full object-cover"
                  />
                  <div
                    onClick={(e) => e.stopPropagation()}
                    className="absolute top-2 left-2 bg-stone-900/80 backdrop-blur-md text-white px-2 py-0.5 rounded-full text-[10px] font-bold cursor-default select-none"
                  >
                    {loc.craftCategory}
                  </div>
                </div>

                {/* Details & AI Quality Score */}
                <div className="flex-1 flex flex-col justify-between w-full">
                  <div>
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <h3 className="font-extrabold text-base text-stone-900">
                        {loc.title}
                      </h3>

                      {/* AI Listing Quality Score (Refinement 4) */}
                      {product.aiQualityScore && (
                        <div
                          onClick={(e) => e.stopPropagation()}
                          className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200 text-xs font-bold cursor-default select-none"
                        >
                          <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
                          <span>{t('AI Quality Score:', 'AI गुणवत्ता स्कोर:')} {product.aiQualityScore}/100</span>
                        </div>
                      )}
                    </div>

                    {loc.secondaryTitle && (
                      <p className="text-xs text-stone-500 font-medium">{loc.secondaryTitle}</p>
                    )}

                    {/* Cultural Heritage Story (Scrollable without triggering card navigation) */}
                    <div
                      onClick={(e) => e.stopPropagation()}
                      onWheel={(e) => e.stopPropagation()}
                      className="mt-2 max-h-24 overflow-y-auto pr-1.5 text-xs text-stone-600 leading-relaxed italic bg-stone-50 p-2.5 rounded-xl border border-stone-100 scrollbar-thin cursor-text select-text"
                    >
                      "{loc.culturalHeritageStory || loc.description}"
                    </div>

                    {/* 3-Step Pricing Transparency Breakdown + Phase 4 Extensions */}
                    <div
                      onClick={(e) => e.stopPropagation()}
                      className="mt-3 p-3.5 bg-amber-50/70 rounded-2xl border border-amber-200/60 text-xs space-y-2.5 cursor-default"
                    >
                      <div className="font-bold text-stone-800 flex items-center justify-between">
                        <div className="flex items-center gap-1.5">
                          <TrendingUp className="w-3.5 h-3.5 text-terracotta-600" />
                          <span>{t('Fair Pricing Breakdown', 'निष्पक्ष मूल्य निर्धारण संरचना')}</span>
                        </div>
                        {product.suggestedRetailPremium && (
                          <span className="text-[10px] font-bold px-2 py-0.5 bg-amber-100 text-amber-900 border border-amber-300 rounded-full">
                            {t('3-Tier AI Pricing', 'एआई 3-स्तरीय मूल्य')}
                          </span>
                        )}
                      </div>

                      <div className={`grid ${product.suggestedRetailPremium ? 'grid-cols-2 sm:grid-cols-4' : 'grid-cols-3'} gap-2 text-center`}>
                        <div className="bg-white p-2 rounded-xl border border-stone-200 shadow-2xs">
                          <span className="text-[10px] text-stone-400 font-semibold block">{t('Base Cost', 'कच्चा माल/लागत')}</span>
                          <span className="font-bold text-stone-800 text-sm">₹{product.artisanCostPrice}</span>
                        </div>
                        <div className="bg-white p-2 rounded-xl border border-stone-200 shadow-2xs">
                          <span className="text-[10px] text-stone-400 font-semibold block">{t('Fair Rec.', 'AI अनुशंसित')}</span>
                          <span className="font-bold text-emerald-700 text-sm">₹{product.suggestedRetailMin}–₹{product.suggestedRetailMax}</span>
                        </div>
                        {product.suggestedRetailPremium && (
                          <div className="bg-white p-2 rounded-xl border border-stone-200 shadow-2xs">
                            <span className="text-[10px] text-stone-400 font-semibold block">{t('Premium Tier', 'प्रीमियम स्तर')}</span>
                            <span className="font-bold text-amber-700 text-sm">₹{product.suggestedRetailPremium}</span>
                          </div>
                        )}
                        <div className="bg-terracotta-600 text-white p-2 rounded-xl shadow-xs">
                          <span className="text-[10px] text-terracotta-100 font-semibold block">{t('Confirmed Price', 'स्वीकृत मूल्य')}</span>
                          <span className="font-black text-sm">₹{product.finalListingPrice}</span>
                        </div>
                      </div>

                      {/* AI Pricing Rationale */}
                      {(loc.pricingRationale || product.pricingRationale) && (
                        <p className="text-[11px] text-stone-600 italic bg-white/80 p-2 rounded-lg border border-amber-200/40 leading-relaxed">
                          <span className="font-semibold not-italic text-stone-700">{t('AI Rationale:', 'एआई आधार:')} </span>
                          "{loc.pricingRationale || product.pricingRationale}"
                        </p>
                      )}

                      {/* Pricing Factors Tags (Non-navigational informational chips) */}
                      {product.pricingFactors && (() => {
                        let factors: string[] = [];
                        try {
                          const parsed = JSON.parse(product.pricingFactors);
                          if (Array.isArray(parsed)) factors = parsed;
                        } catch {
                          factors = product.pricingFactors.split(',').map((s: string) => s.trim()).filter(Boolean);
                        }
                        return factors.length > 0 ? (
                          <div
                            onClick={(e) => e.stopPropagation()}
                            className="flex flex-wrap items-center gap-1 pt-1"
                          >
                            <span className="text-[10px] text-stone-400 font-bold uppercase mr-1 cursor-default">
                              {t('Factors:', 'कारक:')}
                            </span>
                            {factors.map((f: string, i: number) => (
                              <span
                                key={i}
                                onClick={(e) => e.stopPropagation()}
                                className="px-2 py-0.5 bg-white text-stone-700 border border-stone-200 rounded-md text-[10px] font-medium cursor-default select-none"
                              >
                                {f}
                              </span>
                            ))}
                          </div>
                        ) : null;
                      })()}

                      {/* Marketplace Readiness Score (Phase 5) */}
                      {(() => {
                        const readiness = getMarketplaceReadiness(product);
                        const channels = getRecommendedMarketChannels(product);

                        return (
                          <div className="space-y-2.5 pt-2">
                            {/* Readiness score bar */}
                            <div
                              onClick={(e) => e.stopPropagation()}
                              className="p-3 bg-stone-50 rounded-xl border border-stone-200 cursor-default"
                            >
                              <div className="flex items-center justify-between">
                                <div className="flex items-center gap-2">
                                  <span className="text-[10px] font-extrabold uppercase px-2 py-0.5 rounded-md bg-stone-900 text-white">
                                    {t('Market Readiness', 'बाज़ार तैयारी')}
                                  </span>
                                  <span className="text-xs font-extrabold text-stone-800">
                                    {readiness.score}/{readiness.totalChecks} {t('Ready', 'पूर्ण')}
                                  </span>
                                </div>
                                <span className={`text-[11px] font-bold ${readiness.score >= 8 ? 'text-emerald-700' : 'text-amber-700'}`}>
                                  {t(readiness.statusLabelEn, readiness.statusLabelHi)}
                                </span>
                              </div>

                              <div className="w-full bg-stone-200 h-1.5 rounded-full mt-2 overflow-hidden">
                                <div
                                  className={`h-full rounded-full transition-all duration-300 ${readiness.score >= 8 ? 'bg-emerald-500' : 'bg-amber-500'}`}
                                  style={{ width: `${readiness.percentage}%` }}
                                />
                              </div>

                              {readiness.score < readiness.totalChecks && (
                                <p className="text-[11px] text-stone-500 mt-2 flex items-center gap-1">
                                  <span className="text-amber-600 font-bold">💡 {t('Tip:', 'सुझाव:')}</span>
                                  <span>
                                    {language === 'hi'
                                      ? readiness.items.find((i) => !i.isComplete)?.tipHi
                                      : readiness.items.find((i) => !i.isComplete)?.tipEn}
                                  </span>
                                </p>
                              )}
                            </div>

                            {/* Smart Market Linkage Recommendations */}
                            <div
                              onClick={(e) => e.stopPropagation()}
                              className="p-3.5 bg-gradient-to-r from-amber-50/70 via-stone-50 to-orange-50/50 rounded-2xl border border-amber-200/70 cursor-default"
                            >
                              {/* 1. Header & System Rec. Badge with Info Tooltip */}
                              <div className="flex items-center justify-between gap-2 mb-1">
                                <div className="flex items-center gap-1.5">
                                  <Sparkles className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                                  <span className="text-xs font-bold text-stone-900">
                                    {t('Smart Market Linkage', 'स्मार्ट बाज़ार जुड़ाव')}
                                  </span>
                                </div>
                                <div className="relative group/rec shrink-0">
                                  <span
                                    tabIndex={0}
                                    role="note"
                                    aria-label={t(
                                      'AI market matches are advisory recommendations based on product specifications.',
                                      'एआई बाज़ार मिलान उत्पाद विशिष्टताओं पर आधारित सलाहकार अनुशंसाएं हैं।'
                                    )}
                                    className="text-[9px] font-bold text-amber-800 bg-amber-100/90 hover:bg-amber-200/80 px-1.5 py-0.5 rounded uppercase flex items-center gap-1 cursor-help transition-colors border border-amber-200/60"
                                  >
                                    <span>{t('System Rec.', 'प्रणाली अनुशंसा')}</span>
                                    <Info className="w-2.5 h-2.5 text-amber-700" />
                                  </span>
                                  <div className="absolute right-0 top-full mt-1 w-56 p-2 bg-stone-900 text-white text-[10px] leading-snug rounded-lg shadow-lg opacity-0 pointer-events-none group-hover/rec:opacity-100 group-focus-within/rec:opacity-100 transition-opacity z-20">
                                    {t(
                                      'AI market matches are advisory recommendations based on product specifications.',
                                      'एआई बाज़ार मिलान उत्पाद विशिष्टताओं पर आधारित सलाहकार अनुशंसाएं हैं।'
                                    )}
                                  </div>
                                </div>
                              </div>

                              {/* 2. Subtitle (shown ONCE at section level, no repetitive disclaimer) */}
                              <p className="text-[11px] text-stone-500 leading-normal mb-2.5">
                                {t(
                                  "Recommended buyer channels tailored to this craft's pricing and material tier.",
                                  'इस शिल्प के मूल्य और सामग्री के अनुरूप अनुशंसित खरीदार मंच।'
                                )}
                              </p>

                              {/* 3. Recommendation Cards as Visual Focus */}
                              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                                {channels.map((ch) => (
                                  <div
                                    key={ch.id}
                                    className="bg-white p-3 rounded-xl border border-amber-200/80 shadow-xs hover:border-amber-300 transition-all flex flex-col justify-between text-left"
                                  >
                                    <div>
                                      <div className="flex items-center justify-between gap-1.5 mb-1.5">
                                        <span className="text-[9px] font-extrabold px-2 py-0.5 rounded-md bg-amber-50 text-amber-800 border border-amber-200/70 inline-block uppercase tracking-wider">
                                          {ch.badge}
                                        </span>
                                      </div>
                                      <div className="text-xs font-bold text-stone-900 leading-snug">
                                        {t(ch.nameEn, ch.nameHi)}
                                      </div>
                                      <p className="text-[11px] text-stone-600 mt-1.5 leading-relaxed">
                                        {t(ch.descriptionEn, ch.descriptionHi)}
                                      </p>
                                    </div>
                                  </div>
                                ))}
                              </div>
                            </div>
                          </div>
                        );
                      })()}
                    </div>
                  </div>

                  {/* Informational GI Tag and Direct Status & Management Actions */}
                  <div
                    onClick={(e) => e.stopPropagation()}
                    className="mt-4 pt-3 border-t border-stone-100 flex flex-wrap items-center justify-between gap-3 text-xs cursor-default"
                  >
                    <span className="text-stone-500 flex items-center gap-1 text-[11px]">
                      <MapPin className="w-3 h-3 text-terracotta-600" />
                      {product.giCraftRegion} ({t('Informational', 'सूचनात्मक')})
                    </span>
                    <div className="flex flex-wrap items-center gap-2 sm:gap-3">
                      {product.status === 'PUBLISHED' && (
                        <>
                          <span className="font-semibold text-emerald-700 flex items-center gap-1 text-[11px]">
                            <CheckCircle2 className="w-3 h-3" />
                            {t('Live on Public Marketplace', 'सार्वजनिक बाजार में सक्रिय')}
                          </span>
                          <button
                            type="button"
                            onClick={(e) => {
                              e.stopPropagation();
                              setProductToUnpublish(product);
                            }}
                            className="font-bold text-stone-600 hover:text-amber-800 bg-stone-100 hover:bg-amber-50 border border-stone-200 hover:border-amber-300 px-2.5 py-1 rounded-lg flex items-center gap-1 text-[11px] transition-colors"
                            title={t('Unpublish and hide from buyer marketplace', 'अप्रकाशित करें और खरीदार बाज़ार से छिपाएं')}
                          >
                            <EyeOff className="w-3 h-3 text-stone-500" />
                            <span>{t('Remove from Marketplace', 'बाज़ार से हटाएं')}</span>
                          </button>
                        </>
                      )}

                      {product.status === 'UNPUBLISHED' && (
                        <>
                          <span className="font-bold text-amber-800 bg-amber-50 border border-amber-200 px-2 py-0.5 rounded-md flex items-center gap-1 text-[11px]">
                            <EyeOff className="w-3 h-3 text-amber-600" />
                            {t('Unpublished / Hidden', 'अप्रकाशित / छिपा हुआ')}
                          </span>
                          <button
                            type="button"
                            onClick={(e) => {
                              e.stopPropagation();
                              handleRepublishProduct(product);
                            }}
                            className="font-bold text-emerald-800 hover:text-emerald-900 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 px-2.5 py-1 rounded-lg flex items-center gap-1 text-[11px] transition-colors"
                          >
                            <Eye className="w-3 h-3 text-emerald-600" />
                            <span>{t('Republish to Marketplace', 'पुनः प्रकाशित करें')}</span>
                          </button>
                        </>
                      )}

                      {product.status === 'DRAFT' && (
                        <>
                          <span className="font-bold text-stone-700 bg-stone-100 border border-stone-200 px-2 py-0.5 rounded-md text-[11px]">
                            {t('Draft Craft', 'प्रारूप शिल्प')}
                          </span>
                          <button
                            type="button"
                            onClick={(e) => {
                              e.stopPropagation();
                              setProductToDeleteDraft(product);
                            }}
                            className="font-bold text-red-700 hover:text-red-800 bg-red-50 hover:bg-red-100 border border-red-200 px-2.5 py-1 rounded-lg flex items-center gap-1 text-[11px] transition-colors"
                          >
                            <Trash2 className="w-3 h-3 text-red-600" />
                            <span>{t('Delete Draft', 'प्रारूप हटाएं')}</span>
                          </button>
                        </>
                      )}

                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          setActiveTab('feedback');
                          setSelectedFeedbackProduct(product.id);
                        }}
                        className="font-bold text-amber-800 hover:text-amber-900 bg-amber-50 hover:bg-amber-100 border border-amber-200/80 px-2 py-0.5 rounded-lg flex items-center gap-1 text-[11px] transition-colors"
                      >
                        <Star className="w-3 h-3 fill-amber-500 text-amber-500" />
                        <span>{t('Feedback', 'समीक्षा')}</span>
                      </button>
                      <Link
                        href={`/product/${product.id}`}
                        onClick={(e) => e.stopPropagation()}
                        className="font-bold text-terracotta-600 hover:text-terracotta-700 flex items-center gap-1 text-[11px] group-hover:underline"
                      >
                        <span>{t('View Details →', 'विवरण देखें →')}</span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
          </div>
        )}

        {/* TAB 2: Incoming Buyer Inquiries & B2B RFQs */}
        {activeTab === 'inquiries' && (
          <div className="space-y-4">
            {inquiriesList.length === 0 ? (
              <div className="bg-white p-10 rounded-3xl text-center border border-dashed border-stone-300">
                <MessageSquare className="w-10 h-10 text-stone-400 mx-auto mb-2" />
                <p className="text-stone-600 font-semibold">{t('No inquiries yet', 'कोई नई पूछताछ नहीं है')}</p>
                <p className="text-xs text-stone-400 mt-1">
                  {t('Direct WhatsApp inquiries and B2B bulk RFQs from buyers will appear here.', 'खरीदारों से सीधी WhatsApp पूछताछ और B2B थोक RFQ यहां दिखाई देंगे।')}
                </p>
              </div>
            ) : (
              inquiriesList.map((inq: any) => {
                const status = (inq.status || 'PENDING').toUpperCase();
                let statusBadge = (
                  <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-amber-100 text-amber-800 border border-amber-200">
                    {t('New (Pending)', 'नई पूछताछ')}
                  </span>
                );
                if (status === 'CONTACTED') {
                  statusBadge = (
                    <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-blue-100 text-blue-800 border border-blue-200">
                      {t('Contacted', 'संपर्क किया')}
                    </span>
                  );
                } else if (status === 'CLOSED' || status === 'COMPLETED') {
                  statusBadge = (
                    <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-stone-100 text-stone-700 border border-stone-300">
                      {t('Closed', 'समाप्त')}
                    </span>
                  );
                }

                return (
                  <div
                    key={inq.id}
                    className="bg-white rounded-3xl p-5 border border-stone-200/80 shadow-sm transition-all"
                  >
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <div className="flex items-center gap-2">
                        <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-indigoCraft-100 text-indigoCraft-700">
                          {inq.type === 'B2B_BULK_RFQ' ? 'B2B Bulk Sourcing RFQ' : 'Direct Inquiry'}
                        </span>
                        {statusBadge}
                      </div>

                      <div className="flex items-center gap-2">
                        {inq.bulkQuantity && (
                          <span className="text-xs font-bold px-3 py-1 bg-amber-50 text-amber-800 border border-amber-200 rounded-xl">
                            📦 {t('Quantity:', 'मात्रा:')} {inq.bulkQuantity} {t('Units', 'इकाइयाँ')}
                          </span>
                        )}
                        {inq.createdAt && (
                          <span className="text-[10px] text-stone-400">
                            {new Date(inq.createdAt).toLocaleDateString('en-IN', {
                              day: 'numeric',
                              month: 'short',
                              year: 'numeric'
                            })}
                          </span>
                        )}
                      </div>
                    </div>

                    <div className="mt-2.5">
                      <h3 className="font-extrabold text-stone-900 text-sm">
                        {inq.buyerName}{' '}
                        <span className="font-normal text-stone-500 text-xs">
                          ({inq.buyerPhone})
                        </span>
                      </h3>
                      {inq.buyerEmail && (
                        <p className="text-[11px] text-stone-400 mt-0.5">
                          ✉ {inq.buyerEmail}
                        </p>
                      )}
                    </div>

                    <div className="mt-3 p-3 bg-stone-50 rounded-2xl border border-stone-100 text-xs text-stone-700">
                      <p className="font-medium text-stone-500 text-[10px] uppercase tracking-wider mb-0.5">
                        {t('Product Interested:', 'उत्पाद:')} {inq.productTitle}
                      </p>
                      <p className="italic whitespace-pre-line leading-relaxed">"{inq.message}"</p>
                    </div>

                    <div className="mt-4 flex flex-wrap items-center justify-between gap-3 pt-3 border-t border-stone-100">
                      {/* Status Selector */}
                      <div className="flex items-center gap-2">
                        <span className="text-[11px] font-bold text-stone-600">
                          {t('Status:', 'स्थिति:')}
                        </span>
                        <select
                          value={status}
                          onChange={(e) => handleUpdateInquiryStatus(inq.id, e.target.value)}
                          className="px-2.5 py-1 text-xs rounded-xl border border-stone-200 bg-white font-medium text-stone-800 focus:outline-none focus:ring-1 focus:ring-amber-500"
                        >
                          <option value="PENDING">{t('New / Pending', 'नई / लंबित')}</option>
                          <option value="CONTACTED">{t('Contacted', 'संपर्क किया गया')}</option>
                          <option value="CLOSED">{t('Closed', 'बंद / पूर्ण')}</option>
                        </select>
                      </div>

                      {/* Reply on WhatsApp */}
                      <a
                        href={`https://wa.me/${inq.buyerPhone.replace(/\D/g, '')}?text=${encodeURIComponent(
                          `Namaste ${inq.buyerName}, I am ${artisanData?.fullName || 'the artisan'} regarding your inquiry for ${inq.productTitle}${inq.bulkQuantity ? ` (${inq.bulkQuantity} units)` : ''}.`
                        )}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-xs font-bold flex items-center gap-1.5 transition-colors shadow-sm"
                      >
                        <MessageSquare className="w-3.5 h-3.5" />
                        <span>{t('Reply to Buyer on WhatsApp', 'व्हाट्सएप पर उत्तर दें')}</span>
                      </a>
                    </div>
                  </div>
                );
              })
            )}
          </div>
        )}

        {/* TAB 4: Customer Feedback (Grouped by Product with Private Notes) */}
        {activeTab === 'feedback' && (
          <div className="space-y-6">
            {/* Overall Feedback Stats Banner */}
            <div className="bg-white rounded-3xl p-6 border border-stone-200/80 shadow-sm">
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pb-5 border-b border-stone-100 text-center sm:text-left">
                <div>
                  <h2 className="text-lg font-extrabold text-stone-900 flex items-center justify-center sm:justify-start gap-2">
                    <Star className="w-5 h-5 text-amber-500 fill-amber-500" />
                    <span>{t('Customer Feedback', 'ग्राहक समीक्षा')}</span>
                  </h2>
                  <p className="text-xs text-stone-500 mt-0.5">
                    {t(
                      'Reviews, ratings, and confidential private feedback from craft buyers across your catalog.',
                      'आपके सभी शिल्पों पर खरीदारों से प्राप्त समीक्षाएं, रेटिंग और केवल आपको दिखने वाले गोपनीय निजी नोट्स।'
                    )}
                  </p>
                </div>

                <div className="flex items-center gap-3">
                  <div className="bg-amber-50 border border-amber-200 px-4 py-2 rounded-2xl text-center">
                    <div className="text-2xl font-black text-amber-900">
                      {overallRating > 0 ? overallRating.toFixed(1) : '—'}
                      <span className="text-xs font-semibold text-amber-700"> / 5</span>
                    </div>
                    <div className="text-[10px] font-bold text-amber-800 uppercase tracking-wider">
                      {t('Average Rating', 'औसत रेटिंग')}
                    </div>
                  </div>

                  <div className="bg-stone-50 border border-stone-200 px-4 py-2 rounded-2xl text-center">
                    <div className="text-2xl font-black text-stone-900">
                      {totalReviewsCount}
                    </div>
                    <div className="text-[10px] font-bold text-stone-500 uppercase tracking-wider">
                      {t('Total Reviews', 'कुल समीक्षाएं')}
                    </div>
                  </div>

                  <div className="bg-amber-100/50 border border-amber-300/70 px-4 py-2 rounded-2xl text-center">
                    <div className="text-2xl font-black text-amber-950">
                      {feedbackReviews.filter((r) => r.privateNote).length}
                    </div>
                    <div className="text-[10px] font-bold text-amber-800 uppercase tracking-wider">
                      {t('Private Notes', 'निजी नोट्स')}
                    </div>
                  </div>
                </div>
              </div>

            </div>

            {/* AREA A: CUSTOMER REVIEWS (COLLAPSIBLE / MINIMIZABLE) */}
            <div className="bg-white rounded-3xl p-6 border border-stone-200/80 shadow-sm space-y-5">
              <div className="flex items-center justify-between gap-4 pb-4 border-b border-stone-100">
                <div className="flex items-center gap-2.5">
                  <Star className="w-5 h-5 text-amber-500 fill-amber-500" />
                  <h3 className="text-base font-extrabold text-stone-900">
                    {t('Customer Reviews', 'ग्राहक समीक्षाएं')}
                  </h3>
                  <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-amber-50 text-amber-800 border border-amber-200">
                    {totalReviewsCount} {t('reviews', 'समीक्षाएं')}
                  </span>
                </div>

                <button
                  type="button"
                  onClick={() => setIsCustomerReviewsExpanded(!isCustomerReviewsExpanded)}
                  aria-expanded={isCustomerReviewsExpanded}
                  className="px-3.5 py-1.5 rounded-xl border border-stone-200 bg-stone-50 hover:bg-stone-100 text-stone-700 text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer"
                >
                  <span>{isCustomerReviewsExpanded ? t('Hide Reviews', 'समीक्षाएं छिपाएं') : t('Show Reviews', 'समीक्षाएं देखें')}</span>
                  {isCustomerReviewsExpanded ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                </button>
              </div>

              {isCustomerReviewsExpanded && (
                <div className="space-y-6 animate-in fade-in duration-200">
                  {/* Compact Product Selector (2 full cards + partial 3rd card with tasteful fade + Show More) */}
                  {productFeedbackGroups.length > 0 && (
                    <div className="p-4 bg-stone-50/80 rounded-2xl border border-stone-200/80 space-y-3">
                      <div className="flex items-center justify-between gap-2">
                        <div className="flex items-center gap-2">
                          <span className="text-xs font-extrabold text-stone-700 uppercase tracking-wider">
                            {t('Filter by Product', 'उत्पाद अनुसार देखें')}
                          </span>
                          <span className="text-[11px] text-stone-400 font-medium">
                            ({productFeedbackGroups.length} {t('products in catalog', 'उत्पाद कैटलॉग में')})
                          </span>
                        </div>
                        {productFeedbackGroups.length > 2 && (
                          <button
                            type="button"
                            onClick={() => setShowAllFilterProducts(!showAllFilterProducts)}
                            className="text-xs font-bold text-terracotta-600 hover:text-terracotta-700 flex items-center gap-1 transition-colors px-2 py-1 rounded-lg hover:bg-terracotta-50 cursor-pointer"
                          >
                            <span>
                              {showAllFilterProducts
                                ? t('Show Less', 'कम दिखाएं')
                                : t(`Show More (+${productFeedbackGroups.length - 2})`, `और देखें (+${productFeedbackGroups.length - 2})`)}
                            </span>
                            {showAllFilterProducts ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                          </button>
                        )}
                      </div>

                      {/* The Product Selector Cards */}
                      <div className="flex items-center gap-2">
                        {/* All Products Card */}
                        <button
                          type="button"
                          onClick={() => setSelectedFeedbackProduct('ALL')}
                          className={`p-2.5 rounded-xl text-left text-xs font-bold transition-all shrink-0 border flex items-center gap-2 cursor-pointer ${
                            selectedFeedbackProduct === 'ALL'
                              ? 'bg-stone-900 text-white border-stone-900 shadow-xs'
                              : 'bg-white text-stone-700 hover:bg-stone-100 border-stone-200'
                          }`}
                        >
                          <Package className="w-4 h-4 shrink-0" />
                          <div className="whitespace-nowrap">
                            <div>{t('All Products', 'सभी उत्पाद')}</div>
                            <div className="text-[10px] font-normal opacity-80">{totalReviewsCount} {t('reviews', 'समीक्षाएं')}</div>
                          </div>
                        </button>

                        {/* Product Cards Container */}
                        <div
                          className={`relative flex-1 ${
                            !showAllFilterProducts ? 'overflow-hidden max-w-[280px] sm:max-w-[340px] md:max-w-[400px]' : ''
                          }`}
                        >
                          <div className={`flex items-center gap-2.5 ${showAllFilterProducts ? 'flex-wrap' : 'overflow-hidden'}`}>
                            {productFeedbackGroups.map(({ product, summary }) => {
                              const isSelected = selectedFeedbackProduct === product.id;
                              return (
                                <button
                                  key={product.id}
                                  type="button"
                                  onClick={() => setSelectedFeedbackProduct(product.id)}
                                  className={`w-[135px] sm:w-[155px] p-2 rounded-xl text-left text-xs font-bold transition-all shrink-0 border flex items-center gap-2 cursor-pointer ${
                                    isSelected
                                      ? 'bg-terracotta-50 border-terracotta-500 text-terracotta-900 ring-2 ring-terracotta-400 shadow-xs'
                                      : 'bg-white text-stone-700 hover:bg-stone-100 border-stone-200'
                                  }`}
                                  title={product.title}
                                >
                                  <img
                                    src={product.primaryImageUrl}
                                    alt={product.title}
                                    className="w-9 h-9 rounded-lg object-cover shrink-0 border border-stone-200"
                                  />
                                  <div className="min-w-0 flex-1">
                                    <div className="truncate text-xs font-bold leading-snug">{product.title}</div>
                                    <div className="text-[10px] font-medium text-amber-700 flex items-center gap-0.5 mt-0.5">
                                      <Star className="w-2.5 h-2.5 fill-amber-500 text-amber-500" />
                                      <span>{summary.averageRating > 0 ? summary.averageRating.toFixed(1) : '—'}</span>
                                      <span className="text-stone-400">({summary.totalReviews})</span>
                                    </div>
                                  </div>
                                </button>
                              );
                            })}
                          </div>

                          {/* Right edge fade treatment for compact preview indicating more products */}
                          {!showAllFilterProducts && productFeedbackGroups.length > 2 && (
                            <div
                              onClick={() => setShowAllFilterProducts(true)}
                              className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-stone-50 via-stone-50/80 to-transparent pointer-events-none flex items-center justify-end pr-1 cursor-pointer"
                              aria-hidden="true"
                            >
                              <span className="text-[10px] font-bold text-terracotta-700 bg-white/90 px-1.5 py-0.5 rounded shadow-2xs border border-stone-200">
                                →
                              </span>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Customer Reviews for Selected Product(s) */}
                  <div className="space-y-4">
                    {(() => {
                      const displayedGroups = selectedFeedbackProduct === 'ALL'
                        ? productFeedbackGroups
                        : productFeedbackGroups.filter((g) => g.product.id === selectedFeedbackProduct);

                      const totalMatchedReviews = displayedGroups.flatMap((g) => g.reviews);

                      if (totalMatchedReviews.length === 0) {
                        return (
                          <div className="py-8 text-center text-stone-400 bg-stone-50/50 rounded-2xl border border-dashed border-stone-200">
                            <Star className="w-6 h-6 text-stone-300 mx-auto mb-1.5" />
                            <p className="text-xs font-semibold text-stone-600">
                              {t('No customer reviews received yet for this craft.', 'इस शिल्प के लिए अभी तक कोई समीक्षा प्राप्त नहीं हुई है।')}
                            </p>
                          </div>
                        );
                      }

                      return displayedGroups.map(({ product, reviews, summary }) => {
                        if (reviews.length === 0) return null;
                        return (
                          <div key={product.id} className="space-y-3 pt-2">
                            <div className="flex items-center justify-between gap-2 pb-2 border-b border-stone-100">
                              <div className="flex items-center gap-2">
                                <img
                                  src={product.primaryImageUrl}
                                  alt={product.title}
                                  className="w-8 h-8 rounded-lg object-cover border border-stone-200"
                                />
                                <span className="text-xs font-bold text-stone-900">{product.title}</span>
                              </div>
                              <span className="text-[11px] text-stone-500 font-medium">
                                {reviews.length} {t('reviews', 'समीक्षाएं')} • {summary.averageRating.toFixed(1)} ★
                              </span>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                              {reviews.map((rev) => {
                                const isPrivateNoteOpen = !!expandedPrivateNotes[rev.id];
                                return (
                                  <div
                                    key={rev.id}
                                    className="p-5 bg-white rounded-2xl sm:rounded-3xl border border-stone-200/90 shadow-2xs space-y-3.5 flex flex-col justify-between hover:border-stone-300 transition-colors"
                                  >
                                    <div className="space-y-3">
                                      {/* 1. Product / Product Reel */}
                                      <div className="flex items-center gap-3 pb-3 border-b border-stone-100">
                                        <img
                                          src={product.primaryImageUrl}
                                          alt={product.title}
                                          className="w-11 h-11 rounded-xl object-cover border border-stone-200 shrink-0"
                                        />
                                        <div className="min-w-0 flex-1">
                                          <h4 className="text-xs font-extrabold text-stone-900 truncate">
                                            {product.title}
                                          </h4>
                                          <div className="text-[11px] text-stone-400 font-medium truncate flex items-center gap-1.5 mt-0.5">
                                            <span>{product.craftCategory || 'Authentic Handicraft'}</span>
                                            <span className="text-stone-300">•</span>
                                            <span className="text-amber-700 font-semibold">{summary.averageRating.toFixed(1)} ★</span>
                                          </div>
                                        </div>
                                      </div>

                                      {/* 2. Public Customer Review */}
                                      <div className="space-y-1.5">
                                        <div className="flex items-center justify-between gap-2">
                                          <div className="flex items-center gap-1.5">
                                            <span className="text-xs font-extrabold text-stone-900">
                                              {rev.customerDisplayName || 'Verified Buyer'}
                                            </span>
                                            {rev.verifiedPurchase && (
                                              <span className="px-1.5 py-0.5 rounded-full text-[9px] font-bold bg-emerald-100 text-emerald-800 border border-emerald-200 flex items-center gap-0.5">
                                                <CheckCircle2 className="w-2.5 h-2.5" />
                                                <span>{t('Verified', 'सत्यापित')}</span>
                                              </span>
                                            )}
                                          </div>
                                          <span className="text-[10px] text-stone-400">
                                            {new Date(rev.createdAt).toLocaleDateString('en-IN', {
                                              day: 'numeric',
                                              month: 'short',
                                              year: 'numeric',
                                            })}
                                          </span>
                                        </div>

                                        {/* Star Rating */}
                                        <div className="flex items-center gap-0.5 text-amber-500">
                                          {[1, 2, 3, 4, 5].map((s) => (
                                            <Star
                                              key={s}
                                              className={`w-3 h-3 ${
                                                s <= rev.rating
                                                  ? 'fill-amber-400 text-amber-500'
                                                  : 'text-stone-300'
                                              }`}
                                            />
                                          ))}
                                        </div>

                                        {/* 3. Review Headline */}
                                        <h5 className="text-xs font-bold text-stone-900 leading-snug pt-0.5">
                                          {getReviewHeadline(rev.reviewText, rev.rating)}
                                        </h5>

                                        {/* Public Review Body */}
                                        <p className="text-xs text-stone-700 leading-relaxed font-normal">
                                          "{rev.reviewText}"
                                        </p>

                                        {/* Review Photos */}
                                        {rev.photos && rev.photos.length > 0 && (
                                          <div className="flex gap-2 overflow-x-auto pt-1">
                                            {rev.photos.map((photoUrl: string, pIdx: number) => (
                                              <img
                                                key={pIdx}
                                                src={photoUrl}
                                                alt="Customer photo"
                                                className="w-12 h-12 rounded-lg object-cover border border-stone-200 shrink-0"
                                              />
                                            ))}
                                          </div>
                                        )}
                                      </div>
                                    </div>

                                    {/* 4. Private Note Section at the bottom of the SAME CARD */}
                                    {rev.privateNote && (
                                      <div className="pt-3 border-t border-stone-200/80">
                                        <button
                                          type="button"
                                          onClick={() => togglePrivateNote(rev.id)}
                                          aria-expanded={isPrivateNoteOpen}
                                          aria-label={isPrivateNoteOpen ? 'Collapse private note' : 'Expand private note'}
                                          className="text-xs font-semibold text-stone-600 hover:text-stone-900 flex items-center gap-1.5 transition-colors cursor-pointer select-none group"
                                        >
                                          <span className="text-stone-500 group-hover:text-stone-800 text-xs font-bold w-3 inline-block">
                                            {isPrivateNoteOpen ? '▾' : '▸'}
                                          </span>
                                          <span className="flex items-center gap-1.5">
                                            <Lock className="w-3 h-3 text-amber-700/80" />
                                            <span>{t('Private note · Only you', 'निजी नोट · केवल आप')}</span>
                                          </span>
                                        </button>

                                        {isPrivateNoteOpen && (
                                          <div className="mt-2.5 p-3 rounded-xl bg-amber-50/60 border border-amber-200/60 text-stone-800 animate-in fade-in duration-150">
                                            <div className="flex items-center gap-1.5 text-[10px] font-bold text-amber-900 uppercase tracking-wider mb-1">
                                              <Lock className="w-2.5 h-2.5 text-amber-700" />
                                              <span>{t('Internal Artisan Note · Private to Your Account', 'आंतरिक कारीगर नोट · केवल आपके लिए')}</span>
                                            </div>
                                            <p className="text-xs text-stone-700 leading-relaxed italic">
                                              "{rev.privateNote}"
                                            </p>
                                          </div>
                                        )}
                                      </div>
                                    )}
                                  </div>
                                );
                              })}
                            </div>
                          </div>
                        );
                      });
                    })()}
                  </div>
                </div>
              )}
            </div>

            {/* Rule-based Feedback Insights */}
            {(() => {
              const insights = (() => {
                if (feedbackReviews.length < 2) {
                  return { hasEnoughData: false, likes: [], improvements: [] };
                }
                const allText = feedbackReviews
                  .map((r) => `${r.reviewText} ${r.privateNote || ''}`)
                  .join(' ')
                  .toLowerCase();

                const likes: string[] = [];
                const improvements: string[] = [];

                if (allText.includes('cooling') || allText.includes('cool') || allText.includes('earthen') || allText.includes('clay') || allText.includes('water')) {
                  likes.push(t('Natural porous clay cooling effect & authentic earthen smell', 'प्राकृतिक मिट्टी का ठंडा प्रभाव एवं सुगंध'));
                }
                if (allText.includes('surahi') || allText.includes('traditional') || allText.includes('heritage') || allText.includes('design') || allText.includes('prajapati')) {
                  likes.push(t('Traditional heritage aesthetics & classic surahi form', 'पारंपरिक सांस्कृतिक डिज़ाइन एवं सुराही स्वरूप'));
                }
                if (allText.includes('glaze') || allText.includes('floral') || allText.includes('finish') || allText.includes('smooth') || allText.includes('khurja')) {
                  likes.push(t('Vibrant Khurja floral glaze finish & smooth dining texture', 'जीवंत खुर्जा फ्लोरल ग्लेज़ एवं उत्कृष्ट फिनिश'));
                }
                if (allText.includes('handmade') || allText.includes('craft') || allText.includes('lead-free') || allText.includes('quality') || allText.includes('direct') || allText.includes('sturdy')) {
                  likes.push(t('Sturdy handmade durability & genuine master artisan craft', 'मजबूत हस्तनिर्मित बनावट एवं प्रामाणिक शिल्प'));
                }

                if (allText.includes('pack') || allText.includes('bubble') || allText.includes('wrap') || allText.includes('transit') || allText.includes('delivery') || allText.includes('box')) {
                  improvements.push(t('Reinforced double-bubble wrap for long-distance/monsoon delivery', 'लंबी दूरी व मानसून डिलीवरी के लिए मजबूत बबल रैप'));
                }
                if (allText.includes('size') || allText.includes('larger') || allText.includes('inch') || allText.includes('dimension') || allText.includes('capacity')) {
                  improvements.push(t('Option for larger 10-inch bowl / higher volume surahi variations', '10-इंच के बड़े आकार व अधिक क्षमता का विकल्प'));
                }
                if (allText.includes('handle') || allText.includes('grip') || allText.includes('spout')) {
                  improvements.push(t('Ergonomic handle addition for easier pouring grip', 'पकड़ने और पानी डालने के लिए हैंडल का समावेश'));
                }

                return {
                  hasEnoughData: likes.length > 0 || improvements.length > 0,
                  likes,
                  improvements,
                };
              })();

              return (
                <div className="bg-gradient-to-br from-amber-50/70 via-stone-50 to-orange-50/50 rounded-3xl p-6 border border-amber-200/80 shadow-sm">
                  <div className="flex items-center gap-2 mb-2">
                    <Sparkles className="w-5 h-5 text-amber-600" />
                    <h3 className="font-extrabold text-sm text-stone-900">
                      {t('Rule-Based Feedback Insights', 'नियम-आधारित प्रतिक्रिया विश्लेषण')}
                    </h3>
                  </div>
                  <p className="text-[11px] text-stone-500 mb-4">
                    {t('Derived directly from customer review comments and private artisan notes without external AI hallucination.', 'वास्तविक खरीदार समीक्षाओं और निजी नोट्स से सीधे तैयार किए गए अंतर्दृष्टि।')}
                  </p>

                  {!insights.hasEnoughData ? (
                    <div className="p-4 bg-white/80 rounded-2xl border border-stone-200 text-xs text-stone-600 text-center">
                      {t('Not enough reviews yet for meaningful feedback insights.', 'सार्थक प्रतिक्रिया विश्लेषण के लिए अभी पर्याप्त समीक्षाएं नहीं हैं।')}
                    </div>
                  ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {/* What customers like */}
                      {insights.likes.length > 0 && (
                        <div className="bg-white p-4 rounded-2xl border border-emerald-200 shadow-2xs">
                          <h4 className="text-xs font-extrabold text-emerald-800 flex items-center gap-1.5 mb-2.5">
                            <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                            <span>{t('Customers Like:', 'खरीदारों को क्या पसंद आया:')}</span>
                          </h4>
                          <ul className="space-y-1.5">
                            {insights.likes.map((like, idx) => (
                              <li key={idx} className="text-xs text-stone-700 flex items-start gap-1.5">
                                <span className="text-emerald-500 font-bold">✓</span>
                                <span>{like}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {/* Possible improvements */}
                      {insights.improvements.length > 0 && (
                        <div className="bg-white p-4 rounded-2xl border border-amber-200 shadow-2xs">
                          <h4 className="text-xs font-extrabold text-amber-800 flex items-center gap-1.5 mb-2.5">
                            <AlertCircle className="w-4 h-4 text-amber-600" />
                            <span>{t('Possible Improvements:', 'सुधार के संभावित सुझाव:')}</span>
                          </h4>
                          <ul className="space-y-1.5">
                            {insights.improvements.map((imp, idx) => (
                              <li key={idx} className="text-xs text-stone-700 flex items-start gap-1.5">
                                <span className="text-amber-500 font-bold">💡</span>
                                <span>{imp}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              );
            })()}
          </div>
        )}

        {/* TAB 3: Curated Government Scheme Recommendations (Refinement 3) */}
        {activeTab === 'schemes' && (
          <div className="space-y-4">
            <div className="p-4 bg-amber-50 rounded-2xl border border-amber-200/80 text-xs text-amber-900 flex items-start gap-2.5">
              <AlertCircle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
              <div>
                <span className="font-bold">{t('Informational Scheme Matching Engine', 'सूचनात्मक योजना मिलान प्रणाली')}: </span>
                <span>
                  {t(
                    'ArsAI provides informational recommendations based on your craft category (Pottery) and location (Uttar Pradesh). It does not guarantee automatic official eligibility.',
                    'ArsAI आपके शिल्प और स्थान के आधार पर संभावित योजनाओं की जानकारी देता है। यह स्वचालित पात्रता का दावा नहीं करता।'
                  )}
                </span>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {schemes.map((scheme: any) => (
                <div
                  key={scheme.id}
                  className="bg-white rounded-3xl p-5 border border-stone-200/80 shadow-sm flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between gap-2">
                      <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-amber-100 text-amber-800">
                        {scheme.code}
                      </span>
                      <span className="text-[10px] text-stone-400 font-semibold">
                        {scheme.nodalMinistry}
                      </span>
                    </div>

                    <h3 className="font-bold text-stone-900 text-base mt-2">
                      {t(scheme.name, scheme.nameHindi)}
                    </h3>

                    <p className="text-xs text-stone-600 mt-1 leading-relaxed">
                      {t(scheme.briefDescription, scheme.briefDescriptionHindi)}
                    </p>

                    <div className="mt-3 p-3 bg-stone-50 rounded-xl border border-stone-100 text-xs">
                      <span className="font-bold text-stone-700 block mb-0.5">
                        🎁 {t('Key Scheme Benefits:', 'मुख्य लाभ:')}
                      </span>
                      <span className="text-stone-600 text-[11px] leading-relaxed">
                        {t(scheme.keyBenefits, scheme.keyBenefitsHindi)}
                      </span>
                    </div>
                  </div>

                  <div className="mt-4 pt-3 border-t border-stone-100 flex items-center justify-between">
                    <span className="text-[10px] text-emerald-700 font-bold bg-emerald-50 px-2 py-0.5 rounded">
                      ✓ {t('High Craft Alignment', 'शिल्प अनुकूल')}
                    </span>
                    <a
                      href={scheme.officialPortalUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-bold text-terracotta-600 hover:text-terracotta-700 flex items-center gap-1"
                    >
                      <span>{t('Official Portal', 'आधिकारिक पोर्टल')}</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* 4. ARTISAN "SEE MORE DETAILS" MODAL */}
      {showMoreDetailsModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-xs p-4 animate-in fade-in duration-200">
          <div className="bg-white rounded-3xl max-w-2xl w-full p-6 sm:p-8 border border-stone-200 shadow-2xl space-y-6 max-h-[85vh] overflow-y-auto">
            <div className="flex items-center justify-between pb-4 border-b border-stone-100">
              <div className="flex items-center gap-2">
                <User className="w-5 h-5 text-terracotta-600" />
                <h3 className="font-extrabold text-stone-900 text-base sm:text-lg">
                  {t('Complete Artisan Profile Details', 'कारीगर संपूर्ण प्रोफ़ाइल विवरण')}
                </h3>
              </div>
              <button
                onClick={() => setShowMoreDetailsModal(false)}
                className="p-1.5 text-stone-400 hover:text-stone-700 rounded-lg hover:bg-stone-100"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-4 text-xs">
              {/* PROFILE CARD */}
              <div className="p-4 bg-stone-50 rounded-2xl border border-stone-100 space-y-3">
                <span className="text-[10px] font-extrabold uppercase text-stone-400 tracking-wider block">
                  {t('Profile Information', 'प्रोफ़ाइल जानकारी')}
                </span>
                <div className="flex items-center gap-3">
                  <img
                    src={artisanData?.profileImage || 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100'}
                    alt={artisanData?.fullName}
                    className="w-12 h-12 rounded-xl object-cover border border-stone-200"
                  />
                  <div>
                    <h4 className="font-extrabold text-stone-900 text-sm">{artisanData?.fullName}</h4>
                    <p className="text-terracotta-700 font-semibold">@{username}</p>
                    {artisanData?.pehchanCardNo && (
                      <p className="text-stone-400 text-[10px] mt-0.5">Artisan ID: {artisanData.pehchanCardNo}</p>
                    )}
                  </div>
                </div>
                {artisanData?.bioEnglish && (
                  <p className="text-stone-600 leading-relaxed italic pt-1 border-t border-stone-200/60">
                    "{artisanData.bioEnglish}"
                  </p>
                )}
              </div>

              {/* LOCATION CARD */}
              <div className="p-4 bg-stone-50 rounded-2xl border border-stone-100 space-y-2">
                <span className="text-[10px] font-extrabold uppercase text-stone-400 tracking-wider block">
                  {t('Location Details', 'स्थान विवरण')}
                </span>
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <span className="text-[10px] text-stone-400 font-semibold block">{t('State', 'राज्य')}</span>
                    <span className="font-bold text-stone-800">{artisanData?.state || '—'}</span>
                  </div>
                  <div>
                    <span className="text-[10px] text-stone-400 font-semibold block">{t('District / Region', 'जिला / क्षेत्र')}</span>
                    <span className="font-bold text-stone-800">{artisanData?.district || '—'}</span>
                  </div>
                </div>
              </div>

              {/* CRAFT & EXPERIENCE CARD */}
              <div className="p-4 bg-stone-50 rounded-2xl border border-stone-100 space-y-2">
                <span className="text-[10px] font-extrabold uppercase text-stone-400 tracking-wider block">
                  {t('Craft & Experience', 'शिल्प एवं अनुभव')}
                </span>
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <span className="text-[10px] text-stone-400 font-semibold block">{t('Primary Craft', 'मुख्य शिल्प')}</span>
                    <span className="font-bold text-stone-800">{artisanData?.primaryCraft || '—'}</span>
                  </div>
                  <div>
                    <span className="text-[10px] text-stone-400 font-semibold block">{t('Experience', 'अनुभव')}</span>
                    <span className="font-bold text-stone-800">{artisanData?.experienceYears || 0} {t('Years', 'वर्ष')}</span>
                  </div>
                </div>
              </div>

              {/* CONTACT CARD */}
              <div className="p-4 bg-stone-50 rounded-2xl border border-stone-100 space-y-2">
                <span className="text-[10px] font-extrabold uppercase text-stone-400 tracking-wider block">
                  {t('Contact Details', 'संपर्क विवरण')}
                </span>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  <div>
                    <span className="text-[10px] text-stone-400 font-semibold block">WhatsApp / Phone</span>
                    <span className="font-bold text-stone-800">{artisanData?.phone || '—'}</span>
                  </div>
                  <div>
                    <span className="text-[10px] text-stone-400 font-semibold block">Email</span>
                    <span className="font-bold text-stone-800 truncate block">{artisanData?.user?.email || '—'}</span>
                  </div>
                  <div>
                    <span className="text-[10px] text-stone-400 font-semibold block">Instagram / Social</span>
                    <span className="font-bold text-stone-800">@{username}</span>
                  </div>
                </div>
              </div>

              {/* PAYMENT CARD (MASKED / PROTECTED) */}
              <div className="p-4 bg-stone-50 rounded-2xl border border-stone-100 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-extrabold uppercase text-stone-400 tracking-wider block">
                    {t('Payment & Payout', 'भुगतान एवं पेआउट')}
                  </span>
                  <button
                    type="button"
                    onClick={() => {
                      setShowMoreDetailsModal(false);
                      setVerificationUpiId(artisanData?.upiId || '');
                      setShowAccountVerificationModal(true);
                    }}
                    className="text-[10px] text-terracotta-700 font-bold hover:underline flex items-center gap-1 cursor-pointer"
                  >
                    <Lock className="w-3 h-3" />
                    <span>{t('Manage in Verification', 'सत्यापन में प्रबंधित करें')}</span>
                  </button>
                </div>
                <div>
                  <span className="text-[10px] text-stone-400 font-semibold block">UPI Payout Account</span>
                  <span className="font-mono font-bold text-stone-700 bg-white px-2.5 py-1 rounded-lg border border-stone-200 inline-block mt-0.5 text-xs">
                    {artisanData?.upiId ? `${artisanData.upiId.slice(0, 3)}****@${artisanData.upiId.split('@')[1] || 'bank'}` : '—'}
                  </span>
                  <p className="text-[10px] text-stone-400 mt-1">
                    {t('Private banking credentials are encrypted and protected.', 'सुरक्षित बैंकिंग विवरण एन्क्रिप्टेड है।')}
                  </p>
                </div>
              </div>

              {/* VERIFICATION CARD (MASKED PEHCHAN) */}
              <div className="p-4 bg-stone-50 rounded-2xl border border-stone-100 space-y-2">
                <span className="text-[10px] font-extrabold uppercase text-stone-400 tracking-wider block">
                  {t('Artisan Verification & Pehchan', 'कारीगर सत्यापन एवं पहचान')}
                </span>
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-[10px] text-stone-400 font-semibold block">Pehchan Card Status</span>
                    <span className="font-bold text-stone-800">
                      {artisanData?.pehchanCardNo
                        ? `ID: ${artisanData.pehchanCardNo.slice(0, 3)}-****-${artisanData.pehchanCardNo.slice(-4)}`
                        : t('Not registered', 'पंजीकृत नहीं')}
                    </span>
                  </div>
                  {artisanData?.pehchanCardNo ? (
                    <span className="px-2.5 py-1 bg-emerald-100 text-emerald-800 rounded-full font-bold text-[10px] border border-emerald-200 flex items-center gap-1">
                      <ShieldCheck className="w-3 h-3" />
                      <span>Verified</span>
                    </span>
                  ) : (
                    <button
                      type="button"
                      onClick={() => {
                        setShowMoreDetailsModal(false);
                        setShowAccountVerificationModal(true);
                      }}
                      className="px-2 py-1 bg-amber-100 text-amber-900 rounded-full font-bold text-[10px] border border-amber-200 hover:bg-amber-200"
                    >
                      {t('Verify Now', 'सत्यापित करें')}
                    </button>
                  )}
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <button
                type="button"
                onClick={() => {
                  setShowMoreDetailsModal(false);
                  setEditFormData({ ...artisanData });
                  setShowEditProfileModal(true);
                }}
                className="flex-1 py-2.5 bg-stone-900 text-white rounded-xl font-bold text-xs hover:bg-stone-800 transition-colors"
              >
                {t('Edit Public Profile', 'सार्वजनिक प्रोफ़ाइल संपादित करें')}
              </button>
              <button
                type="button"
                onClick={() => {
                  setShowMoreDetailsModal(false);
                  setVerificationUpiId(artisanData?.upiId || '');
                  setShowAccountVerificationModal(true);
                }}
                className="flex-1 py-2.5 bg-amber-500 text-stone-950 rounded-xl font-bold text-xs hover:bg-amber-400 transition-colors flex items-center justify-center gap-1.5 shadow-sm"
              >
                <ShieldCheck className="w-4 h-4 text-stone-950" />
                <span>{t('🔐 Account & Verification', '🔐 खाता एवं सत्यापन')}</span>
              </button>
              <button
                type="button"
                onClick={() => setShowMoreDetailsModal(false)}
                className="py-2.5 px-4 bg-stone-100 text-stone-700 rounded-xl font-bold text-xs hover:bg-stone-200 transition-colors"
              >
                {t('Close', 'बंद करें')}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* 6. PROFILE EDITING MODAL */}
      {showEditProfileModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-xs p-4 animate-in fade-in duration-200">
          <div className="bg-white rounded-3xl max-w-2xl w-full p-6 sm:p-8 border border-stone-200 shadow-2xl space-y-5 max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between pb-3 border-b border-stone-100">
              <div className="flex items-center gap-2">
                <Edit3 className="w-5 h-5 text-terracotta-600" />
                <h3 className="font-extrabold text-stone-900 text-base sm:text-lg">
                  {t('Edit Artisan Profile', 'कारीगर प्रोफ़ाइल संपादित करें')}
                </h3>
              </div>
              <button
                onClick={() => setShowEditProfileModal(false)}
                className="p-1.5 text-stone-400 hover:text-stone-700 rounded-lg hover:bg-stone-100"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {profileSaveSuccess && (
              <div className="p-3 bg-emerald-50 text-emerald-800 rounded-xl border border-emerald-200 text-xs font-bold flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>{t('Profile updated successfully!', 'प्रोफ़ाइल सफलतापूर्वक अपडेट हो गई!')}</span>
              </div>
            )}

            <form onSubmit={handleSaveProfile} className="space-y-4 text-xs">
              {/* SECTION: PROFILE */}
              <div className="p-4 bg-stone-50 rounded-2xl border border-stone-100 space-y-3">
                <span className="text-[10px] font-extrabold uppercase text-stone-400 tracking-wider block">
                  1. {t('Profile Information', 'प्रोफ़ाइल जानकारी')}
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="font-bold text-stone-700 block mb-1">{t('Full Name', 'पूरा नाम')}</label>
                    <input
                      type="text"
                      required
                      value={editFormData.fullName || ''}
                      onChange={(e) => setEditFormData({ ...editFormData, fullName: e.target.value })}
                      className="w-full px-3 py-2 rounded-xl border border-stone-200 bg-white focus:outline-none focus:ring-1 focus:ring-amber-500"
                    />
                  </div>
                  <div>
                    <label className="font-bold text-stone-700 block mb-1">{t('Profile Photo URL', 'फोटो यूआरएल')}</label>
                    <input
                      type="url"
                      value={editFormData.profileImage || ''}
                      onChange={(e) => setEditFormData({ ...editFormData, profileImage: e.target.value })}
                      className="w-full px-3 py-2 rounded-xl border border-stone-200 bg-white focus:outline-none focus:ring-1 focus:ring-amber-500"
                    />
                  </div>
                </div>
                <div>
                  <label className="font-bold text-stone-700 block mb-1">{t('Artisan Bio (English)', 'कारीगर बायो (अंग्रेज़ी)')}</label>
                  <textarea
                    rows={3}
                    value={editFormData.bioEnglish || ''}
                    onChange={(e) => setEditFormData({ ...editFormData, bioEnglish: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl border border-stone-200 bg-white focus:outline-none focus:ring-1 focus:ring-amber-500 resize-none leading-relaxed"
                  />
                </div>
              </div>

              {/* SECTION: LOCATION */}
              <div className="p-4 bg-stone-50 rounded-2xl border border-stone-100 space-y-3">
                <span className="text-[10px] font-extrabold uppercase text-stone-400 tracking-wider block">
                  2. {t('Location', 'स्थान')}
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="font-bold text-stone-700 block mb-1">{t('State', 'राज्य')}</label>
                    <input
                      type="text"
                      value={editFormData.state || ''}
                      onChange={(e) => setEditFormData({ ...editFormData, state: e.target.value })}
                      className="w-full px-3 py-2 rounded-xl border border-stone-200 bg-white focus:outline-none focus:ring-1 focus:ring-amber-500"
                    />
                  </div>
                  <div>
                    <label className="font-bold text-stone-700 block mb-1">{t('District / Region', 'जिला / क्षेत्र')}</label>
                    <input
                      type="text"
                      value={editFormData.district || ''}
                      onChange={(e) => setEditFormData({ ...editFormData, district: e.target.value })}
                      className="w-full px-3 py-2 rounded-xl border border-stone-200 bg-white focus:outline-none focus:ring-1 focus:ring-amber-500"
                    />
                  </div>
                </div>
              </div>

              {/* SECTION: CRAFT & EXPERIENCE */}
              <div className="p-4 bg-stone-50 rounded-2xl border border-stone-100 space-y-3">
                <span className="text-[10px] font-extrabold uppercase text-stone-400 tracking-wider block">
                  3. {t('Craft & Experience', 'शिल्प एवं अनुभव')}
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="font-bold text-stone-700 block mb-1">{t('Primary Craft', 'मुख्य शिल्प')}</label>
                    <input
                      type="text"
                      value={editFormData.primaryCraft || ''}
                      onChange={(e) => setEditFormData({ ...editFormData, primaryCraft: e.target.value })}
                      className="w-full px-3 py-2 rounded-xl border border-stone-200 bg-white focus:outline-none focus:ring-1 focus:ring-amber-500"
                    />
                  </div>
                  <div>
                    <label className="font-bold text-stone-700 block mb-1">{t('Experience (Years)', 'अनुभव (वर्ष)')}</label>
                    <input
                      type="number"
                      value={editFormData.experienceYears || ''}
                      onChange={(e) => setEditFormData({ ...editFormData, experienceYears: e.target.value })}
                      className="w-full px-3 py-2 rounded-xl border border-stone-200 bg-white focus:outline-none focus:ring-1 focus:ring-amber-500"
                    />
                  </div>
                </div>
              </div>

              {/* SECTION: CONTACT */}
              <div className="p-4 bg-stone-50 rounded-2xl border border-stone-100 space-y-3">
                <span className="text-[10px] font-extrabold uppercase text-stone-400 tracking-wider block">
                  4. {t('Contact Details', 'संपर्क विवरण')}
                </span>
                <div>
                  <label className="font-bold text-stone-700 block mb-1">WhatsApp / Phone</label>
                  <input
                    type="tel"
                    value={editFormData.phone || ''}
                    onChange={(e) => setEditFormData({ ...editFormData, phone: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl border border-stone-200 bg-white focus:outline-none focus:ring-1 focus:ring-amber-500 text-xs"
                  />
                </div>
              </div>

              {/* ISOLATED FINANCIAL & KYC NOTICE */}
              <div className="p-4 bg-amber-50/70 rounded-2xl border border-amber-200/80 flex items-start gap-2.5 text-amber-900">
                <ShieldCheck className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
                <div className="text-[11px] leading-relaxed">
                  <span className="font-bold block text-stone-900 mb-0.5">
                    {t('Banking & Pehchan KYC are Protected', 'बैंकिंग एवं पहचान सत्यापन सुरक्षित हैं')}
                  </span>
                  {t(
                    'Direct UPI Payout banking and Govt. Pehchan Artisan Card credentials have been relocated to the dedicated 🔐 Account & Verification section for your security.',
                    'सुरक्षा कारणों से सीधा UPI पेआउट और सरकारी पहचान कार्ड विवरण "खाता एवं सत्यापन" में स्थानांतरित कर दिए गए हैं।'
                  )}
                </div>
              </div>

              <div className="flex gap-3 pt-2">
                <button
                  type="button"
                  onClick={() => setShowEditProfileModal(false)}
                  className="flex-1 py-2.5 rounded-xl border border-stone-200 font-bold text-stone-600 hover:bg-stone-50"
                >
                  {t('Cancel', 'रद्द करें')}
                </button>
                <button
                  type="submit"
                  disabled={savingProfile}
                  className="flex-1 py-2.5 rounded-xl bg-terracotta-600 hover:bg-terracotta-700 text-white font-bold transition-colors disabled:opacity-50"
                >
                  {savingProfile ? t('Saving...', 'सहेज रहे हैं...') : t('Save Changes', 'बदलाव सहेजें')}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* 5. PROTECTED ACCOUNT & VERIFICATION MODAL */}
      {showAccountVerificationModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-xs p-4 animate-in fade-in duration-200">
          <div className="bg-white rounded-3xl max-w-xl w-full p-6 sm:p-8 border border-stone-200 shadow-2xl space-y-6 max-h-[85vh] overflow-y-auto">
            <div className="flex items-center justify-between pb-4 border-b border-stone-100">
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-xl bg-amber-100 flex items-center justify-center text-amber-800">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-extrabold text-stone-900 text-base sm:text-lg">
                    {t('Account & Identity Verification', 'खाता एवं पहचान सत्यापन')}
                  </h3>
                  <p className="text-[11px] text-stone-500 font-medium">
                    {t('Official Govt. Pehchan KYC & Protected Payout Banking', 'आधिकारिक पहचान केवाईसी एवं सुरक्षित भुगतान बैंक')}
                  </p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setShowAccountVerificationModal(false)}
                className="p-1.5 text-stone-400 hover:text-stone-700 rounded-lg hover:bg-stone-100 cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-4 text-xs">
              {/* STATUS CARD */}
              <div className="p-4 bg-stone-50 rounded-2xl border border-stone-200/80 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-extrabold uppercase text-stone-400 tracking-wider">
                    {t('KYC Verification Status', 'केवाईसी सत्यापन स्थिति')}
                  </span>
                  {artisanData?.pehchanCardNo ? (
                    <span className="px-2.5 py-1 bg-emerald-100 text-emerald-800 rounded-full font-extrabold text-[10px] border border-emerald-200 flex items-center gap-1">
                      <CheckCircle2 className="w-3 h-3" />
                      <span>{t('OFFICIALLY VERIFIED', 'आधिकारिक रूप से सत्यापित')}</span>
                    </span>
                  ) : (
                    <span className="px-2.5 py-1 bg-amber-100 text-amber-800 rounded-full font-extrabold text-[10px] border border-amber-200 flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      <span>{t('PENDING VERIFICATION', 'सत्यापन लंबित')}</span>
                    </span>
                  )}
                </div>

                <div className="pt-2">
                  <span className="text-[10px] text-stone-400 font-semibold block">{t('Pehchan Artisan Card ID', 'पहचान कारीगर कार्ड आईडी')}</span>
                  <div className="flex items-center justify-between mt-1">
                    <span className="font-mono font-black text-sm text-stone-900 bg-white px-3 py-1.5 rounded-xl border border-stone-200 shadow-xs">
                      {artisanData?.pehchanCardNo
                        ? `${artisanData.pehchanCardNo.slice(0, 3)}-****-${artisanData.pehchanCardNo.slice(-4)}`
                        : t('Not linked yet', 'अभी लिंक नहीं किया गया')}
                    </span>
                    {artisanData?.pehchanCardNo && (
                      <span className="text-[11px] text-emerald-700 font-semibold flex items-center gap-1">
                        <Lock className="w-3 h-3" />
                        <span>Ministry of Textiles Verified</span>
                      </span>
                    )}
                  </div>
                  <p className="text-[10px] text-stone-500 mt-2">
                    {t(
                      'Pehchan Card numbers are cryptographically masked to protect artisan national identity records per Ministry guidelines.',
                      'मंत्रालय के दिशानिर्देशों के अनुसार राष्ट्रीय पहचान रिकॉर्ड की सुरक्षा के लिए पहचान कार्ड नंबर सुरक्षित रूप से मास्क किए जाते हैं।'
                    )}
                  </p>
                </div>
              </div>

              {/* DIRECT PAYOUT CONFIGURATION */}
              <form onSubmit={handleSaveVerificationUpi} className="p-4 bg-stone-50 rounded-2xl border border-stone-200/80 space-y-3">
                <div>
                  <span className="text-[10px] font-extrabold uppercase text-stone-400 tracking-wider block">
                    {t('Direct Payout Banking (UPI / VPA)', 'सीधा भुगतान खाता (UPI)')}
                  </span>
                  <p className="text-[11px] text-stone-500 mt-0.5">
                    {t('Buyer purchases through ArsAI are settled directly into this account with zero intermediary commission.', 'खरीदार का भुगतान बिना किसी मध्यस्थ कमीशन के सीधे इस खाते में जमा होता है।')}
                  </p>
                </div>

                <div>
                  <label className="font-bold text-stone-700 block mb-1">
                    {t('Artisan UPI ID / VPA', 'कारीगर UPI आईडी')}
                  </label>
                  <div className="flex gap-2">
                    <input
                      type="text"
                      value={verificationUpiId}
                      onChange={(e) => setVerificationUpiId(e.target.value)}
                      placeholder="e.g. sita.devi@okhdfcbank"
                      className="flex-1 px-3.5 py-2 rounded-xl border border-stone-200 bg-white focus:outline-none focus:ring-2 focus:ring-terracotta-500 font-mono text-xs text-stone-900 font-semibold"
                    />
                    <button
                      type="submit"
                      disabled={savingVerification}
                      className="px-4 py-2 rounded-xl bg-stone-900 hover:bg-stone-800 text-white font-bold text-xs transition-colors disabled:opacity-50 shrink-0 cursor-pointer"
                    >
                      {savingVerification ? t('Saving...', 'सहेज रहे हैं...') : t('Update UPI', 'UPI अपडेट करें')}
                    </button>
                  </div>
                </div>

                {verificationMessage && (
                  <div className="p-2.5 bg-emerald-50 border border-emerald-200 rounded-xl text-emerald-800 text-xs font-semibold flex items-center gap-1.5 animate-in fade-in">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                    <span>{verificationMessage}</span>
                  </div>
                )}
              </form>

              {/* PRIVATE ACCOUNT METADATA */}
              <div className="p-4 bg-stone-50 rounded-2xl border border-stone-200/80 space-y-2.5">
                <span className="text-[10px] font-extrabold uppercase text-stone-400 tracking-wider block">
                  {t('Private Account Security & Contact', 'खाता सुरक्षा एवं संपर्क')}
                </span>
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <span className="text-[10px] text-stone-400 font-semibold block">{t('Registered Phone', 'पंजीकृत फोन')}</span>
                    <span className="font-bold text-stone-800">{artisanData?.phone || '—'}</span>
                  </div>
                  <div>
                    <span className="text-[10px] text-stone-400 font-semibold block">{t('Registered Email', 'पंजीकृत ईमेल')}</span>
                    <span className="font-bold text-stone-800 truncate block">{artisanData?.user?.email || '—'}</span>
                  </div>
                  <div>
                    <span className="text-[10px] text-stone-400 font-semibold block">{t('Seller Tier', 'कारीगर स्तर')}</span>
                    <span className="font-bold text-amber-700">Master Craftsman (Tier 1)</span>
                  </div>
                  <div>
                    <span className="text-[10px] text-stone-400 font-semibold block">{t('Data Encryption', 'डेटा एन्क्रिप्शन')}</span>
                    <span className="font-bold text-emerald-700">AES-256 Protected</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-2">
              <button
                type="button"
                onClick={() => setShowAccountVerificationModal(false)}
                className="w-full py-2.5 bg-stone-900 text-white rounded-xl font-bold text-xs hover:bg-stone-800 transition-colors cursor-pointer"
              >
                {t('Close', 'बंद करें')}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* 7. UNPUBLISH / REMOVE FROM MARKETPLACE CONFIRMATION MODAL */}
      {productToUnpublish && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-150">
          <div className="bg-white rounded-3xl max-w-md w-full p-6 shadow-2xl border border-stone-200 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-amber-100 text-amber-800 flex items-center justify-center shrink-0">
                <EyeOff className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-base font-extrabold text-stone-900 leading-snug">
                  {t('Remove this product from the marketplace?', 'क्या आप इस उत्पाद को बाज़ार से हटाना चाहते हैं?')}
                </h3>
                <p className="text-xs text-stone-500 font-medium truncate max-w-[260px]">
                  {productToUnpublish.title}
                </p>
              </div>
            </div>
            <p className="text-xs text-stone-600 leading-relaxed bg-stone-50 p-3 rounded-xl border border-stone-100">
              {t(
                'This will unpublish the product and hide it from buyer search, catalog, and featured sections. Past customer reviews, inquiries, orders, and your craft history will be preserved.',
                'यह इस उत्पाद को अप्रकाशित कर देगा और खरीदार खोज, कैटलॉग और प्रदर्शित अनुभागों से छिपा देगा। पिछली ग्राहक समीक्षाएं, पूछताछ, ऑर्डर और आपका शिल्प इतिहास सुरक्षित रहेगा।'
              )}
            </p>
            <div className="flex items-center justify-end gap-3 pt-2">
              <button
                type="button"
                onClick={() => setProductToUnpublish(null)}
                disabled={isUnpublishing}
                className="px-4 py-2.5 rounded-xl border border-stone-200 text-stone-700 hover:bg-stone-100 text-xs font-bold transition-colors cursor-pointer"
              >
                {t('Cancel', 'रद्द करें')}
              </button>
              <button
                type="button"
                onClick={handleConfirmUnpublish}
                disabled={isUnpublishing}
                className="px-5 py-2.5 rounded-xl bg-amber-700 hover:bg-amber-800 text-white text-xs font-bold transition-colors shadow-sm flex items-center gap-1.5 cursor-pointer"
              >
                {isUnpublishing ? (
                  <span>{t('Removing...', 'हटाया जा रहा है...')}</span>
                ) : (
                  <>
                    <EyeOff className="w-4 h-4" />
                    <span>{t('Remove from Marketplace', 'बाज़ार से हटाएं')}</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* 8. DELETE DRAFT CRAFT CONFIRMATION MODAL */}
      {productToDeleteDraft && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-150">
          <div className="bg-white rounded-3xl max-w-md w-full p-6 shadow-2xl border border-stone-200 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-red-100 text-red-800 flex items-center justify-center shrink-0">
                <Trash2 className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-base font-extrabold text-stone-900 leading-snug">
                  {t('Delete this draft craft?', 'क्या आप इस प्रारूप शिल्प को हटाना चाहते हैं?')}
                </h3>
                <p className="text-xs text-stone-500 font-medium truncate max-w-[260px]">
                  {productToDeleteDraft.title}
                </p>
              </div>
            </div>
            <p className="text-xs text-stone-600 leading-relaxed bg-stone-50 p-3 rounded-xl border border-stone-100">
              {t(
                'This draft product will be permanently deleted from your catalog. This action cannot be undone.',
                'यह प्रारूप उत्पाद आपके कैटलॉग से स्थायी रूप से हटा दिया जाएगा। यह क्रिया पूर्ववत नहीं की जा सकती।'
              )}
            </p>
            <div className="flex items-center justify-end gap-3 pt-2">
              <button
                type="button"
                onClick={() => setProductToDeleteDraft(null)}
                disabled={isDeletingDraft}
                className="px-4 py-2.5 rounded-xl border border-stone-200 text-stone-700 hover:bg-stone-100 text-xs font-bold transition-colors cursor-pointer"
              >
                {t('Cancel', 'रद्द करें')}
              </button>
              <button
                type="button"
                onClick={handleConfirmDeleteDraft}
                disabled={isDeletingDraft}
                className="px-5 py-2.5 rounded-xl bg-red-700 hover:bg-red-800 text-white text-xs font-bold transition-colors shadow-sm flex items-center gap-1.5 cursor-pointer"
              >
                {isDeletingDraft ? (
                  <span>{t('Deleting...', 'हटाया जा रहा है...')}</span>
                ) : (
                  <>
                    <Trash2 className="w-4 h-4" />
                    <span>{t('Delete Draft', 'प्रारूप हटाएं')}</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default function ArtisanDashboard() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-stone-100/60" />}>
      <AuthGuard allowedRoles={['ARTISAN']}>
        <ArtisanDashboardContent />
      </AuthGuard>
    </Suspense>
  );
}
