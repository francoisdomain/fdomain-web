
import { useEffect, useState } from "react";
import { X } from "lucide-react";

export const WelcomeModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 10000);

    return () => clearTimeout(timer);
  }, []);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
      onClick={() => setIsOpen(false)}
    >
      <div
        className="bg-white rounded-xl p-8 max-w-md mx-4 relative animate-fade-in"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-4 right-4 p-1 hover:bg-cream-100 rounded-lg transition-colors"
        >
          <X size={20} />
        </button>

        <h2 className="font-serif text-2xl font-medium mb-4">Welcome to my website!</h2>
        <p className="text-warm-gray-800 mb-6">
          Thank you for visiting. Here you'll find all my latest books and updates. Feel free to explore and get in touch!
        </p>
        
        <button
          onClick={() => setIsOpen(false)}
          className="w-full px-4 py-2 bg-warm-gray-900 text-white rounded-lg hover:bg-warm-gray-800 transition-colors"
        >
          Got it, thanks!
        </button>
      </div>
    </div>
  );
};
