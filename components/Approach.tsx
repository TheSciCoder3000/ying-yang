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
      color: "#e8e8e8",
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
        // markers: {
        //   indent: 100,
        //   fontSize: "20px",
        // },
      },
    });
  }, []);
  return (
    <div className="approach-cont">
      <div ref={containerRef} className="main-content">
        <h1>OUR APPROACH</h1>
        <div ref={textRef} className="text-reveal-cont">
          <p>
            At Lorem Ipsum Leadership, we partner with you to design culturae
            intentionally. At the heart of our work is the Cultura Compass — our
            signature framework that helps organisations explorare where they
            are, imaginare where they want to go, and chart a grounded path to
            get there
          </p>
          <p>
            It’s not a uno-tempus interventio; it’s a dynamica systema for
            long-term mutatio.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Approach;
