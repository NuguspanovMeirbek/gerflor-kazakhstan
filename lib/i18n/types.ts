export const LOCALES = ["ru", "kk", "en"] as const;
export type Locale = (typeof LOCALES)[number];

export const LOCALE_LABELS: Record<Locale, string> = {
  kk: "KZ",
  ru: "RU",
  en: "EN",
};

export const DEFAULT_LOCALE: Locale = "ru";
