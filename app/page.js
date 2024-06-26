"use client"

import { deleteService, findUser } from "@/actions";
import CopyButton from "@/components/CopyButton";
import HomePage from "@/components/HomePage";
import Navbar from "@/components/Navbar";
import QrCode from "@/components/QrScanner";
import AddService from "@/components/update/AddService";
import Bio from "@/components/update/Bio";
import UpdateContact from "@/components/update/UpdateContact";
import UpdateSocial from "@/components/update/UpdateSocial";
import UserName from "@/components/update/UserName";

import { useAuth } from "@/hooks/useAuth";
import { useEffect, useState } from "react";
import { FaArchive } from "react-icons/fa";
import { toast } from "react-toastify";
export default function Home() {
  const { auth, setAuth } = useAuth();
  const [user, setUser] = useState('')
  const [show, setShow ] = useState(false);

  // console.log(auth)


  const id = auth?._id

  useEffect(() => {
    const data = async () => {
      const userData = await findUser(auth?.username)
      setUser(userData)
    }
    data();
  }, [])

  const handleDelete = async (item) => {
    const service = item
    const data = await deleteService(id, service)
   
      toast.info("Service Deleted! Please Reroad")
    
  }
  const username = user?.username
  const shareLink = `https://profileshare.vercel.app/link/${username}`
  const viewLink = shareLink.length > 45 ? shareLink.slice(0,45).concat("...") : shareLink
  if (!auth) return <HomePage />
  return (

    <div className="h-full">
      <Navbar />

      <div className="flex text-primary justify-center flex-col items-center sm:flex-row">
        Your share link : 
        <span className="flex items-center justify-center">

        <span className="mx-2  text-gray-300">{viewLink}
        </span>
        <CopyButton textToCopy={shareLink} />
        </span>
      </div>
        
      <div className="flex gap-4 my-4 justify-center items-center">
        <button className="px-2 py-1 rounded-lg hover:text-gray-950 bg-blue-700 hover:bg-blue-400 text-gray-900" onClick={()=> setShow(!show)}>{show ? "Hide QrCode": "Show QrCode"}</button>
        {
          show && (
            <div>  <QrCode value={shareLink} /> </div>
          )
        }
       
      </div>

      <div className="flex flex-col justify-center items-center">
        <p>Edit Your Details <span>{auth?.name}</span> </p>


        {/* edit profile  */}
        <div className="flex flex-col my-3 items-center justify-center">
          <div className="mt-3">Edit Profile:</div>
          <div className="flex  items-center">
            <div className="text-green-500">Username:
            </div>
            <UserName />

          </div>
          <div className="flex items-center flex-col justify-center sm:flex-row">
            <div className="text-green-500 ml-1">Bio:
            </div>
            <Bio />
          </div>
        </div>

        <div className=" sm:flex gap-10">
          {/* edit contact  */}
          <UpdateContact />
          {/* edit social link */}

          <UpdateSocial />
        </div>

        {/* edit service*/}

        <div>
          <div className="flex flex-col mt-3 items-center justify-center">Edit Service: </div>
          <div>
            <ul className="flex flex-col">
              {
                user?.service?.map((item, i) => (<div className="flex flex-row my-2 gap-3 items-center " key={i} > <li className='text-2xl text-blue-400  font-medium'  >{i + 1}. {item}
                </li>
                  <button onClick={() => handleDelete(item)} className="flex items-center gap-1 text-black font-semibold cursor-pointer border bg-primary rounded-md p-1">
                    <FaArchive className="text-red-600" />
                  </button>

                </div>))
              }
            </ul>
          </div>
          {/* add service  */}
          <div className="flex  items-center pt-3">
            <AddService />
          </div>

        </div>
      </div>


    </div>
  );
}
