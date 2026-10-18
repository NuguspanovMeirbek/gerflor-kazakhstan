"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { galleryProjects } from "@/lib/data";

type GalleryProps = {
  compact?: boolean;
};

export default function Gallery({ compact = false }: GalleryProps) {
  const items = compact ? galleryProjects.slice(0, 6) : galleryProjects;

  return (
    <section className="section bg-surface" id="gallery">
      <div className="container-site">
        <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-gerflor-accent">
              Объекты
            </p>
            <h2 className="mt-2 text-2xl font-semibold text-gerflor-navy md:text-4xl">
              Галерея выполненных объектов
            </h2>
            <p className="mt-3 max-w-2xl text-slate-600">
              Спортивные и коммерческие площадки в Казахстане на покрытиях
              Gerflor Taraflex.
            </p>
          </div>
          {compact ? (
            <Link
              href="/gallery"
              className="tap-target text-sm font-semibold text-gerflor-accent hover:underline"
            >
              Все объекты
            </Link>
          ) : null}
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {items.map((project, index) => (
            <motion.figure
              key={project.id}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="group overflow-hidden rounded-2xl bg-white shadow-sm transition-all duration-300 hover:scale-[1.02] hover:shadow-lg"
            >
              <div className="relative aspect-[4/3]">
                <Image
                  src={project.image}
                  alt={project.imageAlt}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <figcaption className="p-5">
                <p className="text-xs font-semibold uppercase tracking-wide text-gerflor-accent">
                  {project.city}
                </p>
                <h3 className="mt-1 text-lg font-semibold text-gerflor-navy">
                  {project.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  {project.description}
                </p>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
