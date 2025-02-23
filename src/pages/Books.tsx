import { useNavigate } from "react-router-dom";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { WelcomeModal } from "@/components/WelcomeModal";
import { useLanguage } from "@/contexts/LanguageContext";
import { books } from "@/data/books";

export default function Index() {
  const navigate = useNavigate();
  const { locale } = useLanguage();
  
  // Sort books by id in ascending order and take the last 3
  const recentBooks = Object.entries(books)
    .map(([slug, book]) => ({ ...book, slug }))
    .sort((a, b) => (a.id || 0) - (b.id || 0))
    .slice(-3);
  return (
    <div className="min-h-screen flex flex-col" bg-background>
      <Navigation />
      
      <div className="pt-32 pb-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-serif font-medium mb-12 text-center">
            Books
          </h1>

                <main className="flex-grow container mx-auto px-4 py-8">
        <section className="mb-16">
          <h2 className="text-3xl font-serif text-center mb-12">Latest Books</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {recentBooks.map((book) => (
              <div 
                key={book.slug}
                className="group cursor-pointer"
                onClick={() => navigate(`/books/${book.slug}`)}
              >
                <div className="relative aspect-[2/3] mb-4 overflow-hidden rounded-lg shadow-lg transition-transform duration-300 group-hover:scale-105">
                  <img
                    src={book.coverImage[locale]}
                    alt={book.title[locale]}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="font-serif text-xl mb-2 group-hover:text-warm-gray-800 transition-colors">
                  {book.title[locale]}
                </h3>
                <p className="text-warm-gray-600 text-sm">
                  {book.tagline[locale]}
                </p>
              </div>
            ))}
          </div>
        </section>






          

        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Books;
