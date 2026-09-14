'use client';

import React, { useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useMockAuth } from '@/context/MockAuthContext';
import { Lock, X, LogIn, UserPlus, Sparkles, ShieldCheck } from 'lucide-react';
import { PriestKingMark } from '@/components/ArsAiLogo';

interface AuthGateModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  description?: string;
  returnUrl?: string;
  actionType?: 'checkout' | 'contact' | 'rfq' | 'review' | 'general';
}

export default function AuthGateModal({
  isOpen,
  onClose,
  title,
  description,
  returnUrl,
  actionType = 'general',
}: AuthGateModalProps) {
  const router = useRouter();
  const { t } = useMockAuth();

  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === 'Escape') onClose();
    }
    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const defaultTitle =
    actionType === 'checkout'
      ? t('Sign In to Complete Your Order', 'ऑर्डर पूरा करने के लिए साइन इन करें')
      : actionType === 'contact'
      ? t('Sign In to Connect with Artisan', 'कारीगर से जुड़ने के लिए साइन इन करें')
      : actionType === 'rfq'
      ? t('Sign In to Submit Bulk RFQ', 'थोक RFQ सबमिट करने के लिए साइन इन करें')
      : actionType === 'review'
      ? t('Sign In to Write a Review', 'समीक्षा लिखने के लिए साइन इन करें')
      : t('Authentication Required', 'साइन इन आवश्यक है');

  const defaultDescription =
    actionType === 'checkout'
      ? t(
          'ArsAI provides direct marketplace linkage where 100% of product payments reach marginalized artisans. Please sign in or create a buyer account to finalize your order.',
          'ArsAI सीधा बाज़ार संपर्क प्रदान करता है जहां 100% भुगतान सीधे कारीगरों तक पहुंचता है। कृपया अपना ऑर्डर पूरा करने के लिए साइन इन करें।'
        )
      : actionType === 'contact'
      ? t(
          'Direct contact via WhatsApp and UPI requires a verified buyer profile to protect artisans from unauthorized spam.',
          'कारीगरों को अनधिकृत स्पैम से बचाने के लिए सीधी बातचीत हेतु साइन इन आवश्यक है।'
        )
      : actionType === 'rfq'
      ? t(
          'Institutional and wholesale procurement requires an active account so artisans can send verified quotations.',
          'संस्थागत और थोक खरीद पूछताछ हेतु सत्यापित खाते की आवश्यकता होती है।'
        )
      : t(
          'Please sign in or create an account to access this feature.',
          'इस सुविधा का उपयोग करने के लिए कृपया साइन इन करें या नया खाता बनाएं।'
        );

  const finalReturnUrl = returnUrl || (typeof window !== 'undefined' ? window.location.pathname : '/marketplace');
  const loginUrl = `/login?returnUrl=${encodeURIComponent(finalReturnUrl)}`;
  const signupUrl = `/signup?returnUrl=${encodeURIComponent(finalReturnUrl)}`;

  return (
    <div
      id="auth-gate-modal"
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200"
    >
      <div
        className="relative w-full max-w-md bg-white rounded-3xl border border-stone-200 shadow-2xl overflow-hidden animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Decorative Top Accent Banner */}
        <div className="bg-gradient-to-r from-terracotta-700 via-terracotta-800 to-amber-900 px-6 py-5 text-white flex items-center justify-between">
          <div className="flex items-center gap-3">
            <PriestKingMark className="w-9 h-9 ring-2 ring-white/30 rounded-xl" />
            <div>
              <div className="flex items-center gap-1.5 text-[10px] uppercase font-bold tracking-wider text-amber-200">
                <ShieldCheck className="w-3 h-3" />
                <span>ArsAI Security Gateway</span>
              </div>
              <h3 className="text-base font-extrabold text-white leading-tight mt-0.5">
                {title || defaultTitle}
              </h3>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-1.5 text-white/70 hover:text-white hover:bg-white/10 rounded-full transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-7 space-y-5">
          <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
            {description || defaultDescription}
          </p>

          {/* Value highlights */}
          <div className="p-3.5 bg-stone-50 rounded-2xl border border-stone-200/70 space-y-2 text-xs text-stone-600">
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-600" />
              <span>{t('Zero middleman markups directly to artisan families', 'शून्य बिचौलिया कमीशन — सीधे कारीगर परिवारों को लाभ')}</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-600" />
              <span>{t('Pehchan ID verified artisan authenticity', 'पहचान आईडी द्वारा सत्यापित हस्तशिल्प')}</span>
            </div>
          </div>

          {/* Action CTAs */}
          <div className="space-y-2.5 pt-1">
            <Link
              href={loginUrl}
              onClick={onClose}
              className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-stone-900 hover:bg-stone-800 text-white font-bold text-sm transition-all shadow-sm active:scale-[0.99]"
            >
              <LogIn className="w-4 h-4 text-amber-400" />
              <span>{t('Sign In to Continue', 'साइन इन करें')}</span>
            </Link>

            <Link
              href={signupUrl}
              onClick={onClose}
              className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-terracotta-600 hover:bg-terracotta-700 text-white font-bold text-sm transition-all shadow-sm active:scale-[0.99]"
            >
              <UserPlus className="w-4 h-4 text-white" />
              <span>{t('Create an Account', 'नया खाता बनाएं')}</span>
            </Link>

            <button
              type="button"
              onClick={onClose}
              className="w-full py-2.5 text-xs text-stone-500 hover:text-stone-800 font-semibold transition-colors cursor-pointer text-center"
            >
              {t('Continue Browsing without Sign In', 'बिना साइन इन किए देखना जारी रखें')}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
