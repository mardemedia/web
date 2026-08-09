import LABELS from "./ui";

export const LANGUAGES = {
  en: "English",
  es: "Spanish",
} as const;

export type lang = keyof typeof LANGUAGES;
export type label = keyof (typeof LABELS)[lang];
export type translate = (label: label) => string;
export const isLang = (value: string): value is lang => value in LANGUAGES;
export const getLangOrFallback = (
  value: string = "es",
  fallback: string = "es",
): lang => (isLang(value) ? value : (fallback as lang));

export const DEFAULT_LANGUAGE: lang = "es";

export function getTranslation(
  lang: lang = DEFAULT_LANGUAGE,
): translate {
  return (label: label) => LABELS[lang][label];
}
