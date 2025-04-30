"use client";
import { Bell } from "@deemlol/next-icons";
import React, { useState } from "react";
import Image from "next/image";
import navBarlogo from "../../../../public/images/navlogo.png";
import { Menu, X } from "lucide-react"; 

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  return (
    <div className="flex justify-center pop px-4">
      <div className="w-full max-w-6xl mt-2">
        <nav className="relative flex justify-between items-center py-2 px-4 rounded-full bg-[#130c3668] text-white backdrop-blur-3xl border border-transparent">
          <div className="flex items-center gap-3">
            <Image src={navBarlogo} alt="nav logo" height={50} width={50} />
            <span className="text-lg font-semibold hidden sm:block">Brand</span>
          </div>

          {/* Desktop Menu */}
          <ul className="hidden sm:flex gap-10 font-medium cursor-pointer">
            <li>Explore</li>
            <li>Contest</li>
            <li>Discuss</li>
          </ul>

          {/* Right Section */}
          <div className="hidden sm:flex items-center gap-5">
            <Bell size={24} color="#FFFFFF" />
            <button className="bg-violet-400 px-5 rounded-md py-1">Login</button>
          </div>

      
          <div className="sm:hidden flex items-center">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </nav>
        {isMenuOpen && (
          <div className="sm:hidden bg-[#130c3668] text-white backdrop-blur-3xl mt-2 p-4 rounded-lg space-y-4">
            <ul className="space-y-2">
              <li>Explore</li>
              <li>Contest</li>
              <li>Discuss</li>
            </ul>
            <div className="flex items-center justify-between">
              <Bell size={24} color="#FFFFFF" />
              <button className="bg-violet-400 px-5 rounded-md py-1">
                Login
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
