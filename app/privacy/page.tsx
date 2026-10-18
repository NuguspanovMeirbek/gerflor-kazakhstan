import type { Metadata } from "next";
import {
  operatorRequisites,
  privacyMeta,
  privacySections,
} from "@/lib/privacy";

export const metadata: Metadata = {
  title: "Политика конфиденциальности",
  description:
    "Политика конфиденциальности ТОО «Astana Sport Line» — эксклюзивного дистрибьютора Gerflor в Казахстане.",
  robots: { index: true, follow: true },
};

export default function PrivacyPage() {
  return (
    <article className="section">
      <div className="container-site max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-[0.16em] text-gerflor-accent">
          Документы
        </p>
        <h1 className="mt-2 text-3xl font-semibold text-gerflor-navy md:text-4xl">
          {privacyMeta.title}
        </h1>
        <p className="mt-3 text-sm text-slate-500">
          Дата вступления в силу / Күшіне енген күні: {privacyMeta.effectiveDate}
        </p>
        <p className="mt-6 text-slate-700 leading-relaxed">{privacyMeta.intro.ru}</p>
        <p className="mt-3 text-slate-600 leading-relaxed">{privacyMeta.intro.kk}</p>

        {privacySections.map((section) => (
          <section key={section.title.ru} className="mt-10">
            <h2 className="text-xl font-semibold text-gerflor-navy">
              {section.title.ru}
            </h2>
            <p className="mt-1 text-sm font-medium text-slate-500">
              {section.title.kk}
            </p>
            <div className="mt-4 space-y-4">
              {section.items.map((item) => (
                <div key={item.ru}>
                  <p className="text-slate-700 leading-relaxed">{item.ru}</p>
                  <p className="mt-1.5 text-slate-600 leading-relaxed">{item.kk}</p>
                </div>
              ))}
            </div>
          </section>
        ))}

        <section className="mt-10">
          <h2 className="text-xl font-semibold text-gerflor-navy">
            {operatorRequisites.title.ru}
          </h2>
          <p className="mt-1 text-sm font-medium text-slate-500">
            {operatorRequisites.title.kk}
          </p>
          <div className="mt-4 grid grid-cols-1 gap-6 md:grid-cols-2">
            <ul className="space-y-1.5 text-sm text-slate-700">
              {operatorRequisites.ru.map((line) => (
                <li key={line}>{line}</li>
              ))}
            </ul>
            <ul className="space-y-1.5 text-sm text-slate-600">
              {operatorRequisites.kk.map((line) => (
                <li key={line}>{line}</li>
              ))}
            </ul>
          </div>
        </section>
      </div>
    </article>
  );
}
