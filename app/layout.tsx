import type { Metadata } from "next";
import { Inter } from "next/font/google";
import JsonLd from "@/components/JsonLd";
import SiteShell from "@/components/SiteShell";
import { SITE } from "@/lib/site";
import "./globals.css";

const inter = Inter({
  subsets: ["latin", "cyrillic"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://gerflor.kz"),
  title: {
    default: "Gerflor Kazakhstan — спортивные покрытия под ключ",
    template: "%s | Gerflor Kazakhstan",
  },
  description: SITE.description,
  keywords: [
    "Gerflor",
    "Taraflex",
    "спортивные покрытия Казахстан",
    "напольные покрытия Астана",
    "гетерогенный линолеум",
  ],
  openGraph: {
    title: "Gerflor Kazakhstan — спортивные пространства под ключ",
    description: SITE.description,
    locale: "ru_KZ",
    type: "website",
    siteName: SITE.name,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" className={inter.variable}>
      <body className="font-sans">
        <JsonLd />
        <SiteShell>{children}</SiteShell>
      </body>
    </html>
  );
}
