"use client";

import Link from "next/link";
import { Instagram, MapPin, Phone } from "lucide-react";
import { NAV_HREFS } from "@/lib/i18n/dictionaries";
import { useI18n } from "@/lib/i18n/context";
import { SITE } from "@/lib/site";

export default function Footer() {
  const { t } = useI18n();

  return (
    <footer className="bg-gerflor-navy text-white">
      <div className="container-site grid grid-cols-1 gap-10 py-12 md:grid-cols-2 lg:grid-cols-3">
        <div>
          <p className="text-lg font-semibold">Gerflor Kazakhstan</p>
          <p className="mt-3 max-w-sm text-sm leading-relaxed text-white/75">
            {t.footer.blurb}
          </p>
        </div>

        <nav aria-label={t.nav.footerAria}>
          <p className="text-sm font-semibold uppercase tracking-wide text-white/60">
            {t.footer.sections}
          </p>
          <ul className="mt-3 space-y-2">
            {NAV_HREFS.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="tap-target justify-start text-sm text-white/85 hover:text-white"
                >
                  {t.nav[item.key]}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <p className="text-sm font-semibold uppercase tracking-wide text-white/60">
            {t.footer.contacts}
          </p>
          <a
            href={SITE.phoneHref}
            className="tap-target mt-3 justify-start gap-2 text-sm font-medium text-white"
          >
            <Phone className="h-4 w-4" aria-hidden />
            {SITE.phoneDisplay}
          </a>
          <p className="mt-3 flex items-start gap-2 text-sm text-white/80">
            <MapPin className="mt-0.5 h-4 w-4 shrink-0" aria-hidden />
            {t.contacts.address}
          </p>
          <a
            href={SITE.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="tap-target mt-4 justify-start gap-2 rounded-full bg-[#E4405F] px-4 text-sm font-semibold text-white hover:bg-[#d63a56]"
          >
            <Instagram className="h-4 w-4" aria-hidden />
            {t.header.instagram}
          </a>
        </div>
      </div>
      <div className="relative z-10 border-t border-white/10">
        <div className="container-site flex flex-wrap items-center gap-x-3 gap-y-2 py-5">
          <p className="text-sm text-white/70">{t.footer.rights}</p>
          <a
            href="/privacy"
            className="relative z-10 text-sm font-medium text-white underline decoration-white/50 underline-offset-4 hover:decoration-white"
          >
            {t.footer.privacy}
          </a>
        </div>
      </div>
    </footer>
  );
}
