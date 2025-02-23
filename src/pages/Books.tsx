
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Book } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { books } from "@/data/books";
import { Link } from "react-router-dom";

const Books = () => {
  const { locale } = useLanguage();

  // Convert books object to array and sort by id
  const booksList = Object.entries(books)
    .map(([slug, book]) => ({
      ...book,
      slug
    }))
    .sort((a, b) => a.id - b.id);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="pt-32 pb-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-serif font-medium mb-12 text-center">
            Books
          </h1>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 max-w-6xl mx-auto">
            {booksList.map((book) => (
              <Link to={`/books/${book.slug}`} key={book.id} className="group">
                <div className="aspect-[2/3] bg-cream-100 rounded-lg overflow-hidden mb-6 group-hover:shadow-xl transition-shadow duration-300">
                  {book.coverImage[locale] ? (
                    <img
                      src={book.coverImage[locale]}
                      alt={book.title[locale]}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center">
                      <Book size={48} className="text-warm-gray-200" />
                    </div>
                  )}
                </div>
                
                <h2 className="text-2xl font-serif mb-3 group-hover:text-warm-gray-800 transition-colors">
                  {book.title[locale]}
                </h2>
                <p className="text-warm-gray-600 mb-2">{book.year}</p>
                <p className="text-warm-gray-800">{book.tagline[locale]}</p>
              </Link>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Books;
