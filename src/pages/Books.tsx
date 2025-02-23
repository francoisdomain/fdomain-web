
import { useNavigate } from "react-router-dom";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { useLanguage } from "@/contexts/LanguageContext";
import { books } from "@/data/books";

export default function Books() {
  const navigate = useNavigate();
  const { locale } = useLanguage();

  // Sort all books by id in descending order
  const sortedBooks = Object.entries(books)
    .map(([slug, book]) => ({ ...book, slug }))
    .sort((a, b) => (b.id || 0) - (a.id || 0));

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-grow container mx-auto px-4 py-24">
        <section className="mb-16 text-center">
          <h1 className="text-4xl md:text-6xl font-serif font-medium mb-6">
            Books
          </h1>
          <p className="text-xl text-warm-gray-600 max-w-2xl mx-auto">
            Explore all books by François Domain
          </p>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {sortedBooks.map((book) => (
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
              <h2 className="font-serif text-2xl mb-2 group-hover:text-warm-gray-800 transition-colors">
                {book.title[locale]}
              </h2>
              <p className="text-warm-gray-600">
                {book.tagline[locale]}
              </p>
              <p className="text-sm text-warm-gray-500 mt-2">
                {book.year}
              </p>
            </div>
          ))}
        </section>
      </main>

      <Footer />
    </div>
  );
}
