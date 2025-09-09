"use client";

import React from "react";
import "@/styles/css/About.css";
import Image from "next/image";
import ProgressBar from "./ProgressBar";
import { OnImageLoad } from "@/lib/gsap/loader";

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

const About = () => {
  return (
    <div className="about-cont">
      <div className="main">
        <div className="about-content">
          <h2>About us:</h2>
          <div>
            <p>
              Our founder Tanisha, together with her partners at YinYang, are
              business psychologists who have spent over a decade working with
              fast-growing businesses, fortune 500 companies, ambitious leaders,
              and high-performing teams. Across every success and every
              struggle, they discovered the same truth: culture is intangible,
              but its impact is impossible to ignore.
            </p>
            <p>
              That insight became the seed of YinYang Leadership. Rooted in the
              philosophy that opposites must come together to form a whole, we
              help organizations design the leadership and cultural foundations
              that unlock faster business performance and long-term success.
            </p>
            <p>
              Through our proprietary Culture Compass, we bring evidence based
              tools, powerful facilitation, and an immersive learning
              experience. Whether we’re co-creating leadership journeys,
              redesigning ways of working, or guiding you through complex
              change, our purpose is clear: to make workplaces more conscious,
              connected, and alive; so your people and your business thrive
              together!
            </p>
          </div>
        </div>
        <div className="about-images">
          <ReImage
            src="/img/3.png"
            style={{
              rotate: "-5deg",
            }}
          />
          <ReImage
            src="/img/2.png"
            style={{
              rotate: "5deg",
            }}
          />
          <ReImage
            src="/img/1.png"
            style={{
              rotate: "1deg",
            }}
          />
        </div>
      </div>

      <div className="ratings">
        <h2>lorem ipsum</h2>
        <div className="ratings-content">
          {ratingsData.map((data, indx) => (
            <ProgressBar key={indx} title={data.title} value={data.value} />
          ))}
        </div>
      </div>
    </div>
  );
};

interface ImageProps {
  src: string;
  className?: string;
  style?: React.CSSProperties;
}
const ReImage: React.FC<ImageProps> = ({ style, src, className }) => {
  return (
    <Image
      style={style}
      src={src}
      alt="image-src"
      width={0}
      height={0}
      className={className}
      sizes="100vw"
      onLoad={OnImageLoad}
    />
  );
};

export default About;
