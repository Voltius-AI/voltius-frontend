"use client";

import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../../utils/motion";

const MemberCard = () => {
  return (
    <Tilt className="xs:w-[250px] w-60 border border-purple-900 rounded-lg">
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
          className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
        >
          <img
            src={"/cc.jpg"}
            alt="web-development"
            className="w-25 h-25 object-contain rounded-lg"
          />

          <h3 className="text-white text-[20px] font-bold text-center">
            Chris conner
          </h3>
        </div>
      </motion.div>
    </Tilt>
  );
};

export default MemberCard;
