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
  { id: "zhayik", image: asset("/images/gallery-zhayik.webp") },
  { id: "bereke", image: asset("/images/gallery-bereke.jpg") },
  { id: "zhetysu", image: asset("/images/gallery-zhetysu.jpg") },
  { id: "abay", image: asset("/images/gallery-abay.webp") },
  { id: "school", image: asset("/images/gallery-shoqan.jpg") },
  { id: "multi", image: asset("/images/gallery-boccia.jpg") },
  { id: "jekpe-jek", image: asset("/images/gallery-jekpe-jek.jpg") },
  { id: "barys", image: asset("/images/gallery-barys.jpg") },
] as const;
