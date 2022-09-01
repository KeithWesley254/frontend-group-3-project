import { useEffect,useState,React } from 'react';
//We need all students to be displayed here
//We need to edit students details, add, or delete

const StudentsPage = () => {
  const [data, setData] = useState([]);

  //custom hook
  function useFectchStudents() {
    
       useEffect(() => {
         fetch("http://localhost:3000/students")
           .then((res) => res.json())
           .then((data) => setData(data));
       }, []);
  }

  return (
    <div>StudentsPage</div>
  )
}

export default StudentsPage