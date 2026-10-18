import type { Metadata } from "next";
import { CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Услуги «под ключ»",
  description:
    "Проектирование, поставка, монтаж и сдача спортивных покрытий Gerflor технадзору и международным комиссиям.",
};

const steps = [
  {
    title: "Проектирование и подбор системы",
    text: "Подбираем Taraflex, Powergame+ или коммерческий винил под нагрузку, вид спорта и бюджет.",
  },
  {
    title: "Прямая поставка из Франции",
    text: "Сертифицированная продукция Gerflor с документами для таможни и технадзора.",
  },
  {
    title: "Авторизованный монтаж",
    text: "Подготовка основания, укладка, сварные швы, игровая разметка по регламенту завода.",
  },
  {
    title: "Сдача объекта",
    text: "Сопровождение приёмки технадзором и международными комиссиями, гарантия завода.",
  },
];

export default function ServicesPage() {
  return (
    <section className="section">
      <div className="container-site">
        <p className="text-sm font-semibold uppercase tracking-[0.16em] text-gerflor-accent">
          Услуги
        </p>
        <h1 className="mt-2 max-w-3xl text-3xl font-semibold text-gerflor-navy md:text-4xl">
          Спортивные пространства Gerflor «под ключ»
        </h1>
        <p className="mt-4 max-w-3xl text-slate-600">
          От концепции зала до сдачи комиссии: один подрядчик на поставку и
          сервис. Работаем со школами, федерациями, фитнес-клубами и
          многофункциональными аренами.
        </p>
        <ul className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2">
          {steps.map((step) => (
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
