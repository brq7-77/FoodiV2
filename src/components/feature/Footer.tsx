import { useTranslation } from "react-i18next";

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="w-full border-t border-white/[0.06] bg-[#0a0a0f] mt-20">
      <div className="w-full px-4 md:px-8 lg:px-12 py-10">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-[#9d7bff]/20 border border-[#9d7bff]/30 flex items-center justify-center">
              <div className="w-4 h-4 flex items-center justify-center">
                <i className="ri-restaurant-2-line text-[#9d7bff] text-sm" />
              </div>
            </div>
            <span className="text-white font-bold font-sans">Foodi</span>
          </div>

          <div className="flex items-center gap-6 text-gray-500 text-sm">
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 flex items-center justify-center">
                <i className="ri-mail-line text-gray-500" />
              </div>
              <span>support@foodi.com</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 flex items-center justify-center">
                <i className="ri-phone-line text-gray-500" />
              </div>
              <span>+965 1234 5678</span>
            </div>
          </div>

          <p className="text-gray-500 text-sm">
            {t("footerRights")}
          </p>
        </div>
      </div>
    </footer>
  );
}