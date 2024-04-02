"use client";

import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../../utils/motion";

const MemberCard = () => {
  return (
    <Tilt className=" w-15 h-15 sm:w-60 sm:h-60  border border-purple-900 rounded-lg">
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
          className="bg-tertiary rounded-[20px]  px-1 min-h-[280px] flex justify-evenly items-center flex-col"
        >
          <img
            src={"/cc.jpg"}
            alt="web-development"
            className="w-25 h-25 sm:w-40 sm:h-35 object-contain rounded-lg"
          />

          <h3 className="text-white text-[20px] font-bold text-center mb-2 sm:mb-6">
            Chris conner
          </h3>
        </div>
      </motion.div>
    </Tilt>
  );
};

export default MemberCard;
