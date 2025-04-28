
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ThemeProvider } from "next-themes";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";
import ProtectedRoute from "./components/ProtectedRoute";

// Landing Pages
import Index from "./pages/Index";
import About from "./pages/About";
import Contact from "./pages/Contact";

// Auth Pages
import Login from "./pages/Auth/Login";
import Signup from "./pages/Auth/Signup";
import Unauthorized from "./pages/Auth/Unauthorized";

// Course Related Pages
import Courses from "./pages/Courses";
import CourseDetails from "./pages/CourseDetails";

// Dashboard Pages for Different Roles
import StudentDashboard from "./pages/Student/Dashboard";
import InstructorDashboard from "./pages/Instructor/Dashboard";
import AdminDashboard from "./pages/Admin/Dashboard";
import CommitteeDashboard from "./pages/Committee/Dashboard";
import ModeratorDashboard from "./pages/Moderator/Dashboard";

// Student specific pages
import StudentAssignments from "./pages/Student/Assignments";
import StudentExams from "./pages/Student/Exams";
import StudentQuizzes from "./pages/Student/Quizzes";
import StudentResources from "./pages/Student/Resources";
import StudentCourseResults from "./pages/Student/CourseResults";
import StudentDiscussions from "./pages/Student/Discussions";

// Instructor specific pages
import InstructorCourses from "./pages/Instructor/Courses";
import InstructorAssignments from "./pages/Instructor/Assignments";
import InstructorExams from "./pages/Instructor/Exams";
import InstructorResources from "./pages/Instructor/Resources";
import InstructorQuizzes from "./pages/Instructor/Quizzes";

// Admin specific pages
import AdminUsers from "./pages/Admin/Users";
import AdminCourses from "./pages/Admin/Courses";
import AdminNotices from "./pages/Admin/Notices";
import AdminActivity from "./pages/Admin/Activity";

// Exam Committee pages
import CommitteeExams from "./pages/Committee/Exams";

// Discussion Moderator pages
import ModeratorDiscussions from "./pages/Moderator/Discussions";

// Misc Pages
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider attribute="class" defaultTheme="light">
      <TooltipProvider>
        <BrowserRouter>
          <AuthProvider>
            <Toaster />
            <Sonner />
            <Routes>
              {/* Public Routes */}
              <Route path="/" element={<Index />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/unauthorized" element={<Unauthorized />} />
              <Route path="/courses" element={<Courses />} />
              <Route path="/courses/:id" element={<CourseDetails />} />
              
              {/* Student Routes */}
              <Route 
                path="/student/dashboard" 
                element={
                  <ProtectedRoute allowedRoles={['student']}>
                    <StudentDashboard />
                  </ProtectedRoute>
                } 
              />
              <Route 
                path="/student/assignments" 
                element={
                  <ProtectedRoute allowedRoles={['student']}>
                    <StudentAssignments />
                  </ProtectedRoute>
                } 
              />
              <Route 
                path="/student/exams" 
                element={
                  <ProtectedRoute allowedRoles={['student']}>
                    <StudentExams />
                  </ProtectedRoute>
                } 
              />
              <Route 
                path="/student/quizzes" 
                element={
                  <ProtectedRoute allowedRoles={['student']}>
                    <StudentQuizzes />
                  </ProtectedRoute>
                } 
              />
              <Route 
                path="/student/resources" 
                element={
                  <ProtectedRoute allowedRoles={['student']}>
                    <StudentResources />
                  </ProtectedRoute>
                } 
              />
              <Route 
                path="/student/results" 
                element={
                  <ProtectedRoute allowedRoles={['student']}>
                    <StudentCourseResults />
                  </ProtectedRoute>
                } 
              />
              <Route 
                path="/student/discussions" 
                element={
                  <ProtectedRoute allowedRoles={['student']}>
                    <StudentDiscussions />
                  </ProtectedRoute>
                } 
              />
              
              {/* Instructor Routes */}
              <Route 
                path="/instructor/dashboard" 
                element={
                  <ProtectedRoute allowedRoles={['instructor']}>
                    <InstructorDashboard />
                  </ProtectedRoute>
                } 
              />
              <Route 
                path="/instructor/courses" 
                element={
                  <ProtectedRoute allowedRoles={['instructor']}>
                    <InstructorCourses />
                  </ProtectedRoute>
                } 
              />
              <Route 
                path="/instructor/assignments" 
                element={
                  <ProtectedRoute allowedRoles={['instructor']}>
                    <InstructorAssignments />
                  </ProtectedRoute>
                } 
              />
              <Route 
                path="/instructor/exams" 
                element={
                  <ProtectedRoute allowedRoles={['instructor']}>
                    <InstructorExams />
                  </ProtectedRoute>
                } 
              />
              <Route 
                path="/instructor/resources" 
                element={
                  <ProtectedRoute allowedRoles={['instructor']}>
                    <InstructorResources />
                  </ProtectedRoute>
                } 
              />
              <Route 
                path="/instructor/quizzes" 
                element={
                  <ProtectedRoute allowedRoles={['instructor']}>
                    <InstructorQuizzes />
                  </ProtectedRoute>
                } 
              />
              
              {/* Admin Routes */}
              <Route 
                path="/admin/dashboard" 
                element={
                  <ProtectedRoute allowedRoles={['admin']}>
                    <AdminDashboard />
                  </ProtectedRoute>
                } 
              />
              <Route 
                path="/admin/users" 
                element={
                  <ProtectedRoute allowedRoles={['admin']}>
                    <AdminUsers />
                  </ProtectedRoute>
                } 
              />
              <Route 
                path="/admin/courses" 
                element={
                  <ProtectedRoute allowedRoles={['admin']}>
                    <AdminCourses />
                  </ProtectedRoute>
                } 
              />
              <Route 
                path="/admin/notices" 
                element={
                  <ProtectedRoute allowedRoles={['admin']}>
                    <AdminNotices />
                  </ProtectedRoute>
                } 
              />
              <Route 
                path="/admin/activity" 
                element={
                  <ProtectedRoute allowedRoles={['admin']}>
                    <AdminActivity />
                  </ProtectedRoute>
                } 
              />
              
              {/* Exam Committee Routes */}
              <Route 
                path="/committee/dashboard" 
                element={
                  <ProtectedRoute allowedRoles={['examCommittee']}>
                    <CommitteeDashboard />
                  </ProtectedRoute>
                } 
              />
              <Route 
                path="/committee/exams" 
                element={
                  <ProtectedRoute allowedRoles={['examCommittee']}>
                    <CommitteeExams />
                  </ProtectedRoute>
                } 
              />
              
              {/* Discussion Moderator Routes */}
              <Route 
                path="/moderator/dashboard" 
                element={
                  <ProtectedRoute allowedRoles={['discussionModerator']}>
                    <ModeratorDashboard />
                  </ProtectedRoute>
                } 
              />
              <Route 
                path="/moderator/discussions" 
                element={
                  <ProtectedRoute allowedRoles={['discussionModerator']}>
                    <ModeratorDiscussions />
                  </ProtectedRoute>
                } 
              />
              
              {/* Fallback Route */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </AuthProvider>
        </BrowserRouter>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
