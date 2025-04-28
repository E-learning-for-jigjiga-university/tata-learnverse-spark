
import { useEffect } from 'react';
import { useAuth } from '../../contexts/AuthContext';
import DashboardLayout from '../../components/DashboardLayout';
import { MessageSquare, Activity } from 'lucide-react';

const ModeratorDashboard = () => {
  const { user } = useAuth();
  
  const navLinks = [
    { to: '/moderator/dashboard', icon: <Activity size={20} />, label: 'Dashboard' },
    { to: '/moderator/discussions', icon: <MessageSquare size={20} />, label: 'Discussions' },
  ];

  useEffect(() => {
    document.title = 'Moderator Dashboard | TaTa LearnVerse';
  }, []);

  return (
    <DashboardLayout 
      title={`Discussion Moderator Dashboard`}
      navLinks={navLinks}
      activeLink="/moderator/dashboard"
    >
      <div className="p-8 text-center">
        <h3 className="text-2xl font-medium mb-4">Moderator Dashboard</h3>
        <p className="text-gray-600">Welcome to the discussion moderator dashboard. From here, you can moderate discussions across the platform.</p>
      </div>
    </DashboardLayout>
  );
};

export default ModeratorDashboard;
