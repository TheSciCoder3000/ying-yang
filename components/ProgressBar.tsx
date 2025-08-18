"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import DrawSVGPlugin from "gsap/DrawSVGPlugin";

gsap.registerPlugin(DrawSVGPlugin);

interface ProgressBarProps {
  title: string;
  value: number;
}
const ProgressBar: React.FC<ProgressBarProps> = ({ title, value }) => {
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
  }, []);
  return (
    <div ref={container} className="progress-container">
      <h2>
        <span ref={percent}>0</span>%
      </h2>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1000 1000"
        width="1000"
        height="1000"
      >
        <circle id="motion-path" ref={svgRef} r="450" cx="500" cy="500" />
      </svg>
      <h3>{title}</h3>
    </div>
  );
};

export default ProgressBar;
