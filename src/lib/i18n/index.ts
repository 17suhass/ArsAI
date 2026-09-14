import { SupportedLanguage } from '../types';
import { enTranslations } from './translations/en';
import { hiTranslations } from './translations/hi';
import { knTranslations } from './translations/kn';
import { taTranslations } from './translations/ta';
import { teTranslations } from './translations/te';
import { mlTranslations } from './translations/ml';
import { mrTranslations } from './translations/mr';
import { bnTranslations } from './translations/bn';
import { guTranslations } from './translations/gu';
import { paTranslations } from './translations/pa';
import { orTranslations } from './translations/or';
import { asTranslations } from './translations/as';
import { urTranslations } from './translations/ur';

export * from './languages';

export const TRANSLATION_DICTIONARIES: Record<SupportedLanguage, Record<string, string>> = {
  en: enTranslations,
  hi: hiTranslations,
  kn: knTranslations,
  ta: taTranslations,
  te: teTranslations,
  ml: mlTranslations,
  mr: mrTranslations,
  bn: bnTranslations,
  gu: guTranslations,
  pa: paTranslations,
  or: orTranslations,
  as: asTranslations,
  ur: urTranslations,
};

// Unicode ranges for cross-contamination detection
const DEVANAGARI_REGEX = /[\u0900-\u097F]/;
const KANNADA_REGEX = /[\u0C80-\u0CFF]/;
const TAMIL_REGEX = /[\u0B80-\u0BFF]/;

/**
 * Validates script purity according to the selected language:
 * - hi: reject strings containing Kannada or Tamil characters
 * - kn: reject strings containing Devanagari or Tamil characters
 * - ta: reject strings containing Devanagari or Kannada characters
 */
export function isScriptPure(lang: SupportedLanguage, text: string): boolean {
  if (!text) return true;
  if (lang === 'hi') {
    return !KANNADA_REGEX.test(text) && !TAMIL_REGEX.test(text);
  }
  if (lang === 'kn') {
    return !DEVANAGARI_REGEX.test(text) && !TAMIL_REGEX.test(text);
  }
  if (lang === 'ta') {
    return !DEVANAGARI_REGEX.test(text) && !KANNADA_REGEX.test(text);
  }
  return true;
}

/**
 * Universal translation resolver with strict script purity and graceful fallback to English.
 * Never returns undefined. Never falls back to a different Indian language.
 *
 * @param language The active SupportedLanguage code (e.g. 'en', 'kn', 'hi', etc.)
 * @param keyOrEn Key or English string to translate
 * @param fallbackOrHi Optional Hindi string or custom fallback
 */
/**
 * Safe, idempotent Unicode escape sequence decoder.
 * Only decodes if literal escaped sequences (\\uXXXX) are present; returns text untouched otherwise.
 */
export function safeDecodeUnicode(text: string): string {
  if (!text || typeof text !== 'string' || !text.includes('\\u')) return text;
  return text.replace(/\\+u([0-9a-fA-F]{4})/g, (_, hex) => String.fromCharCode(parseInt(hex, 16)));
}

export function translate(
  language: SupportedLanguage,
  keyOrEn: string,
  fallbackOrHi?: string
): string {
  if (!keyOrEn) return '';

  // If English is selected, return the English text
  if (language === 'en') {
    return safeDecodeUnicode(keyOrEn);
  }

  const dict = TRANSLATION_DICTIONARIES[language];
  if (dict) {
    let candidate: string | undefined;

    if (dict[keyOrEn]) candidate = dict[keyOrEn];
    else {
      const trimmed = keyOrEn.trim();
      if (dict[trimmed]) candidate = dict[trimmed];
      else {
        // Normalize curly quotes vs straight quotes
        const normalizedQuotes = keyOrEn.replace(/[’‘]/g, "'");
        if (dict[normalizedQuotes]) candidate = dict[normalizedQuotes];
        else {
          const straightToCurly = keyOrEn.replace(/'/g, '’');
          if (dict[straightToCurly]) candidate = dict[straightToCurly];
        }
      }
    }

    if (candidate) {
      const decoded = safeDecodeUnicode(candidate);
      if (isScriptPure(language, decoded)) {
        return decoded;
      }
    }
  }

  // If Hindi is selected and an explicit Hindi string was supplied in code
  if (language === 'hi') {
    if (fallbackOrHi) {
      const decoded = safeDecodeUnicode(fallbackOrHi);
      if (isScriptPure('hi', decoded)) {
        return decoded;
      }
    }
    const hiCandidate = hiTranslations[keyOrEn] || hiTranslations[keyOrEn.trim()];
    if (hiCandidate) {
      const decoded = safeDecodeUnicode(hiCandidate);
      if (isScriptPure('hi', decoded)) {
        return decoded;
      }
    }
  }

  // Strict graceful fallback to canonical English source (NEVER another Indian language)
  return safeDecodeUnicode(keyOrEn);
}
