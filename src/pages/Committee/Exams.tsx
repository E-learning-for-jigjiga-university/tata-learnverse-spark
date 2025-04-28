
import { useEffect } from 'react';
import DashboardLayout from '../../components/DashboardLayout';
import { CheckSquare, Activity } from 'lucide-react';

const CommitteeExams = () => {
  const navLinks = [
    { to: '/committee/dashboard', icon: <Activity size={20} />, label: 'Dashboard' },
    { to: '/committee/exams', icon: <CheckSquare size={20} />, label: 'Exams' },
  ];

  useEffect(() => {
    document.title = 'Exam Review | TaTa LearnVerse';
  }, []);

  return (
    <DashboardLayout 
      title="Exam Review & Approval"
      navLinks={navLinks}
      activeLink="/committee/exams"
    >
      <div className="p-8 text-center">
        <h3 className="text-2xl font-medium mb-4">Coming Soon</h3>
        <p className="text-gray-600">The exam review and approval page is under construction.</p>
      </div>
    </DashboardLayout>
  );
};

export default CommitteeExams;
