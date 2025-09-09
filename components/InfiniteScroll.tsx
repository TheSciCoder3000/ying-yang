"use client";

import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import React, { useRef } from "react";
import Image from "./Image";

gsap.registerPlugin(useGSAP);

const InfiniteScroll = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const movingTimeline = () => {
      gsap.set(containerRef.current, {
        xPercent: -50,
      });
      gsap
        .timeline({
          defaults: { ease: "none", repeat: -1 },
        })
        .to(containerRef.current, {
          xPercent: 0,
          duration: 20,
        })
        .set(containerRef.current, { x: 0 });
    };
    movingTimeline();
  });

  return (
    <div className="infinite-scroll">
      <div className="scroll-text" ref={containerRef}>
        {Array.from(Array(8).keys()).map((indx) => (
          <p className="text-span" key={indx}>
            {/* Because life&apos;s too short for boring designs ~ */}
            <Image
              className="company-logo"
              src="/companies/bmw.png"
              alt="bmw"
            />
            <Image
              className="company-logo"
              src="/companies/yinyang-logo.png"
              alt="bmw"
            />
          </p>
        ))}
      </div>
    </div>
  );
};

export default InfiniteScroll;
