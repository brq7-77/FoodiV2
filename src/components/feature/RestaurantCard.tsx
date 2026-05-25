import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import type { Restaurant } from "@/mocks/restaurants";
import { getLocalizedName } from "@/mocks/restaurants";

interface RestaurantCardProps {
  restaurant: Restaurant;
}

const categoryIcons: Record<string, string> = {
  burger: "ri-restaurant-line",
  pizza: "ri-restaurant-2-line",
  shawarma: "ri-fire-line",
  sushi: "ri-restaurant-line",
  cafe: "ri-cup-line",
  grill: "ri-fire-line",
  sides: "ri-restaurant-2-line",
  drinks: "ri-cup-line",
  chicken_wings: "ri-fire-line",
  bowls: "ri-restaurant-line",
  noodles: "ri-restaurant-2-line",
  coffee: "ri-cup-line",
  bakery: "ri-cake-3-line",
  breakfast: "ri-sun-line",
  kebab: "ri-fire-line",
  salads: "ri-leaf-line",
};

export default function RestaurantCard({ restaurant }: RestaurantCardProps) {
  const { t, i18n } = useTranslation();
  const lang = i18n.language;

  const displayName = getLocalizedName(restaurant.name, lang);
  const catIcon = categoryIcons[restaurant.category] || "ri-restaurant-line";

  return (
    <div className="group relative bg-[#12121a] rounded-2xl overflow-hidden border border-white/[0.06] hover:border-[#9d7bff]/30 transition-all duration-500 hover:shadow-[0_0_30px_rgba(157,123,255,0.1)] hover:-translate-y-1">
      {/* Image */}
      <div className="relative h-48 md:h-52 overflow-hidden">
        <img
          src={restaurant.image}
          alt={displayName}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f]/80 via-transparent to-transparent" />

        {/* Category Badge */}
        <div className="absolute top-3 right-3 px-3 py-1.5 rounded-full bg-[#0a0a0f]/70 backdrop-blur-sm border border-white/[0.08] text-white text-xs font-medium flex items-center gap-1.5">
          <div className="w-3.5 h-3.5 flex items-center justify-center">
            <i className={`${catIcon} text-[#9d7bff]`} />
          </div>
          {t("category_" + restaurant.category)}
        </div>

        {/* Open Status */}
        {restaurant.isOpen && (
          <div className="absolute top-3 left-3 px-3 py-1.5 rounded-full bg-[#9d7bff]/20 backdrop-blur-sm border border-[#9d7bff]/30 text-[#c4aaff] text-xs font-medium flex items-center gap-1.5">
            <div className="w-3.5 h-3.5 flex items-center justify-center">
              <i className="ri-checkbox-circle-line text-[#b79fff] text-xs" />
            </div>
            <span className="w-1.5 h-1.5 rounded-full bg-[#b79fff] animate-pulse" />
            {t("restaurantOpen")}
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-4 md:p-5">
        <h3 className="text-white font-bold text-lg mb-2 group-hover:text-[#c4aaff] transition-colors duration-300">
          {displayName}
        </h3>

        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-1.5">
            <div className="w-4 h-4 flex items-center justify-center">
              <i className="ri-star-fill text-amber-400 text-xs" />
            </div>
            <span className="text-white text-sm font-medium">{restaurant.rating}</span>
            <span className="text-gray-500 text-xs">{t("rating")}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <div className="w-4 h-4 flex items-center justify-center">
              <i className="ri-time-line text-[#9d7bff] text-xs" />
            </div>
            <span className="text-gray-400 text-sm">{restaurant.deliveryTime} {t("deliveryTime")}</span>
          </div>
        </div>

        <Link
          to={`/restaurant/${restaurant.id}`}
          className="flex items-center justify-center gap-2 w-full text-center py-2.5 rounded-lg bg-[#9d7bff]/10 border border-[#9d7bff]/20 text-[#c4aaff] font-medium text-sm hover:bg-[#9d7bff] hover:text-white hover:border-[#9d7bff] hover:shadow-[0_0_20px_rgba(157,123,255,0.3)] transition-all duration-300"
        >
          <div className="w-4 h-4 flex items-center justify-center">
            <i className="ri-menu-search-line text-sm" />
          </div>
          {t("viewMenu")}
        </Link>
      </div>
    </div>
  );
}