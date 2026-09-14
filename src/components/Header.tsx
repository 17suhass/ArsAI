'use client';

import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useMockAuth } from '@/context/MockAuthContext';
import { useCart } from '@/context/CartContext';
import ArsAiLogo from '@/components/ArsAiLogo';
import { 
  Package, Landmark, Store, LogOut, UserPlus, LogIn, 
  ShoppingBag, User, Settings
} from 'lucide-react';

export default function Header() {
  const pathname = usePathname();
  const { currentRole, currentUser, isAuthenticated, logout, t } = useMockAuth();
  const { totalItems, toggleCart } = useCart();
  const [accountPanelOpen, setAccountPanelOpen] = useState(false);
  const panelRef = useRef<HTMLDivElement>(null);

  // Close panel on outside click or escape
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (panelRef.current && !panelRef.current.contains(event.target as Node)) {
        setAccountPanelOpen(false);
      }
    }
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        setAccountPanelOpen(false);
      }
    }

    if (accountPanelOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [accountPanelOpen]);

  // Close panel on route change
  useEffect(() => {
    setAccountPanelOpen(false);
  }, [pathname]);

  const brandDestination =
    isAuthenticated && currentRole === 'ARTISAN'
      ? '/artisan'
      : isAuthenticated && currentRole === 'ADMIN'
      ? '/admin'
      : isAuthenticated && currentRole === 'BUYER'
      ? '/marketplace'
      : '/';

  // Derived user handle
  const userHandle = currentUser?.email
    ? currentUser.email.split('@')[0]
    : currentUser?.name
    ? currentUser.name.toLowerCase().replace(/\s+/g, '')
    : 'user';

  const isMarketplaceActive =
    pathname === '/marketplace' ||
    pathname?.startsWith('/craft') ||
    pathname?.startsWith('/artisan-profile');

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-stone-200/80">
      <div className="max-w-7xl mx-auto px-2.5 sm:px-6 lg:px-8 h-16 grid grid-cols-[auto_1fr_auto] md:grid-cols-[1fr_auto_1fr] items-center">
        {/* Left Section: Logo & Brand (tagline displayed ONLY when user is NOT authenticated) */}
        <div className="flex items-center justify-start min-w-0">
          <Link
            href={brandDestination}
            className="flex items-center gap-1.5 sm:gap-2.5 group shrink-0"
            aria-label="ArsAI Home"
          >
            <ArsAiLogo
              size="md"
              subtitle={
                !isAuthenticated
                  ? t('Craft Market Linkage & Smart Cataloging', 'शिल्प बाजार संपर्क एवं स्मार्ट कैटलॉग')
                  : undefined
              }
            />
          </Link>
        </div>

        {/* Center Section: Role-Specific Primary Navigation in Exact Visual Center */}
        <div className="flex items-center justify-center min-w-0">
          <nav className="hidden md:flex items-center gap-1.5 sm:gap-2" aria-label="Main Navigation">
            {/* ARTISAN Primary Navigation: My Craft Dashboard + Marketplace */}
            {isAuthenticated && currentRole === 'ARTISAN' && (
              <>
                {pathname !== '/artisan' && (
                  <Link
                    href="/artisan"
                    id="nav-artisan-dashboard"
                    className="px-3.5 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-colors text-stone-600 hover:text-stone-900 hover:bg-stone-100"
                  >
                    <span className="flex items-center gap-1.5">
                      <Package className="w-4 h-4 text-terracotta-600 shrink-0" aria-hidden="true" focusable="false" />
                      {t('My Craft Dashboard', 'शिल्पकार डैशबोर्ड')}
                    </span>
                  </Link>
                )}
                {pathname !== '/marketplace' && !pathname?.startsWith('/artisan/marketplace') && (
                  <Link
                    href="/marketplace"
                    id="nav-artisan-marketplace"
                    className="px-3.5 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-colors text-stone-600 hover:text-stone-900 hover:bg-stone-100"
                  >
                    <span className="flex items-center gap-1.5">
                      <Store className="w-4 h-4 text-stone-500 shrink-0" aria-hidden="true" focusable="false" />
                      {t('Marketplace', 'शिल्प बाजार')}
                    </span>
                  </Link>
                )}
              </>
            )}

            {/* BUYER Primary Navigation: Marketplace (only shown when outside /marketplace) */}
            {isAuthenticated && currentRole === 'BUYER' && pathname !== '/marketplace' && (
              <Link
                href="/marketplace"
                id="nav-buyer-marketplace"
                className="px-3.5 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-colors text-stone-600 hover:text-stone-900 hover:bg-stone-100"
              >
                <span className="flex items-center gap-1.5">
                  <Store className="w-4 h-4 text-terracotta-600 shrink-0" aria-hidden="true" focusable="false" />
                  {t('Marketplace', 'शिल्प बाजार')}
                </span>
              </Link>
            )}

            {/* ADMIN Primary Navigation: Nodal Monitoring Console + Public Marketplace */}
            {isAuthenticated && currentRole === 'ADMIN' && (
              <>
                {pathname !== '/admin' && (
                  <Link
                    href="/admin"
                    id="nav-admin-console"
                    className="px-3.5 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-colors text-stone-600 hover:text-stone-900 hover:bg-stone-100"
                  >
                    <span className="flex items-center gap-1.5">
                      <Landmark className="w-4 h-4 text-emerald-700 shrink-0" aria-hidden="true" focusable="false" />
                      {t('Nodal Monitoring Console', 'नोडल निगरानी')}
                    </span>
                  </Link>
                )}
                {pathname !== '/marketplace' && (
                  <Link
                    href="/marketplace"
                    id="nav-admin-marketplace"
                    className="px-3.5 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-colors text-stone-600 hover:text-stone-900 hover:bg-stone-100"
                  >
                    <span className="flex items-center gap-1.5">
                      <Store className="w-4 h-4 text-stone-500 shrink-0" aria-hidden="true" focusable="false" />
                      {t('Public Marketplace', 'सार्वजनिक बाजार')}
                    </span>
                  </Link>
                )}
              </>
            )}

            {/* Logged-Out / Public Primary Navigation: Kept clean on landing page */}
            {!isAuthenticated && pathname !== '/' && pathname !== '/marketplace' && (
              <Link
                href="/marketplace"
                id="nav-public-marketplace"
                className="px-3.5 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-colors text-stone-600 hover:text-stone-900 hover:bg-stone-100"
              >
                <span className="flex items-center gap-1.5">
                  <Store className="w-4 h-4 text-stone-500 shrink-0" aria-hidden="true" focusable="false" />
                  {t('Marketplace', 'शिल्प बाजार')}
                </span>
              </Link>
            )}
          </nav>
        </div>

        {/* Right Section: Shopping Cart Trigger + Auth State */}
        <div className="flex items-center justify-end gap-1 sm:gap-2.5 min-w-0 shrink-0">
          {/* Shopping Cart Button with Live Badge */}
          <button
            type="button"
            id="nav-cart-btn"
            onClick={toggleCart}
            className="relative p-2 text-stone-700 hover:text-stone-900 hover:bg-stone-100 rounded-xl transition-colors cursor-pointer flex items-center gap-1.5"
            aria-label={`Shopping cart with ${totalItems} items`}
            title={t('Shopping Cart', 'शॉपिंग कार्ट')}
          >
            <ShoppingBag className="w-5 h-5 text-stone-700" />
            {totalItems > 0 && (
              <span className="absolute -top-1 -right-1 bg-terracotta-600 text-white text-[10px] font-black w-4 h-4 rounded-full flex items-center justify-center shadow-xs animate-in zoom-in-50 duration-150">
                {totalItems}
              </span>
            )}
          </button>

          {isAuthenticated && currentUser ? (
            <div className="relative flex items-center gap-1.5 sm:gap-2 pl-2 sm:pl-3 border-l border-stone-200" ref={panelRef}>
              {/* Circular Avatar Trigger Button */}
              <button
                type="button"
                id="header-profile-chip-btn"
                onClick={() => setAccountPanelOpen(!accountPanelOpen)}
                className="relative p-0.5 rounded-full hover:ring-2 hover:ring-stone-300 active:scale-95 transition-all duration-150 cursor-pointer focus:outline-none focus:ring-2 focus:ring-stone-900 shrink-0"
                aria-expanded={accountPanelOpen}
                aria-label="User account menu"
              >
                <img
                  src={
                    currentUser.avatarUrl ||
                    'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150'
                  }
                  alt={currentUser.name}
                  className="w-8 h-8 sm:w-9 sm:h-9 rounded-full object-cover ring-1 ring-stone-200"
                />
              </button>

              {/* Animated Compact Popover Menu */}
              {accountPanelOpen && (
                <div className="absolute right-0 top-12 w-64 bg-white rounded-2xl shadow-xl border border-stone-200/90 py-2.5 z-50 animate-menu-enter origin-top-right">
                  {/* User Identity Header */}
                  <div className="px-4 py-3 border-b border-stone-100 flex items-center gap-3">
                    <img
                      src={
                        currentUser.avatarUrl ||
                        'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150'
                      }
                      alt={currentUser.name}
                      className="w-10 h-10 rounded-full object-cover ring-2 ring-stone-200 shrink-0"
                    />
                    <div className="overflow-hidden min-w-0">
                      <div className="text-sm font-bold text-stone-900 truncate">
                        {currentUser.name}
                      </div>
                      <div className="text-xs text-stone-500 truncate">
                        @{userHandle}
                      </div>
                      <div className="text-[10px] font-semibold mt-0.5 inline-flex items-center gap-1 px-1.5 py-0.5 rounded-md bg-stone-100 text-stone-700">
                        <span
                          className={`inline-block w-1.5 h-1.5 rounded-full ${
                            currentRole === 'ARTISAN'
                              ? 'bg-terracotta-600'
                              : currentRole === 'BUYER'
                              ? 'bg-indigoCraft-600'
                              : 'bg-emerald-600'
                          }`}
                        />
                        {currentRole === 'ARTISAN' ? t('Artisan', 'कारीगर') : currentRole === 'BUYER' ? t('Buyer', 'खरीदार') : t('Admin', 'प्रशासक')}
                      </div>
                    </div>
                  </div>

                  {/* Mobile Role Navigation (hidden on desktop md:hidden) */}
                  <div className="md:hidden py-1 border-b border-stone-100">
                    {currentRole === 'ARTISAN' && (
                      <>
                        {pathname !== '/artisan' && (
                          <Link
                            href="/artisan"
                            className="flex items-center gap-2.5 px-4 py-2 text-xs font-semibold text-stone-700 hover:bg-stone-50 transition-colors"
                            onClick={() => setAccountPanelOpen(false)}
                          >
                            <Package className="w-4 h-4 text-terracotta-600" />
                            <span>{t('My Craft Dashboard', 'शिल्पकार डैशबोर्ड')}</span>
                          </Link>
                        )}
                        {pathname !== '/marketplace' && (
                          <Link
                            href="/marketplace"
                            className="flex items-center gap-2.5 px-4 py-2 text-xs font-semibold text-stone-700 hover:bg-stone-50 transition-colors"
                            onClick={() => setAccountPanelOpen(false)}
                          >
                            <Store className="w-4 h-4 text-stone-500" />
                            <span>{t('Marketplace', 'शिल्प बाजार')}</span>
                          </Link>
                        )}
                      </>
                    )}
                    {currentRole === 'BUYER' && pathname !== '/marketplace' && (
                      <Link
                        href="/marketplace"
                        className="flex items-center gap-2.5 px-4 py-2 text-xs font-semibold text-stone-700 hover:bg-stone-50 transition-colors"
                        onClick={() => setAccountPanelOpen(false)}
                      >
                        <Store className="w-4 h-4 text-terracotta-600" />
                        <span>{t('Marketplace', 'शिल्प बाजार')}</span>
                      </Link>
                    )}
                    {currentRole === 'ADMIN' && (
                      <>
                        {pathname !== '/admin' && (
                          <Link
                            href="/admin"
                            className="flex items-center gap-2.5 px-4 py-2 text-xs font-semibold text-stone-700 hover:bg-stone-50 transition-colors"
                            onClick={() => setAccountPanelOpen(false)}
                          >
                            <Landmark className="w-4 h-4 text-emerald-700" />
                            <span>{t('Nodal Monitoring Console', 'नोडल निगरानी')}</span>
                          </Link>
                        )}
                        {pathname !== '/marketplace' && (
                          <Link
                            href="/marketplace"
                            className="flex items-center gap-2.5 px-4 py-2 text-xs font-semibold text-stone-700 hover:bg-stone-50 transition-colors"
                            onClick={() => setAccountPanelOpen(false)}
                          >
                            <Store className="w-4 h-4 text-stone-500" />
                            <span>{t('Public Marketplace', 'सार्वजनिक बाजार')}</span>
                          </Link>
                        )}
                      </>
                    )}
                  </div>

                  {/* Standard Menu Items for All Roles */}
                  <div className="py-1 text-xs">
                    <Link
                      href="/profile"
                      id="menu-item-profile"
                      className="flex items-center gap-2.5 px-4 py-2.5 text-stone-700 hover:bg-stone-50 font-medium transition-colors"
                      onClick={() => setAccountPanelOpen(false)}
                    >
                      <User className="w-4 h-4 text-stone-500" />
                      <span>{t('Profile', 'प्रोफ़ाइल')}</span>
                    </Link>
                    <Link
                      href="/settings"
                      id="menu-item-settings"
                      className="flex items-center gap-2.5 px-4 py-2.5 text-stone-700 hover:bg-stone-50 font-medium transition-colors"
                      onClick={() => setAccountPanelOpen(false)}
                    >
                      <Settings className="w-4 h-4 text-stone-500" />
                      <span>{t('Profile Settings', 'प्रोफ़ाइल सेटिंग्स')}</span>
                    </Link>
                  </div>

                  {/* Sign Out */}
                  <div className="pt-1 border-t border-stone-100">
                    <button
                      type="button"
                      id="menu-item-logout"
                      onClick={() => {
                        setAccountPanelOpen(false);
                        logout();
                      }}
                      className="w-full flex items-center gap-2.5 px-4 py-2.5 text-xs font-bold text-rose-600 hover:bg-rose-50 text-left transition-colors cursor-pointer"
                    >
                      <LogOut className="w-4 h-4" />
                      <span>{t('Log Out', 'लॉग आउट')}</span>
                    </button>
                  </div>
                </div>
              )}
            </div>
          ) : (
            <div className="flex items-center gap-1 sm:gap-2 shrink-0">
              <Link
                href="/login"
                id="header-sign-in-btn"
                className="inline-flex items-center gap-1 px-1.5 py-1 sm:px-3 sm:py-2 rounded-xl border border-stone-200 text-stone-700 hover:text-stone-900 hover:bg-stone-50 text-[11px] sm:text-xs font-semibold transition-colors shadow-2xs shrink-0 max-w-[75px] sm:max-w-none"
                title={t('Sign In', 'साइन इन')}
              >
                <LogIn className="w-3.5 h-3.5 text-stone-500 shrink-0" />
                <span className="truncate">{t('Sign In', 'साइन इन')}</span>
              </Link>
              <Link
                href="/signup"
                id="header-create-account-btn"
                className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 sm:px-3.5 sm:py-2 rounded-xl bg-stone-900 hover:bg-stone-800 text-white text-xs sm:text-sm font-semibold transition-colors shadow-sm shrink-0"
              >
                <UserPlus className="w-3.5 h-3.5 text-stone-300" />
                <span>{t('Create Account', 'खाता बनाएं')}</span>
              </Link>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
