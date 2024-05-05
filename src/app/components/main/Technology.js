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
              "-webkit-text-fill-color": "transparent",
              backgroundImage:
                "linear-gradient(to right, #a45f1c 0%, #532aff 100%)",
            }}
            className="bg-clip-text bg-[#2D68CF] text-transparent drop-shadow-2xl scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl lg:leading-normal leading-normal"
          >
            {data.technology.title}
          </h2>
          <h3 className="bg-clip-text text-transparent drop-shadow-2xl bg-gradient-to-b from-white/90 to-white/60 inter-var mt-4 scroll-m-20 text-2xl font-medium tracking-tight">
            {data.technology.subtitle}
          </h3>
          <div className="mt-8">
            {data.technology.paragraphs.map((paragraph, index) => (
              <p
                key={index}
                style={{
                  textShadow: "2px 6px 12px rgba(0,0,0,0.67)",
                }}
                className="bg-clip-text text-transparent drop-shadow-4xl bg-gradient-to-b from-white/90 to-white/80 inter-var  [&:not(:first-child)]:mt-5 font-normal  text-justify"
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
