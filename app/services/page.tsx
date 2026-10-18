import type { Metadata } from "next";
import ServicesContent from "@/components/pages/ServicesContent";

export const metadata: Metadata = {
  title: "Услуги «под ключ»",
  description:
    "Проектирование, поставка, монтаж и сдача спортивных покрытий Gerflor технадзору и международным комиссиям.",
};

export default function ServicesPage() {
  return <ServicesContent />;
}
