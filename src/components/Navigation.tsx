
import { useState } from "react";
import { Menu, Globe, X, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";

export const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isBookOpen, setIsBookOpen] = useState(false);
  const [isLangOpen, setIsLangOpen] = useState(false);
  const { locale, setLocale, t } = useLanguage();

  const locales = [
    { code: "en-US", name: "English (US)" },
    { code: "en-UK", name: "English (UK)" },
    { code: "fr-FR", name: "Français" },
  ];

  const books = [
    { id: 1, title: "Close Enough", path: "/books/close-enough" },
    { id: 2, title: "The Silent Echo", path: "/books/silent-echo" },
    { id: 3, title: "The Last Chapter", path: "/books/last-chapter" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 bg-background/80 backdrop-blur-md z-50 border-b">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2">
            <img
              src="/photo-1486312338219-ce68d2c6f44d"
              alt="FD Logo"
              className="w-8 h-8 object-contain rounded"
            />
            <span className="font-serif text-xl font-medium">François Domain</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/about" className="hover:text-warm-gray-800 transition-colors">
              {t("nav.about")}
            </Link>
            {/* Books Dropdown */}
            <div className="relative">
              <button
                onClick={() => setIsBookOpen(!isBookOpen)}
                className="flex items-center space-x-2 hover:text-warm-gray-800 transition-colors"
              >
                <span>{t("nav.books")}</span>
                <ChevronDown size={16} className={`transform transition-transform ${isBookOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {isBookOpen && (
                <div className="absolute top-full right-0 mt-2 bg-white rounded-lg shadow-lg py-2 w-48 border">
                  {books.map((book) => (
                    <Link
                      key={book.id}
                      to={book.path}
                      className="block w-full text-left px-4 py-2 hover:bg-cream-100 transition-colors"
                      onClick={() => setIsBookOpen(false)}
                    >
                      {book.title}
                    </Link>
                  ))}
                  <div className="border-t my-2"></div>
                  <Link
                    to="/books"
                    className="block w-full text-left px-4 py-2 hover:bg-cream-100 transition-colors text-warm-gray-600"
                    onClick={() => setIsBookOpen(false)}
                  >
                    {t("nav.viewAllBooks")}
                  </Link>
                </div>
              )}
            </div>
            <Link to="/contact" className="hover:text-warm-gray-800 transition-colors">
              {t("nav.contact")}
            </Link>
            
            {/* Language/Locale Selector */}
            <div className="relative">
              <button
                onClick={() => setIsLangOpen(!isLangOpen)}
                className="flex items-center space-x-2 hover:text-warm-gray-800 transition-colors"
              >
                <Globe size={20} />
                <span>{t("nav.language")}</span>
              </button>
              
              {isLangOpen && (
                <div className="absolute top-full right-0 mt-2 bg-white rounded-lg shadow-lg py-2 w-48 border">
                  {locales.map((loc) => (
                    <button
                      key={loc.code}
                      className="block w-full text-left px-4 py-2 hover:bg-cream-100 transition-colors"
                      onClick={() => {
                        setLocale(loc.code as "en-US" | "en-UK" | "fr-FR");
                        setIsLangOpen(false);
                      }}
                    >
                      {loc.name}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 hover:bg-cream-100 rounded-lg transition-colors"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t animate-slideIn">
          <div className="container mx-auto px-4 py-4 space-y-4">
            <Link
              to="/about"
              className="block hover:text-warm-gray-800 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              {t("nav.about")}
            </Link>
            {/* Mobile Books Menu */}
            <div className="space-y-2">
              <p className="font-medium">{t("nav.books")}</p>
              <div className="pl-4 space-y-2">
                {books.map((book) => (
                  <Link
                    key={book.id}
                    to={book.path}
                    className="block hover:text-warm-gray-800 transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {book.title}
                  </Link>
                ))}
              </div>
            </div>
            <Link
              to="/contact"
              className="block hover:text-warm-gray-800 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              {t("nav.contact")}
            </Link>
            
            {/* Mobile Language/Locale Selector */}
            <div className="border-t pt-4">
              <p className="text-sm text-warm-gray-200 mb-2">{t("nav.language")}</p>
              {locales.map((loc) => (
                <button
                  key={loc.code}
                  className="block w-full text-left py-2 hover:text-warm-gray-800 transition-colors"
                  onClick={() => {
                    setLocale(loc.code as "en-US" | "en-UK" | "fr-FR");
                    setIsMenuOpen(false);
                  }}
                >
                  {loc.name}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};
