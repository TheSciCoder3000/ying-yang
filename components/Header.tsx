import React from "react";
import "@/styles/css/Header.css";
import Image from "next/image";

const Header = () => {
  return (
    <header>
      <Image src={"/logo.png"} alt="logo" height={0} width={0} sizes="100vw" />
      <div className="menu">• menu</div>
    </header>
  );
};

export default Header;
