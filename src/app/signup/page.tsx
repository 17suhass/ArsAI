'use client';

import React, { useState, Suspense } from 'react';
import Link from 'next/link';
import { useRouter, useSearchParams } from 'next/navigation';
import { useMockAuth } from '@/context/MockAuthContext';
import ArsAiLogo from '@/components/ArsAiLogo';
import { Lock, Mail, User, ShoppingBag, ArrowRight, AlertCircle, Sparkles, CheckCircle2 } from 'lucide-react';
import { getSafeRedirectUrl } from '@/lib/authRedirect';

function SignupForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const redirectParam = searchParams.get('redirect') || searchParams.get('returnUrl');
  const { signup, t, language } = useMockAuth();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState<'ARTISAN' | 'BUYER'>('ARTISAN');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) {
      setError(t('Please enter your full name.', 'कृपया अपना पूरा नाम दर्ज करें।'));
      return;
    }
    if (!email.trim()) {
      setError(t('Please enter your email or mobile number.', 'कृपया अपना ईमेल या मोबाइल नंबर दर्ज करें।'));
      return;
    }
    if (password.length < 6) {
      setError(t('Password must be at least 6 characters.', 'पासवर्ड कम से कम 6 अक्षरों का होना चाहिए।'));
      return;
    }

    setLoading(true);
    setError('');

    const res = await signup({
      name: name.trim(),
      email: email.trim(),
      password,
      role,
    });

    if (!res.success) {
      setError(res.error || t('Registration failed. Please try again.', 'पंजीकरण विफल रहा। कृपया पुन: प्रयास करें।'));
      setLoading(false);
      return;
    }

    const targetUrl = getSafeRedirectUrl(redirectParam || res.redirectUrl, role);
    router.push(targetUrl);
  };

  return (
    <div className="w-full max-w-md bg-white rounded-3xl border border-stone-200/90 shadow-xl shadow-stone-200/50 p-7 sm:p-9">
      {/* Brand Header */}
      <div className="text-center mb-6">
        <Link href="/" className="inline-flex items-center gap-2 mb-3.5 group justify-center">
          <ArsAiLogo size="lg" />
        </Link>
        <h1 className="text-2xl font-bold text-stone-900 tracking-tight">
          {t('Create an account', 'नया खाता बनाएं')}
        </h1>
        <p className="text-xs sm:text-sm text-stone-500 mt-1">
          {t('Join India’s direct artisan marketplace & cataloging platform', 'भारत के सीधे कारीगर बाजार एवं कैटलॉगिंग मंच से जुड़ें')}
        </p>
      </div>

      {/* Role Selection Toggle */}
      <div className="mb-5">
        <label className="block text-xs font-semibold text-stone-700 mb-2">
          {t('I want to register as:', 'मैं इस रूप में पंजीकरण करना चाहता हूँ:')}
        </label>
        <div className="grid grid-cols-2 gap-2 p-1 bg-stone-100 rounded-2xl">
          <button
            type="button"
            onClick={() => setRole('ARTISAN')}
            className={`flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl text-xs font-bold transition-all ${
              role === 'ARTISAN'
                ? 'bg-white text-terracotta-700 shadow-sm border border-terracotta-200/60'
                : 'text-stone-600 hover:text-stone-900'
            }`}
          >
            <User className="w-4 h-4" />
            <span>{t('Artisan / Creator', 'कारीगर / निर्माता')}</span>
          </button>
          <button
            type="button"
            onClick={() => setRole('BUYER')}
            className={`flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl text-xs font-bold transition-all ${
              role === 'BUYER'
                ? 'bg-white text-indigoCraft-700 shadow-sm border border-indigoCraft-200/60'
                : 'text-stone-600 hover:text-stone-900'
            }`}
          >
            <ShoppingBag className="w-4 h-4" />
            <span>{t('Buyer / Customer', 'ग्राहक / खरीदार')}</span>
          </button>
        </div>

        {/* Role Explanatory Helper */}
        <p className="text-[11px] text-stone-500 mt-2 px-1">
          {role === 'ARTISAN'
            ? t(
                'Includes voice-to-catalog AI, fair pricing assistant, and direct customer reviews.',
                'वॉइस-टू-कैटलॉग AI, निष्पक्ष मूल्य निर्धारण और सीधे ग्राहक समीक्षाएं शामिल हैं।'
              )
            : t(
                'Browse authentic GI-region crafts, bulk RFQs, direct artisan contact, and verified orders.',
                'प्रामाणिक शिल्प खोजें, थोक RFQ, सीधे कारीगर से संपर्क और सत्यापित ऑर्डर्स।'
              )}
        </p>
      </div>

      {/* Error Alert */}
      {error && (
        <div className="mb-4 p-3 rounded-xl bg-rose-50 border border-rose-200 flex items-start gap-2.5 text-rose-800 text-xs sm:text-sm">
          <AlertCircle className="w-4 h-4 shrink-0 mt-0.5 text-rose-600" />
          <span>{error}</span>
        </div>
      )}

      {/* Form */}
      <form onSubmit={handleSubmit} className="space-y-3.5">
        <div>
          <label className="block text-xs font-semibold text-stone-700 mb-1">
            {t('Full Name', 'पूरा नाम')}
          </label>
          <div className="relative">
            <User className="w-4 h-4 text-stone-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="e.g. Ramesh Kumar"
              className="w-full pl-10 pr-3.5 py-2.5 bg-stone-50/50 border border-stone-200 rounded-xl text-sm text-stone-900 placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-stone-900/10 focus:border-stone-900 transition-all"
            />
          </div>
        </div>

        <div>
          <label className="block text-xs font-semibold text-stone-700 mb-1">
            {t('Email or Mobile Number', 'ईमेल या मोबाइल नंबर')}
          </label>
          <div className="relative">
            <Mail className="w-4 h-4 text-stone-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="e.g. ramesh@example.com or 9876543210"
              className="w-full pl-10 pr-3.5 py-2.5 bg-stone-50/50 border border-stone-200 rounded-xl text-sm text-stone-900 placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-stone-900/10 focus:border-stone-900 transition-all"
            />
          </div>
        </div>

        <div>
          <label className="block text-xs font-semibold text-stone-700 mb-1">
            {t('Create Password', 'पासवर्ड बनाएं')}
          </label>
          <div className="relative">
            <Lock className="w-4 h-4 text-stone-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="password"
              required
              minLength={6}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              className="w-full pl-10 pr-3.5 py-2.5 bg-stone-50/50 border border-stone-200 rounded-xl text-sm text-stone-900 placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-stone-900/10 focus:border-stone-900 transition-all"
            />
          </div>
          <span className="text-[10px] text-stone-400 mt-1 block">
            {t('Minimum 6 characters with letters and numbers', 'न्यूनतम 6 अक्षर')}
          </span>
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full mt-3 py-3 px-4 rounded-xl bg-stone-900 hover:bg-stone-800 active:scale-[0.99] text-white font-bold text-sm transition-all shadow-md shadow-stone-900/10 flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed cursor-pointer"
        >
          {loading ? (
            <span>{t('Creating account...', 'खाता बनाया जा रहा है...')}</span>
          ) : (
            <>
              <span>{t('Create Account', 'खाता बनाएं')}</span>
              <ArrowRight className="w-4 h-4" />
            </>
          )}
        </button>
      </form>

      {/* Sign In Link */}
      <div className="mt-6 pt-5 border-t border-stone-100 text-center">
        <p className="text-xs sm:text-sm text-stone-600">
          {t('Already have an account?', 'क्या आपके पास पहले से खाता है?')}{' '}
          <Link
            href="/login"
            className="font-bold text-terracotta-600 hover:text-terracotta-700 underline underline-offset-2 ml-1"
          >
            {t('Sign in here', 'यहाँ साइन इन करें')}
          </Link>
        </p>
      </div>
    </div>
  );
}

export default function SignupPage() {
  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4 py-12 bg-stone-50/80">
      <Suspense fallback={<div className="text-stone-400 text-sm">Loading...</div>}>
        <SignupForm />
      </Suspense>
    </div>
  );
}
