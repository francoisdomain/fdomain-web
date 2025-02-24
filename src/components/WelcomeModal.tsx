
import { useEffect, useState } from "react";
import { X } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export const WelcomeModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { t, locale } = useLanguage();

  useEffect(() => {
    const lastShown = localStorage.getItem('welcomeModalLastShown');
    const now = new Date().getTime();
    const sevenDaysInMs = 7 * 24 * 60 * 60 * 1000;

    // Get the enabled locales for the current language
    const baseLanguage = locale.startsWith('fr') ? 'fr' : 'en';
    const enabledLocales = t(`welcomeModal.enabledLocales`);

    // Show modal only if:
    // 1. The current locale is enabled
    // 2. AND it's never been shown or it's been more than 7 days
    if (
      Array.isArray(enabledLocales) && 
      enabledLocales.includes(locale) && 
      (!lastShown || (now - Number(lastShown)) > sevenDaysInMs)
    ) {
      const timer = setTimeout(() => {
        setIsOpen(true);
        localStorage.setItem('welcomeModalLastShown', now.toString());
      }, 10000);

      return () => clearTimeout(timer);
    }
  }, [locale, t]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
      onClick={() => setIsOpen(false)}
    >
      <div
        className="bg-white rounded-xl p-8 max-w-md mx-4 relative animate-fade-in"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-4 right-4 p-1 hover:bg-cream-100 rounded-lg transition-colors"
        >
          <X size={20} />
        </button>

        <h2 className="font-serif text-2xl font-medium mb-4">
          {t("welcomeModal.title")}
        </h2>
        <p className="text-warm-gray-800 mb-6">
          {t("welcomeModal.message")}
        </p>
        
        <button
          onClick={() => setIsOpen(false)}
          className="w-full px-4 py-2 bg-warm-gray-900 text-white rounded-lg hover:bg-warm-gray-800 transition-colors"
        >
          {t("welcomeModal.buttonText")}
        </button>
      </div>
    </div>
  );
};
