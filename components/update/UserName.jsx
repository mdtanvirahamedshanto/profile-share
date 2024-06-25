"use client"
import { updateUsername } from '@/actions'
import { useAuth } from '@/hooks/useAuth'
import React, { useState } from 'react'
import { FaCheck, FaEdit } from 'react-icons/fa'
import { toast } from 'react-toastify'


const UserName = () => {
    const {auth} = useAuth();
    const [username, setUsername] = useState(auth?.username)
    const [editMode, setEditMode] = useState(false)
  const email = auth?.email
    const updateNewUsername = async () => {
     
      try {
        await updateUsername(email, username );
        setEditMode(false);
        toast.success("username updated successfully");
      } catch (error) {
        console.log(error);
      }
    };
  
    const handleEdit = () => {
      setUsername(auth?.username);
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
            className='p-2 mx-2 className="leading-[188%] bg-[#167770] text-gray-100 lg:text-lg rounded-md'
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
          onClick={updateNewUsername}
        >
          <FaCheck />
        </button>
  )}
    </>
  )
}

export default UserName