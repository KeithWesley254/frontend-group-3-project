import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useNavigate } from 'react-router-dom';
import { Box, Button } from '@mui/material';

function CourseDetails({allCourses, deleteCourse}){
    
    const navigate = useNavigate();

    const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
    }));

    const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
        border: 0,
    },
    }));

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
          <StyledTableCell>Course_id</StyledTableCell>
            <StyledTableCell>Course_Name</StyledTableCell>
            <StyledTableCell align="right">Course_period</StyledTableCell>
            <StyledTableCell align="right">Total_units</StyledTableCell>
            <StyledTableCell align="right">Fees_amount</StyledTableCell>
            <StyledTableCell align="right">Edit_details</StyledTableCell>
            <StyledTableCell align="right">Excommunicado</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {allCourses.map((course) => (
            <StyledTableRow 
            key={course.id}
            onClick={() => navigate(`/courses/${course.id}`)}
            style={{cursor: "pointer"}}
            >
              <StyledTableCell align="left">{course.id}</StyledTableCell>
              <StyledTableCell component="th" scope="row">
                {course.course_name}
              </StyledTableCell>
              <StyledTableCell align="right">{course.course_period}</StyledTableCell>
              <StyledTableCell align="right">{course.total_units}</StyledTableCell>
              <StyledTableCell align="right">{course.fees_amount}</StyledTableCell>
              <StyledTableCell align="right">
              <Box
                m={1}
                display="flex"
                justifyContent="flex-end"
                alignItems="flex-end"
                onClick={() => navigate(`/courses/${course.id}`)}
              >
                <Button 
                variant="outlined" 
                
                >
                  EDIT
                </Button>
              </Box>
              </StyledTableCell>
              <StyledTableCell align="right">
              <Box
                m={1}
                display="flex"
                justifyContent="flex-end"
                alignItems="flex-end"
              >
                <Button 
                variant="contained" 
                color="error"
                onClick={() => {
                  deleteCourse(course.id);
                }}
                >
                  Delete
                </Button>
              </Box>
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default CourseDetails;