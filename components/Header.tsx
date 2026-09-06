"use client";

import Image from "next/image";
import logo from "../app/favicon.ico";
import { FaBars, FaTimes } from "react-icons/fa";
import { useState } from "react";
import MenuBar from "./MenuBar";
import { MenuButtons } from "./MenuButtons";

export default function Header() {
  const [isNav, setIsNav] = useState(false);
  const ShowNav = () => setIsNav(!isNav);

  return (
    <>
      <header className="w-full h-43.25 max-lg:h-19 shadow-md z-50 bg-white flex flex-col justify-center overflow-x-hidden">
        <section className="flex justify-between items-center w-full lg:px-16 px-6 py-4.5 lg:py-6 h-26 border-b border-b-[#DDD0DA]">
          <div>
            <Image src={logo} alt="tobams logo" placeholder="blur" width={165.71} height={64}/>
          </div>
          <div className="max-xl:hidden block">
            <MenuButtons />
          </div>
          <div
            className="max-xl:block hidden bg-[#151515] text-white rounded-sm p-1 cursor-pointer text-lg"
            onClick={() => ShowNav()}
          >
            {!isNav ? <FaBars /> : <FaTimes />}
          </div>
        </section>
        <nav className="flex items-center justify-center h-full max-xl:hidden ">
          <div className="flex justify-between py-5 px-16 gap-8 ">
          <MenuBar />
          </div>
        </nav>
      </header>
      {isNav && (
        <div className="flex flex-col items-center gap-4 min-h-screen pt-6 xl:hidden">
          <MenuButtons />
          <nav className="flex flex-col ">
            <MenuBar />
          </nav>
        </div>
      )}
    </>
  );
}
