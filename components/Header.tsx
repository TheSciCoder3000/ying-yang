"use client";

import React from "react";
import "@/styles/css/Header.css";
import Image from "next/image";
import { OnImageLoad } from "@/lib/gsap/loader";

const Header = () => {
  return (
    <header>
      <Image
        src={"/logo.png"}
        alt="logo"
        height={0}
        width={0}
        sizes="100vw"
        onLoad={OnImageLoad}
      />
      <div className="menu">• menu</div>
    </header>
  );
};

export default Header;
