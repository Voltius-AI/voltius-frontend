import React from "react";
import { Button } from "../ui/button";
import Timeline from "../utility/Timeline";
import MemberCard from "../utility/MemberCard";

const Hero = () => {
  return (
    <section className="mt-24 relative z-0">
      <div className="text-4xl space-y-4">
        <h1>
          <span className="border border-rose-400 rounded-lg pl-1 pr-1 hover:border-none hover:text-yellow-100 hover:mr-[1.5px]">
            Revolutionary
          </span>
          <span className="ml-2.5">AI for</span>
        </h1>
        <h1 className="text-[#6842f4]">SMART CONTRACT</h1>
        <h1>
          <span className="border border-rose-400 rounded-lg pl-1 pr-1 text-[#6842f4] hover:border-none hover:ml-[1px]">
            Auditing.
          </span>
        </h1>
        <Button className="bg-[#6842f4] border border-white text-white">
          Read Whitepaper
        </Button>
      </div>
      <hr className="mt-24 border-white" />
      <div className="mt-20">
        <p className="mt-10 text-center text-2xl leading-relaxed mb-6 whitespace-pre-wrap">
          We specialize in advanced smart contract verification, employing
          cutting-edge AI algorithms to ensure the integrity and
          <br />
          reliability of blockchain transactions. Our approach is not just about
          safeguarding digital assets; it's about empowering the
          <br />
          entire blockchain ecosystem to reach its full potential.
          <br />
          In this rapidly evolving digital era, Voltius is committed to
          innovation, excellence, and ethics. We are not just building
          <br />
          technology; we are shaping the future of DeFi.
        </p>
        <div className="flex gap-10 mt-8 justify-center">
          <Button className="p-4 bg-[#6842f4] border border-white text-white">
            How it works
          </Button>
          <Button className="p-4 border border-[#6842f4]  text-[#6842f4] ">
            Contact us
          </Button>
        </div>
      </div>
      <hr className="mt-24 border-white" />
      <div className="mt-40">
        <h1 className="flex justify-center text-center text-5xl text-[#6842f4]">
          SMART CONTRACTS
        </h1>
        <p className="mt-10 text-center text-2xl leading-relaxed mb-6 whitespace-pre-wrap">
          We specialize in advanced smart contract verification, employing
          cutting-edge AI algorithms to ensure the integrity and
          <br />
          reliability of blockchain transactions. Our approach is not just about
          safeguarding digital assets; it's about empowering the
          <br />
          entire blockchain ecosystem to reach its full potential.
          <br />
          In this rapidly evolving digital era, Voltius is committed to
          innovation, excellence, and ethics. We are not just building
          <br />
          technology; we are shaping the future of DeFi.
        </p>
      </div>
      <hr className="mt-24 border-white" />
      <div className="mt-40">
        <h1 className="flex justify-center text-center text-5xl text-[#6842f4]">
          OUR ROADMAP
        </h1>
        <Timeline />
      </div>
      <hr className="mt-24 border-white" />
      <div className="mt-40">
        <h1 className="flex justify-center text-5xl text-[#6842f4] mb-14">
          OUR TEAM
        </h1>
        <div className=" grid grid-cols-2 gap-3 gap-y-10 ml-10 md:grid-cols-3 lg:grid-cols-4 lg:gap-4 sm:ml-20">
          <MemberCard />
          <MemberCard />
          <MemberCard />
          <MemberCard />
        </div>
      </div>
      <hr className="mt-24 border-white" />
      <div className="mt-40">
        <h1 className="flex justify-center text-center text-5xl text-[#6842f4]">
          RECENT BLOGS
        </h1>
        <Button className=" border border-[#6842f4] text-[#6842f4]">
          Read All
        </Button>
      </div>
    </section>
  );
};

export default Hero;
