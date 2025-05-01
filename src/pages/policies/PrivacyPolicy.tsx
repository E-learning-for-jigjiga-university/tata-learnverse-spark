
import { useEffect } from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

const PrivacyPolicy = () => {
  useEffect(() => {
    document.title = 'Privacy Policy | JigJiga University';
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-3xl font-bold mb-8">Privacy Policy</h1>
            
            <div className="prose dark:prose-invert max-w-none">
              <p>Last updated: May 1, 2025</p>
              
              <h2>1. Introduction</h2>
              <p>
                JigJiga University ("we," "our," or "us") is committed to protecting your privacy. 
                This Privacy Policy explains how your personal information is collected, used, and disclosed by JigJiga University.
              </p>
              
              <h2>2. Information We Collect</h2>
              <p>
                We may collect the following types of information:
              </p>
              <ul>
                <li>Personal information such as name, email address, phone number, and other contact details</li>
                <li>Educational information including academic records, course enrollments, and academic progress</li>
                <li>Usage data about how you interact with our learning management system</li>
                <li>Device information including IP address, browser type, and operating system</li>
              </ul>
              
              <h2>3. How We Use Your Information</h2>
              <p>
                We use your information for various purposes, including:
              </p>
              <ul>
                <li>Providing and managing your access to our learning platform</li>
                <li>Personalizing your learning experience</li>
                <li>Communicating with you about your courses, assignments, and university updates</li>
                <li>Improving our services and developing new features</li>
                <li>Complying with legal obligations</li>
              </ul>
              
              <h2>4. Information Sharing and Disclosure</h2>
              <p>
                We may share your personal information with:
              </p>
              <ul>
                <li>Instructors and university staff as necessary for educational purposes</li>
                <li>Third-party service providers who help us operate our platform</li>
                <li>Government authorities when required by law</li>
              </ul>
              
              <h2>5. Data Security</h2>
              <p>
                We implement appropriate security measures to protect your personal information from 
                unauthorized access, alteration, disclosure, or destruction.
              </p>
              
              <h2>6. Your Rights</h2>
              <p>
                Depending on your location, you may have certain rights regarding your personal information, 
                including the right to access, correct, or delete your personal data.
              </p>
              
              <h2>7. Changes to This Privacy Policy</h2>
              <p>
                We may update this Privacy Policy from time to time. We will notify you of any changes by 
                posting the new Privacy Policy on this page.
              </p>
              
              <h2>8. Contact Us</h2>
              <p>
                If you have any questions about this Privacy Policy, please contact us at privacy@jigjigauniversity.edu.
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
