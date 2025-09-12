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
  const spanRef = useRef<HTMLSpanElement>(null);
  const subtitleRef = useRef<HTMLHeadingElement>(null);

  useGSAP(() => {
    const headerSplit = new SplitText(headerRef.current, { type: "words" });
    const words = headerSplit.words;
    const splitText = new SplitText(spanRef.current, { type: "chars" });
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
      .from(".infinite-scroll", { left: "50%", right: "50%" });
    masterTl.add(headerTl).add(scrollTl, 2).add(secondTl).add(thirdTl, "<");
  });
  return (
    <div id="home" className="hero-cont">
      <h3 ref={subtitleRef}>
        YinYang Leadership began with a powerful question
      </h3>
      <h1 ref={headerRef}>
        WHAT IF A COMPANY&apos;S <br /> <span ref={spanRef}>REAL STRENGTH</span>{" "}
        LIES IN WHAT <br />
        CANNOT BE MEASURED ON A SPREADSHEET?
      </h1>
      <InfiniteScroll />
    </div>
  );
};

export default Hero;
