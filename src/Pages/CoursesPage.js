import { useEffect, useState, React } from 'react';
import { Table, TableCell, TableRow, TableHead, TableBody, Button } from "@mui/material";
import CourseForm from '../Components/CourseForm';
import CourseDetails from '../Components/CourseDetails';

//we neeed to fetch all the courses and display them here.
//We need to add, delete or edit course details

const CoursesPage = () => {
  const [allCourses, setAllCourses] = useState([])

  useEffect(() => {
    fetch('https://group-3-backend-app.herokuapp.com/courses')
    .then(r => r.json())
    .then(data => setAllCourses(data))
  }, []);

  // console.log(allCourses)

  function handlePosting(data){
    setAllCourses([...allCourses, data])
  }

  function deleteCourse(id){
    fetch(`https://group-3-backend-app.herokuapp.com/courses/${id}`,{
        method: "DELETE",
    })
    .then(r => r.json())
    .then(() => {
        const goThru = allCourses.filter((course) => course.id !== id)
            setAllCourses(goThru)
        })
    }

    function handleUpdateCourse(updateCourse) {
      const updatedCourse = allCourses.map((course) => {
        if (course.id === updatedCourse.id) {
          return updatedCourse;
        } else {
          return course;
        }
      });
      setAllCourses(updatedCourse);
    }

  return (
    <div>
      <CourseForm handlePosting={handlePosting}/>
      <CourseDetails allCourses ={allCourses} deleteCourse={deleteCourse}/>
    </div>
  )
}

export default CoursesPage
