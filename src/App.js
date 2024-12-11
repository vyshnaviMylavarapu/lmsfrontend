import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';

// Import components
import Signup from './components/signup';
import Home from './components/home';
import Signin from './components/signin';
import UserNavbar from './components/usernavbar';
import AdminNavbar from './components/adminnavbar';
import Professor from './components/professor';
import Student from './components/student';
import AddStu from './components/addstu';
import Viewstu from './components/viewstu';
import AddPro from './components/addpro';
import Viewpro from './components/viewpro';
import AboutUs from './components/aboutus';
import ContactUs from './components/contacts';
import Courses from './components/courses';
import Home1 from './components/home1';
import Exams from './components/exams';
import AddExams from './components/addexam';
import Delstu from './components/delstu';
import Editstu from './components/editstu';
import DeleteExam from './components/delexam';
import EditExam from './components/editexam';
import ViewExam from './components/viewexam';
import Register from './components/register';
import StudentCourse from './components/studentcourse';
import SetCourseToStudent from './components/setcoursestudent';
import AddCourse from './components/addcourse';
import DeleteCourse from './components/delcourse';
import ViewCourses from './components/viewcourses';
import EditCourse from './components/editcourse';
import ViewStudentCourses from './components/viewstudentcourses';
import StudentExamsu from './components/studentexams';
import Deletepro from './components/delpro';
import Editpro from './components/editpro';
import ProfessorNavbar from './components/professornavbar';
import Assignment from './components/assignment';
import FacultyAssignment from './components/facultyassignment';
import SubmitAssignment from './components/submit';
import FacultyAssignmentsubmission from './components/facultyviewsubmissions';
import ProfessorHome from './components/professorhome';
import Profexams from './components/profexams';
function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {/* Define the Home route, which will render first */}
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/usernav" element={<UserNavbar />} />
          <Route path="/adminnav" element={<AdminNavbar />} />
          <Route path="/professornavbar" element={<ProfessorNavbar/>} />
          <Route path="/admin/professor" element={<><AdminNavbar /><Professor /></>} />
          <Route path="/admin/student" element={<><AdminNavbar /><Student /></>} />
          <Route path="/admin/student/add" element={<><AdminNavbar /><AddStu /></>} />
          <Route path="/admin/student/view" element={<><AdminNavbar /><Viewstu /></>} />
          <Route path="/admin/professor/add" element={<><AdminNavbar /><AddPro /></>} />
          <Route path="/admin/professor/delete" element={<><AdminNavbar /><Deletepro /></>} />
          <Route path="/admin/professor/edit" element={<><AdminNavbar /><Editpro /></>} />
          <Route path="/admin/professor/view" element={<><AdminNavbar /><Viewpro /></>} />
          <Route path="/user/aboutus" element={<><UserNavbar /><AboutUs /></>} />
          <Route path="/user/contactus" element={<><UserNavbar /><ContactUs /></>} />
          <Route path="/user/courses" element={<><UserNavbar /><Courses /></>} />
          <Route path="/user/home1" element={<><UserNavbar /><Home1 /></>} />
          <Route path="/admin/exams" element={<><AdminNavbar /><Exams /></>} />
          <Route path="/admin/exams/add" element={<><AdminNavbar /><AddExams /></>} />
          <Route path="/professor/exams/add" element={<><ProfessorNavbar /><AddExams /></>} />
          <Route path="/admin/student/delete" element={<><AdminNavbar /><Delstu /></>} />
          <Route path="/admin/student/edit" element={<><AdminNavbar /><Editstu /></>} />
          <Route path="/admin/exams/delete" element={<><AdminNavbar /><DeleteExam /></>} />
          <Route path="/admin/exams/edit" element={<><AdminNavbar /><EditExam /></>} />
          <Route path="/admin/exams/view" element={<><AdminNavbar /><ViewExam /></>} />

          <Route path="/professor/exams/delete" element={<><ProfessorNavbar /><DeleteExam /></>} />
          <Route path="/professor/exams/edit" element={<><ProfessorNavbar /><EditExam /></>} />
          <Route path="/professor/exams/view" element={<><ProfessorNavbar /><ViewExam /></>} />

          <Route path="/user/register" element={<><UserNavbar /><Register /></>} />
          <Route path="/admin/studentcourse" element={<><AdminNavbar /><StudentCourse/></>} />    
          <Route path="/admin/studentcourse/setcoursestudent" element={<><AdminNavbar /><SetCourseToStudent/></>} />
          <Route path="/admin/courses/add" element={<><AdminNavbar /><AddCourse /></>} />
          <Route path="/admin/courses/delete" element={<><AdminNavbar /><DeleteCourse /></>} />
          <Route path="/admin/courses/view" element={<><AdminNavbar /><ViewCourses /></>} />
          <Route path="/admin/courses/edit" element={<><AdminNavbar /><EditCourse /></>} />
          <Route path="/admin/courses" element={<><AdminNavbar /><Courses /></>} />
          <Route path="/user/getcourses/" element={<><UserNavbar /><ViewStudentCourses /></>} />
          <Route path="/user/studentexam" element={<><UserNavbar /><StudentExamsu /></>} />
          <Route path="/user/assignment" element={<><UserNavbar /><Assignment/></>} />
          <Route path="/professor/assignments" element={<><ProfessorNavbar /><FacultyAssignment/></>} />
          <Route path="/professor/viewassignments" element={<><ProfessorNavbar /><FacultyAssignmentsubmission/></>} />
          <Route path="/user/assignments/submit" element={<><UserNavbar /><SubmitAssignment/></>} />
          <Route path="/professor/home" element={<><ProfessorNavbar /><ProfessorHome/></>} />
          <Route path="/professor/getcourses/" element={<><ProfessorNavbar /><ViewStudentCourses/></>} />
          <Route path="/professor/exams/" element={<><ProfessorNavbar />< Profexams /></>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
