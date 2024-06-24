import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  const isLogin = false
  return (
    <div className='flex justify-between w-full pt-5 pb-5 items-center'>
        <Link href={"/"} className='flex w-full justify-center font-bold text-purple-600 text-xl sm:text-2xl'>Share Profile.</Link>
        <div className='flex w-full justify-center'>
          {
            
            isLogin ? ( <Link href={'/'} className='px-2 py-1 sm:px-4 bg-primary rounded-md sm:py-2 text-black font-semibold'>Logout</Link> ) : (
              <>
              <Link href={'/register'} className='px-2 py-1 sm:px-4 bg-primary mr-4 rounded-md sm:py-2 text-black font-semibold'>Register</Link>
              <Link href={'/login'} className='px-2 py-1 sm:px-4 bg-primary rounded-md sm:py-2 text-black font-semibold'>Login</Link>
              </>
            )
          }
        </div>
    </div>
  )
}

export default Navbar