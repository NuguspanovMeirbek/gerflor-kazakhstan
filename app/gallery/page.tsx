import type { Metadata } from "next";
import Gallery from "@/components/Gallery";
import GalleryIntro from "@/components/pages/GalleryIntro";

export const metadata: Metadata = {
  title: "Галерея объектов Gerflor в Казахстане",
  description:
    "Жайык Арена, ФОК Береке, волейбольный центр Жетысу и другие объекты на покрытиях Taraflex.",
};

export default function GalleryPage() {
  return (
    <div>
      <GalleryIntro />
      <Gallery />
    </div>
  );
}
