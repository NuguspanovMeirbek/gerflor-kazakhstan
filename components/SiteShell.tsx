"use client";

import type { ReactNode } from "react";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function SiteShell({ children }: { children: ReactNode }) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
