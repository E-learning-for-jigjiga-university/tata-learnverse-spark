
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import CourseCard from '../components/CourseCard';

const Courses = () => {
  const categories = [
    'All Courses',
    'Development',
    'Design',
    'Marketing',
    'Business',
    'Data Science',
    'Photography'
  ];
  
  const levels = ['All Levels', 'Beginner', 'Intermediate', 'Advanced'];
  
  const allCourses = [
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
    {
      id: '4',
      title: 'Advanced JavaScript for Developers',
      instructor: 'Emily Chen',
      level: 'Advanced',
      duration: '15 hours',
      category: 'Development',
      image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80',
    },
    {
      id: '5',
      title: 'Digital Marketing Fundamentals',
      instructor: 'Robert Johnson',
      level: 'Beginner',
      duration: '8 hours',
      category: 'Marketing',
      image: 'https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80',
    },
    {
      id: '6',
      title: 'Business Analytics',
      instructor: 'Lisa Wang',
      level: 'Intermediate',
      duration: '14 hours',
      category: 'Business',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    },
    {
      id: '7',
      title: 'Mobile App Development with React Native',
      instructor: 'David Clark',
      level: 'Intermediate',
      duration: '16 hours',
      category: 'Development',
      image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80',
    },
    {
      id: '8',
      title: 'Photography Masterclass',
      instructor: 'Anna Martinez',
      level: 'Beginner',
      duration: '10 hours',
      category: 'Photography',
      image: 'https://images.unsplash.com/photo-1542038784456-1ea8e935640e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    },
    {
      id: '9',
      title: 'Python for Data Analysis',
      instructor: 'Thomas Wilson',
      level: 'Intermediate',
      duration: '12 hours',
      category: 'Data Science',
      image: 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80',
    },
  ];

  const [activeCategory, setActiveCategory] = useState('All Courses');
  const [activeLevel, setActiveLevel] = useState('All Levels');
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredCourses, setFilteredCourses] = useState(allCourses);

  useEffect(() => {
    document.title = 'Courses | JIgJiga University';
  }, []);

  useEffect(() => {
    let filtered = allCourses;
    
    // Filter by category
    if (activeCategory !== 'All Courses') {
      filtered = filtered.filter(course => course.category === activeCategory);
    }
    
    // Filter by level
    if (activeLevel !== 'All Levels') {
      filtered = filtered.filter(course => course.level === activeLevel);
    }
    
    // Filter by search query
    if (searchQuery.trim() !== '') {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(course => 
        course.title.toLowerCase().includes(query) ||
        course.instructor.toLowerCase().includes(query) ||
        course.category.toLowerCase().includes(query)
      );
    }
    
    setFilteredCourses(filtered);
  }, [activeCategory, activeLevel, searchQuery]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // The filtering is already handled by the useEffect
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-12 bg-tata-light-blue dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="font-poppins font-bold text-4xl md:text-5xl mb-6">
              Explore Our Courses
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
              Discover a wide range of courses designed to help you achieve your learning goals
            </p>
            
            <form onSubmit={handleSearch} className="relative max-w-xl mx-auto">
              <input
                type="text"
                placeholder="Search for courses..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-4 rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white focus:outline-none focus:border-tata-orange"
              />
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-400 absolute left-4 top-1/2 transform -translate-y-1/2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </form>
          </div>
        </div>
      </section>
      
      {/* Filters */}
      <section className="py-8 border-b dark:border-gray-700">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row flex-wrap gap-6 md:gap-4 items-start md:items-center justify-between">
            <div className="flex flex-col md:flex-row w-full md:w-auto gap-2 md:items-center">
              <span className="text-gray-600 dark:text-gray-300 font-medium shrink-0">Categories:</span>
              <div className="flex flex-wrap gap-2">
                {categories.map((category, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveCategory(category)}
                    className={`px-3 py-1 rounded-full text-sm transition-colors ${
                      category === activeCategory
                        ? 'bg-tata-orange text-white'
                        : 'bg-gray-100 text-gray-600 hover:bg-gray-200 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
            
            <div className="flex flex-col md:flex-row w-full md:w-auto gap-2 md:items-center">
              <span className="text-gray-600 dark:text-gray-300 font-medium shrink-0">Level:</span>
              <div className="flex flex-wrap gap-2">
                {levels.map((level, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveLevel(level)}
                    className={`px-3 py-1 rounded-full text-sm transition-colors ${
                      level === activeLevel
                        ? 'bg-tata-purple text-white'
                        : 'bg-gray-100 text-gray-600 hover:bg-gray-200 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600'
                    }`}
                  >
                    {level}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Courses Grid */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          {filteredCourses.length > 0 ? (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredCourses.map((course) => (
                  <CourseCard key={course.id} {...course} />
                ))}
              </div>
              
              <div className="mt-12 flex justify-center">
                <button className="btn btn-primary btn-lg">
                  Load More Courses
                </button>
              </div>
            </>
          ) : (
            <div className="text-center py-16">
              <h3 className="text-xl font-medium mb-2">No courses found</h3>
              <p className="text-gray-600 dark:text-gray-400">Try adjusting your search or filters</p>
            </div>
          )}
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-tata-soft-gray dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-r from-tata-orange to-tata-orange/80 rounded-xl p-8 md:p-12 text-white text-center">
            <h2 className="font-poppins font-bold text-3xl md:text-4xl mb-4">
              Ready to Start Learning?
            </h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto">
              Join thousands of students who are already learning and growing with JIgJiga University.
            </p>
            <Link 
              to="/signup"
              className="btn bg-white hover:bg-gray-100 text-tata-orange btn-lg"
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

export default Courses;
