
import { useEffect } from 'react';
import { useAuth } from '../../contexts/AuthContext';
import DashboardLayout from '../../components/DashboardLayout';
import { Book, FileText, CheckSquare, Upload, Users } from 'lucide-react';

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
      <div className="p-8 text-center">
        <h3 className="text-2xl font-medium mb-4">Instructor Dashboard</h3>
        <p className="text-gray-600">Welcome to your instructor dashboard. From here, you can manage your courses, assignments, exams, and resources.</p>
      </div>
    </DashboardLayout>
  );
};

export default InstructorDashboard;
