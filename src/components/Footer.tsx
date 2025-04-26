
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-tata-soft-gray py-16">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <Link to="/" className="flex items-center gap-2 mb-4">
              <span className="text-2xl font-bold font-poppins text-tata-dark">
                Ta<span className="text-tata-orange">Ta</span>
              </span>
            </Link>
            <p className="text-gray-600 mb-4">
              Next-gen learning management system providing innovative educational solutions.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-gray-400 hover:text-tata-orange transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-tata-orange transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-tata-orange transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-tata-orange transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-poppins font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li><Link to="/" className="text-gray-600 hover:text-tata-orange transition-colors">Home</Link></li>
              <li><Link to="/courses" className="text-gray-600 hover:text-tata-orange transition-colors">Courses</Link></li>
              <li><Link to="/dashboard" className="text-gray-600 hover:text-tata-orange transition-colors">Dashboard</Link></li>
              <li><Link to="/about" className="text-gray-600 hover:text-tata-orange transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="text-gray-600 hover:text-tata-orange transition-colors">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-poppins font-semibold text-lg mb-4">Resources</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-600 hover:text-tata-orange transition-colors">Blog</a></li>
              <li><a href="#" className="text-gray-600 hover:text-tata-orange transition-colors">Documentation</a></li>
              <li><a href="#" className="text-gray-600 hover:text-tata-orange transition-colors">Help Center</a></li>
              <li><a href="#" className="text-gray-600 hover:text-tata-orange transition-colors">Community</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-poppins font-semibold text-lg mb-4">Subscribe</h3>
            <p className="text-gray-600 mb-4">Subscribe to our newsletter to get updates on new courses and features.</p>
            <div className="flex">
              <input 
                type="email" 
                placeholder="Your email"
                className="px-4 py-2 flex-1 rounded-l-md border border-gray-300 focus:outline-none focus:border-tata-orange"
              />
              <button className="bg-tata-orange hover:bg-tata-orange/90 text-white px-4 py-2 rounded-r-md transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-200 mt-12 pt-8 flex flex-col md:flex-row justify-between gap-4">
          <p className="text-gray-500 text-sm">© 2025 TaTa LearnVerse. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#" className="text-gray-500 hover:text-tata-orange text-sm transition-colors">Privacy Policy</a>
            <a href="#" className="text-gray-500 hover:text-tata-orange text-sm transition-colors">Terms of Service</a>
            <a href="#" className="text-gray-500 hover:text-tata-orange text-sm transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
