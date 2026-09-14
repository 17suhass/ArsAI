'use client';

import React, { useState, useEffect, Suspense } from 'react';
import Link from 'next/link';
import { useRouter, useSearchParams } from 'next/navigation';
import { useMockAuth } from '@/context/MockAuthContext';
import { useCart } from '@/context/CartContext';
import { ProductItem } from '@/lib/types';
import { getLocalizedProduct, getLocalizedArtisan } from '@/lib/i18n/productContent';
import { 
  Search, Filter, MapPin, Sparkles, Info, ArrowRight, 
  Eye, CheckCircle2, ShoppingBag, X, Plus, ChevronDown, Star
} from 'lucide-react';

function MarketplaceContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const artisanIdParam = searchParams.get('artisanId');
  const searchParam = searchParams.get('search');
  const { language, t, isAuthenticated } = useMockAuth();
  const { addToCart, items } = useCart();

  const [products, setProducts] = useState<ProductItem[]>([]);
  const [artisansList, setArtisansList] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState('ALL');
  const [selectedRegion, setSelectedRegion] = useState('ALL');
  const [searchQuery, setSearchQuery] = useState(searchParam || '');
  const [categoriesExpanded, setCategoriesExpanded] = useState(false);
  const [finestArtisansOpen, setFinestArtisansOpen] = useState(false);
  const [visibleCount, setVisibleCount] = useState(15);

  useEffect(() => {
    async function loadArtisans() {
      try {
        const res = await fetch('/api/artisans');
        const data = await res.json();
        if (data.success && Array.isArray(data.artisans)) {
          setArtisansList(data.artisans);
        }
      } catch (err) {
        console.error('Failed to load public artisans:', err);
      }
    }
    loadArtisans();
  }, []);

  useEffect(() => {
    setVisibleCount(15);
  }, [selectedCategory, selectedRegion, searchQuery]);

  useEffect(() => {
    if (searchParam !== null) {
      setSearchQuery(searchParam);
    }
  }, [searchParam]);

  useEffect(() => {
    fetchProducts();
  }, [selectedCategory, selectedRegion, artisanIdParam]);

  const fetchProducts = async () => {
    setLoading(true);
    try {
      const params = new URLSearchParams();
      if (selectedCategory && selectedCategory !== 'ALL') params.set('category', selectedCategory);
      if (selectedRegion && selectedRegion !== 'ALL') params.set('region', selectedRegion);
      if (artisanIdParam) params.set('artisanId', artisanIdParam);
      const url = `/api/products${params.toString() ? `?${params.toString()}` : ''}`;
      const res = await fetch(url);
      const data = await res.json();
      if (data.success) {
        setProducts(data.products);
      }
    } catch (err) {
      console.error('Failed to load products', err);
    } finally {
      setLoading(false);
    }
  };

  const categories = [
    { id: 'ALL', labelEn: 'All Crafts', labelHi: 'सभी शिल्प' },
    { id: 'Terracotta Pottery', labelEn: 'Terracotta & Pottery', labelHi: 'टेराकोटा एवं मिट्टी' },
    { id: 'Ceramic Art', labelEn: 'Glazed Ceramics', labelHi: 'ग्लेज्ड सिरेमिक्स' },
    { id: 'Blue Pottery', labelEn: 'Jaipur Blue Pottery', labelHi: 'जयपुर ब्लू पॉटरी' },
    { id: 'Brass Handicraft', labelEn: 'Brass & Bell Metal', labelHi: 'पीतल एवं कांस्य धातु' },
    { id: 'Wood Carving', labelEn: 'Woodwork & Toys', labelHi: 'काष्ठ कला एवं खिलौने' },
    { id: 'Folk Art', labelEn: 'Traditional Folk Art', labelHi: 'पारंपरिक लोक कला' },
    { id: 'Textile and Weaving', labelEn: 'Handloom & Textiles', labelHi: 'हथकरघा एवं वस्त्र' },
    { id: 'Bidriware Metalcraft', labelEn: 'Bidriware Inlay', labelHi: 'बिदरीवेयर चांदी इनले' },
    { id: 'Stone Carving', labelEn: 'Stone & Marble Inlay', labelHi: 'संगमरमर एवं पाषाण शिल्प' },
    { id: 'Natural Fiber Craft', labelEn: 'Cane, Jute & Leather', labelHi: 'बेंत, जूट एवं चमड़ा' },
    { id: 'Tribal Jewelry', labelEn: 'Tribal & Filigree Jewelry', labelHi: 'जनजातीय एवं तारकशी गहने' },
  ];

  // Derive unique craft regions from loaded products for deep filter capability
  const availableRegions = ['ALL', ...Array.from(new Set(products.map(p => p.giCraftRegion || p.artisan?.district || p.artisan?.state).filter(Boolean))) as string[]];

  const filteredProducts = products.filter((p) => {
    let matches = true;
    if (selectedCategory !== 'ALL' && p.craftCategory !== selectedCategory) matches = false;
    if (selectedRegion !== 'ALL') {
      const reg = p.giCraftRegion || p.artisan?.district || p.artisan?.state;
      if (reg !== selectedRegion) matches = false;
    }
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase().trim().replace(/^#/, '');
      const searchMatch = Boolean(
        p.title.toLowerCase().includes(q) ||
        (p.titleHindi && p.titleHindi.toLowerCase().includes(q)) ||
        p.craftCategory.toLowerCase().includes(q) ||
        p.materialsUsed.toLowerCase().includes(q) ||
        (p.tags && p.tags.toLowerCase().includes(q)) ||
        (p.culturalHeritageStory && p.culturalHeritageStory.toLowerCase().includes(q)) ||
        (p.giCraftRegion && p.giCraftRegion.toLowerCase().includes(q)) ||
        (p.artisan?.fullName && p.artisan.fullName.toLowerCase().includes(q)) ||
        (p.artisan?.district && p.artisan.district.toLowerCase().includes(q)) ||
        (p.artisan?.state && p.artisan.state.toLowerCase().includes(q))
      );
      matches = matches && searchMatch;
    }
    return matches;
  });

  const activeArtisan = artisanIdParam && products.length > 0 ? products[0]?.artisan : null;

  return (
    <div className="min-h-screen bg-stone-50 pb-20">
      {/* Marketplace Header & Discovery Banner */}
      <section className={`bg-gradient-to-b from-stone-100 to-stone-50 ${isAuthenticated ? 'pt-6 pb-6' : 'pt-8 pb-10'} px-4 sm:px-6 lg:px-8 border-b border-stone-200/60`}>
        <div className="max-w-7xl mx-auto text-center">
          {/* Landing / Marketing Hero Banner - Only for unauthenticated / logged-out visitors */}
          {!isAuthenticated && (
            <>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-terracotta-100/70 border border-terracotta-200/80 text-terracotta-800 text-xs font-bold mb-3">
                <Sparkles className="w-3.5 h-3.5 text-terracotta-600" />
                <span>{t("Verified Indian Artisans Direct Market Linkage", "सत्यापित भारतीय कारीगर सीधा बाजार संपर्क")}</span>
              </div>
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-stone-900 tracking-tight">
                {t("Handcrafted Heritage Marketplace", "हस्तशिल्प धरोहर बाजार")}
              </h1>
              <p className="text-xs sm:text-sm text-stone-600 max-w-2xl mx-auto mt-2 leading-relaxed">
                {t(
                  "Browse certified handmade crafts directly from master artisan clusters across India with 100% transparent pricing and zero middleman markups.",
                  "भारत के विभिन्न क्लस्टरों से सीधे मास्टर कारीगरों द्वारा हस्तनिर्मित कलाकृतियां खोजें। 100% पारदर्शी मूल्य और शून्य बिचौलिया कमीशन।"
                )}
              </p>
            </>
          )}

          {/* Unified Search Bar */}
          <div className="max-w-2xl mx-auto mt-2">
            <div className="relative">
              <Search aria-hidden="true" className="w-4 h-4 text-stone-400 absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder={t(
                  "Search by craft, material, tag, or region (e.g. Khurja, terracotta pot)...",
                  "शिल्प, सामग्री, टैग या क्षेत्र से खोजें (उदा. खुर्जा, टेराकोटा मटका)..."
                )}
                className="w-full pl-11 pr-10 py-3 bg-white border border-stone-200 rounded-2xl shadow-xs text-xs sm:text-sm text-stone-900 placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-terracotta-500/30 focus:border-terracotta-500 transition-all"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery('')}
                  className="p-1 text-stone-400 hover:text-stone-700 absolute right-3.5 top-1/2 -translate-y-1/2 rounded-full cursor-pointer"
                  aria-label="Clear search"
                >
                  <X aria-hidden="true" className="w-3.5 h-3.5" />
                </button>
              )}
            </div>
          </div>

          {/* Interactive Controls Row: [ Categories ▾ ]  [ ✨ Finest Artisans ▾ ] */}
          <div className="max-w-4xl mx-auto mt-4">
            <div className="flex items-center justify-center gap-2.5 flex-wrap">
              {/* Categories Toggle Button */}
              <button
                type="button"
                id="toggle-categories-accordion-btn"
                onClick={() => {
                  setCategoriesExpanded(!categoriesExpanded);
                  if (finestArtisansOpen) setFinestArtisansOpen(false);
                }}
                className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full border text-xs font-bold transition-all cursor-pointer shadow-2xs ${
                  categoriesExpanded 
                    ? 'bg-stone-900 text-white border-stone-900 shadow-xs' 
                    : 'bg-white text-stone-700 border-stone-200 hover:bg-stone-50'
                }`}
              >
                <span>{t('Categories', 'शिल्प श्रेणियां')} ({categories.length})</span>
                <ChevronDown aria-hidden="true" className={`w-3.5 h-3.5 transition-transform duration-200 ${categoriesExpanded ? 'rotate-180' : ''}`} />
              </button>

              {/* Compact Finest Artisans Discovery Button */}
              <button
                type="button"
                id="toggle-finest-artisans-btn"
                onClick={() => {
                  setFinestArtisansOpen(!finestArtisansOpen);
                  if (categoriesExpanded) setCategoriesExpanded(false);
                }}
                className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full border text-xs font-bold transition-all cursor-pointer shadow-2xs ${
                  finestArtisansOpen 
                    ? 'bg-amber-600 text-white border-amber-600 shadow-xs' 
                    : 'bg-white text-stone-700 border-stone-200 hover:bg-amber-50 hover:border-amber-300'
                }`}
              >
                <Sparkles className={`w-3.5 h-3.5 ${finestArtisansOpen ? 'text-amber-200' : 'text-amber-600'}`} />
                <span>{t('Finest Artisans', 'उत्कृष्ट शिल्पकार')}</span>
                <ChevronDown aria-hidden="true" className={`w-3.5 h-3.5 transition-transform duration-200 ${finestArtisansOpen ? 'rotate-180' : ''}`} />
              </button>

              {selectedCategory !== 'ALL' && (
                <span className="px-2.5 py-1 rounded-full bg-stone-900 text-white text-[11px] font-bold flex items-center gap-1">
                  <span>
                    {(() => {
                      const matched = categories.find(c => c.id === selectedCategory);
                      return matched ? t(matched.labelEn, matched.labelHi) : selectedCategory;
                    })()}
                  </span>
                  <button
                    type="button"
                    onClick={() => setSelectedCategory('ALL')}
                    className="hover:text-stone-300 ml-0.5 cursor-pointer"
                  >
                    ×
                  </button>
                </span>
              )}

              {artisanIdParam && (
                <span className="px-2.5 py-1 rounded-full bg-amber-600 text-white text-[11px] font-bold flex items-center gap-1">
                  <span>{activeArtisan?.fullName || t('Filtered by Artisan', 'कारीगर अनुसार फ़िल्टर')}</span>
                  <button
                    type="button"
                    onClick={() => router.push('/marketplace')}
                    className="hover:text-amber-200 ml-0.5 cursor-pointer"
                    title={t('Clear Artisan Filter', 'कारीगर फ़िल्टर हटाएं')}
                  >
                    ×
                  </button>
                </span>
              )}
            </div>

            {/* Expanded Categories Area */}
            {categoriesExpanded && (
              <div className="mt-3 flex flex-wrap items-center justify-center gap-1.5 p-3.5 bg-white/90 backdrop-blur-xs rounded-2xl border border-stone-200/80 shadow-xs animate-in fade-in zoom-in-95 duration-200">
                {categories.map((c) => {
                  const isSelected = selectedCategory === c.id;
                  return (
                    <button
                      key={c.id}
                      onClick={() => setSelectedCategory(c.id)}
                      className={`px-3 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                        isSelected
                          ? 'bg-stone-900 text-white shadow-sm'
                          : 'bg-white text-stone-600 border border-stone-200 hover:bg-stone-100 hover:text-stone-900'
                      }`}
                    >
                      {t(c.labelEn, c.labelHi)}
                    </button>
                  );
                })}
              </div>
            )}

            {/* Clean Same-Page Expandable Discovery Panel for Finest Artisans */}
            {finestArtisansOpen && (
              <div className="mt-3 text-left p-4 sm:p-5 bg-white rounded-3xl border border-amber-200/80 shadow-md animate-in fade-in zoom-in-95 duration-200">
                <div className="flex items-center justify-between pb-3 mb-3 border-b border-stone-100">
                  <div className="flex items-center gap-2">
                    <span className="p-1.5 bg-amber-100 text-amber-800 rounded-xl">
                      <Sparkles className="w-4 h-4" />
                    </span>
                    <div>
                      <h2 className="text-sm font-bold text-stone-900">
                        {t('Finest Artisans', 'उत्कृष्ट शिल्पकार')}
                      </h2>
                      <p className="text-[11px] text-stone-500">
                        {t('Discover top-rated master craftspeople across Indian regional clusters', 'भारतीय क्षेत्रीय क्लस्टरों से शीर्ष रेटेड मास्टर शिल्पकारों को खोजें')}
                      </p>
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={() => setFinestArtisansOpen(false)}
                    className="p-1.5 text-stone-400 hover:text-stone-700 hover:bg-stone-100 rounded-full transition-colors cursor-pointer"
                    aria-label={t('Close', 'बंद करें')}
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>

                {/* Horizontal Scroll / Compact List of Finest Artisans */}
                <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-thin scrollbar-thumb-stone-200">
                  {[...artisansList]
                    .sort((a, b) => (b.stats?.averageRating || 0) - (a.stats?.averageRating || 0))
                    .map((art) => {
                      const isSelected = artisanIdParam === art.id;
                      return (
                        <div
                          key={art.id}
                          className={`min-w-[220px] max-w-[220px] sm:min-w-[240px] sm:max-w-[240px] p-3 rounded-2xl border transition-all flex flex-col justify-between ${
                            isSelected
                              ? 'bg-amber-50/70 border-amber-400 ring-1 ring-amber-300'
                              : 'bg-stone-50/80 hover:bg-stone-100/90 border-stone-200'
                          }`}
                        >
                          <div>
                            <div className="flex items-start gap-2.5">
                              <img
                                src={art.profileImage || 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120'}
                                alt={art.fullName}
                                className="w-10 h-10 rounded-xl object-cover ring-1 ring-stone-200 shrink-0"
                              />
                              <div className="flex-1 min-w-0">
                                <h3 className="font-extrabold text-xs text-stone-900 truncate">
                                  {art.fullName}
                                </h3>
                                <p className="text-[10px] text-stone-500 font-medium truncate">
                                  {art.username}
                                </p>
                                <p className="text-[10px] text-stone-500 truncate flex items-center gap-1 mt-0.5">
                                  <MapPin className="w-2.5 h-2.5 text-stone-400 shrink-0" />
                                  <span>{art.state}</span>
                                </p>
                              </div>
                            </div>

                            <p className="text-[11px] text-stone-700 font-semibold truncate mt-2">
                              {art.primaryCraft}
                            </p>

                            <div className="flex items-center justify-between text-[11px] mt-1.5 pt-1.5 border-t border-stone-200/60">
                              <span className="font-bold text-amber-700 flex items-center gap-1">
                                <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
                                <span>{art.stats?.averageRating || 0}★</span>
                                <span className="text-[10px] text-stone-500 font-normal">({art.stats?.totalReviews || 0})</span>
                              </span>
                              {art.isPehchanVerified && (
                                <span className="text-[9px] bg-blue-50 text-blue-700 border border-blue-200 px-1.5 py-0.5 rounded font-bold">
                                  Pehchan ✓
                                </span>
                              )}
                            </div>
                          </div>

                          <div className="flex items-center gap-1.5 mt-3 pt-2 border-t border-stone-200/60">
                            <Link
                              href={`/artisan/${art.id}`}
                              className="flex-1 py-1.5 text-center rounded-xl bg-stone-900 hover:bg-stone-800 text-white text-[11px] font-bold transition-colors"
                            >
                              {t('View Profile', 'प्रोफ़ाइल देखें')}
                            </Link>
                            <button
                              type="button"
                              onClick={() => {
                                router.push(`/marketplace?artisanId=${art.id}`);
                                setFinestArtisansOpen(false);
                              }}
                              className="px-2.5 py-1.5 rounded-xl border border-stone-200 hover:bg-white text-stone-700 text-[11px] font-semibold transition-colors cursor-pointer"
                              title={t('Filter by Artisan', 'कारीगर अनुसार फ़िल्टर करें')}
                            >
                              {art.stats?.totalProducts || 0} {t('Crafts', 'शिल्प')}
                            </button>
                          </div>
                        </div>
                      );
                    })}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Main Products Grid Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">
        {/* Artisan Storefront Banner (When filtered by Artisan) */}
        {artisanIdParam && (
          <div className="bg-gradient-to-r from-amber-50/80 via-stone-50 to-orange-50/80 border border-amber-200/90 rounded-3xl p-5 mb-8 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-sm">
            <div className="flex items-center gap-3.5 text-center sm:text-left">
              <img
                src={activeArtisan?.profileImage || 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200'}
                alt={activeArtisan?.fullName || 'Artisan'}
                className="w-12 h-12 rounded-full object-cover border-2 border-amber-300 shadow-sm shrink-0"
              />
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-amber-700 bg-amber-100/80 px-2.5 py-0.5 rounded-full">
                    {t('Artisan Storefront', 'कारीगर स्टोरफ्रंट')}
                  </span>
                  {activeArtisan?.isPehchanVerified && (
                    <span className="text-[10px] bg-blue-50 text-blue-700 border border-blue-200 px-2 py-0.5 rounded font-bold">
                      Pehchan Verified ✓
                    </span>
                  )}
                </div>
                <h2 className="text-lg sm:text-xl font-extrabold text-stone-900 mt-1">
                  {activeArtisan
                    ? t(`Showing crafts by ${activeArtisan.fullName}`, `${activeArtisan.fullName} की कृतियां`)
                    : t('Showing Crafts by Artisan', 'कारीगर द्वारा बनाई गई कृतियां')}
                </h2>
                {activeArtisan && (
                  <p className="text-xs text-stone-500 flex items-center gap-1.5 mt-0.5">
                    <MapPin className="w-3 h-3 text-terracotta-600 shrink-0" />
                    <span>{activeArtisan.district}, {activeArtisan.state}</span>
                  </p>
                )}
              </div>
            </div>
            <div className="flex items-center gap-2">
              {activeArtisan && (
                <Link
                  href={`/artisan/${activeArtisan.id}`}
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-stone-900 text-white hover:bg-stone-800 text-xs font-bold transition-all shadow-sm shrink-0"
                >
                  <span>{t('View Full Profile', 'पूरा प्रोफ़ाइल देखें')}</span>
                  <span>→</span>
                </Link>
              )}
              <button
                onClick={() => router.push('/marketplace')}
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-white border border-stone-300 hover:border-stone-400 text-stone-700 hover:text-stone-900 text-xs font-bold transition-all shadow-sm shrink-0 cursor-pointer"
              >
                <X className="w-3.5 h-3.5 text-stone-500" />
                <span>{t('Clear Filter', 'फ़िल्टर हटाएं')}</span>
              </button>
            </div>
          </div>
        )}

        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-xl font-bold text-stone-900">
              {activeArtisan
                ? t(`Crafts by ${activeArtisan.fullName}`, `${activeArtisan.fullName} की कृतियां`)
                : t('Verified Artisan Creations', 'सत्यापित कारीगर कृतियां')}
            </h2>
            <p className="text-xs text-stone-500 mt-0.5">
              {t('Showing', 'दिखाए जा रहे हैं')} {filteredProducts.length} {t('artisan catalog items with direct artisan linkage', 'कारीगर सूची उत्पाद सीधे कारीगर संपर्क के साथ')}
            </p>
          </div>
          <span className="text-xs font-semibold px-2.5 py-1 bg-amber-50 text-amber-800 border border-amber-200/80 rounded-lg flex items-center gap-1.5">
            <Info aria-hidden="true" className="w-3.5 h-3.5 text-amber-600 shrink-0" />
            <span>{t('Informational GI Assistance', 'सूचनात्मक जीआई सहायता')}</span>
          </span>
        </div>

        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-pulse">
            {[1, 2, 3].map((i) => (
              <div key={i} className="h-96 bg-stone-200/70 rounded-3xl" />
            ))}
          </div>
        ) : filteredProducts.length === 0 ? (
          <div className="text-center py-16 bg-white rounded-3xl border border-dashed border-stone-300 p-8">
            <ShoppingBag className="w-12 h-12 text-stone-400 mx-auto mb-3" />
            <p className="text-stone-700 font-bold">{t('No crafts match your filter', 'कोई शिल्प नहीं मिला')}</p>
            <button
              onClick={() => {
                setSelectedCategory('ALL');
                setSelectedRegion('ALL');
                setSearchQuery('');
                if (artisanIdParam) router.push('/marketplace');
              }}
              className="mt-3 text-xs text-terracotta-600 font-bold underline cursor-pointer"
            >
              {t('Reset all filters', 'फ़िल्टर हटाएं')}
            </button>
          </div>
        ) : (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProducts.slice(0, visibleCount).map((product) => {
              const loc = getLocalizedProduct(product, language);
              const isItemInCart = items.some((i) => i.product.id === product.id);

              return (
                <div
                  key={product.id}
                  onClick={() => router.push(`/product/${product.id}`)}
                  className="bg-white rounded-3xl overflow-hidden border border-stone-200/80 hover:border-amber-300 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col group cursor-pointer"
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      router.push(`/product/${product.id}`);
                    }
                  }}
                >
                  {/* Image Container with Badges */}
                  <div className="relative aspect-4/3 overflow-hidden bg-stone-100">
                    <img
                      src={product.primaryImageUrl}
                      alt={loc.title}
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?w=800&auto=format&fit=crop&q=80';
                      }}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                    />

                    {/* Craft Category Badge */}
                    <div
                      onClick={(e) => e.stopPropagation()}
                      className="absolute top-3 left-3 flex flex-col gap-1 cursor-default select-none"
                    >
                      <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-stone-900/80 backdrop-blur-md text-white">
                        {loc.craftCategory}
                      </span>
                    </div>

                    {/* AI Quality Score Badge */}
                    {product.aiQualityScore && (
                      <div
                        onClick={(e) => e.stopPropagation()}
                        className="absolute top-3 right-3 bg-emerald-600/90 backdrop-blur-md text-white px-2 py-0.5 rounded-full text-[10px] font-bold flex items-center gap-1 shadow-sm cursor-default select-none"
                      >
                        <Sparkles aria-hidden="true" className="w-2.5 h-2.5" />
                        <span>AI Score {product.aiQualityScore}%</span>
                      </div>
                    )}

                    {/* Informational GI Tag Assistance Badge */}
                    {loc.giCraftRegion && (
                      <div
                        onClick={(e) => e.stopPropagation()}
                        className="absolute bottom-3 left-3 right-3 bg-white/95 backdrop-blur-md px-2.5 py-1.5 rounded-xl border border-stone-200/80 text-[11px] text-stone-700 flex items-center justify-between shadow-sm cursor-default select-none"
                      >
                        <span className="font-semibold flex items-center gap-1 text-terracotta-700">
                          <MapPin aria-hidden="true" className="w-3 h-3 text-terracotta-600 shrink-0" />
                          <span className="truncate">{loc.giCraftRegion}</span>
                        </span>
                        <span className="text-[9px] font-bold text-stone-400 bg-stone-100 px-1.5 py-0.5 rounded uppercase shrink-0">
                          {t('Informational', 'सूचनात्मक')}
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Content Body */}
                  <div className="p-5 flex-1 flex flex-col justify-between">
                    <div>
                      {/* Bilingual Title */}
                      <Link
                        href={`/product/${product.id}`}
                        onClick={(e) => e.stopPropagation()}
                        className="block group"
                      >
                        <h3 className="font-bold text-base text-stone-900 line-clamp-1 group-hover:text-terracotta-600 transition-colors">
                          {loc.title}
                        </h3>
                      </Link>
                      {loc.secondaryTitle && (
                        <p className="text-xs text-stone-500 font-medium mt-0.5">
                          {loc.secondaryTitle}
                        </p>
                      )}

                      {/* Cultural Heritage Story snippet */}
                      <div
                        onClick={(e) => e.stopPropagation()}
                        onWheel={(e) => e.stopPropagation()}
                        className="mt-2 max-h-20 overflow-y-auto pr-1.5 text-xs text-stone-600 leading-relaxed italic bg-stone-50 p-2.5 rounded-xl border border-stone-100 scrollbar-thin cursor-text select-text"
                      >
                        "{loc.culturalHeritageStory || loc.description}"
                      </div>

                      {/* Materials & Specs */}
                      <div
                        onClick={(e) => e.stopPropagation()}
                        className="mt-3 flex flex-wrap gap-1.5 text-[11px] text-stone-600 cursor-default"
                      >
                        <span className="px-2 py-0.5 bg-stone-100 rounded text-stone-700 font-medium truncate max-w-full">
                          🌱 {loc.materialsUsed}
                        </span>
                        {(loc.dimensions || product.dimensions) && (
                          <span className="px-2 py-0.5 bg-stone-100 rounded text-stone-700 font-medium">
                            📏 {loc.dimensions || product.dimensions}
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Pricing & Artisan Attribution */}
                    <div className="mt-5 pt-4 border-t border-stone-100">
                      {/* Price Display */}
                      <div className="flex items-baseline justify-between mb-3">
                        <div>
                          <div className="text-xs text-stone-400 font-medium">
                            {t('Direct Artisan Price', 'कारीगर मूल्य')}
                          </div>
                          <div className="text-xl font-extrabold text-stone-900">
                            ₹{product.finalListingPrice.toLocaleString('en-IN')}
                          </div>
                        </div>

                        {/* Retail Benchmark */}
                        <div
                          onClick={(e) => e.stopPropagation()}
                          className="text-right cursor-default"
                        >
                          <div className="text-[10px] text-emerald-700 font-semibold bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                            ₹{product.suggestedRetailMin}–₹{product.suggestedRetailMax}
                          </div>
                          <div className="text-[10px] text-stone-400 mt-0.5">
                            {t('Zero Middleman Markup', 'शून्य बिचौलिया कमीशन')}
                          </div>
                        </div>
                      </div>

                      {/* Artisan Attribution */}
                      <div
                        onClick={(e) => {
                          e.stopPropagation();
                          if (product.artisan?.id) {
                            router.push(`/artisan/${product.artisan.id}`);
                          }
                        }}
                        className="flex items-center gap-2.5 py-2 mb-3 bg-stone-50 hover:bg-amber-50/80 px-2.5 rounded-xl border border-transparent hover:border-amber-200/80 transition-all cursor-pointer group/artisan"
                        title={t(`View profile by ${product.artisan?.fullName || 'artisan'}`, `${product.artisan?.fullName || 'कारीगर'} का प्रोफ़ाइल देखें`)}
                      >
                        <img
                          src={product.artisan?.profileImage || 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100'}
                          alt={product.artisan?.fullName}
                          className="w-7 h-7 rounded-full object-cover group-hover/artisan:ring-2 group-hover/artisan:ring-amber-400 transition-all shrink-0"
                        />
                        <div className="text-left flex-1 min-w-0">
                          <div className="text-xs font-bold text-stone-800 group-hover/artisan:text-terracotta-700 transition-colors truncate flex items-center gap-1">
                            <span>{product.artisan?.fullName}</span>
                            <ArrowRight aria-hidden="true" className="w-2.5 h-2.5 opacity-0 group-hover/artisan:opacity-100 transition-opacity text-terracotta-600 shrink-0" />
                          </div>
                          <div className="text-[10px] text-stone-500 truncate flex items-center gap-1">
                            <MapPin aria-hidden="true" className="w-2.5 h-2.5 shrink-0" />
                            <span>{product.artisan?.district}, {product.artisan?.state}</span>
                          </div>
                        </div>
                        {product.artisan?.isPehchanVerified && (
                          <span className="text-[9px] bg-blue-50 text-blue-700 border border-blue-200 px-1.5 py-0.5 rounded font-bold shrink-0">
                            Pehchan Verified ✓
                          </span>
                        )}
                      </div>

                      {/* Discovery Card Actions: View Details & Add to Cart (No WhatsApp/UPI on cards) */}
                      <div className="pt-2 flex items-center gap-2">
                        <Link
                          href={`/product/${product.id}`}
                          onClick={(e) => e.stopPropagation()}
                          className="flex-1 inline-flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-stone-100 hover:bg-stone-200 text-stone-800 text-xs font-bold transition-colors text-center"
                        >
                          <Eye aria-hidden="true" className="w-3.5 h-3.5 text-stone-600 shrink-0" />
                          <span>{t('View Details', 'विवरण देखें')}</span>
                        </Link>

                        <button
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation();
                            addToCart(product, 1);
                          }}
                          className={`inline-flex items-center justify-center gap-1.5 py-2.5 px-3.5 rounded-xl text-xs font-bold transition-all shadow-xs cursor-pointer ${
                            isItemInCart
                              ? 'bg-emerald-600 hover:bg-emerald-700 text-white'
                              : 'bg-stone-900 hover:bg-stone-800 text-white'
                          }`}
                        >
                          {isItemInCart ? (
                            <>
                              <CheckCircle2 aria-hidden="true" className="w-3.5 h-3.5 text-emerald-200 shrink-0" />
                              <span>{t('In Cart', 'टोकरी में')}</span>
                            </>
                          ) : (
                            <>
                              <Plus aria-hidden="true" className="w-3.5 h-3.5 text-amber-300 shrink-0" />
                              <span>{t('Add to Cart', 'जोड़ें')}</span>
                            </>
                          )}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Load More Crafts Pagination */}
          {filteredProducts.length > visibleCount && (
            <div className="mt-12 text-center">
              <p className="text-xs text-stone-500 font-medium mb-3">
                {t('Showing', 'ತೋರಿಸಲಾಗುತ್ತಿದೆ')} {Math.min(visibleCount, filteredProducts.length)} {t('of', 'ರ')} {filteredProducts.length} {t('artisan catalog items', 'ಕುಶಲಕರ್ಮಿ ಕ್ಯಾಟಲಾಗ್ ವಸ್ತುಗಳು')}
              </p>
              <button
                type="button"
                id="marketplace-load-more-btn"
                onClick={() => setVisibleCount((prev) => prev + 15)}
                className="px-6 py-3 rounded-2xl bg-white border border-stone-300 hover:border-stone-400 text-stone-800 font-bold text-xs shadow-sm hover:shadow-md transition-all active:scale-[0.98] cursor-pointer inline-flex items-center gap-2"
              >
                <span>{t('Load More Crafts', 'और शिल्प लोड करें')}</span>
                <span>▾</span>
              </button>
            </div>
          )}
        </>
      )}
      </section>

      {/* Curated Featured Artisans Section (Positioned LOWER in hierarchy, NOT below search bar) */}
      {artisansList.length > 0 && !artisanIdParam && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 pt-12 border-t border-stone-200/80">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6">
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-stone-100 text-stone-700 text-xs font-bold mb-1">
                <Sparkles className="w-3 h-3 text-amber-600" />
                <span>{t('Featured Artisans', 'विशेष शिल्पकार')}</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-extrabold text-stone-900">
                {t("Master Artisans Across India's Heritage Clusters", 'भारत के प्रमुख क्लस्टरों से मास्टर शिल्पकार')}
              </h2>
              <p className="text-xs text-stone-500 mt-1">
                {t('Generational custodians of indigenous crafts with direct peer-reviewed customer feedback', 'प्रत्यक्ष ग्राहक समीक्षा एवं पीढ़ियों की विरासत के साथ स्वदेशी शिल्पी')}
              </p>
            </div>
            <button
              type="button"
              onClick={() => {
                setFinestArtisansOpen(true);
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="text-xs font-bold text-amber-700 hover:text-amber-800 hover:underline flex items-center gap-1 cursor-pointer"
            >
              <span>{t('Discover All Master Artisans', 'सभी मास्टर कारीगर देखें')}</span>
              <span>→</span>
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {artisansList.slice(0, 4).map((art) => (
              <div
                key={art.id}
                className="bg-white rounded-2xl p-4 border border-stone-200/80 shadow-xs hover:shadow-md transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-start gap-3">
                    <img
                      src={art.profileImage || 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120'}
                      alt={art.fullName}
                      className="w-12 h-12 rounded-2xl object-cover ring-1 ring-stone-200 group-hover:ring-amber-400 transition-all shrink-0"
                    />
                    <div className="flex-1 min-w-0">
                      <h3 className="font-extrabold text-sm text-stone-900 group-hover:text-amber-700 transition-colors truncate">
                        {art.fullName}
                      </h3>
                      <p className="text-[11px] text-stone-500 font-medium truncate">
                        {art.username}
                      </p>
                      <p className="text-[10px] text-stone-500 truncate flex items-center gap-1 mt-0.5">
                        <MapPin className="w-2.5 h-2.5 text-stone-400 shrink-0" />
                        <span>{art.district}, {art.state}</span>
                      </p>
                    </div>
                  </div>

                  <p className="text-xs text-stone-700 font-semibold mt-3 line-clamp-1">
                    {art.primaryCraft}
                  </p>

                  <div className="flex items-center justify-between text-xs mt-2 pt-2 border-t border-stone-100">
                    <span className="font-bold text-amber-700 flex items-center gap-1">
                      <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
                      <span>{art.stats?.averageRating || 0}★</span>
                      <span className="text-[10px] text-stone-400 font-normal">({art.stats?.totalReviews || 0})</span>
                    </span>
                    {art.isPehchanVerified && (
                      <span className="text-[9px] bg-blue-50 text-blue-700 border border-blue-200 px-1.5 py-0.5 rounded font-bold">
                        Pehchan Verified ✓
                      </span>
                    )}
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-stone-100 flex items-center gap-2">
                  <Link
                    href={`/artisan/${art.id}`}
                    className="flex-1 text-center py-2 rounded-xl bg-stone-900 hover:bg-stone-800 text-white text-xs font-bold transition-colors"
                  >
                    {t('View Profile', 'प्रोफ़ाइल देखें')}
                  </Link>
                  <button
                    type="button"
                    onClick={() => router.push(`/marketplace?artisanId=${art.id}`)}
                    className="px-3 py-2 rounded-xl bg-stone-100 hover:bg-stone-200 text-stone-800 text-xs font-bold transition-colors cursor-pointer"
                  >
                    {art.stats?.totalProducts || 0} {t('Crafts', 'शिल्प')}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}

export default function MarketplacePage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-stone-50" />}>
      <MarketplaceContent />
    </Suspense>
  );
}
