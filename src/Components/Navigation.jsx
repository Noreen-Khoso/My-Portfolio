import React, { useState } from 'react'
import { FaBars, FaFacebook, FaGithub, FaLinkedin, FaTimes } from "react-icons/fa";
import { SiFreelancer } from "react-icons/si";
import { BiLogoGmail } from "react-icons/bi";
import {Link} from "react-scroll"


const Navigation = () => {
    const [Nav, setNav] = useState(false)
    const handlemenu = () => {
        setNav(!Nav)
    }

    return (

        <>
            <div className='fixed flex justify-between py-3 w-screen  items-center px-10 bg-primary text-gray-300'>
                <div>

                    <h1 className=' text-3xl font-bold  text-pink-600 uppercase'>Noreen</h1>
                </div>

                {/* Home Menu For Desktop */}

                <ul className=' hidden md:flex'>
                    <li className = "text-gray-300  hover:text-pink-600 hover:border-b-2 border-pink-600 duration-200 ease-"> <Link to ="Home" smooth={true} duration={500}> Home</Link></li>
                    <li className = "text-gray-300  hover:text-pink-600  hover:border-b-2 border-pink-600 duration-200 ease-"><Link to ="About" smooth={true} duration={500}> About</Link></li>
                    <li className = "text-gray-300  hover:text-pink-600  hover:border-b-2 border-pink-600 duration-200 ease-"><Link to ="skills" smooth={true} duration={500}> Skills</Link></li>
                    <li className = "text-gray-300  hover:text-pink-600  hover:border-b-2 border-pink-600 duration-200 ease-"><Link to ="Projects" smooth={true} duration={500}> Projects</Link></li>
                    <li className = "text-gray-300  hover:text-pink-600  hover:border-b-2 border-pink-600 duration-200 ease-"><Link to ="Contacts" smooth={true} duration={500}> Contact</Link></li>

                </ul>

                {/* Hamburger */}
                <div onClick={handlemenu} className=' md:hidden z-10'>
                    {!Nav ? <FaBars size={20} /> : <FaTimes size={20} />}

                </div>
                {/* Mobile Menu */}

                <div className={!Nav ? 'hidden' : ' absolute left-0 top-0 w-full h-screen bg-primary flex flex-col justify-center items-center'}>
                    <ul className=' flex flex-col absolute top-20 items-center justify-center'>


                        <li className="text-2xl py-3  hover:text-cyan-700  hover:border-b-2 border-cyan-700 duration-200 ease-in cursor-pointer px-5"><Link onClick={handlemenu} to="Home" smooth={true} duration={500}>Home</Link></li>
                        <li className="text-2xl py-3 text-gray-300  hover:text-cyan-700  hover:border-b-2 border-cyan-700 duration-200 ease-in cursor-pointer px-5"><Link onClick={handlemenu} to ="About" smooth={true} duration={500}> About</Link></li>
                        <li className="text-2xl py-3 text-gray-300  hover:text-cyan-700  hover:border-b-2 border-cyan-700 duration-200 ease-in cursor-pointer px-5"><Link onClick={handlemenu} to ="skills" smooth={true} duration={500}> Skills</Link></li>
                        <li className="text-2xl py-3 text-gray-300  hover:text-cyan-700  hover:border-b-2 border-cyan-700 duration-200 ease-in cursor-pointer px-5"><Link onClick={handlemenu} to ="Projects" smooth={true} duration={500}> Projects</Link></li>
                        <li className="text-2xl py-3 text-gray-300  hover:text-cyan-700  hover:border-b-2 border-cyan-700 duration-200 ease-in cursor-pointer px-5"><Link onClick={handlemenu} to ="Contacts" smooth={true} duration={500}> Contact</Link></li>
                    </ul>
                    <div className=' flex flex-1 gap-2 absolute bottom-20'>
                        <FaFacebook size={30} className=' hover:text-cyan-700' />
                        <FaLinkedin size={30} className=' hover:text-cyan-700' />
                        <FaGithub size={30} className=' hover:text-cyan-700' />
                        < BiLogoGmail size={30} className=' hover:text-cyan-700' />
                        <SiFreelancer size={30} className=' hover:text-cyan-700' />


                    </div>

                </div>

                {/* Social ICons */}
                <div className=' fixed hidden lg:flex flex-col top-[35%] left-0'>
                    <ul>
                        <li className=' w-[150px] h-[50px] flex justify-between items-center ml-[-100px]  hover:ml-[-10px] duration-300  bg-blue-800 '>
                            <a className=' flex justify-between items-center w-full  text-gray-300' href='https://www.facebook.com/profile.php?id=100089104219371' target="_blank">
                               Facebook  <FaFacebook  size={30}/>
                            </a>
                        </li>
                        <li className=' w-[150px] h-[50px] flex justify-between items-center ml-[-100px]  hover:ml-[-10px] duration-300  bg-gray-800 '>
                            <a className=' flex justify-between items-center w-full  text-gray-300' href='https://github.com/Noreen-Khoso' target="_blank">
                               GitHub <FaGithub size={30}/>
                            </a>
                        </li>
                        <li className=' w-[150px] h-[50px] flex justify-between items-center ml-[-100px]  hover:ml-[-10px] duration-300  bg-blue-800 '>
                            <a className=' flex justify-between items-center w-full  text-gray-300' href='https://www.linkedin.com/in/noreen-khoso-7b29142a6/' target="_blank">
                              LinkedIn  <FaLinkedin  size={30}/>
                            </a>
                        </li>
                        <li className=' w-[150px] h-[50px] flex justify-between items-center ml-[-100px]  hover:ml-[-10px] duration-300  bg-green-400 '>
                            <a className=' flex justify-between items-center w-full  text-gray-300' href='/' target="_blank">
                               Gmail <BiLogoGmail size={30}/>
                            </a>
                        </li>
                        <li className=' w-[150px] h-[50px] flex justify-between items-center ml-[-100px]  hover:ml-[-10px] duration-300  bg-cyan-600 '>
                            <a className=' flex justify-between items-center w-full  text-gray-300' href='https://www.freelancer.com/u/noreenkhoso0' target="_blank">
                              Freelancer  <SiFreelancer size={30} />
                            </a>
                        </li>

                    </ul>


                </div>

            </div>
        </>
    )
}

export default Navigation