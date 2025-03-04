
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { useParams, Navigate, Link } from "react-router-dom";
import { blogArticles } from "@/data/blogArticles";
import { SEO } from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar } from "lucide-react";
import { format, parseISO } from "date-fns";
import ReactMarkdown from 'react-markdown';

const BlogDetail = () => {
  const { slug } = useParams();
  const article = slug ? blogArticles[slug] : null;
  
  if (!article) {
    return <Navigate to="/blog" replace />;
  }

  // Format the published date
  const formattedDate = format(parseISO(article.publishedDate), 'MMMM d, yyyy');

  // Create schema for SEO
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": article.title,
    "image": article.imageUrl,
    "datePublished": article.publishedDate,
    "author": {
      "@type": "Person",
      "name": "François Domain"
    },
    "publisher": {
      "@type": "Organization",
      "name": "François Domain",
      "logo": {
        "@type": "ImageObject",
        "url": "https://francoisdomain.com/img/FD_LOGO small.png"
      }
    },
    "description": article.summary
  };

  const breadcrumbs = [
    { name: "Home", item: "/" },
    { name: "Blog", item: "/blog" },
    { name: article.title, item: `/blog/${slug}` }
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title={article.title}
        description={article.summary}
        image={article.imageUrl}
        article={true}
        pathname={`/blog/${slug}`}
        jsonLd={articleJsonLd}
        breadcrumbs={breadcrumbs}
      />
      <Navigation />
      
      <main className="pt-32 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Button
              variant="ghost"
              className="mb-8"
              asChild
            >
              <Link to="/blog">
                <ArrowLeft className="mr-2" size={16} />
                Back to All Articles
              </Link>
            </Button>
            
            <article className="bg-white rounded-xl shadow-md overflow-hidden">
              <div className="h-[300px] md:h-[400px] w-full bg-cream-100 relative">
                <img 
                  src={article.imageUrl}
                  alt={article.title}
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="p-6 md:p-10">
                <header className="mb-8">
                  <h1 className="text-4xl md:text-5xl font-serif font-medium mb-4">
                    {article.title}
                  </h1>
                  
                  <div className="flex items-center text-warm-gray-600">
                    <Calendar size={16} className="mr-2" />
                    <time dateTime={article.publishedDate}>{formattedDate}</time>
                  </div>
                </header>
                
                <div className="prose prose-lg max-w-none">
                  <ReactMarkdown>
                    {article.body}
                  </ReactMarkdown>
                </div>
              </div>
            </article>
            
            <div className="mt-12 text-center">
              <h2 className="text-2xl font-serif mb-4">Enjoyed this article?</h2>
              <p className="mb-6">Discover more content in our blog collection.</p>
              <Button asChild>
                <Link to="/blog">Browse All Articles</Link>
              </Button>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default BlogDetail;
