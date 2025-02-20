
import { Navigation } from "@/components/Navigation";

const Contact = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="pt-32 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-serif font-medium mb-8 text-center">
              Get in Touch
            </h1>
            
            <p className="text-lg text-warm-gray-800 text-center mb-12">
              For speaking engagements, book signings, or just to share your thoughts about my books.
            </p>
            
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-warm-gray-800 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full px-4 py-3 rounded-lg border border-warm-gray-200 focus:ring-2 focus:ring-warm-gray-900 focus:border-transparent transition-colors"
                  placeholder="Your name"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-warm-gray-800 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-4 py-3 rounded-lg border border-warm-gray-200 focus:ring-2 focus:ring-warm-gray-900 focus:border-transparent transition-colors"
                  placeholder="your@email.com"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-warm-gray-800 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  className="w-full px-4 py-3 rounded-lg border border-warm-gray-200 focus:ring-2 focus:ring-warm-gray-900 focus:border-transparent transition-colors"
                  placeholder="Your message..."
                ></textarea>
              </div>
              
              <div>
                <button
                  type="submit"
                  className="w-full px-6 py-3 bg-warm-gray-900 text-white rounded-lg hover:bg-warm-gray-800 transition-colors"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
