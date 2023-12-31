'use client'
import React, { useState } from 'react'
import { ChevronDownIcon, Bars2Icon } from '@heroicons/react/24/outline'
import Link from 'next/link'
import { XMarkIcon } from '@heroicons/react/24/outline'

type Props = {}

const Navbar = (props: Props) => {
  const [toggle, settoggle] = useState(false)
  return (
    <div className='flex xl:items-center justify-between max-w-[95%] xl:max-w-[80%] mx-auto'>
      <div className='flex flex-col gap-5 relative'>
        <div className='h-10 w-10 rounded-full bg-red-100'></div>
          {toggle && (
            <div className='xl:hidden absolute top-16 w-[200px] z-10 flex flex-col gap-5'>
              <Link href='/'>Home</Link>
              <p>About us</p>
              <p>Blog</p>
              <p className='flex items-center gap-5'>Contact <ChevronDownIcon className='h-5 w-5 text-white' /> </p>
              <Link href='/services' className='flex items-center gap-5 cursor-pointer'>Services <ChevronDownIcon className='h-5 w-5 text-white' /> </Link>
              <p>Book a meeting</p>
            </div>
          )}
      </div>
      <div className='xl:flex gap-20 hidden'>
        <div className='flex gap-10'>
          <Link className='hover:scale-105 transition-all ease-in-out duration-300 cursor-pointer' href='/'>Home</Link>
          <p className='hover:scale-105 transition-all ease-in-out duration-300 cursor-pointer'>About us</p>
          <p className='hover:scale-105 transition-all ease-in-out duration-300 cursor-pointer'>Blog</p>
          <p className='flex items-center gap-5 hover:scale-105 transition-all ease-in-out duration-300 cursor-pointer'>Contact <ChevronDownIcon className='h-5 w-5 text-white' /> </p>
          <Link href='/services' className='flex items-center gap-5  hover:scale-105 transition-all ease-in-out duration-300 cursor-pointer'>Services <ChevronDownIcon className='h-5 w-5 text-white' /> </Link>
        </div>
        <p className='hover:scale-105 transition-all ease-in-out duration-300 cursor-pointer'>Book a meeting</p>
      </div>
      <div className='xl:hidden'>{ toggle ? <XMarkIcon onClick={()=> settoggle(false)} className='h-10 w-10 text-white' /> : <Bars2Icon onClick={()=> settoggle(true)} className='h-10 w-10 text-white' />}</div>
    </div>
  )
}

export default Navbar