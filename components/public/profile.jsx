"use client"
import { findUser } from '@/actions'
import Loading from '@/app/Loading'
import React, { useEffect, useState } from 'react'
import Loader from '../Loader'
import LoadingIcon from '../LoadingIcon'


const Profile = ({username}) => {
    const [user, setUser] = useState('')
    const [loading, setLoading] = useState(false)
    useEffect(() => {
        try {
            setLoading(true)
            const find = async()=>{
                const user = await findUser(username)
                setUser(user)
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