
import { useEffect } from 'react';
import DashboardLayout from '../../components/DashboardLayout';
import { Book, FileText, CheckSquare, Download, MessageSquare, BarChart2 } from 'lucide-react';

const StudentResources = () => {
  const navLinks = [
    { to: '/student/dashboard', icon: <Book size={20} />, label: 'Dashboard' },
    { to: '/student/assignments', icon: <FileText size={20} />, label: 'Assignments' },
    { to: '/student/exams', icon: <CheckSquare size={20} />, label: 'Exams' },
    { to: '/student/quizzes', icon: <CheckSquare size={20} />, label: 'Quizzes' },
    { to: '/student/resources', icon: <Download size={20} />, label: 'Resources' },
    { to: '/student/results', icon: <BarChart2 size={20} />, label: 'Results' },
    { to: '/student/discussions', icon: <MessageSquare size={20} />, label: 'Discussions' },
  ];

  useEffect(() => {
    document.title = 'Resources | TaTa LearnVerse';
  }, []);

  return (
    <DashboardLayout 
      title="Resources"
      navLinks={navLinks}
      activeLink="/student/resources"
    >
      <div className="p-8 text-center">
        <h3 className="text-2xl font-medium mb-4">Coming Soon</h3>
        <p className="text-gray-600">The resources page is under construction.</p>
      </div>
    </DashboardLayout>
  );
};

export default StudentResources;
