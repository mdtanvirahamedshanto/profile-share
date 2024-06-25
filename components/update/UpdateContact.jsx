"use client"
import { useAuth } from '@/hooks/useAuth';
import React, { useState } from 'react'
import LoadingIcon from '../LoadingIcon';
import { updateContact } from '@/actions';
import { toast } from 'react-toastify';

const UpdateContact = () => {
  const {auth} = useAuth();
  const [phone, setPhone] = useState(auth?.contact?.phone || '')
  const [address, setAddress] = useState(auth?.contact?.address || '')
  const [whatsapp, setWhatsapp] = useState(auth?.contact?.whatsapp || '')
  const [imo, setImo] = useState(auth?.contact?.imo || '')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  let contactData = {
    phone,
    address,
    whatsapp,
    imo
  }
  let email = auth?.email;
// console.log(updateContact)
  const handleUpdateContact = async(event)=>{
    event.preventDefault();

    try {
      setLoading(true);
      const data = await updateContact(email,contactData);
console.log(data)
      if (data) {
        setLoading(false);
        toast.success("Update Contact Succesfully!")
      } else {
        setLoading(false);
        setError("Please provide a valid data");
      }
    } catch (err) {
      setLoading(false);
      console.log(err);
      setError(err.message);
    }
  }

  return (
    <div className="flex flex-col items-center justify-center">
    <div className="mt-3">Edit Contact:</div>
    <form className="flex flex-col gap-1" onSubmit={handleUpdateContact}>
      <div>
        <label className="text-xl font-medium text-green-500">Phone: </label>
        <input className="w-52 bg-[#167770] border border-purple-500  hover:border hover:border-pink-500 " name="phone" id="phone" onChange={(e)=> setPhone(e.target.value)} placeholder="Enter your phone number" value={phone}></input>
      </div>
      <div>
        <label className="text-xl font-medium text-green-500">Address: </label>
        <input className="w-52 bg-[#167770] border border-purple-500  hover:border hover:border-pink-500 " name="address" id="address" onChange={(e)=> setAddress(e.target.value)} placeholder="Enter your address" value={address}></input>
      </div>

      <div>
        <label  className="text-xl font-medium text-green-500" >Whatsapp: </label>
        <input className="w-52 bg-[#167770] border border-purple-500  hover:border hover:border-pink-500 " name="whatsapp" id="whatsapp" onChange={(e)=> setWhatsapp(e.target.value)} placeholder="Enter your whatsapp number" value={whatsapp}></input>
      </div>

      <div>
        <label  className="text-xl font-medium text-green-500">Imo: </label>
        <input className="w-52 bg-[#167770] border border-purple-500  hover:border hover:border-pink-500 " name="imo" id="imo" onChange={(e)=> setImo(e.target.value)} placeholder="Enter your imo number" value={imo}></input>
      </div>
      <div className='flex cursor-pointer items-center w-full justify-center'>

     
      {loading ? (
            <button
              type="submit"
              disabled
              className="bg-gray-400 text-black flex justify-center font-semibold px-6 py-2 rounded-md mt-3"
            >
             <LoadingIcon />
            </button>
          ) : (
            <button
              type="submit"
              className="bg-primary text-black font-semibold px-6 py-2 rounded-md mt-3"
            >
              Save
            </button>
          )}
           </div>

    </form>

  </div>
  )
}

export default UpdateContact