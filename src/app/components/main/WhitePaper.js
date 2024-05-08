"use client";
import React from "react";
import ViewObserver from "../ui/ViewObserver";
import data from "@/data.json";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const animate = true;

const WhitePaper = () => {
  const variants = {
    initial: {
      backgroundPosition: "0 50%",
    },
    animate: {
      backgroundPosition: ["0, 50%", "100% 50%", "0 50%"],
    },
  };
  return (
    <ViewObserver valueId="white_paper">
      <div
        id="white_paper"
        className="overflow-clip min-h-screen shadow-2xl h-fit  w-full bg-black  bg-opacity-50 bg-dot-white/[0.2] relative flex items-center justify-center"
      >
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_50%,black)]"></div>

        <div className="letter text-black p-1 flex flex-col w-full max-w-screen-xl mx-1 sm:mx-10 sm:my-20 my-2">
          <div className="bg-black text-gray-300 opacity-70 backdrop-blur-3xl z-40 px-6 py-8">
            <h2
              className={cn(
                "will-change-transform scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-6xl"
                // "bg-[radial-gradient(circle_farthest-side_at_0_100%,#00ccb1,transparent),radial-gradient(circle_farthest-side_at_100%_0,#7b61ff,transparent),radial-gradient(circle_farthest-side_at_100%_100%,#ffc414,transparent),radial-gradient(circle_farthest-side_at_0_0,#1ca0fb,#141316)]",
                // "bg-[radial-gradient(circle_farthest-side_at_0_100%,#00ccb1,transparent),radial-gradient(circle_farthest-side_at_100%_0,#7b61ff,transparent),radial-gradient(circle_farthest-side_at_100%_100%,#ffc414,transparent),radial-gradient(circle_farthest-side_at_0_0,#1ca0fb,#141316)]"
              )}
            >
              <svg className="h-[44px] lg:h-[60px]">
                <defs>
                  <linearGradient
                    id="rainbow_w"
                    x1="0"
                    x2="80%"
                    y1="0"
                    y2="100%"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="rgb(42 255 247)" offset="0%" />
                    <stop stop-color="rgb(126 21 145)" offset="100%" />
                  </linearGradient>
                </defs>
                <text fill="url(#rainbow_w)">
                  <tspan font-size="1em" x="0" y="1em">
                    {data.whitepaper.title}
                  </tspan>
                </text>
              </svg>
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
              <p className="[sm:&:not(:first-child)]:mt-8 &:not(:first-child)]:mt-4  text-justify text-base">
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
          <motion.div
            variants={animate ? variants : undefined}
            initial={animate ? "initial" : undefined}
            animate={animate ? "animate" : undefined}
            transition={
              animate
                ? {
                    duration: 5,
                    repeat: Infinity,
                    repeatType: "reverse",
                  }
                : undefined
            }
            style={{
              backgroundSize: animate ? "400% 400%" : undefined,
            }}
            className={cn(
              "absolute inset-0 opacity-60 group-hover:opacity-100 blur-xl  transition duration-500 will-change-transform",
              "bg-[radial-gradient(circle_farthest-side_at_0_100%,#00ccb1,transparent),radial-gradient(circle_farthest-side_at_100%_0,#7b61ff,transparent),radial-gradient(circle_farthest-side_at_100%_100%,#ffc414,transparent),radial-gradient(circle_farthest-side_at_0_0,#1ca0fb,#141316)]"
            )}
          />
          <motion.div
            variants={animate ? variants : undefined}
            initial={animate ? "initial" : undefined}
            animate={animate ? "animate" : undefined}
            transition={
              animate
                ? {
                    duration: 5,
                    repeat: Infinity,
                    repeatType: "reverse",
                  }
                : undefined
            }
            style={{
              backgroundSize: animate ? "400% 400%" : undefined,
            }}
            className={cn(
              "absolute inset-0 will-change-transform",
              "bg-[radial-gradient(circle_farthest-side_at_0_100%,#00ccb1,transparent),radial-gradient(circle_farthest-side_at_100%_0,#7b61ff,transparent),radial-gradient(circle_farthest-side_at_100%_100%,#ffc414,transparent),radial-gradient(circle_farthest-side_at_0_0,#1ca0fb,#141316)]"
            )}
          />
        </div>
      </div>
    </ViewObserver>
  );
};

export default WhitePaper;
