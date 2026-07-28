export const COMPANY = {
  name: "ПотолкиПрофи",
  tagline: "Натяжные потолки в Минске и области под ключ",
  phone: "+375 (29) 123-45-67",
  phoneRaw: "+375291234567",
  unp: "193123456",
  legalAddress: "г. Минск, ул. Примерная, д. 1, офис 10",
  fullName: 'ООО "ПотолкиПрофи"',
};

export const HERO = {
  title: "Качественные натяжные потолки от 25 BYN/м² с установкой за 1 день",
  subtitle:
    "Безопасный монтаж, гарантия 15 лет по договору. Скидка 15% новоселам в этом месяце!",
  bgImage:
    "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1920&q=80",
};

export const CEILING_TYPES = [
  { id: "matte", label: "Матовый", pricePerM2: 25, description: "Классика, без бликов" },
  { id: "glossy", label: "Глянцевый", pricePerM2: 30, description: "Визуально увеличивают пространство" },
  { id: "satin", label: "Сатиновый", pricePerM2: 30, description: "Мягкий перламутровый блеск" },
  { id: "fabric", label: "Тканевый", pricePerM2: 50, description: "Экологичные, дышащие" },
  { id: "photo", label: "С фотопечатью", pricePerM2: 65, description: "Уникальный дизайн" },
] as const;

export const CITIES = [
  { id: "minsk", label: "Минск", coefficient: 1.0 },
  { id: "minsk-oblast", label: "Минская область", coefficient: 1.15 },
  { id: "other", label: "Другие города РБ", coefficient: 1.2 },
] as const;

export const LIGHT_PRICE = 15;

export const CATALOG_ITEMS = [
  {
    title: "Матовые потолки",
    price: "25",
    description: "Классическое решение без бликов. Идеально для спальни и гостиной.",
    image: "https://images.unsplash.com/photo-1618220179428-22790b461013?auto=format&fit=crop&w=600&q=80",
  },
  {
    title: "Глянцевые потолки",
    price: "30",
    description: "Зеркальный блеск визуально увеличивает пространство. Для ванной и коридора.",
    image: "https://images.unsplash.com/photo-1616137466211-f939a420be84?auto=format&fit=crop&w=600&q=80",
  },
  {
    title: "Парящие потолки",
    price: "45",
    description: "Эффект парения с LED-подсветкой по периметру. Современный стиль.",
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=600&q=80",
  },
  {
    title: "Световые линии",
    price: "55",
    description: "Линейное освещение в потолке. Минимализм и функциональность.",
    image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=600&q=80",
  },
  {
    title: "Тканевые потолки",
    price: "50",
    description: "Экологичные, дышащие, без запаха. Для детских и спален.",
    image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=600&q=80",
  },
];

export const ADVANTAGES = [
  {
    title: "Безопасный монтаж",
    description: "Взрывобезопасные композитные баллоны. Без открытого огня.",
    icon: "ShieldCheck",
  },
  {
    title: "Защита от затопления",
    description: "Выдерживают до 100 л воды на м². Соседи сверху не страшны.",
    icon: "Droplets",
  },
  {
    title: "Чистая установка",
    description: "Используем перфораторы с пылесосом. Никакой пыли и грязи.",
    icon: "Sparkles",
  },
  {
    title: "Честная гарантия",
    description: "15 лет по договору. Все обязательства закреплены юридически.",
    icon: "FileText",
  },
];

export const PORTFOLIO_ITEMS = [
  { city: "г. Минск", address: "ул. Притыцкого", area: "45 м²", time: "4 часа", image: "https://images.unsplash.com/photo-1493809842364-78817add7ffb?auto=format&fit=crop&w=600&q=80" },
  { city: "г. Минск", address: "пр. Независимости", area: "62 м²", time: "5 часов", image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=600&q=80" },
  { city: "г. Брест", address: "ул. Московская", area: "38 м²", time: "3 часа", image: "https://images.unsplash.com/photo-1600573472550-8090b5e0745e?auto=format&fit=crop&w=600&q=80" },
  { city: "г. Гомель", address: "ул. Советская", area: "51 м²", time: "4 часа", image: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=600&q=80" },
  { city: "г. Могилев", address: "ул. Ленинская", area: "70 м²", time: "6 часов", image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=600&q=80" },
  { city: "г. Минск", address: "ул. Немига", area: "33 м²", time: "3 часа", image: "https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&w=600&q=80" },
];

export const STEPS = [
  { step: 1, title: "Заявка или звонок", description: "Оставьте заявку на сайте или позвоните нам" },
  { step: 2, title: "Бесплатный замер", description: "Выезд с образцами в удобное время" },
  { step: 3, title: "Монтаж за 1 день", description: "Изготовление и установка в течение дня" },
  { step: 4, title: "Уборка и оплата", description: "Убираем за собой, вы принимаете работу" },
];

export const PHONE_REGEX = /^\+375 \((29|33|44|25)\) \d{3}-\d{2}-\d{2}$/;

export const ADVANTAGE_STATS = [
  { value: 15, suffix: "+", label: "Лет на рынке" },
  { value: 2500, suffix: "+", label: "Установленных потолков" },
  { value: 100, suffix: "%", label: "Гарантия качества" },
  { value: 15, suffix: " лет", label: "Гарантия по договору" },
];
