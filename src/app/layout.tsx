import type { Metadata } from 'next';
import './globals.css';
import { MockAuthProvider } from '@/context/MockAuthContext';
import { CartProvider } from '@/context/CartContext';
import Header from '@/components/Header';
import CartDrawer from '@/components/CartDrawer';
import LanguageSelector from '@/components/LanguageSelector';

export const metadata: Metadata = {
  title: 'ArsAI — AI-Driven Market Linkage for Marginalized Artisans',
  description: 'SIH26090: Transforming regional voice and photo inputs into professional digital catalogs and direct market linkage for Indian artisans.',
  icons: {
    icon: '/arsai-app-icon.png',
    shortcut: '/arsai-app-icon.png',
    apple: '/arsai-app-icon.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800;900&family=Rozha+One&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" type="image/png" href="/arsai-app-icon.png" />
        <link rel="apple-touch-icon" href="/arsai-app-icon.png" />
      </head>
      <body className="bg-stone-50 text-stone-900 min-h-screen flex flex-col antialiased">
        <MockAuthProvider>
          <CartProvider>
            {/* Header with Navigation & Cart Trigger */}
            <Header />

            {/* Main Application Routes */}
            <main className="flex-1">
              {children}
            </main>

            {/* Global Slide-over Cart Drawer */}
            <CartDrawer />

            {/* Global Floating Bottom-Left Language Selector */}
            <LanguageSelector />

            {/* Clean Platform Footer without development badge */}
            <footer className="bg-stone-900 text-stone-400 text-xs py-8 border-t border-stone-800 mt-16">
              <div className="max-w-7xl mx-auto px-4 sm:flex sm:items-center sm:justify-between">
                <div className="flex items-center gap-3.5 justify-center sm:justify-start">
                  <img
                    src="/arsai-app-icon.png"
                    alt="ArsAI App Icon"
                    width={40}
                    height={40}
                    className="w-10 h-10 block rounded-xl object-cover shadow-md border border-emerald-900/50 shrink-0"
                  />
                  <div>
                    <p className="font-semibold text-stone-200">ArsAI Platform</p>
                    <p className="text-[11px] text-stone-400 mt-0.5">
                      AI-Driven Market Linkage and Smart Cataloging Platform for Indian Artisans
                    </p>
                  </div>
                </div>
                <div className="mt-4 sm:mt-0 text-center sm:text-right text-[11px] text-stone-500">
                  <span>Traditional Craft Heritage & Market Linkage</span>
                </div>
              </div>
            </footer>
          </CartProvider>
        </MockAuthProvider>
      </body>
    </html>
  );
}
