import Image from "next/image";
import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <header className="flex items-center max-w-7xl mx-auto border-2 border-rose-500 mt-10 rounded-lg pt-5 pb-5 ">
      <a href="" className="pl-20 text-2xl">
        <Image src={"/Voltius.png"} alt="" width={100} height={100} />
      </a>
      <nav>
        <Link href={""} className="pl-72">
          Contact us
        </Link>
        <Link
          href={""}
          className="ml-10 p-2 border-2 border-rose-500 rounded-lg"
        >
          Whitepaper
        </Link>
      </nav>
    </header>
  );
};

export default Header;
