'use client'
import { addService, findUser } from '@/actions';
import { useAuth } from '@/hooks/useAuth';
import React, { useEffect, useState } from 'react'
import { FaCheck, FaEdit } from 'react-icons/fa';
import { toast } from 'react-toastify';

const AddService = () => {
    const {auth} = useAuth()
    const [service, setService] = useState('')
    const [editMode, setEditMode] = useState(false)
    const [user, setUser] = useState('')
const id = auth?._id
    const addedService = async () => {
      try {
        await addService(id, service );
        setEditMode(false);
        setService("")
        toast.success("service added successfully");
      } catch (error) {
        console.log(error);
      }
    };
  
    const handleEdit = () => {
      
      setEditMode(true);
    };


  return (
    <div className='flex items-center justify-center w-full'>
         <div className="">
        {!editMode ? (
          <p className="leading-[188%] mx-2 text-pink-300 sm:text-lg">
           Add Service:  {service}
          </p>
        ) : (
            <div className='flex items-center'>
          Add New: <textarea
            className='p-2 mx-2 text-white className="leading-[188%] bg-[#167770]  lg:text-lg rounded-md'
            value={service}
            rows={1}
            cols={18}
            placeholder="Enter your service"
            onChange={(e) => setService(e.target.value)}
            />
            </div>
        )}
      </div>

      {!editMode ? (
        <button
          className="flex-center cursor-pointer h-7 w-7 rounded-full"
          onClick={handleEdit}
        >
          <FaEdit />
        </button>
      ) : (
        <button
          className="flex-center h-7 w-7 cursor-pointer rounded-full"
          onClick={addedService}
        >
          <FaCheck />
        </button>
  )}
    </div>
  )
}

export default AddService