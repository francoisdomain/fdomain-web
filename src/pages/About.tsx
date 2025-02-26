
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { useLanguage } from "@/contexts/LanguageContext";
import { SEO } from "@/components/SEO";

const About = () => {
  const { t } = useLanguage();
  const awards = (t("about.awards") as unknown) as string[];

  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title={t("about.pageTitle")}
        description="Learn more about François Domain, an accomplished author exploring the depths of human psychology through contemporary fiction."
        pathname="/about"
      />
      <Navigation />
      
      <div className="pt-32 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-serif font-medium mb-8 text-center">
              {t("about.pageTitle")}
            </h1>
            
            <div className="prose prose-lg mx-auto">
              <p className="text-lg text-warm-gray-800 mb-6">
                {t("about.intro")}
              </p>
              
              <p className="text-lg text-warm-gray-800 mb-6">
                {t("about.mainText")}
              </p>
              
              <h2 className="text-2xl font-serif font-medium mt-12 mb-6">
                {t("about.awardsTitle")}
              </h2>
              <ul className="list-disc pl-6 space-y-2 text-warm-gray-800">
                {awards.map((award: string, index: number) => (
                  <li key={index}>{award}</li>
                ))}
              </ul>
              
              <h2 className="text-2xl font-serif font-medium mt-12 mb-6">
                {t("about.philosophyTitle")}
              </h2>
              <p className="text-lg text-warm-gray-800 mb-6">
                {t("about.philosophy")}
              </p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default About;
