import type { Metadata } from "next";
import Gallery from "@/components/Gallery";

export const metadata: Metadata = {
  title: "Галерея объектов Gerflor в Казахстане",
  description:
    "Жайык Арена, ФОК Береке, волейбольный центр Жетысу и другие объекты на покрытиях Taraflex.",
};

export default function GalleryPage() {
  return (
    <div>
      <div className="container-site pt-10 md:pt-14">
        <h1 className="text-3xl font-semibold text-gerflor-navy md:text-4xl">
          Реализованные объекты
        </h1>
        <p className="mt-4 max-w-3xl text-slate-600">
          Профессиональные спортивные залы с покрытием Gerflor Taraflex
          Evolution 7.5 мм, сертифицированным FIVB.
        </p>
      </div>
      <Gallery />
    </div>
  );
}
