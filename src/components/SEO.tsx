
import { Helmet } from "react-helmet-async";
import { useLanguage } from "@/contexts/LanguageContext";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

interface SEOProps {
  title?: string;
  description?: string;
  image?: string;
  article?: boolean;
  pathname?: string;
  jsonLd?: Record<string, any>;
  breadcrumbs?: Array<{ name: string; item: string }>;
}

export const SEO = ({
  title,
  description,
  image = "/og-image.png",
  article = false,
  pathname = "",
  jsonLd,
  breadcrumbs,
}: SEOProps) => {
  const { locale } = useLanguage();
  const defaultTitle = "François Domain - Author";
  const defaultDescription = "Discover the works of François Domain - contemporary fiction author exploring human connection through compelling storytelling.";
  const siteUrl = "https://francoisdomain.com";
  const location = useLocation();

  // Send pageview to Google Analytics
  useEffect(() => {
    // Use a small delay to ensure proper initialization
    const sendPageView = () => {
      const currentPath = location.pathname + location.search;
      
      // Log what we're sending to help debug
      console.log("GA4 Sending pageview for:", currentPath);
      
      // Send to Google Analytics 4 with just the page title (not the full title with site name)
      if (typeof window.gtag !== 'undefined') {
        window.gtag('event', 'page_view', {
          page_title: title || "Home", // Use just the page title or "Home" for the index page
          page_location: window.location.href,
          page_path: currentPath,
        });
      }
      
      // Also track for Facebook Pixel
      if (typeof window.fbq !== 'undefined') {
        window.fbq('track', 'PageView');
      }
    };

    // Add a small timeout to ensure all page data is loaded
    const timeoutId = setTimeout(sendPageView, 10);
    
    return () => clearTimeout(timeoutId);
  }, [location.pathname, location.search, title]);

  const seo = {
    title: title ? `${title} | ${defaultTitle}` : defaultTitle,
    description: description || defaultDescription,
    image: image.startsWith("http") ? image : `${siteUrl}${image}`,
    url: `${siteUrl}${pathname || location.pathname}`,
  };

  // Default website schema
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: defaultTitle,
    url: siteUrl,
    description: defaultDescription,
    inLanguage: locale,
  };

  // Breadcrumb schema
  const breadcrumbSchema = breadcrumbs ? {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: breadcrumbs.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${siteUrl}${item.item}`,
    })),
  } : null;

  return (
    <Helmet>
      <html lang={locale.toLowerCase()} />
      <title>{seo.title}</title>
      <meta name="description" content={seo.description} />
      <meta name="image" content={seo.image} />

      {/* Facebook/Open Graph Meta Tags */}
      <meta property="og:site_name" content="François Domain" />
      <meta property="og:locale" content={locale.toLowerCase()} />
      <meta property="og:type" content={article ? "article" : "website"} />
      <meta property="og:title" content={seo.title} />
      <meta property="og:description" content={seo.description} />
      <meta property="og:image" content={seo.image} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content={`Cover image for ${seo.title}`} />
      <meta property="og:url" content={seo.url} />

      {/* Twitter Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={seo.title} />
      <meta name="twitter:description" content={seo.description} />
      <meta name="twitter:image" content={seo.image} />

      {/* Language alternates */}
      <link rel="alternate" href={`${seo.url}`} hrefLang={locale.toLowerCase()} />
      <link rel="alternate" href={`${seo.url}`} hrefLang="x-default" />
      
      {/* Canonical URL */}
      <link rel="canonical" href={seo.url} />

      {/* JSON-LD Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(websiteSchema)}
      </script>
      {breadcrumbSchema && (
        <script type="application/ld+json">
          {JSON.stringify(breadcrumbSchema)}
        </script>
      )}
      {jsonLd && (
        <script type="application/ld+json">
          {JSON.stringify(jsonLd)}
        </script>
      )}
    </Helmet>
  )
};
