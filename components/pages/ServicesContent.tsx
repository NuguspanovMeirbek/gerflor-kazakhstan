"use client";

import { CheckCircle2 } from "lucide-react";
import { useI18n } from "@/lib/i18n/context";

export default function ServicesContent() {
  const { t } = useI18n();

  return (
    <section className="section">
      <div className="container-site">
        <p className="text-sm font-semibold uppercase tracking-[0.16em] text-gerflor-accent">
          {t.services.eyebrow}
        </p>
        <h1 className="mt-2 max-w-3xl text-3xl font-semibold text-gerflor-navy md:text-4xl">
          {t.services.title}
        </h1>
        <p className="mt-4 max-w-3xl text-slate-600">{t.services.text}</p>
        <ul className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2">
          {t.services.steps.map((step) => (
            <li
              key={step.title}
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all hover:scale-[1.02]"
            >
              <CheckCircle2 className="h-6 w-6 text-gerflor-accent" aria-hidden />
              <h2 className="mt-3 text-lg font-semibold text-gerflor-navy">
                {step.title}
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                {step.text}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
