
import { Link } from "react-router-dom";
import { useState } from "react";
import { X } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { books } from "@/data/books";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";

export const Footer = () => {
  const [isNewsletterOpen, setIsNewsletterOpen] = useState(false);
  const { locale, t } = useLanguage();

  // Get books and sort by id
  const booksList = Object.entries(books)
    .map(([slug, book]) => ({
      title: book.title[locale],
      slug
    }))
    .sort((a, b) => books[a.slug].id - books[b.slug].id);

  // Get the appropriate MailerLite form with group parameter based on locale
  const getMailerLiteForm = () => {
    // Map locales to group IDs - replace these with your actual MailerLite group IDs
    const groupIds = {
      'fr-FR': 'fr-FR',
      'en-UK': 'en-GB',
      'en-US': 'en-US'
    };

    const groupId = groupIds[locale];
    
    return (
      <iframe
        src={`https://embedded-form.mailerlite.fr/general-form?ml_groups=${groupId}`} // Replace with your actual base form URL
        style={{width: "100%", height: "400px", border: "none"}}
        title={`Newsletter Signup Form - ${locale}`}
      ></iframe>
    );
  };

  return (
    <>
      <footer className="bg-cream-50 border-t">
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Books */}
            <div>
              <h3 className="font-serif text-lg font-medium mb-4">
                {t("footer.books")}
              </h3>
              <ul className="space-y-2">
                {booksList.map((book) => (
                  <li key={book.slug}>
                    <Link 
                      to={`/books/${book.slug}`} 
                      className="text-warm-gray-600 hover:text-warm-gray-900"
                    >
                      {book.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="font-serif text-lg font-medium mb-4">
                {t("footer.quickLinks")}
              </h3>
              <ul className="space-y-2">
                <li>
                  <Link to="/about" className="text-warm-gray-600 hover:text-warm-gray-900">
                    {t("nav.about")}
                  </Link>
                </li>
                <li>
                  <Link to="/books" className="text-warm-gray-600 hover:text-warm-gray-900">
                    {t("nav.books")}
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="text-warm-gray-600 hover:text-warm-gray-900">
                    {t("nav.contact")}
                  </Link>
                </li>
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h3 className="font-serif text-lg font-medium mb-4">
                {t("footer.legal")}
              </h3>
              <ul className="space-y-2">
                <li>
                  <Link to="/privacy" className="text-warm-gray-600 hover:text-warm-gray-900">
                    {t("footer.privacyPolicy")}
                  </Link>
                </li>
                <li>
                  <Link to="/terms" className="text-warm-gray-600 hover:text-warm-gray-900">
                    {t("footer.termsOfService")}
                  </Link>
                </li>
              </ul>
            </div>

            {/* Connect */}
            <div>
              <h3 className="font-serif text-lg font-medium mb-4">
                {t("footer.connect")}
              </h3>
              <p className="text-warm-gray-600 mb-4">
                {t("footer.stayUpdated")}
              </p>
              <Button 
                variant="outline" 
                onClick={() => setIsNewsletterOpen(true)}
              >
                {t("footer.newsletter")}
              </Button>
            </div>
          </div>
          
          <div className="mt-12 pt-8 border-t text-center text-warm-gray-600">
            <p>&copy; {new Date().getFullYear()} François Domain. {t("footer.allRightsReserved")}</p>
          </div>
        </div>
      </footer>

      <Dialog open={isNewsletterOpen} onOpenChange={setIsNewsletterOpen}>
        <DialogContent className="sm:max-w-[600px]">
          <DialogHeader>
            <DialogTitle>{t("footer.subscribeNewsletter")}</DialogTitle>
            <DialogDescription>
              {t("footer.subscribeMessage")}
            </DialogDescription>
          </DialogHeader>
          <div className="py-4">
            {getMailerLiteForm()}
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};
