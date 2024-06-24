"use client";



import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

const Login = () => {
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);


  const router = useRouter();

  async function onSubmit(event) {
    event.preventDefault();
    try {
      setLoading(true);
      const formData = new FormData(event.currentTarget);

      const found = await performLogin(formData);

      if (found) {
        setAuth(found);
        router.push("/");
        setLoading(false);
      } else {
        setLoading(false);
        setError("Please provide a valid login credential");
      }
    } catch (err) {
      setLoading(false);
      setError(err.message);
    }
  }
  return (
    <div className="h-screen  grid place-items-center">
      <div className="max-w-[450px] w-full mx-auto p-6 border border-gray-700/20 rounded-md">
        <h4 className="font-bold text-2xl">Sign in</h4>
        <div className="my-2 text-red-500">{error}</div>
        <form className="login-form" onSubmit={onSubmit}>
          <div>
            <label htmlFor="email">Email Address</label>
            <input type="email" name="email" id="email" />
          </div>

          <div>
            <label htmlFor="password">Password</label>
            <input type="password" name="password" id="password" />
          </div>

          {loading ? (
            <button
              type="submit"
              disabled
              className="bg-[#eb4a36] py-3 rounded-md text-white w-full mt-4"
            >
              Loading...
            </button>
          ) : (
            <button
              type="submit"
              className="bg-[#eb4a36] py-3 rounded-md text-white w-full mt-4"
            >
              Login
            </button>
          )}
        </form>

        <p className="text-center text-xs text-primary">Or</p>

        <Link
          href="/register"
          className="underline text-sm mx-auto block text-blue-500 mt-4 text-center"
        >
          Create New Account
        </Link>
      </div>
    </div>
  );
};

export default Login;