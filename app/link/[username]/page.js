import Link from 'next/link'
import React from 'react'
import user from '@/data/user'
import {FaFacebook, FaInstagram, FaTelegram, FaTwitter, FaYoutube} from "react-icons/fa"

const page = ({ params: { username } }) => {
    return (
        <div className=' w-full h-screen'>
            <div className='flex flex-col justify-center items-center'>
                {/* welcome text  */}
                <div className='text-2xl flex flex-col mt-7 mb-7 items-center sm:text-5xl font-medium'>
                    <span className='text-2xl my-2 sm:text-5xl font-semibold'>

                    Welcome To My Profile
                    </span>
                    <span className='text-xl sm:text-3xl my-3 italic'>{user?.name}</span>
                    {/* bio */}
                    <div>{user?.bio}</div>
                </div>
                {/* contact  */}
                <div className='flex flex-col justify-center mb-5 items-center'>
                    <div className='text-4xl text-primary mb-1 font-bold'>Contact:</div>
                    <div>

                    <div className='text-xl hover:scale-105'>Phone: {user?.contact?.phone}</div>
                    <div className='text-xl hover:scale-105'>Address: {user?.contact?.address}</div>
                    <div className='text-xl hover:scale-105'>Whatsapp: {user?.contact?.whatsapp}</div>
                    <div className='text-xl hover:scale-105'>Imo: {user?.contact?.imo}</div>

                    </div>

                </div>
                {/* profile link  */}
                <div className='flex flex-col mb-5  items-center'>
                    <div className='text-4xl text-primary font-bold mb-1'>Social Link: </div>
                    <div className='flex flex-wrap gap-4'>
                    <Link href={user?.social?.facebook} >
                    <FaFacebook className='text-blue-700 text-4xl cursor-pointer sm:text-5xl md:text-7xl hover:scale-110  transform' />
                    </Link>
                    <Link href={user?.social?.instagram} >
                    <FaInstagram className='text-pink-700 text-4xl cursor-pointer sm:text-5xl md:text-7xl hover:scale-110  transform' />
                    </Link>
                    <Link href={user?.social?.telegram || ""} >
                    <FaTelegram className='text-blue-700 text-4xl cursor-pointer sm:text-5xl md:text-7xl hover:scale-110  transform' />
                    </Link>

                    <Link href={user?.social?.twitter} >
                    <FaTwitter className='text-black text-4xl cursor-pointer sm:text-5xl md:text-7xl hover:scale-110  transform' />
                    </Link>

                    <Link href={user?.social?.youtube} >
                    <FaYoutube className='text-red-700 text-4xl cursor-pointer sm:text-5xl md:text-7xl hover:scale-110  transform' />
                    </Link>
                    </div>
                </div>
                {/* service list  */}
                <div className='flex flex-col mb-5 items-center'>
                    <div className='text-4xl text-primary mb-1 font-bold'>
                        My Services:
                    </div>
                    <div>
                        <ul>
                            {
                                user?.service?.map((item,i)=> <li className='text-2xl text-red-400 hover:scale-105 font-medium' key={item}>{i+1}. {item}</li>)
                            }
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default page