"use client"

import React from 'react'
import Link from 'next/link'
import { FaFacebook, FaInstagram, FaTelegram, FaTwitter, FaYoutube } from 'react-icons/fa'
import { useUser } from '@/hooks/useUser'

const Social = () => {
  const {user} = useUser()
  return (
    <div>
        <div className='flex flex-col mb-5  items-center'>
                    <div className='text-4xl text-primary font-bold mb-1'>Social Link: </div>
                    <div className='flex flex-wrap gap-4'>

                    {
                    user?.social?.facebook &&  <Link href={`https://www.facebook.com/${user?.social?.facebook}`} >
                    <FaFacebook className='text-blue-700 text-4xl cursor-pointer sm:text-5xl md:text-7xl hover:scale-110  transform' />
                    </Link>
                    }
                    {
                    user?.social?.instagram &&  <Link href={`https://www.instagram.com/${user?.social?.instagram}`} >
                    <FaInstagram className='text-pink-700 text-4xl cursor-pointer sm:text-5xl md:text-7xl hover:scale-110  transform' />
                    </Link>
                    }
                    {
                    user?.social?.telegram && <Link href={`https://www.telegram.com/${user?.social?.telegram}`} >
                    <FaTelegram className='text-blue-700 text-4xl cursor-pointer sm:text-5xl md:text-7xl hover:scale-110  transform' />
                    </Link>
                    }
                    {
                    user?.social?.twitter &&  <Link href={`https://www.x.com/${user?.social?.twitter}`} >
                    <FaTwitter className='text-black text-4xl cursor-pointer sm:text-5xl md:text-7xl hover:scale-110  transform' />
                    </Link>

                    }
                    {
                    user?.social?.youtube && <Link href={`https://www.youtube.com/${user?.social?.youtube}`} >
                    <FaYoutube className='text-red-700 text-4xl cursor-pointer sm:text-5xl md:text-7xl hover:scale-110  transform' />
                    </Link>
                    }

                   
                   
                    

                   
                    
                    </div>
                </div>
    </div>
  )
}

export default Social