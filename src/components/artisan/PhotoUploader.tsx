'use client';

import React, { useRef } from 'react';
import { Camera, Upload, Trash2, RefreshCw, Image as ImageIcon, Sparkles } from 'lucide-react';
import { useMockAuth } from '@/context/MockAuthContext';

interface PhotoUploaderProps {
  photoUrl: string | null;
  onPhotoChange: (url: string | null, file?: File | null) => void;
}

export default function PhotoUploader({ photoUrl, onPhotoChange }: PhotoUploaderProps) {
  const { t, language } = useMockAuth();
  const fileInputRef = useRef<HTMLInputElement>(null);
  const cameraInputRef = useRef<HTMLInputElement>(null);

  const handleFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        onPhotoChange(reader.result as string, file);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="bg-white rounded-3xl p-5 border border-stone-200/80 shadow-sm">
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2">
          <span className="w-7 h-7 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center font-bold text-xs">
            1
          </span>
          <h3 className="font-extrabold text-stone-900 text-sm sm:text-base">
            {t('Craft Photo', 'शिल्प की तस्वीर')}
          </h3>
        </div>
        <span className="text-[11px] text-terracotta-700 bg-terracotta-50 px-2 py-0.5 rounded-full font-bold">
          {photoUrl ? t('Photo Added ✓', 'तस्वीर चुनी गई ✓') : t('Required', 'आवश्यक')}
        </span>
      </div>

      <p className="text-xs text-stone-500 mb-4 leading-relaxed">
        {t(
          'Take a clear photo of your handmade craft or select one from your phone gallery.',
          'अपने हस्तनिर्मित शिल्प की एक स्पष्ट तस्वीर लें या गैलरी से चुनें।'
        )}
      </p>

      {/* Hidden file inputs: One for regular gallery, one with capture="environment" for direct mobile camera */}
      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        onChange={handleFile}
        className="hidden"
      />
      <input
        ref={cameraInputRef}
        type="file"
        accept="image/*"
        capture="environment"
        onChange={handleFile}
        className="hidden"
      />

      {photoUrl ? (
        /* Preview with Action Controls */
        <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-stone-100 border border-stone-200 group">
          <img
            src={photoUrl}
            alt="Craft Preview"
            className="w-full h-full object-cover"
          />

          {/* Action Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex items-end p-4 justify-between">
            <span className="text-white text-xs font-semibold flex items-center gap-1.5 drop-shadow">
              <ImageIcon className="w-4 h-4 text-emerald-400" />
              {t('Photo Preview Ready', 'फोटो तैयार है')}
            </span>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => fileInputRef.current?.click()}
                className="px-3 py-1.5 rounded-xl bg-white/90 backdrop-blur-md hover:bg-white text-stone-900 text-xs font-bold flex items-center gap-1.5 shadow-lg transition-all"
              >
                <RefreshCw className="w-3.5 h-3.5" />
                <span>{t('Change', 'बदलें')}</span>
              </button>

              <button
                type="button"
                onClick={() => onPhotoChange(null, null)}
                className="p-1.5 rounded-xl bg-red-600/90 hover:bg-red-600 text-white shadow-lg transition-all"
                title={t('Remove Photo', 'हटाएं')}
              >
                <Trash2 className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      ) : (
        /* Empty Capture State with Big Touch Targets */
        <div className="border-2 border-dashed border-stone-300 hover:border-terracotta-400 rounded-2xl p-6 text-center transition-colors bg-stone-50/50">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 max-w-sm mx-auto">
            {/* Direct Camera Button (Optimized for mobile) */}
            <button
              type="button"
              onClick={() => cameraInputRef.current?.click()}
              className="w-full sm:flex-1 py-3 px-4 rounded-2xl bg-terracotta-600 hover:bg-terracotta-700 active:scale-95 text-white font-bold text-xs flex items-center justify-center gap-2 shadow-sm transition-all"
            >
              <Camera className="w-4 h-4" />
              <span>{t('Open Camera', 'कैमरा खोलें')}</span>
            </button>

            {/* Gallery Upload Button */}
            <button
              type="button"
              onClick={() => fileInputRef.current?.click()}
              className="w-full sm:flex-1 py-3 px-4 rounded-2xl bg-white border border-stone-300 hover:border-stone-400 text-stone-700 font-bold text-xs flex items-center justify-center gap-2 active:scale-95 transition-all shadow-sm"
            >
              <Upload className="w-4 h-4 text-stone-500" />
              <span>{t('Choose File', 'गैलरी से चुनें')}</span>
            </button>
          </div>

          <p className="text-[11px] text-stone-400 mt-3">
            {t('Supports PNG, JPG, WebP from phone camera or storage', 'कैमरा या मेमोरी से जेपीजी, पीएनजी समर्थित')}
          </p>
        </div>
      )}
    </div>
  );
}
