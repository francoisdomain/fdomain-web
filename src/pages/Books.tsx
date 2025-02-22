
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Book, ShoppingCart } from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import { books } from "@/data/books";

const Books = () => {
  const { locale } = useLanguage();
  const booksArray = Object.values(books);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="pt-32 pb-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-serif font-medium mb-12 text-center">
            Books
          </h1>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 max-w-6xl mx-auto">
            {booksArray.map((book) => (
              <div key={book.slug} className="group">
                <Link to={`/books/${book.slug}`}>
                  <div className="aspect-[2/3] bg-cream-100 rounded-lg overflow-hidden mb-6 group-hover:shadow-xl transition-shadow duration-300">
                    {book.coverImage[locale] ? (
                      <img
                        src={book.coverImage[locale]}
                        alt={book.title}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center">
                        <Book size={48} className="text-warm-gray-200" />
                      </div>
                    )}
                  </div>
                </Link>
                
                <h2 className="text-2xl font-serif mb-3 group-hover:text-warm-gray-800 transition-colors">
                  {book.title}
                </h2>
                <p className="text-warm-gray-600 mb-2">{book.year}</p>
                <p className="text-warm-gray-800 mb-4">{book.summary[locale].substring(0, 150)}...</p>
                
                <a
                  href={book.amazonLink[locale]}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-4 py-2 bg-[#FF9900] hover:bg-[#FF9900]/90 text-white rounded-lg transition-colors text-sm"
                >
                  <ShoppingCart className="w-4 h-4 mr-2" />
                  Buy on Amazon
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Books;
