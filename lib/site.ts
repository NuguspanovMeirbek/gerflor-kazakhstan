export const SITE = {
  name: "Gerflor Kazakhstan",
  legalName: "Gerflor Kazakhstan",
  tagline:
    "Gerflor Kazakhstan — эксклюзивный представитель и авторизованный сервис",
  description:
    "Прямые поставки французских покрытий Gerflor и монтаж по стандартам завода в Казахстане — от проектирования до сдачи объекта технадзору и международным комиссиям.",
  phoneDisplay: "+7 776 207 77 76",
  phoneHref: "tel:+77762077776",
  address: "г. Астана, пр. Кабанбай Батыр, 60А/5",
  email: "info@gerflor.kz",
  url: "https://gerflor.kz",
  instagram: "https://www.instagram.com/gerflorkaz",
  whatsapp: "https://wa.me/77762077776",
} as const;

export function whatsappQuoteLink(message: string) {
  return `https://wa.me/77762077776?text=${encodeURIComponent(message)}`;
}
