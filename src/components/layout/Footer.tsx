import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <>
      <hr className="mt-24 border-white" />
      <footer className="mt-10 mb-6 sm:grid sm:grid-cols-12">
        <div className="sm:col-span-4">
          <a href="" className=" text-2xl">
            <Image src={"/Voltius.png"} alt="" width={150} height={150} />
          </a>
          <div className="pt-8 space-y-2 text-3xl">
            <h1>A Revolutionary AI for</h1>
            <h1>Smart Contracts Auditing</h1>
          </div>
          <p className="pt-5 text-gray-400">All rights reserved.</p>
        </div>
        <div className="sm:col-span-5"></div>

        <div className="sm:col-span-3 flex flex-row gap-6 mt-5 ">
          <div className="space-y-5">
            <div>
              <Link href={""} className=" text-purple-500">
                Company
              </Link>
            </div>
            <div>
              <Link href={""} className="">
                Whitepaper
              </Link>
            </div>
          </div>
          <div className="space-y-5">
            <div>
              <Link href={""} className="  text-purple-500">
                Contact us
              </Link>
            </div>
            <div>
              <Link href={""} className=" underline">
                Mail ID
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
