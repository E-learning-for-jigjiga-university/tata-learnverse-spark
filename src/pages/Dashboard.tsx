
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import DashboardCard from '../components/DashboardCard';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const Dashboard = () => {
  // Mock data for charts
  const hourSpentData = [
    { name: 'Jan', hours: 30 },
    { name: 'Feb', hours: 40 },
    { name: 'Mar', hours: 60 },
    { name: 'Apr', hours: 45 },
    { name: 'May', hours: 35 },
  ];
  
  const courses = [
    {
      id: '1',
      title: 'Basic HTML and CSS',
      progress: 75,
      icon: '🌐'
    },
    {
      id: '2',
      title: 'Branding Design',
      progress: 50,
      icon: '🎨'
    },
    {
      id: '3',
      title: 'Motion Design',
      progress: 25,
      icon: '🎬'
    }
  ];
  
  const leaderboardData = [
    { rank: 1, name: 'Charlie Rawal', course: 'Web Development', hours: 53, points: 13650 },
    { rank: 2, name: 'Ariana Agrawal', course: 'UX Design', hours: 48, points: 10333 },
    { rank: 3, name: 'Jordan Smith', course: 'Data Science', hours: 42, points: 9875 }
  ];
  
  const todoList = [
    { id: 1, title: 'Developing Restaurant Apps', category: 'Programming', time: '08:00 AM', done: true },
    { id: 2, title: 'Integrate API', category: 'Development', time: '', done: false },
    { id: 3, title: 'Sizing Home Screen', category: 'Design', time: '', done: false },
    { id: 4, title: 'Research Objective User', category: 'Product Design', time: '02:30 PM', done: false },
    { id: 5, title: 'Report Analysis P2P Business', category: 'Business', time: '04:50 PM', done: true },
  ];

  // Current Date
  const date = new Date();
  const month = date.toLocaleString('default', { month: 'long' });
  const year = date.getFullYear();
  
  // Calendar Days
  const daysInMonth = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
  const firstDayOfMonth = new Date(date.getFullYear(), date.getMonth(), 1).getDay();
  
  const days = Array.from({ length: daysInMonth }, (_, i) => i + 1);
  const calendarDays = Array(firstDayOfMonth).fill(null).concat(days);
  
  // Mock Performance score
  const performanceScore = 8966;
  
  useEffect(() => {
    document.title = 'Dashboard | TaTa LearnVerse';
  }, []);

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <Sidebar active="overview" />
      
      {/* Main Content */}
      <div className="flex-1 px-6 py-8">
        <div className="mb-8 flex justify-between items-center">
          <div>
            <h2 className="text-3xl font-semibold font-poppins">Hello User 👋</h2>
            <p className="text-gray-600">Let's learn something new today!</p>
          </div>
          
          <div className="flex items-center gap-4">
            {/* Search bar */}
            <div className="relative hidden md:block">
              <input
                type="text"
                placeholder="Search from courses..."
                className="pl-10 pr-4 py-2 rounded-lg border border-gray-300 w-64 focus:outline-none focus:border-tata-orange"
              />
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            
            {/* Notification icon */}
            <button className="relative p-2 text-gray-600 hover:text-tata-orange transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
              </svg>
              <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
            </button>
            
            {/* Profile */}
            <div className="flex items-center gap-2">
              <span className="hidden md:inline font-medium">Profile</span>
              <Link to="/profile" className="w-10 h-10 rounded-full overflow-hidden" target="_blank" rel="noopener noreferrer">
                <img src="https://randomuser.me/api/portraits/women/1.jpg" alt="User Profile" className="w-full h-full object-cover" />
              </Link>
            </div>
          </div>
        </div>
        
        {/* Current Courses */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {courses.map(course => (
            <div key={course.id} className="bg-white rounded-xl overflow-hidden shadow-sm">
              <div className="p-6">
                <div className="w-12 h-12 rounded-lg flex items-center justify-center text-2xl mb-4">
                  {course.icon}
                </div>
                <h3 className="font-poppins font-medium text-lg mb-4">{course.title}</h3>
                <div className="flex gap-4 items-center text-sm">
                  <span className="flex items-center gap-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-500">
                      <circle cx="12" cy="12" r="10"></circle>
                      <polyline points="12 6 12 12 16 14"></polyline>
                    </svg>
                    <span>2h 30m</span>
                  </span>
                  <span className="flex items-center gap-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-500">
                      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                      <circle cx="12" cy="7" r="4"></circle>
                    </svg>
                    <span>8</span>
                  </span>
                  <span className="flex items-center gap-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-500">
                      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                    </svg>
                    <span>19</span>
                  </span>
                </div>
              </div>
              <div className="h-2 bg-gray-100">
                <div 
                  className="h-full bg-tata-orange"
                  style={{ width: `${course.progress}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Charts and Data */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Column: Hours Spent + Leader Board */}
          <div className="lg:col-span-2 space-y-6">
            <DashboardCard title="Hours Spent">
              <div className="flex gap-6 mb-4">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-tata-orange"></span>
                  <span className="text-sm text-gray-600">Study</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-gray-300"></span>
                  <span className="text-sm text-gray-600">Exams</span>
                </div>
              </div>
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={hourSpentData}>
                    <defs>
                      <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#F97316" stopOpacity={0.8}/>
                        <stop offset="95%" stopColor="#F97316" stopOpacity={0}/>
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} />
                    <XAxis dataKey="name" tick={{fontSize: 12}} />
                    <YAxis 
                      tick={{fontSize: 12}}
                      tickFormatter={(value) => `${value} hr`}
                    />
                    <Tooltip />
                    <Area 
                      type="monotone" 
                      dataKey="hours" 
                      stroke="#F97316" 
                      fillOpacity={1} 
                      fill="url(#colorUv)" 
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </DashboardCard>
            
            <DashboardCard title="Leader Board">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="text-left text-gray-500 border-b">
                      <th className="pb-3 font-medium">RANK</th>
                      <th className="pb-3 font-medium">NAME</th>
                      <th className="pb-3 font-medium">COURSE</th>
                      <th className="pb-3 font-medium">HOUR</th>
                      <th className="pb-3 font-medium">POINT</th>
                    </tr>
                  </thead>
                  <tbody>
                    {leaderboardData.map((entry, i) => (
                      <tr key={i} className="border-b border-gray-100">
                        <td className="py-3">
                          <div className={`w-6 h-6 rounded-full flex items-center justify-center text-xs ${
                            entry.rank === 1 
                              ? 'bg-tata-orange text-white' 
                              : 'bg-gray-100 text-gray-600'
                          }`}>
                            {entry.rank}
                          </div>
                        </td>
                        <td className="py-3 flex items-center gap-2">
                          <img 
                            src={`https://randomuser.me/api/portraits/${i % 2 === 0 ? 'men' : 'women'}/${i+1}.jpg`} 
                            alt={entry.name}
                            className="w-8 h-8 rounded-full object-cover"
                          />
                          <span>{entry.name}</span>
                        </td>
                        <td className="py-3 text-gray-600">{entry.course}</td>
                        <td className="py-3 text-gray-600">{entry.hours}</td>
                        <td className="py-3 text-tata-orange font-medium">{entry.points}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </DashboardCard>
          </div>
          
          {/* Right Column: Performance + Calendar + To-Do List */}
          <div className="space-y-6">
            <DashboardCard title="Performance">
              <div className="flex justify-between items-center mb-6">
                <button className="text-xs bg-tata-light-blue text-tata-blue px-3 py-1 rounded-full">Monthly</button>
              </div>
              
              <div className="flex flex-col items-center">
                <div className="w-48 h-48 relative mb-6">
                  <svg className="w-full h-full" viewBox="0 0 36 36">
                    <path
                      d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                      fill="none"
                      stroke="#f1f1f1"
                      strokeWidth="3"
                    />
                    <path
                      d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                      fill="none"
                      stroke="#33C3F0"
                      strokeWidth="3"
                      strokeDasharray="75, 100"
                    />
                    <text x="18" y="20" textAnchor="middle" fontSize="6" fill="#33C3F0">
                      75%
                    </text>
                  </svg>
                  
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex items-center justify-center flex-col">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#33C3F0" className="mb-2">
                      <circle cx="12" cy="12" r="10" fill="none" stroke="#33C3F0" strokeWidth="2"/>
                      <path d="M12 8v8M8 12h8" stroke="#33C3F0" strokeWidth="2" strokeLinecap="round"/>
                    </svg>
                  </div>
                </div>
                
                <div className="text-center">
                  <p className="text-gray-500 mb-1">Your Point:</p>
                  <p className="text-2xl font-semibold">{performanceScore}</p>
                </div>
              </div>
            </DashboardCard>
            
            <DashboardCard title={`${month} ${year}`}>
              <div className="grid grid-cols-7 gap-1 mb-2">
                {['M', 'T', 'W', 'T', 'F', 'S', 'S'].map((day, i) => (
                  <div key={i} className="h-8 flex items-center justify-center text-sm font-medium text-gray-400">
                    {day}
                  </div>
                ))}
              </div>
              
              <div className="grid grid-cols-7 gap-1">
                {calendarDays.map((day, i) => (
                  <div 
                    key={i} 
                    className={`h-8 rounded-full flex items-center justify-center text-sm ${
                      day === date.getDate() 
                        ? 'bg-tata-orange text-white' 
                        : day 
                          ? 'hover:bg-gray-100 cursor-pointer' 
                          : ''
                    }`}
                  >
                    {day}
                  </div>
                ))}
              </div>
            </DashboardCard>
            
            <DashboardCard title="To Do List">
              <ul className="space-y-3">
                {todoList.map((item) => (
                  <li key={item.id} className="flex items-start gap-3">
                    <input 
                      type="checkbox" 
                      checked={item.done}
                      onChange={() => {}}
                      className="mt-1 rounded border-gray-300 text-tata-orange focus:ring-tata-orange"
                    />
                    <div className="flex-1">
                      <p className={`font-medium ${item.done ? 'line-through text-gray-400' : ''}`}>{item.title}</p>
                      <p className="text-sm text-gray-500">{item.category} {item.time && `· ${item.time}`}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </DashboardCard>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
