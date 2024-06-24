"use client";
import { registerUser } from "@/actions";
// import { registerUser } from "@/action";
import Link from "next/link";
import { useState } from "react";

const SingUp = () => {
  const [error, setError] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const handleFrom = (event) => {
    event.preventDefault();
    setFormData({ ...formData, [event.target.name]: event.target.value });
    if (
      
      formData.name.length === 0 ||
      formData.email.length === 0 ||
      formData.password.length === 0
    ) {
      setError("Please provide all the required fields");
    } else {
      setError("");
    }
  };
  // console.log(formData) 




  return (
    <div className="h-screen grid  place-items-center">
      <div className="max-w-[450px] w-full mx-auto p-6 border border-gray-700/20 rounded-md">
        <h4 className="font-bold text-2xl">Sign Up</h4>

        <form className="login-form " action={registerUser}>
          

          <div>
            <label htmlFor="name">Name</label>
            <input className="text-gray-900 font-medium"
              type="text"
              name="name"
              id="name"
              onChange={handleFrom}
            />
          </div>
          <div>
            <label htmlFor="email">Email Address</label>
            <input className="text-gray-900 font-medium" type="email" name="email" id="email" onChange={handleFrom} />
          </div>

          <div>
            <label htmlFor="password">Password</label>
            <input className="text-gray-900 font-medium"
              type="password"
              name="password"
              id="password"
              onChange={handleFrom}
            />
          </div>
          <div className="my-2 text-red-500 text-center">{error}</div>
          {error ? (
            <button
              type="submit"
              disabled
              className="bg-gray-400 py-3 rounded-md text-white w-full mt-4"
            >
              Create Account
            </button>
          ) : (
            <button
              type="submit"
              className="bg-[#eb4a36] py-3 rounded-md text-white w-full mt-4"
            >
              Create Account
            </button>
          )}
        </form>

        <p className="text-center text-xs text-primary">Or</p>

        <Link
          href="/login"
          className="underline text-sm mx-auto block text-blue-500 mt-4 text-center"
        >
          Login
        </Link>
      </div>
    </div>
  );
};

export default SingUp;