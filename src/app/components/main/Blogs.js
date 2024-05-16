/* eslint-disable @next/next/no-img-element */
"use client";

import React from "react";
import StyledSlider from "../ui/styled-slider";
import { BorderGradientCardUnified } from "../ui/border-gradient-card-unified";
import ViewObserver from "../ui/ViewObserver";
import useBlogListService from "@/services/blogList.service";
import { format } from "date-fns";

const Blogs = () => {
  const { ContentList, fetchNextPage, hasNextPage } = useBlogListService();

  return (
    <ViewObserver valueId="blog">
      <div
        id="blog"
        className="shadow-2xl h-fit overflow-clip  w-full bg-black  bg-opacity-50 bg-dot-white/[0.2] relative flex items-center justify-center flex-col"
      >
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_50%,black)]"></div>

        <div
          style={{
            width: "calc(100% - 2.5rem)",
          }}
          className="z-20 flex flex-col max-w-screen-xl  ml-[2.5rem] mr-[2.5rem] mb-3"
        >
          <h2
            style={{
              width: "fit-content",
            }}
            className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl lg:leading-tight leading-normal"
          >
            <svg className="h-[44px] lg:h-[60px]">
              <defs>
                <linearGradient
                  id="rainbow_b"
                  x1="0"
                  x2="50"
                  y1="0"
                  y2="100%"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="rgb(249 3 219)" offset="0%" />
                  <stop stop-color="rgb(255 172 42)" offset="100%" />
                </linearGradient>
              </defs>
              <text fill="url(#rainbow_b)">
                <tspan font-size="1em" x="0" y="1em">
                  Blog
                </tspan>
              </text>
            </svg>
          </h2>

          <h3 className="text-[#ffffffb6] drop-shadow-2xl inter-var mt-4 scroll-m-20 text-2xl font-medium tracking-tight">
            Next-Generation Blockchain Intelligence Insights
          </h3>
        </div>
        <StyledSlider
          List={ContentList}
          CardComponent={Card}
          fetchNextPage={fetchNextPage}
          hasNextPage={hasNextPage}
        />
      </div>
    </ViewObserver>
  );
};

const Card = ({ item }) => {
  return (
    <BorderGradientCardUnified className="flex flex-col w-72 h-full p-4 bg-black bg-opacity-85 rounded-2xl shadow-2xl">
      <img
        src={item.imageUrl}
        alt=""
        className="aspect-16/9 w-full h-auto mb-4 rounded-xl"
      />
      <h4 className="text-xl font-semibold tracking-wide text-white">
        {item.title}
      </h4>
      <p className="text-base font-normal line-clamp-6 tracking-wide text-white">
        {item.description}
      </p>
      <hr className="h-px  my-4 border-0 bg-gray-700"></hr>
      <div className="flex justify-between">
        <p className="text-base font-medium text-white">
          {format(item.createdAt, "PPP")}
        </p>

        <a
          className="text-indigo-700"
          href={item.blogUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          Read More
        </a>
      </div>
    </BorderGradientCardUnified>
  );
};

export default Blogs;
