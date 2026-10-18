"use client";

import { Instagram } from "lucide-react";
import { useI18n } from "@/lib/i18n/context";
import { SITE } from "@/lib/site";

export default function WhatsAppButton() {
  const { t } = useI18n();

  return (
    <div className="fixed bottom-6 right-4 z-40 flex flex-col items-end gap-3 md:right-6">
      <a
        href={SITE.instagram}
        target="_blank"
        rel="noopener noreferrer"
        className="tap-target gap-2 rounded-full bg-[#E4405F] px-4 text-sm font-semibold text-white shadow-lg transition-all hover:scale-[1.02] hover:bg-[#d63a56]"
        aria-label={t.header.instagramAria}
      >
        <Instagram className="h-4 w-4" aria-hidden />
        {t.header.instagram}
      </a>
      <a
        href={SITE.whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        className="tap-target rounded-full bg-[#25D366] px-4 text-sm font-semibold text-white shadow-lg transition-all hover:scale-[1.02] hover:bg-[#1ebe5d]"
        aria-label={t.wa.label}
      >
        WhatsApp
      </a>
    </div>
  );
}
