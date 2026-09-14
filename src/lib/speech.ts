import { SupportedLanguage } from '@/lib/types';

export interface IWindow extends Window {
  SpeechRecognition?: any;
  webkitSpeechRecognition?: any;
}

export const SPEECH_LANG_MAP: Record<SupportedLanguage, string> = {
  en: 'en-IN',
  hi: 'hi-IN',
  kn: 'kn-IN',
  ta: 'ta-IN',
  te: 'te-IN',
  ml: 'ml-IN',
  mr: 'mr-IN',
  bn: 'bn-IN',
  gu: 'gu-IN',
  pa: 'pa-IN',
  or: 'or-IN',
  as: 'as-IN',
  ur: 'ur-IN',
};

export function isSpeechRecognitionSupported(): boolean {
  if (typeof window === 'undefined') return false;
  const win = window as unknown as IWindow;
  return Boolean(win.SpeechRecognition || win.webkitSpeechRecognition);
}

export function createSpeechRecognition(language: string) {
  if (typeof window === 'undefined') return null;
  const win = window as unknown as IWindow;
  const SpeechRecognitionClass = win.SpeechRecognition || win.webkitSpeechRecognition;

  if (!SpeechRecognitionClass) return null;

  const recognition = new SpeechRecognitionClass();
  recognition.continuous = true;
  recognition.interimResults = true;
  recognition.lang = language;
  return recognition;
}

export interface VoicePreset {
  id: string;
  label: string;
  craft: string;
  language: 'hi' | 'en';
  transcript: string;
  samplePhotoUrl: string;
}

export const ENGLISH_VOICE_PRESETS: VoicePreset[] = [
  {
    id: 'en-terracotta-pitcher',
    label: 'Terracotta Water Pitcher',
    craft: 'Terracotta Pottery',
    language: 'en',
    transcript: 'This is a natural terracotta earthen water pitcher handcrafted on a potter wheel using local river clay. It keeps drinking water naturally cool through capillary evaporation. It took two days of work and I need 350 rupees.',
    samplePhotoUrl: 'https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?w=800&auto=format&fit=crop&q=80',
  },
  {
    id: 'en-ceramic-bowl',
    label: 'Glazed Ceramic Serving Bowl',
    craft: 'Ceramic Art',
    language: 'en',
    transcript: 'This is a handcrafted glazed ceramic serving bowl from Khurja. It features traditional hand-painted floral motifs and is kiln-fired at 1200 degrees for durability. Expected price is 450 rupees.',
    samplePhotoUrl: 'https://images.unsplash.com/photo-1610701596007-11502861dcfa?w=800&auto=format&fit=crop&q=80',
  },
  {
    id: 'en-brass-lamp',
    label: 'Carved Brass Puja Diya',
    craft: 'Brass Handicraft',
    language: 'en',
    transcript: 'This is a traditional hand-carved pure brass oil lamp with floral petal etchings. Forged using sand casting techniques over three days. Expected price is 400 rupees.',
    samplePhotoUrl: 'https://images.unsplash.com/photo-1605371924599-2d0365da1ae0?w=800&auto=format&fit=crop&q=80',
  },
];

export const HINDI_VOICE_PRESETS: VoicePreset[] = [
  {
    id: 'hi-terracotta-surahi',
    label: 'टेराकोटा सुराही',
    craft: 'Terracotta Pottery',
    language: 'hi',
    transcript: 'यह शुद्ध नदी की मिट्टी से चाक पर बनी सुराही है। पानी को प्राकृतिक रूप से ठंडा रखती है। इसे बनाने में ढाई दिन लगे, मुझे 350 रुपये मिलने चाहिए।',
    samplePhotoUrl: 'https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?w=800&auto=format&fit=crop&q=80',
  },
  {
    id: 'hi-ceramic-bowl',
    label: 'ग्लेज्ड सिरेमिक बाउल',
    craft: 'Ceramic Art',
    language: 'hi',
    transcript: 'यह खुर्जा की ग्लेज्ड सिरेमिक सर्विंग बाउल है। इस पर हाथ से नीले फूल बनाए गए हैं और 1200 डिग्री पर पकाया गया है। इसकी कीमत 450 रुपये चाहिए।',
    samplePhotoUrl: 'https://images.unsplash.com/photo-1610701596007-11502861dcfa?w=800&auto=format&fit=crop&q=80',
  },
  {
    id: 'hi-brass-diya',
    label: 'नक्काशीदार पीतल दीया',
    craft: 'Brass Handicraft',
    language: 'hi',
    transcript: 'यह हाथ से नक्काशीदार शुद्ध पीतल का पारंपरिक दीया है। इसे रेत-ढलाई से तीन दिनों में तैयार किया गया है। अपेक्षित मूल्य 400 रुपये है।',
    samplePhotoUrl: 'https://images.unsplash.com/photo-1605371924599-2d0365da1ae0?w=800&auto=format&fit=crop&q=80',
  },
];

export const KANNADA_VOICE_PRESETS: VoicePreset[] = [
  {
    id: 'kn-channapatna-toy',
    label: 'ಚೆನ್ನಪಟ್ಟಣ ಮರದ ಆಟಿಕೆ',
    craft: 'Channapatna Wooden Toys',
    language: 'kn' as any,
    transcript: 'ಇದು ಸಾಂಪ್ರದಾಯಿಕ ಚೆನ್ನಪಟ್ಟಣ ಮರದ ಕರಕುಶಲ ಆಟಿಕೆ. ನೈಸರ್ಗಿಕ ತರಕಾರಿ ಬಣ್ಣಗಳಿಂದ ನಯಗೊಳಿಸಲಾಗಿದೆ. ತಯಾರಿಸಲು 2 ದಿನಗಳು ಬೇಕಾಯಿತು, ಬೆಲೆ 350 ರೂಪಾಯಿ.',
    samplePhotoUrl: 'https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?w=800&auto=format&fit=crop&q=80',
  },
  {
    id: 'kn-rosewood-panel',
    label: 'ಮೈಸೂರು ರೋಸ್‌ವುಡ್ ಕೆತ್ತನೆ',
    craft: 'Mysore Rosewood Carving',
    language: 'kn' as any,
    transcript: 'ಇದು ಶುದ್ಧ ಮೈಸೂರು ರೋಸ್‌ವುಡ್ ಮರದಲ್ಲಿ ಕೈಯಿಂದ ಕೆತ್ತಿದ ಸಾಂಪ್ರದಾಯಿಕ ಕಲಾಕೃತಿ. ನಿರೀಕ್ಷಿತ ಬೆಲೆ 650 ರೂಪಾಯಿ.',
    samplePhotoUrl: 'https://images.unsplash.com/photo-1538688525198-9b88f6f53126?w=800&auto=format&fit=crop&q=80',
  },
];

export const TAMIL_VOICE_PRESETS: VoicePreset[] = [
  {
    id: 'ta-swamimalai-bronze',
    label: 'சுவாமிமலை வெண்கல விளக்கு',
    craft: 'Swamimalai Bronze Craft',
    language: 'ta' as any,
    transcript: 'இது பாரம்பரிய சுவாமிமலை கைவினை வெண்கல விளக்கு. மெழுகு வார்ப்பு முறையில் தயாரிக்கப்பட்டது. எதிர்பார்க்கும் விலை 450 ரூபாய்.',
    samplePhotoUrl: 'https://images.unsplash.com/photo-1605371924599-2d0365da1ae0?w=800&auto=format&fit=crop&q=80',
  },
  {
    id: 'ta-kanchi-silk',
    label: 'காஞ்சிபுரம் பட்டு கைத்தறி',
    craft: 'Kanchipuram Silk Weaving',
    language: 'ta' as any,
    transcript: 'இது பாரம்பரிய கைத்தறி காஞ்சிபுரம் பட்டு வஸ்திரம். தூய ஜரிகை வேலைப்பாடு. எதிர்பார்க்கும் விலை 900 ரூபாய்.',
    samplePhotoUrl: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=800&auto=format&fit=crop&q=80',
  },
];

export function getDemoPresets(lang: SupportedLanguage): VoicePreset[] {
  if (lang === 'hi') return HINDI_VOICE_PRESETS;
  if (lang === 'kn') return KANNADA_VOICE_PRESETS;
  if (lang === 'ta') return TAMIL_VOICE_PRESETS;
  return ENGLISH_VOICE_PRESETS;
}
