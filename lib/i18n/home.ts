import type { Locale } from "@/lib/i18n/types";

type HomeCopy = {
  hero: {
    eyebrow: string;
    title: string;
    text: string;
    discuss: string;
    catalog: string;
    imageAlt: string;
  };
  directions: {
    eyebrow: string;
    title: string;
    sport: string;
    floor: string;
    wall: string;
    sportAlt: string;
    floorAlt: string;
    wallAlt: string;
  };
  about: {
    eyebrow: string;
    title: string;
    text: string;
    imageAlt: string;
  };
  why: {
    eyebrow: string;
    title: string;
    items: { title: string; text: string }[];
  };
  collections: {
    eyebrow: string;
    title: string;
    note: string;
    taraflex: string;
    taralay: string;
    mural: string;
    maker: string;
  };
  projects: {
    eyebrow: string;
    title: string;
    text: string;
    all: string;
  };
  process: {
    eyebrow: string;
    title: string;
    steps: { title: string; text: string }[];
  };
  cta: {
    title: string;
    contact: string;
    whatsapp: string;
  };
};

export const homeCopy: Record<Locale, HomeCopy> = {
  ru: {
    hero: {
      eyebrow: "Sportflor",
      title: "Спортивные и коммерческие покрытия нового уровня",
      text: "Поставка, проектирование и профессиональный монтаж покрытий для спортивных и коммерческих объектов.",
      discuss: "Обсудить проект",
      catalog: "Каталог покрытий",
      imageAlt: "Профессиональная волейбольная площадка на спортивном покрытии",
    },
    directions: {
      eyebrow: "Направления",
      title: "Три типа покрытий для разных задач",
      sport: "Спортивные покрытия",
      floor: "Коммерческие напольные покрытия",
      wall: "Настенные покрытия",
      sportAlt: "Спортивный зал с игровым покрытием",
      floorAlt: "Образцы коммерческих напольных покрытий",
      wallAlt: "Настенное покрытие в интерьере",
    },
    about: {
      eyebrow: "О компании",
      title: "Sportflor ведёт объект от решения до монтажа",
      text: "Sportflor — поставка профессиональных покрытий и комплексная реализация объектов. От подбора решения до монтажа и сдачи готового объекта.",
      imageAlt: "Реализованный спортивный зал",
    },
    why: {
      eyebrow: "Почему Sportflor",
      title: "Как мы работаем с объектом",
      items: [
        {
          title: "Подбор покрытий под задачи объекта",
          text: "Смотрим назначение помещения и предлагаем коллекцию, которая ему соответствует.",
        },
        {
          title: "Профессиональная поставка",
          text: "Организуем поставку спортивных, коммерческих и настенных покрытий на объект.",
        },
        {
          title: "Монтаж специализированными специалистами",
          text: "Укладку выполняют специалисты по спортивным и коммерческим покрытиям.",
        },
        {
          title: "Сопровождение проекта",
          text: "Ведём объект от согласования решения до завершения работ.",
        },
        {
          title: "Решения для разных типов спортивных и коммерческих объектов",
          text: "Залы, арены, школы и коммерческие помещения.",
        },
      ],
    },
    collections: {
      eyebrow: "Коллекции",
      title: "Линейки, с которыми работает Sportflor",
      note: "Taraflex, Taralay и Mural Revela — коллекции производителя Gerflor. Sportflor поставляет эти покрытия и выполняет монтаж.",
      taraflex: "Спортивные покрытия",
      taralay: "Коммерческие покрытия",
      mural: "Настенные покрытия",
      maker: "Производитель Gerflor",
    },
    projects: {
      eyebrow: "Объекты",
      title: "Реализованные площадки",
      text: "Фотографии объектов, на которых уже уложены покрытия.",
      all: "Смотреть галерею",
    },
    process: {
      eyebrow: "Процесс",
      title: "Как проходит работа",
      steps: [
        { title: "Проектирование", text: "Определяем задачу объекта и состав работ." },
        { title: "Подбор покрытия", text: "Выбираем коллекцию под назначение помещения." },
        { title: "Поставка", text: "Организуем поставку покрытия на объект." },
        { title: "Монтаж", text: "Укладываем покрытие на подготовленное основание." },
        { title: "Сдача объекта", text: "Передаём готовое покрытие." },
      ],
    },
    cta: {
      title: "Планируете новый спортивный объект или обновление покрытия?",
      contact: "Связаться с нами",
      whatsapp: "Написать в WhatsApp",
    },
  },
  kk: {
    hero: {
      eyebrow: "Sportflor",
      title: "Жаңа деңгейдегі спорттық және коммерциялық жабындар",
      text: "Спорттық және коммерциялық нысандарға арналған жабындарды жеткізу, жобалау және кәсіби монтаждау.",
      discuss: "Жобаны талқылау",
      catalog: "Жабындар каталогы",
      imageAlt: "Спорт жабынындағы кәсіби волейбол алаңы",
    },
    directions: {
      eyebrow: "Бағыттар",
      title: "Әртүрлі міндетке арналған үш жабын түрі",
      sport: "Спорт жабындары",
      floor: "Коммерциялық еден жабындары",
      wall: "Қабырға жабындары",
      sportAlt: "Ойын жабыны бар спорт залы",
      floorAlt: "Коммерциялық еден жабындарының үлгілері",
      wallAlt: "Интерьердегі қабырға жабыны",
    },
    about: {
      eyebrow: "Компания туралы",
      title: "Sportflor нысанды шешімнен монтажға дейін жүргізеді",
      text: "Sportflor — кәсіби жабындарды жеткізу және нысандарды кешенді іске асыру. Шешімді таңдаудан монтаж бен дайын нысанды тапсыруға дейін.",
      imageAlt: "Іске асырылған спорт залы",
    },
    why: {
      eyebrow: "Неліктен Sportflor",
      title: "Нысанмен қалай жұмыс істейміз",
      items: [
        {
          title: "Жабынды нысан міндетіне сай таңдау",
          text: "Үй-жайдың мақсатын қараймыз және оған сәйкес коллекция ұсынамыз.",
        },
        {
          title: "Кәсіби жеткізу",
          text: "Спорттық, коммерциялық және қабырға жабындарын нысанға жеткіземіз.",
        },
        {
          title: "Маманданған мамандардың монтажы",
          text: "Төсеуді спорттық және коммерциялық жабындар бойынша мамандар орындайды.",
        },
        {
          title: "Жобаны сүйемелдеу",
          text: "Нысанды шешімді келісуден жұмысты аяқтауға дейін жүргіземіз.",
        },
        {
          title: "Спорттық және коммерциялық нысандардың әртүрлі түрлеріне арналған шешімдер",
          text: "Залдар, ареналар, мектептер және коммерциялық үй-жайлар.",
        },
      ],
    },
    collections: {
      eyebrow: "Коллекциялар",
      title: "Sportflor жұмыс істейтін желілер",
      note: "Taraflex, Taralay және Mural Revela — Gerflor өндірушісінің коллекциялары. Sportflor осы жабындарды жеткізеді және монтаж жасайды.",
      taraflex: "Спорт жабындары",
      taralay: "Коммерциялық жабындар",
      mural: "Қабырға жабындары",
      maker: "Өндіруші Gerflor",
    },
    projects: {
      eyebrow: "Нысандар",
      title: "Іске асырылған алаңдар",
      text: "Жабын төселген нысандардың фотосуреттері.",
      all: "Галереяны қарау",
    },
    process: {
      eyebrow: "Процесс",
      title: "Жұмыс қалай өтеді",
      steps: [
        { title: "Жобалау", text: "Нысанның міндеті мен жұмыс құрамын анықтаймыз." },
        { title: "Жабынды таңдау", text: "Үй-жайдың мақсатына сай коллекция таңдаймыз." },
        { title: "Жеткізу", text: "Жабынды нысанға жеткізуді ұйымдастырамыз." },
        { title: "Монтаж", text: "Жабынды дайындалған негізге төсейміз." },
        { title: "Нысанды тапсыру", text: "Дайын жабынды тапсырамыз." },
      ],
    },
    cta: {
      title: "Жаңа спорт нысанын немесе жабынды жаңартуды жоспарлап жүрсіз бе?",
      contact: "Бізбен байланысу",
      whatsapp: "WhatsApp-қа жазу",
    },
  },
  en: {
    hero: {
      eyebrow: "Sportflor",
      title: "Sports and commercial flooring of a new standard",
      text: "Supply, design and professional installation of flooring for sports and commercial facilities.",
      discuss: "Discuss a project",
      catalog: "Flooring catalog",
      imageAlt: "Professional volleyball court with sports flooring",
    },
    directions: {
      eyebrow: "Directions",
      title: "Three flooring types for different tasks",
      sport: "Sports flooring",
      floor: "Commercial floor coverings",
      wall: "Wall coverings",
      sportAlt: "Sports hall with a playing surface",
      floorAlt: "Samples of commercial floor coverings",
      wallAlt: "Wall covering in an interior",
    },
    about: {
      eyebrow: "About",
      title: "Sportflor takes a facility from the choice of system to installation",
      text: "Sportflor supplies professional flooring and delivers facilities as a complete project. From selecting the solution to installation and handover of the finished space.",
      imageAlt: "A completed sports hall",
    },
    why: {
      eyebrow: "Why Sportflor",
      title: "How we work on a facility",
      items: [
        {
          title: "Flooring selected for the facility",
          text: "We look at how the room will be used and propose a collection that fits.",
        },
        {
          title: "Professional supply",
          text: "We arrange delivery of sports, commercial and wall coverings to the site.",
        },
        {
          title: "Installation by specialists",
          text: "Installation is carried out by specialists in sports and commercial flooring.",
        },
        {
          title: "Project support",
          text: "We stay with the facility from the agreed solution through to completion.",
        },
        {
          title: "Solutions for different sports and commercial facilities",
          text: "Halls, arenas, schools and commercial rooms.",
        },
      ],
    },
    collections: {
      eyebrow: "Collections",
      title: "Ranges Sportflor works with",
      note: "Taraflex, Taralay and Mural Revela are collections by the manufacturer Gerflor. Sportflor supplies these coverings and carries out installation.",
      taraflex: "Sports flooring",
      taralay: "Commercial flooring",
      mural: "Wall coverings",
      maker: "Manufacturer Gerflor",
    },
    projects: {
      eyebrow: "Projects",
      title: "Completed venues",
      text: "Photographs of facilities where the flooring is already installed.",
      all: "View the gallery",
    },
    process: {
      eyebrow: "Process",
      title: "How the work proceeds",
      steps: [
        { title: "Design", text: "We define the task of the facility and the scope of work." },
        { title: "Flooring selection", text: "We choose a collection for how the room will be used." },
        { title: "Supply", text: "We arrange delivery of the flooring to the site." },
        { title: "Installation", text: "We install the covering on a prepared base." },
        { title: "Handover", text: "We hand over the finished floor." },
      ],
    },
    cta: {
      title: "Planning a new sports facility or a flooring renewal?",
      contact: "Contact us",
      whatsapp: "Message on WhatsApp",
    },
  },
};
