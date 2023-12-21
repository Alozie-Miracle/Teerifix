import React from 'react'

import instagram from '@/assets/instagram.png'
import facebook from '@/assets/facebook.png'
import linkedIn from '@/assets/linkedln.jpg'
import Image from 'next/image'

type Props = {}

const Footer = (props: Props) => {
  return (
    <div className='py-5 xl:py-10 bg-[#091A86] text-white h-[10vh] xl:h-[20vh] w-full flex flex-col gap-5 items-center justify-center'>
        <p className='text-sm font-gray-200 font-thin tracking-wider'>Copywight c 2023 TEERIFIX | Powered by TEERIFIX</p>
        <div className='flex gap-5 items-center'>
            <Image src={facebook} alt='facebook' className='h-8 w-8 rounded-full' />
            <Image src={instagram} alt='instagram' className='h-8 w-8 rounded-full' />
            <Image src={linkedIn} alt='linkedIn' className='h-8 w-8 rounded-full' />
        </div>
    </div>
  )
}

export default Footer