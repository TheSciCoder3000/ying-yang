"use client";

import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import React, { useRef } from "react";
import Image from "./Image";

gsap.registerPlugin(useGSAP);

const noImgCont = 12;

const InfiniteScroll = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const movingTimeline = () => {
        gsap.set(scrollRef.current, {
          xPercent: -50,
        });
        gsap
          .timeline({
            defaults: { ease: "none", repeat: -1 },
          })
          .to(scrollRef.current, {
            xPercent: 0,
            duration: 20,
          })
          .set(scrollRef.current, { x: 0 });
      };
      movingTimeline();
    },
    { scope: containerRef }
  );

  return (
    <div className="mt-20 relative overflow-hidden" ref={containerRef}>
      <div
        ref={scrollRef}
        className="w-fit min-w-fit flex items-center text-nowrap whitespace-nowrap"
      >
        {Array.from(Array(noImgCont).keys()).map((indx) => (
          <div key={indx} className="flex items-center w-fit">
            <div className="flex gap-5 h-20 w-20 items-center">
              <Image
                className="block h-full w-full object-contain pr-4"
                src="/companies/bmw.png"
                alt="bmw"
              />
            </div>
            <div className="flex gap-5 h-20 w-48 items-center">
              <Image
                className="block h-full w-full object-contain pr-4"
                src="/companies/yinyang-logo.png"
                alt="bmw"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InfiniteScroll;
