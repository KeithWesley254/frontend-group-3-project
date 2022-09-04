import { useEffect, useState, React } from 'react';
import { Table, TableCell, TableRow, TableHead, TableBody, Button } from "@mui/material";

//We need all students to be displayed here
//We need to edit students details, add, or delete

const StudentsPage = () => {
  const [data, setData] = useState([]);

  const url = ' https://group-3-backend-app.herokuapp.com/students'

  //custom hook
  // function useFetchStudents()

    //CRUD-GET
    const getData = () => {
      fetch(url)
        .then((res) => res.json())
        .then((data) => {
          console.log(data)
          setData(data)
        });
    };
    useEffect(() => {
      getData()
    }, []);

  //DELETE

  const deleteData = () => {
    // Simple DELETE request with fetch
    fetch(` https://group-3-backend-app.herokuapp.com/students`, {
      method: 'DELETE'
    })
      .then(() => this.setState({ status: 'Delete successful' }));
  }

  //POST


  //Styling..
  const tableStyle = {
    width: "80%",
    margin: "20px 10%"
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
          <TableRow key={data.id}>
            <TableCell>{data.id}</TableCell>
            <TableCell>{data.name}</TableCell>
            <TableCell>{data.course_id}</TableCell>
            <TableCell>{data.teacher_id}</TableCell>
            <TableCell>
              <Button
                variant="contained"
                color="secondary"
                style={{ margin: "0px 20px" }}
                onClick={() => deleteData}
              >
                Edit
              </Button>
              <Button
                variant="contained"
                color="secondary"
                style={{ margin: "0px 20px" }}
                onClick={() => deleteData}
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
