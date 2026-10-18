import type { CatalogProduct, FeatureItem, GalleryProject } from "@/types";
import { asset } from "@/lib/asset";

export const features: FeatureItem[] = [
  {
    id: "france",
    title: "Прямые поставки из Франции",
    description:
      "Официальная продукция Gerflor без посредников: сертифицированные покрытия для спорта, коммерции и общественных пространств.",
  },
  {
    id: "service",
    title: "Авторизованный сервис и монтаж",
    description:
      "Укладка по заводским регламентам Gerflor: подготовка основания, клей, разметка игровых зон и контроль качества на каждом этапе.",
  },
  {
    id: "commission",
    title: "Сдача объектов технадзору и международным комиссиям",
    description:
      "Сопровождаем приёмку: документы, протоколы и соответствие требованиям FIVB и других федераций на соревновательных объектах.",
  },
  {
    id: "warranty",
    title: "Гарантия качества от завода",
    description:
      "Покрытия Taraflex используются на Олимпийских играх и чемпионатах мира. Заводская гарантия и сервис на территории Казахстана.",
  },
];

export const catalogProducts: CatalogProduct[] = [
  {
    id: "heterogeneous-rolls",
    title: "Гетерогенные рулонные покрытия",
    summary:
      "Многослойный винил Taralay и Creation для школ, офисов, клиник и ритейла: дизайн под дерево и камень, износостойкость и простой уход.",
    image: asset("/images/product-wood.png"),
    imageAlt:
      "Гетерогенное рулонное покрытие Gerflor под дерево в коммерческом интерьере",
    specs: [
      "Высокая нагрузка (education, healthcare, offices)",
      "Защитный слой PUR / Easycare",
      "Антибактериальные свойства",
    ],
    href: "/catalog#heterogeneous-rolls",
  },
  {
    id: "taraflex",
    title: "Спортивные покрытия Taraflex",
    summary:
      "Системы Taraflex и Powergame+ для залов, арен, школ и федераций. Сертификация FIVB, амортизация и безопасное сцепление.",
    image: asset("/images/gallery-volley2.jpg"),
    imageAlt: "Спортивный зал с покрытием Gerflor Taraflex",
    specs: [
      "Evolution 7,5 мм · категория P1",
      "Comfort 12,5 мм · категория P3",
      "Сертификация FIVB / FIBA",
    ],
    price: "от 47 500 ₸ / м²",
    href: "/catalog#taraflex",
  },
  {
    id: "taraflex-performance",
    title: "Taraflex Performance",
    summary:
      "Профессиональный уровень для клубов и турниров: толщина ~9 мм, категория P2, повышенный комфорт и безопасность спортсменов.",
    image: asset("/images/product-per.jpg"),
    imageAlt: "Спортивное покрытие Gerflor Taraflex Performance",
    specs: [
      "Толщина ~ 9,00 мм",
      "Ударопоглощение категории P2",
      "Клубы, турниры, высокие нагрузки",
    ],
    price: "62 500 ₸ / м²",
    href: "/catalog#taraflex-performance",
  },
  {
    id: "taraflex-evolution",
    title: "Taraflex Evolution",
    summary:
      "Базовая спортивная серия для тренировок и соревнований среднего уровня. Популярное решение для волейбольных залов Казахстана.",
    image: asset("/images/product-25736.jpg"),
    imageAlt: "Покрытие Gerflor Taraflex Evolution 7.5 мм",
    specs: [
      "Толщина ~ 7,50 мм",
      "Категория P1 (25–35%)",
      "FIVB, залы и арены",
    ],
    price: "47 500 ₸ / м²",
    href: "/catalog#taraflex",
  },
];

export const galleryProjects: GalleryProject[] = [
  {
    id: "zhayik",
    title: "Жайык Арена",
    city: "Уральск",
    description:
      "Многофункциональный комплекс 2025 года. Главный зал — Taraflex Evolution 7.5 мм, сертификация FIVB.",
    image: asset("/images/gallery-img-6853.jpeg"),
    imageAlt: "Игровой зал Жайык Арены с покрытием Gerflor Taraflex",
  },
  {
    id: "bereke",
    title: "ФОК «Береке»",
    city: "Петропавловск",
    description:
      "Профессиональное покрытие Taraflex Evolution 7.5 мм: амортизация, сцепление и безопасность для всех уровней.",
    image: asset("/images/gallery-fbtw3.jpg"),
    imageAlt: "Спортивный зал ФОК Береке в Петропавловске",
  },
  {
    id: "zhetysu",
    title: "Волейбольный центр «Жетысу»",
    city: "Талдыкорган",
    description:
      "Главный игровой зал на Taraflex Evolution 7.5 мм — условия для тренировок и матчей высокого уровня.",
    image: asset("/images/gallery-fbtw2.jpg"),
    imageAlt: "Волейбольный центр Жетысу в Талдыкоргане",
  },
  {
    id: "volley-pro",
    title: "Соревновательный волейбол",
    city: "Казахстан",
    description:
      "Taraflex на официальных площадках: баланс амортизации и сцепления для международных комиссий.",
    image: asset("/images/hero-volley.jpg"),
    imageAlt: "Волейбольный матч на покрытии Gerflor Taraflex",
  },
  {
    id: "school",
    title: "Школы и образовательные залы",
    city: "Казахстан",
    description:
      "Taraflex Comfort и коммерческие гетерогенные покрытия для безопасных занятий в школах.",
    image: asset("/images/gallery-96787.jpeg"),
    imageAlt: "Спортивный школьный зал с покрытием Gerflor",
  },
  {
    id: "multi",
    title: "Многофункциональные арены",
    city: "Казахстан",
    description:
      "Решения для баскетбола, гандбола, футзала и фитнеса — поставка и монтаж под ключ.",
    image: asset("/images/gallery-35786.jpg"),
    imageAlt: "Многофункциональный спортивный зал Gerflor",
  },
];
