
import { useEffect } from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

const TermsOfService = () => {
  useEffect(() => {
    document.title = 'Terms of Service | JigJiga University';
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-3xl font-bold mb-8">Terms of Service</h1>
            
            <div className="prose dark:prose-invert max-w-none">
              <p>Last updated: May 1, 2025</p>
              
              <h2>1. Acceptance of Terms</h2>
              <p>
                By accessing and using the JigJiga University learning platform, you agree to be bound by these 
                Terms of Service and all applicable laws and regulations.
              </p>
              
              <h2>2. User Accounts</h2>
              <p>
                To access certain features of the platform, you may be required to register for an account. 
                You are responsible for maintaining the confidentiality of your account information and for all 
                activities that occur under your account.
              </p>
              
              <h2>3. Academic Integrity</h2>
              <p>
                Users are expected to maintain academic integrity and honesty at all times. Plagiarism, cheating, 
                or any form of academic dishonesty is strictly prohibited and may result in disciplinary action.
              </p>
              
              <h2>4. User Content</h2>
              <p>
                Users may be able to post content on the platform. You retain ownership of your content, but you 
                grant JigJiga University a license to use, modify, and display the content for the purpose of 
                providing and improving the platform.
              </p>
              
              <h2>5. Prohibited Activities</h2>
              <p>
                Users are prohibited from:
              </p>
              <ul>
                <li>Violating any laws or regulations</li>
                <li>Infringing upon the intellectual property rights of others</li>
                <li>Sharing account credentials with others</li>
                <li>Attempting to gain unauthorized access to the system</li>
                <li>Uploading malicious code or content</li>
                <li>Engaging in any activity that disrupts the platform</li>
              </ul>
              
              <h2>6. Termination</h2>
              <p>
                JigJiga University reserves the right to suspend or terminate user accounts that violate these 
                Terms of Service or engage in activities deemed harmful to the platform or other users.
              </p>
              
              <h2>7. Disclaimer</h2>
              <p>
                The platform is provided "as is" without warranties of any kind, either express or implied.
              </p>
              
              <h2>8. Limitation of Liability</h2>
              <p>
                JigJiga University shall not be liable for any indirect, incidental, special, consequential, or 
                punitive damages resulting from the use of or inability to use the platform.
              </p>
              
              <h2>9. Changes to Terms</h2>
              <p>
                JigJiga University may update these Terms of Service from time to time. We will notify users of 
                any significant changes by posting the new Terms on this page.
              </p>
              
              <h2>10. Contact Us</h2>
              <p>
                If you have any questions about these Terms of Service, please contact us at terms@jigjigauniversity.edu.
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default TermsOfService;
