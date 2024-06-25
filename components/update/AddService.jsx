'use client'
import React, { useState } from 'react'
import { FaCheck, FaEdit } from 'react-icons/fa';

const AddService = () => {
    
    const [service, setService] = useState('')
    const [editMode, setEditMode] = useState(false)
  
    const addedService = async () => {
      if (service.length < 7) {
        toast.error("service number must be at least 7 characters");
        return;
      }
      try {
        await updateservice({ email: user.email, service });
        setEditMode(false);
        toast.success("service number updated successfully");
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
            className='p-2 mx-2 className="leading-[188%] bg-[#167770] text-gray-600 lg:text-lg rounded-md'
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