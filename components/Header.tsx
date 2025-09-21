"use client";

import React, { useEffect, useRef, useState } from "react";
import "@/styles/css/Header.css";
import Image from "./Image";
import useNavbarScroll from "@/lib/hooks/useNavbarScroll";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import NavItem from "./NavItem";

gsap.registerPlugin(useGSAP);

const Header = () => {
  const [isVisible] = useNavbarScroll();
  const containerRef = useRef<HTMLDivElement>(null);
  const [showMenu, setShowMenu] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (showMenu) gsap.to(menuRef.current, { opacity: 1, display: "flex" });
    else gsap.to(menuRef.current, { opacity: 0, display: "none" });
  }, [showMenu]);

  useGSAP(() => {
    if (!containerRef.current) return;

    if (isVisible) gsap.to(containerRef.current, { yPercent: 0 });
    else gsap.to(containerRef.current, { yPercent: -100 });
  }, [isVisible]);

  return (
    <>
      <header ref={containerRef}>
        <Image src={"/yinyang-logo(white).png"} alt="logo" />
        <button className="menu" onClick={() => setShowMenu(true)}>
          <Image src="/menu-icon.png" alt="menu-icon" />
        </button>
      </header>
      <div ref={menuRef} className="nav-menu">
        <button className="close-btn" onClick={() => setShowMenu(false)}>
          close
        </button>
        <div className="nav-container">
          <h1 className="nav-header">Menu</h1>
          <div className="menu-items">
            <NavItem
              onClick={() => setShowMenu(false)}
              href="/#home"
              text="Home"
            />
            <NavItem
              onClick={() => setShowMenu(false)}
              href="/#about"
              text="About"
            />
            <NavItem
              onClick={() => setShowMenu(false)}
              href="/#contact"
              text="Contact"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
