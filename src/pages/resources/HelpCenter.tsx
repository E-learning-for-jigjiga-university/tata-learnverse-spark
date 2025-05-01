
import { useEffect } from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { HelpCircle } from 'lucide-react';

const HelpCenter = () => {
  useEffect(() => {
    document.title = 'Help Center | JigJiga University';
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <HelpCircle size={24} className="text-tata-orange" />
              <h1 className="text-3xl font-bold">Help Center</h1>
            </div>
            
            <p className="text-gray-600 dark:text-gray-300 mb-8">
              Find answers to frequently asked questions and get support for any issues.
            </p>
            
            <div className="mb-8">
              <input
                type="text"
                placeholder="Search for help topics..."
                className="w-full px-4 py-3 rounded-md border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-tata-orange"
              />
            </div>
            
            <div className="grid gap-6 md:grid-cols-2">
              <div className="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden">
                <div className="bg-tata-orange text-white p-4">
                  <h3 className="font-semibold">Popular Questions</h3>
                </div>
                <div className="p-4 bg-white dark:bg-gray-800">
                  <ul className="space-y-3">
                    {[
                      'How do I reset my password?',
                      'How can I access my courses?',
                      'Where can I find my grades?',
                      'How do I contact my instructor?',
                      'What are the library hours?'
                    ].map((question, index) => (
                      <li key={index} className="border-b border-gray-100 dark:border-gray-700 pb-2">
                        <button className="text-left w-full text-gray-700 dark:text-gray-300 hover:text-tata-orange transition-colors">
                          {question}
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              
              <div className="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden">
                <div className="bg-tata-orange text-white p-4">
                  <h3 className="font-semibold">Contact Support</h3>
                </div>
                <div className="p-4 bg-white dark:bg-gray-800">
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    Can't find what you're looking for? Contact our support team.
                  </p>
                  <form className="space-y-4">
                    <div>
                      <input
                        type="text"
                        placeholder="Your name"
                        className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white focus:outline-none"
                      />
                    </div>
                    <div>
                      <input
                        type="email"
                        placeholder="Your email"
                        className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white focus:outline-none"
                      />
                    </div>
                    <div>
                      <textarea
                        placeholder="Describe your issue"
                        rows={3}
                        className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white focus:outline-none"
                      ></textarea>
                    </div>
                    <button
                      type="button"
                      className="bg-tata-orange text-white px-4 py-2 rounded-md hover:bg-tata-orange/90 transition-colors"
                    >
                      Submit Request
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default HelpCenter;
