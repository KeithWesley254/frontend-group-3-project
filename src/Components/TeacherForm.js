import { Box, Button, FormControl, FormHelperText, Input, InputLabel } from '@mui/material';
import React, { useState } from 'react'
import { Container } from '@mui/system';

const TeacherForm = ({handlePosting}) => {
    const [formData, setFormData] = useState({
        name: '',
        street_address: '',
        specialisation: '',
        salary: '',
    })

    function handleSubmit(e){
        e.preventDefault();
        fetch(`https://group-3-backend-app.herokuapp.com/teachers`,{
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(formData)
        })
        .then(r => r.json())
        .then(data => {
            handlePosting(data)
        })

        setFormData({
            name: '',
            street_address: '',
            specialisation: '',
            salary: '',
        })
    }

    function handleChange(e){
        setFormData({
            ...formData, [e.target.name]: e.target.value,
        });
    }  

  return (
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
            <Button variant='outlined' type='submit' onClick={handleSubmit}>
                SUBMIT
            </Button>
        </FormControl>
      </div>
    </Container>
    </div>
  )
}

export default TeacherForm;