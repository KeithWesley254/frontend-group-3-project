import { LinearProgress } from '@mui/material'
import React, { useEffect, useState } from 'react'

//set a nice landing page. This is the first thing people will see
//should contain login in section

const HomePage = () => {

  return (
    <div className='mx-[4%] text-gray-700 font-poppins'>
      <div className='hero-image w-full bg-center bg-cover bg-no-repeat h-96 -mt-[32px]'>
        <div className='flex items-center justify-center w-1/2 h-96'>
          <div className='flex flex-col justify-center'>
            <div className='mb-6 font-extralight text-2xl font-poppins'>
              <p>Engaging all students in partnership with family and community to become informed, compassionate and global citizens.</p>
            </div>
            <div className='flex space-x-4'>
              <button className='rounded-full px-6 py-1.5 bg-gradient-to-r from-yellow-600 to-yellow-500 text-white'>Sign Up</button>
              <button className='border-2 border-yellow-600 rounded-full px-6 py-1.5'>Learn more</button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Courses */}
      <div className='mt-12'>
        <h2 className='font-averia text-3xl font-light'>Courses</h2>
        <div className='w-full flex justify-center space-x-10'>
          <div className="w-full sm:w-1/2 md:w-1/2 xl:w-1/4 p-4">
              <div className="block bg-white shadow-md hover:shadow-xl rounded-lg overflow-hidden h-80">
                  <div className="relative pb-48 overflow-hidden">
                      <img src="images/courses.jpg" alt="" className="absolute inset-0 h-52 w-full object-contain" />
                  </div>
                  <div className="p-4 uppercase">
                      <h2 className="mt-2 mb-2 text-base font-semibold text-bethel-blue hover:text-blue-400"><a href="/posts/bethel-kibera-education-program">Area of Effect Damage</a></h2>
                  </div>
                  <hr/>
                  <div className='flex items-center justify-between p-4 text-xs'>
                    <span className='text-yellow-700'>AOE does blast damage</span>
                  </div>
              </div>
          </div>
          <div className="w-full sm:w-1/2 md:w-1/2 xl:w-1/4 p-4">
              <div className="block bg-white shadow-md hover:shadow-xl rounded-lg overflow-hidden h-80">
                  <div className="relative pb-48 overflow-hidden">
                      <img src="images/courses.jpg" alt="" className="absolute inset-0 h-52 w-full object-contain" />
                  </div>
                  <div className="p-4 uppercase">
                      <h2 className="mt-2 mb-2 text-base font-semibold text-bethel-blue hover:text-blue-400"><a href="/posts/bethel-kibera-education-program">Burst Damage</a></h2>
                  </div>
                  <hr/>
                  <div className='flex items-center justify-between p-4 text-xs'>
                    <span className='text-yellow-700'>Burst dmg kills rapidly</span>
                  </div>
              </div>
          </div>
          <div className="w-full sm:w-1/2 md:w-1/2 xl:w-1/4 p-4">
              <div className="block bg-white shadow-md hover:shadow-xl rounded-lg overflow-hidden h-80">
                  <div className="relative pb-48 overflow-hidden">
                      <img src="images/courses.jpg" alt="" className="absolute inset-0 h-52 w-full object-contain" />
                  </div>
                  <div className="p-4 uppercase">
                      <h2 className="mt-2 mb-2 text-base font-semibold text-bethel-blue hover:text-blue-400"><a href="/posts/bethel-kibera-education-program">Single Target Damage</a></h2>
                  </div>
                  <hr/>
                  <div className='flex items-center justify-between p-4 text-xs'>
                    <span className='text-yellow-700'>Single Target penetrates</span>
                  </div>
              </div>
          </div>
          <div className="w-full sm:w-1/2 md:w-1/2 xl:w-1/4 p-4">
              <div className="block bg-white shadow-md hover:shadow-xl rounded-lg overflow-hidden h-80">
                  <div className="relative pb-48 overflow-hidden">
                      <img src="images/courses.jpg" alt="" className="absolute inset-0 h-52 w-full object-contain" />
                  </div>
                  <div className="p-4 uppercase">
                      <h2 className="mt-2 mb-2 text-base font-semibold text-bethel-blue hover:text-blue-400"><a href="/posts/bethel-kibera-education-program">Core Training</a></h2>
                  </div>
                  <hr/>
                  <div className='flex items-center justify-between p-4 text-xs'>
                    <span className='text-yellow-700'>Core training is mandatory</span>
                  </div>
              </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomePage