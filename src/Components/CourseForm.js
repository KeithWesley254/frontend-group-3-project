import { Box, Button, FormControl, FormHelperText, Input, InputLabel } from '@mui/material';
import React, { useState } from 'react'
import { Container } from '@mui/system';

const CourseForm = ({handlePosting}) => {
    const [formData, setFormData] = useState({
        course_name: '',
        course_period: '',
        total_units: '',
        fees_amount: '',
    })

    function handleSubmit(e){
        e.preventDefault();
        fetch(`https://group-3-backend-app.herokuapp.com/courses`,{
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
            course_name: '',
            course_period: '',
            total_units: '',
            fees_amount: '',
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
        Course Form
    </div>
    <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
      <div>
        <FormControl sx={{ m: 1, width: '35ch' }}>
            <InputLabel>Course_name</InputLabel>
            <Input name="course_name" value={formData.course_name} onChange={handleChange}/>
            <FormHelperText>Please Enter Course name</FormHelperText>
        </FormControl>
      </div>
      <div>
      <FormControl sx={{ m: 1, width: '35ch' }}>
        <InputLabel>Course_period</InputLabel>
        <Input name="course_period" value={formData.course_period} onChange={handleChange}/>
        <FormHelperText>Enter Course Period</FormHelperText>
        </FormControl>
      </div>
      <div>
        <FormControl sx={{ m: 1, width: '35ch' }}>
            <InputLabel>Total_units</InputLabel>
            <Input name="total_units" value={formData.total_units} onChange={handleChange}/>
            <FormHelperText>Enter Total Units</FormHelperText>
        </FormControl>
      </div>
      <div>
        <FormControl sx={{ m: 1, width: '35ch' }}>
            <InputLabel>Fees Amount</InputLabel>
            <Input name="fees_amount" value={formData.fees_amount} onChange={handleChange}/>
            <FormHelperText>Enter Fees Amount</FormHelperText>
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

export default CourseForm;