
import { useState } from "react";
import { Menu, Globe, X, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";

export const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLangOpen, setIsLangOpen] = useState(false);

  const languages = [
    { code: "en-US", name: "English (UK)" },
    { code: "en-UK", name: "English (US)" },
    { code: "en-US", name: "English (CA)" },
    { code: "fr-FR", name: "Français (FR)" },
  ];

  const books = [
    { id: 1, title: "Close Enough", path: "/books/close-enough" },
    { id: 2, title: "Above the Waterline", path: "/books/above-waterline" },
    { id: 3, title: "---coming soon---", path: "/books/coming-soon" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 bg-background/80 backdrop-blur-md z-50 border-b">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="font-serif text-xl font-medium">
            François Domain
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/about" className="hover:text-warm-gray-800 transition-colors">
              About
            </Link>
            {/* Books Dropdown */}
            <div className="relative group">
              <button
                className="flex items-center space-x-2 hover:text-warm-gray-800 transition-colors"
              >
                <span>Books</span>
                <ChevronDown size={16} className="group-hover:transform group-hover:-rotate-180 transition-transform" />
              </button>
              
              <div className="absolute top-full right-0 mt-2 bg-white rounded-lg shadow-lg py-2 w-48 border transform transition-all duration-200 opacity-0 -translate-y-2 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto">
                {books.map((book) => (
                  <Link
                    key={book.id}
                    to={book.path}
                    className="block w-full text-left px-4 py-2 hover:bg-cream-100 transition-colors"
                  >
                    {book.title}
                  </Link>
                ))}
                <div className="border-t my-2"></div>
                <Link
                  to="/books"
                  className="block w-full text-left px-4 py-2 hover:bg-cream-100 transition-colors text-warm-gray-600"
                >
                  View All Books
                </Link>
              </div>
            </div>
            <Link to="/contact" className="hover:text-warm-gray-800 transition-colors">
              Contact
            </Link>
            
            {/* Language Selector */}
            <div className="relative">
              <button
                onClick={() => setIsLangOpen(!isLangOpen)}
                className="flex items-center space-x-2 hover:text-warm-gray-800 transition-colors"
              >
                <Globe size={20} />
                <span>Location</span>
              </button>
              
              {isLangOpen && (
                <div className="absolute top-full right-0 mt-2 bg-white rounded-lg shadow-lg py-2 w-40 border">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      className="block w-full text-left px-4 py-2 hover:bg-cream-100 transition-colors"
                      onClick={() => setIsLangOpen(false)}
                    >
                      {lang.name}
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
              About
            </Link>
            {/* Mobile Books Menu */}
            <div className="space-y-2">
              <p className="font-medium">Books</p>
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
              Contact
            </Link>
            
            {/* Mobile Language Selector */}
            <div className="border-t pt-4">
              <p className="text-sm text-warm-gray-200 mb-2">Select Language</p>
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  className="block w-full text-left py-2 hover:text-warm-gray-800 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {lang.name}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};
