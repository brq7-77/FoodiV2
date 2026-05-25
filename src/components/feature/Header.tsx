import { useState, useRef, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { Globe, ChevronDown } from "lucide-react";

const languages = [
  { code: "en", label: "EN", name: "English" },
  { code: "tr", label: "TR", name: "Türkçe" },
  { code: "ar", label: "AR", name: "العربية" },
];

export default function Header() {
  const { t, i18n } = useTranslation();
  const [langOpen, setLangOpen] = useState(false);
  const langRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (langRef.current && !langRef.current.contains(e.target as Node)) {
        setLangOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  const currentLang = languages.find((l) => l.code === i18n.language) || languages[0];

  const changeLang = (code: string) => {
    i18n.changeLanguage(code);
    setLangOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#0a0a0f]/80 backdrop-blur-xl border-b border-white/[0.06]">
      <div className="w-full px-4 md:px-8 lg:px-12 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 group">
          <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-[#9d7bff]/20 border border-[#9d7bff]/30 flex items-center justify-center shadow-[0_0_15px_rgba(157,123,255,0.2)] group-hover:shadow-[0_0_25px_rgba(157,123,255,0.35)] transition-all duration-300">
            <div className="w-5 h-5 md:w-6 md:h-6 flex items-center justify-center">
              <i className="ri-restaurant-2-line text-[#b79fff] text-lg md:text-xl" />
            </div>
          </div>
          <div className="hidden sm:flex flex-col">
            <span className="text-white font-bold text-base md:text-lg tracking-tight font-sans">
              {t("brandName")}
            </span>
            <span className="text-gray-500 text-[11px]">
              {t("brandTagline")}
            </span>
          </div>
        </Link>

        {/* Right Side */}
        <div className="flex items-center gap-3">
          {/* Language Switcher */}
          <div className="relative" ref={langRef}>
            <button
              onClick={() => setLangOpen(!langOpen)}
              className="flex items-center gap-1.5 px-3 py-2 rounded-lg bg-white/[0.04] border border-white/[0.08] hover:border-[#9d7bff]/30 hover:bg-white/[0.06] transition-all duration-300 cursor-pointer"
            >
              <div className="w-4 h-4 flex items-center justify-center">
                <Globe size={15} className="text-[#9d7bff]" />
              </div>
              <span className="text-white text-sm font-medium">{currentLang.label}</span>
              <div className="w-4 h-4 flex items-center justify-center">
                <ChevronDown size={14} className={`text-gray-400 transition-transform duration-200 ${langOpen ? "rotate-180" : ""}`} />
              </div>
            </button>

            {langOpen && (
              <div className="absolute top-full mt-2 right-0 min-w-[140px] bg-[#12121a] border border-white/[0.08] rounded-xl shadow-2xl overflow-hidden z-50 py-1">
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => changeLang(lang.code)}
                    className={`w-full text-left px-4 py-2.5 text-sm transition-colors cursor-pointer flex items-center gap-2 ${
                      i18n.language === lang.code
                        ? "text-[#9d7bff] bg-[#9d7bff]/10"
                        : "text-gray-300 hover:bg-white/[0.04] hover:text-white"
                    }`}
                  >
                    <div className="w-4 h-4 flex items-center justify-center">
                      <i className={`${i18n.language === lang.code ? "ri-check-line text-[#9d7bff]" : "ri-earth-line text-gray-500"} text-xs`} />
                    </div>
                    <span>{lang.name}</span>
                    <span className="text-xs opacity-60 ml-auto">{lang.label}</span>
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Track Button */}
          <Link
            to="/track"
            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/[0.04] border border-white/[0.08] hover:border-[#9d7bff]/30 hover:bg-white/[0.06] transition-all duration-300"
          >
            <div className="w-4 h-4 flex items-center justify-center">
              <i className="ri-map-pin-line text-[#9d7bff] text-sm" />
            </div>
            <span className="text-white text-sm font-medium whitespace-nowrap hidden sm:inline">
              {t("trackOrder")}
            </span>
          </Link>
        </div>
      </div>
    </header>
  );
}