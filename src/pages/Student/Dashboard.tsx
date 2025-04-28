
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import DashboardLayout from '../../components/DashboardLayout';
import DashboardCard from '../../components/DashboardCard';
import { 
  Book, FileText, CheckSquare, Download, MessageSquare, 
  BarChart2, Calendar, Clock, AlertTriangle 
} from 'lucide-react';

const StudentDashboard = () => {
  const { user } = useAuth();
  
  const navLinks = [
    { to: '/student/dashboard', icon: <Book size={20} />, label: 'Dashboard' },
    { to: '/student/assignments', icon: <FileText size={20} />, label: 'Assignments' },
    { to: '/student/exams', icon: <CheckSquare size={20} />, label: 'Exams' },
    { to: '/student/quizzes', icon: <CheckSquare size={20} />, label: 'Quizzes' },
    { to: '/student/resources', icon: <Download size={20} />, label: 'Resources' },
    { to: '/student/results', icon: <BarChart2 size={20} />, label: 'Results' },
    { to: '/student/discussions', icon: <MessageSquare size={20} />, label: 'Discussions' },
  ];
  
  const enrolledCourses = [
    {
      id: '1',
      title: 'Introduction to Computer Science',
      instructor: 'Dr. John Smith',
      progress: 75,
      nextClass: 'Tomorrow, 10:00 AM',
    },
    {
      id: '2',
      title: 'Data Structures and Algorithms',
      instructor: 'Prof. Sarah Johnson',
      progress: 45,
      nextClass: 'Today, 2:30 PM',
    },
    {
      id: '3',
      title: 'Database Management Systems',
      instructor: 'Dr. Michael Brown',
      progress: 20,
      nextClass: 'Wednesday, 11:00 AM',
    },
  ];
  
  const upcomingAssignments = [
    {
      id: '1',
      title: 'Programming Assignment #3',
      course: 'Introduction to Computer Science',
      dueDate: '2025-05-05',
      submitted: false,
    },
    {
      id: '2',
      title: 'Algorithm Analysis',
      course: 'Data Structures and Algorithms',
      dueDate: '2025-05-07',
      submitted: false,
    },
    {
      id: '3',
      title: 'ER Diagram Design',
      course: 'Database Management Systems',
      dueDate: '2025-05-02',
      submitted: true,
    },
  ];
  
  const upcomingExams = [
    {
      id: '1',
      title: 'Mid-term Examination',
      course: 'Introduction to Computer Science',
      date: '2025-05-15',
      time: '10:00 AM - 12:00 PM',
      location: 'Hall A',
    },
    {
      id: '2',
      title: 'Quiz 3',
      course: 'Data Structures and Algorithms',
      date: '2025-05-08',
      time: '2:30 PM - 3:30 PM',
      location: 'Room 302',
    },
  ];
  
  const announcements = [
    {
      id: '1',
      title: 'System Maintenance',
      content: 'The system will be down for maintenance on Sunday, May 10th, from 2:00 AM to 5:00 AM.',
      date: '2025-05-01',
    },
    {
      id: '2',
      title: 'New Course Available',
      content: 'A new course on Machine Learning will be available for enrollment starting next week.',
      date: '2025-04-30',
    },
  ];

  useEffect(() => {
    document.title = 'Student Dashboard | TaTa LearnVerse';
  }, []);

  return (
    <DashboardLayout 
      title={`Welcome, ${user?.name}`}
      navLinks={navLinks}
      activeLink="/student/dashboard"
    >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <DashboardCard 
          title="Enrolled Courses"
          className="md:col-span-2"
        >
          <div className="space-y-4">
            {enrolledCourses.map((course) => (
              <div key={course.id} className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4">
                <div className="flex justify-between mb-2">
                  <h4 className="font-medium">{course.title}</h4>
                  <span className="text-sm text-gray-500">{course.progress}%</span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5 mb-2">
                  <div className="bg-tata-orange h-2.5 rounded-full" style={{ width: `${course.progress}%` }}></div>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600 dark:text-gray-400">Instructor: {course.instructor}</span>
                  <div className="flex items-center text-tata-orange">
                    <Clock size={14} className="mr-1" />
                    <span>{course.nextClass}</span>
                  </div>
                </div>
              </div>
            ))}
            <Link to="/courses" className="block text-center text-tata-orange hover:text-tata-orange/80">
              Browse More Courses
            </Link>
          </div>
        </DashboardCard>
        <DashboardCard title="Announcements">
          <div className="space-y-4">
            {announcements.map((announcement) => (
              <div key={announcement.id} className="border-l-4 border-tata-orange pl-4">
                <h4 className="font-medium flex items-center">
                  <AlertTriangle size={14} className="mr-2 text-tata-orange" />
                  {announcement.title}
                </h4>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">{announcement.content}</p>
                <p className="text-xs text-gray-500 mt-2">{announcement.date}</p>
              </div>
            ))}
          </div>
        </DashboardCard>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <DashboardCard title="Upcoming Assignments">
          <div className="space-y-3">
            {upcomingAssignments.map((assignment) => (
              <div key={assignment.id} className="flex items-start gap-3 p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800">
                <div className={`p-2 rounded-full ${assignment.submitted ? 'bg-green-100 text-green-600' : 'bg-amber-100 text-amber-600'}`}>
                  {assignment.submitted ? (
                    <CheckSquare size={18} />
                  ) : (
                    <FileText size={18} />
                  )}
                </div>
                <div className="flex-1">
                  <h4 className="font-medium">{assignment.title}</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{assignment.course}</p>
                </div>
                <div className="flex items-center">
                  <Calendar size={14} className="mr-1 text-gray-500" />
                  <span className="text-sm text-gray-500">Due: {assignment.dueDate}</span>
                </div>
              </div>
            ))}
            <Link to="/student/assignments" className="block text-center text-tata-orange hover:text-tata-orange/80">
              View All Assignments
            </Link>
          </div>
        </DashboardCard>
        
        <DashboardCard title="Upcoming Exams">
          <div className="space-y-3">
            {upcomingExams.map((exam) => (
              <div key={exam.id} className="p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800">
                <h4 className="font-medium">{exam.title}</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">{exam.course}</p>
                <div className="flex items-center justify-between mt-2 text-sm">
                  <div className="flex items-center text-gray-500">
                    <Calendar size={14} className="mr-1" />
                    <span>{exam.date}</span>
                  </div>
                  <div className="flex items-center text-gray-500">
                    <Clock size={14} className="mr-1" />
                    <span>{exam.time}</span>
                  </div>
                </div>
              </div>
            ))}
            <Link to="/student/exams" className="block text-center text-tata-orange hover:text-tata-orange/80">
              View All Exams
            </Link>
          </div>
        </DashboardCard>
      </div>
    </DashboardLayout>
  );
};

export default StudentDashboard;
