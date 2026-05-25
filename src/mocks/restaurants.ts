export interface LocalizedName {
  en: string;
  tr: string;
  ar: string;
}

export interface Restaurant {
  id: string;
  name: LocalizedName;
  image: string;
  rating: number;
  deliveryTime: string;
  category: string;
  isOpen: boolean;
}

export const restaurants: Restaurant[] = [
  {
    id: "1",
    name: { en: "Burger King", tr: "Burger King", ar: "برجر كينغ" },
    image: "https://readdy.ai/api/search-image?query=Premium%20dark%20burger%20restaurant%20food%20photography%2C%20juicy%20gourmet%20burger%20with%20dramatic%20lighting%2C%20black%20background%2C%20neon%20purple%20accent%20lights%2C%20professional%20food%20styling%2C%20steam%20rising%2C%20high%20end%20restaurant%20aesthetic&width=600&height=400&seq=1&orientation=landscape",
    rating: 4.8,
    deliveryTime: "25-35",
    category: "burger",
    isOpen: true,
  },
  {
    id: "2",
    name: { en: "Pizza Hut", tr: "Pizza Hut", ar: "بيتزا هت" },
    image: "https://readdy.ai/api/search-image?query=Artisan%20pizza%20photography%20on%20dark%20background%2C%20freshly%20baked%20pizza%20with%20melted%20cheese%20and%20pepperoni%2C%20dramatic%20lighting%2C%20neon%20purple%20glow%2C%20professional%20food%20photography%2C%20black%20stone%20surface&width=600&height=400&seq=2&orientation=landscape",
    rating: 4.6,
    deliveryTime: "30-40",
    category: "pizza",
    isOpen: true,
  },
  {
    id: "3",
    name: { en: "Shawarma Al-Sham", tr: "Şam Döner", ar: "شاورما الشام" },
    image: "https://readdy.ai/api/search-image?query=Premium%20shawarma%20platter%20photography%2C%20sliced%20grilled%20meat%20with%20fresh%20vegetables%20and%20tahini%20sauce%2C%20dark%20elegant%20background%2C%20neon%20purple%20accent%20lighting%2C%20professional%20middle%20eastern%20food%20styling&width=600&height=400&seq=3&orientation=landscape",
    rating: 4.9,
    deliveryTime: "20-30",
    category: "shawarma",
    isOpen: true,
  },
  {
    id: "4",
    name: { en: "Sushi Master", tr: "Sushi Ustası", ar: "سوشي ماستر" },
    image: "https://readdy.ai/api/search-image?query=Premium%20sushi%20platter%20photography%20on%20black%20background%2C%20fresh%20salmon%20and%20tuna%20sushi%20rolls%20with%20ginger%20and%20wasabi%2C%20dramatic%20lighting%2C%20neon%20purple%20glow%2C%20high%20end%20japanese%20restaurant%20aesthetic&width=600&height=400&seq=4&orientation=landscape",
    rating: 4.7,
    deliveryTime: "35-45",
    category: "sushi",
    isOpen: true,
  },
  {
    id: "5",
    name: { en: "Cafe Latte", tr: "Cafe Latte", ar: "كافيه لاتيه" },
    image: "https://readdy.ai/api/search-image?query=Premium%20cafe%20food%20photography%2C%20beautiful%20latte%20art%20with%20croissant%20and%20breakfast%20plate%20on%20dark%20wooden%20table%2C%20neon%20purple%20ambient%20lighting%2C%20dramatic%20contrast%2C%20modern%20cafe%20aesthetic%2C%20black%20background&width=600&height=400&seq=5&orientation=landscape",
    rating: 4.5,
    deliveryTime: "15-25",
    category: "cafe",
    isOpen: true,
  },
  {
    id: "6",
    name: { en: "Mashawi Al-Sultan", tr: "Sultan Izgara", ar: "مشاوي السلطان" },
    image: "https://readdy.ai/api/search-image?query=Premium%20grilled%20meat%20platter%20photography%2C%20mixed%20grill%20with%20kebabs%20and%20lamb%20chops%20on%20dark%20slate%20plate%2C%20smoke%20rising%2C%20neon%20purple%20accent%20lights%2C%20dramatic%20lighting%2C%20middle%20eastern%20restaurant%20aesthetic&width=600&height=400&seq=6&orientation=landscape",
    rating: 4.8,
    deliveryTime: "30-40",
    category: "grill",
    isOpen: true,
  },
];

export const heroBackground = "https://readdy.ai/api/search-image?query=Abstract%20dark%20futuristic%20background%20with%20subtle%20purple%20glow%20and%20geometric%20patterns%2C%20deep%20black%20void%20with%20neon%20purple%20light%20accents%2C%20minimal%20modern%20digital%20art%2C%20smooth%20gradient%2C%20no%20text%2C%20no%20objects%2C%20just%20abstract%20shapes&width=1400&height=800&seq=7&orientation=landscape";

export function getLocalizedName(name: LocalizedName, lang: string): string {
  if (lang === "ar" && name.ar) return name.ar;
  if (lang === "tr" && name.tr) return name.tr;
  return name.en;
}