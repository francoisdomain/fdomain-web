
import { Helmet } from "react-helmet-async";
import { useLanguage } from "@/contexts/LanguageContext";

interface SEOProps {
  title?: string;
  description?: string;
  image?: string;
  article?: boolean;
  pathname?: string;
}

export const SEO = ({
  title,
  description,
  image = "/og-image.png",
  article = false,
  pathname = "",
}: SEOProps) => {
  const { locale } = useLanguage();
  const defaultTitle = "François Domain - Author";
  const defaultDescription = "Discover the literary works of François Domain - contemporary fiction author exploring human nature through compelling storytelling.";
  const siteUrl = "https://francoisdomain.com"; // Replace with your actual domain

  const seo = {
    title: title ? `${title} | ${defaultTitle}` : defaultTitle,
    description: description || defaultDescription,
    image: image.startsWith("http") ? image : `${siteUrl}${image}`,
    url: `${siteUrl}${pathname}`,
  };

  return (
    <Helmet>
      <html lang={locale.toLowerCase()} />
      <title>{seo.title}</title>
      <meta name="description" content={seo.description} />
      <meta name="image" content={seo.image} />

      {/* Facebook Meta Tags */}
      <meta property="og:type" content={article ? "article" : "website"} />
      <meta property="og:title" content={seo.title} />
      <meta property="og:description" content={seo.description} />
      <meta property="og:image" content={seo.image} />
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
    </Helmet>
  )
};
