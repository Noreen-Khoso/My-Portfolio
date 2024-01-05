import React from 'react'
import html from "../Assets/html.png"
import css from "../Assets/CSS3_logo.svg.png"
import javascript from "../Assets/javascript.png"
import react from "../Assets/reactt.webp"
import node from "../Assets/node.png"
import mongodb from "../Assets/mongodb.png"
import tailwind from "../Assets/taill.png"
import github from "../Assets/github.png"

const Skills = () => {
    return (
        <>
            <div name='skills' className=' bg-primary text-gray-300 h-full w-screen py-10  md:px-20'>
                {/* Container */}
                <div className=' max-w-[1000px] mx-auto px-4 flex flex-col justify-center h-full w-full py-10 '>
                    <div>
                        <p className=' text-3xl inline border-b-4 border-pink-600'>My Skills</p>
                        <p className=' py-4'>These are the technologies I've Worked with</p>
                    </div>
                </div>
                <div className=' w-full grid grid-cols-2 sm:grid-cols-4 text-center px-8 gap-5'>
               

                <div className=' shadow-md shadow-gray-800 hover:scale-110 duration-200'>
                    <img src={html} alt='html icon' className=' w-20 mx-auto py-2'/>
                    <p className=' my-2'>HTML</p>

                </div>
                <div className=' shadow-md shadow-gray-800 hover:scale-110 duration-200'>
                    <img src={css} alt='html icon' className=' w-20 mx-auto py-2'/>
                    <p className=' my-2'>CSS</p>

                </div>
                <div className=' shadow-md shadow-gray-800 hover:scale-110 duration-200'>
                    <img src={javascript} alt='html icon' className=' w-20 mx-auto py-2'/>
                    <p className=' my-2'>JavaScript</p>

                </div>
                <div className=' shadow-md shadow-gray-800 hover:scale-110 duration-200'>
                    <img src={react} alt='html icon' className=' w-20 mx-auto py-2'/>
                    <p className=' my-2'>React Js</p>

                </div>
                <div className=' shadow-md shadow-gray-800 hover:scale-110 duration-200'>
                    <img src={tailwind} alt='html icon' className=' w-20 mx-auto py-2'/>
                    <p className=' my-2'>Tailwind CSS</p>

                </div>
                <div className=' shadow-md shadow-gray-800 hover:scale-110 duration-200'>
                    <img src={node} alt='html icon' className=' w-20 mx-auto py-2'/>
                    <p className=' my-2'>Node Js</p>

                </div>
                <div className=' shadow-md shadow-gray-800 hover:scale-110 duration-200'>
                    <img src={mongodb} alt='html icon' className=' w-20 mx-auto py-2'/>
                    <p className=' my-2'>MongoDB</p>

                </div>
                <div className=' shadow-md shadow-gray-800 hover:scale-110 duration-200'>
                    <img src={github} alt='html icon' className=' w-20 mx-auto py-2'/>
                    <p className=' my-2'>GitHub</p>

                </div>




                </div>

            </div>
        </>
    )
}

export default Skills