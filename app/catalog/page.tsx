import type { Metadata } from "next";
import Catalog from "@/components/Catalog";
import CatalogIntro from "@/components/pages/CatalogIntro";

export const metadata: Metadata = {
  title: "Каталог покрытий Gerflor и Taraflex",
  description:
    "Гетерогенные рулонные покрытия, спортивные системы Taraflex и Taraflex Performance — прямые поставки в Казахстане.",
};

export default function CatalogPage() {
  return (
    <div className="bg-white">
      <CatalogIntro />
      <Catalog />
    </div>
  );
}
