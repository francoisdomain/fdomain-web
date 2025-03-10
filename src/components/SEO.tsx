
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
    if (typeof window.gtag !== 'undefined') {
      window.gtag('config', 'G-GM51NBVRBW', {
        page_path: location.pathname + location.search
      });
    }
    
    // Also track for Facebook Pixel
    if (typeof window.fbq !== 'undefined') {
      window.fbq('track', 'PageView');
    }
    
    // Signal to prerender.io that the page is fully loaded
    if (typeof window !== 'undefined' && typeof window.prerenderReady !== 'undefined') {
      window.prerenderReady = true;
    }
  }, [location.pathname, location.search]);

  const currentPath = pathname || location.pathname;
  
  const seo = {
    title: title ? `${title} | ${defaultTitle}` : defaultTitle,
    description: description || defaultDescription,
    // Ensure image URLs are absolute
    image: image.startsWith("http") ? image : `${siteUrl}${image}`,
    url: `${siteUrl}${currentPath}`,
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

  // Article schema
  const articleSchema = article ? {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: seo.title,
    description: seo.description,
    image: seo.image,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": seo.url
    },
    author: {
      "@type": "Person",
      name: "François Domain"
    },
    publisher: {
      "@type": "Organization",
      name: "François Domain",
      logo: {
        "@type": "ImageObject",
        url: `${siteUrl}/img/FD_LOGO small.png`
      }
    }
  } : null;

  return (
    <Helmet>
      <html lang={locale.toLowerCase()} />
      <title>{seo.title}</title>
      <meta name="description" content={seo.description} />
      <meta name="image" content={seo.image} />

      {/* Enhanced prerender.io support */}
      <meta name="fragment" content="!" />
      <meta name="prerender-status-code" content="200" />

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

      {/* LinkedIn specific - extra emphasis on the URL */}
      <meta property="linkedin:owner" content="François Domain" />
      <meta property="linkedin:title" content={seo.title} />
      <meta property="linkedin:description" content={seo.description} />
      <meta property="linkedin:image" content={seo.image} />

      {/* Language alternates */}
      <link rel="alternate" href={`${seo.url}`} hrefLang={locale.toLowerCase()} />
      <link rel="alternate" href={`${seo.url}`} hrefLang="x-default" />
      
      {/* Canonical URL */}
      <link rel="canonical" href={seo.url} />

      {/* Enhanced Prerender hints for crawlers */}
      <meta name="renderer" content="webkit" />
      <meta name="force-rendering" content="webkit" />
      <meta name="crawlable" content="yes" />
      <meta name="pinterest" content="nohover" />
      <meta name="format-detection" content="telephone=no" />

      {/* JSON-LD Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(websiteSchema)}
      </script>
      {breadcrumbSchema && (
        <script type="application/ld+json">
          {JSON.stringify(breadcrumbSchema)}
        </script>
      )}
      {articleSchema && (
        <script type="application/ld+json">
          {JSON.stringify(articleSchema)}
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

// Declare window.prerenderReady for TypeScript
declare global {
  interface Window {
    prerenderReady?: boolean;
    gtag?: (...args: any[]) => void;
    fbq?: (...args: any[]) => void;
  }
}
