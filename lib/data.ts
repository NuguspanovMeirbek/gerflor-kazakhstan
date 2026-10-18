import { asset } from "@/lib/asset";

export const featureIds = ["france", "service", "commission", "warranty"] as const;

export { catalogProducts } from "@/lib/catalog/products";

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
