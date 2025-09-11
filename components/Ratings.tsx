"use client";

import React, { useRef } from "react";
import ProgressBar from "./ProgressBar";
import "@/styles/css/Ratings.css";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";

const ratingsData = [
  {
    title: "AAA",
    value: 82,
  },
  {
    title: "BBB",
    value: 49,
  },
  {
    title: "CCC",
    value: 99,
  },
  {
    title: "DDD",
    value: 95,
  },
];

gsap.registerPlugin(useGSAP, ScrollTrigger);

const Ratings = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (!containerRef.current) return;

      ScrollTrigger.create({
        trigger: containerRef.current,
        start: "top top",
        pin: true,
        pinSpacing: false,
      });
    },
    { scope: containerRef }
  );
  return (
    <div className="ratings" ref={containerRef}>
      <h1 className="main-header">lorem ipsum</h1>
      <div className="ratings-content">
        {ratingsData.map((data, indx) => (
          <ProgressBar key={indx} title={data.title} value={data.value} />
        ))}
      </div>
    </div>
  );
};

export default Ratings;
