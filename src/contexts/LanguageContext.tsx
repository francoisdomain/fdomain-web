
import { createContext, useContext, useState, ReactNode, useEffect } from 'react';
import { translations } from '@/utils/translations';
import Cookies from 'js-cookie';

type Language = "en" | "fr";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

// Helper function to get base language from locale
const getBaseLanguage = (locale: string): Language => {
  const lang = locale.split('-')[0];
  return lang === 'fr' ? 'fr' : 'en';
};

// Helper to get user's preferred language
const getPreferredLanguage = (): Language => {
  // Check cookie first
  const cookieLang = Cookies.get('preferred-language');
  if (cookieLang === 'en' || cookieLang === 'fr') {
    return cookieLang;
  }

  // Check browser language
  const browserLang = navigator.language || (navigator as any).userLanguage;
  if (browserLang) {
    return getBaseLanguage(browserLang);
  }

  // Default to en
  return 'en';
};

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>(() => getPreferredLanguage());

  useEffect(() => {
    // Set initial language based on cookie or browser preference
    const initialLang = getPreferredLanguage();
    setLanguage(initialLang);
  }, []);

  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang);
    // Store in cookie with 1 year expiry
    Cookies.set('preferred-language', lang, { expires: 365 });
  };

  const t = (path: string) => {
    const keys = path.split('.');
    let value: any = translations[language];
    
    for (const key of keys) {
      if (value === undefined) return path;
      value = value[key];
    }
    
    return value || path;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
