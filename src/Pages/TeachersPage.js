import React, { useEffect, useState } from 'react'
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

  return (
    <div>
      <TeachersDetails allTeachers = {allTeachers}/>
    </div>
  )
}

export default TeachersPage