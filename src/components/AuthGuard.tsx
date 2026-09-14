'use client';

import React, { useEffect } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { useMockAuth } from '@/context/MockAuthContext';
import { UserRole } from '@/lib/types';
import { ShieldAlert, Loader2, ArrowRight } from 'lucide-react';
import Link from 'next/link';

interface AuthGuardProps {
  children: React.ReactNode;
  allowedRoles?: UserRole[];
}

export default function AuthGuard({ children, allowedRoles }: AuthGuardProps) {
  const router = useRouter();
  const pathname = usePathname();
  const { isAuthenticated, isLoading, currentRole, t } = useMockAuth();

  useEffect(() => {
    if (!isLoading && !isAuthenticated) {
      router.replace(`/login?redirect=${encodeURIComponent(pathname)}`);
    }
  }, [isLoading, isAuthenticated, pathname, router]);

  if (isLoading) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center p-6 text-stone-500">
        <Loader2 className="w-8 h-8 animate-spin text-terracotta-600 mb-3" />
        <p className="text-sm font-medium">{t('Verifying credentials...', 'पहचान सत्यापित की जा रही है...')}</p>
      </div>
    );
  }

  if (!isAuthenticated) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center p-6 text-center">
        <div className="w-12 h-12 rounded-2xl bg-amber-100 text-amber-800 flex items-center justify-center mb-4">
          <ShieldAlert className="w-6 h-6" />
        </div>
        <h2 className="text-lg font-bold text-stone-900 mb-1">
          {t('Sign In Required', 'साइन इन आवश्यक है')}
        </h2>
        <p className="text-sm text-stone-600 max-w-md mb-6">
          {t('Please sign in to access this section.', 'इस अनुभाग तक पहुँचने के लिए कृपया साइन इन करें।')}
        </p>
        <Link
          href={`/login?redirect=${encodeURIComponent(pathname)}`}
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-stone-900 text-white font-semibold text-sm hover:bg-stone-800 transition-colors shadow-sm"
        >
          <span>{t('Go to Sign In', 'साइन इन पर जाएं')}</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    );
  }

  if (allowedRoles && currentRole && !allowedRoles.includes(currentRole)) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center p-6 text-center max-w-md mx-auto">
        <div className="w-14 h-14 rounded-2xl bg-rose-100 text-rose-700 flex items-center justify-center mb-4">
          <ShieldAlert className="w-7 h-7" />
        </div>
        <h2 className="text-xl font-bold text-stone-900 mb-2">
          {t('Role Permission Restricted', 'अनुमति प्रतिबंधित')}
        </h2>
        <p className="text-sm text-stone-600 mb-6 leading-relaxed">
          {t(
            `This area requires an authorized ${allowedRoles.join(' or ')} account. You are currently signed in as a ${currentRole}.`,
            `इस क्षेत्र के लिए अधिकृत ${allowedRoles.join(' या ')} खाते की आवश्यकता है। वर्तमान में आप ${currentRole} के रूप में साइन इन हैं।`
          )}
        </p>
        <div className="flex flex-col sm:flex-row gap-3 w-full justify-center">
          <Link
            href={currentRole === 'ADMIN' ? '/admin' : currentRole === 'ARTISAN' ? '/artisan' : '/marketplace'}
            className="px-4 py-2.5 rounded-xl bg-stone-100 text-stone-700 font-semibold text-sm hover:bg-stone-200 transition-colors"
          >
            {currentRole === 'ADMIN' 
              ? t('Return to Admin Console', 'प्रशासन कंसोल पर लौटें')
              : currentRole === 'ARTISAN'
              ? t('Return to Artisan Dashboard', 'कारीगर डैशबोर्ड पर लौटें')
              : t('Return to Marketplace', 'बाजार पर लौटें')}
          </Link>
          <Link
            href="/login"
            className="px-4 py-2.5 rounded-xl bg-terracotta-600 text-white font-semibold text-sm hover:bg-terracotta-700 transition-colors shadow-sm"
          >
            {t('Switch Account', 'खाता बदलें')}
          </Link>
        </div>
      </div>
    );
  }

  return <>{children}</>;
}
