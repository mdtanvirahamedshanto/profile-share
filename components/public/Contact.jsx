"use client"

import React, { useEffect, useState } from 'react'
import { useUser } from '@/hooks/useUser'

const Contact = () => {
const {user} = useUser()
    return (
        <div className='flex flex-col justify-center mb-5 items-center'>
            <div className='text-4xl text-primary mb-1 font-bold'>Contact:</div>
            <div>
                {
                    user?.contact?.phone && <div className='text-xl hover:scale-105'>Phone: {user?.contact?.phone}</div>
                }

                {
                    user?.contact?.address && <div className='text-xl hover:scale-105'>Address: {user?.contact?.address}</div>
                }

                {
                    user?.contact?.whatsapp && <div className='text-xl hover:scale-105'>Whatsapp: {user?.contact?.whatsapp}</div>
                }

                {
                    user?.contact?.imo && <div className='text-xl hover:scale-105'>Imo: {user?.contact?.imo}</div>
                }


            </div>

        </div>
    )
}

export default Contact