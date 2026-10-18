import { SITE } from "@/lib/site";

export default function JsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: SITE.name,
    description: SITE.description,
    telephone: "+77762077776",
    address: {
      "@type": "PostalAddress",
      streetAddress: "пр. Кабанбай Батыр, 60А/5",
      addressLocality: "Астана",
      addressCountry: "KZ",
    },
    url: SITE.url,
    areaServed: "KZ",
    brand: { "@type": "Brand", name: "Gerflor" },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
