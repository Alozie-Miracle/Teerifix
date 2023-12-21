import React from 'react'

import manComputer from '@/assets/man-comp.jpg'
import Image from 'next/image'
type Props = {}

const Service = (props: Props) => {
  return (
    <div className='py-10'>
        <div className='max-w-[90%] xl:max-w-[80%] mx-auto'>
          <h2 className='text-center text-3xl'>Find Us on Social Media</h2>
          <p className='text-center my-2 mb-5'>Follow us on our social  media to see promotions and information</p>
          <div className='flex gap-5 flex-col md:flex-row items-center mt-10'>
            <div className='xl:w-1/2 w-full flex flex-col gap-5'>
                <h2 className='text-4xl text-center'>Leading the Digital Technical Revolution</h2>
                <p className='text-center'>We are <span className='text-blue-500'>TEERIFIX NIGERIA</span> : A trusted Lagos based company creating top <span className='text-blue-500'>quality websites</span> and other branding / marketing mediums. We have been rated “best website developers and designers for small business”.  We also offer the best <span className='text-blue-500'>logo designs, billboard graphic</span> designs, <span className='text-blue-500'>flyer designs </span>, online social media visual content and more.</p>
            </div>
            <Image src={manComputer} alt='computer man' className='w-full xl:w-1/2 h-fit object-cover' />
          </div>
        </div>
    </div>
  )
}

export default Service