import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import {
  Home, ShoppingBag, ClipboardList, Plus, Pencil, Trash2, DollarSign, TrendingUp, Users, Clock, CheckCircle, Truck, Package,
} from "lucide-react";
import { restaurants, getLocalizedName } from "@/mocks/restaurants";
import { menuItems, getLocalizedDesc } from "@/mocks/menuItems";

interface Order {
  id: string;
  trackingCode: string;
  restaurantName: string;
  customerName: string;
  total: number;
  status: "pending" | "preparing" | "onTheWay" | "delivered";
  items: number;
  createdAt: string;
}

const mockAdminOrders: Order[] = [
  {
    id: "1",
    trackingCode: "Foodi-18",
    restaurantName: "Burger King",
    customerName: "Ahmed Mohamed",
    total: 6.0,
    status: "preparing",
    items: 3,
    createdAt: "2026-05-24 14:30",
  },
  {
    id: "2",
    trackingCode: "Foodi-17",
    restaurantName: "Pizza Hut",
    customerName: "Sarah Abdullah",
    total: 8.5,
    status: "onTheWay",
    items: 2,
    createdAt: "2026-05-24 13:15",
  },
  {
    id: "3",
    trackingCode: "Foodi-16",
    restaurantName: "Shawerma Al-Sham",
    customerName: "Khaled Ali",
    total: 8.0,
    status: "delivered",
    items: 4,
    createdAt: "2026-05-24 11:00",
  },
  {
    id: "4",
    trackingCode: "Foodi-15",
    restaurantName: "Mashawi Al-Sultan",
    customerName: "Noura Ahmed",
    total: 12.5,
    status: "pending",
    items: 2,
    createdAt: "2026-05-24 15:45",
  },
  {
    id: "5",
    trackingCode: "Foodi-14",
    restaurantName: "Sushi Master",
    customerName: "Abdullah Salem",
    total: 7.5,
    status: "delivered",
    items: 3,
    createdAt: "2026-05-24 10:20",
  },
];

type TabType = "orders" | "restaurants" | "menu";

export default function AdminPage() {
  const navigate = useNavigate();
  const { t, i18n } = useTranslation("common");
  const lang = i18n.language;
  const [activeTab, setActiveTab] = useState<TabType>("orders");
  const [orders, setOrders] = useState(mockAdminOrders);
  const [showAddRestaurant, setShowAddRestaurant] = useState(false);

  const isRtl = i18n.language === "ar";

  const statusConfig: Record<string, { label: string; icon: JSX.Element; color: string; bg: string }> = {
    pending: {
      label: t("pending"),
      icon: <Clock size={14} />,
      color: "text-yellow-400",
      bg: "bg-yellow-400/10",
    },
    preparing: {
      label: t("preparing"),
      icon: <Package size={14} />,
      color: "text-blue-400",
      bg: "bg-blue-400/10",
    },
    onTheWay: {
      label: t("onTheWay"),
      icon: <Truck size={14} />,
      color: "text-[#9d7bff]",
      bg: "bg-[#9d7bff]/10",
    },
    delivered: {
      label: t("delivered"),
      icon: <CheckCircle size={14} />,
      color: "text-green-400",
      bg: "bg-green-400/10",
    },
  };

  const stats = {
    totalOrders: orders.length,
    todayOrders: orders.filter((o) => o.createdAt.startsWith("2026-05-24")).length,
    revenue: orders.reduce((sum, o) => sum + o.total, 0),
    activeRestaurants: restaurants.filter((r) => r.isOpen).length,
  };

  const updateOrderStatus = (orderId: string, newStatus: Order["status"]) => {
    setOrders((prev) =>
      prev.map((o) => (o.id === orderId ? { ...o, status: newStatus } : o))
    );
  };

  const tabs: { key: TabType; label: string; icon: JSX.Element }[] = [
    { key: "orders", label: t("adminOrders"), icon: <ClipboardList size={18} /> },
    { key: "restaurants", label: t("adminRestaurants"), icon: <Home size={18} /> },
    { key: "menu", label: t("adminMenu"), icon: <ShoppingBag size={18} /> },
  ];

  const statusOptions: Order["status"][] = ["pending", "preparing", "onTheWay", "delivered"];

  return (
    <div className="min-h-screen bg-[#0a0a0f] text-white" dir={i18n.dir()}>
      {/* Admin Header */}
      <header className="bg-[#12121a] border-b border-white/[0.06] px-6 py-4 sticky top-0 z-40">
        <div className="flex items-center justify-between max-w-7xl mx-auto">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#9d7bff] flex items-center justify-center shadow-[0_0_15px_rgba(157,123,255,0.3)]">
              <Home className="text-white" size={20} />
            </div>
            <div>
              <h1 className="font-bold text-lg">{t("adminPanel")}</h1>
              <p className="text-xs text-gray-400">Foodi Admin</p>
            </div>
          </div>
          <button
            onClick={() => navigate("/")}
            className="text-sm text-gray-400 hover:text-white transition-colors cursor-pointer"
          >
            {t("backToSite")}
          </button>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 md:px-6 py-6">
        {/* Stats Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {[
            {
              label: t("totalOrders"),
              value: stats.totalOrders,
              icon: <ClipboardList size={20} />,
              color: "text-[#9d7bff]",
              bg: "bg-[#9d7bff]/10",
            },
            {
              label: t("todayOrders"),
              value: stats.todayOrders,
              icon: <TrendingUp size={20} />,
              color: "text-green-400",
              bg: "bg-green-400/10",
            },
            {
              label: t("revenue"),
              value: `${stats.revenue.toFixed(2)} ${t("currency")}`,
              icon: <DollarSign size={20} />,
              color: "text-yellow-400",
              bg: "bg-yellow-400/10",
            },
            {
              label: t("activeRestaurants"),
              value: stats.activeRestaurants,
              icon: <Users size={20} />,
              color: "text-blue-400",
              bg: "bg-blue-400/10",
            },
          ].map((stat, idx) => (
            <div
              key={idx}
              className="bg-[#12121a] rounded-xl p-4 border border-white/[0.06]"
            >
              <div className={`w-10 h-10 rounded-lg ${stat.bg} ${stat.color} flex items-center justify-center mb-3`}>
                {stat.icon}
              </div>
              <p className="text-2xl font-bold mb-1">{stat.value}</p>
              <p className="text-xs text-gray-400">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Tabs */}
        <div className="flex gap-2 mb-6 border-b border-white/[0.06] pb-1 overflow-x-auto">
          {tabs.map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`flex items-center gap-2 px-5 py-3 text-sm font-medium transition-all border-b-2 cursor-pointer whitespace-nowrap ${
                activeTab === tab.key
                  ? "text-[#9d7bff] border-[#9d7bff]"
                  : "text-gray-400 border-transparent hover:text-white"
              }`}
            >
              {tab.icon}
              {tab.label}
            </button>
          ))}
        </div>

        {/* Orders Tab */}
        {activeTab === "orders" && (
          <div className="bg-[#12121a] rounded-2xl border border-white/[0.06] overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead className="bg-white/[0.03] text-gray-400">
                  <tr>
                    <th className={`${isRtl ? "text-right" : "text-left"} px-4 py-3 font-medium`}>{t("trackingCode")}</th>
                    <th className={`${isRtl ? "text-right" : "text-left"} px-4 py-3 font-medium`}>{t("restaurant")}</th>
                    <th className={`${isRtl ? "text-right" : "text-left"} px-4 py-3 font-medium`}>{t("fullName")}</th>
                    <th className={`${isRtl ? "text-right" : "text-left"} px-4 py-3 font-medium`}>{t("items")}</th>
                    <th className={`${isRtl ? "text-right" : "text-left"} px-4 py-3 font-medium`}>{t("total")}</th>
                    <th className={`${isRtl ? "text-right" : "text-left"} px-4 py-3 font-medium`}>{t("status")}</th>
                    <th className={`${isRtl ? "text-right" : "text-left"} px-4 py-3 font-medium`}>{t("orderTime")}</th>
                    <th className={`${isRtl ? "text-right" : "text-left"} px-4 py-3 font-medium`}>{t("actions")}</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/[0.04]">
                  {orders.map((order) => (
                    <tr key={order.id} className="hover:bg-white/[0.02] transition-colors">
                      <td className="px-4 py-4 font-mono text-[#9d7bff]">{order.trackingCode}</td>
                      <td className="px-4 py-4">{order.restaurantName}</td>
                      <td className="px-4 py-4">{order.customerName}</td>
                      <td className="px-4 py-4">{order.items}</td>
                      <td className="px-4 py-4 font-bold">{order.total.toFixed(2)} {t("currency")}</td>
                      <td className="px-4 py-4">
                        <span
                          className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium ${statusConfig[order.status].bg} ${statusConfig[order.status].color}`}
                        >
                          {statusConfig[order.status].icon}
                          {statusConfig[order.status].label}
                        </span>
                      </td>
                      <td className="px-4 py-4 text-gray-400">{order.createdAt}</td>
                      <td className="px-4 py-4">
                        <select
                          value={order.status}
                          onChange={(e) => updateOrderStatus(order.id, e.target.value as Order["status"])}
                          className="bg-[#0a0a0f] border border-white/[0.08] rounded-lg px-3 py-1.5 text-xs focus:outline-none focus:border-[#9d7bff]/30 cursor-pointer"
                        >
                          {statusOptions.map((s) => (
                            <option key={s} value={s}>
                              {statusConfig[s].label}
                            </option>
                          ))}
                        </select>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Restaurants Tab */}
        {activeTab === "restaurants" && (
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <h2 className="text-lg font-bold">{t("adminRestaurants")}</h2>
              <button
                onClick={() => setShowAddRestaurant(!showAddRestaurant)}
                className="flex items-center gap-2 px-4 py-2 rounded-lg bg-[#9d7bff] text-white text-sm font-medium hover:bg-[#b79fff] transition-colors cursor-pointer"
              >
                <Plus size={16} /> {t("addRestaurant")}
              </button>
            </div>

            {showAddRestaurant && (
              <div className="bg-[#12121a] rounded-xl p-5 border border-white/[0.06] mb-4">
                <h3 className="font-bold mb-4">{t("addRestaurant")}</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    placeholder={t("name")}
                    className="bg-[#0a0a0f] border border-white/[0.08] rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-[#9d7bff]/30"
                  />
                  <input
                    placeholder={t("category")}
                    className="bg-[#0a0a0f] border border-white/[0.08] rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-[#9d7bff]/30"
                  />
                  <input
                    placeholder="Delivery time (e.g. 25-35)"
                    className="bg-[#0a0a0f] border border-white/[0.08] rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-[#9d7bff]/30"
                  />
                  <input
                    type="number"
                    step="0.1"
                    max="5"
                    placeholder="Rating (0-5)"
                    className="bg-[#0a0a0f] border border-white/[0.08] rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-[#9d7bff]/30"
                  />
                </div>
                <div className="flex gap-3 mt-4">
                  <button className="px-5 py-2 rounded-lg bg-[#9d7bff] text-white text-sm font-medium hover:bg-[#b79fff] transition-colors cursor-pointer">
                    {t("save")}
                  </button>
                  <button
                    onClick={() => setShowAddRestaurant(false)}
                    className="px-5 py-2 rounded-lg bg-white/[0.05] text-gray-400 text-sm font-medium hover:bg-white/10 transition-colors cursor-pointer"
                  >
                    {t("cancel")}
                  </button>
                </div>
              </div>
            )}

            <div className="bg-[#12121a] rounded-2xl border border-white/[0.06] overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead className="bg-white/[0.03] text-gray-400">
                    <tr>
                      <th className={`${isRtl ? "text-right" : "text-left"} px-4 py-3 font-medium`}>{t("restaurant")}</th>
                      <th className={`${isRtl ? "text-right" : "text-left"} px-4 py-3 font-medium`}>{t("category")}</th>
                      <th className={`${isRtl ? "text-right" : "text-left"} px-4 py-3 font-medium`}>{t("rating")}</th>
                      <th className={`${isRtl ? "text-right" : "text-left"} px-4 py-3 font-medium`}>{t("deliveryTime")}</th>
                      <th className={`${isRtl ? "text-right" : "text-left"} px-4 py-3 font-medium`}>{t("status")}</th>
                      <th className={`${isRtl ? "text-right" : "text-left"} px-4 py-3 font-medium`}>{t("actions")}</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/[0.04]">
                    {restaurants.map((r) => (
                      <tr key={r.id} className="hover:bg-white/[0.02] transition-colors">
                        <td className="px-4 py-4">
                          <div className="flex items-center gap-3">
                            <img src={r.image} alt={getLocalizedName(r.name, lang)} className="w-10 h-10 rounded-lg object-cover" />
                            <span className="font-medium">{getLocalizedName(r.name, lang)}</span>
                          </div>
                        </td>
                        <td className="px-4 py-4">{t("category_" + r.category)}</td>
                        <td className="px-4 py-4">
                          <span className="inline-flex items-center gap-1 text-yellow-400">
                            <div className="w-3.5 h-3.5 flex items-center justify-center">
                              <i className="ri-star-fill text-xs" />
                            </div>
                            {r.rating}
                          </span>
                        </td>
                        <td className="px-4 py-4">{r.deliveryTime} {t("deliveryTime")}</td>
                        <td className="px-4 py-4">
                          <span
                            className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-medium ${
                              r.isOpen
                                ? "bg-green-400/10 text-green-400"
                                : "bg-red-400/10 text-red-400"
                            }`}
                          >
                            <div className="w-3.5 h-3.5 flex items-center justify-center">
                              <i className={`${r.isOpen ? "ri-checkbox-circle-line" : "ri-close-circle-line"} text-[10px]`} />
                            </div>
                            {r.isOpen ? t("restaurantOpen") : t("restaurantClosed")}
                          </span>
                        </td>
                        <td className="px-4 py-4">
                          <div className="flex gap-2">
                            <button className="p-1.5 rounded-md bg-white/[0.05] text-gray-400 hover:text-white hover:bg-white/10 transition-colors cursor-pointer">
                              <Pencil size={14} />
                            </button>
                            <button className="p-1.5 rounded-md bg-red-500/10 text-red-400 hover:bg-red-500/20 transition-colors cursor-pointer">
                              <Trash2 size={14} />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* Menu Tab */}
        {activeTab === "menu" && (
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <h2 className="text-lg font-bold">{t("menuItems")}</h2>
              <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-[#9d7bff] text-white text-sm font-medium hover:bg-[#b79fff] transition-colors cursor-pointer">
                <Plus size={16} /> {t("addProduct")}
              </button>
            </div>

            <div className="bg-[#12121a] rounded-2xl border border-white/[0.06] overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead className="bg-white/[0.03] text-gray-400">
                    <tr>
                      <th className={`${isRtl ? "text-right" : "text-left"} px-4 py-3 font-medium`}>{t("product")}</th>
                      <th className={`${isRtl ? "text-right" : "text-left"} px-4 py-3 font-medium`}>{t("restaurant")}</th>
                      <th className={`${isRtl ? "text-right" : "text-left"} px-4 py-3 font-medium`}>{t("category")}</th>
                      <th className={`${isRtl ? "text-right" : "text-left"} px-4 py-3 font-medium`}>{t("price")}</th>
                      <th className={`${isRtl ? "text-right" : "text-left"} px-4 py-3 font-medium`}>{t("status")}</th>
                      <th className={`${isRtl ? "text-right" : "text-left"} px-4 py-3 font-medium`}>{t("actions")}</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/[0.04]">
                    {menuItems.map((item) => {
                      const restaurant = restaurants.find((r) => r.id === item.restaurantId);
                      return (
                        <tr key={item.id} className="hover:bg-white/[0.02] transition-colors">
                          <td className="px-4 py-4">
                            <div className="flex items-center gap-3">
                              <img
                                src={item.image}
                                alt={getLocalizedName(item.name, lang)}
                                className="w-10 h-10 rounded-lg object-cover"
                              />
                              <div>
                                <p className="font-medium">{getLocalizedName(item.name, lang)}</p>
                                <p className="text-xs text-gray-500 line-clamp-1">{getLocalizedDesc(item.description, lang)}</p>
                              </div>
                            </div>
                          </td>
                          <td className="px-4 py-4">{restaurant ? getLocalizedName(restaurant.name, lang) : "-"}</td>
                          <td className="px-4 py-4">{t("category_" + item.category)}</td>
                          <td className="px-4 py-4 font-bold text-[#9d7bff]">
                            {item.price} {t("currency")}
                          </td>
                          <td className="px-4 py-4">
                            <span
                              className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-medium ${
                                item.isAvailable
                                  ? "bg-green-400/10 text-green-400"
                                  : "bg-red-400/10 text-red-400"
                              }`}
                            >
                              <div className="w-3.5 h-3.5 flex items-center justify-center">
                                <i className={`${item.isAvailable ? "ri-checkbox-circle-line" : "ri-close-circle-line"} text-[10px]`} />
                              </div>
                              {item.isAvailable ? t("available") : t("notAvailable")}
                            </span>
                          </td>
                          <td className="px-4 py-4">
                            <div className="flex gap-2">
                              <button className="p-1.5 rounded-md bg-white/[0.05] text-gray-400 hover:text-white hover:bg-white/10 transition-colors cursor-pointer">
                                <Pencil size={14} />
                              </button>
                              <button className="p-1.5 rounded-md bg-red-500/10 text-red-400 hover:bg-red-500/20 transition-colors cursor-pointer">
                                <Trash2 size={14} />
                              </button>
                            </div>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}