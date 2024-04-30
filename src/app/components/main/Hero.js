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
          className=" -z-50 min-h-screen h-full w-full flex flex-col items-center justify-center gap-8 lg:gap-12 mt-40"
        >
          <h1 className="text-center scroll-m-20 text-6xl font-extrabold tracking-tight leading-none lg:text-8xl opacity-85">
            <span>Elevating Blockchain</span>
            <span>
              <br />
            </span>
            <span>Integrity</span>
          </h1>
          <h4 className="scroll-m-20 text-2xl font-semibold tracking-tight opacity-75 lg:text-3xl mx-6 text-center">
            Revolutionizing Smart Contract Security
          </h4>

          <div className="flex gap-4">
            <input
              type="text"
              className="bg-slate-300 bg-opacity-75 rounded-lg text-xl outline-none px-4 py-2 w-96 text-indigo-950 font-medium placeholder:text-indigo-950"
              placeholder="Enter your email..."
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button
              onClick={() => mutate({ email })}
              className="bg-slate-400 bg-opacity-60 rounded-lg px-4 font-medium"
              disabled={isLoading}
            >
              {isLoading ? "Loading..." : "Join Waitlist"}
            </button>
          </div>

          <div className="absolute bottom-3 right-3">
            <a
              href="https://docsend.com/view/9jgbtiig65yamrew"
              rel="noopener"
              target="_blank"
              className="text-xs box-border content-center items-center flex flex-row flex-nowrap gap-2.5 h-auto justify-center overflow-visible relative no-underline w-auto opacity-100 p-0 rounded-[19px]"
            >
              <div className=" text-xs box-border content-center items-center cursor-pointer flex flex-none flex-row flex-nowrap gap-2.5 justify-center overflow-hidden relative will-change-[var(--framer-will-change-override,transform)] z-[2] bg-[rgba(255,255,255,0.1)] shadow-[rgba(0,0,0,0.075)_0px_0.78363px_2.66434px_-0.535714px,rgba(0,0,0,0.075)_0px_1.91965px_6.5268px_-1.07143px,rgba(0,0,0,0.07)_0px_3.63745px_12.3673px_-1.60714px,rgba(0,0,0,0.067)_0px_6.35004px_21.5902px_-2.14286px,rgba(0,0,0,0.063)_0px_11.0519px_37.5764px_-2.67857px,rgba(0,0,0,0.05)_0px_20.2428px_68.8256px_-3.21429px,rgba(0,0,0,0.024)_0px_40px_136px_-3.75px] opacity-100 p-[4px] sm:rounded-[23px] rounded-[19px]">
                <div className="bg-white sm:px-[30px] sm:py-4 px-[20px] py-3  sm:rounded-[19px] rounded-[15px] text-xs cursor-pointer box-border flex-none h-auto relative whitespace-pre w-auto z-[2] flex flex-col justify-start shrink-0 opacity-100">
                  <p className="text-black font-semibold text-lg flex items-center gap-2">
                    White Paper{" "}
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 15 15"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M3.64645 11.3536C3.45118 11.1583 3.45118 10.8417 3.64645 10.6465L10.2929 4L6 4C5.72386 4 5.5 3.77614 5.5 3.5C5.5 3.22386 5.72386 3 6 3L11.5 3C11.6326 3 11.7598 3.05268 11.8536 3.14645C11.9473 3.24022 12 3.36739 12 3.5L12 9.00001C12 9.27615 11.7761 9.50001 11.5 9.50001C11.2239 9.50001 11 9.27615 11 9.00001V4.70711L4.35355 11.3536C4.15829 11.5488 3.84171 11.5488 3.64645 11.3536Z"
                        fill="currentColor"
                        fillRule="evenodd"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </p>
                </div>
              </div>
            </a>
          </div>
          <img
            src="/blockchain-illustration.svg"
            alt=""
            srcset=""
            className="w-1/2 mt-16 max-w-[500px] sm:w-1/3 sm:mt-20 animate-moveVertical animate-moveInCircle animate-moveInCircle sm:animate-moveInCircle sm:animate-moveVertical"
          />
        </div>
      </ViewObserver>
    </BackgroundGradientAnimation>
  );
};

export default Hero;
