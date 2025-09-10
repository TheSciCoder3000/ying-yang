"use client";

import React, { useEffect, useRef } from "react";
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
        color: "#009B9F",
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
    <div className="px-[4rem] py-[2rem] relative mt-[5rem] max-w-screen overflow-x-hidden">
      <h3 className="text-center mb-[1.5rem] text-[#009b9f] font-[500]">
        YinYang Leadership began with a powerful question
      </h3>
      <h1 className="text-7xl/[1.2em] font-bold text-center mb-2">
        WHAT IF A COMPANY&apos;S <br /> <span ref={spanRef}>REAL STRENGTH</span>{" "}
        LIES IN WHAT <br />
        CANNOT BE MEASURED ON A SPREADSHEET?
      </h1>
    </div>
  );
};

export default Hero;
