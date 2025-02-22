
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Book, ShoppingCart } from "lucide-react";
import { useParams, Navigate } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import { books } from "@/data/books";

const BookDetail = () => {
  const { slug } = useParams();
  const { locale } = useLanguage();
  
  const book = slug ? books[slug] : null;
  
  if (!book) {
    return <Navigate to="/books" replace />;
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="pt-32 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12">
              {/* Book Cover */}
              <div className="aspect-[2/3] bg-cream-100 rounded-xl overflow-hidden shadow-xl">
                {book.coverImage[locale] ? (
                  <img
                    src={book.coverImage[locale]}
                    alt={book.title[locale]}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center">
                    <Book size={96} className="text-warm-gray-200" />
                  </div>
                )}
              </div>
              
              {/* Book Info */}
              <div>
                <h1 className="text-4xl md:text-5xl font-serif font-medium mb-4">
                  {book.title[locale]}
                </h1>
                
                <div className="space-y-6">
                  <div className="flex items-center space-x-4 text-warm-gray-600">
                    <span>{book.year}</span>
                    <span>•</span>
                    <span>{book.pages} pages</span>
                    <span>•</span>
                    <span>{book.publisher}</span>
                  </div>
                  
                  <div className="prose prose-lg">
                    <h2 className="text-2xl font-serif font-medium mb-4">Summary</h2>
                    <p className="text-warm-gray-800">{book.summary[locale]}</p>
                  </div>

                  <div>
                    <a
                      href={book.amazonLink[locale]}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-6 py-3 bg-[#FF9900] hover:bg-[#FF9900]/90 text-white rounded-lg transition-colors"
                    >
                      <ShoppingCart className="w-5 h-5 mr-2" />
                      Buy on Amazon
                    </a>
                  </div>
                  
                  <div className="text-sm text-warm-gray-600">
                    ISBN: {book.isbn}
                  </div>
                </div>
              </div>
            </div>
            
            {/* Prologue Section */}
            <div className="mt-16 pt-16 border-t">
              <div className="max-w-3xl mx-auto">
                <h2 className="text-3xl font-serif font-medium mb-8 text-center">
                  Prologue
                </h2>
                
                <div className="prose prose-lg mx-auto">
                  <div className="bg-cream-50 p-8 rounded-xl">
                    <p className="text-warm-gray-800 leading-relaxed whitespace-pre-line">
                      {book.prologue[locale]}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default BookDetail;
