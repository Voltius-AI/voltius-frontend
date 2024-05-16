"use client";
import React from "react";
import { BorderGradientCard } from "../ui/border-gradient-card";
import ViewObserver from "../ui/ViewObserver";
import data from "@/data.json";

const Roadmap = () => {
  return (
    <ViewObserver valueId="roadmap">
      <div
        id="roadmap"
        className="shadow-2xl h-fit overflow-clip  w-full bg-black  bg-opacity-50 bg-dot-white/[0.2] relative flex items-center justify-center"
      >
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_50%,black)]"></div>

        <div className="z-20 flex flex-col w-full max-w-screen-xl mx-5 sm:mx-10 sm:my-20 my-14">
          <h2
            style={{
              width: "fit-content",
            }}
            className=" scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl"
          >
            <svg className="h-[44px] lg:h-[60px]">
              <defs>
                <linearGradient
                  id="rainbow_r"
                  x1="0"
                  x2="60%"
                  y1="0"
                  y2="100%"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="rgb(46 145 21)" offset="0%" />
                  <stop stop-color="rgb(42 132 255)" offset="100%" />
                </linearGradient>
              </defs>
              <text fill="url(#rainbow_r)">
                <tspan font-size="1em" x="0" y="1em">
                  {data.roadmap.title}
                </tspan>
              </text>
            </svg>
          </h2>
          <h3 className="text-[#ffffffb6] drop-shadow-2xl inter-var mt-4 scroll-m-20 text-2xl font-medium tracking-tight">
            {data.roadmap.subtitle}
          </h3>
          <div className="mt-8">
            {data.roadmap.paragraphs.map((paragraph, index) => (
              <p
                key={index}
                className="text-[#ffffffb6] drop-shadow-2xl inter-var  [&:not(:first-child)]:mt-5  text-justify"
              >
                {paragraph}
              </p>
            ))}
          </div>
          <div className="mt-16 flex flex-col gap-16">
            {data.roadmap.milestones.map((item, index) => (
              <div className="flex items-start" key={item.id}>
                <div className="sm:mr-6 mr-3">
                  <h2 className="text-white mt-10 scroll-m-20 pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
                    {item.title}
                  </h2>
                  <h3 className="text-[#ffffffb6] drop-shadow-2xl inter-var  mt-2 scroll-m-20 text-2xl font-medium tracking-tight">
                    {item.subtitle}
                  </h3>
                  <p className="mt-2 text-[#ffffffb6] drop-shadow-2xl inter-var  text-justify">
                    {item.description}
                  </p>
                </div>
                <BorderGradientCard
                  className="font-mono p-3 sm:text-8xl text-6xl leading-[1] rounded-[22px] sm:p-10 bg-zinc-900 text-white"
                  containerClassName="ml-auto sticky sm:top-48 top-48  right-0 w-fit"
                >
                  0{item.id}
                </BorderGradientCard>
              </div>
            ))}
          </div>
        </div>
      </div>
    </ViewObserver>
  );
};

export default Roadmap;
