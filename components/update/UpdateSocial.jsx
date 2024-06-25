import { useAuth } from '@/hooks/useAuth';
import React, { useState } from 'react'
import LoadingIcon from '../LoadingIcon';
import { updateSocial } from '@/actions';
import { toast } from 'react-toastify';

const UpdateSocial = () => {
  const {auth} = useAuth();
  const [facebook, setFacebook] = useState(auth?.social?.facebook || '')
  const [instagram, setInstagram] = useState(auth?.social?.instagram || '')
  const [telegram, setTelegram] = useState(auth?.social?.telegram || '')
  const [twitter, setTwitter] = useState(auth?.social?.twitter || '')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  let socialData = {
    facebook,
    instagram,
    telegram,
    twitter
  }
  let email = auth?.email;
// console.log(updateContact)
  const handleUpdateSocial = async(event)=>{
    event.preventDefault();

    try {
      setLoading(true);
      const data = await updateSocial(email,socialData);
console.log(data)
      if (data) {
        setLoading(false);
        toast.success("Update Social Succesfully!")
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
    <div className="flex flex-col items-center gap-1 justify-center">
    <div className="mt-3">Edit Social: </div>
    <form onSubmit={handleUpdateSocial} className="flex flex-col  gap-1">
      <div> <label className="text-green-500 text-xl font-medium">Facebook: </label> <input onChange={(e)=> setFacebook(e.target.value)} className="w-52 bg-[#167770] border border-purple-500  hover:border hover:border-pink-500 " value={facebook} placeholder="Enter Your username" ></input> </div>
      <div> <label className="text-green-500 text-xl font-medium">Instagram: </label> <input onChange={(e)=> setInstagram(e.target.value)} className="w-52 bg-[#167770] border border-purple-500  hover:border hover:border-pink-500 " value={instagram} placeholder="Enter Your username" ></input> </div>
      <div> <label className="text-green-500 text-xl font-medium">Talegram: </label> <input onChange={(e)=> setTelegram(e.target.value)} className="w-52 bg-[#167770] border border-purple-500  hover:border hover:border-pink-500 " value={telegram} placeholder="Enter Your username" ></input> </div>
      <div> <label className="text-green-500 text-xl font-medium">Twitter: </label> <input onChange={(e)=> setTwitter(e.target.value)} className="w-52 bg-[#167770] border border-purple-500  hover:border hover:border-pink-500 " value={twitter} placeholder="Enter Your username" ></input> </div>

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

export default UpdateSocial