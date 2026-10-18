import type { NavItem } from "@/types";

export const SITE = {
  name: "Gerflor Kazakhstan",
  legalName: "Gerflor Kazakhstan",
  tagline:
    "Gerflor Kazakhstan — эксклюзивный представитель и авторизованный сервис",
  description:
    "Прямые поставки французских покрытий Gerflor и монтаж по стандартам завода в Казахстане — от проектирования до сдачи объекта технадзору и международным комиссиям.",
  phoneDisplay: "8 776 207 77 76",
  phoneHref: "tel:+77762077776",
  address: "г. Астана, пр. Кабанбай Батыр, 60А/5",
  email: "info@gerflor.kz",
  url: "https://gerflor.kz",
  instagram: "https://www.instagram.com/gerflorkaz",
  whatsapp: "https://wa.me/77762077776",
  whatsappQuote: `https://wa.me/77762077776?text=${encodeURIComponent("Здравствуйте! Хочу рассчитать проект покрытия Gerflor.")}`,
} as const;

export const NAV_ITEMS: NavItem[] = [
  { href: "/", label: "Главная" },
  { href: "/catalog", label: "Каталог" },
  { href: "/gallery", label: "Галерея" },
  { href: "/services", label: "Услуги «Под ключ»" },
  { href: "/contacts", label: "Контакты" },
];
