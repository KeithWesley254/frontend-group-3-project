import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './Components/Header';
import HomePage from './Pages/HomePage';
import StudentsPage from './Pages/StudentsPage';
import TeachersPage from './Pages/TeachersPage';
import AboutPage from './Pages/AboutPage';
import CoursesPage from './Pages/CoursesPage';
import SpecificTeacher from './Pages/SpecificTeacher';
import SpecificCourse from './Pages/SpecificCourse';

function App() {
  return (
    <BrowserRouter>
    <div className="overallTop">
      <Header />
      <Routes>
        <Route exact='true' path='/' element={<HomePage />}/>
        <Route path='/teachers' element={<TeachersPage />}/>
        <Route path='/courses' element={<CoursesPage />}/>
        <Route path='/students' element={<StudentsPage />}/>
        <Route path='/about' element={<AboutPage />}/>
        <Route path='/teachers/:id' element={<SpecificTeacher />}/>
        <Route path='/courses/:id' element={<SpecificCourse />}/>
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
