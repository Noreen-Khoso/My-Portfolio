import React from 'react'
import Button from './Button'

const Contatcs = () => {
  return (
    <>
    <div name='Contacts' className='h-screen w-full bg-primary flex justify-center items-center p-4'>
        <form method='POST' action='https://getform.io/f/53035bcf-1cf0-4735-a944-04b5cf68a726' className=' flex flex-col max-w-[600px] w-full'>
            <div className='pb-8'>
                <p className=' text-4xl  font-bold inline border-b-4 border-pink-600 text-gray-300'> Contact</p>
                <p className='text-gray-300 py-4'>Submit the form below or shoot me an email - noreenkhoso15@gmail.com</p>
            </div>
            <input type="text" placeholder='name' name='name'  className=' my-2 p-2  bg-slate-200 text-gray-700 focus:outline-none rounded-md'/>
            <input type="email" placeholder='email' name='email'  className=' my-2 p-2  text-gray-700 bg-slate-200 focus:outline-none rounded-md'/>
            <textarea name="message"  rows="10" placeholder=' message' className=' my-2 p-2 bg-slate-200 focus:outline-none'></textarea>
            <Button text="Let's Collebrate"/>
        </form>
    </div>
    </>
  )
}

export default Contatcs