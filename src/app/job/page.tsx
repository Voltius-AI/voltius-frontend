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
      <div className="mt-10 space-y-5">
        <div className="flex border border-[#6842f4] rounded-lg p-4 items-center">
          <h1>Marketing Director</h1>
          <p className="ml-80">Full Time | Remote</p>
          <Button className=" border ml-44 border-[#6842f4] text-white">
            Read More
          </Button>
        </div>
        <div className="flex border border-[#6842f4] rounded-lg p-4 items-center">
          <h1>Branding Manager</h1>
          <p className="ml-80">Full Time | Remote</p>
          <Button className="bg-black border ml-44 border-[#6842f4] text-white">
            Read More
          </Button>
        </div>
        <div className="flex border border-[#6842f4] rounded-lg p-4 items-center">
          <h1 className="mr-12">PR Manager</h1>
          <p className="ml-80">Full Time | Remote</p>
          <Button className="bg-black border ml-44 border-[#6842f4] text-white">
            Read More
          </Button>
        </div>
      </div>
    </>
  );
};

export default page;
