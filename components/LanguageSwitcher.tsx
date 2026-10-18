"use client";

import { LOCALES, LOCALE_LABELS } from "@/lib/i18n/types";
import { useI18n } from "@/lib/i18n/context";

type Props = {
  className?: string;
};

export default function LanguageSwitcher({ className = "" }: Props) {
  const { locale, setLocale } = useI18n();

  return (
    <div
      className={`inline-flex items-center rounded-full border border-slate-200 bg-white/80 p-0.5 text-xs font-semibold tracking-wide ${className}`}
      role="group"
      aria-label="Language"
    >
      {LOCALES.map((code, index) => (
        <span key={code} className="flex items-center">
          {index > 0 ? (
            <span className="px-0.5 text-slate-300" aria-hidden>
              |
            </span>
          ) : null}
          <button
            type="button"
            onClick={() => setLocale(code)}
            className={`rounded-full px-2.5 py-1.5 transition-colors ${
              locale === code
                ? "bg-gerflor-navy text-white"
                : "text-slate-500 hover:text-gerflor-navy"
            }`}
            aria-pressed={locale === code}
          >
            {LOCALE_LABELS[code]}
          </button>
        </span>
      ))}
    </div>
  );
}
