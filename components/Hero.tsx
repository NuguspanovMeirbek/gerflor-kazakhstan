"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { SITE } from "@/lib/site";

export default function Hero() {
  return (
    <section className="bg-[#EAE6E3]">
      <div className="container-site grid grid-cols-1 items-center gap-8 py-10 lg:grid-cols-2 lg:gap-16 lg:py-16">
        <div className="relative order-2 aspect-[16/9] w-full overflow-hidden sm:aspect-[16/10] lg:order-1 lg:aspect-auto lg:h-[450px]">
          <Image
            src="/images/hero-volley.jpg"
            alt="Профессиональный волейбольный зал на покрытии Gerflor Taraflex"
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover object-center"
          />
        </div>

        <div className="order-1 max-w-xl lg:order-2 lg:py-4">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
            className="text-sm font-semibold uppercase tracking-[0.12em] text-gerflor-navy"
          >
            Gerflor Kazakhstan — эксклюзивный представитель и авторизованный
            сервис
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.08 }}
            className="mt-4 text-2xl font-semibold leading-tight tracking-tight text-gerflor-navy sm:text-3xl md:text-4xl lg:text-[2.75rem]"
          >
            Спортивные пространства Gerflor «под ключ» в Казахстане
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.16 }}
            className="mt-5 text-base leading-relaxed text-gerflor-navy/80 md:text-lg"
          >
            Прямые поставки французских покрытий и монтаж по стандартам завода —
            от проектирования до сдачи объекта технадзору и международным
            комиссиям.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.24 }}
            className="mt-8 flex w-full flex-col gap-3 sm:flex-row"
          >
            <a
              href={SITE.whatsappQuote}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary w-full sm:w-auto"
            >
              Рассчитать проект
              <ArrowRight className="ml-2 h-4 w-4" aria-hidden />
            </a>
            <Link href="/catalog" className="btn-outline w-full sm:w-auto">
              Смотреть каталог
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
