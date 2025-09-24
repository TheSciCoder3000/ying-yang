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
  const containerRef = useRef<HTMLHeadingElement>(null);

  useGSAP(
    () => {
      // const mm = gsap.matchMedia();

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
      // mm.add("(min-width: 480px)", () => {
      // });
    },
    { scope: containerRef }
  );

  return (
    <div ref={containerRef} className="services-cont">
      <div ref={headerRef} className="header">
        <h1 className="main-header">JOURNEY WITH YINYANG</h1>
        <p>
          At YinYang, we believe culture isn’t “fixed” with off-the-shelf
          solutions. It’s revealed, understood, and shaped—together. Here’s how
          we walk the journey with you:
        </p>
      </div>
      <Cards />
    </div>
  );
};

export default Services;
