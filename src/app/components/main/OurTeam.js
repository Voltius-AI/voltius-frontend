"use client";
import React from "react";
import { DirectionAwareHover } from "../ui/direction-aware-hover";
import ViewObserver from "../ui/ViewObserver";
import data from "@/data.json";

const OurTeam = () => {
  return (
    <ViewObserver valueId="our_team">
      <div
        id="our_team"
        className="shadow-2xl h-fit overflow-clip  w-full bg-black  bg-opacity-50 bg-dot-white/[0.2] relative flex items-center justify-center"
      >
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_50%,black)]"></div>

        <div className="z-20 flex flex-col w-full max-w-screen-xl mx-5 sm:mx-10 sm:my-20 my-14">
          <h2
            style={{
              width: "fit-content",
              "-webkit-text-fill-color": "transparent",
              backgroundImage:
                "linear-gradient(to right, rgb(195 225 27) 0%, rgb(255 42 42) 100%)",
            }}
            className="bg-clip-text bg-[#2D68CF] scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl"
          >
            {data.our_team.title}
          </h2>
          <h3 className="bg-clip-text text-transparent drop-shadow-2xl bg-gradient-to-b from-white/90 to-white/60 inter-var  mt-4 scroll-m-20 text-2xl font-medium tracking-tight">
            {data.our_team.subtitle}
          </h3>
          <div className="mt-8">
            {data.our_team.paragraphs.map((paragraph, index) => (
              <p
                key={index}
                className="bg-clip-text text-transparent drop-shadow-2xl bg-gradient-to-b from-white/90 to-white/80 inter-var  [&:not(:first-child)]:mt-5  text-justify"
              >
                {paragraph}
              </p>
            ))}
          </div>
          <div className="mt-16 flex gap-5 flex-wrap items-center justify-center">
            {data.our_team.list.map((item, index) => (
              <DirectionAwareHover imageUrl={item.imageUrl} key={item.id}>
                <p className="font-bold text-2xl leading-relaxed ">
                  {item.name}
                </p>
                <a href={item.linkedIn} className="ml-auto text-3xl ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 48 48"
                    width="30px"
                    height="30px"
                  >
                    <path
                      fill="#fff"
                      d="M8.421,14h0.052l0,0C11.263,14,13,12,13,9.5C12.948,6.945,11.263,5,8.526,5S4,6.945,4,9.5 C4,12,5.736,14,8.421,14z M4,17h9v26H4V17z M44,26.5c0-5.247-4.253-9.5-9.5-9.5c-3.053,0-5.762,1.446-7.5,3.684V17h-9v26h9V28l0,0 c0-2.209,1.791-4,4-4s4,1.791,4,4v15h9C44,43,44,27.955,44,26.5z"
                    />
                  </svg>
                </a>
              </DirectionAwareHover>
            ))}
          </div>
        </div>
      </div>
    </ViewObserver>
  );
};

export default OurTeam;
