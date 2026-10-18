import type { Metadata } from "next";
import ContactsContent from "@/components/pages/ContactsContent";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Контакты",
  description: `Gerflor Kazakhstan: ${SITE.phoneDisplay}, ${SITE.address}`,
};

export default function ContactsPage() {
  return <ContactsContent />;
}
