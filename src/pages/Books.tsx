
import { Navigation } from "@/components/Navigation";
import { Book } from "lucide-react";

const Books = () => {
  const books = [
    {
      id: 1,
      title: "The Silent Echo",
      description: "A haunting tale of love and loss in a small coastal town, where secrets echo through generations.",
      year: "2023",
      cover: null,
    },
    {
      id: 2,
      title: "Midnight's Tale",
      description: "When darkness falls, some stories come alive. A mystery that unfolds in the heart of an ancient city.",
      year: "2022",
      cover: null,
    },
    {
      id: 3,
      title: "The Last Chapter",
      description: "Every ending is a new beginning. A story of redemption and second chances.",
      year: "2021",
      cover: null,
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="pt-32 pb-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-serif font-medium mb-12 text-center">
            Books
          </h1>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 max-w-6xl mx-auto">
            {books.map((book) => (
              <div key={book.id} className="group">
                <div className="aspect-[2/3] bg-cream-100 rounded-lg overflow-hidden mb-6 group-hover:shadow-xl transition-shadow duration-300">
                  {book.cover ? (
                    <img
                      src={book.cover}
                      alt={book.title}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center">
                      <Book size={48} className="text-warm-gray-200" />
                    </div>
                  )}
                </div>
                
                <h2 className="text-2xl font-serif mb-3 group-hover:text-warm-gray-800 transition-colors">
                  {book.title}
                </h2>
                <p className="text-warm-gray-600 mb-2">{book.year}</p>
                <p className="text-warm-gray-800">{book.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Books;
