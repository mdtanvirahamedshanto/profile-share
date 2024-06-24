"use client"

import HomePage from "@/components/HomePage";
import user from "@/data/user";
import { useAuth } from "@/hooks/useAuth";
import { Fragment } from "react";
import { FaArchive, FaClosedCaptioning, FaCloudscale, FaCross, FaRemoveFormat } from "react-icons/fa";
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
          <div className="text-green-500">Bio:
          </div>
          <textarea className="bg-[#167770]" placeholder="Enter Your Bio" ></textarea>
          <div className="flex items-center w-full justify-center">
                <button className="btn bg-primary text-black font-semibold px-6 py-2 rounded-md mt-3">Save</button>
              </div>
        </div>

        <div className=" sm:flex gap-10">
          {/* edit contact  */}
          <div className="flex flex-col items-center justify-center">
            <div className="mt-3">Edit Contact:</div>
            <form className="flex flex-col gap-1">
              <div>
                <label className="text-xl font-medium text-green-500">Phone: </label>
                <input className="w-52 bg-[#167770] border border-purple-500  hover:border hover:border-pink-500 " name="phone" id="phone" placeholder="Enter your phone number"></input>
              </div>
              <div>
                <label className="text-xl font-medium text-green-500">Address: </label>
                <input className="w-52 bg-[#167770] border border-purple-500  hover:border hover:border-pink-500 " name="address" id="address" placeholder="Enter your address"></input>
              </div>

              <div>
                <label  className="text-xl font-medium text-green-500" >Whatsapp: </label>
                <input className="w-52 bg-[#167770] border border-purple-500  hover:border hover:border-pink-500 " name="whatsapp" id="whatsapp" placeholder="Enter your whatsapp number"></input>
              </div>

              <div>
                <label  className="text-xl font-medium text-green-500">Imo: </label>
                <input className="w-52 bg-[#167770] border border-purple-500  hover:border hover:border-pink-500 " name="imo" id="imo" placeholder="Enter your imo number"></input>
              </div>
              <div className="flex items-center w-full justify-center">
                <button className="btn bg-primary text-black font-semibold px-6 py-2 rounded-md mt-3">Save Details</button>
              </div>
            </form>

          </div>
          {/* edit social link */}

          <div className="flex flex-col items-center gap-1 justify-center">
            <div className="mt-3">Edit Social: </div>
            <form action="" className="flex flex-col  gap-1">
              <div> <label className="text-green-500 text-xl font-medium">Facebook: </label> <input className="w-52 bg-[#167770] border border-purple-500  hover:border hover:border-pink-500 " placeholder="Enter Your facebook link" ></input> </div>
              <div> <label className="text-green-500 text-xl font-medium">Facebook: </label> <input className="w-52 bg-[#167770] border border-purple-500  hover:border hover:border-pink-500 " placeholder="Enter Your facebook link" ></input> </div>
              <div> <label className="text-green-500 text-xl font-medium">Facebook: </label> <input className="w-52 bg-[#167770] border border-purple-500  hover:border hover:border-pink-500 " placeholder="Enter Your facebook link" ></input> </div>
              <div> <label className="text-green-500 text-xl font-medium">Facebook: </label> <input className="w-52 bg-[#167770] border border-purple-500  hover:border hover:border-pink-500 " placeholder="Enter Your facebook link" ></input> </div>

              <div className="flex cursor-pointer items-center w-full justify-center">
                <button className=" bg-primary text-black font-semibold px-6 py-2 rounded-md mt-3">Save Link's</button>
              </div>
            </form>

          </div>
        </div>

        {/* edit service*/}

        <div>
          <div className="flex flex-col mt-3 items-center justify-center">Edit Service: </div>
          <div>
            <ul className="flex flex-col">
              {
                user?.service?.map((item, i) => (<div className="flex flex-row gap-3 items-center " > <li className='text-2xl text-blue-400  font-medium' key={item} >{i + 1}. {item}
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
          <form className="flex flex-col items-center"> 
            <div>
              <label></label>
              <textarea className="bg-[#167770] mt-3" placeholder="Enter Your service" ></textarea>
            </div>
            <div className="flex items-center w-full justify-center">
              <button className="text-black font-semibold cursor-pointer bg-primary px-6 py-2 rounded-md mt-3">Add</button>
            </div>
          </form>

        </div>
      </div>
    </div>
  );
}
