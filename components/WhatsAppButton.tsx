import { SITE } from "@/lib/site";

export default function WhatsAppButton() {
  return (
    <a
      href={SITE.whatsapp}
      target="_blank"
      rel="noopener noreferrer"
      className="tap-target fixed bottom-6 right-4 z-40 rounded-full bg-[#25D366] px-4 text-sm font-semibold text-white shadow-lg transition-all hover:scale-[1.02] hover:bg-[#1ebe5d] md:right-6"
      aria-label="Написать в WhatsApp"
    >
      WhatsApp
    </a>
  );
}
