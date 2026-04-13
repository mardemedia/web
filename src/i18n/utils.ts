import LABELS from "./ui";

export const LANGUAGES = {
  en: "English",
  es: "Spanish",
} as const;

export type lang = keyof typeof LANGUAGES;
export type label = keyof (typeof LABELS)[lang];

export const DEFAULT_LANGUAGE: lang = "es";

export function getTranslation(
  lang: lang = DEFAULT_LANGUAGE,
): (label: label) => string {
  return (label: label) => LABELS[lang][label];
}

export const getSpanishLabel = (label: label) => getTranslation("es")(label);
export const getEnglishLabel = (label: label) => getTranslation("en")(label);
