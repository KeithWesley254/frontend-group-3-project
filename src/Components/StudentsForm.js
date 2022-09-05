import { Box,Button,FormControl,FormHelperText,Input,InputLabel} from "@mui/material";
import React, { useState } from "react";
import { Container } from "@mui/system";

const StudentForm = ({ handlePosting }) => {
  const [formData, setFormData] = useState({
    name: "",
    course_id: "",
    teacher_id: "",
  });

  function handleSubmit(e) {
    e.preventDefault();
    fetch(`https://group-3-backend-app.herokuapp.com/students`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((r) => r.json())
      .then((data) => {
        handlePosting(data);
      });

    setFormData({
      name: "",
      course_id: "",
      teacher_id: "",
    });
  }

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

  return (
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
              <FormHelperText>Please Enter Full Name</FormHelperText>
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
                name="Teacher_ID"
                value={formData.street_address}
                onChange={handleChange}
              />
              <FormHelperText>Add Teacher_ID</FormHelperText>
            </FormControl>
          </div>
        </Box>
        <div>
          <FormControl
            sx={{ display: "flex", flexWrap: "wrap", m: 1, width: "10ch" }}
          >
            <Button variant="outlined" type="submit" onClick={handleSubmit}>
              SUBMIT
            </Button>
          </FormControl>
        </div>
      </Container>
    </div>
  );
};

export default StudentForm;
