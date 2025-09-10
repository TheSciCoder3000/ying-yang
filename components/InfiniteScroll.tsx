"use client";

import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import React, { useRef } from "react";
import Image from "./Image";

gsap.registerPlugin(useGSAP);

const noImgCont = 12;

const InfiniteScroll = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const movingTimeline = () => {
        gsap.set(".img-cont", {
          xPercent: -50 * noImgCont,
        });
        gsap
          .timeline({
            defaults: { ease: "none", repeat: -1 },
          })
          .to(".img-cont", {
            xPercent: 0,
            duration: 20,
          })
          .set(".img-cont", { x: 0 });
      };
      movingTimeline();
    },
    { scope: containerRef }
  );

  return (
    <div className="mt-20 relative overflow-hidden h-18" ref={containerRef}>
      <p className="w-fit min-w-fit text-nowrap whitespace-nowrap">
        {Array.from(Array(noImgCont).keys()).map((indx) => (
          <div
            key={indx}
            className="img-cont inline-flex gap-5 h-fit min-w-fit items-center pr-4"
          >
            <Image
              className="block h-15 w-15 object-contain"
              src="/companies/bmw.png"
              alt="bmw"
            />
            <Image
              className="block h-12 w-fit object-contain"
              src="/companies/yinyang-logo.png"
              alt="bmw"
            />
          </div>
        ))}
      </p>
    </div>
  );
};

export default InfiniteScroll;
