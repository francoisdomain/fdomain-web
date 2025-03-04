
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import { blogArticles } from "@/data/blogArticles";
import { SEO } from "@/components/SEO";
import { Calendar } from "lucide-react";
import { format, parseISO } from "date-fns";

const Blog = () => {
  const { locale } = useLanguage();

  // Convert blog articles object to array and sort by id descending
  const articlesList = Object.entries(blogArticles)
    .map(([slug, article]) => ({
      ...article,
      slug
    }))
    .sort((a, b) => b.id - a.id);

  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="Blog"
        description="Explore articles and insights from François Domain on writing, publishing, and the creative process."
        pathname="/blog"
      />
      <Navigation />
      
      <div className="pt-32 pb-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-serif font-medium mb-6 text-center">
            Blog
          </h1>
          <p className="text-center text-warm-gray-600 mb-12 max-w-2xl mx-auto">
            Thoughts, insights, and stories from the writing journey. Explore articles on creativity, 
            the writing process, and literary reflections.
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {articlesList.map((article) => (
              <Link 
                to={`/blog/${article.slug}`} 
                key={article.id}
                className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col h-full"
              >
                <div className="aspect-[16/9] bg-cream-100 overflow-hidden">
                  <img
                    src={article.imageUrl}
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                
                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex items-center text-warm-gray-600 text-sm mb-3">
                    <Calendar size={14} className="mr-2" />
                    <time dateTime={article.publishedDate}>
                      {format(parseISO(article.publishedDate), 'MMMM d, yyyy')}
                    </time>
                  </div>
                  
                  <h2 className="text-xl font-serif font-medium mb-3 group-hover:text-warm-gray-800 transition-colors">
                    {article.title}
                  </h2>
                  
                  <p className="text-warm-gray-600 mb-4 flex-grow">
                    {article.summary}
                  </p>
                  
                  <div className="text-primary font-medium text-sm">
                    Read more
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Blog;
