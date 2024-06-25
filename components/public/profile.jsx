"use client"
import { findUser } from '@/actions'
import Loading from '@/app/Loading'
import React, { useEffect, useState } from 'react'
import LoadingIcon from '../LoadingIcon'
import { useRouter } from 'next/navigation'
import { useUser } from '@/hooks/useUser'
import { toast } from 'react-toastify'


const Profile = ({username}) => {
    const {user, setUser} = useUser()
    const [loading, setLoading] = useState(false)

    const router = useRouter();

    if(!username) return null
    useEffect(() => {
        try {
            setLoading(true)
            const find = async()=>{
                const user = await findUser(username)
                setUser(user)
                if(!user){
                  toast.error("User Not-Found! ")
                  router.push("/")
                }
                setLoading(false)
              }
            
              find();
        } catch (error) {
            setLoading(false)
            console.log(error)
        }
       
      }, [])
    
      if(loading) return <LoadingIcon />
  return (
    <div>
         <span className='text-xl sm:text-3xl my-3 italic'>{user?.name}</span>
                    {/* bio */}
                    <div>{user?.bio}</div>
    </div>
  )
}

export default Profile