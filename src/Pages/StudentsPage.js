import { useEffect,useState,React } from 'react';
//We need all students to be displayed here
//We need to edit students details, add, or delete

const StudentsPage = () => {
  const [data, setData] = useState([]);

  //custom hook
  // function useFectchStudents()
  
    //CRUD
    const getData = () => {
      fetch("http://localhost:3004/students")
        .then((res) => res.json())
        .then((data) => setData(data));
    };
    useEffect(() => {
      getData()
    }, []);
  
  
   function handleClick() {
     getData();
   }

  return (
    <div>
      <h1>StudentsPage</h1>
      <button onClick={handleClick}>Add Student</button>
      
    </div>
  );
}

export default StudentsPage