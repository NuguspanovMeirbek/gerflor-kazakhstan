import type { Metadata } from "next";
import { MapPin, Phone } from "lucide-react";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Контакты",
  description: `Gerflor Kazakhstan: ${SITE.phoneDisplay}, ${SITE.address}`,
};

export default function ContactsPage() {
  return (
    <section className="section">
      <div className="container-site max-w-2xl">
        <h1 className="text-3xl font-semibold text-gerflor-navy md:text-4xl">
          Контакты
        </h1>
        <p className="mt-4 text-slate-600">
          Gerflor Kazakhstan — эксклюзивный представитель и авторизованный
          сервис.
        </p>
        <a
          href={SITE.phoneHref}
          className="tap-target mt-6 justify-start gap-2 text-lg font-semibold text-gerflor-navy"
        >
          <Phone className="h-5 w-5" aria-hidden />
          {SITE.phoneDisplay}
        </a>
        <p className="mt-4 flex items-start gap-2 text-slate-700">
          <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-gerflor-accent" />
          {SITE.address}
        </p>
        <a
          href={SITE.whatsappQuote}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary mt-8"
        >
          Рассчитать проект в WhatsApp
        </a>
      </div>
    </section>
  );
}
