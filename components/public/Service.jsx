"use client"

import { useUser } from '@/hooks/useUser'

const Service = () => {
    const {user} = useUser()
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