"use client";

import { useI18n } from "@/lib/i18n/context";
import {
  operatorRequisites,
  privacyCopy,
  privacyMeta,
  privacySections,
} from "@/lib/privacy";

export default function PrivacyContent() {
  const { locale, t } = useI18n();

  return (
    <article className="section">
      <div className="container-site max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-[0.16em] text-gerflor-accent">
          {t.privacy.documents}
        </p>
        <h1 className="mt-2 text-3xl font-semibold text-gerflor-navy md:text-4xl">
          {t.privacy.title}
        </h1>
        <p className="mt-3 text-sm text-slate-500">
          {t.privacy.effective}: {privacyMeta.effectiveDate}
        </p>
        <p className="mt-6 text-slate-700 leading-relaxed">
          {privacyCopy(privacyMeta.intro, locale)}
        </p>

        {privacySections.map((section) => (
          <section key={section.title.en} className="mt-10">
            <h2 className="text-xl font-semibold text-gerflor-navy">
              {privacyCopy(section.title, locale)}
            </h2>
            <div className="mt-4 space-y-4">
              {section.items.map((item) => (
                <p key={item.en} className="text-slate-700 leading-relaxed">
                  {privacyCopy(item, locale)}
                </p>
              ))}
            </div>
          </section>
        ))}

        <section className="mt-10">
          <h2 className="text-xl font-semibold text-gerflor-navy">
            {privacyCopy(operatorRequisites.title, locale)}
          </h2>
          <ul className="mt-4 space-y-1.5 text-sm text-slate-700">
            {operatorRequisites[locale].map((line) => (
              <li key={line}>{line}</li>
            ))}
          </ul>
        </section>
      </div>
    </article>
  );
}
