export type NavItem = {
  href: string;
  label: string;
};

export type FeatureItem = {
  id: string;
  title: string;
  description: string;
};

export type CatalogProduct = {
  id: string;
  title: string;
  summary: string;
  image: string;
  imageAlt: string;
  specs: string[];
  price?: string;
  href: string;
};

export type GalleryProject = {
  id: string;
  title: string;
  city: string;
  description: string;
  image: string;
  imageAlt: string;
};

export type RoomType =
  | "sports"
  | "school"
  | "office"
  | "healthcare"
  | "other";

export type QuoteFormValues = {
  name: string;
  phone: string;
  area: string;
  roomType: RoomType;
  message: string;
};

export type QuoteFormState = {
  status: "idle" | "submitting" | "success" | "error";
  error?: string;
};
