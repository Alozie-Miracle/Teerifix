'use client'
import React from 'react'
import Image from 'next/image'

import manComputer from '@/assets/man-comp.jpg'
import cup from '@/assets/cup.jpg'
import chair from '@/assets/chair.jpg'

type Props = {}

const About = (props: Props) => {
  return (
    <div className='w-full h-full text-black py-10 bg-white'>
      <div className='flex flex-col md:flex-row gap-5 w-full max-w-[90%] xl:max-w-[80%] mx-auto'>
        <div className='xl:w-1/2 w-full flex flex-col gap-5'>
          <h2 className='text-4xl text-center xl:text-start'>Who We Are</h2>
          <p className='text-center xl:text-start'>Teerifix is a Nigerian company that has been serving people through 2 tiers of business.</p>
          <div className='flex flex-col gap-10 h-full'>
            <div className='flex gap-5 w-full'>
              <Image src={cup} alt='cup' className='w-[200px] h-[100px] object-contain ' />
              <div className='flex flex-col gap-2'>
                <h2 className='text-2xl'>Teerifix Branding</h2>
                <p>The creation of websites, social media marketing and full company branding. <br /> 
                  <a className='text-blue-500' target='_blank' rel='noopener'  href="https://www.teerifix.net/business">www.teerifix.net/business</a>
                </p>
              </div>
            </div>
            <div className='flex gap-5'>
              <Image src={chair} alt='cup' className='w-[155px] h-[100px] object-contain ' />
              <div className='flex flex-col gap-2'>
                <h2 className='text-2xl'>Teerifix lounge</h2>
                <p>An online and in-class training center.</p>
              </div>
            </div>
          </div>
        </div>
        <Image src={manComputer} alt='man computer image' className='xl:w-1/2 w-full h-fit object-cover' />
      </div>
    </div>
  )
}

export default About