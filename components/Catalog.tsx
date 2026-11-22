"use client";

import { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
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

const FILTERS: Array<"all" | CatalogCategory> = ["all", "sport", "floor", "wall"];

const FAMILY_LABEL = {
  taraflex: "Taraflex",
  taralay: "Taralay",
  mural: "Mural Revela",
} as const;

export default function Catalog({ heading, compact = false }: CatalogProps) {
  const { t } = useI18n();
  const [filter, setFilter] = useState<"all" | CatalogCategory>("all");
  const quoteHref = whatsappQuoteLink(t.wa.quote);

  useEffect(() => {
    const value = new URLSearchParams(window.location.search).get("category");
    if (value === "sport" || value === "floor" || value === "wall") {
      setFilter(value);
    }
  }, []);

  const items = useMemo(() => {
    if (compact) return catalogProducts.filter((product) => product.featured);
    if (filter === "all") return catalogProducts;
    return catalogProducts.filter((product) => product.category === filter);
  }, [compact, filter]);

  function selectFilter(key: "all" | CatalogCategory) {
    setFilter(key);
    const url = new URL(window.location.href);
    if (key === "all") url.searchParams.delete("category");
    else url.searchParams.set("category", key);
    window.history.replaceState({}, "", `${url.pathname}${url.search}${url.hash}`);
  }

  const filterLabel = (key: (typeof FILTERS)[number]) => {
    if (key === "all") return t.catalog.filterAll;
    return t.catalog[key];
  };

  return (
    <section className="bg-white pb-20 pt-8 md:pb-28 md:pt-10" id="catalog">
      <div className="container-site">
        {compact ? (
          <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <h2 className="text-2xl font-semibold text-gerflor-navy md:text-4xl">
              {heading ?? t.catalog.heading}
            </h2>
            <Link href="/catalog/" className="text-sm font-semibold text-gerflor-accent">
              {t.catalog.all}
            </Link>
          </div>
        ) : (
          <div className="-mx-4 flex gap-2 overflow-x-auto px-4 pb-1 md:mx-0 md:flex-wrap md:px-0">
            {FILTERS.map((key) => {
              const active = filter === key;
              return (
                <button
                  key={key}
                  type="button"
                  onClick={() => selectFilter(key)}
                  className={`inline-flex min-h-11 shrink-0 items-center px-4 text-sm font-semibold transition-colors ${
                    active
                      ? "bg-gerflor-navy text-white"
                      : "bg-[#f4f6f8] text-gerflor-navy hover:bg-slate-200"
                  }`}
                  aria-pressed={active}
                >
                  {filterLabel(key)}
                </button>
              );
            })}
          </div>
        )}

        <div className="mt-12 grid grid-cols-1 gap-x-6 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((product) => {
            const copy = t.catalog.products[product.id];
            if (!copy) return null;
            return (
              <article key={product.id} id={product.id} className="flex flex-col">
                <div className="relative aspect-[4/3] bg-slate-100">
                  <Image
                    src={product.image}
                    alt={copy.imageAlt}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover"
                  />
                </div>
                <div className="flex flex-1 flex-col pt-5">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-gerflor-accent">
                    {FAMILY_LABEL[product.family]}
                  </p>
                  <h2 className="mt-2 text-2xl font-semibold leading-tight tracking-tight text-gerflor-navy">
                    {copy.title}
                  </h2>
                  <p className="mt-1 text-sm text-slate-500">{t.catalog[product.category]}</p>
                  <p className="mt-4 text-sm leading-6 text-slate-600">{copy.summary}</p>
                  <ul className="mt-4 space-y-1.5 text-sm leading-6 text-slate-700">
                    {copy.specs.map((spec) => (
                      <li key={spec}>{spec}</li>
                    ))}
                  </ul>
                  {copy.price ? (
                    <p className="mt-5 text-lg font-semibold text-gerflor-navy">{copy.price}</p>
                  ) : null}
                  <a
                    href={quoteHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-5 inline-flex min-h-11 items-center gap-2 self-start text-sm font-semibold text-[#1F7A4D]"
                  >
                    {t.catalog.request}
                    <ArrowUpRight className="h-4 w-4" aria-hidden />
                  </a>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
