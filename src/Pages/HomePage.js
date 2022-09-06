import React,{useEffect, useState} from 'react'

//set a nice landing page. This is the first thing people will see
//should contain login in section

const HomePage = () => {

  const [courses, setCourses] = useState([])
  
useEffect( () => {
  fetch("https://group-3-backend-app.herokuapp.com/courses")
  .then(res => res.json())
  .then(rosemary => setCourses(rosemary))
},[])


  return (
    <div className='text-gray-700 font-poppins'>
      <div className='hero-image w-full bg-center bg-cover bg-no-repeat h-96 -mt-[32px]'>
        <div className='mx-[4%] flex items-center justify-center w-1/2 h-96'>
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
      <div className='mx-[4%] mt-12'>
        <h2 className='font-averia text-3xl font-light'>Courses</h2>
          <div className='w-full flex flex-wrap justify-between'>
            {courses.map((course) => {
              return (
                <div className="w-full sm:w-1/2 md:w-1/2 xl:w-1/4 p-4">
                  <div className="block bg-white shadow-md hover:shadow-xl rounded-lg overflow-hidden h-96">
                    <div className="relative pb-48 overflow-hidden">
                        <img src="images/courses.jpg" alt="" className="absolute inset-0 h-52 w-full object-contain" />
                    </div>
                    <div className="p-4 uppercase">
                        <h2 className="mt-2 mb-2 text-base font-semibold text-bethel-blue hover:text-blue-400">{course.course_name}</h2>
                    </div>
                    <hr/>
                    <div className='flex items-center justify-between p-4 text-xs'>
                      <span>{course.course_period}  weeks</span>
                    </div>
                  </div>
                </div>
              )
            })}
        </div>
      </div>

      <footer className="px-4 lg:px-0 text-center lg:flex justify-center mt-20">
              <p>Made with <span className="text-red-500">&hearts;</span> by Group 3, Moringa school students, 2022.</p>
      </footer>


      </div>
  )
}

export default HomePage
