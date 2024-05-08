"use client";
/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from "react";
import { BackgroundGradientAnimation } from "../ui/background-gradient-animation";
import ViewObserver from "../ui/ViewObserver";
import { useCreateWaitlistService } from "@/services/Waitlist.service";

const Hero = () => {
  const { mutate, isLoading, isSuccess } = useCreateWaitlistService();
  const [email, setEmail] = useState("");

  useEffect(() => {
    if (isSuccess) {
      setEmail("");
    }
  }, [isSuccess]);

  return (
    <BackgroundGradientAnimation className="h-full min-h-fit">
      <ViewObserver valueId={"home"}>
        <div
          id="home"
          className="mt-28 sm:mt-24 -z-50 min-h-screen h-full w-full flex flex-col items-center justify-center"
        >
          <h1 className="text-center scroll-m-20 text-6xl font-extrabold tracking-tight leading-none md:text-7xl lg:text-[5rem] xl:text-8xl opacity-85">
            <span>Elevating Blockchain</span>
            <span>
              <br />
            </span>
            <span className="sm:whitespace-nowrap flex flex-nowrap items-baseline justify-center">
              Integrity{" "}
              <span className="text-base font-normal tracking-normal">
                with
              </span>
              <svg
                className="h-[60px] md:h-[72px] lg:h-[80px] xl:h-[96px] w-[60px] md:w-[72px] lg:w-[80px] xl:w-[96px]"
              >
                <defs>
                  <linearGradient
                    id="rainbow"
                    x1="0"
                    x2="50"
                    y1="0"
                    y2="100%"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="rgb(54 208 232)" offset="0%" />
                    <stop stop-color="rgb(228 99 223)" offset="100%" />
                  </linearGradient>
                </defs>
                <text fill="url(#rainbow)">
                  <tspan font-size="1em" x="0" y="1em">
                    Ai
                  </tspan>
                </text>
              </svg>
            </span>
          </h1>
          <h4 className="mt-7 scroll-m-20 font-semibold tracking-tight opacity-75 lg:text-2xl] xl:text-3xl  text-xl mx-6 text-center">
            Revolutionizing Smart Contract Security
          </h4>

          <div className="mt-12 flex gap-4 sm:flex-row flex-col">
            <input
              type="text"
              className="bg-slate-300 bg-opacity-75 rounded-lg xl:text-lg text-base outline-none px-4 py-2 text-indigo-950 font-medium placeholder:text-indigo-950"
              placeholder="Enter your email..."
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button
              onClick={() => mutate({ email })}
              className="bg-slate-400 bg-opacity-60 rounded-lg px-4 py-2 font-medium xl:text-base text-sm tracking-wide"
              disabled={isLoading}
            >
              {isLoading ? "Loading..." : "Join Waitlist"}
            </button>
          </div>

          <img
            src="/blockchain-illustration.svg"
            alt=""
            srcset=""
            className="w-1/2 mt-10 max-w-[500px] sm:w-1/4 sm:mt-16 animate-moveVertical animate-moveInCircle animate-moveInCircle sm:animate-moveInCircle sm:animate-moveVertical"
          />
        </div>
      </ViewObserver>
    </BackgroundGradientAnimation>
  );
};

export default Hero;
