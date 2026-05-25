import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Header from "@/components/feature/Header";
import Footer from "@/components/feature/Footer";
import {
  Search, Clock, MapPin, Phone, Package, CheckCircle, ChefHat, Truck,
} from "lucide-react";
import { restaurants } from "@/mocks/restaurants";

interface OrderItem {
  name: string;
  quantity: number;
  price: number;
}

interface Order {
  trackingCode: string;
  restaurantId: string;
  items: OrderItem[];
  total: number;
  status: "pending" | "preparing" | "onTheWay" | "delivered";
  customerName: string;
  phone: string;
  address: string;
  createdAt: string;
}

const mockOrders: Order[] = [
  {
    trackingCode: "Foodi-18",
    restaurantId: "1",
    items: [
      { name: "Classic Burger", quantity: 2, price: 2.5 },
      { name: "French Fries", quantity: 1, price: 1.0 },
    ],
    total: 6.0,
    status: "preparing",
    customerName: "Ahmed Mohamed",
    phone: "+965 50123456",
    address: "Salmiya, Gulf Street, Tower of Faith",
    createdAt: "2026-05-24 14:30",
  },
  {
    trackingCode: "Foodi-17",
    restaurantId: "2",
    items: [
      { name: "Pepperoni Pizza", quantity: 1, price: 3.5 },
      { name: "Chicken Wings", quantity: 2, price: 2.5 },
    ],
    total: 8.5,
    status: "onTheWay",
    customerName: "Sarah Abdullah",
    phone: "+965 50987654",
    address: "Hawally, Tunis Street, Al-Ahmadiyya Complex",
    createdAt: "2026-05-24 13:15",
  },
  {
    trackingCode: "Foodi-16",
    restaurantId: "3",
    items: [
      { name: "Chicken Shawarma", quantity: 3, price: 1.5 },
      { name: "Shawarma Fattah", quantity: 1, price: 3.5 },
    ],
    total: 8.0,
    status: "delivered",
    customerName: "Khaled Ali",
    phone: "+965 55551234",
    address: "Jahra, Riyadh Street, Block 3",
    createdAt: "2026-05-24 11:00",
  },
];

const statusSteps = ["pending", "preparing", "onTheWay", "delivered"] as const;

export default function TrackPage() {
  const navigate = useNavigate();
  const { t, i18n } = useTranslation("common");
  const [code, setCode] = useState("");
  const [order, setOrder] = useState<Order | null>(null);
  const [searched, setSearched] = useState(false);

  const isRtl = i18n.language === "ar";

  const statusConfig: Record<string, { label: string; icon: JSX.Element; color: string; bg: string }> = {
    pending: {
      label: t("pending"),
      icon: <Clock size={18} />,
      color: "text-yellow-400",
      bg: "bg-yellow-400/20",
    },
    preparing: {
      label: t("preparing"),
      icon: <ChefHat size={18} />,
      color: "text-blue-400",
      bg: "bg-blue-400/20",
    },
    onTheWay: {
      label: t("onTheWay"),
      icon: <Truck size={18} />,
      color: "text-[#9d7bff]",
      bg: "bg-[#9d7bff]/20",
    },
    delivered: {
      label: t("delivered"),
      icon: <CheckCircle size={18} />,
      color: "text-green-400",
      bg: "bg-green-400/20",
    },
  };

  const handleTrack = () => {
    setSearched(true);
    const found = mockOrders.find(
      (o) => o.trackingCode.toLowerCase() === code.trim().toLowerCase()
    );
    setOrder(found || null);
  };

  const getStepIndex = (status: string) => statusSteps.indexOf(status as any);

  return (
    <div className="min-h-screen bg-[#0a0a0f] text-white" dir={i18n.dir()}>
      <Header />

      <main className="max-w-3xl mx-auto px-4 md:px-6 py-12">
        {/* Track Input */}
        <div className="text-center mb-10">
          <h1 className="text-3xl md:text-4xl font-bold mb-3">{t("trackTitle")}</h1>
          <p className="text-gray-400 mb-8">
            {t("trackDesc")}
          </p>

          <div className="flex gap-3 max-w-lg mx-auto">
            <div className="relative flex-1">
              <Search className={`absolute top-1/2 -translate-y-1/2 text-gray-400 ${isRtl ? "right-4" : "left-4"}`} size={20} />
              <input
                type="text"
                value={code}
                onChange={(e) => setCode(e.target.value)}
                placeholder={t("enterTrackingCode")}
                className={`w-full bg-[#12121a] border border-white/[0.08] rounded-xl ${isRtl ? "pr-12 pl-4 text-right" : "pl-12 pr-4 text-left"} py-3.5 text-white placeholder-gray-500 focus:outline-none focus:border-[#9d7bff]/50 focus:shadow-[0_0_20px_rgba(157,123,255,0.15)] transition-all`}
                onKeyDown={(e) => e.key === "Enter" && handleTrack()}
              />
            </div>
            <button
              onClick={handleTrack}
              className="px-6 py-3.5 rounded-xl bg-[#9d7bff] text-white font-bold hover:bg-[#b79fff] transition-colors shadow-[0_0_20px_rgba(157,123,255,0.3)] whitespace-nowrap cursor-pointer inline-flex items-center gap-2"
            >
              <div className="w-4 h-4 flex items-center justify-center">
                <i className="ri-search-line text-sm" />
              </div>
              {t("trackButton")}
            </button>
          </div>
        </div>

        {/* Order Result */}
        {searched && !order && (
          <div className="text-center py-12 bg-[#12121a] rounded-2xl border border-white/[0.06]">
            <Package size={48} className="text-gray-600 mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-2">{t("orderNotFound")}</h3>
            <p className="text-gray-400">{t("checkTrackingCode")}</p>
          </div>
        )}

        {order && (
          <div className="space-y-6">
            {/* Status Progress */}
            <div className="bg-[#12121a] rounded-2xl p-6 border border-white/[0.06]">
              <div className="flex items-center justify-between mb-6">
                <span className="text-sm text-gray-400">{t("orderNumber")}</span>
                <span className="font-mono font-bold text-[#9d7bff]">{order.trackingCode}</span>
              </div>

              <div className="relative">
                {/* Progress Line */}
                <div className="absolute top-[18px] right-0 left-0 h-1 bg-white/[0.08] rounded-full" />
                <div
                  className="absolute top-[18px] h-1 bg-[#9d7bff] rounded-full transition-all duration-500"
                  style={{
                    width: `${(getStepIndex(order.status) / (statusSteps.length - 1)) * 100}%`,
                    [isRtl ? "right" : "left"]: 0,
                  }}
                />

                <div className="relative flex justify-between">
                  {statusSteps.map((step, idx) => {
                    const config = statusConfig[step];
                    const isActive = idx <= getStepIndex(order.status);
                    const isCurrent = step === order.status;

                    return (
                      <div key={step} className="flex flex-col items-center gap-2">
                        <div
                          className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${
                            isActive
                              ? `${config.bg} ${config.color} shadow-[0_0_15px_rgba(157,123,255,0.3)]`
                              : "bg-white/[0.05] text-gray-600"
                          } ${isCurrent ? "ring-2 ring-[#9d7bff]/50 ring-offset-2 ring-offset-[#12121a]" : ""}`}
                        >
                          {config.icon}
                        </div>
                        <span
                          className={`text-xs font-medium ${
                            isActive ? config.color : "text-gray-600"
                          }`}
                        >
                          {config.label}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Order Details */}
            <div className="bg-[#12121a] rounded-2xl p-6 border border-white/[0.06]">
              <h3 className="text-xl font-bold mb-5 flex items-center gap-2">
                <Package className="text-[#9d7bff]" size={22} /> {t("orderDetails")}
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div className="flex items-center gap-3 text-sm">
                  <div className="w-10 h-10 rounded-lg bg-white/[0.05] flex items-center justify-center text-[#9d7bff]">
                    <div className="w-5 h-5 flex items-center justify-center">
                      <i className="ri-store-2-line text-lg" />
                    </div>
                  </div>
                  <div>
                    <p className="text-gray-400 text-xs">{t("restaurant")}</p>
                    <p className="font-medium">
                      {restaurants.find((r) => r.id === order.restaurantId)?.name || "-"}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <div className="w-10 h-10 rounded-lg bg-white/[0.05] flex items-center justify-center text-[#9d7bff]">
                    <MapPin size={18} />
                  </div>
                  <div>
                    <p className="text-gray-400 text-xs">{t("address")}</p>
                    <p className="font-medium truncate">{order.address}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <div className="w-10 h-10 rounded-lg bg-white/[0.05] flex items-center justify-center text-[#9d7bff]">
                    <Phone size={18} />
                  </div>
                  <div>
                    <p className="text-gray-400 text-xs">{t("phone")}</p>
                    <p className="font-medium">{order.phone}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <div className="w-10 h-10 rounded-lg bg-white/[0.05] flex items-center justify-center text-[#9d7bff]">
                    <Clock size={18} />
                  </div>
                  <div>
                    <p className="text-gray-400 text-xs">{t("orderTime")}</p>
                    <p className="font-medium">{order.createdAt}</p>
                  </div>
                </div>
              </div>

              {/* Items */}
              <div className="border-t border-white/[0.06] pt-4">
                <h4 className="font-bold mb-3 text-sm text-gray-400">{t("orderItems")}</h4>
                <div className="space-y-2">
                  {order.items.map((item, idx) => (
                    <div
                      key={idx}
                      className="flex items-center justify-between py-2 px-3 rounded-lg bg-white/[0.03]"
                    >
                      <div className="flex items-center gap-3">
                        <span className="w-6 h-6 rounded-full bg-[#9d7bff]/20 text-[#9d7bff] text-xs flex items-center justify-center font-bold">
                          {item.quantity}x
                        </span>
                        <span className="text-sm">{item.name}</span>
                      </div>
                      <span className="text-sm text-gray-400">
                        {(item.price * item.quantity).toFixed(2)} {t("currency")}
                      </span>
                    </div>
                  ))}
                </div>
                <div className="flex items-center justify-between mt-4 pt-4 border-t border-white/[0.06]">
                  <span className="font-bold">{t("total")}</span>
                  <span className="font-bold text-[#9d7bff] text-lg">
                    {order.total.toFixed(2)} {t("currency")}
                  </span>
                </div>
              </div>
            </div>

            {/* Status Badge */}
            <div className="flex items-center justify-center">
              <div
                className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full ${
                  statusConfig[order.status].bg
                } ${statusConfig[order.status].color} font-medium`}
              >
                {statusConfig[order.status].icon}
                {statusConfig[order.status].label}
              </div>
            </div>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}