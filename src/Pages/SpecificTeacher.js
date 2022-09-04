import { LinearProgress, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const SpecificTeacher = () => {
    const { id } = useParams();
    const [teacherDetails, setTeacherDetails] = useState();

    useEffect(() => {
        fetch(`https://group-3-backend-app.herokuapp.com/teachers/${id}`)
        .then(r => r.json())
        .then(data => setTeacherDetails(data))
    }, [])

    console.log(teacherDetails)

    if (!teacherDetails) return <LinearProgress style={{backgroundColor: "gold"}} />;
    
    return (
        <div>
            <div>
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
                    <span style={{ display: "flex" }}>
                        <Typography variant="h5" className="teach4" style={{fontWeight: 'bold'}}>
                            Salary:
                        </Typography>
                        &nbsp; &nbsp;
                        <Typography variant="h5">
                            {teacherDetails.salary}
                        </Typography>
                    </span>
                </div>
            </div>
        </div>
    )
}

export default SpecificTeacher