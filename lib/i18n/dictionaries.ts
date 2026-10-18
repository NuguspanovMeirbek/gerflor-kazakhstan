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
        "Линейки для спорта, образования, здравоохранения и коммерции. Цены на Taraflex Evolution, Performance и Comfort — ориентир для расчета объекта; точная смета зависит от площади, основания и разметки.",
      collections: "Коллекции и тарифы",
      products: {
        "heterogeneous-rolls": {
          title: "Гетерогенные рулонные покрытия",
          summary:
            "Многослойный винил Taralay и Creation для школ, офисов, клиник и ритейла: дизайн под дерево и камень, износостойкость и простой уход.",
          imageAlt:
            "Гетерогенное рулонное покрытие Gerflor под дерево в коммерческом интерьере",
          specs: [
            "Высокая нагрузка (education, healthcare, offices)",
            "Защитный слой PUR / Easycare",
            "Антибактериальные свойства",
          ],
        },
        taraflex: {
          title: "Спортивные покрытия Taraflex",
          summary:
            "Системы Taraflex и Powergame+ для залов, арен, школ и федераций. Сертификация FIVB, амортизация и безопасное сцепление.",
          imageAlt: "Спортивный зал с покрытием Gerflor Taraflex",
          specs: [
            "Evolution 7,5 мм · категория P1",
            "Comfort 12,5 мм · категория P3",
            "Сертификация FIVB / FIBA",
          ],
          price: "от 47 500 ₸ / м²",
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
          price: "62 500 ₸ / м²",
        },
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
          price: "47 500 ₸ / м²",
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
        "Спорт, білім, денсаулық сақтау және коммерцияға арналған желілер. Taraflex Evolution, Performance және Comfort бағалары — нысан есебінің бағдары; нақты смета алаңға, негізге және белгілеуге байланысты.",
      collections: "Коллекциялар мен тарифтер",
      products: {
        "heterogeneous-rolls": {
          title: "Гетерогенді орам жабындары",
          summary:
            "Мектеп, кеңсе, клиника және ритейлге арналған Taralay және Creation көпқабатты винилі: ағаш пен тас дизайны, тозуға төзімділік және күтімнің қарапайымдылығы.",
          imageAlt:
            "Коммерциялық интерьердегі ағаш өрнекті Gerflor гетерогенді орам жабыны",
          specs: [
            "Жоғары жүктеме (education, healthcare, offices)",
            "PUR / Easycare қорғаныш қабаты",
            "Антибактериялық қасиеттер",
          ],
        },
        taraflex: {
          title: "Taraflex спорт жабындары",
          summary:
            "Залдар, ареналар, мектептер және федерацияларға арналған Taraflex және Powergame+ жүйелері. FIVB сертификаты, амортизация және қауіпсіз ілініс.",
          imageAlt: "Gerflor Taraflex жабыны бар спорт залы",
          specs: [
            "Evolution 7,5 мм · P1 санаты",
            "Comfort 12,5 мм · P3 санаты",
            "FIVB / FIBA сертификаты",
          ],
          price: "47 500 ₸ / м² бастап",
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
          price: "62 500 ₸ / м²",
        },
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
          price: "47 500 ₸ / м²",
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
        "Ranges for sport, education, healthcare and commercial interiors. Prices for Taraflex Evolution, Performance and Comfort are a guide for project costing; the final estimate depends on area, subfloor and marking.",
      collections: "Collections and rates",
      products: {
        "heterogeneous-rolls": {
          title: "Heterogeneous sheet flooring",
          summary:
            "Multi-layer Taralay and Creation vinyl for schools, offices, clinics and retail: wood and stone designs, wear resistance and easy care.",
          imageAlt: "Gerflor heterogeneous wood-look sheet flooring in a commercial interior",
          specs: [
            "High traffic (education, healthcare, offices)",
            "PUR / Easycare wear layer",
            "Antibacterial properties",
          ],
        },
        taraflex: {
          title: "Taraflex sports flooring",
          summary:
            "Taraflex and Powergame+ systems for halls, arenas, schools and federations. FIVB certification, shock absorption and safe grip.",
          imageAlt: "Sports hall with Gerflor Taraflex flooring",
          specs: [
            "Evolution 7.5 mm · category P1",
            "Comfort 12.5 mm · category P3",
            "FIVB / FIBA certification",
          ],
          price: "from 47,500 ₸ / m²",
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
          price: "62,500 ₸ / m²",
        },
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
          price: "47,500 ₸ / m²",
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
