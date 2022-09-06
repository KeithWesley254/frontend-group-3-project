import { Box, Button, FormControl, FormHelperText, Input, InputLabel, LinearProgress, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { Container } from '@mui/system';

const SpecificCourse = () => {
    const { id } = useParams();
    const [specificCourse, setSpecificCourse] = useState();
    const [formData, setFormData] = useState({
        course_name: '',
        course_period: '',
        total_units: '',
        fees_amount: '',
    })

    useEffect(() => {
        fetch(`https://group-3-backend-app.herokuapp.com/courses/${id}`)
        .then(r => r.json())
        .then(data => setSpecificCourse(data))
    }, [])

    

    function handleChange(e){
        setFormData({
            ...formData, [e.target.name]: e.target.value,
        });
    } 

    if (!specificCourse) return <LinearProgress style={{backgroundColor: "gold"}} />;

    const all_students = specificCourse.students.map((student) => student.name)
    console.log(all_students)
    
    function handleSubmit(e){
        e.preventDefault();
        fetch(`https://group-3-backend-app.herokuapp.com/courses/${id}`,{
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(formData)
        })
        .then(r => r.json())
        .then(data => {
            setSpecificCourse(data)
        })

        setFormData({
            course_name: '',
            course_period: '',
            total_units: '',
            fees_amount: '',
        })
    }

  return (
    <div>
        <Container className='formContainer'>
    <div 
    style={{ fontSize: "20px", fontWeight: "bold" }}
    >
        Edit Course Form
    </div>
    <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
    <div>
        <FormControl sx={{ m: 1, width: '35ch' }}>
            <InputLabel>Course Name</InputLabel>
            <Input name="course_name" value={formData.course_name} onChange={handleChange}/>
            <FormHelperText>Enter Course Name</FormHelperText>
        </FormControl>
      </div>
      <div>
      <FormControl sx={{ m: 1, width: '35ch' }}>
        <InputLabel>Course Period</InputLabel>
        <Input name="course_period" value={formData.course_period} onChange={handleChange}/>
        <FormHelperText>Enter Full Course Length</FormHelperText>
        </FormControl>
      </div>
      <div>
        <FormControl sx={{ m: 1, width: '35ch' }}>
            <InputLabel>Total Units</InputLabel>
            <Input name="total_units" value={formData.total_units} onChange={handleChange}/>
            <FormHelperText>Enter Total Number of Units</FormHelperText>
        </FormControl>
      </div>
      <div>
        <FormControl sx={{ m: 1, width: '35ch' }}>
            <InputLabel>Fees Amount</InputLabel>
            <Input name="fees_amount" value={formData.fees_amount} onChange={handleChange}/>
            <FormHelperText>Enter Total Fees</FormHelperText>
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

    <div className='teachDetails'>
                <div className="teach1">
                    <span style={{ display: "flex" }}>
                        <Typography variant="h5" className="teach2" style={{fontWeight: 'bold'}}>
                            Course_Name:
                        </Typography>
                        &nbsp; &nbsp;
                        <Typography variant="h5">
                            {specificCourse.course_name}
                        </Typography>
                    </span>
                    <br />
                    <span style={{ display: "flex" }}>
                        <Typography variant="h5" className="teach2" style={{fontWeight: 'bold'}}>
                            Course_Period:
                        </Typography>
                        &nbsp; &nbsp;
                        <Typography variant="h5">
                            {specificCourse.course_period}
                        </Typography>
                    </span>
                    <br />
                    <span style={{ display: "flex" }}>
                        <Typography variant="h5" className="teach3" style={{fontWeight: 'bold'}}>
                            Total Units:
                        </Typography>
                        &nbsp; &nbsp;
                        <Typography variant="h5">
                            {specificCourse.total_units}
                        </Typography>
                    </span>
                    <br />
                    <span style={{ display: "flex" }}>
                        <Typography variant="h5" className="teach4" style={{fontWeight: 'bold'}}>
                            Fees Amount:
                        </Typography>
                        &nbsp; &nbsp;
                        <Typography variant="h5">
                            {specificCourse.fees_amount}
                        </Typography>
                    </span>
                    <br />
                    <span style={{ display: "flex" }}>
                        <Typography variant="h5" className="teach4" style={{fontWeight: 'bold'}}>
                            Students in the Cohort:
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

export default SpecificCourse