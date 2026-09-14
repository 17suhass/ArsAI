'use client';

import React, { useState, Suspense } from 'react';
import Link from 'next/link';
import { useRouter, useSearchParams } from 'next/navigation';
import { useMockAuth } from '@/context/MockAuthContext';
import ArsAiLogo from '@/components/ArsAiLogo';
import { Lock, Mail, ArrowRight, AlertCircle, Sparkles, User, ShoppingBag, Landmark } from 'lucide-react';

import { getSafeRedirectUrl } from '@/lib/authRedirect';

function LoginForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const redirectParam = searchParams.get('redirect') || searchParams.get('returnUrl');
  const { login, t, language } = useMockAuth();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim() || !password) {
      setError(t('Please enter your email/mobile and password.', 'कृपया अपना ईमेल/मोबाइल और पासवर्ड दर्ज करें।'));
      return;
    }

    setLoading(true);
    setError('');

    const res = await login(email.trim(), password);
    if (!res.success) {
      setError(res.error || t('Invalid credentials.', 'अमान्य क्रेडेंशियल्स।'));
      setLoading(false);
      return;
    }

    const targetUrl = getSafeRedirectUrl(redirectParam || res.redirectUrl, res.role);
    router.push(targetUrl);
  };

  const handleQuickFill = (demoEmail: string) => {
    setEmail(demoEmail);
    setPassword('password123');
    setError('');
  };

  return (
    <div className="w-full max-w-md bg-white rounded-3xl border border-stone-200/90 shadow-xl shadow-stone-200/50 p-7 sm:p-9">
      {/* Brand Header */}
      <div className="text-center mb-7">
        <Link href="/" className="inline-flex items-center gap-2 mb-4 group justify-center">
          <ArsAiLogo size="lg" />
        </Link>
        <h1 className="text-2xl font-bold text-stone-900 tracking-tight">
          {t('Sign in to your account', 'अपने खाते में साइन इन करें')}
        </h1>
        <p className="text-xs sm:text-sm text-stone-500 mt-1">
          {t('Access verified Indian crafts, cataloging, and orders', 'सत्यापित भारतीय शिल्प, कैटलॉग और आर्डर्स तक पहुंचें')}
        </p>
      </div>

      {/* SIH Demo Quick-Fill Bar */}
      <div className="mb-6 p-3.5 bg-amber-50/80 rounded-2xl border border-amber-200/80">
        <div className="flex items-center justify-between mb-2">
          <span className="text-[11px] font-bold uppercase tracking-wider text-amber-900 flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-amber-600" />
            {t('Quick Demo Fill', 'त्वरित डेमो चयन')}
          </span>
          <span className="text-[10px] text-amber-700 font-medium">1-Click</span>
        </div>
        <div className="grid grid-cols-3 gap-1.5 text-center">
          <button
            type="button"
            id="quick-demo-artisan-btn"
            onClick={() => handleQuickFill('ramesh.artisan@arsai.org')}
            className="px-2 py-1.5 rounded-lg bg-white text-stone-800 hover:bg-terracotta-50 hover:text-terracotta-800 hover:border-terracotta-300 border border-stone-200/80 text-[11px] font-semibold transition-all flex flex-col items-center gap-0.5 cursor-pointer"
          >
            <User className="w-3.5 h-3.5 text-terracotta-600" />
            <span>{t('Artisan', 'कारीगर')}</span>
          </button>
          <button
            type="button"
            id="quick-demo-buyer-btn"
            onClick={() => handleQuickFill('aditi.buyer@arsai.org')}
            className="px-2 py-1.5 rounded-lg bg-white text-stone-800 hover:bg-indigoCraft-50 hover:text-indigoCraft-800 hover:border-indigoCraft-300 border border-stone-200/80 text-[11px] font-semibold transition-all flex flex-col items-center gap-0.5 cursor-pointer"
          >
            <ShoppingBag className="w-3.5 h-3.5 text-indigoCraft-600" />
            <span>{t('Buyer', 'खरीदार')}</span>
          </button>
          <button
            type="button"
            id="quick-demo-admin-btn"
            onClick={() => handleQuickFill('admin@arsai.org')}
            className="px-2 py-1.5 rounded-lg bg-white text-stone-800 hover:bg-emerald-50 hover:text-emerald-800 hover:border-emerald-300 border border-stone-200/80 text-[11px] font-semibold transition-all flex flex-col items-center gap-0.5 cursor-pointer"
          >
            <Landmark className="w-3.5 h-3.5 text-emerald-600" />
            <span>{t('Admin', 'प्रशासक')}</span>
          </button>
        </div>
      </div>

      {/* Error alert */}
      {error && (
        <div className="mb-5 p-3 rounded-xl bg-rose-50 border border-rose-200 flex items-start gap-2.5 text-rose-800 text-xs sm:text-sm">
          <AlertCircle className="w-4 h-4 shrink-0 mt-0.5 text-rose-600" />
          <span>{error}</span>
        </div>
      )}

      {/* Form */}
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-xs font-semibold text-stone-700 mb-1.5">
            {t('Email or Mobile Number', 'ईमेल या मोबाइल नंबर')}
          </label>
          <div className="relative">
            <Mail className="w-4 h-4 text-stone-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="e.g. ramesh.artisan@arsai.org"
              className="w-full pl-10 pr-3.5 py-2.5 bg-stone-50/50 border border-stone-200 rounded-xl text-sm text-stone-900 placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-stone-900/10 focus:border-stone-900 transition-all"
            />
          </div>
        </div>

        <div>
          <label className="block text-xs font-semibold text-stone-700 mb-1.5">
            {t('Password', 'पासवर्ड')}
          </label>
          <div className="relative">
            <Lock className="w-4 h-4 text-stone-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              className="w-full pl-10 pr-3.5 py-2.5 bg-stone-50/50 border border-stone-200 rounded-xl text-sm text-stone-900 placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-stone-900/10 focus:border-stone-900 transition-all"
            />
          </div>
        </div>

        <button
          type="submit"
          id="login-submit-btn"
          disabled={loading}
          className="w-full mt-2 py-3 px-4 rounded-xl bg-stone-900 hover:bg-stone-800 active:scale-[0.99] text-white font-bold text-sm transition-all shadow-md shadow-stone-900/10 flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed cursor-pointer"
        >
          {loading ? (
            <span>{t('Signing in...', 'साइन इन हो रहा है...')}</span>
          ) : (
            <>
              <span>{t('Sign In', 'साइन इन करें')}</span>
              <ArrowRight className="w-4 h-4" />
            </>
          )}
        </button>
      </form>

      {/* Create Account Link */}
      <div className="mt-7 pt-6 border-t border-stone-100 text-center">
        <p className="text-xs sm:text-sm text-stone-600">
          {t('New to ArsAI?', 'ArsAI पर नए हैं?')}{' '}
          <Link
            href="/signup"
            className="font-bold text-terracotta-600 hover:text-terracotta-700 underline underline-offset-2 ml-1"
          >
            {t('Create an account', 'नया खाता बनाएं')}
          </Link>
        </p>
      </div>
    </div>
  );
}

export default function LoginPage() {
  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4 py-12 bg-stone-50/80">
      <Suspense fallback={<div className="text-stone-400 text-sm">Loading...</div>}>
        <LoginForm />
      </Suspense>
    </div>
  );
}
