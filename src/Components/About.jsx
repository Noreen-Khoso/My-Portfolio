import React from 'react'

const About = () => {
    return (
        <>
            <div name = "About" className=' w-screen h-full bg-primary text-gray-300 pt-10 md:px-20'>
                <div className=' flex flex-col justify-center items-center h-screen w-full '>
                    <div className=' max-w-[1000px] w-full grid grid-cols-2 gap-8'>
                        <div className=' sm:text-right pb-8 pl-4'>
                            <p className=' text-4xl font-bold inline border-b-4 border-pink-600'>
                                About
                            </p>
                        </div>
                        <div>

                        </div>
                    </div>
                    <div className=' max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
                        <div className='  sm:text-right text-2xl sm:text-4xl text-gray-400 '>

                            <p >
                                Hi, I'm Noreen Khoso, Nice to meet You. please take a look around.
                            </p>
                        </div>
                        <div className=' text-gray-400'>
                            <p >
                                "I'm not just a coder, I'm a problem solver.
                                My passion lies in understanding user needs and crafting solutions that exceed expectations.
                                My MERN skills are my tools, but my desire to make a positive impact is my driving force.
                                Partner with me and let's build something extraordinary together."
                            </p>
                        </div>
                    </div>

                </div>

            </div>
        </>
    )
}

export default About