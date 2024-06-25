import Link from 'next/link'
import React from 'react'
import user from '@/data/user'
import {FaFacebook, FaInstagram, FaTelegram, FaTwitter, FaYoutube} from "react-icons/fa"
import Profile from '@/components/public/profile'
import Service from '@/components/public/Service'
import Contact from '@/components/public/Contact'
import Social from '@/components/public/Social'

const page = ({ params: { username } }) => {
    return (
        <div className=' w-full h-screen'>
            <div className='flex flex-col justify-center items-center'>
                {/* welcome text  */}
                <div className='text-2xl flex flex-col mt-7 mb-7 items-center sm:text-5xl font-medium'>
                    <span className='text-2xl my-2 sm:text-5xl font-semibold'>

                    Welcome To My Profile
                    </span>
                   <Profile username={username} />
                </div>
                {/* contact  */}
               <Contact username={username} />
                {/* profile link  */}
                <Social username={username} />
                {/* service list  */}
                <div className='flex flex-col mb-5 items-center'>
                   
                   <Service username={username} />
                </div>
            </div>
        </div>
    )
}

export default page