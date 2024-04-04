"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed top-5 left-0 right-0 ml-5 mr-5 sm:ml-16 sm:mr-16 z-50 grid grid-cols-12 gap-2 sm:grid-cols-12 border-2 justify-center items-center border-rose-500 mt-10 rounded-xl pt-4 pb-4  transition-all duration-300 ${
        isScrolled ? "backdrop-blur-md" : ""
      }`}
    >
      <a href="" className="col-span-5 sm:col-span-6 sm:ml-4 text-2xl ml-1">
        <Image src={"/Voltius.png"} alt="" width={100} height={100} />
      </a>
      <nav className="col-span-7 sm:col-span-6 flex flex-row gap-2 items-center mr-2">
        <Link href={""} className="pl-2">
          Contact us
        </Link>
        <Link href={""} className=" p-2 border-2 border-rose-500 rounded-lg">
          Whitepaper
        </Link>
      </nav>
    </header>
  );
};

export default Header;
