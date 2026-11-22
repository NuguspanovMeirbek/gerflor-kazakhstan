"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { Instagram, Menu, Phone, X } from "lucide-react";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import { NAV_HREFS } from "@/lib/i18n/dictionaries";
import { useI18n } from "@/lib/i18n/context";
import { SITE, whatsappQuoteLink } from "@/lib/site";

export default function Header() {
  const pathname = usePathname();
  const { t } = useI18n();
  const [open, setOpen] = useState(false);
  const quoteHref = whatsappQuoteLink(t.wa.quote);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50 border-b border-[#E2E5EB]/80 bg-surface/95 backdrop-blur-md">
      <div className="container-site flex h-16 items-center justify-between gap-3 lg:h-[72px]">
        <Link
          href="/"
          className="tap-target flex min-w-0 items-center gap-3 rounded-md pr-2"
          aria-label={t.header.homeAria}
        >
          <span className="text-xl font-semibold tracking-tight text-gerflor-navy">
            Sportflor
          </span>
          <span className="hidden border-l border-slate-200 pl-3 text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-500 sm:inline">
            {t.header.country}
          </span>
        </Link>

        <nav className="hidden items-center gap-0.5 lg:flex" aria-label={t.nav.mainAria}>
          {NAV_HREFS.map((item) => {
            const active =
              item.href === "/"
                ? pathname === "/"
                : pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`tap-target whitespace-nowrap rounded-full px-2.5 text-sm font-medium transition-colors ${
                  active
                    ? "bg-slate-100 text-gerflor-navy"
                    : "text-slate-600 hover:bg-slate-50 hover:text-gerflor-navy"
                }`}
              >
                {t.nav[item.key]}
              </Link>
            );
          })}
        </nav>

        <div className="hidden min-w-0 flex-nowrap items-center gap-2 lg:flex">
          <LanguageSwitcher />
          <a
            href={SITE.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="tap-target shrink-0 rounded-full border border-slate-200 px-3 text-gerflor-navy transition-colors hover:border-gerflor-accent hover:text-gerflor-accent"
            aria-label={t.header.instagramAria}
          >
            <Instagram className="h-4 w-4" aria-hidden />
            <span className="sr-only">{t.header.instagram}</span>
          </a>
          <a
            href={SITE.phoneHref}
            className="tap-target shrink-0 gap-2 whitespace-nowrap rounded-full px-2 text-sm font-semibold tabular-nums text-gerflor-navy transition-colors hover:text-gerflor-accent"
          >
            <Phone className="h-4 w-4 shrink-0" aria-hidden />
            {SITE.phoneDisplay}
          </a>
          <a
            href={quoteHref}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary whitespace-nowrap"
          >
            {t.header.calculate}
          </a>
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <LanguageSwitcher />
          <button
            type="button"
            className="tap-target rounded-full border border-slate-200 p-2 text-gerflor-navy"
            aria-label={open ? t.header.closeMenu : t.header.openMenu}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open ? (
          <motion.div
            className="fixed inset-0 top-16 z-40 lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <button
              type="button"
              className="absolute inset-0 bg-gerflor-navy/40"
              aria-label={t.header.closeMenu}
              onClick={() => setOpen(false)}
            />
            <motion.aside
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.28 }}
              className="absolute right-0 top-0 flex h-full w-[min(100%,22rem)] flex-col bg-white px-5 py-6 shadow-2xl"
            >
              <LanguageSwitcher className="mb-4 self-start" />
              <nav className="flex flex-col gap-1" aria-label={t.nav.mobileAria}>
                {NAV_HREFS.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="tap-target justify-start rounded-xl px-3 text-base font-medium text-ink hover:bg-slate-50"
                  >
                    {t.nav[item.key]}
                  </Link>
                ))}
              </nav>
              <a
                href={SITE.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="tap-target mt-6 justify-start gap-2 rounded-xl border border-slate-200 px-3 text-base font-semibold text-gerflor-navy"
                onClick={() => setOpen(false)}
              >
                <Instagram className="h-5 w-5" aria-hidden />
                {t.header.instagram}
              </a>
              <a
                href={SITE.phoneHref}
                className="tap-target mt-3 justify-start gap-2 whitespace-nowrap rounded-xl bg-surface px-3 text-base font-semibold tabular-nums text-gerflor-navy"
              >
                <Phone className="h-5 w-5 shrink-0" aria-hidden />
                {SITE.phoneDisplay}
              </a>
              <a
                href={quoteHref}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary mt-4 w-full"
                onClick={() => setOpen(false)}
              >
                {t.header.calculate}
              </a>
            </motion.aside>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
