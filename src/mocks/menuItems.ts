import type { LocalizedName } from "./restaurants";

export interface LocalizedDesc {
  en: string;
  tr: string;
  ar: string;
}

export interface MenuItem {
  id: string;
  restaurantId: string;
  name: LocalizedName;
  description: LocalizedDesc;
  price: number;
  image: string;
  category: string;
  isAvailable: boolean;
}

export const menuItems: MenuItem[] = [
  // Burger King (restaurantId: 1)
  {
    id: "m1",
    restaurantId: "1",
    name: { en: "Classic Burger", tr: "Klasik Burger", ar: "برجر كلاسيك" },
    description: {
      en: "Fresh beef patty with cheddar cheese, crisp lettuce, tomato, and our secret sauce on toasted brioche bun",
      tr: "Taze dana köftesi, cheddar peyniri, çıtır marul, domates ve özel sosumuz ile kızarmış brioche ekmeği",
      ar: "لحم بقري طازج مع جبنة شيدر، خس طازج، طماطم، وصوصنا السري على خبز بريوش محمص"
    },
    price: 2.5,
    image: "https://readdy.ai/api/search-image?query=Gourmet%20classic%20beef%20burger%20with%20melted%20cheddar%20cheese%2C%20fresh%20lettuce%2C%20tomato%2C%20and%20secret%20sauce%20on%20toasted%20brioche%20bun%2C%20dark%20background%20with%20dramatic%20lighting%2C%20professional%20food%20photography%2C%20steam%20rising%2C%20neon%20purple%20accent%20lights&width=400&height=300&seq=10&orientation=landscape",
    category: "burger",
    isAvailable: true,
  },
  {
    id: "m2",
    restaurantId: "1",
    name: { en: "Double Burger", tr: "Çift Katlı Burger", ar: "برجر دبل" },
    description: {
      en: "Two beef patties with double cheese, crispy bacon, and BBQ sauce",
      tr: "İki dana köftesi, çift peynir, çıtır pastırma ve barbekü sosu",
      ar: "قطعتان لحم بقري مع جبنة مزدوجة، بيكون مقرمش، وصوص باربيكيو"
    },
    price: 4.0,
    image: "https://readdy.ai/api/search-image?query=Double%20beef%20burger%20with%20double%20cheese%20and%20crispy%20bacon%2C%20barbeque%20sauce%20dripping%2C%20dark%20background%20with%20dramatic%20lighting%2C%20professional%20food%20photography%2C%20neon%20purple%20accent%20lights%2C%20premium%20restaurant%20style&width=400&height=300&seq=11&orientation=landscape",
    category: "burger",
    isAvailable: true,
  },
  {
    id: "m3",
    restaurantId: "1",
    name: { en: "Crispy Chicken Burger", tr: "Çıtır Tavuk Burger", ar: "برجر دجاج مقرمش" },
    description: {
      en: "Crispy fried chicken breast with special mayo and coleslaw",
      tr: "Çıtır kızarmış tavuk göğsü, özel mayonez ve lahana salatası",
      ar: "صدور دجاج مقلية مقرمشة مع مايونيز خاص وسلطة كول سلو"
    },
    price: 2.75,
    image: "https://readdy.ai/api/search-image?query=Crispy%20fried%20chicken%20burger%20with%20special%20mayonnaise%20and%20coleslaw%2C%20golden%20brown%20crispy%20coating%2C%20dark%20background%20with%20dramatic%20lighting%2C%20professional%20food%20photography%2C%20neon%20purple%20accent%20lights&width=400&height=300&seq=12&orientation=landscape",
    category: "burger",
    isAvailable: true,
  },
  {
    id: "m4",
    restaurantId: "1",
    name: { en: "French Fries", tr: "Patates Kızartması", ar: "بطاطس مقلية" },
    description: {
      en: "Golden crispy french fries with a sprinkle of sea salt",
      tr: "Deniz tuzu serpilmiş altın sarısı çıtır patates kızartması",
      ar: "بطاطس مقلية ذهبية مقرمشة مع رشة ملح البحر"
    },
    price: 1.0,
    image: "https://readdy.ai/api/search-image?query=Golden%20crispy%20french%20fries%20in%20a%20paper%20cone%2C%20sea%20salt%20sprinkled%2C%20dark%20background%20with%20dramatic%20lighting%2C%20professional%20food%20photography%2C%20neon%20purple%20accent%20lights%2C%20premium%20style&width=400&height=300&seq=13&orientation=landscape",
    category: "extras",
    isAvailable: true,
  },
  {
    id: "m5",
    restaurantId: "1",
    name: { en: "Cola", tr: "Kola", ar: "كولا" },
    description: {
      en: "Iced cola 330ml",
      tr: "Buzlu kola 330ml",
      ar: "كولا مثلجة 330 مل"
    },
    price: 0.5,
    image: "https://readdy.ai/api/search-image?query=Ice%20cold%20cola%20drink%20in%20glass%20bottle%20with%20condensation%20droplets%2C%20dark%20background%20with%20dramatic%20lighting%2C%20professional%20beverage%20photography%2C%20neon%20purple%20accent%20lights%2C%20refreshing%20drink&width=400&height=300&seq=14&orientation=landscape",
    category: "drinks",
    isAvailable: true,
  },

  // Pizza Hut (restaurantId: 2)
  {
    id: "m6",
    restaurantId: "2",
    name: { en: "Pepperoni Pizza", tr: "Pepperoni Pizza", ar: "بيتزا ببروني" },
    description: {
      en: "Fresh tomato sauce, mozzarella, spicy pepperoni, and oregano",
      tr: "Taze domates sosu, mozzarella, baharatlı pepperoni ve kekik",
      ar: "صلصة طماطم طازجة، موزاريلا، ببروني حار، وأوريغانو"
    },
    price: 3.5,
    image: "https://readdy.ai/api/search-image?query=Pepperoni%20pizza%20with%20melted%20mozzarella%2C%20fresh%20tomato%20sauce%2C%20and%20oregano%2C%20dark%20background%20with%20dramatic%20lighting%2C%20professional%20food%20photography%2C%20neon%20purple%20accent%20lights%2C%20premium%20italian%20style&width=400&height=300&seq=15&orientation=landscape",
    category: "pizza",
    isAvailable: true,
  },
  {
    id: "m7",
    restaurantId: "2",
    name: { en: "Margherita Pizza", tr: "Margarita Pizza", ar: "بيتزا مارغريتا" },
    description: {
      en: "Tomato sauce, fresh mozzarella, basil, and extra virgin olive oil",
      tr: "Domates sosu, taze mozzarella, fesleğen ve soğuk sıkım zeytinyağı",
      ar: "صلصة طماطم، موزاريلا طازجة، ريحان طازج، وزيت زيتون بكر"
    },
    price: 2.75,
    image: "https://readdy.ai/api/search-image?query=Margherita%20pizza%20with%20fresh%20mozzarella%2C%20tomato%20sauce%2C%20basil%20leaves%2C%20and%20olive%20oil%2C%20dark%20background%20with%20dramatic%20lighting%2C%20professional%20food%20photography%2C%20neon%20purple%20accent%20lights%2C%20authentic%20italian%20style&width=400&height=300&seq=16&orientation=landscape",
    category: "pizza",
    isAvailable: true,
  },
  {
    id: "m8",
    restaurantId: "2",
    name: { en: "Veggie Pizza", tr: "Sebzeli Pizza", ar: "بيتزا خضار" },
    description: {
      en: "Bell peppers, mushrooms, olives, onions, tomatoes, and mozzarella",
      tr: "Biber, mantar, zeytin, soğan, domates ve mozzarella peyniri",
      ar: "فلفل، مشروم، زيتون، بصل، طماطم، وجبنة موزاريلا"
    },
    price: 3.0,
    image: "https://readdy.ai/api/search-image?query=Vegetarian%20pizza%20with%20bell%20peppers%2C%20mushrooms%2C%20olives%2C%20onions%2C%20tomatoes%2C%20and%20mozzarella%20cheese%2C%20dark%20background%20with%20dramatic%20lighting%2C%20professional%20food%20photography%2C%20neon%20purple%20accent%20lights&width=400&height=300&seq=17&orientation=landscape",
    category: "pizza",
    isAvailable: true,
  },
  {
    id: "m9",
    restaurantId: "2",
    name: { en: "Chicken Wings", tr: "Tavuk Kanatları", ar: "أجنحة دجاج" },
    description: {
      en: "Grilled chicken wings with hot buffalo sauce",
      tr: "Baharatlı buffalo sosu ile ızgarada pişmiş tavuk kanatları",
      ar: "أجنحة دجاج مشوية مع صوص بافالو حار"
    },
    price: 2.5,
    image: "https://readdy.ai/api/search-image?query=Grilled%20chicken%20wings%20with%20buffalo%20hot%20sauce%2C%20dark%20background%20with%20dramatic%20lighting%2C%20professional%20food%20photography%2C%20neon%20purple%20accent%20lights%2C%20crispy%20golden%20wings&width=400&height=300&seq=18&orientation=landscape",
    category: "chicken_wings",
    isAvailable: true,
  },

  // Shawarma Al-Sham (restaurantId: 3)
  {
    id: "m10",
    restaurantId: "3",
    name: { en: "Chicken Shawarma", tr: "Tavuk Döner", ar: "شاورما دجاج" },
    description: {
      en: "Spiced grilled chicken with garlic sauce and pickles",
      tr: "Baharatlı ızgarada pişmiş tavuk, sarımsak sosu ve turşu",
      ar: "لحم دجاج متبل مشوي على الفحم مع ثومية و pickles"
    },
    price: 1.5,
    image: "https://readdy.ai/api/search-image?query=Chicken%20shawarma%20wrap%20with%20garlic%20sauce%20and%20pickles%2C%20fresh%20pita%20bread%2C%20dark%20background%20with%20dramatic%20lighting%2C%20professional%20food%20photography%2C%20neon%20purple%20accent%20lights%2C%20middle%20eastern%20style&width=400&height=300&seq=19&orientation=landscape",
    category: "shawarma",
    isAvailable: true,
  },
  {
    id: "m11",
    restaurantId: "3",
    name: { en: "Meat Shawarma", tr: "Et Döner", ar: "شاورما لحم" },
    description: {
      en: "Grilled lamb with tahini and Aleppo pistachios",
      tr: "Tahin ve Halep fıstığı ile ızgarada pişmiş kuzu eti",
      ar: "لحم غنم مشوي مع طحينة وفستق حلبي"
    },
    price: 2.0,
    image: "https://readdy.ai/api/search-image?query=Meat%20shawarma%20wrap%20with%20tahini%20sauce%20and%20Aleppo%20pistachios%2C%20fresh%20pita%20bread%2C%20dark%20background%20with%20dramatic%20lighting%2C%20professional%20food%20photography%2C%20neon%20purple%20accent%20lights%2C%20middle%20eastern%20style&width=400&height=300&seq=20&orientation=landscape",
    category: "shawarma",
    isAvailable: true,
  },
  {
    id: "m12",
    restaurantId: "3",
    name: { en: "Chicken Shawarma Plate", tr: "Tavuk Döner Tabağı", ar: "صحن شاورما دجاج" },
    description: {
      en: "Grilled chicken on basmati rice with garlic sauce, salad, and bread",
      tr: "Basmati pirinci üzerinde ızgarada tavuk, sarımsak sosu, salata ve ekmek",
      ar: "لحم دجاج مشوي على رز بسمتي مع ثومية، سلطة، وخبز"
    },
    price: 3.0,
    image: "https://readdy.ai/api/search-image?query=Chicken%20shawarma%20plate%20on%20basmati%20rice%20with%20garlic%20sauce%2C%20salad%2C%20and%20bread%2C%20dark%20background%20with%20dramatic%20lighting%2C%20professional%20food%20photography%2C%20neon%20purple%20accent%20lights%2C%20middle%20eastern%20style&width=400&height=300&seq=21&orientation=landscape",
    category: "bowls",
    isAvailable: true,
  },
  {
    id: "m13",
    restaurantId: "3",
    name: { en: "Shawarma Fattah", tr: "Döner Fattah", ar: "فتة شاورما" },
    description: {
      en: "Fried bread with rice, shawarma meat, garlic sauce, and pistachio mix",
      tr: "Kızarmış ekmek, pirinç, döner eti, sarımsak sosu ve fıstık karışımı",
      ar: "خبز مقلي مع رز، لحم شاورما، ثومية، وخلطة الفستق"
    },
    price: 3.5,
    image: "https://readdy.ai/api/search-image?query=Shawarma%20fattah%20dish%20with%20fried%20bread%2C%20rice%2C%20shawarma%20meat%2C%20garlic%20sauce%2C%20and%20pistachio%20mix%2C%20dark%20background%20with%20dramatic%20lighting%2C%20professional%20food%20photography%2C%20neon%20purple%20accent%20lights%2C%20middle%20eastern%20style&width=400&height=300&seq=22&orientation=landscape",
    category: "bowls",
    isAvailable: true,
  },

  // Sushi Master (restaurantId: 4)
  {
    id: "m14",
    restaurantId: "4",
    name: { en: "California Roll", tr: "Kaliforniya Rulosu", ar: "كاليفورنيا رول" },
    description: {
      en: "Salmon, avocado, cucumber, and Japanese mayonnaise",
      tr: "Somon, avokado, salatalık ve Japon mayonezi",
      ar: "سلمون، أفوكادو، خيار، ومايونيز الياباني"
    },
    price: 3.5,
    image: "https://readdy.ai/api/search-image?query=California%20sushi%20roll%20with%20salmon%2C%20avocado%2C%20cucumber%2C%20and%20japanese%20mayonnaise%2C%20dark%20background%20with%20dramatic%20lighting%2C%20professional%20food%20photography%2C%20neon%20purple%20accent%20lights%2C%20premium%20japanese%20style&width=400&height=300&seq=23&orientation=landscape",
    category: "sushi",
    isAvailable: true,
  },
  {
    id: "m15",
    restaurantId: "4",
    name: { en: "Tuna Tartare", tr: "Ton Balığı Tartar", ar: "تونا تارتار" },
    description: {
      en: "Fresh chopped tuna with sesame sauce and avocado",
      tr: "Susam sosu ve avokado ile taze doğranmış ton balığı",
      ar: "تونا طازجة مقطعة مع صوص السمسم وأفوكادو"
    },
    price: 4.0,
    image: "https://readdy.ai/api/search-image?query=Fresh%20tuna%20tartare%20with%20sesame%20sauce%20and%20avocado%2C%20dark%20background%20with%20dramatic%20lighting%2C%20professional%20food%20photography%2C%20neon%20purple%20accent%20lights%2C%20premium%20japanese%20style&width=400&height=300&seq=24&orientation=landscape",
    category: "sushi",
    isAvailable: true,
  },
  {
    id: "m16",
    restaurantId: "4",
    name: { en: "Chicken Ramen", tr: "Tavuk Ramen", ar: "رمين دجاج" },
    description: {
      en: "Japanese noodle soup with chicken, egg, and vegetables",
      tr: "Tavuk, yumurta ve sebzeler ile Japon noodle çorbası",
      ar: "شوربة نودلز يابانية مع دجاج، بيض، وخضار"
    },
    price: 3.0,
    image: "https://readdy.ai/api/search-image?query=Japanese%20ramen%20noodle%20soup%20with%20chicken%2C%20egg%2C%20and%20vegetables%2C%20dark%20background%20with%20dramatic%20lighting%2C%20professional%20food%20photography%2C%20neon%20purple%20accent%20lights%2C%20steam%20rising%2C%20authentic%20style&width=400&height=300&seq=25&orientation=landscape",
    category: "noodles",
    isAvailable: true,
  },

  // Cafe Latte (restaurantId: 5)
  {
    id: "m17",
    restaurantId: "5",
    name: { en: "Latte", tr: "Latte", ar: "لاتيه" },
    description: {
      en: "Double espresso with steamed milk and smooth foam",
      tr: "Buharlanmış süt ve yumuşak köpük ile çift espresso",
      ar: "إسبريسو مزدوج مع حليب بخاري ورغوة ناعمة"
    },
    price: 1.5,
    image: "https://readdy.ai/api/search-image?query=Latte%20coffee%20with%20beautiful%20latte%20art%2C%20steamed%20milk%20and%20smooth%20foam%2C%20ceramic%20cup%20on%20dark%20background%20with%20dramatic%20lighting%2C%20professional%20cafe%20photography%2C%20neon%20purple%20accent%20lights&width=400&height=300&seq=26&orientation=landscape",
    category: "coffee",
    isAvailable: true,
  },
  {
    id: "m18",
    restaurantId: "5",
    name: { en: "Butter Croissant", tr: "Tereyağlı Kruvasan", ar: "كرواسن بالزبدة" },
    description: {
      en: "Fresh flaky French croissant with pure French butter",
      tr: "Saf Fransız tereyağı ile taze gevrek Fransız kruvasanı",
      ar: "كرواسن فرنسي طازخ هش بزبدة فرنسية نقية"
    },
    price: 1.25,
    image: "https://readdy.ai/api/search-image?query=Fresh%20flaky%20butter%20croissant%2C%20golden%20brown%20layers%2C%20dark%20background%20with%20dramatic%20lighting%2C%20professional%20bakery%20photography%2C%20neon%20purple%20accent%20lights%2C%20french%20pastry%20style&width=400&height=300&seq=27&orientation=landscape",
    category: "bakery",
    isAvailable: true,
  },
  {
    id: "m19",
    restaurantId: "5",
    name: { en: "Pancakes", tr: "Pankek", ar: "بان كيك" },
    description: {
      en: "Fluffy pancakes with maple syrup and fresh berries",
      tr: "Akçaağaç şurubu ve taze meyveler ile yumuşak pankekler",
      ar: "بان كيك فلافي مع شراب القيقب وتوت طازج"
    },
    price: 2.5,
    image: "https://readdy.ai/api/search-image?query=Fluffy%20pancakes%20with%20maple%20syrup%20and%20fresh%20berries%2C%20dark%20background%20with%20dramatic%20lighting%2C%20professional%20food%20photography%2C%20neon%20purple%20accent%20lights%2C%20breakfast%20style&width=400&height=300&seq=28&orientation=landscape",
    category: "breakfast",
    isAvailable: true,
  },

  // Mashawi Al-Sultan (restaurantId: 6)
  {
    id: "m20",
    restaurantId: "6",
    name: { en: "Chicken Kebab", tr: "Tavuk Kebabı", ar: "كباب دجاج" },
    description: {
      en: "Grilled spiced chicken pieces with peppers and onions",
      tr: "Biber ve soğan ile ızgarada baharatlı tavuk parçaları",
      ar: "قطع دجاج متبلة مشوية مع فلفل وبصل"
    },
    price: 2.5,
    image: "https://readdy.ai/api/search-image?query=Grilled%20chicken%20kebab%20skewers%20with%20peppers%20and%20onions%2C%20char%20marks%2C%20dark%20background%20with%20dramatic%20lighting%2C%20professional%20food%20photography%2C%20neon%20purple%20accent%20lights%2C%20smoke%20rising%2C%20middle%20eastern%20style&width=400&height=300&seq=29&orientation=landscape",
    category: "kebab",
    isAvailable: true,
  },
  {
    id: "m21",
    restaurantId: "6",
    name: { en: "Lamb Kebab", tr: "Kuzu Kebabı", ar: "كباب لحم" },
    description: {
      en: "Fresh lamb seasoned with Arabic spices",
      tr: "Arap baharatları ile marine edilmiş taze kuzu eti",
      ar: "لحم غنم طازج متبل بالبهارات العربية"
    },
    price: 3.5,
    image: "https://readdy.ai/api/search-image?query=Grilled%20lamb%20kebab%20skewers%20with%20arabic%20spices%2C%20char%20marks%2C%20dark%20background%20with%20dramatic%20lighting%2C%20professional%20food%20photography%2C%20neon%20purple%20accent%20lights%2C%20smoke%20rising%2C%20middle%20eastern%20style&width=400&height=300&seq=30&orientation=landscape",
    category: "kebab",
    isAvailable: true,
  },
  {
    id: "m22",
    restaurantId: "6",
    name: { en: "Tabbouleh Salad", tr: "Tabule Salatası", ar: "تبولة" },
    description: {
      en: "Fresh parsley and bulgur salad with lemon dressing",
      tr: "Taze maydanoz ve bulgur salatası, limon sosu ile",
      ar: "سلطة تبولة بالبقدونس الطازج والبرغل مع صلصة الليمون"
    },
    price: 1.5,
    image: "https://readdy.ai/api/search-image?query=Fresh%20tabbouleh%20salad%20with%20parsley%2C%20bulgur%2C%20and%20lemon%20dressing%2C%20dark%20background%20with%20dramatic%20lighting%2C%20professional%20food%20photography%2C%20neon%20purple%20accent%20lights%2C%20middle%20eastern%20style&width=400&height=300&seq=31&orientation=landscape",
    category: "salads",
    isAvailable: true,
  },
  {
    id: "m23",
    restaurantId: "6",
    name: { en: "Mixed Grill Platter", tr: "Karışık Izgara Tabağı", ar: "مشكل مشاوي" },
    description: {
      en: "Kebab, kofta, shish tawook, lamb chops, with rice and tahini",
      tr: "Kebap, köfte, şiş tavuk, kuzu pirzola, pilav ve tahin ile",
      ar: "كباب، كفتة، شيش طاووق، ريش غنم، مع رز وطحينة"
    },
    price: 6.0,
    image: "https://readdy.ai/api/search-image?query=Mixed%20grill%20platter%20with%20kebab%2C%20kofta%2C%20shish%20tawook%2C%20lamb%20chops%2C%20rice%20and%20tahini%2C%20dark%20background%20with%20dramatic%20lighting%2C%20professional%20food%20photography%2C%20neon%20purple%20accent%20lights%2C%20smoke%20rising%2C%20middle%20eastern%20style&width=400&height=300&seq=32&orientation=landscape",
    category: "bowls",
    isAvailable: true,
  },
];

export function getLocalizedDesc(desc: LocalizedDesc, lang: string): string {
  if (lang === "ar" && desc.ar) return desc.ar;
  if (lang === "tr" && desc.tr) return desc.tr;
  return desc.en;
}