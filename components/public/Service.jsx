"use client"
import { findUser } from '@/actions'
import Loading from '@/app/Loading'
import React, { useEffect, useState } from 'react'
import LoadingIcon from '../LoadingIcon'

const Service = ({ username }) => {
    const [user, setUser] = useState('')
    const [loading, setLoading] = useState(false)
    useEffect(() => {
        try {
            setLoading(true)
            const find = async () => {
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
    if (loading) return <LoadingIcon />
    return (
        <div>
             <div className='text-4xl text-primary mb-1 font-bold'>
                        My Services:
                    </div>
            <div>
                <ul>
                    {
                        user?.service?.map((item, i) => <li className='text-2xl text-red-400 hover:scale-105 font-medium' key={item}>{i + 1}. {item}</li>)
                    }
                </ul>
            </div>
        </div>
    )
}

export default Service