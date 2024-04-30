"use client";
import React from "react";
import ViewObserver from "../ui/ViewObserver";
import data from "@/data.json";

const About = () => {
  return (
    <ViewObserver valueId="about">
      <div
        id="about"
        className="shadow-2xl rounded-t-3xl h-fit overflow-clip  w-full bg-black  bg-opacity-50 bg-dot-white/[0.2] relative flex items-center justify-center"
      >
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_50%,black)]"></div>

        <div className="z-20 flex flex-col w-full max-w-screen-xl mx-5 sm:mx-10 sm:my-20 my-14">
          <h2
            style={{
              width: "fit-content",
              "-webkit-text-fill-color": "transparent",
              backgroundImage:
                "linear-gradient(to right, rgb(145 21 128) 0%, rgb(83, 42, 255) 100%)",
            }}
            className="bg-clip-text bg-[#2D68CF] scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl"
          >
            {data.about.title}
          </h2>
          <h3 className="bg-clip-text text-transparent drop-shadow-2xl bg-gradient-to-b from-white/90 to-white/60 inter-var  mt-4 scroll-m-20 text-2xl font-medium tracking-tight">
            {data.about.subtitle}
          </h3>
          <div className="flex flex-col gap-5 mt-10 items-start">
            <iframe
              className="shadow-lg aspect-[16/9] w-full max-w-[830px] sm:mx-auto"
              frameBorder="0"
              allowFullScreen=""
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              title="Voltius"
              src="https://www.youtube-nocookie.com/embed/HcMHCP65lk0?controls=1&amp;rel=0&amp;playsinline=0&amp;modestbranding=1&amp;autoplay=0&amp;enablejsapi=1&amp;origin=https%3A%2F%2Fvoltius.ai&amp;widgetid=1"
              id="widget2"
            />
            <div className="mt-8">
              {data.about.paragraphs.map((paragraph, index) => (
                <p
                  key={index}
                  className="bg-clip-text text-transparent drop-shadow-2xl bg-gradient-to-b from-white/90 to-white/80 inter-var  [&:not(:first-child)]:mt-5  text-justify"
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </ViewObserver>
  );
};

export default About;
