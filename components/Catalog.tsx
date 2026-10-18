"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  catalogProducts,
  type CatalogCategory,
} from "@/lib/catalog/products";
import { useI18n } from "@/lib/i18n/context";
import { whatsappQuoteLink } from "@/lib/site";

type CatalogProps = {
  heading?: string;
  compact?: boolean;
};

const FILTERS: Array<"all" | CatalogCategory> = [
  "all",
  "sport",
  "floor",
  "wall",
];

export default function Catalog({ heading, compact = false }: CatalogProps) {
  const { t } = useI18n();
  const [filter, setFilter] = useState<"all" | CatalogCategory>("all");
  const quoteHref = whatsappQuoteLink(t.wa.quote);

  const items = useMemo(() => {
    if (compact) {
      return catalogProducts.filter((product) => product.featured);
    }
    if (filter === "all") return catalogProducts;
    return catalogProducts.filter((product) => product.category === filter);
  }, [compact, filter]);

  const filterLabel = (key: (typeof FILTERS)[number]) => {
    if (key === "all") return t.catalog.filterAll;
    return t.catalog[key];
  };

  return (
    <section className="section" id="catalog">
      <div className="container-site">
        <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-gerflor-accent">
              {t.catalog.eyebrow}
            </p>
            <h2 className="mt-2 text-2xl font-semibold text-gerflor-navy md:text-4xl">
              {heading ?? (compact ? t.catalog.heading : t.catalog.collections)}
            </h2>
          </div>
          {compact ? (
            <Link
              href="/catalog"
              className="tap-target text-sm font-semibold text-gerflor-accent hover:underline"
            >
              {t.catalog.all}
            </Link>
          ) : null}
        </div>

        {compact ? null : (
          <div className="mt-8 flex flex-wrap gap-2">
            {FILTERS.map((key) => {
              const active = filter === key;
              return (
                <button
                  key={key}
                  type="button"
                  onClick={() => setFilter(key)}
                  className={`tap-target rounded-full px-4 py-2 text-sm font-semibold transition-colors ${
                    active
                      ? "bg-gerflor-navy text-white"
                      : "border border-slate-200 bg-white text-gerflor-navy hover:border-gerflor-navy"
                  }`}
                >
                  {filterLabel(key)}
                </button>
              );
            })}
          </div>
        )}

        <div
          className={`mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 ${compact ? "" : "xl:grid-cols-4"}`}
        >
          {items.map((product, index) => {
            const copy = t.catalog.products[product.id];
            if (!copy) return null;
            return (
              <motion.article
                key={product.id}
                id={product.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.4, delay: index * 0.04 }}
                className="flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:scale-[1.02] hover:shadow-lg"
              >
                <div className="relative aspect-[4/3] bg-slate-100">
                  <Image
                    src={product.image}
                    alt={copy.imageAlt}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover"
                  />
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <p className="text-xs font-semibold uppercase tracking-[0.14em] text-gerflor-accent">
                    {t.catalog[product.category]}
                  </p>
                  <h3 className="mt-1 text-lg font-semibold text-gerflor-navy">
                    {copy.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">
                    {copy.summary}
                  </p>
                  <ul className="mt-4 space-y-1.5 text-sm text-slate-700">
                    {copy.specs.map((spec) => (
                      <li key={spec} className="flex gap-2">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gerflor-accent" />
                        {spec}
                      </li>
                    ))}
                  </ul>
                  {copy.price ? (
                    <p className="mt-4 text-base font-semibold text-gerflor-navy">
                      {copy.price}
                    </p>
                  ) : null}
                  <div className="flex-1" />
                  <a
                    href={quoteHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary mt-5 w-full"
                  >
                    {t.catalog.request}
                  </a>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
