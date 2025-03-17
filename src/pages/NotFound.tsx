
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { ArrowLeft } from "lucide-react";
import { SEO } from "@/components/SEO";
import { books } from "@/data/books";
import { blogArticles } from "@/data/blogArticles";
import { useLanguage } from "@/contexts/LanguageContext";

const NotFound = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [countdown, setCountdown] = useState(5);
  const { locale } = useLanguage();

  // Extract potential book or blog slug from URL
  const pathParts = location.pathname.split('/').filter(Boolean);
  
  // Check if this is a book or blog detail page
  const isBookPage = pathParts.length >= 2 && pathParts[0] === 'books';
  const isBlogPage = pathParts.length >= 2 && pathParts[0] === 'blog';
  const slug = pathParts[1];
  
  // Get book or blog data if available
  const book = isBookPage && slug ? books[slug] : null;
  const blogArticle = isBlogPage && slug ? blogArticles[slug] : null;
  
  // Set SEO metadata based on the content type
  let seoTitle = "404 - Page Not Found";
  let seoDescription = "Sorry, the page you are looking for does not exist.";
  let seoImage = "";
  let jsonLd = null;
  
  // Check if this might be a crawler/bot
  const isBot = typeof navigator !== 'undefined' && /bot|googlebot|crawler|spider|robot|crawling|facebook|twitter|linkedin|social/i.test(navigator.userAgent);
  
  // If it's a bot and looking for a book or blog page, redirect to the pre-rendered version
  useEffect(() => {
    if (isBot) {
      console.log("Bot detected, attempting to redirect");
      if (book && isBookPage) {
        console.log(`Redirecting bot to prerender/books/${slug}.html`);
        window.location.href = `/prerender/books/${slug}.html`;
      } else if (blogArticle && isBlogPage) {
        console.log(`Redirecting bot to prerender/blog/${slug}.html`);
        window.location.href = `/prerender/blog/${slug}.html`;
      }
    }
  }, [isBot, book, blogArticle, isBookPage, isBlogPage, slug]);
  
  if (book) {
    seoTitle = book.title[locale];
    seoDescription = book.tagline[locale];
    seoImage = book.coverImage[locale];
    jsonLd = {
      "@context": "https://schema.org",
      "@type": "Book",
      name: book.title[locale],
      description: book.tagline[locale],
      image: book.coverImage[locale],
    };
  } else if (blogArticle) {
    seoTitle = blogArticle.title;
    seoDescription = blogArticle.summary;
    seoImage = blogArticle.imageUrl;
    jsonLd = {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      headline: blogArticle.title,
      description: blogArticle.summary,
      image: blogArticle.imageUrl,
      datePublished: blogArticle.publishedDate
    };
  }

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );

    const timer = setInterval(() => {
      setCountdown((prev) => prev - 1);
    }, 1000);

    const redirect = setTimeout(() => {
      // If it's a book or blog page that exists in our data, navigate to it properly
      if (book) {
        navigate(`/books/${slug}`);
      } else if (blogArticle) {
        navigate(`/blog/${slug}`);
      } else {
        navigate('/');
      }
    }, 5000);

    return () => {
      clearInterval(timer);
      clearTimeout(redirect);
    };
  }, [location.pathname, navigate, book, blogArticle, slug]);

  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title={seoTitle}
        description={seoDescription}
        image={seoImage}
        pathname={location.pathname}
        jsonLd={jsonLd}
      />
      <Navigation />
      
      <div className="container mx-auto px-4 pt-32 pb-16">
        <div className="max-w-2xl mx-auto text-center">
          <h1 className="text-8xl font-serif font-medium mb-6 text-warm-gray-900">
            404
          </h1>
          
          <h2 className="text-2xl font-serif text-warm-gray-800 mb-8">
            Oops! Page not found
          </h2>
          
          <p className="text-lg text-warm-gray-600 mb-8">
            {book || blogArticle 
              ? "We have this content, but you've accessed it through an invalid URL."
              : "The page you are looking for might have been removed, had its name changed, or is temporarily unavailable."}
          </p>
          
          <p className="text-warm-gray-600 mb-8">
            Redirecting {book || blogArticle ? "to the correct page" : "to homepage"} in {countdown} seconds...
          </p>
          
          <a 
            href={book ? `/books/${slug}` : blogArticle ? `/blog/${slug}` : "/"} 
            className="inline-flex items-center gap-2 px-6 py-3 bg-warm-gray-900 text-white rounded-lg hover:bg-warm-gray-800 transition-colors"
          >
            <ArrowLeft size={20} />
            {book ? "Go to Book Page" : blogArticle ? "Go to Blog Article" : "Return to Home"}
          </a>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default NotFound;
