"use client";

import React from "react";
import Image from "next/image";
import heroHomelogo from "../../../../public/images/navlogo.png";
import Velocityscroll from "./velocityscroll";
import earthbackground from "../../../../public/background/19651.jpg";
import Footer from "./footer";
const homecontent = () => {
  return (
    <div>
      <div className="text-center text-white mt-20 ">
        <div></div>
        <div className="flex flex-col md:flex-row justify-center items-center px-10">
          <div>
            <Image
              src={heroHomelogo}
              alt="work icons"
              height={350}
              width={350}
            />
          </div>
          <div className="w-[40vh] md:w-[100vh] text-center">
            <h1 className="text-4xl cursive mb-10">
              what is
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
                {" "}
                Byte Battle ?{" "}
              </span>
            </h1>
            <h1 className=" pop text-center">
              <span className="text-2xl text-amber-300">Byte Battle </span>is an
              interactive coding platform designed to make learning HTML, CSS,
              and JavaScript feel like a game. It offers daily coding tasks and
              challenges that focus on essential front-end skills like Flexbox,
              Grid, and layout techniques, encouraging users to level up their
              abilities. With a playful, gamified environment, users can tackle
              real-world coding problems while receiving immediate feedback and
              rewards. It's an engaging way to practice and improve coding
              skills through hands-on, real-time coding tasks, making the
              learning process both fun and motivating.
            </h1>
          </div>
        </div>
      </div>
      <div>
        <Velocityscroll />
      </div>
      <div className="relative overflow-hidden">
        <Image
          src={earthbackground}
          alt="work icons"
          className="object-cover w-full h-full"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
      </div>

      <div>
        <Footer />
      </div>
    </div>
  );
};

export default homecontent;
