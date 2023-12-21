import React from 'react'
import web from '@/assets/web.jpg'
import app from '@/assets/mobile.jpg'
import maintenance from '@/assets/maintenance.jpg'

import social from '@/assets/socialmedia.jpg'
import seo from '@/assets/seo.jpg'
import market from '@/assets/marketing.jpg'
import Image from 'next/image'

type Props = {
    title: string;
    img: any
}

const Service = ({img, title}: Props) => {
    return (
        <div className='w-full md:w-[40%] h-[300px] hover:scale-105 transition-all ease-in-out duration-300 cursor-pointer bg-white shadow-2xl rounded-md pb-2'>
            <Image src={img} alt='staffs' className='w-full h-[85%] rounded-t-md object-fill' />
            <h3 className='text-md text-center mt-5'>{title}</h3>
        </div>
    )
}

const Products = () => {
  return (
    <div className='bg-gray-100 text-black py-10'>
        <div className='max-w-[90%] xl:max-w-[80%] mx-auto'>
            <h2 className='text-center text-3xl'>Features We Offer</h2>
            <p className='text-center text-xl my-2'>We offer various services that enhance your brand</p>
            <p className='text-center xl:w-[500px] max-w-[500px] mx-auto text-sm'>We create a professional, engaging, and consistent brand that helps you grow your business to attract the right clients and gain their trust which makes your products and services easy to market and sell.</p>

            <div className='flex flex-col  gap-10 my-10'>
                <div className='flex flex-col md:flex-row gap-5 justify-between'>
                    <Service img={web} title='Web Development' />
                    <Service img={app} title='Mobile App Development' />
                    <Service img={maintenance} title='Web and App Maintenance' />
                </div>
                <div className='flex flex-col md:flex-row gap-5 justify-between'>
                    <Service img={social} title='Social Media Management & Lead Generatione' />
                    <Service img={seo} title='Web and App Maintenance' />
                    <Service img={market} title='Business Content Creation' />
                </div>
            </div>
            
        </div>
    </div>
  )
}

export default Products