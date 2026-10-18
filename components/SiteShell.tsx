"use client";

import type { ReactNode } from "react";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import WhatsAppButton from "@/components/WhatsAppButton";
import { LanguageProvider } from "@/lib/i18n/context";

export default function SiteShell({ children }: { children: ReactNode }) {
  return (
    <LanguageProvider>
      <Header />
      <main>{children}</main>
      <Footer />
      <WhatsAppButton />
    </LanguageProvider>
  );
}
