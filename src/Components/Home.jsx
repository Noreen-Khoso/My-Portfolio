import React from 'react'
import Button from "../Components/Button"

const Home = () => {
  return (
    <>
    <div name = "Home" className=' bg-primary h-screen w-full md:px-20'>
      {/* Container */}
      <div className='max-w-[1000px] px-8 mx-auto flex  flex-col justify-center h-full'>
        <p className=' text-pink-600 text-2xl'>Hi, I'm</p>
        <h1 className=' text-3xl sm:text-5xl text-slate-400 font-bold'>Noreen Khoso</h1>
        <h3 className=' text-3xl sm:text-5xl font-bold text-slate-600'>I'm a MERN Stack Developer</h3>
        <p className=' text-slate-400 py-4 max-w-[700px]'>"I'm fluent in the MERN stack, combining React JS for interactive interfaces, Tailwind CSS for utility-first styling, 
        Express JS for efficient server-side logic,and MongoDB for flexible data management." </p>
       <div>
          
        <a href="../Assets/Minimalist Modern Professional CV Resume.pdf" download ><Button text="My Resume"/></a>
       </div>
        

      </div>

    </div>
    </>
  )
}

export default Home;