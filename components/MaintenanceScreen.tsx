"use client";

import LanguageSwitcher from "@/components/LanguageSwitcher";
import { useI18n } from "@/lib/i18n/context";

export default function MaintenanceScreen() {
  const { t } = useI18n();

  return (
    <div className="flex min-h-screen flex-col bg-slate-50">
      <header className="flex justify-end px-4 py-4 md:px-8">
        <LanguageSwitcher />
      </header>
      <main className="flex flex-1 items-center justify-center px-6 pb-24">
        <div className="max-w-lg text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
            Maintenance
          </p>
          <h1 className="mt-4 text-2xl font-semibold text-slate-900 md:text-3xl">
            {t.heading}
          </h1>
          <p className="mt-4 text-base leading-relaxed text-slate-600">
            {t.text}
          </p>
        </div>
      </main>
    </div>
  );
}
