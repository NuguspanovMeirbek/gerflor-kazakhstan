"use client";

import { motion } from "framer-motion";
import { BadgeCheck, Factory, ShieldCheck, Truck } from "lucide-react";
import { features } from "@/lib/data";

const icons = [Truck, BadgeCheck, ShieldCheck, Factory];

export default function Features() {
  return (
    <section className="section bg-surface" id="features">
      <div className="container-site">
        <p className="text-sm font-semibold uppercase tracking-[0.16em] text-gerflor-accent">
          Почему Gerflor
        </p>
        <h2 className="mt-2 max-w-2xl text-2xl font-semibold text-gerflor-navy md:text-4xl">
          Французские покрытия мирового уровня — в Казахстане
        </h2>
        <p className="mt-4 max-w-2xl text-slate-600">
          Мы создаём безопасные спортивные пространства и внедряем стандарты
          Gerflor для арен, школ и спортивных центров.
        </p>

        <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4">
          {features.map((item, index) => {
            const Icon = icons[index] ?? ShieldCheck;
            return (
              <motion.article
                key={item.id}
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
