
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="pt-32 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-serif font-medium mb-8 text-center">
              About the Author
            </h1>
            
            <div className="prose prose-lg mx-auto">
              <p className="text-lg text-warm-gray-800 mb-6">
                With over a decade of storytelling experience, I've dedicated my life to crafting narratives that resonate with readers across the globe. My journey began in the quiet corners of local bookstores and has since evolved into an international adventure in storytelling.
              </p>
              
              <p className="text-lg text-warm-gray-800 mb-6">
                Each story I write is a reflection of the human experience, carefully woven with threads of emotion, mystery, and revelation. My work has been recognized by various literary institutions and has been translated into multiple languages.
              </p>
              
              <h2 className="text-2xl font-serif font-medium mt-12 mb-6">Awards & Recognition</h2>
              <ul className="list-disc pl-6 space-y-2 text-warm-gray-800">
                <li>International Literary Award, 2023</li>
                <li>Best Contemporary Fiction, 2022</li>
                <li>Author of the Year, Writers Guild, 2021</li>
              </ul>
              
              <h2 className="text-2xl font-serif font-medium mt-12 mb-6">Writing Philosophy</h2>
              <p className="text-lg text-warm-gray-800 mb-6">
                I believe in the power of stories to connect, heal, and transform. Every book is an invitation to explore new perspectives and discover universal truths that bind us together as human beings.
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
