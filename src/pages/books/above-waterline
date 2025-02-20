import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Book } from "lucide-react";
import { useParams } from "react-router-dom";

const BookDetail = () => {
  const { slug } = useParams();
  
  // This would typically come from an API or database
  const book = {
    title: "The Silent Echo",
    coverImage: null, // Replace with actual image path
    year: "2023",
    summary: "In the misty shores of Nova Scotia, where the Atlantic winds carry whispers of untold stories, Claire McKenna discovers an old diary that threatens to unravel not just her family's past, but the entire town's carefully guarded secrets. As she delves deeper into its pages, she realizes that some echoes of the past are better left unheard.",
    prologue: `The old lighthouse stood sentinel against the gathering storm, its beam cutting through the darkness like a blade. Sarah watched from her window as the rain began to fall, each drop carrying with it a memory she'd tried so hard to forget. Thirty years had passed since that night, yet time had done little to dull the edges of her guilt.

    The letter lay unopened on her desk, its cream-colored envelope bearing a postmark from a town she'd sworn never to think of again. But fate, it seemed, had other plans...`,
    isbn: "978-1234567890",
    pages: 342,
    publisher: "Moonlight Press",
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="pt-32 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12">
              {/* Book Cover */}
              <div className="aspect-[2/3] bg-cream-100 rounded-xl overflow-hidden shadow-xl">
                {book.coverImage ? (
                  <img
                    src={book.coverImage}
                    alt={book.title}
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
                  {book.title}
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
                    <p className="text-warm-gray-800">{book.summary}</p>
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
                      {book.prologue}
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
