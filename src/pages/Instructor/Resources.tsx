
import { useEffect, useState } from 'react';
import DashboardLayout from '../../components/DashboardLayout';
import { Book, FileText, CheckSquare, Upload, Users } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useToast } from '@/hooks/use-toast';
import { useAuth } from '../../contexts/AuthContext';

// This would come from a backend API in a real app
const mockResources = [
  { id: 1, title: 'Course Material Template', type: 'document', size: '2.4 MB', date: '2025-04-01' },
  { id: 2, title: 'Lecture Slides - Introduction', type: 'presentation', size: '5.1 MB', date: '2025-04-10' },
  { id: 3, title: 'Assignment Guidelines', type: 'document', size: '1.8 MB', date: '2025-04-15' },
  { id: 4, title: 'Video Tutorial Sample', type: 'video', size: '24.6 MB', date: '2025-04-20' },
];

const InstructorResources = () => {
  const [resources, setResources] = useState(mockResources);
  const [isUploading, setIsUploading] = useState(false);
  const { toast } = useToast();
  const { user } = useAuth();
  
  const navLinks = [
    { to: '/instructor/dashboard', icon: <Book size={20} />, label: 'Dashboard' },
    { to: '/instructor/courses', icon: <Book size={20} />, label: 'Courses' },
    { to: '/instructor/assignments', icon: <FileText size={20} />, label: 'Assignments' },
    { to: '/instructor/exams', icon: <CheckSquare size={20} />, label: 'Exams' },
    { to: '/instructor/quizzes', icon: <CheckSquare size={20} />, label: 'Quizzes' },
    { to: '/instructor/resources', icon: <Upload size={20} />, label: 'Resources' },
  ];

  useEffect(() => {
    document.title = 'Resources | JigJiga University';
    
    // This would be a real API call in production
    const fetchResources = async () => {
      try {
        // Simulate API call
        console.log('Fetching resources for instructor:', user?.id);
        // In a real app, we would fetch from API:
        // const response = await fetch(`/api/instructor/resources?userId=${user?.id}`);
        // const data = await response.json();
        // setResources(data);
      } catch (error) {
        console.error('Error fetching resources:', error);
        toast({
          title: "Error",
          description: "Failed to load resources. Please try again.",
          variant: "destructive",
        });
      }
    };
    
    fetchResources();
  }, [user?.id, toast]);

  const handleUpload = () => {
    setIsUploading(true);
    
    // Simulate file upload
    setTimeout(() => {
      const newResource = {
        id: resources.length + 1,
        title: `New Resource ${resources.length + 1}`,
        type: 'document',
        size: '3.2 MB',
        date: new Date().toISOString().split('T')[0],
      };
      
      setResources([newResource, ...resources]);
      setIsUploading(false);
      
      toast({
        title: "Success",
        description: "Resource uploaded successfully.",
      });
      
      // In a real app with backend:
      // const formData = new FormData();
      // formData.append('file', selectedFile);
      // formData.append('userId', user.id);
      // await fetch('/api/resources/upload', {
      //   method: 'POST',
      //   body: formData
      // });
    }, 1500);
  };

  const handleDelete = (id: number) => {
    // Simulate deletion with confirmation
    if (window.confirm('Are you sure you want to delete this resource?')) {
      // Filter out the deleted resource
      const updatedResources = resources.filter(resource => resource.id !== id);
      setResources(updatedResources);
      
      toast({
        title: "Deleted",
        description: "Resource has been removed.",
      });
      
      // In a real app with backend:
      // await fetch(`/api/resources/${id}`, {
      //   method: 'DELETE'
      // });
    }
  };

  return (
    <DashboardLayout 
      title="Resources"
      navLinks={navLinks}
      activeLink="/instructor/resources"
    >
      <div className="p-6">
        <div className="mb-6 flex justify-between items-center">
          <h2 className="text-xl font-semibold">Manage Learning Resources</h2>
          <Button 
            onClick={handleUpload}
            disabled={isUploading}
            className="bg-tata-orange hover:bg-tata-orange/90"
          >
            {isUploading ? "Uploading..." : "Upload New Resource"}
          </Button>
        </div>
        
        {resources.length > 0 ? (
          <div className="grid gap-4">
            {resources.map((resource) => (
              <Card key={resource.id} className="p-4">
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="font-medium">{resource.title}</h3>
                    <div className="text-sm text-gray-500 flex gap-3 mt-1">
                      <span>{resource.type}</span>
                      <span>{resource.size}</span>
                      <span>{resource.date}</span>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm">
                      View
                    </Button>
                    <Button 
                      variant="destructive" 
                      size="sm"
                      onClick={() => handleDelete(resource.id)}
                    >
                      Delete
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        ) : (
          <div className="text-center p-8 bg-gray-50 dark:bg-gray-800 rounded-lg">
            <Upload className="mx-auto h-12 w-12 text-gray-400" />
            <h3 className="mt-2 text-sm font-semibold">No resources yet</h3>
            <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
              Upload course materials, assignments, or other resources for your students.
            </p>
          </div>
        )}
      </div>
    </DashboardLayout>
  );
};

export default InstructorResources;
