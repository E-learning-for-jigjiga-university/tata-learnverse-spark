
import { useEffect } from 'react';
import DashboardLayout from '../../components/DashboardLayout';
import {
  Users, BookOpen, FileText, Bell, Activity
} from 'lucide-react';

const AdminNotices = () => {
  const navLinks = [
    { to: '/admin/dashboard', icon: <Activity size={20} />, label: 'Dashboard' },
    { to: '/admin/users', icon: <Users size={20} />, label: 'Users' },
    { to: '/admin/courses', icon: <BookOpen size={20} />, label: 'Courses' },
    { to: '/admin/notices', icon: <Bell size={20} />, label: 'Notices' },
    { to: '/admin/activity', icon: <Activity size={20} />, label: 'Activity Log' },
  ];

  useEffect(() => {
    document.title = 'Notices | TaTa LearnVerse';
  }, []);

  return (
    <DashboardLayout 
      title="Notices & Announcements"
      navLinks={navLinks}
      activeLink="/admin/notices"
    >
      <div className="p-8 text-center">
        <h3 className="text-2xl font-medium mb-4">Coming Soon</h3>
        <p className="text-gray-600">The notices and announcements page is under construction.</p>
      </div>
    </DashboardLayout>
  );
};

export default AdminNotices;
