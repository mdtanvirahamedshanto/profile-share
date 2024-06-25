"use client"

import HomePage from "@/components/HomePage";
import AddService from "@/components/update/AddService";
import Bio from "@/components/update/Bio";
import UpdateContact from "@/components/update/UpdateContact";
import UpdateSocial from "@/components/update/UpdateSocial";
import UserName from "@/components/update/UserName";
import user from "@/data/user";
import { useAuth } from "@/hooks/useAuth";
import { Fragment, useState } from "react";
import { FaArchive, FaCheck, FaClosedCaptioning, FaCloudscale, FaCross, FaEdit, FaRemoveFormat } from "react-icons/fa";
export default function Home() {
  const {auth , setAuth } = useAuth();
  console.log(auth)

  if (!auth) return <HomePage />


  return (

    <div className="h-full">

      <div className="flex flex-col justify-center items-center">
        <p>Edit Your Details <span>{auth?.name}'s</span> </p>


        {/* edit profile  */}
        <div className="flex flex-col my-3 items-center justify-center">
          <div className="mt-3">Edit Profile:</div>
          <div className="flex  items-center">
          <div className="text-green-500">Username:
          </div>
          <UserName />
          
          </div>
          <div className="flex items-center">
          <div className="text-green-500 ">Bio:
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
                auth?.service?.map((item, i) => (<div className="flex flex-row gap-3 items-center " > <li className='text-2xl text-blue-400  font-medium' key={item} >{i + 1}. {item}
                </li>
                  <button className="flex items-center gap-1 text-black font-semibold cursor-pointer border bg-primary rounded-md p-1">
                    <FaArchive className="text-red-600" />

                    Delete
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
