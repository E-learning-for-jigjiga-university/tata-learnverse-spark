
import { useEffect } from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

const CookiePolicy = () => {
  useEffect(() => {
    document.title = 'Cookie Policy | JigJiga University';
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-3xl font-bold mb-8">Cookie Policy</h1>
            
            <div className="prose dark:prose-invert max-w-none">
              <p>Last updated: May 1, 2025</p>
              
              <h2>1. What Are Cookies</h2>
              <p>
                Cookies are small text files that are stored on your computer or mobile device when you visit 
                our website. They allow us to recognize your browser and capture certain information.
              </p>
              
              <h2>2. How We Use Cookies</h2>
              <p>
                We use cookies for the following purposes:
              </p>
              <ul>
                <li>To enable certain functions of the website</li>
                <li>To provide analytics about how users interact with our website</li>
                <li>To store your preferences</li>
                <li>To enable personalization of content</li>
                <li>To authenticate users and prevent fraud</li>
              </ul>
              
              <h2>3. Types of Cookies We Use</h2>
              <h3>Essential Cookies</h3>
              <p>
                These cookies are necessary for the website to function properly. They enable core functionality 
                such as security, network management, and account access.
              </p>
              
              <h3>Preference Cookies</h3>
              <p>
                These cookies enable the website to remember information that changes the way the website behaves 
                or looks, like your preferred language or the region you are in.
              </p>
              
              <h3>Analytics Cookies</h3>
              <p>
                These cookies help us understand how visitors interact with our website by collecting and 
                reporting information anonymously.
              </p>
              
              <h2>4. Third-Party Cookies</h2>
              <p>
                In addition to our own cookies, we may also use various third-party cookies to report usage 
                statistics of the website, deliver advertisements, and so on.
              </p>
              
              <h2>5. Managing Cookies</h2>
              <p>
                Most web browsers allow some control of most cookies through the browser settings. To find out 
                more about cookies, including how to see what cookies have been set, visit 
                www.aboutcookies.org or www.allaboutcookies.org.
              </p>
              
              <h2>6. Changes to This Cookie Policy</h2>
              <p>
                We may update our Cookie Policy from time to time. We will notify you of any changes by posting 
                the new Cookie Policy on this page.
              </p>
              
              <h2>7. Contact Us</h2>
              <p>
                If you have any questions about our Cookie Policy, please contact us at cookies@jigjigauniversity.edu.
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default CookiePolicy;
