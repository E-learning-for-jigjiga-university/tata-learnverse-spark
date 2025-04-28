
import { useEffect } from 'react';
import DashboardLayout from '../../components/DashboardLayout';
import { Book, FileText, CheckSquare, Upload, Users } from 'lucide-react';

const InstructorResources = () => {
  const navLinks = [
    { to: '/instructor/dashboard', icon: <Book size={20} />, label: 'Dashboard' },
    { to: '/instructor/courses', icon: <Book size={20} />, label: 'Courses' },
    { to: '/instructor/assignments', icon: <FileText size={20} />, label: 'Assignments' },
    { to: '/instructor/exams', icon: <CheckSquare size={20} />, label: 'Exams' },
    { to: '/instructor/quizzes', icon: <CheckSquare size={20} />, label: 'Quizzes' },
    { to: '/instructor/resources', icon: <Upload size={20} />, label: 'Resources' },
  ];

  useEffect(() => {
    document.title = 'Resources | TaTa LearnVerse';
  }, []);

  return (
    <DashboardLayout 
      title="Resources"
      navLinks={navLinks}
      activeLink="/instructor/resources"
    >
      <div className="p-8 text-center">
        <h3 className="text-2xl font-medium mb-4">Coming Soon</h3>
        <p className="text-gray-600">The resources management page is under construction.</p>
      </div>
    </DashboardLayout>
  );
};

export default InstructorResources;
