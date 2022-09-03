import { useEffect, useState, React } from 'react';
import { Table, TableCell, TableRow, TableHead, TableBody, Button } from "@mui/material";
import { purple } from '@mui/material/colors';
import { color } from '@mui/system';




//We need all students to be displayed here
//We need to edit students details, add, or delete

const StudentsPage = () => {
  const [data, setData] = useState([]);

  const url = ' http://localhost:3004/students'

  //custom hook
  // function useFectchStudents()
  
    //CRUD-GET 
    const getData = () => {
      fetch(url)
        .then((res) => res.json())
        .then((data) => setData(data));
    };
    useEffect(() => {
      getData()
    }, []);

  //DELETE
  
  const deleteData = () => {
    // Simple DELETE request with fetch
    fetch(url, {
      method: 'DELETE'
    })
      .then(() => this.setState({ status: 'Delete successful' }));
  }

  //POST


  //Styling..
  const tableStyle = {
    width: "80%",
    margin: "50px 100px 100px 140px",
  }
  

  return (
    <>
      <Table style={tableStyle}>
        <TableHead>
          <TableRow style={{ fontSize: "18px" }}>
            <TableCell>ID</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Course ID</TableCell>
            <TableCell>Teacher ID</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((data) => (
            <TableRow>
              <TableCell>{data.id}</TableCell>
              <TableCell>{data.name}</TableCell>
              <TableCell>{data.course_id}</TableCell>
              <TableCell>{data.teacher_id}</TableCell>
              <TableCell>
                <Button
                  variant="contained"
                  color="secondary"
                  style={{ margin: "0px 20px" }}
                  onClick={() => deleteData(data.id)}
                >
                  Delete
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      <Button
        variant="contained"
        color="secondary"
        style={{ margin: "0px 20px", marginLeft: 300, borderRadius: 25,width:250 }}
      >
        Enroll
      </Button>
    </>
  );
}

export default StudentsPage