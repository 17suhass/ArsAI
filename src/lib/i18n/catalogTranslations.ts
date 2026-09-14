import { SupportedLanguage } from '@/lib/types';

export interface LocalizedProductCatalogItem {
  title: Record<string, string>;
  description: Record<string, string>;
  culturalHeritageStory?: Record<string, string>;
  materialsUsed?: Record<string, string>;
  dimensions?: Record<string, string>;
  craftCategory?: string;
  giCraftRegion?: string | null;
}

export const CATALOG_TRANSLATIONS: Record<string, LocalizedProductCatalogItem> = {
  "cmtt255is0009ofks9ly4q9jy": {
    "title": {
      "en": "Handcrafted Terracotta Water Pitcher (Surahi)",
      "hi": "हाथ से बनी नक्काशीदार टेराकोटा सुराही",
      "kn": "ಹಸ್ತನಿರ್ಮಿತ ಟೆರ್ರಾಕೋಟಾ ನೀರಿನ ಸುರಾಯಿ (ಮಣ್ಣಿನ ಜಗ್)",
      "ta": "கைவினை சுடுமண் நீர் கூஜா (சுராஹி)"
    },
    "description": {
      "en": "Handcrafted traditional terracotta water pitcher (surahi) with micro-porous earthen walls that naturally cool water through evaporative cooling.",
      "hi": "गोरखपुर के अनुभवी कुम्हारों द्वारा प्राकृतिक मिट्टी से हस्तनिर्मित पारंपरिक सुराही। प्राकृतिक रूप से पानी को शीतल रखने वाली पर्यावरण-अनुकूल कलाकृति।",
      "kn": "गोरखपुर के अनुभवी कुम्हारों द्वारा प्राकृतिक मिट्टी से हस्तनिर्मित पारंपरिक सुराही। प्राकृतिक रूप से पानी को शीतल रखने वाली पर्यावरण-अनुकूल कलाकृति।",
      "ta": "गोरखपुर के अनुभवी कुम्हारों द्वारा प्राकृतिक मिट्टी से हस्तनिर्मित पारंपरिक सुराही। प्राकृतिक रूप से पानी को शीतल रखने वाली पर्यावरण-अनुकूल कलाकृति।"
    },
    "culturalHeritageStory": {
      "en": "Passed down through four generations of prajapati potters in Bulandshahr, this pitcher preserves the ancient Vedic technique of porous earthenware cooling.",
      "hi": "Passed down through four generations of prajapati potters in Bulandshahr, this pitcher preserves the ancient Vedic technique of porous earthenware cooling.",
      "kn": "Passed down through four generations of prajapati potters in Bulandshahr, this pitcher preserves the ancient Vedic technique of porous earthenware cooling.",
      "ta": "Passed down through four generations of prajapati potters in Bulandshahr, this pitcher preserves the ancient Vedic technique of porous earthenware cooling."
    },
    "materialsUsed": {
      "en": "Natural riverbed silt, red ochre slip, natural clay",
      "hi": "Natural riverbed silt, red ochre slip, natural clay",
      "kn": "Natural riverbed silt, red ochre slip, natural clay",
      "ta": "Natural riverbed silt, red ochre slip, natural clay"
    },
    "dimensions": {
      "en": "13\" Height x 7\" Diameter",
      "hi": "13\" ऊंचाई x 7\" व्यास",
      "kn": "13\" ಎತ್ತರ x 7\" ವ್ಯಾಸ",
      "ta": "13\" உயரம் x 7\" விட்டம்"
    },
    "craftCategory": "Terracotta Pottery",
    "giCraftRegion": "Gorakhpur Terracotta (Uttar Pradesh)"
  },
  "handcrafted terracotta water pitcher (surahi)": {
    "title": {
      "en": "Handcrafted Terracotta Water Pitcher (Surahi)",
      "hi": "हाथ से बनी नक्काशीदार टेराकोटा सुराही",
      "kn": "ಹಸ್ತನಿರ್ಮಿತ ಟೆರ್ರಾಕೋಟಾ ನೀರಿನ ಸುರಾಯಿ (ಮಣ್ಣಿನ ಜಗ್)",
      "ta": "கைவினை சுடுமண் நீர் கூஜா (சுராஹி)"
    },
    "description": {
      "en": "Handcrafted traditional terracotta water pitcher (surahi) with micro-porous earthen walls that naturally cool water through evaporative cooling.",
      "hi": "गोरखपुर के अनुभवी कुम्हारों द्वारा प्राकृतिक मिट्टी से हस्तनिर्मित पारंपरिक सुराही। प्राकृतिक रूप से पानी को शीतल रखने वाली पर्यावरण-अनुकूल कलाकृति।",
      "kn": "गोरखपुर के अनुभवी कुम्हारों द्वारा प्राकृतिक मिट्टी से हस्तनिर्मित पारंपरिक सुराही। प्राकृतिक रूप से पानी को शीतल रखने वाली पर्यावरण-अनुकूल कलाकृति।",
      "ta": "गोरखपुर के अनुभवी कुम्हारों द्वारा प्राकृतिक मिट्टी से हस्तनिर्मित पारंपरिक सुराही। प्राकृतिक रूप से पानी को शीतल रखने वाली पर्यावरण-अनुकूल कलाकृति।"
    },
    "culturalHeritageStory": {
      "en": "Passed down through four generations of prajapati potters in Bulandshahr, this pitcher preserves the ancient Vedic technique of porous earthenware cooling.",
      "hi": "Passed down through four generations of prajapati potters in Bulandshahr, this pitcher preserves the ancient Vedic technique of porous earthenware cooling.",
      "kn": "Passed down through four generations of prajapati potters in Bulandshahr, this pitcher preserves the ancient Vedic technique of porous earthenware cooling.",
      "ta": "Passed down through four generations of prajapati potters in Bulandshahr, this pitcher preserves the ancient Vedic technique of porous earthenware cooling."
    },
    "materialsUsed": {
      "en": "Natural riverbed silt, red ochre slip, natural clay",
      "hi": "Natural riverbed silt, red ochre slip, natural clay",
      "kn": "Natural riverbed silt, red ochre slip, natural clay",
      "ta": "Natural riverbed silt, red ochre slip, natural clay"
    },
    "dimensions": {
      "en": "13\" Height x 7\" Diameter",
      "hi": "13\" ऊंचाई x 7\" व्यास",
      "kn": "13\" ಎತ್ತರ x 7\" ವ್ಯಾಸ",
      "ta": "13\" உயரம் x 7\" விட்டம்"
    },
    "craftCategory": "Terracotta Pottery",
    "giCraftRegion": "Gorakhpur Terracotta (Uttar Pradesh)"
  },
  "cmtt255iw000bofksqjnot1il": {
    "title": {
      "en": "Glazed Ceramic Floral Serving Bowl",
      "hi": "हस्तनिर्मित ग्लेज्ड सिरेमिक सर्विंग बाउल",
      "kn": "ಮೆರುಗುಗೊಳಿಸಿದ ಸೆರಾಮಿಕ್ ಹೂವಿನ ಬಟ್ಟಲು",
      "ta": "பளபளப்பான பீங்கான் பூவேலை பரிமாறும் கிண்ணம்"
    },
    "description": {
      "en": "Lead-free Khurja ceramic serving bowl fired at 1250°C featuring Mughal-inspired hand-painted botanical floral borders.",
      "hi": "खुर्जा के मास्टर शिल्पकारों द्वारा निर्मित उच्च-तापमान ग्लेज्ड सिरेमिक सर्विंग बाउल। हाथ से चित्रित पारंपरिक पुष्प रूपांकन।",
      "kn": "खुर्जा के मास्टर शिल्पकारों द्वारा निर्मित उच्च-तापमान ग्लेज्ड सिरेमिक सर्विंग बाउल। हाथ से चित्रित पारंपरिक पुष्प रूपांकन।",
      "ta": "खुर्जा के मास्टर शिल्पकारों द्वारा निर्मित उच्च-तापमान ग्लेज्ड सिरेमिक सर्विंग बाउल। हाथ से चित्रित पारंपरिक पुष्प रूपांकन।"
    },
    "culturalHeritageStory": {
      "en": "Originating during the Mughal artisan migration to Khurja, this glaze style blends Persian floral symmetry with Indian folk colors.",
      "hi": "Originating during the Mughal artisan migration to Khurja, this glaze style blends Persian floral symmetry with Indian folk colors.",
      "kn": "Originating during the Mughal artisan migration to Khurja, this glaze style blends Persian floral symmetry with Indian folk colors.",
      "ta": "Originating during the Mughal artisan migration to Khurja, this glaze style blends Persian floral symmetry with Indian folk colors."
    },
    "materialsUsed": {
      "en": "High-fire stoneware, food-grade quartz glaze, feldspar",
      "hi": "High-fire stoneware, food-grade quartz glaze, feldspar",
      "kn": "High-fire stoneware, food-grade quartz glaze, feldspar",
      "ta": "High-fire stoneware, food-grade quartz glaze, feldspar"
    },
    "dimensions": {
      "en": "8\" Diameter x 3.5\" Depth",
      "hi": "8\" व्यास x 3.5\" गहराई",
      "kn": "8\" ವ್ಯಾಸ x 3.5\" ಆಳ",
      "ta": "8\" விட்டம் x 3.5\" ஆழம்"
    },
    "craftCategory": "Ceramic Art",
    "giCraftRegion": "Khurja Pottery (Uttar Pradesh)"
  },
  "glazed ceramic floral serving bowl": {
    "title": {
      "en": "Glazed Ceramic Floral Serving Bowl",
      "hi": "हस्तनिर्मित ग्लेज्ड सिरेमिक सर्विंग बाउल",
      "kn": "ಮೆರುಗುಗೊಳಿಸಿದ ಸೆರಾಮಿಕ್ ಹೂವಿನ ಬಟ್ಟಲು",
      "ta": "பளபளப்பான பீங்கான் பூவேலை பரிமாறும் கிண்ணம்"
    },
    "description": {
      "en": "Lead-free Khurja ceramic serving bowl fired at 1250°C featuring Mughal-inspired hand-painted botanical floral borders.",
      "hi": "खुर्जा के मास्टर शिल्पकारों द्वारा निर्मित उच्च-तापमान ग्लेज्ड सिरेमिक सर्विंग बाउल। हाथ से चित्रित पारंपरिक पुष्प रूपांकन।",
      "kn": "खुर्जा के मास्टर शिल्पकारों द्वारा निर्मित उच्च-तापमान ग्लेज्ड सिरेमिक सर्विंग बाउल। हाथ से चित्रित पारंपरिक पुष्प रूपांकन।",
      "ta": "खुर्जा के मास्टर शिल्पकारों द्वारा निर्मित उच्च-तापमान ग्लेज्ड सिरेमिक सर्विंग बाउल। हाथ से चित्रित पारंपरिक पुष्प रूपांकन।"
    },
    "culturalHeritageStory": {
      "en": "Originating during the Mughal artisan migration to Khurja, this glaze style blends Persian floral symmetry with Indian folk colors.",
      "hi": "Originating during the Mughal artisan migration to Khurja, this glaze style blends Persian floral symmetry with Indian folk colors.",
      "kn": "Originating during the Mughal artisan migration to Khurja, this glaze style blends Persian floral symmetry with Indian folk colors.",
      "ta": "Originating during the Mughal artisan migration to Khurja, this glaze style blends Persian floral symmetry with Indian folk colors."
    },
    "materialsUsed": {
      "en": "High-fire stoneware, food-grade quartz glaze, feldspar",
      "hi": "High-fire stoneware, food-grade quartz glaze, feldspar",
      "kn": "High-fire stoneware, food-grade quartz glaze, feldspar",
      "ta": "High-fire stoneware, food-grade quartz glaze, feldspar"
    },
    "dimensions": {
      "en": "8\" Diameter x 3.5\" Depth",
      "hi": "8\" व्यास x 3.5\" गहराई",
      "kn": "8\" ವ್ಯಾಸ x 3.5\" ಆಳ",
      "ta": "8\" விட்டம் x 3.5\" ஆழம்"
    },
    "craftCategory": "Ceramic Art",
    "giCraftRegion": "Khurja Pottery (Uttar Pradesh)"
  },
  "cmttupkbv0005kng00hoaqngm": {
    "title": {
      "en": "Handcrafted Terracotta Clay Pot with Traditional Hand-Painted Motifs",
      "hi": "पारंपरिक सुंदर पेंटिंग के साथ हस्तनिर्मित मिट्टी का मटका",
      "kn": "ಸಾಂಪ್ರದಾಯಿಕ ಚಿತ್ತಾರಗಳ ಹಸ್ತನಿರ್ಮಿತ ಮಣ್ಣಿನ ಮಡಕೆ",
      "ta": "பாரம்பரிய ஓவிய வேலைப்பாடுடன் கைவினை சுடுமண் பானை"
    },
    "description": {
      "en": "Artisanal hand-thrown terracotta clay pot adorned with generational folk painting motifs, ideal for traditional storage or rustic home decor.",
      "hi": "प्राकृतिक मिट्टी से चाक पर हस्तनिर्मित सुंदर टेराकोटा मटका, पारंपरिक रंगों और लोक कला रूपांकनों से सुसज्जित।",
      "kn": "प्राकृतिक मिट्टी से चाक पर हस्तनिर्मित सुंदर टेराकोटा मटका, पारंपरिक रंगों और लोक कला रूपांकनों से सुसज्जित।",
      "ta": "प्राकृतिक मिट्टी से चाक पर हस्तनिर्मित सुंदर टेराकोटा मटका, पारंपरिक रंगों और लोक कला रूपांकनों से सुसज्जित।"
    },
    "culturalHeritageStory": {
      "en": "Terracotta pottery is one of India's ancient art forms, tracing back thousands of years to the Indus Valley Civilization. Traditional artisans use natural riverbed clay to shape utilitarian vessels, decorating them with sacred and decorative motifs often inspired by local folk traditions. These earthen vessels are celebrated for their natural cooling properties and sustainable, earth-friendly lifecycle.",
      "hi": "Terracotta pottery is one of India's ancient art forms, tracing back thousands of years to the Indus Valley Civilization. Traditional artisans use natural riverbed clay to shape utilitarian vessels, decorating them with sacred and decorative motifs often inspired by local folk traditions. These earthen vessels are celebrated for their natural cooling properties and sustainable, earth-friendly lifecycle.",
      "kn": "Terracotta pottery is one of India's ancient art forms, tracing back thousands of years to the Indus Valley Civilization. Traditional artisans use natural riverbed clay to shape utilitarian vessels, decorating them with sacred and decorative motifs often inspired by local folk traditions. These earthen vessels are celebrated for their natural cooling properties and sustainable, earth-friendly lifecycle.",
      "ta": "Terracotta pottery is one of India's ancient art forms, tracing back thousands of years to the Indus Valley Civilization. Traditional artisans use natural riverbed clay to shape utilitarian vessels, decorating them with sacred and decorative motifs often inspired by local folk traditions. These earthen vessels are celebrated for their natural cooling properties and sustainable, earth-friendly lifecycle."
    },
    "materialsUsed": {
      "en": "Earthen terracotta clay, organic mineral pigments, natural slip",
      "hi": "Earthen terracotta clay, organic mineral pigments, natural slip",
      "kn": "Earthen terracotta clay, organic mineral pigments, natural slip",
      "ta": "Earthen terracotta clay, organic mineral pigments, natural slip"
    },
    "dimensions": {
      "en": "",
      "hi": "",
      "kn": "",
      "ta": ""
    },
    "craftCategory": "Terracotta Pottery",
    "giCraftRegion": "Khurja Pottery (Uttar Pradesh)"
  },
  "handcrafted terracotta clay pot with traditional hand-painted motifs": {
    "title": {
      "en": "Handcrafted Terracotta Clay Pot with Traditional Hand-Painted Motifs",
      "hi": "पारंपरिक सुंदर पेंटिंग के साथ हस्तनिर्मित मिट्टी का मटका",
      "kn": "ಸಾಂಪ್ರದಾಯಿಕ ಚಿತ್ತಾರಗಳ ಹಸ್ತನಿರ್ಮಿತ ಮಣ್ಣಿನ ಮಡಕೆ",
      "ta": "பாரம்பரிய ஓவிய வேலைப்பாடுடன் கைவினை சுடுமண் பானை"
    },
    "description": {
      "en": "Artisanal hand-thrown terracotta clay pot adorned with generational folk painting motifs, ideal for traditional storage or rustic home decor.",
      "hi": "प्राकृतिक मिट्टी से चाक पर हस्तनिर्मित सुंदर टेराकोटा मटका, पारंपरिक रंगों और लोक कला रूपांकनों से सुसज्जित।",
      "kn": "प्राकृतिक मिट्टी से चाक पर हस्तनिर्मित सुंदर टेराकोटा मटका, पारंपरिक रंगों और लोक कला रूपांकनों से सुसज्जित।",
      "ta": "प्राकृतिक मिट्टी से चाक पर हस्तनिर्मित सुंदर टेराकोटा मटका, पारंपरिक रंगों और लोक कला रूपांकनों से सुसज्जित।"
    },
    "culturalHeritageStory": {
      "en": "Terracotta pottery is one of India's ancient art forms, tracing back thousands of years to the Indus Valley Civilization. Traditional artisans use natural riverbed clay to shape utilitarian vessels, decorating them with sacred and decorative motifs often inspired by local folk traditions. These earthen vessels are celebrated for their natural cooling properties and sustainable, earth-friendly lifecycle.",
      "hi": "Terracotta pottery is one of India's ancient art forms, tracing back thousands of years to the Indus Valley Civilization. Traditional artisans use natural riverbed clay to shape utilitarian vessels, decorating them with sacred and decorative motifs often inspired by local folk traditions. These earthen vessels are celebrated for their natural cooling properties and sustainable, earth-friendly lifecycle.",
      "kn": "Terracotta pottery is one of India's ancient art forms, tracing back thousands of years to the Indus Valley Civilization. Traditional artisans use natural riverbed clay to shape utilitarian vessels, decorating them with sacred and decorative motifs often inspired by local folk traditions. These earthen vessels are celebrated for their natural cooling properties and sustainable, earth-friendly lifecycle.",
      "ta": "Terracotta pottery is one of India's ancient art forms, tracing back thousands of years to the Indus Valley Civilization. Traditional artisans use natural riverbed clay to shape utilitarian vessels, decorating them with sacred and decorative motifs often inspired by local folk traditions. These earthen vessels are celebrated for their natural cooling properties and sustainable, earth-friendly lifecycle."
    },
    "materialsUsed": {
      "en": "Earthen terracotta clay, organic mineral pigments, natural slip",
      "hi": "Earthen terracotta clay, organic mineral pigments, natural slip",
      "kn": "Earthen terracotta clay, organic mineral pigments, natural slip",
      "ta": "Earthen terracotta clay, organic mineral pigments, natural slip"
    },
    "dimensions": {
      "en": "",
      "hi": "",
      "kn": "",
      "ta": ""
    },
    "craftCategory": "Terracotta Pottery",
    "giCraftRegion": "Khurja Pottery (Uttar Pradesh)"
  },
  "cmtvjow2v00018tlgav93ry10": {
    "title": {
      "en": "Eco-Friendly Handmade Jute Tote Bag with Anti-Plastic Print",
      "hi": "पर्यावरण-अनुकूल हस्तनिर्मित जूट शॉपिंग बैग",
      "kn": "ಪರಿಸರ ಸ್ನೇಹಿ ಹಸ್ತನಿರ್ಮಿತ ಸೆಣಬಿನ ಟೋಟ್ ಬ್ಯಾಗ್",
      "ta": "சுற்றுச்சூழல் நட்பு கைவினை சணல் கைப்பை"
    },
    "description": {
      "en": "Biodegradable hand-stitched golden jute tote bag hand-printed with eco-conscious artwork by West Bengal women artisan cooperatives.",
      "hi": "पश्चिम बंगाल के कारीगरों द्वारा प्राकृतिक सुनहरे जूट से निर्मित पर्यावरण-अनुकूल टिकाऊ टोट बैग।",
      "kn": "पश्चिम बंगाल के कारीगरों द्वारा प्राकृतिक सुनहरे जूट से निर्मित पर्यावरण-अनुकूल टिकाऊ टोट बैग।",
      "ta": "पश्चिम बंगाल के कारीगरों द्वारा प्राकृतिक सुनहरे जूट से निर्मित पर्यावरण-अनुकूल टिकाऊ टोट बैग।"
    },
    "culturalHeritageStory": {
      "en": "Jute is fondly known as the 'Golden Fibre' of India, holding a prominent place in traditional sustainable weaving. Rural craftspeople have long used this biodegradable plant fiber to create durable utilitarian goods. Embracing jute handicraft supports traditional artisan livelihoods while preserving eco-conscious heritage practices.",
      "hi": "Jute is fondly known as the 'Golden Fibre' of India, holding a prominent place in traditional sustainable weaving. Rural craftspeople have long used this biodegradable plant fiber to create durable utilitarian goods. Embracing jute handicraft supports traditional artisan livelihoods while preserving eco-conscious heritage practices.",
      "kn": "Jute is fondly known as the 'Golden Fibre' of India, holding a prominent place in traditional sustainable weaving. Rural craftspeople have long used this biodegradable plant fiber to create durable utilitarian goods. Embracing jute handicraft supports traditional artisan livelihoods while preserving eco-conscious heritage practices.",
      "ta": "Jute is fondly known as the 'Golden Fibre' of India, holding a prominent place in traditional sustainable weaving. Rural craftspeople have long used this biodegradable plant fiber to create durable utilitarian goods. Embracing jute handicraft supports traditional artisan livelihoods while preserving eco-conscious heritage practices."
    },
    "materialsUsed": {
      "en": "100% natural raw golden jute, unbleached cotton handles, non-toxic water-based inks",
      "hi": "100% natural raw golden jute, unbleached cotton handles, non-toxic water-based inks",
      "kn": "100% natural raw golden jute, unbleached cotton handles, non-toxic water-based inks",
      "ta": "100% natural raw golden jute, unbleached cotton handles, non-toxic water-based inks"
    },
    "dimensions": {
      "en": "",
      "hi": "",
      "kn": "",
      "ta": ""
    },
    "craftCategory": "Natural Fiber Craft",
    "giCraftRegion": "Kolkata Jute Craft (West Bengal)"
  },
  "eco-friendly handmade jute tote bag with anti-plastic print": {
    "title": {
      "en": "Eco-Friendly Handmade Jute Tote Bag with Anti-Plastic Print",
      "hi": "पर्यावरण-अनुकूल हस्तनिर्मित जूट शॉपिंग बैग",
      "kn": "ಪರಿಸರ ಸ್ನೇಹಿ ಹಸ್ತನಿರ್ಮಿತ ಸೆಣಬಿನ ಟೋಟ್ ಬ್ಯಾಗ್",
      "ta": "சுற்றுச்சூழல் நட்பு கைவினை சணல் கைப்பை"
    },
    "description": {
      "en": "Biodegradable hand-stitched golden jute tote bag hand-printed with eco-conscious artwork by West Bengal women artisan cooperatives.",
      "hi": "पश्चिम बंगाल के कारीगरों द्वारा प्राकृतिक सुनहरे जूट से निर्मित पर्यावरण-अनुकूल टिकाऊ टोट बैग।",
      "kn": "पश्चिम बंगाल के कारीगरों द्वारा प्राकृतिक सुनहरे जूट से निर्मित पर्यावरण-अनुकूल टिकाऊ टोट बैग।",
      "ta": "पश्चिम बंगाल के कारीगरों द्वारा प्राकृतिक सुनहरे जूट से निर्मित पर्यावरण-अनुकूल टिकाऊ टोट बैग।"
    },
    "culturalHeritageStory": {
      "en": "Jute is fondly known as the 'Golden Fibre' of India, holding a prominent place in traditional sustainable weaving. Rural craftspeople have long used this biodegradable plant fiber to create durable utilitarian goods. Embracing jute handicraft supports traditional artisan livelihoods while preserving eco-conscious heritage practices.",
      "hi": "Jute is fondly known as the 'Golden Fibre' of India, holding a prominent place in traditional sustainable weaving. Rural craftspeople have long used this biodegradable plant fiber to create durable utilitarian goods. Embracing jute handicraft supports traditional artisan livelihoods while preserving eco-conscious heritage practices.",
      "kn": "Jute is fondly known as the 'Golden Fibre' of India, holding a prominent place in traditional sustainable weaving. Rural craftspeople have long used this biodegradable plant fiber to create durable utilitarian goods. Embracing jute handicraft supports traditional artisan livelihoods while preserving eco-conscious heritage practices.",
      "ta": "Jute is fondly known as the 'Golden Fibre' of India, holding a prominent place in traditional sustainable weaving. Rural craftspeople have long used this biodegradable plant fiber to create durable utilitarian goods. Embracing jute handicraft supports traditional artisan livelihoods while preserving eco-conscious heritage practices."
    },
    "materialsUsed": {
      "en": "100% natural raw golden jute, unbleached cotton handles, non-toxic water-based inks",
      "hi": "100% natural raw golden jute, unbleached cotton handles, non-toxic water-based inks",
      "kn": "100% natural raw golden jute, unbleached cotton handles, non-toxic water-based inks",
      "ta": "100% natural raw golden jute, unbleached cotton handles, non-toxic water-based inks"
    },
    "dimensions": {
      "en": "",
      "hi": "",
      "kn": "",
      "ta": ""
    },
    "craftCategory": "Natural Fiber Craft",
    "giCraftRegion": "Kolkata Jute Craft (West Bengal)"
  },
  "cmtvlcn1y0001oorwp5yxnei9": {
    "title": {
      "en": "Handcrafted Wooden Rearing Horse Statue on Display Base",
      "hi": "लकड़ी की हस्तनिर्मित नक्काशीदार घोड़े की मूर्ति",
      "kn": "ಹಸ್ತನಿರ್ಮಿತ ಮರದ ಕುದುರೆ ಕೆತ್ತನೆ ಪ್ರತಿಮೆ",
      "ta": "கைவினை மரக் குதிரை அலங்காரச் சிலை"
    },
    "description": {
      "en": "Dynamic rearing horse figurine hand-chiseled from a single block of mature Sheesham wood by master Saharanpur woodcarvers.",
      "hi": "सहारनपुर के प्रसिद्ध काष्ठ शिल्पकारों द्वारा शीशम की लकड़ी से तराशी गई जीवंत अश्व प्रतिमा। प्राकृतिक मोम पॉलिश।",
      "kn": "सहारनपुर के प्रसिद्ध काष्ठ शिल्पकारों द्वारा शीशम की लकड़ी से तराशी गई जीवंत अश्व प्रतिमा। प्राकृतिक मोम पॉलिश।",
      "ta": "सहारनपुर के प्रसिद्ध काष्ठ शिल्पकारों द्वारा शीशम की लकड़ी से तराशी गई जीवंत अश्व प्रतिमा। प्राकृतिक मोम पॉलिश।"
    },
    "culturalHeritageStory": {
      "en": "Horses have long been celebrated in Indian art and history as symbols of power, freedom, and grace. Traditional wood carving techniques have been passed down through generations of artisans, preserving India's rich heritage of sculptural crafts.",
      "hi": "Horses have long been celebrated in Indian art and history as symbols of power, freedom, and grace. Traditional wood carving techniques have been passed down through generations of artisans, preserving India's rich heritage of sculptural crafts.",
      "kn": "Horses have long been celebrated in Indian art and history as symbols of power, freedom, and grace. Traditional wood carving techniques have been passed down through generations of artisans, preserving India's rich heritage of sculptural crafts.",
      "ta": "Horses have long been celebrated in Indian art and history as symbols of power, freedom, and grace. Traditional wood carving techniques have been passed down through generations of artisans, preserving India's rich heritage of sculptural crafts."
    },
    "materialsUsed": {
      "en": "Seasoned Indian Sheesham (Rosewood), brass accent inlay, natural beeswax finish",
      "hi": "Seasoned Indian Sheesham (Rosewood), brass accent inlay, natural beeswax finish",
      "kn": "Seasoned Indian Sheesham (Rosewood), brass accent inlay, natural beeswax finish",
      "ta": "Seasoned Indian Sheesham (Rosewood), brass accent inlay, natural beeswax finish"
    },
    "dimensions": {
      "en": "",
      "hi": "",
      "kn": "",
      "ta": ""
    },
    "craftCategory": "Wood Carving",
    "giCraftRegion": "Saharanpur Woodcraft (Uttar Pradesh)"
  },
  "handcrafted wooden rearing horse statue on display base": {
    "title": {
      "en": "Handcrafted Wooden Rearing Horse Statue on Display Base",
      "hi": "लकड़ी की हस्तनिर्मित नक्काशीदार घोड़े की मूर्ति",
      "kn": "ಹಸ್ತನಿರ್ಮಿತ ಮರದ ಕುದುರೆ ಕೆತ್ತನೆ ಪ್ರತಿಮೆ",
      "ta": "கைவினை மரக் குதிரை அலங்காரச் சிலை"
    },
    "description": {
      "en": "Dynamic rearing horse figurine hand-chiseled from a single block of mature Sheesham wood by master Saharanpur woodcarvers.",
      "hi": "सहारनपुर के प्रसिद्ध काष्ठ शिल्पकारों द्वारा शीशम की लकड़ी से तराशी गई जीवंत अश्व प्रतिमा। प्राकृतिक मोम पॉलिश।",
      "kn": "सहारनपुर के प्रसिद्ध काष्ठ शिल्पकारों द्वारा शीशम की लकड़ी से तराशी गई जीवंत अश्व प्रतिमा। प्राकृतिक मोम पॉलिश।",
      "ta": "सहारनपुर के प्रसिद्ध काष्ठ शिल्पकारों द्वारा शीशम की लकड़ी से तराशी गई जीवंत अश्व प्रतिमा। प्राकृतिक मोम पॉलिश।"
    },
    "culturalHeritageStory": {
      "en": "Horses have long been celebrated in Indian art and history as symbols of power, freedom, and grace. Traditional wood carving techniques have been passed down through generations of artisans, preserving India's rich heritage of sculptural crafts.",
      "hi": "Horses have long been celebrated in Indian art and history as symbols of power, freedom, and grace. Traditional wood carving techniques have been passed down through generations of artisans, preserving India's rich heritage of sculptural crafts.",
      "kn": "Horses have long been celebrated in Indian art and history as symbols of power, freedom, and grace. Traditional wood carving techniques have been passed down through generations of artisans, preserving India's rich heritage of sculptural crafts.",
      "ta": "Horses have long been celebrated in Indian art and history as symbols of power, freedom, and grace. Traditional wood carving techniques have been passed down through generations of artisans, preserving India's rich heritage of sculptural crafts."
    },
    "materialsUsed": {
      "en": "Seasoned Indian Sheesham (Rosewood), brass accent inlay, natural beeswax finish",
      "hi": "Seasoned Indian Sheesham (Rosewood), brass accent inlay, natural beeswax finish",
      "kn": "Seasoned Indian Sheesham (Rosewood), brass accent inlay, natural beeswax finish",
      "ta": "Seasoned Indian Sheesham (Rosewood), brass accent inlay, natural beeswax finish"
    },
    "dimensions": {
      "en": "",
      "hi": "",
      "kn": "",
      "ta": ""
    },
    "craftCategory": "Wood Carving",
    "giCraftRegion": "Saharanpur Woodcraft (Uttar Pradesh)"
  },
  "cmtvoiugg00019e660wbhgoux": {
    "title": {
      "en": "Hand-Carved Terracotta Elephant Figurine with Howdah",
      "hi": "हस्तनिर्मित टेराकोटा हाथी मूर्ति",
      "kn": "ಕೈಕೆತ್ತನೆಯ ಟೆರ್ರಾಕೋಟಾ ಆನೆ ಮೂರ್ತಿ with Howdah",
      "ta": "கைவேலைப்பாடு செதுக்கப்பட்ட சுடுமண் யானை சிலை with Howdah"
    },
    "description": {
      "en": "Celebrated Gorakhpur terracotta elephant adorned with ornamental ceremonial howdah and intricate clay relief etching.",
      "hi": "गोरखपुर की प्रसिद्ध हस्तनिर्मित टेराकोटा हाथी प्रतिमा, पारंपरिक हौदा और बारीक नक्काशी सहित।",
      "kn": "गोरखपुर की प्रसिद्ध हस्तनिर्मित टेराकोटा हाथी प्रतिमा, पारंपरिक हौदा और बारीक नक्काशी सहित।",
      "ta": "गोरखपुर की प्रसिद्ध हस्तनिर्मित टेराकोटा हाथी प्रतिमा, पारंपरिक हौदा और बारीक नक्काशी सहित।"
    },
    "culturalHeritageStory": {
      "en": "Generational clay moulding craft native to Gorakhpur, symbolizing royal auspiciousness.",
      "hi": "Generational clay moulding craft native to Gorakhpur, symbolizing royal auspiciousness.",
      "kn": "Generational clay moulding craft native to Gorakhpur, symbolizing royal auspiciousness.",
      "ta": "Generational clay moulding craft native to Gorakhpur, symbolizing royal auspiciousness."
    },
    "materialsUsed": {
      "en": "Natural riverbed silt, red ochre slip, natural clay",
      "hi": "Natural riverbed silt, red ochre slip, natural clay",
      "kn": "Natural riverbed silt, red ochre slip, natural clay",
      "ta": "Natural riverbed silt, red ochre slip, natural clay"
    },
    "dimensions": {
      "en": "8 x 5 x 6 inches",
      "hi": "8 x 5 x 6 इंच",
      "kn": "8 x 5 x 6 ಇಂಚು",
      "ta": "8 x 5 x 6 அங்குலம்"
    },
    "craftCategory": "Terracotta Pottery",
    "giCraftRegion": "Gorakhpur Terracotta (Uttar Pradesh)"
  },
  "hand-carved terracotta elephant figurine with howdah": {
    "title": {
      "en": "Hand-Carved Terracotta Elephant Figurine with Howdah",
      "hi": "हस्तनिर्मित टेराकोटा हाथी मूर्ति",
      "kn": "ಕೈಕೆತ್ತನೆಯ ಟೆರ್ರಾಕೋಟಾ ಆನೆ ಮೂರ್ತಿ with Howdah",
      "ta": "கைவேலைப்பாடு செதுக்கப்பட்ட சுடுமண் யானை சிலை with Howdah"
    },
    "description": {
      "en": "Celebrated Gorakhpur terracotta elephant adorned with ornamental ceremonial howdah and intricate clay relief etching.",
      "hi": "गोरखपुर की प्रसिद्ध हस्तनिर्मित टेराकोटा हाथी प्रतिमा, पारंपरिक हौदा और बारीक नक्काशी सहित।",
      "kn": "गोरखपुर की प्रसिद्ध हस्तनिर्मित टेराकोटा हाथी प्रतिमा, पारंपरिक हौदा और बारीक नक्काशी सहित।",
      "ta": "गोरखपुर की प्रसिद्ध हस्तनिर्मित टेराकोटा हाथी प्रतिमा, पारंपरिक हौदा और बारीक नक्काशी सहित।"
    },
    "culturalHeritageStory": {
      "en": "Generational clay moulding craft native to Gorakhpur, symbolizing royal auspiciousness.",
      "hi": "Generational clay moulding craft native to Gorakhpur, symbolizing royal auspiciousness.",
      "kn": "Generational clay moulding craft native to Gorakhpur, symbolizing royal auspiciousness.",
      "ta": "Generational clay moulding craft native to Gorakhpur, symbolizing royal auspiciousness."
    },
    "materialsUsed": {
      "en": "Natural riverbed silt, red ochre slip, natural clay",
      "hi": "Natural riverbed silt, red ochre slip, natural clay",
      "kn": "Natural riverbed silt, red ochre slip, natural clay",
      "ta": "Natural riverbed silt, red ochre slip, natural clay"
    },
    "dimensions": {
      "en": "8 x 5 x 6 inches",
      "hi": "8 x 5 x 6 इंच",
      "kn": "8 x 5 x 6 ಇಂಚು",
      "ta": "8 x 5 x 6 அங்குலம்"
    },
    "craftCategory": "Terracotta Pottery",
    "giCraftRegion": "Gorakhpur Terracotta (Uttar Pradesh)"
  },
  "cmtvoiugx00039e66vtfy4u4y": {
    "title": {
      "en": "Traditional Terracotta Tulsi Vrindavan Planter",
      "hi": "पारंपरिक टेराकोटा तुलसी वृंदावन गमला",
      "kn": "ಸಾಂಪ್ರದಾಯಿಕ ಟೆರ್ರಾಕೋಟಾ ತುಳಸಿ ವೃಂದಾವನ ಪಾತ್ರೆ",
      "ta": "பாரம்பரிய சுடுமண் துளசி மாடம்"
    },
    "description": {
      "en": "Sacred architectural terracotta planter handcrafted with temple-tier relief motifs, designed for auspicious domestic courtyards.",
      "hi": "पारंपरिक मंदिर शैली में निर्मित टेराकोटा तुलसी वृंदावन गमला, प्राकृतिक मिट्टी और वैदिक रूपांकनों से सुसज्जित।",
      "kn": "पारंपरिक मंदिर शैली में निर्मित टेराकोटा तुलसी वृंदावन गमला, प्राकृतिक मिट्टी और वैदिक रूपांकनों से सुसज्जित।",
      "ta": "पारंपरिक मंदिर शैली में निर्मित टेराकोटा तुलसी वृंदावन गमला, प्राकृतिक मिट्टी और वैदिक रूपांकनों से सुसज्जित।"
    },
    "culturalHeritageStory": {
      "en": "Hand-pressed auspicious planter fired in traditional wood kilns with sacred motifs.",
      "hi": "Hand-pressed auspicious planter fired in traditional wood kilns with sacred motifs.",
      "kn": "Hand-pressed auspicious planter fired in traditional wood kilns with sacred motifs.",
      "ta": "Hand-pressed auspicious planter fired in traditional wood kilns with sacred motifs."
    },
    "materialsUsed": {
      "en": "Natural riverbed silt, red ochre slip, natural clay",
      "hi": "Natural riverbed silt, red ochre slip, natural clay",
      "kn": "Natural riverbed silt, red ochre slip, natural clay",
      "ta": "Natural riverbed silt, red ochre slip, natural clay"
    },
    "dimensions": {
      "en": "12 x 10 x 10 inches",
      "hi": "12 x 10 x 10 इंच",
      "kn": "12 x 10 x 10 ಇಂಚು",
      "ta": "12 x 10 x 10 அங்குலம்"
    },
    "craftCategory": "Terracotta Pottery",
    "giCraftRegion": "Gorakhpur Terracotta (Uttar Pradesh)"
  },
  "traditional terracotta tulsi vrindavan planter": {
    "title": {
      "en": "Traditional Terracotta Tulsi Vrindavan Planter",
      "hi": "पारंपरिक टेराकोटा तुलसी वृंदावन गमला",
      "kn": "ಸಾಂಪ್ರದಾಯಿಕ ಟೆರ್ರಾಕೋಟಾ ತುಳಸಿ ವೃಂದಾವನ ಪಾತ್ರೆ",
      "ta": "பாரம்பரிய சுடுமண் துளசி மாடம்"
    },
    "description": {
      "en": "Sacred architectural terracotta planter handcrafted with temple-tier relief motifs, designed for auspicious domestic courtyards.",
      "hi": "पारंपरिक मंदिर शैली में निर्मित टेराकोटा तुलसी वृंदावन गमला, प्राकृतिक मिट्टी और वैदिक रूपांकनों से सुसज्जित।",
      "kn": "पारंपरिक मंदिर शैली में निर्मित टेराकोटा तुलसी वृंदावन गमला, प्राकृतिक मिट्टी और वैदिक रूपांकनों से सुसज्जित।",
      "ta": "पारंपरिक मंदिर शैली में निर्मित टेराकोटा तुलसी वृंदावन गमला, प्राकृतिक मिट्टी और वैदिक रूपांकनों से सुसज्जित।"
    },
    "culturalHeritageStory": {
      "en": "Hand-pressed auspicious planter fired in traditional wood kilns with sacred motifs.",
      "hi": "Hand-pressed auspicious planter fired in traditional wood kilns with sacred motifs.",
      "kn": "Hand-pressed auspicious planter fired in traditional wood kilns with sacred motifs.",
      "ta": "Hand-pressed auspicious planter fired in traditional wood kilns with sacred motifs."
    },
    "materialsUsed": {
      "en": "Natural riverbed silt, red ochre slip, natural clay",
      "hi": "Natural riverbed silt, red ochre slip, natural clay",
      "kn": "Natural riverbed silt, red ochre slip, natural clay",
      "ta": "Natural riverbed silt, red ochre slip, natural clay"
    },
    "dimensions": {
      "en": "12 x 10 x 10 inches",
      "hi": "12 x 10 x 10 इंच",
      "kn": "12 x 10 x 10 ಇಂಚು",
      "ta": "12 x 10 x 10 அங்குலம்"
    },
    "craftCategory": "Terracotta Pottery",
    "giCraftRegion": "Gorakhpur Terracotta (Uttar Pradesh)"
  },
  "cmtvoiuh300059e668xhofxj8": {
    "title": {
      "en": "Terracotta Hand-Molded Hanging Wind Bells (Set of 5)",
      "hi": "टेराकोटा हस्तनिर्मित पवन घंटियां (5 का सेट)",
      "kn": "ಟೆರ್ರಾಕೋಟಾ Hand-Molded Hanging ಗಾಳಿ ಗಂಟೆಗಳು (ಸೆಟ್ 5)",
      "ta": "சுடுமண் Hand-Molded Hanging காற்று மணிகள் (தொகுப்பு 5)"
    },
    "description": {
      "en": "Melodious earthen wind chime set hand-molded with porous clay bell chambers that emit deep acoustic tones in the breeze.",
      "hi": "हाथ से गढ़ी गई टेराकोटा पवन घंटियां, जो हवा के झोंकों में मधुर प्राकृतिक ध्वनि उत्पन्न करती हैं।",
      "kn": "हाथ से गढ़ी गई टेराकोटा पवन घंटियां, जो हवा के झोंकों में मधुर प्राकृतिक ध्वनि उत्पन्न करती हैं।",
      "ta": "हाथ से गढ़ी गई टेराकोटा पवन घंटियां, जो हवा के झोंकों में मधुर प्राकृतिक ध्वनि उत्पन्न करती हैं।"
    },
    "culturalHeritageStory": {
      "en": "Earthy resonance chimes crafted by rural terracotta artisans.",
      "hi": "Earthy resonance chimes crafted by rural terracotta artisans.",
      "kn": "Earthy resonance chimes crafted by rural terracotta artisans.",
      "ta": "Earthy resonance chimes crafted by rural terracotta artisans."
    },
    "materialsUsed": {
      "en": "Terracotta clay, jute suspension cord, clay clappers",
      "hi": "Terracotta clay, jute suspension cord, clay clappers",
      "kn": "Terracotta clay, jute suspension cord, clay clappers",
      "ta": "Terracotta clay, jute suspension cord, clay clappers"
    },
    "dimensions": {
      "en": "18 inches length",
      "hi": "18 इंच लंबाई",
      "kn": "18 ಇಂಚು ಉದ್ದ",
      "ta": "18 அங்குலம் நீளம்"
    },
    "craftCategory": "Terracotta Pottery",
    "giCraftRegion": "Gorakhpur Terracotta (Uttar Pradesh)"
  },
  "terracotta hand-molded hanging wind bells (set of 5)": {
    "title": {
      "en": "Terracotta Hand-Molded Hanging Wind Bells (Set of 5)",
      "hi": "टेराकोटा हस्तनिर्मित पवन घंटियां (5 का सेट)",
      "kn": "ಟೆರ್ರಾಕೋಟಾ Hand-Molded Hanging ಗಾಳಿ ಗಂಟೆಗಳು (ಸೆಟ್ 5)",
      "ta": "சுடுமண் Hand-Molded Hanging காற்று மணிகள் (தொகுப்பு 5)"
    },
    "description": {
      "en": "Melodious earthen wind chime set hand-molded with porous clay bell chambers that emit deep acoustic tones in the breeze.",
      "hi": "हाथ से गढ़ी गई टेराकोटा पवन घंटियां, जो हवा के झोंकों में मधुर प्राकृतिक ध्वनि उत्पन्न करती हैं।",
      "kn": "हाथ से गढ़ी गई टेराकोटा पवन घंटियां, जो हवा के झोंकों में मधुर प्राकृतिक ध्वनि उत्पन्न करती हैं।",
      "ta": "हाथ से गढ़ी गई टेराकोटा पवन घंटियां, जो हवा के झोंकों में मधुर प्राकृतिक ध्वनि उत्पन्न करती हैं।"
    },
    "culturalHeritageStory": {
      "en": "Earthy resonance chimes crafted by rural terracotta artisans.",
      "hi": "Earthy resonance chimes crafted by rural terracotta artisans.",
      "kn": "Earthy resonance chimes crafted by rural terracotta artisans.",
      "ta": "Earthy resonance chimes crafted by rural terracotta artisans."
    },
    "materialsUsed": {
      "en": "Terracotta clay, jute suspension cord, clay clappers",
      "hi": "Terracotta clay, jute suspension cord, clay clappers",
      "kn": "Terracotta clay, jute suspension cord, clay clappers",
      "ta": "Terracotta clay, jute suspension cord, clay clappers"
    },
    "dimensions": {
      "en": "18 inches length",
      "hi": "18 इंच लंबाई",
      "kn": "18 ಇಂಚು ಉದ್ದ",
      "ta": "18 அங்குலம் நீளம்"
    },
    "craftCategory": "Terracotta Pottery",
    "giCraftRegion": "Gorakhpur Terracotta (Uttar Pradesh)"
  },
  "cmtvoiuh900079e66zoqwe4ov": {
    "title": {
      "en": "Bankura Terracotta Horse Sculpture",
      "hi": "बांकुरा टेराकोटा घोड़ा प्रतिमा",
      "kn": "Bankura ಟೆರ್ರಾಕೋಟಾ Horse Sculpture",
      "ta": "Bankura சுடுமண் Horse Sculpture"
    },
    "description": {
      "en": "Iconic Panchmura Bankura horse characterized by erect symmetrical ears, arched neck, and hollow cylindrical clay sections.",
      "hi": "पश्चिम बंगाल के बांकुरा (पंचमुरा) की विश्वविख्यात टेराकोटा घोड़ा शिल्पकृति। लोक कला का अद्वितीय प्रतीक।",
      "kn": "पश्चिम बंगाल के बांकुरा (पंचमुरा) की विश्वविख्यात टेराकोटा घोड़ा शिल्पकृति। लोक कला का अद्वितीय प्रतीक।",
      "ta": "पश्चिम बंगाल के बांकुरा (पंचमुरा) की विश्वविख्यात टेराकोटा घोड़ा शिल्पकृति। लोक कला का अद्वितीय प्रतीक।"
    },
    "culturalHeritageStory": {
      "en": "Celebrated folk art of Bishnupur with erect ears and symmetrical geometric dignity.",
      "hi": "Celebrated folk art of Bishnupur with erect ears and symmetrical geometric dignity.",
      "kn": "Celebrated folk art of Bishnupur with erect ears and symmetrical geometric dignity.",
      "ta": "Celebrated folk art of Bishnupur with erect ears and symmetrical geometric dignity."
    },
    "materialsUsed": {
      "en": "Alluvial Bankura red clay, wood-fired terra slip",
      "hi": "Alluvial Bankura red clay, wood-fired terra slip",
      "kn": "Alluvial Bankura red clay, wood-fired terra slip",
      "ta": "Alluvial Bankura red clay, wood-fired terra slip"
    },
    "dimensions": {
      "en": "16 x 8 x 6 inches",
      "hi": "16 x 8 x 6 इंच",
      "kn": "16 x 8 x 6 ಇಂಚು",
      "ta": "16 x 8 x 6 அங்குலம்"
    },
    "craftCategory": "Terracotta Pottery",
    "giCraftRegion": "Bankura Terracotta (West Bengal)"
  },
  "bankura terracotta horse sculpture": {
    "title": {
      "en": "Bankura Terracotta Horse Sculpture",
      "hi": "बांकुरा टेराकोटा घोड़ा प्रतिमा",
      "kn": "Bankura ಟೆರ್ರಾಕೋಟಾ Horse Sculpture",
      "ta": "Bankura சுடுமண் Horse Sculpture"
    },
    "description": {
      "en": "Iconic Panchmura Bankura horse characterized by erect symmetrical ears, arched neck, and hollow cylindrical clay sections.",
      "hi": "पश्चिम बंगाल के बांकुरा (पंचमुरा) की विश्वविख्यात टेराकोटा घोड़ा शिल्पकृति। लोक कला का अद्वितीय प्रतीक।",
      "kn": "पश्चिम बंगाल के बांकुरा (पंचमुरा) की विश्वविख्यात टेराकोटा घोड़ा शिल्पकृति। लोक कला का अद्वितीय प्रतीक।",
      "ta": "पश्चिम बंगाल के बांकुरा (पंचमुरा) की विश्वविख्यात टेराकोटा घोड़ा शिल्पकृति। लोक कला का अद्वितीय प्रतीक।"
    },
    "culturalHeritageStory": {
      "en": "Celebrated folk art of Bishnupur with erect ears and symmetrical geometric dignity.",
      "hi": "Celebrated folk art of Bishnupur with erect ears and symmetrical geometric dignity.",
      "kn": "Celebrated folk art of Bishnupur with erect ears and symmetrical geometric dignity.",
      "ta": "Celebrated folk art of Bishnupur with erect ears and symmetrical geometric dignity."
    },
    "materialsUsed": {
      "en": "Alluvial Bankura red clay, wood-fired terra slip",
      "hi": "Alluvial Bankura red clay, wood-fired terra slip",
      "kn": "Alluvial Bankura red clay, wood-fired terra slip",
      "ta": "Alluvial Bankura red clay, wood-fired terra slip"
    },
    "dimensions": {
      "en": "16 x 8 x 6 inches",
      "hi": "16 x 8 x 6 इंच",
      "kn": "16 x 8 x 6 ಇಂಚು",
      "ta": "16 x 8 x 6 அங்குலம்"
    },
    "craftCategory": "Terracotta Pottery",
    "giCraftRegion": "Bankura Terracotta (West Bengal)"
  },
  "cmtvoiuhf00099e66ef5ni6xf": {
    "title": {
      "en": "Traditional Clay Curd Handi with Earthen Lid (Set of 2)",
      "hi": "मिट्टी की दही हांडी ढक्कन सहित (2 का सेट)",
      "kn": "ಸಾಂಪ್ರದಾಯಿಕ ಮಣ್ಣಿನ ಮೊಸರಿನ ಹಂಡೆ with Earthen Lid (ಸೆಟ್ 2)",
      "ta": "பாரம்பரிய களிமண் தயிர் சட்டி with Earthen Lid (தொகுப்பு 2)"
    },
    "description": {
      "en": "Porous unglazed clay curd pots that absorb excess whey to yield thick natural yogurt with authentic earthen petrichor aroma.",
      "hi": "प्राकृतिक बिना-पॉलिश वाली मिट्टी की दही हांडी, जो गाढ़ा और स्वादिष्ट दही जमाने के लिए सर्वोत्तम है।",
      "kn": "प्राकृतिक बिना-पॉलिश वाली मिट्टी की दही हांडी, जो गाढ़ा और स्वादिष्ट दही जमाने के लिए सर्वोत्तम है।",
      "ta": "प्राकृतिक बिना-पॉलिश वाली मिट्टी की दही हांडी, जो गाढ़ा और स्वादिष्ट दही जमाने के लिए सर्वोत्तम है।"
    },
    "culturalHeritageStory": {
      "en": "Unfertilized organic clay utensil that naturally regulates fermentation and temperature.",
      "hi": "Unfertilized organic clay utensil that naturally regulates fermentation and temperature.",
      "kn": "Unfertilized organic clay utensil that naturally regulates fermentation and temperature.",
      "ta": "Unfertilized organic clay utensil that naturally regulates fermentation and temperature."
    },
    "materialsUsed": {
      "en": "Organic unglazed micaceous river silt, natural clay",
      "hi": "Organic unglazed micaceous river silt, natural clay",
      "kn": "Organic unglazed micaceous river silt, natural clay",
      "ta": "Organic unglazed micaceous river silt, natural clay"
    },
    "dimensions": {
      "en": "1.5 Litre capacity",
      "hi": "1.5 Litre क्षमता",
      "kn": "1.5 Litre ಸಾಮರ್ಥ್ಯ",
      "ta": "1.5 Litre கொள்ளளவு"
    },
    "craftCategory": "Terracotta Pottery",
    "giCraftRegion": "Gorakhpur Terracotta (Uttar Pradesh)"
  },
  "traditional clay curd handi with earthen lid (set of 2)": {
    "title": {
      "en": "Traditional Clay Curd Handi with Earthen Lid (Set of 2)",
      "hi": "मिट्टी की दही हांडी ढक्कन सहित (2 का सेट)",
      "kn": "ಸಾಂಪ್ರದಾಯಿಕ ಮಣ್ಣಿನ ಮೊಸರಿನ ಹಂಡೆ with Earthen Lid (ಸೆಟ್ 2)",
      "ta": "பாரம்பரிய களிமண் தயிர் சட்டி with Earthen Lid (தொகுப்பு 2)"
    },
    "description": {
      "en": "Porous unglazed clay curd pots that absorb excess whey to yield thick natural yogurt with authentic earthen petrichor aroma.",
      "hi": "प्राकृतिक बिना-पॉलिश वाली मिट्टी की दही हांडी, जो गाढ़ा और स्वादिष्ट दही जमाने के लिए सर्वोत्तम है।",
      "kn": "प्राकृतिक बिना-पॉलिश वाली मिट्टी की दही हांडी, जो गाढ़ा और स्वादिष्ट दही जमाने के लिए सर्वोत्तम है।",
      "ta": "प्राकृतिक बिना-पॉलिश वाली मिट्टी की दही हांडी, जो गाढ़ा और स्वादिष्ट दही जमाने के लिए सर्वोत्तम है।"
    },
    "culturalHeritageStory": {
      "en": "Unfertilized organic clay utensil that naturally regulates fermentation and temperature.",
      "hi": "Unfertilized organic clay utensil that naturally regulates fermentation and temperature.",
      "kn": "Unfertilized organic clay utensil that naturally regulates fermentation and temperature.",
      "ta": "Unfertilized organic clay utensil that naturally regulates fermentation and temperature."
    },
    "materialsUsed": {
      "en": "Organic unglazed micaceous river silt, natural clay",
      "hi": "Organic unglazed micaceous river silt, natural clay",
      "kn": "Organic unglazed micaceous river silt, natural clay",
      "ta": "Organic unglazed micaceous river silt, natural clay"
    },
    "dimensions": {
      "en": "1.5 Litre capacity",
      "hi": "1.5 Litre क्षमता",
      "kn": "1.5 Litre ಸಾಮರ್ಥ್ಯ",
      "ta": "1.5 Litre கொள்ளளவு"
    },
    "craftCategory": "Terracotta Pottery",
    "giCraftRegion": "Gorakhpur Terracotta (Uttar Pradesh)"
  },
  "cmtvoiuhk000b9e66rqb1qzfc": {
    "title": {
      "en": "Molela Terracotta Votive Clay Plaque of Sun Deity",
      "hi": "मोलेला टेराकोटा सूर्य देव पट्टिका",
      "kn": "Molela ಟೆರ್ರಾಕೋಟಾ Votive ಮಣ್ಣಿನ ಫಲಕ of Sun Deity",
      "ta": "Molela சுடுமண் Votive களிமண் சுவரோவிய பலகை of Sun Deity"
    },
    "description": {
      "en": "Hollow-relief devotional terracotta tablet hand-modeled without molds by generational potters of Molela on the banks of Banas river.",
      "hi": "राजस्थान के मोलेला गांव के कुम्हारों द्वारा हस्तनिर्मित सूर्य देव की पवित्र खोखली टेराकोटा पट्टिका।",
      "kn": "राजस्थान के मोलेला गांव के कुम्हारों द्वारा हस्तनिर्मित सूर्य देव की पवित्र खोखली टेराकोटा पट्टिका।",
      "ta": "राजस्थान के मोलेला गांव के कुम्हारों द्वारा हस्तनिर्मित सूर्य देव की पवित्र खोखली टेराकोटा पट्टिका।"
    },
    "culturalHeritageStory": {
      "en": "Hollow relief terracotta craft practiced by Molela potters for tribal shrine offerings.",
      "hi": "Hollow relief terracotta craft practiced by Molela potters for tribal shrine offerings.",
      "kn": "Hollow relief terracotta craft practiced by Molela potters for tribal shrine offerings.",
      "ta": "Hollow relief terracotta craft practiced by Molela potters for tribal shrine offerings."
    },
    "materialsUsed": {
      "en": "Molela riverbed clay, donkey dung binding binder, natural mineral slip",
      "hi": "Molela riverbed clay, donkey dung binding binder, natural mineral slip",
      "kn": "Molela riverbed clay, donkey dung binding binder, natural mineral slip",
      "ta": "Molela riverbed clay, donkey dung binding binder, natural mineral slip"
    },
    "dimensions": {
      "en": "14 x 14 inches",
      "hi": "14 x 14 इंच",
      "kn": "14 x 14 ಇಂಚು",
      "ta": "14 x 14 அங்குலம்"
    },
    "craftCategory": "Terracotta Pottery",
    "giCraftRegion": "Molela Clay Art (Rajasthan)"
  },
  "molela terracotta votive clay plaque of sun deity": {
    "title": {
      "en": "Molela Terracotta Votive Clay Plaque of Sun Deity",
      "hi": "मोलेला टेराकोटा सूर्य देव पट्टिका",
      "kn": "Molela ಟೆರ್ರಾಕೋಟಾ Votive ಮಣ್ಣಿನ ಫಲಕ of Sun Deity",
      "ta": "Molela சுடுமண் Votive களிமண் சுவரோவிய பலகை of Sun Deity"
    },
    "description": {
      "en": "Hollow-relief devotional terracotta tablet hand-modeled without molds by generational potters of Molela on the banks of Banas river.",
      "hi": "राजस्थान के मोलेला गांव के कुम्हारों द्वारा हस्तनिर्मित सूर्य देव की पवित्र खोखली टेराकोटा पट्टिका।",
      "kn": "राजस्थान के मोलेला गांव के कुम्हारों द्वारा हस्तनिर्मित सूर्य देव की पवित्र खोखली टेराकोटा पट्टिका।",
      "ta": "राजस्थान के मोलेला गांव के कुम्हारों द्वारा हस्तनिर्मित सूर्य देव की पवित्र खोखली टेराकोटा पट्टिका।"
    },
    "culturalHeritageStory": {
      "en": "Hollow relief terracotta craft practiced by Molela potters for tribal shrine offerings.",
      "hi": "Hollow relief terracotta craft practiced by Molela potters for tribal shrine offerings.",
      "kn": "Hollow relief terracotta craft practiced by Molela potters for tribal shrine offerings.",
      "ta": "Hollow relief terracotta craft practiced by Molela potters for tribal shrine offerings."
    },
    "materialsUsed": {
      "en": "Molela riverbed clay, donkey dung binding binder, natural mineral slip",
      "hi": "Molela riverbed clay, donkey dung binding binder, natural mineral slip",
      "kn": "Molela riverbed clay, donkey dung binding binder, natural mineral slip",
      "ta": "Molela riverbed clay, donkey dung binding binder, natural mineral slip"
    },
    "dimensions": {
      "en": "14 x 14 inches",
      "hi": "14 x 14 इंच",
      "kn": "14 x 14 ಇಂಚು",
      "ta": "14 x 14 அங்குலம்"
    },
    "craftCategory": "Terracotta Pottery",
    "giCraftRegion": "Molela Clay Art (Rajasthan)"
  },
  "cmtvoiuho000d9e66lehbk4gq": {
    "title": {
      "en": "Hand-Etched Earthen Aroma Burner with Floral Cutouts",
      "hi": "हस्त नक्काशीदार मिट्टी का धूपदानी",
      "kn": "Hand-Etched Earthen ಸುವಾಸನೆ ದೀಪ with Floral Cutouts",
      "ta": "Hand-Etched Earthen நறுமண தூபக்கால் with Floral Cutouts"
    },
    "description": {
      "en": "Atmospheric tea-light aroma diffuser featuring precision hand-pierced lattice apertures that project gentle starlight patterns.",
      "hi": "हाथ से नक्काशीदार मिट्टी का सुगंध डिफ्यूज़र, जो मंद प्रकाश और शांतिदायक सुगंध का वातावरण बनाता है।",
      "kn": "हाथ से नक्काशीदार मिट्टी का सुगंध डिफ्यूज़र, जो मंद प्रकाश और शांतिदायक सुगंध का वातावरण बनाता है।",
      "ta": "हाथ से नक्काशीदार मिट्टी का सुगंध डिफ्यूज़र, जो मंद प्रकाश और शांतिदायक सुगंध का वातावरण बनाता है।"
    },
    "culturalHeritageStory": {
      "en": "Hand-punctured ventilation orifices create mesmerizing ambient light and gentle fragrance.",
      "hi": "Hand-punctured ventilation orifices create mesmerizing ambient light and gentle fragrance.",
      "kn": "Hand-punctured ventilation orifices create mesmerizing ambient light and gentle fragrance.",
      "ta": "Hand-punctured ventilation orifices create mesmerizing ambient light and gentle fragrance."
    },
    "materialsUsed": {
      "en": "Fine red terracotta clay, heat-resistant natural slip",
      "hi": "Fine red terracotta clay, heat-resistant natural slip",
      "kn": "Fine red terracotta clay, heat-resistant natural slip",
      "ta": "Fine red terracotta clay, heat-resistant natural slip"
    },
    "dimensions": {
      "en": "5 x 4 inches",
      "hi": "5 x 4 इंच",
      "kn": "5 x 4 ಇಂಚು",
      "ta": "5 x 4 அங்குலம்"
    },
    "craftCategory": "Terracotta Pottery",
    "giCraftRegion": "Gorakhpur Terracotta (Uttar Pradesh)"
  },
  "hand-etched earthen aroma burner with floral cutouts": {
    "title": {
      "en": "Hand-Etched Earthen Aroma Burner with Floral Cutouts",
      "hi": "हस्त नक्काशीदार मिट्टी का धूपदानी",
      "kn": "Hand-Etched Earthen ಸುವಾಸನೆ ದೀಪ with Floral Cutouts",
      "ta": "Hand-Etched Earthen நறுமண தூபக்கால் with Floral Cutouts"
    },
    "description": {
      "en": "Atmospheric tea-light aroma diffuser featuring precision hand-pierced lattice apertures that project gentle starlight patterns.",
      "hi": "हाथ से नक्काशीदार मिट्टी का सुगंध डिफ्यूज़र, जो मंद प्रकाश और शांतिदायक सुगंध का वातावरण बनाता है।",
      "kn": "हाथ से नक्काशीदार मिट्टी का सुगंध डिफ्यूज़र, जो मंद प्रकाश और शांतिदायक सुगंध का वातावरण बनाता है।",
      "ta": "हाथ से नक्काशीदार मिट्टी का सुगंध डिफ्यूज़र, जो मंद प्रकाश और शांतिदायक सुगंध का वातावरण बनाता है।"
    },
    "culturalHeritageStory": {
      "en": "Hand-punctured ventilation orifices create mesmerizing ambient light and gentle fragrance.",
      "hi": "Hand-punctured ventilation orifices create mesmerizing ambient light and gentle fragrance.",
      "kn": "Hand-punctured ventilation orifices create mesmerizing ambient light and gentle fragrance.",
      "ta": "Hand-punctured ventilation orifices create mesmerizing ambient light and gentle fragrance."
    },
    "materialsUsed": {
      "en": "Fine red terracotta clay, heat-resistant natural slip",
      "hi": "Fine red terracotta clay, heat-resistant natural slip",
      "kn": "Fine red terracotta clay, heat-resistant natural slip",
      "ta": "Fine red terracotta clay, heat-resistant natural slip"
    },
    "dimensions": {
      "en": "5 x 4 inches",
      "hi": "5 x 4 इंच",
      "kn": "5 x 4 ಇಂಚು",
      "ta": "5 x 4 அங்குலம்"
    },
    "craftCategory": "Terracotta Pottery",
    "giCraftRegion": "Gorakhpur Terracotta (Uttar Pradesh)"
  },
  "cmtvoiuht000f9e66t6lba99z": {
    "title": {
      "en": "Traditional Terracotta Diya Stand (7-Tier Deepstambh)",
      "hi": "टेराकोटा सात मंजिला दीपस्तंभ",
      "kn": "ಸಾಂಪ್ರದಾಯಿಕ ಟೆರ್ರಾಕೋಟಾ ದೀಪಸ್ತಂಭ (7-Tier Deepstambh)",
      "ta": "பாரம்பரிய சுடுமண் விளக்கு தாங்கி (7-Tier Deepstambh)"
    },
    "description": {
      "en": "Interlocking multi-tiered earthen pillar engineered with 7 concentric oil lamp brackets for auspicious festival illumination.",
      "hi": "सात मंजिला पारंपरिक टेराकोटा दीपस्तंभ, दीपावली एवं मांगलिक अवसरों पर अखंड ज्योति प्रज्वलन हेतु आदर्श।",
      "kn": "सात मंजिला पारंपरिक टेराकोटा दीपस्तंभ, दीपावली एवं मांगलिक अवसरों पर अखंड ज्योति प्रज्वलन हेतु आदर्श।",
      "ta": "सात मंजिला पारंपरिक टेराकोटा दीपस्तंभ, दीपावली एवं मांगलिक अवसरों पर अखंड ज्योति प्रज्वलन हेतु आदर्श।"
    },
    "culturalHeritageStory": {
      "en": "Festive illumination fixture crafted with interlocking terracotta tiers.",
      "hi": "Festive illumination fixture crafted with interlocking terracotta tiers.",
      "kn": "Festive illumination fixture crafted with interlocking terracotta tiers.",
      "ta": "Festive illumination fixture crafted with interlocking terracotta tiers."
    },
    "materialsUsed": {
      "en": "Fired terracotta clay, organic red ochre wash",
      "hi": "Fired terracotta clay, organic red ochre wash",
      "kn": "Fired terracotta clay, organic red ochre wash",
      "ta": "Fired terracotta clay, organic red ochre wash"
    },
    "dimensions": {
      "en": "20 x 8 inches",
      "hi": "20 x 8 इंच",
      "kn": "20 x 8 ಇಂಚು",
      "ta": "20 x 8 அங்குலம்"
    },
    "craftCategory": "Terracotta Pottery",
    "giCraftRegion": "Gorakhpur Terracotta (Uttar Pradesh)"
  },
  "traditional terracotta diya stand (7-tier deepstambh)": {
    "title": {
      "en": "Traditional Terracotta Diya Stand (7-Tier Deepstambh)",
      "hi": "टेराकोटा सात मंजिला दीपस्तंभ",
      "kn": "ಸಾಂಪ್ರದಾಯಿಕ ಟೆರ್ರಾಕೋಟಾ ದೀಪಸ್ತಂಭ (7-Tier Deepstambh)",
      "ta": "பாரம்பரிய சுடுமண் விளக்கு தாங்கி (7-Tier Deepstambh)"
    },
    "description": {
      "en": "Interlocking multi-tiered earthen pillar engineered with 7 concentric oil lamp brackets for auspicious festival illumination.",
      "hi": "सात मंजिला पारंपरिक टेराकोटा दीपस्तंभ, दीपावली एवं मांगलिक अवसरों पर अखंड ज्योति प्रज्वलन हेतु आदर्श।",
      "kn": "सात मंजिला पारंपरिक टेराकोटा दीपस्तंभ, दीपावली एवं मांगलिक अवसरों पर अखंड ज्योति प्रज्वलन हेतु आदर्श।",
      "ta": "सात मंजिला पारंपरिक टेराकोटा दीपस्तंभ, दीपावली एवं मांगलिक अवसरों पर अखंड ज्योति प्रज्वलन हेतु आदर्श।"
    },
    "culturalHeritageStory": {
      "en": "Festive illumination fixture crafted with interlocking terracotta tiers.",
      "hi": "Festive illumination fixture crafted with interlocking terracotta tiers.",
      "kn": "Festive illumination fixture crafted with interlocking terracotta tiers.",
      "ta": "Festive illumination fixture crafted with interlocking terracotta tiers."
    },
    "materialsUsed": {
      "en": "Fired terracotta clay, organic red ochre wash",
      "hi": "Fired terracotta clay, organic red ochre wash",
      "kn": "Fired terracotta clay, organic red ochre wash",
      "ta": "Fired terracotta clay, organic red ochre wash"
    },
    "dimensions": {
      "en": "20 x 8 inches",
      "hi": "20 x 8 इंच",
      "kn": "20 x 8 ಇಂಚು",
      "ta": "20 x 8 அங்குலம்"
    },
    "craftCategory": "Terracotta Pottery",
    "giCraftRegion": "Gorakhpur Terracotta (Uttar Pradesh)"
  },
  "cmtvoiuhy000h9e66awmpn64h": {
    "title": {
      "en": "Hand-Thrown Terracotta Tea Kulhad Set (Pack of 6)",
      "hi": "पारंपरिक मिट्टी के कुल्हड़ (6 का पैक)",
      "kn": "Hand-Thrown ಟೆರ್ರಾಕೋಟಾ ಟೀ ಕುಲ್ಹಡ್ Set (ಪ್ಯಾಕ್ 6)",
      "ta": "Hand-Thrown சுடுமண் டீ குல்ஹத் Set (தொகுப்பு 6)"
    },
    "description": {
      "en": "Traditional single-use biodegradable clay chai cups thrown on potter wheels, infusing hot beverages with rich petrichor mineral warmth.",
      "hi": "चाक पर हाथ से बने पारंपरिक मिट्टी के कुल्हड़ (6 का सेट), शुद्ध सौंधी खुशबू वाली चाय का आनंद।",
      "kn": "चाक पर हाथ से बने पारंपरिक मिट्टी के कुल्हड़ (6 का सेट), शुद्ध सौंधी खुशबू वाली चाय का आनंद।",
      "ta": "चाक पर हाथ से बने पारंपरिक मिट्टी के कुल्हड़ (6 का सेट), शुद्ध सौंधी खुशबू वाली चाय का आनंद।"
    },
    "culturalHeritageStory": {
      "en": "Biodegradable traditional single-origin clay cups infusing an authentic petrichor aroma.",
      "hi": "Biodegradable traditional single-origin clay cups infusing an authentic petrichor aroma.",
      "kn": "Biodegradable traditional single-origin clay cups infusing an authentic petrichor aroma.",
      "ta": "Biodegradable traditional single-origin clay cups infusing an authentic petrichor aroma."
    },
    "materialsUsed": {
      "en": "100% natural single-origin clay, unglazed, biodegradable",
      "hi": "100% natural single-origin clay, unglazed, biodegradable",
      "kn": "100% natural single-origin clay, unglazed, biodegradable",
      "ta": "100% natural single-origin clay, unglazed, biodegradable"
    },
    "dimensions": {
      "en": "150 ml capacity",
      "hi": "150 ml क्षमता",
      "kn": "150 ml ಸಾಮರ್ಥ್ಯ",
      "ta": "150 ml கொள்ளளவு"
    },
    "craftCategory": "Terracotta Pottery",
    "giCraftRegion": "Gorakhpur Terracotta (Uttar Pradesh)"
  },
  "hand-thrown terracotta tea kulhad set (pack of 6)": {
    "title": {
      "en": "Hand-Thrown Terracotta Tea Kulhad Set (Pack of 6)",
      "hi": "पारंपरिक मिट्टी के कुल्हड़ (6 का पैक)",
      "kn": "Hand-Thrown ಟೆರ್ರಾಕೋಟಾ ಟೀ ಕುಲ್ಹಡ್ Set (ಪ್ಯಾಕ್ 6)",
      "ta": "Hand-Thrown சுடுமண் டீ குல்ஹத் Set (தொகுப்பு 6)"
    },
    "description": {
      "en": "Traditional single-use biodegradable clay chai cups thrown on potter wheels, infusing hot beverages with rich petrichor mineral warmth.",
      "hi": "चाक पर हाथ से बने पारंपरिक मिट्टी के कुल्हड़ (6 का सेट), शुद्ध सौंधी खुशबू वाली चाय का आनंद।",
      "kn": "चाक पर हाथ से बने पारंपरिक मिट्टी के कुल्हड़ (6 का सेट), शुद्ध सौंधी खुशबू वाली चाय का आनंद।",
      "ta": "चाक पर हाथ से बने पारंपरिक मिट्टी के कुल्हड़ (6 का सेट), शुद्ध सौंधी खुशबू वाली चाय का आनंद।"
    },
    "culturalHeritageStory": {
      "en": "Biodegradable traditional single-origin clay cups infusing an authentic petrichor aroma.",
      "hi": "Biodegradable traditional single-origin clay cups infusing an authentic petrichor aroma.",
      "kn": "Biodegradable traditional single-origin clay cups infusing an authentic petrichor aroma.",
      "ta": "Biodegradable traditional single-origin clay cups infusing an authentic petrichor aroma."
    },
    "materialsUsed": {
      "en": "100% natural single-origin clay, unglazed, biodegradable",
      "hi": "100% natural single-origin clay, unglazed, biodegradable",
      "kn": "100% natural single-origin clay, unglazed, biodegradable",
      "ta": "100% natural single-origin clay, unglazed, biodegradable"
    },
    "dimensions": {
      "en": "150 ml capacity",
      "hi": "150 ml क्षमता",
      "kn": "150 ml ಸಾಮರ್ಥ್ಯ",
      "ta": "150 ml கொள்ளளவு"
    },
    "craftCategory": "Terracotta Pottery",
    "giCraftRegion": "Gorakhpur Terracotta (Uttar Pradesh)"
  },
  "cmtvoiui2000j9e66kbuncsw3": {
    "title": {
      "en": "Decorative Clay Bird Whistle & Figurine Set",
      "hi": "सजावटी मिट्टी की पक्षी सीटी और खिलौने",
      "kn": "Decorative ಮಣ್ಣಿನ ಹಕ್ಕಿ ಸಿಳ್ಳೆ & Figurine Set",
      "ta": "Decorative களிமண் பறவை விசில் & Figurine Set"
    },
    "description": {
      "en": "Folk heritage water-chamber whistles that accurately recreate forest warbler melodies when filled with drops of water.",
      "hi": "पारंपरिक लोक कला मिट्टी की पक्षी सीटी, जिसमें थोड़ा पानी डालने पर सुरीली पक्षी चहचहाहट गूंजती है।",
      "kn": "पारंपरिक लोक कला मिट्टी की पक्षी सीटी, जिसमें थोड़ा पानी डालने पर सुरीली पक्षी चहचहाहट गूंजती है।",
      "ta": "पारंपरिक लोक कला मिट्टी की पक्षी सीटी, जिसमें थोड़ा पानी डालने पर सुरीली पक्षी चहचहाहट गूंजती है।"
    },
    "culturalHeritageStory": {
      "en": "Nostalgic village craft whistle mimicking forest cuckoo melodies.",
      "hi": "Nostalgic village craft whistle mimicking forest cuckoo melodies.",
      "kn": "Nostalgic village craft whistle mimicking forest cuckoo melodies.",
      "ta": "Nostalgic village craft whistle mimicking forest cuckoo melodies."
    },
    "materialsUsed": {
      "en": "Terracotta river clay, natural vegetable dyes",
      "hi": "Terracotta river clay, natural vegetable dyes",
      "kn": "Terracotta river clay, natural vegetable dyes",
      "ta": "Terracotta river clay, natural vegetable dyes"
    },
    "dimensions": {
      "en": "4 x 3 inches each",
      "hi": "4 x 3 इंच प्रत्येक",
      "kn": "4 x 3 ಇಂಚು ಪ್ರತಿಯೊಂದು",
      "ta": "4 x 3 அங்குலம் ஒவ்வொன்றும்"
    },
    "craftCategory": "Terracotta Pottery",
    "giCraftRegion": "Gorakhpur Terracotta (Uttar Pradesh)"
  },
  "decorative clay bird whistle & figurine set": {
    "title": {
      "en": "Decorative Clay Bird Whistle & Figurine Set",
      "hi": "सजावटी मिट्टी की पक्षी सीटी और खिलौने",
      "kn": "Decorative ಮಣ್ಣಿನ ಹಕ್ಕಿ ಸಿಳ್ಳೆ & Figurine Set",
      "ta": "Decorative களிமண் பறவை விசில் & Figurine Set"
    },
    "description": {
      "en": "Folk heritage water-chamber whistles that accurately recreate forest warbler melodies when filled with drops of water.",
      "hi": "पारंपरिक लोक कला मिट्टी की पक्षी सीटी, जिसमें थोड़ा पानी डालने पर सुरीली पक्षी चहचहाहट गूंजती है।",
      "kn": "पारंपरिक लोक कला मिट्टी की पक्षी सीटी, जिसमें थोड़ा पानी डालने पर सुरीली पक्षी चहचहाहट गूंजती है।",
      "ta": "पारंपरिक लोक कला मिट्टी की पक्षी सीटी, जिसमें थोड़ा पानी डालने पर सुरीली पक्षी चहचहाहट गूंजती है।"
    },
    "culturalHeritageStory": {
      "en": "Nostalgic village craft whistle mimicking forest cuckoo melodies.",
      "hi": "Nostalgic village craft whistle mimicking forest cuckoo melodies.",
      "kn": "Nostalgic village craft whistle mimicking forest cuckoo melodies.",
      "ta": "Nostalgic village craft whistle mimicking forest cuckoo melodies."
    },
    "materialsUsed": {
      "en": "Terracotta river clay, natural vegetable dyes",
      "hi": "Terracotta river clay, natural vegetable dyes",
      "kn": "Terracotta river clay, natural vegetable dyes",
      "ta": "Terracotta river clay, natural vegetable dyes"
    },
    "dimensions": {
      "en": "4 x 3 inches each",
      "hi": "4 x 3 इंच प्रत्येक",
      "kn": "4 x 3 ಇಂಚು ಪ್ರತಿಯೊಂದು",
      "ta": "4 x 3 அங்குலம் ஒவ்வொன்றும்"
    },
    "craftCategory": "Terracotta Pottery",
    "giCraftRegion": "Gorakhpur Terracotta (Uttar Pradesh)"
  },
  "cmtvoiui7000l9e66bqjfq82w": {
    "title": {
      "en": "Hand-Painted Khurja Ceramic Dinner Plates (Set of 4)",
      "hi": "हस्तनिर्मित खुर्जा सिरेमिक डिनर प्लेट (4 का सेट)",
      "kn": "Hand-Painted Khurja Ceramic Dinner Plates (ಸೆಟ್ 4)",
      "ta": "Hand-Painted Khurja Ceramic Dinner Plates (தொகுப்பு 4)"
    },
    "description": {
      "en": "Durable stoneware dinner plates fired at 1250°C in Khurja kilns, hand-painted with indelible Persian cobalt motifs.",
      "hi": "खुर्जा के कुशल कारीगरों द्वारा हस्तनिर्मित सिरेमिक डिनर प्लेट (4 का सेट)। माइक्रोवेव व डिशवॉशर सुरक्षित।",
      "kn": "खुर्जा के कुशल कारीगरों द्वारा हस्तनिर्मित सिरेमिक डिनर प्लेट (4 का सेट)। माइक्रोवेव व डिशवॉशर सुरक्षित।",
      "ta": "खुर्जा के कुशल कारीगरों द्वारा हस्तनिर्मित सिरेमिक डिनर प्लेट (4 का सेट)। माइक्रोवेव व डिशवॉशर सुरक्षित।"
    },
    "culturalHeritageStory": {
      "en": "Stoneware ceramics fired at 1250°C with indelible Mughal floral freehand brushwork.",
      "hi": "Stoneware ceramics fired at 1250°C with indelible Mughal floral freehand brushwork.",
      "kn": "Stoneware ceramics fired at 1250°C with indelible Mughal floral freehand brushwork.",
      "ta": "Stoneware ceramics fired at 1250°C with indelible Mughal floral freehand brushwork."
    },
    "materialsUsed": {
      "en": "High-fire stoneware, food-grade quartz glaze, cobalt blue pigments",
      "hi": "High-fire stoneware, food-grade quartz glaze, cobalt blue pigments",
      "kn": "High-fire stoneware, food-grade quartz glaze, cobalt blue pigments",
      "ta": "High-fire stoneware, food-grade quartz glaze, cobalt blue pigments"
    },
    "dimensions": {
      "en": "10.5 inches diameter",
      "hi": "10.5 इंच व्यास",
      "kn": "10.5 ಇಂಚು ವ್ಯಾಸ",
      "ta": "10.5 அங்குலம் விட்டம்"
    },
    "craftCategory": "Ceramic Art",
    "giCraftRegion": "Khurja Pottery (Uttar Pradesh)"
  },
  "hand-painted khurja ceramic dinner plates (set of 4)": {
    "title": {
      "en": "Hand-Painted Khurja Ceramic Dinner Plates (Set of 4)",
      "hi": "हस्तनिर्मित खुर्जा सिरेमिक डिनर प्लेट (4 का सेट)",
      "kn": "Hand-Painted Khurja Ceramic Dinner Plates (ಸೆಟ್ 4)",
      "ta": "Hand-Painted Khurja Ceramic Dinner Plates (தொகுப்பு 4)"
    },
    "description": {
      "en": "Durable stoneware dinner plates fired at 1250°C in Khurja kilns, hand-painted with indelible Persian cobalt motifs.",
      "hi": "खुर्जा के कुशल कारीगरों द्वारा हस्तनिर्मित सिरेमिक डिनर प्लेट (4 का सेट)। माइक्रोवेव व डिशवॉशर सुरक्षित।",
      "kn": "खुर्जा के कुशल कारीगरों द्वारा हस्तनिर्मित सिरेमिक डिनर प्लेट (4 का सेट)। माइक्रोवेव व डिशवॉशर सुरक्षित।",
      "ta": "खुर्जा के कुशल कारीगरों द्वारा हस्तनिर्मित सिरेमिक डिनर प्लेट (4 का सेट)। माइक्रोवेव व डिशवॉशर सुरक्षित।"
    },
    "culturalHeritageStory": {
      "en": "Stoneware ceramics fired at 1250°C with indelible Mughal floral freehand brushwork.",
      "hi": "Stoneware ceramics fired at 1250°C with indelible Mughal floral freehand brushwork.",
      "kn": "Stoneware ceramics fired at 1250°C with indelible Mughal floral freehand brushwork.",
      "ta": "Stoneware ceramics fired at 1250°C with indelible Mughal floral freehand brushwork."
    },
    "materialsUsed": {
      "en": "High-fire stoneware, food-grade quartz glaze, cobalt blue pigments",
      "hi": "High-fire stoneware, food-grade quartz glaze, cobalt blue pigments",
      "kn": "High-fire stoneware, food-grade quartz glaze, cobalt blue pigments",
      "ta": "High-fire stoneware, food-grade quartz glaze, cobalt blue pigments"
    },
    "dimensions": {
      "en": "10.5 inches diameter",
      "hi": "10.5 इंच व्यास",
      "kn": "10.5 ಇಂಚು ವ್ಯಾಸ",
      "ta": "10.5 அங்குலம் விட்டம்"
    },
    "craftCategory": "Ceramic Art",
    "giCraftRegion": "Khurja Pottery (Uttar Pradesh)"
  },
  "cmtvoiuif000n9e661giz9l7x": {
    "title": {
      "en": "Glazed Ceramic Pickle Barni Jar with Airtight Lid (2kg)",
      "hi": "पारंपरिक सिरेमिक आचार बरनी (2 किग्रा)",
      "kn": "ಮೆರುಗುಗೊಳಿಸಿದ ಸೆರಾಮಿಕ್ Pickle Barni Jar with Airtight Lid (2kg)",
      "ta": "பளபளப்பான பீங்கான் Pickle Barni Jar with Airtight Lid (2kg)"
    },
    "description": {
      "en": "Traditional Indian achaar barni with dual-tone mustard and cream glaze that protects traditional pickles from moisture.",
      "hi": "पारंपरिक दोहरी टोन वाली सिरेमिक अचार बरनी (2 किग्रा), आम और नींबू के अचार को वर्षभर ताजा रखने हेतु।",
      "kn": "पारंपरिक दोहरी टोन वाली सिरेमिक अचार बरनी (2 किग्रा), आम और नींबू के अचार को वर्षभर ताजा रखने हेतु।",
      "ta": "पारंपरिक दोहरी टोन वाली सिरेमिक अचार बरनी (2 किग्रा), आम और नींबू के अचार को वर्षभर ताजा रखने हेतु।"
    },
    "culturalHeritageStory": {
      "en": "Non-reactive ceramic glazing preserves traditional mango and lime pickles naturally.",
      "hi": "Non-reactive ceramic glazing preserves traditional mango and lime pickles naturally.",
      "kn": "Non-reactive ceramic glazing preserves traditional mango and lime pickles naturally.",
      "ta": "Non-reactive ceramic glazing preserves traditional mango and lime pickles naturally."
    },
    "materialsUsed": {
      "en": "Vitrified Khurja ceramic, lead-free food-safe gloss glaze",
      "hi": "Vitrified Khurja ceramic, lead-free food-safe gloss glaze",
      "kn": "Vitrified Khurja ceramic, lead-free food-safe gloss glaze",
      "ta": "Vitrified Khurja ceramic, lead-free food-safe gloss glaze"
    },
    "dimensions": {
      "en": "9 x 6.5 inches",
      "hi": "9 x 6.5 इंच",
      "kn": "9 x 6.5 ಇಂಚು",
      "ta": "9 x 6.5 அங்குலம்"
    },
    "craftCategory": "Ceramic Art",
    "giCraftRegion": "Khurja Pottery (Uttar Pradesh)"
  },
  "glazed ceramic pickle barni jar with airtight lid (2kg)": {
    "title": {
      "en": "Glazed Ceramic Pickle Barni Jar with Airtight Lid (2kg)",
      "hi": "पारंपरिक सिरेमिक आचार बरनी (2 किग्रा)",
      "kn": "ಮೆರುಗುಗೊಳಿಸಿದ ಸೆರಾಮಿಕ್ Pickle Barni Jar with Airtight Lid (2kg)",
      "ta": "பளபளப்பான பீங்கான் Pickle Barni Jar with Airtight Lid (2kg)"
    },
    "description": {
      "en": "Traditional Indian achaar barni with dual-tone mustard and cream glaze that protects traditional pickles from moisture.",
      "hi": "पारंपरिक दोहरी टोन वाली सिरेमिक अचार बरनी (2 किग्रा), आम और नींबू के अचार को वर्षभर ताजा रखने हेतु।",
      "kn": "पारंपरिक दोहरी टोन वाली सिरेमिक अचार बरनी (2 किग्रा), आम और नींबू के अचार को वर्षभर ताजा रखने हेतु।",
      "ta": "पारंपरिक दोहरी टोन वाली सिरेमिक अचार बरनी (2 किग्रा), आम और नींबू के अचार को वर्षभर ताजा रखने हेतु।"
    },
    "culturalHeritageStory": {
      "en": "Non-reactive ceramic glazing preserves traditional mango and lime pickles naturally.",
      "hi": "Non-reactive ceramic glazing preserves traditional mango and lime pickles naturally.",
      "kn": "Non-reactive ceramic glazing preserves traditional mango and lime pickles naturally.",
      "ta": "Non-reactive ceramic glazing preserves traditional mango and lime pickles naturally."
    },
    "materialsUsed": {
      "en": "Vitrified Khurja ceramic, lead-free food-safe gloss glaze",
      "hi": "Vitrified Khurja ceramic, lead-free food-safe gloss glaze",
      "kn": "Vitrified Khurja ceramic, lead-free food-safe gloss glaze",
      "ta": "Vitrified Khurja ceramic, lead-free food-safe gloss glaze"
    },
    "dimensions": {
      "en": "9 x 6.5 inches",
      "hi": "9 x 6.5 इंच",
      "kn": "9 x 6.5 ಇಂಚು",
      "ta": "9 x 6.5 அங்குலம்"
    },
    "craftCategory": "Ceramic Art",
    "giCraftRegion": "Khurja Pottery (Uttar Pradesh)"
  },
  "cmtvoiuij000p9e669llt7xk4": {
    "title": {
      "en": "Cobalt Blue Hand-Decorated Ceramic Coffee Mugs (Set of 2)",
      "hi": "कोबाल्ट ब्लू सिरेमिक कॉफी मग (2 का सेट)",
      "kn": "Cobalt Blue Hand-Decorated Ceramic Coffee Mugs (ಸೆಟ್ 2)",
      "ta": "Cobalt Blue Hand-Decorated Ceramic Coffee Mugs (தொகுப்பு 2)"
    },
    "description": {
      "en": "Ergonomic 350ml stoneware artisan mugs hand-decorated with indigo floral brushwork and comfortable rounded thumb grips.",
      "hi": "कोबाल्ट ब्लू हस्त-चित्रित सिरेमिक कॉफी मग (2 का सेट), 350 मिली क्षमता, उत्कृष्ट ग्रिप एवं टिकाऊपन।",
      "kn": "कोबाल्ट ब्लू हस्त-चित्रित सिरेमिक कॉफी मग (2 का सेट), 350 मिली क्षमता, उत्कृष्ट ग्रिप एवं टिकाऊपन।",
      "ta": "कोबाल्ट ब्लू हस्त-चित्रित सिरेमिक कॉफी मग (2 का सेट), 350 मिली क्षमता, उत्कृष्ट ग्रिप एवं टिकाऊपन।"
    },
    "culturalHeritageStory": {
      "en": "Lead-free durable kitchenware hand-glazed by Khurja cottage artisans.",
      "hi": "Lead-free durable kitchenware hand-glazed by Khurja cottage artisans.",
      "kn": "Lead-free durable kitchenware hand-glazed by Khurja cottage artisans.",
      "ta": "Lead-free durable kitchenware hand-glazed by Khurja cottage artisans."
    },
    "materialsUsed": {
      "en": "High-fire stoneware ceramic, cobalt mineral glaze",
      "hi": "High-fire stoneware ceramic, cobalt mineral glaze",
      "kn": "High-fire stoneware ceramic, cobalt mineral glaze",
      "ta": "High-fire stoneware ceramic, cobalt mineral glaze"
    },
    "dimensions": {
      "en": "350 ml capacity",
      "hi": "350 ml क्षमता",
      "kn": "350 ml ಸಾಮರ್ಥ್ಯ",
      "ta": "350 ml கொள்ளளவு"
    },
    "craftCategory": "Ceramic Art",
    "giCraftRegion": "Khurja Pottery (Uttar Pradesh)"
  },
  "cobalt blue hand-decorated ceramic coffee mugs (set of 2)": {
    "title": {
      "en": "Cobalt Blue Hand-Decorated Ceramic Coffee Mugs (Set of 2)",
      "hi": "कोबाल्ट ब्लू सिरेमिक कॉफी मग (2 का सेट)",
      "kn": "Cobalt Blue Hand-Decorated Ceramic Coffee Mugs (ಸೆಟ್ 2)",
      "ta": "Cobalt Blue Hand-Decorated Ceramic Coffee Mugs (தொகுப்பு 2)"
    },
    "description": {
      "en": "Ergonomic 350ml stoneware artisan mugs hand-decorated with indigo floral brushwork and comfortable rounded thumb grips.",
      "hi": "कोबाल्ट ब्लू हस्त-चित्रित सिरेमिक कॉफी मग (2 का सेट), 350 मिली क्षमता, उत्कृष्ट ग्रिप एवं टिकाऊपन।",
      "kn": "कोबाल्ट ब्लू हस्त-चित्रित सिरेमिक कॉफी मग (2 का सेट), 350 मिली क्षमता, उत्कृष्ट ग्रिप एवं टिकाऊपन।",
      "ta": "कोबाल्ट ब्लू हस्त-चित्रित सिरेमिक कॉफी मग (2 का सेट), 350 मिली क्षमता, उत्कृष्ट ग्रिप एवं टिकाऊपन।"
    },
    "culturalHeritageStory": {
      "en": "Lead-free durable kitchenware hand-glazed by Khurja cottage artisans.",
      "hi": "Lead-free durable kitchenware hand-glazed by Khurja cottage artisans.",
      "kn": "Lead-free durable kitchenware hand-glazed by Khurja cottage artisans.",
      "ta": "Lead-free durable kitchenware hand-glazed by Khurja cottage artisans."
    },
    "materialsUsed": {
      "en": "High-fire stoneware ceramic, cobalt mineral glaze",
      "hi": "High-fire stoneware ceramic, cobalt mineral glaze",
      "kn": "High-fire stoneware ceramic, cobalt mineral glaze",
      "ta": "High-fire stoneware ceramic, cobalt mineral glaze"
    },
    "dimensions": {
      "en": "350 ml capacity",
      "hi": "350 ml क्षमता",
      "kn": "350 ml ಸಾಮರ್ಥ್ಯ",
      "ta": "350 ml கொள்ளளவு"
    },
    "craftCategory": "Ceramic Art",
    "giCraftRegion": "Khurja Pottery (Uttar Pradesh)"
  },
  "cmtvoiuin000r9e66u7oiwgey": {
    "title": {
      "en": "Moroccan-Motif Ceramic Bathroom Accessory Set (4 Pcs)",
      "hi": "सिरेमिक बाथरूम सेट (4 पीस)",
      "kn": "सिरेमिक बाथरूम सेट (4 पीस)",
      "ta": "सिरेमिक बाथरूम सेट (4 पीस)"
    },
    "description": {
      "en": "Complete vanity set including lotion dispenser, tumbler, toothbrush holder, and soap dish in Moroccan blue lattice glaze.",
      "hi": "खुर्जा सिरेमिक्स का 4-पीस लक्जरी बाथरूम सेट, मोरक्कन ज्यामितीय फ्लोरल पैटर्न के साथ।",
      "kn": "खुर्जा सिरेमिक्स का 4-पीस लक्जरी बाथरूम सेट, मोरक्कन ज्यामितीय फ्लोरल पैटर्न के साथ।",
      "ta": "खुर्जा सिरेमिक्स का 4-पीस लक्जरी बाथरूम सेट, मोरक्कन ज्यामितीय फ्लोरल पैटर्न के साथ।"
    },
    "culturalHeritageStory": {
      "en": "Hand-piped ceramic glazing with geometric floral symmetry.",
      "hi": "Hand-piped ceramic glazing with geometric floral symmetry.",
      "kn": "Hand-piped ceramic glazing with geometric floral symmetry.",
      "ta": "Hand-piped ceramic glazing with geometric floral symmetry."
    },
    "materialsUsed": {
      "en": "Glazed stoneware ceramic, brass pump dispenser, water-resistant glaze",
      "hi": "Glazed stoneware ceramic, brass pump dispenser, water-resistant glaze",
      "kn": "Glazed stoneware ceramic, brass pump dispenser, water-resistant glaze",
      "ta": "Glazed stoneware ceramic, brass pump dispenser, water-resistant glaze"
    },
    "dimensions": {
      "en": "Standard Dispenser & Tray",
      "hi": "Standard Dispenser & Tray",
      "kn": "Standard Dispenser & Tray",
      "ta": "Standard Dispenser & Tray"
    },
    "craftCategory": "Ceramic Art",
    "giCraftRegion": "Khurja Pottery (Uttar Pradesh)"
  },
  "moroccan-motif ceramic bathroom accessory set (4 pcs)": {
    "title": {
      "en": "Moroccan-Motif Ceramic Bathroom Accessory Set (4 Pcs)",
      "hi": "सिरेमिक बाथरूम सेट (4 पीस)",
      "kn": "सिरेमिक बाथरूम सेट (4 पीस)",
      "ta": "सिरेमिक बाथरूम सेट (4 पीस)"
    },
    "description": {
      "en": "Complete vanity set including lotion dispenser, tumbler, toothbrush holder, and soap dish in Moroccan blue lattice glaze.",
      "hi": "खुर्जा सिरेमिक्स का 4-पीस लक्जरी बाथरूम सेट, मोरक्कन ज्यामितीय फ्लोरल पैटर्न के साथ।",
      "kn": "खुर्जा सिरेमिक्स का 4-पीस लक्जरी बाथरूम सेट, मोरक्कन ज्यामितीय फ्लोरल पैटर्न के साथ।",
      "ta": "खुर्जा सिरेमिक्स का 4-पीस लक्जरी बाथरूम सेट, मोरक्कन ज्यामितीय फ्लोरल पैटर्न के साथ।"
    },
    "culturalHeritageStory": {
      "en": "Hand-piped ceramic glazing with geometric floral symmetry.",
      "hi": "Hand-piped ceramic glazing with geometric floral symmetry.",
      "kn": "Hand-piped ceramic glazing with geometric floral symmetry.",
      "ta": "Hand-piped ceramic glazing with geometric floral symmetry."
    },
    "materialsUsed": {
      "en": "Glazed stoneware ceramic, brass pump dispenser, water-resistant glaze",
      "hi": "Glazed stoneware ceramic, brass pump dispenser, water-resistant glaze",
      "kn": "Glazed stoneware ceramic, brass pump dispenser, water-resistant glaze",
      "ta": "Glazed stoneware ceramic, brass pump dispenser, water-resistant glaze"
    },
    "dimensions": {
      "en": "Standard Dispenser & Tray",
      "hi": "Standard Dispenser & Tray",
      "kn": "Standard Dispenser & Tray",
      "ta": "Standard Dispenser & Tray"
    },
    "craftCategory": "Ceramic Art",
    "giCraftRegion": "Khurja Pottery (Uttar Pradesh)"
  },
  "cmtvoiuis000t9e665p80agkb": {
    "title": {
      "en": "Handmade Stoneware Soup Bowls with Spoons (Set of 4)",
      "hi": "सिरेमिक सूप बाउल चम्मच सहित (4 का सेट)",
      "kn": "Handmade Stoneware Soup Bowls with Spoons (ಸೆಟ್ 4)",
      "ta": "Handmade Stoneware Soup Bowls with Spoons (தொகுப்பு 4)"
    },
    "description": {
      "en": "Generous 450ml deep stoneware soup and noodle bowls accompanied by matching hand-dipped ceramic broth spoons.",
      "hi": "सिरेमिक सूप बाउल चम्मच सहित (4 का सेट), 450 मिली क्षमता, उच्च गुणवत्ता वाली फूड-ग्रेड ग्लेजिंग।",
      "kn": "सिरेमिक सूप बाउल चम्मच सहित (4 का सेट), 450 मिली क्षमता, उच्च गुणवत्ता वाली फूड-ग्रेड ग्लेजिंग।",
      "ta": "सिरेमिक सूप बाउल चम्मच सहित (4 का सेट), 450 मिली क्षमता, उच्च गुणवत्ता वाली फूड-ग्रेड ग्लेजिंग।"
    },
    "culturalHeritageStory": {
      "en": "Double-glazed microwave safe stoneware bowls with earthen rim finish.",
      "hi": "Double-glazed microwave safe stoneware bowls with earthen rim finish.",
      "kn": "Double-glazed microwave safe stoneware bowls with earthen rim finish.",
      "ta": "Double-glazed microwave safe stoneware bowls with earthen rim finish."
    },
    "materialsUsed": {
      "en": "Double-glazed stoneware ceramic, food-grade earthen finish",
      "hi": "Double-glazed stoneware ceramic, food-grade earthen finish",
      "kn": "Double-glazed stoneware ceramic, food-grade earthen finish",
      "ta": "Double-glazed stoneware ceramic, food-grade earthen finish"
    },
    "dimensions": {
      "en": "450 ml each",
      "hi": "450 ml प्रत्येक",
      "kn": "450 ml ಪ್ರತಿಯೊಂದು",
      "ta": "450 ml ஒவ்வொன்றும்"
    },
    "craftCategory": "Ceramic Art",
    "giCraftRegion": "Khurja Pottery (Uttar Pradesh)"
  },
  "handmade stoneware soup bowls with spoons (set of 4)": {
    "title": {
      "en": "Handmade Stoneware Soup Bowls with Spoons (Set of 4)",
      "hi": "सिरेमिक सूप बाउल चम्मच सहित (4 का सेट)",
      "kn": "Handmade Stoneware Soup Bowls with Spoons (ಸೆಟ್ 4)",
      "ta": "Handmade Stoneware Soup Bowls with Spoons (தொகுப்பு 4)"
    },
    "description": {
      "en": "Generous 450ml deep stoneware soup and noodle bowls accompanied by matching hand-dipped ceramic broth spoons.",
      "hi": "सिरेमिक सूप बाउल चम्मच सहित (4 का सेट), 450 मिली क्षमता, उच्च गुणवत्ता वाली फूड-ग्रेड ग्लेजिंग।",
      "kn": "सिरेमिक सूप बाउल चम्मच सहित (4 का सेट), 450 मिली क्षमता, उच्च गुणवत्ता वाली फूड-ग्रेड ग्लेजिंग।",
      "ta": "सिरेमिक सूप बाउल चम्मच सहित (4 का सेट), 450 मिली क्षमता, उच्च गुणवत्ता वाली फूड-ग्रेड ग्लेजिंग।"
    },
    "culturalHeritageStory": {
      "en": "Double-glazed microwave safe stoneware bowls with earthen rim finish.",
      "hi": "Double-glazed microwave safe stoneware bowls with earthen rim finish.",
      "kn": "Double-glazed microwave safe stoneware bowls with earthen rim finish.",
      "ta": "Double-glazed microwave safe stoneware bowls with earthen rim finish."
    },
    "materialsUsed": {
      "en": "Double-glazed stoneware ceramic, food-grade earthen finish",
      "hi": "Double-glazed stoneware ceramic, food-grade earthen finish",
      "kn": "Double-glazed stoneware ceramic, food-grade earthen finish",
      "ta": "Double-glazed stoneware ceramic, food-grade earthen finish"
    },
    "dimensions": {
      "en": "450 ml each",
      "hi": "450 ml प्रत्येक",
      "kn": "450 ml ಪ್ರತಿಯೊಂದು",
      "ta": "450 ml ஒவ்வொன்றும்"
    },
    "craftCategory": "Ceramic Art",
    "giCraftRegion": "Khurja Pottery (Uttar Pradesh)"
  },
  "cmtvoiuiw000v9e66jhfl5e55": {
    "title": {
      "en": "Khurja Artisanal Handcrafted Ceramic Oil Dispenser (750ml)",
      "hi": "हस्तनिर्मित सिरेमिक तेल बोतल",
      "kn": "Khurja Artisanal ಹಸ್ತನಿರ್ಮಿತ Ceramic Oil Dispenser (750ml)",
      "ta": "Khurja Artisanal கைவினை Ceramic Oil Dispenser (750ml)"
    },
    "description": {
      "en": "Opaque stoneware bottle keeping cooking and olive oils protected from ambient UV light, featuring a controlled pour spout.",
      "hi": "हस्तनिर्मित सिरेमिक तेल बोतल (750 मिली), तेल को सूर्य की रोशनी से सुरक्षित रखकर ताजगी बनाए रखती है।",
      "kn": "हस्तनिर्मित सिरेमिक तेल बोतल (750 मिली), तेल को सूर्य की रोशनी से सुरक्षित रखकर ताजगी बनाए रखती है।",
      "ta": "हस्तनिर्मित सिरेमिक तेल बोतल (750 मिली), तेल को सूर्य की रोशनी से सुरक्षित रखकर ताजगी बनाए रखती है।"
    },
    "culturalHeritageStory": {
      "en": "Drip-free ceramic kitchenware keeping cold-pressed oils shielded from direct sunlight.",
      "hi": "Drip-free ceramic kitchenware keeping cold-pressed oils shielded from direct sunlight.",
      "kn": "Drip-free ceramic kitchenware keeping cold-pressed oils shielded from direct sunlight.",
      "ta": "Drip-free ceramic kitchenware keeping cold-pressed oils shielded from direct sunlight."
    },
    "materialsUsed": {
      "en": "Non-reactive vitrified ceramic, stainless steel drip-free pourer",
      "hi": "Non-reactive vitrified ceramic, stainless steel drip-free pourer",
      "kn": "Non-reactive vitrified ceramic, stainless steel drip-free pourer",
      "ta": "Non-reactive vitrified ceramic, stainless steel drip-free pourer"
    },
    "dimensions": {
      "en": "10 x 3.5 inches",
      "hi": "10 x 3.5 इंच",
      "kn": "10 x 3.5 ಇಂಚು",
      "ta": "10 x 3.5 அங்குலம்"
    },
    "craftCategory": "Ceramic Art",
    "giCraftRegion": "Khurja Pottery (Uttar Pradesh)"
  },
  "khurja artisanal handcrafted ceramic oil dispenser (750ml)": {
    "title": {
      "en": "Khurja Artisanal Handcrafted Ceramic Oil Dispenser (750ml)",
      "hi": "हस्तनिर्मित सिरेमिक तेल बोतल",
      "kn": "Khurja Artisanal ಹಸ್ತನಿರ್ಮಿತ Ceramic Oil Dispenser (750ml)",
      "ta": "Khurja Artisanal கைவினை Ceramic Oil Dispenser (750ml)"
    },
    "description": {
      "en": "Opaque stoneware bottle keeping cooking and olive oils protected from ambient UV light, featuring a controlled pour spout.",
      "hi": "हस्तनिर्मित सिरेमिक तेल बोतल (750 मिली), तेल को सूर्य की रोशनी से सुरक्षित रखकर ताजगी बनाए रखती है।",
      "kn": "हस्तनिर्मित सिरेमिक तेल बोतल (750 मिली), तेल को सूर्य की रोशनी से सुरक्षित रखकर ताजगी बनाए रखती है।",
      "ta": "हस्तनिर्मित सिरेमिक तेल बोतल (750 मिली), तेल को सूर्य की रोशनी से सुरक्षित रखकर ताजगी बनाए रखती है।"
    },
    "culturalHeritageStory": {
      "en": "Drip-free ceramic kitchenware keeping cold-pressed oils shielded from direct sunlight.",
      "hi": "Drip-free ceramic kitchenware keeping cold-pressed oils shielded from direct sunlight.",
      "kn": "Drip-free ceramic kitchenware keeping cold-pressed oils shielded from direct sunlight.",
      "ta": "Drip-free ceramic kitchenware keeping cold-pressed oils shielded from direct sunlight."
    },
    "materialsUsed": {
      "en": "Non-reactive vitrified ceramic, stainless steel drip-free pourer",
      "hi": "Non-reactive vitrified ceramic, stainless steel drip-free pourer",
      "kn": "Non-reactive vitrified ceramic, stainless steel drip-free pourer",
      "ta": "Non-reactive vitrified ceramic, stainless steel drip-free pourer"
    },
    "dimensions": {
      "en": "10 x 3.5 inches",
      "hi": "10 x 3.5 इंच",
      "kn": "10 x 3.5 ಇಂಚು",
      "ta": "10 x 3.5 அங்குலம்"
    },
    "craftCategory": "Ceramic Art",
    "giCraftRegion": "Khurja Pottery (Uttar Pradesh)"
  },
  "cmtvoiuj1000x9e66ajz53csq": {
    "title": {
      "en": "Hand-Drawn Ceramic Planter Pot with Drainage Tray",
      "hi": "हस्तनिर्मित सिरेमिक गमला ट्रे सहित",
      "kn": "Hand-Drawn Ceramic Planter ಮಡಕೆ with Drainage Tray",
      "ta": "Hand-Drawn Ceramic Planter மண்பானை with Drainage Tray"
    },
    "description": {
      "en": "Weatherproof cylindrical ceramic botanical planter with internal root drainage hole and detached leak-proof saucer.",
      "hi": "हस्त-चित्रित सिरेमिक गमला जल निकासी ट्रे सहित, इनडोर पौधों के लिए आकर्षक और टिकाऊ।",
      "kn": "हस्त-चित्रित सिरेमिक गमला जल निकासी ट्रे सहित, इनडोर पौधों के लिए आकर्षक और टिकाऊ।",
      "ta": "हस्त-चित्रित सिरेमिक गमला जल निकासी ट्रे सहित, इनडोर पौधों के लिए आकर्षक और टिकाऊ।"
    },
    "culturalHeritageStory": {
      "en": "Vibrant outdoor glazed pot designed to nourish indoor botanical plants.",
      "hi": "Vibrant outdoor glazed pot designed to nourish indoor botanical plants.",
      "kn": "Vibrant outdoor glazed pot designed to nourish indoor botanical plants.",
      "ta": "Vibrant outdoor glazed pot designed to nourish indoor botanical plants."
    },
    "materialsUsed": {
      "en": "Glazed high-temperature stoneware ceramic",
      "hi": "Glazed high-temperature stoneware ceramic",
      "kn": "Glazed high-temperature stoneware ceramic",
      "ta": "Glazed high-temperature stoneware ceramic"
    },
    "dimensions": {
      "en": "7 x 7 inches",
      "hi": "7 x 7 इंच",
      "kn": "7 x 7 ಇಂಚು",
      "ta": "7 x 7 அங்குலம்"
    },
    "craftCategory": "Ceramic Art",
    "giCraftRegion": "Khurja Pottery (Uttar Pradesh)"
  },
  "hand-drawn ceramic planter pot with drainage tray": {
    "title": {
      "en": "Hand-Drawn Ceramic Planter Pot with Drainage Tray",
      "hi": "हस्तनिर्मित सिरेमिक गमला ट्रे सहित",
      "kn": "Hand-Drawn Ceramic Planter ಮಡಕೆ with Drainage Tray",
      "ta": "Hand-Drawn Ceramic Planter மண்பானை with Drainage Tray"
    },
    "description": {
      "en": "Weatherproof cylindrical ceramic botanical planter with internal root drainage hole and detached leak-proof saucer.",
      "hi": "हस्त-चित्रित सिरेमिक गमला जल निकासी ट्रे सहित, इनडोर पौधों के लिए आकर्षक और टिकाऊ।",
      "kn": "हस्त-चित्रित सिरेमिक गमला जल निकासी ट्रे सहित, इनडोर पौधों के लिए आकर्षक और टिकाऊ।",
      "ta": "हस्त-चित्रित सिरेमिक गमला जल निकासी ट्रे सहित, इनडोर पौधों के लिए आकर्षक और टिकाऊ।"
    },
    "culturalHeritageStory": {
      "en": "Vibrant outdoor glazed pot designed to nourish indoor botanical plants.",
      "hi": "Vibrant outdoor glazed pot designed to nourish indoor botanical plants.",
      "kn": "Vibrant outdoor glazed pot designed to nourish indoor botanical plants.",
      "ta": "Vibrant outdoor glazed pot designed to nourish indoor botanical plants."
    },
    "materialsUsed": {
      "en": "Glazed high-temperature stoneware ceramic",
      "hi": "Glazed high-temperature stoneware ceramic",
      "kn": "Glazed high-temperature stoneware ceramic",
      "ta": "Glazed high-temperature stoneware ceramic"
    },
    "dimensions": {
      "en": "7 x 7 inches",
      "hi": "7 x 7 इंच",
      "kn": "7 x 7 ಇಂಚು",
      "ta": "7 x 7 அங்குலம்"
    },
    "craftCategory": "Ceramic Art",
    "giCraftRegion": "Khurja Pottery (Uttar Pradesh)"
  },
  "cmtvoiuj5000z9e66497a0voe": {
    "title": {
      "en": "Glazed Stoneware Teapot with Bamboo Handle (800ml)",
      "hi": "ग्लेज्ड सिरेमिक चायदानी बांस हैंडल सहित",
      "kn": "Glazed Stoneware Teapot with ಬಿದಿರಿನ Handle (800ml)",
      "ta": "Glazed Stoneware Teapot with மூங்கில் Handle (800ml)"
    },
    "description": {
      "en": "Artisanal loose-leaf teapot engineered with internal clay strainer pores and natural heat-insulating bent bamboo handle.",
      "hi": "ग्लेज्ड सिरेमिक चायदानी प्राकृतिक बांस हैंडल के साथ (800 मिली), पारंपरिक चाय परोसने का श्रेष्ठ साधन।",
      "kn": "ग्लेज्ड सिरेमिक चायदानी प्राकृतिक बांस हैंडल के साथ (800 मिली), पारंपरिक चाय परोसने का श्रेष्ठ साधन।",
      "ta": "ग्लेज्ड सिरेमिक चायदानी प्राकृतिक बांस हैंडल के साथ (800 मिली), पारंपरिक चाय परोसने का श्रेष्ठ साधन।"
    },
    "culturalHeritageStory": {
      "en": "Artisan tea pot balancing modern functional utility with Khurja heritage.",
      "hi": "Artisan tea pot balancing modern functional utility with Khurja heritage.",
      "kn": "Artisan tea pot balancing modern functional utility with Khurja heritage.",
      "ta": "Artisan tea pot balancing modern functional utility with Khurja heritage."
    },
    "materialsUsed": {
      "en": "High-fire ceramic stoneware, natural steam-bent bamboo handle, brass pins",
      "hi": "High-fire ceramic stoneware, natural steam-bent bamboo handle, brass pins",
      "kn": "High-fire ceramic stoneware, natural steam-bent bamboo handle, brass pins",
      "ta": "High-fire ceramic stoneware, natural steam-bent bamboo handle, brass pins"
    },
    "dimensions": {
      "en": "800 ml capacity",
      "hi": "800 ml क्षमता",
      "kn": "800 ml ಸಾಮರ್ಥ್ಯ",
      "ta": "800 ml கொள்ளளவு"
    },
    "craftCategory": "Ceramic Art",
    "giCraftRegion": "Khurja Pottery (Uttar Pradesh)"
  },
  "glazed stoneware teapot with bamboo handle (800ml)": {
    "title": {
      "en": "Glazed Stoneware Teapot with Bamboo Handle (800ml)",
      "hi": "ग्लेज्ड सिरेमिक चायदानी बांस हैंडल सहित",
      "kn": "Glazed Stoneware Teapot with ಬಿದಿರಿನ Handle (800ml)",
      "ta": "Glazed Stoneware Teapot with மூங்கில் Handle (800ml)"
    },
    "description": {
      "en": "Artisanal loose-leaf teapot engineered with internal clay strainer pores and natural heat-insulating bent bamboo handle.",
      "hi": "ग्लेज्ड सिरेमिक चायदानी प्राकृतिक बांस हैंडल के साथ (800 मिली), पारंपरिक चाय परोसने का श्रेष्ठ साधन।",
      "kn": "ग्लेज्ड सिरेमिक चायदानी प्राकृतिक बांस हैंडल के साथ (800 मिली), पारंपरिक चाय परोसने का श्रेष्ठ साधन।",
      "ta": "ग्लेज्ड सिरेमिक चायदानी प्राकृतिक बांस हैंडल के साथ (800 मिली), पारंपरिक चाय परोसने का श्रेष्ठ साधन।"
    },
    "culturalHeritageStory": {
      "en": "Artisan tea pot balancing modern functional utility with Khurja heritage.",
      "hi": "Artisan tea pot balancing modern functional utility with Khurja heritage.",
      "kn": "Artisan tea pot balancing modern functional utility with Khurja heritage.",
      "ta": "Artisan tea pot balancing modern functional utility with Khurja heritage."
    },
    "materialsUsed": {
      "en": "High-fire ceramic stoneware, natural steam-bent bamboo handle, brass pins",
      "hi": "High-fire ceramic stoneware, natural steam-bent bamboo handle, brass pins",
      "kn": "High-fire ceramic stoneware, natural steam-bent bamboo handle, brass pins",
      "ta": "High-fire ceramic stoneware, natural steam-bent bamboo handle, brass pins"
    },
    "dimensions": {
      "en": "800 ml capacity",
      "hi": "800 ml क्षमता",
      "kn": "800 ml ಸಾಮರ್ಥ್ಯ",
      "ta": "800 ml கொள்ளளவு"
    },
    "craftCategory": "Ceramic Art",
    "giCraftRegion": "Khurja Pottery (Uttar Pradesh)"
  },
  "cmtvoiuj900119e66t64r7trh": {
    "title": {
      "en": "Handcrafted Ceramic Serving Platter with Dip Bowl",
      "hi": "सिरेमिक सर्विंग प्लेटर कटोरी सहित",
      "kn": "ಹಸ್ತನಿರ್ಮಿತ Ceramic Serving Platter with Dip Bowl",
      "ta": "கைவினை Ceramic Serving Platter with Dip Bowl"
    },
    "description": {
      "en": "Rectangular appetizer platter featuring an integrated circular dipping well and hand-sponged emerald turquoise glaze.",
      "hi": "सिरेमिक सर्विंग प्लेटर एकीकृत चटनी बाउल सहित, सुंदर हस्तनिर्मित फिनिश।",
      "kn": "सिरेमिक सर्विंग प्लेटर एकीकृत चटनी बाउल सहित, सुंदर हस्तनिर्मित फिनिश।",
      "ta": "सिरेमिक सर्विंग प्लेटर एकीकृत चटनी बाउल सहित, सुंदर हस्तनिर्मित फिनिश।"
    },
    "culturalHeritageStory": {
      "en": "Elegantly shaped platter for culinary presentation with hand-applied turquoise glaze.",
      "hi": "Elegantly shaped platter for culinary presentation with hand-applied turquoise glaze.",
      "kn": "Elegantly shaped platter for culinary presentation with hand-applied turquoise glaze.",
      "ta": "Elegantly shaped platter for culinary presentation with hand-applied turquoise glaze."
    },
    "materialsUsed": {
      "en": "Vitrified food-grade stoneware ceramic",
      "hi": "Vitrified food-grade stoneware ceramic",
      "kn": "Vitrified food-grade stoneware ceramic",
      "ta": "Vitrified food-grade stoneware ceramic"
    },
    "dimensions": {
      "en": "13 x 8 inches",
      "hi": "13 x 8 इंच",
      "kn": "13 x 8 ಇಂಚು",
      "ta": "13 x 8 அங்குலம்"
    },
    "craftCategory": "Ceramic Art",
    "giCraftRegion": "Khurja Pottery (Uttar Pradesh)"
  },
  "handcrafted ceramic serving platter with dip bowl": {
    "title": {
      "en": "Handcrafted Ceramic Serving Platter with Dip Bowl",
      "hi": "सिरेमिक सर्विंग प्लेटर कटोरी सहित",
      "kn": "ಹಸ್ತನಿರ್ಮಿತ Ceramic Serving Platter with Dip Bowl",
      "ta": "கைவினை Ceramic Serving Platter with Dip Bowl"
    },
    "description": {
      "en": "Rectangular appetizer platter featuring an integrated circular dipping well and hand-sponged emerald turquoise glaze.",
      "hi": "सिरेमिक सर्विंग प्लेटर एकीकृत चटनी बाउल सहित, सुंदर हस्तनिर्मित फिनिश।",
      "kn": "सिरेमिक सर्विंग प्लेटर एकीकृत चटनी बाउल सहित, सुंदर हस्तनिर्मित फिनिश।",
      "ta": "सिरेमिक सर्विंग प्लेटर एकीकृत चटनी बाउल सहित, सुंदर हस्तनिर्मित फिनिश।"
    },
    "culturalHeritageStory": {
      "en": "Elegantly shaped platter for culinary presentation with hand-applied turquoise glaze.",
      "hi": "Elegantly shaped platter for culinary presentation with hand-applied turquoise glaze.",
      "kn": "Elegantly shaped platter for culinary presentation with hand-applied turquoise glaze.",
      "ta": "Elegantly shaped platter for culinary presentation with hand-applied turquoise glaze."
    },
    "materialsUsed": {
      "en": "Vitrified food-grade stoneware ceramic",
      "hi": "Vitrified food-grade stoneware ceramic",
      "kn": "Vitrified food-grade stoneware ceramic",
      "ta": "Vitrified food-grade stoneware ceramic"
    },
    "dimensions": {
      "en": "13 x 8 inches",
      "hi": "13 x 8 इंच",
      "kn": "13 x 8 ಇಂಚು",
      "ta": "13 x 8 அங்குலம்"
    },
    "craftCategory": "Ceramic Art",
    "giCraftRegion": "Khurja Pottery (Uttar Pradesh)"
  },
  "cmtvoiuje00139e66s4h7y2hc": {
    "title": {
      "en": "Ceramic Spice Storage Jar Carousel (Set of 6)",
      "hi": "सिरेमिक मसाला जार सेट (6 का सेट)",
      "kn": "Ceramic Spice Storage Jar Carousel (ಸೆಟ್ 6)",
      "ta": "Ceramic Spice Storage Jar Carousel (தொகுப்பு 6)"
    },
    "description": {
      "en": "Uniform canister series keeping whole spices and roasted masala blends crisp and aromatic against kitchen humidity.",
      "hi": "सिरेमिक मसाला जार सेट (6 का सेट), प्राकृतिक कॉर्क ढक्कन जो मसालों की खुशबू बनाए रखते हैं।",
      "kn": "सिरेमिक मसाला जार सेट (6 का सेट), प्राकृतिक कॉर्क ढक्कन जो मसालों की खुशबू बनाए रखते हैं।",
      "ta": "सिरेमिक मसाला जार सेट (6 का सेट), प्राकृतिक कॉर्क ढक्कन जो मसालों की खुशबू बनाए रखते हैं।"
    },
    "culturalHeritageStory": {
      "en": "Compact spice canister series preserving authentic aromatic freshness.",
      "hi": "Compact spice canister series preserving authentic aromatic freshness.",
      "kn": "Compact spice canister series preserving authentic aromatic freshness.",
      "ta": "Compact spice canister series preserving authentic aromatic freshness."
    },
    "materialsUsed": {
      "en": "Glazed ceramic stoneware, natural airtight cork stoppers",
      "hi": "Glazed ceramic stoneware, natural airtight cork stoppers",
      "kn": "Glazed ceramic stoneware, natural airtight cork stoppers",
      "ta": "Glazed ceramic stoneware, natural airtight cork stoppers"
    },
    "dimensions": {
      "en": "250 ml each jar",
      "hi": "250 ml प्रत्येक jar",
      "kn": "250 ml ಪ್ರತಿಯೊಂದು jar",
      "ta": "250 ml ஒவ்வொன்றும் jar"
    },
    "craftCategory": "Ceramic Art",
    "giCraftRegion": "Khurja Pottery (Uttar Pradesh)"
  },
  "ceramic spice storage jar carousel (set of 6)": {
    "title": {
      "en": "Ceramic Spice Storage Jar Carousel (Set of 6)",
      "hi": "सिरेमिक मसाला जार सेट (6 का सेट)",
      "kn": "Ceramic Spice Storage Jar Carousel (ಸೆಟ್ 6)",
      "ta": "Ceramic Spice Storage Jar Carousel (தொகுப்பு 6)"
    },
    "description": {
      "en": "Uniform canister series keeping whole spices and roasted masala blends crisp and aromatic against kitchen humidity.",
      "hi": "सिरेमिक मसाला जार सेट (6 का सेट), प्राकृतिक कॉर्क ढक्कन जो मसालों की खुशबू बनाए रखते हैं।",
      "kn": "सिरेमिक मसाला जार सेट (6 का सेट), प्राकृतिक कॉर्क ढक्कन जो मसालों की खुशबू बनाए रखते हैं।",
      "ta": "सिरेमिक मसाला जार सेट (6 का सेट), प्राकृतिक कॉर्क ढक्कन जो मसालों की खुशबू बनाए रखते हैं।"
    },
    "culturalHeritageStory": {
      "en": "Compact spice canister series preserving authentic aromatic freshness.",
      "hi": "Compact spice canister series preserving authentic aromatic freshness.",
      "kn": "Compact spice canister series preserving authentic aromatic freshness.",
      "ta": "Compact spice canister series preserving authentic aromatic freshness."
    },
    "materialsUsed": {
      "en": "Glazed ceramic stoneware, natural airtight cork stoppers",
      "hi": "Glazed ceramic stoneware, natural airtight cork stoppers",
      "kn": "Glazed ceramic stoneware, natural airtight cork stoppers",
      "ta": "Glazed ceramic stoneware, natural airtight cork stoppers"
    },
    "dimensions": {
      "en": "250 ml each jar",
      "hi": "250 ml प्रत्येक jar",
      "kn": "250 ml ಪ್ರತಿಯೊಂದು jar",
      "ta": "250 ml ஒவ்வொன்றும் jar"
    },
    "craftCategory": "Ceramic Art",
    "giCraftRegion": "Khurja Pottery (Uttar Pradesh)"
  },
  "cmtvoiuji00159e66vze9rx07": {
    "title": {
      "en": "Jaipur Blue Pottery Floral Decorative Wall Plate",
      "hi": "जयपुर ब्लू पॉटरी सजावटी दीवार प्लेट",
      "kn": "Jaipur Blue ಕುಂಬಾರಿಕೆ Floral Decorative Wall ತಟ್ಟೆ",
      "ta": "Jaipur Blue மண்பாண்டம் Floral Decorative Wall தட்டு"
    },
    "description": {
      "en": "Genuine clay-free Jaipur quartz paste wall plate decorated with classical Persian palmettes and vibrant cobalt blue glaze.",
      "hi": "जयपुर की प्रसिद्ध पारंपरिक ब्लू पॉटरी दीवार प्लेट। क्वार्ट्ज पाउडर और तांबे के ऑक्साइड से निर्मित उत्कृष्ट हस्तशिल्प।",
      "kn": "जयपुर की प्रसिद्ध पारंपरिक ब्लू पॉटरी दीवार प्लेट। क्वार्ट्ज पाउडर और तांबे के ऑक्साइड से निर्मित उत्कृष्ट हस्तशिल्प।",
      "ta": "जयपुर की प्रसिद्ध पारंपरिक ब्लू पॉटरी दीवार प्लेट। क्वार्ट्ज पाउडर और तांबे के ऑक्साइड से निर्मित उत्कृष्ट हस्तशिल्प।"
    },
    "culturalHeritageStory": {
      "en": "Clay-free Egyptian quartz paste technique adapted by royal Jaipur artisans in the 19th century.",
      "hi": "Clay-free Egyptian quartz paste technique adapted by royal Jaipur artisans in the 19th century.",
      "kn": "Clay-free Egyptian quartz paste technique adapted by royal Jaipur artisans in the 19th century.",
      "ta": "Clay-free Egyptian quartz paste technique adapted by royal Jaipur artisans in the 19th century."
    },
    "materialsUsed": {
      "en": "Ground quartz powder, Fuller earth (Multani Mitti), glass, natural copper oxide pigment",
      "hi": "Ground quartz powder, Fuller earth (Multani Mitti), glass, natural copper oxide pigment",
      "kn": "Ground quartz powder, Fuller earth (Multani Mitti), glass, natural copper oxide pigment",
      "ta": "Ground quartz powder, Fuller earth (Multani Mitti), glass, natural copper oxide pigment"
    },
    "dimensions": {
      "en": "10 inches diameter",
      "hi": "10 इंच व्यास",
      "kn": "10 ಇಂಚು ವ್ಯಾಸ",
      "ta": "10 அங்குலம் விட்டம்"
    },
    "craftCategory": "Blue Pottery",
    "giCraftRegion": "Jaipur Blue Pottery (Rajasthan)"
  },
  "jaipur blue pottery floral decorative wall plate": {
    "title": {
      "en": "Jaipur Blue Pottery Floral Decorative Wall Plate",
      "hi": "जयपुर ब्लू पॉटरी सजावटी दीवार प्लेट",
      "kn": "Jaipur Blue ಕುಂಬಾರಿಕೆ Floral Decorative Wall ತಟ್ಟೆ",
      "ta": "Jaipur Blue மண்பாண்டம் Floral Decorative Wall தட்டு"
    },
    "description": {
      "en": "Genuine clay-free Jaipur quartz paste wall plate decorated with classical Persian palmettes and vibrant cobalt blue glaze.",
      "hi": "जयपुर की प्रसिद्ध पारंपरिक ब्लू पॉटरी दीवार प्लेट। क्वार्ट्ज पाउडर और तांबे के ऑक्साइड से निर्मित उत्कृष्ट हस्तशिल्प।",
      "kn": "जयपुर की प्रसिद्ध पारंपरिक ब्लू पॉटरी दीवार प्लेट। क्वार्ट्ज पाउडर और तांबे के ऑक्साइड से निर्मित उत्कृष्ट हस्तशिल्प।",
      "ta": "जयपुर की प्रसिद्ध पारंपरिक ब्लू पॉटरी दीवार प्लेट। क्वार्ट्ज पाउडर और तांबे के ऑक्साइड से निर्मित उत्कृष्ट हस्तशिल्प।"
    },
    "culturalHeritageStory": {
      "en": "Clay-free Egyptian quartz paste technique adapted by royal Jaipur artisans in the 19th century.",
      "hi": "Clay-free Egyptian quartz paste technique adapted by royal Jaipur artisans in the 19th century.",
      "kn": "Clay-free Egyptian quartz paste technique adapted by royal Jaipur artisans in the 19th century.",
      "ta": "Clay-free Egyptian quartz paste technique adapted by royal Jaipur artisans in the 19th century."
    },
    "materialsUsed": {
      "en": "Ground quartz powder, Fuller earth (Multani Mitti), glass, natural copper oxide pigment",
      "hi": "Ground quartz powder, Fuller earth (Multani Mitti), glass, natural copper oxide pigment",
      "kn": "Ground quartz powder, Fuller earth (Multani Mitti), glass, natural copper oxide pigment",
      "ta": "Ground quartz powder, Fuller earth (Multani Mitti), glass, natural copper oxide pigment"
    },
    "dimensions": {
      "en": "10 inches diameter",
      "hi": "10 इंच व्यास",
      "kn": "10 ಇಂಚು ವ್ಯಾಸ",
      "ta": "10 அங்குலம் விட்டம்"
    },
    "craftCategory": "Blue Pottery",
    "giCraftRegion": "Jaipur Blue Pottery (Rajasthan)"
  },
  "cmtvoiujm00179e66hlrb91n7": {
    "title": {
      "en": "Handmade Blue Pottery Coaster Set with Wooden Stand (6 Pcs)",
      "hi": "ब्लू पॉटरी कोस्टर सेट स्टैंड सहित (6 पीस)",
      "kn": "Handmade Blue ಕುಂಬಾರಿಕೆ ಕೋಸ್ಟರ್ Set with ಮರದ Stand (6 Pcs)",
      "ta": "Handmade Blue மண்பாண்டம் கோஸ்டர் Set with மர Stand (6 Pcs)"
    },
    "description": {
      "en": "Heat-resistant glazed quartz coasters painted with Rajasthani marigold florets, housed in a handcrafted rosewood cradle.",
      "hi": "हस्तनिर्मित ब्लू पॉटरी कोस्टर सेट शीशम स्टैंड सहित (6 पीस), मेज को गर्मी व दाग से बचाने हेतु।",
      "kn": "हस्तनिर्मित ब्लू पॉटरी कोस्टर सेट शीशम स्टैंड सहित (6 पीस), मेज को गर्मी व दाग से बचाने हेतु।",
      "ta": "हस्तनिर्मित ब्लू पॉटरी कोस्टर सेट शीशम स्टैंड सहित (6 पीस), मेज को गर्मी व दाग से बचाने हेतु।"
    },
    "culturalHeritageStory": {
      "en": "Heat-resistant glazed quartz coasters featuring traditional iris floral motifs.",
      "hi": "Heat-resistant glazed quartz coasters featuring traditional iris floral motifs.",
      "kn": "Heat-resistant glazed quartz coasters featuring traditional iris floral motifs.",
      "ta": "Heat-resistant glazed quartz coasters featuring traditional iris floral motifs."
    },
    "materialsUsed": {
      "en": "Quartz dough, copper and cobalt oxide glaze, Sheesham wood holder",
      "hi": "Quartz dough, copper and cobalt oxide glaze, Sheesham wood holder",
      "kn": "Quartz dough, copper and cobalt oxide glaze, Sheesham wood holder",
      "ta": "Quartz dough, copper and cobalt oxide glaze, Sheesham wood holder"
    },
    "dimensions": {
      "en": "4 x 4 inches each",
      "hi": "4 x 4 इंच प्रत्येक",
      "kn": "4 x 4 ಇಂಚು ಪ್ರತಿಯೊಂದು",
      "ta": "4 x 4 அங்குலம் ஒவ்வொன்றும்"
    },
    "craftCategory": "Blue Pottery",
    "giCraftRegion": "Jaipur Blue Pottery (Rajasthan)"
  },
  "handmade blue pottery coaster set with wooden stand (6 pcs)": {
    "title": {
      "en": "Handmade Blue Pottery Coaster Set with Wooden Stand (6 Pcs)",
      "hi": "ब्लू पॉटरी कोस्टर सेट स्टैंड सहित (6 पीस)",
      "kn": "Handmade Blue ಕುಂಬಾರಿಕೆ ಕೋಸ್ಟರ್ Set with ಮರದ Stand (6 Pcs)",
      "ta": "Handmade Blue மண்பாண்டம் கோஸ்டர் Set with மர Stand (6 Pcs)"
    },
    "description": {
      "en": "Heat-resistant glazed quartz coasters painted with Rajasthani marigold florets, housed in a handcrafted rosewood cradle.",
      "hi": "हस्तनिर्मित ब्लू पॉटरी कोस्टर सेट शीशम स्टैंड सहित (6 पीस), मेज को गर्मी व दाग से बचाने हेतु।",
      "kn": "हस्तनिर्मित ब्लू पॉटरी कोस्टर सेट शीशम स्टैंड सहित (6 पीस), मेज को गर्मी व दाग से बचाने हेतु।",
      "ta": "हस्तनिर्मित ब्लू पॉटरी कोस्टर सेट शीशम स्टैंड सहित (6 पीस), मेज को गर्मी व दाग से बचाने हेतु।"
    },
    "culturalHeritageStory": {
      "en": "Heat-resistant glazed quartz coasters featuring traditional iris floral motifs.",
      "hi": "Heat-resistant glazed quartz coasters featuring traditional iris floral motifs.",
      "kn": "Heat-resistant glazed quartz coasters featuring traditional iris floral motifs.",
      "ta": "Heat-resistant glazed quartz coasters featuring traditional iris floral motifs."
    },
    "materialsUsed": {
      "en": "Quartz dough, copper and cobalt oxide glaze, Sheesham wood holder",
      "hi": "Quartz dough, copper and cobalt oxide glaze, Sheesham wood holder",
      "kn": "Quartz dough, copper and cobalt oxide glaze, Sheesham wood holder",
      "ta": "Quartz dough, copper and cobalt oxide glaze, Sheesham wood holder"
    },
    "dimensions": {
      "en": "4 x 4 inches each",
      "hi": "4 x 4 इंच प्रत्येक",
      "kn": "4 x 4 ಇಂಚು ಪ್ರತಿಯೊಂದು",
      "ta": "4 x 4 அங்குலம் ஒவ்வொன்றும்"
    },
    "craftCategory": "Blue Pottery",
    "giCraftRegion": "Jaipur Blue Pottery (Rajasthan)"
  },
  "cmtvoiujr00199e66aahdx74t": {
    "title": {
      "en": "Jaipur Blue Pottery Cylindrical Flower Vase",
      "hi": "जयपुर ब्लू पॉटरी फूलदान",
      "kn": "Jaipur Blue ಕುಂಬಾರಿಕೆ Cylindrical Flower Vase",
      "ta": "Jaipur Blue மண்பாண்டம் Cylindrical Flower Vase"
    },
    "description": {
      "en": "Turned on low-speed wooden wheels and hand-brushed with turquoise peacock feather motifs and rich lapis highlights.",
      "hi": "जयपुर ब्लू पॉटरी फूलदान, नीले और फ़िरोज़ी रंगों में मयूर पंख रूपांकनों से सुसज्जित।",
      "kn": "जयपुर ब्लू पॉटरी फूलदान, नीले और फ़िरोज़ी रंगों में मयूर पंख रूपांकनों से सुसज्जित।",
      "ta": "जयपुर ब्लू पॉटरी फूलदान, नीले और फ़िरोज़ी रंगों में मयूर पंख रूपांकनों से सुसज्जित।"
    },
    "culturalHeritageStory": {
      "en": "Turned on low-speed wheels and hand-brushed with turquoise and lapis lazuli pigments.",
      "hi": "Turned on low-speed wheels and hand-brushed with turquoise and lapis lazuli pigments.",
      "kn": "Turned on low-speed wheels and hand-brushed with turquoise and lapis lazuli pigments.",
      "ta": "Turned on low-speed wheels and hand-brushed with turquoise and lapis lazuli pigments."
    },
    "materialsUsed": {
      "en": "Glazed Egyptian quartz paste, natural mineral oxides",
      "hi": "Glazed Egyptian quartz paste, natural mineral oxides",
      "kn": "Glazed Egyptian quartz paste, natural mineral oxides",
      "ta": "Glazed Egyptian quartz paste, natural mineral oxides"
    },
    "dimensions": {
      "en": "9 x 4.5 inches",
      "hi": "9 x 4.5 इंच",
      "kn": "9 x 4.5 ಇಂಚು",
      "ta": "9 x 4.5 அங்குலம்"
    },
    "craftCategory": "Blue Pottery",
    "giCraftRegion": "Jaipur Blue Pottery (Rajasthan)"
  },
  "jaipur blue pottery cylindrical flower vase": {
    "title": {
      "en": "Jaipur Blue Pottery Cylindrical Flower Vase",
      "hi": "जयपुर ब्लू पॉटरी फूलदान",
      "kn": "Jaipur Blue ಕುಂಬಾರಿಕೆ Cylindrical Flower Vase",
      "ta": "Jaipur Blue மண்பாண்டம் Cylindrical Flower Vase"
    },
    "description": {
      "en": "Turned on low-speed wooden wheels and hand-brushed with turquoise peacock feather motifs and rich lapis highlights.",
      "hi": "जयपुर ब्लू पॉटरी फूलदान, नीले और फ़िरोज़ी रंगों में मयूर पंख रूपांकनों से सुसज्जित।",
      "kn": "जयपुर ब्लू पॉटरी फूलदान, नीले और फ़िरोज़ी रंगों में मयूर पंख रूपांकनों से सुसज्जित।",
      "ta": "जयपुर ब्लू पॉटरी फूलदान, नीले और फ़िरोज़ी रंगों में मयूर पंख रूपांकनों से सुसज्जित।"
    },
    "culturalHeritageStory": {
      "en": "Turned on low-speed wheels and hand-brushed with turquoise and lapis lazuli pigments.",
      "hi": "Turned on low-speed wheels and hand-brushed with turquoise and lapis lazuli pigments.",
      "kn": "Turned on low-speed wheels and hand-brushed with turquoise and lapis lazuli pigments.",
      "ta": "Turned on low-speed wheels and hand-brushed with turquoise and lapis lazuli pigments."
    },
    "materialsUsed": {
      "en": "Glazed Egyptian quartz paste, natural mineral oxides",
      "hi": "Glazed Egyptian quartz paste, natural mineral oxides",
      "kn": "Glazed Egyptian quartz paste, natural mineral oxides",
      "ta": "Glazed Egyptian quartz paste, natural mineral oxides"
    },
    "dimensions": {
      "en": "9 x 4.5 inches",
      "hi": "9 x 4.5 इंच",
      "kn": "9 x 4.5 ಇಂಚು",
      "ta": "9 x 4.5 அங்குலம்"
    },
    "craftCategory": "Blue Pottery",
    "giCraftRegion": "Jaipur Blue Pottery (Rajasthan)"
  },
  "cmtvoiujv001b9e66h6pg69nw": {
    "title": {
      "en": "Handcrafted Blue Pottery Knob Pulls (Pack of 8)",
      "hi": "ब्लू पॉटरी अलमारी नॉब्स (8 का पैक)",
      "kn": "ಹಸ್ತನಿರ್ಮಿತ Blue ಕುಂಬಾರಿಕೆ Knob Pulls (ಪ್ಯಾಕ್ 8)",
      "ta": "கைவினை Blue மண்பாண்டம் Knob Pulls (தொகுப்பு 8)"
    },
    "description": {
      "en": "Decorative vintage drawer knobs hand-painted with fine radial geometric stars to rejuvenate cabinets and dressers.",
      "hi": "जयपुर ब्लू पॉटरी अलमारी एवं दराज नॉब्स (8 का पैक), पीतल के स्क्रू सहित।",
      "kn": "जयपुर ब्लू पॉटरी अलमारी एवं दराज नॉब्स (8 का पैक), पीतल के स्क्रू सहित।",
      "ta": "जयपुर ब्लू पॉटरी अलमारी एवं दराज नॉब्स (8 का पैक), पीतल के स्क्रू सहित।"
    },
    "culturalHeritageStory": {
      "en": "Decorative architectural hardware rejuvenating drawers and vintage credenzas.",
      "hi": "Decorative architectural hardware rejuvenating drawers and vintage credenzas.",
      "kn": "Decorative architectural hardware rejuvenating drawers and vintage credenzas.",
      "ta": "Decorative architectural hardware rejuvenating drawers and vintage credenzas."
    },
    "materialsUsed": {
      "en": "Fired quartz dough, brass fixing screw fittings, glazed mineral finish",
      "hi": "Fired quartz dough, brass fixing screw fittings, glazed mineral finish",
      "kn": "Fired quartz dough, brass fixing screw fittings, glazed mineral finish",
      "ta": "Fired quartz dough, brass fixing screw fittings, glazed mineral finish"
    },
    "dimensions": {
      "en": "1.5 inches diameter",
      "hi": "1.5 इंच व्यास",
      "kn": "1.5 ಇಂಚು ವ್ಯಾಸ",
      "ta": "1.5 அங்குலம் விட்டம்"
    },
    "craftCategory": "Blue Pottery",
    "giCraftRegion": "Jaipur Blue Pottery (Rajasthan)"
  },
  "handcrafted blue pottery knob pulls (pack of 8)": {
    "title": {
      "en": "Handcrafted Blue Pottery Knob Pulls (Pack of 8)",
      "hi": "ब्लू पॉटरी अलमारी नॉब्स (8 का पैक)",
      "kn": "ಹಸ್ತನಿರ್ಮಿತ Blue ಕುಂಬಾರಿಕೆ Knob Pulls (ಪ್ಯಾಕ್ 8)",
      "ta": "கைவினை Blue மண்பாண்டம் Knob Pulls (தொகுப்பு 8)"
    },
    "description": {
      "en": "Decorative vintage drawer knobs hand-painted with fine radial geometric stars to rejuvenate cabinets and dressers.",
      "hi": "जयपुर ब्लू पॉटरी अलमारी एवं दराज नॉब्स (8 का पैक), पीतल के स्क्रू सहित।",
      "kn": "जयपुर ब्लू पॉटरी अलमारी एवं दराज नॉब्स (8 का पैक), पीतल के स्क्रू सहित।",
      "ta": "जयपुर ब्लू पॉटरी अलमारी एवं दराज नॉब्स (8 का पैक), पीतल के स्क्रू सहित।"
    },
    "culturalHeritageStory": {
      "en": "Decorative architectural hardware rejuvenating drawers and vintage credenzas.",
      "hi": "Decorative architectural hardware rejuvenating drawers and vintage credenzas.",
      "kn": "Decorative architectural hardware rejuvenating drawers and vintage credenzas.",
      "ta": "Decorative architectural hardware rejuvenating drawers and vintage credenzas."
    },
    "materialsUsed": {
      "en": "Fired quartz dough, brass fixing screw fittings, glazed mineral finish",
      "hi": "Fired quartz dough, brass fixing screw fittings, glazed mineral finish",
      "kn": "Fired quartz dough, brass fixing screw fittings, glazed mineral finish",
      "ta": "Fired quartz dough, brass fixing screw fittings, glazed mineral finish"
    },
    "dimensions": {
      "en": "1.5 inches diameter",
      "hi": "1.5 इंच व्यास",
      "kn": "1.5 ಇಂಚು ವ್ಯಾಸ",
      "ta": "1.5 அங்குலம் விட்டம்"
    },
    "craftCategory": "Blue Pottery",
    "giCraftRegion": "Jaipur Blue Pottery (Rajasthan)"
  },
  "cmtvoiujz001d9e66vewcykur": {
    "title": {
      "en": "Jaipur Blue Pottery Trinket Box with Domed Lid",
      "hi": "ब्लू पॉटरी आभूषण डिब्बी",
      "kn": "Jaipur Blue ಕುಂಬಾರಿಕೆ Trinket ಪೆಟ್ಟಿಗೆ with Domed Lid",
      "ta": "Jaipur Blue மண்பாண்டம் Trinket பெட்டி with Domed Lid"
    },
    "description": {
      "en": "Domed keepsake container painted with royal Mughal creepers, ideal for storing heirloom jewelry and sacred tokens.",
      "hi": "ब्लू पॉटरी आभूषण डिब्बी गुंबददार ढक्कन सहित, बहुमूल्य आभूषण और स्मृति-चिह्न रखने हेतु।",
      "kn": "ब्लू पॉटरी आभूषण डिब्बी गुंबददार ढक्कन सहित, बहुमूल्य आभूषण और स्मृति-चिह्न रखने हेतु।",
      "ta": "ब्लू पॉटरी आभूषण डिब्बी गुंबददार ढक्कन सहित, बहुमूल्य आभूषण और स्मृति-चिह्न रखने हेतु।"
    },
    "culturalHeritageStory": {
      "en": "Miniature keepsake container adorned with delicate Persian palmette motifs.",
      "hi": "Miniature keepsake container adorned with delicate Persian palmette motifs.",
      "kn": "Miniature keepsake container adorned with delicate Persian palmette motifs.",
      "ta": "Miniature keepsake container adorned with delicate Persian palmette motifs."
    },
    "materialsUsed": {
      "en": "Quartz paste, natural mineral pigments, clear silica glaze",
      "hi": "Quartz paste, natural mineral pigments, clear silica glaze",
      "kn": "Quartz paste, natural mineral pigments, clear silica glaze",
      "ta": "Quartz paste, natural mineral pigments, clear silica glaze"
    },
    "dimensions": {
      "en": "4 x 4 x 3 inches",
      "hi": "4 x 4 x 3 इंच",
      "kn": "4 x 4 x 3 ಇಂಚು",
      "ta": "4 x 4 x 3 அங்குலம்"
    },
    "craftCategory": "Blue Pottery",
    "giCraftRegion": "Jaipur Blue Pottery (Rajasthan)"
  },
  "jaipur blue pottery trinket box with domed lid": {
    "title": {
      "en": "Jaipur Blue Pottery Trinket Box with Domed Lid",
      "hi": "ब्लू पॉटरी आभूषण डिब्बी",
      "kn": "Jaipur Blue ಕುಂಬಾರಿಕೆ Trinket ಪೆಟ್ಟಿಗೆ with Domed Lid",
      "ta": "Jaipur Blue மண்பாண்டம் Trinket பெட்டி with Domed Lid"
    },
    "description": {
      "en": "Domed keepsake container painted with royal Mughal creepers, ideal for storing heirloom jewelry and sacred tokens.",
      "hi": "ब्लू पॉटरी आभूषण डिब्बी गुंबददार ढक्कन सहित, बहुमूल्य आभूषण और स्मृति-चिह्न रखने हेतु।",
      "kn": "ब्लू पॉटरी आभूषण डिब्बी गुंबददार ढक्कन सहित, बहुमूल्य आभूषण और स्मृति-चिह्न रखने हेतु।",
      "ta": "ब्लू पॉटरी आभूषण डिब्बी गुंबददार ढक्कन सहित, बहुमूल्य आभूषण और स्मृति-चिह्न रखने हेतु।"
    },
    "culturalHeritageStory": {
      "en": "Miniature keepsake container adorned with delicate Persian palmette motifs.",
      "hi": "Miniature keepsake container adorned with delicate Persian palmette motifs.",
      "kn": "Miniature keepsake container adorned with delicate Persian palmette motifs.",
      "ta": "Miniature keepsake container adorned with delicate Persian palmette motifs."
    },
    "materialsUsed": {
      "en": "Quartz paste, natural mineral pigments, clear silica glaze",
      "hi": "Quartz paste, natural mineral pigments, clear silica glaze",
      "kn": "Quartz paste, natural mineral pigments, clear silica glaze",
      "ta": "Quartz paste, natural mineral pigments, clear silica glaze"
    },
    "dimensions": {
      "en": "4 x 4 x 3 inches",
      "hi": "4 x 4 x 3 इंच",
      "kn": "4 x 4 x 3 ಇಂಚು",
      "ta": "4 x 4 x 3 அங்குலம்"
    },
    "craftCategory": "Blue Pottery",
    "giCraftRegion": "Jaipur Blue Pottery (Rajasthan)"
  },
  "cmtvoiuk3001f9e66tzm8ownl": {
    "title": {
      "en": "Blue Pottery Incense Stick & Dhoop Cone Holder",
      "hi": "ब्लू पॉटरी अगरबत्ती स्टैंड",
      "kn": "Blue ಕುಂಬಾರಿಕೆ Incense Stick & Dhoop Cone Holder",
      "ta": "Blue மண்பாண்டம் Incense Stick & Dhoop Cone Holder"
    },
    "description": {
      "en": "Compact circular puja accessory catching fragrant ash while showcasing peaceful turquoise mandala concentric rings.",
      "hi": "जयपुर ब्लू पॉटरी अगरबत्ती व धूप स्टैंड, पूजा स्थल के लिए सुंदर व स्वच्छ समाधान।",
      "kn": "जयपुर ब्लू पॉटरी अगरबत्ती व धूप स्टैंड, पूजा स्थल के लिए सुंदर व स्वच्छ समाधान।",
      "ta": "जयपुर ब्लू पॉटरी अगरबत्ती व धूप स्टैंड, पूजा स्थल के लिए सुंदर व स्वच्छ समाधान।"
    },
    "culturalHeritageStory": {
      "en": "Compact altar essential catching ash with serene floral aesthetics.",
      "hi": "Compact altar essential catching ash with serene floral aesthetics.",
      "kn": "Compact altar essential catching ash with serene floral aesthetics.",
      "ta": "Compact altar essential catching ash with serene floral aesthetics."
    },
    "materialsUsed": {
      "en": "Fired quartz paste, heat-resistant mineral glaze",
      "hi": "Fired quartz paste, heat-resistant mineral glaze",
      "kn": "Fired quartz paste, heat-resistant mineral glaze",
      "ta": "Fired quartz paste, heat-resistant mineral glaze"
    },
    "dimensions": {
      "en": "4.5 inches base",
      "hi": "4.5 इंच base",
      "kn": "4.5 ಇಂಚು base",
      "ta": "4.5 அங்குலம் base"
    },
    "craftCategory": "Blue Pottery",
    "giCraftRegion": "Jaipur Blue Pottery (Rajasthan)"
  },
  "blue pottery incense stick & dhoop cone holder": {
    "title": {
      "en": "Blue Pottery Incense Stick & Dhoop Cone Holder",
      "hi": "ब्लू पॉटरी अगरबत्ती स्टैंड",
      "kn": "Blue ಕುಂಬಾರಿಕೆ Incense Stick & Dhoop Cone Holder",
      "ta": "Blue மண்பாண்டம் Incense Stick & Dhoop Cone Holder"
    },
    "description": {
      "en": "Compact circular puja accessory catching fragrant ash while showcasing peaceful turquoise mandala concentric rings.",
      "hi": "जयपुर ब्लू पॉटरी अगरबत्ती व धूप स्टैंड, पूजा स्थल के लिए सुंदर व स्वच्छ समाधान।",
      "kn": "जयपुर ब्लू पॉटरी अगरबत्ती व धूप स्टैंड, पूजा स्थल के लिए सुंदर व स्वच्छ समाधान।",
      "ta": "जयपुर ब्लू पॉटरी अगरबत्ती व धूप स्टैंड, पूजा स्थल के लिए सुंदर व स्वच्छ समाधान।"
    },
    "culturalHeritageStory": {
      "en": "Compact altar essential catching ash with serene floral aesthetics.",
      "hi": "Compact altar essential catching ash with serene floral aesthetics.",
      "kn": "Compact altar essential catching ash with serene floral aesthetics.",
      "ta": "Compact altar essential catching ash with serene floral aesthetics."
    },
    "materialsUsed": {
      "en": "Fired quartz paste, heat-resistant mineral glaze",
      "hi": "Fired quartz paste, heat-resistant mineral glaze",
      "kn": "Fired quartz paste, heat-resistant mineral glaze",
      "ta": "Fired quartz paste, heat-resistant mineral glaze"
    },
    "dimensions": {
      "en": "4.5 inches base",
      "hi": "4.5 इंच base",
      "kn": "4.5 ಇಂಚು base",
      "ta": "4.5 அங்குலம் base"
    },
    "craftCategory": "Blue Pottery",
    "giCraftRegion": "Jaipur Blue Pottery (Rajasthan)"
  },
  "cmtvoiuk7001h9e665zg9dncy": {
    "title": {
      "en": "Jaipur Blue Pottery Decorative Door Bell Pull",
      "hi": "ब्लू पॉटरी डोर बेल हैंगर",
      "kn": "Jaipur Blue ಕುಂಬಾರಿಕೆ Decorative Door Bell Pull",
      "ta": "Jaipur Blue மண்பாண்டம் Decorative Door Bell Pull"
    },
    "description": {
      "en": "Traditional doorway accent hand-painted with auspicious floral symbols to welcome guests into the home.",
      "hi": "ब्लू पॉटरी डोर बेल हैंगर, प्रवेश द्वार को पारंपरिक राजस्थानी भव्यता प्रदान करता है।",
      "kn": "ब्लू पॉटरी डोर बेल हैंगर, प्रवेश द्वार को पारंपरिक राजस्थानी भव्यता प्रदान करता है।",
      "ta": "ब्लू पॉटरी डोर बेल हैंगर, प्रवेश द्वार को पारंपरिक राजस्थानी भव्यता प्रदान करता है।"
    },
    "culturalHeritageStory": {
      "en": "Welcoming doorway accent hand-fired by Jaipur heritage guild potters.",
      "hi": "Welcoming doorway accent hand-fired by Jaipur heritage guild potters.",
      "kn": "Welcoming doorway accent hand-fired by Jaipur heritage guild potters.",
      "ta": "Welcoming doorway accent hand-fired by Jaipur heritage guild potters."
    },
    "materialsUsed": {
      "en": "Quartz ceramic, braided cotton rope, brass bell pendant",
      "hi": "Quartz ceramic, braided cotton rope, brass bell pendant",
      "kn": "Quartz ceramic, braided cotton rope, brass bell pendant",
      "ta": "Quartz ceramic, braided cotton rope, brass bell pendant"
    },
    "dimensions": {
      "en": "6 inches length",
      "hi": "6 इंच लंबाई",
      "kn": "6 ಇಂಚು ಉದ್ದ",
      "ta": "6 அங்குலம் நீளம்"
    },
    "craftCategory": "Blue Pottery",
    "giCraftRegion": "Jaipur Blue Pottery (Rajasthan)"
  },
  "jaipur blue pottery decorative door bell pull": {
    "title": {
      "en": "Jaipur Blue Pottery Decorative Door Bell Pull",
      "hi": "ब्लू पॉटरी डोर बेल हैंगर",
      "kn": "Jaipur Blue ಕುಂಬಾರಿಕೆ Decorative Door Bell Pull",
      "ta": "Jaipur Blue மண்பாண்டம் Decorative Door Bell Pull"
    },
    "description": {
      "en": "Traditional doorway accent hand-painted with auspicious floral symbols to welcome guests into the home.",
      "hi": "ब्लू पॉटरी डोर बेल हैंगर, प्रवेश द्वार को पारंपरिक राजस्थानी भव्यता प्रदान करता है।",
      "kn": "ब्लू पॉटरी डोर बेल हैंगर, प्रवेश द्वार को पारंपरिक राजस्थानी भव्यता प्रदान करता है।",
      "ta": "ब्लू पॉटरी डोर बेल हैंगर, प्रवेश द्वार को पारंपरिक राजस्थानी भव्यता प्रदान करता है।"
    },
    "culturalHeritageStory": {
      "en": "Welcoming doorway accent hand-fired by Jaipur heritage guild potters.",
      "hi": "Welcoming doorway accent hand-fired by Jaipur heritage guild potters.",
      "kn": "Welcoming doorway accent hand-fired by Jaipur heritage guild potters.",
      "ta": "Welcoming doorway accent hand-fired by Jaipur heritage guild potters."
    },
    "materialsUsed": {
      "en": "Quartz ceramic, braided cotton rope, brass bell pendant",
      "hi": "Quartz ceramic, braided cotton rope, brass bell pendant",
      "kn": "Quartz ceramic, braided cotton rope, brass bell pendant",
      "ta": "Quartz ceramic, braided cotton rope, brass bell pendant"
    },
    "dimensions": {
      "en": "6 inches length",
      "hi": "6 इंच लंबाई",
      "kn": "6 ಇಂಚು ಉದ್ದ",
      "ta": "6 அங்குலம் நீளம்"
    },
    "craftCategory": "Blue Pottery",
    "giCraftRegion": "Jaipur Blue Pottery (Rajasthan)"
  },
  "cmtvoiukc001j9e66md0gvup4": {
    "title": {
      "en": "Handmade Blue Pottery Table Clock Frame",
      "hi": "ब्लू पॉटरी टेबल घड़ी फ्रेम",
      "kn": "Handmade Blue ಕುಂಬಾರಿಕೆ Table Clock Frame",
      "ta": "Handmade Blue மண்பாண்டம் Table Clock Frame"
    },
    "description": {
      "en": "Heirloom desk mantle clock encased within an ornate quartz ceramic housing painted with royal Persian flourishes.",
      "hi": "ब्लू पॉटरी टेबल घड़ी फ्रेम, मूक क्वार्ट्ज मूवमेंट और उत्कृष्ट पुष्प बॉर्डर के साथ।",
      "kn": "ब्लू पॉटरी टेबल घड़ी फ्रेम, मूक क्वार्ट्ज मूवमेंट और उत्कृष्ट पुष्प बॉर्डर के साथ।",
      "ta": "ब्लू पॉटरी टेबल घड़ी फ्रेम, मूक क्वार्ट्ज मूवमेंट और उत्कृष्ट पुष्प बॉर्डर के साथ।"
    },
    "culturalHeritageStory": {
      "en": "Ornate mantle timepiece housing precision quartz movement in glazed artisan casing.",
      "hi": "Ornate mantle timepiece housing precision quartz movement in glazed artisan casing.",
      "kn": "Ornate mantle timepiece housing precision quartz movement in glazed artisan casing.",
      "ta": "Ornate mantle timepiece housing precision quartz movement in glazed artisan casing."
    },
    "materialsUsed": {
      "en": "Quartz ceramic frame, silent quartz clock movement, glass face",
      "hi": "Quartz ceramic frame, silent quartz clock movement, glass face",
      "kn": "Quartz ceramic frame, silent quartz clock movement, glass face",
      "ta": "Quartz ceramic frame, silent quartz clock movement, glass face"
    },
    "dimensions": {
      "en": "7 x 6 inches",
      "hi": "7 x 6 इंच",
      "kn": "7 x 6 ಇಂಚು",
      "ta": "7 x 6 அங்குலம்"
    },
    "craftCategory": "Blue Pottery",
    "giCraftRegion": "Jaipur Blue Pottery (Rajasthan)"
  },
  "handmade blue pottery table clock frame": {
    "title": {
      "en": "Handmade Blue Pottery Table Clock Frame",
      "hi": "ब्लू पॉटरी टेबल घड़ी फ्रेम",
      "kn": "Handmade Blue ಕುಂಬಾರಿಕೆ Table Clock Frame",
      "ta": "Handmade Blue மண்பாண்டம் Table Clock Frame"
    },
    "description": {
      "en": "Heirloom desk mantle clock encased within an ornate quartz ceramic housing painted with royal Persian flourishes.",
      "hi": "ब्लू पॉटरी टेबल घड़ी फ्रेम, मूक क्वार्ट्ज मूवमेंट और उत्कृष्ट पुष्प बॉर्डर के साथ।",
      "kn": "ब्लू पॉटरी टेबल घड़ी फ्रेम, मूक क्वार्ट्ज मूवमेंट और उत्कृष्ट पुष्प बॉर्डर के साथ।",
      "ta": "ब्लू पॉटरी टेबल घड़ी फ्रेम, मूक क्वार्ट्ज मूवमेंट और उत्कृष्ट पुष्प बॉर्डर के साथ।"
    },
    "culturalHeritageStory": {
      "en": "Ornate mantle timepiece housing precision quartz movement in glazed artisan casing.",
      "hi": "Ornate mantle timepiece housing precision quartz movement in glazed artisan casing.",
      "kn": "Ornate mantle timepiece housing precision quartz movement in glazed artisan casing.",
      "ta": "Ornate mantle timepiece housing precision quartz movement in glazed artisan casing."
    },
    "materialsUsed": {
      "en": "Quartz ceramic frame, silent quartz clock movement, glass face",
      "hi": "Quartz ceramic frame, silent quartz clock movement, glass face",
      "kn": "Quartz ceramic frame, silent quartz clock movement, glass face",
      "ta": "Quartz ceramic frame, silent quartz clock movement, glass face"
    },
    "dimensions": {
      "en": "7 x 6 inches",
      "hi": "7 x 6 इंच",
      "kn": "7 x 6 ಇಂಚು",
      "ta": "7 x 6 அங்குலம்"
    },
    "craftCategory": "Blue Pottery",
    "giCraftRegion": "Jaipur Blue Pottery (Rajasthan)"
  },
  "cmtvoiukg001l9e66edl9q8gj": {
    "title": {
      "en": "Jaipur Blue Pottery Decorative Owl Figurine",
      "hi": "ब्लू पॉटरी उल्लू शोपीस",
      "kn": "Jaipur Blue ಕುಂಬಾರಿಕೆ Decorative Owl Figurine",
      "ta": "Jaipur Blue மண்பாண்டம் Decorative Owl Figurine"
    },
    "description": {
      "en": "Symbolic owl sculpture embodying wisdom and domestic Lakshmi prosperity, finished with turquoise feather plumage.",
      "hi": "जयपुर ब्लू पॉटरी उल्लू शोपीस, विद्या और समृद्धि का पारंपरिक राजस्थानी प्रतीक।",
      "kn": "जयपुर ब्लू पॉटरी उल्लू शोपीस, विद्या और समृद्धि का पारंपरिक राजस्थानी प्रतीक।",
      "ta": "जयपुर ब्लू पॉटरी उल्लू शोपीस, विद्या और समृद्धि का पारंपरिक राजस्थानी प्रतीक।"
    },
    "culturalHeritageStory": {
      "en": "Symbol of wisdom and prosperity crafted in classic cobalt and mustard accents.",
      "hi": "Symbol of wisdom and prosperity crafted in classic cobalt and mustard accents.",
      "kn": "Symbol of wisdom and prosperity crafted in classic cobalt and mustard accents.",
      "ta": "Symbol of wisdom and prosperity crafted in classic cobalt and mustard accents."
    },
    "materialsUsed": {
      "en": "Molded quartz paste, cobalt and turquoise overglaze",
      "hi": "Molded quartz paste, cobalt and turquoise overglaze",
      "kn": "Molded quartz paste, cobalt and turquoise overglaze",
      "ta": "Molded quartz paste, cobalt and turquoise overglaze"
    },
    "dimensions": {
      "en": "5 x 4 inches",
      "hi": "5 x 4 इंच",
      "kn": "5 x 4 ಇಂಚು",
      "ta": "5 x 4 அங்குலம்"
    },
    "craftCategory": "Blue Pottery",
    "giCraftRegion": "Jaipur Blue Pottery (Rajasthan)"
  },
  "jaipur blue pottery decorative owl figurine": {
    "title": {
      "en": "Jaipur Blue Pottery Decorative Owl Figurine",
      "hi": "ब्लू पॉटरी उल्लू शोपीस",
      "kn": "Jaipur Blue ಕುಂಬಾರಿಕೆ Decorative Owl Figurine",
      "ta": "Jaipur Blue மண்பாண்டம் Decorative Owl Figurine"
    },
    "description": {
      "en": "Symbolic owl sculpture embodying wisdom and domestic Lakshmi prosperity, finished with turquoise feather plumage.",
      "hi": "जयपुर ब्लू पॉटरी उल्लू शोपीस, विद्या और समृद्धि का पारंपरिक राजस्थानी प्रतीक।",
      "kn": "जयपुर ब्लू पॉटरी उल्लू शोपीस, विद्या और समृद्धि का पारंपरिक राजस्थानी प्रतीक।",
      "ta": "जयपुर ब्लू पॉटरी उल्लू शोपीस, विद्या और समृद्धि का पारंपरिक राजस्थानी प्रतीक।"
    },
    "culturalHeritageStory": {
      "en": "Symbol of wisdom and prosperity crafted in classic cobalt and mustard accents.",
      "hi": "Symbol of wisdom and prosperity crafted in classic cobalt and mustard accents.",
      "kn": "Symbol of wisdom and prosperity crafted in classic cobalt and mustard accents.",
      "ta": "Symbol of wisdom and prosperity crafted in classic cobalt and mustard accents."
    },
    "materialsUsed": {
      "en": "Molded quartz paste, cobalt and turquoise overglaze",
      "hi": "Molded quartz paste, cobalt and turquoise overglaze",
      "kn": "Molded quartz paste, cobalt and turquoise overglaze",
      "ta": "Molded quartz paste, cobalt and turquoise overglaze"
    },
    "dimensions": {
      "en": "5 x 4 inches",
      "hi": "5 x 4 इंच",
      "kn": "5 x 4 ಇಂಚು",
      "ta": "5 x 4 அங்குலம்"
    },
    "craftCategory": "Blue Pottery",
    "giCraftRegion": "Jaipur Blue Pottery (Rajasthan)"
  },
  "cmtvoiukk001n9e661xmplcot": {
    "title": {
      "en": "Bastar Lost-Wax Cast Dhokra Tribal Musician Trio",
      "hi": "बस्तर ढोकरा जनजातीय संगीतकार त्रिमूर्ति",
      "kn": "Bastar Lost-Wax Cast Dhokra ಬುಡಕಟ್ಟು Musician Trio",
      "ta": "Bastar Lost-Wax Cast Dhokra பழங்குடி Musician Trio"
    },
    "description": {
      "en": "Ancient 4,000-year-old lost-wax (cire-perdue) hollow bronze cast figurines depicting Gond tribal percussionists and flute players.",
      "hi": "बस्तर के जनजातीय शिल्पकारों द्वारा 4000 वर्ष पुरानी लुप्त-मोम (ढोकरा) तकनीक से ढली पारंपरिक संगीतकार प्रतिमाएं।",
      "kn": "बस्तर के जनजातीय शिल्पकारों द्वारा 4000 वर्ष पुरानी लुप्त-मोम (ढोकरा) तकनीक से ढली पारंपरिक संगीतकार प्रतिमाएं।",
      "ta": "बस्तर के जनजातीय शिल्पकारों द्वारा 4000 वर्ष पुरानी लुप्त-मोम (ढोकरा) तकनीक से ढली पारंपरिक संगीतकार प्रतिमाएं।"
    },
    "culturalHeritageStory": {
      "en": "4,000-year-old lost-wax hollow casting practiced by tribal artisans depicting folklore musicians.",
      "hi": "4,000-year-old lost-wax hollow casting practiced by tribal artisans depicting folklore musicians.",
      "kn": "4,000-year-old lost-wax hollow casting practiced by tribal artisans depicting folklore musicians.",
      "ta": "4,000-year-old lost-wax hollow casting practiced by tribal artisans depicting folklore musicians."
    },
    "materialsUsed": {
      "en": "Lost-wax bell metal bronze, brass alloy, natural beeswax",
      "hi": "Lost-wax bell metal bronze, brass alloy, natural beeswax",
      "kn": "Lost-wax bell metal bronze, brass alloy, natural beeswax",
      "ta": "Lost-wax bell metal bronze, brass alloy, natural beeswax"
    },
    "dimensions": {
      "en": "8 x 4 x 3 inches each",
      "hi": "8 x 4 x 3 इंच प्रत्येक",
      "kn": "8 x 4 x 3 ಇಂಚು ಪ್ರತಿಯೊಂದು",
      "ta": "8 x 4 x 3 அங்குலம் ஒவ்வொன்றும்"
    },
    "craftCategory": "Brass Handicraft",
    "giCraftRegion": "Bastar Dhokra (Chhattisgarh)"
  },
  "bastar lost-wax cast dhokra tribal musician trio": {
    "title": {
      "en": "Bastar Lost-Wax Cast Dhokra Tribal Musician Trio",
      "hi": "बस्तर ढोकरा जनजातीय संगीतकार त्रिमूर्ति",
      "kn": "Bastar Lost-Wax Cast Dhokra ಬುಡಕಟ್ಟು Musician Trio",
      "ta": "Bastar Lost-Wax Cast Dhokra பழங்குடி Musician Trio"
    },
    "description": {
      "en": "Ancient 4,000-year-old lost-wax (cire-perdue) hollow bronze cast figurines depicting Gond tribal percussionists and flute players.",
      "hi": "बस्तर के जनजातीय शिल्पकारों द्वारा 4000 वर्ष पुरानी लुप्त-मोम (ढोकरा) तकनीक से ढली पारंपरिक संगीतकार प्रतिमाएं।",
      "kn": "बस्तर के जनजातीय शिल्पकारों द्वारा 4000 वर्ष पुरानी लुप्त-मोम (ढोकरा) तकनीक से ढली पारंपरिक संगीतकार प्रतिमाएं।",
      "ta": "बस्तर के जनजातीय शिल्पकारों द्वारा 4000 वर्ष पुरानी लुप्त-मोम (ढोकरा) तकनीक से ढली पारंपरिक संगीतकार प्रतिमाएं।"
    },
    "culturalHeritageStory": {
      "en": "4,000-year-old lost-wax hollow casting practiced by tribal artisans depicting folklore musicians.",
      "hi": "4,000-year-old lost-wax hollow casting practiced by tribal artisans depicting folklore musicians.",
      "kn": "4,000-year-old lost-wax hollow casting practiced by tribal artisans depicting folklore musicians.",
      "ta": "4,000-year-old lost-wax hollow casting practiced by tribal artisans depicting folklore musicians."
    },
    "materialsUsed": {
      "en": "Lost-wax bell metal bronze, brass alloy, natural beeswax",
      "hi": "Lost-wax bell metal bronze, brass alloy, natural beeswax",
      "kn": "Lost-wax bell metal bronze, brass alloy, natural beeswax",
      "ta": "Lost-wax bell metal bronze, brass alloy, natural beeswax"
    },
    "dimensions": {
      "en": "8 x 4 x 3 inches each",
      "hi": "8 x 4 x 3 इंच प्रत्येक",
      "kn": "8 x 4 x 3 ಇಂಚು ಪ್ರತಿಯೊಂದು",
      "ta": "8 x 4 x 3 அங்குலம் ஒவ்வொன்றும்"
    },
    "craftCategory": "Brass Handicraft",
    "giCraftRegion": "Bastar Dhokra (Chhattisgarh)"
  },
  "cmtvoiuko001p9e66nxzkssb2": {
    "title": {
      "en": "Handcrafted Moradabad Brass Engraved Peacock Diya Lamp",
      "hi": "मुरादाबाद पीतल मयूर दीया",
      "kn": "ಹಸ್ತನಿರ್ಮಿತ Moradabad ಹಿತ್ತಾಳೆ Engraved Peacock Diya ದೀಪ",
      "ta": "கைவினை Moradabad பித்தளை Engraved Peacock Diya விளக்கு"
    },
    "description": {
      "en": "Deep-welled ritual oil lamp hand-chiseled with detailed peacock plumage by generational brass artisans of Moradabad (Peetal Nagri).",
      "hi": "मुरादाबाद के कारीगरों द्वारा शुद्ध पीतल से नक्काशीदार मयूर दीया, मंदिर एवं आरती हेतु।",
      "kn": "मुरादाबाद के कारीगरों द्वारा शुद्ध पीतल से नक्काशीदार मयूर दीया, मंदिर एवं आरती हेतु।",
      "ta": "मुरादाबाद के कारीगरों द्वारा शुद्ध पीतल से नक्काशीदार मयूर दीया, मंदिर एवं आरती हेतु।"
    },
    "culturalHeritageStory": {
      "en": "Pure solid brass oil lamp with chisel-carved plumage and deep reservoir.",
      "hi": "Pure solid brass oil lamp with chisel-carved plumage and deep reservoir.",
      "kn": "Pure solid brass oil lamp with chisel-carved plumage and deep reservoir.",
      "ta": "Pure solid brass oil lamp with chisel-carved plumage and deep reservoir."
    },
    "materialsUsed": {
      "en": "Solid virgin brass, hand-chiseled engraving, antique gold polish",
      "hi": "Solid virgin brass, hand-chiseled engraving, antique gold polish",
      "kn": "Solid virgin brass, hand-chiseled engraving, antique gold polish",
      "ta": "Solid virgin brass, hand-chiseled engraving, antique gold polish"
    },
    "dimensions": {
      "en": "11 x 5 x 5 inches",
      "hi": "11 x 5 x 5 इंच",
      "kn": "11 x 5 x 5 ಇಂಚು",
      "ta": "11 x 5 x 5 அங்குலம்"
    },
    "craftCategory": "Brass Handicraft",
    "giCraftRegion": "Moradabad Brass (Uttar Pradesh)"
  },
  "handcrafted moradabad brass engraved peacock diya lamp": {
    "title": {
      "en": "Handcrafted Moradabad Brass Engraved Peacock Diya Lamp",
      "hi": "मुरादाबाद पीतल मयूर दीया",
      "kn": "ಹಸ್ತನಿರ್ಮಿತ Moradabad ಹಿತ್ತಾಳೆ Engraved Peacock Diya ದೀಪ",
      "ta": "கைவினை Moradabad பித்தளை Engraved Peacock Diya விளக்கு"
    },
    "description": {
      "en": "Deep-welled ritual oil lamp hand-chiseled with detailed peacock plumage by generational brass artisans of Moradabad (Peetal Nagri).",
      "hi": "मुरादाबाद के कारीगरों द्वारा शुद्ध पीतल से नक्काशीदार मयूर दीया, मंदिर एवं आरती हेतु।",
      "kn": "मुरादाबाद के कारीगरों द्वारा शुद्ध पीतल से नक्काशीदार मयूर दीया, मंदिर एवं आरती हेतु।",
      "ta": "मुरादाबाद के कारीगरों द्वारा शुद्ध पीतल से नक्काशीदार मयूर दीया, मंदिर एवं आरती हेतु।"
    },
    "culturalHeritageStory": {
      "en": "Pure solid brass oil lamp with chisel-carved plumage and deep reservoir.",
      "hi": "Pure solid brass oil lamp with chisel-carved plumage and deep reservoir.",
      "kn": "Pure solid brass oil lamp with chisel-carved plumage and deep reservoir.",
      "ta": "Pure solid brass oil lamp with chisel-carved plumage and deep reservoir."
    },
    "materialsUsed": {
      "en": "Solid virgin brass, hand-chiseled engraving, antique gold polish",
      "hi": "Solid virgin brass, hand-chiseled engraving, antique gold polish",
      "kn": "Solid virgin brass, hand-chiseled engraving, antique gold polish",
      "ta": "Solid virgin brass, hand-chiseled engraving, antique gold polish"
    },
    "dimensions": {
      "en": "11 x 5 x 5 inches",
      "hi": "11 x 5 x 5 इंच",
      "kn": "11 x 5 x 5 ಇಂಚು",
      "ta": "11 x 5 x 5 அங்குலம்"
    },
    "craftCategory": "Brass Handicraft",
    "giCraftRegion": "Moradabad Brass (Uttar Pradesh)"
  },
  "cmtvoiukt001r9e661v6blvat": {
    "title": {
      "en": "Dhokra Tribal Sun and Moon Wall Medallion",
      "hi": "ढोकरा जनजातीय सूर्य-चंद्र दीवार पदक",
      "kn": "Dhokra ಬುಡಕಟ್ಟು Sun and Moon Wall Medallion",
      "ta": "Dhokra பழங்குடி Sun and Moon Wall Medallion"
    },
    "description": {
      "en": "Circular cosmic medallion hand-crafted with concentric wax thread coils representing primal Gond astronomical harmony.",
      "hi": "बस्तर ढोकरा जनजातीय सूर्य-चंद्र दीवार पदक, जनजातीय ब्रह्मांडीय दर्शन का सुंदर धातु रूप।",
      "kn": "बस्तर ढोकरा जनजातीय सूर्य-चंद्र दीवार पदक, जनजातीय ब्रह्मांडीय दर्शन का सुंदर धातु रूप।",
      "ta": "बस्तर ढोकरा जनजातीय सूर्य-चंद्र दीवार पदक, जनजातीय ब्रह्मांडीय दर्शन का सुंदर धातु रूप।"
    },
    "culturalHeritageStory": {
      "en": "Cast metal cosmic medallion representing harmonious tribal cosmology.",
      "hi": "Cast metal cosmic medallion representing harmonious tribal cosmology.",
      "kn": "Cast metal cosmic medallion representing harmonious tribal cosmology.",
      "ta": "Cast metal cosmic medallion representing harmonious tribal cosmology."
    },
    "materialsUsed": {
      "en": "Lost-wax bell metal bronze, brass alloy, natural beeswax",
      "hi": "Lost-wax bell metal bronze, brass alloy, natural beeswax",
      "kn": "Lost-wax bell metal bronze, brass alloy, natural beeswax",
      "ta": "Lost-wax bell metal bronze, brass alloy, natural beeswax"
    },
    "dimensions": {
      "en": "12 inches diameter",
      "hi": "12 इंच व्यास",
      "kn": "12 ಇಂಚು ವ್ಯಾಸ",
      "ta": "12 அங்குலம் விட்டம்"
    },
    "craftCategory": "Brass Handicraft",
    "giCraftRegion": "Bastar Dhokra (Chhattisgarh)"
  },
  "dhokra tribal sun and moon wall medallion": {
    "title": {
      "en": "Dhokra Tribal Sun and Moon Wall Medallion",
      "hi": "ढोकरा जनजातीय सूर्य-चंद्र दीवार पदक",
      "kn": "Dhokra ಬುಡಕಟ್ಟು Sun and Moon Wall Medallion",
      "ta": "Dhokra பழங்குடி Sun and Moon Wall Medallion"
    },
    "description": {
      "en": "Circular cosmic medallion hand-crafted with concentric wax thread coils representing primal Gond astronomical harmony.",
      "hi": "बस्तर ढोकरा जनजातीय सूर्य-चंद्र दीवार पदक, जनजातीय ब्रह्मांडीय दर्शन का सुंदर धातु रूप।",
      "kn": "बस्तर ढोकरा जनजातीय सूर्य-चंद्र दीवार पदक, जनजातीय ब्रह्मांडीय दर्शन का सुंदर धातु रूप।",
      "ta": "बस्तर ढोकरा जनजातीय सूर्य-चंद्र दीवार पदक, जनजातीय ब्रह्मांडीय दर्शन का सुंदर धातु रूप।"
    },
    "culturalHeritageStory": {
      "en": "Cast metal cosmic medallion representing harmonious tribal cosmology.",
      "hi": "Cast metal cosmic medallion representing harmonious tribal cosmology.",
      "kn": "Cast metal cosmic medallion representing harmonious tribal cosmology.",
      "ta": "Cast metal cosmic medallion representing harmonious tribal cosmology."
    },
    "materialsUsed": {
      "en": "Lost-wax bell metal bronze, brass alloy, natural beeswax",
      "hi": "Lost-wax bell metal bronze, brass alloy, natural beeswax",
      "kn": "Lost-wax bell metal bronze, brass alloy, natural beeswax",
      "ta": "Lost-wax bell metal bronze, brass alloy, natural beeswax"
    },
    "dimensions": {
      "en": "12 inches diameter",
      "hi": "12 इंच व्यास",
      "kn": "12 ಇಂಚು ವ್ಯಾಸ",
      "ta": "12 அங்குலம் விட்டம்"
    },
    "craftCategory": "Brass Handicraft",
    "giCraftRegion": "Bastar Dhokra (Chhattisgarh)"
  },
  "cmtvoiukx001t9e66vpe3u74d": {
    "title": {
      "en": "Swamimalai Bronze Dancing Nataraja Statue (Chola Style)",
      "hi": "स्वामीमलाई कांस्य नटराज मूर्ति (चोल शैली)",
      "kn": "Swamimalai ಕಂಚಿನ Dancing Nataraja Statue (Chola Style)",
      "ta": "Swamimalai வெண்கலம் Dancing Nataraja Statue (Chola Style)"
    },
    "description": {
      "en": "Sacred iconographic bronze cast according to ancient Chola Shilpa Shastras depicting Lord Shiva as cosmic dancer within a fiery prabhamandala.",
      "hi": "तमिलनाडु के स्वामीमलाई में चोल मूर्तिकला परंपरा के अनुसार पंचलोहा कांस्य से ढली भगवान नटराज की प्रतिमा।",
      "kn": "तमिलनाडु के स्वामीमलाई में चोल मूर्तिकला परंपरा के अनुसार पंचलोहा कांस्य से ढली भगवान नटराज की प्रतिमा।",
      "ta": "तमिलनाडु के स्वामीमलाई में चोल मूर्तिकला परंपरा के अनुसार पंचलोहा कांस्य से ढली भगवान नटराज की प्रतिमा।"
    },
    "culturalHeritageStory": {
      "en": "Heirloom bronze cast according to ancient Shilpa Shastras with exquisite balance and mudra.",
      "hi": "Heirloom bronze cast according to ancient Shilpa Shastras with exquisite balance and mudra.",
      "kn": "Heirloom bronze cast according to ancient Shilpa Shastras with exquisite balance and mudra.",
      "ta": "Heirloom bronze cast according to ancient Shilpa Shastras with exquisite balance and mudra."
    },
    "materialsUsed": {
      "en": "Panchaloha five-metal sacred bronze alloy (Copper, Zinc, Lead, Silver, Gold trace)",
      "hi": "Panchaloha five-metal sacred bronze alloy (Copper, Zinc, Lead, Silver, Gold trace)",
      "kn": "Panchaloha five-metal sacred bronze alloy (Copper, Zinc, Lead, Silver, Gold trace)",
      "ta": "Panchaloha five-metal sacred bronze alloy (Copper, Zinc, Lead, Silver, Gold trace)"
    },
    "dimensions": {
      "en": "14 x 11 x 4.5 inches",
      "hi": "14 x 11 x 4.5 इंच",
      "kn": "14 x 11 x 4.5 ಇಂಚು",
      "ta": "14 x 11 x 4.5 அங்குலம்"
    },
    "craftCategory": "Brass Handicraft",
    "giCraftRegion": "Swamimalai Bronze (Tamil Nadu)"
  },
  "swamimalai bronze dancing nataraja statue (chola style)": {
    "title": {
      "en": "Swamimalai Bronze Dancing Nataraja Statue (Chola Style)",
      "hi": "स्वामीमलाई कांस्य नटराज मूर्ति (चोल शैली)",
      "kn": "Swamimalai ಕಂಚಿನ Dancing Nataraja Statue (Chola Style)",
      "ta": "Swamimalai வெண்கலம் Dancing Nataraja Statue (Chola Style)"
    },
    "description": {
      "en": "Sacred iconographic bronze cast according to ancient Chola Shilpa Shastras depicting Lord Shiva as cosmic dancer within a fiery prabhamandala.",
      "hi": "तमिलनाडु के स्वामीमलाई में चोल मूर्तिकला परंपरा के अनुसार पंचलोहा कांस्य से ढली भगवान नटराज की प्रतिमा।",
      "kn": "तमिलनाडु के स्वामीमलाई में चोल मूर्तिकला परंपरा के अनुसार पंचलोहा कांस्य से ढली भगवान नटराज की प्रतिमा।",
      "ta": "तमिलनाडु के स्वामीमलाई में चोल मूर्तिकला परंपरा के अनुसार पंचलोहा कांस्य से ढली भगवान नटराज की प्रतिमा।"
    },
    "culturalHeritageStory": {
      "en": "Heirloom bronze cast according to ancient Shilpa Shastras with exquisite balance and mudra.",
      "hi": "Heirloom bronze cast according to ancient Shilpa Shastras with exquisite balance and mudra.",
      "kn": "Heirloom bronze cast according to ancient Shilpa Shastras with exquisite balance and mudra.",
      "ta": "Heirloom bronze cast according to ancient Shilpa Shastras with exquisite balance and mudra."
    },
    "materialsUsed": {
      "en": "Panchaloha five-metal sacred bronze alloy (Copper, Zinc, Lead, Silver, Gold trace)",
      "hi": "Panchaloha five-metal sacred bronze alloy (Copper, Zinc, Lead, Silver, Gold trace)",
      "kn": "Panchaloha five-metal sacred bronze alloy (Copper, Zinc, Lead, Silver, Gold trace)",
      "ta": "Panchaloha five-metal sacred bronze alloy (Copper, Zinc, Lead, Silver, Gold trace)"
    },
    "dimensions": {
      "en": "14 x 11 x 4.5 inches",
      "hi": "14 x 11 x 4.5 इंच",
      "kn": "14 x 11 x 4.5 ಇಂಚು",
      "ta": "14 x 11 x 4.5 அங்குலம்"
    },
    "craftCategory": "Brass Handicraft",
    "giCraftRegion": "Swamimalai Bronze (Tamil Nadu)"
  },
  "cmtvoiul1001v9e662drci75i": {
    "title": {
      "en": "Antique Finish Solid Brass Door Knocker (Lion Head)",
      "hi": "पीतल सिंहमुख द्वार खटखटा",
      "kn": "Antique Finish Solid ಹಿತ್ತಾಳೆ Door Knocker (Lion Head)",
      "ta": "Antique Finish Solid பித்தளை Door Knocker (Lion Head)"
    },
    "description": {
      "en": "Commanding lion-head architectural entrance fixture providing crisp resonating strike sound against wooden doorways.",
      "hi": "मुरादाबाद पीतल सिंहमुख मुख्य द्वार खटखटा, ठोस पीतल और विंटेज पेटिना फिनिश।",
      "kn": "मुरादाबाद पीतल सिंहमुख मुख्य द्वार खटखटा, ठोस पीतल और विंटेज पेटिना फिनिश।",
      "ta": "मुरादाबाद पीतल सिंहमुख मुख्य द्वार खटखटा, ठोस पीतल और विंटेज पेटिना फिनिश।"
    },
    "culturalHeritageStory": {
      "en": "Cast brass architectural statement piece with weathered patina.",
      "hi": "Cast brass architectural statement piece with weathered patina.",
      "kn": "Cast brass architectural statement piece with weathered patina.",
      "ta": "Cast brass architectural statement piece with weathered patina."
    },
    "materialsUsed": {
      "en": "Heavy sand-cast solid brass, weathered antique patina",
      "hi": "Heavy sand-cast solid brass, weathered antique patina",
      "kn": "Heavy sand-cast solid brass, weathered antique patina",
      "ta": "Heavy sand-cast solid brass, weathered antique patina"
    },
    "dimensions": {
      "en": "8 x 4.5 inches",
      "hi": "8 x 4.5 इंच",
      "kn": "8 x 4.5 ಇಂಚು",
      "ta": "8 x 4.5 அங்குலம்"
    },
    "craftCategory": "Brass Handicraft",
    "giCraftRegion": "Moradabad Brass (Uttar Pradesh)"
  },
  "antique finish solid brass door knocker (lion head)": {
    "title": {
      "en": "Antique Finish Solid Brass Door Knocker (Lion Head)",
      "hi": "पीतल सिंहमुख द्वार खटखटा",
      "kn": "Antique Finish Solid ಹಿತ್ತಾಳೆ Door Knocker (Lion Head)",
      "ta": "Antique Finish Solid பித்தளை Door Knocker (Lion Head)"
    },
    "description": {
      "en": "Commanding lion-head architectural entrance fixture providing crisp resonating strike sound against wooden doorways.",
      "hi": "मुरादाबाद पीतल सिंहमुख मुख्य द्वार खटखटा, ठोस पीतल और विंटेज पेटिना फिनिश।",
      "kn": "मुरादाबाद पीतल सिंहमुख मुख्य द्वार खटखटा, ठोस पीतल और विंटेज पेटिना फिनिश।",
      "ta": "मुरादाबाद पीतल सिंहमुख मुख्य द्वार खटखटा, ठोस पीतल और विंटेज पेटिना फिनिश।"
    },
    "culturalHeritageStory": {
      "en": "Cast brass architectural statement piece with weathered patina.",
      "hi": "Cast brass architectural statement piece with weathered patina.",
      "kn": "Cast brass architectural statement piece with weathered patina.",
      "ta": "Cast brass architectural statement piece with weathered patina."
    },
    "materialsUsed": {
      "en": "Heavy sand-cast solid brass, weathered antique patina",
      "hi": "Heavy sand-cast solid brass, weathered antique patina",
      "kn": "Heavy sand-cast solid brass, weathered antique patina",
      "ta": "Heavy sand-cast solid brass, weathered antique patina"
    },
    "dimensions": {
      "en": "8 x 4.5 inches",
      "hi": "8 x 4.5 इंच",
      "kn": "8 x 4.5 ಇಂಚು",
      "ta": "8 x 4.5 அங்குலம்"
    },
    "craftCategory": "Brass Handicraft",
    "giCraftRegion": "Moradabad Brass (Uttar Pradesh)"
  },
  "cmtvoiul6001x9e66whcbgtq8": {
    "title": {
      "en": "Bastar Dhokra Deer Figurine with Filigree Antlers",
      "hi": "ढोकरा हिरण धातु शिल्प",
      "kn": "Bastar Dhokra Deer Figurine with ತಾರಕಾಶಿ Antlers",
      "ta": "Bastar Dhokra Deer Figurine with நுண்ணிய வேலைப்பாடு Antlers"
    },
    "description": {
      "en": "Forest spotted deer sculpture formed from hand-pulled wax threads that create gossamer openwork bronze horns when molten metal flows.",
      "hi": "बस्तर ढोकरा कांस्य हिरण, बारीक मोम धागों से गढ़ी गई जालीदार सींगों के साथ।",
      "kn": "बस्तर ढोकरा कांस्य हिरण, बारीक मोम धागों से गढ़ी गई जालीदार सींगों के साथ।",
      "ta": "बस्तर ढोकरा कांस्य हिरण, बारीक मोम धागों से गढ़ी गई जालीदार सींगों के साथ।"
    },
    "culturalHeritageStory": {
      "en": "Hand-rolled wax thread coils form delicate filigree patterns before bronze molten pouring.",
      "hi": "Hand-rolled wax thread coils form delicate filigree patterns before bronze molten pouring.",
      "kn": "Hand-rolled wax thread coils form delicate filigree patterns before bronze molten pouring.",
      "ta": "Hand-rolled wax thread coils form delicate filigree patterns before bronze molten pouring."
    },
    "materialsUsed": {
      "en": "Lost-wax bell metal bronze, brass alloy, natural beeswax",
      "hi": "Lost-wax bell metal bronze, brass alloy, natural beeswax",
      "kn": "Lost-wax bell metal bronze, brass alloy, natural beeswax",
      "ta": "Lost-wax bell metal bronze, brass alloy, natural beeswax"
    },
    "dimensions": {
      "en": "7 x 5 x 2.5 inches",
      "hi": "7 x 5 x 2.5 इंच",
      "kn": "7 x 5 x 2.5 ಇಂಚು",
      "ta": "7 x 5 x 2.5 அங்குலம்"
    },
    "craftCategory": "Brass Handicraft",
    "giCraftRegion": "Bastar Dhokra (Chhattisgarh)"
  },
  "bastar dhokra deer figurine with filigree antlers": {
    "title": {
      "en": "Bastar Dhokra Deer Figurine with Filigree Antlers",
      "hi": "ढोकरा हिरण धातु शिल्प",
      "kn": "Bastar Dhokra Deer Figurine with ತಾರಕಾಶಿ Antlers",
      "ta": "Bastar Dhokra Deer Figurine with நுண்ணிய வேலைப்பாடு Antlers"
    },
    "description": {
      "en": "Forest spotted deer sculpture formed from hand-pulled wax threads that create gossamer openwork bronze horns when molten metal flows.",
      "hi": "बस्तर ढोकरा कांस्य हिरण, बारीक मोम धागों से गढ़ी गई जालीदार सींगों के साथ।",
      "kn": "बस्तर ढोकरा कांस्य हिरण, बारीक मोम धागों से गढ़ी गई जालीदार सींगों के साथ।",
      "ta": "बस्तर ढोकरा कांस्य हिरण, बारीक मोम धागों से गढ़ी गई जालीदार सींगों के साथ।"
    },
    "culturalHeritageStory": {
      "en": "Hand-rolled wax thread coils form delicate filigree patterns before bronze molten pouring.",
      "hi": "Hand-rolled wax thread coils form delicate filigree patterns before bronze molten pouring.",
      "kn": "Hand-rolled wax thread coils form delicate filigree patterns before bronze molten pouring.",
      "ta": "Hand-rolled wax thread coils form delicate filigree patterns before bronze molten pouring."
    },
    "materialsUsed": {
      "en": "Lost-wax bell metal bronze, brass alloy, natural beeswax",
      "hi": "Lost-wax bell metal bronze, brass alloy, natural beeswax",
      "kn": "Lost-wax bell metal bronze, brass alloy, natural beeswax",
      "ta": "Lost-wax bell metal bronze, brass alloy, natural beeswax"
    },
    "dimensions": {
      "en": "7 x 5 x 2.5 inches",
      "hi": "7 x 5 x 2.5 इंच",
      "kn": "7 x 5 x 2.5 ಇಂಚು",
      "ta": "7 x 5 x 2.5 அங்குலம்"
    },
    "craftCategory": "Brass Handicraft",
    "giCraftRegion": "Bastar Dhokra (Chhattisgarh)"
  },
  "cmtvoiula001z9e669ozfzj4w": {
    "title": {
      "en": "Moradabad Hand-Chiseled Brass Fruit Bowl (Floral Rim)",
      "hi": "मुरादाबाद पीतल नक्काशीदार फ्रूट बाउल",
      "kn": "Moradabad Hand-Chiseled ಹಿತ್ತಾಳೆ Fruit Bowl (Floral Rim)",
      "ta": "Moradabad Hand-Chiseled பித்தளை Fruit Bowl (Floral Rim)"
    },
    "description": {
      "en": "Fluted decorative centerpiece bowl demonstrating master Moradabad Repoussé and chasing chisel metalwork.",
      "hi": "मुरादाबाद पीतल नक्काशीदार फ्रूट बाउल, हाथ से तराशी गई पुष्प किनारी और टिन अस्तर।",
      "kn": "मुरादाबाद पीतल नक्काशीदार फ्रूट बाउल, हाथ से तराशी गई पुष्प किनारी और टिन अस्तर।",
      "ta": "मुरादाबाद पीतल नक्काशीदार फ्रूट बाउल, हाथ से तराशी गई पुष्प किनारी और टिन अस्तर।"
    },
    "culturalHeritageStory": {
      "en": "Intricate kalai-tin lined brass bowl demonstrating master Moradabad sheet hammering.",
      "hi": "Intricate kalai-tin lined brass bowl demonstrating master Moradabad sheet hammering.",
      "kn": "Intricate kalai-tin lined brass bowl demonstrating master Moradabad sheet hammering.",
      "ta": "Intricate kalai-tin lined brass bowl demonstrating master Moradabad sheet hammering."
    },
    "materialsUsed": {
      "en": "Hammered sheet brass, pure tin (kalai) lining, embossed floral rim",
      "hi": "Hammered sheet brass, pure tin (kalai) lining, embossed floral rim",
      "kn": "Hammered sheet brass, pure tin (kalai) lining, embossed floral rim",
      "ta": "Hammered sheet brass, pure tin (kalai) lining, embossed floral rim"
    },
    "dimensions": {
      "en": "12 inches diameter",
      "hi": "12 इंच व्यास",
      "kn": "12 ಇಂಚು ವ್ಯಾಸ",
      "ta": "12 அங்குலம் விட்டம்"
    },
    "craftCategory": "Brass Handicraft",
    "giCraftRegion": "Moradabad Brass (Uttar Pradesh)"
  },
  "moradabad hand-chiseled brass fruit bowl (floral rim)": {
    "title": {
      "en": "Moradabad Hand-Chiseled Brass Fruit Bowl (Floral Rim)",
      "hi": "मुरादाबाद पीतल नक्काशीदार फ्रूट बाउल",
      "kn": "Moradabad Hand-Chiseled ಹಿತ್ತಾಳೆ Fruit Bowl (Floral Rim)",
      "ta": "Moradabad Hand-Chiseled பித்தளை Fruit Bowl (Floral Rim)"
    },
    "description": {
      "en": "Fluted decorative centerpiece bowl demonstrating master Moradabad Repoussé and chasing chisel metalwork.",
      "hi": "मुरादाबाद पीतल नक्काशीदार फ्रूट बाउल, हाथ से तराशी गई पुष्प किनारी और टिन अस्तर।",
      "kn": "मुरादाबाद पीतल नक्काशीदार फ्रूट बाउल, हाथ से तराशी गई पुष्प किनारी और टिन अस्तर।",
      "ta": "मुरादाबाद पीतल नक्काशीदार फ्रूट बाउल, हाथ से तराशी गई पुष्प किनारी और टिन अस्तर।"
    },
    "culturalHeritageStory": {
      "en": "Intricate kalai-tin lined brass bowl demonstrating master Moradabad sheet hammering.",
      "hi": "Intricate kalai-tin lined brass bowl demonstrating master Moradabad sheet hammering.",
      "kn": "Intricate kalai-tin lined brass bowl demonstrating master Moradabad sheet hammering.",
      "ta": "Intricate kalai-tin lined brass bowl demonstrating master Moradabad sheet hammering."
    },
    "materialsUsed": {
      "en": "Hammered sheet brass, pure tin (kalai) lining, embossed floral rim",
      "hi": "Hammered sheet brass, pure tin (kalai) lining, embossed floral rim",
      "kn": "Hammered sheet brass, pure tin (kalai) lining, embossed floral rim",
      "ta": "Hammered sheet brass, pure tin (kalai) lining, embossed floral rim"
    },
    "dimensions": {
      "en": "12 inches diameter",
      "hi": "12 इंच व्यास",
      "kn": "12 ಇಂಚು ವ್ಯಾಸ",
      "ta": "12 அங்குலம் விட்டம்"
    },
    "craftCategory": "Brass Handicraft",
    "giCraftRegion": "Moradabad Brass (Uttar Pradesh)"
  },
  "cmtvoiule00219e66utyx1qr0": {
    "title": {
      "en": "Handcrafted Brass Puja Bell with Nandi Finial",
      "hi": "नंदी मुकुट पीतल पूजा घंटी",
      "kn": "ಹಸ್ತನಿರ್ಮಿತ ಹಿತ್ತಾಳೆ Puja Bell with Nandi Finial",
      "ta": "கைவினை பித்தளை Puja Bell with Nandi Finial"
    },
    "description": {
      "en": "Sonorous ritual prayer bell cast to sustain pure harmonic resonance that clears negative domestic energies during aarti.",
      "hi": "नंदी मुकुट पीतल पूजा घंटी, मधुर और दीर्घकालिक घंटानाद उत्पन्न करने वाली शुद्ध कांस्य-पीतल मिश्र धातु।",
      "kn": "नंदी मुकुट पीतल पूजा घंटी, मधुर और दीर्घकालिक घंटानाद उत्पन्न करने वाली शुद्ध कांस्य-पीतल मिश्र धातु।",
      "ta": "नंदी मुकुट पीतल पूजा घंटी, मधुर और दीर्घकालिक घंटानाद उत्पन्न करने वाली शुद्ध कांस्य-पीतल मिश्र धातु।"
    },
    "culturalHeritageStory": {
      "en": "Sonorous bronze alloy hand bell crafted for meditative sound resonance.",
      "hi": "Sonorous bronze alloy hand bell crafted for meditative sound resonance.",
      "kn": "Sonorous bronze alloy hand bell crafted for meditative sound resonance.",
      "ta": "Sonorous bronze alloy hand bell crafted for meditative sound resonance."
    },
    "materialsUsed": {
      "en": "High-copper resonant brass alloy, cast Nandi bull handle",
      "hi": "High-copper resonant brass alloy, cast Nandi bull handle",
      "kn": "High-copper resonant brass alloy, cast Nandi bull handle",
      "ta": "High-copper resonant brass alloy, cast Nandi bull handle"
    },
    "dimensions": {
      "en": "7 x 3 inches",
      "hi": "7 x 3 इंच",
      "kn": "7 x 3 ಇಂಚು",
      "ta": "7 x 3 அங்குலம்"
    },
    "craftCategory": "Brass Handicraft",
    "giCraftRegion": "Moradabad Brass (Uttar Pradesh)"
  },
  "handcrafted brass puja bell with nandi finial": {
    "title": {
      "en": "Handcrafted Brass Puja Bell with Nandi Finial",
      "hi": "नंदी मुकुट पीतल पूजा घंटी",
      "kn": "ಹಸ್ತನಿರ್ಮಿತ ಹಿತ್ತಾಳೆ Puja Bell with Nandi Finial",
      "ta": "கைவினை பித்தளை Puja Bell with Nandi Finial"
    },
    "description": {
      "en": "Sonorous ritual prayer bell cast to sustain pure harmonic resonance that clears negative domestic energies during aarti.",
      "hi": "नंदी मुकुट पीतल पूजा घंटी, मधुर और दीर्घकालिक घंटानाद उत्पन्न करने वाली शुद्ध कांस्य-पीतल मिश्र धातु।",
      "kn": "नंदी मुकुट पीतल पूजा घंटी, मधुर और दीर्घकालिक घंटानाद उत्पन्न करने वाली शुद्ध कांस्य-पीतल मिश्र धातु।",
      "ta": "नंदी मुकुट पीतल पूजा घंटी, मधुर और दीर्घकालिक घंटानाद उत्पन्न करने वाली शुद्ध कांस्य-पीतल मिश्र धातु।"
    },
    "culturalHeritageStory": {
      "en": "Sonorous bronze alloy hand bell crafted for meditative sound resonance.",
      "hi": "Sonorous bronze alloy hand bell crafted for meditative sound resonance.",
      "kn": "Sonorous bronze alloy hand bell crafted for meditative sound resonance.",
      "ta": "Sonorous bronze alloy hand bell crafted for meditative sound resonance."
    },
    "materialsUsed": {
      "en": "High-copper resonant brass alloy, cast Nandi bull handle",
      "hi": "High-copper resonant brass alloy, cast Nandi bull handle",
      "kn": "High-copper resonant brass alloy, cast Nandi bull handle",
      "ta": "High-copper resonant brass alloy, cast Nandi bull handle"
    },
    "dimensions": {
      "en": "7 x 3 inches",
      "hi": "7 x 3 इंच",
      "kn": "7 x 3 ಇಂಚು",
      "ta": "7 x 3 அங்குலம்"
    },
    "craftCategory": "Brass Handicraft",
    "giCraftRegion": "Moradabad Brass (Uttar Pradesh)"
  },
  "cmtvoiuli00239e66o5xrwzle": {
    "title": {
      "en": "Dhokra Miniature Elephant with Howdah Trunk Figurine",
      "hi": "ढोकरा लघु हाथी मूर्ति",
      "kn": "Dhokra Miniature ಆನೆ with Howdah Trunk Figurine",
      "ta": "Dhokra Miniature யானை with Howdah Trunk Figurine"
    },
    "description": {
      "en": "Ceremonial Bastar tribal elephant talisman bearing a raised trunk signifying prosperity and royal resilience.",
      "hi": "ढोकरा लघु हाथी मूर्ति, बस्तर की जनजातीय संस्कृति का शुभ और मंगलकारी प्रतीक।",
      "kn": "ढोकरा लघु हाथी मूर्ति, बस्तर की जनजातीय संस्कृति का शुभ और मंगलकारी प्रतीक।",
      "ta": "ढोकरा लघु हाथी मूर्ति, बस्तर की जनजातीय संस्कृति का शुभ और मंगलकारी प्रतीक।"
    },
    "culturalHeritageStory": {
      "en": "Tribal ceremonial token representing enduring strength and natural alliance.",
      "hi": "Tribal ceremonial token representing enduring strength and natural alliance.",
      "kn": "Tribal ceremonial token representing enduring strength and natural alliance.",
      "ta": "Tribal ceremonial token representing enduring strength and natural alliance."
    },
    "materialsUsed": {
      "en": "Lost-wax bell metal bronze, brass alloy, natural beeswax",
      "hi": "Lost-wax bell metal bronze, brass alloy, natural beeswax",
      "kn": "Lost-wax bell metal bronze, brass alloy, natural beeswax",
      "ta": "Lost-wax bell metal bronze, brass alloy, natural beeswax"
    },
    "dimensions": {
      "en": "5 x 4 x 2.5 inches",
      "hi": "5 x 4 x 2.5 इंच",
      "kn": "5 x 4 x 2.5 ಇಂಚು",
      "ta": "5 x 4 x 2.5 அங்குலம்"
    },
    "craftCategory": "Brass Handicraft",
    "giCraftRegion": "Bastar Dhokra (Chhattisgarh)"
  },
  "dhokra miniature elephant with howdah trunk figurine": {
    "title": {
      "en": "Dhokra Miniature Elephant with Howdah Trunk Figurine",
      "hi": "ढोकरा लघु हाथी मूर्ति",
      "kn": "Dhokra Miniature ಆನೆ with Howdah Trunk Figurine",
      "ta": "Dhokra Miniature யானை with Howdah Trunk Figurine"
    },
    "description": {
      "en": "Ceremonial Bastar tribal elephant talisman bearing a raised trunk signifying prosperity and royal resilience.",
      "hi": "ढोकरा लघु हाथी मूर्ति, बस्तर की जनजातीय संस्कृति का शुभ और मंगलकारी प्रतीक।",
      "kn": "ढोकरा लघु हाथी मूर्ति, बस्तर की जनजातीय संस्कृति का शुभ और मंगलकारी प्रतीक।",
      "ta": "ढोकरा लघु हाथी मूर्ति, बस्तर की जनजातीय संस्कृति का शुभ और मंगलकारी प्रतीक।"
    },
    "culturalHeritageStory": {
      "en": "Tribal ceremonial token representing enduring strength and natural alliance.",
      "hi": "Tribal ceremonial token representing enduring strength and natural alliance.",
      "kn": "Tribal ceremonial token representing enduring strength and natural alliance.",
      "ta": "Tribal ceremonial token representing enduring strength and natural alliance."
    },
    "materialsUsed": {
      "en": "Lost-wax bell metal bronze, brass alloy, natural beeswax",
      "hi": "Lost-wax bell metal bronze, brass alloy, natural beeswax",
      "kn": "Lost-wax bell metal bronze, brass alloy, natural beeswax",
      "ta": "Lost-wax bell metal bronze, brass alloy, natural beeswax"
    },
    "dimensions": {
      "en": "5 x 4 x 2.5 inches",
      "hi": "5 x 4 x 2.5 इंच",
      "kn": "5 x 4 x 2.5 ಇಂಚು",
      "ta": "5 x 4 x 2.5 அங்குலம்"
    },
    "craftCategory": "Brass Handicraft",
    "giCraftRegion": "Bastar Dhokra (Chhattisgarh)"
  },
  "cmtvoiulm00259e66ahh7qjlx": {
    "title": {
      "en": "Traditional Brass Urli Vessel for Floating Flowers & Diyas",
      "hi": "पीतल पारंपरिक उरुली पात्र",
      "kn": "ಸಾಂಪ್ರದಾಯಿಕ ಹಿತ್ತಾಳೆ Urli Vessel for Floating Flowers & Diyas",
      "ta": "பாரம்பரிய பித்தளை Urli Vessel for Floating Flowers & Diyas"
    },
    "description": {
      "en": "Broad shallow traditional brass basin centerpiece designed for welcoming entryways with water, floating petals, and lit tea lamps.",
      "hi": "पारंपरिक भारी पीतल उरुली पात्र, पुष्प पंखुड़ियों एवं तैरते दीयों से घर के मुख्य द्वार को सजाने हेतु।",
      "kn": "पारंपरिक भारी पीतल उरुली पात्र, पुष्प पंखुड़ियों एवं तैरते दीयों से घर के मुख्य द्वार को सजाने हेतु।",
      "ta": "पारंपरिक भारी पीतल उरुली पात्र, पुष्प पंखुड़ियों एवं तैरते दीयों से घर के मुख्य द्वार को सजाने हेतु।"
    },
    "culturalHeritageStory": {
      "en": "Handcrafted thick-gauge brass basin centerpiece for auspicious home entryways.",
      "hi": "Handcrafted thick-gauge brass basin centerpiece for auspicious home entryways.",
      "kn": "Handcrafted thick-gauge brass basin centerpiece for auspicious home entryways.",
      "ta": "Handcrafted thick-gauge brass basin centerpiece for auspicious home entryways."
    },
    "materialsUsed": {
      "en": "Heavy-gauge spun and hammered virgin brass",
      "hi": "Heavy-gauge spun and hammered virgin brass",
      "kn": "Heavy-gauge spun and hammered virgin brass",
      "ta": "Heavy-gauge spun and hammered virgin brass"
    },
    "dimensions": {
      "en": "13 inches diameter",
      "hi": "13 इंच व्यास",
      "kn": "13 ಇಂಚು ವ್ಯಾಸ",
      "ta": "13 அங்குலம் விட்டம்"
    },
    "craftCategory": "Brass Handicraft",
    "giCraftRegion": "Moradabad Brass (Uttar Pradesh)"
  },
  "traditional brass urli vessel for floating flowers & diyas": {
    "title": {
      "en": "Traditional Brass Urli Vessel for Floating Flowers & Diyas",
      "hi": "पीतल पारंपरिक उरुली पात्र",
      "kn": "ಸಾಂಪ್ರದಾಯಿಕ ಹಿತ್ತಾಳೆ Urli Vessel for Floating Flowers & Diyas",
      "ta": "பாரம்பரிய பித்தளை Urli Vessel for Floating Flowers & Diyas"
    },
    "description": {
      "en": "Broad shallow traditional brass basin centerpiece designed for welcoming entryways with water, floating petals, and lit tea lamps.",
      "hi": "पारंपरिक भारी पीतल उरुली पात्र, पुष्प पंखुड़ियों एवं तैरते दीयों से घर के मुख्य द्वार को सजाने हेतु।",
      "kn": "पारंपरिक भारी पीतल उरुली पात्र, पुष्प पंखुड़ियों एवं तैरते दीयों से घर के मुख्य द्वार को सजाने हेतु।",
      "ta": "पारंपरिक भारी पीतल उरुली पात्र, पुष्प पंखुड़ियों एवं तैरते दीयों से घर के मुख्य द्वार को सजाने हेतु।"
    },
    "culturalHeritageStory": {
      "en": "Handcrafted thick-gauge brass basin centerpiece for auspicious home entryways.",
      "hi": "Handcrafted thick-gauge brass basin centerpiece for auspicious home entryways.",
      "kn": "Handcrafted thick-gauge brass basin centerpiece for auspicious home entryways.",
      "ta": "Handcrafted thick-gauge brass basin centerpiece for auspicious home entryways."
    },
    "materialsUsed": {
      "en": "Heavy-gauge spun and hammered virgin brass",
      "hi": "Heavy-gauge spun and hammered virgin brass",
      "kn": "Heavy-gauge spun and hammered virgin brass",
      "ta": "Heavy-gauge spun and hammered virgin brass"
    },
    "dimensions": {
      "en": "13 inches diameter",
      "hi": "13 इंच व्यास",
      "kn": "13 ಇಂಚು ವ್ಯಾಸ",
      "ta": "13 அங்குலம் விட்டம்"
    },
    "craftCategory": "Brass Handicraft",
    "giCraftRegion": "Moradabad Brass (Uttar Pradesh)"
  },
  "cmtvoiulr00279e666e83sqio": {
    "title": {
      "en": "Channapatna Non-Toxic Wooden Stacking Ring Pyramid",
      "hi": "चन्नापट्टना सुरक्षित लकड़ी रिंग पिरामिड",
      "kn": "Channapatna Non-Toxic ಮರದ Stacking Ring Pyramid",
      "ta": "Channapatna Non-Toxic மர Stacking Ring Pyramid"
    },
    "description": {
      "en": "Safe, splinter-free wooden educational stacking toy hand-turned on traditional lathes and buffed with non-toxic natural lac extracts.",
      "hi": "कर्नाटक के चन्नापट्टना का विश्वविख्यात प्राकृतिक लकड़ी स्टैकिंग पिरामिड। बच्चों के लिए 100% सुरक्षित और गैर-विषाक्त।",
      "kn": "कर्नाटक के चन्नापट्टना का विश्वविख्यात प्राकृतिक लकड़ी स्टैकिंग पिरामिड। बच्चों के लिए 100% सुरक्षित और गैर-विषाक्त।",
      "ta": "कर्नाटक के चन्नापट्टना का विश्वविख्यात प्राकृतिक लकड़ी स्टैकिंग पिरामिड। बच्चों के लिए 100% सुरक्षित और गैर-विषाक्त।"
    },
    "culturalHeritageStory": {
      "en": "100% natural vegetable-lac dyed wooden toy safe for infants, supporting 200-year GI craft.",
      "hi": "100% natural vegetable-lac dyed wooden toy safe for infants, supporting 200-year GI craft.",
      "kn": "100% natural vegetable-lac dyed wooden toy safe for infants, supporting 200-year GI craft.",
      "ta": "100% natural vegetable-lac dyed wooden toy safe for infants, supporting 200-year GI craft."
    },
    "materialsUsed": {
      "en": "Seasoned Wrightia tinctoria (Aale mara) ivory wood, organic vegetable lac dyes",
      "hi": "Seasoned Wrightia tinctoria (Aale mara) ivory wood, organic vegetable lac dyes",
      "kn": "Seasoned Wrightia tinctoria (Aale mara) ivory wood, organic vegetable lac dyes",
      "ta": "Seasoned Wrightia tinctoria (Aale mara) ivory wood, organic vegetable lac dyes"
    },
    "dimensions": {
      "en": "8 x 4 inches",
      "hi": "8 x 4 इंच",
      "kn": "8 x 4 ಇಂಚು",
      "ta": "8 x 4 அங்குலம்"
    },
    "craftCategory": "Wood Carving",
    "giCraftRegion": "Channapatna Toys (Karnataka)"
  },
  "channapatna non-toxic wooden stacking ring pyramid": {
    "title": {
      "en": "Channapatna Non-Toxic Wooden Stacking Ring Pyramid",
      "hi": "चन्नापट्टना सुरक्षित लकड़ी रिंग पिरामिड",
      "kn": "Channapatna Non-Toxic ಮರದ Stacking Ring Pyramid",
      "ta": "Channapatna Non-Toxic மர Stacking Ring Pyramid"
    },
    "description": {
      "en": "Safe, splinter-free wooden educational stacking toy hand-turned on traditional lathes and buffed with non-toxic natural lac extracts.",
      "hi": "कर्नाटक के चन्नापट्टना का विश्वविख्यात प्राकृतिक लकड़ी स्टैकिंग पिरामिड। बच्चों के लिए 100% सुरक्षित और गैर-विषाक्त।",
      "kn": "कर्नाटक के चन्नापट्टना का विश्वविख्यात प्राकृतिक लकड़ी स्टैकिंग पिरामिड। बच्चों के लिए 100% सुरक्षित और गैर-विषाक्त।",
      "ta": "कर्नाटक के चन्नापट्टना का विश्वविख्यात प्राकृतिक लकड़ी स्टैकिंग पिरामिड। बच्चों के लिए 100% सुरक्षित और गैर-विषाक्त।"
    },
    "culturalHeritageStory": {
      "en": "100% natural vegetable-lac dyed wooden toy safe for infants, supporting 200-year GI craft.",
      "hi": "100% natural vegetable-lac dyed wooden toy safe for infants, supporting 200-year GI craft.",
      "kn": "100% natural vegetable-lac dyed wooden toy safe for infants, supporting 200-year GI craft.",
      "ta": "100% natural vegetable-lac dyed wooden toy safe for infants, supporting 200-year GI craft."
    },
    "materialsUsed": {
      "en": "Seasoned Wrightia tinctoria (Aale mara) ivory wood, organic vegetable lac dyes",
      "hi": "Seasoned Wrightia tinctoria (Aale mara) ivory wood, organic vegetable lac dyes",
      "kn": "Seasoned Wrightia tinctoria (Aale mara) ivory wood, organic vegetable lac dyes",
      "ta": "Seasoned Wrightia tinctoria (Aale mara) ivory wood, organic vegetable lac dyes"
    },
    "dimensions": {
      "en": "8 x 4 inches",
      "hi": "8 x 4 इंच",
      "kn": "8 x 4 ಇಂಚು",
      "ta": "8 x 4 அங்குலம்"
    },
    "craftCategory": "Wood Carving",
    "giCraftRegion": "Channapatna Toys (Karnataka)"
  },
  "cmtvoiulv00299e66n1hvv0qg": {
    "title": {
      "en": "Hand-Turned Wooden Peg Dolls Family Set (5 Figures)",
      "hi": "चन्नापट्टना लकड़ी गुड़िया परिवार सेट",
      "kn": "Hand-Turned ಮರದ Peg Dolls Family Set (5 Figures)",
      "ta": "Hand-Turned மர Peg Dolls Family Set (5 Figures)"
    },
    "description": {
      "en": "Charming smooth lathe-turned peg figures finished to a mirror gloss using friction polishing with talc leaves.",
      "hi": "चन्नापट्टना हस्तनिर्मित लकड़ी गुड़िया परिवार सेट (5 मूर्तियां), प्राकृतिक रंगों से अलंकृत।",
      "kn": "चन्नापट्टना हस्तनिर्मित लकड़ी गुड़िया परिवार सेट (5 मूर्तियां), प्राकृतिक रंगों से अलंकृत।",
      "ta": "चन्नापट्टना हस्तनिर्मित लकड़ी गुड़िया परिवार सेट (5 मूर्तियां), प्राकृतिक रंगों से अलंकृत।"
    },
    "culturalHeritageStory": {
      "en": "Smooth lathe-turned wooden characters buffed with talc leaf for high-gloss natural polish.",
      "hi": "Smooth lathe-turned wooden characters buffed with talc leaf for high-gloss natural polish.",
      "kn": "Smooth lathe-turned wooden characters buffed with talc leaf for high-gloss natural polish.",
      "ta": "Smooth lathe-turned wooden characters buffed with talc leaf for high-gloss natural polish."
    },
    "materialsUsed": {
      "en": "Wrightia tinctoria wood, natural lac pigments, talc leaf polish",
      "hi": "Wrightia tinctoria wood, natural lac pigments, talc leaf polish",
      "kn": "Wrightia tinctoria wood, natural lac pigments, talc leaf polish",
      "ta": "Wrightia tinctoria wood, natural lac pigments, talc leaf polish"
    },
    "dimensions": {
      "en": "2.5 to 5 inches",
      "hi": "2.5 to 5 इंच",
      "kn": "2.5 to 5 ಇಂಚು",
      "ta": "2.5 to 5 அங்குலம்"
    },
    "craftCategory": "Wood Carving",
    "giCraftRegion": "Channapatna Toys (Karnataka)"
  },
  "hand-turned wooden peg dolls family set (5 figures)": {
    "title": {
      "en": "Hand-Turned Wooden Peg Dolls Family Set (5 Figures)",
      "hi": "चन्नापट्टना लकड़ी गुड़िया परिवार सेट",
      "kn": "Hand-Turned ಮರದ Peg Dolls Family Set (5 Figures)",
      "ta": "Hand-Turned மர Peg Dolls Family Set (5 Figures)"
    },
    "description": {
      "en": "Charming smooth lathe-turned peg figures finished to a mirror gloss using friction polishing with talc leaves.",
      "hi": "चन्नापट्टना हस्तनिर्मित लकड़ी गुड़िया परिवार सेट (5 मूर्तियां), प्राकृतिक रंगों से अलंकृत।",
      "kn": "चन्नापट्टना हस्तनिर्मित लकड़ी गुड़िया परिवार सेट (5 मूर्तियां), प्राकृतिक रंगों से अलंकृत।",
      "ta": "चन्नापट्टना हस्तनिर्मित लकड़ी गुड़िया परिवार सेट (5 मूर्तियां), प्राकृतिक रंगों से अलंकृत।"
    },
    "culturalHeritageStory": {
      "en": "Smooth lathe-turned wooden characters buffed with talc leaf for high-gloss natural polish.",
      "hi": "Smooth lathe-turned wooden characters buffed with talc leaf for high-gloss natural polish.",
      "kn": "Smooth lathe-turned wooden characters buffed with talc leaf for high-gloss natural polish.",
      "ta": "Smooth lathe-turned wooden characters buffed with talc leaf for high-gloss natural polish."
    },
    "materialsUsed": {
      "en": "Wrightia tinctoria wood, natural lac pigments, talc leaf polish",
      "hi": "Wrightia tinctoria wood, natural lac pigments, talc leaf polish",
      "kn": "Wrightia tinctoria wood, natural lac pigments, talc leaf polish",
      "ta": "Wrightia tinctoria wood, natural lac pigments, talc leaf polish"
    },
    "dimensions": {
      "en": "2.5 to 5 inches",
      "hi": "2.5 to 5 इंच",
      "kn": "2.5 to 5 ಇಂಚು",
      "ta": "2.5 to 5 அங்குலம்"
    },
    "craftCategory": "Wood Carving",
    "giCraftRegion": "Channapatna Toys (Karnataka)"
  },
  "cmtvoiulz002b9e6656ooz9x3": {
    "title": {
      "en": "Saharanpur Hand-Carved Sheesham Wood Book Rest (Rehal)",
      "hi": "सहारनपुर शीशम लकड़ी रेहल पुस्तक स्टैंड",
      "kn": "Saharanpur ಕೈಕೆತ್ತನೆಯ Sheesham ಮರ Book Rest (Rehal)",
      "ta": "Saharanpur கைவேலைப்பாடு செதுக்கப்பட்ட Sheesham மரம் Book Rest (Rehal)"
    },
    "description": {
      "en": "Foldable prayer book holder carved from an unbroken plank of dense Sheesham wood with delicate Islamic geometric jali fretwork.",
      "hi": "सहारनपुर शीशम लकड़ी रेहल पुस्तक स्टैंड, एक ही लकड़ी के टुकड़े से तराशी गई जालीदार संरचना।",
      "kn": "सहारनपुर शीशम लकड़ी रेहल पुस्तक स्टैंड, एक ही लकड़ी के टुकड़े से तराशी गई जालीदार संरचना।",
      "ta": "सहारनपुर शीशम लकड़ी रेहल पुस्तक स्टैंड, एक ही लकड़ी के टुकड़े से तराशी गई जालीदार संरचना।"
    },
    "culturalHeritageStory": {
      "en": "Foldable geometric lattice carved from a single piece of aged Indian rosewood.",
      "hi": "Foldable geometric lattice carved from a single piece of aged Indian rosewood.",
      "kn": "Foldable geometric lattice carved from a single piece of aged Indian rosewood.",
      "ta": "Foldable geometric lattice carved from a single piece of aged Indian rosewood."
    },
    "materialsUsed": {
      "en": "Seasoned Indian Rosewood (Sheesham), single-piece hinge carving",
      "hi": "Seasoned Indian Rosewood (Sheesham), single-piece hinge carving",
      "kn": "Seasoned Indian Rosewood (Sheesham), single-piece hinge carving",
      "ta": "Seasoned Indian Rosewood (Sheesham), single-piece hinge carving"
    },
    "dimensions": {
      "en": "12 x 7 inches folded",
      "hi": "12 x 7 इंच folded",
      "kn": "12 x 7 ಇಂಚು folded",
      "ta": "12 x 7 அங்குலம் folded"
    },
    "craftCategory": "Wood Carving",
    "giCraftRegion": "Saharanpur Woodcraft (Uttar Pradesh)"
  },
  "saharanpur hand-carved sheesham wood book rest (rehal)": {
    "title": {
      "en": "Saharanpur Hand-Carved Sheesham Wood Book Rest (Rehal)",
      "hi": "सहारनपुर शीशम लकड़ी रेहल पुस्तक स्टैंड",
      "kn": "Saharanpur ಕೈಕೆತ್ತನೆಯ Sheesham ಮರ Book Rest (Rehal)",
      "ta": "Saharanpur கைவேலைப்பாடு செதுக்கப்பட்ட Sheesham மரம் Book Rest (Rehal)"
    },
    "description": {
      "en": "Foldable prayer book holder carved from an unbroken plank of dense Sheesham wood with delicate Islamic geometric jali fretwork.",
      "hi": "सहारनपुर शीशम लकड़ी रेहल पुस्तक स्टैंड, एक ही लकड़ी के टुकड़े से तराशी गई जालीदार संरचना।",
      "kn": "सहारनपुर शीशम लकड़ी रेहल पुस्तक स्टैंड, एक ही लकड़ी के टुकड़े से तराशी गई जालीदार संरचना।",
      "ta": "सहारनपुर शीशम लकड़ी रेहल पुस्तक स्टैंड, एक ही लकड़ी के टुकड़े से तराशी गई जालीदार संरचना।"
    },
    "culturalHeritageStory": {
      "en": "Foldable geometric lattice carved from a single piece of aged Indian rosewood.",
      "hi": "Foldable geometric lattice carved from a single piece of aged Indian rosewood.",
      "kn": "Foldable geometric lattice carved from a single piece of aged Indian rosewood.",
      "ta": "Foldable geometric lattice carved from a single piece of aged Indian rosewood."
    },
    "materialsUsed": {
      "en": "Seasoned Indian Rosewood (Sheesham), single-piece hinge carving",
      "hi": "Seasoned Indian Rosewood (Sheesham), single-piece hinge carving",
      "kn": "Seasoned Indian Rosewood (Sheesham), single-piece hinge carving",
      "ta": "Seasoned Indian Rosewood (Sheesham), single-piece hinge carving"
    },
    "dimensions": {
      "en": "12 x 7 inches folded",
      "hi": "12 x 7 इंच folded",
      "kn": "12 x 7 ಇಂಚು folded",
      "ta": "12 x 7 அங்குலம் folded"
    },
    "craftCategory": "Wood Carving",
    "giCraftRegion": "Saharanpur Woodcraft (Uttar Pradesh)"
  },
  "cmtvoium3002d9e66mdoartk4": {
    "title": {
      "en": "Channapatna Handcrafted Wooden Spinning Tops with Pull Cord",
      "hi": "पारंपरिक लकड़ी की लट्टू (सेट)",
      "kn": "Channapatna ಹಸ್ತನಿರ್ಮಿತ ಮರದ Spinning Tops with Pull Cord",
      "ta": "Channapatna கைவினை மர Spinning Tops with Pull Cord"
    },
    "description": {
      "en": "Precision lathe-balanced wooden lattu spinning tops providing minutes of high-speed gyroscopic rotation without wobbling.",
      "hi": "पारंपरिक लकड़ी की लट्टू सेट, चन्नापट्टना के कारीगरों द्वारा प्राकृतिक लाख के रंगों में निर्मित।",
      "kn": "पारंपरिक लकड़ी की लट्टू सेट, चन्नापट्टना के कारीगरों द्वारा प्राकृतिक लाख के रंगों में निर्मित।",
      "ta": "पारंपरिक लकड़ी की लट्टू सेट, चन्नापट्टना के कारीगरों द्वारा प्राकृतिक लाख के रंगों में निर्मित।"
    },
    "culturalHeritageStory": {
      "en": "Precision-weighted organic wooden spinning tops generating balanced gyroscopic rotation.",
      "hi": "Precision-weighted organic wooden spinning tops generating balanced gyroscopic rotation.",
      "kn": "Precision-weighted organic wooden spinning tops generating balanced gyroscopic rotation.",
      "ta": "Precision-weighted organic wooden spinning tops generating balanced gyroscopic rotation."
    },
    "materialsUsed": {
      "en": "Aale mara softwood, natural vegetable lac, cotton launch cord",
      "hi": "Aale mara softwood, natural vegetable lac, cotton launch cord",
      "kn": "Aale mara softwood, natural vegetable lac, cotton launch cord",
      "ta": "Aale mara softwood, natural vegetable lac, cotton launch cord"
    },
    "dimensions": {
      "en": "3.5 inches diameter",
      "hi": "3.5 इंच व्यास",
      "kn": "3.5 ಇಂಚು ವ್ಯಾಸ",
      "ta": "3.5 அங்குலம் விட்டம்"
    },
    "craftCategory": "Wood Carving",
    "giCraftRegion": "Channapatna Toys (Karnataka)"
  },
  "channapatna handcrafted wooden spinning tops with pull cord": {
    "title": {
      "en": "Channapatna Handcrafted Wooden Spinning Tops with Pull Cord",
      "hi": "पारंपरिक लकड़ी की लट्टू (सेट)",
      "kn": "Channapatna ಹಸ್ತನಿರ್ಮಿತ ಮರದ Spinning Tops with Pull Cord",
      "ta": "Channapatna கைவினை மர Spinning Tops with Pull Cord"
    },
    "description": {
      "en": "Precision lathe-balanced wooden lattu spinning tops providing minutes of high-speed gyroscopic rotation without wobbling.",
      "hi": "पारंपरिक लकड़ी की लट्टू सेट, चन्नापट्टना के कारीगरों द्वारा प्राकृतिक लाख के रंगों में निर्मित।",
      "kn": "पारंपरिक लकड़ी की लट्टू सेट, चन्नापट्टना के कारीगरों द्वारा प्राकृतिक लाख के रंगों में निर्मित।",
      "ta": "पारंपरिक लकड़ी की लट्टू सेट, चन्नापट्टना के कारीगरों द्वारा प्राकृतिक लाख के रंगों में निर्मित।"
    },
    "culturalHeritageStory": {
      "en": "Precision-weighted organic wooden spinning tops generating balanced gyroscopic rotation.",
      "hi": "Precision-weighted organic wooden spinning tops generating balanced gyroscopic rotation.",
      "kn": "Precision-weighted organic wooden spinning tops generating balanced gyroscopic rotation.",
      "ta": "Precision-weighted organic wooden spinning tops generating balanced gyroscopic rotation."
    },
    "materialsUsed": {
      "en": "Aale mara softwood, natural vegetable lac, cotton launch cord",
      "hi": "Aale mara softwood, natural vegetable lac, cotton launch cord",
      "kn": "Aale mara softwood, natural vegetable lac, cotton launch cord",
      "ta": "Aale mara softwood, natural vegetable lac, cotton launch cord"
    },
    "dimensions": {
      "en": "3.5 inches diameter",
      "hi": "3.5 इंच व्यास",
      "kn": "3.5 ಇಂಚು ವ್ಯಾಸ",
      "ta": "3.5 அங்குலம் விட்டம்"
    },
    "craftCategory": "Wood Carving",
    "giCraftRegion": "Channapatna Toys (Karnataka)"
  },
  "cmtvoium8002f9e66gmq2lsfq": {
    "title": {
      "en": "Saharanpur Lattice Carved Wooden Jewelry Box with Brass Inlay",
      "hi": "सहारनपुर जाली नक्काशीदार आभूषण बॉक्स",
      "kn": "Saharanpur Lattice Carved ಮರದ ಆಭರಣ ಪೆಟ್ಟಿಗೆ with ಹಿತ್ತಾಳೆ ಕೆತ್ತನೆ",
      "ta": "Saharanpur Lattice Carved மர நகை பெட்டி with பித்தளை வேலைப்பாடு"
    },
    "description": {
      "en": "Velvet-lined keepsake chest featuring openwork floral jali lattice and Tarkashi hammered brass floral tendrils embedded flush with the lid.",
      "hi": "सहारनपुर जाली नक्काशीदार आभूषण बॉक्स, पीतल की बारीक तार जड़ाई (तारकशी) और मखमली अस्तर।",
      "kn": "सहारनपुर जाली नक्काशीदार आभूषण बॉक्स, पीतल की बारीक तार जड़ाई (तारकशी) और मखमली अस्तर।",
      "ta": "सहारनपुर जाली नक्काशीदार आभूषण बॉक्स, पीतल की बारीक तार जड़ाई (तारकशी) और मखमली अस्तर।"
    },
    "culturalHeritageStory": {
      "en": "Velvet-lined storage box crafted with floral Jali fretwork and fine brass wire inlay.",
      "hi": "Velvet-lined storage box crafted with floral Jali fretwork and fine brass wire inlay.",
      "kn": "Velvet-lined storage box crafted with floral Jali fretwork and fine brass wire inlay.",
      "ta": "Velvet-lined storage box crafted with floral Jali fretwork and fine brass wire inlay."
    },
    "materialsUsed": {
      "en": "Aged seasoned Indian Sheesham, pure brass wire inlay, velvet interior lining",
      "hi": "Aged seasoned Indian Sheesham, pure brass wire inlay, velvet interior lining",
      "kn": "Aged seasoned Indian Sheesham, pure brass wire inlay, velvet interior lining",
      "ta": "Aged seasoned Indian Sheesham, pure brass wire inlay, velvet interior lining"
    },
    "dimensions": {
      "en": "8 x 5 x 3.5 inches",
      "hi": "8 x 5 x 3.5 इंच",
      "kn": "8 x 5 x 3.5 ಇಂಚು",
      "ta": "8 x 5 x 3.5 அங்குலம்"
    },
    "craftCategory": "Wood Carving",
    "giCraftRegion": "Saharanpur Woodcraft (Uttar Pradesh)"
  },
  "saharanpur lattice carved wooden jewelry box with brass inlay": {
    "title": {
      "en": "Saharanpur Lattice Carved Wooden Jewelry Box with Brass Inlay",
      "hi": "सहारनपुर जाली नक्काशीदार आभूषण बॉक्स",
      "kn": "Saharanpur Lattice Carved ಮರದ ಆಭರಣ ಪೆಟ್ಟಿಗೆ with ಹಿತ್ತಾಳೆ ಕೆತ್ತನೆ",
      "ta": "Saharanpur Lattice Carved மர நகை பெட்டி with பித்தளை வேலைப்பாடு"
    },
    "description": {
      "en": "Velvet-lined keepsake chest featuring openwork floral jali lattice and Tarkashi hammered brass floral tendrils embedded flush with the lid.",
      "hi": "सहारनपुर जाली नक्काशीदार आभूषण बॉक्स, पीतल की बारीक तार जड़ाई (तारकशी) और मखमली अस्तर।",
      "kn": "सहारनपुर जाली नक्काशीदार आभूषण बॉक्स, पीतल की बारीक तार जड़ाई (तारकशी) और मखमली अस्तर।",
      "ta": "सहारनपुर जाली नक्काशीदार आभूषण बॉक्स, पीतल की बारीक तार जड़ाई (तारकशी) और मखमली अस्तर।"
    },
    "culturalHeritageStory": {
      "en": "Velvet-lined storage box crafted with floral Jali fretwork and fine brass wire inlay.",
      "hi": "Velvet-lined storage box crafted with floral Jali fretwork and fine brass wire inlay.",
      "kn": "Velvet-lined storage box crafted with floral Jali fretwork and fine brass wire inlay.",
      "ta": "Velvet-lined storage box crafted with floral Jali fretwork and fine brass wire inlay."
    },
    "materialsUsed": {
      "en": "Aged seasoned Indian Sheesham, pure brass wire inlay, velvet interior lining",
      "hi": "Aged seasoned Indian Sheesham, pure brass wire inlay, velvet interior lining",
      "kn": "Aged seasoned Indian Sheesham, pure brass wire inlay, velvet interior lining",
      "ta": "Aged seasoned Indian Sheesham, pure brass wire inlay, velvet interior lining"
    },
    "dimensions": {
      "en": "8 x 5 x 3.5 inches",
      "hi": "8 x 5 x 3.5 इंच",
      "kn": "8 x 5 x 3.5 ಇಂಚು",
      "ta": "8 x 5 x 3.5 அங்குலம்"
    },
    "craftCategory": "Wood Carving",
    "giCraftRegion": "Saharanpur Woodcraft (Uttar Pradesh)"
  },
  "cmtvoiumc002h9e667x92uipa": {
    "title": {
      "en": "Hand-Carved Wooden Spice Grinder & Mortar-Pestle",
      "hi": "लकड़ी की ओखली और मूसल",
      "kn": "ಕೈಕೆತ್ತನೆಯ ಮರದ Spice Grinder & Mortar-Pestle",
      "ta": "கைவேலைப்பாடு செதுக்கப்பட்ட மர Spice Grinder & Mortar-Pestle"
    },
    "description": {
      "en": "Antibacterial solid neem wood mortar and pestle crafted for gentle crushing of whole cardamoms, pepper, and garlic.",
      "hi": "प्राकृतिक नीम की लकड़ी से बनी ओखली और मूसल, मसालों के प्राकृतिक सुगंधित तेल को बनाए रखने हेतु।",
      "kn": "प्राकृतिक नीम की लकड़ी से बनी ओखली और मूसल, मसालों के प्राकृतिक सुगंधित तेल को बनाए रखने हेतु।",
      "ta": "प्राकृतिक नीम की लकड़ी से बनी ओखली और मूसल, मसालों के प्राकृतिक सुगंधित तेल को बनाए रखने हेतु।"
    },
    "culturalHeritageStory": {
      "en": "Solid neem wood kitchen tool enhancing aromatic essential oil extraction.",
      "hi": "Solid neem wood kitchen tool enhancing aromatic essential oil extraction.",
      "kn": "Solid neem wood kitchen tool enhancing aromatic essential oil extraction.",
      "ta": "Solid neem wood kitchen tool enhancing aromatic essential oil extraction."
    },
    "materialsUsed": {
      "en": "Solid seasoned neem wood, food-grade mineral oil treatment",
      "hi": "Solid seasoned neem wood, food-grade mineral oil treatment",
      "kn": "Solid seasoned neem wood, food-grade mineral oil treatment",
      "ta": "Solid seasoned neem wood, food-grade mineral oil treatment"
    },
    "dimensions": {
      "en": "6 x 4.5 inches",
      "hi": "6 x 4.5 इंच",
      "kn": "6 x 4.5 ಇಂಚು",
      "ta": "6 x 4.5 அங்குலம்"
    },
    "craftCategory": "Wood Carving",
    "giCraftRegion": "Saharanpur Woodcraft (Uttar Pradesh)"
  },
  "hand-carved wooden spice grinder & mortar-pestle": {
    "title": {
      "en": "Hand-Carved Wooden Spice Grinder & Mortar-Pestle",
      "hi": "लकड़ी की ओखली और मूसल",
      "kn": "ಕೈಕೆತ್ತನೆಯ ಮರದ Spice Grinder & Mortar-Pestle",
      "ta": "கைவேலைப்பாடு செதுக்கப்பட்ட மர Spice Grinder & Mortar-Pestle"
    },
    "description": {
      "en": "Antibacterial solid neem wood mortar and pestle crafted for gentle crushing of whole cardamoms, pepper, and garlic.",
      "hi": "प्राकृतिक नीम की लकड़ी से बनी ओखली और मूसल, मसालों के प्राकृतिक सुगंधित तेल को बनाए रखने हेतु।",
      "kn": "प्राकृतिक नीम की लकड़ी से बनी ओखली और मूसल, मसालों के प्राकृतिक सुगंधित तेल को बनाए रखने हेतु।",
      "ta": "प्राकृतिक नीम की लकड़ी से बनी ओखली और मूसल, मसालों के प्राकृतिक सुगंधित तेल को बनाए रखने हेतु।"
    },
    "culturalHeritageStory": {
      "en": "Solid neem wood kitchen tool enhancing aromatic essential oil extraction.",
      "hi": "Solid neem wood kitchen tool enhancing aromatic essential oil extraction.",
      "kn": "Solid neem wood kitchen tool enhancing aromatic essential oil extraction.",
      "ta": "Solid neem wood kitchen tool enhancing aromatic essential oil extraction."
    },
    "materialsUsed": {
      "en": "Solid seasoned neem wood, food-grade mineral oil treatment",
      "hi": "Solid seasoned neem wood, food-grade mineral oil treatment",
      "kn": "Solid seasoned neem wood, food-grade mineral oil treatment",
      "ta": "Solid seasoned neem wood, food-grade mineral oil treatment"
    },
    "dimensions": {
      "en": "6 x 4.5 inches",
      "hi": "6 x 4.5 इंच",
      "kn": "6 x 4.5 ಇಂಚು",
      "ta": "6 x 4.5 அங்குலம்"
    },
    "craftCategory": "Wood Carving",
    "giCraftRegion": "Saharanpur Woodcraft (Uttar Pradesh)"
  },
  "cmtvoiumg002j9e66n9etykvu": {
    "title": {
      "en": "Channapatna Wooden Animal Train Pull Toy with Wheels",
      "hi": "चन्नापट्टना लकड़ी की रेलगाड़ी खिलौना",
      "kn": "Channapatna ಮರದ Animal Train Pull ಗೊಂಬೆ with Wheels",
      "ta": "Channapatna மர Animal Train Pull பொம்மை with Wheels"
    },
    "description": {
      "en": "Delightful wheeled nursery pull train connecting elephant, horse, and camel carriages with rounded child-safe edges.",
      "hi": "चन्नापट्टना लकड़ी की रेलगाड़ी खिलौना पहियों सहित, प्राकृतिक लाख रंगों से रंगा आकर्षक बच्चों का खिलौना।",
      "kn": "चन्नापट्टना लकड़ी की रेलगाड़ी खिलौना पहियों सहित, प्राकृतिक लाख रंगों से रंगा आकर्षक बच्चों का खिलौना।",
      "ta": "चन्नापट्टना लकड़ी की रेलगाड़ी खिलौना पहियों सहित, प्राकृतिक लाख रंगों से रंगा आकर्षक बच्चों का खिलौना।"
    },
    "culturalHeritageStory": {
      "en": "Interlinked animal carriages moving smoothly on hand-turned wooden wheel axles.",
      "hi": "Interlinked animal carriages moving smoothly on hand-turned wooden wheel axles.",
      "kn": "Interlinked animal carriages moving smoothly on hand-turned wooden wheel axles.",
      "ta": "Interlinked animal carriages moving smoothly on hand-turned wooden wheel axles."
    },
    "materialsUsed": {
      "en": "Wrightia tinctoria wood, natural vegetable lac dyes, safe wooden dowel couplings",
      "hi": "Wrightia tinctoria wood, natural vegetable lac dyes, safe wooden dowel couplings",
      "kn": "Wrightia tinctoria wood, natural vegetable lac dyes, safe wooden dowel couplings",
      "ta": "Wrightia tinctoria wood, natural vegetable lac dyes, safe wooden dowel couplings"
    },
    "dimensions": {
      "en": "18 x 3.5 x 4 inches",
      "hi": "18 x 3.5 x 4 इंच",
      "kn": "18 x 3.5 x 4 ಇಂಚು",
      "ta": "18 x 3.5 x 4 அங்குலம்"
    },
    "craftCategory": "Wood Carving",
    "giCraftRegion": "Channapatna Toys (Karnataka)"
  },
  "channapatna wooden animal train pull toy with wheels": {
    "title": {
      "en": "Channapatna Wooden Animal Train Pull Toy with Wheels",
      "hi": "चन्नापट्टना लकड़ी की रेलगाड़ी खिलौना",
      "kn": "Channapatna ಮರದ Animal Train Pull ಗೊಂಬೆ with Wheels",
      "ta": "Channapatna மர Animal Train Pull பொம்மை with Wheels"
    },
    "description": {
      "en": "Delightful wheeled nursery pull train connecting elephant, horse, and camel carriages with rounded child-safe edges.",
      "hi": "चन्नापट्टना लकड़ी की रेलगाड़ी खिलौना पहियों सहित, प्राकृतिक लाख रंगों से रंगा आकर्षक बच्चों का खिलौना।",
      "kn": "चन्नापट्टना लकड़ी की रेलगाड़ी खिलौना पहियों सहित, प्राकृतिक लाख रंगों से रंगा आकर्षक बच्चों का खिलौना।",
      "ta": "चन्नापट्टना लकड़ी की रेलगाड़ी खिलौना पहियों सहित, प्राकृतिक लाख रंगों से रंगा आकर्षक बच्चों का खिलौना।"
    },
    "culturalHeritageStory": {
      "en": "Interlinked animal carriages moving smoothly on hand-turned wooden wheel axles.",
      "hi": "Interlinked animal carriages moving smoothly on hand-turned wooden wheel axles.",
      "kn": "Interlinked animal carriages moving smoothly on hand-turned wooden wheel axles.",
      "ta": "Interlinked animal carriages moving smoothly on hand-turned wooden wheel axles."
    },
    "materialsUsed": {
      "en": "Wrightia tinctoria wood, natural vegetable lac dyes, safe wooden dowel couplings",
      "hi": "Wrightia tinctoria wood, natural vegetable lac dyes, safe wooden dowel couplings",
      "kn": "Wrightia tinctoria wood, natural vegetable lac dyes, safe wooden dowel couplings",
      "ta": "Wrightia tinctoria wood, natural vegetable lac dyes, safe wooden dowel couplings"
    },
    "dimensions": {
      "en": "18 x 3.5 x 4 inches",
      "hi": "18 x 3.5 x 4 इंच",
      "kn": "18 x 3.5 x 4 ಇಂಚು",
      "ta": "18 x 3.5 x 4 அங்குலம்"
    },
    "craftCategory": "Wood Carving",
    "giCraftRegion": "Channapatna Toys (Karnataka)"
  },
  "cmtvoiumk002l9e668k246dkd": {
    "title": {
      "en": "Handcrafted Wooden Wall Hook Rack with Elephant Motifs",
      "hi": "नक्काशीदार लकड़ी का दीवार हैंगर",
      "kn": "ಹಸ್ತನಿರ್ಮಿತ ಮರದ Wall Hook Rack with ಆನೆ Motifs",
      "ta": "கைவினை மர Wall Hook Rack with யானை Motifs"
    },
    "description": {
      "en": "Rustic utility coat and key rack carved with auspicious row of Indian elephants in low relief across seasoned hardwood.",
      "hi": "नक्काशीदार लकड़ी का दीवार हैंगर हाथी रूपांकनों सहित, शीशम एवं पीतल हुक से सुसज्जित।",
      "kn": "नक्काशीदार लकड़ी का दीवार हैंगर हाथी रूपांकनों सहित, शीशम एवं पीतल हुक से सुसज्जित।",
      "ta": "नक्काशीदार लकड़ी का दीवार हैंगर हाथी रूपांकनों सहित, शीशम एवं पीतल हुक से सुसज्जित।"
    },
    "culturalHeritageStory": {
      "en": "Rustic utility wall hanging made from reclaimed mango wood with cast hooks.",
      "hi": "Rustic utility wall hanging made from reclaimed mango wood with cast hooks.",
      "kn": "Rustic utility wall hanging made from reclaimed mango wood with cast hooks.",
      "ta": "Rustic utility wall hanging made from reclaimed mango wood with cast hooks."
    },
    "materialsUsed": {
      "en": "Reclaimed mango wood, hand-forged antique brass coat hooks",
      "hi": "Reclaimed mango wood, hand-forged antique brass coat hooks",
      "kn": "Reclaimed mango wood, hand-forged antique brass coat hooks",
      "ta": "Reclaimed mango wood, hand-forged antique brass coat hooks"
    },
    "dimensions": {
      "en": "16 x 4 inches",
      "hi": "16 x 4 इंच",
      "kn": "16 x 4 ಇಂಚು",
      "ta": "16 x 4 அங்குலம்"
    },
    "craftCategory": "Wood Carving",
    "giCraftRegion": "Saharanpur Woodcraft (Uttar Pradesh)"
  },
  "handcrafted wooden wall hook rack with elephant motifs": {
    "title": {
      "en": "Handcrafted Wooden Wall Hook Rack with Elephant Motifs",
      "hi": "नक्काशीदार लकड़ी का दीवार हैंगर",
      "kn": "ಹಸ್ತನಿರ್ಮಿತ ಮರದ Wall Hook Rack with ಆನೆ Motifs",
      "ta": "கைவினை மர Wall Hook Rack with யானை Motifs"
    },
    "description": {
      "en": "Rustic utility coat and key rack carved with auspicious row of Indian elephants in low relief across seasoned hardwood.",
      "hi": "नक्काशीदार लकड़ी का दीवार हैंगर हाथी रूपांकनों सहित, शीशम एवं पीतल हुक से सुसज्जित।",
      "kn": "नक्काशीदार लकड़ी का दीवार हैंगर हाथी रूपांकनों सहित, शीशम एवं पीतल हुक से सुसज्जित।",
      "ta": "नक्काशीदार लकड़ी का दीवार हैंगर हाथी रूपांकनों सहित, शीशम एवं पीतल हुक से सुसज्जित।"
    },
    "culturalHeritageStory": {
      "en": "Rustic utility wall hanging made from reclaimed mango wood with cast hooks.",
      "hi": "Rustic utility wall hanging made from reclaimed mango wood with cast hooks.",
      "kn": "Rustic utility wall hanging made from reclaimed mango wood with cast hooks.",
      "ta": "Rustic utility wall hanging made from reclaimed mango wood with cast hooks."
    },
    "materialsUsed": {
      "en": "Reclaimed mango wood, hand-forged antique brass coat hooks",
      "hi": "Reclaimed mango wood, hand-forged antique brass coat hooks",
      "kn": "Reclaimed mango wood, hand-forged antique brass coat hooks",
      "ta": "Reclaimed mango wood, hand-forged antique brass coat hooks"
    },
    "dimensions": {
      "en": "16 x 4 inches",
      "hi": "16 x 4 इंच",
      "kn": "16 x 4 ಇಂಚು",
      "ta": "16 x 4 அங்குலம்"
    },
    "craftCategory": "Wood Carving",
    "giCraftRegion": "Saharanpur Woodcraft (Uttar Pradesh)"
  },
  "cmtvoiump002n9e66pr81n7ux": {
    "title": {
      "en": "Kondapalli Handcrafted Wooden Dasavataram Figurine Set",
      "hi": "कोंडापल्ली दशावतारम काष्ठ मूर्तियां",
      "kn": "Kondapalli ಹಸ್ತನಿರ್ಮಿತ ಮರದ Dasavataram Figurine Set",
      "ta": "Kondapalli கைவினை மர Dasavataram Figurine Set"
    },
    "description": {
      "en": "Sacred 10-incarnation Vishnu set carved from sacred lightweight softwood by hereditary Kondapalli artisans in Andhra Pradesh.",
      "hi": "आंध्र प्रदेश के कोंडापल्ली शिल्पकारों द्वारा तेल्ला पोनिकी की हल्की लकड़ी से निर्मित दशावतारम मूर्तियां।",
      "kn": "आंध्र प्रदेश के कोंडापल्ली शिल्पकारों द्वारा तेल्ला पोनिकी की हल्की लकड़ी से निर्मित दशावतारम मूर्तियां।",
      "ta": "आंध्र प्रदेश के कोंडापल्ली शिल्पकारों द्वारा तेल्ला पोनिकी की हल्की लकड़ी से निर्मित दशावतारम मूर्तियां।"
    },
    "culturalHeritageStory": {
      "en": "Tella Poniki lightweight softwood carved with sacred mythological precision in Andhra Pradesh.",
      "hi": "Tella Poniki lightweight softwood carved with sacred mythological precision in Andhra Pradesh.",
      "kn": "Tella Poniki lightweight softwood carved with sacred mythological precision in Andhra Pradesh.",
      "ta": "Tella Poniki lightweight softwood carved with sacred mythological precision in Andhra Pradesh."
    },
    "materialsUsed": {
      "en": "Lightweight Tella Poniki softwood, tamarind seed paste (makku), natural vegetable paints",
      "hi": "Lightweight Tella Poniki softwood, tamarind seed paste (makku), natural vegetable paints",
      "kn": "Lightweight Tella Poniki softwood, tamarind seed paste (makku), natural vegetable paints",
      "ta": "Lightweight Tella Poniki softwood, tamarind seed paste (makku), natural vegetable paints"
    },
    "dimensions": {
      "en": "4 to 6 inches height",
      "hi": "4 to 6 इंच ऊंचाई",
      "kn": "4 to 6 ಇಂಚು ಎತ್ತರ",
      "ta": "4 to 6 அங்குலம் உயரம்"
    },
    "craftCategory": "Wood Carving",
    "giCraftRegion": "Kondapalli Toys (Andhra Pradesh)"
  },
  "kondapalli handcrafted wooden dasavataram figurine set": {
    "title": {
      "en": "Kondapalli Handcrafted Wooden Dasavataram Figurine Set",
      "hi": "कोंडापल्ली दशावतारम काष्ठ मूर्तियां",
      "kn": "Kondapalli ಹಸ್ತನಿರ್ಮಿತ ಮರದ Dasavataram Figurine Set",
      "ta": "Kondapalli கைவினை மர Dasavataram Figurine Set"
    },
    "description": {
      "en": "Sacred 10-incarnation Vishnu set carved from sacred lightweight softwood by hereditary Kondapalli artisans in Andhra Pradesh.",
      "hi": "आंध्र प्रदेश के कोंडापल्ली शिल्पकारों द्वारा तेल्ला पोनिकी की हल्की लकड़ी से निर्मित दशावतारम मूर्तियां।",
      "kn": "आंध्र प्रदेश के कोंडापल्ली शिल्पकारों द्वारा तेल्ला पोनिकी की हल्की लकड़ी से निर्मित दशावतारम मूर्तियां।",
      "ta": "आंध्र प्रदेश के कोंडापल्ली शिल्पकारों द्वारा तेल्ला पोनिकी की हल्की लकड़ी से निर्मित दशावतारम मूर्तियां।"
    },
    "culturalHeritageStory": {
      "en": "Tella Poniki lightweight softwood carved with sacred mythological precision in Andhra Pradesh.",
      "hi": "Tella Poniki lightweight softwood carved with sacred mythological precision in Andhra Pradesh.",
      "kn": "Tella Poniki lightweight softwood carved with sacred mythological precision in Andhra Pradesh.",
      "ta": "Tella Poniki lightweight softwood carved with sacred mythological precision in Andhra Pradesh."
    },
    "materialsUsed": {
      "en": "Lightweight Tella Poniki softwood, tamarind seed paste (makku), natural vegetable paints",
      "hi": "Lightweight Tella Poniki softwood, tamarind seed paste (makku), natural vegetable paints",
      "kn": "Lightweight Tella Poniki softwood, tamarind seed paste (makku), natural vegetable paints",
      "ta": "Lightweight Tella Poniki softwood, tamarind seed paste (makku), natural vegetable paints"
    },
    "dimensions": {
      "en": "4 to 6 inches height",
      "hi": "4 to 6 इंच ऊंचाई",
      "kn": "4 to 6 ಇಂಚು ಎತ್ತರ",
      "ta": "4 to 6 அங்குலம் உயரம்"
    },
    "craftCategory": "Wood Carving",
    "giCraftRegion": "Kondapalli Toys (Andhra Pradesh)"
  },
  "cmtvoiumt002p9e667id8vcn1": {
    "title": {
      "en": "Artisanal Wooden Coaster Set with Bark Edge Finish",
      "hi": "प्राकृतिक लकड़ी कोस्टर सेट (6 का सेट)",
      "kn": "Artisanal ಮರದ ಕೋಸ್ಟರ್ Set with Bark Edge Finish",
      "ta": "Artisanal மர கோஸ்டர் Set with Bark Edge Finish"
    },
    "description": {
      "en": "Rustic live-edge table coasters preserving the natural tree bark perimeter and distinctive circular growth grain rings.",
      "hi": "प्राकृतिक लकड़ी कोस्टर सेट (6 का सेट) जीवित छाल किनारी सहित, प्राकृतिक मोम से सील किया हुआ।",
      "kn": "प्राकृतिक लकड़ी कोस्टर सेट (6 का सेट) जीवित छाल किनारी सहित, प्राकृतिक मोम से सील किया हुआ।",
      "ta": "प्राकृतिक लकड़ी कोस्टर सेट (6 का सेट) जीवित छाल किनारी सहित, प्राकृतिक मोम से सील किया हुआ।"
    },
    "culturalHeritageStory": {
      "en": "Cross-cut hardwood rounds treated with organic beeswax to highlight tree ring growth lines.",
      "hi": "Cross-cut hardwood rounds treated with organic beeswax to highlight tree ring growth lines.",
      "kn": "Cross-cut hardwood rounds treated with organic beeswax to highlight tree ring growth lines.",
      "ta": "Cross-cut hardwood rounds treated with organic beeswax to highlight tree ring growth lines."
    },
    "materialsUsed": {
      "en": "Natural cross-cut Indian teak wood rounds, natural organic beeswax seal",
      "hi": "Natural cross-cut Indian teak wood rounds, natural organic beeswax seal",
      "kn": "Natural cross-cut Indian teak wood rounds, natural organic beeswax seal",
      "ta": "Natural cross-cut Indian teak wood rounds, natural organic beeswax seal"
    },
    "dimensions": {
      "en": "4 inches diameter",
      "hi": "4 इंच व्यास",
      "kn": "4 ಇಂಚು ವ್ಯಾಸ",
      "ta": "4 அங்குலம் விட்டம்"
    },
    "craftCategory": "Wood Carving",
    "giCraftRegion": "Saharanpur Woodcraft (Uttar Pradesh)"
  },
  "artisanal wooden coaster set with bark edge finish": {
    "title": {
      "en": "Artisanal Wooden Coaster Set with Bark Edge Finish",
      "hi": "प्राकृतिक लकड़ी कोस्टर सेट (6 का सेट)",
      "kn": "Artisanal ಮರದ ಕೋಸ್ಟರ್ Set with Bark Edge Finish",
      "ta": "Artisanal மர கோஸ்டர் Set with Bark Edge Finish"
    },
    "description": {
      "en": "Rustic live-edge table coasters preserving the natural tree bark perimeter and distinctive circular growth grain rings.",
      "hi": "प्राकृतिक लकड़ी कोस्टर सेट (6 का सेट) जीवित छाल किनारी सहित, प्राकृतिक मोम से सील किया हुआ।",
      "kn": "प्राकृतिक लकड़ी कोस्टर सेट (6 का सेट) जीवित छाल किनारी सहित, प्राकृतिक मोम से सील किया हुआ।",
      "ta": "प्राकृतिक लकड़ी कोस्टर सेट (6 का सेट) जीवित छाल किनारी सहित, प्राकृतिक मोम से सील किया हुआ।"
    },
    "culturalHeritageStory": {
      "en": "Cross-cut hardwood rounds treated with organic beeswax to highlight tree ring growth lines.",
      "hi": "Cross-cut hardwood rounds treated with organic beeswax to highlight tree ring growth lines.",
      "kn": "Cross-cut hardwood rounds treated with organic beeswax to highlight tree ring growth lines.",
      "ta": "Cross-cut hardwood rounds treated with organic beeswax to highlight tree ring growth lines."
    },
    "materialsUsed": {
      "en": "Natural cross-cut Indian teak wood rounds, natural organic beeswax seal",
      "hi": "Natural cross-cut Indian teak wood rounds, natural organic beeswax seal",
      "kn": "Natural cross-cut Indian teak wood rounds, natural organic beeswax seal",
      "ta": "Natural cross-cut Indian teak wood rounds, natural organic beeswax seal"
    },
    "dimensions": {
      "en": "4 inches diameter",
      "hi": "4 इंच व्यास",
      "kn": "4 ಇಂಚು ವ್ಯಾಸ",
      "ta": "4 அங்குலம் விட்டம்"
    },
    "craftCategory": "Wood Carving",
    "giCraftRegion": "Saharanpur Woodcraft (Uttar Pradesh)"
  },
  "cmtvoiumy002r9e665prq8w0o": {
    "title": {
      "en": "Authentic Madhubani Tree of Life Painting (Handmade Paper)",
      "hi": "मधुबनी जीवन वृक्ष चित्रकला (हस्तनिर्मित कागज)",
      "kn": "Authentic ಮಧುಬನಿ Tree of Life ವರ್ಣಚಿತ್ರ (Handmade Paper)",
      "ta": "Authentic மதுபனி Tree of Life ஓவியம் (Handmade Paper)"
    },
    "description": {
      "en": "Traditional Mithila ritual folk painting drawn with bamboo twigs and organic plant dyes depicting Kalpavriksha fertility harmony.",
      "hi": "बिहार की मिथिला (मधुबनी) कला का प्रामाणिक जीवन वृक्ष चित्र, बांस की कलम और प्राकृतिक रंगों से हस्तनिर्मित।",
      "kn": "बिहार की मिथिला (मधुबनी) कला का प्रामाणिक जीवन वृक्ष चित्र, बांस की कलम और प्राकृतिक रंगों से हस्तनिर्मित।",
      "ta": "बिहार की मिथिला (मधुबनी) कला का प्रामाणिक जीवन वृक्ष चित्र, बांस की कलम और प्राकृतिक रंगों से हस्तनिर्मित।"
    },
    "culturalHeritageStory": {
      "en": "Mithila ritual art drawn with bamboo twigs and natural mineral colors symbolizing universal fertility.",
      "hi": "Mithila ritual art drawn with bamboo twigs and natural mineral colors symbolizing universal fertility.",
      "kn": "Mithila ritual art drawn with bamboo twigs and natural mineral colors symbolizing universal fertility.",
      "ta": "Mithila ritual art drawn with bamboo twigs and natural mineral colors symbolizing universal fertility."
    },
    "materialsUsed": {
      "en": "Handmade cotton rag paper, natural soot and plant pigments, bamboo nibs",
      "hi": "Handmade cotton rag paper, natural soot and plant pigments, bamboo nibs",
      "kn": "Handmade cotton rag paper, natural soot and plant pigments, bamboo nibs",
      "ta": "Handmade cotton rag paper, natural soot and plant pigments, bamboo nibs"
    },
    "dimensions": {
      "en": "22 x 15 inches",
      "hi": "22 x 15 इंच",
      "kn": "22 x 15 ಇಂಚು",
      "ta": "22 x 15 அங்குலம்"
    },
    "craftCategory": "Folk Art",
    "giCraftRegion": "Madhubani Art (Bihar)"
  },
  "authentic madhubani tree of life painting (handmade paper)": {
    "title": {
      "en": "Authentic Madhubani Tree of Life Painting (Handmade Paper)",
      "hi": "मधुबनी जीवन वृक्ष चित्रकला (हस्तनिर्मित कागज)",
      "kn": "Authentic ಮಧುಬನಿ Tree of Life ವರ್ಣಚಿತ್ರ (Handmade Paper)",
      "ta": "Authentic மதுபனி Tree of Life ஓவியம் (Handmade Paper)"
    },
    "description": {
      "en": "Traditional Mithila ritual folk painting drawn with bamboo twigs and organic plant dyes depicting Kalpavriksha fertility harmony.",
      "hi": "बिहार की मिथिला (मधुबनी) कला का प्रामाणिक जीवन वृक्ष चित्र, बांस की कलम और प्राकृतिक रंगों से हस्तनिर्मित।",
      "kn": "बिहार की मिथिला (मधुबनी) कला का प्रामाणिक जीवन वृक्ष चित्र, बांस की कलम और प्राकृतिक रंगों से हस्तनिर्मित।",
      "ta": "बिहार की मिथिला (मधुबनी) कला का प्रामाणिक जीवन वृक्ष चित्र, बांस की कलम और प्राकृतिक रंगों से हस्तनिर्मित।"
    },
    "culturalHeritageStory": {
      "en": "Mithila ritual art drawn with bamboo twigs and natural mineral colors symbolizing universal fertility.",
      "hi": "Mithila ritual art drawn with bamboo twigs and natural mineral colors symbolizing universal fertility.",
      "kn": "Mithila ritual art drawn with bamboo twigs and natural mineral colors symbolizing universal fertility.",
      "ta": "Mithila ritual art drawn with bamboo twigs and natural mineral colors symbolizing universal fertility."
    },
    "materialsUsed": {
      "en": "Handmade cotton rag paper, natural soot and plant pigments, bamboo nibs",
      "hi": "Handmade cotton rag paper, natural soot and plant pigments, bamboo nibs",
      "kn": "Handmade cotton rag paper, natural soot and plant pigments, bamboo nibs",
      "ta": "Handmade cotton rag paper, natural soot and plant pigments, bamboo nibs"
    },
    "dimensions": {
      "en": "22 x 15 inches",
      "hi": "22 x 15 इंच",
      "kn": "22 x 15 ಇಂಚು",
      "ta": "22 x 15 அங்குலம்"
    },
    "craftCategory": "Folk Art",
    "giCraftRegion": "Madhubani Art (Bihar)"
  },
  "cmtvoiun2002t9e6687j73c1n": {
    "title": {
      "en": "Warli Tribal Village Harvest Celebration Canvas Painting",
      "hi": "वारली जनजातीय फसल उत्सव चित्रकला",
      "kn": "ವಾರ್ಲಿ ಬುಡಕಟ್ಟು Village Harvest Celebration Canvas ವರ್ಣಚಿತ್ರ",
      "ta": "வார்லி பழங்குடி Village Harvest Celebration Canvas ஓவியம்"
    },
    "description": {
      "en": "Primal Warli tribal celebration rhythm featuring circular Tarpa folk dance celebrating mother earth, rendered with rice paste.",
      "hi": "महाराष्ट्र के सह्याद्री आदिवासियों द्वारा गेरू कैनवास पर चावल के लेप से चित्रित प्रामाणिक वारली लोक कला।",
      "kn": "महाराष्ट्र के सह्याद्री आदिवासियों द्वारा गेरू कैनवास पर चावल के लेप से चित्रित प्रामाणिक वारली लोक कला।",
      "ta": "महाराष्ट्र के सह्याद्री आदिवासियों द्वारा गेरू कैनवास पर चावल के लेप से चित्रित प्रामाणिक वारली लोक कला।"
    },
    "culturalHeritageStory": {
      "en": "Maharashtra tribal rhythmic line art using rice paste on cow-dung treated earthen canvas.",
      "hi": "Maharashtra tribal rhythmic line art using rice paste on cow-dung treated earthen canvas.",
      "kn": "Maharashtra tribal rhythmic line art using rice paste on cow-dung treated earthen canvas.",
      "ta": "Maharashtra tribal rhythmic line art using rice paste on cow-dung treated earthen canvas."
    },
    "materialsUsed": {
      "en": "Handmade earthen canvas, ground rice paste, natural binding gum",
      "hi": "Handmade earthen canvas, ground rice paste, natural binding gum",
      "kn": "Handmade earthen canvas, ground rice paste, natural binding gum",
      "ta": "Handmade earthen canvas, ground rice paste, natural binding gum"
    },
    "dimensions": {
      "en": "18 x 14 inches",
      "hi": "18 x 14 इंच",
      "kn": "18 x 14 ಇಂಚು",
      "ta": "18 x 14 அங்குலம்"
    },
    "craftCategory": "Folk Art",
    "giCraftRegion": "Warli Painting (Maharashtra)"
  },
  "warli tribal village harvest celebration canvas painting": {
    "title": {
      "en": "Warli Tribal Village Harvest Celebration Canvas Painting",
      "hi": "वारली जनजातीय फसल उत्सव चित्रकला",
      "kn": "ವಾರ್ಲಿ ಬುಡಕಟ್ಟು Village Harvest Celebration Canvas ವರ್ಣಚಿತ್ರ",
      "ta": "வார்லி பழங்குடி Village Harvest Celebration Canvas ஓவியம்"
    },
    "description": {
      "en": "Primal Warli tribal celebration rhythm featuring circular Tarpa folk dance celebrating mother earth, rendered with rice paste.",
      "hi": "महाराष्ट्र के सह्याद्री आदिवासियों द्वारा गेरू कैनवास पर चावल के लेप से चित्रित प्रामाणिक वारली लोक कला।",
      "kn": "महाराष्ट्र के सह्याद्री आदिवासियों द्वारा गेरू कैनवास पर चावल के लेप से चित्रित प्रामाणिक वारली लोक कला।",
      "ta": "महाराष्ट्र के सह्याद्री आदिवासियों द्वारा गेरू कैनवास पर चावल के लेप से चित्रित प्रामाणिक वारली लोक कला।"
    },
    "culturalHeritageStory": {
      "en": "Maharashtra tribal rhythmic line art using rice paste on cow-dung treated earthen canvas.",
      "hi": "Maharashtra tribal rhythmic line art using rice paste on cow-dung treated earthen canvas.",
      "kn": "Maharashtra tribal rhythmic line art using rice paste on cow-dung treated earthen canvas.",
      "ta": "Maharashtra tribal rhythmic line art using rice paste on cow-dung treated earthen canvas."
    },
    "materialsUsed": {
      "en": "Handmade earthen canvas, ground rice paste, natural binding gum",
      "hi": "Handmade earthen canvas, ground rice paste, natural binding gum",
      "kn": "Handmade earthen canvas, ground rice paste, natural binding gum",
      "ta": "Handmade earthen canvas, ground rice paste, natural binding gum"
    },
    "dimensions": {
      "en": "18 x 14 inches",
      "hi": "18 x 14 इंच",
      "kn": "18 x 14 ಇಂಚು",
      "ta": "18 x 14 அங்குலம்"
    },
    "craftCategory": "Folk Art",
    "giCraftRegion": "Warli Painting (Maharashtra)"
  },
  "cmtvoiun7002v9e66zqbhfcwk": {
    "title": {
      "en": "Odisha Pattachitra Palm Leaf Etching of Lord Jagannath",
      "hi": "ओडिशा ताड़पत्र पट्टचित्र नक्काशी",
      "kn": "Odisha ಪಟ್ಟಚಿತ್ರ Palm Leaf Etching of Lord Jagannath",
      "ta": "Odisha பட்டச்சித்ரா Palm Leaf Etching of Lord Jagannath"
    },
    "description": {
      "en": "Intricate Tala Pattachitra incised with a sharp iron needle on seasoned palm leaves and rubbed with soot by Raghurajpur chitrakars.",
      "hi": "ओडिशा के रघुराजपुर के चित्रकारों द्वारा ताड़पत्र पर लोहे की सुई से उकेरा गया भगवान जगन्नाथ का पट्टचित्र।",
      "kn": "ओडिशा के रघुराजपुर के चित्रकारों द्वारा ताड़पत्र पर लोहे की सुई से उकेरा गया भगवान जगन्नाथ का पट्टचित्र।",
      "ta": "ओडिशा के रघुराजपुर के चित्रकारों द्वारा ताड़पत्र पर लोहे की सुई से उकेरा गया भगवान जगन्नाथ का पट्टचित्र।"
    },
    "culturalHeritageStory": {
      "en": "Tala Pattachitra etched with an iron stylus on dried palm leaves and rubbed with natural soot.",
      "hi": "Tala Pattachitra etched with an iron stylus on dried palm leaves and rubbed with natural soot.",
      "kn": "Tala Pattachitra etched with an iron stylus on dried palm leaves and rubbed with natural soot.",
      "ta": "Tala Pattachitra etched with an iron stylus on dried palm leaves and rubbed with natural soot."
    },
    "materialsUsed": {
      "en": "Dried and treated palm leaves (Tala Patra), iron stylus, natural lampblack soot",
      "hi": "Dried and treated palm leaves (Tala Patra), iron stylus, natural lampblack soot",
      "kn": "Dried and treated palm leaves (Tala Patra), iron stylus, natural lampblack soot",
      "ta": "Dried and treated palm leaves (Tala Patra), iron stylus, natural lampblack soot"
    },
    "dimensions": {
      "en": "16 x 8 inches",
      "hi": "16 x 8 इंच",
      "kn": "16 x 8 ಇಂಚು",
      "ta": "16 x 8 அங்குலம்"
    },
    "craftCategory": "Folk Art",
    "giCraftRegion": "Raghurajpur Pattachitra (Odisha)"
  },
  "odisha pattachitra palm leaf etching of lord jagannath": {
    "title": {
      "en": "Odisha Pattachitra Palm Leaf Etching of Lord Jagannath",
      "hi": "ओडिशा ताड़पत्र पट्टचित्र नक्काशी",
      "kn": "Odisha ಪಟ್ಟಚಿತ್ರ Palm Leaf Etching of Lord Jagannath",
      "ta": "Odisha பட்டச்சித்ரா Palm Leaf Etching of Lord Jagannath"
    },
    "description": {
      "en": "Intricate Tala Pattachitra incised with a sharp iron needle on seasoned palm leaves and rubbed with soot by Raghurajpur chitrakars.",
      "hi": "ओडिशा के रघुराजपुर के चित्रकारों द्वारा ताड़पत्र पर लोहे की सुई से उकेरा गया भगवान जगन्नाथ का पट्टचित्र।",
      "kn": "ओडिशा के रघुराजपुर के चित्रकारों द्वारा ताड़पत्र पर लोहे की सुई से उकेरा गया भगवान जगन्नाथ का पट्टचित्र।",
      "ta": "ओडिशा के रघुराजपुर के चित्रकारों द्वारा ताड़पत्र पर लोहे की सुई से उकेरा गया भगवान जगन्नाथ का पट्टचित्र।"
    },
    "culturalHeritageStory": {
      "en": "Tala Pattachitra etched with an iron stylus on dried palm leaves and rubbed with natural soot.",
      "hi": "Tala Pattachitra etched with an iron stylus on dried palm leaves and rubbed with natural soot.",
      "kn": "Tala Pattachitra etched with an iron stylus on dried palm leaves and rubbed with natural soot.",
      "ta": "Tala Pattachitra etched with an iron stylus on dried palm leaves and rubbed with natural soot."
    },
    "materialsUsed": {
      "en": "Dried and treated palm leaves (Tala Patra), iron stylus, natural lampblack soot",
      "hi": "Dried and treated palm leaves (Tala Patra), iron stylus, natural lampblack soot",
      "kn": "Dried and treated palm leaves (Tala Patra), iron stylus, natural lampblack soot",
      "ta": "Dried and treated palm leaves (Tala Patra), iron stylus, natural lampblack soot"
    },
    "dimensions": {
      "en": "16 x 8 inches",
      "hi": "16 x 8 इंच",
      "kn": "16 x 8 ಇಂಚು",
      "ta": "16 x 8 அங்குலம்"
    },
    "craftCategory": "Folk Art",
    "giCraftRegion": "Raghurajpur Pattachitra (Odisha)"
  },
  "cmtvoiunb002x9e66x38nnlmp": {
    "title": {
      "en": "Gond Tribal Art Painting of The Sacred Forest Deer",
      "hi": "गोंड जनजातीय वन मृग चित्रकला",
      "kn": "ಗೋಂಡ್ ಬುಡಕಟ್ಟು Art ವರ್ಣಚಿತ್ರ of The Sacred Forest Deer",
      "ta": "கோண்ட் பழங்குடி Art ஓவியம் of The Sacred Forest Deer"
    },
    "description": {
      "en": "Madhya Pradesh Gond folk painting depicting sacred forest wildlife filled with unique signature repetitive micro-dot patterns.",
      "hi": "मध्य प्रदेश की गोंड जनजातीय चित्रकला, सूक्ष्म बिंदुओं और रेखाओं द्वारा चित्रित पवित्र वन मृग।",
      "kn": "मध्य प्रदेश की गोंड जनजातीय चित्रकला, सूक्ष्म बिंदुओं और रेखाओं द्वारा चित्रित पवित्र वन मृग।",
      "ta": "मध्य प्रदेश की गोंड जनजातीय चित्रकला, सूक्ष्म बिंदुओं और रेखाओं द्वारा चित्रित पवित्र वन मृग।"
    },
    "culturalHeritageStory": {
      "en": "Madhya Pradesh Gond folk painting featuring intricate micro-pattern dot and dash signature fills.",
      "hi": "Madhya Pradesh Gond folk painting featuring intricate micro-pattern dot and dash signature fills.",
      "kn": "Madhya Pradesh Gond folk painting featuring intricate micro-pattern dot and dash signature fills.",
      "ta": "Madhya Pradesh Gond folk painting featuring intricate micro-pattern dot and dash signature fills."
    },
    "materialsUsed": {
      "en": "Natural cotton canvas, mineral ochres, colored inks",
      "hi": "Natural cotton canvas, mineral ochres, colored inks",
      "kn": "Natural cotton canvas, mineral ochres, colored inks",
      "ta": "Natural cotton canvas, mineral ochres, colored inks"
    },
    "dimensions": {
      "en": "20 x 16 inches",
      "hi": "20 x 16 इंच",
      "kn": "20 x 16 ಇಂಚು",
      "ta": "20 x 16 அங்குலம்"
    },
    "craftCategory": "Folk Art",
    "giCraftRegion": "Gond Tribal Art (Madhya Pradesh)"
  },
  "gond tribal art painting of the sacred forest deer": {
    "title": {
      "en": "Gond Tribal Art Painting of The Sacred Forest Deer",
      "hi": "गोंड जनजातीय वन मृग चित्रकला",
      "kn": "ಗೋಂಡ್ ಬುಡಕಟ್ಟು Art ವರ್ಣಚಿತ್ರ of The Sacred Forest Deer",
      "ta": "கோண்ட் பழங்குடி Art ஓவியம் of The Sacred Forest Deer"
    },
    "description": {
      "en": "Madhya Pradesh Gond folk painting depicting sacred forest wildlife filled with unique signature repetitive micro-dot patterns.",
      "hi": "मध्य प्रदेश की गोंड जनजातीय चित्रकला, सूक्ष्म बिंदुओं और रेखाओं द्वारा चित्रित पवित्र वन मृग।",
      "kn": "मध्य प्रदेश की गोंड जनजातीय चित्रकला, सूक्ष्म बिंदुओं और रेखाओं द्वारा चित्रित पवित्र वन मृग।",
      "ta": "मध्य प्रदेश की गोंड जनजातीय चित्रकला, सूक्ष्म बिंदुओं और रेखाओं द्वारा चित्रित पवित्र वन मृग।"
    },
    "culturalHeritageStory": {
      "en": "Madhya Pradesh Gond folk painting featuring intricate micro-pattern dot and dash signature fills.",
      "hi": "Madhya Pradesh Gond folk painting featuring intricate micro-pattern dot and dash signature fills.",
      "kn": "Madhya Pradesh Gond folk painting featuring intricate micro-pattern dot and dash signature fills.",
      "ta": "Madhya Pradesh Gond folk painting featuring intricate micro-pattern dot and dash signature fills."
    },
    "materialsUsed": {
      "en": "Natural cotton canvas, mineral ochres, colored inks",
      "hi": "Natural cotton canvas, mineral ochres, colored inks",
      "kn": "Natural cotton canvas, mineral ochres, colored inks",
      "ta": "Natural cotton canvas, mineral ochres, colored inks"
    },
    "dimensions": {
      "en": "20 x 16 inches",
      "hi": "20 x 16 इंच",
      "kn": "20 x 16 ಇಂಚು",
      "ta": "20 x 16 அங்குலம்"
    },
    "craftCategory": "Folk Art",
    "giCraftRegion": "Gond Tribal Art (Madhya Pradesh)"
  },
  "cmtvoiung002z9e66k3akcm9t": {
    "title": {
      "en": "Madhubani Sun and Fish Prosperity Diptych (Framed)",
      "hi": "मधुबनी सूर्य और मत्स्य समृद्धि चित्र",
      "kn": "ಮಧುಬನಿ Sun and Fish Prosperity Diptych (Framed)",
      "ta": "மதுபனி Sun and Fish Prosperity Diptych (Framed)"
    },
    "description": {
      "en": "Twin sacred motifs of the life-giving Sun and Matsya avatar signifying prosperity and fecundity in traditional Mithila weddings.",
      "hi": "मधुबनी सूर्य और मत्स्य समृद्धि चित्र, हस्तनिर्मित कागज पर प्राकृतिक रंगों से निर्मित।",
      "kn": "मधुबनी सूर्य और मत्स्य समृद्धि चित्र, हस्तनिर्मित कागज पर प्राकृतिक रंगों से निर्मित।",
      "ta": "मधुबनी सूर्य और मत्स्य समृद्धि चित्र, हस्तनिर्मित कागज पर प्राकृतिक रंगों से निर्मित।"
    },
    "culturalHeritageStory": {
      "en": "Twin sacred motifs of the life-giving Sun and water-borne Matsya avatar for domestic good fortune.",
      "hi": "Twin sacred motifs of the life-giving Sun and water-borne Matsya avatar for domestic good fortune.",
      "kn": "Twin sacred motifs of the life-giving Sun and water-borne Matsya avatar for domestic good fortune.",
      "ta": "Twin sacred motifs of the life-giving Sun and water-borne Matsya avatar for domestic good fortune."
    },
    "materialsUsed": {
      "en": "Handmade deckle cotton paper, natural mineral and flower pigments",
      "hi": "Handmade deckle cotton paper, natural mineral and flower pigments",
      "kn": "Handmade deckle cotton paper, natural mineral and flower pigments",
      "ta": "Handmade deckle cotton paper, natural mineral and flower pigments"
    },
    "dimensions": {
      "en": "14 x 10 inches each",
      "hi": "14 x 10 इंच प्रत्येक",
      "kn": "14 x 10 ಇಂಚು ಪ್ರತಿಯೊಂದು",
      "ta": "14 x 10 அங்குலம் ஒவ்வொன்றும்"
    },
    "craftCategory": "Folk Art",
    "giCraftRegion": "Madhubani Art (Bihar)"
  },
  "madhubani sun and fish prosperity diptych (framed)": {
    "title": {
      "en": "Madhubani Sun and Fish Prosperity Diptych (Framed)",
      "hi": "मधुबनी सूर्य और मत्स्य समृद्धि चित्र",
      "kn": "ಮಧುಬನಿ Sun and Fish Prosperity Diptych (Framed)",
      "ta": "மதுபனி Sun and Fish Prosperity Diptych (Framed)"
    },
    "description": {
      "en": "Twin sacred motifs of the life-giving Sun and Matsya avatar signifying prosperity and fecundity in traditional Mithila weddings.",
      "hi": "मधुबनी सूर्य और मत्स्य समृद्धि चित्र, हस्तनिर्मित कागज पर प्राकृतिक रंगों से निर्मित।",
      "kn": "मधुबनी सूर्य और मत्स्य समृद्धि चित्र, हस्तनिर्मित कागज पर प्राकृतिक रंगों से निर्मित।",
      "ta": "मधुबनी सूर्य और मत्स्य समृद्धि चित्र, हस्तनिर्मित कागज पर प्राकृतिक रंगों से निर्मित।"
    },
    "culturalHeritageStory": {
      "en": "Twin sacred motifs of the life-giving Sun and water-borne Matsya avatar for domestic good fortune.",
      "hi": "Twin sacred motifs of the life-giving Sun and water-borne Matsya avatar for domestic good fortune.",
      "kn": "Twin sacred motifs of the life-giving Sun and water-borne Matsya avatar for domestic good fortune.",
      "ta": "Twin sacred motifs of the life-giving Sun and water-borne Matsya avatar for domestic good fortune."
    },
    "materialsUsed": {
      "en": "Handmade deckle cotton paper, natural mineral and flower pigments",
      "hi": "Handmade deckle cotton paper, natural mineral and flower pigments",
      "kn": "Handmade deckle cotton paper, natural mineral and flower pigments",
      "ta": "Handmade deckle cotton paper, natural mineral and flower pigments"
    },
    "dimensions": {
      "en": "14 x 10 inches each",
      "hi": "14 x 10 इंच प्रत्येक",
      "kn": "14 x 10 ಇಂಚು ಪ್ರತಿಯೊಂದು",
      "ta": "14 x 10 அங்குலம் ஒவ்வொன்றும்"
    },
    "craftCategory": "Folk Art",
    "giCraftRegion": "Madhubani Art (Bihar)"
  },
  "cmtvoiunk00319e66jn59v225": {
    "title": {
      "en": "Cheriyal Folk Scroll Painting of Village Life (Telangana)",
      "hi": "चेरियाल लोक स्क्रॉल चित्रकला",
      "kn": "ಚೇರಿಯಾಲ್ Folk ಸುರುಳಿ ಚಿತ್ರ ವರ್ಣಚಿತ್ರ of Village Life (Telangana)",
      "ta": "செரியால் Folk சுருள் ஓவியம் ஓவியம் of Village Life (Telangana)"
    },
    "description": {
      "en": "Telangana Nakashi narrative scroll tradition illustrating rural folk balladeer legends in rich vermilion and indigo.",
      "hi": "तेलंगाना की चेरियाल लोक स्क्रॉल चित्रकला, खादी कपड़े पर इमली के बीज के लेप और प्राकृतिक रंगों से निर्मित।",
      "kn": "तेलंगाना की चेरियाल लोक स्क्रॉल चित्रकला, खादी कपड़े पर इमली के बीज के लेप और प्राकृतिक रंगों से निर्मित।",
      "ta": "तेलंगाना की चेरियाल लोक स्क्रॉल चित्रकला, खादी कपड़े पर इमली के बीज के लेप और प्राकृतिक रंगों से निर्मित।"
    },
    "culturalHeritageStory": {
      "en": "Nakashi storytelling art rendered on khadi canvas treated with tamarind seed paste.",
      "hi": "Nakashi storytelling art rendered on khadi canvas treated with tamarind seed paste.",
      "kn": "Nakashi storytelling art rendered on khadi canvas treated with tamarind seed paste.",
      "ta": "Nakashi storytelling art rendered on khadi canvas treated with tamarind seed paste."
    },
    "materialsUsed": {
      "en": "Khadi cloth primed with tamarind paste and white mud, natural stone colors",
      "hi": "Khadi cloth primed with tamarind paste and white mud, natural stone colors",
      "kn": "Khadi cloth primed with tamarind paste and white mud, natural stone colors",
      "ta": "Khadi cloth primed with tamarind paste and white mud, natural stone colors"
    },
    "dimensions": {
      "en": "24 x 12 inches",
      "hi": "24 x 12 इंच",
      "kn": "24 x 12 ಇಂಚು",
      "ta": "24 x 12 அங்குலம்"
    },
    "craftCategory": "Folk Art",
    "giCraftRegion": "Cheriyal Scrolls (Telangana)"
  },
  "cheriyal folk scroll painting of village life (telangana)": {
    "title": {
      "en": "Cheriyal Folk Scroll Painting of Village Life (Telangana)",
      "hi": "चेरियाल लोक स्क्रॉल चित्रकला",
      "kn": "ಚೇರಿಯಾಲ್ Folk ಸುರುಳಿ ಚಿತ್ರ ವರ್ಣಚಿತ್ರ of Village Life (Telangana)",
      "ta": "செரியால் Folk சுருள் ஓவியம் ஓவியம் of Village Life (Telangana)"
    },
    "description": {
      "en": "Telangana Nakashi narrative scroll tradition illustrating rural folk balladeer legends in rich vermilion and indigo.",
      "hi": "तेलंगाना की चेरियाल लोक स्क्रॉल चित्रकला, खादी कपड़े पर इमली के बीज के लेप और प्राकृतिक रंगों से निर्मित।",
      "kn": "तेलंगाना की चेरियाल लोक स्क्रॉल चित्रकला, खादी कपड़े पर इमली के बीज के लेप और प्राकृतिक रंगों से निर्मित।",
      "ta": "तेलंगाना की चेरियाल लोक स्क्रॉल चित्रकला, खादी कपड़े पर इमली के बीज के लेप और प्राकृतिक रंगों से निर्मित।"
    },
    "culturalHeritageStory": {
      "en": "Nakashi storytelling art rendered on khadi canvas treated with tamarind seed paste.",
      "hi": "Nakashi storytelling art rendered on khadi canvas treated with tamarind seed paste.",
      "kn": "Nakashi storytelling art rendered on khadi canvas treated with tamarind seed paste.",
      "ta": "Nakashi storytelling art rendered on khadi canvas treated with tamarind seed paste."
    },
    "materialsUsed": {
      "en": "Khadi cloth primed with tamarind paste and white mud, natural stone colors",
      "hi": "Khadi cloth primed with tamarind paste and white mud, natural stone colors",
      "kn": "Khadi cloth primed with tamarind paste and white mud, natural stone colors",
      "ta": "Khadi cloth primed with tamarind paste and white mud, natural stone colors"
    },
    "dimensions": {
      "en": "24 x 12 inches",
      "hi": "24 x 12 इंच",
      "kn": "24 x 12 ಇಂಚು",
      "ta": "24 x 12 அங்குலம்"
    },
    "craftCategory": "Folk Art",
    "giCraftRegion": "Cheriyal Scrolls (Telangana)"
  },
  "cmtvoiuno00339e66edjfg8jq": {
    "title": {
      "en": "Thanjavur 22K Gold Foil Painting of Goddess Lakshmi",
      "hi": "तंजौर 22 कैरट स्वर्ण पन्नी लक्ष्मी चित्रकला",
      "kn": "Thanjavur 22K Gold Foil ವರ್ಣಚಿತ್ರ of Goddess Lakshmi",
      "ta": "Thanjavur 22K Gold Foil ஓவியம் of Goddess Lakshmi"
    },
    "description": {
      "en": "Opulent Classical Thanjavur temple painting with raised gesso relief work coated in genuine 22K gold foil leaves.",
      "hi": "तमिलनाडु की तंजौर शैली में निर्मित 22 कैरट शुद्ध स्वर्ण पन्नी और रत्नों से सुसज्जित माता लक्ष्मी की भव्य चित्रकला।",
      "kn": "तमिलनाडु की तंजौर शैली में निर्मित 22 कैरट शुद्ध स्वर्ण पन्नी और रत्नों से सुसज्जित माता लक्ष्मी की भव्य चित्रकला।",
      "ta": "तमिलनाडु की तंजौर शैली में निर्मित 22 कैरट शुद्ध स्वर्ण पन्नी और रत्नों से सुसज्जित माता लक्ष्मी की भव्य चित्रकला।"
    },
    "culturalHeritageStory": {
      "en": "Tamil Nadu classical temple painting using Jaipur gem stones and pure 22K gold leaf embossing.",
      "hi": "Tamil Nadu classical temple painting using Jaipur gem stones and pure 22K gold leaf embossing.",
      "kn": "Tamil Nadu classical temple painting using Jaipur gem stones and pure 22K gold leaf embossing.",
      "ta": "Tamil Nadu classical temple painting using Jaipur gem stones and pure 22K gold leaf embossing."
    },
    "materialsUsed": {
      "en": "Teakwood board, Arabic gum chalk gesso, 22-karat pure gold leaf foil, semi-precious Jaipur gems",
      "hi": "Teakwood board, Arabic gum chalk gesso, 22-karat pure gold leaf foil, semi-precious Jaipur gems",
      "kn": "Teakwood board, Arabic gum chalk gesso, 22-karat pure gold leaf foil, semi-precious Jaipur gems",
      "ta": "Teakwood board, Arabic gum chalk gesso, 22-karat pure gold leaf foil, semi-precious Jaipur gems"
    },
    "dimensions": {
      "en": "16 x 14 inches",
      "hi": "16 x 14 इंच",
      "kn": "16 x 14 ಇಂಚು",
      "ta": "16 x 14 அங்குலம்"
    },
    "craftCategory": "Folk Art",
    "giCraftRegion": "Thanjavur Painting (Tamil Nadu)"
  },
  "thanjavur 22k gold foil painting of goddess lakshmi": {
    "title": {
      "en": "Thanjavur 22K Gold Foil Painting of Goddess Lakshmi",
      "hi": "तंजौर 22 कैरट स्वर्ण पन्नी लक्ष्मी चित्रकला",
      "kn": "Thanjavur 22K Gold Foil ವರ್ಣಚಿತ್ರ of Goddess Lakshmi",
      "ta": "Thanjavur 22K Gold Foil ஓவியம் of Goddess Lakshmi"
    },
    "description": {
      "en": "Opulent Classical Thanjavur temple painting with raised gesso relief work coated in genuine 22K gold foil leaves.",
      "hi": "तमिलनाडु की तंजौर शैली में निर्मित 22 कैरट शुद्ध स्वर्ण पन्नी और रत्नों से सुसज्जित माता लक्ष्मी की भव्य चित्रकला।",
      "kn": "तमिलनाडु की तंजौर शैली में निर्मित 22 कैरट शुद्ध स्वर्ण पन्नी और रत्नों से सुसज्जित माता लक्ष्मी की भव्य चित्रकला।",
      "ta": "तमिलनाडु की तंजौर शैली में निर्मित 22 कैरट शुद्ध स्वर्ण पन्नी और रत्नों से सुसज्जित माता लक्ष्मी की भव्य चित्रकला।"
    },
    "culturalHeritageStory": {
      "en": "Tamil Nadu classical temple painting using Jaipur gem stones and pure 22K gold leaf embossing.",
      "hi": "Tamil Nadu classical temple painting using Jaipur gem stones and pure 22K gold leaf embossing.",
      "kn": "Tamil Nadu classical temple painting using Jaipur gem stones and pure 22K gold leaf embossing.",
      "ta": "Tamil Nadu classical temple painting using Jaipur gem stones and pure 22K gold leaf embossing."
    },
    "materialsUsed": {
      "en": "Teakwood board, Arabic gum chalk gesso, 22-karat pure gold leaf foil, semi-precious Jaipur gems",
      "hi": "Teakwood board, Arabic gum chalk gesso, 22-karat pure gold leaf foil, semi-precious Jaipur gems",
      "kn": "Teakwood board, Arabic gum chalk gesso, 22-karat pure gold leaf foil, semi-precious Jaipur gems",
      "ta": "Teakwood board, Arabic gum chalk gesso, 22-karat pure gold leaf foil, semi-precious Jaipur gems"
    },
    "dimensions": {
      "en": "16 x 14 inches",
      "hi": "16 x 14 इंच",
      "kn": "16 x 14 ಇಂಚು",
      "ta": "16 x 14 அங்குலம்"
    },
    "craftCategory": "Folk Art",
    "giCraftRegion": "Thanjavur Painting (Tamil Nadu)"
  },
  "cmtvoiunt00359e66ixmzwlhb": {
    "title": {
      "en": "Pichwai Hand-Painted Cow and Lotus Temple Textile",
      "hi": "पिछवाई हस्तचित्रित गाय और कमल वस्त्र",
      "kn": "ಪಿಚ್ವಾಯಿ Hand-Painted Cow and Lotus Temple ಜವಳಿ",
      "ta": "பிச்வாய் Hand-Painted Cow and Lotus Temple ஜவுளி"
    },
    "description": {
      "en": "Devotional Nathdwara cloth backdrop depicting Lord Shrinathji holy cows adorned with floral garlands among blooming lotus ponds.",
      "hi": "राजस्थान के नाथद्वारा की पिछवाई कला, सूती वस्त्र पर प्राकृतिक पाषाण रंगों से चित्रित पवित्र गाय और कमल।",
      "kn": "राजस्थान के नाथद्वारा की पिछवाई कला, सूती वस्त्र पर प्राकृतिक पाषाण रंगों से चित्रित पवित्र गाय और कमल।",
      "ta": "राजस्थान के नाथद्वारा की पिछवाई कला, सूती वस्त्र पर प्राकृतिक पाषाण रंगों से चित्रित पवित्र गाय और कमल।"
    },
    "culturalHeritageStory": {
      "en": "Nathdwara devotional art painted on starch-primed cotton cloth with stone colors.",
      "hi": "Nathdwara devotional art painted on starch-primed cotton cloth with stone colors.",
      "kn": "Nathdwara devotional art painted on starch-primed cotton cloth with stone colors.",
      "ta": "Nathdwara devotional art painted on starch-primed cotton cloth with stone colors."
    },
    "materialsUsed": {
      "en": "Starched cotton fabric, natural mineral and stone pigments, pure gold dusting",
      "hi": "Starched cotton fabric, natural mineral and stone pigments, pure gold dusting",
      "kn": "Starched cotton fabric, natural mineral and stone pigments, pure gold dusting",
      "ta": "Starched cotton fabric, natural mineral and stone pigments, pure gold dusting"
    },
    "dimensions": {
      "en": "30 x 24 inches",
      "hi": "30 x 24 इंच",
      "kn": "30 x 24 ಇಂಚು",
      "ta": "30 x 24 அங்குலம்"
    },
    "craftCategory": "Folk Art",
    "giCraftRegion": "Nathdwara Pichwai (Rajasthan)"
  },
  "pichwai hand-painted cow and lotus temple textile": {
    "title": {
      "en": "Pichwai Hand-Painted Cow and Lotus Temple Textile",
      "hi": "पिछवाई हस्तचित्रित गाय और कमल वस्त्र",
      "kn": "ಪಿಚ್ವಾಯಿ Hand-Painted Cow and Lotus Temple ಜವಳಿ",
      "ta": "பிச்வாய் Hand-Painted Cow and Lotus Temple ஜவுளி"
    },
    "description": {
      "en": "Devotional Nathdwara cloth backdrop depicting Lord Shrinathji holy cows adorned with floral garlands among blooming lotus ponds.",
      "hi": "राजस्थान के नाथद्वारा की पिछवाई कला, सूती वस्त्र पर प्राकृतिक पाषाण रंगों से चित्रित पवित्र गाय और कमल।",
      "kn": "राजस्थान के नाथद्वारा की पिछवाई कला, सूती वस्त्र पर प्राकृतिक पाषाण रंगों से चित्रित पवित्र गाय और कमल।",
      "ta": "राजस्थान के नाथद्वारा की पिछवाई कला, सूती वस्त्र पर प्राकृतिक पाषाण रंगों से चित्रित पवित्र गाय और कमल।"
    },
    "culturalHeritageStory": {
      "en": "Nathdwara devotional art painted on starch-primed cotton cloth with stone colors.",
      "hi": "Nathdwara devotional art painted on starch-primed cotton cloth with stone colors.",
      "kn": "Nathdwara devotional art painted on starch-primed cotton cloth with stone colors.",
      "ta": "Nathdwara devotional art painted on starch-primed cotton cloth with stone colors."
    },
    "materialsUsed": {
      "en": "Starched cotton fabric, natural mineral and stone pigments, pure gold dusting",
      "hi": "Starched cotton fabric, natural mineral and stone pigments, pure gold dusting",
      "kn": "Starched cotton fabric, natural mineral and stone pigments, pure gold dusting",
      "ta": "Starched cotton fabric, natural mineral and stone pigments, pure gold dusting"
    },
    "dimensions": {
      "en": "30 x 24 inches",
      "hi": "30 x 24 इंच",
      "kn": "30 x 24 ಇಂಚು",
      "ta": "30 x 24 அங்குலம்"
    },
    "craftCategory": "Folk Art",
    "giCraftRegion": "Nathdwara Pichwai (Rajasthan)"
  },
  "cmtvoiunx00379e66hinijco0": {
    "title": {
      "en": "Warli Hand-Painted Terracotta Vase Accent",
      "hi": "वारली चित्रित टेराकोटा फूलदान",
      "kn": "ವಾರ್ಲಿ Hand-Painted ಟೆರ್ರಾಕೋಟಾ Vase Accent",
      "ta": "வார்லி Hand-Painted சுடுமண் Vase Accent"
    },
    "description": {
      "en": "Earthen pitcher decorated with white rice-paste geometric stick figures capturing joyful village communal music circles.",
      "hi": "वारली चित्रित टेराकोटा फूलदान, मिट्टी के घड़े पर चावल के लेप से बनी पारंपरिक जनजातीय आकृतियां।",
      "kn": "वारली चित्रित टेराकोटा फूलदान, मिट्टी के घड़े पर चावल के लेप से बनी पारंपरिक जनजातीय आकृतियां।",
      "ta": "वारली चित्रित टेराकोटा फूलदान, मिट्टी के घड़े पर चावल के लेप से बनी पारंपरिक जनजातीय आकृतियां।"
    },
    "culturalHeritageStory": {
      "en": "Earthen pot transformed with white rice paste depictions of tribal circular Tarpa dances.",
      "hi": "Earthen pot transformed with white rice paste depictions of tribal circular Tarpa dances.",
      "kn": "Earthen pot transformed with white rice paste depictions of tribal circular Tarpa dances.",
      "ta": "Earthen pot transformed with white rice paste depictions of tribal circular Tarpa dances."
    },
    "materialsUsed": {
      "en": "Fired terracotta clay pot, natural white rice flour pigment, organic binding gum",
      "hi": "Fired terracotta clay pot, natural white rice flour pigment, organic binding gum",
      "kn": "Fired terracotta clay pot, natural white rice flour pigment, organic binding gum",
      "ta": "Fired terracotta clay pot, natural white rice flour pigment, organic binding gum"
    },
    "dimensions": {
      "en": "9 x 5 inches",
      "hi": "9 x 5 इंच",
      "kn": "9 x 5 ಇಂಚು",
      "ta": "9 x 5 அங்குலம்"
    },
    "craftCategory": "Folk Art",
    "giCraftRegion": "Warli Painting (Maharashtra)"
  },
  "warli hand-painted terracotta vase accent": {
    "title": {
      "en": "Warli Hand-Painted Terracotta Vase Accent",
      "hi": "वारली चित्रित टेराकोटा फूलदान",
      "kn": "ವಾರ್ಲಿ Hand-Painted ಟೆರ್ರಾಕೋಟಾ Vase Accent",
      "ta": "வார்லி Hand-Painted சுடுமண் Vase Accent"
    },
    "description": {
      "en": "Earthen pitcher decorated with white rice-paste geometric stick figures capturing joyful village communal music circles.",
      "hi": "वारली चित्रित टेराकोटा फूलदान, मिट्टी के घड़े पर चावल के लेप से बनी पारंपरिक जनजातीय आकृतियां।",
      "kn": "वारली चित्रित टेराकोटा फूलदान, मिट्टी के घड़े पर चावल के लेप से बनी पारंपरिक जनजातीय आकृतियां।",
      "ta": "वारली चित्रित टेराकोटा फूलदान, मिट्टी के घड़े पर चावल के लेप से बनी पारंपरिक जनजातीय आकृतियां।"
    },
    "culturalHeritageStory": {
      "en": "Earthen pot transformed with white rice paste depictions of tribal circular Tarpa dances.",
      "hi": "Earthen pot transformed with white rice paste depictions of tribal circular Tarpa dances.",
      "kn": "Earthen pot transformed with white rice paste depictions of tribal circular Tarpa dances.",
      "ta": "Earthen pot transformed with white rice paste depictions of tribal circular Tarpa dances."
    },
    "materialsUsed": {
      "en": "Fired terracotta clay pot, natural white rice flour pigment, organic binding gum",
      "hi": "Fired terracotta clay pot, natural white rice flour pigment, organic binding gum",
      "kn": "Fired terracotta clay pot, natural white rice flour pigment, organic binding gum",
      "ta": "Fired terracotta clay pot, natural white rice flour pigment, organic binding gum"
    },
    "dimensions": {
      "en": "9 x 5 inches",
      "hi": "9 x 5 इंच",
      "kn": "9 x 5 ಇಂಚು",
      "ta": "9 x 5 அங்குலம்"
    },
    "craftCategory": "Folk Art",
    "giCraftRegion": "Warli Painting (Maharashtra)"
  },
  "cmtvoiuo100399e66te4d18nf": {
    "title": {
      "en": "Madhubani Hand-Painted Bookmark Set (Set of 6)",
      "hi": "मधुबनी हस्तनिर्मित बुकमार्क (6 का सेट)",
      "kn": "ಮಧುಬನಿ Hand-Painted Bookmark Set (ಸೆಟ್ 6)",
      "ta": "மதுபனி Hand-Painted Bookmark Set (தொகுப்பு 6)"
    },
    "description": {
      "en": "Miniature original hand-drawn bookmarks highlighting Mithila peacocks, fish, and lotus leaves for literary connoisseurs.",
      "hi": "मधुबनी हस्तनिर्मित बुकमार्क सेट (6 का सेट), कपास के हस्तनिर्मित कागज पर बारीक कलमकारी।",
      "kn": "मधुबनी हस्तनिर्मित बुकमार्क सेट (6 का सेट), कपास के हस्तनिर्मित कागज पर बारीक कलमकारी।",
      "ta": "मधुबनी हस्तनिर्मित बुकमार्क सेट (6 का सेट), कपास के हस्तनिर्मित कागज पर बारीक कलमकारी।"
    },
    "culturalHeritageStory": {
      "en": "Miniature original hand-painted cotton paper keepsakes for literary connoisseurs.",
      "hi": "Miniature original hand-painted cotton paper keepsakes for literary connoisseurs.",
      "kn": "Miniature original hand-painted cotton paper keepsakes for literary connoisseurs.",
      "ta": "Miniature original hand-painted cotton paper keepsakes for literary connoisseurs."
    },
    "materialsUsed": {
      "en": "Handmade cotton rag paper, natural vegetable inks",
      "hi": "Handmade cotton rag paper, natural vegetable inks",
      "kn": "Handmade cotton rag paper, natural vegetable inks",
      "ta": "Handmade cotton rag paper, natural vegetable inks"
    },
    "dimensions": {
      "en": "7 x 2 inches each",
      "hi": "7 x 2 इंच प्रत्येक",
      "kn": "7 x 2 ಇಂಚು ಪ್ರತಿಯೊಂದು",
      "ta": "7 x 2 அங்குலம் ஒவ்வொன்றும்"
    },
    "craftCategory": "Folk Art",
    "giCraftRegion": "Madhubani Art (Bihar)"
  },
  "madhubani hand-painted bookmark set (set of 6)": {
    "title": {
      "en": "Madhubani Hand-Painted Bookmark Set (Set of 6)",
      "hi": "मधुबनी हस्तनिर्मित बुकमार्क (6 का सेट)",
      "kn": "ಮಧುಬನಿ Hand-Painted Bookmark Set (ಸೆಟ್ 6)",
      "ta": "மதுபனி Hand-Painted Bookmark Set (தொகுப்பு 6)"
    },
    "description": {
      "en": "Miniature original hand-drawn bookmarks highlighting Mithila peacocks, fish, and lotus leaves for literary connoisseurs.",
      "hi": "मधुबनी हस्तनिर्मित बुकमार्क सेट (6 का सेट), कपास के हस्तनिर्मित कागज पर बारीक कलमकारी।",
      "kn": "मधुबनी हस्तनिर्मित बुकमार्क सेट (6 का सेट), कपास के हस्तनिर्मित कागज पर बारीक कलमकारी।",
      "ta": "मधुबनी हस्तनिर्मित बुकमार्क सेट (6 का सेट), कपास के हस्तनिर्मित कागज पर बारीक कलमकारी।"
    },
    "culturalHeritageStory": {
      "en": "Miniature original hand-painted cotton paper keepsakes for literary connoisseurs.",
      "hi": "Miniature original hand-painted cotton paper keepsakes for literary connoisseurs.",
      "kn": "Miniature original hand-painted cotton paper keepsakes for literary connoisseurs.",
      "ta": "Miniature original hand-painted cotton paper keepsakes for literary connoisseurs."
    },
    "materialsUsed": {
      "en": "Handmade cotton rag paper, natural vegetable inks",
      "hi": "Handmade cotton rag paper, natural vegetable inks",
      "kn": "Handmade cotton rag paper, natural vegetable inks",
      "ta": "Handmade cotton rag paper, natural vegetable inks"
    },
    "dimensions": {
      "en": "7 x 2 inches each",
      "hi": "7 x 2 इंच प्रत्येक",
      "kn": "7 x 2 ಇಂಚು ಪ್ರತಿಯೊಂದು",
      "ta": "7 x 2 அங்குலம் ஒவ்வொன்றும்"
    },
    "craftCategory": "Folk Art",
    "giCraftRegion": "Madhubani Art (Bihar)"
  },
  "cmtvoiuo5003b9e667c5044me": {
    "title": {
      "en": "Handwoven Banarasi Katan Silk Dupatta with Kadwa Zari Weave",
      "hi": "हथकरघा बनारसी कतान सिल्क दुपट्टा",
      "kn": "Handwoven Banarasi Katan ರೇಷ್ಮೆ ದುಪಟ್ಟಾ with Kadwa Zari Weave",
      "ta": "Handwoven Banarasi Katan பட்டு துப்பட்டா with Kadwa Zari Weave"
    },
    "description": {
      "en": "Exquisite Varanasi pit-loom brocade stole taking over 80 hours to hand-weave with labor-intensive Kadwa floral motifs.",
      "hi": "वाराणसी के बुनकरों द्वारा हथकरघे पर कतान रेशम और शुद्ध ज़री से बुना गया प्रामाणिक बनारसी दुपट्टा।",
      "kn": "वाराणसी के बुनकरों द्वारा हथकरघे पर कतान रेशम और शुद्ध ज़री से बुना गया प्रामाणिक बनारसी दुपट्टा।",
      "ta": "वाराणसी के बुनकरों द्वारा हथकरघे पर कतान रेशम और शुद्ध ज़री से बुना गया प्रामाणिक बनारसी दुपट्टा।"
    },
    "culturalHeritageStory": {
      "en": "Authentic Varanasi pit-loom weave taking over 70 hours with individual Kadwa floral bootas.",
      "hi": "Authentic Varanasi pit-loom weave taking over 70 hours with individual Kadwa floral bootas.",
      "kn": "Authentic Varanasi pit-loom weave taking over 70 hours with individual Kadwa floral bootas.",
      "ta": "Authentic Varanasi pit-loom weave taking over 70 hours with individual Kadwa floral bootas."
    },
    "materialsUsed": {
      "en": "100% Pure Mulberry Katan Silk, tested metallic gold Zari, natural dyes",
      "hi": "100% Pure Mulberry Katan Silk, tested metallic gold Zari, natural dyes",
      "kn": "100% Pure Mulberry Katan Silk, tested metallic gold Zari, natural dyes",
      "ta": "100% Pure Mulberry Katan Silk, tested metallic gold Zari, natural dyes"
    },
    "dimensions": {
      "en": "2.5 meters length",
      "hi": "2.5 meters लंबाई",
      "kn": "2.5 meters ಉದ್ದ",
      "ta": "2.5 meters நீளம்"
    },
    "craftCategory": "Textile and Weaving",
    "giCraftRegion": "Varanasi Silk Brocade (Uttar Pradesh)"
  },
  "handwoven banarasi katan silk dupatta with kadwa zari weave": {
    "title": {
      "en": "Handwoven Banarasi Katan Silk Dupatta with Kadwa Zari Weave",
      "hi": "हथकरघा बनारसी कतान सिल्क दुपट्टा",
      "kn": "Handwoven Banarasi Katan ರೇಷ್ಮೆ ದುಪಟ್ಟಾ with Kadwa Zari Weave",
      "ta": "Handwoven Banarasi Katan பட்டு துப்பட்டா with Kadwa Zari Weave"
    },
    "description": {
      "en": "Exquisite Varanasi pit-loom brocade stole taking over 80 hours to hand-weave with labor-intensive Kadwa floral motifs.",
      "hi": "वाराणसी के बुनकरों द्वारा हथकरघे पर कतान रेशम और शुद्ध ज़री से बुना गया प्रामाणिक बनारसी दुपट्टा।",
      "kn": "वाराणसी के बुनकरों द्वारा हथकरघे पर कतान रेशम और शुद्ध ज़री से बुना गया प्रामाणिक बनारसी दुपट्टा।",
      "ta": "वाराणसी के बुनकरों द्वारा हथकरघे पर कतान रेशम और शुद्ध ज़री से बुना गया प्रामाणिक बनारसी दुपट्टा।"
    },
    "culturalHeritageStory": {
      "en": "Authentic Varanasi pit-loom weave taking over 70 hours with individual Kadwa floral bootas.",
      "hi": "Authentic Varanasi pit-loom weave taking over 70 hours with individual Kadwa floral bootas.",
      "kn": "Authentic Varanasi pit-loom weave taking over 70 hours with individual Kadwa floral bootas.",
      "ta": "Authentic Varanasi pit-loom weave taking over 70 hours with individual Kadwa floral bootas."
    },
    "materialsUsed": {
      "en": "100% Pure Mulberry Katan Silk, tested metallic gold Zari, natural dyes",
      "hi": "100% Pure Mulberry Katan Silk, tested metallic gold Zari, natural dyes",
      "kn": "100% Pure Mulberry Katan Silk, tested metallic gold Zari, natural dyes",
      "ta": "100% Pure Mulberry Katan Silk, tested metallic gold Zari, natural dyes"
    },
    "dimensions": {
      "en": "2.5 meters length",
      "hi": "2.5 meters लंबाई",
      "kn": "2.5 meters ಉದ್ದ",
      "ta": "2.5 meters நீளம்"
    },
    "craftCategory": "Textile and Weaving",
    "giCraftRegion": "Varanasi Silk Brocade (Uttar Pradesh)"
  },
  "cmtvoiuo9003d9e66khpyy1pt": {
    "title": {
      "en": "Pochampally Ikat Handloom Silk Stole (Geometric Chevron)",
      "hi": "पोचमपल्ली इकत हथकरघा सिल्क स्टोल",
      "kn": "Pochampally ಇಕತ್ ಕೈಮಗ್ಗ ರೇಷ್ಮೆ Stole (Geometric Chevron)",
      "ta": "Pochampally இக்கத் கைத்தறி பட்டு Stole (Geometric Chevron)"
    },
    "description": {
      "en": "Double-ikat handloom marvel where both warp and weft threads are tied and dyed prior to weaving to form intricate geometric chevrons.",
      "hi": "तेलंगाना के पोचमपल्ली का डबल इकत हथकरघा सिल्क स्टोल, ज्यामितीय आकृतियों में उत्कृष्ट रंगाई।",
      "kn": "तेलंगाना के पोचमपल्ली का डबल इकत हथकरघा सिल्क स्टोल, ज्यामितीय आकृतियों में उत्कृष्ट रंगाई।",
      "ta": "तेलंगाना के पोचमपल्ली का डबल इकत हथकरघा सिल्क स्टोल, ज्यामितीय आकृतियों में उत्कृष्ट रंगाई।"
    },
    "culturalHeritageStory": {
      "en": "Tie-and-dye double ikat precision where warp and weft threads are pre-dyed to calculate pattern.",
      "hi": "Tie-and-dye double ikat precision where warp and weft threads are pre-dyed to calculate pattern.",
      "kn": "Tie-and-dye double ikat precision where warp and weft threads are pre-dyed to calculate pattern.",
      "ta": "Tie-and-dye double ikat precision where warp and weft threads are pre-dyed to calculate pattern."
    },
    "materialsUsed": {
      "en": "Pure Mulberry Silk, natural tie-and-dye vat colors",
      "hi": "Pure Mulberry Silk, natural tie-and-dye vat colors",
      "kn": "Pure Mulberry Silk, natural tie-and-dye vat colors",
      "ta": "Pure Mulberry Silk, natural tie-and-dye vat colors"
    },
    "dimensions": {
      "en": "2 meters x 22 inches",
      "hi": "2 meters x 22 इंच",
      "kn": "2 meters x 22 ಇಂಚು",
      "ta": "2 meters x 22 அங்குலம்"
    },
    "craftCategory": "Textile and Weaving",
    "giCraftRegion": "Pochampally Ikat (Telangana)"
  },
  "pochampally ikat handloom silk stole (geometric chevron)": {
    "title": {
      "en": "Pochampally Ikat Handloom Silk Stole (Geometric Chevron)",
      "hi": "पोचमपल्ली इकत हथकरघा सिल्क स्टोल",
      "kn": "Pochampally ಇಕತ್ ಕೈಮಗ್ಗ ರೇಷ್ಮೆ Stole (Geometric Chevron)",
      "ta": "Pochampally இக்கத் கைத்தறி பட்டு Stole (Geometric Chevron)"
    },
    "description": {
      "en": "Double-ikat handloom marvel where both warp and weft threads are tied and dyed prior to weaving to form intricate geometric chevrons.",
      "hi": "तेलंगाना के पोचमपल्ली का डबल इकत हथकरघा सिल्क स्टोल, ज्यामितीय आकृतियों में उत्कृष्ट रंगाई।",
      "kn": "तेलंगाना के पोचमपल्ली का डबल इकत हथकरघा सिल्क स्टोल, ज्यामितीय आकृतियों में उत्कृष्ट रंगाई।",
      "ta": "तेलंगाना के पोचमपल्ली का डबल इकत हथकरघा सिल्क स्टोल, ज्यामितीय आकृतियों में उत्कृष्ट रंगाई।"
    },
    "culturalHeritageStory": {
      "en": "Tie-and-dye double ikat precision where warp and weft threads are pre-dyed to calculate pattern.",
      "hi": "Tie-and-dye double ikat precision where warp and weft threads are pre-dyed to calculate pattern.",
      "kn": "Tie-and-dye double ikat precision where warp and weft threads are pre-dyed to calculate pattern.",
      "ta": "Tie-and-dye double ikat precision where warp and weft threads are pre-dyed to calculate pattern."
    },
    "materialsUsed": {
      "en": "Pure Mulberry Silk, natural tie-and-dye vat colors",
      "hi": "Pure Mulberry Silk, natural tie-and-dye vat colors",
      "kn": "Pure Mulberry Silk, natural tie-and-dye vat colors",
      "ta": "Pure Mulberry Silk, natural tie-and-dye vat colors"
    },
    "dimensions": {
      "en": "2 meters x 22 inches",
      "hi": "2 meters x 22 इंच",
      "kn": "2 meters x 22 ಇಂಚು",
      "ta": "2 meters x 22 அங்குலம்"
    },
    "craftCategory": "Textile and Weaving",
    "giCraftRegion": "Pochampally Ikat (Telangana)"
  },
  "cmtvoiuod003f9e66pudaz20h": {
    "title": {
      "en": "Kashmir Hand-Spun Pashmina Cashmere Shawl with Sozni Needlework",
      "hi": "कश्मीरी हाथ से कता पश्मीना शॉल सोज़नी कढ़ाई",
      "kn": "Kashmir Hand-Spun ಪಶ್ಮಿನಾ Cashmere ಶಾಲು with Sozni Needlework",
      "ta": "Kashmir Hand-Spun பஷ்மினா Cashmere சால்வை with Sozni Needlework"
    },
    "description": {
      "en": "Ultra-soft hand-spun Changpa mountain goat fleece woven on wooden looms and delicately embroidered with paisley Sozni needlepoint.",
      "hi": "कश्मीर का प्रामाणिक हाथ से कता पश्मीना शॉल, बारीक सोज़नी सुई-कढ़ाई और अद्वितीय कोमलता के साथ।",
      "kn": "कश्मीर का प्रामाणिक हाथ से कता पश्मीना शॉल, बारीक सोज़नी सुई-कढ़ाई और अद्वितीय कोमलता के साथ।",
      "ta": "कश्मीर का प्रामाणिक हाथ से कता पश्मीना शॉल, बारीक सोज़नी सुई-कढ़ाई और अद्वितीय कोमलता के साथ।"
    },
    "culturalHeritageStory": {
      "en": "Ultra-fine Changthangi mountain goat fleece spun on wooden charkhas and hand-embroidered.",
      "hi": "Ultra-fine Changthangi mountain goat fleece spun on wooden charkhas and hand-embroidered.",
      "kn": "Ultra-fine Changthangi mountain goat fleece spun on wooden charkhas and hand-embroidered.",
      "ta": "Ultra-fine Changthangi mountain goat fleece spun on wooden charkhas and hand-embroidered."
    },
    "materialsUsed": {
      "en": "100% Changthangi goat pashm fleece, fine silk embroidery thread",
      "hi": "100% Changthangi goat pashm fleece, fine silk embroidery thread",
      "kn": "100% Changthangi goat pashm fleece, fine silk embroidery thread",
      "ta": "100% Changthangi goat pashm fleece, fine silk embroidery thread"
    },
    "dimensions": {
      "en": "2 x 1 meters",
      "hi": "2 x 1 meters",
      "kn": "2 x 1 meters",
      "ta": "2 x 1 meters"
    },
    "craftCategory": "Textile and Weaving",
    "giCraftRegion": "Kashmir Pashmina (Jammu & Kashmir)"
  },
  "kashmir hand-spun pashmina cashmere shawl with sozni needlework": {
    "title": {
      "en": "Kashmir Hand-Spun Pashmina Cashmere Shawl with Sozni Needlework",
      "hi": "कश्मीरी हाथ से कता पश्मीना शॉल सोज़नी कढ़ाई",
      "kn": "Kashmir Hand-Spun ಪಶ್ಮಿನಾ Cashmere ಶಾಲು with Sozni Needlework",
      "ta": "Kashmir Hand-Spun பஷ்மினா Cashmere சால்வை with Sozni Needlework"
    },
    "description": {
      "en": "Ultra-soft hand-spun Changpa mountain goat fleece woven on wooden looms and delicately embroidered with paisley Sozni needlepoint.",
      "hi": "कश्मीर का प्रामाणिक हाथ से कता पश्मीना शॉल, बारीक सोज़नी सुई-कढ़ाई और अद्वितीय कोमलता के साथ।",
      "kn": "कश्मीर का प्रामाणिक हाथ से कता पश्मीना शॉल, बारीक सोज़नी सुई-कढ़ाई और अद्वितीय कोमलता के साथ।",
      "ta": "कश्मीर का प्रामाणिक हाथ से कता पश्मीना शॉल, बारीक सोज़नी सुई-कढ़ाई और अद्वितीय कोमलता के साथ।"
    },
    "culturalHeritageStory": {
      "en": "Ultra-fine Changthangi mountain goat fleece spun on wooden charkhas and hand-embroidered.",
      "hi": "Ultra-fine Changthangi mountain goat fleece spun on wooden charkhas and hand-embroidered.",
      "kn": "Ultra-fine Changthangi mountain goat fleece spun on wooden charkhas and hand-embroidered.",
      "ta": "Ultra-fine Changthangi mountain goat fleece spun on wooden charkhas and hand-embroidered."
    },
    "materialsUsed": {
      "en": "100% Changthangi goat pashm fleece, fine silk embroidery thread",
      "hi": "100% Changthangi goat pashm fleece, fine silk embroidery thread",
      "kn": "100% Changthangi goat pashm fleece, fine silk embroidery thread",
      "ta": "100% Changthangi goat pashm fleece, fine silk embroidery thread"
    },
    "dimensions": {
      "en": "2 x 1 meters",
      "hi": "2 x 1 meters",
      "kn": "2 x 1 meters",
      "ta": "2 x 1 meters"
    },
    "craftCategory": "Textile and Weaving",
    "giCraftRegion": "Kashmir Pashmina (Jammu & Kashmir)"
  },
  "cmtvoiuoh003h9e66oppgtmb0": {
    "title": {
      "en": "Punjab Handcrafted Phulkari Chanderi Dupatta (Pat Silk Threads)",
      "hi": "पंजाब फुलकारी दुपट्टा रेशम धागे",
      "kn": "Punjab ಹಸ್ತನಿರ್ಮಿತ ಫುಲ್ಕಾರಿ Chanderi ದುಪಟ್ಟಾ (Pat ರೇಷ್ಮೆ Threads)",
      "ta": "Punjab கைவினை புல்காரி Chanderi துப்பட்டா (Pat பட்டு Threads)"
    },
    "description": {
      "en": "Vibrant geometric floral folk needlework hand-embroidered in darn stitch from the reverse side by rural Punjab women artisans.",
      "hi": "पंजाब की पारंपरिक फुलकारी कशीदाकारी दुपट्टा, चंदेरी रेशम पर रेशमी धागों की हाथ से की गई खूबसूरत कढ़ाई।",
      "kn": "पंजाब की पारंपरिक फुलकारी कशीदाकारी दुपट्टा, चंदेरी रेशम पर रेशमी धागों की हाथ से की गई खूबसूरत कढ़ाई।",
      "ta": "पंजाब की पारंपरिक फुलकारी कशीदाकारी दुपट्टा, चंदेरी रेशम पर रेशमी धागों की हाथ से की गई खूबसूरत कढ़ाई।"
    },
    "culturalHeritageStory": {
      "en": "Darning stitch floral embroidery on pure Chanderi base by Punjab rural women cooperatives.",
      "hi": "Darning stitch floral embroidery on pure Chanderi base by Punjab rural women cooperatives.",
      "kn": "Darning stitch floral embroidery on pure Chanderi base by Punjab rural women cooperatives.",
      "ta": "Darning stitch floral embroidery on pure Chanderi base by Punjab rural women cooperatives."
    },
    "materialsUsed": {
      "en": "Pure Chanderi silk-cotton base, untwisted Pat silk embroidery floss",
      "hi": "Pure Chanderi silk-cotton base, untwisted Pat silk embroidery floss",
      "kn": "Pure Chanderi silk-cotton base, untwisted Pat silk embroidery floss",
      "ta": "Pure Chanderi silk-cotton base, untwisted Pat silk embroidery floss"
    },
    "dimensions": {
      "en": "2.4 meters length",
      "hi": "2.4 meters लंबाई",
      "kn": "2.4 meters ಉದ್ದ",
      "ta": "2.4 meters நீளம்"
    },
    "craftCategory": "Textile and Weaving",
    "giCraftRegion": "Punjab Phulkari (Punjab)"
  },
  "punjab handcrafted phulkari chanderi dupatta (pat silk threads)": {
    "title": {
      "en": "Punjab Handcrafted Phulkari Chanderi Dupatta (Pat Silk Threads)",
      "hi": "पंजाब फुलकारी दुपट्टा रेशम धागे",
      "kn": "Punjab ಹಸ್ತನಿರ್ಮಿತ ಫುಲ್ಕಾರಿ Chanderi ದುಪಟ್ಟಾ (Pat ರೇಷ್ಮೆ Threads)",
      "ta": "Punjab கைவினை புல்காரி Chanderi துப்பட்டா (Pat பட்டு Threads)"
    },
    "description": {
      "en": "Vibrant geometric floral folk needlework hand-embroidered in darn stitch from the reverse side by rural Punjab women artisans.",
      "hi": "पंजाब की पारंपरिक फुलकारी कशीदाकारी दुपट्टा, चंदेरी रेशम पर रेशमी धागों की हाथ से की गई खूबसूरत कढ़ाई।",
      "kn": "पंजाब की पारंपरिक फुलकारी कशीदाकारी दुपट्टा, चंदेरी रेशम पर रेशमी धागों की हाथ से की गई खूबसूरत कढ़ाई।",
      "ta": "पंजाब की पारंपरिक फुलकारी कशीदाकारी दुपट्टा, चंदेरी रेशम पर रेशमी धागों की हाथ से की गई खूबसूरत कढ़ाई।"
    },
    "culturalHeritageStory": {
      "en": "Darning stitch floral embroidery on pure Chanderi base by Punjab rural women cooperatives.",
      "hi": "Darning stitch floral embroidery on pure Chanderi base by Punjab rural women cooperatives.",
      "kn": "Darning stitch floral embroidery on pure Chanderi base by Punjab rural women cooperatives.",
      "ta": "Darning stitch floral embroidery on pure Chanderi base by Punjab rural women cooperatives."
    },
    "materialsUsed": {
      "en": "Pure Chanderi silk-cotton base, untwisted Pat silk embroidery floss",
      "hi": "Pure Chanderi silk-cotton base, untwisted Pat silk embroidery floss",
      "kn": "Pure Chanderi silk-cotton base, untwisted Pat silk embroidery floss",
      "ta": "Pure Chanderi silk-cotton base, untwisted Pat silk embroidery floss"
    },
    "dimensions": {
      "en": "2.4 meters length",
      "hi": "2.4 meters लंबाई",
      "kn": "2.4 meters ಉದ್ದ",
      "ta": "2.4 meters நீளம்"
    },
    "craftCategory": "Textile and Weaving",
    "giCraftRegion": "Punjab Phulkari (Punjab)"
  },
  "cmtvoiuol003j9e66ey0sqtgc": {
    "title": {
      "en": "Bhagalpur Organic Tussar Gicha Silk Saree with Temple Border",
      "hi": "भागलपुर टसर सिल्क साड़ी मंदिर किनारी",
      "kn": "Bhagalpur Organic Tussar Gicha ರೇಷ್ಮೆ ಸೀರೆ with Temple Border",
      "ta": "Bhagalpur Organic Tussar Gicha பட்டு புடவை with Temple Border"
    },
    "description": {
      "en": "Sustainably harvested wild forest silk known for its breathable thermal comfort, rich natural golden luster, and crisp temple borders.",
      "hi": "भागलपुर का जैविक टसर घीचा सिल्क साड़ी, मंदिर किनारी और प्राकृतिक सुनहरी चमक से युक्त।",
      "kn": "भागलपुर का जैविक टसर घीचा सिल्क साड़ी, मंदिर किनारी और प्राकृतिक सुनहरी चमक से युक्त।",
      "ta": "भागलपुर का जैविक टसर घीचा सिल्क साड़ी, मंदिर किनारी और प्राकृतिक सुनहरी चमक से युक्त।"
    },
    "culturalHeritageStory": {
      "en": "Wild forest silk cultivated sustainably by tribal gatherers in the sub-Himalayan belt.",
      "hi": "Wild forest silk cultivated sustainably by tribal gatherers in the sub-Himalayan belt.",
      "kn": "Wild forest silk cultivated sustainably by tribal gatherers in the sub-Himalayan belt.",
      "ta": "Wild forest silk cultivated sustainably by tribal gatherers in the sub-Himalayan belt."
    },
    "materialsUsed": {
      "en": "Wild organic Tussar & Gicha silk, natural azo-free dyes",
      "hi": "Wild organic Tussar & Gicha silk, natural azo-free dyes",
      "kn": "Wild organic Tussar & Gicha silk, natural azo-free dyes",
      "ta": "Wild organic Tussar & Gicha silk, natural azo-free dyes"
    },
    "dimensions": {
      "en": "6.3 meters with blouse",
      "hi": "6.3 meters with blouse",
      "kn": "6.3 meters with blouse",
      "ta": "6.3 meters with blouse"
    },
    "craftCategory": "Textile and Weaving",
    "giCraftRegion": "Bhagalpur Silk (Bihar)"
  },
  "bhagalpur organic tussar gicha silk saree with temple border": {
    "title": {
      "en": "Bhagalpur Organic Tussar Gicha Silk Saree with Temple Border",
      "hi": "भागलपुर टसर सिल्क साड़ी मंदिर किनारी",
      "kn": "Bhagalpur Organic Tussar Gicha ರೇಷ್ಮೆ ಸೀರೆ with Temple Border",
      "ta": "Bhagalpur Organic Tussar Gicha பட்டு புடவை with Temple Border"
    },
    "description": {
      "en": "Sustainably harvested wild forest silk known for its breathable thermal comfort, rich natural golden luster, and crisp temple borders.",
      "hi": "भागलपुर का जैविक टसर घीचा सिल्क साड़ी, मंदिर किनारी और प्राकृतिक सुनहरी चमक से युक्त।",
      "kn": "भागलपुर का जैविक टसर घीचा सिल्क साड़ी, मंदिर किनारी और प्राकृतिक सुनहरी चमक से युक्त।",
      "ta": "भागलपुर का जैविक टसर घीचा सिल्क साड़ी, मंदिर किनारी और प्राकृतिक सुनहरी चमक से युक्त।"
    },
    "culturalHeritageStory": {
      "en": "Wild forest silk cultivated sustainably by tribal gatherers in the sub-Himalayan belt.",
      "hi": "Wild forest silk cultivated sustainably by tribal gatherers in the sub-Himalayan belt.",
      "kn": "Wild forest silk cultivated sustainably by tribal gatherers in the sub-Himalayan belt.",
      "ta": "Wild forest silk cultivated sustainably by tribal gatherers in the sub-Himalayan belt."
    },
    "materialsUsed": {
      "en": "Wild organic Tussar & Gicha silk, natural azo-free dyes",
      "hi": "Wild organic Tussar & Gicha silk, natural azo-free dyes",
      "kn": "Wild organic Tussar & Gicha silk, natural azo-free dyes",
      "ta": "Wild organic Tussar & Gicha silk, natural azo-free dyes"
    },
    "dimensions": {
      "en": "6.3 meters with blouse",
      "hi": "6.3 meters with blouse",
      "kn": "6.3 meters with blouse",
      "ta": "6.3 meters with blouse"
    },
    "craftCategory": "Textile and Weaving",
    "giCraftRegion": "Bhagalpur Silk (Bihar)"
  },
  "cmtvoiuop003l9e66fljpgxdp": {
    "title": {
      "en": "Kutch Hand-Embroidered Rabari Cushion Covers (Pair)",
      "hi": "कच्छ राबरी कशीदाकारी कुशन कवर (जोड़ी)",
      "kn": "Kutch Hand-Embroidered Rabari Cushion Covers (ಜೋಡಿ)",
      "ta": "Kutch Hand-Embroidered Rabari Cushion Covers (ஜோடி)"
    },
    "description": {
      "en": "Nomadic pastoralist mirrorwork needlecraft incorporating square chain stitches and reflective convex mirrors.",
      "hi": "गुजरात के कच्छ के राबरी समुदाय द्वारा हाथ से की गई दर्पण कढ़ाई कुशन कवर (जोड़ी)।",
      "kn": "गुजरात के कच्छ के राबरी समुदाय द्वारा हाथ से की गई दर्पण कढ़ाई कुशन कवर (जोड़ी)।",
      "ta": "गुजरात के कच्छ के राबरी समुदाय द्वारा हाथ से की गई दर्पण कढ़ाई कुशन कवर (जोड़ी)।"
    },
    "culturalHeritageStory": {
      "en": "Mirror-work and bold geometric thread stitches perfected by nomadic pastoralist artisans of Gujarat.",
      "hi": "Mirror-work and bold geometric thread stitches perfected by nomadic pastoralist artisans of Gujarat.",
      "kn": "Mirror-work and bold geometric thread stitches perfected by nomadic pastoralist artisans of Gujarat.",
      "ta": "Mirror-work and bold geometric thread stitches perfected by nomadic pastoralist artisans of Gujarat."
    },
    "materialsUsed": {
      "en": "Hand-spun cotton khadi, authentic glass mirrors (aabhla), wool and cotton thread",
      "hi": "Hand-spun cotton khadi, authentic glass mirrors (aabhla), wool and cotton thread",
      "kn": "Hand-spun cotton khadi, authentic glass mirrors (aabhla), wool and cotton thread",
      "ta": "Hand-spun cotton khadi, authentic glass mirrors (aabhla), wool and cotton thread"
    },
    "dimensions": {
      "en": "16 x 16 inches",
      "hi": "16 x 16 इंच",
      "kn": "16 x 16 ಇಂಚು",
      "ta": "16 x 16 அங்குலம்"
    },
    "craftCategory": "Textile and Weaving",
    "giCraftRegion": "Kutch Embroidery (Gujarat)"
  },
  "kutch hand-embroidered rabari cushion covers (pair)": {
    "title": {
      "en": "Kutch Hand-Embroidered Rabari Cushion Covers (Pair)",
      "hi": "कच्छ राबरी कशीदाकारी कुशन कवर (जोड़ी)",
      "kn": "Kutch Hand-Embroidered Rabari Cushion Covers (ಜೋಡಿ)",
      "ta": "Kutch Hand-Embroidered Rabari Cushion Covers (ஜோடி)"
    },
    "description": {
      "en": "Nomadic pastoralist mirrorwork needlecraft incorporating square chain stitches and reflective convex mirrors.",
      "hi": "गुजरात के कच्छ के राबरी समुदाय द्वारा हाथ से की गई दर्पण कढ़ाई कुशन कवर (जोड़ी)।",
      "kn": "गुजरात के कच्छ के राबरी समुदाय द्वारा हाथ से की गई दर्पण कढ़ाई कुशन कवर (जोड़ी)।",
      "ta": "गुजरात के कच्छ के राबरी समुदाय द्वारा हाथ से की गई दर्पण कढ़ाई कुशन कवर (जोड़ी)।"
    },
    "culturalHeritageStory": {
      "en": "Mirror-work and bold geometric thread stitches perfected by nomadic pastoralist artisans of Gujarat.",
      "hi": "Mirror-work and bold geometric thread stitches perfected by nomadic pastoralist artisans of Gujarat.",
      "kn": "Mirror-work and bold geometric thread stitches perfected by nomadic pastoralist artisans of Gujarat.",
      "ta": "Mirror-work and bold geometric thread stitches perfected by nomadic pastoralist artisans of Gujarat."
    },
    "materialsUsed": {
      "en": "Hand-spun cotton khadi, authentic glass mirrors (aabhla), wool and cotton thread",
      "hi": "Hand-spun cotton khadi, authentic glass mirrors (aabhla), wool and cotton thread",
      "kn": "Hand-spun cotton khadi, authentic glass mirrors (aabhla), wool and cotton thread",
      "ta": "Hand-spun cotton khadi, authentic glass mirrors (aabhla), wool and cotton thread"
    },
    "dimensions": {
      "en": "16 x 16 inches",
      "hi": "16 x 16 इंच",
      "kn": "16 x 16 ಇಂಚು",
      "ta": "16 x 16 அங்குலம்"
    },
    "craftCategory": "Textile and Weaving",
    "giCraftRegion": "Kutch Embroidery (Gujarat)"
  },
  "cmtvoiuou003n9e66zle74jzv": {
    "title": {
      "en": "Sambalpuri Handloom Cotton Ikat Fabric (Per 2.5 Meters)",
      "hi": "संबलपुरी हथकरघा सूती इकत वस्त्र (2.5 मीटर)",
      "kn": "Sambalpuri ಕೈಮಗ್ಗ ಹತ್ತಿ ಇಕತ್ Fabric (Per 2.5 Meters)",
      "ta": "Sambalpuri கைத்தறி பருத்தி இக்கத் Fabric (Per 2.5 Meters)"
    },
    "description": {
      "en": "Odisha bandha handloom yardage featuring sacred conch shell (shankha) and wheel motifs woven on traditional frame pit-looms.",
      "hi": "ओडिशा का संबलपुरी हथकरघा सूती इकत वस्त्र (2.5 मीटर), शंख और चक्र बंधा कला रूपांकनों सहित।",
      "kn": "ओडिशा का संबलपुरी हथकरघा सूती इकत वस्त्र (2.5 मीटर), शंख और चक्र बंधा कला रूपांकनों सहित।",
      "ta": "ओडिशा का संबलपुरी हथकरघा सूती इकत वस्त्र (2.5 मीटर), शंख और चक्र बंधा कला रूपांकनों सहित।"
    },
    "culturalHeritageStory": {
      "en": "Odisha handloom weaving utilizing traditional bandha tie-dye motifs of conch and wheel.",
      "hi": "Odisha handloom weaving utilizing traditional bandha tie-dye motifs of conch and wheel.",
      "kn": "Odisha handloom weaving utilizing traditional bandha tie-dye motifs of conch and wheel.",
      "ta": "Odisha handloom weaving utilizing traditional bandha tie-dye motifs of conch and wheel."
    },
    "materialsUsed": {
      "en": "100% Long-staple organic cotton yarn, fast vat dyes",
      "hi": "100% Long-staple organic cotton yarn, fast vat dyes",
      "kn": "100% Long-staple organic cotton yarn, fast vat dyes",
      "ta": "100% Long-staple organic cotton yarn, fast vat dyes"
    },
    "dimensions": {
      "en": "2.5 meters length",
      "hi": "2.5 meters लंबाई",
      "kn": "2.5 meters ಉದ್ದ",
      "ta": "2.5 meters நீளம்"
    },
    "craftCategory": "Textile and Weaving",
    "giCraftRegion": "Sambalpuri Handloom (Odisha)"
  },
  "sambalpuri handloom cotton ikat fabric (per 2.5 meters)": {
    "title": {
      "en": "Sambalpuri Handloom Cotton Ikat Fabric (Per 2.5 Meters)",
      "hi": "संबलपुरी हथकरघा सूती इकत वस्त्र (2.5 मीटर)",
      "kn": "Sambalpuri ಕೈಮಗ್ಗ ಹತ್ತಿ ಇಕತ್ Fabric (Per 2.5 Meters)",
      "ta": "Sambalpuri கைத்தறி பருத்தி இக்கத் Fabric (Per 2.5 Meters)"
    },
    "description": {
      "en": "Odisha bandha handloom yardage featuring sacred conch shell (shankha) and wheel motifs woven on traditional frame pit-looms.",
      "hi": "ओडिशा का संबलपुरी हथकरघा सूती इकत वस्त्र (2.5 मीटर), शंख और चक्र बंधा कला रूपांकनों सहित।",
      "kn": "ओडिशा का संबलपुरी हथकरघा सूती इकत वस्त्र (2.5 मीटर), शंख और चक्र बंधा कला रूपांकनों सहित।",
      "ta": "ओडिशा का संबलपुरी हथकरघा सूती इकत वस्त्र (2.5 मीटर), शंख और चक्र बंधा कला रूपांकनों सहित।"
    },
    "culturalHeritageStory": {
      "en": "Odisha handloom weaving utilizing traditional bandha tie-dye motifs of conch and wheel.",
      "hi": "Odisha handloom weaving utilizing traditional bandha tie-dye motifs of conch and wheel.",
      "kn": "Odisha handloom weaving utilizing traditional bandha tie-dye motifs of conch and wheel.",
      "ta": "Odisha handloom weaving utilizing traditional bandha tie-dye motifs of conch and wheel."
    },
    "materialsUsed": {
      "en": "100% Long-staple organic cotton yarn, fast vat dyes",
      "hi": "100% Long-staple organic cotton yarn, fast vat dyes",
      "kn": "100% Long-staple organic cotton yarn, fast vat dyes",
      "ta": "100% Long-staple organic cotton yarn, fast vat dyes"
    },
    "dimensions": {
      "en": "2.5 meters length",
      "hi": "2.5 meters लंबाई",
      "kn": "2.5 meters ಉದ್ದ",
      "ta": "2.5 meters நீளம்"
    },
    "craftCategory": "Textile and Weaving",
    "giCraftRegion": "Sambalpuri Handloom (Odisha)"
  },
  "cmtvoiuoy003p9e66ohmw35w6": {
    "title": {
      "en": "Kullu Handwoven Pure Woolen Muffler with Geometric Border",
      "hi": "कुल्लू शुद्ध ऊनी मफलर ज्यामितीय किनारी",
      "kn": "कुल्लू शुद्ध ऊनी मफलर ज्यामितीय किनारी",
      "ta": "कुल्लू शुद्ध ऊनी मफलर ज्यामितीय किनारी"
    },
    "description": {
      "en": "Warm Himalayan handwoven scarf adorned with vibrant multi-colored kaleidoscopic valley geometric tapestry bands.",
      "hi": "हिमाचल प्रदेश की कुल्लू घाटी का शुद्ध ऊनी मफलर, पारंपरिक बहुरंगी ज्यामितीय किनारी सहित।",
      "kn": "हिमाचल प्रदेश की कुल्लू घाटी का शुद्ध ऊनी मफलर, पारंपरिक बहुरंगी ज्यामितीय किनारी सहित।",
      "ta": "हिमाचल प्रदेश की कुल्लू घाटी का शुद्ध ऊनी मफलर, पारंपरिक बहुरंगी ज्यामितीय किनारी सहित।"
    },
    "culturalHeritageStory": {
      "en": "Warm Himalayan sheep wool woven on traditional frame looms in Himachal valley villages.",
      "hi": "Warm Himalayan sheep wool woven on traditional frame looms in Himachal valley villages.",
      "kn": "Warm Himalayan sheep wool woven on traditional frame looms in Himachal valley villages.",
      "ta": "Warm Himalayan sheep wool woven on traditional frame looms in Himachal valley villages."
    },
    "materialsUsed": {
      "en": "Himalayan sheep wool, Australian merino blend, natural vegetal dyes",
      "hi": "Himalayan sheep wool, Australian merino blend, natural vegetal dyes",
      "kn": "Himalayan sheep wool, Australian merino blend, natural vegetal dyes",
      "ta": "Himalayan sheep wool, Australian merino blend, natural vegetal dyes"
    },
    "dimensions": {
      "en": "65 x 12 inches",
      "hi": "65 x 12 इंच",
      "kn": "65 x 12 ಇಂಚು",
      "ta": "65 x 12 அங்குலம்"
    },
    "craftCategory": "Textile and Weaving",
    "giCraftRegion": "Kullu Shawls (Himachal Pradesh)"
  },
  "kullu handwoven pure woolen muffler with geometric border": {
    "title": {
      "en": "Kullu Handwoven Pure Woolen Muffler with Geometric Border",
      "hi": "कुल्लू शुद्ध ऊनी मफलर ज्यामितीय किनारी",
      "kn": "कुल्लू शुद्ध ऊनी मफलर ज्यामितीय किनारी",
      "ta": "कुल्लू शुद्ध ऊनी मफलर ज्यामितीय किनारी"
    },
    "description": {
      "en": "Warm Himalayan handwoven scarf adorned with vibrant multi-colored kaleidoscopic valley geometric tapestry bands.",
      "hi": "हिमाचल प्रदेश की कुल्लू घाटी का शुद्ध ऊनी मफलर, पारंपरिक बहुरंगी ज्यामितीय किनारी सहित।",
      "kn": "हिमाचल प्रदेश की कुल्लू घाटी का शुद्ध ऊनी मफलर, पारंपरिक बहुरंगी ज्यामितीय किनारी सहित।",
      "ta": "हिमाचल प्रदेश की कुल्लू घाटी का शुद्ध ऊनी मफलर, पारंपरिक बहुरंगी ज्यामितीय किनारी सहित।"
    },
    "culturalHeritageStory": {
      "en": "Warm Himalayan sheep wool woven on traditional frame looms in Himachal valley villages.",
      "hi": "Warm Himalayan sheep wool woven on traditional frame looms in Himachal valley villages.",
      "kn": "Warm Himalayan sheep wool woven on traditional frame looms in Himachal valley villages.",
      "ta": "Warm Himalayan sheep wool woven on traditional frame looms in Himachal valley villages."
    },
    "materialsUsed": {
      "en": "Himalayan sheep wool, Australian merino blend, natural vegetal dyes",
      "hi": "Himalayan sheep wool, Australian merino blend, natural vegetal dyes",
      "kn": "Himalayan sheep wool, Australian merino blend, natural vegetal dyes",
      "ta": "Himalayan sheep wool, Australian merino blend, natural vegetal dyes"
    },
    "dimensions": {
      "en": "65 x 12 inches",
      "hi": "65 x 12 इंच",
      "kn": "65 x 12 ಇಂಚು",
      "ta": "65 x 12 அங்குலம்"
    },
    "craftCategory": "Textile and Weaving",
    "giCraftRegion": "Kullu Shawls (Himachal Pradesh)"
  },
  "cmtvoiup2003r9e66pe1l6r3n": {
    "title": {
      "en": "Srikalahasti Pen Kalamkari Hand-Drawn Cotton Dupatta",
      "hi": "श्रीकालहस्ती कलमकारी हस्तचित्रित दुपट्टा",
      "kn": "Srikalahasti Pen Kalamkari Hand-Drawn ಹತ್ತಿ ದುಪಟ್ಟಾ",
      "ta": "Srikalahasti Pen Kalamkari Hand-Drawn பருத்தி துப்பட்டா"
    },
    "description": {
      "en": "Hand-drawn mythological artwork sketched with a bamboo reed pen and colored solely with natural root extracts and buffalo milk wash.",
      "hi": "आंध्र प्रदेश के श्रीकालहस्ती की कलमकारी, बांस की कलम और प्राकृतिक वानस्पतिक रंगों से चित्रित सूती दुपट्टा।",
      "kn": "आंध्र प्रदेश के श्रीकालहस्ती की कलमकारी, बांस की कलम और प्राकृतिक वानस्पतिक रंगों से चित्रित सूती दुपट्टा।",
      "ta": "आंध्र प्रदेश के श्रीकालहस्ती की कलमकारी, बांस की कलम और प्राकृतिक वानस्पतिक रंगों से चित्रित सूती दुपट्टा।"
    },
    "culturalHeritageStory": {
      "en": "Hand-drawn with bamboo pen using natural myrobalan and alum mordants in Andhra Pradesh.",
      "hi": "Hand-drawn with bamboo pen using natural myrobalan and alum mordants in Andhra Pradesh.",
      "kn": "Hand-drawn with bamboo pen using natural myrobalan and alum mordants in Andhra Pradesh.",
      "ta": "Hand-drawn with bamboo pen using natural myrobalan and alum mordants in Andhra Pradesh."
    },
    "materialsUsed": {
      "en": "Organic handspun cotton, tamarind pen, natural alum and myrobalan mordants",
      "hi": "Organic handspun cotton, tamarind pen, natural alum and myrobalan mordants",
      "kn": "Organic handspun cotton, tamarind pen, natural alum and myrobalan mordants",
      "ta": "Organic handspun cotton, tamarind pen, natural alum and myrobalan mordants"
    },
    "dimensions": {
      "en": "2.5 meters length",
      "hi": "2.5 meters लंबाई",
      "kn": "2.5 meters ಉದ್ದ",
      "ta": "2.5 meters நீளம்"
    },
    "craftCategory": "Textile and Weaving",
    "giCraftRegion": "Srikalahasti Kalamkari (Andhra Pradesh)"
  },
  "srikalahasti pen kalamkari hand-drawn cotton dupatta": {
    "title": {
      "en": "Srikalahasti Pen Kalamkari Hand-Drawn Cotton Dupatta",
      "hi": "श्रीकालहस्ती कलमकारी हस्तचित्रित दुपट्टा",
      "kn": "Srikalahasti Pen Kalamkari Hand-Drawn ಹತ್ತಿ ದುಪಟ್ಟಾ",
      "ta": "Srikalahasti Pen Kalamkari Hand-Drawn பருத்தி துப்பட்டா"
    },
    "description": {
      "en": "Hand-drawn mythological artwork sketched with a bamboo reed pen and colored solely with natural root extracts and buffalo milk wash.",
      "hi": "आंध्र प्रदेश के श्रीकालहस्ती की कलमकारी, बांस की कलम और प्राकृतिक वानस्पतिक रंगों से चित्रित सूती दुपट्टा।",
      "kn": "आंध्र प्रदेश के श्रीकालहस्ती की कलमकारी, बांस की कलम और प्राकृतिक वानस्पतिक रंगों से चित्रित सूती दुपट्टा।",
      "ta": "आंध्र प्रदेश के श्रीकालहस्ती की कलमकारी, बांस की कलम और प्राकृतिक वानस्पतिक रंगों से चित्रित सूती दुपट्टा।"
    },
    "culturalHeritageStory": {
      "en": "Hand-drawn with bamboo pen using natural myrobalan and alum mordants in Andhra Pradesh.",
      "hi": "Hand-drawn with bamboo pen using natural myrobalan and alum mordants in Andhra Pradesh.",
      "kn": "Hand-drawn with bamboo pen using natural myrobalan and alum mordants in Andhra Pradesh.",
      "ta": "Hand-drawn with bamboo pen using natural myrobalan and alum mordants in Andhra Pradesh."
    },
    "materialsUsed": {
      "en": "Organic handspun cotton, tamarind pen, natural alum and myrobalan mordants",
      "hi": "Organic handspun cotton, tamarind pen, natural alum and myrobalan mordants",
      "kn": "Organic handspun cotton, tamarind pen, natural alum and myrobalan mordants",
      "ta": "Organic handspun cotton, tamarind pen, natural alum and myrobalan mordants"
    },
    "dimensions": {
      "en": "2.5 meters length",
      "hi": "2.5 meters लंबाई",
      "kn": "2.5 meters ಉದ್ದ",
      "ta": "2.5 meters நீளம்"
    },
    "craftCategory": "Textile and Weaving",
    "giCraftRegion": "Srikalahasti Kalamkari (Andhra Pradesh)"
  },
  "cmtvoiup6003t9e669nu2rpz9": {
    "title": {
      "en": "Banjara Tribal Hand-Embroidered Shoulder Bag with Cowrie Shells",
      "hi": "बंजारा जनजातीय हस्तशिल्प थैला कौड़ी सहित",
      "kn": "Banjara ಬುಡಕಟ್ಟು Hand-Embroidered Shoulder ಬ್ಯಾಗ್ with Cowrie Shells",
      "ta": "Banjara பழங்குடி Hand-Embroidered Shoulder பை with Cowrie Shells"
    },
    "description": {
      "en": "Bohemian Lambani gypsy shoulder bag handcrafted with geometric herringbone cross-stitches and genuine marine cowries.",
      "hi": "बंजारा (लंबाडी) जनजातीय कशीदाकारी थैला, प्राचीन सिक्कों और समुद्री कौड़ियों से सुसज्जित।",
      "kn": "बंजारा (लंबाडी) जनजातीय कशीदाकारी थैला, प्राचीन सिक्कों और समुद्री कौड़ियों से सुसज्जित।",
      "ta": "बंजारा (लंबाडी) जनजातीय कशीदाकारी थैला, प्राचीन सिक्कों और समुद्री कौड़ियों से सुसज्जित।"
    },
    "culturalHeritageStory": {
      "en": "Upcycled textile patch mosaic adorned with vintage coins and authentic marine cowrie shells.",
      "hi": "Upcycled textile patch mosaic adorned with vintage coins and authentic marine cowrie shells.",
      "kn": "Upcycled textile patch mosaic adorned with vintage coins and authentic marine cowrie shells.",
      "ta": "Upcycled textile patch mosaic adorned with vintage coins and authentic marine cowrie shells."
    },
    "materialsUsed": {
      "en": "Heavy cotton canvas, authentic marine cowrie shells, vintage brass coins, mirror glass",
      "hi": "Heavy cotton canvas, authentic marine cowrie shells, vintage brass coins, mirror glass",
      "kn": "Heavy cotton canvas, authentic marine cowrie shells, vintage brass coins, mirror glass",
      "ta": "Heavy cotton canvas, authentic marine cowrie shells, vintage brass coins, mirror glass"
    },
    "dimensions": {
      "en": "14 x 13 inches",
      "hi": "14 x 13 इंच",
      "kn": "14 x 13 ಇಂಚು",
      "ta": "14 x 13 அங்குலம்"
    },
    "craftCategory": "Textile and Weaving",
    "giCraftRegion": "Banjara Needlecraft (Telangana)"
  },
  "banjara tribal hand-embroidered shoulder bag with cowrie shells": {
    "title": {
      "en": "Banjara Tribal Hand-Embroidered Shoulder Bag with Cowrie Shells",
      "hi": "बंजारा जनजातीय हस्तशिल्प थैला कौड़ी सहित",
      "kn": "Banjara ಬುಡಕಟ್ಟು Hand-Embroidered Shoulder ಬ್ಯಾಗ್ with Cowrie Shells",
      "ta": "Banjara பழங்குடி Hand-Embroidered Shoulder பை with Cowrie Shells"
    },
    "description": {
      "en": "Bohemian Lambani gypsy shoulder bag handcrafted with geometric herringbone cross-stitches and genuine marine cowries.",
      "hi": "बंजारा (लंबाडी) जनजातीय कशीदाकारी थैला, प्राचीन सिक्कों और समुद्री कौड़ियों से सुसज्जित।",
      "kn": "बंजारा (लंबाडी) जनजातीय कशीदाकारी थैला, प्राचीन सिक्कों और समुद्री कौड़ियों से सुसज्जित।",
      "ta": "बंजारा (लंबाडी) जनजातीय कशीदाकारी थैला, प्राचीन सिक्कों और समुद्री कौड़ियों से सुसज्जित।"
    },
    "culturalHeritageStory": {
      "en": "Upcycled textile patch mosaic adorned with vintage coins and authentic marine cowrie shells.",
      "hi": "Upcycled textile patch mosaic adorned with vintage coins and authentic marine cowrie shells.",
      "kn": "Upcycled textile patch mosaic adorned with vintage coins and authentic marine cowrie shells.",
      "ta": "Upcycled textile patch mosaic adorned with vintage coins and authentic marine cowrie shells."
    },
    "materialsUsed": {
      "en": "Heavy cotton canvas, authentic marine cowrie shells, vintage brass coins, mirror glass",
      "hi": "Heavy cotton canvas, authentic marine cowrie shells, vintage brass coins, mirror glass",
      "kn": "Heavy cotton canvas, authentic marine cowrie shells, vintage brass coins, mirror glass",
      "ta": "Heavy cotton canvas, authentic marine cowrie shells, vintage brass coins, mirror glass"
    },
    "dimensions": {
      "en": "14 x 13 inches",
      "hi": "14 x 13 इंच",
      "kn": "14 x 13 ಇಂಚು",
      "ta": "14 x 13 அங்குலம்"
    },
    "craftCategory": "Textile and Weaving",
    "giCraftRegion": "Banjara Needlecraft (Telangana)"
  },
  "cmtvoiupa003v9e66wd11y10i": {
    "title": {
      "en": "Bidriware Pure Silver Inlay Peacock Flower Vase",
      "hi": "बिदरीवेयर शुद्ध चांदी जड़ित मयूर फूलदान",
      "kn": "ಬಿದ್ರಿ ಕಲೆ Pure ಬೆಳ್ಳಿ ಕೆತ್ತನೆ Peacock Flower Vase",
      "ta": "பித்ரிவேர் Pure வெள்ளி வேலைப்பாடு Peacock Flower Vase"
    },
    "description": {
      "en": "500-year-old Bahmani metallurgical craft oxidized to pitch black using historic Bidar fort clay, inlaid with pure silver wires.",
      "hi": "कर्नाटक के बीदर की प्रसिद्ध बिदरीवेयर कला, शुद्ध चांदी के तारों से जड़ित सुंदर मयूर फूलदान।",
      "kn": "कर्नाटक के बीदर की प्रसिद्ध बिदरीवेयर कला, शुद्ध चांदी के तारों से जड़ित सुंदर मयूर फूलदान।",
      "ta": "कर्नाटक के बीदर की प्रसिद्ध बिदरीवेयर कला, शुद्ध चांदी के तारों से जड़ित सुंदर मयूर फूलदान।"
    },
    "culturalHeritageStory": {
      "en": "500-year-old Bahmani metallurgical craft oxidized to pitch black using historic Bidar fort clay.",
      "hi": "500-year-old Bahmani metallurgical craft oxidized to pitch black using historic Bidar fort clay.",
      "kn": "500-year-old Bahmani metallurgical craft oxidized to pitch black using historic Bidar fort clay.",
      "ta": "500-year-old Bahmani metallurgical craft oxidized to pitch black using historic Bidar fort clay."
    },
    "materialsUsed": {
      "en": "Zinc-copper alloy, pure 99.9% silver inlay wire, Bidar fort soil oxidation paste",
      "hi": "Zinc-copper alloy, pure 99.9% silver inlay wire, Bidar fort soil oxidation paste",
      "kn": "Zinc-copper alloy, pure 99.9% silver inlay wire, Bidar fort soil oxidation paste",
      "ta": "Zinc-copper alloy, pure 99.9% silver inlay wire, Bidar fort soil oxidation paste"
    },
    "dimensions": {
      "en": "8.5 x 4 inches",
      "hi": "8.5 x 4 इंच",
      "kn": "8.5 x 4 ಇಂಚು",
      "ta": "8.5 x 4 அங்குலம்"
    },
    "craftCategory": "Bidriware Metalcraft",
    "giCraftRegion": "Bidriware (Karnataka)"
  },
  "bidriware pure silver inlay peacock flower vase": {
    "title": {
      "en": "Bidriware Pure Silver Inlay Peacock Flower Vase",
      "hi": "बिदरीवेयर शुद्ध चांदी जड़ित मयूर फूलदान",
      "kn": "ಬಿದ್ರಿ ಕಲೆ Pure ಬೆಳ್ಳಿ ಕೆತ್ತನೆ Peacock Flower Vase",
      "ta": "பித்ரிவேர் Pure வெள்ளி வேலைப்பாடு Peacock Flower Vase"
    },
    "description": {
      "en": "500-year-old Bahmani metallurgical craft oxidized to pitch black using historic Bidar fort clay, inlaid with pure silver wires.",
      "hi": "कर्नाटक के बीदर की प्रसिद्ध बिदरीवेयर कला, शुद्ध चांदी के तारों से जड़ित सुंदर मयूर फूलदान।",
      "kn": "कर्नाटक के बीदर की प्रसिद्ध बिदरीवेयर कला, शुद्ध चांदी के तारों से जड़ित सुंदर मयूर फूलदान।",
      "ta": "कर्नाटक के बीदर की प्रसिद्ध बिदरीवेयर कला, शुद्ध चांदी के तारों से जड़ित सुंदर मयूर फूलदान।"
    },
    "culturalHeritageStory": {
      "en": "500-year-old Bahmani metallurgical craft oxidized to pitch black using historic Bidar fort clay.",
      "hi": "500-year-old Bahmani metallurgical craft oxidized to pitch black using historic Bidar fort clay.",
      "kn": "500-year-old Bahmani metallurgical craft oxidized to pitch black using historic Bidar fort clay.",
      "ta": "500-year-old Bahmani metallurgical craft oxidized to pitch black using historic Bidar fort clay."
    },
    "materialsUsed": {
      "en": "Zinc-copper alloy, pure 99.9% silver inlay wire, Bidar fort soil oxidation paste",
      "hi": "Zinc-copper alloy, pure 99.9% silver inlay wire, Bidar fort soil oxidation paste",
      "kn": "Zinc-copper alloy, pure 99.9% silver inlay wire, Bidar fort soil oxidation paste",
      "ta": "Zinc-copper alloy, pure 99.9% silver inlay wire, Bidar fort soil oxidation paste"
    },
    "dimensions": {
      "en": "8.5 x 4 inches",
      "hi": "8.5 x 4 इंच",
      "kn": "8.5 x 4 ಇಂಚು",
      "ta": "8.5 x 4 அங்குலம்"
    },
    "craftCategory": "Bidriware Metalcraft",
    "giCraftRegion": "Bidriware (Karnataka)"
  },
  "cmtvoiupd003x9e66y476zsh6": {
    "title": {
      "en": "Bidriware Handcrafted Silver Inlay Cufflink Set",
      "hi": "बिदरीवेयर चांदी जड़ित कफ़लिंक सेट",
      "kn": "ಬಿದ್ರಿ ಕಲೆ ಹಸ್ತನಿರ್ಮಿತ ಬೆಳ್ಳಿ ಕೆತ್ತನೆ Cufflink Set",
      "ta": "பித்ரிவேர் கைவினை வெள்ளி வேலைப்பாடு Cufflink Set"
    },
    "description": {
      "en": "Refined menswear luxury accessory featuring geometric silver inlay starbursts on a permanent matte black background.",
      "hi": "बिदरीवेयर चांदी जड़ित कफ़लिंक सेट, काले धातु पर चांदी की शुद्ध चमक का सुंदर मेल।",
      "kn": "बिदरीवेयर चांदी जड़ित कफ़लिंक सेट, काले धातु पर चांदी की शुद्ध चमक का सुंदर मेल।",
      "ta": "बिदरीवेयर चांदी जड़ित कफ़लिंक सेट, काले धातु पर चांदी की शुद्ध चमक का सुंदर मेल।"
    },
    "culturalHeritageStory": {
      "en": "Sleek luxury menswear accessory hand-inlaid with starburst geometric silver wires.",
      "hi": "Sleek luxury menswear accessory hand-inlaid with starburst geometric silver wires.",
      "kn": "Sleek luxury menswear accessory hand-inlaid with starburst geometric silver wires.",
      "ta": "Sleek luxury menswear accessory hand-inlaid with starburst geometric silver wires."
    },
    "materialsUsed": {
      "en": "Blackened zinc alloy, pure fine silver wire inlay, stainless steel swivel posts",
      "hi": "Blackened zinc alloy, pure fine silver wire inlay, stainless steel swivel posts",
      "kn": "Blackened zinc alloy, pure fine silver wire inlay, stainless steel swivel posts",
      "ta": "Blackened zinc alloy, pure fine silver wire inlay, stainless steel swivel posts"
    },
    "dimensions": {
      "en": "0.75 inches diameter",
      "hi": "0.75 इंच व्यास",
      "kn": "0.75 ಇಂಚು ವ್ಯಾಸ",
      "ta": "0.75 அங்குலம் விட்டம்"
    },
    "craftCategory": "Bidriware Metalcraft",
    "giCraftRegion": "Bidriware (Karnataka)"
  },
  "bidriware handcrafted silver inlay cufflink set": {
    "title": {
      "en": "Bidriware Handcrafted Silver Inlay Cufflink Set",
      "hi": "बिदरीवेयर चांदी जड़ित कफ़लिंक सेट",
      "kn": "ಬಿದ್ರಿ ಕಲೆ ಹಸ್ತನಿರ್ಮಿತ ಬೆಳ್ಳಿ ಕೆತ್ತನೆ Cufflink Set",
      "ta": "பித்ரிவேர் கைவினை வெள்ளி வேலைப்பாடு Cufflink Set"
    },
    "description": {
      "en": "Refined menswear luxury accessory featuring geometric silver inlay starbursts on a permanent matte black background.",
      "hi": "बिदरीवेयर चांदी जड़ित कफ़लिंक सेट, काले धातु पर चांदी की शुद्ध चमक का सुंदर मेल।",
      "kn": "बिदरीवेयर चांदी जड़ित कफ़लिंक सेट, काले धातु पर चांदी की शुद्ध चमक का सुंदर मेल।",
      "ta": "बिदरीवेयर चांदी जड़ित कफ़लिंक सेट, काले धातु पर चांदी की शुद्ध चमक का सुंदर मेल।"
    },
    "culturalHeritageStory": {
      "en": "Sleek luxury menswear accessory hand-inlaid with starburst geometric silver wires.",
      "hi": "Sleek luxury menswear accessory hand-inlaid with starburst geometric silver wires.",
      "kn": "Sleek luxury menswear accessory hand-inlaid with starburst geometric silver wires.",
      "ta": "Sleek luxury menswear accessory hand-inlaid with starburst geometric silver wires."
    },
    "materialsUsed": {
      "en": "Blackened zinc alloy, pure fine silver wire inlay, stainless steel swivel posts",
      "hi": "Blackened zinc alloy, pure fine silver wire inlay, stainless steel swivel posts",
      "kn": "Blackened zinc alloy, pure fine silver wire inlay, stainless steel swivel posts",
      "ta": "Blackened zinc alloy, pure fine silver wire inlay, stainless steel swivel posts"
    },
    "dimensions": {
      "en": "0.75 inches diameter",
      "hi": "0.75 इंच व्यास",
      "kn": "0.75 ಇಂಚು ವ್ಯಾಸ",
      "ta": "0.75 அங்குலம் விட்டம்"
    },
    "craftCategory": "Bidriware Metalcraft",
    "giCraftRegion": "Bidriware (Karnataka)"
  },
  "cmtvoiupi003z9e668b50gjs1": {
    "title": {
      "en": "Bidriware Floral Coaster Set with Velvet Base (4 Pcs)",
      "hi": "बिदरीवेयर चांदी इनले कोस्टर (4 पीस)",
      "kn": "ಬಿದ್ರಿ ಕಲೆ Floral ಕೋಸ್ಟರ್ Set with Velvet Base (4 Pcs)",
      "ta": "பித்ரிவேர் Floral கோஸ்டர் Set with Velvet Base (4 Pcs)"
    },
    "description": {
      "en": "Non-tarnishing blackened metal coasters inlaid with delicate floral silver tendrils that contrast against the deep black body.",
      "hi": "बिदरीवेयर फ्लोरल चांदी इनले कोस्टर (4 पीस), मेज के लिए कभी धूमिल न पड़ने वाला शाही धातु शिल्प।",
      "kn": "बिदरीवेयर फ्लोरल चांदी इनले कोस्टर (4 पीस), मेज के लिए कभी धूमिल न पड़ने वाला शाही धातु शिल्प।",
      "ta": "बिदरीवेयर फ्लोरल चांदी इनले कोस्टर (4 पीस), मेज के लिए कभी धूमिल न पड़ने वाला शाही धातु शिल्प।"
    },
    "culturalHeritageStory": {
      "en": "Tarnishing-free blackened metal contrast with delicate floral silver tendrils.",
      "hi": "Tarnishing-free blackened metal contrast with delicate floral silver tendrils.",
      "kn": "Tarnishing-free blackened metal contrast with delicate floral silver tendrils.",
      "ta": "Tarnishing-free blackened metal contrast with delicate floral silver tendrils."
    },
    "materialsUsed": {
      "en": "Zinc alloy base, pure silver sheet inlay, protective velvet bottom",
      "hi": "Zinc alloy base, pure silver sheet inlay, protective velvet bottom",
      "kn": "Zinc alloy base, pure silver sheet inlay, protective velvet bottom",
      "ta": "Zinc alloy base, pure silver sheet inlay, protective velvet bottom"
    },
    "dimensions": {
      "en": "3.75 inches diameter each",
      "hi": "3.75 इंच व्यास प्रत्येक",
      "kn": "3.75 ಇಂಚು ವ್ಯಾಸ ಪ್ರತಿಯೊಂದು",
      "ta": "3.75 அங்குலம் விட்டம் ஒவ்வொன்றும்"
    },
    "craftCategory": "Bidriware Metalcraft",
    "giCraftRegion": "Bidriware (Karnataka)"
  },
  "bidriware floral coaster set with velvet base (4 pcs)": {
    "title": {
      "en": "Bidriware Floral Coaster Set with Velvet Base (4 Pcs)",
      "hi": "बिदरीवेयर चांदी इनले कोस्टर (4 पीस)",
      "kn": "ಬಿದ್ರಿ ಕಲೆ Floral ಕೋಸ್ಟರ್ Set with Velvet Base (4 Pcs)",
      "ta": "பித்ரிவேர் Floral கோஸ்டர் Set with Velvet Base (4 Pcs)"
    },
    "description": {
      "en": "Non-tarnishing blackened metal coasters inlaid with delicate floral silver tendrils that contrast against the deep black body.",
      "hi": "बिदरीवेयर फ्लोरल चांदी इनले कोस्टर (4 पीस), मेज के लिए कभी धूमिल न पड़ने वाला शाही धातु शिल्प।",
      "kn": "बिदरीवेयर फ्लोरल चांदी इनले कोस्टर (4 पीस), मेज के लिए कभी धूमिल न पड़ने वाला शाही धातु शिल्प।",
      "ta": "बिदरीवेयर फ्लोरल चांदी इनले कोस्टर (4 पीस), मेज के लिए कभी धूमिल न पड़ने वाला शाही धातु शिल्प।"
    },
    "culturalHeritageStory": {
      "en": "Tarnishing-free blackened metal contrast with delicate floral silver tendrils.",
      "hi": "Tarnishing-free blackened metal contrast with delicate floral silver tendrils.",
      "kn": "Tarnishing-free blackened metal contrast with delicate floral silver tendrils.",
      "ta": "Tarnishing-free blackened metal contrast with delicate floral silver tendrils."
    },
    "materialsUsed": {
      "en": "Zinc alloy base, pure silver sheet inlay, protective velvet bottom",
      "hi": "Zinc alloy base, pure silver sheet inlay, protective velvet bottom",
      "kn": "Zinc alloy base, pure silver sheet inlay, protective velvet bottom",
      "ta": "Zinc alloy base, pure silver sheet inlay, protective velvet bottom"
    },
    "dimensions": {
      "en": "3.75 inches diameter each",
      "hi": "3.75 इंच व्यास प्रत्येक",
      "kn": "3.75 ಇಂಚು ವ್ಯಾಸ ಪ್ರತಿಯೊಂದು",
      "ta": "3.75 அங்குலம் விட்டம் ஒவ்வொன்றும்"
    },
    "craftCategory": "Bidriware Metalcraft",
    "giCraftRegion": "Bidriware (Karnataka)"
  },
  "cmtvoiupl00419e66o25eg6ca": {
    "title": {
      "en": "Bidriware Paper Weight with Ashoka Chakra Inlay",
      "hi": "बिदरीवेयर अशोक चक्र पेपरवेट",
      "kn": "ಬಿದ್ರಿ ಕಲೆ Paper Weight with Ashoka Chakra ಕೆತ್ತನೆ",
      "ta": "பித்ரிவேர் Paper Weight with Ashoka Chakra வேலைப்பாடு"
    },
    "description": {
      "en": "Executive desk showpiece celebrating Indian sovereign heritage with meticulously inlaid 24-spoke silver Dharma Chakra.",
      "hi": "बिदरीवेयर अशोक चक्र पेपरवेट, शुद्ध चांदी की 24 तीलियों की तार जड़ाई से अलंकृत।",
      "kn": "बिदरीवेयर अशोक चक्र पेपरवेट, शुद्ध चांदी की 24 तीलियों की तार जड़ाई से अलंकृत।",
      "ta": "बिदरीवेयर अशोक चक्र पेपरवेट, शुद्ध चांदी की 24 तीलियों की तार जड़ाई से अलंकृत।"
    },
    "culturalHeritageStory": {
      "en": "Dignified executive desk piece with hand-hammered 24-spoke silver emblem.",
      "hi": "Dignified executive desk piece with hand-hammered 24-spoke silver emblem.",
      "kn": "Dignified executive desk piece with hand-hammered 24-spoke silver emblem.",
      "ta": "Dignified executive desk piece with hand-hammered 24-spoke silver emblem."
    },
    "materialsUsed": {
      "en": "Solid zinc alloy, 24-spoke pure silver wire inlay, Bidar clay patina",
      "hi": "Solid zinc alloy, 24-spoke pure silver wire inlay, Bidar clay patina",
      "kn": "Solid zinc alloy, 24-spoke pure silver wire inlay, Bidar clay patina",
      "ta": "Solid zinc alloy, 24-spoke pure silver wire inlay, Bidar clay patina"
    },
    "dimensions": {
      "en": "3 x 3 inches",
      "hi": "3 x 3 इंच",
      "kn": "3 x 3 ಇಂಚು",
      "ta": "3 x 3 அங்குலம்"
    },
    "craftCategory": "Bidriware Metalcraft",
    "giCraftRegion": "Bidriware (Karnataka)"
  },
  "bidriware paper weight with ashoka chakra inlay": {
    "title": {
      "en": "Bidriware Paper Weight with Ashoka Chakra Inlay",
      "hi": "बिदरीवेयर अशोक चक्र पेपरवेट",
      "kn": "ಬಿದ್ರಿ ಕಲೆ Paper Weight with Ashoka Chakra ಕೆತ್ತನೆ",
      "ta": "பித்ரிவேர் Paper Weight with Ashoka Chakra வேலைப்பாடு"
    },
    "description": {
      "en": "Executive desk showpiece celebrating Indian sovereign heritage with meticulously inlaid 24-spoke silver Dharma Chakra.",
      "hi": "बिदरीवेयर अशोक चक्र पेपरवेट, शुद्ध चांदी की 24 तीलियों की तार जड़ाई से अलंकृत।",
      "kn": "बिदरीवेयर अशोक चक्र पेपरवेट, शुद्ध चांदी की 24 तीलियों की तार जड़ाई से अलंकृत।",
      "ta": "बिदरीवेयर अशोक चक्र पेपरवेट, शुद्ध चांदी की 24 तीलियों की तार जड़ाई से अलंकृत।"
    },
    "culturalHeritageStory": {
      "en": "Dignified executive desk piece with hand-hammered 24-spoke silver emblem.",
      "hi": "Dignified executive desk piece with hand-hammered 24-spoke silver emblem.",
      "kn": "Dignified executive desk piece with hand-hammered 24-spoke silver emblem.",
      "ta": "Dignified executive desk piece with hand-hammered 24-spoke silver emblem."
    },
    "materialsUsed": {
      "en": "Solid zinc alloy, 24-spoke pure silver wire inlay, Bidar clay patina",
      "hi": "Solid zinc alloy, 24-spoke pure silver wire inlay, Bidar clay patina",
      "kn": "Solid zinc alloy, 24-spoke pure silver wire inlay, Bidar clay patina",
      "ta": "Solid zinc alloy, 24-spoke pure silver wire inlay, Bidar clay patina"
    },
    "dimensions": {
      "en": "3 x 3 inches",
      "hi": "3 x 3 इंच",
      "kn": "3 x 3 ಇಂಚು",
      "ta": "3 x 3 அங்குலம்"
    },
    "craftCategory": "Bidriware Metalcraft",
    "giCraftRegion": "Bidriware (Karnataka)"
  },
  "cmtvoiupq00439e66rr94xl3m": {
    "title": {
      "en": "Bidriware Card Holder and Business Wallet",
      "hi": "बिदरीवेयर कार्ड धारक बॉक्स",
      "kn": "ಬಿದ್ರಿ ಕಲೆ Card Holder and Business ವಾಲೆಟ್",
      "ta": "பித்ரிவேர் Card Holder and Business பணப்பை"
    },
    "description": {
      "en": "Pocket business accessory commemorating royal Deccan craftsmanship with non-fading jet black and radiant silver contrast.",
      "hi": "बिदरीवेयर विज़िटिंग कार्ड धारक बॉक्स, बीदर की शाही विरासत का प्रतीक।",
      "kn": "बिदरीवेयर विज़िटिंग कार्ड धारक बॉक्स, बीदर की शाही विरासत का प्रतीक।",
      "ta": "बिदरीवेयर विज़िटिंग कार्ड धारक बॉक्स, बीदर की शाही विरासत का प्रतीक।"
    },
    "culturalHeritageStory": {
      "en": "Pocket-sized artisan case celebrating centuries of royal Deccan metallurgical heritage.",
      "hi": "Pocket-sized artisan case celebrating centuries of royal Deccan metallurgical heritage.",
      "kn": "Pocket-sized artisan case celebrating centuries of royal Deccan metallurgical heritage.",
      "ta": "Pocket-sized artisan case celebrating centuries of royal Deccan metallurgical heritage."
    },
    "materialsUsed": {
      "en": "Zinc-copper alloy, pure silver floral inlay wire, spring clasp",
      "hi": "Zinc-copper alloy, pure silver floral inlay wire, spring clasp",
      "kn": "Zinc-copper alloy, pure silver floral inlay wire, spring clasp",
      "ta": "Zinc-copper alloy, pure silver floral inlay wire, spring clasp"
    },
    "dimensions": {
      "en": "4 x 2.5 inches",
      "hi": "4 x 2.5 इंच",
      "kn": "4 x 2.5 ಇಂಚು",
      "ta": "4 x 2.5 அங்குலம்"
    },
    "craftCategory": "Bidriware Metalcraft",
    "giCraftRegion": "Bidriware (Karnataka)"
  },
  "bidriware card holder and business wallet": {
    "title": {
      "en": "Bidriware Card Holder and Business Wallet",
      "hi": "बिदरीवेयर कार्ड धारक बॉक्स",
      "kn": "ಬಿದ್ರಿ ಕಲೆ Card Holder and Business ವಾಲೆಟ್",
      "ta": "பித்ரிவேர் Card Holder and Business பணப்பை"
    },
    "description": {
      "en": "Pocket business accessory commemorating royal Deccan craftsmanship with non-fading jet black and radiant silver contrast.",
      "hi": "बिदरीवेयर विज़िटिंग कार्ड धारक बॉक्स, बीदर की शाही विरासत का प्रतीक।",
      "kn": "बिदरीवेयर विज़िटिंग कार्ड धारक बॉक्स, बीदर की शाही विरासत का प्रतीक।",
      "ta": "बिदरीवेयर विज़िटिंग कार्ड धारक बॉक्स, बीदर की शाही विरासत का प्रतीक।"
    },
    "culturalHeritageStory": {
      "en": "Pocket-sized artisan case celebrating centuries of royal Deccan metallurgical heritage.",
      "hi": "Pocket-sized artisan case celebrating centuries of royal Deccan metallurgical heritage.",
      "kn": "Pocket-sized artisan case celebrating centuries of royal Deccan metallurgical heritage.",
      "ta": "Pocket-sized artisan case celebrating centuries of royal Deccan metallurgical heritage."
    },
    "materialsUsed": {
      "en": "Zinc-copper alloy, pure silver floral inlay wire, spring clasp",
      "hi": "Zinc-copper alloy, pure silver floral inlay wire, spring clasp",
      "kn": "Zinc-copper alloy, pure silver floral inlay wire, spring clasp",
      "ta": "Zinc-copper alloy, pure silver floral inlay wire, spring clasp"
    },
    "dimensions": {
      "en": "4 x 2.5 inches",
      "hi": "4 x 2.5 इंच",
      "kn": "4 x 2.5 ಇಂಚು",
      "ta": "4 x 2.5 அங்குலம்"
    },
    "craftCategory": "Bidriware Metalcraft",
    "giCraftRegion": "Bidriware (Karnataka)"
  },
  "cmtvoiupt00459e66ubitt4mu": {
    "title": {
      "en": "Bidriware Miniature Hookah Decorative Showpiece",
      "hi": "बिदरीवेयर लघु हुक्का शोपीस",
      "kn": "ಬಿದ್ರಿ ಕಲೆ Miniature Hookah Decorative Showpiece",
      "ta": "பித்ரிவேர் Miniature Hookah Decorative Showpiece"
    },
    "description": {
      "en": "Collectible curios recalling the Nawabi courts of Hyderabad and Bidar, detailed with silver creepers.",
      "hi": "बिदरीवेयर लघु हुक्का शोपीस, दक्कन के नवाबों की सांस्कृतिक भव्यता का परिचायक।",
      "kn": "बिदरीवेयर लघु हुक्का शोपीस, दक्कन के नवाबों की सांस्कृतिक भव्यता का परिचायक।",
      "ta": "बिदरीवेयर लघु हुक्का शोपीस, दक्कन के नवाबों की सांस्कृतिक भव्यता का परिचायक।"
    },
    "culturalHeritageStory": {
      "en": "Collector curiosity recalling Nawabi courts of Bidar and Hyderabad.",
      "hi": "Collector curiosity recalling Nawabi courts of Bidar and Hyderabad.",
      "kn": "Collector curiosity recalling Nawabi courts of Bidar and Hyderabad.",
      "ta": "Collector curiosity recalling Nawabi courts of Bidar and Hyderabad."
    },
    "materialsUsed": {
      "en": "Cast zinc metal, pure silver inlay wire, Bidar fort soil oxide",
      "hi": "Cast zinc metal, pure silver inlay wire, Bidar fort soil oxide",
      "kn": "Cast zinc metal, pure silver inlay wire, Bidar fort soil oxide",
      "ta": "Cast zinc metal, pure silver inlay wire, Bidar fort soil oxide"
    },
    "dimensions": {
      "en": "7 x 3.5 inches",
      "hi": "7 x 3.5 इंच",
      "kn": "7 x 3.5 ಇಂಚು",
      "ta": "7 x 3.5 அங்குலம்"
    },
    "craftCategory": "Bidriware Metalcraft",
    "giCraftRegion": "Bidriware (Karnataka)"
  },
  "bidriware miniature hookah decorative showpiece": {
    "title": {
      "en": "Bidriware Miniature Hookah Decorative Showpiece",
      "hi": "बिदरीवेयर लघु हुक्का शोपीस",
      "kn": "ಬಿದ್ರಿ ಕಲೆ Miniature Hookah Decorative Showpiece",
      "ta": "பித்ரிவேர் Miniature Hookah Decorative Showpiece"
    },
    "description": {
      "en": "Collectible curios recalling the Nawabi courts of Hyderabad and Bidar, detailed with silver creepers.",
      "hi": "बिदरीवेयर लघु हुक्का शोपीस, दक्कन के नवाबों की सांस्कृतिक भव्यता का परिचायक।",
      "kn": "बिदरीवेयर लघु हुक्का शोपीस, दक्कन के नवाबों की सांस्कृतिक भव्यता का परिचायक।",
      "ta": "बिदरीवेयर लघु हुक्का शोपीस, दक्कन के नवाबों की सांस्कृतिक भव्यता का परिचायक।"
    },
    "culturalHeritageStory": {
      "en": "Collector curiosity recalling Nawabi courts of Bidar and Hyderabad.",
      "hi": "Collector curiosity recalling Nawabi courts of Bidar and Hyderabad.",
      "kn": "Collector curiosity recalling Nawabi courts of Bidar and Hyderabad.",
      "ta": "Collector curiosity recalling Nawabi courts of Bidar and Hyderabad."
    },
    "materialsUsed": {
      "en": "Cast zinc metal, pure silver inlay wire, Bidar fort soil oxide",
      "hi": "Cast zinc metal, pure silver inlay wire, Bidar fort soil oxide",
      "kn": "Cast zinc metal, pure silver inlay wire, Bidar fort soil oxide",
      "ta": "Cast zinc metal, pure silver inlay wire, Bidar fort soil oxide"
    },
    "dimensions": {
      "en": "7 x 3.5 inches",
      "hi": "7 x 3.5 इंच",
      "kn": "7 x 3.5 ಇಂಚು",
      "ta": "7 x 3.5 அங்குலம்"
    },
    "craftCategory": "Bidriware Metalcraft",
    "giCraftRegion": "Bidriware (Karnataka)"
  },
  "cmtvoiupx00479e66z538zb3g": {
    "title": {
      "en": "Bidriware Trinket Jar with Star Inlay Knob",
      "hi": "बिदरीवेयर चांदी जड़ित डिब्बी",
      "kn": "ಬಿದ್ರಿ ಕಲೆ Trinket Jar with Star ಕೆತ್ತನೆ Knob",
      "ta": "பித்ரிவேர் Trinket Jar with Star வேலைப்பாடு Knob"
    },
    "description": {
      "en": "Heirloom keepsake box whose matte black finish and silver floral stars never rust, peel, or lose luster.",
      "hi": "बिदरीवेयर चांदी जड़ित डिब्बी, टिकाऊ और कालातीत सुंदरता से युक्त।",
      "kn": "बिदरीवेयर चांदी जड़ित डिब्बी, टिकाऊ और कालातीत सुंदरता से युक्त।",
      "ta": "बिदरीवेयर चांदी जड़ित डिब्बी, टिकाऊ और कालातीत सुंदरता से युक्त।"
    },
    "culturalHeritageStory": {
      "en": "Heirloom keepsake box that never loses its lustrous matte black contrast.",
      "hi": "Heirloom keepsake box that never loses its lustrous matte black contrast.",
      "kn": "Heirloom keepsake box that never loses its lustrous matte black contrast.",
      "ta": "Heirloom keepsake box that never loses its lustrous matte black contrast."
    },
    "materialsUsed": {
      "en": "Zinc-copper alloy, pure silver inlay wire, Bidar clay finish",
      "hi": "Zinc-copper alloy, pure silver inlay wire, Bidar clay finish",
      "kn": "Zinc-copper alloy, pure silver inlay wire, Bidar clay finish",
      "ta": "Zinc-copper alloy, pure silver inlay wire, Bidar clay finish"
    },
    "dimensions": {
      "en": "3.5 x 3.5 inches",
      "hi": "3.5 x 3.5 इंच",
      "kn": "3.5 x 3.5 ಇಂಚು",
      "ta": "3.5 x 3.5 அங்குலம்"
    },
    "craftCategory": "Bidriware Metalcraft",
    "giCraftRegion": "Bidriware (Karnataka)"
  },
  "bidriware trinket jar with star inlay knob": {
    "title": {
      "en": "Bidriware Trinket Jar with Star Inlay Knob",
      "hi": "बिदरीवेयर चांदी जड़ित डिब्बी",
      "kn": "ಬಿದ್ರಿ ಕಲೆ Trinket Jar with Star ಕೆತ್ತನೆ Knob",
      "ta": "பித்ரிவேர் Trinket Jar with Star வேலைப்பாடு Knob"
    },
    "description": {
      "en": "Heirloom keepsake box whose matte black finish and silver floral stars never rust, peel, or lose luster.",
      "hi": "बिदरीवेयर चांदी जड़ित डिब्बी, टिकाऊ और कालातीत सुंदरता से युक्त।",
      "kn": "बिदरीवेयर चांदी जड़ित डिब्बी, टिकाऊ और कालातीत सुंदरता से युक्त।",
      "ta": "बिदरीवेयर चांदी जड़ित डिब्बी, टिकाऊ और कालातीत सुंदरता से युक्त।"
    },
    "culturalHeritageStory": {
      "en": "Heirloom keepsake box that never loses its lustrous matte black contrast.",
      "hi": "Heirloom keepsake box that never loses its lustrous matte black contrast.",
      "kn": "Heirloom keepsake box that never loses its lustrous matte black contrast.",
      "ta": "Heirloom keepsake box that never loses its lustrous matte black contrast."
    },
    "materialsUsed": {
      "en": "Zinc-copper alloy, pure silver inlay wire, Bidar clay finish",
      "hi": "Zinc-copper alloy, pure silver inlay wire, Bidar clay finish",
      "kn": "Zinc-copper alloy, pure silver inlay wire, Bidar clay finish",
      "ta": "Zinc-copper alloy, pure silver inlay wire, Bidar clay finish"
    },
    "dimensions": {
      "en": "3.5 x 3.5 inches",
      "hi": "3.5 x 3.5 इंच",
      "kn": "3.5 x 3.5 ಇಂಚು",
      "ta": "3.5 x 3.5 அங்குலம்"
    },
    "craftCategory": "Bidriware Metalcraft",
    "giCraftRegion": "Bidriware (Karnataka)"
  },
  "cmtvoiuq100499e66ust88oa5": {
    "title": {
      "en": "Agra Pietra Dura Marble Inlay Coaster Set with Wooden Box (6 Pcs)",
      "hi": "आगरा संगमरमर पिएत्रा ड्यूरा कोस्टर सेट (6 पीस)",
      "kn": "Agra Pietra Dura ಅಮೃತಶಿಲೆ ಕೆತ್ತನೆ ಕೋಸ್ಟರ್ Set with ಮರದ ಪೆಟ್ಟಿಗೆ (6 Pcs)",
      "ta": "Agra Pietra Dura பளிங்கு வேலைப்பாடு கோஸ்டர் Set with மர பெட்டி (6 Pcs)"
    },
    "description": {
      "en": "Direct descendants of Taj Mahal artisans embedding precision hand-sliced semi-precious gems into Makrana marble recesses.",
      "hi": "आगरा के संगमरमर शिल्पकारों द्वारा मकराना मार्बल में लाजवर्त और गोमेद रत्नों की पिएत्रा ड्यूरा जड़ाई (6 कोस्टर सेट)।",
      "kn": "आगरा के संगमरमर शिल्पकारों द्वारा मकराना मार्बल में लाजवर्त और गोमेद रत्नों की पिएत्रा ड्यूरा जड़ाई (6 कोस्टर सेट)।",
      "ta": "आगरा के संगमरमर शिल्पकारों द्वारा मकराना मार्बल में लाजवर्त और गोमेद रत्नों की पिएत्रा ड्यूरा जड़ाई (6 कोस्टर सेट)।"
    },
    "culturalHeritageStory": {
      "en": "Direct lineage descendants of Taj Mahal artisans embedding semi-precious gems in Makrana marble.",
      "hi": "Direct lineage descendants of Taj Mahal artisans embedding semi-precious gems in Makrana marble.",
      "kn": "Direct lineage descendants of Taj Mahal artisans embedding semi-precious gems in Makrana marble.",
      "ta": "Direct lineage descendants of Taj Mahal artisans embedding semi-precious gems in Makrana marble."
    },
    "materialsUsed": {
      "en": "Makrana white marble, semi-precious stones (Lapis Lazuli, Malachite, Jasper, Carnelian)",
      "hi": "Makrana white marble, semi-precious stones (Lapis Lazuli, Malachite, Jasper, Carnelian)",
      "kn": "Makrana white marble, semi-precious stones (Lapis Lazuli, Malachite, Jasper, Carnelian)",
      "ta": "Makrana white marble, semi-precious stones (Lapis Lazuli, Malachite, Jasper, Carnelian)"
    },
    "dimensions": {
      "en": "4 inches diameter each",
      "hi": "4 इंच व्यास प्रत्येक",
      "kn": "4 ಇಂಚು ವ್ಯಾಸ ಪ್ರತಿಯೊಂದು",
      "ta": "4 அங்குலம் விட்டம் ஒவ்வொன்றும்"
    },
    "craftCategory": "Stone Carving",
    "giCraftRegion": "Agra Marble Inlay (Uttar Pradesh)"
  },
  "agra pietra dura marble inlay coaster set with wooden box (6 pcs)": {
    "title": {
      "en": "Agra Pietra Dura Marble Inlay Coaster Set with Wooden Box (6 Pcs)",
      "hi": "आगरा संगमरमर पिएत्रा ड्यूरा कोस्टर सेट (6 पीस)",
      "kn": "Agra Pietra Dura ಅಮೃತಶಿಲೆ ಕೆತ್ತನೆ ಕೋಸ್ಟರ್ Set with ಮರದ ಪೆಟ್ಟಿಗೆ (6 Pcs)",
      "ta": "Agra Pietra Dura பளிங்கு வேலைப்பாடு கோஸ்டர் Set with மர பெட்டி (6 Pcs)"
    },
    "description": {
      "en": "Direct descendants of Taj Mahal artisans embedding precision hand-sliced semi-precious gems into Makrana marble recesses.",
      "hi": "आगरा के संगमरमर शिल्पकारों द्वारा मकराना मार्बल में लाजवर्त और गोमेद रत्नों की पिएत्रा ड्यूरा जड़ाई (6 कोस्टर सेट)।",
      "kn": "आगरा के संगमरमर शिल्पकारों द्वारा मकराना मार्बल में लाजवर्त और गोमेद रत्नों की पिएत्रा ड्यूरा जड़ाई (6 कोस्टर सेट)।",
      "ta": "आगरा के संगमरमर शिल्पकारों द्वारा मकराना मार्बल में लाजवर्त और गोमेद रत्नों की पिएत्रा ड्यूरा जड़ाई (6 कोस्टर सेट)।"
    },
    "culturalHeritageStory": {
      "en": "Direct lineage descendants of Taj Mahal artisans embedding semi-precious gems in Makrana marble.",
      "hi": "Direct lineage descendants of Taj Mahal artisans embedding semi-precious gems in Makrana marble.",
      "kn": "Direct lineage descendants of Taj Mahal artisans embedding semi-precious gems in Makrana marble.",
      "ta": "Direct lineage descendants of Taj Mahal artisans embedding semi-precious gems in Makrana marble."
    },
    "materialsUsed": {
      "en": "Makrana white marble, semi-precious stones (Lapis Lazuli, Malachite, Jasper, Carnelian)",
      "hi": "Makrana white marble, semi-precious stones (Lapis Lazuli, Malachite, Jasper, Carnelian)",
      "kn": "Makrana white marble, semi-precious stones (Lapis Lazuli, Malachite, Jasper, Carnelian)",
      "ta": "Makrana white marble, semi-precious stones (Lapis Lazuli, Malachite, Jasper, Carnelian)"
    },
    "dimensions": {
      "en": "4 inches diameter each",
      "hi": "4 इंच व्यास प्रत्येक",
      "kn": "4 ಇಂಚು ವ್ಯಾಸ ಪ್ರತಿಯೊಂದು",
      "ta": "4 அங்குலம் விட்டம் ஒவ்வொன்றும்"
    },
    "craftCategory": "Stone Carving",
    "giCraftRegion": "Agra Marble Inlay (Uttar Pradesh)"
  },
  "cmtvoiuqz004b9e66wem7kopd": {
    "title": {
      "en": "Hand-Carved Soapstone Tealight Candle Holder (Jali Lattice)",
      "hi": "हस्तनिर्मित सोपस्टोन जाली मोमबत्ती स्टैंड",
      "kn": "ಕೈಕೆತ್ತನೆಯ Soapstone Tealight Candle Holder (Jali Lattice)",
      "ta": "கைவேலைப்பாடு செதுக்கப்பட்ட Soapstone Tealight Candle Holder (Jali Lattice)"
    },
    "description": {
      "en": "Gorara soapstone carved with microscopic floral lattice creating starlight shadow projection when lit from within.",
      "hi": "हस्तनिर्मित सोपस्टोन जाली मोमबत्ती स्टैंड, मंद प्रकाश में तारों जैसी सुंदर छाया बिखेरता है।",
      "kn": "हस्तनिर्मित सोपस्टोन जाली मोमबत्ती स्टैंड, मंद प्रकाश में तारों जैसी सुंदर छाया बिखेरता है।",
      "ta": "हस्तनिर्मित सोपस्टोन जाली मोमबत्ती स्टैंड, मंद प्रकाश में तारों जैसी सुंदर छाया बिखेरता है।"
    },
    "culturalHeritageStory": {
      "en": "Gorara soapstone carved with microscopic floral lattice creating starlight shadow projection.",
      "hi": "Gorara soapstone carved with microscopic floral lattice creating starlight shadow projection.",
      "kn": "Gorara soapstone carved with microscopic floral lattice creating starlight shadow projection.",
      "ta": "Gorara soapstone carved with microscopic floral lattice creating starlight shadow projection."
    },
    "materialsUsed": {
      "en": "Natural soft Gorara soapstone, hand-chiseled pierced lattice",
      "hi": "Natural soft Gorara soapstone, hand-chiseled pierced lattice",
      "kn": "Natural soft Gorara soapstone, hand-chiseled pierced lattice",
      "ta": "Natural soft Gorara soapstone, hand-chiseled pierced lattice"
    },
    "dimensions": {
      "en": "4 x 3.5 inches",
      "hi": "4 x 3.5 इंच",
      "kn": "4 x 3.5 ಇಂಚು",
      "ta": "4 x 3.5 அங்குலம்"
    },
    "craftCategory": "Stone Carving",
    "giCraftRegion": "Agra Stone Carving (Uttar Pradesh)"
  },
  "hand-carved soapstone tealight candle holder (jali lattice)": {
    "title": {
      "en": "Hand-Carved Soapstone Tealight Candle Holder (Jali Lattice)",
      "hi": "हस्तनिर्मित सोपस्टोन जाली मोमबत्ती स्टैंड",
      "kn": "ಕೈಕೆತ್ತನೆಯ Soapstone Tealight Candle Holder (Jali Lattice)",
      "ta": "கைவேலைப்பாடு செதுக்கப்பட்ட Soapstone Tealight Candle Holder (Jali Lattice)"
    },
    "description": {
      "en": "Gorara soapstone carved with microscopic floral lattice creating starlight shadow projection when lit from within.",
      "hi": "हस्तनिर्मित सोपस्टोन जाली मोमबत्ती स्टैंड, मंद प्रकाश में तारों जैसी सुंदर छाया बिखेरता है।",
      "kn": "हस्तनिर्मित सोपस्टोन जाली मोमबत्ती स्टैंड, मंद प्रकाश में तारों जैसी सुंदर छाया बिखेरता है।",
      "ta": "हस्तनिर्मित सोपस्टोन जाली मोमबत्ती स्टैंड, मंद प्रकाश में तारों जैसी सुंदर छाया बिखेरता है।"
    },
    "culturalHeritageStory": {
      "en": "Gorara soapstone carved with microscopic floral lattice creating starlight shadow projection.",
      "hi": "Gorara soapstone carved with microscopic floral lattice creating starlight shadow projection.",
      "kn": "Gorara soapstone carved with microscopic floral lattice creating starlight shadow projection.",
      "ta": "Gorara soapstone carved with microscopic floral lattice creating starlight shadow projection."
    },
    "materialsUsed": {
      "en": "Natural soft Gorara soapstone, hand-chiseled pierced lattice",
      "hi": "Natural soft Gorara soapstone, hand-chiseled pierced lattice",
      "kn": "Natural soft Gorara soapstone, hand-chiseled pierced lattice",
      "ta": "Natural soft Gorara soapstone, hand-chiseled pierced lattice"
    },
    "dimensions": {
      "en": "4 x 3.5 inches",
      "hi": "4 x 3.5 इंच",
      "kn": "4 x 3.5 ಇಂಚು",
      "ta": "4 x 3.5 அங்குலம்"
    },
    "craftCategory": "Stone Carving",
    "giCraftRegion": "Agra Stone Carving (Uttar Pradesh)"
  },
  "cmtvoiur5004d9e661gibkd4f": {
    "title": {
      "en": "Mahabalipuram Hand-Sculpted Granite Ganesha Idol",
      "hi": "महाबलीपुरम ग्रेनाइट गणेश प्रतिमा",
      "kn": "महाबलीपुरम ग्रेनाइट गणेश प्रतिमा",
      "ta": "महाबलीपुरम ग्रेनाइट गणेश प्रतिमा"
    },
    "description": {
      "en": "Hand-sculpted granite idol following Pallava dynastic architectural canons with weathered granite durability.",
      "hi": "महाबलीपुरम के मूर्तिकारों द्वारा ठोस ग्रेनाइट पाषाण से तराशी गई भगवान गणेश की पल्लव शैली की प्रतिमा।",
      "kn": "महाबलीपुरम के मूर्तिकारों द्वारा ठोस ग्रेनाइट पाषाण से तराशी गई भगवान गणेश की पल्लव शैली की प्रतिमा।",
      "ta": "महाबलीपुरम के मूर्तिकारों द्वारा ठोस ग्रेनाइट पाषाण से तराशी गई भगवान गणेश की पल्लव शैली की प्रतिमा।"
    },
    "culturalHeritageStory": {
      "en": "Solid coastal granite hand-chiseled following Pallava sculptural traditions.",
      "hi": "Solid coastal granite hand-chiseled following Pallava sculptural traditions.",
      "kn": "Solid coastal granite hand-chiseled following Pallava sculptural traditions.",
      "ta": "Solid coastal granite hand-chiseled following Pallava sculptural traditions."
    },
    "materialsUsed": {
      "en": "Solid coastal Tamil Nadu gray granite, hand-chiseled finish",
      "hi": "Solid coastal Tamil Nadu gray granite, hand-chiseled finish",
      "kn": "Solid coastal Tamil Nadu gray granite, hand-chiseled finish",
      "ta": "Solid coastal Tamil Nadu gray granite, hand-chiseled finish"
    },
    "dimensions": {
      "en": "9 x 6 x 4 inches",
      "hi": "9 x 6 x 4 इंच",
      "kn": "9 x 6 x 4 ಇಂಚು",
      "ta": "9 x 6 x 4 அங்குலம்"
    },
    "craftCategory": "Stone Carving",
    "giCraftRegion": "Mahabalipuram Stone Carving (Tamil Nadu)"
  },
  "mahabalipuram hand-sculpted granite ganesha idol": {
    "title": {
      "en": "Mahabalipuram Hand-Sculpted Granite Ganesha Idol",
      "hi": "महाबलीपुरम ग्रेनाइट गणेश प्रतिमा",
      "kn": "महाबलीपुरम ग्रेनाइट गणेश प्रतिमा",
      "ta": "महाबलीपुरम ग्रेनाइट गणेश प्रतिमा"
    },
    "description": {
      "en": "Hand-sculpted granite idol following Pallava dynastic architectural canons with weathered granite durability.",
      "hi": "महाबलीपुरम के मूर्तिकारों द्वारा ठोस ग्रेनाइट पाषाण से तराशी गई भगवान गणेश की पल्लव शैली की प्रतिमा।",
      "kn": "महाबलीपुरम के मूर्तिकारों द्वारा ठोस ग्रेनाइट पाषाण से तराशी गई भगवान गणेश की पल्लव शैली की प्रतिमा।",
      "ta": "महाबलीपुरम के मूर्तिकारों द्वारा ठोस ग्रेनाइट पाषाण से तराशी गई भगवान गणेश की पल्लव शैली की प्रतिमा।"
    },
    "culturalHeritageStory": {
      "en": "Solid coastal granite hand-chiseled following Pallava sculptural traditions.",
      "hi": "Solid coastal granite hand-chiseled following Pallava sculptural traditions.",
      "kn": "Solid coastal granite hand-chiseled following Pallava sculptural traditions.",
      "ta": "Solid coastal granite hand-chiseled following Pallava sculptural traditions."
    },
    "materialsUsed": {
      "en": "Solid coastal Tamil Nadu gray granite, hand-chiseled finish",
      "hi": "Solid coastal Tamil Nadu gray granite, hand-chiseled finish",
      "kn": "Solid coastal Tamil Nadu gray granite, hand-chiseled finish",
      "ta": "Solid coastal Tamil Nadu gray granite, hand-chiseled finish"
    },
    "dimensions": {
      "en": "9 x 6 x 4 inches",
      "hi": "9 x 6 x 4 इंच",
      "kn": "9 x 6 x 4 ಇಂಚು",
      "ta": "9 x 6 x 4 அங்குலம்"
    },
    "craftCategory": "Stone Carving",
    "giCraftRegion": "Mahabalipuram Stone Carving (Tamil Nadu)"
  },
  "cmtvoiurb004f9e66q19grfkc": {
    "title": {
      "en": "Marble Inlay Octagonal Serving Plate (Lapis Floral Vine)",
      "hi": "संगमरमर इनले अष्टकोणीय सर्विंग प्लेट",
      "kn": "ಅಮೃತಶಿಲೆ ಕೆತ್ತನೆ Octagonal Serving ತಟ್ಟೆ (Lapis Floral Vine)",
      "ta": "பளிங்கு வேலைப்பாடு Octagonal Serving தட்டு (Lapis Floral Vine)"
    },
    "description": {
      "en": "Octagonal marble display plate inlaid with over 120 hand-shaped gemstone petals flush with the silky marble plane.",
      "hi": "मकराना सफेद संगमरमर अष्टकोणीय प्लेट, लाजवर्त और मैलाकाइट की बारीक पुष्प बेल जड़ाई सहित।",
      "kn": "मकराना सफेद संगमरमर अष्टकोणीय प्लेट, लाजवर्त और मैलाकाइट की बारीक पुष्प बेल जड़ाई सहित।",
      "ta": "मकराना सफेद संगमरमर अष्टकोणीय प्लेट, लाजवर्त और मैलाकाइट की बारीक पुष्प बेल जड़ाई सहित।"
    },
    "culturalHeritageStory": {
      "en": "Makrana white marble base inlaid with 120 precision-cut malachite and carnelian petals.",
      "hi": "Makrana white marble base inlaid with 120 precision-cut malachite and carnelian petals.",
      "kn": "Makrana white marble base inlaid with 120 precision-cut malachite and carnelian petals.",
      "ta": "Makrana white marble base inlaid with 120 precision-cut malachite and carnelian petals."
    },
    "materialsUsed": {
      "en": "Makrana white marble, genuine lapis lazuli and malachite inlay",
      "hi": "Makrana white marble, genuine lapis lazuli and malachite inlay",
      "kn": "Makrana white marble, genuine lapis lazuli and malachite inlay",
      "ta": "Makrana white marble, genuine lapis lazuli and malachite inlay"
    },
    "dimensions": {
      "en": "10 inches diameter",
      "hi": "10 इंच व्यास",
      "kn": "10 ಇಂಚು ವ್ಯಾಸ",
      "ta": "10 அங்குலம் விட்டம்"
    },
    "craftCategory": "Stone Carving",
    "giCraftRegion": "Agra Marble Inlay (Uttar Pradesh)"
  },
  "marble inlay octagonal serving plate (lapis floral vine)": {
    "title": {
      "en": "Marble Inlay Octagonal Serving Plate (Lapis Floral Vine)",
      "hi": "संगमरमर इनले अष्टकोणीय सर्विंग प्लेट",
      "kn": "ಅಮೃತಶಿಲೆ ಕೆತ್ತನೆ Octagonal Serving ತಟ್ಟೆ (Lapis Floral Vine)",
      "ta": "பளிங்கு வேலைப்பாடு Octagonal Serving தட்டு (Lapis Floral Vine)"
    },
    "description": {
      "en": "Octagonal marble display plate inlaid with over 120 hand-shaped gemstone petals flush with the silky marble plane.",
      "hi": "मकराना सफेद संगमरमर अष्टकोणीय प्लेट, लाजवर्त और मैलाकाइट की बारीक पुष्प बेल जड़ाई सहित।",
      "kn": "मकराना सफेद संगमरमर अष्टकोणीय प्लेट, लाजवर्त और मैलाकाइट की बारीक पुष्प बेल जड़ाई सहित।",
      "ta": "मकराना सफेद संगमरमर अष्टकोणीय प्लेट, लाजवर्त और मैलाकाइट की बारीक पुष्प बेल जड़ाई सहित।"
    },
    "culturalHeritageStory": {
      "en": "Makrana white marble base inlaid with 120 precision-cut malachite and carnelian petals.",
      "hi": "Makrana white marble base inlaid with 120 precision-cut malachite and carnelian petals.",
      "kn": "Makrana white marble base inlaid with 120 precision-cut malachite and carnelian petals.",
      "ta": "Makrana white marble base inlaid with 120 precision-cut malachite and carnelian petals."
    },
    "materialsUsed": {
      "en": "Makrana white marble, genuine lapis lazuli and malachite inlay",
      "hi": "Makrana white marble, genuine lapis lazuli and malachite inlay",
      "kn": "Makrana white marble, genuine lapis lazuli and malachite inlay",
      "ta": "Makrana white marble, genuine lapis lazuli and malachite inlay"
    },
    "dimensions": {
      "en": "10 inches diameter",
      "hi": "10 इंच व्यास",
      "kn": "10 ಇಂಚು ವ್ಯಾಸ",
      "ta": "10 அங்குலம் விட்டம்"
    },
    "craftCategory": "Stone Carving",
    "giCraftRegion": "Agra Marble Inlay (Uttar Pradesh)"
  },
  "cmtvoiurg004h9e668lz5y0pm": {
    "title": {
      "en": "Carved Soapstone Incense Burner Tower with Ash Catcher",
      "hi": "सोपस्टोन जाली अगरबत्ती टावर",
      "kn": "सोपस्टोन जाली अगरबत्ती टावर",
      "ta": "सोपस्टोन जाली अगरबत्ती टावर"
    },
    "description": {
      "en": "Vertical stone tower that safely contains incense embers and ash while releasing delicate fragrant plume spirals.",
      "hi": "सोपस्टोन जाली अगरबत्ती टावर, सुरक्षित रूप से अगरबत्ती की राख को अंदर एकत्रित रखता है।",
      "kn": "सोपस्टोन जाली अगरबत्ती टावर, सुरक्षित रूप से अगरबत्ती की राख को अंदर एकत्रित रखता है।",
      "ta": "सोपस्टोन जाली अगरबत्ती टावर, सुरक्षित रूप से अगरबत्ती की राख को अंदर एकत्रित रखता है।"
    },
    "culturalHeritageStory": {
      "en": "Vertical aroma tower safely diffusing slow-burning dhoop sticks without mess.",
      "hi": "Vertical aroma tower safely diffusing slow-burning dhoop sticks without mess.",
      "kn": "Vertical aroma tower safely diffusing slow-burning dhoop sticks without mess.",
      "ta": "Vertical aroma tower safely diffusing slow-burning dhoop sticks without mess."
    },
    "materialsUsed": {
      "en": "Natural variegated Gorara soapstone, hand-pierced ventilation slots",
      "hi": "Natural variegated Gorara soapstone, hand-pierced ventilation slots",
      "kn": "Natural variegated Gorara soapstone, hand-pierced ventilation slots",
      "ta": "Natural variegated Gorara soapstone, hand-pierced ventilation slots"
    },
    "dimensions": {
      "en": "11 x 3 inches",
      "hi": "11 x 3 इंच",
      "kn": "11 x 3 ಇಂಚು",
      "ta": "11 x 3 அங்குலம்"
    },
    "craftCategory": "Stone Carving",
    "giCraftRegion": "Agra Stone Carving (Uttar Pradesh)"
  },
  "carved soapstone incense burner tower with ash catcher": {
    "title": {
      "en": "Carved Soapstone Incense Burner Tower with Ash Catcher",
      "hi": "सोपस्टोन जाली अगरबत्ती टावर",
      "kn": "सोपस्टोन जाली अगरबत्ती टावर",
      "ta": "सोपस्टोन जाली अगरबत्ती टावर"
    },
    "description": {
      "en": "Vertical stone tower that safely contains incense embers and ash while releasing delicate fragrant plume spirals.",
      "hi": "सोपस्टोन जाली अगरबत्ती टावर, सुरक्षित रूप से अगरबत्ती की राख को अंदर एकत्रित रखता है।",
      "kn": "सोपस्टोन जाली अगरबत्ती टावर, सुरक्षित रूप से अगरबत्ती की राख को अंदर एकत्रित रखता है।",
      "ta": "सोपस्टोन जाली अगरबत्ती टावर, सुरक्षित रूप से अगरबत्ती की राख को अंदर एकत्रित रखता है।"
    },
    "culturalHeritageStory": {
      "en": "Vertical aroma tower safely diffusing slow-burning dhoop sticks without mess.",
      "hi": "Vertical aroma tower safely diffusing slow-burning dhoop sticks without mess.",
      "kn": "Vertical aroma tower safely diffusing slow-burning dhoop sticks without mess.",
      "ta": "Vertical aroma tower safely diffusing slow-burning dhoop sticks without mess."
    },
    "materialsUsed": {
      "en": "Natural variegated Gorara soapstone, hand-pierced ventilation slots",
      "hi": "Natural variegated Gorara soapstone, hand-pierced ventilation slots",
      "kn": "Natural variegated Gorara soapstone, hand-pierced ventilation slots",
      "ta": "Natural variegated Gorara soapstone, hand-pierced ventilation slots"
    },
    "dimensions": {
      "en": "11 x 3 inches",
      "hi": "11 x 3 इंच",
      "kn": "11 x 3 ಇಂಚು",
      "ta": "11 x 3 அங்குலம்"
    },
    "craftCategory": "Stone Carving",
    "giCraftRegion": "Agra Stone Carving (Uttar Pradesh)"
  },
  "cmtvoiurl004j9e66asgujikj": {
    "title": {
      "en": "Odisha Soft Stone Konark Sun Temple Wheel Replica",
      "hi": "ओडिशा कोणार्क सूर्य चक्र पाषाण प्रतिकृति",
      "kn": "Odisha Soft ಕಲ್ಲಿನ Konark Sun Temple Wheel Replica",
      "ta": "Odisha Soft கல் Konark Sun Temple Wheel Replica"
    },
    "description": {
      "en": "Relief miniature reproducing the iconic 13th-century astronomical sundial wheels of Konark Sun Temple.",
      "hi": "ओडिशा के कोणार्क सूर्य मंदिर के प्रसिद्ध चक्र की पाषाण प्रतिकृति, प्राकृतिक खोंडालाइट पत्थर से निर्मित।",
      "kn": "ओडिशा के कोणार्क सूर्य मंदिर के प्रसिद्ध चक्र की पाषाण प्रतिकृति, प्राकृतिक खोंडालाइट पत्थर से निर्मित।",
      "ta": "ओडिशा के कोणार्क सूर्य मंदिर के प्रसिद्ध चक्र की पाषाण प्रतिकृति, प्राकृतिक खोंडालाइट पत्थर से निर्मित।"
    },
    "culturalHeritageStory": {
      "en": "Khurda soapstone relief sculpture capturing 13th-century astronomical sundial wheels.",
      "hi": "Khurda soapstone relief sculpture capturing 13th-century astronomical sundial wheels.",
      "kn": "Khurda soapstone relief sculpture capturing 13th-century astronomical sundial wheels.",
      "ta": "Khurda soapstone relief sculpture capturing 13th-century astronomical sundial wheels."
    },
    "materialsUsed": {
      "en": "Natural Odisha Khondalite soft stone, iron chisel relief",
      "hi": "Natural Odisha Khondalite soft stone, iron chisel relief",
      "kn": "Natural Odisha Khondalite soft stone, iron chisel relief",
      "ta": "Natural Odisha Khondalite soft stone, iron chisel relief"
    },
    "dimensions": {
      "en": "7 x 6 inches",
      "hi": "7 x 6 इंच",
      "kn": "7 x 6 ಇಂಚು",
      "ta": "7 x 6 அங்குலம்"
    },
    "craftCategory": "Stone Carving",
    "giCraftRegion": "Odisha Stone Carving (Odisha)"
  },
  "odisha soft stone konark sun temple wheel replica": {
    "title": {
      "en": "Odisha Soft Stone Konark Sun Temple Wheel Replica",
      "hi": "ओडिशा कोणार्क सूर्य चक्र पाषाण प्रतिकृति",
      "kn": "Odisha Soft ಕಲ್ಲಿನ Konark Sun Temple Wheel Replica",
      "ta": "Odisha Soft கல் Konark Sun Temple Wheel Replica"
    },
    "description": {
      "en": "Relief miniature reproducing the iconic 13th-century astronomical sundial wheels of Konark Sun Temple.",
      "hi": "ओडिशा के कोणार्क सूर्य मंदिर के प्रसिद्ध चक्र की पाषाण प्रतिकृति, प्राकृतिक खोंडालाइट पत्थर से निर्मित।",
      "kn": "ओडिशा के कोणार्क सूर्य मंदिर के प्रसिद्ध चक्र की पाषाण प्रतिकृति, प्राकृतिक खोंडालाइट पत्थर से निर्मित।",
      "ta": "ओडिशा के कोणार्क सूर्य मंदिर के प्रसिद्ध चक्र की पाषाण प्रतिकृति, प्राकृतिक खोंडालाइट पत्थर से निर्मित।"
    },
    "culturalHeritageStory": {
      "en": "Khurda soapstone relief sculpture capturing 13th-century astronomical sundial wheels.",
      "hi": "Khurda soapstone relief sculpture capturing 13th-century astronomical sundial wheels.",
      "kn": "Khurda soapstone relief sculpture capturing 13th-century astronomical sundial wheels.",
      "ta": "Khurda soapstone relief sculpture capturing 13th-century astronomical sundial wheels."
    },
    "materialsUsed": {
      "en": "Natural Odisha Khondalite soft stone, iron chisel relief",
      "hi": "Natural Odisha Khondalite soft stone, iron chisel relief",
      "kn": "Natural Odisha Khondalite soft stone, iron chisel relief",
      "ta": "Natural Odisha Khondalite soft stone, iron chisel relief"
    },
    "dimensions": {
      "en": "7 x 6 inches",
      "hi": "7 x 6 इंच",
      "kn": "7 x 6 ಇಂಚು",
      "ta": "7 x 6 அங்குலம்"
    },
    "craftCategory": "Stone Carving",
    "giCraftRegion": "Odisha Stone Carving (Odisha)"
  },
  "cmtvoiurp004l9e66p4j2fvye": {
    "title": {
      "en": "Agra Marble Hand-Carved Jewelry Box with Pietra Dura Lid",
      "hi": "आगरा संगमरमर जड़ित आभूषण डिब्बा",
      "kn": "Agra ಅಮೃತಶಿಲೆ ಕೈಕೆತ್ತನೆಯ ಆಭರಣ ಪೆಟ್ಟಿಗೆ with Pietra Dura Lid",
      "ta": "Agra பளிங்கு கைவேலைப்பாடு செதுக்கப்பட்ட நகை பெட்டி with Pietra Dura Lid"
    },
    "description": {
      "en": "Solid marble box whose lid features mother-of-pearl florets and carnelian buds embedded with artisan precision.",
      "hi": "आगरा संगमरमर जड़ित आभूषण डिब्बा, सीप और अकीक रत्नों की पिएत्रा ड्यूरा नक्काशी के साथ।",
      "kn": "आगरा संगमरमर जड़ित आभूषण डिब्बा, सीप और अकीक रत्नों की पिएत्रा ड्यूरा नक्काशी के साथ।",
      "ta": "आगरा संगमरमर जड़ित आभूषण डिब्बा, सीप और अकीक रत्नों की पिएत्रा ड्यूरा नक्काशी के साथ।"
    },
    "culturalHeritageStory": {
      "en": "Lapis lazuli and mother-of-pearl florets embedded flush with translucent marble surface.",
      "hi": "Lapis lazuli and mother-of-pearl florets embedded flush with translucent marble surface.",
      "kn": "Lapis lazuli and mother-of-pearl florets embedded flush with translucent marble surface.",
      "ta": "Lapis lazuli and mother-of-pearl florets embedded flush with translucent marble surface."
    },
    "materialsUsed": {
      "en": "Makrana marble, carnelian and mother-of-pearl gemstones, brass hinges",
      "hi": "Makrana marble, carnelian and mother-of-pearl gemstones, brass hinges",
      "kn": "Makrana marble, carnelian and mother-of-pearl gemstones, brass hinges",
      "ta": "Makrana marble, carnelian and mother-of-pearl gemstones, brass hinges"
    },
    "dimensions": {
      "en": "6 x 4 x 2.5 inches",
      "hi": "6 x 4 x 2.5 इंच",
      "kn": "6 x 4 x 2.5 ಇಂಚು",
      "ta": "6 x 4 x 2.5 அங்குலம்"
    },
    "craftCategory": "Stone Carving",
    "giCraftRegion": "Agra Marble Inlay (Uttar Pradesh)"
  },
  "agra marble hand-carved jewelry box with pietra dura lid": {
    "title": {
      "en": "Agra Marble Hand-Carved Jewelry Box with Pietra Dura Lid",
      "hi": "आगरा संगमरमर जड़ित आभूषण डिब्बा",
      "kn": "Agra ಅಮೃತಶಿಲೆ ಕೈಕೆತ್ತನೆಯ ಆಭರಣ ಪೆಟ್ಟಿಗೆ with Pietra Dura Lid",
      "ta": "Agra பளிங்கு கைவேலைப்பாடு செதுக்கப்பட்ட நகை பெட்டி with Pietra Dura Lid"
    },
    "description": {
      "en": "Solid marble box whose lid features mother-of-pearl florets and carnelian buds embedded with artisan precision.",
      "hi": "आगरा संगमरमर जड़ित आभूषण डिब्बा, सीप और अकीक रत्नों की पिएत्रा ड्यूरा नक्काशी के साथ।",
      "kn": "आगरा संगमरमर जड़ित आभूषण डिब्बा, सीप और अकीक रत्नों की पिएत्रा ड्यूरा नक्काशी के साथ।",
      "ta": "आगरा संगमरमर जड़ित आभूषण डिब्बा, सीप और अकीक रत्नों की पिएत्रा ड्यूरा नक्काशी के साथ।"
    },
    "culturalHeritageStory": {
      "en": "Lapis lazuli and mother-of-pearl florets embedded flush with translucent marble surface.",
      "hi": "Lapis lazuli and mother-of-pearl florets embedded flush with translucent marble surface.",
      "kn": "Lapis lazuli and mother-of-pearl florets embedded flush with translucent marble surface.",
      "ta": "Lapis lazuli and mother-of-pearl florets embedded flush with translucent marble surface."
    },
    "materialsUsed": {
      "en": "Makrana marble, carnelian and mother-of-pearl gemstones, brass hinges",
      "hi": "Makrana marble, carnelian and mother-of-pearl gemstones, brass hinges",
      "kn": "Makrana marble, carnelian and mother-of-pearl gemstones, brass hinges",
      "ta": "Makrana marble, carnelian and mother-of-pearl gemstones, brass hinges"
    },
    "dimensions": {
      "en": "6 x 4 x 2.5 inches",
      "hi": "6 x 4 x 2.5 इंच",
      "kn": "6 x 4 x 2.5 ಇಂಚು",
      "ta": "6 x 4 x 2.5 அங்குலம்"
    },
    "craftCategory": "Stone Carving",
    "giCraftRegion": "Agra Marble Inlay (Uttar Pradesh)"
  },
  "cmtvoiurt004n9e66makrsroe": {
    "title": {
      "en": "Shantiniketan Embossed Genuine Leather Tote Bag",
      "hi": "शांतिनिकेतन उभरा हुआ चमड़े का टोट बैग",
      "kn": "Shantiniketan Embossed Genuine ಚರ್ಮದ ಟೋಟ್ ಬ್ಯಾಗ್",
      "ta": "Shantiniketan Embossed Genuine தோல் கைப்பை"
    },
    "description": {
      "en": "Hand-embossed floral relief tote bag crafted using Tagore Visva-Bharati vegetable tanning and batik dye techniques.",
      "hi": "शांतिनिकेतन का प्रामाणिक उभरा हुआ चमड़े का टोट बैग, पारंपरिक बाटिक और वनस्पति रंगाई से निर्मित।",
      "kn": "शांतिनिकेतन का प्रामाणिक उभरा हुआ चमड़े का टोट बैग, पारंपरिक बाटिक और वनस्पति रंगाई से निर्मित।",
      "ta": "शांतिनिकेतन का प्रामाणिक उभरा हुआ चमड़े का टोट बैग, पारंपरिक बाटिक और वनस्पति रंगाई से निर्मित।"
    },
    "culturalHeritageStory": {
      "en": "Pioneered under Rabindranath Tagore at Visva-Bharati using vegetable-tanned grain embossing.",
      "hi": "Pioneered under Rabindranath Tagore at Visva-Bharati using vegetable-tanned grain embossing.",
      "kn": "Pioneered under Rabindranath Tagore at Visva-Bharati using vegetable-tanned grain embossing.",
      "ta": "Pioneered under Rabindranath Tagore at Visva-Bharati using vegetable-tanned grain embossing."
    },
    "materialsUsed": {
      "en": "Vegetable-tanned sheep/goat leather, natural grain dye, batik wax",
      "hi": "Vegetable-tanned sheep/goat leather, natural grain dye, batik wax",
      "kn": "Vegetable-tanned sheep/goat leather, natural grain dye, batik wax",
      "ta": "Vegetable-tanned sheep/goat leather, natural grain dye, batik wax"
    },
    "dimensions": {
      "en": "15 x 12 x 4 inches",
      "hi": "15 x 12 x 4 इंच",
      "kn": "15 x 12 x 4 ಇಂಚು",
      "ta": "15 x 12 x 4 அங்குலம்"
    },
    "craftCategory": "Natural Fiber Craft",
    "giCraftRegion": "Shantiniketan Leather (West Bengal)"
  },
  "shantiniketan embossed genuine leather tote bag": {
    "title": {
      "en": "Shantiniketan Embossed Genuine Leather Tote Bag",
      "hi": "शांतिनिकेतन उभरा हुआ चमड़े का टोट बैग",
      "kn": "Shantiniketan Embossed Genuine ಚರ್ಮದ ಟೋಟ್ ಬ್ಯಾಗ್",
      "ta": "Shantiniketan Embossed Genuine தோல் கைப்பை"
    },
    "description": {
      "en": "Hand-embossed floral relief tote bag crafted using Tagore Visva-Bharati vegetable tanning and batik dye techniques.",
      "hi": "शांतिनिकेतन का प्रामाणिक उभरा हुआ चमड़े का टोट बैग, पारंपरिक बाटिक और वनस्पति रंगाई से निर्मित।",
      "kn": "शांतिनिकेतन का प्रामाणिक उभरा हुआ चमड़े का टोट बैग, पारंपरिक बाटिक और वनस्पति रंगाई से निर्मित।",
      "ta": "शांतिनिकेतन का प्रामाणिक उभरा हुआ चमड़े का टोट बैग, पारंपरिक बाटिक और वनस्पति रंगाई से निर्मित।"
    },
    "culturalHeritageStory": {
      "en": "Pioneered under Rabindranath Tagore at Visva-Bharati using vegetable-tanned grain embossing.",
      "hi": "Pioneered under Rabindranath Tagore at Visva-Bharati using vegetable-tanned grain embossing.",
      "kn": "Pioneered under Rabindranath Tagore at Visva-Bharati using vegetable-tanned grain embossing.",
      "ta": "Pioneered under Rabindranath Tagore at Visva-Bharati using vegetable-tanned grain embossing."
    },
    "materialsUsed": {
      "en": "Vegetable-tanned sheep/goat leather, natural grain dye, batik wax",
      "hi": "Vegetable-tanned sheep/goat leather, natural grain dye, batik wax",
      "kn": "Vegetable-tanned sheep/goat leather, natural grain dye, batik wax",
      "ta": "Vegetable-tanned sheep/goat leather, natural grain dye, batik wax"
    },
    "dimensions": {
      "en": "15 x 12 x 4 inches",
      "hi": "15 x 12 x 4 इंच",
      "kn": "15 x 12 x 4 ಇಂಚು",
      "ta": "15 x 12 x 4 அங்குலம்"
    },
    "craftCategory": "Natural Fiber Craft",
    "giCraftRegion": "Shantiniketan Leather (West Bengal)"
  },
  "cmtvoiury004p9e66e7dzexy4": {
    "title": {
      "en": "Handcrafted Shantiniketan Leather Coin Pouch and Keychain",
      "hi": "शांतिनिकेतन चमड़े का सिक्का बटुआ",
      "kn": "ಹಸ್ತನಿರ್ಮಿತ Shantiniketan ಚರ್ಮದ Coin Pouch and Keychain",
      "ta": "கைவினை Shantiniketan தோல் Coin Pouch and Keychain"
    },
    "description": {
      "en": "Compact artisanal zippered wallet featuring tactile embossed folk motifs on burnished vegetable hide.",
      "hi": "शांतिनिकेतन चमड़े का सिक्का बटुआ, हाथ से दबाए गए लोक रूपांकनों और पीतल की ज़िप सहित।",
      "kn": "शांतिनिकेतन चमड़े का सिक्का बटुआ, हाथ से दबाए गए लोक रूपांकनों और पीतल की ज़िप सहित।",
      "ta": "शांतिनिकेतन चमड़े का सिक्का बटुआ, हाथ से दबाए गए लोक रूपांकनों और पीतल की ज़िप सहित।"
    },
    "culturalHeritageStory": {
      "en": "Batik touch finish on vegetable hide with folk floral relief.",
      "hi": "Batik touch finish on vegetable hide with folk floral relief.",
      "kn": "Batik touch finish on vegetable hide with folk floral relief.",
      "ta": "Batik touch finish on vegetable hide with folk floral relief."
    },
    "materialsUsed": {
      "en": "Vegetable-tanned leather, hand-stamped folk relief, brass zipper",
      "hi": "Vegetable-tanned leather, hand-stamped folk relief, brass zipper",
      "kn": "Vegetable-tanned leather, hand-stamped folk relief, brass zipper",
      "ta": "Vegetable-tanned leather, hand-stamped folk relief, brass zipper"
    },
    "dimensions": {
      "en": "4.5 x 3 inches",
      "hi": "4.5 x 3 इंच",
      "kn": "4.5 x 3 ಇಂಚು",
      "ta": "4.5 x 3 அங்குலம்"
    },
    "craftCategory": "Natural Fiber Craft",
    "giCraftRegion": "Shantiniketan Leather (West Bengal)"
  },
  "handcrafted shantiniketan leather coin pouch and keychain": {
    "title": {
      "en": "Handcrafted Shantiniketan Leather Coin Pouch and Keychain",
      "hi": "शांतिनिकेतन चमड़े का सिक्का बटुआ",
      "kn": "ಹಸ್ತನಿರ್ಮಿತ Shantiniketan ಚರ್ಮದ Coin Pouch and Keychain",
      "ta": "கைவினை Shantiniketan தோல் Coin Pouch and Keychain"
    },
    "description": {
      "en": "Compact artisanal zippered wallet featuring tactile embossed folk motifs on burnished vegetable hide.",
      "hi": "शांतिनिकेतन चमड़े का सिक्का बटुआ, हाथ से दबाए गए लोक रूपांकनों और पीतल की ज़िप सहित।",
      "kn": "शांतिनिकेतन चमड़े का सिक्का बटुआ, हाथ से दबाए गए लोक रूपांकनों और पीतल की ज़िप सहित।",
      "ta": "शांतिनिकेतन चमड़े का सिक्का बटुआ, हाथ से दबाए गए लोक रूपांकनों और पीतल की ज़िप सहित।"
    },
    "culturalHeritageStory": {
      "en": "Batik touch finish on vegetable hide with folk floral relief.",
      "hi": "Batik touch finish on vegetable hide with folk floral relief.",
      "kn": "Batik touch finish on vegetable hide with folk floral relief.",
      "ta": "Batik touch finish on vegetable hide with folk floral relief."
    },
    "materialsUsed": {
      "en": "Vegetable-tanned leather, hand-stamped folk relief, brass zipper",
      "hi": "Vegetable-tanned leather, hand-stamped folk relief, brass zipper",
      "kn": "Vegetable-tanned leather, hand-stamped folk relief, brass zipper",
      "ta": "Vegetable-tanned leather, hand-stamped folk relief, brass zipper"
    },
    "dimensions": {
      "en": "4.5 x 3 inches",
      "hi": "4.5 x 3 इंच",
      "kn": "4.5 x 3 ಇಂಚು",
      "ta": "4.5 x 3 அங்குலம்"
    },
    "craftCategory": "Natural Fiber Craft",
    "giCraftRegion": "Shantiniketan Leather (West Bengal)"
  },
  "cmtvoius2004r9e668q2bq1g8": {
    "title": {
      "en": "Golden Grass (Kaincha) Handwoven Storage Basket with Lid",
      "hi": "ओडिशा गोल्डन ग्रास हस्तनिर्मित टोकरी",
      "kn": "Golden Grass (Kaincha) Handwoven Storage ಬುಟ್ಟಿ with Lid",
      "ta": "Golden Grass (Kaincha) Handwoven Storage கூடை with Lid"
    },
    "description": {
      "en": "Sturdy golden grass container hand-coiled and woven by rural Odisha women SHGs from wild riverine reeds.",
      "hi": "ओडिशा के केंद्रपाड़ा की महिलाओं द्वारा प्राकृतिक सुनहरी घास (काइंचा) से हस्तनिर्मित ढक्कनदार टोकरी।",
      "kn": "ओडिशा के केंद्रपाड़ा की महिलाओं द्वारा प्राकृतिक सुनहरी घास (काइंचा) से हस्तनिर्मित ढक्कनदार टोकरी।",
      "ta": "ओडिशा के केंद्रपाड़ा की महिलाओं द्वारा प्राकृतिक सुनहरी घास (काइंचा) से हस्तनिर्मित ढक्कनदार टोकरी।"
    },
    "culturalHeritageStory": {
      "en": "Wild river reed collected by women SHGs in Kendrapara and coiled into sturdy eco-containers.",
      "hi": "Wild river reed collected by women SHGs in Kendrapara and coiled into sturdy eco-containers.",
      "kn": "Wild river reed collected by women SHGs in Kendrapara and coiled into sturdy eco-containers.",
      "ta": "Wild river reed collected by women SHGs in Kendrapara and coiled into sturdy eco-containers."
    },
    "materialsUsed": {
      "en": "Natural Kaincha golden grass (Vetiver zizanioides), wild river reeds, natural cotton thread",
      "hi": "Natural Kaincha golden grass (Vetiver zizanioides), wild river reeds, natural cotton thread",
      "kn": "Natural Kaincha golden grass (Vetiver zizanioides), wild river reeds, natural cotton thread",
      "ta": "Natural Kaincha golden grass (Vetiver zizanioides), wild river reeds, natural cotton thread"
    },
    "dimensions": {
      "en": "10 x 8 inches",
      "hi": "10 x 8 इंच",
      "kn": "10 x 8 ಇಂಚು",
      "ta": "10 x 8 அங்குலம்"
    },
    "craftCategory": "Natural Fiber Craft",
    "giCraftRegion": "Kendrapara Golden Grass (Odisha)"
  },
  "golden grass (kaincha) handwoven storage basket with lid": {
    "title": {
      "en": "Golden Grass (Kaincha) Handwoven Storage Basket with Lid",
      "hi": "ओडिशा गोल्डन ग्रास हस्तनिर्मित टोकरी",
      "kn": "Golden Grass (Kaincha) Handwoven Storage ಬುಟ್ಟಿ with Lid",
      "ta": "Golden Grass (Kaincha) Handwoven Storage கூடை with Lid"
    },
    "description": {
      "en": "Sturdy golden grass container hand-coiled and woven by rural Odisha women SHGs from wild riverine reeds.",
      "hi": "ओडिशा के केंद्रपाड़ा की महिलाओं द्वारा प्राकृतिक सुनहरी घास (काइंचा) से हस्तनिर्मित ढक्कनदार टोकरी।",
      "kn": "ओडिशा के केंद्रपाड़ा की महिलाओं द्वारा प्राकृतिक सुनहरी घास (काइंचा) से हस्तनिर्मित ढक्कनदार टोकरी।",
      "ta": "ओडिशा के केंद्रपाड़ा की महिलाओं द्वारा प्राकृतिक सुनहरी घास (काइंचा) से हस्तनिर्मित ढक्कनदार टोकरी।"
    },
    "culturalHeritageStory": {
      "en": "Wild river reed collected by women SHGs in Kendrapara and coiled into sturdy eco-containers.",
      "hi": "Wild river reed collected by women SHGs in Kendrapara and coiled into sturdy eco-containers.",
      "kn": "Wild river reed collected by women SHGs in Kendrapara and coiled into sturdy eco-containers.",
      "ta": "Wild river reed collected by women SHGs in Kendrapara and coiled into sturdy eco-containers."
    },
    "materialsUsed": {
      "en": "Natural Kaincha golden grass (Vetiver zizanioides), wild river reeds, natural cotton thread",
      "hi": "Natural Kaincha golden grass (Vetiver zizanioides), wild river reeds, natural cotton thread",
      "kn": "Natural Kaincha golden grass (Vetiver zizanioides), wild river reeds, natural cotton thread",
      "ta": "Natural Kaincha golden grass (Vetiver zizanioides), wild river reeds, natural cotton thread"
    },
    "dimensions": {
      "en": "10 x 8 inches",
      "hi": "10 x 8 इंच",
      "kn": "10 x 8 ಇಂಚು",
      "ta": "10 x 8 அங்குலம்"
    },
    "craftCategory": "Natural Fiber Craft",
    "giCraftRegion": "Kendrapara Golden Grass (Odisha)"
  },
  "cmtvoius6004t9e66t0u0n8x2": {
    "title": {
      "en": "Braided Natural Jute Floor Runner Rug with Tassels",
      "hi": "हस्तनिर्मित प्राकृतिक जूट कालीन रनर",
      "kn": "Braided Natural ಸೆಣಬಿನ Floor Runner Rug with Tassels",
      "ta": "Braided Natural சணல் Floor Runner Rug with Tassels"
    },
    "description": {
      "en": "Eco-friendly biodegradable floor runner woven on handlooms from durable West Bengal golden jute cords.",
      "hi": "पश्चिम बंगाल के कच्चे सुनहरे जूट से बुना गया प्राकृतिक फर्श रनर, पर्यावरण-अनुकूल और टिकाऊ।",
      "kn": "पश्चिम बंगाल के कच्चे सुनहरे जूट से बुना गया प्राकृतिक फर्श रनर, पर्यावरण-अनुकूल और टिकाऊ।",
      "ta": "पश्चिम बंगाल के कच्चे सुनहरे जूट से बुना गया प्राकृतिक फर्श रनर, पर्यावरण-अनुकूल और टिकाऊ।"
    },
    "culturalHeritageStory": {
      "en": "Biodegradable West Bengal raw golden jute yarn braided on manual hand-operated wooden looms.",
      "hi": "Biodegradable West Bengal raw golden jute yarn braided on manual hand-operated wooden looms.",
      "kn": "Biodegradable West Bengal raw golden jute yarn braided on manual hand-operated wooden looms.",
      "ta": "Biodegradable West Bengal raw golden jute yarn braided on manual hand-operated wooden looms."
    },
    "materialsUsed": {
      "en": "100% natural raw golden jute fiber, hand-braided border tassels",
      "hi": "100% natural raw golden jute fiber, hand-braided border tassels",
      "kn": "100% natural raw golden jute fiber, hand-braided border tassels",
      "ta": "100% natural raw golden jute fiber, hand-braided border tassels"
    },
    "dimensions": {
      "en": "5 x 2 feet",
      "hi": "5 x 2 feet",
      "kn": "5 x 2 feet",
      "ta": "5 x 2 feet"
    },
    "craftCategory": "Natural Fiber Craft",
    "giCraftRegion": "Kolkata Jute Craft (West Bengal)"
  },
  "braided natural jute floor runner rug with tassels": {
    "title": {
      "en": "Braided Natural Jute Floor Runner Rug with Tassels",
      "hi": "हस्तनिर्मित प्राकृतिक जूट कालीन रनर",
      "kn": "Braided Natural ಸೆಣಬಿನ Floor Runner Rug with Tassels",
      "ta": "Braided Natural சணல் Floor Runner Rug with Tassels"
    },
    "description": {
      "en": "Eco-friendly biodegradable floor runner woven on handlooms from durable West Bengal golden jute cords.",
      "hi": "पश्चिम बंगाल के कच्चे सुनहरे जूट से बुना गया प्राकृतिक फर्श रनर, पर्यावरण-अनुकूल और टिकाऊ।",
      "kn": "पश्चिम बंगाल के कच्चे सुनहरे जूट से बुना गया प्राकृतिक फर्श रनर, पर्यावरण-अनुकूल और टिकाऊ।",
      "ta": "पश्चिम बंगाल के कच्चे सुनहरे जूट से बुना गया प्राकृतिक फर्श रनर, पर्यावरण-अनुकूल और टिकाऊ।"
    },
    "culturalHeritageStory": {
      "en": "Biodegradable West Bengal raw golden jute yarn braided on manual hand-operated wooden looms.",
      "hi": "Biodegradable West Bengal raw golden jute yarn braided on manual hand-operated wooden looms.",
      "kn": "Biodegradable West Bengal raw golden jute yarn braided on manual hand-operated wooden looms.",
      "ta": "Biodegradable West Bengal raw golden jute yarn braided on manual hand-operated wooden looms."
    },
    "materialsUsed": {
      "en": "100% natural raw golden jute fiber, hand-braided border tassels",
      "hi": "100% natural raw golden jute fiber, hand-braided border tassels",
      "kn": "100% natural raw golden jute fiber, hand-braided border tassels",
      "ta": "100% natural raw golden jute fiber, hand-braided border tassels"
    },
    "dimensions": {
      "en": "5 x 2 feet",
      "hi": "5 x 2 feet",
      "kn": "5 x 2 feet",
      "ta": "5 x 2 feet"
    },
    "craftCategory": "Natural Fiber Craft",
    "giCraftRegion": "Kolkata Jute Craft (West Bengal)"
  },
  "cmtvoiusa004v9e662vtzikh3": {
    "title": {
      "en": "Shantiniketan Leather Hand-Embossed Journal Notebook",
      "hi": "शांतिनिकेतन चमड़े की हस्तनिर्मित डायरी",
      "kn": "Shantiniketan ಚರ್ಮದ Hand-Embossed Journal Notebook",
      "ta": "Shantiniketan தோல் Hand-Embossed Journal Notebook"
    },
    "description": {
      "en": "Artisan diary bound in vegetable-dyed batik leather containing deckle-edged unlined handmade drawing paper.",
      "hi": "शांतिनिकेतन चमड़े की हस्तनिर्मित डायरी, 100 पृष्ठ हस्तनिर्मित सूती कागज के साथ।",
      "kn": "शांतिनिकेतन चमड़े की हस्तनिर्मित डायरी, 100 पृष्ठ हस्तनिर्मित सूती कागज के साथ।",
      "ta": "शांतिनिकेतन चमड़े की हस्तनिर्मित डायरी, 100 पृष्ठ हस्तनिर्मित सूती कागज के साथ।"
    },
    "culturalHeritageStory": {
      "en": "Refillable notebook with 100 pages of handmade cotton-rag unlined deckle paper.",
      "hi": "Refillable notebook with 100 pages of handmade cotton-rag unlined deckle paper.",
      "kn": "Refillable notebook with 100 pages of handmade cotton-rag unlined deckle paper.",
      "ta": "Refillable notebook with 100 pages of handmade cotton-rag unlined deckle paper."
    },
    "materialsUsed": {
      "en": "Vegetable-dyed goat leather, 100 pages handmade recycled cotton rag paper, wraparound cord",
      "hi": "Vegetable-dyed goat leather, 100 pages handmade recycled cotton rag paper, wraparound cord",
      "kn": "Vegetable-dyed goat leather, 100 pages handmade recycled cotton rag paper, wraparound cord",
      "ta": "Vegetable-dyed goat leather, 100 pages handmade recycled cotton rag paper, wraparound cord"
    },
    "dimensions": {
      "en": "8 x 5 inches",
      "hi": "8 x 5 इंच",
      "kn": "8 x 5 ಇಂಚು",
      "ta": "8 x 5 அங்குலம்"
    },
    "craftCategory": "Natural Fiber Craft",
    "giCraftRegion": "Shantiniketan Leather (West Bengal)"
  },
  "shantiniketan leather hand-embossed journal notebook": {
    "title": {
      "en": "Shantiniketan Leather Hand-Embossed Journal Notebook",
      "hi": "शांतिनिकेतन चमड़े की हस्तनिर्मित डायरी",
      "kn": "Shantiniketan ಚರ್ಮದ Hand-Embossed Journal Notebook",
      "ta": "Shantiniketan தோல் Hand-Embossed Journal Notebook"
    },
    "description": {
      "en": "Artisan diary bound in vegetable-dyed batik leather containing deckle-edged unlined handmade drawing paper.",
      "hi": "शांतिनिकेतन चमड़े की हस्तनिर्मित डायरी, 100 पृष्ठ हस्तनिर्मित सूती कागज के साथ।",
      "kn": "शांतिनिकेतन चमड़े की हस्तनिर्मित डायरी, 100 पृष्ठ हस्तनिर्मित सूती कागज के साथ।",
      "ta": "शांतिनिकेतन चमड़े की हस्तनिर्मित डायरी, 100 पृष्ठ हस्तनिर्मित सूती कागज के साथ।"
    },
    "culturalHeritageStory": {
      "en": "Refillable notebook with 100 pages of handmade cotton-rag unlined deckle paper.",
      "hi": "Refillable notebook with 100 pages of handmade cotton-rag unlined deckle paper.",
      "kn": "Refillable notebook with 100 pages of handmade cotton-rag unlined deckle paper.",
      "ta": "Refillable notebook with 100 pages of handmade cotton-rag unlined deckle paper."
    },
    "materialsUsed": {
      "en": "Vegetable-dyed goat leather, 100 pages handmade recycled cotton rag paper, wraparound cord",
      "hi": "Vegetable-dyed goat leather, 100 pages handmade recycled cotton rag paper, wraparound cord",
      "kn": "Vegetable-dyed goat leather, 100 pages handmade recycled cotton rag paper, wraparound cord",
      "ta": "Vegetable-dyed goat leather, 100 pages handmade recycled cotton rag paper, wraparound cord"
    },
    "dimensions": {
      "en": "8 x 5 inches",
      "hi": "8 x 5 इंच",
      "kn": "8 x 5 ಇಂಚು",
      "ta": "8 x 5 அங்குலம்"
    },
    "craftCategory": "Natural Fiber Craft",
    "giCraftRegion": "Shantiniketan Leather (West Bengal)"
  },
  "cmtvoiuse004x9e66au7ckxr2": {
    "title": {
      "en": "Assam River Cane Handcrafted Fruit Basket Set (3 Sizes)",
      "hi": "असम केन बेत हस्तनिर्मित फल टोकरी",
      "kn": "Assam River ಬೆತ್ತದ ಹಸ್ತನಿರ್ಮಿತ Fruit ಬುಟ್ಟಿ Set (3 Sizes)",
      "ta": "Assam River பிரம்பு கைவினை Fruit கூடை Set (3 Sizes)"
    },
    "description": {
      "en": "Non-splintering nesting storage baskets hand-woven by master North-East cane weavers with natural moisture protection.",
      "hi": "असम के कुशल कारीगरों द्वारा नदी की बेंत और बांस से हस्तनिर्मित फल टोकरी सेट (3 आकार)।",
      "kn": "असम के कुशल कारीगरों द्वारा नदी की बेंत और बांस से हस्तनिर्मित फल टोकरी सेट (3 आकार)।",
      "ta": "असम के कुशल कारीगरों द्वारा नदी की बेंत और बांस से हस्तनिर्मित फल टोकरी सेट (3 आकार)।"
    },
    "culturalHeritageStory": {
      "en": "Sustainable non-splinter mountain cane woven with water-resistant natural lacquer.",
      "hi": "Sustainable non-splinter mountain cane woven with water-resistant natural lacquer.",
      "kn": "Sustainable non-splinter mountain cane woven with water-resistant natural lacquer.",
      "ta": "Sustainable non-splinter mountain cane woven with water-resistant natural lacquer."
    },
    "materialsUsed": {
      "en": "Wild seasoned Assam river cane, split mountain bamboo, natural clear resin lacquer",
      "hi": "Wild seasoned Assam river cane, split mountain bamboo, natural clear resin lacquer",
      "kn": "Wild seasoned Assam river cane, split mountain bamboo, natural clear resin lacquer",
      "ta": "Wild seasoned Assam river cane, split mountain bamboo, natural clear resin lacquer"
    },
    "dimensions": {
      "en": "8, 10, 12 inches diameter",
      "hi": "8, 10, 12 इंच व्यास",
      "kn": "8, 10, 12 ಇಂಚು ವ್ಯಾಸ",
      "ta": "8, 10, 12 அங்குலம் விட்டம்"
    },
    "craftCategory": "Natural Fiber Craft",
    "giCraftRegion": "Assam Cane & Bamboo (Assam)"
  },
  "assam river cane handcrafted fruit basket set (3 sizes)": {
    "title": {
      "en": "Assam River Cane Handcrafted Fruit Basket Set (3 Sizes)",
      "hi": "असम केन बेत हस्तनिर्मित फल टोकरी",
      "kn": "Assam River ಬೆತ್ತದ ಹಸ್ತನಿರ್ಮಿತ Fruit ಬುಟ್ಟಿ Set (3 Sizes)",
      "ta": "Assam River பிரம்பு கைவினை Fruit கூடை Set (3 Sizes)"
    },
    "description": {
      "en": "Non-splintering nesting storage baskets hand-woven by master North-East cane weavers with natural moisture protection.",
      "hi": "असम के कुशल कारीगरों द्वारा नदी की बेंत और बांस से हस्तनिर्मित फल टोकरी सेट (3 आकार)।",
      "kn": "असम के कुशल कारीगरों द्वारा नदी की बेंत और बांस से हस्तनिर्मित फल टोकरी सेट (3 आकार)।",
      "ta": "असम के कुशल कारीगरों द्वारा नदी की बेंत और बांस से हस्तनिर्मित फल टोकरी सेट (3 आकार)।"
    },
    "culturalHeritageStory": {
      "en": "Sustainable non-splinter mountain cane woven with water-resistant natural lacquer.",
      "hi": "Sustainable non-splinter mountain cane woven with water-resistant natural lacquer.",
      "kn": "Sustainable non-splinter mountain cane woven with water-resistant natural lacquer.",
      "ta": "Sustainable non-splinter mountain cane woven with water-resistant natural lacquer."
    },
    "materialsUsed": {
      "en": "Wild seasoned Assam river cane, split mountain bamboo, natural clear resin lacquer",
      "hi": "Wild seasoned Assam river cane, split mountain bamboo, natural clear resin lacquer",
      "kn": "Wild seasoned Assam river cane, split mountain bamboo, natural clear resin lacquer",
      "ta": "Wild seasoned Assam river cane, split mountain bamboo, natural clear resin lacquer"
    },
    "dimensions": {
      "en": "8, 10, 12 inches diameter",
      "hi": "8, 10, 12 इंच व्यास",
      "kn": "8, 10, 12 ಇಂಚು ವ್ಯಾಸ",
      "ta": "8, 10, 12 அங்குலம் விட்டம்"
    },
    "craftCategory": "Natural Fiber Craft",
    "giCraftRegion": "Assam Cane & Bamboo (Assam)"
  },
  "cmtvoiusj004z9e66ewcg9xlq": {
    "title": {
      "en": "Tripura Bamboo Hand-Woven Lamp Shade (Natural Amber Glow)",
      "hi": "त्रिपुरा बांस हस्तनिर्मित लैंप शेड",
      "kn": "Tripura ಬಿದಿರಿನ Hand-Woven ದೀಪ Shade (Natural Amber Glow)",
      "ta": "Tripura மூங்கில் Hand-Woven விளக்கு Shade (Natural Amber Glow)"
    },
    "description": {
      "en": "Ethereal acoustic lighting pendant woven from razor-thin bamboo splints that diffuse warm ambient geometric patterns.",
      "hi": "त्रिपुरा के पारंपरिक बांस शिल्प से बना हैंगिंग लैंप शेड, कमरे में मनमोहक रोशनी बिखेरता है।",
      "kn": "त्रिपुरा के पारंपरिक बांस शिल्प से बना हैंगिंग लैंप शेड, कमरे में मनमोहक रोशनी बिखेरता है।",
      "ta": "त्रिपुरा के पारंपरिक बांस शिल्प से बना हैंगिंग लैंप शेड, कमरे में मनमोहक रोशनी बिखेरता है।"
    },
    "culturalHeritageStory": {
      "en": "Micro-split green bamboo strips woven into ethereal acoustic and lighting shades.",
      "hi": "Micro-split green bamboo strips woven into ethereal acoustic and lighting shades.",
      "kn": "Micro-split green bamboo strips woven into ethereal acoustic and lighting shades.",
      "ta": "Micro-split green bamboo strips woven into ethereal acoustic and lighting shades."
    },
    "materialsUsed": {
      "en": "Micro-split green bamboo strips, natural cane binding, brass pendant fitting",
      "hi": "Micro-split green bamboo strips, natural cane binding, brass pendant fitting",
      "kn": "Micro-split green bamboo strips, natural cane binding, brass pendant fitting",
      "ta": "Micro-split green bamboo strips, natural cane binding, brass pendant fitting"
    },
    "dimensions": {
      "en": "12 x 10 inches",
      "hi": "12 x 10 इंच",
      "kn": "12 x 10 ಇಂಚು",
      "ta": "12 x 10 அங்குலம்"
    },
    "craftCategory": "Natural Fiber Craft",
    "giCraftRegion": "Tripura Bamboo Craft (Tripura)"
  },
  "tripura bamboo hand-woven lamp shade (natural amber glow)": {
    "title": {
      "en": "Tripura Bamboo Hand-Woven Lamp Shade (Natural Amber Glow)",
      "hi": "त्रिपुरा बांस हस्तनिर्मित लैंप शेड",
      "kn": "Tripura ಬಿದಿರಿನ Hand-Woven ದೀಪ Shade (Natural Amber Glow)",
      "ta": "Tripura மூங்கில் Hand-Woven விளக்கு Shade (Natural Amber Glow)"
    },
    "description": {
      "en": "Ethereal acoustic lighting pendant woven from razor-thin bamboo splints that diffuse warm ambient geometric patterns.",
      "hi": "त्रिपुरा के पारंपरिक बांस शिल्प से बना हैंगिंग लैंप शेड, कमरे में मनमोहक रोशनी बिखेरता है।",
      "kn": "त्रिपुरा के पारंपरिक बांस शिल्प से बना हैंगिंग लैंप शेड, कमरे में मनमोहक रोशनी बिखेरता है।",
      "ta": "त्रिपुरा के पारंपरिक बांस शिल्प से बना हैंगिंग लैंप शेड, कमरे में मनमोहक रोशनी बिखेरता है।"
    },
    "culturalHeritageStory": {
      "en": "Micro-split green bamboo strips woven into ethereal acoustic and lighting shades.",
      "hi": "Micro-split green bamboo strips woven into ethereal acoustic and lighting shades.",
      "kn": "Micro-split green bamboo strips woven into ethereal acoustic and lighting shades.",
      "ta": "Micro-split green bamboo strips woven into ethereal acoustic and lighting shades."
    },
    "materialsUsed": {
      "en": "Micro-split green bamboo strips, natural cane binding, brass pendant fitting",
      "hi": "Micro-split green bamboo strips, natural cane binding, brass pendant fitting",
      "kn": "Micro-split green bamboo strips, natural cane binding, brass pendant fitting",
      "ta": "Micro-split green bamboo strips, natural cane binding, brass pendant fitting"
    },
    "dimensions": {
      "en": "12 x 10 inches",
      "hi": "12 x 10 इंच",
      "kn": "12 x 10 ಇಂಚು",
      "ta": "12 x 10 அங்குலம்"
    },
    "craftCategory": "Natural Fiber Craft",
    "giCraftRegion": "Tripura Bamboo Craft (Tripura)"
  },
  "cmtvoiusn00519e66314uxy5h": {
    "title": {
      "en": "Shantiniketan Embossed Leather Spectacles Case",
      "hi": "शांतिनिकेतन चमड़ा चश्मा केस",
      "kn": "Shantiniketan Embossed ಚರ್ಮದ Spectacles Case",
      "ta": "Shantiniketan Embossed தோல் Spectacles Case"
    },
    "description": {
      "en": "Crush-resistant protective glasses case decorated with Shantiniketan batik floral relief and soft interior lining.",
      "hi": "शांतिनिकेतन चमड़ा चश्मा केस, चश्मे को सुरक्षित रखने के लिए आकर्षक और मजबूत।",
      "kn": "शांतिनिकेतन चमड़ा चश्मा केस, चश्मे को सुरक्षित रखने के लिए आकर्षक और मजबूत।",
      "ta": "शांतिनिकेतन चमड़ा चश्मा केस, चश्मे को सुरक्षित रखने के लिए आकर्षक और मजबूत।"
    },
    "culturalHeritageStory": {
      "en": "Crush-resistant hard shell core wrapped in vegetable dyed batik art leather.",
      "hi": "Crush-resistant hard shell core wrapped in vegetable dyed batik art leather.",
      "kn": "Crush-resistant hard shell core wrapped in vegetable dyed batik art leather.",
      "ta": "Crush-resistant hard shell core wrapped in vegetable dyed batik art leather."
    },
    "materialsUsed": {
      "en": "Rigid protective core wrapped in vegetable-tanned goat leather, magnetic clasp",
      "hi": "Rigid protective core wrapped in vegetable-tanned goat leather, magnetic clasp",
      "kn": "Rigid protective core wrapped in vegetable-tanned goat leather, magnetic clasp",
      "ta": "Rigid protective core wrapped in vegetable-tanned goat leather, magnetic clasp"
    },
    "dimensions": {
      "en": "6.5 x 3 inches",
      "hi": "6.5 x 3 इंच",
      "kn": "6.5 x 3 ಇಂಚು",
      "ta": "6.5 x 3 அங்குலம்"
    },
    "craftCategory": "Natural Fiber Craft",
    "giCraftRegion": "Shantiniketan Leather (West Bengal)"
  },
  "shantiniketan embossed leather spectacles case": {
    "title": {
      "en": "Shantiniketan Embossed Leather Spectacles Case",
      "hi": "शांतिनिकेतन चमड़ा चश्मा केस",
      "kn": "Shantiniketan Embossed ಚರ್ಮದ Spectacles Case",
      "ta": "Shantiniketan Embossed தோல் Spectacles Case"
    },
    "description": {
      "en": "Crush-resistant protective glasses case decorated with Shantiniketan batik floral relief and soft interior lining.",
      "hi": "शांतिनिकेतन चमड़ा चश्मा केस, चश्मे को सुरक्षित रखने के लिए आकर्षक और मजबूत।",
      "kn": "शांतिनिकेतन चमड़ा चश्मा केस, चश्मे को सुरक्षित रखने के लिए आकर्षक और मजबूत।",
      "ta": "शांतिनिकेतन चमड़ा चश्मा केस, चश्मे को सुरक्षित रखने के लिए आकर्षक और मजबूत।"
    },
    "culturalHeritageStory": {
      "en": "Crush-resistant hard shell core wrapped in vegetable dyed batik art leather.",
      "hi": "Crush-resistant hard shell core wrapped in vegetable dyed batik art leather.",
      "kn": "Crush-resistant hard shell core wrapped in vegetable dyed batik art leather.",
      "ta": "Crush-resistant hard shell core wrapped in vegetable dyed batik art leather."
    },
    "materialsUsed": {
      "en": "Rigid protective core wrapped in vegetable-tanned goat leather, magnetic clasp",
      "hi": "Rigid protective core wrapped in vegetable-tanned goat leather, magnetic clasp",
      "kn": "Rigid protective core wrapped in vegetable-tanned goat leather, magnetic clasp",
      "ta": "Rigid protective core wrapped in vegetable-tanned goat leather, magnetic clasp"
    },
    "dimensions": {
      "en": "6.5 x 3 inches",
      "hi": "6.5 x 3 इंच",
      "kn": "6.5 x 3 ಇಂಚು",
      "ta": "6.5 x 3 அங்குலம்"
    },
    "craftCategory": "Natural Fiber Craft",
    "giCraftRegion": "Shantiniketan Leather (West Bengal)"
  },
  "cmtvoiusr00539e66thwz0yur": {
    "title": {
      "en": "Eco-Friendly Jute & Cotton Braided Table Placemats (Set of 6)",
      "hi": "जूट एवं सूती टेबल मैट (6 का सेट)",
      "kn": "Eco-Friendly ಸೆಣಬಿನ & ಹತ್ತಿ Braided Table Placemats (ಸೆಟ್ 6)",
      "ta": "Eco-Friendly சணல் & பருத்தி Braided Table Placemats (தொகுப்பு 6)"
    },
    "description": {
      "en": "Heat-resistant concentric woven dining mats protecting tabletops with natural rustic charm.",
      "hi": "जूट एवं सूती टेबल मैट (6 का सेट), प्राकृतिक जूट और जैविक कपास से निर्मित।",
      "kn": "जूट एवं सूती टेबल मैट (6 का सेट), प्राकृतिक जूट और जैविक कपास से निर्मित।",
      "ta": "जूट एवं सूती टेबल मैट (6 का सेट), प्राकृतिक जूट और जैविक कपास से निर्मित।"
    },
    "culturalHeritageStory": {
      "en": "Heat-resistant dining table protectors woven from renewable farm-grown fibers.",
      "hi": "Heat-resistant dining table protectors woven from renewable farm-grown fibers.",
      "kn": "Heat-resistant dining table protectors woven from renewable farm-grown fibers.",
      "ta": "Heat-resistant dining table protectors woven from renewable farm-grown fibers."
    },
    "materialsUsed": {
      "en": "Natural raw jute fiber, unbleached organic cotton yarn",
      "hi": "Natural raw jute fiber, unbleached organic cotton yarn",
      "kn": "Natural raw jute fiber, unbleached organic cotton yarn",
      "ta": "Natural raw jute fiber, unbleached organic cotton yarn"
    },
    "dimensions": {
      "en": "14 inches diameter each",
      "hi": "14 इंच व्यास प्रत्येक",
      "kn": "14 ಇಂಚು ವ್ಯಾಸ ಪ್ರತಿಯೊಂದು",
      "ta": "14 அங்குலம் விட்டம் ஒவ்வொன்றும்"
    },
    "craftCategory": "Natural Fiber Craft",
    "giCraftRegion": "Kolkata Jute Craft (West Bengal)"
  },
  "eco-friendly jute & cotton braided table placemats (set of 6)": {
    "title": {
      "en": "Eco-Friendly Jute & Cotton Braided Table Placemats (Set of 6)",
      "hi": "जूट एवं सूती टेबल मैट (6 का सेट)",
      "kn": "Eco-Friendly ಸೆಣಬಿನ & ಹತ್ತಿ Braided Table Placemats (ಸೆಟ್ 6)",
      "ta": "Eco-Friendly சணல் & பருத்தி Braided Table Placemats (தொகுப்பு 6)"
    },
    "description": {
      "en": "Heat-resistant concentric woven dining mats protecting tabletops with natural rustic charm.",
      "hi": "जूट एवं सूती टेबल मैट (6 का सेट), प्राकृतिक जूट और जैविक कपास से निर्मित।",
      "kn": "जूट एवं सूती टेबल मैट (6 का सेट), प्राकृतिक जूट और जैविक कपास से निर्मित।",
      "ta": "जूट एवं सूती टेबल मैट (6 का सेट), प्राकृतिक जूट और जैविक कपास से निर्मित।"
    },
    "culturalHeritageStory": {
      "en": "Heat-resistant dining table protectors woven from renewable farm-grown fibers.",
      "hi": "Heat-resistant dining table protectors woven from renewable farm-grown fibers.",
      "kn": "Heat-resistant dining table protectors woven from renewable farm-grown fibers.",
      "ta": "Heat-resistant dining table protectors woven from renewable farm-grown fibers."
    },
    "materialsUsed": {
      "en": "Natural raw jute fiber, unbleached organic cotton yarn",
      "hi": "Natural raw jute fiber, unbleached organic cotton yarn",
      "kn": "Natural raw jute fiber, unbleached organic cotton yarn",
      "ta": "Natural raw jute fiber, unbleached organic cotton yarn"
    },
    "dimensions": {
      "en": "14 inches diameter each",
      "hi": "14 इंच व्यास प्रत्येक",
      "kn": "14 ಇಂಚು ವ್ಯಾಸ ಪ್ರತಿಯೊಂದು",
      "ta": "14 அங்குலம் விட்டம் ஒவ்வொன்றும்"
    },
    "craftCategory": "Natural Fiber Craft",
    "giCraftRegion": "Kolkata Jute Craft (West Bengal)"
  },
  "cmtvoiusv00559e663bfenb8n": {
    "title": {
      "en": "Cuttack Tarkasi 92.5 Sterling Silver Peacock Brooch Pin",
      "hi": "कटक तारकशी शुद्ध चांदी मयूर ब्रोच",
      "kn": "Cuttack ತಾರಕಾಶಿ 92.5 Sterling ಬೆಳ್ಳಿ Peacock ಬ್ರೂಚ್ Pin",
      "ta": "Cuttack தர்காசி 92.5 Sterling வெள்ளி Peacock ப்ரூச் Pin"
    },
    "description": {
      "en": "500-year-old delicate Odia filigree craft drawing paper-thin silver wire into gossamer peacock feathers with safety pin clasp.",
      "hi": "कटक की प्रसिद्ध तारकशी कला, 92.5 शुद्ध चांदी के तारों से हाथ से गढ़ा गया मयूर ब्रोच पिन।",
      "kn": "कटक की प्रसिद्ध तारकशी कला, 92.5 शुद्ध चांदी के तारों से हाथ से गढ़ा गया मयूर ब्रोच पिन।",
      "ta": "कटक की प्रसिद्ध तारकशी कला, 92.5 शुद्ध चांदी के तारों से हाथ से गढ़ा गया मयूर ब्रोच पिन।"
    },
    "culturalHeritageStory": {
      "en": "500-year-old delicate filigree craft drawing hairline silver wire into gossamer lace feathers.",
      "hi": "500-year-old delicate filigree craft drawing hairline silver wire into gossamer lace feathers.",
      "kn": "500-year-old delicate filigree craft drawing hairline silver wire into gossamer lace feathers.",
      "ta": "500-year-old delicate filigree craft drawing hairline silver wire into gossamer lace feathers."
    },
    "materialsUsed": {
      "en": "92.5 Sterling Silver, hairline filigree wire, natural protective lacquer",
      "hi": "92.5 Sterling Silver, hairline filigree wire, natural protective lacquer",
      "kn": "92.5 Sterling Silver, hairline filigree wire, natural protective lacquer",
      "ta": "92.5 Sterling Silver, hairline filigree wire, natural protective lacquer"
    },
    "dimensions": {
      "en": "2.5 x 1.5 inches",
      "hi": "2.5 x 1.5 इंच",
      "kn": "2.5 x 1.5 ಇಂಚು",
      "ta": "2.5 x 1.5 அங்குலம்"
    },
    "craftCategory": "Tribal Jewelry",
    "giCraftRegion": "Cuttack Silver Tarkasi (Odisha)"
  },
  "cuttack tarkasi 92.5 sterling silver peacock brooch pin": {
    "title": {
      "en": "Cuttack Tarkasi 92.5 Sterling Silver Peacock Brooch Pin",
      "hi": "कटक तारकशी शुद्ध चांदी मयूर ब्रोच",
      "kn": "Cuttack ತಾರಕಾಶಿ 92.5 Sterling ಬೆಳ್ಳಿ Peacock ಬ್ರೂಚ್ Pin",
      "ta": "Cuttack தர்காசி 92.5 Sterling வெள்ளி Peacock ப்ரூச் Pin"
    },
    "description": {
      "en": "500-year-old delicate Odia filigree craft drawing paper-thin silver wire into gossamer peacock feathers with safety pin clasp.",
      "hi": "कटक की प्रसिद्ध तारकशी कला, 92.5 शुद्ध चांदी के तारों से हाथ से गढ़ा गया मयूर ब्रोच पिन।",
      "kn": "कटक की प्रसिद्ध तारकशी कला, 92.5 शुद्ध चांदी के तारों से हाथ से गढ़ा गया मयूर ब्रोच पिन।",
      "ta": "कटक की प्रसिद्ध तारकशी कला, 92.5 शुद्ध चांदी के तारों से हाथ से गढ़ा गया मयूर ब्रोच पिन।"
    },
    "culturalHeritageStory": {
      "en": "500-year-old delicate filigree craft drawing hairline silver wire into gossamer lace feathers.",
      "hi": "500-year-old delicate filigree craft drawing hairline silver wire into gossamer lace feathers.",
      "kn": "500-year-old delicate filigree craft drawing hairline silver wire into gossamer lace feathers.",
      "ta": "500-year-old delicate filigree craft drawing hairline silver wire into gossamer lace feathers."
    },
    "materialsUsed": {
      "en": "92.5 Sterling Silver, hairline filigree wire, natural protective lacquer",
      "hi": "92.5 Sterling Silver, hairline filigree wire, natural protective lacquer",
      "kn": "92.5 Sterling Silver, hairline filigree wire, natural protective lacquer",
      "ta": "92.5 Sterling Silver, hairline filigree wire, natural protective lacquer"
    },
    "dimensions": {
      "en": "2.5 x 1.5 inches",
      "hi": "2.5 x 1.5 इंच",
      "kn": "2.5 x 1.5 ಇಂಚು",
      "ta": "2.5 x 1.5 அங்குலம்"
    },
    "craftCategory": "Tribal Jewelry",
    "giCraftRegion": "Cuttack Silver Tarkasi (Odisha)"
  },
  "cmtvoiut000579e666kw16anl": {
    "title": {
      "en": "Bastar Dhokra Bell-Metal Statement Pendant Necklace",
      "hi": "बस्तर ढोकरा कांस्य भारी पेंडेंट माला",
      "kn": "Bastar Dhokra Bell-Metal Statement ಲಾಕೆಟ್ ಹಾರ",
      "ta": "Bastar Dhokra Bell-Metal Statement பதக்கம் நெக்லஸ்"
    },
    "description": {
      "en": "Primal tribal talisman cast with lost-wax coiled bronze wire technique, strung on adjustable natural cotton thread.",
      "hi": "बस्तर ढोकरा कांस्य भारी पेंडेंट माला, जनजातीय लुप्त-मोम तकनीक से निर्मित अनूठी आभूषण कला।",
      "kn": "बस्तर ढोकरा कांस्य भारी पेंडेंट माला, जनजातीय लुप्त-मोम तकनीक से निर्मित अनूठी आभूषण कला।",
      "ta": "बस्तर ढोकरा कांस्य भारी पेंडेंट माला, जनजातीय लुप्त-मोम तकनीक से निर्मित अनूठी आभूषण कला।"
    },
    "culturalHeritageStory": {
      "en": "Wax-threaded brass tribal talisman threaded on natural cotton cord with brass beads.",
      "hi": "Wax-threaded brass tribal talisman threaded on natural cotton cord with brass beads.",
      "kn": "Wax-threaded brass tribal talisman threaded on natural cotton cord with brass beads.",
      "ta": "Wax-threaded brass tribal talisman threaded on natural cotton cord with brass beads."
    },
    "materialsUsed": {
      "en": "Lost-wax cast bell metal bronze, brass alloy, natural hand-spun cotton cord",
      "hi": "Lost-wax cast bell metal bronze, brass alloy, natural hand-spun cotton cord",
      "kn": "Lost-wax cast bell metal bronze, brass alloy, natural hand-spun cotton cord",
      "ta": "Lost-wax cast bell metal bronze, brass alloy, natural hand-spun cotton cord"
    },
    "dimensions": {
      "en": "24 inches cord length",
      "hi": "24 इंच cord लंबाई",
      "kn": "24 ಇಂಚು cord ಉದ್ದ",
      "ta": "24 அங்குலம் cord நீளம்"
    },
    "craftCategory": "Tribal Jewelry",
    "giCraftRegion": "Bastar Dhokra (Chhattisgarh)"
  },
  "bastar dhokra bell-metal statement pendant necklace": {
    "title": {
      "en": "Bastar Dhokra Bell-Metal Statement Pendant Necklace",
      "hi": "बस्तर ढोकरा कांस्य भारी पेंडेंट माला",
      "kn": "Bastar Dhokra Bell-Metal Statement ಲಾಕೆಟ್ ಹಾರ",
      "ta": "Bastar Dhokra Bell-Metal Statement பதக்கம் நெக்லஸ்"
    },
    "description": {
      "en": "Primal tribal talisman cast with lost-wax coiled bronze wire technique, strung on adjustable natural cotton thread.",
      "hi": "बस्तर ढोकरा कांस्य भारी पेंडेंट माला, जनजातीय लुप्त-मोम तकनीक से निर्मित अनूठी आभूषण कला।",
      "kn": "बस्तर ढोकरा कांस्य भारी पेंडेंट माला, जनजातीय लुप्त-मोम तकनीक से निर्मित अनूठी आभूषण कला।",
      "ta": "बस्तर ढोकरा कांस्य भारी पेंडेंट माला, जनजातीय लुप्त-मोम तकनीक से निर्मित अनूठी आभूषण कला।"
    },
    "culturalHeritageStory": {
      "en": "Wax-threaded brass tribal talisman threaded on natural cotton cord with brass beads.",
      "hi": "Wax-threaded brass tribal talisman threaded on natural cotton cord with brass beads.",
      "kn": "Wax-threaded brass tribal talisman threaded on natural cotton cord with brass beads.",
      "ta": "Wax-threaded brass tribal talisman threaded on natural cotton cord with brass beads."
    },
    "materialsUsed": {
      "en": "Lost-wax cast bell metal bronze, brass alloy, natural hand-spun cotton cord",
      "hi": "Lost-wax cast bell metal bronze, brass alloy, natural hand-spun cotton cord",
      "kn": "Lost-wax cast bell metal bronze, brass alloy, natural hand-spun cotton cord",
      "ta": "Lost-wax cast bell metal bronze, brass alloy, natural hand-spun cotton cord"
    },
    "dimensions": {
      "en": "24 inches cord length",
      "hi": "24 इंच cord लंबाई",
      "kn": "24 ಇಂಚು cord ಉದ್ದ",
      "ta": "24 அங்குலம் cord நீளம்"
    },
    "craftCategory": "Tribal Jewelry",
    "giCraftRegion": "Bastar Dhokra (Chhattisgarh)"
  },
  "cmtvoiut400599e66up4l4hfg": {
    "title": {
      "en": "Cuttack Handcrafted Silver Filigree Jhumka Earrings",
      "hi": "कटक चांदी तारकशी झुमका",
      "kn": "Cuttack ಹಸ್ತನಿರ್ಮಿತ ಬೆಳ್ಳಿ ತಾರಕಾಶಿ ಜುಮ್ಕಾ ಓಲೆಗಳು",
      "ta": "Cuttack கைவினை வெள்ளி நுண்ணிய வேலைப்பாடு ஜும்கா கம்மல்"
    },
    "description": {
      "en": "Lightweight gossamer drop jhumka earrings showcasing pristine Odisha heritage goldsmithing and filigree floral cups.",
      "hi": "कटक की पारंपरिक चांदी तारकशी झुमका (92.5 शुद्ध चांदी), कान के लिए हल्का और अत्यंत सुंदर।",
      "kn": "कटक की पारंपरिक चांदी तारकशी झुमका (92.5 शुद्ध चांदी), कान के लिए हल्का और अत्यंत सुंदर।",
      "ta": "कटक की पारंपरिक चांदी तारकशी झुमका (92.5 शुद्ध चांदी), कान के लिए हल्का और अत्यंत सुंदर।"
    },
    "culturalHeritageStory": {
      "en": "Lightweight gossamer drop earrings showcasing pristine Odia heritage goldsmithing.",
      "hi": "Lightweight gossamer drop earrings showcasing pristine Odia heritage goldsmithing.",
      "kn": "Lightweight gossamer drop earrings showcasing pristine Odia heritage goldsmithing.",
      "ta": "Lightweight gossamer drop earrings showcasing pristine Odia heritage goldsmithing."
    },
    "materialsUsed": {
      "en": "92.5 Sterling Silver, fine filigree silver wire, hanging silver bell droplets",
      "hi": "92.5 Sterling Silver, fine filigree silver wire, hanging silver bell droplets",
      "kn": "92.5 Sterling Silver, fine filigree silver wire, hanging silver bell droplets",
      "ta": "92.5 Sterling Silver, fine filigree silver wire, hanging silver bell droplets"
    },
    "dimensions": {
      "en": "2 inches drop length",
      "hi": "2 इंच drop लंबाई",
      "kn": "2 ಇಂಚು drop ಉದ್ದ",
      "ta": "2 அங்குலம் drop நீளம்"
    },
    "craftCategory": "Tribal Jewelry",
    "giCraftRegion": "Cuttack Silver Tarkasi (Odisha)"
  },
  "cuttack handcrafted silver filigree jhumka earrings": {
    "title": {
      "en": "Cuttack Handcrafted Silver Filigree Jhumka Earrings",
      "hi": "कटक चांदी तारकशी झुमका",
      "kn": "Cuttack ಹಸ್ತನಿರ್ಮಿತ ಬೆಳ್ಳಿ ತಾರಕಾಶಿ ಜುಮ್ಕಾ ಓಲೆಗಳು",
      "ta": "Cuttack கைவினை வெள்ளி நுண்ணிய வேலைப்பாடு ஜும்கா கம்மல்"
    },
    "description": {
      "en": "Lightweight gossamer drop jhumka earrings showcasing pristine Odisha heritage goldsmithing and filigree floral cups.",
      "hi": "कटक की पारंपरिक चांदी तारकशी झुमका (92.5 शुद्ध चांदी), कान के लिए हल्का और अत्यंत सुंदर।",
      "kn": "कटक की पारंपरिक चांदी तारकशी झुमका (92.5 शुद्ध चांदी), कान के लिए हल्का और अत्यंत सुंदर।",
      "ta": "कटक की पारंपरिक चांदी तारकशी झुमका (92.5 शुद्ध चांदी), कान के लिए हल्का और अत्यंत सुंदर।"
    },
    "culturalHeritageStory": {
      "en": "Lightweight gossamer drop earrings showcasing pristine Odia heritage goldsmithing.",
      "hi": "Lightweight gossamer drop earrings showcasing pristine Odia heritage goldsmithing.",
      "kn": "Lightweight gossamer drop earrings showcasing pristine Odia heritage goldsmithing.",
      "ta": "Lightweight gossamer drop earrings showcasing pristine Odia heritage goldsmithing."
    },
    "materialsUsed": {
      "en": "92.5 Sterling Silver, fine filigree silver wire, hanging silver bell droplets",
      "hi": "92.5 Sterling Silver, fine filigree silver wire, hanging silver bell droplets",
      "kn": "92.5 Sterling Silver, fine filigree silver wire, hanging silver bell droplets",
      "ta": "92.5 Sterling Silver, fine filigree silver wire, hanging silver bell droplets"
    },
    "dimensions": {
      "en": "2 inches drop length",
      "hi": "2 इंच drop लंबाई",
      "kn": "2 ಇಂಚು drop ಉದ್ದ",
      "ta": "2 அங்குலம் drop நீளம்"
    },
    "craftCategory": "Tribal Jewelry",
    "giCraftRegion": "Cuttack Silver Tarkasi (Odisha)"
  },
  "cmtvoiut8005b9e6667hvkz68": {
    "title": {
      "en": "Handmade Dokra Tribal Elephant Key Ring with Bell Charm",
      "hi": "ढोकरा धातु हाथी कीचेन",
      "kn": "Handmade Dokra ಬುಡಕಟ್ಟು ಆನೆ Key Ring with Bell Charm",
      "ta": "Handmade Dokra பழங்குடி யானை Key Ring with Bell Charm"
    },
    "description": {
      "en": "Solid bronze tribal elephant charm carrying a small chiming bell, handcrafted by Bastar village artisans.",
      "hi": "बस्तर ढोकरा धातु हाथी कीचेन घुंघरू घंटी सहित, खोई-मोम तकनीक से निर्मित मजबूत चाबी का छल्ला।",
      "kn": "बस्तर ढोकरा धातु हाथी कीचेन घुंघरू घंटी सहित, खोई-मोम तकनीक से निर्मित मजबूत चाबी का छल्ला।",
      "ta": "बस्तर ढोकरा धातु हाथी कीचेन घुंघरू घंटी सहित, खोई-मोम तकनीक से निर्मित मजबूत चाबी का छल्ला।"
    },
    "culturalHeritageStory": {
      "en": "Sturdy brass keepsake chiming with traditional tiny clapper bell.",
      "hi": "Sturdy brass keepsake chiming with traditional tiny clapper bell.",
      "kn": "Sturdy brass keepsake chiming with traditional tiny clapper bell.",
      "ta": "Sturdy brass keepsake chiming with traditional tiny clapper bell."
    },
    "materialsUsed": {
      "en": "Lost-wax cast bell metal bronze, brass ring, chiming clapper bell",
      "hi": "Lost-wax cast bell metal bronze, brass ring, chiming clapper bell",
      "kn": "Lost-wax cast bell metal bronze, brass ring, chiming clapper bell",
      "ta": "Lost-wax cast bell metal bronze, brass ring, chiming clapper bell"
    },
    "dimensions": {
      "en": "3 inches length",
      "hi": "3 इंच लंबाई",
      "kn": "3 ಇಂಚು ಉದ್ದ",
      "ta": "3 அங்குலம் நீளம்"
    },
    "craftCategory": "Tribal Jewelry",
    "giCraftRegion": "Bastar Dhokra (Chhattisgarh)"
  },
  "handmade dokra tribal elephant key ring with bell charm": {
    "title": {
      "en": "Handmade Dokra Tribal Elephant Key Ring with Bell Charm",
      "hi": "ढोकरा धातु हाथी कीचेन",
      "kn": "Handmade Dokra ಬುಡಕಟ್ಟು ಆನೆ Key Ring with Bell Charm",
      "ta": "Handmade Dokra பழங்குடி யானை Key Ring with Bell Charm"
    },
    "description": {
      "en": "Solid bronze tribal elephant charm carrying a small chiming bell, handcrafted by Bastar village artisans.",
      "hi": "बस्तर ढोकरा धातु हाथी कीचेन घुंघरू घंटी सहित, खोई-मोम तकनीक से निर्मित मजबूत चाबी का छल्ला।",
      "kn": "बस्तर ढोकरा धातु हाथी कीचेन घुंघरू घंटी सहित, खोई-मोम तकनीक से निर्मित मजबूत चाबी का छल्ला।",
      "ta": "बस्तर ढोकरा धातु हाथी कीचेन घुंघरू घंटी सहित, खोई-मोम तकनीक से निर्मित मजबूत चाबी का छल्ला।"
    },
    "culturalHeritageStory": {
      "en": "Sturdy brass keepsake chiming with traditional tiny clapper bell.",
      "hi": "Sturdy brass keepsake chiming with traditional tiny clapper bell.",
      "kn": "Sturdy brass keepsake chiming with traditional tiny clapper bell.",
      "ta": "Sturdy brass keepsake chiming with traditional tiny clapper bell."
    },
    "materialsUsed": {
      "en": "Lost-wax cast bell metal bronze, brass ring, chiming clapper bell",
      "hi": "Lost-wax cast bell metal bronze, brass ring, chiming clapper bell",
      "kn": "Lost-wax cast bell metal bronze, brass ring, chiming clapper bell",
      "ta": "Lost-wax cast bell metal bronze, brass ring, chiming clapper bell"
    },
    "dimensions": {
      "en": "3 inches length",
      "hi": "3 इंच लंबाई",
      "kn": "3 ಇಂಚು ಉದ್ದ",
      "ta": "3 அங்குலம் நீளம்"
    },
    "craftCategory": "Tribal Jewelry",
    "giCraftRegion": "Bastar Dhokra (Chhattisgarh)"
  },
  "cmtvoiutc005d9e66pcfxj225": {
    "title": {
      "en": "Silver Filigree Miniature Taj Mahal Keepsake in Glass Dome",
      "hi": "चांदी तारकशी लघु ताज महल कांच के डोम में",
      "kn": "ಬೆಳ್ಳಿ ತಾರಕಾಶಿ Miniature Taj Mahal Keepsake in Glass Dome",
      "ta": "வெள்ளி நுண்ணிய வேலைப்பாடு Miniature Taj Mahal Keepsake in Glass Dome"
    },
    "description": {
      "en": "Exquisite architectural marvel rendered solely from spun pure silver filigree threads and sealed under a glass cloche.",
      "hi": "चांदी तारकशी लघु ताज महल कांच के डोम में, कटक के कुशल जौहरियों द्वारा चांदी के तारों से निर्मित।",
      "kn": "चांदी तारकशी लघु ताज महल कांच के डोम में, कटक के कुशल जौहरियों द्वारा चांदी के तारों से निर्मित।",
      "ta": "चांदी तारकशी लघु ताज महल कांच के डोम में, कटक के कुशल जौहरियों द्वारा चांदी के तारों से निर्मित।"
    },
    "culturalHeritageStory": {
      "en": "Exquisite architectural marvel rendered solely from spun 99% pure silver filigree threads.",
      "hi": "Exquisite architectural marvel rendered solely from spun 99% pure silver filigree threads.",
      "kn": "Exquisite architectural marvel rendered solely from spun 99% pure silver filigree threads.",
      "ta": "Exquisite architectural marvel rendered solely from spun 99% pure silver filigree threads."
    },
    "materialsUsed": {
      "en": "92.5 Sterling Silver filigree wire, velvet display base, protective glass dome",
      "hi": "92.5 Sterling Silver filigree wire, velvet display base, protective glass dome",
      "kn": "92.5 Sterling Silver filigree wire, velvet display base, protective glass dome",
      "ta": "92.5 Sterling Silver filigree wire, velvet display base, protective glass dome"
    },
    "dimensions": {
      "en": "4 x 4 x 4 inches",
      "hi": "4 x 4 x 4 इंच",
      "kn": "4 x 4 x 4 ಇಂಚು",
      "ta": "4 x 4 x 4 அங்குலம்"
    },
    "craftCategory": "Tribal Jewelry",
    "giCraftRegion": "Cuttack Silver Tarkasi (Odisha)"
  },
  "silver filigree miniature taj mahal keepsake in glass dome": {
    "title": {
      "en": "Silver Filigree Miniature Taj Mahal Keepsake in Glass Dome",
      "hi": "चांदी तारकशी लघु ताज महल कांच के डोम में",
      "kn": "ಬೆಳ್ಳಿ ತಾರಕಾಶಿ Miniature Taj Mahal Keepsake in Glass Dome",
      "ta": "வெள்ளி நுண்ணிய வேலைப்பாடு Miniature Taj Mahal Keepsake in Glass Dome"
    },
    "description": {
      "en": "Exquisite architectural marvel rendered solely from spun pure silver filigree threads and sealed under a glass cloche.",
      "hi": "चांदी तारकशी लघु ताज महल कांच के डोम में, कटक के कुशल जौहरियों द्वारा चांदी के तारों से निर्मित।",
      "kn": "चांदी तारकशी लघु ताज महल कांच के डोम में, कटक के कुशल जौहरियों द्वारा चांदी के तारों से निर्मित।",
      "ta": "चांदी तारकशी लघु ताज महल कांच के डोम में, कटक के कुशल जौहरियों द्वारा चांदी के तारों से निर्मित।"
    },
    "culturalHeritageStory": {
      "en": "Exquisite architectural marvel rendered solely from spun 99% pure silver filigree threads.",
      "hi": "Exquisite architectural marvel rendered solely from spun 99% pure silver filigree threads.",
      "kn": "Exquisite architectural marvel rendered solely from spun 99% pure silver filigree threads.",
      "ta": "Exquisite architectural marvel rendered solely from spun 99% pure silver filigree threads."
    },
    "materialsUsed": {
      "en": "92.5 Sterling Silver filigree wire, velvet display base, protective glass dome",
      "hi": "92.5 Sterling Silver filigree wire, velvet display base, protective glass dome",
      "kn": "92.5 Sterling Silver filigree wire, velvet display base, protective glass dome",
      "ta": "92.5 Sterling Silver filigree wire, velvet display base, protective glass dome"
    },
    "dimensions": {
      "en": "4 x 4 x 4 inches",
      "hi": "4 x 4 x 4 इंच",
      "kn": "4 x 4 x 4 ಇಂಚು",
      "ta": "4 x 4 x 4 அங்குலம்"
    },
    "craftCategory": "Tribal Jewelry",
    "giCraftRegion": "Cuttack Silver Tarkasi (Odisha)"
  },
  "cmtvoiutg005f9e66qdy3pa7x": {
    "title": {
      "en": "Tribal Brass Coil Bangle Pair with Engraved Geometric Hatching",
      "hi": "जनजातीय पीतल कंगन (जोड़ी)",
      "kn": "ಬುಡಕಟ್ಟು ಹಿತ್ತಾಳೆ ಕಾಯಿಲ್ ಬಳೆಗಳ ಜೋಡಿ",
      "ta": "பழங்குடி பித்தளை வளையல் ஜோடி"
    },
    "description": {
      "en": "Substantial ethnic wrist cuff pair hand-hammered and buffed with cross-hatch tribal chevron engravings by Bastar artisans.",
      "hi": "बस्तर जनजातीय पीतल कंगन (जोड़ी), हाथ से तराशी गई ज्यामितीय आकृतियों और विंटेज पॉलिश सहित।",
      "kn": "बस्तर जनजातीय पीतल कंगन (जोड़ी), हाथ से तराशी गई ज्यामितीय आकृतियों और विंटेज पॉलिश सहित।",
      "ta": "बस्तर जनजातीय पीतल कंगन (जोड़ी), हाथ से तराशी गई ज्यामितीय आकृतियों और विंटेज पॉलिश सहित।"
    },
    "culturalHeritageStory": {
      "en": "Substantial ethnic wrist adornment hand-hammered and buffed by Bastar artisans.",
      "hi": "Substantial ethnic wrist adornment hand-hammered and buffed by Bastar artisans.",
      "kn": "Substantial ethnic wrist adornment hand-hammered and buffed by Bastar artisans.",
      "ta": "Substantial ethnic wrist adornment hand-hammered and buffed by Bastar artisans."
    },
    "materialsUsed": {
      "en": "Hand-hammered solid brass, antique burnished polish",
      "hi": "Hand-hammered solid brass, antique burnished polish",
      "kn": "Hand-hammered solid brass, antique burnished polish",
      "ta": "Hand-hammered solid brass, antique burnished polish"
    },
    "dimensions": {
      "en": "2.6 inches inner diameter",
      "hi": "2.6 इंच inner व्यास",
      "kn": "2.6 ಇಂಚು inner ವ್ಯಾಸ",
      "ta": "2.6 அங்குலம் inner விட்டம்"
    },
    "craftCategory": "Tribal Jewelry",
    "giCraftRegion": "Bastar Dhokra (Chhattisgarh)"
  },
  "tribal brass coil bangle pair with engraved geometric hatching": {
    "title": {
      "en": "Tribal Brass Coil Bangle Pair with Engraved Geometric Hatching",
      "hi": "जनजातीय पीतल कंगन (जोड़ी)",
      "kn": "ಬುಡಕಟ್ಟು ಹಿತ್ತಾಳೆ ಕಾಯಿಲ್ ಬಳೆಗಳ ಜೋಡಿ",
      "ta": "பழங்குடி பித்தளை வளையல் ஜோடி"
    },
    "description": {
      "en": "Substantial ethnic wrist cuff pair hand-hammered and buffed with cross-hatch tribal chevron engravings by Bastar artisans.",
      "hi": "बस्तर जनजातीय पीतल कंगन (जोड़ी), हाथ से तराशी गई ज्यामितीय आकृतियों और विंटेज पॉलिश सहित।",
      "kn": "बस्तर जनजातीय पीतल कंगन (जोड़ी), हाथ से तराशी गई ज्यामितीय आकृतियों और विंटेज पॉलिश सहित।",
      "ta": "बस्तर जनजातीय पीतल कंगन (जोड़ी), हाथ से तराशी गई ज्यामितीय आकृतियों और विंटेज पॉलिश सहित।"
    },
    "culturalHeritageStory": {
      "en": "Substantial ethnic wrist adornment hand-hammered and buffed by Bastar artisans.",
      "hi": "Substantial ethnic wrist adornment hand-hammered and buffed by Bastar artisans.",
      "kn": "Substantial ethnic wrist adornment hand-hammered and buffed by Bastar artisans.",
      "ta": "Substantial ethnic wrist adornment hand-hammered and buffed by Bastar artisans."
    },
    "materialsUsed": {
      "en": "Hand-hammered solid brass, antique burnished polish",
      "hi": "Hand-hammered solid brass, antique burnished polish",
      "kn": "Hand-hammered solid brass, antique burnished polish",
      "ta": "Hand-hammered solid brass, antique burnished polish"
    },
    "dimensions": {
      "en": "2.6 inches inner diameter",
      "hi": "2.6 इंच inner व्यास",
      "kn": "2.6 ಇಂಚು inner ವ್ಯಾಸ",
      "ta": "2.6 அங்குலம் inner விட்டம்"
    },
    "craftCategory": "Tribal Jewelry",
    "giCraftRegion": "Bastar Dhokra (Chhattisgarh)"
  }
};
