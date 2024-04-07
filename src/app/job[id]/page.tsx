import { Button } from "@/components/ui/button";
import React from "react";

const page = () => {
  return (
    <>
      <div className="mt-32">
        <h1 className="text-4xl text-[#6842f4]">Open Positions</h1>
        <p className="text-2xl mt-10">
          Join our dynamic team in AI auditing! Explore exciting career
          opportunities and make a mark in shaping responsible AI use. Be part
          of our innovative journey today!
        </p>
      </div>
      <div className="mt-6 flex gap-8">
        <Button className="bg-[#6842f4] border border-white text-white">
          Marketing
        </Button>
        <Button className="border border-[#6842f4] text-white">
          Engineering
        </Button>
        <Button className="border border-[#6842f4] text-white">
          Community
        </Button>
        <Button className="border  border-[#6842f4] text-white">Others</Button>
      </div>
      <div className="mt-10">
        <p className="text-2xl">
          Sorry! We are not hiring for this role right now
        </p>
        <form action="" className="flex flex-col space-y-4 mt-10">
          <input
            type="text"
            placeholder="Email Id*"
            className="bg-black border border-white rounded-lg p-2 pr-10"
          />
          <Button className="bg-black border border-rose-500 text-white w-32">
            Confirm
          </Button>
        </form>
        <p className="mt-8">Enter your email to stay updated about this role</p>
      </div>
    </>
  );
};

export default page;
