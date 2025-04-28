
import { useEffect } from 'react';
import { useAuth } from '../../contexts/AuthContext';
import DashboardLayout from '../../components/DashboardLayout';
import { CheckSquare, Activity } from 'lucide-react';

const CommitteeDashboard = () => {
  const { user } = useAuth();
  
  const navLinks = [
    { to: '/committee/dashboard', icon: <Activity size={20} />, label: 'Dashboard' },
    { to: '/committee/exams', icon: <CheckSquare size={20} />, label: 'Exams' },
  ];

  useEffect(() => {
    document.title = 'Exam Committee Dashboard | TaTa LearnVerse';
  }, []);

  return (
    <DashboardLayout 
      title={`Exam Committee Dashboard`}
      navLinks={navLinks}
      activeLink="/committee/dashboard"
    >
      <div className="p-8 text-center">
        <h3 className="text-2xl font-medium mb-4">Committee Dashboard</h3>
        <p className="text-gray-600">Welcome to the exam committee dashboard. From here, you can review and approve exams.</p>
      </div>
    </DashboardLayout>
  );
};

export default CommitteeDashboard;
