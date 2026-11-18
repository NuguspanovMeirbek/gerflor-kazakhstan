"use client";

import type { ReactNode } from "react";
import { LanguageProvider } from "@/lib/i18n/context";

export default function SiteShell({ children }: { children: ReactNode }) {
  return <LanguageProvider>{children}</LanguageProvider>;
}
