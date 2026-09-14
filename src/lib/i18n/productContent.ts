import { SupportedLanguage } from '@/lib/types';
import { translate } from './index';
import { CATALOG_TRANSLATIONS } from './catalogTranslations';

export interface LocalizedProductFields {
  title: string;
  secondaryTitle?: string | null;
  description: string;
  culturalHeritageStory?: string | null;
  materialsUsed: string;
  dimensions?: string;
  colors: string;
  craftCategory: string;
  giCraftRegion?: string | null;
  pricingRationale?: string | null;
}

export interface LocalizedArtisanFields {
  fullName: string;
  bio: string;
  primaryCraft: string;
  district: string;
  state: string;
  location: string;
}

// ─────────────────────────────────────────────────────────────────────────────
// REGIONAL PRODUCT CONTENT DICTIONARY (FOR DEMO PRODUCTS & KNOWN CATALOG ITEMS)
// Keys are matched by normalized product title or ID for maximum resilience
// ─────────────────────────────────────────────────────────────────────────────

type ProductKey = 'surahi' | 'bowl' | 'pot';

const PRODUCT_KEY_MAP: Record<string, ProductKey> = {
  // Product 1: Handcrafted Terracotta Water Pitcher (Surahi)
  'cmtt255is0009ofks9ly4q9jy': 'surahi',
  'handcrafted terracotta water pitcher (surahi)': 'surahi',
  'terracotta water pitcher': 'surahi',

  // Product 2: Glazed Ceramic Floral Serving Bowl
  'cmtt255iw000bofksqjnot1il': 'bowl',
  'glazed ceramic floral serving bowl': 'bowl',
  'ceramic serving bowl': 'bowl',

  // Product 3: Handcrafted Terracotta Clay Pot with Traditional Hand-Painted Motifs
  'cmttupkbv0005kng00hoaqngm': 'pot',
  'handcrafted terracotta clay pot with traditional hand-painted motifs': 'pot',
  'terracotta clay pot': 'pot',
};

function resolveProductKey(product: any): ProductKey | null {
  if (!product) return null;
  if (product.id && PRODUCT_KEY_MAP[product.id]) {
    return PRODUCT_KEY_MAP[product.id];
  }
  if (product.title) {
    const cleanTitle = product.title.trim().toLowerCase();
    if (PRODUCT_KEY_MAP[cleanTitle]) return PRODUCT_KEY_MAP[cleanTitle];
    if (cleanTitle.includes('surahi') || cleanTitle.includes('pitcher')) return 'surahi';
    if (cleanTitle.includes('serving bowl') || cleanTitle.includes('glazed ceramic')) return 'bowl';
    if (cleanTitle.includes('clay pot') || cleanTitle.includes('motifs')) return 'pot';
  }
  return null;
}

// Comprehensive localized content for all 3 demo products across all supported languages
const LOCALIZED_PRODUCTS: Record<ProductKey, Partial<Record<SupportedLanguage, Partial<LocalizedProductFields>>>> = {
  surahi: {
    en: {
      title: 'Handcrafted Terracotta Water Pitcher (Surahi)',
      description: 'Natural clay earthen pitcher crafted on a manual potter wheel. Keeps water naturally cool with porous capillary evaporation. Features traditional geometric Khurja etchings.',
      culturalHeritageStory: 'Passed down through four generations of prajapati potters in Bulandshahr, this pitcher preserves the ancient Vedic technique of porous earthenware cooling.',
      materialsUsed: 'Riverbed alluvial clay, herbal lacquer finish',
      colors: 'Terracotta Red, Earthen Brown',
      craftCategory: 'Terracotta Pottery',
      giCraftRegion: 'Khurja Pottery, Uttar Pradesh',
      pricingRationale: 'Raw clay & kiln fuel costs ₹130. 2.5 days of hand shaping, drying, and kiln firing. Urban boutique benchmark is ₹750-₹900.',
    },
    hi: {
      title: 'हाथ से बनी नक्काशीदार टेराकोटा सुराही',
      description: 'प्राकृतिक मिट्टी से चाक पर तैयार की गई पारंपरिक सुराही। प्राकृतिक वाष्पीकरण से पानी को शीतल रखती है। इस पर खुर्जा की पारंपरिक नक्काशी उकेरी गई है।',
      culturalHeritageStory: 'बुलंदशहर के प्रजापति कुम्हारों की चार पीढ़ियों से चली आ रही यह सुराही वैदिक कालीन प्राकृतिक शीतलन तकनीक को संजोए हुए है।',
      materialsUsed: 'नदी की जलोढ़ मिट्टी, प्राकृतिक हर्बल लैकर फिनिश',
      colors: 'टेराकोटा लाल, प्राकृतिक भूरा',
      craftCategory: 'टेराकोटा मिट्टी कला',
      giCraftRegion: 'खुर्जा मिट्टी कला, उत्तर प्रदेश',
      pricingRationale: 'कच्ची मिट्टी व भट्टी ईंधन लागत ₹130। 2.5 दिन की हस्त-शिल्प गढ़ाई, सुखाई व पकाई। शहरी बुटीक में ₹750-₹900 में बिकती है।',
    },
    kn: {
      title: 'ಹಸ್ತನಿರ್ಮಿತ ಟೆರ್ರಾಕೋಟಾ ನೀರಿನ ಸುರಾಯಿ (ಮಣ್ಣಿನ ಜಗ್)',
      description: 'ಕೈಚಕ್ರದ ಮೇಲೆ ನೈಸರ್ಗಿಕ ಜೇಡಿಮಣ್ಣಿನಿಂದ ತಯಾರಿಸಲಾದ ಸಾಂಪ್ರದಾಯಿಕ ಮಣ್ಣಿನ ಸುರಾಯಿ. ನೈಸರ್ಗಿಕ ಆವಿಯಾಗುವಿಕೆಯ ಮೂಲಕ ಕುಡಿಯುವ ನೀರನ್ನು ತಂಪಾಗಿಡುತ್ತದೆ. ಸಾಂಪ್ರದಾಯಿಕ ಖುರ್ಜಾ ರೇಖಾಚಿತ್ರಗಳನ್ನು ಒಳಗೊಂಡಿದೆ.',
      culturalHeritageStory: 'ಬುಲಂದ್‌ಶಹರ್‌ನ ಪ್ರಜಾಪತಿ ಕುಂಬಾರರ ನಾಲ್ಕು ತಲೆಮಾರುಗಳಿಂದ ಹರಿದುಬಂದ ಈ ಸುರಾಯಿಯು ಪುರಾತನ ಮಣ್ಣಿನ ಪಾತ್ರೆಗಳ ತಂಪಾಗಿಸುವ ಕರಕುಶಲ ಪರಂಪರೆಯನ್ನು ಜೀವಂತವಾಗಿರಿಸಿದೆ.',
      materialsUsed: 'ನದಿಯ ಮೆಕ್ಕಲು ಜೇಡಿಮಣ್ಣು, ನೈಸರ್ಗಿಕ ಸಸ್ಯಜನ್ಯ ಹೊಳಪು',
      colors: 'ಟೆರ್ರಾಕೋಟಾ ಕೆಂಪು, ಮಣ್ಣಿನ ಕಂದು',
      craftCategory: 'ಟೆರ್ರಾಕೋಟಾ ಮಣ್ಣಿನ ಪಾತ್ರೆಗಳು',
      giCraftRegion: 'ಖುರ್ಜಾ ಮಣ್ಣಿನ ಕಲೆ, ಉತ್ತರ ಪ್ರದೇಶ',
      pricingRationale: 'ಕಚ್ಚಾ ಮಣ್ಣು ಮತ್ತು ಸುಡುವ ಇಂಧನ ವೆಚ್ಚ ₹130. 2.5 ದಿನಗಳ ಕೈಕೆಲಸ ಮತ್ತು ಒಣಗಿಸುವಿಕೆ. ನಗರದ ಬೂಟಿಕ್‌ಗಳಲ್ಲಿ ಇದರ ದರ ₹750-₹900.',
    },
    ta: {
      title: 'கைவினை சுடுமண் நீர் கூஜா (சுராஹி)',
      description: 'பாரம்பரிய சக்கரத்தால் இயற்கை களிமண்ணில் செய்யப்பட்ட சுடுமண் கூஜா. நுண்துளை ஆவியாதல் மூலம் தண்ணீரை இயற்கையாகவே குளிர்ச்சியாக வைத்திருக்கிறது.',
      culturalHeritageStory: 'நான்கு தலைமுறைகளாகக் கடந்து வந்த இந்த பாரம்பரிய நீர் கூஜா, பழங்கால சுடுமண் குளிர்ச்சி தொழில்நுட்பத்தைப் பாதுகாக்கிறது.',
      materialsUsed: 'ஆற்று வண்டல் களிமண், மூலிகை அரக்கு பூச்சு',
      colors: 'சுடுமண் சிவப்பு, மண் பழுப்பு',
      craftCategory: 'சுடுமண் மண்பாண்டங்கள்',
      giCraftRegion: 'குர்ஜா மண்பாண்டம், உத்தரபிரதேசம்',
      pricingRationale: 'மூலக்களிமண் மற்றும் சூளை செலவு ₹130. 2.5 நாட்கள் கைவினை உழைப்பு. நகர்ப்புற சந்தை மதிப்பு ₹750-₹900.',
    },
    te: {
      title: 'చేతితో తయారుచేసిన టెర్రకోట నీటి కూజా (సురాహి)',
      description: 'సహజసిద్ధమైన బంకమట్టితో కుమ్మరి చక్రంపై రూపొందించిన సాంప్రదాయ సురాహి. సహజ బాష్పీభవనం ద్వారా తాగునీటిని చల్లగా ఉంచుతుంది.',
      culturalHeritageStory: 'నాలుగు తరాలుగా సంక్రమించిన ఈ కళ, ప్రాచీన భారతీయ మట్టి పాత్రల శీతలీకరణ సాంకేతికతను కాపాడుతుంది.',
      materialsUsed: 'నదీ ఒండ్రు మట్టి, సహజ మూలికా మెరుగు',
      colors: 'టెర్రకోట ఎరుపు, మట్టి గోధుమ',
      craftCategory: 'టెర్రకోట మట్టి పాత్రలు',
      giCraftRegion: 'ఖుర్జా కుండల కళ, ఉత్తరప్రదేశ్',
      pricingRationale: 'ముడి మట్టి మరియు బట్టీ ఇంధన ఖర్చు ₹130. 2.5 రోజుల చేతిపని శ్రమ. నగర మార్కెట్లలో ₹750-₹900 విలువ చేస్తుంది.',
    },
    ml: {
      title: 'കൈകൊണ്ട് നിർമ്മിച്ച ടെറാക്കോട്ട വാട്ടർ ജഗ്ഗ് (സുരാഹി)',
      description: 'പ്രകൃതിദത്ത കളിമണ്ണിൽ ചക്രത്തിൽ കൈകൊണ്ട് നിർമ്മിച്ച സുരാഹി. സൂക്ഷ്മസുഷിര ബാഷ്പീകരണത്തിലൂടെ വെള്ളം സ്വാഭാവികമായി തണുപ്പിച്ചു നിർത്തുന്നു.',
      culturalHeritageStory: 'നാല് തലമുറകളായി കൈമാറിവന്ന പാരമ്പര്യത്തിൽ നിർമ്മിച്ച ഈ സുരാഹി പുരാതന ശൈത്യീകരണ വിദ്യ കാത്തുസൂക്ഷിക്കുന്നു.',
      materialsUsed: 'പുഴയോര എക്കൽ കളിമണ്ണ്, സ്വാഭാവിക ലേപനം',
      colors: 'ടെറാക്കോട്ട ചുവപ്പ്, മൺ തവിട്ട്',
      craftCategory: 'ടെറാക്കോട്ട മൺപാത്രങ്ങൾ',
      giCraftRegion: 'ഖുർജ മൺപാത്ര കല, ഉത്തർപ്രദേശ്',
      pricingRationale: 'കളിമണ്ണും ചൂളച്ചെലവും ₹130. 2.5 ദിവസത്തെ അദ്ധ്വാനം. നഗരങ്ങളിലെ വിപണി നിരക്ക് ₹750-₹900.',
    },
    mr: {
      title: 'हस्तनिर्मित नक्षीदार टेराकोटा सुराही',
      description: 'चाकावर नैसर्गिक गाळाच्या मातीपासून बनवलेली सुराही. नैसर्गिक बाष्पीभवनामुळे पाणी नैसर्गिकरीत्या थंड ठेवते. खुर्जाची पारंपारिक नक्षी कोरलेली आहे.',
      culturalHeritageStory: 'बुलंदशहरमधील प्रजापती कुंभारांच्या चार पिढ्यांचा वारसा असलेली ही सुराही पारंपारिक मातीकलेचे जतन करते.',
      materialsUsed: 'नदीकाठची गाळाची माती, नैसर्गिक रोगण',
      colors: 'टेराकोटा लाल, मातीचा तपकिरी',
      craftCategory: 'टेराकोटा मातीची भांडी',
      giCraftRegion: 'खुर्जा मातीकाम, उत्तर प्रदेश',
      pricingRationale: 'कच्ची माती व भट्टी इंधन खर्च ₹130. 2.5 दिवसांचे परिश्रम. शहरी बुटीकमध्ये ₹750-₹900 दर मिळतो.',
    },
    bn: {
      title: 'হাতে তৈরি ঐতিহ্যবাহী পোড়ামাটির সুরাহি',
      description: 'প্রাকৃতিক পলিমাটি দিয়ে চাকার উপর নিখুঁতভাবে তৈরি পোড়ামাটির সুরাহি। প্রাকৃতিক বাষ্পীভবনের মাধ্যমে পানীয় জল শীতল রাখে।',
      culturalHeritageStory: 'চার প্রজন্মের কুমার পরিবারের ঐতিহ্যবাহী শিল্পকর্ম, যা প্রাচীন ভারতীয় মাটির পাত্রের শীতলীকরণ ঐতিহ্য ধরে রেখেছে।',
      materialsUsed: 'নদীর পলিমাটি, প্রাকৃতিক ভেষজ পালিশ',
      colors: 'টেরাকোটা লাল, মাটির বাদামী',
      craftCategory: 'পোড়ামাটির শিল্প',
      giCraftRegion: 'খুর্জা মৃৎশিল্প, উত্তর প্রদেশ',
      pricingRationale: 'কাঁচামাটি ও ভাটার জ্বালানি খরচ ₹১৩০। আড়াই দিনের হাতের কাজ। শহুরে বুটিকে দাম ₹৭৫০-₹৯০০।',
    },
    gu: {
      title: 'હાથથી બનાવેલી ટેરાકોટા સુરાહી (પાણીનો જગ)',
      description: 'ચાકડા પર કુદરતી માટીમાંથી બનાવેલી પરંપરાગત સુરાહી. કુદરતી બાષ્પીભવન દ્વારા પાણીને કુદરતી રીતે ઠંડુ રાખે છે.',
      culturalHeritageStory: 'ચાર પેઢીઓથી ચાલી આવતી કળા, જે પ્રાચીન ભારતીય માટીકામ પરંપરાને જીવંત રાખે છે.',
      materialsUsed: 'નદીની કાંપવાળી માટી, કુદરતી લાખ ફિનિશ',
      colors: 'ટેરાકોટા લાલ, માટી કથ્થઈ',
      craftCategory: 'ટેરાકોટા માટીકામ',
      giCraftRegion: 'ખુર્જા માટીકામ, ઉત્તર પ્રદેશ',
      pricingRationale: 'કાચી માટી અને ભઠ્ઠી ખર્ચ ₹130. 2.5 દિવસની હાથની મહેનત. શહેરી બજારમાં કિંમત ₹750-₹900.',
    },
    pa: {
      title: 'ਹੱਥੀਂ ਤਿਆਰ ਕੀਤੀ ਟੈਰਾਕੋਟਾ ਸੁਰਾਹੀ (ਪਾਣੀ ਦਾ ਕੁੱਜਾ)',
      description: 'ਚੱਕ ਉੱਤੇ ਕੁਦਰਤੀ ਚੀਕਣੀ ਮਿੱਟੀ ਨਾਲ ਤਿਆਰ ਕੀਤੀ ਸੁਰਾਹੀ। ਪਾਣੀ ਨੂੰ ਕੁਦਰਤੀ ਤਰੀਕੇ ਨਾਲ ਠੰਢਾ ਰੱਖਦੀ ਹੈ।',
      culturalHeritageStory: 'ਚਾਰ ਪੀੜ੍ਹੀਆਂ ਤੋਂ ਚੱਲੀ ਆ ਰਹੀ ਪਰੰਪਰਾਗਤ ਮਿੱਟੀ ਕਲਾ ਜੋ ਪ੍ਰਾਚੀਨ ਜਲ ਠੰਢਾ ਰੱਖਣ ਦੀ ਵਿਧੀ ਨੂੰ ਸੰਭਾਲਦੀ ਹੈ।',
      materialsUsed: 'ਦਰਿਆਈ ਗਾਦ ਵਾਲੀ ਮਿੱਟੀ, ਕੁਦਰਤੀ ਫਿਨਿਸ਼',
      colors: 'ਟੈਰਾਕੋਟਾ ਲਾਲ, ਮਿੱਟੀ ਰੰਗਾ ਭੂਰਾ',
      craftCategory: 'ਮਿੱਟੀ ਦੇ ਭਾਂਡੇ (ਟੈਰਾਕੋਟਾ)',
      giCraftRegion: 'ਖੁਰਜਾ ਮਿੱਟੀ ਕਲਾ, ਉੱਤਰ ਪ੍ਰਦੇਸ਼',
      pricingRationale: 'ਕੱਚੀ ਮਿੱਟੀ ਤੇ ਭੱਠੀ ਖਰਚਾ ₹130। ਢਾਈ ਦਿਨਾਂ ਦੀ ਹੱਥੀਂ ਮਿਹਨਤ। ਸ਼ਹਿਰੀ ਬੁਟੀਕਾਂ ਵਿੱਚ ਮੁੱਲ ₹750-₹900।',
    },
    or: {
      title: 'ହସ୍ତତନ୍ତ ଟେରାକୋଟା ଜଳ ସୁରାହୀ (ମାଟି ପାତ୍ର)',
      description: 'ପ୍ରାକୃତିକ ମାଟିରେ ଚକ ସାହାଯ୍ୟରେ ନିର୍ମିତ ସୁରାହୀ। ପ୍ରାକୃତିକ ବାଷ୍ପୀଭବନ ଦ୍ୱାରା ପାଣିକୁ ପ୍ରାକୃତିକ ଭାବେ ଥଣ୍ଡା ରଖେ।',
      culturalHeritageStory: 'ଚାରି ପିଢ଼ିର କୁମ୍ଭକାର ପରମ୍ପରାରେ ଗଢ଼ା ଏହି ସୁରାହୀ ପ୍ରାଚୀନ ଭାରତୀୟ ମାଟିପାତ୍ର ଐତିହ୍ୟକୁ ବଜାୟ ରଖିଛି।',
      materialsUsed: 'ନଦୀର ପଟୁମାଟି, ପ୍ରାକୃତିକ ଲେପ',
      colors: 'ଟେରାକୋଟା ନାଲି, ମାଟିଆ',
      craftCategory: 'ଟେରାକୋଟା ମାଟିପାତ୍ର',
      giCraftRegion: 'ଖୁର୍ଜା ମୃତ୍ତିକା କଳା, ଉତ୍ତର ପ୍ରଦେଶ',
      pricingRationale: 'କଞ୍ଚାମାଟି ଓ ଭାଟି ଇନ୍ଧନ ଖର୍ଚ୍ଚ ₹130। 2.5 ଦିନର ଶ୍ରମ। ସହରାଞ୍ଚଳ ବଜାର ମୂଲ୍ୟ ₹750-₹900।',
    },
    as: {
      title: 'হাতেৰে নিৰ্মিত টেৰাকোটা পানীৰ সুৰাহী',
      description: 'চকাত প্ৰাকৃতিক মাটিৰে নিৰ্মাণ কৰা সুৰাহী। প্ৰাকৃতিক বাষ্পীভৱনৰ জৰিয়তে খোৱাপানী শীতল কৰি ৰাখে।',
      culturalHeritageStory: 'চাৰিটা প্ৰজন্ম ধৰি চলি অহা ঐতিহ্যবাহী মৃৎশিল্প যিয়ে প্ৰাচীন শীতলীকৰণ পদ্ধতি সজীৱ কৰি ৰাখিছে।',
      materialsUsed: 'নদীৰ পলসুৱা মাটি, প্ৰাকৃতিক পলিচ',
      colors: 'টেৰাকোটা ৰঙা, মাটিৰ ৰং',
      craftCategory: 'টেৰাকোটা মাটিৰ বাচন',
      giCraftRegion: 'খুৰ্জা মৃৎশিল্প, উত্তৰ প্ৰদেশ',
      pricingRationale: 'কেঁচা মাটি আৰু ভাটীৰ ইন্ধন খৰচ ₹১৩০। ২.৫ দিনৰ শ্ৰম। চহৰৰ বজাৰ মূল্য ₹৭৫০-₹৯০০।',
    },
    ur: {
      title: 'دستکاری تراکوٹا صراحی (مٹی کا جھرنا)',
      description: 'قدرتی مٹی سے چاک پر تیار کردہ نفیس صراحی۔ قدرتی بخارات کے عمل سے پانی کو ٹھنڈا اور تازہ رکھتی ہے۔',
      culturalHeritageStory: 'بلند شہر کے چار نسلوں پر محیط کاریگروں کا ورثہ جو ویدک مٹی کی برتن سازی کو زندہ رکھے ہوئے ہے۔',
      materialsUsed: 'دریا کی زرخیز مٹی، قدرتی روغن',
      colors: 'تراکوٹا سرخ، مٹیالہ براؤن',
      craftCategory: 'ٹیراکوٹا مٹی کے برتن',
      giCraftRegion: 'خورجہ مٹی کے برتن، اتر پردیش',
      pricingRationale: 'خام مٹی اور ایندھن لاگت ₹130۔ 2.5 دن کی محنت۔ شہری بوتیک میں قیمت ₹750-₹900۔',
    },
  },

  bowl: {
    en: {
      title: 'Glazed Ceramic Floral Serving Bowl',
      description: 'Lead-free glazed ceramic bowl adorned with hand-painted Persian-Indian floral motifs. High-fired at 1200°C for microwave and dishwasher safety.',
      culturalHeritageStory: 'Rooted in Khurja’s 600-year-old ceramic legacy originating from Mughal court craftspersons.',
      materialsUsed: 'Refined feldspar, quartz clay, lead-free mineral pigment',
      colors: 'Cobalt Blue, Ivory White, Ochre',
      craftCategory: 'Ceramic Art',
      giCraftRegion: 'Khurja Ceramic Craft (Informational)',
      pricingRationale: 'Mineral glaze materials ₹180, high-temperature firing costs ₹100, 3 days multi-stage process.',
    },
    hi: {
      title: 'हस्तनिर्मित ग्लेज्ड सिरेमिक सर्विंग बाउल',
      description: 'सीसा-रहित ग्लेज्ड सिरेमिक बाउल जिस पर हाथ से बने पारंपरिक मुगल-भारतीय पुष्प रूपांकन उकेरे गए हैं। 1200°C पर पकाया गया, माइक्रोवेव व डिशवॉशर सुरक्षित।',
      culturalHeritageStory: 'खुर्जा की 600 वर्ष पुरानी सिरेमिक विरासत, जो मुगल दरबारी शिल्पकारों के समन्वय से विकसित हुई।',
      materialsUsed: 'परिष्कृत फेल्डस्पार, क्वार्ट्ज मिट्टी, सीसा-मुक्त खनिज रंग',
      colors: 'कोबाल्ट नीला, हाथीदांत सफेद, गेरुआ',
      craftCategory: 'ग्लेज्ड सिरेमिक कला',
      giCraftRegion: 'खुर्जा सिरेमिक शिल्प (सूचनात्मक)',
      pricingRationale: 'खनिज ग्लेज सामग्री ₹180, उच्च तापमान भट्टी लागत ₹100, 3 दिन की बहु-चरणीय प्रक्रिया।',
    },
    kn: {
      title: 'ಹಸ್ತಚಿತ್ರಿತ ಗ್ಲೇಸ್ಡ್ ಸೆರಾಮಿಕ್ ಸರ್ವಿಂಗ್ ಬೌಲ್',
      description: 'ಸೀಸ-ಮುಕ್ತ ನೈಸರ್ಗಿಕ ಖನಿಜಗಳಿಂದ ತಯಾರಿಸಿದ ಸುಂದರ ಸೆರಾಮಿಕ್ ಬಟ್ಟಲು. ಕೈಯಿಂದ ಬಿಡಿಸಿದ ಸಾಂಪ್ರದಾಯಿಕ ಹೂವಿನ ವಿನ್ಯಾಸಗಳನ್ನು ಹೊಂದಿದೆ. 1200°C ನಲ್ಲಿ ಸುಡಲಾಗಿದ್ದು ಮೈಕ್ರೋವೇವ್ ಸುರಕ್ಷಿತವಾಗಿದೆ.',
      culturalHeritageStory: 'ಖುರ್ಜಾದ 600 ವರ್ಷಗಳ ಹಳೆಯ ಸೆರಾಮಿಕ್ ಪರಂಪರೆಯ ಕಲಾಕೃತಿ, ಇದು ಭಾರತೀಯ ಮತ್ತು ಪರ್ಷಿಯನ್ ಕಲಾ ಸಂಯೋಜನೆಯನ್ನು ಪ್ರತಿಬಿಂಬಿಸುತ್ತದೆ.',
      materialsUsed: 'ಕ್ವಾರ್ಟ್ಜ್ ಮಣ್ಣು, ಸೀಸ-ಮುಕ್ತ ನೈಸರ್ಗಿಕ ಖನಿಜ ಬಣ್ಣಗಳು',
      colors: 'ಕೋಬಾಲ್ಟ್ ನೀಲಿ, ದಂತದ ಬಿಳಿ, ಕೇಸರಿ',
      craftCategory: 'ಗ್ಲೇಸ್ಡ್ ಸೆರಾಮಿಕ್ಸ್',
      giCraftRegion: 'ಖುರ್ಜಾ ಸೆರಾಮಿಕ್ ಕಲೆ',
      pricingRationale: 'ಖನಿಜ ಬಣ್ಣಗಳು ₹180, ಹೆಚ್ಚಿನ ತಾಪಮಾನದ ಸುಡುವಿಕೆ ₹100, 3 ದಿನಗಳ ಬಹು-ಹಂತದ ಕೈಕೆಲಸ.',
    },
    ta: {
      title: 'கைவினை மலர் அலங்கார பீங்கான் கிண்ணம்',
      description: 'ஈயம் இல்லாத இயற்கை தாதுக்களால் ஆன பீங்கான் கிண்ணம். பாரம்பரிய மலர் வடிவங்கள் கையால் வரையப்பட்டுள்ளன. 1200°C வெப்பத்தில் சுடப்பட்டு உறுதியானது.',
      culturalHeritageStory: 'முகலாய கலை மரபில் தோன்றிய குர்ஜாவின் 600 ஆண்டுகள் பழமையான பீங்கான் பாரம்பரியம்.',
      materialsUsed: 'குவார்ட்ஸ் களிமண், நச்சுத்தன்மையற்ற தாது நிறமிகள்',
      colors: 'கோபால்ட் நீலம், தந்த வெள்ளை, காவி',
      craftCategory: 'பீங்கான் கலை',
      giCraftRegion: 'குர்ஜா பீங்கான் கைவினை',
      pricingRationale: 'தாது வண்ணப் பொருட்கள் ₹180, சூளை செலவு ₹100, 3 நாட்கள் உழைப்பு.',
    },
    te: {
      title: 'చేతితో చిత్రించిన గ్లేజ్డ్ సిరామిక్ సర్వింగ్ బౌల్',
      description: 'సీసం లేని సహజ ఖనిజాలతో రూపొందించిన అందమైన సిరామిక్ గిన్నె. సాంప్రదాయ పూల డిజైన్లు చేతితో చిత్రించబడ్డాయి. 1200°C వద్ద కాల్చబడిన దృఢమైన పాత్ర.',
      culturalHeritageStory: 'ఖుర్జా యొక్క 600 సంవత్సరాల పురాతన సిరామిక్ వారసత్వంలో భాగమైన అద్భుత కళారూపం.',
      materialsUsed: 'క్వార్ట్జ్ మట్టి, సహజ ఖనిజ వర్ణాలు',
      colors: 'కోబాల్ట్ నీలం, దంతపు తెలుపు, కాషాయం',
      craftCategory: 'గ్లేజ్డ్ సిరామిక్స్',
      giCraftRegion: 'ఖుర్జా సిరామిక్ క్రాఫ్ట్',
      pricingRationale: 'ఖనిజ రంగుల సామగ్రి ₹180, బట్టీ ఖర్చు ₹100, 3 రోజుల తయారీ ప్రక్రియ.',
    },
    ml: {
      title: 'കൈകൊണ്ട് പൂക്കൾ വരച്ച ഗ്ലേസ്ഡ് സെറാമിക് ബൗൾ',
      description: 'ലെഡ് രഹിത സെറാമിക് പാത്രം. കൈകൊണ്ട് വരച്ച പരമ്പരാഗത പൂക്കളുടെ ഡിസൈൻ. 1200 ഡിഗ്രിയിൽ ചുട്ടെടുത്ത ഭക്ഷ്യസുരക്ഷിത പാത്രം.',
      culturalHeritageStory: 'മുഗൾ കാലഘട്ടം മുതൽ വളർന്നുവന്ന ഖുർജയിലെ 600 വർഷം പഴക്കമുള്ള സെറാമിക് പാരമ്പര്യം.',
      materialsUsed: 'ക്വാർട്സ് കളിമണ്ണ്, വിഷരഹിത ധാതു നിറങ്ങൾ',
      colors: 'കോബാൾട്ട് നീല, വെള്ള, മഞ്ഞകലർന്ന തവിട്ട്',
      craftCategory: 'സെറാമിക്സ്',
      giCraftRegion: 'ഖുർജ സെറാമിക് ക്രാഫ്റ്റ്',
      pricingRationale: 'ധാതു ചായങ്ങൾ ₹180, ചൂളച്ചെലവ് ₹100, 3 ദിവസത്തെ നിർമ്മാണം.',
    },
    mr: {
      title: 'हस्तनिर्मित नक्षीदार ग्लेज्ड सिरॅमिक सर्व्हिंग बाऊल',
      description: 'शिसेमुक्त सिरॅमिक बाऊल ज्यावर हाताने सुरेख फुलांची नक्षी रेखाटली आहे. 1200°C तापमानावर भाजलेले, मायक्रोवेव्ह सुरक्षित.',
      culturalHeritageStory: 'खुर्जाच्या 600 वर्ष जुन्या सिरॅमिक परंपरेतील उत्कृष्ट कलाकृती.',
      materialsUsed: 'क्वार्ट्झ माती, शिसेमुक्त नैसर्गिक खनिज रंग',
      colors: 'कोबाल्ट निळा, हस्तिदंती पांढरा, पिवळसर',
      craftCategory: 'ग्लेज्ड सिरॅमिक्स',
      giCraftRegion: 'खुर्जा सिरॅमिक कला',
      pricingRationale: 'खनिज रंग साहित्य ₹180, भट्टी खर्च ₹100, 3 दिवसांची निर्मिती प्रक्रिया.',
    },
    bn: {
      title: 'হাতে আঁকা নকশাদার গ্লেজড সিরামিক বাটি',
      description: 'সীসা-মুক্ত গ্লেজড সিরামিক পরিবেশন বাটি যাতে হাতে আঁকা মুঘল-ভারতীয় ফুলের নকশা রয়েছে। ১২০০ ডিগ্রি সেলসিয়াসে পোড়ানো অত্যন্ত মজবুত পাত্র।',
      culturalHeritageStory: 'খুর্জার ৬০০ বছরের প্রাচীন ঐতিহ্যবাহী সিরামিক শিল্পের নিদর্শন।',
      materialsUsed: 'কোয়ার্টজ মাটি, প্রাকৃতিক খনিজ রং',
      colors: 'কোবাল্ট নীল, হাতির দাঁতের সাদা, গেরুয়া',
      craftCategory: 'গ্লেজড সিরামিকস',
      giCraftRegion: 'খুর্জা সিরামিক শিল্প',
      pricingRationale: 'খনিজ রঙের খরচ ₹১৮০, ভাটার খরচ ₹১০০, ৩ দিনের বহুস্তরীয় কাজ।',
    },
    gu: {
      title: 'હાથથી ચીતરેલો ગ્લેઝ્ડ સિરામિક સર્વિંગ બાઉલ',
      description: 'સીસા-મુક્ત ગ્લેઝ્ડ સિરામિક વાટકો જેના પર સુંદર પરંપરાગત ફૂલોની ભાત હાથથી દોરેલી છે. 1200°C પર પકવેલું મજબૂત વાસણ.',
      culturalHeritageStory: 'ખુર્જાના 600 વર્ષ જૂના સિરામિક વારસામાંથી આવતી અદ્ભુત કલાકૃતિ.',
      materialsUsed: 'ક્વાર્ટ્ઝ માટી, સીસા-મુક્ત કુદરતી ખનિજ રંગો',
      colors: 'કોબાલ્ટ વાદળી, હાથીદાંત સફેદ, ગેરુ',
      craftCategory: 'સિરામિક્સ',
      giCraftRegion: 'ખુર્જા સિરામિક કળા',
      pricingRationale: 'ખનિજ રંગો ₹180, ભઠ્ઠી ખર્ચ ₹100, 3 દિવસની કારીગરી.',
    },
    pa: {
      title: 'ਹੱਥੀਂ ਉੱਕਰਿਆ ਗਲੇਜ਼ਡ ਸਿਰੇਮਿਕ ਬਾਊਲ (ਕੌਲੀ)',
      description: 'ਸਿੱਕੇ ਤੋਂ ਮੁਕਤ ਸਿਰੇਮਿਕ ਕੌਲੀ ਜਿਸ ਉੱਤੇ ਹੱਥੀਂ ਮੁਗਲਾਈ ਫੁੱਲਕਾਰੀ ਚਿੱਤਰਕਾਰੀ ਕੀਤੀ ਗਈ ਹੈ। 1200°C ਉੱਤੇ ਪਕਾਇਆ ਮਜ਼ਬੂਤ ਭਾਂਡਾ।',
      culturalHeritageStory: 'ਖੁਰਜਾ ਦੀ 600 ਸਾਲ ਪੁਰਾਣੀ ਪ੍ਰਸਿੱਧ ਸਿਰੇਮਿਕ ਦਸਤਕਾਰੀ ਵਿਰਾਸਤ ਦਾ ਹਿੱਸਾ।',
      materialsUsed: 'ਕੁਆਰਟਜ਼ ਮਿੱਟੀ, ਕੁਦਰਤੀ ਖਣਿਜ ਰੰਗ',
      colors: 'ਕੋਬਾਲਟ ਨੀਲਾ, ਹਾਥੀ ਦੰਦ ਚਿੱਟਾ, ਗੇਰੂ',
      craftCategory: 'ਗਲੇਜ਼ਡ ਸਿਰੇਮਿਕਸ',
      giCraftRegion: 'ਖੁਰਜਾ ਸਿਰੇਮਿਕ ਕਲਾ',
      pricingRationale: 'ਖਣਿਜ ਰੰਗ ₹180, ਭੱਠੀ ਖਰਚਾ ₹100, 3 ਦਿਨਾਂ ਦਾ ਕੰਮ।',
    },
    or: {
      title: 'ହସ୍ତଚିତ୍ରିତ ଗ୍ଲେଜ୍ଡ ସିରାମିକ୍ ପରିବେଷଣ ପାତ୍ର',
      description: 'ସୀସା-ମୁକ୍ତ ପ୍ରାକୃତିକ ସିରାମିକ୍ ପାତ୍ର। ହାତରେ ଅଙ୍କିତ ପାରମ୍ପରିକ ଫୁଲର ନକସା ରହିଛି। 1200°C ରେ ପୋଡ଼ା ଯାଇଥିବା ଦୃଢ଼ ପାତ୍ର।',
      culturalHeritageStory: 'ଖୁର୍ଜାର 600 ବର୍ଷର ପୁରାତନ ସିରାମିକ୍ ଐତିହ୍ୟର ସୁନ୍ଦର ନିଦର୍ଶନ।',
      materialsUsed: 'କ୍ୱାର୍ଟ୍ଜ ମାଟି, ବିଷମୁକ୍ତ ଖଣିଜ ରଙ୍ଗ',
      colors: 'କୋବାଲ୍ଟ ନୀଳ, ଧଳା, ଗେରୁଆ',
      craftCategory: 'ସିରାମିକ୍ସ',
      giCraftRegion: 'ଖୁର୍ଜା ସିରାମିକ୍ କଳା',
      pricingRationale: 'ରଙ୍ଗ ସାମଗ୍ରୀ ₹180, ଭାଟି ଖର୍ଚ୍ଚ ₹100, 3 ଦିନର ପରିଶ୍ରମ।',
    },
    as: {
      title: 'হাতেৰে অংকিত গ্লেজড চিৰামিক ছাৰ্ভিং বাউল',
      description: 'সীহ-মুক্ত চিৰামিক বাটি য’ত হাতেৰে পৰম্পৰাগত ফুলৰ নক্সা অংকন কৰা হৈছে। ১২০০ ডিগ্ৰী উষ্ণতাত তৈয়াৰ কৰা মজবুত বাচন।',
      culturalHeritageStory: 'খুৰ্জাৰ ৬০০ বছৰীয়া ঐতিহ্যমণ্ডিত চিৰামিক শিল্পৰ অনুপম নিদৰ্শন।',
      materialsUsed: 'কোৱাৰ্টজ মাটি, প্ৰাকৃতিক খনিজ ৰং',
      colors: 'কোবাল্ট নীলা, হাতীদাঁতৰ বগা, গেৰুৱা',
      craftCategory: 'গ্লেজড চিৰামিক',
      giCraftRegion: 'খুৰ্জা চিৰামিক শিল্প',
      pricingRationale: 'ৰঙৰ খৰচ ₹১৮০, ভাটীৰ খৰচ ₹১০০, ৩ দিনৰ পৰিশ্ৰম।',
    },
    ur: {
      title: 'دستکاری گلکاری گلیزڈ سیرامک پیالہ',
      description: 'سیسہ سے پاک گلیزڈ سیرامک پیالہ جس پر مغلئی پھولوں کے روایتی نقش و نگار ہاتھ سے بنائے گئے ہیں۔ 1200 ڈگری پر تیار شدہ پائیدار برتن۔',
      culturalHeritageStory: 'خورجہ کی 600 سالہ قدیم اور شاندار سیرامک دستکاری کا نمونہ۔',
      materialsUsed: 'کوارٹز مٹی، قدرتی معدنی رنگ',
      colors: 'کوبالٹ نیلا، ہاتھی دانت سفید، گیروا',
      craftCategory: 'گلیزڈ سیرامکس',
      giCraftRegion: 'خورجہ سیرامک دستکاری',
      pricingRationale: 'معدنی روغن لاگت ₹180، بھٹی خرچ ₹100، 3 دن کی مرحلہ وار محنت۔',
    },
  },

  pot: {
    en: {
      title: 'Handcrafted Terracotta Clay Pot with Traditional Hand-Painted Motifs',
      description: 'An authentic, handcrafted terracotta pot featuring delicate traditional hand-painted floral and geometric motifs in natural white pigment.',
      culturalHeritageStory: 'Shaped on a traditional wheel using rich alluvial clay from Bulandshahr, this clay pot carries forward ancient Indian pottery traditions where natural earthenware keeps contents cool and pure.',
      materialsUsed: 'Terracotta Clay, Natural White Paint',
      colors: 'Terracotta Brown, White',
      craftCategory: 'Pottery and Ceramics',
      giCraftRegion: 'Traditional Indian Craft',
      pricingRationale: 'This price range accounts for the skilled wheel-throwing technique and hand-painted motif detailing originating from the renowned pottery region of Bulandshahr, Uttar Pradesh. Based on your ₹250 base cost and 22 years of crafting experience, the suggested fair price provides a healthy profit margin for your artistic skill.',
    },
    hi: {
      title: 'पारंपरिक सुंदर पेंटिंग के साथ हस्तनिर्मित मिट्टी का मटका',
      description: 'प्राकृतिक मिट्टी से चाक पर हस्तनिर्मित प्रामाणिक मटका जिस पर प्राकृतिक सफेद रंग से पारंपरिक ज्यामितीय व पुष्प रूपांकन उकेरे गए हैं।',
      culturalHeritageStory: 'बुलंदशहर की समृद्ध जलोढ़ मिट्टी से चाक पर तैयार, यह मटका प्राचीन भारतीय कुम्हार परंपरा को आगे बढ़ाता है जहां मिट्टी के बर्तन जल को शीतल और शुद्ध रखते हैं।',
      materialsUsed: 'टेराकोटा मिट्टी, प्राकृतिक सफेद रंग',
      colors: 'टेराकोटा भूरा, सफेद',
      craftCategory: 'मिट्टी के बर्तन एवं कला',
      giCraftRegion: 'पारंपरिक भारतीय शिल्प',
      pricingRationale: 'यह मूल्य सीमा कुशल चाक-शिल्प तकनीक और हाथ से की गई नक्काशी को ध्यान में रखकर तय की गई है। ₹250 मूल लागत और 22 वर्षों के शिल्प अनुभव के आधार पर उचित लाभ सुनिश्चित किया गया है।',
    },
    kn: {
      title: 'ಸಾಂಪ್ರದಾಯಿಕ ಹಸ್ತಚಿತ್ರಿತ ವಿನ್ಯಾಸಗಳ ಟೆರ್ರಾಕೋಟಾ ಮಣ್ಣಿನ ಮಡಕೆ',
      description: 'ನೈಸರ್ಗಿಕ ಬಿಳಿ ಬಣ್ಣದಲ್ಲಿ ಕೈಯಿಂದ ಬಿಡಿಸಲಾದ ಸುಂದರ ಹೂವಿನ ವಿನ್ಯಾಸಗಳನ್ನು ಒಳಗೊಂಡಿರುವ ಅಪ್ಪಟ ಸಾಂಪ್ರದಾಯಿಕ ಮಣ್ಣಿನ ಮಡಕೆ.',
      culturalHeritageStory: 'ಬುಲಂದ್‌ಶಹರ್‌ನ ಫಲವತ್ತಾದ ನದಿ ಮಣ್ಣಿನಿಂದ ಕುಂಬಾರ ಚಕ್ರದ ಮೇಲೆ ರೂಪಿಸಲಾದ ಈ ಮಡಕೆಯು ಪುರಾತನ ಭಾರತೀಯ ಕಲಾ ಸಂಸ್ಕೃತಿಯನ್ನು ಪ್ರತಿನಿಧಿಸುತ್ತದೆ.',
      materialsUsed: 'ಟೆರ್ರಾಕೋಟಾ ಜೇಡಿಮಣ್ಣು, ನೈಸರ್ಗಿಕ ಬಿಳಿ ಬಣ್ಣ',
      colors: 'ಟೆರ್ರಾಕೋಟಾ ಕಂದು, ಬಿಳಿ',
      craftCategory: 'ಮಣ್ಣಿನ ಮಡಕೆಗಳು ಮತ್ತು ಸೆರಾಮಿಕ್ಸ್',
      giCraftRegion: 'ಸಾಂಪ್ರದಾಯಿಕ ಭಾರತೀಯ ಕರಕುಶಲ',
      pricingRationale: 'ಕುಶಲ ಚಕ್ರ ತಂತ್ರಜ್ಞಾನ ಮತ್ತು ಕೈಚಿತ್ರ ಕಲೆಯನ್ನು ಪರಿಗಣಿಸಿ ಬೆಲೆ ನಿಗದಿಪಡಿಸಲಾಗಿದೆ. ₹250 ಮೂಲ ವೆಚ್ಚ ಮತ್ತು 22 ವರ್ಷಗಳ ಅನುಭವಕ್ಕೆ ನ್ಯಾಯಯುತ ಲಾಭ ಒದಗಿಸುತ್ತದೆ.',
    },
    ta: {
      title: 'பாரம்பரிய கை ஓவியம் தீட்டப்பட்ட சுடுமண் பானை',
      description: 'இயற்கை வெள்ளை வண்ணத்தில் பாரம்பரிய பூ வேலைப்பாடுகளுடன் கையால் வடிவமைக்கப்பட்ட அசல் சுடுமண் பானை.',
      culturalHeritageStory: 'வண்டல் களிமண்ணில் கைவினைச் சக்கரத்தில் வார்க்கப்பட்ட இந்த மண்பானை பண்டைய இந்திய மண்பாண்ட மரபைத் தொடர்கிறது.',
      materialsUsed: 'சுடுமண் களிமண், இயற்கை வெள்ளை சாயம்',
      colors: 'சுடுமண் பழுப்பு, வெள்ளை',
      craftCategory: 'மண்பாண்டங்கள் & பீங்கான்',
      giCraftRegion: 'பாரம்பரிய இந்திய கைவினை',
      pricingRationale: 'கைவினைத் திறன் மற்றும் ஓவிய வேலைப்பாடுகளுக்கு ஏற்ப நியாயமான விலை நிர்ணயிக்கப்பட்டுள்ளது. ₹250 மூல செலவுக்கு தகுந்த லாபத்தை உறுதி செய்கிறது.',
    },
    te: {
      title: 'సాంప్రదాయ చేతి చిత్రాలతో కూడిన టెర్రకోట మట్టి కుండ',
      description: 'సహజ తెలుపు రంగుతో సాంప్రదాయ పూల డిజైన్లు చేతితో గీయబడిన అచ్చమైన టెర్రకోట మట్టి కుండ.',
      culturalHeritageStory: 'ఒండ్రు మట్టితో సాంప్రదాయ చక్రంపై రూపొందించిన ఈ కుండ ప్రాచీన భారతీయ కుండల సంస్కృతిని కాపాడుతుంది.',
      materialsUsed: 'టెర్రకోట మట్టి, సహజ తెలుపు రంగు',
      colors: 'టెర్రకోట గోధుమ, తెలుపు',
      craftCategory: 'కుండలు మరియు సిరామిక్స్',
      giCraftRegion: 'సాంప్రదాయ భారతీయ కళ',
      pricingRationale: 'చక్రంపై నైపుణ్యంతో చేసిన పని మరియు చేతి పెయింటింగ్‌ను పరిగణనలోకి తీసుకుని సరసమైన ధర నిర్ణయించబడింది. ₹250 బేస్ ఖర్చుకు తగిన లాభం అందిస్తుంది.',
    },
    ml: {
      title: 'പരമ്പരാഗത ചിത്രപ്പണികളുള്ള ടെറാക്കോട്ട മൺകലങ്ങൾ',
      description: 'സ്വാഭാവിക വെള്ള ചായത്തിൽ കൈകൊണ്ട് പൂക്കളും ചിത്രങ്ങളും വരച്ച പരമ്പരാഗത ടെറാക്കോട്ട മൺകലം.',
      culturalHeritageStory: 'പുഴയോര മണ്ണിൽ പരമ്പരാഗത ചക്രത്തിൽ തീർത്ത ഈ മൺപാത്രം ഉള്ളിലെ ഉള്ളടക്കത്തെ തണുപ്പും ശുദ്ധിയുമായി സൂക്ഷിക്കുന്നു.',
      materialsUsed: 'ടെറാക്കോട്ട കളിമണ്ണ്, പ്രകൃതിദത്ത വെള്ള പെയിന്റ്',
      colors: 'ടെറാക്കോട്ട തവിട്ട്, വെള്ള',
      craftCategory: 'മൺപാത്രങ്ങളും സെറാമിക്സും',
      giCraftRegion: 'പരമ്പരാഗത ഇന്ത്യൻ കരകൗശലം',
      pricingRationale: 'കൈവേലയുടെ വൈദഗ്ധ്യവും 22 വർഷത്തെ അനുഭവപരിചയവും കണക്കിലെടുത്ത് ന്യായമായ വില ഉറപ്പാക്കിയിരിക്കുന്നു.',
    },
    mr: {
      title: 'पारंपारिक नक्षीकाम असलेले हस्तनिर्मित मातीचे मडके',
      description: 'नैसर्गिक पांढऱ्या रंगात पारंपारिक नक्षीकाम केलेले अस्सल टेराकोटा मातीचे मडके.',
      culturalHeritageStory: 'बुलंदशहरच्या सुपीक गाळाच्या मातीतून चाकावर घडवलेले हे मडके प्राचीन भारतीय कुंभार परंपरेचे प्रतीक आहे.',
      materialsUsed: 'टेराकोटा माती, नैसर्गिक पांढरा रंग',
      colors: 'टेराकोटा तपकिरी, पांढरा',
      craftCategory: 'मातीची भांडी व सिरॅमिक्स',
      giCraftRegion: 'पारंपारिक भारतीय हस्तकला',
      pricingRationale: 'चाकावरील कुशल कारागिरी आणि हस्तकलेची किंमत लक्षात घेऊन योग्य दर निश्चित केला आहे. ₹250 मूळ खर्चावर वाजवी नफा मिळतो.',
    },
    bn: {
      title: 'ঐতিহ্যবাহী নকশায় আঁকা মাটির কলসি বা মটকা',
      description: 'প্রাকৃতিক সাদা রঙে ঐতিহ্যবাহী ফুলের মোটিফ হাতে আঁকা খাঁটি পোড়ামাটির পাত্র।',
      culturalHeritageStory: 'প্রাচীন ভারতীয় ঐতিহ্য বজায় রেখে নদীর পলিমাটি দিয়ে চাকার উপর নিপুণ হাতে তৈরি মাটির পাত্র।',
      materialsUsed: 'টেরাকোটা মাটি, প্রাকৃতিক সাদা রং',
      colors: 'টেরাকোটা বাদামী, সাদা',
      craftCategory: 'মৃৎশিল্প ও সিরামিকস',
      giCraftRegion: 'ঐতিহ্যবাহী ভারতীয় হস্তশিল্প',
      pricingRationale: 'দক্ষ হাতের কাজ এবং ২২ বছরের অভিজ্ঞতার ভিত্তিতে এই ন্যায্য মূল্য নির্ধারণ করা হয়েছে।',
    },
    gu: {
      title: 'પરંપરાગત ભાતવાળી હાથથી ચીતરેલી માટીની માટલી',
      description: 'કુદરતી સફેદ રંગથી પરંપરાગત ભાત હાથથી દોરેલી અસલ ટેરાકોટા માટીની માટલી.',
      culturalHeritageStory: 'કાંપવાળી માટીમાંથી ચાકડા પર બનેલી આ માટલી પ્રાચીન ભારતીય પરંપરાને આગળ વધારે છે.',
      materialsUsed: 'ટેરાકોટા માટી, કુદરતી સફેદ રંગ',
      colors: 'ટેરાકોટા કથ્થઈ, સફેદ',
      craftCategory: 'માટીકામ અને સિરામિક્સ',
      giCraftRegion: 'પરંપરાગત ભારતીય હસ્તકલા',
      pricingRationale: 'ચાકડાની કુશળ કારીગરી અને 22 વર્ષના અનુભવના આધારે વ્યાજબી નફો આપતી કિંમત નક્કી કરવામાં આવી છે.',
    },
    pa: {
      title: 'ਪਰੰਪਰਾਗਤ ਨੱਕਾਸ਼ੀ ਵਾਲਾ ਹੱਥੀਂ ਬਣਿਆ ਮਿੱਟੀ ਦਾ ਘੜਾ',
      description: 'ਕੁਦਰਤੀ ਚਿੱਟੇ ਰੰਗ ਨਾਲ ਰਵਾਇਤੀ ਫੁੱਲਕਾਰੀ ਚਿੱਤਰਾਂ ਵਾਲਾ ਖ਼ਾਲਸ ਟੈਰਾਕੋਟਾ ਘੜਾ।',
      culturalHeritageStory: 'ਬੁਲੰਦਸ਼ਹਿਰ ਦੀ ਨਹਿਰੀ ਮਿੱਟੀ ਨਾਲ ਚੱਕ ਤੇ ਤਿਆਰ ਘੜਾ ਜੋ ਪ੍ਰਾਚੀਨ ਭਾਰਤੀ ਦਸਤਕਾਰੀ ਦਾ ਨਮੂਨਾ ਹੈ।',
      materialsUsed: 'ਟੈਰਾਕੋਟਾ ਮਿੱਟੀ, ਕੁਦਰਤੀ ਚਿੱਟਾ ਰੰਗ',
      colors: 'ਟੈਰਾਕੋਟਾ ਭੂਰਾ, ਚਿੱਟਾ',
      craftCategory: 'ਮਿੱਟੀ ਦੇ ਭਾਂਡੇ ਅਤੇ ਸਿਰੇਮਿਕਸ',
      giCraftRegion: 'ਪਰੰਪਰਾਗਤ ਭਾਰਤੀ ਦਸਤਕਾਰੀ',
      pricingRationale: 'ਮਾਹਰ ਕਾਰੀਗਰੀ ਅਤੇ 22 ਸਾਲਾਂ ਦੇ ਤਜ਼ਰਬੇ ਦੇ ਆਧਾਰ ਤੇ ਉਚਿਤ ਮੁੱਲ ਤੈਅ ਕੀਤਾ ਗਿਆ ਹੈ।',
    },
    or: {
      title: 'ପାରମ୍ପରିକ ଚିତ୍ରିତ ହସ୍ତତନ୍ତ ଟେରାକୋଟା ମାଟି ମାଠିଆ',
      description: 'ପ୍ରାକୃତିକ ଧଳା ରଙ୍ଗରେ ହାତରେ ଅଙ୍କିତ ପାରମ୍ପରିକ ଫୁଲ ନକସା ଥିବା ଟେରାକୋଟା ମାଟି ପାତ୍ର।',
      culturalHeritageStory: 'ପଟୁମାଟିରେ ନିର୍ମିତ ଏହି ମାଠିଆ ପ୍ରାଚୀନ ଭାରତୀୟ ମାଟିପାତ୍ର କଳାକୁ ପ୍ରତିପାଦିତ କରେ।',
      materialsUsed: 'ଟେରାକୋଟା ମାଟି, ପ୍ରାକୃତିକ ଧଳା ରଙ୍ଗ',
      colors: 'ଟେରାକୋଟା ମାଟିଆ, ଧଳା',
      craftCategory: 'ମୃତ୍ତିକା କଳା ଓ ସିରାମିକ୍ସ',
      giCraftRegion: 'ପାରମ୍ପରିକ ଭାରତୀୟ ହସ୍ତଶିଳ୍ପ',
      pricingRationale: 'ଚକର ଦକ୍ଷ କାରିଗରୀ ଏବଂ 22 ବର୍ଷର ଅଭିଜ୍ଞତାକୁ ନେଇ ଉଚିତ ମୂଲ୍ୟ ଧାର୍ଯ୍ୟ ହୋଇଛି।',
    },
    as: {
      title: 'পৰম্পৰাগত নক্সাযুক্ত হাতেৰে সজা মাটিৰ পাত্ৰ',
      description: 'প্ৰাকৃতিক বগা ৰঙেৰে ফুলৰ নক্সা হাতেৰে অংকন কৰা খাঁটি টেৰাকোটা মাটিৰ কলহ।',
      culturalHeritageStory: 'বুলন্দচহৰৰ পলসুৱা মাটিৰে চকাত তৈয়াৰ কৰা এই কলহে প্ৰাচীন ভাৰতীয় মৃৎশিল্পৰ পৰম্পৰা ধৰি ৰাখিছে।',
      materialsUsed: 'টেৰাকোটা মাটি, প্ৰাকৃতিক বগা ৰং',
      colors: 'টেৰাকোটা মাটিৰ ৰং, বগা',
      craftCategory: 'মৃৎশিল্প আৰু চিৰামিক',
      giCraftRegion: 'পৰম্পৰাগত ভাৰতীয় শিল্প',
      pricingRationale: 'চকাৰ নিপুণ কাৰুকাৰ্য আৰু ২২ বছৰীয়া অভিজ্ঞতাৰ আধাৰত উচিত মূল্য নিৰ্ধাৰণ কৰা হৈছে।',
    },
    ur: {
      title: 'روایتی دستکاری نقاشی شدہ تراکوٹا مٹی کا مٹکا',
      description: 'قدرتی سفید رنگ سے روایتی پھولدار اور ہندسی ڈیزائنوں سے سجا ہوا اصلی تراکوٹا مٹکا۔',
      culturalHeritageStory: 'بلند شہر کی زرخیز مٹی سے روایتی چاک پر تیار کردہ یہ مٹکا قدیم ہندوستانی برتن سازی کے ورثے کو آگے بڑھاتا ہے۔',
      materialsUsed: 'تراکوٹا مٹی، قدرتی سفید رنگ',
      colors: 'تراکوٹا بھورا، سفید',
      craftCategory: 'مٹی کے برتن اور سیرامکس',
      giCraftRegion: 'روایتی ہندوستانی دستکاری',
      pricingRationale: 'ماہرانہ چاک تکنیک اور 22 سالہ تجربے کو مدنظر رکھ کر یہ منصفانہ قیمت تجویز کی گئی ہے۔',
    },
  },
};

// ─────────────────────────────────────────────────────────────────────────────
// LOCALIZED ARTISAN PROFILES (FOR DEMO ARTISAN RAMESH KUMAR PRAJAPATI)
// ─────────────────────────────────────────────────────────────────────────────

const ARTISAN_LOCALIZATIONS: Record<string, Partial<Record<SupportedLanguage, Partial<LocalizedArtisanFields>>>> = {
  // Ramesh Kumar Prajapati
  default: {
    en: {
      fullName: 'Ramesh Kumar Prajapati',
      bio: '4th-generation master potter keeping Khurja earthen pottery traditions alive using natural clay and handcrafted kiln firings.',
      primaryCraft: 'Terracotta & Ceramic Pottery',
      district: 'Bulandshahr / Khurja',
      state: 'Uttar Pradesh',
      location: 'Bulandshahr, Uttar Pradesh',
    },
    hi: {
      fullName: 'रमेश कुमार प्रजापति',
      bio: 'खुर्जा की पारंपरिक मिट्टी कला के चौथी पीढ़ी के शिल्पकार। प्राकृतिक मिट्टी और परंपरागत भट्टी से बर्तन व कलाकृतियां बनाते हैं।',
      primaryCraft: 'टेराकोटा एवं सिरेमिक मिट्टी कला',
      district: 'बुलंदशहर / खुर्जा',
      state: 'उत्तर प्रदेश',
      location: 'बुलंदशहर, उत्तर प्रदेश',
    },
    kn: {
      fullName: 'ರಮೇಶ್ ಕುಮಾರ್ ಪ್ರಜಾಪತಿ',
      bio: 'ನೈಸರ್ಗಿಕ ಜೇಡಿಮಣ್ಣು ಮತ್ತು ಸಾಂಪ್ರದಾಯಿಕ ಬಟ್ಟಿ ಬೆಂಕಿಯನ್ನು ಬಳಸಿ ಖುರ್ಜಾ ಮಣ್ಣಿನ ಪಾತ್ರೆಗಳ ಪರಂಪರೆಯನ್ನು ಜೀವಂತವಾಗಿಟ್ಟಿರುವ 4ನೇ ತಲೆಮಾರಿನ ಪ್ರಮುಖ ಕುಂಬಾರ.',
      primaryCraft: 'ಟೆರ್ರಾಕೋಟಾ ಮತ್ತು ಸೆರಾಮಿಕ್ ಮಣ್ಣಿನ ಕಲೆ',
      district: 'ಬುಲಂದ್‌ಶಹರ್ / ಖುರ್ಜಾ',
      state: 'ಉತ್ತರ ಪ್ರದೇಶ',
      location: 'ಬುಲಂದ್‌ಶಹರ್, ಉತ್ತರ ಪ್ರದೇಶ',
    },
    ta: {
      fullName: 'ரமேஷ் குமார் பிரஜாபதி',
      bio: 'இயற்கை களிமண் மற்றும் பாரம்பரிய சூளையைப் பயன்படுத்தி குர்ஜா மண்பாண்டப் பாரம்பரியத்தை வாழ வைக்கும் 4வது தலைமுறை கைவினை மாஸ்டர்.',
      primaryCraft: 'சுடுமண் மற்றும் பீங்கான் மண்பாண்டங்கள்',
      district: 'புலந்த்ஷஹர் / குர்ஜா',
      state: 'உத்தரபிரதேசம்',
      location: 'புலந்த்ஷஹர், உத்தரபிரதேசம்',
    },
    te: {
      fullName: 'రమేష్ కుమార్ ప్రజాపతి',
      bio: 'సహజ బంకమట్టి మరియు సంప్రదాయ బట్టీలను ఉపయోగించి ఖుర్జా మట్టి కుండల సంస్కృతిని సజీవంగా ఉంచుతున్న 4వ తరం మాస్టర్ కుమ్మరి.',
      primaryCraft: 'టెర్రకోట మరియు సిరామిక్ కుండల కళ',
      district: 'బులంద్‌షహర్ / ఖుర్జా',
      state: 'ఉత్తరప్రదేశ్',
      location: 'బులంద్‌షహర్, ఉత్తరప్రదేశ్',
    },
    ml: {
      fullName: 'രമേഷ് കുമാർ പ്രജാപതി',
      bio: 'സ്വാഭാവിക കളിമണ്ണും പരമ്പരാഗത ചൂളകളും ഉപയോഗിച്ച് ഖുർജ മൺപാത്ര പാരമ്പര്യം നിലനിർത്തുന്ന നാലാം തലമുറയിലെ പ്രധാന ശില്പി.',
      primaryCraft: 'ടെറാക്കോട്ട & സെറാമിക് മൺപാത്രങ്ങൾ',
      district: 'ബുലന്ദ്ഷഹർ / ഖുർജ',
      state: 'ഉത്തർപ്രദേശ്',
      location: 'ബുലന്ദ്ഷഹർ, ഉത്തർപ്രദേശ്',
    },
    mr: {
      fullName: 'रमेश कुमार प्रजापती',
      bio: 'खुर्जाच्या पारंपारिक मातीकलेचा वारसा जपणारे ४ थ्या पिढीतील निष्णात कुंभार शिल्पकार. नैसर्गिक माती आणि पारंपारिक भट्टीने भांडी घडवतात.',
      primaryCraft: 'टेराकोटा आणि सिरॅमिक मातीकला',
      district: 'बुलंदशहर / खुर्जा',
      state: 'उत्तर प्रदेश',
      location: 'बुलंदशहर, उत्तर प्रदेश',
    },
    bn: {
      fullName: 'রমেশ কুমার প্রজাপতি',
      bio: 'খুর্জার ঐতিহ্যবাহী মৃৎশিল্পকে বাঁচিয়ে রাখা চতুর্থ প্রজন্মের প্রধান মৃৎশিল্পী। প্রাকৃতিক মাটি ও ঐতিহ্যবাহী ভাটিতে সুন্দর শিল্পকর্ম গড়েন।',
      primaryCraft: 'টেরাকোটা ও সিরামিক মৃৎশিল্প',
      district: 'বুলন্দশহর / খুর্জা',
      state: 'উত্তর প্রদেশ',
      location: 'বুলন্দশহর, উত্তর প্রদেশ',
    },
    gu: {
      fullName: 'રમેશ કુમાર પ્રજાપતિ',
      bio: 'કુદરતી માટી અને પરંપરાગત ભઠ્ઠી વડે ખુર્જાની માટીકળા પરંપરાને જીવંત રાખતા ચોથી પેઢીના મુખ્ય કુંભાર કારીગર.',
      primaryCraft: 'ટેરાકોટા અને સિરામિક માટીકળા',
      district: 'બુલંદશહેર / ખુર્જા',
      state: 'ઉત્તર પ્રદેશ',
      location: 'બુલંદશહેર, ઉત્તર પ્રદેશ',
    },
    pa: {
      fullName: 'ਰਮੇਸ਼ ਕੁਮਾਰ ਪ੍ਰਜਾਪਤੀ',
      bio: 'ਖੁਰਜਾ ਦੀ ਰਵਾਇਤੀ ਮਿੱਟੀ ਕਲਾ ਨੂੰ ਸੰਭਾਲਣ ਵਾਲੇ ਚੌਥੀ ਪੀੜ੍ਹੀ ਦੇ ਮਾਹਰ ਕਾਰੀਗਰ ਜੋ ਕੁਦਰਤੀ ਮਿੱਟੀ ਨਾਲ ਸੁੰਦਰ ਭਾਂਡੇ ਘੜਦੇ ਹਨ।',
      primaryCraft: 'ਟੈਰਾਕੋਟਾ ਅਤੇ ਸਿਰੇਮਿਕ ਦਸਤਕਾਰੀ',
      district: 'ਬੁਲੰਦਸ਼ਹਿਰ / ਖੁਰਜਾ',
      state: 'ਉੱਤਰ ਪ੍ਰਦੇਸ਼',
      location: 'ਬੁਲੰਦਸ਼ਹਿਰ, ਉੱਤਰ ਪ੍ਰਦੇਸ਼',
    },
    or: {
      fullName: 'ରମେଶ କୁମାର ପ୍ରଜାପତି',
      bio: 'ପ୍ରାକୃତିକ ମାଟି ଓ ପାରମ୍ପରିକ ଭାଟି ସାହାଯ୍ୟରେ ଖୁର୍ଜା ମୃତ୍ତିକା କଳାକୁ ବଞ୍ଚାଇ ରଖିଥିବା ଚତୁର୍ଥ ପିଢ଼ିର ମୁଖ୍ୟ କାରିଗର।',
      primaryCraft: 'ଟେରାକୋଟା ଏବଂ ସିରାମିକ୍ କଳା',
      district: 'ବୁଲନ୍ଦସହର / ଖୁର୍ଜା',
      state: 'ଉତ୍ତର ପ୍ରଦେଶ',
      location: 'ବୁଲନ୍ଦସହର, ଉତ୍ତର ପ୍ରଦେଶ',
    },
    as: {
      fullName: 'ৰমেশ কুমাৰ প্ৰজাপতি',
      bio: 'প্ৰাকৃতিক মাটি আৰু পৰম্পৰাগত ভাটীৰে খুৰ্জাৰ মৃৎশিল্প পৰম্পৰা জীয়াই ৰখা চতুৰ্থ প্ৰজন্মৰ এগৰাকী প্ৰবীণ শিল্পী।',
      primaryCraft: 'টেৰাকোটা আৰু চিৰামিক মৃৎশিল্প',
      district: 'বুলন্দচহৰ / খুৰ্জা',
      state: 'উত্তৰ প্ৰদেশ',
      location: 'বুলন্দচহৰ, উত্তৰ প্ৰদেশ',
    },
    ur: {
      fullName: 'رمیش کمار پرجاپتی',
      bio: 'خورجہ کی روایتی مٹی کے برتن سازی کی روایت کو قدرتی مٹی اور روایتی بھٹی سے زندہ رکھنے والے چوتھی نسل کے استاد کاریگر۔',
      primaryCraft: 'ٹیراکوٹا اور سیرامک مٹی کے برتن',
      district: 'بلند شہر / خورجہ',
      state: 'اتر پردیش',
      location: 'بلند شہر، اتر پردیش',
    },
  },
};

// ─────────────────────────────────────────────────────────────────────────────
// GENERIC ATTRIBUTE TRANSLATION HELPERS (FOR MATERIALS, COLORS, CATEGORIES)
// ─────────────────────────────────────────────────────────────────────────────

export function localizeCategory(category: string | null | undefined, language: SupportedLanguage): string {
  if (!category) return '';
  if (language === 'en') return category;
  return translate(language, category.trim());
}

export function localizeDimensions(dimensions: string | null | undefined, language: SupportedLanguage): string {
  if (!dimensions) return '';
  if (language === 'en') return dimensions;
  let res = dimensions;
  if (language === 'hi') {
    res = res.replace(/inches/gi, 'इंच')
             .replace(/inch/gi, 'इंच')
             .replace(/Height/gi, 'ऊंचाई')
             .replace(/Diameter/gi, 'व्यास')
             .replace(/Depth/gi, 'गहराई')
             .replace(/Length/gi, 'लंबाई')
             .replace(/inner diameter/gi, 'आंतरिक व्यास')
             .replace(/capacity/gi, 'क्षमता')
             .replace(/each/gi, 'प्रत्येक');
  } else if (language === 'kn') {
    res = res.replace(/inches/gi, 'ಇಂಚು')
             .replace(/inch/gi, 'ಇಂಚು')
             .replace(/Height/gi, 'ಎತ್ತರ')
             .replace(/Diameter/gi, 'ವ್ಯಾಸ')
             .replace(/Depth/gi, 'ಆಳ')
             .replace(/Length/gi, 'ಉದ್ದ')
             .replace(/inner diameter/gi, 'ಒಳಗಿನ ವ್ಯಾಸ')
             .replace(/capacity/gi, 'ಸಾಮರ್ಥ್ಯ')
             .replace(/each/gi, 'ಪ್ರತಿಯೊಂದು');
  } else if (language === 'ta') {
    res = res.replace(/inches/gi, 'அங்குலம்')
             .replace(/inch/gi, 'அங்குலம்')
             .replace(/Height/gi, 'உயரம்')
             .replace(/Diameter/gi, 'விட்டம்')
             .replace(/Depth/gi, 'ஆழம்')
             .replace(/Length/gi, 'நீளம்')
             .replace(/inner diameter/gi, 'உள் விட்டம்')
             .replace(/capacity/gi, 'கொள்ளளவு')
             .replace(/each/gi, 'ஒவ்வொன்றும்');
  }
  return res;
}

export function localizeMaterials(materials: string | null | undefined, language: SupportedLanguage): string {
  if (!materials) return '';
  if (language === 'en') return materials;
  const translated = translate(language, materials.trim());
  if (translated !== materials.trim()) return translated;
  let res = materials;
  const phrases: Record<string, { hi: string; kn: string; ta: string }> = {
    'terracotta clay': { hi: 'टेराकोटा मिट्टी', kn: 'ಟೆರ್ರಾಕೋಟಾ ಜೇಡಿಮಣ್ಣು', ta: 'சுடுமண் களிமண்' },
    'natural clay': { hi: 'प्राकृतिक मिट्टी', kn: 'ನೈಸರ್ಗಿಕ ಮಣ್ಣು', ta: 'இயற்கை களிமண்' },
    'solid brass': { hi: 'ठोस पीतल', kn: 'ಗಟ್ಟಿ ಹಿತ್ತಾಳೆ', ta: 'திட பித்தளை' },
    'brass': { hi: 'पीतल', kn: 'ಹಿತ್ತಾಳೆ', ta: 'பித்தளை' },
    'bell metal': { hi: 'कांस्य धातु', kn: 'ಕಂಚಿನ ಲೋಹ', ta: 'வெண்கல உலோகம்' },
    'silver filigree': { hi: 'चांदी तारकशी', kn: 'ಬೆಳ್ಳಿ ತಾರಕಾಶಿ', ta: 'வெள்ளி நுண்ணிய வேலைப்பாடு' },
    'pure silver': { hi: 'शुद्ध चांदी', kn: 'ಶುದ್ಧ ಬೆಳ್ಳಿ', ta: 'தூய வெள்ளி' },
    'stoneware ceramic': { hi: 'स्टोनवेयर सिरेमिक', kn: 'ಸ್ಟೋನ್‌ವೇರ್ ಸೆರಾಮಿಕ್', ta: 'பீங்கான் கல்' },
    'glazed ceramic': { hi: 'ग्लेज्ड सिरेमिक', kn: 'ಹೊಳಪುಳ್ಳ ಸೆರಾಮಿಕ್', ta: 'பளபளப்பான பீங்கான்' },
    'pure silk': { hi: 'शुद्ध रेशम', kn: 'ಶುದ್ಧ ರೇಷ್ಮೆ', ta: 'தூய பட்டு' },
    'golden jute': { hi: 'सुनहरा जूट', kn: 'ಸುವರ್ಣ ಸೆಣಬು', ta: 'தங்க சணல்' },
    'rosewood': { hi: 'शीशम की लकड़ी', kn: 'ಶೀಶಮ್ ಮರ', ta: 'ரோஸ்வுட் மரம்' },
    'sheesham': { hi: 'शीशम', kn: 'ಶೀಶಮ್', ta: 'ரோஸ்வுட்' },
    'teak wood': { hi: 'सागौन की लकड़ी', kn: 'ತೇಗದ ಮರ', ta: 'தேக்கு மரம்' },
    'vegetable dyes': { hi: 'प्राकृतिक वानस्पतिक रंग', kn: 'ನೈಸರ್ಗಿಕ ಸಸ್ಯಜನ್ಯ ಬಣ್ಣಗಳು', ta: 'இயற்கை தாவர சாயங்கள்' },
    'antique burnished polish': { hi: 'विंटेज पॉलिश', kn: 'ವಿಂಟೇಜ್ ಪಾಲಿಷ್', ta: 'பழங்கால பாலிஷ்' },
  };
  for (const [phrase, trans] of Object.entries(phrases)) {
    if (res.toLowerCase().includes(phrase)) {
      const repl = (trans as any)[language];
      if (repl) {
        res = res.replace(new RegExp(phrase, 'gi'), repl);
      }
    }
  }
  return res;
}

export function localizeColors(colors: string | null | undefined, language: SupportedLanguage): string {
  if (!colors) return '';
  if (language === 'en') return colors;
  const translated = translate(language, colors.trim());
  if (translated !== colors.trim()) return translated;
  return colors;
}

// ─────────────────────────────────────────────────────────────────────────────
// UNIVERSAL RESOLVER FUNCTIONS (COMPLIANT WITH STRICT CRITICAL FALLBACK RULE)
// ─────────────────────────────────────────────────────────────────────────────

/**
 * Resolves localized product content for any product and active language.
 *
 * CRITICAL FALLBACK RULE:
 * 1. Checks if curated or embedded localized content exists for the SELECTED LANGUAGE.
 * 2. If present in that language, uses it.
 * 3. If missing in that language, falls back STRICTLY to canonical ENGLISH.
 * 4. NEVER falls back to Hindi when another regional language (Kannada, Tamil, etc.) is selected.
 */
export function getLocalizedProduct(
  product: any,
  language: SupportedLanguage
): LocalizedProductFields {
  if (!product) {
    return {
      title: '',
      description: '',
      materialsUsed: '',
      dimensions: '',
      colors: '',
      craftCategory: '',
    };
  }

  // Canonical English values
  const canonTitle: string = product.title || '';
  const canonDesc: string = product.descriptionEnglish || product.description || '';
  const canonStory: string | null = product.culturalHeritageStory || null;
  const canonMaterials: string = product.materialsUsed || '';
  const canonDimensions: string = product.dimensions || '';
  const canonColors: string = product.colors || '';
  const canonCategory: string = product.craftCategory || '';
  const canonRegion: string | null = product.giCraftRegion || null;
  const canonRationale: string | null = product.pricingRationale || null;

  // When English is selected, return canonical English directly
  if (language === 'en') {
    return {
      title: canonTitle,
      secondaryTitle: null,
      description: canonDesc,
      culturalHeritageStory: canonStory,
      materialsUsed: canonMaterials,
      dimensions: canonDimensions,
      colors: canonColors,
      craftCategory: canonCategory,
      giCraftRegion: canonRegion,
      pricingRationale: canonRationale,
    };
  }

  // Check 1: Curated registry for demo products
  const pKey = resolveProductKey(product);
  const regionalDict = pKey ? LOCALIZED_PRODUCTS[pKey]?.[language] : null;

  // Check 2: Dynamic product.translations[language] or product.localized[language] if present
  const dynamicDict = product.translations?.[language] || product.localized?.[language];

  // Check 3: Check CATALOG_TRANSLATIONS by id or normalized title
  const cleanTitle = (canonTitle || '').trim().toLowerCase();
  const catalogEntry = (product.id && CATALOG_TRANSLATIONS[product.id])
    ? CATALOG_TRANSLATIONS[product.id]
    : CATALOG_TRANSLATIONS[cleanTitle];

  const catalogDict = catalogEntry ? {
    title: catalogEntry.title?.[language],
    description: catalogEntry.description?.[language],
    culturalHeritageStory: catalogEntry.culturalHeritageStory?.[language],
    materialsUsed: catalogEntry.materialsUsed?.[language],
    dimensions: catalogEntry.dimensions?.[language],
  } : null;

  const sourceDict = regionalDict || dynamicDict || catalogDict;

  // Title resolution:
  let resolvedTitle: string = canonTitle;
  let hasLocalizedTitle = false;

  if (sourceDict?.title) {
    resolvedTitle = sourceDict.title;
    hasLocalizedTitle = true;
  } else if (translate(language, canonTitle) !== canonTitle) {
    resolvedTitle = translate(language, canonTitle);
    hasLocalizedTitle = true;
  } else if (language === 'hi' && product.titleHindi) {
    resolvedTitle = product.titleHindi;
    hasLocalizedTitle = true;
  }

  // Description resolution:
  let resolvedDesc: string = canonDesc;
  if (sourceDict?.description) {
    resolvedDesc = sourceDict.description;
  } else if (language === 'hi' && product.descriptionHindi) {
    resolvedDesc = product.descriptionHindi;
  }

  // Cultural story resolution:
  let resolvedStory: string | null = canonStory;
  if (sourceDict?.culturalHeritageStory) {
    resolvedStory = sourceDict.culturalHeritageStory;
  }

  // Materials & Colors resolution:
  let resolvedMaterials: string = sourceDict?.materialsUsed || localizeMaterials(canonMaterials, language);
  let resolvedColors: string = sourceDict?.colors || localizeColors(canonColors, language);

  // Dimensions resolution:
  let resolvedDimensions: string = sourceDict?.dimensions || localizeDimensions(canonDimensions, language);

  // Category & Region resolution:
  let resolvedCategory: string = sourceDict?.craftCategory || localizeCategory(canonCategory, language);
  let resolvedRegion: string | null = sourceDict?.giCraftRegion || (canonRegion ? translate(language, canonRegion) : null);

  // Pricing rationale resolution:
  let resolvedRationale: string | null = sourceDict?.pricingRationale || canonRationale;

  return {
    title: resolvedTitle,
    // Secondary title shows English canonical title as subtitle when viewing in regional language
    secondaryTitle: hasLocalizedTitle && resolvedTitle !== canonTitle ? canonTitle : null,
    description: resolvedDesc,
    culturalHeritageStory: resolvedStory,
    materialsUsed: resolvedMaterials,
    dimensions: resolvedDimensions,
    colors: resolvedColors,
    craftCategory: resolvedCategory,
    giCraftRegion: resolvedRegion,
    pricingRationale: resolvedRationale,
  };
}

/**
 * Resolves localized artisan profile fields for an artisan.
 * Follows the strict rule: Selected Language -> English fallback.
 */
export function getLocalizedArtisan(
  artisan: any,
  language: SupportedLanguage
): LocalizedArtisanFields {
  const canonName = artisan?.fullName || artisan?.name || 'Ramesh Kumar Prajapati';
  const canonBio = artisan?.bioEnglish || artisan?.bio || '';
  const canonCraft = artisan?.primaryCraft || 'Terracotta & Ceramic Pottery';
  const canonDistrict = artisan?.district || 'Bulandshahr / Khurja';
  const canonState = artisan?.state || 'Uttar Pradesh';

  if (language === 'en') {
    return {
      fullName: canonName,
      bio: canonBio,
      primaryCraft: canonCraft,
      district: canonDistrict,
      state: canonState,
      location: `${canonDistrict}, ${canonState}`,
    };
  }

  const localizedEntry = ARTISAN_LOCALIZATIONS['default']?.[language];

  // If Hindi requested, check bioLocal as fallback
  let resolvedBio = canonBio;
  if (localizedEntry?.bio) {
    resolvedBio = localizedEntry.bio;
  } else if (language === 'hi' && artisan?.bioLocal) {
    resolvedBio = artisan.bioLocal;
  }

  return {
    fullName: localizedEntry?.fullName || canonName,
    bio: resolvedBio,
    primaryCraft: localizedEntry?.primaryCraft || translate(language, canonCraft),
    district: localizedEntry?.district || canonDistrict,
    state: localizedEntry?.state || canonState,
    location: localizedEntry?.location || `${canonDistrict}, ${canonState}`,
  };
}
