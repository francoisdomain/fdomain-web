
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { useLanguage } from "@/contexts/LanguageContext";

const About = () => {
  const { t } = useLanguage();
  const awards = (t("about.awards") as unknown) as string[];

  return (
    <div className="min-h-screen bg-background">
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
              
              <div className="grid md:grid-cols-2 gap-8 my-12">
                <div>
                  <h2 className="text-2xl font-serif font-medium mb-4">
                    {t("about.educationTitle")}
                  </h2>
                  <ul className="space-y-4">
                    {(t("about.education") as unknown as string[]).map((item, index) => (
                      <li key={index} className="text-warm-gray-800">{item}</li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h2 className="text-2xl font-serif font-medium mb-4">
                    {t("about.awardsTitle")}
                  </h2>
                  <ul className="space-y-4">
                    {awards.map((award, index) => (
                      <li key={index} className="text-warm-gray-800">{award}</li>
                    ))}
                  </ul>
                </div>
              </div>
              
              <h2 className="text-2xl font-serif font-medium mt-12 mb-6">
                {t("about.philosophyTitle")}
              </h2>
              <p className="text-lg text-warm-gray-800 mb-6">
                {t("about.philosophy")}
              </p>
              
              <h2 className="text-2xl font-serif font-medium mt-12 mb-6">
                {t("about.contactTitle")}
              </h2>
              <p className="text-lg text-warm-gray-800 mb-6">
                {t("about.contactText")} 
                <a href="/contact" className="text-warm-gray-900 underline">
                  {t("about.contactLink")}
                </a>.
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
