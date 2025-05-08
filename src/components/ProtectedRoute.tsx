
import { ReactNode } from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth, UserRole } from '../contexts/AuthContext';

interface ProtectedRouteProps {
  children: ReactNode;
  allowedRoles?: UserRole[];
}

const ProtectedRoute = ({ children, allowedRoles = [] }: ProtectedRouteProps) => {
  const { user, isAuthenticated, isLoading } = useAuth();

  if (isLoading) {
    // Show a loading spinner
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-tata-orange"></div>
        <span className="ml-3 text-lg text-gray-700">Loading...</span>
      </div>
    );
  }

  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  if (allowedRoles.length > 0 && user && !allowedRoles.includes(user.role)) {
    // User doesn't have the required role
    return <Navigate to="/unauthorized" />;
  }

  return <>{children}</>;
};

export default ProtectedRoute;
