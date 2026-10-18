import type { Metadata } from "next";
import PrivacyContent from "@/components/pages/PrivacyContent";

export const metadata: Metadata = {
  title: "Политика конфиденциальности",
  description:
    "Политика конфиденциальности ТОО «Astana Sport Line» — эксклюзивного дистрибьютора Gerflor в Казахстане.",
  robots: { index: true, follow: true },
};

export default function PrivacyPage() {
  return <PrivacyContent />;
}
