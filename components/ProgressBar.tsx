"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import DrawSVGPlugin from "gsap/DrawSVGPlugin";

gsap.registerPlugin(DrawSVGPlugin);

interface ProgressBarProps {
  title: string;
  value: number;
}
const ProgressBar: React.FC<ProgressBarProps> = ({ value }) => {
  const container = useRef<HTMLDivElement>(null);
  const svgRef = useRef<SVGCircleElement>(null);
  const percent = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    gsap.set(svgRef.current, {
      rotation: -90,
      svgOrigin: "500 500",
      drawSVG: 0,
    });

    gsap.to(svgRef.current, {
      duration: 2,
      rotation: -90,
      svgOrigin: "500 500",
      drawSVG: `${value}%`,
      scrollTrigger: {
        trigger: container.current,
        start: "top 80%",
        invalidateOnRefresh: true,
      },
    });

    gsap.to(percent.current, {
      innerText: value,
      snap: "innerText",
      duration: 2,
      scrollTrigger: {
        trigger: container.current,
        start: "top 80%",
        invalidateOnRefresh: true,
      },
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div
      ref={container}
      className="flex justify-center flex-col items-center relative w-36 h-36"
    >
      <h2 className="absolute top-[50%] text-white text-3xl -translate-y-[50%]">
        <span ref={percent}>0</span>%
      </h2>
      <svg
        className="w-full"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1000 1000"
        width="1000"
        height="1000"
      >
        <circle
          id="circle"
          className="stroke-[#222326] stroke-[50px]"
          ref={svgRef}
          r="450"
          cx="500"
          cy="500"
        />
        <circle
          id="motion-path"
          className="fill-none stroke-white stroke-[50px]"
          ref={svgRef}
          r="450"
          cx="500"
          cy="500"
        />
      </svg>
      {/* <h3>{title}</h3> */}
    </div>
  );
};

export default ProgressBar;
