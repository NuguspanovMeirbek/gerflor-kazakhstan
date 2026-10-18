"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { catalogProducts } from "@/lib/data";
import { SITE } from "@/lib/site";

type CatalogProps = {
  heading?: string;
  compact?: boolean;
};

export default function Catalog({
  heading = "Каталог покрытий",
  compact = false,
}: CatalogProps) {
  const items = compact ? catalogProducts.slice(0, 3) : catalogProducts;

  return (
    <section className="section" id="catalog">
      <div className="container-site">
        <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-gerflor-accent">
              Каталог / тарифы
            </p>
            <h2 className="mt-2 text-2xl font-semibold text-gerflor-navy md:text-4xl">
              {heading}
            </h2>
          </div>
          {compact ? (
            <Link
              href="/catalog"
              className="tap-target text-sm font-semibold text-gerflor-accent hover:underline"
            >
              Весь каталог
            </Link>
          ) : null}
        </div>

        <div
          className={`mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 ${compact ? "" : "xl:grid-cols-4"}`}
        >
          {items.map((product, index) => (
            <motion.article
              key={product.id}
              id={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.4, delay: index * 0.06 }}
              className="flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:scale-[1.02] hover:shadow-lg"
            >
              <div className="relative aspect-[4/3] bg-slate-100">
                <Image
                  src={product.image}
                  alt={product.imageAlt}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover"
                />
              </div>
              <div className="flex flex-1 flex-col p-5">
                <h3 className="text-lg font-semibold text-gerflor-navy">
                  {product.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  {product.summary}
                </p>
                <ul className="mt-4 space-y-1.5 text-sm text-slate-700">
                  {product.specs.map((spec) => (
                    <li key={spec} className="flex gap-2">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gerflor-accent" />
                      {spec}
                    </li>
                  ))}
                </ul>
                {product.price ? (
                  <p className="mt-4 text-base font-semibold text-gerflor-navy">
                    {product.price}
                  </p>
                ) : null}
                <a
                  href={SITE.whatsappQuote}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary mt-5 w-full"
                >
                  Запросить расчет
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
