import { Button } from "@heroui/button";
import Link from "next/link";
import React from "react";
const loginpage = () => {
  return (
    <div >
    <div className=" border-2 min-h-screen flex ">
      {/* left side */}
      <div className="w-1/2 flex flex-col justify-center items-center bg-white ">
        <h2 className="text-3xl font-bold mb-2">Login to Your Account</h2>
        <p className="text-gray-500 mb-6">Login using social networks</p>

        <div className="flex space-x-4 mb-6">
          <button className="bg-red-500 text-white rounded-full p-3">
            Google
          </button>
        </div>

        <div className="flex items-center w-full max-w-sm mb-6">
          <hr className="flex-grow border-gray-300" />
          <span className="mx-2 text-gray-400">OR</span>
          <hr className="flex-grow border-gray-300" />
        </div>

        <form className="flex flex-col w-full max-w-sm space-y-4">
          <input
            type="email"
            placeholder="Email"
            className="border rounded-lg p-3 w-full bg-gray-100 focus:outline-none"
          />
          <div>
            <input
              type="password"
              placeholder="Password"
              className="border rounded-lg p-3 w-full bg-gray-100 focus:outline-none"
            />
          </div>
          <Button
            as={Link}
            href="/"
            className="bg-green-400 hover:bg-green-500 text-white font-semibold py-3 rounded-lg"
          >
            Sign In
          </Button>
        </form>
      </div>

      <div className="w-1/2 bg-gradient-to-br from-green-400 to-teal-500 flex flex-col justify-center items-center text-white  ">
        {/* Content */}
        <h2 className="text-4xl font-bold mb-4">New Here?</h2>
        <p className="text-center max-w-md mb-8">
          Sign up and discover our Handmade product!
        </p>
        <Button
          // as={Link}
          // href="/"
          className="bg-white text-green-500 font-semibold rounded-full hover:bg-gray-100"
        >
          Sign Up
        </Button>
      </div>
    </div>
    </div>
  );
};

export default loginpage;
