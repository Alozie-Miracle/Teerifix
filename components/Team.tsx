import React from 'react'
import Image from 'next/image'

import staff1 from '@/assets/staff1.jpg'
import staff2 from '@/assets/staff2.jpg'
import staff3 from '@/assets/staff3.jpg'
import staff4 from '@/assets/staff4.jpg'
type Props = {}

const Team = (props: Props) => {
  return (
    <div className='py-10 bg-gray-100 overflow-x-hidden'>
        <div className='max-w-[90%] xl:max-w-[80%] mx-auto p-5'>
            <h2 className='text-center text-3xl my-5'>Meet The Team</h2>
            <p className='text-center'>Our IT team is made up of amazing designers, developers, seo experts and social media marketers.</p>
            <div className='flex gap-5 mt-16 overflow-x-scroll scrollbar-hide'>
                <div className='w-[250px] xl:w-[40%] h-[250px] bg-white shadow-2xl rounded-md flex flex-shrink-0 flex-col items-center justify-center'>
                    <Image src={staff1} alt='staffs' className='w-[100px] h-[100px] rounded-full object-cover' />
                    <h3 className='text-xl mt-5'>CYNTHIA ONWUCHEKWA</h3>
                    <p>MANAGER</p>
                </div>
                <div className='w-[250px] xl:w-[40%] h-[250px] bg-white shadow-2xl rounded-md flex flex-shrink-0 flex-col items-center justify-center'>
                    <Image src={staff2} alt='staffs' className='w-[100px] h-[100px] rounded-full object-cover' />
                    <h3 className='text-xl mt-5'>THEODORA OKWARA</h3>
                    <p>PROJECT MANAGER</p>
                </div>
                <div className='w-[250px] xl:w-[40%] h-[250px] bg-white shadow-2xl rounded-md flex flex-shrink-0 flex-col items-center justify-center'>
                    <Image src={staff3} alt='staffs' className='w-[100px] h-[100px] rounded-full object-cover' />
                    <h3 className='text-xl mt-5'>Lola Akindayo</h3>
                    <p>RECORDS OFFICER</p>
                </div>
                <div className='w-[250px] xl:w-[40%] h-[250px] bg-white shadow-2xl rounded-md flex flex-shrink-0 flex-col items-center justify-center'>
                    <Image src={staff4} alt='staffs' className='w-[100px] h-[100px] rounded-full object-cover' />
                    <h3 className='text-xl mt-5'>Femi Ayodele</h3>
                    <p>HEAD OF SOFTWARE DEVELOPER</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Team