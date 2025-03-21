
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Book, ShoppingCart } from "lucide-react";
import { useParams, Navigate } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import { books } from "@/data/books";
import { SEO } from "@/components/SEO";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Skeleton } from "@/components/ui/skeleton";
import { useState, useEffect } from "react";
import ReactMarkdown from 'react-markdown';

const BookDetail = () => {
  const { slug } = useParams();
  const { locale } = useLanguage();
  const [imageLoaded, setImageLoaded] = useState(false);
  const [supportsWebP, setSupportsWebP] = useState(false);
  
  const book = slug ? books[slug] : null;
  
  useEffect(() => {
    const checkWebP = async () => {
      const webP = new Image();
      webP.src = 'data:image/webp;base64,UklGRhoAAABXRUJQVlA4TA0AAAAvAAAAEAcQERGIiP4HAA==';
      webP.onload = () => setSupportsWebP(true);
      webP.onerror = () => setSupportsWebP(false);
    };
    checkWebP();
  }, []);

  if (!book) {
    return <Navigate to="/books" replace />;
  }

  const getOptimizedImageUrl = (url: string) => {
    if (!url) return '';
    
    const basePath = url.replace(/\.[^/.]+$/, '');
    
    if (supportsWebP) {
      return `${basePath}.webp`;
    }
    
    return url;
  };

  const bookJsonLd = {
    "@context": "https://schema.org",
    "@type": "Book",
    name: book.title[locale],
    description: book.tagline[locale],
    image: book.coverImage[locale],
    isbn: book.isbn[locale],
    author: {
      "@type": "Person",
      name: "François Domain",
      url: "https://francoisdomain.com/about"
    },
    publisher: {
      "@type": "Organization",
      name: book.publisher
    },
    datePublished: book.year,
    inLanguage: locale,
    numberOfPages: book.pages,
    offers: {
      "@type": "Offer",
      availability: "https://schema.org/InStock",
      url: book.amazonLink[locale]
    }
  };

  const breadcrumbs = [
    { name: "Home", item: "/" },
    { name: "Books", item: "/books" },
    { name: book.title[locale], item: `/books/${slug}` }
  ];

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  // Function for Google Ads conversion tracking
  const gtag_report_conversion = (url?: string) => {
    console.log('Running gtag_report_conversion with URL:', url);
    
    const callback = function () {
      if (typeof(url) != 'undefined') {
        window.location.href = url;
      }
    };
    
    if (window.gtag) {
      window.gtag('event', 'conversion', {
        'send_to': 'AW-16870357564/jaPKCO35xKwaELz0tOw-',
        'event_callback': callback
      });
      console.log('✅ GoogleAds conversion tracked with new conversion ID');
    } else {
      console.log('❌ window.gtag is not available - Google Ads conversion not tracked');
      if (url) {
        window.location.href = url;
      }
    }
    
    return false;
  };

  const handleAmazonClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    console.log('Amazon button clicked - triggering new conversion tracking');
    
    // Google Ads conversion tracking with the new function
    gtag_report_conversion(book.amazonLink[locale]);
    
    // Facebook Pixel event
    if (window.fbq) {
      window.fbq('track', 'InitiateCheckout', {
        content_name: book.title[locale],
        content_ids: [book.isbn[locale]],
        content_type: 'product'
      });
      console.log('✅ Facebook Pixel event tracked for book purchase click');
    } else {
      console.log('❌ window.fbq is not available - Facebook Pixel event not tracked');
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title={book.title[locale]}
        description={book.tagline[locale]}
        image={book.coverImage[locale]}
        article={true}
        pathname={`/books/${slug}`}
        jsonLd={bookJsonLd}
        breadcrumbs={breadcrumbs}
      />
      <Navigation />
      
      <main className="pt-32 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <article className="grid md:grid-cols-2 gap-12">
              <figure className="relative bg-cream-100 rounded-xl overflow-hidden shadow-xl">
                <AspectRatio ratio={2/3} className="w-full">
                  {book.coverImage[locale] ? (
                    <>
                      <Skeleton 
                        className={`absolute inset-0 ${imageLoaded ? 'hidden' : 'block'}`} 
                      />
                      <picture>
                        <source
                          type="image/webp"
                          srcSet={getOptimizedImageUrl(book.coverImage[locale])}
                        />
                        <img
                          src={book.coverImage[locale]}
                          alt={`Cover of ${book.title[locale]}`}
                          className={`w-full h-full object-cover transition-opacity duration-300 ${
                            imageLoaded ? 'opacity-100' : 'opacity-0'
                          }`}
                          loading="eager"
                          onLoad={handleImageLoad}
                          width={800}
                          height={1200}
                          sizes="(max-width: 768px) 100vw, 50vw"
                          decoding="async"
                          fetchPriority="high"
                        />
                      </picture>
                    </>
                  ) : (
                    <div className="w-full h-full flex items-center justify-center">
                      <Book size={96} className="text-warm-gray-200" />
                    </div>
                  )}
                </AspectRatio>
              </figure>
              
              <div>
                <header>
                  <h1 className="text-4xl md:text-5xl font-serif font-medium mb-4">
                    {book.title[locale]}
                  </h1>
                  
                  <dl className="flex items-center space-x-4 text-warm-gray-600">
                    <div>
                      <dt className="sr-only">Publication Year</dt>
                      <dd>{book.year}</dd>
                    </div>
                    <span aria-hidden="true">•</span>
                    <div>
                      <dt className="sr-only">Page Count</dt>
                      <dd>{book.pages} pages</dd>
                    </div>
                    <span aria-hidden="true">•</span>
                    <div>
                      <dt className="sr-only">Publisher</dt>
                      <dd>{book.publisher}</dd>
                    </div>
                  </dl>
                </header>
                
                <section className="prose prose-lg mt-6">
                  <h2 className="text-2xl font-serif font-medium mb-4">Summary</h2>
                  <p className="text-warm-gray-800" leading-relaxed whitespace-pre-line style={{ whiteSpace: 'pre-line' }} >
                    <ReactMarkdown>
                      {book.summary[locale]}
                    </ReactMarkdown>
                  </p>
                </section>

                <div className="mt-6">
                  <a
                    href={book.amazonLink[locale]}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-6 py-3 bg-[#FF9900] hover:bg-[#FF9900]/90 text-white rounded-lg transition-colors"
                    aria-label={`Buy ${book.title[locale]} on Amazon`}
                    onClick={handleAmazonClick}
                  >
                    <ShoppingCart className="w-5 h-5 mr-2" aria-hidden="true" />
                    {book.amazonLinkText[locale]}
                  </a>
                </div>
                
                <footer className="mt-6">
                  <dl className="text-sm text-warm-gray-600">
                    <dt className="sr-only">ISBN</dt>
                    <dd>ISBN: {book.isbn[locale]}</dd>
                  </dl>
                </footer>
              </div>
            </article>
            
            <section className="mt-16 pt-16 border-t">
              <div className="max-w-3xl mx-auto">
                <h2 className="text-3xl font-serif font-medium mb-8 text-center">
                  Prologue
                </h2>
                
                <div className="prose prose-lg mx-auto">
                  <blockquote className="bg-cream-50 p-8 rounded-xl">
                    <p className="text-warm-gray-800 leading-relaxed whitespace-pre-line [&>*:first-child]:text-indent-0 [&>*]:text-indent-8">
                      {book.prologue[locale]}
                    </p>
                  </blockquote>
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default BookDetail;
