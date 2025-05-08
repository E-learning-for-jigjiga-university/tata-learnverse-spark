import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import FeatureCard from '../components/FeatureCard';
import CourseCard from '../components/CourseCard';
import TestimonialCard from '../components/TestimonialCard';
import PartnerLogos from '../components/PartnerLogos';
import StatCard from '../components/StatCard';
import FaqAccordion from '../components/FaqAccordion';
import { Button } from "@/components/ui/button";
import { ArrowRight, BookOpen, Users, Award } from "lucide-react";

const Index = () => {
  const features = [
    {
      title: 'Interactive Learning',
      description: 'Engaging content with quizzes, assignments, and real-time feedback to enhance your learning experience.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
          <line x1="3" y1="9" x2="21" y2="9"></line>
          <line x1="9" y1="21" x2="9" y2="9"></line>
        </svg>
      ),
    },
    {
      title: 'Progress Tracking',
      description: 'Monitor your learning progress with detailed analytics, charts, and personalized insights.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M20 12V8H6a2 2 0 0 1-2-2V6c0-1.1.9-2 2-2h14v4"></path>
          <path d="M4 6v12c0 1.1.9 2 2 2h14v-4"></path>
          <path d="M18 12a2 2 0 0 0-2 2c0 1.1.9 2 2 2h4v-4h-4z"></path>
        </svg>
      ),
    },
    {
      title: 'Expert Instructors',
      description: 'Learn from industry professionals with years of experience in their respective fields.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
          <circle cx="12" cy="7" r="4"></circle>
        </svg>
      ),
    },
    {
      title: 'Community Support',
      description: 'Join a vibrant community of learners, collaborate on projects, and get help when you need it.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
          <circle cx="9" cy="7" r="4"></circle>
          <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
          <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
        </svg>
      ),
    },
  ];

  const featuredCourses = [
    {
      id: '1',
      title: 'Web Development Fundamentals',
      instructor: 'John Smith',
      level: 'Beginner',
      duration: '12 hours',
      category: 'Development',
      image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    },
    {
      id: '2',
      title: 'UX/UI Design Masterclass',
      instructor: 'Sarah Johnson',
      level: 'Intermediate',
      duration: '10 hours',
      category: 'Design',
      image: 'https://images.unsplash.com/photo-1581092226825-a6a2a5aee158?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    },
    {
      id: '3',
      title: 'Data Science & Machine Learning',
      instructor: 'Michael Brown',
      level: 'Advanced',
      duration: '18 hours',
      category: 'Data Science',
      image: 'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    },
  ];

  const testimonials = [
    {
      name: 'Emma Wilson',
      role: 'Frontend Developer',
      company: 'TechCorp',
      image: 'https://randomuser.me/api/portraits/women/1.jpg',
      content: 'TaTa has completely transformed my learning journey. The interactive courses and progress tracking features have helped me stay motivated and achieve my goals faster.',
    },
    {
      name: 'David Chen',
      role: 'UI/UX Designer',
      company: 'DesignHub',
      image: 'https://randomuser.me/api/portraits/men/2.jpg',
      content: 'As a designer, I found TaTa\'s courses to be incredibly well-structured and comprehensive. The platform\'s interface is also a joy to use with its clean design.',
    },
    {
      name: 'Sophia Rodriguez',
      role: 'Data Analyst',
      company: 'DataInsights',
      image: 'https://randomuser.me/api/portraits/women/3.jpg',
      content: 'The data science courses on TaTa are top-notch. The instructors are experts in their field and the community support is phenomenal.',
    },
  ];

  const stats = [
    { label: 'Active Students', value: '10,000+', icon: <Users className="w-6 h-6 text-tata-orange" /> },
    { label: 'Courses Available', value: '250+', icon: <BookOpen className="w-6 h-6 text-tata-purple" /> },
    { label: 'Certifications Awarded', value: '5,000+', icon: <Award className="w-6 h-6 text-tata-blue" /> },
  ];

  const faqs = [
    {
      question: 'How do I get started with TaTa?',
      answer: 'Simply sign up for an account, choose your interests, and start exploring our curated courses. Our personalized dashboard will help you track your progress and recommend relevant learning materials.',
    },
    {
      question: 'Can I access courses on mobile devices?',
      answer: 'Yes! TaTa is fully responsive and works on all devices. You can learn on your computer, tablet, or smartphone, making it convenient to continue your education wherever you are.',
    },
    {
      question: 'Are there any free courses available?',
      answer: 'Absolutely. We offer a selection of free courses to help you get started. You can also try premium courses with our 7-day free trial before committing to a subscription.',
    },
    {
      question: 'How do certifications work?',
      answer: 'Upon completing a course, you'll receive a digital certificate that you can share on LinkedIn or other platforms. Our certificates are recognized by industry leaders and can help boost your professional profile.',
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-white to-tata-soft-gray">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h1 className="font-poppins font-bold text-4xl md:text-5xl lg:text-6xl mb-6">
                Track Your <span className="text-tata-orange">Learning Progress</span>
              </h1>
              <p className="text-lg text-gray-600 mb-8">
                Stay on top of your courses, quizzes, and rankings with real-time insights and interactive learning tools.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/signup" className="btn btn-primary btn-lg">
                  Get Started
                </Link>
                <Link to="/courses" className="btn btn-secondary btn-lg">
                  Learn More
                </Link>
              </div>
              <div className="mt-8 flex items-center gap-2">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <img 
                      key={i}
                      src={`https://randomuser.me/api/portraits/${i % 2 === 0 ? 'women' : 'men'}/${i}.jpg`}
                      alt="User"
                      className="w-8 h-8 rounded-full border-2 border-white"
                    />
                  ))}
                </div>
                <p className="text-gray-600 text-sm">
                  <span className="text-tata-dark font-medium">10K+</span> students already enrolled
                </p>
              </div>
            </div>
            
            <div className="relative animate-fade-in">
              <div className="absolute -top-5 -right-5 w-24 h-24 bg-tata-orange/10 rounded-full"></div>
              <div className="absolute -bottom-5 -left-5 w-32 h-32 bg-tata-purple/10 rounded-full"></div>
              <img 
                src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" 
                alt="Learning Platform"
                className="rounded-xl shadow-lg relative z-10 w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Stats Section */}
      <section className="py-14 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <StatCard 
                key={index}
                label={stat.label}
                value={stat.value}
                icon={stat.icon}
              />
            ))}
          </div>
        </div>
      </section>
      
      {/* Partners Section */}
      <PartnerLogos />
      
      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="font-poppins font-bold text-3xl md:text-4xl mb-4">Smart Features for Better Learning</h2>
            <p className="text-gray-600">For a better learning experience</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <FeatureCard
                key={index}
                title={feature.title}
                description={feature.description}
                icon={feature.icon}
              />
            ))}
          </div>
        </div>
      </section>
      
      {/* How It Works Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="font-poppins font-bold text-3xl md:text-4xl mb-4">How TaTa Works</h2>
            <p className="text-gray-600">Simple steps to get started with your learning journey</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { number: '01', title: 'Create Account', description: 'Sign up and complete your profile to personalize your learning experience.' },
              { number: '02', title: 'Choose Courses', description: 'Browse through our catalog and select courses that match your interests and goals.' },
              { number: '03', title: 'Track Progress', description: 'Monitor your advancement with detailed analytics and achieve your learning objectives.' },
            ].map((step, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-tata-orange/10 text-tata-orange font-bold text-lg mb-4">
                  {step.number}
                </div>
                <h3 className="font-poppins text-xl font-medium mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Courses Section */}
      <section className="py-20 bg-tata-soft-gray">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-12">
            <h2 className="font-poppins font-bold text-3xl">Featured Courses</h2>
            <Link 
              to="/courses" 
              className="text-tata-orange hover:text-tata-orange/80 font-medium transition-colors flex items-center gap-2"
            >
              View All <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredCourses.map((course) => (
              <CourseCard key={course.id} {...course} />
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <Button asChild variant="outline" size="lg" className="bg-white">
              <Link to="/courses">Explore All Courses</Link>
            </Button>
          </div>
        </div>
      </section>
      
      {/* Testimonials Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="font-poppins font-bold text-3xl md:text-4xl mb-4">What Our Students Say</h2>
            <p className="text-gray-600">Discover how TaTa has helped thousands of students achieve their learning goals</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard
                key={index}
                name={testimonial.name}
                role={testimonial.role}
                company={testimonial.company}
                image={testimonial.image}
                content={testimonial.content}
              />
            ))}
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="font-poppins font-bold text-3xl md:text-4xl mb-4">Frequently Asked Questions</h2>
            <p className="text-gray-600">Get answers to common questions about our learning platform</p>
          </div>
          
          <div className="max-w-3xl mx-auto">
            <FaqAccordion faqs={faqs} />
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-tata-orange/90 to-tata-blue/90 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="font-poppins font-bold text-3xl md:text-4xl mb-6">
              Experience Learning Like Never Before
            </h2>
            <p className="text-lg mb-8">
              Stay motivated, track your progress, and connect with a community—all in one seamless platform.
            </p>
            <Link 
              to="/signup" 
              className="btn bg-white hover:bg-gray-100 text-tata-orange btn-lg"
            >
              Join TaTa Today
            </Link>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Index;
