
import { useEffect, useState } from 'react';
import DashboardLayout from '../../components/DashboardLayout';
import { Book, FileText, CheckSquare, Download, MessageSquare, BarChart2, Upload, Calendar, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const StudentAssignments = () => {
  const [filter, setFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  
  const navLinks = [
    { to: '/student/dashboard', icon: <Book size={20} />, label: 'Dashboard' },
    { to: '/student/assignments', icon: <FileText size={20} />, label: 'Assignments' },
    { to: '/student/exams', icon: <CheckSquare size={20} />, label: 'Exams' },
    { to: '/student/quizzes', icon: <CheckSquare size={20} />, label: 'Quizzes' },
    { to: '/student/resources', icon: <Download size={20} />, label: 'Resources' },
    { to: '/student/results', icon: <BarChart2 size={20} />, label: 'Results' },
    { to: '/student/discussions', icon: <MessageSquare size={20} />, label: 'Discussions' },
  ];
  
  const assignments = [
    {
      id: '1',
      title: 'Programming Assignment #1',
      course: 'Introduction to Computer Science',
      dueDate: '2025-04-25',
      submitted: true,
      submittedDate: '2025-04-23',
      grade: '90/100',
      status: 'completed',
    },
    {
      id: '2',
      title: 'Programming Assignment #2',
      course: 'Introduction to Computer Science',
      dueDate: '2025-04-30',
      submitted: true,
      submittedDate: '2025-04-28',
      grade: 'Pending',
      status: 'pending',
    },
    {
      id: '3',
      title: 'Programming Assignment #3',
      course: 'Introduction to Computer Science',
      dueDate: '2025-05-05',
      submitted: false,
      status: 'pending',
    },
    {
      id: '4',
      title: 'Algorithm Analysis',
      course: 'Data Structures and Algorithms',
      dueDate: '2025-05-07',
      submitted: false,
      status: 'pending',
    },
    {
      id: '5',
      title: 'ER Diagram Design',
      course: 'Database Management Systems',
      dueDate: '2025-05-02',
      submitted: true,
      submittedDate: '2025-05-01',
      grade: 'Pending',
      status: 'pending',
    },
    {
      id: '6',
      title: 'Normalization Exercise',
      course: 'Database Management Systems',
      dueDate: '2025-04-20',
      submitted: true,
      submittedDate: '2025-04-19',
      grade: '85/100',
      status: 'completed',
    },
  ];
  
  const filteredAssignments = assignments
    .filter(assignment => {
      if (filter === 'pending') return !assignment.submitted;
      if (filter === 'submitted') return assignment.submitted && assignment.grade === 'Pending';
      if (filter === 'graded') return assignment.submitted && assignment.grade !== 'Pending';
      return true; // 'all' filter
    })
    .filter(assignment => {
      if (!searchQuery) return true;
      return (
        assignment.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        assignment.course.toLowerCase().includes(searchQuery.toLowerCase())
      );
    });

  useEffect(() => {
    document.title = 'Assignments | TaTa LearnVerse';
  }, []);

  return (
    <DashboardLayout 
      title="Assignments"
      navLinks={navLinks}
      activeLink="/student/assignments"
    >
      <div className="mb-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
          <div className="flex gap-2">
            <Button 
              variant={filter === 'all' ? 'default' : 'outline'} 
              size="sm" 
              onClick={() => setFilter('all')}
            >
              All
            </Button>
            <Button 
              variant={filter === 'pending' ? 'default' : 'outline'} 
              size="sm" 
              onClick={() => setFilter('pending')}
              className={filter === 'pending' ? '' : 'text-amber-600'}
            >
              Pending
            </Button>
            <Button 
              variant={filter === 'submitted' ? 'default' : 'outline'} 
              size="sm" 
              onClick={() => setFilter('submitted')}
              className={filter === 'submitted' ? '' : 'text-blue-600'}
            >
              Submitted
            </Button>
            <Button 
              variant={filter === 'graded' ? 'default' : 'outline'} 
              size="sm" 
              onClick={() => setFilter('graded')}
              className={filter === 'graded' ? '' : 'text-green-600'}
            >
              Graded
            </Button>
          </div>
          
          <div className="relative">
            <Input
              type="search"
              placeholder="Search assignments..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-5 w-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" 
              />
            </svg>
          </div>
        </div>
        
        <div className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Assignment</TableHead>
                <TableHead>Course</TableHead>
                <TableHead>Due Date</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Grade</TableHead>
                <TableHead className="text-right">Action</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredAssignments.length > 0 ? (
                filteredAssignments.map((assignment) => (
                  <TableRow key={assignment.id}>
                    <TableCell className="font-medium">{assignment.title}</TableCell>
                    <TableCell>{assignment.course}</TableCell>
                    <TableCell>
                      <div className="flex items-center">
                        <Calendar size={14} className="mr-2 text-gray-500" />
                        {assignment.dueDate}
                      </div>
                    </TableCell>
                    <TableCell>
                      {assignment.submitted ? (
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800 dark:bg-green-800 dark:text-green-100">
                          Submitted
                        </span>
                      ) : (
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-amber-100 text-amber-800 dark:bg-amber-800 dark:text-amber-100">
                          Pending
                        </span>
                      )}
                    </TableCell>
                    <TableCell>
                      {assignment.submitted ? (
                        assignment.grade === 'Pending' ? (
                          <span className="text-blue-600">Grading</span>
                        ) : (
                          assignment.grade
                        )
                      ) : (
                        "-"
                      )}
                    </TableCell>
                    <TableCell className="text-right">
                      {assignment.submitted ? (
                        <Button variant="outline" size="sm">
                          View
                        </Button>
                      ) : (
                        <Button size="sm">
                          <Upload size={14} className="mr-2" />
                          Submit
                        </Button>
                      )}
                    </TableCell>
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell colSpan={6} className="text-center py-8 text-gray-500">
                    No assignments found
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default StudentAssignments;
