import { useState, useMemo } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Header from "@/components/feature/Header";
import Footer from "@/components/feature/Footer";
import { restaurants, getLocalizedName } from "@/mocks/restaurants";
import { menuItems, getLocalizedDesc } from "@/mocks/menuItems";
import {
  useCart,
  addCartItem,
  updateCartQty,
  removeCartItem,
  clearCart,
  getCartTotal,
  getCartCount,
  type CartRestaurant,
} from "@/lib/cart-store";
import {
  ShoppingCart, Plus, Minus, Trash2, ArrowRight, Check, X,
} from "lucide-react";

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

export default function RestaurantPage() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { t, i18n } = useTranslation("common");
  const { cart, refresh } = useCart();
  const lang = i18n.language;

  const restaurant = restaurants.find((r) => r.id === id);
  const items = menuItems.filter((m) => m.restaurantId === id);

  const categoryKeys = useMemo(() => {
    const cats = [...new Set(items.map((i) => i.category))];
    return ["all", ...cats];
  }, [items]);

  const [activeCategoryKey, setActiveCategoryKey] = useState("all");
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [addedId, setAddedId] = useState<string | null>(null);

  const filteredItems =
    activeCategoryKey === "all"
      ? items
      : items.filter((i) => i.category === activeCategoryKey);

  const cartTotal = getCartTotal();
  const cartCount = getCartCount();

  const addToCart = (item: (typeof menuItems)[0]) => {
    if (!restaurant) return;
    const restData: CartRestaurant = { id: restaurant.id, name: restaurant.name };
    addCartItem(
      {
        menuItemId: item.id,
        name: item.name,
        price: item.price,
        quantity: 1,
        image: item.image,
      },
      restData
    );
    refresh();
    setAddedId(item.id);
    setTimeout(() => setAddedId(null), 1500);
  };

  const handleUpdateQty = (menuItemId: string, delta: number) => {
    updateCartQty(menuItemId, delta);
    refresh();
  };

  const handleRemove = (menuItemId: string) => {
    removeCartItem(menuItemId);
    refresh();
  };

  const handleClearCart = () => {
    clearCart();
    refresh();
    setIsCartOpen(false);
  };

  const getItemDisplayName = (name: string | { en: string; tr: string; ar: string }) => {
    if (typeof name === "string") return name;
    return name[lang as keyof typeof name] || name.en;
  };

  if (!restaurant) {
    return (
      <div className="min-h-screen bg-[#0a0a0f] text-white flex items-center justify-center" dir={i18n.dir()}>
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">{t("noResults")}</h2>
          <button
            onClick={() => navigate("/")}
            className="text-[#9d7bff] hover:text-[#b79fff] transition-colors"
          >
            {t("backToRestaurants")}
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0a0a0f] text-white" dir={i18n.dir()}>
      <Header />

      {/* Restaurant Hero */}
      <div className="relative h-[280px] md:h-[360px] overflow-hidden">
        <img
          src={restaurant.image}
          alt={getLocalizedName(restaurant.name, lang)}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f] via-[#0a0a0f]/60 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10">
          <button
            onClick={() => navigate("/")}
            className="text-sm text-[#9d7bff] hover:text-white transition-colors mb-3 flex items-center gap-2"
          >
            <ArrowRight className="rotate-180" size={18} /> {t("backToRestaurants")}
          </button>
          <h1 className="text-3xl md:text-5xl font-bold mb-2">{getLocalizedName(restaurant.name, lang)}</h1>
          <div className="flex items-center gap-4 text-sm text-gray-300 flex-wrap">
            <span className="flex items-center gap-1">
              <div className="w-4 h-4 flex items-center justify-center">
                <i className="ri-star-fill text-yellow-400 text-xs" />
              </div>
              {restaurant.rating}
            </span>
            <span className="flex items-center gap-1">
              <div className="w-4 h-4 flex items-center justify-center">
                <i className={`${categoryIcons[restaurant.category] || "ri-restaurant-line"} text-[#9d7bff] text-xs`} />
              </div>
              {t("category_" + restaurant.category)}
            </span>
            <span className="flex items-center gap-1">
              <div className="w-4 h-4 flex items-center justify-center">
                <i className="ri-time-line text-[#9d7bff] text-xs" />
              </div>
              {restaurant.deliveryTime} {t("deliveryTime")}
            </span>
            <span
              className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs ${
                restaurant.isOpen
                  ? "bg-green-500/20 text-green-400"
                  : "bg-red-500/20 text-red-400"
              }`}
            >
              <div className="w-3.5 h-3.5 flex items-center justify-center">
                <i className={`${restaurant.isOpen ? "ri-checkbox-circle-line" : "ri-close-circle-line"} text-xs`} />
              </div>
              {restaurant.isOpen ? t("restaurantOpen") : t("restaurantClosed")}
            </span>
          </div>
        </div>
      </div>

      <main className="max-w-7xl mx-auto px-4 md:px-6 py-8">
        {/* Categories */}
        <div className="flex flex-wrap gap-2 mb-8">
          {categoryKeys.map((key) => (
            <button
              key={key}
              onClick={() => setActiveCategoryKey(key)}
              className={`px-4 py-2 rounded-full text-sm transition-all duration-300 cursor-pointer whitespace-nowrap inline-flex items-center gap-1.5 ${
                activeCategoryKey === key
                  ? "bg-[#9d7bff] text-white shadow-[0_0_20px_rgba(157,123,255,0.3)]"
                  : "bg-white/5 text-gray-300 hover:bg-white/10 border border-white/10"
              }`}
            >
              {key === "all" && (
                <div className="w-3.5 h-3.5 flex items-center justify-center">
                  <i className="ri-apps-line text-xs" />
                </div>
              )}
              {key === "all" ? t("all") : t("category_" + key)}
            </button>
          ))}
        </div>

        {/* Menu Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="group bg-[#12121a] rounded-xl overflow-hidden border border-white/[0.06] hover:border-[#9d7bff]/30 transition-all duration-300"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={item.image}
                  alt={getLocalizedName(item.name, lang)}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-4">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="font-bold text-lg">{getLocalizedName(item.name, lang)}</h3>
                  <span className="text-[#9d7bff] font-bold">
                    {item.price} {t("currency")}
                  </span>
                </div>
                <p className="text-gray-400 text-sm mb-3 line-clamp-2">{getLocalizedDesc(item.description, lang)}</p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-500 px-2 py-1 bg-white/5 rounded-full inline-flex items-center gap-1">
                    <div className="w-3.5 h-3.5 flex items-center justify-center">
                      <i className={`${categoryIcons[item.category] || "ri-restaurant-line"} text-[10px]`} />
                    </div>
                    {t("category_" + item.category)}
                  </span>
                  <button
                    onClick={() => addToCart(item)}
                    className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 cursor-pointer ${
                      addedId === item.id
                        ? "bg-green-500/20 text-green-400"
                        : "bg-[#9d7bff]/10 text-[#9d7bff] hover:bg-[#9d7bff]/20 border border-[#9d7bff]/30"
                    }`}
                  >
                    {addedId === item.id ? (
                      <>
                        <Check size={16} /> {t("addedToCart")}
                      </>
                    ) : (
                      <>
                        <Plus size={16} /> {t("addToCart")}
                      </>
                    )}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* Floating Cart Button */}
      {cart.length > 0 && (
        <button
          onClick={() => setIsCartOpen(true)}
          className="fixed bottom-6 left-6 z-50 w-14 h-14 rounded-full bg-[#9d7bff] text-white shadow-[0_0_30px_rgba(157,123,255,0.4)] flex items-center justify-center transition-all duration-300 hover:scale-110 cursor-pointer"
        >
          <ShoppingCart size={22} />
          {cartCount > 0 && (
            <span className="absolute -top-1 -right-1 w-5 h-5 bg-white text-[#9d7bff] text-xs font-bold rounded-full flex items-center justify-center">
              {cartCount}
            </span>
          )}
        </button>
      )}

      {/* Cart Sidebar */}
      {isCartOpen && (
        <>
          <div
            className="fixed inset-0 bg-black/60 z-50 backdrop-blur-sm"
            onClick={() => setIsCartOpen(false)}
          />
          <div className="fixed top-0 right-0 h-full w-full sm:w-[420px] bg-[#12121a] border-l border-white/10 z-50 flex flex-col shadow-2xl animate-in slide-in-from-right">
            <div className="p-5 border-b border-white/10 flex items-center justify-between">
              <h2 className="text-xl font-bold flex items-center gap-2">
                <ShoppingCart className="text-[#9d7bff]" size={22} /> {t("cartTitle")}
              </h2>
              <button
                onClick={() => setIsCartOpen(false)}
                className="text-gray-400 hover:text-white transition-colors cursor-pointer w-8 h-8 flex items-center justify-center rounded-lg hover:bg-white/5"
              >
                <X size={20} />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-5 space-y-4">
              {cart.length === 0 && (
                <div className="text-center py-10 text-gray-400">
                  <ShoppingCart size={48} className="mx-auto mb-4 opacity-30" />
                  <p>{t("emptyCartMsg")}</p>
                </div>
              )}
              {cart.map((item) => (
                <div
                  key={item.menuItemId}
                  className="flex gap-3 bg-white/[0.03] rounded-xl p-3 border border-white/[0.04]"
                >
                  <img
                    src={item.image}
                    alt={getItemDisplayName(item.name)}
                    className="w-16 h-16 rounded-lg object-cover flex-shrink-0"
                  />
                  <div className="flex-1 min-w-0">
                    <h4 className="font-medium text-sm truncate">{getItemDisplayName(item.name)}</h4>
                    <p className="text-[#9d7bff] text-sm font-bold mt-1">
                      {item.price} {t("currency")}
                    </p>
                    <div className="flex items-center gap-2 mt-2">
                      <button
                        onClick={() => handleUpdateQty(item.menuItemId, -1)}
                        className="w-7 h-7 rounded-md bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors cursor-pointer"
                      >
                        <Minus size={14} />
                      </button>
                      <span className="text-sm font-medium w-6 text-center">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => handleUpdateQty(item.menuItemId, 1)}
                        className="w-7 h-7 rounded-md bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors cursor-pointer"
                      >
                        <Plus size={14} />
                      </button>
                      <button
                        onClick={() => handleRemove(item.menuItemId)}
                        className="w-7 h-7 rounded-md bg-red-500/10 text-red-400 flex items-center justify-center hover:bg-red-500/20 transition-colors ml-auto cursor-pointer"
                      >
                        <Trash2 size={14} />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="p-5 border-t border-white/10">
              {cart.length > 0 && (
                <div className="flex items-center justify-between mb-4 text-lg font-bold">
                  <span>{t("total")}</span>
                  <span className="text-[#9d7bff]">
                    {cartTotal.toFixed(2)} {t("currency")}
                  </span>
                </div>
              )}
              <div className="flex gap-2">
                {cart.length > 0 && (
                  <button
                    onClick={handleClearCart}
                    className="px-4 py-3 rounded-xl bg-red-500/10 text-red-400 font-bold hover:bg-red-500/20 transition-colors cursor-pointer text-sm whitespace-nowrap"
                  >
                    {t("clearCart")}
                  </button>
                )}
                <button
                  onClick={() => {
                    if (cart.length === 0) return;
                    setIsCartOpen(false);
                    navigate("/checkout");
                  }}
                  disabled={cart.length === 0}
                  className="flex-1 py-3 rounded-xl bg-[#9d7bff] text-white font-bold hover:bg-[#b79fff] transition-colors shadow-[0_0_20px_rgba(157,123,255,0.3)] cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed whitespace-nowrap"
                >
                  {t("checkout")}
                </button>
              </div>
            </div>
          </div>
        </>
      )}

      <Footer />
    </div>
  );
}