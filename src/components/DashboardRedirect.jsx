
import { Navigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

const DashboardRedirect = () => {
  const { user, isAuthenticated } = useAuth();
  
  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }
  
  // Redirect based on user role
  switch (user?.role) {
    case 'student':
      return <Navigate to="/student/dashboard" />;
    case 'instructor':
      return <Navigate to="/instructor/dashboard" />;
    case 'admin':
      return <Navigate to="/admin/dashboard" />;
    case 'examCommittee':
      return <Navigate to="/committee/dashboard" />;
    case 'discussionModerator':
      return <Navigate to="/moderator/dashboard" />;
    default:
      // Fallback for unknown roles
      return <Navigate to="/login" />;
  }
};

export default DashboardRedirect;
