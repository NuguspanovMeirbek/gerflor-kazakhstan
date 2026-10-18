"use client";

import { Instagram, MapPin, Phone } from "lucide-react";
import { useI18n } from "@/lib/i18n/context";
import { SITE, whatsappQuoteLink } from "@/lib/site";

export default function ContactsContent() {
  const { t } = useI18n();

  return (
    <section className="section">
      <div className="container-site max-w-2xl">
        <h1 className="text-3xl font-semibold text-gerflor-navy md:text-4xl">
          {t.contacts.title}
        </h1>
        <p className="mt-4 text-slate-600">{t.contacts.intro}</p>
        <a
          href={SITE.phoneHref}
          className="tap-target mt-6 justify-start gap-2 whitespace-nowrap text-lg font-semibold tabular-nums text-gerflor-navy"
        >
          <Phone className="h-5 w-5 shrink-0" aria-hidden />
          {SITE.phoneDisplay}
        </a>
        <p className="mt-4 flex items-start gap-2 text-slate-700">
          <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-gerflor-accent" />
          {t.contacts.address}
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <a
            href={whatsappQuoteLink(t.wa.quote)}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            {t.contacts.quote}
          </a>
          <a
            href={SITE.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="tap-target gap-2 rounded-full bg-[#E4405F] px-6 py-3 text-sm font-semibold text-white hover:bg-[#d63a56]"
          >
            <Instagram className="h-4 w-4" aria-hidden />
            {t.header.instagram}
          </a>
        </div>
      </div>
    </section>
  );
}
