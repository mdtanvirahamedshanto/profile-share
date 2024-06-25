"use client"
import { updateBio, updateNewBio } from '@/actions'
import { useAuth } from '@/hooks/useAuth'
import React, { useState } from 'react'
import { FaCheck, FaEdit } from 'react-icons/fa'
import { toast } from 'react-toastify'


const Bio = () => {
    const {auth} = useAuth();
    const [bio, setBio] = useState(auth?.bio)
    const [editMode, setEditMode] = useState(false)
  const email = auth?.email
    const updateNewBio = async (event) => {
      event.preventDefault();
      try {
        await updateBio(email, bio );
        setEditMode(false);
        toast.success("Bio updated successfully");
      } catch (error) {
        console.log(error);
      }
    };
  
    const handleEdit = () => {
      setBio(auth?.bio);
      setEditMode(true);
    };
  return (
    <div className='flex'>
  
    <div className="flex-1">
        {!editMode ? (
          <p className="leading-[188%] mx-2 text-pink-300 sm:text-lg">
            {bio}
          </p>
        ) : (
          <textarea
            className='p-2 mx-2 className="leading-[188%] bg-[#167770] text-white lg:text-lg rounded-md'
            value={bio}
            rows={1}
            cols={18}
            placeholder="Enter your bio"
            onChange={(e) => setBio(e.target.value)}
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
          onClick={updateNewBio}
        >
          <FaCheck />
        </button>
  )}
    </div>
  )
}

export default Bio