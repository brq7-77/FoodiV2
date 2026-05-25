import { useState, useMemo } from "react";
import { useTranslation } from "react-i18next";
import Header from "@/components/feature/Header";
import Footer from "@/components/feature/Footer";
import RestaurantCard from "@/components/feature/RestaurantCard";
import { restaurants } from "@/mocks/restaurants";

export default function Home() {
  const { t, i18n } = useTranslation();
  const [searchQuery, setSearchQuery] = useState("");
  const lang = i18n.language;

  const filteredRestaurants = useMemo(() => {
    if (!searchQuery.trim()) return restaurants;
    const q = searchQuery.toLowerCase();
    return restaurants.filter((r) => {
      const nameMatch =
        r.name.en.toLowerCase().includes(q) ||
        r.name.tr.toLowerCase().includes(q) ||
        r.name.ar.toLowerCase().includes(q);
      const catMatch = t("category_" + r.category).toLowerCase().includes(q);
      return nameMatch || catMatch;
    });
  }, [searchQuery, t]);

  return (
    <div className="min-h-screen bg-[#0a0a0f]" dir={i18n.dir()}>
      <Header />

      {/* Hero Section */}
      <section className="relative w-full min-h-[600px] md:min-h-[700px] flex items-center justify-center overflow-hidden pt-20">
        {/* Background layers */}
        <div className="absolute inset-0 bg-[#0a0a0f]" />

        {/* Purple circle glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] md:w-[700px] md:h-[700px] rounded-full bg-[#9d7bff]/10 blur-[120px] animate-pulse-slow" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] md:w-[400px] md:h-[400px] rounded-full bg-[#b79fff]/5 blur-[80px]" />

        {/* Subtle grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(rgba(139,92,246,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(139,92,246,0.3) 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />

        {/* Hero Content */}
        <div className="relative z-10 w-full px-4 md:px-8 lg:px-12 max-w-5xl mx-auto text-center">
          <div className="mb-6 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#9d7bff]/10 border border-[#9d7bff]/20">
            <span className="w-2 h-2 rounded-full bg-[#b79fff] animate-pulse" />
            <span className="text-[#c4aaff] text-sm font-medium">
              {t("heroBadge")}
            </span>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white leading-tight mb-8 tracking-tight">
            {t("heroTitle")}
          </h1>

          <p className="text-gray-400 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto mb-10">
            {t("heroDescription")}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#restaurants"
              className="btn-neon text-base px-8 py-4 rounded-xl whitespace-nowrap inline-flex items-center gap-2"
            >
              <div className="w-5 h-5 flex items-center justify-center">
                <i className="ri-restaurant-2-line text-sm" />
              </div>
              {t("heroCta")}
            </a>
            <a
              href="/track"
              className="flex items-center gap-2 px-8 py-4 rounded-xl bg-white/[0.05] border border-white/10 text-white font-medium hover:border-[#9d7bff]/30 hover:bg-white/10 transition-all duration-300 whitespace-nowrap"
            >
              <div className="w-5 h-5 flex items-center justify-center">
                <i className="ri-search-line text-[#9d7bff]" />
              </div>
              {t("heroTrackCta")}
            </a>
          </div>
        </div>

        {/* Bottom gradient fade */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0a0a0f] to-transparent" />
      </section>

      {/* Search Section */}
      <section className="relative z-10 w-full px-4 md:px-8 lg:px-12 -mt-6 mb-16">
        <div className="max-w-3xl mx-auto">
          <div className="relative">
            <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none">
              <div className="w-5 h-5 flex items-center justify-center">
                <i className="ri-search-line text-gray-500" />
              </div>
            </div>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={t("searchPlaceholder")}
              className="w-full pr-12 pl-4 py-4 md:py-5 bg-[#12121a] border border-white/[0.06] rounded-2xl text-white placeholder:text-gray-500 focus:border-[#9d7bff]/50 focus:shadow-[0_0_20px_rgba(157,123,255,0.15)] transition-all duration-300 outline-none text-base"
            />
          </div>
        </div>
      </section>

      {/* Restaurants Section */}
      <section id="restaurants" className="w-full px-4 md:px-8 lg:px-12 pb-12">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 flex items-center justify-center">
                <i className="ri-store-2-line text-[#9d7bff] text-lg" />
              </div>
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-white">
                  {t("restaurantsTitle")}
                </h2>
                <p className="text-gray-500 text-sm">
                  {t("restaurantsSubtitle")}
                </p>
              </div>
            </div>
            <div className="hidden md:flex items-center gap-2 text-gray-500 text-sm">
              <div className="w-4 h-4 flex items-center justify-center">
                <i className="ri-store-2-line" />
              </div>
              <span>{restaurants.length} {t("restaurantsCountSuffix")}</span>
            </div>
          </div>

          {filteredRestaurants.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {filteredRestaurants.map((restaurant) => (
                <RestaurantCard key={restaurant.id} restaurant={restaurant} />
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-[#12121a] flex items-center justify-center">
                <div className="w-8 h-8 flex items-center justify-center">
                  <i className="ri-restaurant-2-line text-gray-500 text-2xl" />
                </div>
              </div>
              <p className="text-gray-500 text-lg">{t("noResults")}</p>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
}