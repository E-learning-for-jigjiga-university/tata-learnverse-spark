
import { useEffect } from 'react';
import { useAuth } from '../../contexts/AuthContext';
import DashboardLayout from '../../components/DashboardLayout';
import DashboardCard from '../../components/DashboardCard';
import {
  Users, BookOpen, FileText, Bell, Activity, UserPlus, 
  UserMinus, UserX, Clock, Calendar, BarChart
} from 'lucide-react';
import { Button } from '@/components/ui/button';

const AdminDashboard = () => {
  const { user } = useAuth();
  
  const navLinks = [
    { to: '/admin/dashboard', icon: <Activity size={20} />, label: 'Dashboard' },
    { to: '/admin/users', icon: <Users size={20} />, label: 'Users' },
    { to: '/admin/courses', icon: <BookOpen size={20} />, label: 'Courses' },
    { to: '/admin/notices', icon: <Bell size={20} />, label: 'Notices' },
    { to: '/admin/activity', icon: <Activity size={20} />, label: 'Activity Log' },
  ];
  
  const userCounts = {
    total: 543,
    students: 450,
    instructors: 45,
    admin: 5,
    committee: 15,
    moderators: 8,
    newThisMonth: 38,
  };
  
  const courseStats = {
    totalCourses: 72,
    activeClasses: 45,
    upcomingClasses: 12,
    completedClasses: 15,
    enrollmentRequests: 56,
  };
  
  const recentUsers = [
    {
      id: '1',
      name: 'Emma Wilson',
      email: 'emma.wilson@example.com',
      role: 'student',
      joinedDate: '2025-04-28',
    },
    {
      id: '2',
      name: 'Michael Chen',
      email: 'michael.chen@example.com',
      role: 'student',
      joinedDate: '2025-04-27',
    },
    {
      id: '3',
      name: 'Sophia Rodriguez',
      email: 'sophia.r@example.com',
      role: 'instructor',
      joinedDate: '2025-04-25',
    },
  ];
  
  const recentActivity = [
    {
      id: '1',
      action: 'User Created',
      description: 'New student account created',
      user: 'Admin',
      timestamp: '2025-04-28 14:30:45',
    },
    {
      id: '2',
      action: 'Course Added',
      description: 'New course "Machine Learning Fundamentals" added',
      user: 'Admin',
      timestamp: '2025-04-28 12:15:30',
    },
    {
      id: '3',
      action: 'Notice Posted',
      description: 'System maintenance notice posted',
      user: 'Admin',
      timestamp: '2025-04-27 09:45:12',
    },
    {
      id: '4',
      action: 'User Updated',
      description: 'User role updated from student to instructor',
      user: 'Admin',
      timestamp: '2025-04-26 16:22:10',
    },
  ];

  useEffect(() => {
    document.title = 'Admin Dashboard | TaTa LearnVerse';
  }, []);

  return (
    <DashboardLayout 
      title={`Admin Dashboard`}
      navLinks={navLinks}
      activeLink="/admin/dashboard"
    >
      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow p-6">
          <div className="flex justify-between">
            <div>
              <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Total Users</p>
              <h3 className="text-3xl font-bold mt-2">{userCounts.total}</h3>
            </div>
            <div className="bg-tata-light-orange p-3 rounded-full text-tata-orange">
              <Users size={24} />
            </div>
          </div>
          <div className="mt-4 flex items-center text-sm">
            <UserPlus size={14} className="text-green-500 mr-1" />
            <span className="text-green-500 font-medium">{userCounts.newThisMonth} new</span>
            <span className="text-gray-500 ml-1">this month</span>
          </div>
        </div>
        
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow p-6">
          <div className="flex justify-between">
            <div>
              <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Total Courses</p>
              <h3 className="text-3xl font-bold mt-2">{courseStats.totalCourses}</h3>
            </div>
            <div className="bg-tata-light-purple p-3 rounded-full text-tata-purple">
              <BookOpen size={24} />
            </div>
          </div>
          <div className="mt-4 flex items-center text-sm">
            <span className="text-gray-500">
              <span className="font-medium text-tata-orange">{courseStats.activeClasses}</span> active classes
            </span>
          </div>
        </div>
        
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow p-6">
          <div className="flex justify-between">
            <div>
              <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Instructors</p>
              <h3 className="text-3xl font-bold mt-2">{userCounts.instructors}</h3>
            </div>
            <div className="bg-blue-100 p-3 rounded-full text-blue-600">
              <Users size={24} />
            </div>
          </div>
          <div className="mt-4 flex items-center text-sm">
            <span className="text-gray-500">
              <span className="font-medium text-blue-600">{courseStats.upcomingClasses}</span> upcoming classes
            </span>
          </div>
        </div>
        
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow p-6">
          <div className="flex justify-between">
            <div>
              <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Enrollment Requests</p>
              <h3 className="text-3xl font-bold mt-2">{courseStats.enrollmentRequests}</h3>
            </div>
            <div className="bg-amber-100 p-3 rounded-full text-amber-600">
              <FileText size={24} />
            </div>
          </div>
          <div className="mt-4 flex items-center text-sm">
            <Clock size={14} className="text-amber-600 mr-1" />
            <span className="text-amber-600">Requires attention</span>
          </div>
        </div>
      </div>
      
      {/* User Distribution */}
      <DashboardCard title="User Distribution" className="mb-6">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mt-4">
          <div className="text-center p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
            <div className="text-2xl font-bold text-tata-orange">{userCounts.students}</div>
            <div className="text-sm text-gray-500 dark:text-gray-400">Students</div>
          </div>
          <div className="text-center p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
            <div className="text-2xl font-bold text-blue-600">{userCounts.instructors}</div>
            <div className="text-sm text-gray-500 dark:text-gray-400">Instructors</div>
          </div>
          <div className="text-center p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
            <div className="text-2xl font-bold text-green-600">{userCounts.admin}</div>
            <div className="text-sm text-gray-500 dark:text-gray-400">Admins</div>
          </div>
          <div className="text-center p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
            <div className="text-2xl font-bold text-purple-600">{userCounts.committee}</div>
            <div className="text-sm text-gray-500 dark:text-gray-400">Committee</div>
          </div>
          <div className="text-center p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
            <div className="text-2xl font-bold text-amber-600">{userCounts.moderators}</div>
            <div className="text-sm text-gray-500 dark:text-gray-400">Moderators</div>
          </div>
        </div>
      </DashboardCard>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Recent Users */}
        <DashboardCard title="Recently Joined Users">
          <div className="mt-4 space-y-4">
            {recentUsers.map(user => (
              <div key={user.id} className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center text-gray-600 dark:text-gray-300">
                    {user.name.charAt(0).toUpperCase()}
                  </div>
                  <div className="ml-3">
                    <p className="font-medium">{user.name}</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">{user.email}</p>
                  </div>
                </div>
                <div className="text-right">
                  <span className="capitalize inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-tata-light-orange text-tata-orange">
                    {user.role}
                  </span>
                  <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">{user.joinedDate}</p>
                </div>
              </div>
            ))}
            <Button variant="outline" className="w-full mt-2">View All Users</Button>
          </div>
        </DashboardCard>
        
        {/* Recent Activity */}
        <DashboardCard title="Recent System Activity">
          <div className="mt-4 space-y-4">
            {recentActivity.map(activity => (
              <div key={activity.id} className="border-l-2 border-tata-orange pl-4 py-1">
                <p className="font-medium">{activity.action}</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">{activity.description}</p>
                <div className="flex items-center justify-between mt-1 text-xs text-gray-500 dark:text-gray-400">
                  <span>By: {activity.user}</span>
                  <span>{activity.timestamp}</span>
                </div>
              </div>
            ))}
            <Button variant="outline" className="w-full mt-2">View Full Activity Log</Button>
          </div>
        </DashboardCard>
      </div>
    </DashboardLayout>
  );
};

export default AdminDashboard;
