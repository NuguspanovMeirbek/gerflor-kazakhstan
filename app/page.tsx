import About from "@/components/About";
import Catalog from "@/components/Catalog";
import Features from "@/components/Features";
import Gallery from "@/components/Gallery";
import Hero from "@/components/Hero";

export default function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <Features />
      <Catalog compact />
      <Gallery compact />
    </>
  );
}
