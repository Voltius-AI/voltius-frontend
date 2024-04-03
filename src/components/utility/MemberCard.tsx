"use client";

import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../../utils/motion";

const MemberCard = () => {
  return (
    <Tilt className=" w-24 h-24 sm:w-40 sm:h-40  border border-purple-900 rounded-lg">
      <motion.div
        variants={fadeIn("right", "spring", 0.5, 0.75)}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
      >
        <div
          // options={{
          //   max: 45,
          //   scale: 1,
          //   speed: 450,
          // }}
          className="bg-tertiary  flex justify-evenly items-center flex-col"
        >
          <img
            src={"/cc.jpg"}
            alt="web-development"
            className="w-16 h-16 rounded-lg mt-2  sm:w-32 sm:h-32 "
          />

          <h3 className="text-white text-xs mt-1 font-bold text-center  sm:mb-6">
            Chris conner
          </h3>
        </div>
      </motion.div>
    </Tilt>
  );
};

export default MemberCard;
