import React from 'react'
import project from "../Assets/food.PNG"
import miniproject from "../Assets/miniproject.PNG"
import project from "../Assets/projects.PNG"

const Projects = () => {
  return (

    <>
    <div name="Projects" className=' bg-primary w-full sm:h-screen text-gray-300'>
        <div className=' max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div className=' pb-8'>
                <p className=' text-3xl font-bold inline border-b-4 border-pink-600'>My Projects</p>
                <p className='py-6'>Check out my some projects </p>

            </div>
            
            <div 
            className=' grid grid-cols-2 sm:grid-cols-3 gap-4'>
                <div style={{backgroundImage : `url(${project})`}}  className=' shadow-lg shadow-gray-800 group container rounded-md flex justify-center items-center mx-auto content-div'>
                    <div className=' opacity-0 group-hover:opacity-100'>
                        <span className=' text-2xl font-bold text-white tracking-wider'>
                          Html with Tailwind CSS
                        </span>
                        <div className=' pt-10 text-center'>
                            <a href="https://github.com/Noreen-Khoso/task.git" target='_blank'><button className=' text-center rounded-lg bg-white text-gray-700 font-bold text-lg'>code</button></a>
                            {/* <a href=""><button className='text-center rounded-lg bg-white text-gray-700 font-bold text-lg'></button></a> */}
                        </div>
                    </div>

                </div>

                <div style={{backgroundImage : `url(${miniproject})`}}  className=' shadow-lg shadow-gray-800 group container rounded-md flex justify-center items-center mx-auto content-div'>
                    <div className=' opacity-0 group-hover:opacity-100'>
                        <span className=' text-2xl font-bold text-white tracking-wider'>
                          HTML CSS & JavaScript
                        </span>
                        <div className=' pt-10 text-center'>
                            <a href="https://github.com/Noreen-Khoso/Mini-Project.git" target='_blank'><button className=' text-center rounded-lg bg-white text-gray-700 font-bold text-lg'>code</button></a>
                            {/* <a href=""><button className='text-center rounded-lg bg-white text-gray-700 font-bold text-lg'></button></a> */}
                        </div>
                    </div>
                    </div>

                    <div style={{backgroundImage : `url(${project})`}}  className=' shadow-lg shadow-gray-800 group container rounded-md flex justify-center items-center mx-auto content-div'>
                    <div className=' opacity-0 group-hover:opacity-100'>
                        <span className=' text-2xl font-bold text-white tracking-wider'>
                          React Js With Tailwind CSS
                        </span>
                        <div className=' pt-10 text-center'>
                            <a href="https://github.com/Noreen-Khoso/Mini-Project.git" target='_blank'><button className=' text-center rounded-lg bg-white text-gray-700 font-bold text-lg'>code</button></a>
                            {/* <a href=""><button className='text-center rounded-lg bg-white text-gray-700 font-bold text-lg'></button></a> */}
                        </div>
                        </div>
                    

                </div>
            </div>
            
        </div>
    
    
    
    
    
    </div>
    </>
  )
}

export default Projects