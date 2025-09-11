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
    <div className="approach-cont">
      <div ref={containerRef} className="main-content">
        <h1>
          YINYANG&apos;S PROPRIETARY <br /> CULTURE SOLUTIONS
        </h1>
        <div ref={textRef} className="text-reveal-cont">
          <p>
            We draw on decades of experience to create in-house frameworks that bring culture to life. Our proprietary Culture Compass helps organizations see where they are and where they want to go. We pair it with CoreStyles, our team assessment that reveals how people naturally think, collaborate, and lead. Together, these methodologies guide how we design solutions that are practical, human, and lasting.
          </p>
          {/* <p>
            It’s not a uno-tempus interventio; it’s a dynamica systema for
            long-term mutatio.
          </p> */}
        </div>
      </div>
    </div>
  );
};

export default Approach;
