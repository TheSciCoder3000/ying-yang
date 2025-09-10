"use client";

import "@/styles/css/Approach.css";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";

const Approach = () => {
  const textRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    ScrollTrigger.refresh();
  });

  useEffect(() => {
    const split = new SplitText(textRef.current, {
      type: "words",
    });

    gsap.from(split.words, {
      color: "#707070",
      duration: 0.5,
      ease: "none",
      stagger: {
        each: 0.1,
        from: "random", // 👈 reveals words in random order
      },
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 10%",
        toggleActions: "play none none none",
        invalidateOnRefresh: true,
        scrub: true,
        pin: true,
      },
    });
  }, []);

  return (
    <div className="-mt-20 w-full overflow-hidden">
      <div ref={containerRef} className="px-20">
        <h1 className="text-6xl font-bold text-[#008080] text-center mb-20">
          YINYANG&apos;S PROPRIETARY <br /> CULTURE SOLUTIONS
        </h1>
        <div ref={textRef} className="uppercase font-bold text-4xl pb-20">
          <p className="mb-12">
            At Lorem Ipsum Leadership, we partner with you to design culturae
            intentionally. At the heart of our work is the Cultura Compass — our
            signature framework that helps organisations explorare where they
            are, imaginare where they want to go, and chart a grounded path to
            get there
          </p>
          <p className="mb-12">
            It’s not a uno-tempus interventio; it’s a dynamica systema for
            long-term mutatio.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Approach;
