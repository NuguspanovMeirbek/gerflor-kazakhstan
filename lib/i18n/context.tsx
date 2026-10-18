"use client";

import { usePathname } from "next/navigation";
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { dictionaries } from "@/lib/i18n/dictionaries";
import {
  DEFAULT_LOCALE,
  LOCALES,
  type Locale,
} from "@/lib/i18n/types";

const STORAGE_KEY = "gerflor-locale";

type I18nContextValue = {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: (typeof dictionaries)[Locale];
};

const I18nContext = createContext<I18nContextValue | null>(null);

function isLocale(value: string | null | undefined): value is Locale {
  return !!value && (LOCALES as readonly string[]).includes(value);
}

function readInitialLocale(): Locale {
  if (typeof window === "undefined") return DEFAULT_LOCALE;
  const fromQuery = new URLSearchParams(window.location.search).get("lang");
  if (isLocale(fromQuery)) return fromQuery;
  const stored = window.localStorage.getItem(STORAGE_KEY);
  if (isLocale(stored)) return stored;
  return DEFAULT_LOCALE;
}

function applyDocumentMeta(locale: Locale, pathname: string) {
  const t = dictionaries[locale];
  let title = t.meta.title;
  let description = t.meta.description;
  if (pathname.startsWith("/catalog")) {
    title = `${t.catalog.pageTitle} | Gerflor Kazakhstan`;
    description = t.catalog.pageText;
  } else if (pathname.startsWith("/gallery")) {
    title = `${t.gallery.pageTitle} | Gerflor Kazakhstan`;
    description = t.gallery.pageText;
  } else if (pathname.startsWith("/services")) {
    title = `${t.services.title} | Gerflor Kazakhstan`;
    description = t.services.text;
  } else if (pathname.startsWith("/contacts")) {
    title = `${t.contacts.title} | Gerflor Kazakhstan`;
    description = t.contacts.intro;
  } else if (pathname.startsWith("/privacy")) {
    title = `${t.privacy.title} | Gerflor Kazakhstan`;
    description = t.privacy.title;
  }
  document.title = title;
  document.documentElement.lang = locale;
  const meta = document.querySelector('meta[name="description"]');
  if (meta) meta.setAttribute("content", description);
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const [locale, setLocaleState] = useState<Locale>(DEFAULT_LOCALE);

  useEffect(() => {
    setLocaleState(readInitialLocale());
  }, []);

  const setLocale = useCallback((next: Locale) => {
    setLocaleState(next);
    window.localStorage.setItem(STORAGE_KEY, next);
    const url = new URL(window.location.href);
    if (next === DEFAULT_LOCALE) url.searchParams.delete("lang");
    else url.searchParams.set("lang", next);
    window.history.replaceState({}, "", `${url.pathname}${url.search}${url.hash}`);
    applyDocumentMeta(next, url.pathname);
  }, []);

  useEffect(() => {
    applyDocumentMeta(locale, pathname);
  }, [locale, pathname]);

  const value = useMemo(
    () => ({ locale, setLocale, t: dictionaries[locale] }),
    [locale, setLocale],
  );

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useI18n() {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error("useI18n must be used within LanguageProvider");
  return ctx;
}
