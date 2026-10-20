import type { Metadata } from "next";
import { Golos_Text } from "next/font/google";
import JsonLd from "@/components/JsonLd";
import SiteShell from "@/components/SiteShell";
import { SITE } from "@/lib/site";
import "./globals.css";

const golos = Golos_Text({
  subsets: ["latin", "latin-ext", "cyrillic", "cyrillic-ext"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-golos",
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
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "32x32" },
      { url: "/icon.png", type: "image/png", sizes: "512x512" },
    ],
    apple: "/apple-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" className={golos.variable}>
      <head>
        <link rel="alternate" hrefLang="ru" href="https://gerflor.kz/" />
        <link rel="alternate" hrefLang="kk" href="https://gerflor.kz/?lang=kk" />
        <link rel="alternate" hrefLang="en" href="https://gerflor.kz/?lang=en" />
        <link rel="alternate" hrefLang="x-default" href="https://gerflor.kz/" />
        <link rel="icon" href="/favicon.ico" sizes="32x32" />
        <link rel="icon" href="/icon.png" type="image/png" sizes="512x512" />
        <link rel="apple-touch-icon" href="/apple-icon.png" />
      </head>
      <body className={`${golos.className} font-sans`}>
        <JsonLd />
        <SiteShell>{children}</SiteShell>
      </body>
    </html>
  );
}
