
import { useEffect } from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { FileText } from 'lucide-react';

const Documentation = () => {
  useEffect(() => {
    document.title = 'Documentation | JigJiga University';
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <FileText size={24} className="text-tata-orange" />
              <h1 className="text-3xl font-bold">Documentation</h1>
            </div>
            
            <p className="text-gray-600 dark:text-gray-300 mb-8">
              Comprehensive guides and documentation for JigJiga University resources.
            </p>
            
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {['Student Handbook', 'Course Catalog', 'Research Guidelines', 'Library Resources', 'IT Services', 'Campus Facilities'].map((item, index) => (
                <div key={index} className="border border-gray-200 dark:border-gray-700 rounded-lg p-6 bg-white dark:bg-gray-800 hover:shadow-md transition-shadow">
                  <h3 className="font-semibold mb-2">{item}</h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm mb-3">
                    Essential information and guidelines about {item.toLowerCase()}.
                  </p>
                  <button className="text-sm text-tata-orange hover:underline">View Documentation</button>
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

export default Documentation;
