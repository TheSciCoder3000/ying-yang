"use client";

import React from "react";
import "@/styles/css/Header.css";
import Image from "./Image";

const Header = () => {
  return (
    <header>
      <Image src={"/yinyang-logo.png"} alt="logo" />
      <div className="menu">• menu</div>
    </header>
  );
};

export default Header;
