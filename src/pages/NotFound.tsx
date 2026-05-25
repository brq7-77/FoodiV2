import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { Home } from "lucide-react";

export default function NotFound() {
  const { t, i18n } = useTranslation("common");

  return (
    <div className="min-h-screen bg-[#0a0a0f] text-white flex items-center justify-center px-4" dir={i18n.dir()}>
      <div className="text-center">
        <h1 className="text-8xl md:text-9xl font-black text-[#9d7bff]/20 mb-4">
          404
        </h1>
        <h2 className="text-2xl md:text-3xl font-bold mb-3">{t("notFound")}</h2>
        <p className="text-gray-400 mb-8">{t("pageNotFoundDesc")}</p>
        <Link
          to="/"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#9d7bff] text-white font-bold hover:bg-[#b79fff] transition-colors shadow-[0_0_20px_rgba(157,123,255,0.3)]"
        >
          <Home size={18} />
          {t("goHome")}
        </Link>
      </div>
    </div>
  );
}