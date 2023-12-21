import React from 'react'
import Navbar from './Navbar'

type Props = {}

const Hero = (props: Props) => {
  return (
    <div className='Hero h-[70vh] xl:h-screen w-full relative p-5 text-white bg-transparent'>
        <Navbar />
        <div className='h-full w-full flex flex-col items-center justify-center'>
          <div className='w-[200px] bg-white text-blue-600 rounded-full py-3 px-2 flex items-center justify-center'>
            Advanced Software
          </div>
          <h2 className='text-3xl md:text-5xl lg:text-7xl my-2 mt-5 text-center'>Development Process Made</h2>
          <h2 className='xl:text-5xl text-4xl lg:text-6xl my-2 text-center'>Simple with <span className='text-[#02C6EE]'>Teerifix</span></h2>
          <p className='my-3 text-center text-lg'>Let us design a custom branding package for your business today.</p>
          <p className='text-center text-lg'>Strategic steps for business growth</p>

          <div className='w-[90%] md:w-[50%] lg:w-[50%] xl:w-[450px]  rounded-full pl-5 text-sm py-1 bg-[#0A1D95] flex mt-5'>
            <input type="text" placeholder='Enter your email address' className='bg-transparent border-none outline-none flex-1' />
            <button type='button' className='w-fit p-3 bg-blue-600 rounded-full hover:scale-110 active:scale-95 transition-all ease-in-out duration-300'>Book a meeting</button>
          </div>
        </div>
    </div>
  )
}

export default Hero