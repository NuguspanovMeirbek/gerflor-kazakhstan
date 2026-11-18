import type { Locale } from "@/lib/i18n/types";

export type Dictionary = {
  meta: {
    title: string;
    description: string;
  };
  heading: string;
  text: string;
};

export const dictionaries: Record<Locale, Dictionary> = {
  ru: {
    meta: {
      title: "Сайт на техническом обслуживании",
      description: "Сайт находится на техническом обслуживании.",
    },
    heading: "Сайт находится на техническом обслуживании",
    text: "Контент временно скрыт. Мы вернёмся с обновлёнными материалами.",
  },
  kk: {
    meta: {
      title: "Сайт техникалық қызметте",
      description: "Сайт техникалық қызметте.",
    },
    heading: "Сайт техникалық қызметте",
    text: "Мазмұн уақытша жасырылған. Жаңартылған материалдар кейінірек пайда болады.",
  },
  en: {
    meta: {
      title: "Site under maintenance",
      description: "The site is currently under maintenance.",
    },
    heading: "The site is under maintenance",
    text: "Content is temporarily unavailable. Updated materials will appear later.",
  },
};
