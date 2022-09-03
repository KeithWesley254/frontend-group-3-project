import React from 'react'
import { NavLink } from 'react-router-dom';

//navbar from tailwind goes in here

const Header = () => {
  return (
    <div>
      <div className='flex justify-between p-8 fixed w-full text-gray-600 bg-blue-300'>
        <div className='text-3xl font-large'>
            <NavLink to="/logo">School Management System</NavLink>
        </div>
        <div className='text-xl'>
            <NavLink to="/" exact className='mr-10 hover:text-white'>Home</NavLink>
            <NavLink to="/courses" exact className='mr-10 hover:text-white'>Courses</NavLink>
            <NavLink to="/students" exact className='mr-10 hover:text-white'>Students</NavLink>
            <NavLink to="/teachers" exact className='mr-10 hover:text-white'>Teachers</NavLink>
            <NavLink to="/about" exact className='mr-10 hover:text-white'>About</NavLink>
            <button className='border-2 bg-white rounded-md hover:bg-white px-8 py-2'>Enroll</button>
        </div>
      </div>
    </div>
  )
}

export default Header