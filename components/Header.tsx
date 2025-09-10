"use client";

import React from "react";
import Image from "./Image";

const Header = () => {
  return (
    <header className="px-20 py-8 flex justify-between fixed top-0 left-0 w-screen z-999">
      <Image className="w-fit h-9" src={"/yinyang-logo.png"} alt="logo" />
      <div className="text-[#bc2637] font-black">• menu</div>
    </header>
  );
};

export default Header;
