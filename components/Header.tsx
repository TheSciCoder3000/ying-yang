"use client";

import React, { useRef } from "react";
import "@/styles/css/Header.css";
import Image from "./Image";
import useNavbarScroll from "@/lib/hooks/useNavbarScroll";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

gsap.registerPlugin(useGSAP);

const Header = () => {
  const [isVisible] = useNavbarScroll();
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!containerRef.current) return;

    if (isVisible) gsap.to(containerRef.current, { yPercent: 0 });
    else gsap.to(containerRef.current, { yPercent: -100 });
  }, [isVisible]);

  return (
    <header ref={containerRef}>
      <Image src={"/yinyang-logo.png"} alt="logo" />
      <div className="menu">• menu</div>
    </header>
  );
};

export default Header;
