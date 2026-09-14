'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { useMockAuth } from '@/context/MockAuthContext';
import AuthGuard from '@/components/AuthGuard';
import { 
  Package, ArrowLeft, Clock, CheckCircle2, MapPin, 
  CreditCard, ShieldCheck, Store, Truck, Sparkles 
} from 'lucide-react';

const ORDER_STEPS = [
  { key: 'PLACED', labelEn: 'Order Placed', labelHi: 'ऑर्डर दर्ज' },
  { key: 'CONFIRMED', labelEn: 'Confirmed', labelHi: 'पुष्टि की गई' },
  { key: 'PROCESSING', labelEn: 'In Craft Workshop', labelHi: 'शिल्प कार्यशाला' },
  { key: 'SHIPPED', labelEn: 'Dispatched', labelHi: 'भेज दिया गया' },
  { key: 'DELIVERED', labelEn: 'Delivered', labelHi: 'वितरित' },
];

export default function OrderDetailPage() {
  const params = useParams();
  const orderId = params?.id as string;
  const { language, t } = useMockAuth();
  const [order, setOrder] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadDetail() {
      try {
        if (!orderId) return;
        const res = await fetch(`/api/orders/${orderId}`);
        const data = await res.json();
        if (data.success && data.order) {
          setOrder(data.order);
        }
      } catch (err) {
        console.error('Failed to load order detail:', err);
      } finally {
        setLoading(false);
      }
    }
    loadDetail();
  }, [orderId]);

  if (loading) {
    return (
      <div className="min-h-screen bg-stone-50/70 py-12 px-4 flex items-center justify-center">
        <div className="h-48 w-full max-w-xl bg-white rounded-3xl border border-stone-200 animate-pulse" />
      </div>
    );
  }

  if (!order) {
    return (
      <div className="min-h-[70vh] flex items-center justify-center px-4">
        <div className="text-center">
          <h2 className="text-lg font-bold text-stone-900 mb-2">{t('Order Not Found', 'ऑर्डर नहीं मिला')}</h2>
          <Link href="/orders" className="text-xs font-bold text-terracotta-700 hover:underline">
            ← {t('Back to My Orders', 'मेरे ऑर्डर्स पर वापस जाएं')}
          </Link>
        </div>
      </div>
    );
  }

  const orderDate = new Date(order.createdAt).toLocaleDateString('en-IN', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  });

  const currentStepIdx = ORDER_STEPS.findIndex(s => s.key === order.status);
  const activeIdx = currentStepIdx >= 0 ? currentStepIdx : 0;

  return (
    <AuthGuard allowedRoles={['BUYER', 'ADMIN', 'ARTISAN']}>
      <div className="min-h-screen bg-stone-50/70 py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto space-y-6">
          {/* Top Bar */}
          <div className="flex items-center justify-between">
            <Link
              href="/orders"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-stone-600 hover:text-stone-900 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>{t('Back to All Orders', 'सभी ऑर्डर्स पर वापस')}</span>
            </Link>

            <span className="font-mono font-bold text-stone-900 text-xs bg-white px-3 py-1 rounded-xl border border-stone-200 shadow-2xs">
              ID: {order.orderNumber}
            </span>
          </div>

          {/* Status & Timeline Card */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-stone-200/90 shadow-sm space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-stone-100">
              <div>
                <h1 className="text-lg sm:text-xl font-extrabold text-stone-900">
                  {t('Order Tracking & Timeline', 'ऑर्डर ट्रैकिंग व स्थिति')}
                </h1>
                <p className="text-xs text-stone-500 mt-0.5 flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-stone-400" />
                  <span>Placed on {orderDate}</span>
                </p>
              </div>

              <div className="flex items-center gap-2">
                <span className="px-3 py-1 rounded-full text-xs font-extrabold bg-emerald-50 text-emerald-800 border border-emerald-200">
                  ● {order.status}
                </span>
              </div>
            </div>

            {/* Visual Timeline Stepper */}
            <div className="py-2">
              <div className="grid grid-cols-5 gap-2 relative">
                {ORDER_STEPS.map((step, idx) => {
                  const isDone = idx <= activeIdx;
                  const isCurrent = idx === activeIdx;
                  return (
                    <div key={step.key} className="text-center relative">
                      <div className="flex items-center justify-center mb-2">
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold transition-all ${
                          isDone 
                            ? 'bg-stone-900 text-white shadow-sm' 
                            : 'bg-stone-100 text-stone-400 border border-stone-200'
                        }`}>
                          {isDone ? <CheckCircle2 className="w-4 h-4 text-emerald-400" /> : idx + 1}
                        </div>
                      </div>
                      <p className={`text-[10px] sm:text-[11px] font-bold leading-tight ${
                        isCurrent ? 'text-stone-900' : isDone ? 'text-stone-700' : 'text-stone-400'
                      }`}>
                        {t(step.labelEn, step.labelHi)}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Order Items with Historical Price Snapshots */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-stone-200/90 shadow-sm space-y-4">
            <h2 className="text-base font-bold text-stone-900 pb-3 border-b border-stone-100 flex items-center gap-2">
              <Package className="w-4 h-4 text-terracotta-600" />
              <span>{t('Purchased Items & Price Snapshot', 'खरीदे गए उत्पाद एवं मूल्य स्नैपशॉट')}</span>
            </h2>

            <div className="divide-y divide-stone-100">
              {order.items?.map((item: any) => (
                <div key={item.id} className="py-4 first:pt-0 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="flex items-center gap-4">
                    <img
                      src={item.product?.primaryImageUrl || 'https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?w=120'}
                      alt={item.product?.title}
                      className="w-16 h-16 object-cover rounded-2xl border border-stone-200"
                    />
                    <div className="text-xs">
                      <Link 
                        href={`/product/${item.product?.id}`}
                        className="font-bold text-stone-900 hover:text-terracotta-700 transition-colors text-sm"
                      >
                        {item.product?.title}
                      </Link>
                      <p className="text-[11px] text-stone-500 mt-0.5">
                        {item.product?.craftCategory} • {t('Artisan', 'कारीगर')}: {item.product?.artisan?.fullName || 'Verified Cluster'}
                      </p>
                      <p className="text-[10px] text-stone-400 mt-1">
                        {t('Quantity', 'मात्रा')}: <span className="font-bold text-stone-700">{item.quantity}</span>
                      </p>
                    </div>
                  </div>

                  <div className="text-right sm:text-right flex sm:flex-col justify-between items-center sm:items-end text-xs">
                    <span className="text-stone-400 text-[11px]">{t('Snapshot Price', 'स्नैपशॉट मूल्य')}:</span>
                    <span className="font-extrabold text-stone-900 text-sm">
                      ₹{item.unitPrice.toLocaleString('en-IN')} × {item.quantity} = ₹{item.subtotal.toLocaleString('en-IN')}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Total Calculation */}
            <div className="pt-4 border-t border-stone-100 space-y-1.5 text-xs text-right">
              <div className="flex justify-between sm:justify-end gap-6 text-stone-500">
                <span>{t('Subtotal', 'उप-योग')}:</span>
                <span className="font-bold text-stone-900">₹{order.subtotal.toLocaleString('en-IN')}</span>
              </div>
              <div className="flex justify-between sm:justify-end gap-6 text-stone-500">
                <span>{t('Delivery', 'डिलीवरी')}:</span>
                <span className="font-bold text-emerald-700">{t('FREE', 'निःशुल्क')}</span>
              </div>
              <div className="flex justify-between sm:justify-end gap-6 text-sm font-extrabold text-stone-900 pt-2 border-t border-stone-100">
                <span>{t('Total Paid', 'कुल भुगतान')}:</span>
                <span className="text-base text-terracotta-700">₹{order.total.toLocaleString('en-IN')}</span>
              </div>
            </div>
          </div>

          {/* Delivery & Payment Information */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-white rounded-3xl p-6 border border-stone-200/90 shadow-sm text-xs space-y-2">
              <div className="flex items-center gap-2 font-bold text-stone-900 text-sm mb-2">
                <MapPin className="w-4 h-4 text-stone-500" />
                <span>{t('Delivery Address', 'डिलीवरी का पता')}</span>
              </div>
              <p className="font-bold text-stone-800">{order.deliveryName}</p>
              <p className="text-stone-600 leading-relaxed">
                {order.deliveryAddress}<br />
                {order.deliveryCity}, {order.deliveryState} - {order.deliveryPincode}
              </p>
              <p className="text-stone-500 font-mono mt-1">{t('Phone', 'फोन')}: {order.deliveryPhone}</p>
            </div>

            <div className="bg-white rounded-3xl p-6 border border-stone-200/90 shadow-sm text-xs space-y-2">
              <div className="flex items-center gap-2 font-bold text-stone-900 text-sm mb-2">
                <CreditCard className="w-4 h-4 text-stone-500" />
                <span>{t('Payment & Ledger', 'भुगतान एवं बहीखाता')}</span>
              </div>
              <p className="font-bold text-stone-800">
                {order.paymentMethod === 'DEMO_PAYMENT' ? 'Demo Simulated Payment' : order.paymentMethod === 'UPI' ? 'UPI Direct Payout' : 'Cash on Delivery'}
              </p>
              <p className="text-emerald-700 font-bold text-[11px] flex items-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>Payment Status: {order.paymentStatus}</span>
              </p>
              <p className="text-stone-500 text-[11px] leading-relaxed pt-1">
                {t('Direct disintermediation: 100% of the funds are recorded for the respective craft artisan clusters.', 'सीधा कारीगर भुगतान: पूरी राशि संबंधित शिल्पकार क्लस्टर के लिए दर्ज की गई है।')}
              </p>
            </div>
          </div>
        </div>
      </div>
    </AuthGuard>
  );
}
