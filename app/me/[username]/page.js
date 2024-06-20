import Link from 'next/link'
import React from 'react'

const page = ({ params: { username } }) => {
    return (
        <div className='bg-[#ABD1C6] w-full h-screen'>
            <div className='flex flex-col justify-center items-center'>
                {/* welcome text  */}
                <div className='text-2xl flex flex-col items-center sm:text-5xl font-medium'>

                    welcome to my profile
                    <span className='text-xl sm:text-3xl font-mono'>{username}</span>
                </div>

                {/* profile link  */}
                <div>
                    <Link href={"www.facebook.com"} >Facebook</Link>
                </div>
                {/* service list  */}
                <div>
                    <div>
                        My Services:
                    </div>
                    <div>
                        <ul>
                            <li>Photocopy</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default page