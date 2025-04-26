
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const About = () => {
  const teamMembers = [
    {
      name: 'Jennifer Parker',
      role: 'CEO & Founder',
      image: 'https://randomuser.me/api/portraits/women/4.jpg',
      bio: 'Former education consultant with 15 years of experience in EdTech industry.'
    },
    {
      name: 'Michael Rodriguez',
      role: 'Chief Technology Officer',
      image: 'https://randomuser.me/api/portraits/men/5.jpg',
      bio: 'Software engineer with expertise in building scalable learning platforms.'
    },
    {
      name: 'Sarah Johnson',
      role: 'Head of Content',
      image: 'https://randomuser.me/api/portraits/women/6.jpg',
      bio: 'PhD in Education with a focus on curriculum development and instructional design.'
    },
    {
      name: 'David Chen',
      role: 'Chief Marketing Officer',
      image: 'https://randomuser.me/api/portraits/men/7.jpg',
      bio: 'Digital marketing expert specializing in education technology and e-learning.'
    },
  ];
  
  const stats = [
    { number: '5M+', description: 'Active Students' },
    { number: '10K+', description: 'Courses Available' },
    { number: '200+', description: 'Expert Instructors' },
    { number: '15+', description: 'Years of Experience' },
  ];
  
  const values = [
    {
      title: 'Innovation',
      description: 'We continuously innovate our platform and teaching methods to provide the best learning experience.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
        </svg>
      )
    },
    {
      title: 'Quality',
      description: 'We ensure all our courses meet high standards of quality, relevance, and instructional excellence.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
        </svg>
      )
    },
    {
      title: 'Accessibility',
      description: 'We believe education should be accessible to all, regardless of location, background, or circumstances.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 20 20" fill="currentColor">
          <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z" />
        </svg>
      )
    },
    {
      title: 'Community',
      description: 'We foster a supportive community where learners can connect, collaborate, and grow together.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 20 20" fill="currentColor">
          <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
        </svg>
      )
    },
  ];

  useEffect(() => {
    document.title = 'About Us | TaTa LearnVerse';
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-tata-soft-gray">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="font-poppins font-bold text-4xl md:text-5xl lg:text-6xl mb-6">
                We're on a Mission to <span className="text-tata-orange">Transform Learning</span>
              </h1>
              <p className="text-lg text-gray-600 mb-8">
                At TaTa LearnVerse, we believe that education should be accessible, engaging, and effective for everyone. Our innovative learning platform is designed to help students achieve their learning goals and unlock their full potential.
              </p>
              <Link 
                to="/courses" 
                className="btn btn-primary btn-lg"
                target="_blank" 
                rel="noopener noreferrer"
              >
                Explore Our Courses
              </Link>
            </div>
            
            <div className="relative">
              <div className="absolute -top-5 -right-5 w-24 h-24 bg-tata-orange/10 rounded-full"></div>
              <div className="absolute -bottom-5 -left-5 w-32 h-32 bg-tata-purple/10 rounded-full"></div>
              <img 
                src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" 
                alt="TaTa Team"
                className="rounded-xl shadow-lg relative z-10 w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Stats Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <p className="text-4xl md:text-5xl font-poppins font-bold text-tata-orange mb-2">{stat.number}</p>
                <p className="text-gray-600">{stat.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Story Section */}
      <section className="py-20 bg-tata-light-blue">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80" 
                alt="Our Story"
                className="rounded-xl shadow-lg w-full h-auto"
              />
            </div>
            
            <div>
              <h2 className="font-poppins font-bold text-3xl mb-6">Our Story</h2>
              <p className="text-gray-600 mb-4">
                TaTa LearnVerse was founded in 2010 with a simple but powerful idea: to make high-quality education accessible to everyone, anywhere in the world.
              </p>
              <p className="text-gray-600 mb-4">
                Our founders, a group of educators and technologists, saw the potential of digital technology to transform learning and break down traditional barriers to education. They set out to create a platform that would combine cutting-edge technology with effective teaching methodologies to deliver an unparalleled learning experience.
              </p>
              <p className="text-gray-600">
                Over the years, we've grown from a small startup to a global learning platform serving millions of students worldwide. Despite our growth, our mission remains the same: to empower individuals through education and help them achieve their personal and professional goals.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Values Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-poppins font-bold text-3xl md:text-4xl mb-4">Our Core Values</h2>
            <p className="text-gray-600">
              The principles that guide everything we do at TaTa LearnVerse
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300">
                <div className="text-tata-orange mb-4">
                  {value.icon}
                </div>
                <h3 className="font-poppins font-semibold text-xl mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Team Section */}
      <section className="py-20 bg-tata-soft-gray">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-poppins font-bold text-3xl md:text-4xl mb-4">Meet Our Leadership Team</h2>
            <p className="text-gray-600">
              The passionate individuals who drive our vision forward
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="font-poppins font-semibold text-xl mb-1">{member.name}</h3>
                  <p className="text-tata-orange font-medium mb-3">{member.role}</p>
                  <p className="text-gray-600">{member.bio}</p>
                  
                  <div className="mt-4 flex gap-3">
                    <a href="#" className="text-gray-400 hover:text-tata-orange transition-colors">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                        <rect x="2" y="9" width="4" height="12"></rect>
                        <circle cx="4" cy="4" r="2"></circle>
                      </svg>
                    </a>
                    <a href="#" className="text-gray-400 hover:text-tata-orange transition-colors">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                      </svg>
                    </a>
                    <a href="#" className="text-gray-400 hover:text-tata-orange transition-colors">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-r from-tata-orange to-tata-orange/80 rounded-xl p-8 md:p-12 text-white text-center">
            <h2 className="font-poppins font-bold text-3xl md:text-4xl mb-4">
              Join Our Growing Community
            </h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto">
              Be part of a learning revolution. Start your journey with TaTa LearnVerse today and unlock your full potential.
            </p>
            <Link 
              to="/signup" 
              className="btn bg-white hover:bg-gray-100 text-tata-orange btn-lg"
              target="_blank" 
              rel="noopener noreferrer"
            >
              Get Started Today
            </Link>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default About;
