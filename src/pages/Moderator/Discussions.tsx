
import { useEffect } from 'react';
import DashboardLayout from '../../components/DashboardLayout';
import { MessageSquare, Activity } from 'lucide-react';

const ModeratorDiscussions = () => {
  const navLinks = [
    { to: '/moderator/dashboard', icon: <Activity size={20} />, label: 'Dashboard' },
    { to: '/moderator/discussions', icon: <MessageSquare size={20} />, label: 'Discussions' },
  ];

  useEffect(() => {
    document.title = 'Discussion Moderation | TaTa LearnVerse';
  }, []);

  return (
    <DashboardLayout 
      title="Discussion Moderation"
      navLinks={navLinks}
      activeLink="/moderator/discussions"
    >
      <div className="p-8 text-center">
        <h3 className="text-2xl font-medium mb-4">Coming Soon</h3>
        <p className="text-gray-600">The discussion moderation page is under construction.</p>
      </div>
    </DashboardLayout>
  );
};

export default ModeratorDiscussions;
