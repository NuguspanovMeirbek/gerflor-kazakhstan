import type { Metadata } from "next";
import HomeView from "@/components/home/HomeView";

export const metadata: Metadata = {
  title: {
    absolute: "Sportflor — спортивные и коммерческие покрытия нового уровня",
  },
  description:
    "Поставка, проектирование и профессиональный монтаж покрытий для спортивных и коммерческих объектов.",
};

export default function HomePage() {
  return <HomeView />;
}
