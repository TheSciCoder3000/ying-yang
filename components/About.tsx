"use client";

import React, { useRef } from "react";
import "@/styles/css/About.css";
import ProgressBar from "./ProgressBar";
import Image from "./Image";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { getHighestZIndexElement, getIndex } from "@/lib/util";

gsap.registerPlugin(useGSAP);

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

const imagesData = [
  {
    path: "/img/3.png",
    rotate: "-5deg",
    counterRotate: "-7deg",
  },
  {
    path: "/img/2.png",
    rotate: "5deg",
    counterRotate: "7deg",
  },
  {
    path: "/img/1.png",
    rotate: "1deg",
    counterRotate: "3deg",
  },
];

const About = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const handleImageClick = () => {
    if (!containerRef.current) return;
    const images = containerRef.current.querySelectorAll(".about-image");
    const topImage = getHighestZIndexElement(images);

    if (!topImage) return;

    const tl = gsap.timeline();

    tl.to(topImage, { opacity: 0 })
      .to(
        images,
        {
          zIndex: (index) => {
            const z = getIndex(images[index]);
            return 1 + (z % images.length);
          },
        },
        0
      )
      .to(
        images,
        {
          scale: (index) => {
            const z = getIndex(images[index]);
            return z === images.length ? 0.85 : 0.8;
          },
          rotate: (indx) => {
            const z = getIndex(images[indx]);
            return z === images.length
              ? imagesData[indx].counterRotate
              : imagesData[indx].rotate;
          },
        },
        "+=0.01"
      )
      .to(topImage, {
        opacity: 1,
        scale: 0.8,
        rotate: () => imagesData[Array.from(images).indexOf(topImage)].rotate,
      });
  };

  const handleMousEnter = () => {
    if (!containerRef.current) return;
    const images = containerRef.current.querySelectorAll(".about-image");
    const topImage = getHighestZIndexElement(images);

    if (!topImage) return;
    gsap.to(topImage, {
      scale: 0.85,
      rotate: () =>
        imagesData[Array.from(images).indexOf(topImage)].counterRotate,
    });
  };

  const handleMouseLeave = () => {
    if (!containerRef.current) return;
    const images = containerRef.current.querySelectorAll(".about-image");
    const topImage = getHighestZIndexElement(images);

    if (!topImage) return;
    gsap.to(topImage, {
      scale: 0.8,
      rotate: () => imagesData[Array.from(images).indexOf(topImage)].rotate,
    });
  };

  useGSAP(
    () => {
      if (!containerRef.current) return;
    },
    { scope: containerRef }
  );

  return (
    <div className="about-cont" ref={containerRef}>
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
        <div
          className="about-images"
          onMouseEnter={handleMousEnter}
          onMouseLeave={handleMouseLeave}
        >
          {imagesData.map((img, indx) => (
            <Image
              key={indx}
              onClick={handleImageClick}
              className="about-image"
              src={img.path}
              alt={img.path}
              style={{
                rotate: img.rotate,
                zIndex: indx + 1,
              }}
            />
          ))}
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

export default About;
