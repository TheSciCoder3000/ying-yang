"use client";

import React, { useEffect, useRef } from "react";
import "@/styles/css/Hero.css";
import InfiniteScroll from "./InfiniteScroll";
import { SplitText } from "gsap/all";
import gsap from "gsap";

gsap.registerPlugin(SplitText);

const Hero = () => {
  const spanRef = useRef<HTMLSpanElement>(null);
  const span2Ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const splitText = new SplitText(spanRef.current, { type: "chars" });
    const splitText2 = new SplitText(span2Ref.current, { type: "chars" });
    const chars = splitText.chars;
    const chars2 = splitText2.chars;

    gsap
      .timeline()
      .to(chars, {
        color: "#FF0000",
        duration: 0.5,
        stagger: 0.2,
      })
      .to(chars2, {
        color: "#3C78D8",
        duration: 0.5,
        stagger: 0.2,
      });
  }, []);
  return (
    <div className="hero-cont">
      <h3>YinYang Leadership began with a powerful question</h3>
      <h1>
        WHAT IF A COMPANY&apos;S <br /> <span ref={spanRef}>REAL STRENGTH</span>{" "}
        LIES IN WHAT <br />
        <span ref={span2Ref}>CANNOT BE MEASURED</span> ON A SPREADSHEET?
      </h1>
      <InfiniteScroll />
    </div>
  );
};

export default Hero;
