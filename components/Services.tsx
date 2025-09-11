"use client";

import React, { useRef } from "react";
import Cards from "./Cards";
import "@/styles/css/Services.css";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const Services = () => {
  const headerRef = useRef<HTMLHeadingElement>(null);

  useGSAP(() => {
    gsap.to(headerRef.current, {
      ease: "none",
      scrollTrigger: {
        trigger: headerRef.current,
        start: "top 7%",
        end: "bottom bottom",
        endTrigger: ".cards-container",
        scrub: true,
        pin: true,
        pinSpacing: false,
        // markers: true,
      },
    });
  });

  return (
    <div className="services-cont">
      <h1 ref={headerRef} className="main-header">
        JOURNEY WITH YINYANG
      </h1>
      <Cards />
    </div>
  );
};

export default Services;
