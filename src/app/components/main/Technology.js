"use client";
import React from "react";
import { WavyBackground } from "../ui/wavy-background";
import ViewObserver from "../ui/ViewObserver";
import data from "@/data.json";

const Technology = () => {
  return (
    <ViewObserver valueId="tech">
      <div
        id="tech"
        className=" min-h-[500px] overflow-hidden  flex items-center justify-stretch w-full"
      >
        <WavyBackground
          className="max-w-screen-xl mx-5 sm:mx-10 sm:my-20 my-14"
          containerClassName="w-full"
        >
          <h2
            style={{
              width: "fit-content",
            }}
            className="text-transparent drop-shadow-2xl scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl lg:leading-normal leading-normal"
          >
            <svg className="h-[44px] lg:h-[60px]">
              <defs>
                <linearGradient
                  id="rainbow_t"
                  x1="0"
                  x2="60%"
                  y1="0"
                  y2="100%"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color=" #a45f1c" offset="0%" />
                  <stop stop-color="#532aff" offset="100%" />
                </linearGradient>
              </defs>
              <text fill="url(#rainbow_t)">
                <tspan font-size="1em" x="0" y="1em">
                  {data.technology.title}
                </tspan>
              </text>
            </svg>
          </h2>
          <h3 className="text-[#ffffffb6] drop-shadow-2xl inter-var mt-4 scroll-m-20 text-2xl font-medium tracking-tight">
            {data.technology.subtitle}
          </h3>
          <div className="mt-8">
            {data.technology.paragraphs.map((paragraph, index) => (
              <p
                key={index}
                style={{
                  textShadow: "2px 6px 12px rgba(0,0,0,0.67)",
                }}
                className="text-[#ffffffb6] drop-shadow-4xl inter-var [&:not(:first-child)]:mt-5 font-normal  text-justify"
              >
                {paragraph}
              </p>
            ))}
          </div>
        </WavyBackground>
      </div>
    </ViewObserver>
  );
};

export default Technology;
