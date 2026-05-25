import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Header from "@/components/feature/Header";
import Footer from "@/components/feature/Footer";
import {
  useCart,
  getCart,
  getCartRestaurant,
  getCartTotal,
  clearCart,
} from "@/lib/cart-store";
import { supabase } from "@/lib/supabase";
import {
  User, Phone, MapPin, Layers, Home, CreditCard, DollarSign,
  MessageSquare, CheckCircle, ArrowRight, ShoppingBag, Send,
  AlertCircle,
} from "lucide-react";
import { getLocalizedName } from "@/mocks/restaurants";

export default function CheckoutPage() {
  const navigate = useNavigate();
  const { t, i18n } = useTranslation("common");
  const { cart, refresh } = useCart();

  const [submitted, setSubmitted] = useState(false);
  const [trackingCode, setTrackingCode] = useState("");
  const [notifyStatus, setNotifyStatus] = useState<"idle" | "sending" | "sent" | "skipped">("idle");

  const [form, setForm] = useState({
    fullName: "",
    phone: "",
    address: "",
    floor: "",
    apartment: "",
    block: "",
    paymentMethod: "cash",
    tip: "",
    notes: "",
  });

  const restaurant = getCartRestaurant();
  const cartTotal = getCartTotal();
  const tipAmount = parseFloat(form.tip) || 0;
  const grandTotal = cartTotal + tipAmount;
  const isRtl = i18n.language === "ar";
  const lang = i18n.language;

  const getItemDisplayName = (name: string | { en: string; tr: string; ar: string }) => {
    if (typeof name === "string") return name;
    return name[lang as keyof typeof name] || name.en;
  };

  const handleChange = (field: string, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const sendTelegramNotification = async (code: string) => {
    if (!supabase) return;
    setNotifyStatus("sending");
    try {
      await supabase.functions.invoke("telegram-notify", {
        body: {
          order: {
            customerName: form.fullName,
            phone: form.phone,
            address: form.address,
            floor: form.floor,
            apartment: form.apartment,
            block: form.block,
            paymentMethod: form.paymentMethod,
            tip: form.tip,
            notes: form.notes,
            trackingCode: code,
            total: grandTotal,
            restaurantName: restaurant?.name ? getLocalizedName(restaurant.name, lang) : "Restaurant",
            items: cart.map((c) => ({
              name: getItemDisplayName(c.name),
              quantity: c.quantity,
              price: c.price,
            })),
          },
        },
      });
      setNotifyStatus("sent");
    } catch {
      setNotifyStatus("skipped");
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (cart.length === 0) return;

    const code = `Foodi-${Math.floor(Math.random() * 90 + 10)}`;
    setTrackingCode(code);

    await sendTelegramNotification(code);

    clearCart();
    refresh();
    setSubmitted(true);
  };

  if (cart.length === 0 && !submitted) {
    return (
      <div className="min-h-screen bg-[#0a0a0f] text-white flex items-center justify-center" dir={i18n.dir()}>
        <div className="text-center max-w-md mx-auto px-4">
          <ShoppingBag size={64} className="mx-auto mb-6 text-gray-600" />
          <h2 className="text-2xl font-bold mb-3">{t("emptyCartMsg")}</h2>
          <p className="text-gray-400 mb-6">{t("browseRestaurants")}</p>
          <button
            onClick={() => navigate("/")}
            className="px-6 py-3 rounded-xl bg-[#9d7bff] text-white font-bold hover:bg-[#b79fff] transition-colors shadow-[0_0_20px_rgba(157,123,255,0.3)] cursor-pointer"
          >
            {t("browseRestaurants")}
          </button>
        </div>
      </div>
    );
  }

  if (submitted) {
    return (
      <div className="min-h-screen bg-[#0a0a0f] text-white flex items-center justify-center" dir={i18n.dir()}>
        <div className="text-center max-w-md mx-auto px-4">
          <div className="w-20 h-20 rounded-full bg-green-500/20 text-green-400 flex items-center justify-center mx-auto mb-6">
            <CheckCircle size={40} />
          </div>
          <h2 className="text-2xl font-bold mb-2">{t("orderSuccess")}</h2>
          <p className="text-gray-400 mb-6">{t("thankYouOrder")}</p>

          {notifyStatus === "sent" && (
            <div className="flex items-center justify-center gap-2 text-green-400 text-sm mb-4">
              <Send size={14} /> {t("telegramSent")}
            </div>
          )}
          {notifyStatus === "skipped" && (
            <div className="flex items-center justify-center gap-2 text-yellow-400/80 text-sm mb-4">
              <AlertCircle size={14} /> {t("telegramSkipped")}
            </div>
          )}

          <div className="bg-[#12121a] rounded-xl p-5 border border-white/[0.06] mb-6">
            <p className="text-sm text-gray-400 mb-2">{t("trackingCode")}</p>
            <p className="text-3xl font-mono font-bold text-[#9d7bff]">{trackingCode}</p>
          </div>
          <div className="flex gap-3 justify-center">
            <button
              onClick={() => navigate(`/track`)}
              className="px-6 py-3 rounded-xl bg-[#9d7bff] text-white font-bold hover:bg-[#b79fff] transition-colors shadow-[0_0_20px_rgba(157,123,255,0.3)] cursor-pointer whitespace-nowrap"
            >
              {t("trackOrder")}
            </button>
            <button
              onClick={() => navigate("/")}
              className="px-6 py-3 rounded-xl bg-white/[0.05] text-white font-bold hover:bg-white/10 transition-colors border border-white/10 cursor-pointer whitespace-nowrap"
            >
              {t("backToHome")}
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0a0a0f] text-white" dir={i18n.dir()}>
      <Header />

      <main className="max-w-5xl mx-auto px-4 md:px-6 py-8">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-[#9d7bff] hover:text-white transition-colors mb-6 cursor-pointer"
        >
          <ArrowRight className={isRtl ? "rotate-180" : ""} size={18} /> {t("backToRestaurants")}
        </button>

        <h1 className="text-2xl md:text-3xl font-bold mb-8">{t("checkoutTitle")}</h1>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Order Form */}
          <div className="lg:col-span-3">
            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Name */}
              <div>
                <label className="flex items-center gap-2 text-sm text-gray-300 mb-2">
                  <User size={16} className="text-[#9d7bff]" /> {t("fullName")}
                </label>
                <input
                  required
                  value={form.fullName}
                  onChange={(e) => handleChange("fullName", e.target.value)}
                  className={`w-full bg-[#12121a] border border-white/[0.08] rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-[#9d7bff]/50 focus:shadow-[0_0_20px_rgba(157,123,255,0.15)] transition-all ${isRtl ? "text-right" : "text-left"}`}
                  placeholder={isRtl ? "محمد أحمد" : "John Doe"}
                />
              </div>

              {/* Phone */}
              <div>
                <label className="flex items-center gap-2 text-sm text-gray-300 mb-2">
                  <Phone size={16} className="text-[#9d7bff]" /> {t("phone")}
                </label>
                <input
                  required
                  type="tel"
                  value={form.phone}
                  onChange={(e) => handleChange("phone", e.target.value)}
                  className={`w-full bg-[#12121a] border border-white/[0.08] rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-[#9d7bff]/50 focus:shadow-[0_0_20px_rgba(157,123,255,0.15)] transition-all ${isRtl ? "text-right" : "text-left"}`}
                  placeholder="+965 50123456"
                />
              </div>

              {/* Address */}
              <div>
                <label className="flex items-center gap-2 text-sm text-gray-300 mb-2">
                  <MapPin size={16} className="text-[#9d7bff]" /> {t("address")}
                </label>
                <input
                  required
                  value={form.address}
                  onChange={(e) => handleChange("address", e.target.value)}
                  className={`w-full bg-[#12121a] border border-white/[0.08] rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-[#9d7bff]/50 focus:shadow-[0_0_20px_rgba(157,123,255,0.15)] transition-all ${isRtl ? "text-right" : "text-left"}`}
                  placeholder={isRtl ? "السالمية، شارع الخليج" : "Salmya, Gulf Street"}
                />
              </div>

              {/* Floor, Apartment, Block */}
              <div className="grid grid-cols-3 gap-3">
                <div>
                  <label className="flex items-center gap-2 text-sm text-gray-300 mb-2">
                    <Layers size={16} className="text-[#9d7bff]" /> {t("floor")}
                  </label>
                  <input
                    value={form.floor}
                    onChange={(e) => handleChange("floor", e.target.value)}
                    className="w-full bg-[#12121a] border border-white/[0.08] rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-[#9d7bff]/50 focus:shadow-[0_0_20px_rgba(157,123,255,0.15)] transition-all text-center"
                    placeholder="3"
                  />
                </div>
                <div>
                  <label className="flex items-center gap-2 text-sm text-gray-300 mb-2">
                    <Home size={16} className="text-[#9d7bff]" /> {t("apartment")}
                  </label>
                  <input
                    value={form.apartment}
                    onChange={(e) => handleChange("apartment", e.target.value)}
                    className="w-full bg-[#12121a] border border-white/[0.08] rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-[#9d7bff]/50 focus:shadow-[0_0_20px_rgba(157,123,255,0.15)] transition-all text-center"
                    placeholder="12"
                  />
                </div>
                <div>
                  <label className="flex items-center gap-2 text-sm text-gray-300 mb-2">
                    <MapPin size={16} className="text-[#9d7bff]" /> {t("block")}
                  </label>
                  <input
                    value={form.block}
                    onChange={(e) => handleChange("block", e.target.value)}
                    className="w-full bg-[#12121a] border border-white/[0.08] rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-[#9d7bff]/50 focus:shadow-[0_0_20px_rgba(157,123,255,0.15)] transition-all text-center"
                    placeholder="4A"
                  />
                </div>
              </div>

              {/* Payment Method */}
              <div>
                <label className="flex items-center gap-2 text-sm text-gray-300 mb-3">
                  <CreditCard size={16} className="text-[#9d7bff]" /> {t("paymentMethod")}
                </label>
                <div className="flex gap-3">
                  <button
                    type="button"
                    onClick={() => handleChange("paymentMethod", "cash")}
                    className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-xl border transition-all cursor-pointer whitespace-nowrap ${
                      form.paymentMethod === "cash"
                        ? "bg-[#9d7bff]/10 border-[#9d7bff]/50 text-[#9d7bff] shadow-[0_0_15px_rgba(157,123,255,0.15)]"
                        : "bg-[#12121a] border-white/[0.08] text-gray-400 hover:border-white/20"
                    }`}
                  >
                    <DollarSign size={18} /> {t("cash")}
                  </button>
                  <button
                    type="button"
                    onClick={() => handleChange("paymentMethod", "card")}
                    className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-xl border transition-all cursor-pointer whitespace-nowrap ${
                      form.paymentMethod === "card"
                        ? "bg-[#9d7bff]/10 border-[#9d7bff]/50 text-[#9d7bff] shadow-[0_0_15px_rgba(157,123,255,0.15)]"
                        : "bg-[#12121a] border-white/[0.08] text-gray-400 hover:border-white/20"
                    }`}
                  >
                    <CreditCard size={18} /> {t("card")}
                  </button>
                </div>
              </div>

              {/* Tip */}
              <div>
                <label className="flex items-center gap-2 text-sm text-gray-300 mb-2">
                  <DollarSign size={16} className="text-[#9d7bff]" /> {t("tip")}
                </label>
                <input
                  type="number"
                  step="0.25"
                  value={form.tip}
                  onChange={(e) => handleChange("tip", e.target.value)}
                  className={`w-full bg-[#12121a] border border-white/[0.08] rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-[#9d7bff]/50 focus:shadow-[0_0_20px_rgba(157,123,255,0.15)] transition-all ${isRtl ? "text-right" : "text-left"}`}
                  placeholder="0.500"
                />
              </div>

              {/* Notes */}
              <div>
                <label className="flex items-center gap-2 text-sm text-gray-300 mb-2">
                  <MessageSquare size={16} className="text-[#9d7bff]" /> {t("notes")}
                </label>
                <textarea
                  value={form.notes}
                  onChange={(e) => handleChange("notes", e.target.value)}
                  rows={3}
                  className={`w-full bg-[#12121a] border border-white/[0.08] rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-[#9d7bff]/50 focus:shadow-[0_0_20px_rgba(157,123,255,0.15)] transition-all resize-none ${isRtl ? "text-right" : "text-left"}`}
                  placeholder={isRtl ? "ملاحظات خاصة بالطلب..." : "Special instructions for your order..."}
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="w-full py-4 rounded-xl bg-[#9d7bff] text-white font-bold text-lg hover:bg-[#b79fff] transition-all shadow-[0_0_30px_rgba(157,123,255,0.3)] cursor-pointer mt-4"
              >
                {t("confirmOrder")}
              </button>
            </form>
          </div>

          {/* Order Summary Sidebar */}
          <div className="lg:col-span-2">
            <div className="bg-[#12121a] rounded-xl border border-white/[0.06] p-5 sticky top-6">
              <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                <ShoppingBag size={20} className="text-[#9d7bff]" /> {t("orderSummary")}
              </h3>

              {restaurant && (
                <div className="mb-4 pb-4 border-b border-white/10">
                  <p className="text-sm text-gray-400">{t("restaurantLabel")}</p>
                  <p className="font-bold text-white">{getLocalizedName(restaurant.name, lang)}</p>
                </div>
              )}

              <div className="space-y-3 mb-4 pb-4 border-b border-white/10">
                {cart.map((item) => (
                  <div key={item.menuItemId} className="flex items-center justify-between text-sm">
                    <div className="flex items-center gap-2">
                      <img src={item.image} alt={getItemDisplayName(item.name)} className="w-8 h-8 rounded object-cover" />
                      <span className="text-gray-300">
                        {getItemDisplayName(item.name)} <span className="text-gray-500">× {item.quantity}</span>
                      </span>
                    </div>
                    <span className="text-[#9d7bff] font-medium">
                      {(item.price * item.quantity).toFixed(2)} {t("currency")}
                    </span>
                  </div>
                ))}
              </div>

              <div className="space-y-2 text-sm">
                <div className="flex justify-between text-gray-400">
                  <span>{t("subtotal")}</span>
                  <span>{cartTotal.toFixed(2)} {t("currency")}</span>
                </div>
                {tipAmount > 0 && (
                  <div className="flex justify-between text-gray-400">
                    <span>{t("tip")}</span>
                    <span>{tipAmount.toFixed(2)} {t("currency")}</span>
                  </div>
                )}
                <div className="flex justify-between text-white font-bold text-base pt-2 border-t border-white/10">
                  <span>{t("grandTotal")}</span>
                  <span className="text-[#9d7bff]">{grandTotal.toFixed(2)} {t("currency")}</span>
                </div>
              </div>

              {form.paymentMethod === "cash" && (
                <div className="mt-4 p-3 rounded-lg bg-green-500/10 border border-green-500/20 text-green-400 text-xs text-center flex items-center justify-center gap-2">
                  <div className="w-4 h-4 flex items-center justify-center">
                    <i className="ri-hand-coin-line text-sm" />
                  </div>
                  {t("cashOnDelivery")}
                </div>
              )}
              {form.paymentMethod === "card" && (
                <div className="mt-4 p-3 rounded-lg bg-[#9d7bff]/10 border border-[#9d7bff]/20 text-[#9d7bff] text-xs text-center flex items-center justify-center gap-2">
                  <div className="w-4 h-4 flex items-center justify-center">
                    <i className="ri-secure-payment-line text-sm" />
                  </div>
                  {t("cardPayment")}
                </div>
              )}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}