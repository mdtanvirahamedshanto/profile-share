import React from 'react'

const UpdateSocial = () => {
  return (
    <div className="flex flex-col items-center gap-1 justify-center">
    <div className="mt-3">Edit Social: </div>
    <form action="" className="flex flex-col  gap-1">
      <div> <label className="text-green-500 text-xl font-medium">Facebook: </label> <input className="w-52 bg-[#167770] border border-purple-500  hover:border hover:border-pink-500 " placeholder="Enter Your facebook link" ></input> </div>
      <div> <label className="text-green-500 text-xl font-medium">Instagram: </label> <input className="w-52 bg-[#167770] border border-purple-500  hover:border hover:border-pink-500 " placeholder="Enter Your facebook link" ></input> </div>
      <div> <label className="text-green-500 text-xl font-medium">Talegram: </label> <input className="w-52 bg-[#167770] border border-purple-500  hover:border hover:border-pink-500 " placeholder="Enter Your facebook link" ></input> </div>
      <div> <label className="text-green-500 text-xl font-medium">Twitter: </label> <input className="w-52 bg-[#167770] border border-purple-500  hover:border hover:border-pink-500 " placeholder="Enter Your facebook link" ></input> </div>

      <div className="flex cursor-pointer items-center w-full justify-center">
        <button className=" bg-primary text-black font-semibold px-6 py-2 rounded-md mt-3">Save Link's</button>
      </div>
    </form>

  </div>
  )
}

export default UpdateSocial