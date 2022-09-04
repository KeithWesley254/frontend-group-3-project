import React, { useEffect, useState } from 'react'
import TeacherForm from '../Components/TeacherForm';
import TeachersDetails from '../Components/TeachersDetails';
//We need all teachers to be displayed here
//We need to edit teachers details, add, or delete

const TeachersPage = () => {
  const [allTeachers, setAllTeachers] = useState([])

  useEffect(() => {
    fetch('https://group-3-backend-app.herokuapp.com/teachers')
    .then(r => r.json())
    .then(data => setAllTeachers(data))
  }, []);

  // console.log(allTeachers)

  function handlePosting(data){
    setAllTeachers([...allTeachers, data])
  }

  function deleteTeacher(id){
    fetch(`https://group-3-backend-app.herokuapp.com/teachers/${id}`,{
        method: "DELETE",
    })
    .then(r => r.json())
    .then(() => {
        const goThru = allTeachers.filter((teacher) => teacher.id !== id)
            setAllTeachers(goThru)
        })
    }

    function handleUpdateTeach(updatedTeacher) {
      const updatedTeach = allTeachers.map((teacher) => {
        if (teacher.id === updatedTeacher.id) {
          return updatedTeacher;
        } else {
          return teacher;
        }
      });
      setAllTeachers(updatedTeach);
    }

  return (
    <div>
      <TeacherForm handlePosting={handlePosting} onUpdateTeach={handleUpdateTeach}/>
      <TeachersDetails allTeachers = {allTeachers} deleteTeacher={deleteTeacher}/>
    </div>
  )
}

export default TeachersPage