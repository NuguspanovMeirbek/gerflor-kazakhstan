"use client";

import { motion } from "framer-motion";
import { BadgeCheck, Factory, ShieldCheck, Truck } from "lucide-react";
import { featureIds } from "@/lib/data";
import { useI18n } from "@/lib/i18n/context";

const icons = [Truck, BadgeCheck, ShieldCheck, Factory];

export default function Features() {
  const { t } = useI18n();

  return (
    <section className="section bg-surface" id="features">
      <div className="container-site">
        <p className="text-sm font-semibold uppercase tracking-[0.16em] text-gerflor-accent">
          {t.features.eyebrow}
        </p>
        <h2 className="mt-2 max-w-3xl text-2xl font-semibold text-gerflor-navy md:text-4xl">
          {t.features.title}
        </h2>
        <p className="mt-4 max-w-2xl text-slate-600">{t.features.text}</p>

        <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4">
          {featureIds.map((id, index) => {
            const Icon = icons[index] ?? ShieldCheck;
            const item = t.features[id];
            return (
              <motion.article
                key={id}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:scale-[1.02] hover:shadow-md"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-gerflor-navy/10 text-gerflor-navy">
                  <Icon className="h-5 w-5" aria-hidden />
                </span>
                <h3 className="mt-4 text-lg font-semibold text-gerflor-navy">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  {item.description}
                </p>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
