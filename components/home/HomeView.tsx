"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Building2, ClipboardList, Layers, Phone, Truck, Wrench } from "lucide-react";
import { asset } from "@/lib/asset";
import { homeCopy } from "@/lib/i18n/home";
import { useI18n } from "@/lib/i18n/context";
import { galleryProjects } from "@/lib/data";
import { SITE, whatsappQuoteLink } from "@/lib/site";

const projectIds = ["barys", "jekpe-jek", "zhayik", "bereke"] as const;

const whyIcons = [Layers, Truck, Wrench, ClipboardList, Building2];

export default function HomeView() {
  const { locale, t } = useI18n();
  const copy = homeCopy[locale];
  const quoteHref = whatsappQuoteLink(t.wa.quote);

  return (
    <>
      <section className="relative isolate flex min-h-[calc(100svh-4rem)] items-end overflow-hidden bg-gerflor-navy lg:min-h-[calc(100svh-4.5rem)] lg:items-center">
        <Image
          src={asset("/images/hero-volley.jpg")}
          alt={copy.hero.imageAlt}
          fill
          priority
          sizes="100vw"
          className="object-cover object-[center_28%] lg:object-[62%_center]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gerflor-navy via-gerflor-navy/75 to-gerflor-navy/25 lg:bg-gradient-to-r lg:from-gerflor-navy lg:via-gerflor-navy/72 lg:to-gerflor-navy/15" />
        <div className="container-site relative z-10 w-full py-12 sm:py-16 lg:py-20">
          <div className="max-w-xl text-white">
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-white/75">
              {copy.hero.eyebrow}
            </p>
            <h1 className="mt-5 text-[2.15rem] font-semibold leading-[1.12] tracking-tight sm:text-5xl lg:text-[3.35rem]">
              {copy.hero.title}
            </h1>
            <p className="mt-5 max-w-md text-base leading-7 text-white/88 sm:text-lg">
              {copy.hero.text}
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href={quoteHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-12 items-center justify-center bg-[#1F7A4D] px-7 text-sm font-semibold text-white transition-colors hover:bg-[#18643E]"
              >
                {copy.hero.discuss}
              </a>
              <Link
                href="/catalog/"
                className="inline-flex min-h-12 items-center justify-center bg-white px-7 text-sm font-semibold text-gerflor-navy transition-colors hover:bg-white/90"
              >
                {copy.hero.catalog}
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-20 md:py-28">
        <div className="container-site">
          <SectionIntro eyebrow={copy.directions.eyebrow} title={copy.directions.title} />
          <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-3 md:gap-6">
            <Direction
              href="/catalog/?category=sport"
              index="01"
              title={copy.directions.sport}
              image="/images/gallery-barys.jpg"
              alt={copy.directions.sportAlt}
              position="object-[center_45%]"
            />
            <Direction
              href="/catalog/?category=floor"
              index="02"
              title={copy.directions.floor}
              image="/images/about-flooring.jpg"
              alt={copy.directions.floorAlt}
              position="object-center"
            />
            <Direction
              href="/catalog/?category=wall"
              index="03"
              title={copy.directions.wall}
              image="/images/catalog/mural-revela.jpeg"
              alt={copy.directions.wallAlt}
              position="object-[center_40%]"
            />
          </div>
        </div>
      </section>

      <section className="bg-[#f4f6f8] py-20 md:py-28">
        <div className="container-site grid items-center gap-12 lg:grid-cols-12 lg:gap-20">
          <div className="lg:col-span-5">
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-gerflor-accent">
              {copy.about.eyebrow}
            </p>
            <h2 className="mt-4 max-w-md text-[2rem] font-semibold leading-[1.15] tracking-tight text-gerflor-navy md:text-4xl">
              {copy.about.title}
            </h2>
            <p className="mt-6 max-w-md text-base leading-7 text-slate-600">
              {copy.about.text}
            </p>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden bg-slate-200 lg:col-span-7">
            <Image
              src={asset("/images/gallery-jekpe-jek.jpg")}
              alt={copy.about.imageAlt}
              fill
              sizes="(max-width: 1024px) 100vw, 58vw"
              className="object-cover object-[center_40%]"
            />
          </div>
        </div>
      </section>

      <section className="bg-white py-20 md:py-28">
        <div className="container-site">
          <SectionIntro eyebrow={copy.why.eyebrow} title={copy.why.title} />
          <ul className="mt-14 grid grid-cols-1 gap-x-12 gap-y-10 sm:grid-cols-2 lg:grid-cols-6">
            {copy.why.items.map((item, index) => {
              const Icon = whyIcons[index] ?? Layers;
              const wide = index >= 3;
              return (
                <li key={item.title} className={wide ? "lg:col-span-3" : "lg:col-span-2"}>
                  <Icon className="h-5 w-5 text-gerflor-accent" strokeWidth={1.5} aria-hidden />
                  <h3 className="mt-5 max-w-sm text-lg font-semibold leading-snug text-gerflor-navy">
                    {item.title}
                  </h3>
                  <p className="mt-3 max-w-sm text-sm leading-6 text-slate-600">{item.text}</p>
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      <section className="bg-[#f4f6f8] py-20 md:py-28">
        <div className="container-site">
          <SectionIntro eyebrow={copy.collections.eyebrow} title={copy.collections.title} />
          <p className="mt-5 max-w-xl text-base leading-7 text-slate-600">{copy.collections.note}</p>
          <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3 md:gap-6">
            <Collection
              href="/catalog/?category=sport"
              name="Taraflex"
              label={copy.collections.taraflex}
              maker={copy.collections.maker}
              image="/images/catalog/taraflex-evolution.jpg"
              alt="Taraflex"
              position="object-center"
            />
            <Collection
              href="/catalog/?category=floor"
              name="Taralay"
              label={copy.collections.taralay}
              maker={copy.collections.maker}
              image="/images/catalog/taralay-impression-comfort.jpg"
              alt="Taralay"
              position="object-center"
            />
            <Collection
              href="/catalog/?category=wall"
              name="Mural Revela"
              label={copy.collections.mural}
              maker={copy.collections.maker}
              image="/images/catalog/mural-revela.jpeg"
              alt="Mural Revela"
              position="object-[center_35%]"
            />
          </div>
        </div>
      </section>

      <section className="bg-white py-20 md:py-28">
        <div className="container-site">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <SectionIntro eyebrow={copy.projects.eyebrow} title={copy.projects.title} text={copy.projects.text} />
            <Link
              href="/gallery/"
              className="inline-flex items-center gap-2 text-sm font-semibold text-gerflor-navy hover:text-gerflor-accent"
            >
              {copy.projects.all}
              <ArrowUpRight className="h-4 w-4" aria-hidden />
            </Link>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-x-6 gap-y-10 md:grid-cols-2">
            {projectIds.map((id) => {
              const project = galleryProjects.find((item) => item.id === id);
              const details = t.gallery.projects[id];
              if (!project || !details) return null;
              return (
                <Link key={id} href="/gallery/" className="group block">
                  <div className="relative aspect-[16/10] overflow-hidden bg-slate-200">
                    <Image
                      src={project.image}
                      alt={details.imageAlt}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover object-center"
                    />
                  </div>
                  <p className="mt-4 text-[11px] font-semibold uppercase tracking-[0.18em] text-gerflor-accent">
                    {details.city}
                  </p>
                  <h3 className="mt-1 text-xl font-semibold text-gerflor-navy">{details.title}</h3>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-[#f4f6f8] py-20 md:py-28">
        <div className="container-site">
          <SectionIntro eyebrow={copy.process.eyebrow} title={copy.process.title} />
          <div className="relative mt-14">
            <span className="absolute left-0 right-8 top-3 hidden h-px bg-gerflor-navy/15 lg:block" aria-hidden />
            <ol className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-5 lg:gap-8">
            {copy.process.steps.map((step, index) => (
              <li key={step.title}>
                <p className="relative inline-flex bg-[#f4f6f8] pr-3 text-sm font-semibold tabular-nums text-gerflor-accent">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-4 text-lg font-semibold leading-snug text-gerflor-navy">{step.title}</h3>
                <p className="mt-2 max-w-[16rem] text-sm leading-6 text-slate-600">{step.text}</p>
              </li>
            ))}
            </ol>
          </div>
        </div>
      </section>

      <section className="bg-gerflor-navy text-white">
        <div className="container-site grid gap-10 py-20 md:py-28 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-white/60">Sportflor</p>
            <h2 className="mt-4 max-w-xl text-[2rem] font-semibold leading-[1.15] tracking-tight md:text-4xl lg:text-5xl">
              {copy.cta.title}
            </h2>
          </div>
          <div className="flex flex-col items-start gap-4 lg:col-span-5 lg:items-end">
            <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
              <a
                href={quoteHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-12 items-center justify-center bg-[#1F7A4D] px-7 text-sm font-semibold text-white transition-colors hover:bg-[#18643E]"
              >
                {copy.cta.whatsapp}
              </a>
              <Link
                href="/contacts/"
                className="inline-flex min-h-12 items-center justify-center border border-white/40 px-7 text-sm font-semibold text-white transition-colors hover:bg-white hover:text-gerflor-navy"
              >
                {copy.cta.contact}
              </Link>
            </div>
            <a
              href={SITE.phoneHref}
              className="inline-flex items-center gap-2 text-sm font-medium tabular-nums text-white/80 hover:text-white"
            >
              <Phone className="h-4 w-4" aria-hidden />
              {SITE.phoneDisplay}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

function SectionIntro({
  eyebrow,
  title,
  text,
}: {
  eyebrow: string;
  title: string;
  text?: string;
}) {
  return (
    <div>
      <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-gerflor-accent">{eyebrow}</p>
      <h2 className="mt-4 max-w-xl text-[2rem] font-semibold leading-[1.15] tracking-tight text-gerflor-navy md:text-4xl">
        {title}
      </h2>
      {text ? <p className="mt-4 max-w-md text-base leading-7 text-slate-600">{text}</p> : null}
    </div>
  );
}

function Direction({
  href,
  index,
  title,
  image,
  alt,
  position,
}: {
  href: string;
  index: string;
  title: string;
  image: string;
  alt: string;
  position: string;
}) {
  return (
    <Link href={href} className="group block">
      <div className="relative aspect-[4/5] overflow-hidden bg-slate-200">
        <Image
          src={asset(image)}
          alt={alt}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className={`object-cover ${position}`}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gerflor-navy/75 via-gerflor-navy/10 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 p-6 text-white">
          <p className="text-[11px] font-semibold tracking-[0.18em] text-white/70">{index}</p>
          <div className="mt-2 flex items-end justify-between gap-4">
            <h3 className="max-w-[12rem] text-2xl font-semibold leading-tight">{title}</h3>
            <ArrowUpRight className="mb-1 h-5 w-5 shrink-0" aria-hidden />
          </div>
        </div>
      </div>
    </Link>
  );
}

function Collection({
  href,
  name,
  label,
  maker,
  image,
  alt,
  position,
}: {
  href: string;
  name: string;
  label: string;
  maker: string;
  image: string;
  alt: string;
  position: string;
}) {
  return (
    <Link href={href} className="group block bg-white">
      <div className="relative aspect-[4/3] overflow-hidden bg-slate-200">
        <Image
          src={asset(image)}
          alt={alt}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className={`object-cover ${position}`}
        />
      </div>
      <div className="px-1 pt-5">
        <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-500">{maker}</p>
        <h3 className="mt-2 text-2xl font-semibold tracking-tight text-gerflor-navy">{name}</h3>
        <p className="mt-1 text-sm leading-6 text-slate-600">{label}</p>
      </div>
    </Link>
  );
}
