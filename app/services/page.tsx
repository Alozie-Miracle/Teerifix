import Footer from '@/components/Footer'
import Hero from '@/components/Hero'
import Products from '@/components/Products'
import Service from '@/components/Service'
import React from 'react'

type Props = {}

const page = (props: Props) => {
  return (
    <main className='w-full h-full'>
        <Hero />
        <Service />
        <Products />
        <Footer />
    </main>
  )
}

export default page