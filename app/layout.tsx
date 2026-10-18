import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import JsonLd from "@/components/JsonLd";
import SiteShell from "@/components/SiteShell";
import { SITE } from "@/lib/site";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin", "latin-ext", "cyrillic", "cyrillic-ext"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-manrope",
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
    "Gerflor Kazakhstan",
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
  alternates: {
    canonical: "/",
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
    <html lang="ru" className={manrope.variable}>
      <head>
        <link rel="alternate" hrefLang="ru" href="https://gerflor.kz/" />
        <link rel="alternate" hrefLang="kk" href="https://gerflor.kz/?lang=kk" />
        <link rel="alternate" hrefLang="en" href="https://gerflor.kz/?lang=en" />
        <link rel="alternate" hrefLang="x-default" href="https://gerflor.kz/" />
      </head>
      <body className={`${manrope.className} font-sans`}>
        <JsonLd />
        <SiteShell>{children}</SiteShell>
      </body>
    </html>
  );
}
