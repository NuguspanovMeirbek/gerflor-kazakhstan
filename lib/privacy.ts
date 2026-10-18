import type { Locale } from "@/lib/i18n/types";

export type PrivacyBlock = {
  ru: string;
  kk: string;
  en: string;
};

export function privacyCopy(block: PrivacyBlock, locale: Locale) {
  return block[locale];
}

export const privacyMeta = {
  effectiveDate: "01.01.2026",
  intro: {
    ru: "Настоящая Политика конфиденциальности регулирует порядок сбора, обработки, хранения и защиты персональных данных пользователей веб-сайта ТОО «Astana Sport Line» — эксклюзивного дистрибьютора Gerflor в Республике Казахстан, в соответствии с Законом РК от 21 мая 2013 года № 94-V «О персональных данных и их защите».",
    kk: "Осы Құпиялылық саясаты «Дербес деректер және оларды қорғау туралы» Қазақстан Республикасының 2013 жылғы 21 мамырдағы № 94-V Заңына сәйкес, Қазақстан Республикасындағы Gerflor эксклюзивті дистрибьюторы — «Astana Sport Line» ЖШС веб-сайтын пайдаланушылардың дербес деректерін жинау, өңдеу, сақтау және қорғау тәртібін реттейді.",
    en: "This Privacy Policy governs the collection, processing, storage and protection of personal data of users of the website of LLP “Astana Sport Line”, exclusive Gerflor distributor in the Republic of Kazakhstan, in accordance with the Law of the Republic of Kazakhstan dated 21 May 2013 No. 94-V “On Personal Data and Their Protection”.",
  },
} as const;

export const privacySections: {
  title: PrivacyBlock;
  items: PrivacyBlock[];
}[] = [
  {
    title: {
      ru: "1. Общие положения",
      kk: "1. Жалпы ережелер",
      en: "1. General provisions",
    },
    items: [
      {
        ru: "1.1. Настоящая Политика конфиденциальности (далее — «Политика») определена ТОО «Astana Sport Line» (БИН 161140020874) и применяется ко всей информации, которую Оператор может получить о Пользователе во время использования веб-сайта.",
        kk: "1.1. Осы Құпиялылық саясаты (бұдан әрі — «Саясат») «Astana Sport Line» ЖШС (БСН 161140020874) тарапынан белгіленген және Оператордың пайдаланушы веб-сайтты пайдалану кезінде ол туралы ала алатын барлық ақпаратына қолданылады.",
        en: "1.1. This Privacy Policy (the “Policy”) is established by LLP “Astana Sport Line” (BIN 161140020874) and applies to all information the Operator may obtain about the User while using the website.",
      },
      {
        ru: "1.2. Использование сервисов и обратных форм сайта означает безоговорочное согласие Пользователя с настоящей Политикой и указанными в ней условиями обработки его персональных данных.",
        kk: "1.2. Сайттың сервистері мен кері байланыс нысандарын пайдалану Пайдаланушының осы Саясатпен және онда көрсетілген дербес деректерін өңдеу шарттарымен сөзсіз келісуін білдіреді.",
        en: "1.2. Use of the website services and enquiry forms constitutes the User’s unconditional consent to this Policy and the personal-data processing terms set out herein.",
      },
      {
        ru: "1.3. В случае несогласия с условиями Политики Пользователь должен прекратить использование сайта.",
        kk: "1.3. Саясат шарттарымен келіспеген жағдайда Пайдаланушы сайтты пайдалануды тоқтатуы тиіс.",
        en: "1.3. If the User disagrees with the Policy, the User must stop using the website.",
      },
    ],
  },
  {
    title: {
      ru: "2. Состав собираемых персональных данных",
      kk: "2. Жиналатын дербес деректердің құрамы",
      en: "2. Personal data collected",
    },
    items: [
      {
        ru: "2.1. Персональные данные, разрешённые к обработке в рамках Политики, предоставляются Пользователем путём заполнения форм на сайте и включают в себя: ФИО, номер телефона, адрес электронной почты, название компании/организации, должность и информацию о строительном/спортивном объекте.",
        kk: "2.1. Осы Саясат шеңберінде өңдеуге рұқсат етілген дербес деректерді Пайдаланушы сайттағы нысандарды толтыру арқылы ұсынады және мыналарды қамтиды: Т.А.Ә., телефон нөмірі, электрондық пошта мекенжайы, компания/ұйым атауы, лауазымы және құрылыс/спорт нысаны туралы ақпарат.",
        en: "2.1. Personal data processed under this Policy is provided by the User via website forms and may include: full name, phone number, email address, company/organisation name, position, and information about a construction or sports facility.",
      },
      {
        ru: "2.2. Автоматически собираемые данные при посещении сайта: IP-адрес, данные файлов cookies, информация о браузере, технические характеристики оборудования и время доступа.",
        kk: "2.2. Сайтқа кірген кезде автоматты түрде жиналатын деректер: IP-мекенжай, cookies файлдарының деректері, браузер туралы ақпарат, жабдықтың техникалық сипаттамалары және кіру уақыты.",
        en: "2.2. Data collected automatically when visiting the site: IP address, cookies, browser information, device technical characteristics and access time.",
      },
    ],
  },
  {
    title: {
      ru: "3. Цели сбора и обработки данных",
      kk: "3. Деректерді жинау және өңдеу мақсаттары",
      en: "3. Purposes of collection and processing",
    },
    items: [
      {
        ru: "3.1. Предоставление коммерческих предложений, спецификаций и технических расчетов по покрытиям Gerflor.",
        kk: "3.1. Gerflor жабындары бойынша коммерциялық ұсыныстарды, спецификацияларды және техникалық есептеулерді ұсыну.",
        en: "3.1. Providing commercial offers, specifications and technical calculations for Gerflor flooring.",
      },
      {
        ru: "3.2. Консультирование инженерами и специалистами компании по вопросам поставок, укладки и шеф-монтажа.",
        kk: "3.2. Жеткізу, төсеу және шеф-монтаждау мәселелері бойынша компания инженерлері мен мамандарының кеңес беруі.",
        en: "3.2. Advice from the company’s engineers and specialists on supply, installation and supervised laying.",
      },
      {
        ru: "3.3. Заключение и исполнение договоров купли-продажи и подрядных работ.",
        kk: "3.3. Сату-сатып алу және мердігерлік жұмыстар шарттарын жасасу және орындау.",
        en: "3.3. Entering into and performing sale and contracting agreements.",
      },
      {
        ru: "3.4. Отправка образцов продукции и каталогов по территории Республики Казахстан.",
        kk: "3.4. Қазақстан Республикасының аумағы бойынша өнім үлгілері мен каталогтарды жіберу.",
        en: "3.4. Sending product samples and catalogues within the Republic of Kazakhstan.",
      },
    ],
  },
  {
    title: {
      ru: "4. Порядок и сроки обработки и хранения",
      kk: "4. Өңдеу және сақтау тәртібі мен мерзімдері",
      en: "4. Processing and storage terms",
    },
    items: [
      {
        ru: "4.1. Обработка персональных данных осуществляется с использованием средств автоматизации или без них в течение срока, необходимого для достижения целей обработки.",
        kk: "4.1. Дербес деректерді өңдеу өңдеу мақсаттарына жету үшін қажетті мерзім ішінде автоматтандыру құралдарын пайдалану арқылы немесе оларсыз жүзеге асырылады.",
        en: "4.1. Personal data is processed with or without automated means for as long as needed to achieve the processing purposes.",
      },
      {
        ru: "4.2. Оператор принимает необходимые организационные и технические меры для защиты персональных данных от неправомерного или случайного доступа, уничтожения, изменения, блокирования и копирования.",
        kk: "4.2. Оператор дербес деректерді заңсыз немесе кездейсоқ кіруден, жоюдан, өзгертуден, бұғаттаудан және көшіруден қорғау үшін қажетті ұйымдастырушылық және техникалық шараларды қабылдайды.",
        en: "4.2. The Operator takes organisational and technical measures to protect personal data against unlawful or accidental access, destruction, alteration, blocking and copying.",
      },
      {
        ru: "4.3. Персональные данные не передаются третьим лицам, за исключением случаев, предусмотренных законодательством РК или необходимых для исполнения договора (доставка, монтаж).",
        kk: "4.3. Дербес деректер ҚР заңнамасында көзделген немесе шартты орындау үшін қажетті (жеткізу, монтаждау) жағдайларды қоспағанда, үшінші тұлғаларға берілмейді.",
        en: "4.3. Personal data is not transferred to third parties except where required by Kazakhstan law or necessary to perform a contract (delivery, installation).",
      },
    ],
  },
  {
    title: {
      ru: "5. Права пользователя",
      kk: "5. Пайдаланушының құқықтары",
      en: "5. User rights",
    },
    items: [
      {
        ru: "5.1. Пользователь имеет право на получение информации, касающейся обработки его персональных данных.",
        kk: "5.1. Пайдаланушы өзінің дербес деректерін өңдеуге қатысты ақпаратты алуға құқылы.",
        en: "5.1. The User has the right to obtain information about the processing of their personal data.",
      },
      {
        ru: "5.2. Пользователь вправе требовать уточнения, блокирования или уничтожения своих персональных данных в случае, если они являются неполными, устаревшими, неточными или незаконно полученными.",
        kk: "5.2. Пайдаланушы өзінің дербес деректері толық емес, ескірген, дәл емес немесе заңсыз алынған жағдайда оларды нақтылауды, бұғаттауды немесе жоюды талап етуге құқылы.",
        en: "5.2. The User may request rectification, blocking or destruction of their personal data if it is incomplete, outdated, inaccurate or obtained unlawfully.",
      },
      {
        ru: "5.3. Отзыв согласия на обработку персональных данных осуществляется путем направления письменного заявления на электронную почту Оператора.",
        kk: "5.3. Дербес деректерді өңдеуге келісімді кері қайтарып алу Оператордың электрондық поштасына жазбаша өтініш жіберу арқылы жүзеге асырылады.",
        en: "5.3. Consent to processing may be withdrawn by sending a written request to the Operator’s email address.",
      },
    ],
  },
];

export const operatorRequisites = {
  title: {
    ru: "6. Реквизиты оператора",
    kk: "6. Оператордың деректемелері",
    en: "6. Operator details",
  } satisfies PrivacyBlock,
  ru: [
    "ТОО «Astana Sport Line»",
    "БИН: 161140020874",
    "Юр. адрес: РК, г. Астана, пр. Кабанбай батыра, 60а/5",
    "ИИК: KZ4696503F0011968284 в АО «ForteBank»",
    "БИК: IRTYKZKA",
    "Директор: Нугуспанов Мейрбек Мусабекович",
  ],
  kk: [
    "«Astana Sport Line» ЖШС",
    "БСН: 161140020874",
    "Заңды мекенжайы: ҚР, Астана қ., Қабанбай батыр даңғылы, 60а/5",
    "ЖСК (ИИК): KZ4696503F0011968284 «ForteBank» АҚ",
    "БИК: IRTYKZKA",
    "Директор: Нуғуспанов Мейірбек Мұсабекұлы",
  ],
  en: [
    "LLP “Astana Sport Line”",
    "BIN: 161140020874",
    "Legal address: RK, Astana, Kabanbay Batyr Ave. 60a/5",
    "IIC: KZ4696503F0011968284 at ForteBank JSC",
    "BIC: IRTYKZKA",
    "Director: Nuguspanov Meirbek Musabekovich",
  ],
};
