'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useMockAuth } from '@/context/MockAuthContext';
import { 
  Sparkles, ArrowRight, Mic, Camera, Brain, FileText, 
  IndianRupee, Store, ShieldCheck, HeartHandshake, 
  CheckCircle2, Compass, Layers, Users, Landmark, MapPin, 
  ShoppingBag, LogIn, ChevronRight, Award, UserPlus, X
} from 'lucide-react';
import { PriestKingMark } from '@/components/ArsAiLogo';

export default function LandingPage() {
  const router = useRouter();
  const { t, language, isAuthenticated, currentRole } = useMockAuth();
  const [showAuthChoice, setShowAuthChoice] = useState(false);

  const handleGetStarted = (e: React.MouseEvent) => {
    if (isAuthenticated) {
      if (currentRole === 'ARTISAN') router.push('/artisan');
      else if (currentRole === 'ADMIN') router.push('/admin');
      else router.push('/marketplace');
    } else {
      e.preventDefault();
      setShowAuthChoice(true);
    }
  };

  const steps = [
    {
      num: '01',
      title: t('Voice / Photo', 'आवाज / फोटो'),
      desc: t('Artisan speaks in their native regional language or snaps workshop photos.', 'कारीगर अपनी क्षेत्रीय भाषा में बोलते हैं या कार्यशाला की तस्वीरें लेते हैं।'),
      icon: <Mic className="w-5 h-5 text-terracotta-600" />,
      subIcon: <Camera className="w-3.5 h-3.5 text-stone-400" />
    },
    {
      num: '02',
      title: t('AI Understands', 'एआई समझता है'),
      desc: t('Multimodal Gemini AI extracts craft category, materials, dimensions, and heritage.', 'मल्टीमॉडल एआई सामग्री, आयाम और सांस्कृतिक धरोहर को समझता है।'),
      icon: <Brain className="w-5 h-5 text-indigoCraft-600" />,
      subIcon: <Sparkles className="w-3.5 h-3.5 text-amber-500" />
    },
    {
      num: '03',
      title: t('Digital Catalog', 'डिजिटल कैटलॉग'),
      desc: t('Professional bilingual product listings with verified specifications are generated.', 'सत्यापित विवरणों के साथ द्विभाषी पेशेवर उत्पाद सूची तैयार होती है।'),
      icon: <FileText className="w-5 h-5 text-emerald-600" />,
      subIcon: <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
    },
    {
      num: '04',
      title: t('Fair Price', 'निष्पक्ष मूल्य'),
      desc: t('Transparent pricing recommendations calculate labor, materials, and retail benchmarks.', 'श्रम, सामग्री और बाज़ार तुलना के आधार पर उचित मूल्य तय होता है।'),
      icon: <IndianRupee className="w-5 h-5 text-amber-600" />,
      subIcon: <ShieldCheck className="w-3.5 h-3.5 text-amber-500" />
    },
    {
      num: '05',
      title: t('Market Access', 'बाजार पहुंच'),
      desc: t('Direct linkage to retail buyers and corporate wholesale procurement channels.', 'खुदरा खरीदारों और कॉर्पोरेट थोक खरीद चैनलों तक सीधी पहुंच।'),
      icon: <Store className="w-5 h-5 text-terracotta-600" />,
      subIcon: <HeartHandshake className="w-3.5 h-3.5 text-terracotta-500" />
    }
  ];

  const artisanBenefits = [
    {
      title: t('AI-Powered Multilingual Cataloging', 'एआई-संचालित बहुभाषी कैटलॉगिंग'),
      desc: t('Overcome English barriers by generating world-class catalogs using native Indian voice notes.', 'मातृभाषा में बोलकर विश्वस्तरीय डिजिटल कैटलॉग तैयार करें।')
    },
    {
      title: t('Fair Price Advisory Engine', 'निष्पक्ष मूल्य निर्धारण सहायता'),
      desc: t('Transparent recommendations calculate fair artisan compensation vs urban retail benchmarks.', 'शहरी खुदरा कीमतों के आधार पर अपने काम का सही मूल्य जानें।')
    },
    {
      title: t('Zero Middleman Exploitation', 'शून्य बिचौलिया शोषण'),
      desc: t('100% of product payments flow directly to the artisan without predatory intermediaries.', 'आपका 100% भुगतान बिना किसी कमीशन के सीधे आपके खाते में पहुंचता है।')
    },
    {
      title: t('Government Scheme Guidance', 'सरकारी योजनाओं का मार्गदर्शन'),
      desc: t('Integrated discovery for PM Vishwakarma, ODOP, Mudra loans, and Pehchan ID.', 'पीएम विश्वकर्मा, ओडीओपी और मुद्रा योजनाओं की सीधी जानकारी।')
    }
  ];

  const buyerBenefits = [
    {
      title: t('Direct Sourcing from Master Artisans', 'मास्टर कारीगरों से सीधी खरीद'),
      desc: t('Procure authentic Indian handicrafts directly from certified artisan clusters.', 'प्रमाणित कारीगर क्लस्टरों से सीधे हस्तनिर्मित कलाकृतियां खरीदें।')
    },
    {
      title: t('Verified Cultural Heritage Stories', 'सत्यापित सांस्कृतिक शिल्प कथाएं'),
      desc: t('Learn the rich generational history, natural materials, and techniques behind every piece.', 'प्रत्येक कृति के पीछे की पीढ़ियों पुरानी कला और प्राकृतिक सामग्री को जानें।')
    },
    {
      title: t('Transparent Artisan-Direct Pricing', 'पारदर्शी कारीगर-सीधा मूल्य'),
      desc: t('Access benchmarked prices with full confidence that master creators are fairly rewarded.', 'पारदर्शी कीमतों पर खरीदें और सुनिश्चित करें कि कारीगर को सही पारिश्रमिक मिले।')
    },
    {
      title: t('B2B Wholesale & Institutional RFQs', 'थोक खरीद एवं संस्थागत RFQ'),
      desc: t('Direct RFQ workflow for corporate gifting, hotel decor, and export bulk procurement.', 'कॉर्पोरेट उपहार और थोक खरीद के लिए सीधे कोटेशन प्राप्त करें।')
    }
  ];

  return (
    <div className="bg-stone-50 text-stone-900 selection:bg-terracotta-100 selection:text-terracotta-900">
      {/* 1. HERO SECTION */}
      <section className="relative overflow-hidden pt-12 pb-20 sm:pt-20 sm:pb-28 border-b border-stone-200/70 bg-radial-[at_50%_0%] from-stone-100/90 via-stone-50 to-stone-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Platform tagline badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/90 border border-stone-200/90 shadow-2xs text-stone-600 text-xs font-semibold mb-6">
            <span className="w-2 h-2 rounded-full bg-terracotta-600 animate-pulse" />
            <span className="font-bold text-stone-800">ArsAI Platform</span>
            <span className="text-stone-300">|</span>
            <span className="text-stone-500">{t('From Craft to Market', 'शिल्प से बाजार तक')}</span>
          </div>

          {/* Main Hero Headline */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-stone-900 leading-[1.15]">
            {t("Empowering India's Artisans,", "भारतीय कारीगरों का सशक्तिकरण,")}{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-terracotta-600 via-amber-600 to-terracotta-700">
              {t('From Craft to Market', 'शिल्प से बाजार तक')}
            </span>
          </h1>

          {/* Concise Mission Statement */}
          <p className="mt-6 text-base sm:text-xl text-stone-600 max-w-3xl mx-auto leading-relaxed font-normal">
            {t(
              "ArsAI connects India's traditional artisans with modern markets through AI-powered cataloging, fair pricing and direct market access.",
              "ArsAI पारंपरिक भारतीय कारीगरों को एआई-संचालित कैटलॉगिंग, निष्पक्ष मूल्य निर्धारण और सीधे बाजार संपर्क के माध्यम से आधुनिक खरीदारों से जोड़ता है।"
            )}
          </p>

          {/* Primary & Secondary Hero CTAs (Explore Marketplace vs Get Started Auth Choice) */}
          <div className="mt-9 flex flex-col sm:flex-row items-center justify-center gap-3.5 sm:gap-4 max-w-md mx-auto">
            <button
              type="button"
              onClick={handleGetStarted}
              id="hero-get-started-btn"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-2xl bg-stone-900 hover:bg-stone-800 text-white font-bold text-sm sm:text-base transition-all shadow-md shadow-stone-900/15 hover:shadow-lg active:scale-[0.99] group cursor-pointer"
            >
              <span>{t('Get Started', 'शुरू करें')}</span>
              <ArrowRight className="w-4 h-4 text-amber-400 group-hover:translate-x-0.5 transition-transform" />
            </button>

            <Link
              href="/marketplace"
              id="hero-explore-btn"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-2xl bg-white hover:bg-stone-100 text-stone-800 border border-stone-300 font-bold text-sm sm:text-base transition-all shadow-xs"
            >
              <Compass className="w-4 h-4 text-terracotta-600" />
              <span>{t('Explore Marketplace', 'बाजार देखें')}</span>
            </Link>
          </div>

          {/* Quick Pillar Callouts */}
          <div className="mt-14 pt-8 border-t border-stone-200/70 grid grid-cols-2 sm:grid-cols-4 gap-4 text-left max-w-4xl mx-auto">
            <div className="p-3 bg-white/70 rounded-2xl border border-stone-200/60 shadow-2xs">
              <span className="text-[10px] font-bold text-terracotta-700 uppercase tracking-wider block">01. Multimodal</span>
              <p className="text-xs font-bold text-stone-800 mt-0.5">{t('Voice & Photo Inputs', 'आवाज व फोटो इनपुट')}</p>
            </div>
            <div className="p-3 bg-white/70 rounded-2xl border border-stone-200/60 shadow-2xs">
              <span className="text-[10px] font-bold text-indigoCraft-700 uppercase tracking-wider block">02. Intelligence</span>
              <p className="text-xs font-bold text-stone-800 mt-0.5">{t('Multimodal Gemini Pipeline', 'मल्टीमॉडल एआई पाइपलाइन')}</p>
            </div>
            <div className="p-3 bg-white/70 rounded-2xl border border-stone-200/60 shadow-2xs">
              <span className="text-[10px] font-bold text-amber-700 uppercase tracking-wider block">03. Transparency</span>
              <p className="text-xs font-bold text-stone-800 mt-0.5">{t('Fair Price Benchmarking', 'निष्पक्ष मूल्य निर्धारण')}</p>
            </div>
            <div className="p-3 bg-white/70 rounded-2xl border border-stone-200/60 shadow-2xs">
              <span className="text-[10px] font-bold text-emerald-700 uppercase tracking-wider block">04. Direct Access</span>
              <p className="text-xs font-bold text-stone-800 mt-0.5">{t('Zero Middleman Markup', 'शून्य बिचौलिया कमीशन')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* 2. THE PROBLEM ARTISANS FACE */}
      <section className="py-16 sm:py-24 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 border-b border-stone-200/70">
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <span className="text-xs font-extrabold uppercase tracking-wider text-terracotta-700 bg-terracotta-50 px-3 py-1 rounded-full border border-terracotta-200/60">
            {t('The Challenge', 'समस्या')}
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-stone-900 mt-3 tracking-tight">
            {t("Why India's Master Artisans Struggle in Modern Commerce", "पारंपरिक कारीगर आधुनिक बाजार में क्यों पिछड़ जाते हैं")}
          </h2>
          <p className="text-xs sm:text-base text-stone-600 mt-2.5 leading-relaxed">
            {t(
              "Despite unparalleled craftsmanship, millions of generational creators remain economically marginalized due to fundamental technological and structural barriers.",
              "अद्वितीय कौशल के बावजूद, लाखों कारीगर तकनीकी और ढांचागत बाधाओं के कारण उचित लाभ से वंचित रह जाते हैं।"
            )}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="p-6 bg-white rounded-3xl border border-stone-200/80 shadow-2xs space-y-3">
            <div className="w-10 h-10 rounded-2xl bg-amber-50 text-amber-700 flex items-center justify-center font-bold">
              01
            </div>
            <h3 className="text-base font-bold text-stone-900">{t('Digital Cataloging Barrier', 'कैटलॉगिंग की जटिलता')}</h3>
            <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
              {t(
                'Complex e-commerce portals demand English descriptions, precise dimensions, and technical metadata that oral-tradition artisans cannot easily provide.',
                'पारंपरिक ई-कॉमर्स पोर्टल अंग्रेजी भाषा और जटिल विवरण मांगते हैं, जो कारीगरों के लिए कठिन है।'
              )}
            </p>
          </div>

          <div className="p-6 bg-white rounded-3xl border border-stone-200/80 shadow-2xs space-y-3">
            <div className="w-10 h-10 rounded-2xl bg-terracotta-50 text-terracotta-700 flex items-center justify-center font-bold">
              02
            </div>
            <h3 className="text-base font-bold text-stone-900">{t('Severe Middleman Exploitation', 'बिचौलियों द्वारा शोषण')}</h3>
            <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
              {t(
                'Intermediaries often take 60% to 80% of retail margins while paying artisans below minimum living wages for months of dedicated manual craft.',
                'बिचौलिये 60% से 80% तक कमीशन ले लेते हैं, जिससे कारीगर को अपनी मेहनत का वाजिब हक नहीं मिलता।'
              )}
            </p>
          </div>

          <div className="p-6 bg-white rounded-3xl border border-stone-200/80 shadow-2xs space-y-3">
            <div className="w-10 h-10 rounded-2xl bg-indigoCraft-50 text-indigoCraft-700 flex items-center justify-center font-bold">
              03
            </div>
            <h3 className="text-base font-bold text-stone-900">{t('Loss of Cultural Narrative', 'सांस्कृतिक कहानी का अभाव')}</h3>
            <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
              {t(
                'Ancient techniques, natural regional materials, and generational heritage are reduced to generic commoditized tags on mass platforms.',
                'पारंपरिक तकनीकों और सांस्कृतिक कहानियों को बड़े प्लेटफॉर्म पर सामान्य उत्पाद मान लिया जाता है।'
              )}
            </p>
          </div>
        </div>
      </section>

      {/* 3. THE ARSAI IDEA: THE BRIDGE */}
      <section className="py-16 sm:py-24 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 border-b border-stone-200/70">
        <div className="bg-gradient-to-br from-stone-900 via-stone-900 to-emerald-950 text-white rounded-3xl p-8 sm:p-14 shadow-xl relative overflow-hidden">
          <div className="relative z-10 max-w-3xl">
            <span className="text-[11px] font-extrabold uppercase tracking-wider text-amber-400 bg-amber-400/15 border border-amber-400/30 px-3 py-1 rounded-full">
              {t('The ArsAI Solution', 'ArsAI का समाधान')}
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white mt-4 tracking-tight">
              {t('The Bridge Between Tradition, AI, and Modern Markets', 'परंपरा, एआई और आधुनिक बाजार के बीच का सेतु')}
            </h2>
            <p className="text-xs sm:text-base text-stone-300 mt-3 leading-relaxed">
              {t(
                'ArsAI eliminates the digital divide. An artisan simply speaks about their piece in Hindi, Odia, Tamil, or Telugu. Our multimodal pipeline transforms natural voice into certified e-commerce catalogs with transparent pricing and direct links to discerning buyers worldwide.',
                'ArsAI भाषा और तकनीक की दूरी को समाप्त करता है। कारीगर अपनी मातृभाषा में बोलते हैं और एआई इसे सत्यापित डिजिटल कैटलॉग और उचित मूल्य में बदल देता है।'
              )}
            </p>

            {/* Visual Bridge Representation */}
            <div className="mt-8 pt-8 border-t border-white/15 grid grid-cols-3 gap-3 text-center">
              <div className="p-3 sm:p-4 rounded-2xl bg-white/10 backdrop-blur-xs border border-white/10">
                <span className="text-[10px] font-bold text-amber-300 uppercase block">Input</span>
                <span className="text-sm sm:text-base font-extrabold text-white mt-1 block">TRADITION</span>
                <span className="text-[11px] text-stone-400 hidden sm:block mt-0.5">Generational Craft</span>
              </div>
              <div className="p-3 sm:p-4 rounded-2xl bg-emerald-600/30 backdrop-blur-xs border border-emerald-400/30">
                <span className="text-[10px] font-bold text-emerald-300 uppercase block">Engine</span>
                <span className="text-sm sm:text-base font-extrabold text-white mt-1 block">AI PIPELINE</span>
                <span className="text-[11px] text-emerald-200 hidden sm:block mt-0.5">Multimodal Gemini</span>
              </div>
              <div className="p-3 sm:p-4 rounded-2xl bg-white/10 backdrop-blur-xs border border-white/10">
                <span className="text-[10px] font-bold text-terracotta-300 uppercase block">Output</span>
                <span className="text-sm sm:text-base font-extrabold text-white mt-1 block">MODERN MARKET</span>
                <span className="text-[11px] text-stone-400 hidden sm:block mt-0.5">Direct Linkage</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. HOW ARSAI WORKS — 5-STEP JOURNEY */}
      <section className="py-16 sm:py-24 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 border-b border-stone-200/70">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs font-extrabold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200/60">
            {t('Step-by-Step Flow', 'चरणबद्ध प्रक्रिया')}
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-stone-900 mt-3 tracking-tight">
            {t('How ArsAI Works', 'ArsAI कैसे काम करता है')}
          </h2>
          <p className="text-xs sm:text-base text-stone-600 mt-2">
            {t('From a simple workshop voice note to a certified catalog on global storefronts in minutes.', 'कार्यशाला की एक आवाज से लेकर वैश्विक स्टोरफ्रंट पर प्रमाणित कैटलॉग तक।')}
          </p>
        </div>

        {/* 5-Step Process: Horizontal on desktop, Vertical on mobile */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 relative">
          {steps.map((step, idx) => (
            <div
              key={step.num}
              className="p-5 bg-white rounded-3xl border border-stone-200/90 shadow-2xs flex flex-col justify-between relative group hover:border-terracotta-300 hover:shadow-md transition-all duration-300"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[11px] font-black text-stone-400 tracking-wider">
                    {step.num}
                  </span>
                  <div className="p-2 rounded-xl bg-stone-50 border border-stone-100 group-hover:scale-110 transition-transform">
                    {step.icon}
                  </div>
                </div>

                <h3 className="text-sm font-bold text-stone-900 leading-snug">
                  {step.title}
                </h3>
                <p className="text-xs text-stone-500 mt-1.5 leading-relaxed">
                  {step.desc}
                </p>
              </div>

              {idx < steps.length - 1 && (
                <div className="hidden md:block absolute -right-3.5 top-1/2 -translate-y-1/2 z-10 text-stone-300">
                  <ChevronRight className="w-5 h-5" />
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* 5. ARTISAN & BUYER MUTUAL IMPACT */}
      <section className="py-16 sm:py-24 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 border-b border-stone-200/70">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
          {/* Artisan Benefits Column */}
          <div className="bg-white p-7 sm:p-9 rounded-3xl border border-stone-200/80 shadow-2xs space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-terracotta-100/80 text-terracotta-700 flex items-center justify-center font-bold">
                <Users className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[10px] font-extrabold uppercase tracking-wider text-terracotta-700">Creator Empowerment</span>
                <h3 className="text-xl font-extrabold text-stone-900">{t('For Traditional Artisans', 'पारंपरिक कारीगरों के लिए')}</h3>
              </div>
            </div>

            <div className="space-y-4">
              {artisanBenefits.map((b, i) => (
                <div key={i} className="flex items-start gap-3 text-xs sm:text-sm">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-stone-900">{b.title}</h4>
                    <p className="text-stone-500 mt-0.5 leading-relaxed">{b.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Buyer Benefits Column */}
          <div className="bg-white p-7 sm:p-9 rounded-3xl border border-stone-200/80 shadow-2xs space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-emerald-100/80 text-emerald-700 flex items-center justify-center font-bold">
                <ShoppingBag className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[10px] font-extrabold uppercase tracking-wider text-emerald-700">Direct Sourcing</span>
                <h3 className="text-xl font-extrabold text-stone-900">{t('For Discerning Buyers', 'जागरूक खरीदारों के लिए')}</h3>
              </div>
            </div>

            <div className="space-y-4">
              {buyerBenefits.map((b, i) => (
                <div key={i} className="flex items-start gap-3 text-xs sm:text-sm">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-stone-900">{b.title}</h4>
                    <p className="text-stone-500 mt-0.5 leading-relaxed">{b.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 6. HERITAGE + TRUST */}
      <section className="py-16 sm:py-20 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 border-b border-stone-200/70">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-xs font-extrabold uppercase tracking-wider text-amber-700 bg-amber-50 px-3 py-1 rounded-full border border-amber-200/60">
            {t('Heritage & Identity', 'धरोहर एवं विश्वास')}
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 mt-3 tracking-tight">
            {t('Rooted in India’s Rich Craft Legacy', 'भारत की समृद्ध शिल्प परंपरा पर आधारित')}
          </h2>
          <p className="text-xs sm:text-sm text-stone-600 mt-2">
            {t('Inspired by the timeless artistry of the Indus Valley and certified by regional artisan communities.', 'सिंधु घाटी की प्राचीन कला से प्रेरित और क्षेत्रीय कारीगर समुदायों द्वारा समर्पित।')}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
          <div className="p-5 bg-white rounded-3xl border border-stone-200/80 shadow-2xs text-center">
            <div className="w-12 h-12 bg-amber-50 text-amber-700 rounded-2xl flex items-center justify-center mx-auto mb-3">
              <MapPin className="w-6 h-6" />
            </div>
            <h4 className="text-sm font-bold text-stone-900">{t('Informational GI Assistance', 'सूचनात्मक जीआई सहायता')}</h4>
            <p className="text-xs text-stone-500 mt-1.5 leading-relaxed">
              {t('Contextual mapping of recognized heritage clusters (such as Khurja Pottery and Varanasi Handlooms) for educational awareness.', 'मान्यता प्राप्त विरासत क्लस्टरों की शैक्षिक जानकारी।')}
            </p>
          </div>

          <div className="p-5 bg-white rounded-3xl border border-stone-200/80 shadow-2xs text-center">
            <div className="w-12 h-12 bg-blue-50 text-blue-700 rounded-2xl flex items-center justify-center mx-auto mb-3">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h4 className="text-sm font-bold text-stone-900">{t('Pehchan Artisan ID Support', 'पहचान कारीगर आईडी सहयोग')}</h4>
            <p className="text-xs text-stone-500 mt-1.5 leading-relaxed">
              {t('Supports official Ministry of Textiles artisan identification cards to verify creator authenticity.', 'वस्त्र मंत्रालय के पहचान पत्र आधारित प्रामाणिकता।')}
            </p>
          </div>

          <div className="p-5 bg-white rounded-3xl border border-stone-200/80 shadow-2xs text-center">
            <div className="w-12 h-12 bg-emerald-50 text-emerald-700 rounded-2xl flex items-center justify-center mx-auto mb-3">
              <Award className="w-6 h-6" />
            </div>
            <h4 className="text-sm font-bold text-stone-900">{t('Ethical AI Fair Benchmarking', 'नैतिक एआई मूल्य निर्धारण')}</h4>
            <p className="text-xs text-stone-500 mt-1.5 leading-relaxed">
              {t('Algorithm calculates true raw material expense and living hourly artisan wages against retail rates.', 'कच्ची सामग्री और श्रम के आधार पर पारदर्शी मूल्य।')}
            </p>
          </div>
        </div>
      </section>

      {/* 7. FINAL CTA SECTION */}
      <section className="py-20 sm:py-28 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="bg-radial-[at_50%_50%] from-stone-100 to-white rounded-3xl p-10 sm:p-16 border border-stone-200/90 shadow-lg">
          <PriestKingMark className="w-14 h-14 mx-auto mb-5 rounded-2xl shadow-md ring-4 ring-stone-200" />
          <h2 className="text-3xl sm:text-5xl font-black text-stone-900 tracking-tight">
            {t('Bring India’s Craft to the World', 'भारत की हस्तकला को दुनिया तक पहुंचाएं')}
          </h2>
          <p className="mt-3.5 text-sm sm:text-lg text-stone-600 max-w-2xl mx-auto leading-relaxed">
            {t(
              'Explore certified artisan collections, support ethical master craftsmen, and discover unique pieces of living Indian history.',
              'प्रमाणित शिल्प संग्रह देखें, कारीगरों का समर्थन करें और जीवंत भारतीय धरोहर का अनुभव करें।'
            )}
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3.5 max-w-sm mx-auto">
            <button
              type="button"
              onClick={handleGetStarted}
              id="final-cta-get-started"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl bg-stone-900 hover:bg-stone-800 text-white font-bold text-base transition-all shadow-md active:scale-[0.99] group cursor-pointer"
            >
              <span>{t('Get Started', 'शुरू करें')}</span>
              <ArrowRight className="w-4 h-4 text-amber-400 group-hover:translate-x-1 transition-transform" />
            </button>

            <Link
              href="/login"
              id="final-cta-sign-in"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-2xl bg-white hover:bg-stone-100 text-stone-800 border border-stone-300 font-bold text-base transition-all shadow-xs"
            >
              <LogIn className="w-4 h-4 text-stone-500" />
              <span>{t('Sign In', 'साइन इन')}</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Authentication Choice Dialog (Modal for Logged-Out Users) */}
      {showAuthChoice && (
        <div
          role="dialog"
          aria-modal="true"
          id="auth-choice-modal"
          className="fixed inset-0 z-50 bg-stone-900/60 backdrop-blur-xs flex items-center justify-center p-4 animate-in fade-in duration-200"
          onClick={() => setShowAuthChoice(false)}
        >
          <div
            className="bg-white rounded-3xl shadow-2xl border border-stone-200/90 max-w-lg w-full p-6 sm:p-8 relative animate-in zoom-in-95 duration-150"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              type="button"
              id="auth-choice-close-btn"
              onClick={() => setShowAuthChoice(false)}
              className="absolute top-4 right-4 p-2 text-stone-400 hover:text-stone-700 hover:bg-stone-100 rounded-full transition-colors cursor-pointer"
              aria-label="Close dialog"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="text-center mb-6">
              <PriestKingMark className="w-12 h-12 mx-auto mb-3" />
              <h3 className="text-xl sm:text-2xl font-black text-stone-900 tracking-tight">
                {t('Get Started with ArsAI', 'ArsAI के साथ शुरू करें')}
              </h3>
              <p className="text-xs sm:text-sm text-stone-500 mt-1">
                {t(
                  'Join India’s direct artisan-to-market craft network',
                  'भारत के प्रत्यक्ष शिल्पकार-से-बाजार नेटवर्क से जुड़ें'
                )}
              </p>
            </div>

            {/* 2 Choice Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Card 1: Create Account */}
              <div className="p-5 rounded-2xl border border-stone-200 bg-stone-50/70 hover:border-terracotta-400 hover:bg-white transition-all flex flex-col justify-between group shadow-2xs">
                <div>
                  <div className="w-10 h-10 rounded-xl bg-terracotta-100 text-terracotta-700 flex items-center justify-center mb-3">
                    <UserPlus className="w-5 h-5 text-terracotta-600" />
                  </div>
                  <h4 className="font-extrabold text-stone-900 text-sm">
                    {t('Create Account', 'खाता बनाएं')}
                  </h4>
                  <p className="text-xs text-stone-500 mt-1 leading-relaxed">
                    {t('Join ArsAI and create your profile.', 'ArsAI से जुड़ें और अपनी प्रोफ़ाइल बनाएं।')}
                  </p>
                </div>
                <Link
                  href="/signup"
                  id="auth-choice-signup-btn"
                  onClick={() => setShowAuthChoice(false)}
                  className="mt-5 w-full py-2.5 rounded-xl bg-stone-900 hover:bg-stone-800 text-white font-bold text-xs text-center transition-colors shadow-xs"
                >
                  {t('Sign Up', 'साइन अप')}
                </Link>
              </div>

              {/* Card 2: Sign In */}
              <div className="p-5 rounded-2xl border border-stone-200 bg-stone-50/70 hover:border-indigoCraft-400 hover:bg-white transition-all flex flex-col justify-between group shadow-2xs">
                <div>
                  <div className="w-10 h-10 rounded-xl bg-indigoCraft-100 text-indigoCraft-700 flex items-center justify-center mb-3">
                    <LogIn className="w-5 h-5 text-indigoCraft-600" />
                  </div>
                  <h4 className="font-extrabold text-stone-900 text-sm">
                    {t('Sign In', 'साइन इन')}
                  </h4>
                  <p className="text-xs text-stone-500 mt-1 leading-relaxed">
                    {t('Already have an ArsAI account?', 'क्या आपके पास पहले से ArsAI खाता है?')}
                  </p>
                </div>
                <Link
                  href="/login"
                  id="auth-choice-signin-btn"
                  onClick={() => setShowAuthChoice(false)}
                  className="mt-5 w-full py-2.5 rounded-xl bg-white border border-stone-300 hover:bg-stone-100 text-stone-900 font-bold text-xs text-center transition-colors shadow-2xs"
                >
                  {t('Sign In', 'साइन इन')}
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Dedicated Lower Presentation / Exercise Card (Logged-Out Landing Page Only) */}
      {!isAuthenticated && (
        <section id="sih-presentation-box" className="py-12 px-4 bg-stone-100/70 border-t border-stone-200">
          <div className="max-w-2xl mx-auto">
            <div className="p-6 rounded-2xl bg-white border border-stone-200/90 shadow-2xs text-center space-y-2">
              <span className="text-[11px] font-extrabold uppercase tracking-widest text-stone-400">
                Exercise / Presentation
              </span>
              <div className="text-sm font-black text-amber-800 font-mono tracking-wide">
                SIH26090
              </div>
              <p className="text-xs font-semibold text-stone-700 max-w-lg mx-auto leading-relaxed">
                AI-Driven Market Linkage and Smart Cataloging Mobile Application for Marginalized Artisans
              </p>
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
