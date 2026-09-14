'use client';

import React, { useState, useEffect, useRef } from 'react';
import {
  TrendingUp,
  Sparkles,
  ShieldAlert,
  CheckCircle2,
  AlertCircle,
  Loader2,
  RefreshCw,
  IndianRupee,
  Sliders,
  Info,
  Check,
  Award,
  Zap,
  ArrowRight,
  ArrowLeft,
  Lock,
  Store,
  Clock
} from 'lucide-react';
import { useMockAuth } from '@/context/MockAuthContext';
import type { AiPricingDraft, PricingConfirmPayload } from '@/lib/types';
import type { ArtisanEligibilityResult } from '@/lib/artisanEligibility';
import { getComparableMarketBenchmarks } from '@/lib/marketComparables';

interface FairPricingAssistantProps {
  productId: string;
  productTitle: string;
  productCategory: string;
  productImage?: string;
  onBack?: () => void;
  onConfirmed: () => void;
}

export default function FairPricingAssistant({
  productId,
  productTitle,
  productCategory,
  productImage,
  onBack,
  onConfirmed,
}: FairPricingAssistantProps) {
  const { t } = useMockAuth();

  // Benchmark derived dynamically from product attributes (never hardcoded 250)
  const initialBenchmark = getComparableMarketBenchmarks({
    title: productTitle,
    category: productCategory,
  });

  // Artisan input cost (initialized to category benchmark floor, not arbitrary 250)
  const [costPrice, setCostPrice] = useState<number>(initialBenchmark.estimatedBaseCostFloor);
  // Artisan expected selling price (requirement 14)
  const [expectedPrice, setExpectedPrice] = useState<number | ''>(initialBenchmark.typicalRetailFair);
  const [hasFetchedOnce, setHasFetchedOnce] = useState(false);

  // AI estimate state
  const [loadingEstimate, setLoadingEstimate] = useState(false);
  const [elapsedSeconds, setElapsedSeconds] = useState(0);
  const [estimateError, setEstimateError] = useState<string | null>(null);
  const [estimate, setEstimate] = useState<AiPricingDraft | null>(null);

  // Artisan chosen final price
  const [chosenTier, setChosenTier] = useState<'min' | 'fair' | 'premium' | 'custom'>('fair');
  const [finalPrice, setFinalPrice] = useState<number>(0);

  // Artisan Premium Eligibility state
  const [eligibility, setEligibility] = useState<ArtisanEligibilityResult | null>(null);

  // Confirmation state
  const [isConfirming, setIsConfirming] = useState(false);
  const [confirmError, setConfirmError] = useState<string | null>(null);

  // Live timer for real AI elapsed time
  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (loadingEstimate) {
      setElapsedSeconds(0);
      timer = setInterval(() => {
        setElapsedSeconds((prev) => prev + 1);
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [loadingEstimate]);

  const formatElapsed = (sec: number) => {
    const mins = Math.floor(sec / 60);
    const s = sec % 60;
    return `${String(mins).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
  };

  const getElapsedStatus = (sec: number) => {
    if (sec < 6) return t('Finding comparable products in Indian craft markets...', 'भारतीय शिल्प बाजारों में तुलनीय उत्पादों की खोज...');
    if (sec < 13) return t('Analyzing current market prices (Amazon Karigar, Etsy India, ONDC)...', 'वर्तमान बाजार मूल्यों का विश्लेषण (अमेज़ॅन कारीगर, एटीसी, ओएनडीसी)...');
    return t('Gemini AI is evaluating fair artisan margin & pricing sanity...', 'जेमिनी एआई निष्पक्ष कारीगर मार्जिन और मूल्य का मूल्यांकन कर रहा है...');
  };

  // Fetch artisan eligibility
  useEffect(() => {
    async function loadEligibility() {
      try {
        const res = await fetch(`/api/artisan/eligibility?productId=${productId}`);
        const data = await res.json();
        if (data.success && data.eligibility) {
          setEligibility(data.eligibility);
        }
      } catch (err) {
        console.error('Failed to fetch eligibility:', err);
      }
    }
    if (productId) {
      loadEligibility();
    }
  }, [productId]);

  const isFetchingRef = useRef(false);

  // Fetch AI pricing estimate
  const fetchEstimate = async (customCost?: number, customExpected?: number | '') => {
    if (isFetchingRef.current) return;
    isFetchingRef.current = true;
    setLoadingEstimate(true);
    setEstimateError(null);
    try {
      const activeCost = customCost !== undefined ? customCost : costPrice;
      const activeExpected =
        customExpected !== undefined
          ? (typeof customExpected === 'number' && customExpected > 0 ? customExpected : undefined)
          : (typeof expectedPrice === 'number' && expectedPrice > 0 ? expectedPrice : undefined);

      const res = await fetch('/api/pricing/estimate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          productId,
          artisanCostPrice: activeCost,
          artisanExpectedPrice: activeExpected,
        }),
      });

      const data = await res.json();
      if (!res.ok || !data.success) {
        throw new Error(data.error || 'Failed to generate fair pricing estimate.');
      }

      const est: AiPricingDraft = data.estimate;
      setEstimate(est);
      setFinalPrice(est.fairPrice);
      setChosenTier('fair');
      setHasFetchedOnce(true);
    } catch (err: unknown) {
      console.error('Estimate error:', err);
      setEstimateError(err instanceof Error ? err.message : 'Pricing analysis failed.');
    } finally {
      isFetchingRef.current = false;
      setLoadingEstimate(false);
    }
  };

  // Automatically request initial estimate on component mount using category benchmark floor
  useEffect(() => {
    if (productId && !hasFetchedOnce) {
      fetchEstimate(costPrice, expectedPrice);
    }
  }, [productId]);

  // Handle tier card click with eligibility guard
  const selectTier = (tier: 'min' | 'fair' | 'premium') => {
    if (!estimate) return;
    if (tier === 'premium' && eligibility && !eligibility.isEligible) {
      return; // Locked for ineligible artisans
    }
    setChosenTier(tier);
    if (tier === 'min') setFinalPrice(estimate.minPrice);
    if (tier === 'fair') setFinalPrice(estimate.fairPrice);
    if (tier === 'premium') setFinalPrice(estimate.premiumPrice);
  };

  // Handle manual price change (artisan retains 100% final control)
  const handleCustomPriceChange = (val: number) => {
    setFinalPrice(val);
    if (!estimate) {
      setChosenTier('custom');
      return;
    }
    if (val === estimate.minPrice) setChosenTier('min');
    else if (val === estimate.fairPrice) setChosenTier('fair');
    else if (val === estimate.premiumPrice) setChosenTier('premium');
    else setChosenTier('custom');
  };

  // Submit confirmed price to API (saving ONLY finalListingPrice as marketplace price)
  const handleConfirm = async () => {
    if (!estimate) return;
    if (finalPrice <= 0) {
      setConfirmError(t('Please enter a valid price greater than 0.', 'कृपया 0 से अधिक मान्य मूल्य दर्ज करें।'));
      return;
    }

    if (eligibility && !eligibility.isEligible && finalPrice > estimate.fairPrice) {
      setConfirmError(
        t(
          `Premium pricing is currently unavailable for this artisan. Please list within fair retail price (up to ₹${estimate.fairPrice}).`,
          `इस कारीगर के लिए प्रीमियम मूल्य निर्धारण उपलब्ध नहीं है। कृपया निष्पक्ष खुदरा मूल्य (₹${estimate.fairPrice} तक) दर्ज करें।`
        )
      );
      return;
    }

    setIsConfirming(true);
    setConfirmError(null);

    const payload: PricingConfirmPayload = {
      productId,
      artisanCostPrice: costPrice,
      suggestedRetailMin: estimate.minPrice,
      suggestedRetailMax: estimate.fairPrice,
      suggestedRetailPremium: estimate.premiumPrice,
      finalListingPrice: finalPrice, // Save ONLY artisan confirmed finalListingPrice
      pricingRationale: estimate.explanation,
      pricingFactors: JSON.stringify(estimate.factors),
    };

    try {
      const res = await fetch('/api/pricing/confirm', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      const data = await res.json();
      if (!res.ok || !data.success) {
        throw new Error(data.error || 'Failed to save confirmed pricing.');
      }

      onConfirmed();
    } catch (err: unknown) {
      console.error('Confirm error:', err);
      setConfirmError(err instanceof Error ? err.message : 'Could not save pricing.');
    } finally {
      setIsConfirming(false);
    }
  };

  return (
    <div className="space-y-6">
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-emerald-800 via-teal-800 to-emerald-900 text-white rounded-3xl p-6 shadow-lg">
        <div className="flex items-center gap-2 text-emerald-200 text-xs font-bold uppercase tracking-wider mb-2">
          <TrendingUp className="w-4 h-4 text-emerald-300" />
          <span>{t('Fair Pricing Assistant', 'निष्पक्ष मूल्य निर्धारण सहायक')}</span>
        </div>
        <h2 className="text-xl sm:text-2xl font-extrabold">
          {t('AI-Powered Fair Price Recommendation', 'एआई-संचालित निष्पक्ष मूल्य सिफारिश')}
        </h2>
        <p className="mt-1.5 text-xs text-emerald-100 max-w-2xl leading-relaxed">
          {t(
            'We benchmark against current Indian craft marketplaces, evaluate legitimate production costs, and respect your expected price to suggest a defensible range. You maintain 100% control over the final price.',
            'हम वर्तमान भारतीय शिल्प बाजारों के मूल्यों, उत्पादन लागत और आपकी अपेक्षा के आधार पर निष्पक्ष मूल्य की सिफारिश करते हैं। अंतिम मूल्य पर आपका 100% नियंत्रण रहेगा।'
          )}
        </p>
      </div>

      {/* Product Summary Card & Input Controls */}
      <div className="bg-white rounded-3xl p-5 sm:p-6 border border-stone-200/80 shadow-sm space-y-5">
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 justify-between border-b border-stone-100 pb-5">
          <div className="flex items-center gap-3">
            {productImage && (
              <img
                src={productImage}
                alt={productTitle}
                className="w-14 h-14 rounded-2xl object-cover border border-stone-200 shadow-xs"
              />
            )}
            <div>
              <span className="text-[10px] font-extrabold text-terracotta-700 bg-terracotta-50 border border-terracotta-200 px-2 py-0.5 rounded-full uppercase tracking-wider">
                {productCategory}
              </span>
              <h3 className="font-extrabold text-stone-900 text-base mt-1 line-clamp-1">
                {productTitle}
              </h3>
            </div>
          </div>
        </div>

        {/* Artisan Inputs: Base Production Cost & Expected Selling Price */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-1">
          {/* Input 1: Base Cost */}
          <div className="p-4 bg-stone-50 rounded-2xl border border-stone-200 space-y-1.5">
            <label className="block text-xs font-bold text-stone-700">
              {t('Your Base Cost (Materials + Labor Floor)', 'आपकी मूल लागत (सामग्री + श्रम आधार)')}
            </label>
            <p className="text-[11px] text-stone-500">
              {t('True expense to craft this piece (materials, workshop fuel, baseline labor hours)', 'सामग्री, ईंधन और मूल श्रम खर्च')}
            </p>
            <div className="relative flex items-center pt-1">
              <span className="absolute left-3.5 text-stone-400 font-bold text-sm">₹</span>
              <input
                type="number"
                min="0"
                step="10"
                value={costPrice}
                onChange={(e) => setCostPrice(Math.max(0, Number(e.target.value)))}
                className="w-full pl-8 pr-3.5 py-2.5 rounded-xl bg-white border border-stone-300 text-sm font-bold text-stone-900 focus:ring-2 focus:ring-emerald-500 outline-none transition-all"
                placeholder="e.g. 150"
              />
            </div>
          </div>

          {/* Input 2: Artisan Expected Price (Requirement 14) */}
          <div className="p-4 bg-stone-50 rounded-2xl border border-stone-200 space-y-1.5">
            <label className="block text-xs font-bold text-stone-700">
              {t('How much do you think this product should sell for?', 'आप इस उत्पाद को कितने में बेचना चाहते हैं?')}
            </label>
            <p className="text-[11px] text-stone-500">
              {t('Your personal target selling price (used as an input for the AI analysis)', 'आपकी लक्षित विक्रय कीमत (एआई विश्लेषण हेतु)')}
            </p>
            <div className="relative flex items-center pt-1">
              <span className="absolute left-3.5 text-stone-400 font-bold text-sm">₹</span>
              <input
                type="number"
                min="0"
                step="10"
                value={expectedPrice}
                onChange={(e) => setExpectedPrice(e.target.value === '' ? '' : Math.max(0, Number(e.target.value)))}
                className="w-full pl-8 pr-3.5 py-2.5 rounded-xl bg-white border border-stone-300 text-sm font-bold text-stone-900 focus:ring-2 focus:ring-emerald-500 outline-none transition-all"
                placeholder={t('e.g. 350', 'उदा. 350')}
              />
            </div>
          </div>
        </div>

        {/* Trigger / Recalculate Button */}
        <div className="flex justify-end pt-1">
          <button
            type="button"
            id="recalculate-pricing-btn"
            onClick={() => fetchEstimate(costPrice, expectedPrice)}
            disabled={loadingEstimate}
            className="px-5 py-2.5 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white text-xs font-bold transition-all flex items-center gap-2 disabled:opacity-50 shadow-xs cursor-pointer"
          >
            <RefreshCw className={`w-3.5 h-3.5 ${loadingEstimate ? 'animate-spin' : ''}`} />
            <span>{t('Calculate AI Fair Price', 'एआई निष्पक्ष मूल्य की गणना करें')}</span>
          </button>
        </div>

        {/* Real Live AI Timing & Progress Display (Requirement 21) */}
        {loadingEstimate && (
          <div className="py-10 bg-emerald-50/50 rounded-2xl border border-emerald-200/80 flex flex-col items-center justify-center text-center px-4 animate-in fade-in duration-150">
            <Loader2 className="w-8 h-8 text-emerald-600 animate-spin mb-3" />
            <p className="font-extrabold text-stone-900 text-sm">
              {getElapsedStatus(elapsedSeconds)}
            </p>
            <div className="mt-2.5 flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-emerald-200 text-emerald-800 text-xs font-mono font-bold shadow-2xs">
              <Clock className="w-3.5 h-3.5 text-emerald-600" />
              <span>Elapsed: {formatElapsed(elapsedSeconds)}</span>
            </div>
          </div>
        )}

        {/* Error State with Controlled Retry (Requirement 20) */}
        {estimateError && !loadingEstimate && (
          <div className="my-4 bg-amber-50 border border-amber-300 rounded-2xl p-5 flex items-start gap-3.5 text-amber-900 shadow-xs">
            <AlertCircle className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
            <div className="flex-1">
              <h4 className="font-extrabold text-sm text-amber-950">
                {estimateError.toLowerCase().includes('quota') || estimateError.toLowerCase().includes('rate limit')
                  ? t('AI service rate limit reached.', 'एआई सेवा दर सीमा समाप्त हो गई है।')
                  : t('AI service is temporarily busy.', 'एआई सेवा अस्थायी रूप से व्यस्त है।')}
              </h4>
              <p className="text-xs text-amber-800 mt-1">
                {estimateError || t('Your information is safe. Please try again shortly.', 'आपकी जानकारी सुरक्षित है। कृपया थोड़ी देर बाद पुनः प्रयास करें।')}
              </p>
              <div className="mt-3.5">
                <button
                  type="button"
                  id="retry-pricing-btn"
                  disabled={loadingEstimate}
                  onClick={() => fetchEstimate(costPrice, expectedPrice)}
                  className="px-4 py-2 bg-amber-700 hover:bg-amber-800 disabled:opacity-50 text-white rounded-xl text-xs font-bold transition-all shadow-xs flex items-center gap-1.5 cursor-pointer active:scale-95"
                >
                  <RefreshCw className="w-3.5 h-3.5" />
                  <span>{t('Try AI Analysis Again', 'एआई विश्लेषण पुनः प्रयास करें')}</span>
                </button>
              </div>
            </div>
          </div>
        )}

        {/* AI Recommendations Cards & Market Comparison Breakdown (Requirement 17) */}
        {estimate && !loadingEstimate && (
          <div className="mt-6 space-y-6">
            {/* Structured 4-Point Pricing Breakdown (Requirement 17) */}
            <div className="bg-stone-50/80 rounded-2xl p-5 border border-stone-200/90 shadow-2xs space-y-4">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-stone-600">
                <Sliders className="w-4 h-4 text-emerald-600" />
                <span>{t('Fair Pricing Comparison & Breakdown', 'निष्पक्ष मूल्य तुलना एवं विवरण')}</span>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {/* 1. Current Market Range */}
                <div className="p-3.5 bg-white rounded-xl border border-stone-200 text-left shadow-2xs">
                  <span className="text-[10px] font-bold text-stone-500 uppercase tracking-wider block">
                    {t('Current Market Range', 'वर्तमान बाजार मूल्य')}
                  </span>
                  <div className="text-base sm:text-lg font-black text-stone-900 mt-0.5">
                    ₹{estimate.marketRangeMin} – ₹{estimate.marketRangeMax}
                  </div>
                  <span className="text-[10px] text-stone-500 block mt-0.5">
                    {t('Comparable craft portals', 'तुलनीय शिल्प पोर्टल')}
                  </span>
                </div>

                {/* 2. Artisan Expected Price */}
                <div className="p-3.5 bg-white rounded-xl border border-stone-200 text-left shadow-2xs">
                  <span className="text-[10px] font-bold text-stone-500 uppercase tracking-wider block">
                    {t('Artisan Expected Price', 'कारीगर अपेक्षित मूल्य')}
                  </span>
                  <div className="text-base sm:text-lg font-black text-stone-900 mt-0.5">
                    {expectedPrice ? `₹${expectedPrice}` : estimate.artisanExpectedPrice ? `₹${estimate.artisanExpectedPrice}` : '—'}
                  </div>
                  <span className="text-[10px] text-stone-500 block mt-0.5">
                    {t('Your stated goal', 'आपकी अपेक्षा')}
                  </span>
                </div>

                {/* 3. ArsAI Fair Price Range */}
                <div className="p-3.5 bg-emerald-50/70 rounded-xl border border-emerald-200 text-left shadow-2xs">
                  <span className="text-[10px] font-bold text-emerald-800 uppercase tracking-wider block">
                    {t('ArsAI Fair Price Range', 'ArsAI उचित मूल्य सीमा')}
                  </span>
                  <div className="text-base sm:text-lg font-black text-emerald-900 mt-0.5">
                    ₹{estimate.minPrice} – ₹{estimate.fairPrice}
                  </div>
                  <span className="text-[10px] text-emerald-700 block mt-0.5">
                    {t('Sustainable living wage', 'सतत आजीविका सीमा')}
                  </span>
                </div>

                {/* 4. ArsAI Suggested Price */}
                <div className="p-3.5 bg-emerald-700 text-white rounded-xl shadow-xs text-left">
                  <span className="text-[10px] font-bold text-emerald-100 uppercase tracking-wider block">
                    {t('ArsAI Suggested Price', 'ArsAI अनुशंसित मूल्य')}
                  </span>
                  <div className="text-base sm:text-lg font-black mt-0.5">
                    ₹{estimate.fairPrice}
                  </div>
                  <span className="text-[10px] text-emerald-100 block mt-0.5">
                    {t('Fair retail benchmark', 'निष्पक्ष खुदरा मानक')}
                  </span>
                </div>
              </div>
            </div>

            {/* 3 Tier Selection Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {/* Tier 1: Minimum */}
              <div
                onClick={() => selectTier('min')}
                className={`cursor-pointer rounded-2xl p-4.5 border-2 transition-all relative ${
                  chosenTier === 'min'
                    ? 'border-emerald-600 bg-emerald-50/50 shadow-md ring-2 ring-emerald-500/20'
                    : 'border-stone-200 hover:border-stone-300 bg-white'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[11px] font-bold text-stone-500 uppercase tracking-wider">
                    {t('Entry / Minimum', 'न्यूनतम / आधार मूल्य')}
                  </span>
                  {chosenTier === 'min' && (
                    <span className="w-5 h-5 rounded-full bg-emerald-600 text-white flex items-center justify-center">
                      <Check className="w-3 h-3 stroke-[3]" />
                    </span>
                  )}
                </div>
                <div className="text-2xl font-extrabold text-stone-900">
                  ₹{estimate.minPrice}
                </div>
                <p className="text-[11px] text-stone-500 mt-1 leading-normal">
                  {t('Covers your base production costs and baseline labor hours.', 'मूल उत्पादन लागत और बुनियादी श्रम घंटे कवर करता है।')}
                </p>
              </div>

              {/* Tier 2: Fair (Recommended) */}
              <div
                onClick={() => selectTier('fair')}
                className={`cursor-pointer rounded-2xl p-4.5 border-2 transition-all relative ${
                  chosenTier === 'fair'
                    ? 'border-emerald-600 bg-emerald-50/80 shadow-lg ring-2 ring-emerald-500/30'
                    : 'border-emerald-300 hover:border-emerald-400 bg-emerald-50/20'
                }`}
              >
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-emerald-600 text-white text-[10px] font-black uppercase px-3 py-0.5 rounded-full shadow-xs tracking-wider">
                  {t('★ Recommended Fair Price', '★ अनुशंसित निष्पक्ष मूल्य')}
                </div>
                <div className="flex items-center justify-between mb-2 mt-1">
                  <span className="text-[11px] font-bold text-emerald-800 uppercase tracking-wider flex items-center gap-1">
                    <Award className="w-3.5 h-3.5 text-emerald-600" />
                    {t('Fair Retail', 'निष्पक्ष खुदरा मूल्य')}
                  </span>
                  {chosenTier === 'fair' && (
                    <span className="w-5 h-5 rounded-full bg-emerald-600 text-white flex items-center justify-center">
                      <Check className="w-3 h-3 stroke-[3]" />
                    </span>
                  )}
                </div>
                <div className="text-2xl font-black text-emerald-950">
                  ₹{estimate.fairPrice}
                </div>
                <p className="text-[11px] text-emerald-900/80 mt-1 leading-normal font-medium">
                  {t('Ensures dignity of craftsmanship, sustainable artisan income, and fair retail margin.', 'शिल्प का सम्मान, कारीगर की सतत आय और उचित लाभ सुनिश्चित करता है।')}
                </p>
              </div>

              {/* Tier 3: Premium */}
              {eligibility && !eligibility.isEligible ? (
                <div
                  className="rounded-2xl p-4.5 border-2 border-dashed border-stone-300 bg-stone-100/70 relative cursor-not-allowed select-none opacity-80"
                  title={t('Premium pricing requires marketplace reputation or active subscription.', 'प्रीमियम मूल्य निर्धारण के लिए बाजार प्रतिष्ठा या सक्रिय सदस्यता आवश्यक है।')}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[11px] font-bold text-stone-500 uppercase tracking-wider flex items-center gap-1.5">
                      <Lock className="w-3.5 h-3.5 text-stone-500" aria-hidden="true" focusable="false" />
                      {t('Boutique / Premium', 'प्रीमियम / बुटीक')}
                    </span>
                    <span className="text-[10px] font-extrabold uppercase px-2 py-0.5 rounded-full bg-stone-200 text-stone-600">
                      {t('Locked', 'अनलॉक की प्रतीक्षा')}
                    </span>
                  </div>
                  <div className="text-2xl font-extrabold text-stone-400">
                    ₹{estimate.premiumPrice}
                  </div>
                  <p className="text-[11px] text-stone-500 mt-1 leading-normal">
                    {t('Available to subscribed artisans or artisans with established marketplace reputation.', 'सक्रिय सदस्यता या स्थापित बाजार प्रतिष्ठा वाले कारीगरों के लिए उपलब्ध है।')}
                  </p>
                </div>
              ) : (
                <div
                  onClick={() => selectTier('premium')}
                  className={`cursor-pointer rounded-2xl p-4.5 border-2 transition-all relative ${
                    chosenTier === 'premium'
                      ? 'border-emerald-600 bg-emerald-50/50 shadow-md ring-2 ring-emerald-500/20'
                      : 'border-stone-200 hover:border-stone-300 bg-white'
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[11px] font-bold text-amber-700 uppercase tracking-wider flex items-center gap-1">
                      <Zap className="w-3.5 h-3.5 text-amber-500" aria-hidden="true" focusable="false" />
                      {t('Boutique / Premium', 'प्रीमियम / बुटीक')}
                    </span>
                    {chosenTier === 'premium' && (
                      <span className="w-5 h-5 rounded-full bg-emerald-600 text-white flex items-center justify-center">
                        <Check className="w-3 h-3 stroke-[3]" aria-hidden="true" focusable="false" />
                      </span>
                    )}
                  </div>
                  <div className="text-2xl font-extrabold text-stone-900">
                    ₹{estimate.premiumPrice}
                  </div>
                  <p className="text-[11px] text-stone-500 mt-1 leading-normal">
                    {t('Suitable for heritage exhibitions, curated art collectors, or luxury buyers.', 'विरासत प्रदर्शनियों, क्यूरेटेड कला प्रेमियों या लक्जरी खरीदारों के लिए।')}
                  </p>
                </div>
              )}
            </div>

            {/* Current Market Comparables Cards (Requirement 9 & 10) */}
            {estimate.comparables && estimate.comparables.length > 0 && (
              <div className="bg-stone-50/80 rounded-2xl p-4.5 border border-stone-200/80 space-y-3">
                <div className="flex items-center gap-2 text-xs font-bold text-stone-800">
                  <Store className="w-4 h-4 text-emerald-700" />
                  <span>{t('Comparable Products in Current Indian Market', 'वर्तमान भारतीय बाजार में तुलनीय उत्पाद')}</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {estimate.comparables.map((comp, idx) => (
                    <div key={idx} className="bg-white p-3.5 rounded-xl border border-stone-200/80 shadow-2xs text-xs space-y-1">
                      <span className="font-bold text-stone-900 block line-clamp-1">{comp.title}</span>
                      <div className="flex items-center justify-between text-[11px]">
                        <span className="font-extrabold text-emerald-700">{comp.priceRange}</span>
                        <span className="text-stone-400 text-[10px] font-medium">{comp.source}</span>
                      </div>
                      <p className="text-[10px] text-stone-500 leading-relaxed line-clamp-2">{comp.notes}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Sanity Check Adjustment Notice (Requirement 11 & 16) */}
            {estimate.sanityAdjustmentNotice && (
              <div className="p-3.5 bg-blue-50/90 border border-blue-200 rounded-2xl text-xs text-blue-900 flex items-start gap-2.5">
                <Info className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                <span className="leading-relaxed">{estimate.sanityAdjustmentNotice}</span>
              </div>
            )}

            {/* Editable Final Listing Price (Artisan has 100% Final Control — Requirement 17) */}
            <div className="bg-white rounded-2xl p-5 border-2 border-emerald-600/70 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <label className="block text-sm font-extrabold text-stone-900">
                  {t('Your Final Listing Price (Artisan Controlled)', 'आपका अंतिम सूची मूल्य (कारीगर नियंत्रण में)')}
                </label>
                <p className="text-xs text-stone-500 mt-0.5 max-w-md">
                  {t(
                    'The AI recommendation is advisory. You have 100% final control over what buyers pay in the marketplace.',
                    'एआई की सिफारिश केवल सलाह है। बाजार में खरीदार कितना भुगतान करेंगे, इस पर आपका 100% अंतिम नियंत्रण है।'
                  )}
                </p>
              </div>

              <div className="flex items-center gap-2">
                <div className="relative flex items-center">
                  <span className="absolute left-3.5 text-stone-400 font-extrabold text-base">₹</span>
                  <input
                    type="number"
                    id="final-listing-price-input"
                    min="1"
                    step="10"
                    value={finalPrice || ''}
                    onChange={(e) => handleCustomPriceChange(Number(e.target.value))}
                    className="w-40 pl-8 pr-4 py-2.5 rounded-xl bg-stone-50 border-2 border-emerald-600 text-stone-900 text-lg font-black focus:bg-white focus:ring-2 focus:ring-emerald-500 outline-none shadow-xs"
                  />
                </div>
                <span className="text-xs font-bold text-stone-500 uppercase">INR</span>
              </div>
            </div>

            {/* Explainable AI Factors & Rationale */}
            <div className="p-4.5 bg-stone-50 rounded-2xl border border-stone-200/80 space-y-3">
              <div className="flex items-center gap-2 text-xs font-bold text-stone-800">
                <Info className="w-4 h-4 text-stone-500" />
                <span>{t('AI Pricing Explanation & Factors Considered', 'एआई मूल्य निर्धारण स्पष्टीकरण और कारक')}</span>
              </div>
              <p className="text-xs text-stone-700 leading-relaxed italic bg-white p-3 rounded-xl border border-stone-200/60">
                "{estimate.explanation}"
              </p>

              {estimate.factors && estimate.factors.length > 0 && (
                <div>
                  <span className="text-[10px] font-bold text-stone-400 uppercase tracking-wider block mb-1.5">
                    {t('Key Factors Evaluated:', 'मूल्यांकन किए गए मुख्य कारक:')}
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {estimate.factors.map((factor, idx) => (
                      <span
                        key={idx}
                        className="px-2.5 py-1 bg-white text-stone-700 border border-stone-200 rounded-lg text-[11px] font-semibold shadow-2xs"
                      >
                        ✓ {factor}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Mandatory AI Disclaimer */}
            <div className="bg-amber-50/80 border border-amber-200 rounded-2xl p-4 flex items-start gap-3">
              <ShieldAlert className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
              <div className="text-[11px] text-amber-900 leading-relaxed">
                <span className="font-extrabold uppercase tracking-wide block mb-0.5 text-amber-950">
                  {t('Informational Pricing Disclaimer', 'सूचनात्मक मूल्य निर्धारण अस्वीकरण')}
                </span>
                {estimate.disclaimer}
              </div>
            </div>

            {/* Error Message if Confirmation Fails */}
            {confirmError && (
              <div className="p-3 bg-red-50 border border-red-200 rounded-xl text-xs text-red-700 flex items-center gap-2">
                <AlertCircle className="w-4 h-4 shrink-0" />
                <span>{confirmError}</span>
              </div>
            )}

            {/* Final Action Bar */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3 border-t border-stone-100">
              {onBack && (
                <button
                  type="button"
                  onClick={onBack}
                  disabled={isConfirming}
                  className="w-full sm:w-auto px-5 py-3 rounded-xl border border-stone-300 text-stone-700 text-xs font-bold hover:bg-stone-100 transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <ArrowLeft className="w-4 h-4" />
                  <span>{t('Back to Catalog Review', 'कैटलॉग समीक्षा पर वापस')}</span>
                </button>
              )}

              <button
                type="button"
                id="confirm-pricing-publish-btn"
                onClick={handleConfirm}
                disabled={isConfirming || finalPrice <= 0}
                className="w-full sm:w-auto ml-auto px-8 py-3.5 rounded-2xl bg-gradient-to-r from-emerald-600 to-teal-700 hover:from-emerald-700 hover:to-teal-800 text-white font-extrabold text-sm flex items-center justify-center gap-2 shadow-lg shadow-emerald-700/25 transition-all disabled:opacity-50 cursor-pointer active:scale-95"
              >
                {isConfirming ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span>{t('Confirming Price...', 'मूल्य की पुष्टि हो रही है...')}</span>
                  </>
                ) : (
                  <>
                    <CheckCircle2 className="w-4 h-4" />
                    <span>{t(`Confirm Price (₹${finalPrice}) & Publish`, `मूल्य की पुष्टि करें (₹${finalPrice}) और प्रकाशित करें`)}</span>
                  </>
                )}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
