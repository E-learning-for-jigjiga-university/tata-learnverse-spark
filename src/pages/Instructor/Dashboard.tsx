
import { useEffect } from 'react';
import { useAuth } from '../../contexts/AuthContext';
import DashboardLayout from '../../components/DashboardLayout';
import DashboardCard from '../../components/DashboardCard';
import StatCard from '../../components/StatCard';
import { 
  Book, 
  FileText, 
  CheckSquare, 
  Upload, 
  Users, 
  Calendar, 
  Download, 
  MessageSquare, 
  FileUp, 
  FileDown, 
  Bell
} from 'lucide-react';

const InstructorDashboard = () => {
  const { user } = useAuth();
  
  const navLinks = [
    { to: '/instructor/dashboard', icon: <Book size={20} />, label: 'Dashboard' },
    { to: '/instructor/courses', icon: <Book size={20} />, label: 'Courses' },
    { to: '/instructor/assignments', icon: <FileText size={20} />, label: 'Assignments' },
    { to: '/instructor/exams', icon: <CheckSquare size={20} />, label: 'Exams' },
    { to: '/instructor/quizzes', icon: <CheckSquare size={20} />, label: 'Quizzes' },
    { to: '/instructor/resources', icon: <Upload size={20} />, label: 'Resources' },
    { to: '/instructor/discussions', icon: <MessageSquare size={20} />, label: 'Discussions' },
    { to: '/instructor/notices', icon: <Bell size={20} />, label: 'Notices' },
  ];

  useEffect(() => {
    document.title = 'Instructor Dashboard | JigJiga University';
  }, []);

  const handleCardClick = (path: string) => {
    // This would be implemented with your router navigation
    console.log(`Navigating to: ${path}`);
    // navigate(path) - You can implement this when integrating with your backend
  };

  return (
    <DashboardLayout 
      title={`Welcome, ${user?.name}`}
      navLinks={navLinks}
      activeLink="/instructor/dashboard"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
        <StatCard 
          label="My Courses"
          value="5"
          icon={<Book size={24} className="text-tata-orange" />}
          onClick={() => handleCardClick('/instructor/courses')}
        />
        
        <StatCard 
          label="Assignments"
          value="12"
          icon={<FileText size={24} className="text-tata-orange" />}
          trend={{ value: 8, isPositive: true }}
          onClick={() => handleCardClick('/instructor/assignments')}
        />
        
        <StatCard 
          label="Students"
          value="85"
          icon={<Users size={24} className="text-tata-orange" />}
        />

        <StatCard 
          label="Uploaded Resources"
          value="28"
          icon={<FileUp size={24} className="text-tata-orange" />}
          onClick={() => handleCardClick('/instructor/resources')}
        />

        <StatCard 
          label="Discussion Threads"
          value="16"
          icon={<MessageSquare size={24} className="text-tata-orange" />}
          onClick={() => handleCardClick('/instructor/discussions')}
        />

        <StatCard 
          label="Pending Results"
          value="3"
          icon={<CheckSquare size={24} className="text-tata-orange" />}
          trend={{ value: 2, isPositive: false }}
          onClick={() => handleCardClick('/instructor/results')}
        />
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
          title="Recent Activities"
        >
          <ul className="space-y-2">
            <li className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
              <div className="flex items-center">
                <Upload size={16} className="text-green-500 mr-2" />
                <span>You uploaded an assignment</span>
              </div>
              <span className="text-xs text-gray-500">2 hours ago</span>
            </li>
            <li className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
              <div className="flex items-center">
                <Download size={16} className="text-blue-500 mr-2" />
                <span>You downloaded student submissions</span>
              </div>
              <span className="text-xs text-gray-500">Yesterday</span>
            </li>
            <li className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
              <div className="flex items-center">
                <CheckSquare size={16} className="text-purple-500 mr-2" />
                <span>You recorded course results</span>
              </div>
              <span className="text-xs text-gray-500">3 days ago</span>
            </li>
          </ul>
        </DashboardCard>
      </div>
    </DashboardLayout>
  );
};

export default InstructorDashboard;
