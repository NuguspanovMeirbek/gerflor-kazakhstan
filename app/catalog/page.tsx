import type { Metadata } from "next";
import Catalog from "@/components/Catalog";

export const metadata: Metadata = {
  title: "Каталог покрытий Gerflor и Taraflex",
  description:
    "Гетерогенные рулонные покрытия, спортивные системы Taraflex и Taraflex Performance — прямые поставки в Казахстане.",
};

export default function CatalogPage() {
  return (
    <div className="bg-white">
      <div className="container-site pt-10 md:pt-14">
        <h1 className="text-3xl font-semibold text-gerflor-navy md:text-4xl">
          Каталог напольных покрытий Gerflor
        </h1>
        <p className="mt-4 max-w-3xl text-slate-600">
          Линейки для спорта, образования, здравоохранения и коммерции. Цены на
          Taraflex Evolution, Performance и Comfort — ориентир для расчета
          объекта; точная смета зависит от площади, основания и разметки.
        </p>
      </div>
      <Catalog heading="Коллекции и тарифы" />
    </div>
  );
}
