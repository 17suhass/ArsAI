'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useCart } from '@/context/CartContext';
import { useMockAuth } from '@/context/MockAuthContext';
import { getLocalizedProduct } from '@/lib/i18n/productContent';
import { 
  ShieldCheck, MapPin, Truck, CreditCard, CheckCircle2, 
  ArrowRight, ArrowLeft, ShoppingBag, AlertCircle, Sparkles, Lock
} from 'lucide-react';

const INDIAN_STATES = [
  'Andhra Pradesh', 'Assam', 'Bihar', 'Chhattisgarh', 'Delhi', 'Goa', 
  'Gujarat', 'Haryana', 'Himachal Pradesh', 'Jammu & Kashmir', 'Jharkhand', 
  'Karnataka', 'Kerala', 'Madhya Pradesh', 'Maharashtra', 'Odisha', 
  'Punjab', 'Rajasthan', 'Tamil Nadu', 'Telangana', 'Uttar Pradesh', 
  'Uttarakhand', 'West Bengal'
];

export default function CheckoutPage() {
  const router = useRouter();
  const { items, subtotal, clearCart } = useCart();
  const { currentUser, isAuthenticated, currentRole, language, t } = useMockAuth();

  // Multi-step: 1 = Delivery, 2 = Review, 3 = Payment, 4 = Final Confirmation
  const [step, setStep] = useState<1 | 2 | 3 | 4>(1);

  // Delivery Form State
  const [deliveryName, setDeliveryName] = useState(currentUser?.name || '');
  const [deliveryPhone, setDeliveryPhone] = useState('+91 98111 22334');
  const [deliveryAddress, setDeliveryAddress] = useState('Flat 402, Lotus Apartment, Indiranagar');
  const [deliveryCity, setDeliveryCity] = useState('Bengaluru');
  const [deliveryState, setDeliveryState] = useState('Karnataka');
  const [deliveryPincode, setDeliveryPincode] = useState('560038');

  // Payment Selection
  const [paymentMethod, setPaymentMethod] = useState<'UPI' | 'COD' | 'DEMO_PAYMENT'>('DEMO_PAYMENT');

  // Submission State
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState('');

  // Pre-fill user details if available
  useEffect(() => {
    if (currentUser?.name && !deliveryName) {
      setDeliveryName(currentUser.name);
    }
  }, [currentUser]);

  // If cart is empty, show empty state
  if (items.length === 0) {
    return (
      <div className="min-h-[70vh] flex items-center justify-center px-4 py-12 bg-stone-50">
        <div className="text-center max-w-md bg-white p-8 rounded-3xl border border-stone-200 shadow-sm">
          <div className="w-16 h-16 rounded-2xl bg-stone-100 flex items-center justify-center mx-auto mb-4 text-stone-400">
            <ShoppingBag className="w-8 h-8" />
          </div>
          <h1 className="text-lg font-bold text-stone-900 mb-2">
            {t('Your cart is empty', 'आपकी टोकरी खाली है')}
          </h1>
          <p className="text-xs text-stone-500 mb-6 leading-relaxed">
            {t('Add handcrafted artisan creations to your cart before proceeding to checkout.', 'चेकआउट करने से पहले अपनी टोकरी में हस्तशिल्प उत्पाद जोड़ें।')}
          </p>
          <Link
            href="/marketplace"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-stone-900 hover:bg-stone-800 text-white text-xs font-bold transition-all"
          >
            <span>{t('Explore Marketplace', 'शिल्प बाजार देखें')}</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    );
  }

  // If user is not authenticated, prompt sign in gate
  if (!isAuthenticated) {
    return (
      <div className="min-h-[70vh] flex items-center justify-center px-4 py-12 bg-stone-50">
        <div className="text-center max-w-md bg-white p-8 rounded-3xl border border-stone-200 shadow-sm">
          <div className="w-14 h-14 rounded-2xl bg-indigoCraft-50 flex items-center justify-center mx-auto mb-4 text-indigoCraft-700">
            <Lock className="w-7 h-7" />
          </div>
          <h1 className="text-xl font-bold text-stone-900 mb-2">
            {t('Sign in to Complete Your Order', 'ऑर्डर पूरा करने के लिए साइन इन करें')}
          </h1>
          <p className="text-xs text-stone-500 mb-6 leading-relaxed">
            {t('Sign in with your Buyer account to verify delivery details, view invoice history, and support artisans directly. Your cart items are saved safely.', 'डिलीवरी विवरण सत्यापित करने, ऑर्डर इतिहास देखने और कारीगरों का सीधा समर्थन करने के लिए साइन इन करें। आपकी कार्ट सुरक्षित है।')}
          </p>
          <div className="flex flex-col gap-2.5">
            <Link
              href="/login?redirect=%2Fcheckout"
              className="w-full py-3 rounded-xl bg-stone-900 hover:bg-stone-800 text-white text-xs font-bold transition-all text-center"
            >
              {t('Sign In to Continue', 'साइन इन करें')}
            </Link>
            <Link
              href="/signup?redirect=%2Fcheckout"
              className="w-full py-2.5 rounded-xl border border-stone-200 text-stone-700 hover:bg-stone-50 text-xs font-semibold transition-all text-center"
            >
              {t('Create an Account', 'नया खाता बनाएं')}
            </Link>
          </div>
        </div>
      </div>
    );
  }

  const validateDelivery = () => {
    if (!deliveryName.trim()) return t('Please enter full delivery name', 'कृपया पूरा नाम दर्ज करें');
    if (!deliveryPhone.trim() || deliveryPhone.length < 8) return t('Please enter a valid contact phone number', 'कृपया मान्य फोन नंबर दर्ज करें');
    if (!deliveryAddress.trim()) return t('Please enter delivery street address', 'कृपया पूरा पता दर्ज करें');
    if (!deliveryCity.trim()) return t('Please enter city/town', 'कृपया शहर दर्ज करें');
    if (!deliveryPincode.trim() || deliveryPincode.length < 6) return t('Please enter a valid 6-digit PIN code', 'कृपया मान्य 6-अंकीय पिन कोड दर्ज करें');
    return null;
  };

  const handleNextFromDelivery = (e: React.FormEvent) => {
    e.preventDefault();
    const err = validateDelivery();
    if (err) {
      setError(err);
      return;
    }
    setError('');
    setStep(2);
  };

  const handlePlaceOrder = async () => {
    setError('');
    setSubmitting(true);

    try {
      const payload = {
        deliveryName,
        deliveryPhone,
        deliveryAddress,
        deliveryCity,
        deliveryState,
        deliveryPincode,
        paymentMethod,
        items: items.map(i => ({
          productId: i.product.id,
          quantity: i.quantity,
        })),
      };

      const res = await fetch('/api/orders', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      const data = await res.json();
      if (!data.success || !data.order) {
        setError(data.error || t('Failed to place order. Please try again.', 'ऑर्डर सबमिट करने में विफल।'));
        setSubmitting(false);
        return;
      }

      // Order created successfully! Clear cart and navigate to confirmation page
      clearCart();
      router.push(`/order-confirmation/${data.order.orderNumber || data.order.id}`);
    } catch (err: any) {
      console.error('Order error:', err);
      setError(t('An unexpected network error occurred.', 'नेटवर्क त्रुटि उत्पन्न हुई।'));
      setSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-stone-50/70 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Checkout Stepper Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between text-xs font-bold text-stone-500 mb-2">
            <span className={step >= 1 ? 'text-stone-900 font-extrabold' : ''}>1. {t('Delivery', 'डिलीवरी')}</span>
            <span className={step >= 2 ? 'text-stone-900 font-extrabold' : ''}>2. {t('Review', 'समीक्षा')}</span>
            <span className={step >= 3 ? 'text-stone-900 font-extrabold' : ''}>3. {t('Payment', 'भुगतान')}</span>
            <span className={step === 4 ? 'text-stone-900 font-extrabold' : ''}>4. {t('Confirm', 'पुष्टि')}</span>
          </div>
          <div className="w-full bg-stone-200 h-2 rounded-full overflow-hidden flex">
            <div 
              className="bg-stone-900 h-full transition-all duration-300"
              style={{ width: `${(step / 4) * 100}%` }}
            />
          </div>
        </div>

        {error && (
          <div className="mb-6 p-4 bg-rose-50 border border-rose-200 rounded-2xl flex items-center gap-3 text-rose-800 text-xs font-semibold">
            <AlertCircle className="w-4 h-4 shrink-0 text-rose-600" />
            <span>{error}</span>
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Main Step Content */}
          <div className="lg:col-span-8 bg-white rounded-3xl p-6 sm:p-8 border border-stone-200/90 shadow-sm">
            {/* STEP 1: DELIVERY DETAILS */}
            {step === 1 && (
              <div>
                <div className="flex items-center justify-between pb-4 mb-6 border-b border-stone-100">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-xl bg-stone-100 flex items-center justify-center text-stone-700">
                      <MapPin className="w-4 h-4" />
                    </div>
                    <div>
                      <h2 className="text-base font-bold text-stone-900">{t('Shipping & Delivery Address', 'डिलीवरी का पता')}</h2>
                      <p className="text-[11px] text-stone-500">{t('Where should your handcrafted items be delivered?', 'उत्पाद कहाँ भेजे जाएं?')}</p>
                    </div>
                  </div>
                </div>

                <form onSubmit={handleNextFromDelivery} className="space-y-4 text-xs">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="font-bold text-stone-700 block mb-1">{t('Full Recipient Name', 'पूरा नाम')} *</label>
                      <input
                        type="text"
                        required
                        value={deliveryName}
                        onChange={(e) => setDeliveryName(e.target.value)}
                        placeholder="e.g. Aditi Sen"
                        className="w-full px-3.5 py-2.5 rounded-xl border border-stone-200 bg-stone-50/50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-stone-900/10"
                      />
                    </div>
                    <div>
                      <label className="font-bold text-stone-700 block mb-1">{t('Contact Phone', 'संपर्क फोन')} *</label>
                      <input
                        type="tel"
                        required
                        value={deliveryPhone}
                        onChange={(e) => setDeliveryPhone(e.target.value)}
                        placeholder="+91 98765 43210"
                        className="w-full px-3.5 py-2.5 rounded-xl border border-stone-200 bg-stone-50/50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-stone-900/10 font-mono"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="font-bold text-stone-700 block mb-1">{t('Street Address & Apartment', 'सड़क / मकान का पता')} *</label>
                    <textarea
                      rows={2}
                      required
                      value={deliveryAddress}
                      onChange={(e) => setDeliveryAddress(e.target.value)}
                      placeholder="e.g. Flat 402, Lotus Residency, Indiranagar"
                      className="w-full px-3.5 py-2 rounded-xl border border-stone-200 bg-stone-50/50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-stone-900/10 resize-none"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div>
                      <label className="font-bold text-stone-700 block mb-1">{t('City / Town', 'शहर')} *</label>
                      <input
                        type="text"
                        required
                        value={deliveryCity}
                        onChange={(e) => setDeliveryCity(e.target.value)}
                        placeholder="e.g. Bengaluru"
                        className="w-full px-3.5 py-2.5 rounded-xl border border-stone-200 bg-stone-50/50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-stone-900/10"
                      />
                    </div>
                    <div>
                      <label className="font-bold text-stone-700 block mb-1">{t('State', 'राज्य')} *</label>
                      <select
                        value={deliveryState}
                        onChange={(e) => setDeliveryState(e.target.value)}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-stone-200 bg-stone-50/50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-stone-900/10"
                      >
                        {INDIAN_STATES.map((st) => (
                          <option key={st} value={st}>{st}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="font-bold text-stone-700 block mb-1">{t('PIN Code', 'पिन कोड')} *</label>
                      <input
                        type="text"
                        required
                        maxLength={6}
                        value={deliveryPincode}
                        onChange={(e) => setDeliveryPincode(e.target.value.replace(/\D/g, ''))}
                        placeholder="560038"
                        className="w-full px-3.5 py-2.5 rounded-xl border border-stone-200 bg-stone-50/50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-stone-900/10 font-mono"
                      />
                    </div>
                  </div>

                  <div className="pt-4 flex justify-end">
                    <button
                      type="submit"
                      id="checkout-next-to-review-btn"
                      className="px-6 py-3 rounded-xl bg-stone-900 hover:bg-stone-800 text-white font-bold text-xs flex items-center gap-2 shadow-sm transition-all"
                    >
                      <span>{t('Continue to Order Review', 'ऑर्डर समीक्षा जारी रखें')}</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </form>
              </div>
            )}

            {/* STEP 2: ORDER REVIEW */}
            {step === 2 && (
              <div>
                <div className="flex items-center justify-between pb-4 mb-6 border-b border-stone-100">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-xl bg-stone-100 flex items-center justify-center text-stone-700">
                      <ShoppingBag className="w-4 h-4" />
                    </div>
                    <div>
                      <h2 className="text-base font-bold text-stone-900">{t('Review Order Items', 'ऑर्डर की समीक्षा करें')}</h2>
                      <p className="text-[11px] text-stone-500">{t('Confirm product quantities and verified artisan pricing', 'उत्पाद की मात्रा और कारीगर मूल्य की पुष्टि करें')}</p>
                    </div>
                  </div>
                </div>

                <div className="space-y-3 divide-y divide-stone-100">
                  {items.map(({ product, quantity }) => {
                    const loc = getLocalizedProduct(product, language);
                    return (
                      <div key={product.id} className="pt-3 first:pt-0 flex items-center justify-between gap-4 text-xs">
                        <div className="flex items-center gap-3">
                          <img
                            src={product.primaryImageUrl}
                            alt={loc.title}
                            className="w-14 h-14 object-cover rounded-xl border border-stone-200"
                          />
                          <div>
                            <h4 className="font-bold text-stone-900 line-clamp-1">{loc.title}</h4>
                            <p className="text-[11px] text-stone-500">
                              {product.craftCategory} • {t('Qty', 'मात्रा')}: {quantity}
                            </p>
                            <p className="text-[10px] text-stone-400 font-mono">
                              ₹{product.finalListingPrice.toLocaleString('en-IN')} ea
                            </p>
                          </div>
                        </div>
                        <div className="text-right">
                          <span className="font-bold text-stone-900 text-sm">
                            ₹{(product.finalListingPrice * quantity).toLocaleString('en-IN')}
                          </span>
                        </div>
                      </div>
                    );
                  })}
                </div>

                <div className="mt-6 pt-4 border-t border-stone-100 flex items-center justify-between">
                  <button
                    type="button"
                    onClick={() => setStep(1)}
                    className="px-4 py-2.5 rounded-xl border border-stone-200 text-stone-700 text-xs font-bold hover:bg-stone-50 flex items-center gap-1.5"
                  >
                    <ArrowLeft className="w-3.5 h-3.5" />
                    <span>{t('Back to Delivery', 'डिलीवरी विवरण')}</span>
                  </button>
                  <button
                    type="button"
                    id="checkout-next-to-payment-btn"
                    onClick={() => setStep(3)}
                    className="px-6 py-2.5 rounded-xl bg-stone-900 hover:bg-stone-800 text-white font-bold text-xs flex items-center gap-2 shadow-sm transition-all"
                  >
                    <span>{t('Continue to Payment', 'भुगतान के लिए आगे बढ़ें')}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            )}

            {/* STEP 3: PAYMENT METHOD SELECTION */}
            {step === 3 && (
              <div>
                <div className="flex items-center justify-between pb-4 mb-6 border-b border-stone-100">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-xl bg-stone-100 flex items-center justify-center text-stone-700">
                      <CreditCard className="w-4 h-4" />
                    </div>
                    <div>
                      <h2 className="text-base font-bold text-stone-900">{t('Select Payment Method', 'भुगतान विधि चुनें')}</h2>
                      <p className="text-[11px] text-stone-500">{t('Choose your payment preference for this order', 'इस ऑर्डर के लिए भुगतान विकल्प चुनें')}</p>
                    </div>
                  </div>
                </div>

                <div className="space-y-3 text-xs">
                  <label className={`p-4 rounded-2xl border flex items-center justify-between cursor-pointer transition-all ${
                    paymentMethod === 'DEMO_PAYMENT' ? 'border-stone-900 bg-stone-50 ring-1 ring-stone-900' : 'border-stone-200 hover:bg-stone-50/50'
                  }`}>
                    <div className="flex items-center gap-3">
                      <input
                        type="radio"
                        name="paymentMethod"
                        value="DEMO_PAYMENT"
                        checked={paymentMethod === 'DEMO_PAYMENT'}
                        onChange={() => setPaymentMethod('DEMO_PAYMENT')}
                        className="text-stone-900"
                      />
                      <div>
                        <div className="font-bold text-stone-900 flex items-center gap-2">
                          <span>{t('Demo Simulated Payment (Instant Confirmation)', 'डेमो सिम्युलेटेड भुगतान (त्वरित पुष्टि)')}</span>
                          <span className="px-1.5 py-0.5 rounded text-[10px] bg-emerald-100 text-emerald-800 font-bold">Sandbox</span>
                        </div>
                        <p className="text-[11px] text-stone-500 mt-0.5">
                          {t('Simulated sandbox gateway confirming order creation with verifiable ledger records.', 'परीक्षण भुगतान जो डेटाबेस में सत्यापित ऑर्डर रिकॉर्ड बनाता है।')}
                        </p>
                      </div>
                    </div>
                    <Sparkles className="w-4 h-4 text-amber-600 shrink-0" />
                  </label>

                  <label className={`p-4 rounded-2xl border flex items-center justify-between cursor-pointer transition-all ${
                    paymentMethod === 'UPI' ? 'border-stone-900 bg-stone-50 ring-1 ring-stone-900' : 'border-stone-200 hover:bg-stone-50/50'
                  }`}>
                    <div className="flex items-center gap-3">
                      <input
                        type="radio"
                        name="paymentMethod"
                        value="UPI"
                        checked={paymentMethod === 'UPI'}
                        onChange={() => setPaymentMethod('UPI')}
                        className="text-stone-900"
                      />
                      <div>
                        <div className="font-bold text-stone-900">
                          {t('UPI Direct Payout', 'सीधा यूपीआई भुगतान')}
                        </div>
                        <p className="text-[11px] text-stone-500 mt-0.5">
                          {t('Seamless zero-commission direct disbursement to verified artisan VPA.', 'कारीगर के खाते में शून्य कमीशन सीधा हस्तांतरण।')}
                        </p>
                      </div>
                    </div>
                  </label>

                  <label className={`p-4 rounded-2xl border flex items-center justify-between cursor-pointer transition-all ${
                    paymentMethod === 'COD' ? 'border-stone-900 bg-stone-50 ring-1 ring-stone-900' : 'border-stone-200 hover:bg-stone-50/50'
                  }`}>
                    <div className="flex items-center gap-3">
                      <input
                        type="radio"
                        name="paymentMethod"
                        value="COD"
                        checked={paymentMethod === 'COD'}
                        onChange={() => setPaymentMethod('COD')}
                        className="text-stone-900"
                      />
                      <div>
                        <div className="font-bold text-stone-900">
                          {t('Cash on Delivery (COD)', 'कैश ऑन डिलीवरी')}
                        </div>
                        <p className="text-[11px] text-stone-500 mt-0.5">
                          {t('Pay upon receiving your carefully packaged craft parcel.', 'पार्सल प्राप्त करने पर नकद भुगतान करें।')}
                        </p>
                      </div>
                    </div>
                  </label>
                </div>

                <div className="mt-6 pt-4 border-t border-stone-100 flex items-center justify-between">
                  <button
                    type="button"
                    onClick={() => setStep(2)}
                    className="px-4 py-2.5 rounded-xl border border-stone-200 text-stone-700 text-xs font-bold hover:bg-stone-50 flex items-center gap-1.5"
                  >
                    <ArrowLeft className="w-3.5 h-3.5" />
                    <span>{t('Back to Review', 'समीक्षा')}</span>
                  </button>
                  <button
                    type="button"
                    id="checkout-next-to-confirm-btn"
                    onClick={() => setStep(4)}
                    className="px-6 py-2.5 rounded-xl bg-stone-900 hover:bg-stone-800 text-white font-bold text-xs flex items-center gap-2 shadow-sm transition-all"
                  >
                    <span>{t('Review Final Confirmation', 'अंतिम पुष्टि देखें')}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            )}

            {/* STEP 4: FINAL CONFIRMATION & PLACE ORDER */}
            {step === 4 && (
              <div>
                <div className="flex items-center justify-between pb-4 mb-6 border-b border-stone-100">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-xl bg-emerald-100 flex items-center justify-center text-emerald-800">
                      <CheckCircle2 className="w-4 h-4" />
                    </div>
                    <div>
                      <h2 className="text-base font-bold text-stone-900">{t('Final Order Confirmation', 'अंतिम ऑर्डर पुष्टि')}</h2>
                      <p className="text-[11px] text-stone-500">{t('Please review before placing your order', 'कृपया ऑर्डर देने से पहले विवरण जांचें')}</p>
                    </div>
                  </div>
                </div>

                <div className="space-y-4 text-xs">
                  {/* Summary Cards */}
                  <div className="p-4 bg-stone-50 rounded-2xl border border-stone-200/80">
                    <span className="text-[10px] font-bold text-stone-400 uppercase tracking-wider block mb-1">
                      {t('Delivery Destination', 'डिलीवरी गंतव्य')}
                    </span>
                    <p className="font-bold text-stone-900">{deliveryName} • {deliveryPhone}</p>
                    <p className="text-stone-600 mt-0.5">{deliveryAddress}, {deliveryCity}, {deliveryState} - {deliveryPincode}</p>
                  </div>

                  <div className="p-4 bg-stone-50 rounded-2xl border border-stone-200/80">
                    <span className="text-[10px] font-bold text-stone-400 uppercase tracking-wider block mb-1">
                      {t('Payment Mode', 'भुगतान का प्रकार')}
                    </span>
                    <p className="font-bold text-stone-900">
                      {paymentMethod === 'DEMO_PAYMENT' ? 'Demo Simulated Payment' : paymentMethod === 'UPI' ? 'UPI Direct Pay' : 'Cash on Delivery'}
                    </p>
                    <p className="text-[11px] text-stone-500 mt-0.5">
                      {t('Simulated sandbox transaction for platform evaluation.', 'प्लेटफ़ॉर्म मूल्यांकन हेतु सिमुलेटेड भुगतान।')}
                    </p>
                  </div>

                  <div className="p-4 bg-amber-50/70 border border-amber-200 rounded-2xl flex items-start gap-2.5 text-amber-900">
                    <Sparkles className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
                    <p className="text-[11px] leading-relaxed">
                      {t('Clicking Place Order below will record your verified order into the database, generate a permanent Order ID, and clear your cart.', 'नीचे "ऑर्डर दें" पर क्लिक करने से आपका सत्यापित ऑर्डर डेटाबेस में दर्ज होगा और स्थायी ऑर्डर आईडी बनेगी।')}
                    </p>
                  </div>
                </div>

                <div className="mt-8 pt-4 border-t border-stone-100 flex items-center justify-between">
                  <button
                    type="button"
                    disabled={submitting}
                    onClick={() => setStep(3)}
                    className="px-4 py-2.5 rounded-xl border border-stone-200 text-stone-700 text-xs font-bold hover:bg-stone-50 flex items-center gap-1.5"
                  >
                    <ArrowLeft className="w-3.5 h-3.5" />
                    <span>{t('Back to Payment', 'भुगतान')}</span>
                  </button>

                  <button
                    type="button"
                    id="place-order-submit-btn"
                    disabled={submitting}
                    onClick={handlePlaceOrder}
                    className="px-8 py-3.5 rounded-xl bg-terracotta-600 hover:bg-terracotta-700 text-white font-extrabold text-sm flex items-center gap-2 shadow-lg shadow-terracotta-700/20 active:scale-[0.99] transition-all disabled:opacity-50 cursor-pointer"
                  >
                    {submitting ? (
                      <span>{t('Creating Your Order...', 'ऑर्डर बन रहा है...')}</span>
                    ) : (
                      <>
                        <span>{t('Place Order', 'ऑर्डर दें')} (₹{subtotal.toLocaleString('en-IN')})</span>
                        <ArrowRight className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Right Order Summary Column */}
          <div className="lg:col-span-4 bg-white rounded-3xl p-6 border border-stone-200/90 shadow-sm space-y-4">
            <h3 className="font-extrabold text-stone-900 text-sm pb-3 border-b border-stone-100">
              {t('Order Summary', 'ऑर्डर सारांश')}
            </h3>

            <div className="space-y-2 text-xs">
              <div className="flex justify-between text-stone-600">
                <span>{t('Items Subtotal', 'उप-योग')} ({items.length})</span>
                <span className="font-bold text-stone-900">₹{subtotal.toLocaleString('en-IN')}</span>
              </div>
              <div className="flex justify-between text-stone-600">
                <span>{t('Delivery Charges', 'डिलीवरी शुल्क')}</span>
                <span className="font-bold text-emerald-700">{t('FREE', 'निःशुल्क')}</span>
              </div>
              <div className="pt-3 border-t border-stone-100 flex justify-between text-sm font-extrabold text-stone-900">
                <span>{t('Total Payable', 'कुल देय राशि')}</span>
                <span className="text-base text-terracotta-700">₹{subtotal.toLocaleString('en-IN')}</span>
              </div>
            </div>

            <div className="pt-2">
              <div className="p-3 bg-emerald-50 rounded-2xl border border-emerald-200/80 text-[11px] text-emerald-900 space-y-1">
                <div className="flex items-center gap-1.5 font-bold">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-700" />
                  <span>{t('Direct Artisan Support', 'सीधा शिल्पकार सहयोग')}</span>
                </div>
                <p className="text-[10px] text-emerald-700 leading-normal">
                  {t('100% of the craft listing price reaches the creator cluster directly without platform deduction.', 'उत्पाद का पूरा मूल्य बिना किसी कटौती के सीधे कारीगर परिवार तक पहुंचता है।')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
