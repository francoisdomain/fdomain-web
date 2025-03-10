
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { ArrowLeft } from "lucide-react";
import { SEO } from "@/components/SEO";

const NotFound = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [countdown, setCountdown] = useState(5);

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );

    // Don't redirect if URL contains blog path to give crawlers time to process
    const isBlogPath = location.pathname.includes("/blog/");
    
    if (!isBlogPath) {
      const timer = setInterval(() => {
        setCountdown((prev) => prev - 1);
      }, 1000);

      const redirect = setTimeout(() => {
        navigate('/');
      }, 5000);

      return () => {
        clearInterval(timer);
        clearTimeout(redirect);
      };
    }
    
    // If it's a blog path, don't set up any redirects
    return () => {};
  }, [location.pathname, navigate]);

  // Check if it's a blog path for conditional rendering
  const isBlogPath = location.pathname.includes("/blog/");

  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title={isBlogPath ? location.pathname.split("/").pop() : "404 - Page Not Found"}
        description={isBlogPath 
          ? "François Domain blog article" 
          : "Sorry, the page you are looking for does not exist. You will be redirected to the homepage."
        }
        pathname={location.pathname}
        article={isBlogPath}
      />
      <Navigation />
      
      <div className="container mx-auto px-4 pt-32 pb-16">
        <div className="max-w-2xl mx-auto text-center">
          {!isBlogPath && (
            <>
              <h1 className="text-8xl font-serif font-medium mb-6 text-warm-gray-900">
                404
              </h1>
              
              <h2 className="text-2xl font-serif text-warm-gray-800 mb-8">
                Oops! Page not found
              </h2>
              
              <p className="text-lg text-warm-gray-600 mb-8">
                The page you are looking for might have been removed, had its name changed, 
                or is temporarily unavailable.
              </p>
              
              <p className="text-warm-gray-600 mb-8">
                Redirecting to homepage in {countdown} seconds...
              </p>
            </>
          )}
          
          <a 
            href="/" 
            className="inline-flex items-center gap-2 px-6 py-3 bg-warm-gray-900 text-white rounded-lg hover:bg-warm-gray-800 transition-colors"
          >
            <ArrowLeft size={20} />
            Return to Home
          </a>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default NotFound;
