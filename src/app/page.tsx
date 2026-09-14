'use client';

import React, { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useMockAuth } from '@/context/MockAuthContext';
import LandingPage from '@/components/landing/LandingPage';
import MarketplacePage from '@/app/marketplace/page';

export default function RootPage() {
  const router = useRouter();
  const { isAuthenticated, currentRole } = useMockAuth();

  useEffect(() => {
    if (isAuthenticated) {
      if (currentRole === 'ARTISAN') {
        router.push('/artisan');
      } else if (currentRole === 'ADMIN') {
        router.push('/admin');
      } else if (currentRole === 'BUYER') {
        router.push('/marketplace');
      }
    }
  }, [isAuthenticated, currentRole, router]);

  // If user is logged out, render the rich storytelling Landing Page
  if (!isAuthenticated) {
    return <LandingPage />;
  }

  // If user is authenticated as BUYER (or other role while navigating), show marketplace
  return <MarketplacePage />;
}
