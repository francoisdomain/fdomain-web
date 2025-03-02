
import { createContext, useContext, useState, ReactNode, useEffect } from 'react';
import { translations } from '@/utils/translations';
import Cookies from 'js-cookie';

type Locale = "en-US" | "en-UK" | "fr-FR";

interface LanguageContextType {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: (key: string) => string;
  isInitialized: boolean;
}

// Helper function to get base language from locale for translations
const getBaseLanguage = (locale: Locale): "en" | "fr" => {
  return locale.startsWith('fr') ? 'fr' : 'en';
};

// Helper to get user's preferred locale
const getPreferredLocale = (): Locale => {
  // Check cookie first
  const cookieLocale = Cookies.get('preferred-locale');
  if (cookieLocale === 'en-US' || cookieLocale === 'en-UK' || cookieLocale === 'fr-FR') {
    return cookieLocale as Locale;
  }

  // Check browser language
  const browserLang = navigator.language || (navigator as any).userLanguage;
  if (browserLang) {
    // Match browser locale to our supported locales
    if (browserLang.startsWith('fr')) return 'fr-FR';
    if (browserLang.includes('GB') || browserLang.includes('UK')) return 'en-UK';
    return 'en-US'; // Default for all other English variants
  }

  // Default to en-US
  return 'en-US';
};

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocale] = useState<Locale>(() => getPreferredLocale());
  const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
    // Set initial locale based on cookie or browser preference
    const initialLocale = getPreferredLocale();
    setLocale(initialLocale);
    // Set initialized to true after first render
    setIsInitialized(true);
  }, []);

  const handleSetLocale = (newLocale: Locale) => {
    setLocale(newLocale);
    // Store in cookie with 1 year expiry
    Cookies.set('preferred-locale', newLocale, { expires: 365 });
  };

  const t = (path: string) => {
    const keys = path.split('.');
    let value: any = translations[getBaseLanguage(locale)];
    
    for (const key of keys) {
      if (value === undefined) return path;
      value = value[key];
    }
    
    return value || path;
  };

  return (
    <LanguageContext.Provider value={{ 
      locale, 
      setLocale: handleSetLocale, 
      t,
      isInitialized 
    }}>
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
