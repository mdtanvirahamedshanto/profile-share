import Image from 'next/image'
import React from 'react'
import MainImg from '@/public/sociallogo.png'
import Navbar from './Navbar'

const HomePage = () => {
  return (
    <>
   
      <Navbar />
    <div className='flex flex-col h-[80rem] sm:h-screen items-center pt-4 sm:pt-8'>
      <div className='flex flex-col items-center'>
        <span className='text-2xl items-center sm:text-5xl font-semibold text-green-500'>

          Wellcome to Profile Share.
        </span>
        <span className='text-xl mt-2 sm:text-2xl font-bold text-primary text-pretty'>

          Share your profile & service is others
        </span>
      </div>

      <div className='flex flex-col sm:flex-row items-center  justify-between'>

    
      <div className='pt-5 w-full h-6 sm:pt-0'>
        <Image alt='main img' src={MainImg}  />
      </div>
      
      </div>
    </div>
    </>
  )
}

export default HomePage