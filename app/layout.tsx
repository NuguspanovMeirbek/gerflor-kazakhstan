import type { Metadata } from "next";
import { Golos_Text } from "next/font/google";
import SiteShell from "@/components/SiteShell";
import { SITE } from "@/lib/config/site";
import "./globals.css";

const golos = Golos_Text({
  subsets: ["latin", "latin-ext", "cyrillic", "cyrillic-ext"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-golos",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: SITE.description,
    template: "%s",
  },
  description: SITE.description,
  robots: {
    index: false,
    follow: false,
  },
  icons: {
    icon: [{ url: "/favicon.svg", type: "image/svg+xml" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" className={golos.variable}>
      <body className={`${golos.className} font-sans`}>
        <SiteShell>{children}</SiteShell>
      </body>
    </html>
  );
}
