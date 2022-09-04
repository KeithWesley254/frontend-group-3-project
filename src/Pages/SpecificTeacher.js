import { LinearProgress, Typography, Box, Button, FormControl, FormHelperText, Input, InputLabel } from '@mui/material';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Container } from '@mui/system';
import TeachersDetails from '../Components/TeachersDetails';

const SpecificTeacher = () => {
    const { id } = useParams();
    const [teacherDetails, setTeacherDetails] = useState();
    const [formData, setFormData] = useState({
        name: '',
        street_address: '',
        specialisation: '',
        salary: '',
    })


    function handleChange(e){
        setFormData({
            ...formData, [e.target.name]: e.target.value,
        });
    }

    useEffect(() => {
        fetch(`https://group-3-backend-app.herokuapp.com/teachers/${id}`)
        .then(r => r.json())
        .then(data => setTeacherDetails(data))
    }, [])

    console.log(teacherDetails)

    function handleUpdateTeach() {
        fetch(`https://group-3-backend-app.herokuapp.com/teachers/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
            name: formData.name,
            street_address: formData.street_address,
            specialisation: formData.specialisation,
            salary: formData.salary,
        }),
      })
        .then((r) => r.json())
        .then((updatedItem) => {
          setTeacherDetails(updatedItem)
          setFormData({
            name: '',
            street_address: '',
            specialisation: '',
            salary: '',
        })
          console.log(updatedItem)
        });
      }

    if (!teacherDetails) return <LinearProgress style={{backgroundColor: "gold"}} />;

    //all students a teacher has
    const all_students = teacherDetails.students.map((student) => student.name)
      console.log(all_students)
      
    return (
        <div>
            <div>
            <Container className='formContainer'>
        <div 
        style={{ fontSize: "20px", fontWeight: "bold" }}
        >
            Add Teacher Form
        </div>
        <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
        <div>
            <FormControl sx={{ m: 1, width: '35ch' }}>
                <InputLabel>Full Name</InputLabel>
                <Input name="name" value={formData.name} onChange={handleChange}/>
                <FormHelperText>Please Enter Full Name</FormHelperText>
            </FormControl>
        </div>
        <div>
        <FormControl sx={{ m: 1, width: '35ch' }}>
            <InputLabel>Specialisation</InputLabel>
            <Input name="specialisation" value={formData.specialisation} onChange={handleChange}/>
            <FormHelperText>Lecturer's Specialisation</FormHelperText>
            </FormControl>
        </div>
        <div>
            <FormControl sx={{ m: 1, width: '35ch' }}>
                <InputLabel>Street_address</InputLabel>
                <Input name="street_address" value={formData.street_address} onChange={handleChange}/>
                <FormHelperText>Add Street_address</FormHelperText>
            </FormControl>
        </div>
        <div>
            <FormControl sx={{ m: 1, width: '35ch' }}>
                <InputLabel>Salary</InputLabel>
                <Input name="salary" value={formData.salary} onChange={handleChange}/>
                <FormHelperText>Add Lecturer's Salary</FormHelperText>
            </FormControl>
        </div>
        </Box>
        <div>
        <FormControl sx={{ display: "flex", flexWrap: "wrap", m: 1, width: '10ch' }}>
            <Button variant='outlined' type='submit' onClick={handleUpdateTeach}>
                EDIT
            </Button>
        </FormControl>
      </div>
    </Container>
    </div>
            <div className='teachDetails'>
            <Typography variant="h3" className="coinHeader">
                    {teacherDetails.name}
                </Typography>
                &nbsp;
                <div className="teach1">
                    <span style={{ display: "flex" }}>
                        <Typography variant="h5" className="teach2" style={{fontWeight: 'bold'}}>
                            Specialisation:
                        </Typography>
                        &nbsp; &nbsp;
                        <Typography variant="h5">
                            {teacherDetails.specialisation}
                        </Typography>
                    </span>
                    <br />
                    <span style={{ display: "flex" }}>
                        <Typography variant="h5" className="teach3" style={{fontWeight: 'bold'}}>
                            Street_address:
                        </Typography>
                        &nbsp; &nbsp;
                        <Typography variant="h5">
                            {teacherDetails.street_address}
                        </Typography>
                    </span>
                    <br />
                    <span style={{ display: "flex" }}>
                        <Typography variant="h5" className="teach4" style={{fontWeight: 'bold'}}>
                            Salary:
                        </Typography>
                        &nbsp; &nbsp;
                        <Typography variant="h5">
                            {teacherDetails.salary}
                        </Typography>
                    </span>
                    <br />
                    <span style={{ display: "flex" }}>
                        <Typography variant="h5" className="teach4" style={{fontWeight: 'bold'}}>
                            Students:
                        </Typography>
                        &nbsp; &nbsp;
                        <Typography variant="h5">
                            {all_students.map((student) => <li>{student}</li> )}
                        </Typography>
                    </span>
                </div>
            </div>
        </div>
    )
}

export default SpecificTeacher