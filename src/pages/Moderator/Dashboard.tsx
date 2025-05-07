
import { useEffect } from 'react';
import { useAuth } from '../../contexts/AuthContext';
import DashboardLayout from '../../components/DashboardLayout';
import DashboardCard from '../../components/DashboardCard';
import { MessageSquare, Activity, Users } from 'lucide-react';

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
      title={`Welcome, ${user?.name}`}
      navLinks={navLinks}
      activeLink="/moderator/dashboard"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <DashboardCard 
          title="Pending Discussions"
          to="/moderator/discussions"
        >
          <p className="text-gray-600">Review and moderate pending discussion threads.</p>
          <div className="mt-4 flex items-center text-tata-orange">
            <Users size={18} className="mr-2" />
            <span>5 threads need review</span>
          </div>
        </DashboardCard>
        
        <DashboardCard 
          title="Activity Overview"
        >
          <p className="text-gray-600">Monitor overall discussion platform activity.</p>
          <div className="mt-4">
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm text-gray-500">Total Posts Today</span>
              <span className="font-medium">24</span>
            </div>
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm text-gray-500">Flagged Content</span>
              <span className="font-medium">3</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-500">Active Users</span>
              <span className="font-medium">128</span>
            </div>
          </div>
        </DashboardCard>
      </div>
    </DashboardLayout>
  );
};

export default ModeratorDashboard;
