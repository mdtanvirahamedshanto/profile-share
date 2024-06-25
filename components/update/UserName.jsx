"use client"
import { useAuth } from '@/hooks/useAuth'
import React, { useState } from 'react'
import { FaCheck, FaEdit } from 'react-icons/fa'


const UserName = () => {
    const {auth} = useAuth();
    const [username, setUsername] = useState(auth?.username)
    const [editMode, setEditMode] = useState(false)
  
    const updateContact = async () => {
      if (shippingAddress.length < 7) {
        toast.error("ShippingAddress number must be at least 7 characters");
        return;
      }
      try {
        await updateShippingAddress({ email: user.email, shippingAddress });
        setEditMode(false);
        toast.success("ShippingAddress number updated successfully");
      } catch (error) {
        console.log(error);
      }
    };
  
    const handleEdit = () => {
      setBio(auth?.bio);
      setEditMode(true);
    };
  return (
    <>
  
    <div className="flex-1">
        {!editMode ? (
          <p className="leading-[188%] mx-2 text-pink-300 sm:text-lg">
            {username}
          </p>
        ) : (
          <textarea
            className='p-2 mx-2 className="leading-[188%] bg-[#167770] text-gray-600 lg:text-lg rounded-md'
            value={username}
            rows={1}
            cols={18}
            placeholder="Enter your username"
            onChange={(e) => setUsername(e.target.value)}
          />
        )}
      </div>

      {!editMode ? (
        <button
          className="flex-center h-7 w-7 rounded-full"
          onClick={handleEdit}
        >
          <FaEdit />
        </button>
      ) : (
        <button
          className="flex-center h-7 w-7 rounded-full"
          onClick={updateContact}
        >
          <FaCheck />
        </button>
  )}
    </>
  )
}

export default UserName