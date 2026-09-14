'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useCart } from '@/context/CartContext';
import { useMockAuth } from '@/context/MockAuthContext';
import { getLocalizedProduct } from '@/lib/i18n/productContent';
import AuthGateModal from '@/components/AuthGateModal';
import { 
  ShoppingBag, X, Trash2, Plus, Minus, ArrowRight, 
  CheckCircle2, Sparkles, ShieldCheck, MapPin 
} from 'lucide-react';

export default function CartDrawer() {
  const router = useRouter();
  const { 
    items, 
    isCartOpen, 
    setIsCartOpen, 
    increaseQuantity, 
    decreaseQuantity, 
    removeFromCart, 
    clearCart,
    totalItems, 
    subtotal 
  } = useCart();
  const { isAuthenticated, currentRole, language, t } = useMockAuth();
  const [showAuthGate, setShowAuthGate] = useState(false);

  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === 'Escape' && isCartOpen) {
        setIsCartOpen(false);
      }
    }
    if (isCartOpen) {
      document.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isCartOpen, setIsCartOpen]);

  if (!isCartOpen) return null;

  const handleCheckout = () => {
    setIsCartOpen(false);
    if (!isAuthenticated) {
      setShowAuthGate(true);
    } else {
      router.push('/checkout');
    }
  };

  return (
    <>
      <div
        className="fixed inset-0 z-50 bg-black/50 backdrop-blur-xs transition-opacity animate-in fade-in duration-200"
        onClick={() => setIsCartOpen(false)}
        aria-hidden="true"
      />

      <div
        role="dialog"
        aria-modal="true"
        aria-label="Shopping Cart"
        className="fixed inset-y-0 right-0 z-50 w-full sm:w-96 md:w-[440px] bg-white shadow-2xl flex flex-col animate-in slide-in-from-right duration-250 border-l border-stone-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Cart Drawer Header */}
        <div className="p-5 border-b border-stone-200 flex items-center justify-between bg-stone-50/70">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-xl bg-terracotta-50 flex items-center justify-center text-terracotta-700">
              <ShoppingBag className="w-4 h-4" />
            </div>
            <div>
              <h2 className="text-base font-extrabold text-stone-900 leading-tight">
                {t('Your Craft Cart', 'आपकी शिल्प टोकरी')}
              </h2>
              <p className="text-[11px] text-stone-500 font-medium">
                {totalItems} {totalItems === 1 ? t('item', 'उत्पाद') : t('items', 'उत्पाद')}
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={() => setIsCartOpen(false)}
            className="p-2 text-stone-400 hover:text-stone-700 hover:bg-stone-200/60 rounded-xl transition-colors cursor-pointer"
            aria-label="Close cart"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Cart Items List */}
        <div className="flex-1 overflow-y-auto p-5 space-y-4 divide-y divide-stone-100">
          {items.length === 0 ? (
            <div className="text-center py-16 px-4">
              <div className="w-16 h-16 rounded-full bg-stone-100 flex items-center justify-center mx-auto mb-3 text-stone-400">
                <ShoppingBag className="w-7 h-7" />
              </div>
              <h3 className="text-sm font-bold text-stone-800">
                {t('Your cart is empty', 'आपकी टोकरी खाली है')}
              </h3>
              <p className="text-xs text-stone-500 mt-1 max-w-xs mx-auto">
                {t('Explore certified Indian handicrafts and support generational artisan families directly.', 'सत्यापित भारतीय शिल्पों की खोज करें और पारंपरिक कारीगर परिवारों का सीधा समर्थन करें।')}
              </p>
              <button
                type="button"
                onClick={() => setIsCartOpen(false)}
                className="mt-5 inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-stone-900 hover:bg-stone-800 text-white text-xs font-bold transition-all"
              >
                <span>{t('Browse Marketplace', 'शिल्प बाजार देखें')}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          ) : (
            items.map(({ product, quantity }) => {
              const loc = getLocalizedProduct(product, language);
              return (
                <div key={product.id} className="pt-4 first:pt-0 flex gap-3.5 items-start">
                  <Link
                    href={`/product/${product.id}`}
                    onClick={() => setIsCartOpen(false)}
                    className="shrink-0 group"
                  >
                    <img
                      src={product.primaryImageUrl}
                      alt={loc.title}
                      className="w-16 h-16 sm:w-20 sm:h-20 object-cover rounded-xl border border-stone-200 group-hover:opacity-90 transition-opacity"
                    />
                  </Link>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-1">
                      <Link
                        href={`/product/${product.id}`}
                        onClick={() => setIsCartOpen(false)}
                        className="text-xs sm:text-sm font-bold text-stone-900 line-clamp-1 hover:text-terracotta-700 transition-colors"
                      >
                        {loc.title}
                      </Link>
                    </div>

                    <p className="text-[11px] text-stone-500 line-clamp-1 mt-0.5">
                      {product.craftCategory}
                      {product.artisan?.fullName ? ` • ${product.artisan.fullName}` : ''}
                    </p>

                    <div className="mt-2 flex items-center justify-between">
                      <div className="text-xs font-extrabold text-stone-900">
                        ₹{(product.finalListingPrice * quantity).toLocaleString('en-IN')}
                        {quantity > 1 && (
                          <span className="text-[10px] font-normal text-stone-400 ml-1">
                            (₹{product.finalListingPrice.toLocaleString('en-IN')} ea)
                          </span>
                        )}
                      </div>

                      {/* Quantity Selector */}
                      <div className="flex items-center border border-stone-200 rounded-lg bg-stone-50 overflow-hidden">
                        <button
                          type="button"
                          onClick={() => decreaseQuantity(product.id)}
                          className="p-1 text-stone-500 hover:text-stone-800 hover:bg-white rounded transition-colors cursor-pointer"
                          title="Decrease"
                          aria-label="Decrease quantity"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="px-2 text-xs font-bold text-stone-800 min-w-[20px] text-center">
                          {quantity}
                        </span>
                        <button
                          type="button"
                          onClick={() => increaseQuantity(product.id)}
                          className="p-1 text-stone-500 hover:text-stone-800 hover:bg-white rounded transition-colors cursor-pointer"
                          title="Increase"
                          aria-label="Increase quantity"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>

                      <button
                        type="button"
                        onClick={() => removeFromCart(product.id)}
                        className="text-[10px] text-stone-400 hover:text-red-600 flex items-center gap-0.5 transition-colors cursor-pointer"
                        title="Remove"
                      >
                        <Trash2 className="w-3 h-3" />
                        <span>{t('Remove', 'हटाएं')}</span>
                      </button>
                    </div>
                  </div>
                </div>
              );
            })
          )}
        </div>

        {/* Cart Drawer Footer */}
        {items.length > 0 && (
          <div className="p-5 border-t border-stone-200 bg-stone-50/80 space-y-3">
            <div className="flex items-center justify-between text-xs text-stone-600">
              <span>{t('Subtotal', 'उप-योग')}</span>
              <span className="text-base font-extrabold text-stone-900">
                ₹{subtotal.toLocaleString('en-IN')}
              </span>
            </div>

            <div className="p-2.5 bg-emerald-50/90 rounded-xl border border-emerald-200/80 text-[11px] text-emerald-900 flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-700 shrink-0" />
              <span>{t('100% Direct Artisan Linkage • Zero Middleman Markup', '100% सीधा कारीगर भुगतान • शून्य बिचौलिया कमीशन')}</span>
            </div>

            <button
              type="button"
              id="cart-checkout-btn"
              onClick={handleCheckout}
              className="w-full py-3 px-4 rounded-xl bg-stone-900 hover:bg-stone-800 text-white font-bold text-sm transition-all shadow-md active:scale-[0.99] flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>{t('Proceed to Checkout', 'चेकआउट के लिए आगे बढ़ें')}</span>
              <ArrowRight className="w-4 h-4 text-amber-400" />
            </button>
          </div>
        )}
      </div>

      <AuthGateModal
        isOpen={showAuthGate}
        onClose={() => setShowAuthGate(false)}
        actionType="checkout"
        returnUrl="/checkout"
      />
    </>
  );
}
