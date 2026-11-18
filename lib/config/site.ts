/**
 * Site identity lives in one place so a future rename
 * only requires this file (and NEXT_PUBLIC_SITE_URL).
 */
export const SITE = {
  name: "Сайт",
  description: "Сайт находится на техническом обслуживании.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://127.0.0.1",
} as const;
