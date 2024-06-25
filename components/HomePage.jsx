import Image from 'next/image'
import React from 'react'
import MainImg from '@/public/sociallogo.png'
const HomePage = () => {
  return (
    <div className='flex flex-col h-[60rem] sm:h-screen items-center pt-4 sm:pt-8'>
      <div className='flex flex-col items-center'>
        <span className='text-2xl items-center sm:text-5xl font-semibold text-green-500'>

          Wellcome to Profile Share.
        </span>
        <span className='text-xl mt-2 sm:text-2xl font-bold text-primary text-pretty'>

          Share your profile & service is others
        </span>
      </div>
      <div className='flex flex-col sm:flex-row items-center  justify-between'>

    
      <div className='sm:w-[70%] pt-5 sm:pt-0'>
        <Image alt='main img' src={MainImg}  />
      </div>
      <div className='sm:w-[30%] sm:items-start  w-full pt-5'>
       <ul className='flex flex-col items-center sm:mt-10 sm:pt-10 sm:items-start  justify-center'>
        <li className='text-2xl sm:text-4xl mt-3 font-bold italic text-pink-400'>Share Your Social Media</li>
        <li className='text-2xl sm:text-4xl mt-3 font-bold italic text-pink-400'>Share Your Contact</li>
        <li className='text-2xl sm:text-4xl mt-3 font-bold italic text-pink-400'>Share Your Service</li>
       </ul>
      </div>
      </div>
    </div>
  )
}

export default HomePage