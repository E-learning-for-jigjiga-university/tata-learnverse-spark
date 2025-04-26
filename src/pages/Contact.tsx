
import { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [formSuccess, setFormSuccess] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, you would send the form data to your server
    console.log('Form submitted:', formData);
    
    // Simulate form submission success
    setFormSuccess(true);
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
    
    // Reset success message after a few seconds
    setTimeout(() => {
      setFormSuccess(false);
    }, 5000);
  };

  const offices = [
    {
      city: 'New York',
      address: '123 Broadway, Suite 456',
      postalCode: 'NY 10001',
      phone: '+1 (555) 123-4567',
      email: 'newyork@tatalearnverse.com'
    },
    {
      city: 'London',
      address: '10 Downing Street',
      postalCode: 'SW1A 2AA',
      phone: '+44 20 7123 4567',
      email: 'london@tatalearnverse.com'
    },
    {
      city: 'Singapore',
      address: '1 Raffles Place',
      postalCode: '048616',
      phone: '+65 6123 4567',
      email: 'singapore@tatalearnverse.com'
    }
  ];

  useEffect(() => {
    document.title = 'Contact Us | TaTa LearnVerse';
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-tata-soft-gray">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="font-poppins font-bold text-4xl md:text-5xl mb-6">Get in Touch</h1>
            <p className="text-lg text-gray-600">
              Have questions or feedback? We'd love to hear from you. Fill out the form below and our team will get back to you shortly.
            </p>
          </div>
        </div>
      </section>
      
      {/* Contact Form & Info */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="font-poppins font-bold text-2xl mb-6">Send Us a Message</h2>
              
              {formSuccess && (
                <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative mb-6" role="alert">
                  <strong className="font-bold">Success! </strong>
                  <span className="block sm:inline">Your message has been sent. We'll get back to you soon.</span>
                </div>
              )}
              
              <form onSubmit={handleSubmit}>
                <div className="mb-6">
                  <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Your Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-tata-orange"
                    placeholder="John Doe"
                  />
                </div>
                
                <div className="mb-6">
                  <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Your Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-tata-orange"
                    placeholder="john.doe@example.com"
                  />
                </div>
                
                <div className="mb-6">
                  <label htmlFor="subject" className="block text-gray-700 font-medium mb-2">Subject</label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-tata-orange"
                  >
                    <option value="">Select a subject</option>
                    <option value="General Inquiry">General Inquiry</option>
                    <option value="Technical Support">Technical Support</option>
                    <option value="Billing">Billing</option>
                    <option value="Partnership">Partnership</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
                
                <div className="mb-6">
                  <label htmlFor="message" className="block text-gray-700 font-medium mb-2">Your Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-tata-orange"
                    placeholder="How can we help you?"
                  ></textarea>
                </div>
                
                <button type="submit" className="btn btn-primary btn-lg w-full">
                  Send Message
                </button>
              </form>
            </div>
            
            {/* Contact Info */}
            <div>
              <h2 className="font-poppins font-bold text-2xl mb-6">Contact Information</h2>
              
              <div className="space-y-8">
                <p className="text-gray-600 leading-relaxed">
                  We're here to help! Whether you have a question about our courses, need technical assistance, or want to explore partnership opportunities, our team is ready to assist you.
                </p>
                
                <div>
                  <h3 className="font-poppins font-semibold text-xl mb-4">Our Offices</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {offices.map((office, index) => (
                      <div key={index} className="bg-white rounded-xl p-5 shadow-md">
                        <h4 className="font-semibold text-lg mb-2">{office.city}</h4>
                        <p className="text-gray-600 mb-1">{office.address}</p>
                        <p className="text-gray-600 mb-3">{office.postalCode}</p>
                        <p className="text-gray-600 mb-1">
                          <span className="font-medium">Phone:</span> {office.phone}
                        </p>
                        <p className="text-gray-600">
                          <span className="font-medium">Email:</span> {office.email}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h3 className="font-poppins font-semibold text-xl mb-4">Connect With Us</h3>
                  <div className="flex gap-4">
                    <a href="#" className="w-10 h-10 rounded-full bg-tata-light-orange flex items-center justify-center text-tata-orange hover:bg-tata-orange hover:text-white transition-colors">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                      </svg>
                    </a>
                    <a href="#" className="w-10 h-10 rounded-full bg-tata-light-orange flex items-center justify-center text-tata-orange hover:bg-tata-orange hover:text-white transition-colors">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                      </svg>
                    </a>
                    <a href="#" className="w-10 h-10 rounded-full bg-tata-light-orange flex items-center justify-center text-tata-orange hover:bg-tata-orange hover:text-white transition-colors">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                      </svg>
                    </a>
                    <a href="#" className="w-10 h-10 rounded-full bg-tata-light-orange flex items-center justify-center text-tata-orange hover:bg-tata-orange hover:text-white transition-colors">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                        <rect x="2" y="9" width="4" height="12"></rect>
                        <circle cx="4" cy="4" r="2"></circle>
                      </svg>
                    </a>
                    <a href="#" className="w-10 h-10 rounded-full bg-tata-light-orange flex items-center justify-center text-tata-orange hover:bg-tata-orange hover:text-white transition-colors">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path>
                        <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Map Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="font-poppins font-bold text-2xl mb-6 text-center">Find Us on the Map</h2>
          <div className="h-96 rounded-xl overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387193.3059359649!2d-74.25986548248684!3d40.69714941932609!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2s!4v1651870562689!5m2!1sen!2s"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="TaTa LearnVerse New York Office"
            ></iframe>
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="py-16 bg-tata-soft-gray">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="font-poppins font-bold text-3xl mb-4">Frequently Asked Questions</h2>
            <p className="text-gray-600">
              Find answers to commonly asked questions about TaTa LearnVerse
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="bg-white rounded-xl p-6 shadow-md">
              <h3 className="font-poppins font-semibold text-lg mb-2">How can I reset my password?</h3>
              <p className="text-gray-600">
                You can reset your password by clicking on the "Forgot Password" link on the login page. You will receive an email with instructions on how to reset your password.
              </p>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-md">
              <h3 className="font-poppins font-semibold text-lg mb-2">How do I enroll in a course?</h3>
              <p className="text-gray-600">
                To enroll in a course, navigate to the course page and click on the "Enroll Now" button. You will be prompted to log in or create an account if you haven't already.
              </p>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-md">
              <h3 className="font-poppins font-semibold text-lg mb-2">What payment methods do you accept?</h3>
              <p className="text-gray-600">
                We accept all major credit cards (Visa, Mastercard, American Express), PayPal, and bank transfers. For corporate accounts, we also offer invoice-based payments.
              </p>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-md">
              <h3 className="font-poppins font-semibold text-lg mb-2">Do you offer refunds?</h3>
              <p className="text-gray-600">
                Yes, we offer a 30-day money-back guarantee for all our courses. If you're not satisfied with your purchase, you can request a full refund within 30 days of enrollment.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Contact;
