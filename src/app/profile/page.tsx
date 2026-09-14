'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useMockAuth } from '@/context/MockAuthContext';
import AuthGuard from '@/components/AuthGuard';
import { 
  User, ShieldCheck, MapPin, Sparkles, Edit3, CheckCircle2, 
  Settings, ArrowRight, Award, Compass, HeartHandshake
} from 'lucide-react';

export default function ProfilePage() {
  const { currentUser, currentRole, t } = useMockAuth();
  const [artisanData, setArtisanData] = useState<any>(null);
  const [loadingArtisan, setLoadingArtisan] = useState(false);

  // Edit Profile modal state
  const [showEditModal, setShowEditModal] = useState(false);
  const [displayName, setDisplayName] = useState(currentUser?.name || '');
  const [avatarUrl, setAvatarUrl] = useState(currentUser?.avatarUrl || '');
  const [bio, setBio] = useState('');
  const [editSuccess, setEditSuccess] = useState(false);
  const [savingProfile, setSavingProfile] = useState(false);

  useEffect(() => {
    if (currentUser?.name) setDisplayName(currentUser.name);
    if (currentUser?.avatarUrl) setAvatarUrl(currentUser.avatarUrl);

    if (currentRole === 'ARTISAN') {
      setLoadingArtisan(true);
      fetch('/api/artisan')
        .then(res => res.json())
        .then(data => {
          if (data.success && data.artisan) {
            setArtisanData(data.artisan);
            setBio(data.artisan.bioEnglish || data.artisan.bioLocal || '');
          }
        })
        .catch(err => console.error('Failed to load artisan profile:', err))
        .finally(() => setLoadingArtisan(false));
    }
  }, [currentUser, currentRole]);

  const handleSaveProfile = async (e: React.FormEvent) => {
    e.preventDefault();
    setSavingProfile(true);
    try {
      if (currentRole === 'ARTISAN' && artisanData?.id) {
        await fetch('/api/artisan', {
          method: 'PATCH',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ fullName: displayName, profileImage: avatarUrl, bioEnglish: bio }),
        });
        setArtisanData((prev: any) => ({ ...prev, fullName: displayName, profileImage: avatarUrl, bioEnglish: bio }));
      }
      setEditSuccess(true);
      setTimeout(() => {
        setEditSuccess(false);
        setShowEditModal(false);
      }, 700);
    } catch (err) {
      console.error('Error saving profile:', err);
    } finally {
      setSavingProfile(false);
    }
  };

  const userHandle = currentUser?.email
    ? currentUser.email.split('@')[0]
    : 'user';

  return (
    <AuthGuard allowedRoles={['BUYER', 'ARTISAN', 'ADMIN']}>
      <div className="min-h-screen bg-stone-50/70 py-8 sm:py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto space-y-6">

          {/* 1. PROFILE IDENTITY HERO */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-stone-200/90 shadow-sm animate-fade-slide-1">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6">
              <div className="flex items-center gap-4 sm:gap-6">
                <img
                  src={
                    avatarUrl ||
                    currentUser?.avatarUrl ||
                    'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150'
                  }
                  alt={displayName || currentUser?.name || t('User', 'उपयोगकर्ता')}
                  className="w-20 h-20 sm:w-24 sm:h-24 rounded-full object-cover ring-4 ring-stone-100 shadow-md shrink-0"
                />
                <div className="min-w-0">
                  <div className="flex flex-wrap items-center gap-2">
                    <h1 className="text-xl sm:text-2xl font-extrabold text-stone-900 truncate">
                      {displayName || currentUser?.name}
                    </h1>
                    <span
                      className={`px-2.5 py-0.5 rounded-full text-[11px] font-extrabold border ${
                        currentRole === 'ARTISAN'
                          ? 'bg-terracotta-50 text-terracotta-800 border-terracotta-200'
                          : currentRole === 'BUYER'
                          ? 'bg-indigoCraft-50 text-indigoCraft-800 border-indigoCraft-200'
                          : 'bg-emerald-50 text-emerald-800 border-emerald-200'
                      }`}
                    >
                      {currentRole === 'ARTISAN' ? t('Artisan', 'कारीगर') : currentRole === 'BUYER' ? t('Buyer', 'खरीदार') : t('Admin', 'प्रशासक')}
                    </span>
                  </div>

                  <p className="text-xs text-stone-500 font-mono mt-0.5">@{userHandle}</p>

                  <div className="flex items-center gap-2 mt-2 text-xs font-semibold">
                    {currentRole === 'ARTISAN' && (
                      <span className="text-terracotta-700 flex items-center gap-1">
                        <Sparkles className="w-3.5 h-3.5" />
                        <span>{artisanData?.primaryCraft || t('Master Craft Artisan', 'मास्टर शिल्पकार')}</span>
                      </span>
                    )}
                    {currentRole === 'BUYER' && (
                      <span className="text-emerald-700 flex items-center gap-1">
                        <CheckCircle2 className="w-3.5 h-3.5" />
                        <span>{t('Verified Buyer Account', 'सत्यापित खरीदार खाता')}</span>
                      </span>
                    )}
                    {currentRole === 'ADMIN' && (
                      <span className="text-emerald-800 flex items-center gap-1">
                        <ShieldCheck className="w-3.5 h-3.5" />
                        <span>{t('Nodal Monitoring Officer', 'नोडल निगरानी अधिकारी')}</span>
                      </span>
                    )}
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-2.5 shrink-0 self-start sm:self-center">
                <button
                  type="button"
                  id="profile-edit-btn"
                  onClick={() => setShowEditModal(true)}
                  className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl border border-stone-200 hover:bg-stone-50 text-stone-700 text-xs font-bold transition-all cursor-pointer shadow-2xs active:scale-95"
                >
                  <Edit3 className="w-3.5 h-3.5 text-stone-500" />
                  <span>{t('Edit Profile', 'प्रोफ़ाइल संपादित करें')}</span>
                </button>
                <Link
                  href="/settings"
                  id="profile-settings-btn"
                  className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-stone-900 hover:bg-stone-800 text-white text-xs font-bold transition-all shadow-sm active:scale-95"
                >
                  <Settings className="w-3.5 h-3.5" />
                  <span>{t('Settings', 'सेटिंग्स')}</span>
                </Link>
              </div>
            </div>
          </div>

          {/* 2. ABOUT & STORY */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-stone-200/90 shadow-sm space-y-3 animate-fade-slide-2">
            <h2 className="text-sm font-bold uppercase tracking-wider text-stone-400">
              {t('About & Story', 'परिचय एवं विवरण')}
            </h2>
            <p className="text-stone-700 text-sm leading-relaxed">
              {currentRole === 'ARTISAN'
                ? bio || artisanData?.bioEnglish || t('Dedicated Indian traditional artisan bringing authentic GI handicrafts directly to patrons.', 'प्रामाणिक पारंपरिक भारतीय शिल्पकार।')
                : currentRole === 'BUYER'
                ? t('Supporting traditional Indian artisans directly through transparent market linkages and certified authentic GI crafts.', 'सीधे कारीगरों से प्रामाणिक हस्तशिल्प प्राप्त करने वाले सत्यापित खरीदार।')
                : t('Nodal administrative oversight for craft market linkage, ODOP promotion, and verified artisan onboarding.', 'शिल्प बाजार संपर्क एवं ओडीओपी निगरानी प्रशासन।')}
            </p>
          </div>

          {/* 3. MARKETPLACE PRESENCE & RELEVANT CREDENTIALS */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-stone-200/90 shadow-sm space-y-4 animate-fade-slide-3">
            <h2 className="text-sm font-bold uppercase tracking-wider text-stone-400">
              {t('Marketplace Presence', 'बाजार उपस्थिति')}
            </h2>

            {currentRole === 'ARTISAN' && (
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200/80">
                  <div className="flex items-center gap-2 text-stone-500 text-xs mb-1">
                    <Compass className="w-4 h-4 text-terracotta-600" />
                    <span className="font-semibold">{t('Region & Heritage', 'क्षेत्र')}</span>
                  </div>
                  <div className="font-bold text-stone-900 text-sm">
                    {artisanData?.district || 'Bastar'}, {artisanData?.state || 'Chhattisgarh'}
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200/80">
                  <div className="flex items-center gap-2 text-stone-500 text-xs mb-1">
                    <Award className="w-4 h-4 text-amber-600" />
                    <span className="font-semibold">{t('Craft Experience', 'अनुभव')}</span>
                  </div>
                  <div className="font-bold text-stone-900 text-sm">
                    {artisanData?.experienceYears ? `${artisanData.experienceYears}+ ${t('years', 'वर्ष')}` : `15+ ${t('years', 'वर्ष')}`}
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200/80">
                  <div className="flex items-center gap-2 text-stone-500 text-xs mb-1">
                    <Sparkles className="w-4 h-4 text-emerald-600" />
                    <span className="font-semibold">{t('Verification', 'सत्यापन')}</span>
                  </div>
                  <div className="font-bold text-emerald-700 text-sm flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>{t('Pehchan Verified', 'पहचान सत्यापित')}</span>
                  </div>
                </div>
              </div>
            )}

            {currentRole === 'BUYER' && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200/80">
                  <div className="flex items-center gap-2 text-stone-500 text-xs mb-1">
                    <HeartHandshake className="w-4 h-4 text-indigoCraft-600" />
                    <span className="font-semibold">{t('Direct Patronage', 'सीधा सहयोग')}</span>
                  </div>
                  <div className="font-bold text-stone-900 text-sm">
                    {t('Direct-from-Artisan Purchases', 'सीधा कारीगर से खरीद')}
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200/80">
                  <div className="flex items-center gap-2 text-stone-500 text-xs mb-1">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    <span className="font-semibold">{t('Account Status', 'खाता स्थिति')}</span>
                  </div>
                  <div className="font-bold text-emerald-700 text-sm">
                    {t('Active Verified Buyer', 'सक्रिय सत्यापित खरीदार')}
                  </div>
                </div>
              </div>
            )}

            {currentRole === 'ADMIN' && (
              <div className="p-4 rounded-2xl bg-emerald-50/70 border border-emerald-200/80">
                <div className="flex items-center gap-2 text-emerald-800 text-xs mb-1">
                  <ShieldCheck className="w-4 h-4 text-emerald-700" />
                  <span className="font-semibold">{t('Console Authority', 'कंसोल अधिकार')}</span>
                </div>
                <div className="font-bold text-emerald-950 text-sm">
                  {t('Nodal Monitoring & Craft Verification Console', 'नोडल निगरानी एवं शिल्प सत्यापन कंसोल')}
                </div>
              </div>
            )}
          </div>

          {/* Quick link to Settings */}
          <div className="bg-stone-100/80 rounded-2xl p-4 flex items-center justify-between animate-fade-slide-4">
            <div className="flex items-center gap-2.5 text-xs text-stone-600">
              <Settings className="w-4 h-4 text-stone-500" />
              <span>{t('Need to update language, notifications, or security?', 'भाषा, सूचनाएं या सुरक्षा प्रबंधित करें')}</span>
            </div>
            <Link
              href="/settings"
              className="inline-flex items-center gap-1 text-xs font-bold text-stone-900 hover:text-stone-700 transition-colors"
            >
              <span>{t('Go to Profile Settings', 'सेटिंग्स पर जाएं')}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

        </div>

        {/* Edit Profile Modal */}
        {showEditModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-xs p-4 animate-in fade-in duration-200">
            <div className="bg-white rounded-3xl max-w-md w-full p-6 sm:p-7 border border-stone-200 shadow-2xl space-y-4 animate-modal-enter">
              <h3 className="font-bold text-stone-900 text-base">
                {t('Edit Profile', 'प्रोफ़ाइल संपादित करें')}
              </h3>

              {editSuccess && (
                <div className="p-3 bg-emerald-50 text-emerald-800 rounded-xl text-xs font-bold flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>{t('Profile saved successfully!', 'प्रोफ़ाइल सहेजी गई!')}</span>
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
                    className="px-5 py-2 rounded-xl bg-stone-900 hover:bg-stone-800 text-white font-bold cursor-pointer disabled:opacity-50"
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
