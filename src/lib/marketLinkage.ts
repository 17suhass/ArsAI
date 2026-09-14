/**
 * Smart Market Linkage & Marketplace Readiness Engine (Phase 5)
 * 
 * Deterministic, rule-based market segment recommendations and listing readiness evaluation.
 * Evaluates craft category, pricing tiers, natural materials, dimensions, and cultural story.
 */

export interface MarketChannel {
  id: string;
  nameEn: string;
  nameHi: string;
  badge: string;
  descriptionEn: string;
  descriptionHi: string;
}

export interface ReadinessCheckItem {
  id: string;
  labelEn: string;
  labelHi: string;
  isComplete: boolean;
  tipEn: string;
  tipHi: string;
}

export interface MarketplaceReadinessResult {
  score: number; // 0 to 10
  totalChecks: number;
  percentage: number;
  statusLabelEn: string;
  statusLabelHi: string;
  items: ReadinessCheckItem[];
}

/**
 * Recommends 2-4 optimal market channels for a product based on its
 * craft category, price points, materials, and artisan lineage.
 */
export function getRecommendedMarketChannels(product: {
  craftCategory?: string | null;
  finalListingPrice?: number | null;
  suggestedRetailMax?: number | null;
  materialsUsed?: string | null;
  dimensions?: string | null;
  culturalHeritageStory?: string | null;
  aiQualityScore?: number | null;
}): MarketChannel[] {
  const channels: MarketChannel[] = [];
  const category = (product.craftCategory || '').toLowerCase();
  const materials = (product.materialsUsed || '').toLowerCase();
  const price = product.finalListingPrice || 0;
  const quality = product.aiQualityScore || 80;

  // 1. Boutique / Designer Retail
  if (
    price >= 500 ||
    category.includes('ceramic') ||
    category.includes('textile') ||
    category.includes('brass') ||
    materials.includes('glaze') ||
    materials.includes('silk')
  ) {
    channels.push({
      id: 'boutique_designer',
      nameEn: 'Boutique & Designer Decor',
      nameHi: 'बुटीक एवं डिज़ाइनर स्टोर्स',
      badge: 'Boutique',
      descriptionEn: 'Handcrafted finish and artisanal aesthetic match premium urban lifestyle stores.',
      descriptionHi: 'हस्तनिर्मित शिल्प और कारीगरी शहरी बुटीक स्टोर्स के लिए अत्यंत उपयुक्त है।'
    });
  }

  // 2. Corporate Gifting & Mementos
  if (
    (price >= 300 && price <= 2000) ||
    category.includes('pottery') ||
    category.includes('wood') ||
    category.includes('brass') ||
    materials.includes('brass') ||
    materials.includes('terracotta')
  ) {
    channels.push({
      id: 'corporate_gifting',
      nameEn: 'Corporate Gifting & Mementos',
      nameHi: 'कॉर्पोरेट उपहार एवं स्मृति चिन्ह',
      badge: 'Corporate Bulk',
      descriptionEn: 'Eco-friendly cultural utility makes it highly desirable for sustainable corporate gift packages.',
      descriptionHi: 'पर्यावरण-अनुकूल और पारंपरिक उपयोगिता इसे कॉर्पोरेट उपहारों के लिए आदर्श बनाती है।'
    });
  }

  // 3. Hospitality & Eco-Resorts
  if (
    category.includes('pottery') ||
    category.includes('ceramic') ||
    materials.includes('clay') ||
    materials.includes('terracotta') ||
    materials.includes('silt') ||
    materials.includes('wood')
  ) {
    channels.push({
      id: 'hospitality_resorts',
      nameEn: 'Hospitality & Eco-Hotels',
      nameHi: 'होटल एवं ईको-रिसॉर्ट्स',
      badge: 'Hospitality',
      descriptionEn: 'Traditional food-grade serveware and earthen ambiance are in high demand across heritage retreats.',
      descriptionHi: 'हेरिटेज होटलों और रिसॉर्ट्स में प्रामाणिक मिट्टी और हस्तशिल्प की भारी मांग है।'
    });
  }

  // 4. Online Marketplace & D2C
  if (
    price <= 1500 ||
    product.dimensions ||
    category.includes('pottery') ||
    category.includes('ceramic') ||
    category.includes('textile')
  ) {
    channels.push({
      id: 'online_d2c',
      nameEn: 'Online Direct-to-Consumer',
      nameHi: 'ऑनलाइन सीधा बाज़ार (D2C)',
      badge: 'Online D2C',
      descriptionEn: 'Standard dimensions and direct pricing provide competitive edge on national digital craft portals.',
      descriptionHi: 'मानक आकार और सीधा कारीगर मूल्य राष्ट्रीय ई-कॉमर्स पोर्टल पर उच्च मांग प्रदान करता है।'
    });
  }

  // 5. Export / International Exhibitions
  if (
    quality >= 85 &&
    (product.culturalHeritageStory || price >= 700)
  ) {
    channels.push({
      id: 'export_exhibitions',
      nameEn: 'Export & Cultural Exhibitions',
      nameHi: 'निर्यात एवं शिल्प प्रदर्शनियां',
      badge: 'Export Ready',
      descriptionEn: 'Documented GI heritage and high AI completeness score attract international ethnic decor buyers.',
      descriptionHi: 'सत्यापित सांस्कृतिक कहानी और उच्च गुणवत्ता अंतरराष्ट्रीय खरीदारों को आकर्षित करती है।'
    });
  }

  // Fallback if none matched
  if (channels.length === 0) {
    channels.push({
      id: 'local_retail',
      nameEn: 'Local Craft Haats & Retail',
      nameHi: 'स्थानीय शिल्प बाज़ार एवं हाट',
      badge: 'Local Retail',
      descriptionEn: 'Accessible direct artisan pricing drives reliable local retail demand.',
      descriptionHi: 'सुलभ प्रत्यक्ष कारीगर मूल्य स्थानीय मांग को बढ़ावा देता है।'
    });
  }

  // Return up to 3 most relevant channels
  return channels.slice(0, 3);
}

/**
 * Computes a 10-point Marketplace Readiness checklist for a product.
 */
export function getMarketplaceReadiness(product: {
  title?: string | null;
  titleHindi?: string | null;
  descriptionEnglish?: string | null;
  primaryImageUrl?: string | null;
  materialsUsed?: string | null;
  dimensions?: string | null;
  finalListingPrice?: number | null;
  craftCategory?: string | null;
  giCraftRegion?: string | null;
  culturalHeritageStory?: string | null;
  aiQualityScore?: number | null;
}): MarketplaceReadinessResult {
  const items: ReadinessCheckItem[] = [
    {
      id: 'bilingual_title',
      labelEn: 'Bilingual Product Title',
      labelHi: 'द्विभाषी शीर्षक (अंग्रेजी + हिंदी)',
      isComplete: !!(product.title && product.title.trim().length > 3 && product.titleHindi),
      tipEn: 'Add both English and Hindi titles for pan-India reach.',
      tipHi: 'अखिल भारतीय पहुंच के लिए अंग्रेजी और हिंदी दोनों शीर्षक जोड़ें।'
    },
    {
      id: 'detailed_description',
      labelEn: 'Craft Story & Description',
      labelHi: 'विस्तृत शिल्प विवरण',
      isComplete: !!(product.descriptionEnglish && product.descriptionEnglish.length >= 40),
      tipEn: 'Detailed descriptions build buyer trust and boost discovery.',
      tipHi: 'विस्तृत विवरण से खरीदारों का विश्वास बढ़ता है।'
    },
    {
      id: 'product_photo',
      labelEn: 'Workshop / Product Photography',
      labelHi: 'स्पष्ट उत्पाद तस्वीर',
      isComplete: !!(product.primaryImageUrl && product.primaryImageUrl.startsWith('http')),
      tipEn: 'Upload clear, well-lit photos showing craft texture.',
      tipHi: 'शिल्प की बनावट दिखाने वाली स्पष्ट तस्वीरें अपलोड करें।'
    },
    {
      id: 'materials_specified',
      labelEn: 'Natural Materials Specified',
      labelHi: 'प्राकृतिक सामग्री का उल्लेख',
      isComplete: !!(product.materialsUsed && product.materialsUsed.trim().length > 3),
      tipEn: 'Eco-conscious buyers look for natural, authentic materials.',
      tipHi: 'पर्यावरण-जागरूक खरीदार प्राकृतिक सामग्री की पुष्टि चाहते हैं।'
    },
    {
      id: 'dimensions_provided',
      labelEn: 'Dimensions & Sizing',
      labelHi: 'माप एवं आयाम (Dimensions)',
      isComplete: !!(product.dimensions && product.dimensions.trim().length > 2),
      tipEn: 'Providing dimensions reduces buyer uncertainty for home decor.',
      tipHi: 'माप दर्ज करने से खरीदार आसानी से निर्णय ले पाते हैं।'
    },
    {
      id: 'fair_price_confirmed',
      labelEn: 'Fair Artisan Price Confirmed',
      labelHi: 'उचित कारीगर मूल्य स्वीकृत',
      isComplete: !!(product.finalListingPrice && product.finalListingPrice > 0),
      tipEn: 'Confirm fair listing price using the 3-step assistant.',
      tipHi: '3-चरणीय सहायक द्वारा निष्पक्ष मूल्य की पुष्टि करें।'
    },
    {
      id: 'craft_category',
      labelEn: 'Standard Craft Category',
      labelHi: 'मानक शिल्प श्रेणी',
      isComplete: !!(product.craftCategory && product.craftCategory.trim().length > 2),
      tipEn: 'Accurate categorization places craft in targeted search filters.',
      tipHi: 'सटीक श्रेणी से खरीदार आसानी से खोज सकते हैं।'
    },
    {
      id: 'regional_gi_context',
      labelEn: 'Regional GI / Heritage Context',
      labelHi: 'क्षेत्रीय जीआई / विरासत संदर्भ',
      isComplete: !!(product.giCraftRegion && product.giCraftRegion.trim().length > 2),
      tipEn: 'Highlight traditional cluster identity (e.g. Khurja Pottery).',
      tipHi: 'पारंपरिक शिल्प केंद्र (जैसे खुर्जा मिट्टी) का उल्लेख करें।'
    },
    {
      id: 'cultural_story',
      labelEn: 'Artisan Generational Lineage',
      labelHi: 'पारंपरिक विरासत कथा',
      isComplete: !!(product.culturalHeritageStory && product.culturalHeritageStory.trim().length > 20),
      tipEn: 'Cultural stories give handmade crafts unmatched emotional value.',
      tipHi: 'सांस्कृतिक कथाएं हस्तनिर्मित कला को भावनात्मक मूल्य देती हैं।'
    },
    {
      id: 'ai_quality_benchmark',
      labelEn: 'AI Catalog Completeness ≥ 80%',
      labelHi: 'AI कैटलॉग पूर्णता ≥ 80%',
      isComplete: !!(product.aiQualityScore && product.aiQualityScore >= 80),
      tipEn: 'High catalog score ensures visibility across premium buyer channels.',
      tipHi: 'उच्च स्कोर प्रीमियम खरीदारों के बीच बेहतर दृश्यता सुनिश्चित करता है।'
    }
  ];

  const completedCount = items.filter(item => item.isComplete).length;
  const percentage = Math.round((completedCount / items.length) * 100);

  let statusLabelEn = 'Needs Information';
  let statusLabelHi = 'अधिक जानकारी आवश्यक';

  if (completedCount >= 8) {
    statusLabelEn = 'Market Ready (High Visibility)';
    statusLabelHi = 'बाज़ार तैयार (उच्च दृश्यता)';
  } else if (completedCount >= 6) {
    statusLabelEn = 'Good Readiness (Minor Additions)';
    statusLabelHi = 'अच्छी तैयारी (लघु सुधार संभव)';
  }

  return {
    score: completedCount,
    totalChecks: items.length,
    percentage,
    statusLabelEn,
    statusLabelHi,
    items
  };
}
