import type { Metadata } from "next";
import MaintenanceScreen from "@/components/MaintenanceScreen";
import { SITE } from "@/lib/config/site";

export const metadata: Metadata = {
  title: SITE.description,
  description: SITE.description,
};

export default function PrivacyPage() {
  return <MaintenanceScreen />;
}
