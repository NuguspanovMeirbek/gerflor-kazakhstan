import { asset } from "@/lib/asset";

export const featureIds = ["france", "service", "commission", "warranty"] as const;

export const catalogProducts = [
  {
    id: "heterogeneous-rolls",
    image: asset("/images/product-wood.png"),
    href: "/catalog#heterogeneous-rolls",
  },
  {
    id: "taraflex",
    image: asset("/images/gallery-volley2.jpg"),
    href: "/catalog#taraflex",
  },
  {
    id: "taraflex-performance",
    image: asset("/images/product-per.jpg"),
    href: "/catalog#taraflex-performance",
  },
  {
    id: "taraflex-evolution",
    image: asset("/images/product-25736.jpg"),
    href: "/catalog#taraflex-evolution",
  },
] as const;

export const galleryProjects = [
  { id: "zhayik", image: asset("/images/gallery-img-6853.jpeg") },
  { id: "bereke", image: asset("/images/gallery-fbtw3.jpg") },
  { id: "zhetysu", image: asset("/images/gallery-fbtw2.jpg") },
  { id: "volley-pro", image: asset("/images/hero-volley.jpg") },
  { id: "school", image: asset("/images/gallery-96787.jpeg") },
  { id: "multi", image: asset("/images/gallery-35786.jpg") },
] as const;
