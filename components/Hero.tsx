"use client";

import React, { useRef } from "react";
import "@/styles/css/Hero.css";
import InfiniteScroll from "./InfiniteScroll";
import { SplitText } from "gsap/all";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(SplitText, useGSAP);

const Hero = () => {
  const headerRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLHeadingElement>(null);

  useGSAP(() => {
    const headerSplit = new SplitText(headerRef.current, { type: "words" });
    const words = headerSplit.words;
    const splitText = new SplitText(".span-text", { type: "chars" });
    const chars = splitText.chars;

    const masterTl = gsap.timeline();

    const headerTl = gsap.timeline();

    headerTl.from(words, {
      stagger: 0.2,
      opacity: 0,
      scaleX: 0.5,
    });

    const secondTl = gsap.timeline();

    secondTl
      .to(chars, {
        color: "#009B9F",
        duration: 0.5,
        stagger: 0.2,
      })
      .from(subtitleRef.current, { y: -100, opacity: 0 }, 0);

    const thirdTl = gsap
      .timeline()
      .from("header img, header button", { opacity: 0, y: -100, stagger: 0.3 });

    const scrollTl = gsap
      .timeline()
      .from(".trusted-header", { y: -100, opacity: 0 })
      .from(".marquee-cont", { width: "0%" });
    masterTl.add(headerTl).add(scrollTl, 2).add(secondTl).add(thirdTl, "<");
  });
  return (
    <div id="home" className="hero-cont">
      <div className="hero-content">
        <h3 ref={subtitleRef}>
          YinYang Leadership began with a powerful question
        </h3>
        <h1 ref={headerRef}>
          WHAT IF A COMPANY&apos;S <br />{" "}
          <span className="span-text">REAL STRENGTH</span> LIES IN WHAT <br />
          <span className="span-text">
            CANNOT BE MEASURED ON A SPREADSHEET?
          </span>
        </h1>
      </div>
      <h2 className="trusted-header">TRUSTED BY</h2>
      <InfiniteScroll />
    </div>
  );
};

export default Hero;
