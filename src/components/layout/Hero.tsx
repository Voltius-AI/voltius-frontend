import React from "react";
import { Button } from "../ui/button";
import Timeline from "../utility/Timeline";
import MemberCard from "../utility/MemberCard";

const Hero = () => {
  return (
    <section className="mt-24 relative z-0">
      <div className="text-4xl space-y-4">
        <h1>
          <span className="border border-rose-400 rounded-lg pl-1 pr-1">
            Revolutionary
          </span>{" "}
          AI for
        </h1>
        <h1 className="text-purple-500">SMART CONTRACT</h1>
        <h1>
          <span className="border border-rose-400 rounded-lg pl-1 pr-1 text-purple-500">
            Auditing.
          </span>
        </h1>
        <Button className="bg-purple-500 border border-white text-white">
          Read Whitepaper
        </Button>
      </div>
      <hr className="mt-24 border-white" />
      <div className="mt-20">
        <p>
          We specialize in advanced smart contract verification, employing
          cutting-edge AI algorithms to ensure the integrity and reliability of
          blockchain transactions. Our approach is not just about safeguarding
          digital assets; it’s about empowering the entire blockchain ecosystem
          to reach its full potential. In this rapidly evolving digital era,
          Voltius is committed to innovation, excellence, and ethics. We are not
          just building technology; we are shaping the future of DeFi.
        </p>
        <div className="flex gap-10 mt-8 justify-center">
          <Button className="p-4 bg-purple-500 border border-white text-white">
            How it works
          </Button>
          <Button className="p-4 border border-purple-500  text-purple-500 bg-black">
            Contact us
          </Button>
        </div>
      </div>
      <hr className="mt-24 border-white" />
      <div className="mt-40">
        <h1 className="flex justify-center text-center text-5xl text-purple-500">
          SMART CONTRACTS
        </h1>
        <p className="pt-10">
          We specialize in advanced smart contract verification, employing
          cutting-edge AI algorithms to ensure the integrity and reliability of
          blockchain transactions. Our approach is not just about safeguarding
          digital assets; it’s about empowering the entire blockchain ecosystem
          to reach its full potential. In this rapidly evolving digital era,
          Voltius is committed to innovation, excellence, and ethics. We are not
          just building technology; we are shaping the future of DeFi.
        </p>
      </div>
      <hr className="mt-24 border-white" />
      <div className="mt-40">
        <h1 className="flex justify-center text-center text-5xl text-purple-500">
          OUR ROADMAP
        </h1>
        <Timeline />
      </div>
      <hr className="mt-24 border-white" />
      <div className="mt-40">
        <h1 className="flex justify-center text-5xl text-purple-500 mb-14">
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
        <h1 className="flex justify-center text-center text-5xl text-purple-500">
          RECENT BLOGS
        </h1>
      </div>
    </section>
  );
};

export default Hero;
