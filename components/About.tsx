"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section className="section bg-white" id="about">
      <div className="container-site grid grid-cols-1 items-center gap-10 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.45 }}
          className="relative aspect-[4/3] overflow-hidden rounded-3xl bg-slate-100"
        >
          <Image
            src="/images/hero-hall.webp"
            alt="Спортивный зал Gerflor в Казахстане"
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.45, delay: 0.08 }}
        >
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-gerflor-accent">
            О компании
          </p>
          <h2 className="mt-2 text-2xl font-semibold text-gerflor-navy md:text-4xl">
            Французские напольные покрытия мирового уровня
          </h2>
          <p className="mt-4 text-slate-600 leading-relaxed">
            Gerflor Kazakhstan создаёт безопасные, современные и технологичные
            спортивные пространства. Продукция Gerflor используется на
            Олимпийских играх, чемпионатах мира, а также в школах, больницах и
            офисах более чем в 100 странах.
          </p>
          <ul className="mt-6 space-y-3 text-sm text-slate-700">
            <li className="flex gap-2">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gerflor-accent" />
              сертифицированные покрытия для спорта, коммерции и дома;
            </li>
            <li className="flex gap-2">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gerflor-accent" />
              профессиональный подбор, монтаж и обслуживание;
            </li>
            <li className="flex gap-2">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gerflor-accent" />
              решения под любой объект — от спортивного комплекса до офиса.
            </li>
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
