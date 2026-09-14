'use client';

import React, { useState } from 'react';
import {
  Sparkles, CheckCircle2, AlertCircle, Edit3, Save, ArrowLeft,
  Star, Lightbulb, BookOpen, Tag, Layers, Palette, MapPin,
  AlertTriangle, RefreshCw, Info
} from 'lucide-react';
import { useMockAuth } from '@/context/MockAuthContext';
import type { AiCatalogDraft, CatalogSavePayload } from '@/lib/types';

interface AiCatalogReviewProps {
  draft: AiCatalogDraft;
  artisanDbId: string;
  onBack: () => void;
  onSaved: (productId: string) => void;
}

type ConfidenceColor = 'emerald' | 'amber' | 'red';
const CONFIDENCE_MAP: Record<string, { label: string; labelHi: string; color: ConfidenceColor }> = {
  high:   { label: 'High Confidence',   labelHi: 'उच्च विश्वसनीयता',   color: 'emerald' },
  medium: { label: 'Medium Confidence', labelHi: 'मध्यम विश्वसनीयता', color: 'amber' },
  low:    { label: 'Low Confidence',    labelHi: 'कम विश्वसनीयता',    color: 'red' },
};

function QualityScoreRing({ score }: { score: number }) {
  const color = score >= 80 ? '#10b981' : score >= 50 ? '#f59e0b' : '#ef4444';
  const label = score >= 80 ? 'Excellent' : score >= 50 ? 'Good' : 'Needs Work';
  return (
    <div className="flex flex-col items-center">
      <div className="relative w-20 h-20">
        <svg viewBox="0 0 36 36" className="w-20 h-20 -rotate-90">
          <circle cx="18" cy="18" r="15.9" fill="none" stroke="#e5e7eb" strokeWidth="3.2" />
          <circle
            cx="18" cy="18" r="15.9" fill="none"
            stroke={color} strokeWidth="3.2"
            strokeDasharray={`${score} ${100 - score}`}
            strokeLinecap="round"
            style={{ transition: 'stroke-dasharray 0.8s ease' }}
          />
        </svg>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span className="text-lg font-extrabold text-stone-900">{score}</span>
          <span className="text-[9px] font-bold text-stone-500 uppercase">/ 100</span>
        </div>
      </div>
      <span className="text-xs font-bold mt-1" style={{ color }}>{label}</span>
    </div>
  );
}

export default function AiCatalogReview({ draft, artisanDbId, onBack, onSaved }: AiCatalogReviewProps) {
  const { t, language } = useMockAuth();

  // Editable draft state
  const [titleEn, setTitleEn] = useState(draft.titleEn);
  const [titleHi, setTitleHi] = useState(draft.titleHi);
  const [descriptionEn, setDescriptionEn] = useState(draft.descriptionEn);
  const [descriptionHi, setDescriptionHi] = useState(draft.descriptionHi);
  const [culturalStory, setCulturalStory] = useState(draft.culturalStory);
  const [materials, setMaterials] = useState(draft.materials);
  const [craftCategory, setCraftCategory] = useState(draft.craftCategory);
  const [tags, setTags] = useState(draft.tags);

  const [isSaving, setIsSaving] = useState(false);
  const [saveError, setSaveError] = useState<string | null>(null);

  const conf = CONFIDENCE_MAP[draft.confidence] || CONFIDENCE_MAP.medium;
  const confColorMap: Record<ConfidenceColor, string> = {
    emerald: 'bg-emerald-100 text-emerald-900 border-emerald-300',
    amber:   'bg-amber-100 text-amber-900 border-amber-300',
    red:     'bg-red-100 text-red-900 border-red-300',
  };

  const handleApprove = async () => {
    if (!titleEn.trim() || !descriptionEn.trim()) {
      setSaveError(t('Title and description are required.', 'शीर्षक और विवरण आवश्यक है।'));
      return;
    }
    setIsSaving(true);
    setSaveError(null);

    const payload: CatalogSavePayload = {
      artisanDbId,
      titleEn: titleEn.trim(),
      titleHi: titleHi.trim(),
      descriptionEn: descriptionEn.trim(),
      descriptionHi: descriptionHi.trim(),
      culturalStory: culturalStory.trim(),
      craftCategory: craftCategory.trim(),
      materials: materials.trim(),
      colors: draft.colors,
      region: draft.region,
      tags: tags.trim(),
      qualityScore: draft.qualityScore,
      qualityFeedback: draft.qualityFeedback,
      imageUrl: draft.imageUrl,
    };

    try {
      const res = await fetch('/api/catalog/save', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      const data = await res.json();
      if (!res.ok || !data.success) {
        throw new Error(data.error || 'Save failed');
      }
      onSaved(data.productId);
    } catch (err: unknown) {
      setSaveError(err instanceof Error ? err.message : 'Failed to save. Please try again.');
    } finally {
      setIsSaving(false);
    }
  };

  return (
    <div className="space-y-6">
      {/* AI Analysis Header */}
      <div className="bg-gradient-to-r from-indigo-700 via-purple-700 to-indigo-800 text-white rounded-3xl p-6 shadow-lg">
        <div className="flex items-center gap-2 text-indigo-200 text-xs font-bold uppercase tracking-wider mb-2">
          <Sparkles className="w-4 h-4 text-indigo-300" />
          <span>{t('Gemini AI Analysis Complete', 'जेमिनी एआई विश्लेषण पूर्ण')}</span>
        </div>
        <h2 className="text-xl sm:text-2xl font-extrabold">
          {t('Review Your AI-Generated Catalog', 'अपना एआई-निर्मित कैटलॉग समीक्षा करें')}
        </h2>
        <p className="mt-1.5 text-xs text-indigo-200 max-w-2xl leading-relaxed">
          {t(
            'The AI has analyzed your craft and created a draft catalog. Review and edit the fields below, then approve to publish.',
            'एआई ने आपके शिल्प का विश्लेषण कर एक ड्राफ्ट कैटलॉग बनाया है। नीचे दिए गए फ़ील्ड की समीक्षा और संपादन करें, फिर प्रकाशित करने के लिए अनुमोदन करें।'
          )}
        </p>

        {/* Analysis Meta Row */}
        <div className="mt-4 flex flex-wrap items-center gap-3">
          <span className={`px-2.5 py-1 rounded-xl text-[11px] font-bold border ${confColorMap[conf.color]}`}>
            {t(conf.label, conf.labelHi)}
          </span>
          <span className="px-2.5 py-1 rounded-xl bg-white/20 text-[11px] font-semibold text-white border border-white/30">
            {draft.craftName}
          </span>
          <span className="px-2.5 py-1 rounded-xl bg-white/20 text-[11px] font-semibold text-white border border-white/30">
            <MapPin className="w-3 h-3 inline mr-1" />
            {draft.region}
          </span>
        </div>
      </div>

      {/* Human-in-the-loop disclaimer */}
      <div className="bg-amber-50 border border-amber-200 rounded-2xl p-4 flex items-start gap-3 text-xs text-amber-900">
        <Info className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
        <div>
          <span className="font-bold">{t('AI Assistance — Please Review', 'एआई सहायता — कृपया समीक्षा करें')}</span>
          <p className="mt-0.5 opacity-90 leading-relaxed">
            {t(
              'This catalog was generated by AI from your photo and description. AI can make mistakes. Please carefully review and correct any details before approving.',
              'यह कैटलॉग आपकी फोटो और विवरण से एआई द्वारा बनाया गया है। एआई गलतियां कर सकता है। अनुमोदन से पहले कृपया सभी विवरण ध्यान से जांचें और सुधारें।'
            )}
          </p>
        </div>
      </div>

      {/* Main 2-column layout */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left: Image + Quality Score */}
        <div className="lg:col-span-1 space-y-4">
          {/* Product image */}
          <div className="bg-white rounded-3xl p-4 border border-stone-200 shadow-sm">
            <span className="text-[10px] font-bold uppercase text-stone-400 flex items-center gap-1 mb-2">
              <Layers className="w-3.5 h-3.5 text-terracotta-600" />
              {t('Product Photo', 'उत्पाद फोटो')}
            </span>
            <div className="aspect-square rounded-2xl overflow-hidden bg-stone-100 border border-stone-200">
              {draft.imageUrl ? (
                <img src={draft.imageUrl} alt="Craft" className="w-full h-full object-cover" />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-stone-400 text-xs">
                  No photo
                </div>
              )}
            </div>
            <div className="mt-2 flex flex-wrap gap-1">
              {draft.colors.split(',').slice(0, 4).map((c, i) => (
                <span key={i} className="text-[10px] px-1.5 py-0.5 bg-stone-100 border border-stone-200 rounded-full text-stone-600 font-medium">
                  <Palette className="w-2.5 h-2.5 inline mr-0.5" />{c.trim()}
                </span>
              ))}
            </div>
          </div>

          {/* Quality Score */}
          <div className="bg-white rounded-3xl p-4 border border-stone-200 shadow-sm">
            <span className="text-[10px] font-bold uppercase text-stone-400 flex items-center gap-1 mb-3">
              <Star className="w-3.5 h-3.5 text-amber-500" />
              {t('AI Listing Quality Score', 'एआई लिस्टिंग गुणवत्ता स्कोर')}
            </span>
            <div className="flex items-center gap-4">
              <QualityScoreRing score={draft.qualityScore} />
              <div className="flex-1">
                <p className="text-[11px] text-stone-600 leading-relaxed">{draft.qualityFeedback}</p>
              </div>
            </div>
          </div>

          {/* Craft Info Card */}
          <div className="bg-white rounded-3xl p-4 border border-stone-200 shadow-sm">
            <span className="text-[10px] font-bold uppercase text-stone-400 flex items-center gap-1 mb-3">
              <Layers className="w-3.5 h-3.5 text-indigo-600" />
              {t('Craft Analysis', 'शिल्प विश्लेषण')}
            </span>
            <div className="space-y-2 text-xs text-stone-700">
              <div><span className="font-bold text-stone-500">Category: </span>{draft.craftCategory}</div>
              <div><span className="font-bold text-stone-500">Materials: </span>{draft.materials}</div>
              <div><span className="font-bold text-stone-500">Region: </span>{draft.region}</div>
            </div>
          </div>
        </div>

        {/* Right: Editable Fields */}
        <div className="lg:col-span-2 space-y-4">
          {/* Title */}
          <div className="bg-white rounded-3xl p-5 border border-stone-200 shadow-sm">
            <div className="flex items-center gap-2 mb-3">
              <Edit3 className="w-4 h-4 text-terracotta-600" />
              <h3 className="font-extrabold text-stone-900 text-sm">
                {t('Product Title', 'उत्पाद शीर्षक')}
              </h3>
            </div>
            <div className="space-y-2">
              <div>
                <label className="text-[11px] font-bold text-stone-500 mb-1 block">English</label>
                <input
                  type="text"
                  value={titleEn}
                  onChange={e => setTitleEn(e.target.value)}
                  maxLength={120}
                  className="w-full p-3 rounded-xl bg-stone-50 border border-stone-200 text-sm text-stone-900 font-semibold outline-none focus:ring-2 focus:ring-indigo-400/30 focus:bg-white transition-all"
                />
              </div>
              <div>
                <label className="text-[11px] font-bold text-stone-500 mb-1 block">हिन्दी</label>
                <input
                  type="text"
                  value={titleHi}
                  onChange={e => setTitleHi(e.target.value)}
                  maxLength={120}
                  className="w-full p-3 rounded-xl bg-stone-50 border border-stone-200 text-sm text-stone-900 font-semibold outline-none focus:ring-2 focus:ring-indigo-400/30 focus:bg-white transition-all"
                  dir="auto"
                />
              </div>
            </div>
          </div>

          {/* Description */}
          <div className="bg-white rounded-3xl p-5 border border-stone-200 shadow-sm">
            <div className="flex items-center gap-2 mb-3">
              <Edit3 className="w-4 h-4 text-indigo-600" />
              <h3 className="font-extrabold text-stone-900 text-sm">
                {t('Product Description', 'उत्पाद विवरण')}
              </h3>
            </div>
            <div className="space-y-2">
              <div>
                <label className="text-[11px] font-bold text-stone-500 mb-1 block">English</label>
                <textarea
                  rows={3}
                  value={descriptionEn}
                  onChange={e => setDescriptionEn(e.target.value)}
                  className="w-full p-3 rounded-xl bg-stone-50 border border-stone-200 text-xs text-stone-800 outline-none focus:ring-2 focus:ring-indigo-400/30 focus:bg-white transition-all leading-relaxed"
                />
              </div>
              <div>
                <label className="text-[11px] font-bold text-stone-500 mb-1 block">हिन्दी</label>
                <textarea
                  rows={3}
                  value={descriptionHi}
                  onChange={e => setDescriptionHi(e.target.value)}
                  className="w-full p-3 rounded-xl bg-stone-50 border border-stone-200 text-xs text-stone-800 outline-none focus:ring-2 focus:ring-indigo-400/30 focus:bg-white transition-all leading-relaxed"
                  dir="auto"
                />
              </div>
            </div>
          </div>

          {/* Cultural Story */}
          <div className="bg-white rounded-3xl p-5 border border-stone-200 shadow-sm">
            <div className="flex items-center gap-2 mb-3">
              <BookOpen className="w-4 h-4 text-amber-600" />
              <h3 className="font-extrabold text-stone-900 text-sm">
                {t('Cultural Heritage Story', 'सांस्कृतिक विरासत कहानी')}
              </h3>
            </div>
            <textarea
              rows={3}
              value={culturalStory}
              onChange={e => setCulturalStory(e.target.value)}
              className="w-full p-3 rounded-xl bg-amber-50/50 border border-amber-200 text-xs text-stone-800 outline-none focus:ring-2 focus:ring-amber-400/30 focus:bg-white transition-all leading-relaxed"
            />
            <p className="text-[10px] text-amber-700 mt-1.5 flex items-center gap-1">
              <Lightbulb className="w-3 h-3" />
              {t('Educational cultural context only — not a GI certification.', 'केवल शैक्षिक सांस्कृतिक संदर्भ — यह GI प्रमाणन नहीं है।')}
            </p>
          </div>

          {/* Materials & Category */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div className="bg-white rounded-3xl p-4 border border-stone-200 shadow-sm">
              <label className="text-[11px] font-bold text-stone-500 flex items-center gap-1 mb-2">
                <Layers className="w-3 h-3" /> {t('Materials', 'सामग्री')}
              </label>
              <input
                type="text"
                value={materials}
                onChange={e => setMaterials(e.target.value)}
                className="w-full p-2.5 rounded-xl bg-stone-50 border border-stone-200 text-xs text-stone-800 outline-none focus:ring-2 focus:ring-indigo-400/30 focus:bg-white transition-all"
              />
            </div>
            <div className="bg-white rounded-3xl p-4 border border-stone-200 shadow-sm">
              <label className="text-[11px] font-bold text-stone-500 flex items-center gap-1 mb-2">
                <Layers className="w-3 h-3" /> {t('Category', 'श्रेणी')}
              </label>
              <input
                type="text"
                value={craftCategory}
                onChange={e => setCraftCategory(e.target.value)}
                className="w-full p-2.5 rounded-xl bg-stone-50 border border-stone-200 text-xs text-stone-800 outline-none focus:ring-2 focus:ring-indigo-400/30 focus:bg-white transition-all"
              />
            </div>
          </div>

          {/* Tags */}
          <div className="bg-white rounded-3xl p-4 border border-stone-200 shadow-sm">
            <label className="text-[11px] font-bold text-stone-500 flex items-center gap-1 mb-2">
              <Tag className="w-3 h-3 text-indigo-600" /> {t('Search Tags', 'खोज टैग')}
            </label>
            <input
              type="text"
              value={tags}
              onChange={e => setTags(e.target.value)}
              placeholder="handmade, terracotta, pottery, home decor..."
              className="w-full p-2.5 rounded-xl bg-stone-50 border border-stone-200 text-xs text-stone-800 outline-none focus:ring-2 focus:ring-indigo-400/30 focus:bg-white transition-all"
            />
            {/* Tag chips preview */}
            <div className="mt-2 flex flex-wrap gap-1">
              {tags.split(',').slice(0, 8).map((tag, i) => tag.trim() ? (
                <span key={i} className="px-2 py-0.5 bg-indigo-50 border border-indigo-200 text-indigo-800 text-[10px] font-medium rounded-full">
                  #{tag.trim()}
                </span>
              ) : null)}
            </div>
          </div>
        </div>
      </div>

      {/* Save Error */}
      {saveError && (
        <div className="bg-red-50 border border-red-200 rounded-2xl p-4 flex items-start gap-3 text-xs text-red-900">
          <AlertCircle className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
          <div>
            <span className="font-bold">{t('Could not save listing:', 'लिस्टिंग सहेज नहीं सकी:')}</span>
            <p className="mt-0.5">{saveError}</p>
          </div>
        </div>
      )}

      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 pt-2">
        <button
          type="button"
          onClick={onBack}
          className="flex items-center gap-2 px-5 py-3 rounded-2xl border border-stone-300 text-stone-700 text-xs font-bold hover:bg-stone-100 transition-all"
        >
          <ArrowLeft className="w-4 h-4" />
          {t('Back — Re-capture inputs', 'वापस — इनपुट फिर से कैप्चर करें')}
        </button>

        <button
          type="button"
          onClick={handleApprove}
          disabled={isSaving || !titleEn.trim() || !descriptionEn.trim()}
          className={`flex items-center justify-center gap-2 px-7 py-3.5 rounded-2xl font-extrabold text-xs sm:text-sm shadow-md transition-all ${
            isSaving || !titleEn.trim() || !descriptionEn.trim()
              ? 'bg-stone-200 text-stone-400 cursor-not-allowed shadow-none'
              : 'bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white active:scale-95 shadow-emerald-600/25'
          }`}
        >
          {isSaving ? (
            <>
              <RefreshCw className="w-4 h-4 animate-spin" />
              {t('Saving listing...', 'लिस्टिंग सहेज रहे हैं...')}
            </>
          ) : (
            <>
              <CheckCircle2 className="w-4 h-4" />
              {t('Approve and Publish Listing', 'अनुमोदन करें और लिस्टिंग प्रकाशित करें')}
            </>
          )}
        </button>
      </div>

      {/* GI Disclaimer */}
      <div className="bg-stone-50 border border-stone-200 rounded-2xl p-3 flex items-start gap-2 text-[11px] text-stone-500">
        <AlertTriangle className="w-3.5 h-3.5 text-stone-400 shrink-0 mt-0.5" />
        <span>
          {t(
            'GI Information Disclaimer: Any regional craft information shown is educational and informational only. It does not constitute or imply official Geographical Indication (GI) certification.',
            'GI सूचना अस्वीकरण: दिखाई गई क्षेत्रीय शिल्प जानकारी केवल शैक्षिक और सूचनात्मक है। यह आधिकारिक भौगोलिक संकेत (GI) प्रमाणन का अर्थ नहीं है।'
          )}
        </span>
      </div>
    </div>
  );
}
