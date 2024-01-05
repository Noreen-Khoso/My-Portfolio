import React from 'react'

const Button = ({text}) => {
  return (
    <>
    <div>
        <button className=' bg-pink-600  hover:bg-transparent hover:border border-pink-600 hover:text-pink-600 ease-in duration-200 rounded-md '>{text}</button>
    </div>
    
    </>
  )
}

export default Button