import { Button } from "@/components/ui/button";
import React from "react";

const page = () => {
  return (
    <>
      <div className="mt-32">
        <h1 className="text-4xl text-purple-500">Hello!</h1>
        <p className="text-2xl mt-2">Hope you are doing well!</p>
        <p className="mt-4">
          Please fill this form and someone from our team will get back to you
        </p>
      </div>
      <div className="mt-8 w-full max-w-md">
        <form className="flex flex-col space-y-4">
          <div className="flex space-x-4">
            <input
              type="text"
              placeholder="First Name*"
              className="w-full px-4 py-2 border bg-black border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
            <input
              type="text"
              placeholder="Last Name"
              className="w-full px-4 py-2 border bg-black border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>
          <input
            type="email"
            placeholder="Email ID*"
            className="w-full px-4 py-2 border bg-black border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
          <input
            type="text"
            placeholder="Where did you hear about us?"
            className="w-full px-4 py-2 border bg-black border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
          <Button className="border border-rose-500 bg-black text-white">
            Confirm
          </Button>
        </form>
      </div>
      <p className="mt-8">Thank You! Meet you in your mailbox.</p>
    </>
  );
};

export default page;
