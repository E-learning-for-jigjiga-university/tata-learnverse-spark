
import { useEffect } from 'react';
import { useAuth } from '../../contexts/AuthContext';
import DashboardLayout from '../../components/DashboardLayout';
import DashboardCard from '../../components/DashboardCard';
import { Book, FileText, CheckSquare, Upload, Users, Calendar } from 'lucide-react';

const InstructorDashboard = () => {
  const { user } = useAuth();
  
  const navLinks = [
    { to: '/instructor/dashboard', icon: <Book size={20} />, label: 'Dashboard' },
    { to: '/instructor/courses', icon: <Book size={20} />, label: 'Courses' },
    { to: '/instructor/assignments', icon: <FileText size={20} />, label: 'Assignments' },
    { to: '/instructor/exams', icon: <CheckSquare size={20} />, label: 'Exams' },
    { to: '/instructor/quizzes', icon: <CheckSquare size={20} />, label: 'Quizzes' },
    { to: '/instructor/resources', icon: <Upload size={20} />, label: 'Resources' },
  ];

  useEffect(() => {
    document.title = 'Instructor Dashboard | TaTa LearnVerse';
  }, []);

  return (
    <DashboardLayout 
      title={`Welcome, ${user?.name}`}
      navLinks={navLinks}
      activeLink="/instructor/dashboard"
    >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <DashboardCard 
          title="My Courses"
          to="/instructor/courses"
        >
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <Book size={20} className="text-tata-orange mr-2" />
              <span className="text-2xl font-medium">5</span>
            </div>
            <span className="text-sm bg-blue-100 text-blue-600 px-2 py-1 rounded-full">Active</span>
          </div>
        </DashboardCard>
        
        <DashboardCard 
          title="Assignments"
          to="/instructor/assignments"
        >
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <FileText size={20} className="text-tata-orange mr-2" />
              <span className="text-2xl font-medium">12</span>
            </div>
            <span className="text-sm bg-amber-100 text-amber-600 px-2 py-1 rounded-full">2 Pending</span>
          </div>
        </DashboardCard>
        
        <DashboardCard 
          title="Students"
        >
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <Users size={20} className="text-tata-orange mr-2" />
              <span className="text-2xl font-medium">85</span>
            </div>
            <span className="text-sm bg-green-100 text-green-600 px-2 py-1 rounded-full">Active</span>
          </div>
        </DashboardCard>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <DashboardCard 
          title="Upcoming Schedule"
        >
          <div className="space-y-3">
            <div className="flex gap-3 items-start p-3 bg-gray-50 rounded-lg">
              <Calendar size={20} className="text-tata-orange" />
              <div>
                <h4 className="font-medium">Introduction to Computer Science</h4>
                <p className="text-sm text-gray-600">Today, 10:00 AM - 11:30 AM</p>
                <p className="text-sm text-gray-600">Room 301</p>
              </div>
            </div>
            <div className="flex gap-3 items-start p-3 bg-gray-50 rounded-lg">
              <Calendar size={20} className="text-tata-orange" />
              <div>
                <h4 className="font-medium">Database Management Systems</h4>
                <p className="text-sm text-gray-600">Tomorrow, 2:00 PM - 3:30 PM</p>
                <p className="text-sm text-gray-600">Room 202</p>
              </div>
            </div>
          </div>
        </DashboardCard>
        
        <DashboardCard 
          title="Pending Tasks"
        >
          <ul className="space-y-2">
            <li className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
              <span className="font-medium">Grade Assignment #3</span>
              <span className="text-sm text-red-500">Due Today</span>
            </li>
            <li className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
              <span className="font-medium">Prepare Mid-term Exam</span>
              <span className="text-sm text-amber-500">Due in 3 days</span>
            </li>
            <li className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
              <span className="font-medium">Upload Course Materials</span>
              <span className="text-sm text-green-500">Due in 5 days</span>
            </li>
          </ul>
        </DashboardCard>
      </div>
    </DashboardLayout>
  );
};

export default InstructorDashboard;
