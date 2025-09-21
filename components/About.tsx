"use client";

import React, { useEffect, useRef } from "react";
import "@/styles/css/About.css";
import Image from "./Image";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { getHighestZIndexElement, getIndex } from "@/lib/util";

gsap.registerPlugin(useGSAP);

const imagesData = [
  {
    path: "/img/1.JPG",
    rotate: "8deg", // "-5deg",
    counterRotate: "10deg",
    customStyles: {
      width: "22rem",
      height: "30rem",
      objectFit: "cover",
    } as React.CSSProperties,
  },
  {
    path: "/img/4.JPG",
    rotate: "-8deg", // "-5deg",
    counterRotate: "-10deg",
    customStyles: {
      width: "22rem",
    } as React.CSSProperties,
  },
  // {
  //   path: "/img/3.JPG",
  //   rotate: "5deg", // "5deg",
  //   counterRotate: "7deg",
  //   customStyles: {
  //     width: "32rem",
  //   } as React.CSSProperties,
  // },
  {
    path: "/img/2.JPG",
    rotate: "5deg", // "-5deg",
    counterRotate: "7deg",
    customStyles: {
      width: "22rem",
    } as React.CSSProperties,
  },
];

const vars: gsap.TweenVars = {
  top: "50%",
  left: "50%",
  transformOrigin: "center center",
  xPercent: -50,
  yPercent: -50,
};

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
          ...vars,
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
          ...vars,
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
        ...vars,
        opacity: 1,
        scale: 0.8,
        rotate: () => imagesData[Array.from(images).indexOf(topImage)].rotate,
      });
  };

  useEffect(() => {
    gsap.set(".about-image", {
      ...vars,
      display: "block",
    });
    const interval = setInterval(handleImageClick, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div id="about" className="about-cont" ref={containerRef}>
      <div className="main">
        <div className="about-content">
          <h1 className="main-header">About us</h1>
          <div>
            <p>
              <span>
                What if your people and culture were your greatest growth
                engine?
              </span>
            </p>
            <p>
              At YinYang Leadership, we believe the way people lead, decide, and
              work together is what makes or breaks growth. When people thrive,
              culture thrives — and when culture thrives, performance
              accelerates.
            </p>
            <p>
              Our co-founder Tanisha, together with her partners, are business
              psychologists who’ve spent over a decade helping fast-growing
              startups and Fortune 500s build leadership and culture systems
              that scale.
            </p>
            <p>
              We design <span>Leadership & Culture Architectures</span> that
              codify “how we lead here” and embed it into the everyday — from
              hiring and onboarding to performance and recognition.
            </p>
            <p>
              Through our proprietary <span>Culture Compass</span>, we bring
              evidence-based tools, powerful facilitation, and immersive
              experiences that turn values into daily behaviors.
            </p>
            <p>
              <span>The result?</span> People who feel empowered, cultures that
              stay authentic, and businesses that grow stronger, smarter, and
              faster.
            </p>
          </div>
        </div>
        <div className="about-images">
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
                ...img.customStyles,
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
