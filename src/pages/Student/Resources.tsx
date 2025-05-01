
import { useEffect, useState } from 'react';
import DashboardLayout from '../../components/DashboardLayout';
import { Book, FileText, CheckSquare, Download, MessageSquare, BarChart2 } from 'lucide-react';
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useToast } from '@/hooks/use-toast';
import { useAuth } from '../../contexts/AuthContext';

// This would come from a backend API in a real app
const mockResources = [
  { 
    id: 1, 
    title: 'Introduction to Programming', 
    files: [
      { id: 101, name: 'Lecture Notes', type: 'PDF', size: '2.4 MB' },
      { id: 102, name: 'Code Examples', type: 'ZIP', size: '1.2 MB' }
    ],
    courseCode: 'CS101' 
  },
  { 
    id: 2, 
    title: 'Database Systems', 
    files: [
      { id: 201, name: 'SQL Basics', type: 'PDF', size: '3.1 MB' },
      { id: 202, name: 'ER Diagrams', type: 'PDF', size: '4.5 MB' }
    ],
    courseCode: 'CS301' 
  },
  { 
    id: 3, 
    title: 'Web Development', 
    files: [
      { id: 301, name: 'HTML & CSS Guide', type: 'PDF', size: '1.8 MB' },
      { id: 302, name: 'JavaScript Tutorial', type: 'PDF', size: '2.2 MB' },
      { id: 303, name: 'Project Template', type: 'ZIP', size: '5.6 MB' }
    ],
    courseCode: 'CS402' 
  },
];

const StudentResources = () => {
  const [resources, setResources] = useState(mockResources);
  const [isLoading, setIsLoading] = useState(true);
  const { toast } = useToast();
  const { user } = useAuth();
  
  const navLinks = [
    { to: '/student/dashboard', icon: <Book size={20} />, label: 'Dashboard' },
    { to: '/student/assignments', icon: <FileText size={20} />, label: 'Assignments' },
    { to: '/student/exams', icon: <CheckSquare size={20} />, label: 'Exams' },
    { to: '/student/quizzes', icon: <CheckSquare size={20} />, label: 'Quizzes' },
    { to: '/student/resources', icon: <Download size={20} />, label: 'Resources' },
    { to: '/student/results', icon: <BarChart2 size={20} />, label: 'Results' },
    { to: '/student/discussions', icon: <MessageSquare size={20} />, label: 'Discussions' },
  ];

  useEffect(() => {
    document.title = 'Resources | JigJiga University';
    
    // This would be a real API call in production
    const fetchResources = async () => {
      try {
        // Simulate API call with a delay
        console.log('Fetching resources for student:', user?.id);
        // In a real app, we would fetch from API:
        // const response = await fetch(`/api/student/resources?userId=${user?.id}`);
        // const data = await response.json();
        // setResources(data);
        
        setTimeout(() => {
          setIsLoading(false);
        }, 800);
      } catch (error) {
        console.error('Error fetching resources:', error);
        setIsLoading(false);
        toast({
          title: "Error",
          description: "Failed to load resources. Please try again.",
          variant: "destructive",
        });
      }
    };
    
    fetchResources();
  }, [user?.id, toast]);

  const handleDownload = (resourceId: number, fileId: number) => {
    // Simulate download process
    toast({
      title: "Downloading",
      description: "Your file is being downloaded.",
    });
    
    // In a real app with backend:
    // window.location.href = `/api/resources/download/${fileId}?userId=${user.id}`;
    
    console.log(`Downloading file ${fileId} from resource ${resourceId} for user ${user?.id}`);
  };

  if (isLoading) {
    return (
      <DashboardLayout 
        title="Resources"
        navLinks={navLinks}
        activeLink="/student/resources"
      >
        <div className="p-8 flex justify-center items-center">
          <div className="animate-pulse flex space-x-4">
            <div className="flex-1 space-y-6 py-1">
              <div className="h-6 bg-slate-200 dark:bg-slate-700 rounded w-3/4"></div>
              <div className="space-y-3">
                <div className="grid grid-cols-3 gap-4">
                  <div className="h-4 bg-slate-200 dark:bg-slate-700 rounded col-span-2"></div>
                  <div className="h-4 bg-slate-200 dark:bg-slate-700 rounded col-span-1"></div>
                </div>
                <div className="h-4 bg-slate-200 dark:bg-slate-700 rounded"></div>
              </div>
            </div>
          </div>
        </div>
      </DashboardLayout>
    );
  }

  return (
    <DashboardLayout 
      title="Resources"
      navLinks={navLinks}
      activeLink="/student/resources"
    >
      <div className="p-6">
        <h2 className="text-xl font-semibold mb-6">Learning Resources</h2>
        
        {resources.length > 0 ? (
          <div className="space-y-6">
            {resources.map((resource) => (
              <Card key={resource.id} className="p-5">
                <div className="mb-4 flex justify-between items-center">
                  <div>
                    <h3 className="font-semibold text-lg">{resource.title}</h3>
                    <span className="text-sm text-gray-500 dark:text-gray-400">
                      Course: {resource.courseCode}
                    </span>
                  </div>
                </div>
                
                <div className="border-t dark:border-gray-700 pt-4">
                  <h4 className="text-sm font-medium mb-3">Available Files</h4>
                  <div className="space-y-2">
                    {resource.files.map(file => (
                      <div key={file.id} className="flex justify-between items-center p-2 bg-gray-50 dark:bg-gray-800 rounded">
                        <div className="flex items-center gap-2">
                          <Download size={16} className="text-gray-500" />
                          <span>{file.name}</span>
                          <span className="text-xs text-gray-500 bg-gray-200 dark:bg-gray-700 px-2 py-0.5 rounded">
                            {file.type}
                          </span>
                          <span className="text-xs text-gray-500">
                            {file.size}
                          </span>
                        </div>
                        <Button 
                          size="sm"
                          variant="outline"
                          onClick={() => handleDownload(resource.id, file.id)}
                        >
                          Download
                        </Button>
                      </div>
                    ))}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        ) : (
          <div className="text-center p-8 bg-gray-50 dark:bg-gray-800 rounded-lg">
            <Download className="mx-auto h-12 w-12 text-gray-400" />
            <h3 className="mt-2 text-sm font-semibold">No resources available</h3>
            <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
              There are no learning resources available for your courses yet.
            </p>
          </div>
        )}
      </div>
    </DashboardLayout>
  );
};

export default StudentResources;
