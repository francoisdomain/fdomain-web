
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { WelcomeModal } from "@/components/WelcomeModal";
import { Book } from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";

const Index = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <WelcomeModal />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 page-transition">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-medium mb-6">
              {t("hero.title")}
            </h1>
            <p className="text-lg md:text-xl text-warm-gray-800 mb-8">
              {t("hero.subtitle")}
            </p>
          </div>
        </div>
      </section>

      {/* Featured Books Section */}
      <section className="py-16 bg-cream-50 page-transition">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-serif text-center mb-12">
            {t("sections.featuredBooks")}
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[1, 2, 3].map((book) => (
              <div
                key={book}
                className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden"
              >
                <div className="aspect-[2/3] bg-cream-100 flex items-center justify-center">
                  <Book size={48} className="text-warm-gray-200" />
                </div>
                <div className="p-6">
                  <h3 className="font-serif text-xl mb-2">Book Title {book}</h3>
                  <p className="text-warm-gray-800">
                    A compelling story about love, loss, and redemption.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="py-16 page-transition">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-serif mb-6">{t("sections.aboutTitle")}</h2>
            <p className="text-lg text-warm-gray-800 mb-8">
              {t("sections.aboutText")}
            </p>
            <Link
              to="/about"
              className="inline-block px-6 py-3 bg-warm-gray-900 text-white rounded-lg hover:bg-warm-gray-800 transition-colors"
            >
              {t("buttons.learnMore")}
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-cream-50 page-transition">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-serif mb-6">{t("sections.contactTitle")}</h2>
            <p className="text-lg text-warm-gray-800 mb-8">
              {t("sections.contactText")}
            </p>
            <Link
              to="/contact"
              className="inline-block px-6 py-3 border-2 border-warm-gray-900 text-warm-gray-900 rounded-lg hover:bg-warm-gray-900 hover:text-white transition-colors"
            >
              {t("buttons.contactMe")}
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
