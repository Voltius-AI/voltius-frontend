"use client";
import React from "react";
import ViewObserver from "../ui/ViewObserver";
import data from "@/data.json";

const WhitePaper = () => {
  return (
    <ViewObserver valueId="white_paper">
      <div
        id="white_paper"
        className="min-h-screen shadow-2xl h-fit  w-full bg-black  bg-opacity-50 bg-dot-white/[0.2] relative flex items-center justify-center"
      >
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_50%,black)]"></div>

        <div className="letter text-black flex flex-col w-full max-w-screen-xl mx-2 sm:mx-10 sm:my-20 my-4">
          <h2
            style={{
              "-webkit-text-fill-color": "transparent",
              backgroundImage:
                "linear-gradient(to right, #1c4ea4 0%, rgb(17 142 179 / 80%) 100%)",
            }}
            className="bg-clip-text bg-[#2D68CF]  scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-6xl"
          >
            {data.whitepaper.title}
          </h2>
          <h3 className="mt-4 scroll-m-20 sm:text-3xl text-2xl font-medium tracking-tight">
            {data.whitepaper.subtitle}
          </h3>
          <div className="mt-10 items-start">
            {data.whitepaper.paragraphs.map((paragraph, index) => (
              <p
                key={index}
                className="[&:not(:first-child)]:mt-8  text-justify text-base"
              >
                {paragraph}
              </p>
            ))}
            <p className="[&:not(:first-child)]:mt-8  text-justify text-base">
              For a deep dive into our technology and vision, download the
              complete Voltius whitepaper{" "}
              <a
                href="https://docsend.com/view/9jgbtiig65yamrew"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 underline"
              >
                here
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </ViewObserver>
  );
};

export default WhitePaper;
