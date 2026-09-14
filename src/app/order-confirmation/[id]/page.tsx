'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { useMockAuth } from '@/context/MockAuthContext';
import { CheckCircle2, Package, ArrowRight, Store, ShieldCheck, MapPin, Sparkles } from 'lucide-react';

export default function OrderConfirmationPage() {
  const params = useParams();
  const orderId = params?.id as string;
  const { language, t } = useMockAuth();
  const [order, setOrder] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadOrder() {
      try {
        if (!orderId) return;
        const res = await fetch(`/api/orders/${orderId}`);
        const data = await res.json();
        if (data.success && data.order) {
          setOrder(data.order);
        }
      } catch (err) {
        console.error('Failed to load order:', err);
      } finally {
        setLoading(false);
      }
    }
    loadOrder();
  }, [orderId]);

  return (
    <div className="min-h-[80vh] bg-stone-50/70 py-12 px-4 sm:px-6 lg:px-8 flex items-center justify-center">
      <div className="max-w-xl w-full bg-white rounded-3xl p-6 sm:p-10 border border-stone-200/90 shadow-sm text-center">
        {/* Success Icon */}
        <div className="w-16 h-16 rounded-full bg-emerald-100 flex items-center justify-center mx-auto mb-4 text-emerald-600 animate-in zoom-in-50 duration-300">
          <CheckCircle2 className="w-9 h-9" />
        </div>

        <h1 className="text-2xl sm:text-3xl font-extrabold text-stone-900 tracking-tight">
          {t('Order Placed Successfully!', 'ऑर्डर सफलतापूर्वक दर्ज हो गया!')}
        </h1>
        <p className="text-xs sm:text-sm text-stone-600 mt-2">
          {t('Thank you for directly supporting verified Indian generational artisans.', 'सत्यापित पारंपरिक भारतीय कारीगरों का सीधा समर्थन करने के लिए धन्यवाद।')}
        </p>

        {/* Order Identifier Card */}
        <div className="my-6 p-4 sm:p-5 bg-stone-50 rounded-2xl border border-stone-200/80 text-left space-y-2">
          <div className="flex items-center justify-between text-xs">
            <span className="text-stone-500 font-medium">{t('Order Number', 'ऑर्डर नंबर')}:</span>
            <span className="font-mono font-black text-stone-900 text-sm bg-white px-2 py-0.5 rounded border border-stone-200">
              {order?.orderNumber || orderId}
            </span>
          </div>

          <div className="flex items-center justify-between text-xs">
            <span className="text-stone-500 font-medium">{t('Total Amount', 'कुल राशि')}:</span>
            <span className="font-extrabold text-terracotta-700 text-base">
              ₹{order ? order.total.toLocaleString('en-IN') : '—'}
            </span>
          </div>

          <div className="flex items-center justify-between text-xs pt-1 border-t border-stone-200/60">
            <span className="text-stone-500 font-medium">{t('Status', 'स्थिति')}:</span>
            <span className="px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 text-[10px] font-bold">
              {order?.status || 'PLACED'}
            </span>
          </div>

          {order?.deliveryAddress && (
            <div className="text-[11px] text-stone-600 pt-1 border-t border-stone-200/60 flex items-start gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-stone-400 shrink-0 mt-0.5" />
              <span>
                {order.deliveryName} • {order.deliveryAddress}, {order.deliveryCity}, {order.deliveryState} - {order.deliveryPincode}
              </span>
            </div>
          )}
        </div>

        {/* Direct Payout Notice */}
        <div className="mb-6 p-3.5 bg-emerald-50/80 rounded-2xl border border-emerald-200/80 text-[11px] text-emerald-900 flex items-center gap-2.5 text-left">
          <ShieldCheck className="w-5 h-5 text-emerald-700 shrink-0" />
          <span>
            {t('Fair remuneration has been routed directly to the artisan community. An invoice snapshot has been archived to your account.', 'उचित पारिश्रमिक सीधे कारीगर समुदाय को भेजा गया है। ऑर्डर का विवरण आपके खाते में सुरक्षित है।')}
          </span>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-3">
          <Link
            href={`/orders/${order?.orderNumber || orderId}`}
            className="flex-1 py-3 px-4 rounded-xl bg-stone-900 hover:bg-stone-800 text-white text-xs font-bold transition-all flex items-center justify-center gap-2"
          >
            <Package className="w-4 h-4" />
            <span>{t('View Order Details', 'ऑर्डर विवरण देखें')}</span>
          </Link>
          <Link
            href="/marketplace"
            className="flex-1 py-3 px-4 rounded-xl border border-stone-200 text-stone-700 hover:bg-stone-100 text-xs font-bold transition-all flex items-center justify-center gap-2"
          >
            <Store className="w-4 h-4" />
            <span>{t('Continue Shopping', 'खरीदारी जारी रखें')}</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
