import React from 'react'

const UpdateContact = () => {
  return (
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
  )
}

export default UpdateContact