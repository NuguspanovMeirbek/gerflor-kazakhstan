"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { asset } from "@/lib/asset";
import { useI18n } from "@/lib/i18n/context";
import { whatsappQuoteLink } from "@/lib/site";

export default function Hero() {
  const { t } = useI18n();

  return (
    <section className="relative isolate overflow-hidden bg-gerflor-navy">
      <div className="absolute inset-0">
        <Image
          src={asset("/images/hero-home.jpg")}
          alt={t.hero.imageAlt}
          fill
          priority
          sizes="100vw"
          className="object-cover object-[center_62%] sm:object-[center_58%] md:object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-gerflor-navy/60 via-gerflor-navy/30 to-gerflor-navy/10 md:from-gerflor-navy/50 md:via-gerflor-navy/18 md:to-transparent" />
      </div>

      <div className="container-site relative z-10 flex min-h-[70vh] items-end py-12 sm:min-h-[78vh] md:items-center md:py-20 lg:min-h-[82vh]">
        <div className="max-w-2xl text-white">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
            className="text-sm font-semibold uppercase tracking-[0.12em] text-white/90"
          >
            {t.hero.eyebrow}
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.08 }}
            className="mt-4 text-2xl font-semibold leading-tight tracking-tight sm:text-3xl md:text-4xl lg:text-[2.75rem]"
          >
            {t.hero.title}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.16 }}
            className="mt-5 text-base leading-relaxed text-white/90 md:text-lg"
          >
            {t.hero.text}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.24 }}
            className="mt-8 flex w-full flex-col gap-3 sm:flex-row"
          >
            <a
              href={whatsappQuoteLink(t.wa.quote)}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary w-full sm:w-auto"
            >
              {t.header.calculate}
              <ArrowRight className="ml-2 h-4 w-4" aria-hidden />
            </a>
            <Link
              href="/catalog"
              className="tap-target w-full rounded-full border border-white/70 bg-white/10 px-6 py-3 text-sm font-semibold text-white backdrop-blur-sm hover:bg-white/20 sm:w-auto"
            >
              {t.hero.catalog}
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
