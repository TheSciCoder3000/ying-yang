"use client";

import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import React, { useRef } from "react";

gsap.registerPlugin(useGSAP);

const InfiniteScroll = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const movingTimeline = () => {
      gsap.set(containerRef.current, {
        xPercent: 0,
      });
      gsap
        .timeline({
          defaults: { ease: "none", repeat: -1 },
        })
        .to(containerRef.current, {
          xPercent: -50,
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
            Because life&apos;s too short for boring designs ~
          </p>
        ))}
      </div>
    </div>
  );
};

export default InfiniteScroll;
