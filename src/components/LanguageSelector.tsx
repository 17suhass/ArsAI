'use client';

import React, { useState, useEffect, useRef } from 'react';
import { useMockAuth } from '@/context/MockAuthContext';
import { SUPPORTED_LANGUAGES, LANGUAGE_MAP } from '@/lib/i18n/languages';
import { SupportedLanguage } from '@/lib/types';
import { Globe, ChevronDown, Search, Check, X } from 'lucide-react';

export default function LanguageSelector() {
  const { language, setLanguage, t } = useMockAuth();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [search, setSearch] = useState('');
  const modalRef = useRef<HTMLDivElement>(null);
  const searchInputRef = useRef<HTMLInputElement>(null);

  // Close modal on Escape key press
  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === 'Escape' && isModalOpen) {
        setIsModalOpen(false);
      }
    }
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isModalOpen]);

  // Focus search input when modal opens
  useEffect(() => {
    if (isModalOpen) {
      setTimeout(() => {
        searchInputRef.current?.focus();
      }, 50);
    } else {
      setSearch('');
    }
  }, [isModalOpen]);

  const handleSelectLanguage = (code: SupportedLanguage) => {
    setLanguage(code);
    setIsModalOpen(false);
  };

  const filteredLanguages = SUPPORTED_LANGUAGES.filter((lang) => {
    const q = search.trim().toLowerCase();
    return (
      lang.name.toLowerCase().includes(q) ||
      lang.nativeName.toLowerCase().includes(q) ||
      lang.code.toLowerCase().includes(q)
    );
  });

  const activeInfo = LANGUAGE_MAP[language] || LANGUAGE_MAP['en'];

  return (
    <>
      {/* Fixed Bottom-Left Floating Control */}
      <div className="fixed bottom-5 left-5 z-40 select-none font-sans print:hidden">
        <button
          type="button"
          id="global-language-selector-btn"
          onClick={() => setIsModalOpen(true)}
          className="inline-flex items-center gap-2 px-3.5 py-2 rounded-2xl bg-white hover:bg-stone-50 text-stone-800 border border-stone-200 shadow-md shadow-stone-900/5 transition-all text-xs font-semibold cursor-pointer active:scale-95 focus:outline-none focus:ring-2 focus:ring-amber-500/50"
          aria-label="Select application language"
          title={t('Select Language', 'भाषा चुनें')}
        >
          <Globe aria-hidden="true" className="w-4 h-4 text-amber-600 shrink-0" />
          <span className="font-medium text-stone-900" id="global-lang-btn-label">
            {activeInfo.nativeName}
          </span>
          <ChevronDown aria-hidden="true" className="w-3.5 h-3.5 text-stone-400 shrink-0" />
        </button>
      </div>

      {/* 13-Language Browser Modal */}
      {isModalOpen && (
        <div
          id="language-modal-backdrop"
          onClick={() => setIsModalOpen(false)}
          className="fixed inset-0 z-50 bg-black/40 backdrop-blur-xs flex items-end sm:items-center justify-center p-3 sm:p-4 animate-in fade-in duration-150"
        >
          <div
            ref={modalRef}
            onClick={(e) => e.stopPropagation()}
            className="bg-white rounded-3xl border border-stone-200 shadow-2xl w-full max-w-md max-h-[85vh] flex flex-col overflow-hidden animate-in zoom-in-95 duration-150"
          >
            {/* Header */}
            <div className="p-4 sm:p-5 border-b border-stone-100 flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-xl bg-amber-50 border border-amber-200 flex items-center justify-center text-amber-700">
                  <Globe aria-hidden="true" className="w-4 h-4" />
                </div>
                <div>
                  <h2 className="text-sm font-bold text-stone-900">
                    {t('Select Language', 'भाषा चुनें')}
                  </h2>
                  <p className="text-[11px] text-stone-500">
                    {t('13 official Indian regional languages supported', '13 आधिकारिक भारतीय क्षेत्रीय भाषाएं समर्थित')}
                  </p>
                </div>
              </div>
              <button
                type="button"
                id="language-modal-close-btn"
                onClick={() => setIsModalOpen(false)}
                className="p-1.5 rounded-xl text-stone-400 hover:text-stone-700 hover:bg-stone-100 transition-colors cursor-pointer"
                aria-label="Close language selector"
              >
                <X aria-hidden="true" className="w-4 h-4" />
              </button>
            </div>

            {/* Search Input */}
            <div className="p-3.5 border-b border-stone-100 bg-stone-50/50">
              <div className="relative">
                <Search aria-hidden="true" className="w-3.5 h-3.5 text-stone-400 absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  ref={searchInputRef}
                  type="text"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder={t('Search language (e.g. Kannada, தமிழ், বাংলা)...', 'भाषा खोजें...')}
                  className="w-full pl-8 pr-8 py-1.5 bg-white border border-stone-200 rounded-xl text-xs text-stone-900 placeholder-stone-400 focus:outline-none focus:ring-1 focus:ring-amber-500"
                />
                {search && (
                  <button
                    type="button"
                    onClick={() => setSearch('')}
                    className="absolute right-2.5 top-1/2 -translate-y-1/2 text-stone-400 hover:text-stone-600"
                  >
                    <X aria-hidden="true" className="w-3.5 h-3.5" />
                  </button>
                )}
              </div>
            </div>

            {/* Language Grid / List */}
            <div className="p-3 overflow-y-auto max-h-[50vh] divide-y divide-stone-100">
              {filteredLanguages.length === 0 ? (
                <p className="text-center py-8 text-xs text-stone-400 font-medium">
                  {t('No languages match your search.', 'कोई भाषा मेल नहीं खाती।')}
                </p>
              ) : (
                filteredLanguages.map((lang) => {
                  const isSelected = language === lang.code;
                  return (
                    <button
                      key={lang.code}
                      type="button"
                      onClick={() => handleSelectLanguage(lang.code)}
                      className={`w-full py-2.5 px-3 rounded-xl flex items-center justify-between text-left transition-all cursor-pointer ${
                        isSelected
                          ? 'bg-amber-50/80 text-stone-900 font-bold'
                          : 'hover:bg-stone-50 text-stone-700'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <span className="text-base font-semibold">
                          {lang.nativeName}
                        </span>
                        <span className="text-xs text-stone-400 font-normal">
                          ({lang.name})
                        </span>
                      </div>
                      {isSelected && (
                        <span className="w-6 h-6 rounded-full bg-amber-600 text-white flex items-center justify-center shrink-0">
                          <Check aria-hidden="true" className="w-3.5 h-3.5" />
                        </span>
                      )}
                    </button>
                  );
                })
              )}
            </div>

            {/* Footer */}
            <div className="p-3 bg-stone-50 border-t border-stone-100 flex items-center justify-between text-xs text-stone-500">
              <span>
                {t('Active Selection:', 'सक्रिय चयन:')}{' '}
                <strong className="text-stone-800">{activeInfo.nativeName}</strong>
              </span>
              <button
                type="button"
                onClick={() => setIsModalOpen(false)}
                className="px-3 py-1 bg-stone-900 hover:bg-stone-800 text-white text-xs font-bold rounded-lg cursor-pointer transition-colors"
              >
                {t('Done', 'पूर्ण')}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
