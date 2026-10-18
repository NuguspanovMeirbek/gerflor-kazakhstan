import type { Locale } from "@/lib/i18n/types";

type ProductCopy = {
  title: string;
  summary: string;
  imageAlt: string;
  specs: [string, string, string];
  price?: string;
};

type ProjectCopy = {
  title: string;
  city: string;
  description: string;
  imageAlt: string;
};

export type Dictionary = {
  meta: {
    title: string;
    description: string;
    ogTitle: string;
  };
  nav: {
    home: string;
    catalog: string;
    gallery: string;
    services: string;
    contacts: string;
    mainAria: string;
    mobileAria: string;
    footerAria: string;
  };
  header: {
    homeAria: string;
    country: string;
    logoAlt: string;
    instagram: string;
    instagramAria: string;
    calculate: string;
    openMenu: string;
    closeMenu: string;
  };
  hero: {
    eyebrow: string;
    title: string;
    text: string;
    catalog: string;
    imageAlt: string;
  };
  about: {
    eyebrow: string;
    title: string;
    text: string;
    items: [string, string, string];
    imageAlt: string;
  };
  features: {
    eyebrow: string;
    title: string;
    text: string;
    france: { title: string; description: string };
    service: { title: string; description: string };
    commission: { title: string; description: string };
    warranty: { title: string; description: string };
  };
  catalog: {
    eyebrow: string;
    heading: string;
    all: string;
    request: string;
    pageTitle: string;
    pageText: string;
    collections: string;
    filterAll: string;
    sport: string;
    floor: string;
    wall: string;
    products: Record<string, ProductCopy>;
  };
  gallery: {
    eyebrow: string;
    heading: string;
    text: string;
    all: string;
    pageTitle: string;
    pageText: string;
    projects: Record<string, ProjectCopy>;
  };
  services: {
    eyebrow: string;
    title: string;
    text: string;
    steps: { title: string; text: string }[];
  };
  contacts: {
    title: string;
    intro: string;
    quote: string;
    address: string;
  };
  footer: {
    blurb: string;
    sections: string;
    contacts: string;
    rights: string;
    privacy: string;
  };
  notFound: {
    title: string;
    text: string;
    home: string;
  };
  wa: {
    quote: string;
    label: string;
  };
  privacy: {
    documents: string;
    title: string;
    effective: string;
  };
};

export const dictionaries: Record<Locale, Dictionary> = {
  ru: {
    meta: {
      title: "Gerflor Kazakhstan — спортивные покрытия под ключ",
      description:
        "Прямые поставки французских покрытий Gerflor и монтаж по стандартам завода в Казахстане — от проектирования до сдачи объекта технадзору и международным комиссиям.",
      ogTitle: "Gerflor Kazakhstan — спортивные пространства под ключ",
    },
    nav: {
      home: "Главная",
      catalog: "Каталог",
      gallery: "Галерея",
      services: "Услуги «Под ключ»",
      contacts: "Контакты",
      mainAria: "Основная навигация",
      mobileAria: "Мобильная навигация",
      footerAria: "Навигация в подвале",
    },
    header: {
      homeAria: "Gerflor Kazakhstan — на главную",
      country: "Kazakhstan",
      logoAlt: "Логотип Gerflor",
      instagram: "Instagram",
      instagramAria: "Instagram Gerflor Kazakhstan",
      calculate: "Рассчитать проект",
      openMenu: "Открыть меню",
      closeMenu: "Закрыть меню",
    },
    hero: {
      eyebrow:
        "Gerflor Kazakhstan — эксклюзивный представитель и авторизованный сервис",
      title: "Спортивные пространства Gerflor «под ключ» в Казахстане",
      text: "Прямые поставки французских покрытий и монтаж по стандартам завода — от проектирования до сдачи объекта технадзору и международным комиссиям.",
      catalog: "Смотреть каталог",
      imageAlt: "Сидячий волейбол на покрытии Gerflor Taraflex",
    },
    about: {
      eyebrow: "О компании",
      title: "Французские напольные покрытия мирового уровня",
      text: "Gerflor Kazakhstan создаёт безопасные, современные и технологичные спортивные пространства. Продукция Gerflor используется на Олимпийских играх, чемпионатах мира, а также в школах, больницах и офисах более чем в 100 странах.",
      items: [
        "сертифицированные покрытия для спорта, коммерции и дома;",
        "профессиональный подбор, монтаж и обслуживание;",
        "решения под любой объект — от спортивного комплекса до офиса.",
      ],
      imageAlt: "Напольные покрытия Gerflor под дерево и камень",
    },
    features: {
      eyebrow: "Почему Gerflor",
      title: "Французские покрытия мирового уровня — в Казахстане",
      text: "Мы создаём безопасные спортивные пространства и внедряем стандарты Gerflor для арен, школ и спортивных центров.",
      france: {
        title: "Прямые поставки из Франции",
        description:
          "Официальная продукция Gerflor без посредников: сертифицированные покрытия для спорта, коммерции и общественных пространств.",
      },
      service: {
        title: "Авторизованный сервис и монтаж",
        description:
          "Укладка по заводским регламентам Gerflor: подготовка основания, клей, разметка игровых зон и контроль качества на каждом этапе.",
      },
      commission: {
        title: "Сдача объектов технадзору и международным комиссиям",
        description:
          "Сопровождаем приёмку: документы, протоколы и соответствие требованиям FIVB и других федераций на соревновательных объектах.",
      },
      warranty: {
        title: "Гарантия качества от завода",
        description:
          "Покрытия Taraflex используются на Олимпийских играх и чемпионатах мира. Заводская гарантия и сервис на территории Казахстана.",
      },
    },
    catalog: {
      eyebrow: "Каталог / тарифы",
      heading: "Каталог покрытий",
      all: "Весь каталог",
      request: "Запросить расчет",
      pageTitle: "Каталог напольных покрытий Gerflor",
      pageText:
        "Спортивные покрытия Taraflex, коммерческие рулоны Taralay и настенная коллекция Mural Revela. Цены на Evolution, Performance и Comfort — ориентир для расчета; точная смета зависит от площади, основания и разметки.",
      collections: "Коллекции и тарифы",
      filterAll: "Все",
      sport: "Спортивные покрытия",
      floor: "Напольные покрытия",
      wall: "Настенные покрытия",
      products: {
        "taraflex-evolution": {
          title: "Taraflex Evolution",
          summary:
            "Базовая спортивная серия для тренировок и соревнований среднего уровня. Популярное решение для волейбольных залов Казахстана.",
          imageAlt: "Покрытие Gerflor Taraflex Evolution 7.5 мм",
          specs: [
            "Толщина ~ 7,50 мм",
            "Категория P1 (25–35%)",
            "FIVB, залы и арены",
          ],
          price: "34 500 ₸ / м²",
        },
        "taraflex-performance": {
          title: "Taraflex Performance",
          summary:
            "Профессиональный уровень для клубов и турниров: толщина ~9 мм, категория P2, повышенный комфорт и безопасность спортсменов.",
          imageAlt: "Спортивное покрытие Gerflor Taraflex Performance",
          specs: [
            "Толщина ~ 9,00 мм",
            "Ударопоглощение категории P2",
            "Клубы, турниры, высокие нагрузки",
          ],
          price: "39 900 ₸ / м²",
        },
        "taraflex-comfort": {
          title: "Taraflex Comfort",
          summary:
            "Спортивное покрытие с повышенным комфортом для школ, многофункциональных залов и площадок, где важна защита суставов.",
          imageAlt: "Спортивное покрытие Gerflor Taraflex Comfort",
          specs: [
            "Толщина ~ 12,50 мм",
            "Категория P3 (ударопоглощение > 45%)",
            "Образование и универсальные залы",
          ],
          price: "44 000 ₸ / м²",
        },
        "taraflex-multi-use": {
          title: "Taraflex Multi-Use",
          summary:
            "Многофункциональное спортивное покрытие Taraflex для залов с разными видами спорта и сменным расписанием.",
          imageAlt: "Многофункциональный зал с Gerflor Taraflex Multi-Use",
          specs: [
            "Линейка Taraflex",
            "Универсальные спортивные залы",
            "Поставка и монтаж в Казахстане",
          ],
        },
        "taraflex-tennis": {
          title: "Taraflex Tennis",
          summary:
            "Спортивное покрытие Taraflex для теннисных кортов: амортизация и стабильная игровая поверхность.",
          imageAlt: "Теннисный корт с покрытием Gerflor Taraflex Tennis",
          specs: [
            "Для теннисных кортов",
            "Линейка Taraflex",
            "Поставка и монтаж в Казахстане",
          ],
        },
        "taraflex-badminton": {
          title: "Taraflex Badminton",
          summary:
            "Покрытие Taraflex для бадминтона: сцепление и комфорт для тренировок и матчей.",
          imageAlt: "Площадка для бадминтона Gerflor Taraflex",
          specs: [
            "Для бадминтона",
            "Линейка Taraflex",
            "Поставка и монтаж в Казахстане",
          ],
        },
        "taraflex-futsal": {
          title: "Taraflex Futsal",
          summary:
            "Спортивное покрытие Taraflex для футзала: износостойкая игровая поверхность для залов.",
          imageAlt: "Зал для футзала с Gerflor Taraflex Futsal",
          specs: [
            "Для футзала",
            "Линейка Taraflex",
            "Поставка и монтаж в Казахстане",
          ],
        },
        "taraflex-table-tennis": {
          title: "Taraflex Table Tennis",
          summary:
            "Покрытие Taraflex для залов настольного тенниса: ровная поверхность и комфорт при длительных нагрузках.",
          imageAlt: "Зал настольного тенниса с Gerflor Taraflex",
          specs: [
            "Для настольного тенниса",
            "Линейка Taraflex",
            "Поставка и монтаж в Казахстане",
          ],
        },
        "taraflex-surface": {
          title: "Taraflex Surface",
          summary:
            "Спортивное покрытие Taraflex Surface для площадок роликового катания и смежных indoor-дисциплин.",
          imageAlt: "Площадка на Gerflor Taraflex Surface",
          specs: [
            "Для роликового катания",
            "Линейка Taraflex",
            "Поставка и монтаж в Казахстане",
          ],
        },
        "taraflex-bateco": {
          title: "Taraflex Bateco",
          summary:
            "Спортивное покрытие Taraflex Bateco на основе переработанных материалов в линейке Gerflor.",
          imageAlt: "Спортивное покрытие Gerflor Taraflex Bateco",
          specs: [
            "Линейка Taraflex",
            "Переработанные материалы",
            "Поставка и монтаж в Казахстане",
          ],
        },
        "taralay-element-comfort": {
          title: "Taralay Element Comfort",
          summary:
            "Гетерогенное рулонное покрытие Taralay Comfort для школ, офисов и общественных интерьеров с амортизирующей основой.",
          imageAlt: "Рулонное покрытие Gerflor Taralay Element Comfort",
          specs: [
            "Коммерческие интерьеры",
            "Серия Comfort",
            "Поставка и укладка в Казахстане",
          ],
        },
        "taralay-element-compact": {
          title: "Taralay Element Compact",
          summary:
            "Гетерогенное рулонное покрытие Taralay Compact для помещений с высокой проходимостью.",
          imageAlt: "Рулонное покрытие Gerflor Taralay Element Compact",
          specs: [
            "Высокая проходимость",
            "Серия Compact",
            "Поставка и укладка в Казахстане",
          ],
        },
        "taralay-uni-comfort": {
          title: "Taralay Uni Comfort",
          summary:
            "Однотонная коллекция Taralay Comfort для коридоров, образования и здравоохранения.",
          imageAlt: "Однотонное покрытие Gerflor Taralay Uni Comfort",
          specs: [
            "Однотонный дизайн",
            "Серия Comfort",
            "Поставка и укладка в Казахстане",
          ],
        },
        "taralay-initial-comfort": {
          title: "Taralay Initial Comfort",
          summary:
            "Коллекция Taralay Initial Comfort для коммерческих и общественных пространств с акцентом на комфорт при ходьбе.",
          imageAlt: "Покрытие Gerflor Taralay Initial Comfort",
          specs: [
            "Коммерческие пространства",
            "Серия Comfort",
            "Поставка и укладка в Казахстане",
          ],
        },
        "taralay-impression-comfort": {
          title: "Taralay Impression Comfort",
          summary:
            "Дизайнерская коллекция Taralay Impression Comfort: декоративный слой и комфортная основа.",
          imageAlt: "Дизайнерское покрытие Gerflor Taralay Impression Comfort",
          specs: [
            "Декоративные дизайны",
            "Серия Comfort",
            "Поставка и укладка в Казахстане",
          ],
        },
        "taralay-impression-compact": {
          title: "Taralay Impression Compact",
          summary:
            "Коллекция Taralay Impression Compact для износостойких декоративных полов в коммерции.",
          imageAlt: "Покрытие Gerflor Taralay Impression Compact",
          specs: [
            "Декоративные дизайны",
            "Серия Compact",
            "Поставка и укладка в Казахстане",
          ],
        },
        "taralay-impression-hop-compact": {
          title: "Taralay Impression Hop Compact",
          summary:
            "Коллекция Taralay Impression Hop Compact — декоративное коммерческое покрытие в линейке Compact.",
          imageAlt: "Покрытие Gerflor Taralay Impression Hop Compact",
          specs: [
            "Коллекция Impression Hop",
            "Серия Compact",
            "Поставка и укладка в Казахстане",
          ],
        },
        "taralay-premium-comfort": {
          title: "Taralay Premium Comfort",
          summary:
            "Премиальная коллекция Taralay Comfort для представительских и общественных интерьеров.",
          imageAlt: "Покрытие Gerflor Taralay Premium Comfort",
          specs: [
            "Премиальная линейка Taralay",
            "Серия Comfort",
            "Поставка и укладка в Казахстане",
          ],
        },
        "taralay-premium-compact": {
          title: "Taralay Premium Compact",
          summary:
            "Премиальная коллекция Taralay Compact для коммерческих полов с высокой нагрузкой.",
          imageAlt: "Покрытие Gerflor Taralay Premium Compact",
          specs: [
            "Премиальная линейка Taralay",
            "Серия Compact",
            "Поставка и укладка в Казахстане",
          ],
        },
        "taralay-libertex": {
          title: "Taralay Libertex",
          summary:
            "Гетерогенное покрытие Taralay Libertex с антибактериальными свойствами для здравоохранения и общественных зон.",
          imageAlt: "Покрытие Gerflor Taralay Libertex",
          specs: [
            "Антибактериальные свойства",
            "Линейка Taralay",
            "Поставка и укладка в Казахстане",
          ],
        },
        "mural-revela": {
          title: "Mural Revela",
          summary:
            "Настенные плитки Gerflor Mural Revela: огнестойкое решение для стен в общественных и коммерческих интерьерах.",
          imageAlt: "Настенные плитки Gerflor Mural Revela",
          specs: [
            "Настенные покрытия",
            "Огнестойкие плитки",
            "Поставка и монтаж в Казахстане",
          ],
        },
      },
    },
    gallery: {
      eyebrow: "Объекты",
      heading: "Галерея выполненных объектов",
      text: "Спортивные и коммерческие площадки в Казахстане на покрытиях Gerflor Taraflex.",
      all: "Все объекты",
      pageTitle: "Реализованные объекты",
      pageText:
        "Профессиональные спортивные залы с покрытием Gerflor Taraflex Evolution 7.5 мм, сертифицированным FIVB.",
      projects: {
        zhayik: {
          title: "Жайык Арена",
          city: "Уральск",
          description:
            "Многофункциональный комплекс 2025 года. Главный зал — Taraflex Evolution 7.5 мм, сертификация FIVB. Поставка и монтаж под ключ с нанесением разметки для волейбола.",
          imageAlt: "Игровой зал Жайык Арены с покрытием Gerflor Taraflex",
        },
        bereke: {
          title: "ФОК «Береке»",
          city: "Петропавловск",
          description:
            "Профессиональное покрытие Gerflor Taraflex Evolution 7,5 мм — комфорт, амортизация и безопасность в каждой игре. Поставка, монтаж и нанесение волейбольной разметки под ключ.",
          imageAlt: "Спортивный зал ФОК Береке в Петропавловске",
        },
        zhetysu: {
          title: "Волейбольный центр «Жетысу»",
          city: "Талдыкорган",
          description:
            "Поставка профессионального спортивного покрытия Gerflor Taraflex для двух площадок нового волейбольного центра «Жетысу».",
          imageAlt: "Волейбольный центр Жетысу в Талдыкоргане",
        },
        abay: {
          title: "Центр «Абай»",
          city: "Атырау",
          description:
            "Поставка и монтаж профессионального спортивного покрытия Gerflor с нанесением разметки для параволейбола. Качество, безопасность и комфорт для каждого спортсмена.",
          imageAlt: "Параволейбол в центре Абай в Атырау на покрытии Gerflor",
        },
        school: {
          title: "Частная школа имени Шокана Уалиханова",
          city: "Астана",
          description:
            "Поставка качественных напольных покрытий Gerflor для создания комфортной, современной и безопасной образовательной среды.",
          imageAlt: "Частная школа имени Шокана Уалиханова",
        },
        multi: {
          title: "Кубок мира по бочча 2026",
          city: "Астана",
          description:
            "Поставка и монтаж напольного покрытия Gerflor Taraflex Evolution green mint для Кубка мира по бочча 2026 года.",
          imageAlt: "Кубок мира по бочча 2026 в Астане на покрытии Gerflor Taraflex",
        },
        "jekpe-jek": {
          title: "Дворец единоборств «Жекпе-Жек»",
          city: "Астана",
          description:
            "Поставка, монтаж и нанесение разметки для волейбола. Финал Кубка РК среди мужских команд, 2025 год.",
          imageAlt: "Финал Кубка РК по волейболу во дворце единоборств Жекпе-Жек",
        },
        barys: {
          title: "Barys Arena",
          city: "Астана",
          description:
            "Поставка и монтаж профессионального спортивного покрытия Gerflor, нанесение волейбольной разметки для плей-офф Чемпионата Республики Казахстан среди женских команд Национальной лиги — 2026.",
          imageAlt: "Волейбольная площадка Gerflor на Barys Arena в Астане",
        },
      },
    },
    services: {
      eyebrow: "Услуги",
      title: "Спортивные пространства Gerflor «под ключ»",
      text: "От концепции зала до сдачи комиссии: один подрядчик на поставку и сервис. Работаем со школами, федерациями, фитнес-клубами и многофункциональными аренами.",
      steps: [
        {
          title: "Проектирование и подбор системы",
          text: "Подбираем Taraflex, Powergame+ или коммерческий винил под нагрузку, вид спорта и бюджет.",
        },
        {
          title: "Прямая поставка из Франции",
          text: "Сертифицированная продукция Gerflor с документами для таможни и технадзора.",
        },
        {
          title: "Авторизованный монтаж",
          text: "Подготовка основания, укладка, сварные швы, игровая разметка по регламенту завода.",
        },
        {
          title: "Сдача объекта",
          text: "Сопровождение приёмки технадзором и международными комиссиями, гарантия завода.",
        },
      ],
    },
    contacts: {
      title: "Контакты",
      intro:
        "Gerflor Kazakhstan — эксклюзивный представитель и авторизованный сервис.",
      quote: "Рассчитать проект в WhatsApp",
      address: "г. Астана, пр. Кабанбай Батыр, 60А/5",
    },
    footer: {
      blurb:
        "Gerflor Kazakhstan — эксклюзивный представитель и авторизованный сервис.",
      sections: "Разделы",
      contacts: "Контакты",
      rights: "© 2026 Gerflor Kazakhstan. Все права защищены.",
      privacy: "Политика конфиденциальности",
    },
    notFound: {
      title: "Страница не найдена",
      text: "Проверьте адрес или вернитесь на главную Gerflor Kazakhstan.",
      home: "На главную",
    },
    wa: {
      quote: "Здравствуйте! Хочу рассчитать проект покрытия Gerflor.",
      label: "Написать в WhatsApp",
    },
    privacy: {
      documents: "Документы",
      title: "Политика конфиденциальности",
      effective: "Дата вступления в силу",
    },
  },
  kk: {
    meta: {
      title: "Gerflor Kazakhstan — кілтпен берілетін спорт жабындары",
      description:
        "Қазақстанда Gerflor француз жабындарын тікелей жеткізу және зауыт стандарттары бойынша монтаждау — жобалаудан технадзор мен халықаралық комиссияларға тапсыруға дейін.",
      ogTitle: "Gerflor Kazakhstan — кілтпен берілетін спорт кеңістіктері",
    },
    nav: {
      home: "Басты бет",
      catalog: "Каталог",
      gallery: "Галерея",
      services: "«Кілтпен» қызметтер",
      contacts: "Байланыс",
      mainAria: "Негізгі навигация",
      mobileAria: "Мобильді навигация",
      footerAria: "Төменгі навигация",
    },
    header: {
      homeAria: "Gerflor Kazakhstan — басты бетке",
      country: "Kazakhstan",
      logoAlt: "Gerflor логотипі",
      instagram: "Instagram",
      instagramAria: "Gerflor Kazakhstan Instagram",
      calculate: "Жобаны есептеу",
      openMenu: "Мәзірді ашу",
      closeMenu: "Мәзірді жабу",
    },
    hero: {
      eyebrow:
        "Gerflor Kazakhstan — эксклюзивті өкіл және авторизацияланған сервис",
      title: "Gerflor спорт кеңістіктері Қазақстанда «кілтпен»",
      text: "Француз жабындарын тікелей жеткізу және зауыт стандарттары бойынша монтаждау — жобалаудан технадзор мен халықаралық комиссияларға тапсыруға дейін.",
      catalog: "Каталогты қарау",
      imageAlt: "Gerflor Taraflex жабынындағы отырып ойнайтын волейбол",
    },
    about: {
      eyebrow: "Компания туралы",
      title: "Әлемдік деңгейдегі француз еден жабындары",
      text: "Gerflor Kazakhstan қауіпсіз, заманауи және технологиялық спорт кеңістіктерін жасайды. Gerflor өнімі Олимпиада ойындарында, әлем чемпионаттарында, сондай-ақ 100-ден астам елдің мектептерінде, ауруханаларында және кеңселерінде қолданылады.",
      items: [
        "спорт, коммерция және үйге арналған сертификатталған жабындар;",
        "кәсіби іріктеу, монтаждау және қызмет көрсету;",
        "кез келген нысанға арналған шешімдер — спорт кешенінен кеңсеге дейін.",
      ],
      imageAlt: "Gerflor еден жабындары: ағаш және тас декоры",
    },
    features: {
      eyebrow: "Неге Gerflor",
      title: "Әлемдік деңгейдегі француз жабындары — Қазақстанда",
      text: "Біз қауіпсіз спорт кеңістіктерін жасаймыз және ареналар, мектептер мен спорт орталықтары үшін Gerflor стандарттарын енгіземіз.",
      france: {
        title: "Франциядан тікелей жеткізу",
        description:
          "Делдалсыз ресми Gerflor өнімі: спорт, коммерция және қоғамдық кеңістіктерге арналған сертификатталған жабындар.",
      },
      service: {
        title: "Авторизацияланған сервис және монтаж",
        description:
          "Gerflor зауыт регламенттері бойынша төсеу: негізді дайындау, желім, ойын аймақтарын белгілеу және әр кезеңде сапаны бақылау.",
      },
      commission: {
        title: "Нысандарды технадзор мен халықаралық комиссияларға тапсыру",
        description:
          "Қабылдауды сүйемелдейміз: құжаттар, хаттамалар және жарыс нысандарында FIVB мен басқа федерациялар талаптарына сәйкестік.",
      },
      warranty: {
        title: "Зауыттан сапа кепілдігі",
        description:
          "Taraflex жабындары Олимпиада ойындары мен әлем чемпионаттарында қолданылады. Қазақстан аумағында зауыт кепілдігі және сервис.",
      },
    },
    catalog: {
      eyebrow: "Каталог / тарифтер",
      heading: "Жабындар каталогы",
      all: "Бүкіл каталог",
      request: "Есеп сұрату",
      pageTitle: "Gerflor еден жабындарының каталогы",
      pageText:
        "Taraflex спорт жабындары, Taralay коммерциялық орамдары және Mural Revela қабырға коллекциясы. Evolution, Performance және Comfort бағалары — есеп бағдары; нақты смета алаңға, негізге және белгілеуге байланысты.",
      collections: "Коллекциялар мен тарифтер",
      filterAll: "Барлығы",
      sport: "Спорт жабындары",
      floor: "Еден жабындары",
      wall: "Қабырға жабындары",
      products: {
        "taraflex-evolution": {
          title: "Taraflex Evolution",
          summary:
            "Орташа деңгейдегі жаттығулар мен жарыстарға арналған базалық спорт сериясы. Қазақстандағы волейбол залдары үшін танымал шешім.",
          imageAlt: "Gerflor Taraflex Evolution 7.5 мм жабыны",
          specs: [
            "Қалыңдығы ~ 7,50 мм",
            "P1 санаты (25–35%)",
            "FIVB, залдар мен ареналар",
          ],
          price: "34 500 ₸ / м²",
        },
        "taraflex-performance": {
          title: "Taraflex Performance",
          summary:
            "Клубтар мен турнирлерге арналған кәсіби деңгей: қалыңдығы ~9 мм, P2 санаты, спортшылардың жайлылығы мен қауіпсіздігі жоғары.",
          imageAlt: "Gerflor Taraflex Performance спорт жабыны",
          specs: [
            "Қалыңдығы ~ 9,00 мм",
            "P2 санатындағы соққы сіңіру",
            "Клубтар, турнирлер, жоғары жүктеме",
          ],
          price: "39 900 ₸ / м²",
        },
        "taraflex-comfort": {
          title: "Taraflex Comfort",
          summary:
            "Мектептер, көпфункциялы залдар және буынды қорғау маңызды алаңдар үшін жоғары жайлы спорт жабыны.",
          imageAlt: "Gerflor Taraflex Comfort спорт жабыны",
          specs: [
            "Қалыңдығы ~ 12,50 мм",
            "P3 санаты (соққы сіңіру > 45%)",
            "Білім және әмбебап залдар",
          ],
          price: "44 000 ₸ / м²",
        },
        "taraflex-multi-use": {
          title: "Taraflex Multi-Use",
          summary:
            "Әртүрлі спорт түрлері мен ауыспалы кестесі бар залдарға арналған көпфункциялы Taraflex жабыны.",
          imageAlt: "Gerflor Taraflex Multi-Use көпфункциялы залы",
          specs: [
            "Taraflex желісі",
            "Әмбебап спорт залдары",
            "Қазақстанда жеткізу және монтаж",
          ],
        },
        "taraflex-tennis": {
          title: "Taraflex Tennis",
          summary:
            "Теннис корттарына арналған Taraflex: амортизация және тұрақты ойын беті.",
          imageAlt: "Gerflor Taraflex Tennis теннис корты",
          specs: [
            "Теннис корттарына",
            "Taraflex желісі",
            "Қазақстанда жеткізу және монтаж",
          ],
        },
        "taraflex-badminton": {
          title: "Taraflex Badminton",
          summary:
            "Бадминтонға арналған Taraflex: ілініс пен жайлылық жаттығу мен матчтар үшін.",
          imageAlt: "Gerflor Taraflex бадминтон алаңы",
          specs: [
            "Бадминтонға",
            "Taraflex желісі",
            "Қазақстанда жеткізу және монтаж",
          ],
        },
        "taraflex-futsal": {
          title: "Taraflex Futsal",
          summary:
            "Футзал залдарына арналған Taraflex: тозуға төзімді ойын беті.",
          imageAlt: "Gerflor Taraflex Futsal залы",
          specs: [
            "Футзалға",
            "Taraflex желісі",
            "Қазақстанда жеткізу және монтаж",
          ],
        },
        "taraflex-table-tennis": {
          title: "Taraflex Table Tennis",
          summary:
            "Үстел теннисі залдарына арналған Taraflex: тегіс бет және ұзақ жүктемеде жайлылық.",
          imageAlt: "Gerflor Taraflex үстел теннисі залы",
          specs: [
            "Үстел теннисіне",
            "Taraflex желісі",
            "Қазақстанда жеткізу және монтаж",
          ],
        },
        "taraflex-surface": {
          title: "Taraflex Surface",
          summary:
            "Роликті коньки және іргелес indoor пәндерге арналған Taraflex Surface.",
          imageAlt: "Gerflor Taraflex Surface алаңы",
          specs: [
            "Роликті конькиге",
            "Taraflex желісі",
            "Қазақстанда жеткізу және монтаж",
          ],
        },
        "taraflex-bateco": {
          title: "Taraflex Bateco",
          summary:
            "Қайта өңделген материалдар негізіндегі Taraflex Bateco спорт жабыны.",
          imageAlt: "Gerflor Taraflex Bateco спорт жабыны",
          specs: [
            "Taraflex желісі",
            "Қайта өңделген материалдар",
            "Қазақстанда жеткізу және монтаж",
          ],
        },
        "taralay-element-comfort": {
          title: "Taralay Element Comfort",
          summary:
            "Мектеп, кеңсе және қоғамдық интерьерлерге арналған Taralay Comfort орам жабыны, амортизациялық негізімен.",
          imageAlt: "Gerflor Taralay Element Comfort орам жабыны",
          specs: [
            "Коммерциялық интерьерлер",
            "Comfort сериясы",
            "Қазақстанда жеткізу және төсеу",
          ],
        },
        "taralay-element-compact": {
          title: "Taralay Element Compact",
          summary:
            "Жоғары өтімді үй-жайларға арналған Taralay Compact орам жабыны.",
          imageAlt: "Gerflor Taralay Element Compact орам жабыны",
          specs: [
            "Жоғары өтімділік",
            "Compact сериясы",
            "Қазақстанда жеткізу және төсеу",
          ],
        },
        "taralay-uni-comfort": {
          title: "Taralay Uni Comfort",
          summary:
            "Дәліз, білім және денсаулық сақтауға арналған Taralay Comfort бір түсті коллекциясы.",
          imageAlt: "Gerflor Taralay Uni Comfort бір түсті жабыны",
          specs: [
            "Бір түсті дизайн",
            "Comfort сериясы",
            "Қазақстанда жеткізу және төсеу",
          ],
        },
        "taralay-initial-comfort": {
          title: "Taralay Initial Comfort",
          summary:
            "Жүру жайлылығына баса назар аударатын коммерциялық және қоғамдық кеңістіктерге арналған Taralay Initial Comfort.",
          imageAlt: "Gerflor Taralay Initial Comfort жабыны",
          specs: [
            "Коммерциялық кеңістіктер",
            "Comfort сериясы",
            "Қазақстанда жеткізу және төсеу",
          ],
        },
        "taralay-impression-comfort": {
          title: "Taralay Impression Comfort",
          summary:
            "Taralay Impression Comfort дизайнерлік коллекциясы: декоративті қабат және жайлы негіз.",
          imageAlt: "Gerflor Taralay Impression Comfort дизайнерлік жабыны",
          specs: [
            "Декоративті дизайндар",
            "Comfort сериясы",
            "Қазақстанда жеткізу және төсеу",
          ],
        },
        "taralay-impression-compact": {
          title: "Taralay Impression Compact",
          summary:
            "Коммерциядағы тозуға төзімді декоративті едендерге арналған Taralay Impression Compact.",
          imageAlt: "Gerflor Taralay Impression Compact жабыны",
          specs: [
            "Декоративті дизайндар",
            "Compact сериясы",
            "Қазақстанда жеткізу және төсеу",
          ],
        },
        "taralay-impression-hop-compact": {
          title: "Taralay Impression Hop Compact",
          summary:
            "Taralay Impression Hop Compact — Compact желісіндегі декоративті коммерциялық жабын.",
          imageAlt: "Gerflor Taralay Impression Hop Compact жабыны",
          specs: [
            "Impression Hop коллекциясы",
            "Compact сериясы",
            "Қазақстанда жеткізу және төсеу",
          ],
        },
        "taralay-premium-comfort": {
          title: "Taralay Premium Comfort",
          summary:
            "Өкілдік және қоғамдық интерьерлерге арналған Taralay Comfort премиум коллекциясы.",
          imageAlt: "Gerflor Taralay Premium Comfort жабыны",
          specs: [
            "Taralay премиум желісі",
            "Comfort сериясы",
            "Қазақстанда жеткізу және төсеу",
          ],
        },
        "taralay-premium-compact": {
          title: "Taralay Premium Compact",
          summary:
            "Жоғары жүктемелі коммерциялық едендерге арналған Taralay Compact премиум коллекциясы.",
          imageAlt: "Gerflor Taralay Premium Compact жабыны",
          specs: [
            "Taralay премиум желісі",
            "Compact сериясы",
            "Қазақстанда жеткізу және төсеу",
          ],
        },
        "taralay-libertex": {
          title: "Taralay Libertex",
          summary:
            "Денсаулық сақтау және қоғамдық аймақтарға арналған антибактериялық Taralay Libertex.",
          imageAlt: "Gerflor Taralay Libertex жабыны",
          specs: [
            "Антибактериялық қасиеттер",
            "Taralay желісі",
            "Қазақстанда жеткізу және төсеу",
          ],
        },
        "mural-revela": {
          title: "Mural Revela",
          summary:
            "Gerflor Mural Revela қабырға плиткалары: қоғамдық және коммерциялық интерьерлерге арналған отқа төзімді шешім.",
          imageAlt: "Gerflor Mural Revela қабырға плиткалары",
          specs: [
            "Қабырға жабындары",
            "Отқа төзімді плиткалар",
            "Қазақстанда жеткізу және монтаж",
          ],
        },
      },
    },
    gallery: {
      eyebrow: "Нысандар",
      heading: "Орындалған нысандар галереясы",
      text: "Қазақстандағы спорттық және коммерциялық алаңдар — Gerflor Taraflex жабындарында.",
      all: "Барлық нысандар",
      pageTitle: "Іске асырылған нысандар",
      pageText:
        "FIVB сертификатталған Gerflor Taraflex Evolution 7.5 мм жабыны бар кәсіби спорт залдары.",
      projects: {
        zhayik: {
          title: "Жайық Арена",
          city: "Орал",
          description:
            "2025 жылғы көпфункционалды кешен. Бас зал — Taraflex Evolution 7.5 мм, FIVB сертификаты. Кілтпен жеткізу және монтаждау, волейбол алаңына таңба салумен.",
          imageAlt: "Gerflor Taraflex жабыны бар Жайық Арена ойын залы",
        },
        bereke: {
          title: "«Береке» СӨО",
          city: "Петропавл",
          description:
            "Кәсіби Gerflor Taraflex Evolution 7,5 мм жабыны — әр ойында жайлылық, амортизация және қауіпсіздік. Кілтпен жеткізу, монтаждау және волейбол таңбасын салу.",
          imageAlt: "Петропавлдағы Береке СӨО спорт залы",
        },
        zhetysu: {
          title: "«Жетісу» волейбол орталығы",
          city: "Талдықорған",
          description:
            "Жаңа «Жетісу» волейбол орталығының екі алаңына кәсіби Gerflor Taraflex спорт жабынын жеткізу.",
          imageAlt: "Талдықорғандағы Жетісу волейбол орталығы",
        },
        abay: {
          title: "«Абай» орталығы",
          city: "Атырау",
          description:
            "Параволейболға арналған таңбамен Gerflor кәсіби спорт жабынын жеткізу және монтаждау. Әр спортшыға сапа, қауіпсіздік және жайлылық.",
          imageAlt: "Атыраудағы «Абай» орталығындағы параволейбол, Gerflor жабыны",
        },
        school: {
          title: "Шоқан Уәлиханов атындағы жеке мектеп",
          city: "Астана",
          description:
            "Жайлы, заманауи және қауіпсіз білім беру ортасын жасау үшін сапалы Gerflor еден жабындарын жеткізу.",
          imageAlt: "Шоқан Уәлиханов атындағы жеке мектеп",
        },
        multi: {
          title: "Боччадан 2026 жылғы әлем кубогы",
          city: "Астана",
          description:
            "2026 жылғы бочча әлем кубогына Gerflor Taraflex Evolution green mint еден жабынын жеткізу және монтаждау.",
          imageAlt: "Астанадағы 2026 жылғы бочча әлем кубогы, Gerflor Taraflex жабыны",
        },
        "jekpe-jek": {
          title: "«Жекпе-Жек» жекпе-жек сарайы",
          city: "Астана",
          description:
            "Волейболға арналған таңбамен жеткізу және монтаждау. Ерлер командалары арасындағы ҚР Кубогының финалы, 2025 жыл.",
          imageAlt: "Жекпе-Жек сарайындағы ҚР волейбол кубогының финалы",
        },
        barys: {
          title: "Barys Arena",
          city: "Астана",
          description:
            "Gerflor кәсіби спорт жабынын жеткізу және монтаждау, Ұлттық лиганың әйелдер командалары арасындағы Қазақстан Республикасы чемпионатының плей-оффына арналған волейбол таңбасын салу — 2026.",
          imageAlt: "Астанадағы Barys Arena алаңындағы Gerflor волейбол алаңы",
        },
      },
    },
    services: {
      eyebrow: "Қызметтер",
      title: "Gerflor спорт кеңістіктері «кілтпен»",
      text: "Зал тұжырымдамасынан комиссияға тапсыруға дейін: жеткізу мен сервиске бір мердігер. Мектептер, федерациялар, фитнес-клубтар және көпфункционалды ареналармен жұмыс істейміз.",
      steps: [
        {
          title: "Жобалау және жүйені іріктеу",
          text: "Жүктемеге, спорт түріне және бюджетке сай Taraflex, Powergame+ немесе коммерциялық винилді іріктеп аламыз.",
        },
        {
          title: "Франциядан тікелей жеткізу",
          text: "Кеден және технадзорға арналған құжаттары бар сертификатталған Gerflor өнімі.",
        },
        {
          title: "Авторизацияланған монтаж",
          text: "Негізді дайындау, төсеу, дәнекерленген жіктер, зауыт регламенті бойынша ойын белгілеуі.",
        },
        {
          title: "Нысанды тапсыру",
          text: "Технадзор мен халықаралық комиссиялардың қабылдауын сүйемелдеу, зауыт кепілдігі.",
        },
      ],
    },
    contacts: {
      title: "Байланыс",
      intro:
        "Gerflor Kazakhstan — эксклюзивті өкіл және авторизацияланған сервис.",
      quote: "Жобаны WhatsApp арқылы есептеу",
      address: "Астана қ., Қабанбай батыр даңғылы, 60А/5",
    },
    footer: {
      blurb:
        "Gerflor Kazakhstan — эксклюзивті өкіл және авторизацияланған сервис.",
      sections: "Бөлімдер",
      contacts: "Байланыс",
      rights: "© 2026 Gerflor Kazakhstan. Барлық құқықтар қорғалған.",
      privacy: "Құпиялылық саясаты",
    },
    notFound: {
      title: "Бет табылмады",
      text: "Мекенжайды тексеріңіз немесе Gerflor Kazakhstan басты бетіне оралыңыз.",
      home: "Басты бетке",
    },
    wa: {
      quote: "Сәлеметсіз бе! Gerflor жабыны бойынша жобаны есептегім келеді.",
      label: "WhatsApp-қа жазу",
    },
    privacy: {
      documents: "Құжаттар",
      title: "Құпиялылық саясаты",
      effective: "Күшіне енген күні",
    },
  },
  en: {
    meta: {
      title: "Gerflor Kazakhstan — turnkey sports flooring",
      description:
        "Direct supply of French Gerflor floor coverings and factory-standard installation in Kazakhstan — from design to handover to technical supervision and international commissions.",
      ogTitle: "Gerflor Kazakhstan — turnkey sports spaces",
    },
    nav: {
      home: "Home",
      catalog: "Catalog",
      gallery: "Gallery",
      services: "Turnkey services",
      contacts: "Contacts",
      mainAria: "Main navigation",
      mobileAria: "Mobile navigation",
      footerAria: "Footer navigation",
    },
    header: {
      homeAria: "Gerflor Kazakhstan — home",
      country: "Kazakhstan",
      logoAlt: "Gerflor logo",
      instagram: "Instagram",
      instagramAria: "Gerflor Kazakhstan on Instagram",
      calculate: "Get a quote",
      openMenu: "Open menu",
      closeMenu: "Close menu",
    },
    hero: {
      eyebrow:
        "Gerflor Kazakhstan — exclusive representative and authorised service",
      title: "Turnkey Gerflor sports spaces in Kazakhstan",
      text: "Direct supply of French floor coverings and factory-standard installation — from design through handover to technical supervision and international commissions.",
      catalog: "View catalog",
      imageAlt: "Sitting volleyball on Gerflor Taraflex flooring",
    },
    about: {
      eyebrow: "About the company",
      title: "World-class French floor coverings",
      text: "Gerflor Kazakhstan builds safe, modern and high-performance sports spaces. Gerflor products are used at the Olympic Games, world championships, and in schools, hospitals and offices in more than 100 countries.",
      items: [
        "certified coverings for sport, commercial interiors and the home;",
        "professional specification, installation and aftercare;",
        "solutions for any facility — from a sports complex to an office.",
      ],
      imageAlt: "Gerflor wood- and stone-look flooring planks",
    },
    features: {
      eyebrow: "Why Gerflor",
      title: "World-class French flooring — in Kazakhstan",
      text: "We create safe sports spaces and implement Gerflor standards for arenas, schools and sports centres.",
      france: {
        title: "Direct supply from France",
        description:
          "Official Gerflor products with no intermediaries: certified coverings for sport, commercial and public spaces.",
      },
      service: {
        title: "Authorised service and installation",
        description:
          "Installation to Gerflor factory specifications: subfloor preparation, adhesive, court marking and quality control at every stage.",
      },
      commission: {
        title: "Handover to technical supervision and international commissions",
        description:
          "We support acceptance: documents, protocols and compliance with FIVB and other federation requirements on competition venues.",
      },
      warranty: {
        title: "Factory quality warranty",
        description:
          "Taraflex coverings are used at the Olympic Games and world championships. Factory warranty and service across Kazakhstan.",
      },
    },
    catalog: {
      eyebrow: "Catalog / rates",
      heading: "Flooring catalog",
      all: "Full catalog",
      request: "Request a quote",
      pageTitle: "Gerflor floor coverings catalog",
      pageText:
        "Taraflex sports flooring, Taralay commercial sheet ranges and the Mural Revela wall collection. Prices for Evolution, Performance and Comfort are a costing guide; the final estimate depends on area, subfloor and marking.",
      collections: "Collections and rates",
      filterAll: "All",
      sport: "Sports flooring",
      floor: "Floor coverings",
      wall: "Wall coverings",
      products: {
        "taraflex-evolution": {
          title: "Taraflex Evolution",
          summary:
            "Core sports series for training and mid-level competition. A popular choice for volleyball halls in Kazakhstan.",
          imageAlt: "Gerflor Taraflex Evolution 7.5 mm flooring",
          specs: [
            "Thickness ~ 7.50 mm",
            "Category P1 (25–35%)",
            "FIVB, halls and arenas",
          ],
          price: "34,500 ₸ / m²",
        },
        "taraflex-performance": {
          title: "Taraflex Performance",
          summary:
            "Professional level for clubs and tournaments: thickness ~9 mm, category P2, higher comfort and athlete safety.",
          imageAlt: "Gerflor Taraflex Performance sports flooring",
          specs: [
            "Thickness ~ 9.00 mm",
            "Category P2 shock absorption",
            "Clubs, tournaments, high loads",
          ],
          price: "39,900 ₸ / m²",
        },
        "taraflex-comfort": {
          title: "Taraflex Comfort",
          summary:
            "Higher-comfort sports flooring for schools, multi-use halls and courts where joint protection matters.",
          imageAlt: "Gerflor Taraflex Comfort sports flooring",
          specs: [
            "Thickness ~ 12.50 mm",
            "Category P3 (shock absorption > 45%)",
            "Education and multi-use halls",
          ],
          price: "44,000 ₸ / m²",
        },
        "taraflex-multi-use": {
          title: "Taraflex Multi-Use",
          summary:
            "Multi-use Taraflex sports flooring for halls that host several sports on a shared timetable.",
          imageAlt: "Multi-use hall with Gerflor Taraflex Multi-Use",
          specs: [
            "Taraflex range",
            "Multi-use sports halls",
            "Supply and installation in Kazakhstan",
          ],
        },
        "taraflex-tennis": {
          title: "Taraflex Tennis",
          summary:
            "Taraflex sports flooring for tennis courts: shock absorption and a stable playing surface.",
          imageAlt: "Tennis court with Gerflor Taraflex Tennis",
          specs: [
            "For tennis courts",
            "Taraflex range",
            "Supply and installation in Kazakhstan",
          ],
        },
        "taraflex-badminton": {
          title: "Taraflex Badminton",
          summary:
            "Taraflex flooring for badminton: grip and comfort for training and matches.",
          imageAlt: "Badminton court with Gerflor Taraflex",
          specs: [
            "For badminton",
            "Taraflex range",
            "Supply and installation in Kazakhstan",
          ],
        },
        "taraflex-futsal": {
          title: "Taraflex Futsal",
          summary:
            "Taraflex sports flooring for futsal halls: a durable indoor playing surface.",
          imageAlt: "Futsal hall with Gerflor Taraflex Futsal",
          specs: [
            "For futsal",
            "Taraflex range",
            "Supply and installation in Kazakhstan",
          ],
        },
        "taraflex-table-tennis": {
          title: "Taraflex Table Tennis",
          summary:
            "Taraflex flooring for table tennis halls: an even surface and comfort under long sessions.",
          imageAlt: "Table tennis hall with Gerflor Taraflex",
          specs: [
            "For table tennis",
            "Taraflex range",
            "Supply and installation in Kazakhstan",
          ],
        },
        "taraflex-surface": {
          title: "Taraflex Surface",
          summary:
            "Taraflex Surface sports flooring for roller skating and related indoor disciplines.",
          imageAlt: "Indoor court with Gerflor Taraflex Surface",
          specs: [
            "For roller skating",
            "Taraflex range",
            "Supply and installation in Kazakhstan",
          ],
        },
        "taraflex-bateco": {
          title: "Taraflex Bateco",
          summary:
            "Taraflex Bateco sports flooring based on recycled materials in the Gerflor range.",
          imageAlt: "Gerflor Taraflex Bateco sports flooring",
          specs: [
            "Taraflex range",
            "Recycled materials",
            "Supply and installation in Kazakhstan",
          ],
        },
        "taralay-element-comfort": {
          title: "Taralay Element Comfort",
          summary:
            "Taralay Comfort heterogeneous sheet flooring for schools, offices and public interiors, with a cushioned backing.",
          imageAlt: "Gerflor Taralay Element Comfort sheet flooring",
          specs: [
            "Commercial interiors",
            "Comfort series",
            "Supply and installation in Kazakhstan",
          ],
        },
        "taralay-element-compact": {
          title: "Taralay Element Compact",
          summary:
            "Taralay Compact heterogeneous sheet flooring for high-traffic rooms.",
          imageAlt: "Gerflor Taralay Element Compact sheet flooring",
          specs: [
            "High traffic",
            "Compact series",
            "Supply and installation in Kazakhstan",
          ],
        },
        "taralay-uni-comfort": {
          title: "Taralay Uni Comfort",
          summary:
            "Plain-colour Taralay Comfort collection for corridors, education and healthcare.",
          imageAlt: "Gerflor Taralay Uni Comfort plain flooring",
          specs: [
            "Plain-colour design",
            "Comfort series",
            "Supply and installation in Kazakhstan",
          ],
        },
        "taralay-initial-comfort": {
          title: "Taralay Initial Comfort",
          summary:
            "Taralay Initial Comfort for commercial and public spaces, with an emphasis on walking comfort.",
          imageAlt: "Gerflor Taralay Initial Comfort flooring",
          specs: [
            "Commercial spaces",
            "Comfort series",
            "Supply and installation in Kazakhstan",
          ],
        },
        "taralay-impression-comfort": {
          title: "Taralay Impression Comfort",
          summary:
            "Taralay Impression Comfort design collection: a decorative wear layer on a comfort backing.",
          imageAlt: "Gerflor Taralay Impression Comfort design flooring",
          specs: [
            "Decorative designs",
            "Comfort series",
            "Supply and installation in Kazakhstan",
          ],
        },
        "taralay-impression-compact": {
          title: "Taralay Impression Compact",
          summary:
            "Taralay Impression Compact for wear-resistant decorative floors in commercial interiors.",
          imageAlt: "Gerflor Taralay Impression Compact flooring",
          specs: [
            "Decorative designs",
            "Compact series",
            "Supply and installation in Kazakhstan",
          ],
        },
        "taralay-impression-hop-compact": {
          title: "Taralay Impression Hop Compact",
          summary:
            "Taralay Impression Hop Compact — a decorative commercial floor in the Compact series.",
          imageAlt: "Gerflor Taralay Impression Hop Compact flooring",
          specs: [
            "Impression Hop collection",
            "Compact series",
            "Supply and installation in Kazakhstan",
          ],
        },
        "taralay-premium-comfort": {
          title: "Taralay Premium Comfort",
          summary:
            "Premium Taralay Comfort collection for representative and public interiors.",
          imageAlt: "Gerflor Taralay Premium Comfort flooring",
          specs: [
            "Premium Taralay range",
            "Comfort series",
            "Supply and installation in Kazakhstan",
          ],
        },
        "taralay-premium-compact": {
          title: "Taralay Premium Compact",
          summary:
            "Premium Taralay Compact collection for high-load commercial floors.",
          imageAlt: "Gerflor Taralay Premium Compact flooring",
          specs: [
            "Premium Taralay range",
            "Compact series",
            "Supply and installation in Kazakhstan",
          ],
        },
        "taralay-libertex": {
          title: "Taralay Libertex",
          summary:
            "Taralay Libertex heterogeneous flooring with antibacterial properties for healthcare and public areas.",
          imageAlt: "Gerflor Taralay Libertex flooring",
          specs: [
            "Antibacterial properties",
            "Taralay range",
            "Supply and installation in Kazakhstan",
          ],
        },
        "mural-revela": {
          title: "Mural Revela",
          summary:
            "Gerflor Mural Revela wall tiles: a fire-resistant wall solution for public and commercial interiors.",
          imageAlt: "Gerflor Mural Revela wall tiles",
          specs: [
            "Wall coverings",
            "Fire-resistant tiles",
            "Supply and installation in Kazakhstan",
          ],
        },
      },
    },
    gallery: {
      eyebrow: "Projects",
      heading: "Completed facilities",
      text: "Sports and commercial venues in Kazakhstan finished with Gerflor Taraflex.",
      all: "All projects",
      pageTitle: "Delivered projects",
      pageText:
        "Professional sports halls with FIVB-certified Gerflor Taraflex Evolution 7.5 mm.",
      projects: {
        zhayik: {
          title: "Zhaiyk Arena",
          city: "Oral",
          description:
            "Multifunctional complex opened in 2025. Main hall — Taraflex Evolution 7.5 mm, FIVB certification. Turnkey supply and installation with volleyball court marking.",
          imageAlt: "Zhaiyk Arena court with Gerflor Taraflex",
        },
        bereke: {
          title: "Bereke sports complex",
          city: "Petropavl",
          description:
            "Professional Gerflor Taraflex Evolution 7.5 mm — comfort, shock absorption and safety in every game. Turnkey supply, installation and volleyball court marking.",
          imageAlt: "Bereke sports hall in Petropavl",
        },
        zhetysu: {
          title: "Zhetysu volleyball centre",
          city: "Taldykorgan",
          description:
            "Supply of professional Gerflor Taraflex sports flooring for two courts at the new Zhetysu volleyball centre.",
          imageAlt: "Zhetysu volleyball centre in Taldykorgan",
        },
        abay: {
          title: "Abai Centre",
          city: "Atyrau",
          description:
            "Supply and installation of professional Gerflor sports flooring with sitting volleyball court marking. Quality, safety and comfort for every athlete.",
          imageAlt: "Sitting volleyball at Abai Centre in Atyrau on Gerflor flooring",
        },
        school: {
          title: "Shoqan Ualikhanov Private School",
          city: "Astana",
          description:
            "Supply of quality Gerflor flooring to create a comfortable, modern and safe educational environment.",
          imageAlt: "Shoqan Ualikhanov Private School",
        },
        multi: {
          title: "2026 World Boccia Cup",
          city: "Astana",
          description:
            "Supply and installation of Gerflor Taraflex Evolution green mint flooring for the 2026 World Boccia Cup.",
          imageAlt: "2026 World Boccia Cup in Astana on Gerflor Taraflex",
        },
        "jekpe-jek": {
          title: "Zhekpe-Zhek Martial Arts Palace",
          city: "Astana",
          description:
            "Supply, installation and volleyball court marking. Final of the Republic of Kazakhstan Cup among men’s teams, 2025.",
          imageAlt: "Kazakhstan Cup volleyball final at Zhekpe-Zhek Palace",
        },
        barys: {
          title: "Barys Arena",
          city: "Astana",
          description:
            "Supply and installation of professional Gerflor sports flooring and volleyball court marking for the 2026 National League women’s play-offs of the Republic of Kazakhstan Championship.",
          imageAlt: "Gerflor volleyball court at Barys Arena in Astana",
        },
      },
    },
    services: {
      eyebrow: "Services",
      title: "Turnkey Gerflor sports spaces",
      text: "From hall concept to commission handover: one contractor for supply and service. We work with schools, federations, fitness clubs and multifunctional arenas.",
      steps: [
        {
          title: "Design and system selection",
          text: "We specify Taraflex, Powergame+ or commercial vinyl to match load, sport and budget.",
        },
        {
          title: "Direct supply from France",
          text: "Certified Gerflor products with documents for customs and technical supervision.",
        },
        {
          title: "Authorised installation",
          text: "Subfloor preparation, laying, welded joints and court marking to factory regulations.",
        },
        {
          title: "Facility handover",
          text: "Support for acceptance by technical supervision and international commissions, factory warranty.",
        },
      ],
    },
    contacts: {
      title: "Contacts",
      intro:
        "Gerflor Kazakhstan — exclusive representative and authorised service.",
      quote: "Get a quote on WhatsApp",
      address: "Astana, Kabanbay Batyr Ave. 60A/5",
    },
    footer: {
      blurb:
        "Gerflor Kazakhstan — exclusive representative and authorised service.",
      sections: "Sections",
      contacts: "Contacts",
      rights: "© 2026 Gerflor Kazakhstan. All rights reserved.",
      privacy: "Privacy policy",
    },
    notFound: {
      title: "Page not found",
      text: "Check the address or return to the Gerflor Kazakhstan home page.",
      home: "Back to home",
    },
    wa: {
      quote: "Hello! I would like a quote for a Gerflor flooring project.",
      label: "Message on WhatsApp",
    },
    privacy: {
      documents: "Documents",
      title: "Privacy policy",
      effective: "Effective date",
    },
  },
};

export const NAV_HREFS = [
  { href: "/", key: "home" as const },
  { href: "/catalog", key: "catalog" as const },
  { href: "/gallery", key: "gallery" as const },
  { href: "/services", key: "services" as const },
  { href: "/contacts", key: "contacts" as const },
];
