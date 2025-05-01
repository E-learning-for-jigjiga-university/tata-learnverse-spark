
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-tata-soft-gray dark:bg-gray-900 py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <Link to="/" className="flex items-center gap-2 mb-4">
              <img 
                src="/lovable-uploads/145a2051-fa4b-4136-9797-fd77c15f5e01.png" 
                alt="JigJiga University Logo"
                className="h-12 w-auto" 
              />
            </Link>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Next-gen learning management system providing innovative educational solutions.
            </p>
            <div className="flex gap-4">
              <a href="#" aria-label="Facebook" className="text-gray-400 hover:text-tata-orange transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </a>
              <a href="#" aria-label="Twitter" className="text-gray-400 hover:text-tata-orange transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                </svg>
              </a>
              <a href="#" aria-label="Instagram" className="text-gray-400 hover:text-tata-orange transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
              <a href="#" aria-label="LinkedIn" className="text-gray-400 hover:text-tata-orange transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-poppins font-semibold text-lg mb-4 dark:text-white">Quick Links</h3>
            <ul className="space-y-3">
              <li><Link to="/" className="text-gray-600 dark:text-gray-300 hover:text-tata-orange transition-colors">Home</Link></li>
              <li><Link to="/courses" className="text-gray-600 dark:text-gray-300 hover:text-tata-orange transition-colors">Courses</Link></li>
              <li><Link to="/dashboard" className="text-gray-600 dark:text-gray-300 hover:text-tata-orange transition-colors">Dashboard</Link></li>
              <li><Link to="/about" className="text-gray-600 dark:text-gray-300 hover:text-tata-orange transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="text-gray-600 dark:text-gray-300 hover:text-tata-orange transition-colors">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-poppins font-semibold text-lg mb-4 dark:text-white">Resources</h3>
            <ul className="space-y-3">
              <li><Link to="/resources/blog" className="text-gray-600 dark:text-gray-300 hover:text-tata-orange transition-colors">Blog</Link></li>
              <li><Link to="/resources/documentation" className="text-gray-600 dark:text-gray-300 hover:text-tata-orange transition-colors">Documentation</Link></li>
              <li><Link to="/resources/help" className="text-gray-600 dark:text-gray-300 hover:text-tata-orange transition-colors">Help Center</Link></li>
              <li><Link to="/resources/community" className="text-gray-600 dark:text-gray-300 hover:text-tata-orange transition-colors">Community</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-poppins font-semibold text-lg mb-4 dark:text-white">Subscribe</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">Subscribe to our newsletter to get updates on new courses and features.</p>
            <form onSubmit={(e) => {
              e.preventDefault();
              const email = (e.target as HTMLFormElement).email.value;
              console.log('Newsletter subscription:', email);
              // This would connect to backend API in real implementation
              alert('Thank you for subscribing! We will keep you updated.');
            }} className="flex">
              <input 
                type="email" 
                name="email"
                placeholder="Your email" 
                required
                className="px-4 py-2 flex-1 rounded-l-md border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white focus:outline-none focus:border-tata-orange" 
              />
              <button 
                type="submit"
                className="bg-tata-orange hover:bg-tata-orange/90 text-white px-4 py-2 rounded-r-md transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        
        <div className="border-t border-gray-200 dark:border-gray-700 mt-12 pt-8 flex flex-col md:flex-row justify-between gap-4">
          <p className="text-gray-500 dark:text-gray-400 text-sm">© 2025 JIgJiga University. All rights reserved.</p>
          <div className="flex flex-wrap gap-4">
            <Link to="/privacy" className="text-gray-500 dark:text-gray-400 hover:text-tata-orange text-sm transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="text-gray-500 dark:text-gray-400 hover:text-tata-orange text-sm transition-colors">Terms of Service</Link>
            <Link to="/cookies" className="text-gray-500 dark:text-gray-400 hover:text-tata-orange text-sm transition-colors">Cookie Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
