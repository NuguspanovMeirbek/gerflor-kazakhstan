"use client";

import Link from "next/link";
import { useI18n } from "@/lib/i18n/context";

export default function NotFound() {
  const { t } = useI18n();
  return (
    <section className="section">
      <div className="container-site max-w-xl py-16 text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.16em] text-gerflor-accent">
          404
        </p>
        <h1 className="mt-2 text-3xl font-semibold text-gerflor-navy">
          {t.notFound.title}
        </h1>
        <p className="mt-3 text-slate-600">{t.notFound.text}</p>
        <Link href="/" className="btn-primary mt-8 inline-flex">
          {t.notFound.home}
        </Link>
      </div>
    </section>
  );
}
