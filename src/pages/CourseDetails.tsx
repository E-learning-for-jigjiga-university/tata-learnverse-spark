
import { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const CourseDetails = () => {
  const { id } = useParams();
  
  // Mock course data based on the ID
  const course = {
    id: id || '1',
    title: 'Web Development Fundamentals',
    instructor: 'John Smith',
    instructorTitle: 'Senior Frontend Developer',
    instructorImage: 'https://randomuser.me/api/portraits/men/1.jpg',
    level: 'Beginner',
    duration: '12 hours',
    lectures: 24,
    students: 1543,
    rating: 4.8,
    reviews: 246,
    category: 'Development',
    image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    description: 'Learn the fundamentals of web development including HTML, CSS, and JavaScript. This course is designed for beginners who want to start their journey into web development. You\'ll learn how to create responsive websites and gain a strong foundation in frontend development.',
    curriculum: [
      {
        title: 'Introduction to Web Development',
        lectures: [
          { title: 'Welcome to the Course', duration: '5:20' },
          { title: 'How the Web Works', duration: '10:15' },
          { title: 'Setting Up Your Development Environment', duration: '15:30' }
        ]
      },
      {
        title: 'HTML Basics',
        lectures: [
          { title: 'HTML Document Structure', duration: '12:45' },
          { title: 'Working with Text and Lists', duration: '14:20' },
          { title: 'HTML Forms and Input Elements', duration: '18:10' },
          { title: 'Semantic HTML', duration: '15:00' }
        ]
      },
      {
        title: 'CSS Fundamentals',
        lectures: [
          { title: 'CSS Selectors', duration: '11:30' },
          { title: 'Box Model', duration: '13:45' },
          { title: 'Flexbox Layout', duration: '20:15' },
          { title: 'CSS Grid', duration: '22:00' },
          { title: 'Responsive Design', duration: '25:30' }
        ]
      },
      {
        title: 'JavaScript Basics',
        lectures: [
          { title: 'Variables and Data Types', duration: '15:20' },
          { title: 'Functions and Control Flow', duration: '18:45' },
          { title: 'DOM Manipulation', duration: '24:10' },
          { title: 'Events and Event Handling', duration: '20:30' }
        ]
      }
    ]
  };

  useEffect(() => {
    document.title = `${course.title} | JIgJiga University`;
  }, [course.title]);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Course Header */}
      <section className="pt-32 pb-12 bg-tata-light-blue">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Link 
                  to="/courses"
                  className="text-gray-600 hover:text-tata-orange transition-colors"
                >
                  Courses
                </Link>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="9 18 15 12 9 6"></polyline>
                </svg>
                <span className="text-gray-900">{course.category}</span>
              </div>
              
              <h1 className="font-poppins font-bold text-3xl md:text-4xl mb-4">{course.title}</h1>
              
              <div className="flex items-center gap-4 mb-6">
                <div className="flex items-center gap-2">
                  <div className="flex">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <svg
                        key={star}
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill={star <= Math.floor(course.rating) ? "#F97316" : "#E5E7EB"}
                        className="w-4 h-4"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                          clipRule="evenodd"
                        />
                      </svg>
                    ))}
                  </div>
                  <span className="text-gray-800 font-medium">{course.rating}</span>
                  <span className="text-gray-500">({course.reviews} reviews)</span>
                </div>
                
                <span className="text-gray-500">|</span>
                
                <div className="flex items-center gap-1">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                    <circle cx="12" cy="7" r="4"></circle>
                  </svg>
                  <span className="text-gray-500">{course.students} students</span>
                </div>
              </div>
              
              <div className="flex items-center gap-3 mb-8">
                <img 
                  src={course.instructorImage} 
                  alt={course.instructor} 
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <p className="font-medium">{course.instructor}</p>
                  <p className="text-gray-500 text-sm">{course.instructorTitle}</p>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <span className="bg-tata-light-orange text-tata-orange text-xs font-medium px-2 py-1 rounded-full">
                    {course.level}
                  </span>
                  <span className="bg-tata-light-purple text-tata-purple text-xs font-medium px-2 py-1 rounded-full">
                    {course.duration}
                  </span>
                  <span className="bg-tata-light-blue text-tata-blue text-xs font-medium px-2 py-1 rounded-full">
                    {course.lectures} lectures
                  </span>
                </div>
                
                <div className="flex gap-4">
                  <button className="btn btn-secondary btn-lg">
                    More Information
                  </button>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute -top-5 -right-5 w-24 h-24 bg-tata-orange/10 rounded-full"></div>
              <div className="absolute -bottom-5 -left-5 w-32 h-32 bg-tata-purple/10 rounded-full"></div>
              <img 
                src={course.image} 
                alt={course.title}
                className="rounded-xl shadow-lg relative z-10 w-full h-auto"
              />
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <button className="w-16 h-16 bg-tata-orange rounded-full flex items-center justify-center shadow-lg">
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="white">
                    <polygon points="5 3 19 12 5 21 5 3"></polygon>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Course Content */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <div className="mb-12">
                <h2 className="font-poppins font-bold text-2xl mb-4">About This Course</h2>
                <p className="text-gray-600 leading-relaxed">{course.description}</p>
              </div>
              
              <div className="mb-12">
                <h2 className="font-poppins font-bold text-2xl mb-6">What You'll Learn</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    'Create responsive and interactive websites',
                    'Understand HTML structure and semantic elements',
                    'Style web pages using modern CSS techniques',
                    'Implement JavaScript functionality on web pages',
                    'Use developer tools for debugging and testing',
                    'Deploy websites to hosting providers',
                    'Optimize websites for performance',
                    'Implement best practices for accessibility'
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-tata-orange mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div>
                <h2 className="font-poppins font-bold text-2xl mb-6">Course Content</h2>
                <div className="border rounded-lg overflow-hidden">
                  {course.curriculum.map((section, index) => (
                    <div key={index} className="border-b last:border-b-0">
                      <div className="bg-gray-50 px-6 py-4 flex justify-between items-center cursor-pointer">
                        <h3 className="font-medium">{section.title}</h3>
                        <div className="flex items-center gap-2">
                          <span className="text-sm text-gray-500">{section.lectures.length} lectures</span>
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                          </svg>
                        </div>
                      </div>
                      
                      <div className="px-6 py-2">
                        {section.lectures.map((lecture, i) => (
                          <div key={i} className="py-3 flex justify-between items-center">
                            <div className="flex items-center gap-3">
                              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-500">
                                <circle cx="12" cy="12" r="10"></circle>
                                <polygon points="10 8 16 12 10 16 10 8"></polygon>
                              </svg>
                              <span>{lecture.title}</span>
                            </div>
                            <span className="text-sm text-gray-500">{lecture.duration}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            <div>
              <div className="bg-white rounded-xl shadow-md p-6 sticky top-24">
                <h3 className="font-poppins font-bold text-xl mb-4">Course Includes</h3>
                <ul className="space-y-4">
                  <li className="flex items-center gap-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-tata-orange" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>{course.duration} of video content</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-tata-orange" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>{course.lectures} lectures</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-tata-orange" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>10 downloadable resources</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-tata-orange" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>5 coding exercises</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-tata-orange" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Full lifetime access</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-tata-orange" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Access on mobile and TV</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-tata-orange" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Certificate of completion</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default CourseDetails;
