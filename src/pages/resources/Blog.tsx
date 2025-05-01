
import { useEffect } from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { Book } from 'lucide-react';

const Blog = () => {
  useEffect(() => {
    document.title = 'Blog | JigJiga University';
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <Book size={24} className="text-tata-orange" />
              <h1 className="text-3xl font-bold">University Blog</h1>
            </div>
            
            <p className="text-gray-600 dark:text-gray-300 mb-8">
              Stay updated with the latest news, research, and events from JigJiga University.
            </p>
            
            <div className="grid gap-8 md:grid-cols-2">
              {/* Sample blog posts - would be fetched from backend in real implementation */}
              {[1, 2, 3, 4].map((index) => (
                <div key={index} className="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden bg-white dark:bg-gray-800 shadow-sm hover:shadow-md transition-shadow">
                  <div className="bg-gray-100 dark:bg-gray-700 h-48"></div>
                  <div className="p-6">
                    <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">May {index}, 2025</p>
                    <h3 className="text-xl font-semibold mb-2">Sample Blog Post Title {index}</h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                      This is a placeholder for blog content that would be fetched from the backend.
                    </p>
                    <button className="text-tata-orange hover:underline">Read more</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Blog;
