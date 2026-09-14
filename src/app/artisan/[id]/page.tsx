'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useParams, useRouter } from 'next/navigation';
import { useMockAuth } from '@/context/MockAuthContext';
import { getLocalizedProduct, getLocalizedArtisan } from '@/lib/i18n/productContent';
import {
  Star,
  MessageSquare,
  MapPin,
  Sparkles,
  ShoppingBag,
  Award,
  Leaf,
  Info,
  X,
  ChevronRight,
  ShieldCheck,
  CheckCircle2,
  ArrowLeft,
  Calendar,
  Package,
} from 'lucide-react';

export default function BuyerArtisanProfilePage() {
  const params = useParams();
  const router = useRouter();
  const { language, t } = useMockAuth();

  const artisanId = params?.id as string;
  const [artisan, setArtisan] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [showMoreDetails, setShowMoreDetails] = useState(false);
  const [showContactModal, setShowContactModal] = useState(false);
  const [showBulkModal, setShowBulkModal] = useState(false);
  const [contactMessage, setContactMessage] = useState('');
  const [buyerName, setBuyerName] = useState('');
  const [buyerPhone, setBuyerPhone] = useState('');
  const [sendingContact, setSendingContact] = useState(false);
  const [contactSent, setContactSent] = useState(false);

  // Bulk / Custom Order Form State
  const [bulkSelectedProduct, setBulkSelectedProduct] = useState('');
  const [bulkQuantity, setBulkQuantity] = useState(25);
  const [bulkCustomNotes, setBulkCustomNotes] = useState('');
  const [bulkBuyerName, setBulkBuyerName] = useState('');
  const [bulkBuyerPhone, setBulkBuyerPhone] = useState('');
  const [sendingBulk, setSendingBulk] = useState(false);
  const [bulkSent, setBulkSent] = useState(false);

  useEffect(() => {
    async function loadArtisan() {
      try {
        setLoading(true);
        const res = await fetch(`/api/artisan/${artisanId}`);
        const data = await res.json();
        if (data.success && data.artisan) {
          setArtisan(data.artisan);
        } else {
          setError(data.error || 'Artisan profile not found');
        }
      } catch (err: any) {
        console.error('Error loading artisan profile:', err);
        setError('Failed to load artisan profile');
      } finally {
        setLoading(false);
      }
    }
    if (artisanId) loadArtisan();
  }, [artisanId]);

  if (loading) {
    return (
      <div className="min-h-screen bg-stone-50 py-12 px-4">
        <div className="max-w-4xl mx-auto space-y-6 animate-pulse">
          <div className="h-48 bg-stone-200 rounded-3xl" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="h-64 bg-stone-200 rounded-2xl md:col-span-1" />
            <div className="h-64 bg-stone-200 rounded-2xl md:col-span-2" />
          </div>
        </div>
      </div>
    );
  }

  if (error || !artisan) {
    return (
      <div className="min-h-screen bg-stone-50 flex items-center justify-center p-4">
        <div className="bg-white rounded-3xl p-8 max-w-md w-full text-center border border-stone-200 shadow-sm">
          <Award className="w-12 h-12 text-stone-300 mx-auto mb-3" />
          <h2 className="text-lg font-bold text-stone-900 mb-1">{t('Artisan Not Found', 'कारीगर नहीं मिले')}</h2>
          <p className="text-xs text-stone-500 mb-5">{error || t('Could not find profile for this craftsperson.', 'इस शिल्पकार का प्रोफाइल नहीं मिला।')}</p>
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-stone-900 text-white font-bold text-xs hover:bg-stone-800 transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>{t('Back to Marketplace', 'बाज़ार पर वापस जाएँ')}</span>
          </Link>
        </div>
      </div>
    );
  }

  const products = artisan.products || [];
  const reviews = artisan.reviews || [];
  const stats = artisan.stats || { averageRating: 0, totalReviews: 0, totalProducts: products.length };
  const locArtisan = artisan ? getLocalizedArtisan(artisan, language) : null;

  const handleSendInquiry = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!buyerName.trim() || !buyerPhone.trim() || !contactMessage.trim()) return;
    setSendingContact(true);
    try {
      const firstProduct = products[0];
      const res = await fetch('/api/inquiries', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          productId: firstProduct ? firstProduct.id : artisan.id,
          buyerName,
          buyerPhone,
          message: contactMessage,
          type: 'DIRECT_INQUIRY',
        }),
      });
      const d = await res.json();
      if (d.success) {
        setContactSent(true);
      }
    } catch (err) {
      console.error('Failed to send contact inquiry', err);
    } finally {
      setSendingContact(false);
    }
  };

  const handleSendBulkInquiry = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!bulkBuyerName.trim() || !bulkBuyerPhone.trim()) return;
    setSendingBulk(true);
    try {
      const targetProdId = bulkSelectedProduct || (products[0] ? products[0].id : artisan.id);
      const res = await fetch('/api/inquiries', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          productId: targetProdId,
          buyerName: bulkBuyerName.trim(),
          buyerPhone: bulkBuyerPhone.trim(),
          bulkQuantity: Number(bulkQuantity) || 25,
          intendedUse: 'B2B Wholesale / Custom Commission',
          message: bulkCustomNotes.trim() || `Bulk / Custom Order inquiry for ${artisan.fullName}`,
        }),
      });
      const d = await res.json();
      if (d.success) {
        setBulkSent(true);
      }
    } catch (err) {
      console.error('Failed to send bulk inquiry', err);
    } finally {
      setSendingBulk(false);
    }
  };

  return (
    <div className="min-h-screen bg-stone-50 pb-20">
      {/* Top Breadcrumb */}
      <div className="bg-white border-b border-stone-200/80">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-3 flex items-center gap-2 text-xs text-stone-500">
          <Link href="/" className="hover:text-terracotta-600 transition-colors">
            {t('Marketplace', 'बाज़ार')}
          </Link>
          <span className="text-stone-300">›</span>
          <span className="text-stone-700 font-semibold">{t('Artisan Profile', 'कारीगर प्रोफ़ाइल')}</span>
          <span className="text-stone-300">›</span>
          <span className="text-stone-900 font-bold truncate">{artisan.fullName}</span>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 pt-6 space-y-6">
        {/* 1. CLEAN BUYER-FACING HEADER (Exact specifications) */}
        <section className="bg-white rounded-3xl p-6 sm:p-8 border border-stone-200/80 shadow-sm transition-all">
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 text-center sm:text-left">
            {/* Profile Photo */}
            <div className="relative shrink-0">
              <img
                src={artisan.profileImage || 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300'}
                alt={artisan.fullName}
                className="w-24 h-24 sm:w-28 sm:h-28 rounded-3xl object-cover ring-4 ring-amber-100 shadow-md"
              />
              {artisan.isPehchanVerified && (
                <span
                  title={t('Pehchan Verified Artisan', 'पहचान सत्यापित शिल्पकार')}
                  className="absolute -bottom-1 -right-1 bg-blue-600 text-white p-1.5 rounded-full text-xs shadow-md"
                >
                  <CheckCircle2 className="w-4 h-4" />
                </span>
              )}
            </div>

            {/* Name, Username, Craft, Rating, Actions */}
            <div className="flex-1 min-w-0 space-y-2">
              <div>
                <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2">
                  <h1 className="text-2xl sm:text-3xl font-extrabold text-stone-900 tracking-tight">
                    {artisan.fullName}
                  </h1>
                  {artisan.isPehchanVerified && (
                    <span className="text-[10px] bg-blue-50 text-blue-700 border border-blue-200 px-2 py-0.5 rounded-full font-bold inline-flex items-center gap-1">
                      <ShieldCheck className="w-3 h-3 text-blue-600" />
                      <span>{t('Pehchan Verified', 'पहचान सत्यापित')}</span>
                    </span>
                  )}
                </div>
                <p className="text-xs sm:text-sm font-semibold text-terracotta-700 mt-0.5">
                  {artisan.username}
                </p>
                <p className="text-xs sm:text-sm font-medium text-stone-600 mt-1">
                  {locArtisan?.primaryCraft || artisan.primaryCraft}
                </p>
              </div>

              {/* Overall Rating & Reviews */}
              <div className="flex items-center justify-center sm:justify-start gap-2 pt-1 text-sm">
                <div className="flex items-center gap-1 font-extrabold text-amber-600 bg-amber-50 px-2.5 py-1 rounded-xl border border-amber-200/60">
                  <Star className="w-4 h-4 fill-amber-400 text-amber-500" />
                  <span>{stats.averageRating > 0 ? stats.averageRating.toFixed(1) : '5.0'}</span>
                </div>
                <span className="text-stone-300">•</span>
                <span className="text-xs font-semibold text-stone-600">
                  {stats.totalReviews} {t('Reviews', 'समीक्षाएं')}
                </span>
              </div>

              {/* Action Buttons */}
              <div className="pt-3 flex flex-wrap items-center justify-center sm:justify-start gap-3">
                <button
                  onClick={() => {
                    setContactSent(false);
                    setShowContactModal(true);
                  }}
                  className="px-6 py-2.5 bg-gradient-to-r from-terracotta-600 to-amber-700 hover:from-terracotta-700 hover:to-amber-800 text-white font-extrabold text-xs sm:text-sm rounded-xl shadow-md shadow-terracotta-600/20 active:scale-95 transition-all flex items-center gap-2 cursor-pointer"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>{t('Contact Artisan', 'कारीगर से संपर्क करें')}</span>
                </button>

                <button
                  onClick={() => {
                    setBulkSent(false);
                    setShowBulkModal(true);
                  }}
                  className="px-5 py-2.5 bg-white hover:bg-stone-50 text-stone-900 border border-stone-300 hover:border-stone-400 font-extrabold text-xs sm:text-sm rounded-xl shadow-xs active:scale-95 transition-all flex items-center gap-2 cursor-pointer"
                >
                  <Package className="w-4 h-4 text-terracotta-600" />
                  <span>{t('Bulk / Custom Order', 'थोक / कस्टम ऑर्डर')}</span>
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* 2. SEPARATE SPACIOUS SECTIONS BELOW HEADER */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Column (1/3 on desktop): Profile / About & Craft */}
          <div className="space-y-6 lg:col-span-1">
            {/* PROFILE / ABOUT CARD */}
            <div className="bg-white rounded-3xl p-6 border border-stone-200/80 shadow-sm space-y-4">
              <h2 className="text-sm font-extrabold text-stone-900 uppercase tracking-wider flex items-center gap-2">
                <Award className="w-4 h-4 text-terracotta-600" />
                <span>{t('About the Artisan', 'कारीगर के बारे में')}</span>
              </h2>

              <p className="text-xs sm:text-sm text-stone-700 leading-relaxed italic bg-stone-50 p-4 rounded-2xl border border-stone-100">
                "{locArtisan?.bio || artisan.bioEnglish || t('Dedicated master artisan continuing generational craft traditions with natural materials.', 'पारंपरिक शिल्पकार जो प्राकृतिक सामग्री से हस्तनिर्मित कला का निर्माण करते हैं।')}"
              </p>

              <div className="text-xs text-stone-500 space-y-2 pt-2 border-t border-stone-100">
                <div className="flex items-center justify-between">
                  <span className="font-medium text-stone-400">{t('Location', 'स्थान')}:</span>
                  <span className="font-semibold text-stone-800">{artisan.district}, {artisan.state}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="font-medium text-stone-400">{t('Craft Experience', 'शिल्प अनुभव')}:</span>
                  <span className="font-semibold text-stone-800">{artisan.experienceYears}+ {t('Years', 'वर्ष')}</span>
                </div>
              </div>

              <button
                onClick={() => setShowMoreDetails(true)}
                className="w-full py-2.5 rounded-xl bg-amber-50 hover:bg-amber-100 text-amber-900 border border-amber-200 font-bold text-xs transition-colors flex items-center justify-center gap-1.5"
              >
                <span>{t('See Full Heritage & Story', 'विस्तृत विरासत व कहानी देखें')}</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* CRAFT & TRADITION CARD */}
            <div className="bg-white rounded-3xl p-6 border border-stone-200/80 shadow-sm space-y-3.5">
              <h2 className="text-sm font-extrabold text-stone-900 uppercase tracking-wider flex items-center gap-2">
                <Leaf className="w-4 h-4 text-emerald-600" />
                <span>{t('Craft & Lineage', 'शिल्प एवं विरासत')}</span>
              </h2>

              <div className="space-y-3 text-xs">
                <div>
                  <span className="text-[10px] font-bold uppercase text-stone-400 block">{t('Primary Craft Style', 'मुख्य शिल्प शैली')}</span>
                  <p className="font-bold text-stone-800 text-sm mt-0.5">{locArtisan?.primaryCraft || artisan.primaryCraft}</p>
                </div>

                <div>
                  <span className="text-[10px] font-bold uppercase text-stone-400 block">{t('Region & Heritage', 'क्षेत्रीय धरोहर')}</span>
                  <p className="font-medium text-stone-700 mt-0.5 flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-terracotta-600 shrink-0" />
                    <span>{artisan.district}, {artisan.state}</span>
                  </p>
                </div>

                <div className="p-3 bg-emerald-50/60 rounded-xl border border-emerald-200/70 text-emerald-900">
                  <span className="font-bold text-[11px] block">{t('Zero Middleman Guarantee', 'शून्य बिचौलिया गारंटी')}</span>
                  <p className="text-[10px] text-emerald-800/90 mt-0.5">
                    {t('Direct sourcing from the master craftsperson. 100% of fair product earnings reach the artisan.', 'सीधे शिल्पकार से खरीद। उचित मूल्य का शत-प्रतिशत कारीगर तक पहुंचता है।')}
                  </p>
                </div>
              </div>
            </div>

            {/* REVIEWS SUMMARY CARD */}
            <div className="bg-white rounded-3xl p-6 border border-stone-200/80 shadow-sm space-y-4">
              <div className="flex items-center justify-between">
                <h2 className="text-sm font-extrabold text-stone-900 uppercase tracking-wider flex items-center gap-2">
                  <Star className="w-4 h-4 text-amber-500 fill-amber-500" />
                  <span>{t('Customer Reviews', 'ग्राहक समीक्षा')}</span>
                </h2>
                <span className="text-xs font-black text-amber-700 bg-amber-50 px-2.5 py-0.5 rounded-lg border border-amber-200">
                  {stats.averageRating > 0 ? stats.averageRating.toFixed(1) : '5.0'} ★
                </span>
              </div>

              <div className="p-4 bg-stone-50 rounded-2xl text-center space-y-1">
                <div className="flex items-center justify-center gap-1 text-amber-400">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <Star
                      key={s}
                      className={`w-4 h-4 ${s <= Math.round(stats.averageRating) ? 'fill-amber-400 text-amber-500' : 'text-stone-300'}`}
                    />
                  ))}
                </div>
                <p className="text-xs text-stone-500">
                  {t(`Based on ${stats.totalReviews} verified community ratings`, `${stats.totalReviews} सत्यापित समीक्षाओं के आधार पर`)}
                </p>
              </div>

              {reviews.length > 0 && (
                <div className="space-y-3 pt-2">
                  {reviews.slice(0, 2).map((rev: any) => (
                    <div key={rev.id} className="p-3 bg-stone-50 rounded-xl border border-stone-100 text-xs space-y-1">
                      <div className="flex items-center justify-between">
                        <span className="font-bold text-stone-800">{rev.customerDisplayName}</span>
                        <span className="text-[10px] text-amber-600 font-bold">{rev.rating} ★</span>
                      </div>
                      <p className="text-stone-600 line-clamp-2 italic">"{rev.reviewText}"</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Right Column (2/3 on desktop): Products Catalog & Full Reviews */}
          <div className="space-y-6 lg:col-span-2">
            {/* PRODUCTS SECTION */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-stone-200/80 shadow-sm space-y-5">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-stone-100">
                <div>
                  <h2 className="text-lg font-extrabold text-stone-900 flex items-center gap-2">
                    <ShoppingBag className="w-5 h-5 text-terracotta-600" />
                    <span>{t(`Crafts by ${artisan.fullName}`, `${artisan.fullName} की कृतियां`)}</span>
                  </h2>
                  <p className="text-xs text-stone-500 mt-0.5">
                    {t(`Explore ${products.length} handcrafted items cataloged directly with fair pricing.`, `सीधे निष्पक्ष मूल्य पर सूचीबद्ध ${products.length} हस्तशिल्प उत्पाद देखें।`)}
                  </p>
                </div>
                <span className="text-xs font-bold px-3 py-1 bg-stone-100 text-stone-700 rounded-full self-start sm:self-auto">
                  {products.length} {t('Crafts Available', 'उत्पाद उपलब्ध')}
                </span>
              </div>

              {products.length === 0 ? (
                <div className="text-center py-12 bg-stone-50 rounded-2xl border border-dashed border-stone-200 p-6">
                  <ShoppingBag className="w-10 h-10 text-stone-300 mx-auto mb-2" />
                  <p className="text-xs font-semibold text-stone-600">
                    {t('No crafts published right now. Check back soon!', 'वर्तमान में कोई शिल्प उपलब्ध नहीं है। जल्द देखें!')}
                  </p>
                </div>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {products.map((prod: any) => {
                    const loc = getLocalizedProduct(prod, language);
                    return (
                      <div
                        key={prod.id}
                        onClick={() => router.push(`/product/${prod.id}`)}
                        className="bg-stone-50/80 hover:bg-white rounded-2xl p-4 border border-stone-200/80 hover:border-amber-300 hover:shadow-md transition-all cursor-pointer flex flex-col justify-between group"
                      >
                        <div>
                          <div className="aspect-square rounded-xl overflow-hidden bg-stone-100 relative mb-3">
                            <img
                              src={prod.primaryImageUrl}
                              alt={loc.title}
                              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                            />
                            <span className="absolute top-2 left-2 px-2 py-0.5 rounded-full text-[9px] font-bold bg-stone-900/80 text-white backdrop-blur-xs">
                              {loc.craftCategory}
                            </span>
                          </div>

                          <h3 className="font-extrabold text-stone-900 text-sm line-clamp-1 group-hover:text-terracotta-600 transition-colors">
                            {loc.title}
                          </h3>

                          {loc.culturalHeritageStory && (
                            <p className="text-[11px] text-stone-500 italic mt-1 line-clamp-2">
                              "{loc.culturalHeritageStory}"
                            </p>
                          )}
                        </div>

                        <div className="mt-4 pt-3 border-t border-stone-200/60 flex items-center justify-between">
                          <div>
                            <span className="text-[10px] text-stone-400 font-semibold block uppercase">{t('Direct Price', 'कारीगर मूल्य')}</span>
                            <span className="text-base font-extrabold text-stone-900">₹{prod.finalListingPrice}</span>
                          </div>

                          <span className="text-xs font-bold text-terracotta-600 group-hover:underline flex items-center gap-0.5">
                            <span>{t('View Craft', 'विवरण देखें')}</span>
                            <ChevronRight className="w-3.5 h-3.5" />
                          </span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>

            {/* FULL PUBLIC REVIEWS LIST */}
            {reviews.length > 0 && (
              <div className="bg-white rounded-3xl p-6 sm:p-8 border border-stone-200/80 shadow-sm space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-stone-100">
                  <div>
                    <h3 className="text-base font-extrabold text-stone-900">
                      {t('All Community Reviews', 'सभी खरीदार समीक्षाएं')} ({reviews.length})
                    </h3>
                    <p className="text-xs text-stone-500">
                      {t('Authentic ratings submitted by craft buyers.', 'खरीदारों द्वारा दी गई प्रामाणिक समीक्षाएं।')}
                    </p>
                  </div>
                </div>

                <div className="space-y-3">
                  {reviews.map((rev: any) => (
                    <div key={rev.id} className="p-4 bg-stone-50 rounded-2xl border border-stone-200/60 space-y-2">
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <div className="flex items-center gap-2">
                          <span className="text-xs font-bold text-stone-900">{rev.customerDisplayName}</span>
                          <span className="text-[10px] px-2 py-0.5 bg-stone-200/80 text-stone-700 rounded-md font-semibold truncate max-w-[200px]">
                            {rev.productTitle}
                          </span>
                        </div>
                        <span className="text-[10px] text-stone-400">
                          {new Date(rev.createdAt).toLocaleDateString('en-IN', {
                            day: 'numeric',
                            month: 'short',
                            year: 'numeric',
                          })}
                        </span>
                      </div>

                      <div className="flex items-center gap-0.5 text-amber-500">
                        {[1, 2, 3, 4, 5].map((s) => (
                          <Star
                            key={s}
                            className={`w-3.5 h-3.5 ${s <= rev.rating ? 'fill-amber-400 text-amber-500' : 'text-stone-300'}`}
                          />
                        ))}
                      </div>

                      <p className="text-xs text-stone-700 leading-relaxed font-normal">
                        "{rev.reviewText}"
                      </p>

                      {rev.photos && rev.photos.length > 0 && (
                        <div className="flex gap-2 pt-1 overflow-x-auto">
                          {rev.photos.map((photo: string, pIdx: number) => (
                            <img
                              key={pIdx}
                              src={photo}
                              alt="Review attachment"
                              className="w-14 h-14 rounded-xl object-cover border border-stone-200 shrink-0"
                            />
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* SEE MORE DETAILS MODAL */}
      {showMoreDetails && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-xs p-4 animate-in fade-in duration-200">
          <div className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-7 border border-stone-200 shadow-2xl space-y-5 max-h-[85vh] overflow-y-auto">
            <div className="flex items-center justify-between pb-3 border-b border-stone-100">
              <div className="flex items-center gap-2">
                <Award className="w-5 h-5 text-terracotta-600" />
                <h3 className="font-extrabold text-stone-900 text-base">
                  {t('Artisan Heritage & Details', 'कारीगर विरासत एवं विवरण')}
                </h3>
              </div>
              <button
                onClick={() => setShowMoreDetails(false)}
                className="p-1.5 text-stone-400 hover:text-stone-700 rounded-lg hover:bg-stone-100"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-4 text-xs">
              <div className="p-4 bg-stone-50 rounded-2xl border border-stone-100 space-y-2">
                <span className="text-[10px] font-extrabold uppercase text-stone-400">{t('Generational Heritage', 'पीढ़ीगत धरोहर')}</span>
                <p className="text-stone-700 leading-relaxed italic">
                  "{locArtisan?.bio || artisan.bioEnglish || t('Practicing traditional Indian handicraft with natural indigenous techniques passed down through master craft lines.', 'पारंपरिक भारतीय हस्तकला की प्राचीन तकनीकों को आगे बढ़ाते हुए।')}"
                </p>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="p-3 bg-stone-50 rounded-xl border border-stone-100">
                  <span className="text-[10px] text-stone-400 uppercase font-bold block">{t('State & Region', 'राज्य व क्षेत्र')}</span>
                  <span className="font-bold text-stone-800 mt-0.5 block">{artisan.state}</span>
                </div>
                <div className="p-3 bg-stone-50 rounded-xl border border-stone-100">
                  <span className="text-[10px] text-stone-400 uppercase font-bold block">{t('District', 'जिला')}</span>
                  <span className="font-bold text-stone-800 mt-0.5 block">{artisan.district}</span>
                </div>
                <div className="p-3 bg-stone-50 rounded-xl border border-stone-100">
                  <span className="text-[10px] text-stone-400 uppercase font-bold block">{t('Master Craft', 'मुख्य शिल्प')}</span>
                  <span className="font-bold text-stone-800 mt-0.5 block">{locArtisan?.primaryCraft || artisan.primaryCraft}</span>
                </div>
                <div className="p-3 bg-stone-50 rounded-xl border border-stone-100">
                  <span className="text-[10px] text-stone-400 uppercase font-bold block">{t('Experience', 'अनुभव')}</span>
                  <span className="font-bold text-stone-800 mt-0.5 block">{artisan.experienceYears}+ {t('Years', 'वर्ष')}</span>
                </div>
              </div>

              {artisan.isPehchanVerified && (
                <div className="p-3.5 bg-blue-50/80 rounded-2xl border border-blue-200 text-blue-950 flex items-start gap-2.5">
                  <ShieldCheck className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold block text-xs">{t('Ministry of Textiles Pehchan Verified', 'वस्त्र मंत्रालय पहचान सत्यापित')}</span>
                    <p className="text-[11px] text-blue-800 mt-0.5">
                      {t('This artisan holds an active artisan identity registered under the national handicraft preservation database.', 'यह कारीगर राष्ट्रीय हस्तशिल्प संरक्षण डेटाबेस के अंतर्गत पंजीकृत है।')}
                    </p>
                  </div>
                </div>
              )}
            </div>

            <button
              onClick={() => setShowMoreDetails(false)}
              className="w-full py-2.5 bg-stone-900 text-white rounded-xl font-bold text-xs hover:bg-stone-800 transition-colors"
            >
              {t('Close', 'बंद करें')}
            </button>
          </div>
        </div>
      )}

      {/* CONTACT ARTISAN MODAL */}
      {showContactModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-xs p-4 animate-in fade-in duration-200">
          <div className="bg-white rounded-3xl max-w-md w-full p-6 sm:p-7 border border-stone-200 shadow-2xl space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-stone-100">
              <div className="flex items-center gap-2">
                <MessageSquare className="w-5 h-5 text-terracotta-600" />
                <h3 className="font-extrabold text-stone-900 text-base">
                  {t(`Contact ${artisan.fullName}`, `${artisan.fullName} से संपर्क करें`)}
                </h3>
              </div>
              <button
                onClick={() => setShowContactModal(false)}
                className="p-1.5 text-stone-400 hover:text-stone-700 rounded-lg hover:bg-stone-100"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {contactSent ? (
              <div className="py-8 text-center space-y-3">
                <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h4 className="font-bold text-stone-900 text-sm">{t('Inquiry Sent to Artisan!', 'कारीगर को संदेश भेज दिया गया है!')}</h4>
                <p className="text-xs text-stone-500">
                  {t('The artisan has received your contact details and message in their dashboard and will respond directly.', 'कारीगर को आपका संदेश प्राप्त हो गया है और वे सीधे आपसे संपर्क करेंगे।')}
                </p>
                <button
                  onClick={() => setShowContactModal(false)}
                  className="mt-2 px-6 py-2 bg-stone-900 text-white rounded-xl text-xs font-bold"
                >
                  {t('Done', 'पूर्ण')}
                </button>
              </div>
            ) : (
              <form onSubmit={handleSendInquiry} className="space-y-3 text-xs">
                <p className="text-stone-500 text-[11px]">
                  {t('Send a direct inquiry about custom craft orders, questions, or bulk sourcing. The artisan receives it directly on their dashboard.', 'कस्टम ऑर्डर या शिल्प से जुड़े प्रश्न सीधे कारीगर को भेजें।')}
                </p>

                <div>
                  <label className="font-bold text-stone-700 block mb-1">{t('Your Name', 'आपका नाम')}</label>
                  <input
                    type="text"
                    required
                    value={buyerName}
                    onChange={(e) => setBuyerName(e.target.value)}
                    placeholder="e.g. Priya Sharma"
                    className="w-full px-3 py-2 rounded-xl border border-stone-200 bg-stone-50 focus:bg-white focus:outline-none focus:ring-1 focus:ring-amber-500"
                  />
                </div>

                <div>
                  <label className="font-bold text-stone-700 block mb-1">{t('Your Phone / WhatsApp', 'फोन / व्हाट्सएप')}</label>
                  <input
                    type="tel"
                    required
                    value={buyerPhone}
                    onChange={(e) => setBuyerPhone(e.target.value)}
                    placeholder="e.g. +91 98765 43210"
                    className="w-full px-3 py-2 rounded-xl border border-stone-200 bg-stone-50 focus:bg-white focus:outline-none focus:ring-1 focus:ring-amber-500"
                  />
                </div>

                <div>
                  <label className="font-bold text-stone-700 block mb-1">{t('Message to Artisan', 'कारीगर के लिए संदेश')}</label>
                  <textarea
                    required
                    rows={3}
                    value={contactMessage}
                    onChange={(e) => setContactMessage(e.target.value)}
                    placeholder={t('Namaste Ramesh ji, I would like to inquire about...', 'नमस्ते, मुझे आपके शिल्प के बारे में जानना है...')}
                    className="w-full px-3 py-2 rounded-xl border border-stone-200 bg-stone-50 focus:bg-white focus:outline-none focus:ring-1 focus:ring-amber-500 resize-none"
                  />
                </div>

                <div className="pt-2 flex gap-2">
                  <button
                    type="button"
                    onClick={() => setShowContactModal(false)}
                    className="flex-1 py-2.5 rounded-xl border border-stone-200 font-bold text-stone-600 hover:bg-stone-50"
                  >
                    {t('Cancel', 'रद्द करें')}
                  </button>
                  <button
                    type="submit"
                    disabled={sendingContact}
                    className="flex-1 py-2.5 rounded-xl bg-terracotta-600 hover:bg-terracotta-700 text-white font-bold transition-colors disabled:opacity-50"
                  >
                    {sendingContact ? t('Sending...', 'भेज रहे हैं...') : t('Send Message', 'संदेश भेजें')}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}

      {/* BULK / CUSTOM ORDER MODAL */}
      {showBulkModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-xs p-4 animate-in fade-in duration-200">
          <div className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-7 border border-stone-200 shadow-2xl space-y-4 max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between pb-3 border-b border-stone-100">
              <div className="flex items-center gap-2">
                <Package className="w-5 h-5 text-terracotta-600" />
                <h3 className="font-extrabold text-stone-900 text-base">
                  {t(`Bulk & Custom Order with ${artisan.fullName}`, `${artisan.fullName} के साथ थोक व कस्टम ऑर्डर`)}
                </h3>
              </div>
              <button
                onClick={() => setShowBulkModal(false)}
                className="p-1.5 text-stone-400 hover:text-stone-700 rounded-lg hover:bg-stone-100 cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {bulkSent ? (
              <div className="py-8 text-center space-y-3">
                <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h4 className="font-bold text-stone-900 text-sm">
                  {t('Bulk Request Submitted Successfully!', 'थोक अनुरोध सफलतापूर्वक भेजा गया!')}
                </h4>
                <p className="text-xs text-stone-500 max-w-sm mx-auto">
                  {t(
                    'The artisan has received your RFQ and wholesale request. They will review lead times and contact you directly via WhatsApp / phone.',
                    'कारीगर को आपका अनुरोध प्राप्त हो गया है। वे सीधे आपसे व्हाट्सएप/फोन पर संपर्क करेंगे।'
                  )}
                </p>
                <button
                  onClick={() => setShowBulkModal(false)}
                  className="mt-3 px-6 py-2 bg-stone-900 text-white rounded-xl text-xs font-bold cursor-pointer hover:bg-stone-800 transition-colors"
                >
                  {t('Done', 'पूर्ण')}
                </button>
              </div>
            ) : (
              <form onSubmit={handleSendBulkInquiry} className="space-y-3 text-xs">
                <div className="p-3 bg-amber-50/80 rounded-2xl border border-amber-200 text-amber-950 text-[11px] leading-relaxed">
                  <span className="font-bold block mb-0.5">
                    {t('Direct Craft Cluster Wholesale', 'सीधा कारीगर थोक खरीद')}
                  </span>
                  {t(
                    'Order directly in bulk or request bespoke craft commissions with zero middleman markup. Artisans quote fair pricing for bulk orders.',
                    'बिना बिचौलियों के सीधे थोक ऑर्डर करें या कस्टम शिल्प बनवाएं। कारीगर से सीधे उचित मूल्य पर संपर्क करें।'
                  )}
                </div>

                {products.length > 0 && (
                  <div>
                    <label className="font-bold text-stone-700 block mb-1">
                      {t('Select Craft Item', 'शिल्प उत्पाद चुनें')}
                    </label>
                    <select
                      value={bulkSelectedProduct}
                      onChange={(e) => setBulkSelectedProduct(e.target.value)}
                      className="w-full px-3 py-2 rounded-xl border border-stone-200 bg-stone-50 focus:bg-white focus:outline-none focus:ring-1 focus:ring-amber-500 text-xs"
                    >
                      <option value="">{t('-- General Custom Commission --', '-- सामान्य कस्टम निर्माण --')}</option>
                      {products.map((p: any) => (
                        <option key={p.id} value={p.id}>
                          {p.title} (₹{p.finalListingPrice})
                        </option>
                      ))}
                    </select>
                  </div>
                )}

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="font-bold text-stone-700 block mb-1">
                      {t('Quantity Required', 'आवश्यक मात्रा')}
                    </label>
                    <input
                      type="number"
                      min={5}
                      required
                      value={bulkQuantity}
                      onChange={(e) => setBulkQuantity(parseInt(e.target.value, 10) || 1)}
                      className="w-full px-3 py-2 rounded-xl border border-stone-200 bg-stone-50 focus:bg-white focus:outline-none focus:ring-1 focus:ring-amber-500"
                    />
                  </div>
                  <div>
                    <label className="font-bold text-stone-700 block mb-1">
                      {t('Target Timeline / Event', 'समय सीमा / आयोजन')}
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Within 3-4 weeks"
                      className="w-full px-3 py-2 rounded-xl border border-stone-200 bg-stone-50 focus:bg-white focus:outline-none focus:ring-1 focus:ring-amber-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="font-bold text-stone-700 block mb-1">
                    {t('Custom Specifications / Order Notes', 'कस्टम विनिर्देश / विवरण')}
                  </label>
                  <textarea
                    rows={3}
                    value={bulkCustomNotes}
                    onChange={(e) => setBulkCustomNotes(e.target.value)}
                    placeholder={t(
                      'Describe specific dimensions, branding/logo engraving, motif variations, or corporate gifting requirements...',
                      'आकार, लोगो उत्कीर्णन या उपहार आवश्यकताएं लिखें...'
                    )}
                    className="w-full px-3 py-2 rounded-xl border border-stone-200 bg-stone-50 focus:bg-white focus:outline-none focus:ring-1 focus:ring-amber-500 resize-none"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="font-bold text-stone-700 block mb-1">
                      {t('Your Name / Business', 'आपका नाम / संस्था')}
                    </label>
                    <input
                      type="text"
                      required
                      value={bulkBuyerName}
                      onChange={(e) => setBulkBuyerName(e.target.value)}
                      placeholder="e.g. Aditi Sen (Vistara Interiors)"
                      className="w-full px-3 py-2 rounded-xl border border-stone-200 bg-stone-50 focus:bg-white focus:outline-none focus:ring-1 focus:ring-amber-500"
                    />
                  </div>
                  <div>
                    <label className="font-bold text-stone-700 block mb-1">
                      {t('Mobile / WhatsApp Number', 'मोबाइल / व्हाट्सएप नंबर')}
                    </label>
                    <input
                      type="tel"
                      required
                      value={bulkBuyerPhone}
                      onChange={(e) => setBulkBuyerPhone(e.target.value)}
                      placeholder="e.g. 9811122334"
                      className="w-full px-3 py-2 rounded-xl border border-stone-200 bg-stone-50 focus:bg-white focus:outline-none focus:ring-1 focus:ring-amber-500"
                    />
                  </div>
                </div>

                <div className="pt-2 flex gap-2">
                  <button
                    type="button"
                    onClick={() => setShowBulkModal(false)}
                    className="flex-1 py-2.5 rounded-xl border border-stone-200 font-bold text-stone-600 hover:bg-stone-50 cursor-pointer"
                  >
                    {t('Cancel', 'रद्द करें')}
                  </button>
                  <button
                    type="submit"
                    disabled={sendingBulk}
                    className="flex-1 py-2.5 rounded-xl bg-stone-900 hover:bg-stone-800 text-white font-bold transition-colors disabled:opacity-50 cursor-pointer shadow-sm"
                  >
                    {sendingBulk ? t('Submitting RFQ...', 'भेज रहे हैं...') : t('Submit Bulk RFQ', 'थोक अनुरोध भेजें')}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
