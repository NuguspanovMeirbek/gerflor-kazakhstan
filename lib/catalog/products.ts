import { asset } from "@/lib/asset";

export const CATALOG_CATEGORIES = ["sport", "floor", "wall"] as const;
export type CatalogCategory = (typeof CATALOG_CATEGORIES)[number];

export type CatalogProduct = {
  id: string;
  category: CatalogCategory;
  family: "taraflex" | "taralay" | "mural";
  image: string;
  href: string;
  featured?: boolean;
};

export const catalogProducts: CatalogProduct[] = [
  {
    id: "taraflex-evolution",
    category: "sport",
    family: "taraflex",
    image: asset("/images/catalog/taraflex-evolution.jpg"),
    href: "/catalog#taraflex-evolution",
    featured: true,
  },
  {
    id: "taraflex-performance",
    category: "sport",
    family: "taraflex",
    image: asset("/images/catalog/taraflex-performance.jpg"),
    href: "/catalog#taraflex-performance",
    featured: true,
  },
  {
    id: "taraflex-comfort",
    category: "sport",
    family: "taraflex",
    image: asset("/images/catalog/taraflex-comfort.jpg"),
    href: "/catalog#taraflex-comfort",
  },
  {
    id: "taraflex-multi-use",
    category: "sport",
    family: "taraflex",
    image: asset("/images/catalog/taraflex-multi-use.jpg"),
    href: "/catalog#taraflex-multi-use",
  },
  {
    id: "taraflex-tennis",
    category: "sport",
    family: "taraflex",
    image: asset("/images/catalog/taraflex-tennis.jpg"),
    href: "/catalog#taraflex-tennis",
  },
  {
    id: "taraflex-badminton",
    category: "sport",
    family: "taraflex",
    image: asset("/images/catalog/taraflex-badminton.jpg"),
    href: "/catalog#taraflex-badminton",
  },
  {
    id: "taraflex-futsal",
    category: "sport",
    family: "taraflex",
    image: asset("/images/catalog/taraflex-futsal.jpg"),
    href: "/catalog#taraflex-futsal",
  },
  {
    id: "taraflex-table-tennis",
    category: "sport",
    family: "taraflex",
    image: asset("/images/catalog/taraflex-table-tennis.jpg"),
    href: "/catalog#taraflex-table-tennis",
  },
  {
    id: "taraflex-surface",
    category: "sport",
    family: "taraflex",
    image: asset("/images/catalog/taraflex-surface.jpg"),
    href: "/catalog#taraflex-surface",
  },
  {
    id: "taraflex-bateco",
    category: "sport",
    family: "taraflex",
    image: asset("/images/catalog/taraflex-bateco.jpg"),
    href: "/catalog#taraflex-bateco",
  },
  {
    id: "taralay-element-comfort",
    category: "floor",
    family: "taralay",
    image: asset("/images/catalog/taralay-element-comfort.jpg"),
    href: "/catalog#taralay-element-comfort",
    featured: true,
  },
  {
    id: "taralay-element-compact",
    category: "floor",
    family: "taralay",
    image: asset("/images/catalog/taralay-element-compact.jpg"),
    href: "/catalog#taralay-element-compact",
  },
  {
    id: "taralay-uni-comfort",
    category: "floor",
    family: "taralay",
    image: asset("/images/catalog/taralay-uni-comfort.jpg"),
    href: "/catalog#taralay-uni-comfort",
  },
  {
    id: "taralay-initial-comfort",
    category: "floor",
    family: "taralay",
    image: asset("/images/catalog/taralay-initial-comfort.jpg"),
    href: "/catalog#taralay-initial-comfort",
  },
  {
    id: "taralay-impression-comfort",
    category: "floor",
    family: "taralay",
    image: asset("/images/catalog/taralay-impression-comfort.jpg"),
    href: "/catalog#taralay-impression-comfort",
  },
  {
    id: "taralay-impression-compact",
    category: "floor",
    family: "taralay",
    image: asset("/images/catalog/taralay-impression-compact.jpg"),
    href: "/catalog#taralay-impression-compact",
  },
  {
    id: "taralay-impression-hop-compact",
    category: "floor",
    family: "taralay",
    image: asset("/images/catalog/taralay-impression-hop-compact.jpeg"),
    href: "/catalog#taralay-impression-hop-compact",
  },
  {
    id: "taralay-premium-comfort",
    category: "floor",
    family: "taralay",
    image: asset("/images/catalog/taralay-premium-comfort.jpg"),
    href: "/catalog#taralay-premium-comfort",
  },
  {
    id: "taralay-premium-compact",
    category: "floor",
    family: "taralay",
    image: asset("/images/catalog/taralay-premium-compact.jpg"),
    href: "/catalog#taralay-premium-compact",
  },
  {
    id: "taralay-libertex",
    category: "floor",
    family: "taralay",
    image: asset("/images/catalog/taralay-libertex.jpg"),
    href: "/catalog#taralay-libertex",
  },
  {
    id: "mural-revela",
    category: "wall",
    family: "mural",
    image: asset("/images/catalog/mural-revela.jpeg"),
    href: "/catalog#mural-revela",
  },
];
