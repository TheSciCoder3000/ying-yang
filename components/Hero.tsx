"use client";

import React, { useEffect, useRef } from "react";
import "@/styles/css/Hero.css";
import InfiniteScroll from "./InfiniteScroll";
import SplitTextAnime from "./SplitTextAnime";
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
        color: "#008080",
        duration: 0.5,
        stagger: 0.2,
      })
      .to(chars2, {
        color: "#BC2637",
        duration: 0.5,
        stagger: 0.2,
      });
  }, []);
  return (
    <div className="hero-cont">
      <h1>
        CO CREATING <span ref={spanRef}>INTENTIONALLY</span> FOR{" "}
        <span ref={span2Ref}>LONG TERM</span> CHANGE.
      </h1>
      <h3 className="sub-heading">
        From insight to action, we help you shift what’s stuck, strengthen what
        matters, and design systems that last.
      </h3>
      <InfiniteScroll />
    </div>
  );
};

export default Hero;
