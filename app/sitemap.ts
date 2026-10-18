import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://gerflor.kz";
  const routes = ["", "/catalog", "/gallery", "/services", "/contacts", "/privacy"];

  return routes.map((route) => ({
    url: `${base}${route}`,
    lastModified: new Date("2026-10-18"),
    changeFrequency: "monthly",
    priority: route === "" ? 1 : 0.8,
  }));
}
