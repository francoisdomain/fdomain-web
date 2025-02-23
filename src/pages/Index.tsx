
import { useNavigate } from "react-router-dom";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { WelcomeModal } from "@/components/WelcomeModal";
import { useLanguage } from "@/contexts/LanguageContext";
import { books } from "@/data/books";

export default function Index() {
  const navigate = useNavigate();
  const { locale } = useLanguage();
  
  // Sort books by id in descending order and take the first 3
  const recentBooks = Object.entries(books)
    .map(([slug, book]) => ({ ...book, slug }))
    .sort((a, b) => (b.id || 0) - (a.id || 0))
    .slice(0, 3);

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <WelcomeModal />
      
      <main className="flex-grow container mx-auto px-4 py-24">
        <section className="mb-16 text-center">
          <h1 className="text-4xl md:text-6xl font-serif font-medium mb-6">
            François Domain
          </h1>
          <p className="text-xl md:text-2xl text-warm-gray-600 max-w-2xl mx-auto">
            Author of literary fiction that explores the complexities of human relationships 
            and the quiet moments that define our lives.
          </p>
        </section>

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

        <section className="text-center">
          <button
            onClick={() => navigate("/books")}
            className="inline-flex items-center px-6 py-3 border border-warm-gray-300 rounded-lg text-lg font-medium text-warm-gray-900 hover:bg-warm-gray-50 transition-colors"
          >
            View All Books
          </button>
        </section>
      </main>

      <Footer />
    </div>
  );
}
