
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { X } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { useAuth } from '../contexts/AuthContext';

type MobileNavProps = {
  isOpen: boolean;
  onClose: () => void;
}

const MobileNav = ({ isOpen, onClose }: MobileNavProps) => {
  const { isAuthenticated } = useAuth();
  
  if (!isOpen) return null;
  
  return (
    <div className="fixed inset-0 z-50 bg-background/95 backdrop-blur-sm">
      <div className="container mx-auto px-4 py-6">
        <div className="flex justify-between items-center mb-8">
          <Link to="/" className="flex items-center gap-2" onClick={onClose}>
            <img 
              src="/lovable-uploads/145a2051-fa4b-4136-9797-fd77c15f5e01.png" 
              alt="JigJiga University Logo" 
              className="h-12 w-auto"
            />
          </Link>
          
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={onClose} 
            className="text-foreground"
          >
            <X className="h-6 w-6" />
            <span className="sr-only">Close menu</span>
          </Button>
        </div>
        
        <nav className="flex flex-col space-y-6">
          <Link 
            to="/" 
            className="text-lg font-medium text-foreground hover:text-tata-orange transition-colors"
            onClick={onClose}
          >
            Home
          </Link>
          <Link 
            to="/courses" 
            className="text-lg font-medium text-foreground hover:text-tata-orange transition-colors"
            onClick={onClose}
          >
            Courses
          </Link>
          <Link 
            to="/dashboard" 
            className="text-lg font-medium text-foreground hover:text-tata-orange transition-colors"
            onClick={onClose}
          >
            Dashboard
          </Link>
          <Link 
            to="/about" 
            className="text-lg font-medium text-foreground hover:text-tata-orange transition-colors"
            onClick={onClose}
          >
            About Us
          </Link>
          <Link 
            to="/contact" 
            className="text-lg font-medium text-foreground hover:text-tata-orange transition-colors"
            onClick={onClose}
          >
            Contact
          </Link>
          
          <div className="pt-6 border-t border-gray-200 dark:border-gray-700">
            {!isAuthenticated ? (
              <div className="flex flex-col space-y-4">
                <Link 
                  to="/login" 
                  className="w-full py-3 text-center text-foreground hover:text-tata-orange transition-colors"
                  onClick={onClose}
                >
                  Log In
                </Link>
                <Link 
                  to="/signup" 
                  className="w-full py-3 text-center bg-tata-orange text-white rounded-md hover:bg-tata-orange/90 transition-colors"
                  onClick={onClose}
                >
                  Get Started
                </Link>
              </div>
            ) : (
              <Link 
                to="/dashboard" 
                className="w-full py-3 text-center bg-tata-orange text-white rounded-md hover:bg-tata-orange/90 transition-colors"
                onClick={onClose}
              >
                Go to Dashboard
              </Link>
            )}
          </div>
        </nav>
      </div>
    </div>
  );
};

export default MobileNav;
