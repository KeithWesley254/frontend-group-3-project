import { useEffect, useState, React } from 'react';
import { Table, TableCell, TableRow, TableHead, TableBody, Button } from "@mui/material";

//we neeed to fetch all the courses and display them here.
//We need to add, delete or edit course details

const CoursesPage = () => {
  const [data, setData] = useState([]);

  const url = ' https://group-3-backend-app.herokuapp.com/courses'


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
    const tableStyle = {
      width: "80%",
      margin: "20px 10%"
    }
  return (
    <div>
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
            <TableCell>{data.course_name}</TableCell>
            <TableCell>{data.course_period}</TableCell>
            <TableCell>{data.total_units}</TableCell>
            <TableCell>

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
    </div>
  )
}

export default CoursesPage
