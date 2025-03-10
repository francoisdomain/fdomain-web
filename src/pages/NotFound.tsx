
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { ArrowLeft } from "lucide-react";
import { SEO } from "@/components/SEO";

// Helper function to check if the current visitor is likely a bot
const isBot = () => {
  const userAgent = navigator.userAgent || '';
  return /bot|googlebot|crawler|spider|robot|crawling|linkedin|facebook|twitter|slack|discordbot|telegrambot|vkshare|skype|line|embedly|postman|curl|wget|mediapartners|search|lighthouse|headless|prerender|screenshot|phantom|puppeteer|webthumb/i.test(userAgent);
};

const NotFound = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [countdown, setCountdown] = useState(5);
  const [isUserBot, setIsUserBot] = useState(false);

  useEffect(() => {
    // Check if the current user is a bot
    setIsUserBot(isBot());
    
    console.log(
      "404 Error: Route accessed:",
      location.pathname,
      "Bot detected:", isBot()
    );

    // If not a bot, set up countdown and navigation
    if (!isBot()) {
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
    
    // Signal to prerender.io that the page is fully loaded
    if (typeof window !== 'undefined' && !window.prerenderReady) {
      window.prerenderReady = true;
    }
  }, [location.pathname, navigate]);

  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="404 - Page Not Found"
        description="Sorry, the page you are looking for does not exist. You will be redirected to the homepage."
        pathname={location.pathname}
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
            The page you are looking for might have been removed, had its name changed, 
            or is temporarily unavailable.
          </p>
          
          {!isUserBot && (
            <p className="text-warm-gray-600 mb-8">
              Redirecting to homepage in {countdown} seconds...
            </p>
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

// Add this globally for prerender.io to detect
if (typeof window !== 'undefined') {
  window.prerenderReady = true;
}

export default NotFound;
