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
    <div className="marquee-cont">
      <div className="infinite-scroll">
        <div className="scroll-text" ref={containerRef}>
          {Array.from(Array(8).keys()).map((indx) => (
            <div className="text-span" key={indx}>
              {/* Because life&apos;s too short for boring designs ~ */}
              <Image
                className="company-logo"
                src="/companies/bmw.png"
                style={{ height: "4rem" }}
                alt="bmw"
              />
              <Image
                className="company-logo"
                src="/companies/ivm-podcast.png"
                style={{ height: "5rem", opacity: 0.6 }}
                alt="bmw"
              />
              <Image
                className="company-logo"
                src="/companies/pratilipi.png"
                style={{ height: "4rem", opacity: 0.6 }}
                alt="bmw"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default InfiniteScroll;
