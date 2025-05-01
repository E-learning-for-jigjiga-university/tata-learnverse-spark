
import { useEffect } from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { Users } from 'lucide-react';

const Community = () => {
  useEffect(() => {
    document.title = 'Community | JigJiga University';
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <Users size={24} className="text-tata-orange" />
              <h1 className="text-3xl font-bold">Community</h1>
            </div>
            
            <p className="text-gray-600 dark:text-gray-300 mb-8">
              Connect with other students, alumni, and faculty members from JigJiga University.
            </p>
            
            <div className="grid gap-8 md:grid-cols-2">
              <div className="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden bg-white dark:bg-gray-800">
                <div className="bg-tata-orange text-white p-4">
                  <h3 className="font-semibold">Upcoming Events</h3>
                </div>
                <div className="p-4">
                  <ul className="space-y-4">
                    {[
                      { title: 'Student Orientation', date: 'June 15, 2025' },
                      { title: 'Alumni Networking Event', date: 'June 22, 2025' },
                      { title: 'Research Symposium', date: 'July 5, 2025' },
                      { title: 'Career Fair', date: 'July 12, 2025' }
                    ].map((event, index) => (
                      <li key={index} className="border-b border-gray-100 dark:border-gray-700 pb-3">
                        <h4 className="font-medium">{event.title}</h4>
                        <p className="text-sm text-gray-500 dark:text-gray-400">{event.date}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              
              <div className="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden bg-white dark:bg-gray-800">
                <div className="bg-tata-orange text-white p-4">
                  <h3 className="font-semibold">Discussion Forums</h3>
                </div>
                <div className="p-4">
                  <ul className="space-y-4">
                    {[
                      { title: 'Academic Support', count: 243 },
                      { title: 'Campus Life', count: 187 },
                      { title: 'Career Development', count: 156 },
                      { title: 'Research Collaboration', count: 92 }
                    ].map((forum, index) => (
                      <li key={index} className="border-b border-gray-100 dark:border-gray-700 pb-3">
                        <div className="flex justify-between">
                          <h4 className="font-medium">{forum.title}</h4>
                          <span className="text-sm bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded-full">
                            {forum.count} topics
                          </span>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="mt-8 p-6 border border-gray-200 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800">
              <h3 className="font-semibold text-xl mb-4">Join Our Community</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Sign up to participate in discussions, access exclusive resources, and connect with peers.
              </p>
              <button className="bg-tata-orange text-white px-6 py-2 rounded-md hover:bg-tata-orange/90 transition-colors">
                Sign Up Now
              </button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Community;
