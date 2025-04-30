"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  slideInFromLeft,
  slideInFromRight,
} from "@/app/utils/motion";

import Image from "next/image";
import iconImage from "../../../../public/images/mainIconsdark.svg";
import herologo from "../../../../public/images/herologo.png";


const hero = () => {
  return (
    <div>
      <motion.div
        initial="hidden"
        animate="visible"
        className="flex flex-col md:flex-row items-center justify-center px-5 md:px-20 mt-5 w-full z-[20]"
      >
        <div className="h-full w-full flex flex-col  md:gap-5 justify-center m-auto text-start">
          <motion.div
            variants={slideInFromLeft(0.5)}
            className="flex flex-col gap-6 mt-6 text-4xl md:text-6xl font-bold text-white max-w-[600px] w-auto h-auto"
          >
        
              <Image src={herologo} alt="work icons" height={200} width={200} />
              <span>
                Ready to Code?
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
                  {" "}
                  Ready to Grow.{" "}
                </span>
                💥
              </span>
            
          </motion.div>

          <motion.p
            variants={slideInFromLeft(0.8)}
            className="text-lg text-gray-400 my-5 max-w-[600px]"
          >
            Test your skills, learn new concepts, and grow with every keystroke.
            <p>Its not just practice — its progress.</p>
          </motion.p>

          <motion.a
            variants={slideInFromLeft(1)}
            className="py-2 button-primary text-center text-white cursor-pointer rounded-lg max-w-[200px]"
          >
            Start Now!
          </motion.a>
        </div>

        <motion.div
          variants={slideInFromRight(0.8)}
          className="w-full h-full flex justify-center items-center"
        >
          <Image src={iconImage} alt="work icons" height={600} width={600} />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default hero;
