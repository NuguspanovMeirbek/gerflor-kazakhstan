"use client";

import { useI18n } from "@/lib/i18n/context";

export default function CatalogIntro() {
  const { t } = useI18n();

  return (
    <header className="bg-white pt-14 md:pt-20">
      <div className="container-site">
        <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-gerflor-accent">
          Sportflor
        </p>
        <h1 className="mt-4 max-w-xl text-[2rem] font-semibold leading-[1.15] tracking-tight text-gerflor-navy md:text-4xl">
          {t.catalog.pageTitle}
        </h1>
        <p className="mt-5 max-w-xl text-base leading-7 text-slate-600">{t.catalog.pageText}</p>
      </div>
    </header>
  );
}
