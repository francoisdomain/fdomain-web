
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="bg-cream-50 border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Books */}
          <div>
            <h3 className="font-serif text-lg font-medium mb-4">Books</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/books/silent-echo" className="text-warm-gray-600 hover:text-warm-gray-900">
                  The Silent Echo
                </Link>
              </li>
              <li>
                <Link to="/books/midnights-tale" className="text-warm-gray-600 hover:text-warm-gray-900">
                  Midnight's Tale
                </Link>
              </li>
              <li>
                <Link to="/books/last-chapter" className="text-warm-gray-600 hover:text-warm-gray-900">
                  The Last Chapter
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-serif text-lg font-medium mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-warm-gray-600 hover:text-warm-gray-900">
                  About
                </Link>
              </li>
              <li>
                <Link to="/books" className="text-warm-gray-600 hover:text-warm-gray-900">
                  All Books
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-warm-gray-600 hover:text-warm-gray-900">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-serif text-lg font-medium mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/privacy" className="text-warm-gray-600 hover:text-warm-gray-900">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-warm-gray-600 hover:text-warm-gray-900">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-serif text-lg font-medium mb-4">Connect</h3>
            <p className="text-warm-gray-600 mb-4">
              Stay updated with new releases and author events.
            </p>
            <a
              href="mailto:contact@author.com"
              className="text-warm-gray-900 hover:text-warm-gray-600"
            >
              contact@author.com
            </a>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t text-center text-warm-gray-600">
          <p>&copy; {new Date().getFullYear()} Author Name. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
