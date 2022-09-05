import {LinearProgress,Typography,Box, Button,FormControl,FormHelperText,Input,InputLabel} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Container } from "@mui/system";
import StudentsDetails from "../Components/StudentsDetails";

const SpecificStudent = () => {
  const { id } = useParams();
  const [studentDetails, setStudentDetails] = useState();
  const [formData, setFormData] = useState({
    name: "",
    course_id: "",
    teacher_id: "",
  });

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

  useEffect(() => {
    fetch(`https://group-3-backend-app.herokuapp.com/students/${id}`)
      .then((r) => r.json())
      .then((data) => setStudentDetails(data));
  }, []);

  console.log(teacherDetails);

  function handleUpdateTeach() {
    fetch(`https://group-3-backend-app.herokuapp.com/students/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: formData.name,
        course_id: formData.course_id,
        teacher_id: formData.teacher_id,
      }),
    })
      .then((r) => r.json())
      .then((updatedItem) => {
        setStudentDetails(updatedItem);
        setFormData({
          name: "",
          course_id: "",
          teacher_id: "",
        });
        console.log(updatedItem);
      });
  }

  if (!studentDetails)
    return <LinearProgress style={{ backgroundColor: "gold" }} />;

  //all  teachers a teacher has
  const all_teachers = studentDetails.teacher.map((teacher) => teacher.name);
  console.log(all_teachers);

  return (
    <div>
      <div>
        <Container className="formContainer">
          <div style={{ fontSize: "20px", fontWeight: "bold" }}>
            Add Student Form
          </div>
          <Box sx={{ display: "flex", flexWrap: "wrap" }}>
            <div>
              <FormControl sx={{ m: 1, width: "35ch" }}>
                <InputLabel>Full Name</InputLabel>
                <Input
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                />
                <FormHelperText>Please Enter Full</FormHelperText>
              </FormControl>
            </div>
            <div>
              <FormControl sx={{ m: 1, width: "35ch" }}>
                <InputLabel>Course_ID</InputLabel>
                <Input
                  name="course_id"
                  value={formData.specialisation}
                  onChange={handleChange}
                />
                <FormHelperText>Course_ID</FormHelperText>
              </FormControl>
            </div>
            <div>
              <FormControl sx={{ m: 1, width: "35ch" }}>
                <InputLabel>Teacher_ID</InputLabel>
                <Input
                  name="teacher_id"
                  value={formData.street_address}
                  onChange={handleChange}
                />
                <FormHelperText>Add Teacher_id</FormHelperText>
              </FormControl>
            </div>
          </Box>
          <div>
            <FormControl
              sx={{ display: "flex", flexWrap: "wrap", m: 1, width: "10ch" }}
            >
              <Button
                variant="outlined"
                type="submit"
                onClick={handleUpdateTeach}
              >
                EDIT
              </Button>
            </FormControl>
          </div>
        </Container>
      </div>
      <div className="teachDetails">
        <Typography variant="h3" className="coinHeader">
          {studentDetails.name}
        </Typography>
        &nbsp;
        <div className="teach1">
          <span style={{ display: "flex" }}>
            <Typography
              variant="h5"
              className="teach2"
              style={{ fontWeight: "bold" }}
            >
              Course_ID:
            </Typography>
            &nbsp; &nbsp;
            <Typography variant="h5">
              {studentDetails.course_id}
            </Typography>
          </span>
          <br />
          <span style={{ display: "flex" }}>
            <Typography
              variant="h5"
              className="teach3"
              style={{ fontWeight: "bold" }}
            >
              Teacher_ID:
            </Typography>
            &nbsp; &nbsp;
            <Typography variant="h5">
              {studentDetails.teacher_id}
            </Typography>
          </span>
          <br />
          <span style={{ display: "flex" }}>
            <Typography
              variant="h5"
              className="teach4"
              style={{ fontWeight: "bold" }}
            >
              Teachers:
            </Typography>
            &nbsp; &nbsp;
            <Typography variant="h5">
              {all_teachers.map((teacher) => (
                <li>{teacher}</li>
              ))}
            </Typography>
          </span>
        </div>
      </div>
    </div>
  );
};

export default SpecificStudent;
