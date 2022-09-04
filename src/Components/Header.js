import React from 'react'
import { NavLink } from 'react-router-dom';

//navbar from tailwind goes in here

const Header = () => {
  return (
    <div className='nav'>
      <div className='title1'> <h2>Dragonballs University Portal</h2></div>
      <div className='title2'>
            <NavLink to="/" exact="true" className='mr-10 hover:text-white'>Home</NavLink>
            <NavLink to="/courses" exact="true" className='mr-10 hover:text-white'>Courses</NavLink>
            <NavLink to="/students" exact="true" className='mr-10 hover:text-white'>Students</NavLink>
            <NavLink to="/teachers" exact="true" className='mr-10 hover:text-white'>Teachers</NavLink>
            <NavLink to="/about" exact="true" className='mr-10 hover:text-white'>About</NavLink>
            <button className='btn-nav'>Enroll</button>
            </div>




    </div>
  )
}

export default Header
