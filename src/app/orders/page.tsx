'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useMockAuth } from '@/context/MockAuthContext';
import AuthGuard from '@/components/AuthGuard';
import { Package, Store, ArrowRight, Clock, ShieldCheck, MapPin, CheckCircle2 } from 'lucide-react';

export default function OrdersPage() {
  const { language, t } = useMockAuth();
  const [orders, setOrders] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadOrders() {
      try {
        const res = await fetch('/api/orders');
        const data = await res.json();
        if (data.success) {
          setOrders(data.orders || []);
        }
      } catch (err) {
        console.error('Failed to load orders:', err);
      } finally {
        setLoading(false);
      }
    }
    loadOrders();
  }, []);

  return (
    <AuthGuard allowedRoles={['BUYER', 'ADMIN', 'ARTISAN']}>
      <div className="min-h-screen bg-stone-50/70 py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto space-y-6">
          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-stone-200">
            <div>
              <div className="flex items-center gap-2">
                <Package className="w-5 h-5 text-terracotta-600" />
                <h1 className="text-xl sm:text-2xl font-extrabold text-stone-900">
                  {t('My Orders & Craft Purchases', 'मेरे ऑर्डर्स एवं शिल्प खरीदारी')}
                </h1>
              </div>
              <p className="text-xs text-stone-500 mt-1">
                {t('Track verified orders, view historical price snapshots, and delivery records', 'ऑर्डर ट्रैक करें और मूल्य व डिलीवरी विवरण देखें')}
              </p>
            </div>
            <Link
              href="/marketplace"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-stone-900 hover:bg-stone-800 text-white text-xs font-bold transition-all w-fit"
            >
              <Store className="w-3.5 h-3.5" />
              <span>{t('Browse Marketplace', 'शिल्प बाजार देखें')}</span>
            </Link>
          </div>

          {loading ? (
            <div className="space-y-4">
              {[1, 2, 3].map(i => (
                <div key={i} className="h-32 bg-white rounded-3xl border border-stone-200 animate-pulse" />
              ))}
            </div>
          ) : orders.length === 0 ? (
            <div className="text-center py-16 bg-white rounded-3xl border border-stone-200/90 p-8 shadow-sm">
              <div className="w-16 h-16 rounded-2xl bg-stone-100 flex items-center justify-center mx-auto mb-4 text-stone-400">
                <Package className="w-8 h-8" />
              </div>
              <h2 className="text-base font-bold text-stone-900 mb-1">
                {t('No orders found', 'कोई ऑर्डर नहीं मिला')}
              </h2>
              <p className="text-xs text-stone-500 max-w-sm mx-auto mb-6">
                {t('You have not placed any orders yet. Discover authentic crafts from master artisans across India.', 'आपने अभी तक कोई ऑर्डर नहीं दिया है। भारत भर के कारीगरों के प्रामाणिक शिल्प देखें।')}
              </p>
              <Link
                href="/marketplace"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-stone-900 hover:bg-stone-800 text-white text-xs font-bold transition-all"
              >
                <span>{t('Explore Crafts', 'शिल्प खोजें')}</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          ) : (
            <div className="space-y-4">
              {orders.map((order) => {
                const orderDate = new Date(order.createdAt).toLocaleDateString('en-IN', {
                  day: 'numeric',
                  month: 'short',
                  year: 'numeric'
                });

                return (
                  <div 
                    key={order.id} 
                    className="bg-white rounded-3xl p-5 sm:p-6 border border-stone-200/90 shadow-sm hover:shadow-md transition-shadow space-y-4"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-stone-100 text-xs">
                      <div className="flex items-center gap-2.5">
                        <span className="font-mono font-bold text-stone-900 text-sm bg-stone-100 px-2.5 py-1 rounded-lg">
                          {order.orderNumber}
                        </span>
                        <span className="text-stone-400">•</span>
                        <span className="text-stone-500 flex items-center gap-1">
                          <Clock className="w-3.5 h-3.5 text-stone-400" />
                          {orderDate}
                        </span>
                      </div>

                      <div className="flex items-center gap-2">
                        <span className="px-2.5 py-1 rounded-full text-[10px] font-extrabold bg-emerald-50 text-emerald-800 border border-emerald-200 flex items-center gap-1">
                          <CheckCircle2 className="w-3 h-3" />
                          <span>{order.status}</span>
                        </span>
                        <span className="text-stone-900 font-extrabold text-sm ml-2">
                          ₹{order.total.toLocaleString('en-IN')}
                        </span>
                      </div>
                    </div>

                    {/* Items Preview */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {order.items?.map((item: any) => (
                        <div key={item.id} className="flex items-center gap-3 p-2.5 rounded-2xl bg-stone-50/60 border border-stone-100">
                          <img
                            src={item.product?.primaryImageUrl || 'https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?w=100'}
                            alt={item.product?.title || 'Craft'}
                            className="w-12 h-12 rounded-xl object-cover border border-stone-200"
                          />
                          <div className="min-w-0 flex-1 text-xs">
                            <h4 className="font-bold text-stone-900 truncate">
                              {item.product?.title || 'Artisan Craft'}
                            </h4>
                            <p className="text-[11px] text-stone-500">
                              {item.product?.craftCategory} • Qty: {item.quantity}
                            </p>
                            <p className="text-[10px] font-mono text-stone-600 font-semibold">
                              ₹{item.unitPrice.toLocaleString('en-IN')} (Snapshot)
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="pt-2 flex items-center justify-between">
                      <div className="text-[11px] text-stone-500 flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5 text-stone-400" />
                        <span>{order.deliveryCity}, {order.deliveryState}</span>
                      </div>
                      <Link
                        href={`/orders/${order.orderNumber}`}
                        className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl border border-stone-200 text-stone-800 text-xs font-bold hover:bg-stone-50 transition-colors"
                      >
                        <span>{t('View Order Details', 'विवरण देखें')}</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </AuthGuard>
  );
}
