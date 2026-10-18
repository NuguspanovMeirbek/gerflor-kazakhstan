"use client";

import { useI18n } from "@/lib/i18n/context";

export default function GalleryIntro() {
  const { t } = useI18n();
  return (
    <div className="container-site pt-10 md:pt-14">
      <h1 className="text-3xl font-semibold text-gerflor-navy md:text-4xl">
        {t.gallery.pageTitle}
      </h1>
      <p className="mt-4 max-w-3xl text-slate-600">{t.gallery.pageText}</p>
    </div>
  );
}
