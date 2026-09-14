'use client';

import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { ArrowLeft, Sparkles, CheckCircle2, Loader2, AlertCircle, Home } from 'lucide-react';
import { useMockAuth } from '@/context/MockAuthContext';
import AuthGuard from '@/components/AuthGuard';
import PhotoUploader from '@/components/artisan/PhotoUploader';
import VoiceRecorder from '@/components/artisan/VoiceRecorder';
import MultiInputReview from '@/components/artisan/MultiInputReview';
import AiCatalogReview from '@/components/artisan/AiCatalogReview';
import FairPricingAssistant from '@/components/artisan/FairPricingAssistant';
import type { AiCatalogDraft } from '@/lib/types';

// The artisan's mock DB ID — in Phase 1 seeded data
const ARTISAN_DB_ID = 'artisan_profile_1';

type Step = 1 | 2 | 3 | 4 | 5;

type AnalysisState =
  | { status: 'idle' }
  | { status: 'loading' }
  | { status: 'error'; message: string }
  | { status: 'done'; draft: AiCatalogDraft; savedProductId?: string };

export default function AddNewCraftPage() {
  const { t, language } = useMockAuth();

  // Step state
  const [step, setStep] = useState<Step>(1);

  // Active artisan profile ID
  const [artisanDbId, setArtisanDbId] = useState<string>('');

  // Input state
  const [photoFile, setPhotoFile] = useState<File | null>(null);
  const [photoUrl, setPhotoUrl] = useState<string | null>(null);
  const [voiceTranscript, setVoiceTranscript] = useState<string>('');
  const [textNotes, setTextNotes] = useState<string>('');

  // Analysis state
  const [analysis, setAnalysis] = useState<AnalysisState>({ status: 'idle' });

  // Elapsed timer for AI processing step
  const [elapsedSeconds, setElapsedSeconds] = useState<number>(0);
  const elapsedRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const topRef = useRef<HTMLDivElement>(null);

  const scrollTop = () => topRef.current?.scrollIntoView({ behavior: 'smooth' });

  // Load artisan profile DB ID on mount
  useEffect(() => {
    async function fetchArtisan() {
      try {
        const res = await fetch('/api/artisan');
        const data = await res.json();
        if (data.success && data.artisan?.id) {
          setArtisanDbId(data.artisan.id);
        }
      } catch (err) {
        console.error('Failed to load artisan profile id', err);
      }
    }
    fetchArtisan();
  }, []);

  // Manage elapsed timer during AI analysis (step 2)
  useEffect(() => {
    if (step === 2 && analysis.status === 'loading') {
      setElapsedSeconds(0);
      elapsedRef.current = setInterval(() => {
        setElapsedSeconds(s => s + 1);
      }, 1000);
    } else {
      if (elapsedRef.current) {
        clearInterval(elapsedRef.current);
        elapsedRef.current = null;
      }
    }
    return () => {
      if (elapsedRef.current) {
        clearInterval(elapsedRef.current);
        elapsedRef.current = null;
      }
    };
  }, [step, analysis.status]);

  // Photo change: keep File for upload and URL for preview
  const handlePhotoChange = (url: string | null, file?: File | null) => {
    setPhotoUrl(url);
    setPhotoFile(file ?? null);
  };

  const handleReset = () => {
    setPhotoUrl(null);
    setPhotoFile(null);
    setVoiceTranscript('');
    setTextNotes('');
    setAnalysis({ status: 'idle' });
    setStep(1);
    scrollTop();
  };

  // ── Step 1 → 2: Submit to AI ──────────────────────────────────────────────
  const handleAnalyze = async () => {
    if (!photoFile && !photoUrl) {
      setAnalysis({ status: 'error', message: t(
        'A product photo is required. Please upload or capture an image first.',
        'उत्पाद फोटो आवश्यक है। कृपया पहले एक तस्वीर अपलोड करें।'
      )});
      return;
    }

    setStep(2);
    setAnalysis({ status: 'loading' });
    scrollTop();

    try {
      const formData = new FormData();
      if (photoFile) {
        formData.append('image', photoFile);
      } else if (photoUrl) {
        formData.append('imageUrl', photoUrl);
      }
      formData.append('transcript', voiceTranscript);
      formData.append('notes', textNotes);
      formData.append('language', language);

      const res = await fetch('/api/catalog/analyze', {
        method: 'POST',
        body: formData,
      });

      const data = await res.json();

      if (!res.ok || !data.success) {
        throw new Error(data.error || 'AI analysis failed. Please try again.');
      }

      setAnalysis({ status: 'done', draft: data.draft });
      setStep(3);
      scrollTop();
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : 'An unexpected error occurred.';
      setAnalysis({ status: 'error', message: msg });
      setStep(1);
      scrollTop();
    }
  };

  // ── Step 3 → 4: Saved Catalog → Proceed to Fair Pricing ──────────────────
  const handleSaved = (productId: string) => {
    setAnalysis(prev =>
      prev.status === 'done' ? { ...prev, savedProductId: productId } : prev
    );
    setStep(4);
    scrollTop();
  };

  // ── Step 4 → 5: Price Confirmed → Published ──────────────────────────────
  const handlePricingConfirmed = () => {
    setStep(5);
    scrollTop();
  };

  return (
    <AuthGuard allowedRoles={['ARTISAN']}>
      <div className="min-h-screen bg-stone-100/70 pb-24" ref={topRef}>
      {/* Top Breadcrumb */}
      <div className="bg-white border-b border-stone-200/80 sticky top-16 z-30 shadow-xs">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-3.5 flex items-center justify-between">
          <Link
            href="/artisan"
            className="flex items-center gap-1.5 text-xs font-bold text-stone-600 hover:text-stone-900 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>{t('Back to Dashboard', '\u0921\u0948\u0936\u092c\u094b\u0930\u094d\u0921 \u092a\u0930 \u0935\u093e\u092a\u0938')}</span>
          </Link>

          {/* Step indicator */}
          <div className="flex items-center gap-2">
            {([1, 2, 3, 4, 5] as Step[]).map(s => (
              <div
                key={s}
                className={`flex items-center justify-center w-6 h-6 rounded-full text-[10px] font-extrabold transition-all ${
                  s < step
                    ? 'bg-emerald-500 text-white'
                    : s === step
                    ? 'bg-terracotta-600 text-white ring-2 ring-terracotta-300'
                    : 'bg-stone-200 text-stone-500'
                }`}
              >
                {s < step ? <CheckCircle2 className="w-3.5 h-3.5" /> : s}
              </div>
            ))}
            <span className="text-[10px] font-bold text-stone-500 ml-1">
              {step === 1 && t('Capture', 'कैप्चर')}
              {step === 2 && t('Analyzing...', 'विश्लेषण...')}
              {step === 3 && t('Review', 'समीक्षा')}
              {step === 4 && t('Pricing', 'मूल्य निर्धारण')}
              {step === 5 && t('Published!', 'प्रकाशित!')}
            </span>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 pt-6 space-y-6">

        {/* ── STEP 1: Input Capture (Phase 2) ─────────────────────────────── */}
        {step === 1 && (
          <>
            {/* Header banner */}
            <div className="bg-gradient-to-r from-terracotta-700 to-amber-800 text-white rounded-3xl p-6 shadow-md">
              <div className="flex items-center gap-2 mb-1 text-amber-200 text-xs font-bold uppercase tracking-wider">
                <Sparkles className="w-4 h-4 text-amber-300" />
                <span>{t('Step 1: Capture Your Craft', '\u091a\u0930\u0923 1: \u0905\u092a\u0928\u093e \u0936\u093f\u0932\u094d\u092a \u0915\u0948\u092a\u094d\u091a\u0930 \u0915\u0930\u0947\u0902')}</span>
              </div>
              <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
                {t('Add a New Craft', '\u0928\u092f\u093e \u0939\u0938\u094d\u0924\u0936\u093f\u0932\u094d\u092a \u091c\u094b\u0921\u093c\u0947\u0902')}
              </h1>
              <p className="mt-2 text-xs sm:text-sm text-stone-200 max-w-2xl leading-relaxed">
                {t(
                  'Take a photo and describe your craft by voice or text. Then let AI create a professional catalog.',
                  '\u0905\u092a\u0928\u0947 \u0936\u093f\u0932\u094d\u092a \u0915\u0940 \u092b\u094b\u091f\u094b \u0932\u0947\u0902 \u0914\u0930 \u0906\u0935\u093e\u091c \u092f\u093e \u0932\u093f\u0916\u093e\u0908 \u0938\u0947 \u0935\u093f\u0935\u0930\u0923 \u0926\u0947\u0902\u0964 \u092b\u093f\u0930 \u090f\u0906\u0908 \u090f\u0915 \u092a\u0947\u0936\u0947\u0935\u0930 \u0915\u0948\u091f\u0932\u0949\u0917 \u092c\u0928\u093e\u090f\u0917\u093e\u0964'
                )}
              </p>
            </div>

            {/* Error from previous analysis attempt */}
            {analysis.status === 'error' && (
              <div className="bg-red-50 border border-red-200 rounded-2xl p-4 flex items-start gap-3 text-xs text-red-900">
                <AlertCircle className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold">{t('Analysis Failed', '\u0935\u093f\u0936\u094d\u0932\u0947\u0937\u0923 \u0935\u093f\u092b\u0932')}: </span>
                  {analysis.message}
                </div>
              </div>
            )}

            {/* Photo Uploader — now passes File object */}
            <PhotoUploader
              photoUrl={photoUrl}
              onPhotoChange={handlePhotoChange}
            />

            {/* Voice Recorder */}
            <VoiceRecorder
              transcript={voiceTranscript}
              onTranscriptChange={setVoiceTranscript}
              onApplyPresetPhoto={(url) => {
                if (!photoUrl) setPhotoUrl(url);
              }}
            />

            {/* Text Notes */}
            <div className="bg-white rounded-3xl p-5 border border-stone-200/80 shadow-sm">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  <span className="w-7 h-7 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center font-bold text-xs">3</span>
                  <h3 className="font-extrabold text-stone-900 text-sm sm:text-base">
                    {t('Additional Details (Optional)', '\u0905\u0924\u093f\u0930\u093f\u0915\u094d\u0924 \u0935\u093f\u0935\u0930\u0923 (\u0935\u0948\u0915\u0932\u094d\u092a\u093f\u0915)')}
                  </h3>
                </div>
                <span className="text-[11px] text-stone-400 bg-stone-100 px-2 py-0.5 rounded-full font-semibold">
                  {t('Optional', '\u090f\u091a\u094d\u091b\u093f\u0915')}
                </span>
              </div>
              <p className="text-xs text-stone-500 mb-3 leading-relaxed">
                {t(
                  'Any specific measurements, color names, or special handling notes.',
                  '\u0915\u094b\u0908 \u0935\u093f\u0936\u0947\u0937 \u092e\u093e\u092a, \u0930\u0902\u0917 \u0915\u093e \u0928\u093e\u092e \u092f\u093e \u0905\u0928\u094d\u092f \u091c\u093e\u0928\u0915\u093e\u0930\u0940\u0964'
                )}
              </p>
              <input
                type="text"
                value={textNotes}
                onChange={(e) => setTextNotes(e.target.value)}
                placeholder={t(
                  'e.g., 12 inches height, natural clay color, handthrown...',
                  '\u091c\u0948\u0938\u0947: 12 \u0907\u0902\u091a \u090a\u0902\u091a\u093e\u0908, \u092a\u094d\u0930\u093e\u0915\u0943\u0924\u093f\u0915 \u092e\u093f\u091f\u094d\u091f\u0940 \u0930\u0902\u0917...'
                )}
                className="w-full p-3.5 rounded-2xl bg-stone-50 border border-stone-200 text-xs text-stone-800 outline-none focus:ring-2 focus:ring-terracotta-500/20 focus:bg-white transition-all"
              />
            </div>

            {/* Multi-Input Review → now triggers AI */}
            <MultiInputReview
              photoUrl={photoUrl}
              transcript={voiceTranscript}
              notes={textNotes}
              onReset={handleReset}
              onSubmit={handleAnalyze}
            />
          </>
        )}

        {/* ── STEP 2: AI Processing ────────────────────────────────────────── */}
        {step === 2 && (
          <div className="flex flex-col items-center justify-center py-24 gap-6">
            <div className="relative">
              <div className="w-24 h-24 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center shadow-xl">
                <Sparkles className="w-10 h-10 text-white animate-pulse" />
              </div>
              <div className="absolute -inset-2 rounded-full border-4 border-indigo-300/50 animate-spin" style={{ animationDuration: '3s' }} />
            </div>
            <div className="text-center">
              <h2 className="text-xl font-extrabold text-stone-900">
                {t('Analyzing Your Craft...', '\u0906\u092a\u0915\u0947 \u0936\u093f\u0932\u094d\u092a \u0915\u093e \u0935\u093f\u0936\u094d\u0932\u0947\u0937\u0923 \u0939\u094b \u0930\u0939\u093e \u0939\u0948...')}
              </h2>
              <p className="text-xs text-stone-500 mt-2 max-w-sm">
                {t(
                  'Gemini AI is identifying your craft, generating bilingual catalog content, and computing a listing quality score.',
                  '\u091c\u0947\u092e\u093f\u0928\u0940 \u090f\u0906\u0908 \u0906\u092a\u0915\u0947 \u0936\u093f\u0932\u094d\u092a \u0915\u0940 \u092a\u0939\u091a\u093e\u0928 \u0915\u0930 \u0930\u0939\u093e \u0939\u0948 \u0914\u0930 \u0926\u094d\u0935\u093f\u092d\u093e\u0937\u0940 \u0915\u0948\u091f\u0932\u0949\u0917 \u0938\u093e\u092e\u0917\u094d\u0930\u0940 \u0924\u0948\u092f\u093e\u0930 \u0915\u0930 \u0930\u0939\u093e \u0939\u0948\u0964'
                )}
              </p>
              <div className="mt-4 flex flex-col items-center gap-2">
                <div className="flex items-center gap-2 text-indigo-600 text-xs font-semibold">
                  <Loader2 className="w-4 h-4 animate-spin" />
                  {t('This usually takes about a minute', '\u0906\u092e\u0924\u094c\u0930 \u092a\u0930 \u0932\u0917\u092d\u0917 \u090f\u0915 \u092e\u093f\u0928\u091f \u0932\u0917\u0924\u093e \u0939\u0948')}
                </div>
                <div className="text-[11px] text-stone-400 font-mono tabular-nums">
                  {t('Elapsed', '\u092c\u0940\u0924\u093e')}: {String(Math.floor(elapsedSeconds / 60)).padStart(2, '0')}:{String(elapsedSeconds % 60).padStart(2, '0')}
                </div>
                {elapsedSeconds >= 30 && (
                  <p className="text-[11px] text-amber-700 bg-amber-50 border border-amber-200 rounded-lg px-3 py-1.5 max-w-xs text-center">
                    {t('Still working\u2026 AI analysis is taking a little longer than usual.', '\u0905\u092d\u0940 \u092d\u0940 \u091c\u093e\u0930\u0940 \u0939\u0948\u2026 \u090f\u0906\u0908 \u0935\u093f\u0936\u094d\u0932\u0947\u0937\u0923 \u0938\u093e\u092e\u093e\u0928\u094d\u092f \u0938\u0947 \u0915\u0941\u091b \u0905\u0927\u093f\u0915 \u0938\u092e\u092f \u0932\u0947 \u0930\u0939\u093e \u0939\u0948\u0964')}
                  </p>
                )}
              </div>
            </div>
          </div>
        )}

        {/* ── STEP 3: Human-in-the-Loop Review ────────────────────────────── */}
        {step === 3 && analysis.status === 'done' && (
          <AiCatalogReview
            draft={analysis.draft}
            artisanDbId={artisanDbId || ARTISAN_DB_ID}
            onBack={() => { setStep(1); scrollTop(); }}
            onSaved={handleSaved}
          />
        )}

        {/* ── STEP 4: Fair Pricing Assistant (Phase 4) ────────────────────── */}
        {step === 4 && analysis.status === 'done' && analysis.savedProductId && (
          <FairPricingAssistant
            productId={analysis.savedProductId}
            productTitle={analysis.draft.titleEn}
            productCategory={analysis.draft.craftCategory}
            productImage={photoUrl || analysis.draft.imageUrl}
            onBack={() => { setStep(3); scrollTop(); }}
            onConfirmed={handlePricingConfirmed}
          />
        )}

        {/* ── STEP 5: Success ──────────────────────────────────────────────── */}
        {step === 5 && (
          <div className="flex flex-col items-center justify-center py-16 gap-6 text-center">
            <div className="w-24 h-24 rounded-full bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center shadow-xl">
              <CheckCircle2 className="w-12 h-12 text-white" />
            </div>
            <div>
              <h2 className="text-2xl font-extrabold text-stone-900">
                {t('Listing Published!', '\u0932\u093f\u0938\u094d\u091f\u093f\u0902\u0917 \u092a\u094d\u0930\u0915\u093e\u0936\u093f\u0924!')}
              </h2>
              <p className="text-sm text-stone-600 mt-2 max-w-md">
                {t(
                  'Your craft listing has been saved and is now visible on the ArsAI marketplace. The AI-generated catalog has been approved and published.',
                  '\u0906\u092a\u0915\u0940 \u0936\u093f\u0932\u094d\u092a \u0932\u093f\u0938\u094d\u091f\u093f\u0902\u0917 \u0938\u0939\u0947\u091c \u0932\u0940 \u0917\u0908 \u0939\u0948 \u0914\u0930 \u090f\u0906\u0908-\u091c\u0928\u093f\u0924 \u0915\u0948\u091f\u0932\u0949\u0917 \u092a\u094d\u0930\u0915\u093e\u0936\u093f\u0924 \u0915\u093f\u092f\u093e \u091c\u093e \u091a\u0941\u0915\u093e \u0939\u0948\u0964'
                )}
              </p>
            </div>
            <div className="flex flex-col sm:flex-row items-center gap-3">
              <button
                type="button"
                onClick={handleReset}
                className="px-6 py-3 rounded-2xl border border-stone-300 text-stone-700 text-xs font-bold hover:bg-stone-100 transition-all flex items-center gap-2"
              >
                <Sparkles className="w-4 h-4" />
                {t('Add Another Craft', '\u0905\u0928\u094d\u092f \u0936\u093f\u0932\u094d\u092a \u091c\u094b\u0921\u093c\u0947\u0902')}
              </button>
              <Link
                href="/artisan"
                className="px-6 py-3 rounded-2xl bg-gradient-to-r from-terracotta-600 to-amber-700 hover:from-terracotta-700 hover:to-amber-800 text-white text-xs font-bold shadow-md transition-all flex items-center gap-2"
              >
                <Home className="w-4 h-4" />
                {t('Return to Dashboard', '\u0921\u0948\u0936\u092c\u094b\u0930\u094d\u0921 \u092a\u0930 \u0935\u093e\u092a\u0938 \u091c\u093e\u090f\u0902')}
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
    </AuthGuard>
  );
}
