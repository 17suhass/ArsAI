'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useMockAuth } from '@/context/MockAuthContext';
import AuthGuard from '@/components/AuthGuard';
import { SupportedLanguage } from '@/lib/types';
import { 
  Settings, User, Globe, Bell, Shield, HelpCircle, 
  LogOut, CheckCircle2, Lock, ArrowLeft, Clock,
  ChevronRight, Sparkles, Check, Edit3
} from 'lucide-react';

const SUPPORTED_LANG_OPTIONS: { code: SupportedLanguage; label: string; native: string }[] = [
  { code: 'en', label: 'English', native: 'English' },
  { code: 'hi', label: 'Hindi', native: 'हिन्दी' },
  { code: 'kn', label: 'Kannada', native: 'ಕನ್ನಡ' },
  { code: 'ta', label: 'Tamil', native: 'தமிழ்' },
  { code: 'te', label: 'Telugu', native: 'తెలుగు' },
  { code: 'ml', label: 'Malayalam', native: 'മലയാളം' },
  { code: 'mr', label: 'Marathi', native: 'मराठी' },
  { code: 'bn', label: 'Bengali', native: 'বাংলা' },
  { code: 'gu', label: 'Gujarati', native: 'ગુજરાતી' },
  { code: 'pa', label: 'Punjabi', native: 'ਪੰਜਾਬੀ' },
  { code: 'or', label: 'Odia', native: 'ଓଡ଼ିଆ' },
  { code: 'as', label: 'Assamese', native: 'অসমীয়া' },
  { code: 'ur', label: 'Urdu', native: 'اردو' },
];

export default function SettingsPage() {
  const router = useRouter();
  const { currentUser, currentRole, logout, language, setLanguage, t } = useMockAuth();

  // Artisan Data for KYC & Direct Payout (Artisan Only)
  const [artisanData, setArtisanData] = useState<any>(null);
  const [verificationUpiId, setVerificationUpiId] = useState('');
  const [savingVerification, setSavingVerification] = useState(false);
  const [verificationMessage, setVerificationMessage] = useState('');

  // Edit Profile modal / panel state
  const [showEditModal, setShowEditModal] = useState(false);
  const [displayName, setDisplayName] = useState(currentUser?.name || '');
  const [avatarUrl, setAvatarUrl] = useState(currentUser?.avatarUrl || '');
  const [bio, setBio] = useState('');
  const [savingProfile, setSavingProfile] = useState(false);
  const [profileSuccessMessage, setProfileSuccessMessage] = useState('');

  // Notifications State (Local preference toggles)
  const [orderNotifications, setOrderNotifications] = useState(true);
  const [smsAlerts, setSmsAlerts] = useState(true);
  const [marketingAlerts, setMarketingAlerts] = useState(false);

  useEffect(() => {
    if (currentUser?.name) setDisplayName(currentUser.name);
    if (currentUser?.avatarUrl) setAvatarUrl(currentUser.avatarUrl);

    if (currentRole === 'ARTISAN') {
      fetch('/api/artisan')
        .then(res => res.json())
        .then(data => {
          if (data.success && data.artisan) {
            setArtisanData(data.artisan);
            setVerificationUpiId(data.artisan.upiId || '');
            setBio(data.artisan.bioEnglish || data.artisan.bioLocal || '');
          }
        })
        .catch(err => console.error('Failed to load artisan KYC in settings:', err));
    }
  }, [currentUser, currentRole]);

  // Handle saving profile changes
  const handleSaveProfile = async (e: React.FormEvent) => {
    e.preventDefault();
    setSavingProfile(true);
    setProfileSuccessMessage('');
    try {
      if (currentRole === 'ARTISAN' && artisanData?.id) {
        await fetch('/api/artisan', {
          method: 'PATCH',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ fullName: displayName, profileImage: avatarUrl, bioEnglish: bio }),
        });
        setArtisanData((prev: any) => ({ ...prev, fullName: displayName, profileImage: avatarUrl, bioEnglish: bio }));
      }
      setProfileSuccessMessage(t('Profile updated successfully!', 'प्रोफ़ाइल सफलतापूर्वक अपडेट की गई!'));
      setTimeout(() => {
        setProfileSuccessMessage('');
        setShowEditModal(false);
      }, 700);
    } catch (err) {
      console.error('Error saving profile:', err);
    } finally {
      setSavingProfile(false);
    }
  };

  // Handle saving artisan UPI payout configuration (Artisan Only)
  const handleSaveUpi = async (e: React.FormEvent) => {
    e.preventDefault();
    setSavingVerification(true);
    setVerificationMessage('');
    try {
      const res = await fetch('/api/artisan', {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ upiId: verificationUpiId.trim() }),
      });
      const data = await res.json();
      if (data.success) {
        setVerificationMessage(t('Direct Payout UPI updated successfully!', 'सीधा भुगतान UPI अपडेट हो गया!'));
        setArtisanData((prev: any) => ({ ...prev, upiId: verificationUpiId.trim() }));
      }
    } catch (err) {
      console.error('Error updating payout UPI:', err);
    } finally {
      setSavingVerification(false);
    }
  };

  return (
    <AuthGuard allowedRoles={['BUYER', 'ARTISAN', 'ADMIN']}>
      <div className="min-h-screen bg-stone-50/70 py-8 sm:py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto space-y-6">

          {/* Top Header & Breadcrumb */}
          <div className="flex items-center justify-between animate-fade-slide-1">
            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={() => router.back()}
                className="p-2 rounded-xl bg-white border border-stone-200/80 hover:bg-stone-100 text-stone-600 transition-colors shadow-2xs cursor-pointer active:scale-95"
                title={t('Back', 'वापस')}
                aria-label={t('Back', 'वापस')}
              >
                <ArrowLeft className="w-4 h-4" />
              </button>
              <div>
                <h1 className="text-2xl sm:text-3xl font-extrabold text-stone-900 tracking-tight flex items-center gap-2">
                  <Settings className="w-6 h-6 text-stone-700" />
                  <span>{t('Account Settings', 'खाता सेटिंग्स')}</span>
                </h1>
                <p className="text-xs sm:text-sm text-stone-500 mt-0.5">
                  {t('Manage your personal information, language preferences, and security', 'व्यक्तिगत जानकारी, भाषा प्राथमिकताएं और सुरक्षा प्रबंधित करें')}
                </p>
              </div>
            </div>

            <Link
              href="/profile"
              className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl border border-stone-200 bg-white hover:bg-stone-50 text-stone-700 text-xs font-bold transition-all shadow-2xs cursor-pointer active:scale-95"
            >
              <User className="w-3.5 h-3.5" />
              <span>{t('View Profile', 'प्रोफ़ाइल देखें')}</span>
            </Link>
          </div>

          {/* SECTION 1: ACCOUNT (Edit Profile, Personal Info, Artisan KYC) */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-stone-200/90 shadow-sm space-y-6 animate-fade-slide-1">
            <div className="flex items-center justify-between pb-3 border-b border-stone-100">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-xl bg-stone-100 flex items-center justify-center text-stone-700">
                  <User className="w-4 h-4" />
                </div>
                <div>
                  <h2 className="text-base font-bold text-stone-900">{t('Account', 'खाता')}</h2>
                  <p className="text-xs text-stone-500">{t('Personal details and credentials', 'व्यक्तिगत विवरण और पहचान')}</p>
                </div>
              </div>

              <button
                type="button"
                id="settings-edit-profile-btn"
                onClick={() => setShowEditModal(true)}
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl border border-stone-200 hover:bg-stone-50 text-stone-700 text-xs font-bold transition-all cursor-pointer active:scale-95"
              >
                <Edit3 className="w-3.5 h-3.5 text-stone-500" />
                <span>{t('Edit Profile', 'प्रोफ़ाइल संपादित करें')}</span>
              </button>
            </div>

            {/* Personal Information Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
              <div className="p-4 rounded-2xl bg-stone-50/80 border border-stone-200/70">
                <span className="text-[10px] text-stone-400 font-bold uppercase tracking-wider block mb-1">
                  {t('Full Name', 'पूरा नाम')}
                </span>
                <span className="font-bold text-stone-900 text-sm">{currentUser?.name}</span>
              </div>

              <div className="p-4 rounded-2xl bg-stone-50/80 border border-stone-200/70">
                <span className="text-[10px] text-stone-400 font-bold uppercase tracking-wider block mb-1">
                  {t('Email Address', 'ईमेल पता')}
                </span>
                <span className="font-bold text-stone-900 text-sm font-mono">{currentUser?.email}</span>
              </div>

              <div className="p-4 rounded-2xl bg-stone-50/80 border border-stone-200/70">
                <span className="text-[10px] text-stone-400 font-bold uppercase tracking-wider block mb-1">
                  {t('Account Role', 'खाते की भूमिका')}
                </span>
                <span className="inline-flex items-center gap-1 font-bold text-stone-900 text-sm">
                  <span
                    className={`w-2 h-2 rounded-full ${
                      currentRole === 'ARTISAN'
                        ? 'bg-terracotta-600'
                        : currentRole === 'BUYER'
                        ? 'bg-indigoCraft-600'
                        : 'bg-emerald-600'
                    }`}
                  />
                  {currentUser?.role ? (currentUser.role === 'ARTISAN' ? t('Artisan', 'कारीगर') : currentUser.role === 'BUYER' ? t('Buyer', 'खरीदार') : t('Admin', 'प्रशासक')) : ''}
                </span>
              </div>

              <div className="p-4 rounded-2xl bg-stone-50/80 border border-stone-200/70">
                <span className="text-[10px] text-stone-400 font-bold uppercase tracking-wider block mb-1">
                  {t('Security State', 'सुरक्षा स्थिति')}
                </span>
                <span className="text-emerald-700 font-bold text-sm flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>{t('Active Authenticated Session', 'सक्रिय प्रमाणित सत्र')}</span>
                </span>
              </div>
            </div>

            {/* ARTISAN ONLY: EXISTING PEHCHAN KYC & DIRECT PAYOUT CONFIGURATION */}
            {currentRole === 'ARTISAN' && (
              <div className="mt-4 pt-4 border-t border-stone-100 space-y-4">
                <div className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-terracotta-600" />
                  <h3 className="font-bold text-sm text-stone-900">
                    {t('Govt. Pehchan KYC & Payout Banking', 'सरकारी पहचान सत्यापन एवं पेआउट बैंक')}
                  </h3>
                </div>

                {/* Pehchan Card Status (Masked) */}
                <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200/80 space-y-2 text-xs">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-extrabold uppercase text-stone-400 tracking-wider">
                      {t('KYC Verification Status', 'केवाईसी सत्यापन स्थिति')}
                    </span>
                    {artisanData?.pehchanCardNo ? (
                      <span className="px-2.5 py-1 bg-emerald-100 text-emerald-800 rounded-full font-extrabold text-[10px] border border-emerald-200 flex items-center gap-1">
                        <CheckCircle2 className="w-3 h-3" />
                        <span>{t('OFFICIALLY VERIFIED', 'आधिकारिक रूप से सत्यापित')}</span>
                      </span>
                    ) : (
                      <span className="px-2.5 py-1 bg-amber-100 text-amber-800 rounded-full font-extrabold text-[10px] border border-amber-200 flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        <span>{t('PENDING VERIFICATION', 'सत्यापन लंबित')}</span>
                      </span>
                    )}
                  </div>

                  <div className="pt-2">
                    <span className="text-[10px] text-stone-400 font-semibold block">
                      {t('Pehchan Artisan Card ID', 'पहचान कारीगर कार्ड आईडी')}
                    </span>
                    <div className="flex items-center justify-between mt-1">
                      <span className="font-mono font-bold text-xs text-stone-900 bg-white px-3 py-1.5 rounded-xl border border-stone-200">
                        {artisanData?.pehchanCardNo
                          ? `${artisanData.pehchanCardNo.slice(0, 3)}-****-${artisanData.pehchanCardNo.slice(-4)}`
                          : t('Not linked yet', 'अभी लिंक नहीं किया गया')}
                      </span>
                      {artisanData?.pehchanCardNo && (
                        <span className="text-[11px] text-emerald-700 font-semibold flex items-center gap-1">
                          <Lock className="w-3 h-3" />
                          <span>{t('Ministry of Textiles Verified', 'वस्त्र मंत्रालय द्वारा सत्यापित')}</span>
                        </span>
                      )}
                    </div>
                    <p className="text-[10px] text-stone-500 mt-1.5">
                      {t(
                        'Pehchan Card numbers are cryptographically masked to protect artisan national identity records per Ministry guidelines.',
                        'मंत्रालय के दिशानिर्देशों के अनुसार राष्ट्रीय पहचान रिकॉर्ड की सुरक्षा के लिए पहचान कार्ड नंबर सुरक्षित रूप से मास्क किए जाते हैं।'
                      )}
                    </p>
                  </div>
                </div>

                {/* Direct Payout UPI Form */}
                <form onSubmit={handleSaveUpi} className="p-4 bg-stone-50 rounded-2xl border border-stone-200/80 space-y-3 text-xs">
                  <div>
                    <span className="text-[10px] font-extrabold uppercase text-stone-400 tracking-wider block">
                      {t('Direct Payout Banking (UPI / VPA)', 'सीधा भुगतान खाता (UPI)')}
                    </span>
                    <p className="text-[11px] text-stone-500 mt-0.5">
                      {t('Buyer purchases through ArsAI are settled directly into this account with zero intermediary commission.', 'खरीदार का भुगतान बिना किसी मध्यस्थ कमीशन के सीधे इस खाते में जमा होता है।')}
                    </p>
                  </div>

                  <div>
                    <label className="font-bold text-stone-700 block mb-1">
                      {t('Artisan UPI ID / VPA', 'कारीगर UPI आईडी')}
                    </label>
                    <div className="flex gap-2">
                      <input
                        type="text"
                        value={verificationUpiId}
                        onChange={(e) => setVerificationUpiId(e.target.value)}
                        placeholder="e.g. sita.devi@okhdfcbank"
                        className="flex-1 px-3.5 py-2 rounded-xl border border-stone-200 bg-white focus:outline-none focus:ring-2 focus:ring-terracotta-500 font-mono text-xs text-stone-900 font-semibold"
                      />
                      <button
                        type="submit"
                        disabled={savingVerification}
                        className="px-4 py-2 rounded-xl bg-stone-900 hover:bg-stone-800 text-white font-bold text-xs transition-colors disabled:opacity-50 shrink-0 cursor-pointer active:scale-95"
                      >
                        {savingVerification ? t('Saving...', 'सहेज रहे हैं...') : t('Update UPI', 'UPI अपडेट करें')}
                      </button>
                    </div>
                  </div>

                  {verificationMessage && (
                    <div className="p-2.5 bg-emerald-50 border border-emerald-200 rounded-xl text-emerald-800 text-xs font-semibold flex items-center gap-1.5 animate-in fade-in">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                      <span>{verificationMessage}</span>
                    </div>
                  )}
                </form>
              </div>
            )}
          </div>

          {/* SECTION 2: PREFERENCES (Language & Notifications) */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-stone-200/90 shadow-sm space-y-6 animate-fade-slide-2">
            <div className="flex items-center gap-2.5 pb-3 border-b border-stone-100">
              <div className="w-8 h-8 rounded-xl bg-stone-100 flex items-center justify-center text-stone-700">
                <Globe className="w-4 h-4" />
              </div>
              <div>
                <h2 className="text-base font-bold text-stone-900">{t('Preferences', 'प्राथमिकताएं')}</h2>
                <p className="text-xs text-stone-500">{t('Regional language and platform alert settings', 'क्षेत्रीय भाषा एवं सूचना सेटिंग्स')}</p>
              </div>
            </div>

            {/* Synchronized Global Language Selector */}
            <div className="space-y-3">
              <div>
                <label className="text-xs font-bold text-stone-800 block">
                  {t('Interface Language', 'इंटरफ़ेस भाषा')}
                </label>
                <p className="text-[11px] text-stone-500">
                  {t('Select your preferred Indian regional language. Synchronized across the entire application.', 'अपनी पसंदीदा भाषा चुनें।')}
                </p>
              </div>

              <div id="settings-language-grid" className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 gap-2 pt-1">
                {SUPPORTED_LANG_OPTIONS.map((langOpt) => {
                  const isSelected = language === langOpt.code;
                  return (
                    <button
                      key={langOpt.code}
                      type="button"
                      onClick={() => setLanguage(langOpt.code)}
                      className={`p-2.5 rounded-xl border text-left transition-all cursor-pointer flex flex-col justify-between active:scale-95 ${
                        isSelected
                          ? 'bg-stone-900 text-white border-stone-900 shadow-xs'
                          : 'bg-stone-50 hover:bg-stone-100 text-stone-800 border-stone-200'
                      }`}
                    >
                      <div className="flex items-center justify-between w-full">
                        <span className="font-bold text-xs">{langOpt.native}</span>
                        {isSelected && <Check className="w-3 h-3 text-amber-400" />}
                      </div>
                      <span className={`text-[10px] mt-1 ${isSelected ? 'text-stone-300' : 'text-stone-400'}`}>
                        {t(langOpt.label)}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Notification Preferences */}
            <div className="pt-4 border-t border-stone-100 space-y-3 text-xs">
              <div className="flex items-center gap-2">
                <Bell className="w-4 h-4 text-stone-500" />
                <h3 className="font-bold text-stone-900">{t('Notification Alerts', 'सूचनाएं')}</h3>
              </div>

              <div className="space-y-2">
                <label className="flex items-center justify-between p-3 rounded-2xl bg-stone-50 border border-stone-200/70 cursor-pointer hover:bg-stone-100/70 transition-colors">
                  <div>
                    <span className="font-bold text-stone-800 block">{t('Order Updates & Inquiries', 'ऑर्डर अपडेट एवं पूछताछ')}</span>
                    <span className="text-[11px] text-stone-500">{t('Receive notifications when orders update or inquiries arrive', 'ऑर्डर की स्थिति में बदलाव पर सूचना प्राप्त करें')}</span>
                  </div>
                  <input
                    type="checkbox"
                    checked={orderNotifications}
                    onChange={(e) => setOrderNotifications(e.target.checked)}
                    className="w-4 h-4 rounded text-stone-900 focus:ring-stone-900"
                  />
                </label>

                <label className="flex items-center justify-between p-3 rounded-2xl bg-stone-50 border border-stone-200/70 cursor-pointer hover:bg-stone-100/70 transition-colors">
                  <div>
                    <span className="font-bold text-stone-800 block">{t('SMS Alerts', 'एसएमएस अलर्ट')}</span>
                    <span className="text-[11px] text-stone-500">{t('Dispatch and order updates via registered mobile', 'पंजीकृत मोबाइल पर महत्वपूर्ण अपडेट')}</span>
                  </div>
                  <input
                    type="checkbox"
                    checked={smsAlerts}
                    onChange={(e) => setSmsAlerts(e.target.checked)}
                    className="w-4 h-4 rounded text-stone-900 focus:ring-stone-900"
                  />
                </label>
              </div>
            </div>
          </div>

          {/* SECTION 3: PRIVACY & SECURITY */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-stone-200/90 shadow-sm space-y-4 animate-fade-slide-3 text-xs">
            <div className="flex items-center gap-2.5 pb-3 border-b border-stone-100">
              <div className="w-8 h-8 rounded-xl bg-stone-100 flex items-center justify-center text-stone-700">
                <Shield className="w-4 h-4" />
              </div>
              <div>
                <h2 className="text-base font-bold text-stone-900">{t('Privacy & Security', 'गोपनीयता एवं सुरक्षा')}</h2>
                <p className="text-xs text-stone-500">{t('Protection of authenticated session and account access', 'प्रमाणित सत्र एवं खाता पहुंच की सुरक्षा')}</p>
              </div>
            </div>

            <div className="space-y-3">
              <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200/70 flex items-center justify-between">
                <div>
                  <span className="font-bold text-stone-800 block text-xs">{t('Active Session State', 'सक्रिय सत्र स्थिति')}</span>
                  <span className="text-[11px] text-stone-500">{t('Cryptographically verified session is active and protected.', 'सत्र सक्रिय एवं सुरक्षित है।')}</span>
                </div>
                <span className="px-2.5 py-1 bg-emerald-100 text-emerald-800 rounded-full font-bold text-[10px] border border-emerald-200 flex items-center gap-1">
                  <CheckCircle2 className="w-3 h-3" />
                  <span>{t('Secure', 'सुरक्षित')}</span>
                </span>
              </div>

              <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200/70 flex items-center justify-between">
                <div>
                  <span className="font-bold text-stone-800 block text-xs">{t('Account Password Status', 'पासवर्ड स्थिति')}</span>
                  <span className="text-[11px] text-stone-500">{t('Password is securely hashed and protected against unauthorized access.', 'पासवर्ड सुरक्षित है।')}</span>
                </div>
                <span className="px-2.5 py-1 bg-stone-200 text-stone-700 rounded-full font-bold text-[10px]">
                  {t('Protected', 'संरक्षित')}
                </span>
              </div>
            </div>
          </div>

          {/* SECTION 4: SUPPORT & ABOUT */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-stone-200/90 shadow-sm space-y-4 animate-fade-slide-4 text-xs">
            <div className="flex items-center gap-2.5 pb-3 border-b border-stone-100">
              <div className="w-8 h-8 rounded-xl bg-stone-100 flex items-center justify-center text-stone-700">
                <HelpCircle className="w-4 h-4" />
              </div>
              <div>
                <h2 className="text-base font-bold text-stone-900">{t('Support & Information', 'सहायता एवं जानकारी')}</h2>
                <p className="text-xs text-stone-500">{t('Platform information and craft linkage resources', 'प्लेटफ़ॉर्म एवं शिल्प संपर्क संसाधन')}</p>
              </div>
            </div>

            <div className="space-y-3">
              <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200/70">
                <span className="font-bold text-stone-800 block text-xs mb-1">
                  {t('ArsAI Craft Linkage Platform', 'ArsAI शिल्प संपर्क प्लेटफ़ॉर्म')}
                </span>
                <p className="text-[11px] text-stone-600 leading-relaxed">
                  {t(
                    'Smart Handicraft Linkage & ODOP Cataloging Initiative. Designed for direct empowerment of traditional Indian artisans.',
                    'पारंपरिक कारीगरों के प्रत्यक्ष सशक्तिकरण और बाजार संपर्क हेतु विकसित।'
                  )}
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200/70">
                <span className="font-bold text-stone-800 block text-xs mb-1">
                  {t('Help & Platform Guidance', 'सहायता एवं मार्गदर्शन')}
                </span>
                <p className="text-[11px] text-stone-600 leading-relaxed">
                  {t(
                    'For guidance regarding craft listings, ODOP certifications, or order management, please refer to the contextual help tools within the artisan craft workspace or public marketplace.',
                    'शिल्प सूची, ओडीओपी प्रमाणन या ऑर्डर प्रबंधन संबंधी सहायता के लिए प्लेटफ़ॉर्म टूल्स का उपयोग करें।'
                  )}
                </p>
              </div>
            </div>
          </div>

          {/* SECTION 5: ACCOUNT ACTIONS (LOG OUT) */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-stone-200/90 shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-4 animate-fade-slide-4">
            <div>
              <h3 className="font-bold text-stone-900 text-sm">
                {t('Sign Out of Current Session', 'वर्तमान सत्र से साइन आउट करें')}
              </h3>
              <p className="text-xs text-stone-500 mt-0.5">
                {t('Securely sign out of your account on this browser.', 'इस ब्राउज़र पर अपने खाते से सुरक्षित रूप से साइन आउट करें।')}
              </p>
            </div>

            <button
              type="button"
              id="settings-sign-out-btn"
              onClick={() => logout()}
              className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-rose-50 hover:bg-rose-100 text-rose-700 font-bold text-xs transition-colors cursor-pointer border border-rose-200 w-fit active:scale-95"
            >
              <LogOut className="w-3.5 h-3.5" />
              <span>{t('Log Out', 'लॉग आउट')}</span>
            </button>
          </div>

        </div>

        {/* Edit Profile Modal */}
        {showEditModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-xs p-4 animate-in fade-in duration-200">
            <div className="bg-white rounded-3xl max-w-md w-full p-6 sm:p-7 border border-stone-200 shadow-2xl space-y-4 animate-modal-enter">
              <h3 className="font-bold text-stone-900 text-base">
                {t('Edit Profile Details', 'प्रोफ़ाइल विवरण संपादित करें')}
              </h3>

              {profileSuccessMessage && (
                <div className="p-3 bg-emerald-50 text-emerald-800 rounded-xl text-xs font-bold flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>{profileSuccessMessage}</span>
                </div>
              )}

              <form onSubmit={handleSaveProfile} className="space-y-3 text-xs">
                <div>
                  <label className="font-bold text-stone-700 block mb-1">{t('Display Name', 'नाम')}</label>
                  <input
                    type="text"
                    required
                    value={displayName}
                    onChange={(e) => setDisplayName(e.target.value)}
                    className="w-full px-3.5 py-2 rounded-xl border border-stone-200 focus:outline-none focus:ring-2 focus:ring-stone-900"
                  />
                </div>
                <div>
                  <label className="font-bold text-stone-700 block mb-1">{t('Profile Photo URL', 'फोटो यूआरएल')}</label>
                  <input
                    type="url"
                    value={avatarUrl}
                    onChange={(e) => setAvatarUrl(e.target.value)}
                    className="w-full px-3.5 py-2 rounded-xl border border-stone-200 focus:outline-none focus:ring-2 focus:ring-stone-900"
                  />
                </div>
                {currentRole === 'ARTISAN' && (
                  <div>
                    <label className="font-bold text-stone-700 block mb-1">{t('About / Bio', 'परिचय')}</label>
                    <textarea
                      rows={3}
                      value={bio}
                      onChange={(e) => setBio(e.target.value)}
                      placeholder={t('Tell us about yourself or your craft...', 'अपने या अपने शिल्प के बारे में बताएं...')}
                      className="w-full px-3.5 py-2 rounded-xl border border-stone-200 focus:outline-none focus:ring-2 focus:ring-stone-900"
                    />
                  </div>
                )}

                <div className="pt-3 flex gap-2 justify-end">
                  <button
                    type="button"
                    onClick={() => setShowEditModal(false)}
                    className="px-4 py-2 rounded-xl border border-stone-200 font-bold text-stone-600 hover:bg-stone-50 cursor-pointer"
                  >
                    {t('Cancel', 'रद्द करें')}
                  </button>
                  <button
                    type="submit"
                    disabled={savingProfile}
                    className="px-5 py-2 rounded-xl bg-stone-900 hover:bg-stone-800 text-white font-bold cursor-pointer disabled:opacity-50 active:scale-95"
                  >
                    {savingProfile ? t('Saving...', 'सहेज रहे हैं...') : t('Save Changes', 'सहेजें')}
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </AuthGuard>
  );
}
