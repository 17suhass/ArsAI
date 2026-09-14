'use client';

import React from 'react';
import { Sparkles, CheckCircle2, AlertTriangle, ArrowRight, Eye, RefreshCw, Volume2, FileText, Image as ImageIcon } from 'lucide-react';
import { useMockAuth } from '@/context/MockAuthContext';

interface MultiInputReviewProps {
  photoUrl: string | null;
  transcript: string;
  notes: string;
  onReset: () => void;
  onSubmit: () => void;
}

export default function MultiInputReview({
  photoUrl,
  transcript,
  notes,
  onReset,
  onSubmit,
}: MultiInputReviewProps) {
  const { t } = useMockAuth();

  const isReady = Boolean(photoUrl && (transcript || notes));

  return (
    <div className="bg-white rounded-3xl p-6 border border-stone-200/80 shadow-md">
      <div className="flex items-center justify-between mb-4 border-b border-stone-100 pb-3">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold text-xs">
            <CheckCircle2 className="w-4 h-4" />
          </div>
          <div>
            <h3 className="font-extrabold text-stone-900 text-base">
              {t('Multi-Input Capture Review', 'दर्ज की गई जानकारी की समीक्षा')}
            </h3>
            <p className="text-[11px] text-stone-500">
              {t('Review your captured craft photo, voice, and details before processing', 'एआई प्रोसेसिंग से पहले फोटो और आवाज की समीक्षा करें')}
            </p>
          </div>
        </div>

        <button
          type="button"
          onClick={onReset}
          className="text-xs text-stone-400 hover:text-stone-700 font-semibold flex items-center gap-1"
        >
          <RefreshCw className="w-3.5 h-3.5" />
          <span>{t('Start Over', 'पुनः शुरू करें')}</span>
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Photo Review Card */}
        <div className="bg-stone-50 p-3.5 rounded-2xl border border-stone-200 flex flex-col justify-between">
          <div>
            <span className="text-[10px] font-bold uppercase text-stone-400 flex items-center gap-1 mb-2">
              <ImageIcon className="w-3.5 h-3.5 text-terracotta-600" />
              {t('Craft Visual', 'शिल्प फोटो')}
            </span>

            {photoUrl ? (
              <div className="aspect-[4/3] rounded-xl overflow-hidden bg-stone-200 border border-stone-300 relative shadow-inner">
                <img
                  src={photoUrl}
                  alt="Captured Craft"
                  className="w-full h-full object-cover"
                />
                <span className="absolute bottom-2 right-2 bg-emerald-600 text-white text-[9px] font-bold px-2 py-0.5 rounded-full shadow">
                  ✓ {t('Captured', 'तैयार')}
                </span>
              </div>
            ) : (
              <div className="aspect-[4/3] rounded-xl border-2 border-dashed border-stone-300 flex items-center justify-center text-stone-400 text-xs">
                {t('No photo added yet', 'फोटो अभी नहीं जोड़ी गई')}
              </div>
            )}
          </div>
        </div>

        {/* Voice Note Review Card */}
        <div className="bg-stone-50 p-3.5 rounded-2xl border border-stone-200 flex flex-col justify-between">
          <div>
            <span className="text-[10px] font-bold uppercase text-stone-400 flex items-center gap-1 mb-2">
              <Volume2 className="w-3.5 h-3.5 text-amber-600" />
              {t('Spoken Voice Description', 'बोली गई आवाज')}
            </span>

            {transcript ? (
              <div className="p-3 bg-white rounded-xl border border-stone-200 text-xs text-stone-800 leading-relaxed italic max-h-36 overflow-y-auto">
                "{transcript}"
              </div>
            ) : (
              <div className="p-4 border-2 border-dashed border-stone-300 rounded-xl text-center text-stone-400 text-xs">
                {t('No voice note recorded', 'कोई वॉयस नोट नहीं है')}
              </div>
            )}
          </div>

          <div className="mt-2 text-[10px] text-stone-400">
            {transcript ? `✓ ${transcript.split(' ').length} ${t('words captured', 'शब्द दर्ज')}` : ''}
          </div>
        </div>

        {/* Additional Notes Card */}
        <div className="bg-stone-50 p-3.5 rounded-2xl border border-stone-200 flex flex-col justify-between">
          <div>
            <span className="text-[10px] font-bold uppercase text-stone-400 flex items-center gap-1 mb-2">
              <FileText className="w-3.5 h-3.5 text-indigoCraft-600" />
              {t('Additional Notes', 'अतिरिक्त विवरण')}
            </span>

            {notes ? (
              <div className="p-3 bg-white rounded-xl border border-stone-200 text-xs text-stone-800 leading-relaxed max-h-36 overflow-y-auto">
                {notes}
              </div>
            ) : (
              <div className="p-4 border-2 border-dashed border-stone-300 rounded-xl text-center text-stone-400 text-xs">
                {t('None (Optional)', 'कोई नहीं (वैकल्पिक)')}
              </div>
            )}
          </div>

          <div className="mt-2 text-[10px] text-stone-400">
            {notes ? `✓ ${t('Notes saved', 'विवरण सुरक्षित')}` : ''}
          </div>
        </div>
      </div>

      {/* Readiness Alert */}
      <div className={`mt-5 p-4 rounded-2xl border text-xs flex items-start gap-3 ${
        isReady
          ? 'bg-emerald-50 border-emerald-200 text-emerald-900'
          : 'bg-amber-50 border-amber-200 text-amber-900'
      }`}>
        <Sparkles className={`w-4 h-4 shrink-0 mt-0.5 ${isReady ? 'text-emerald-600' : 'text-amber-600'}`} />
        <div>
          <span className="font-bold">
            {isReady
              ? t('Craft Details Ready for AI Analysis!', 'शिल्प विवरण एआई विश्लेषण के लिए तैयार है!')
              : t('Photo and description required to proceed', 'आगे बढ़ने के लिए फोटो और विवरण आवश्यक है')}
          </span>
          <p className="mt-0.5 text-[11px] leading-relaxed opacity-90">
            {isReady
              ? t(
                  'Click the button below to generate bilingual product titles, catalog descriptions, cultural craft lineage, and listing quality score using Gemini AI.',
                  'जेमिनी एआई के माध्यम से द्विभाषी शीर्षक, कैटलॉग विवरण, सांस्कृतिक धरोहर कहानी और गुणवत्ता स्कोर तैयार करने के लिए नीचे क्लिक करें।'
                )
              : t(
                  'Please capture or upload a craft photo, and speak or write a brief description to continue.',
                  'कृपया शिल्प की फोटो लें या अपलोड करें, और जारी रखने के लिए विवरण बोलें या लिखें।'
                )}
          </p>
        </div>
      </div>

      {/* Submission Action Button */}
      <div className="mt-5 flex justify-end">
        <button
          type="button"
          onClick={onSubmit}
          disabled={!isReady}
          className={`px-6 py-3 rounded-2xl font-extrabold text-xs sm:text-sm flex items-center gap-2 shadow-md transition-all ${
            isReady
              ? 'bg-gradient-to-r from-terracotta-600 to-amber-700 hover:from-terracotta-700 hover:to-amber-800 text-white active:scale-95 shadow-terracotta-600/20'
              : 'bg-stone-200 text-stone-400 cursor-not-allowed shadow-none'
          }`}
        >
          <Sparkles className="w-4 h-4 text-amber-300" />
          <span>{t('Generate AI Catalog with Gemini', 'जेमिनी AI से कैटलॉग बनाएं')}</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
