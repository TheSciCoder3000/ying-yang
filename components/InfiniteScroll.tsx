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
          duration: 80,
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
                src="/companies/1.png"
                style={{ height: "3rem", opacity: 0.7 }}
                alt="open-earth-logo"
              />
              <Image
                className="company-logo"
                src="/companies/2.png"
                style={{ height: "3rem", opacity: 0.7 }}
                alt="eminet-bmw-logo"
              />
              <Image
                className="company-logo"
                src="/companies/3.png"
                style={{ height: "3rem", opacity: 0.7 }}
                alt="eminet-hyundai-logo"
              />
              <Image
                className="company-logo"
                src="/companies/4.png"
                style={{ height: "3rem", opacity: 0.7 }}
                alt="podcast-logo"
              />
              <Image
                className="company-logo"
                src="/companies/5.png"
                style={{ height: "3rem", opacity: 0.7 }}
                alt="pratilipi-logo"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default InfiniteScroll;
