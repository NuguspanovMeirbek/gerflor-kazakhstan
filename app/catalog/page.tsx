import type { Metadata } from "next";
import Catalog from "@/components/Catalog";
import CatalogIntro from "@/components/pages/CatalogIntro";

export const metadata: Metadata = {
  title: "Каталог покрытий Gerflor и Taraflex",
  description:
    "Спортивные покрытия Taraflex, коммерческие рулоны Taralay и настенная коллекция Mural Revela — прямые поставки в Казахстане.",
};

export default function CatalogPage() {
  return (
    <div className="bg-white">
      <CatalogIntro />
      <Catalog />
    </div>
  );
}
