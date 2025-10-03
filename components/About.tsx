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
    path: "/img/2.jpg",
    rotate: "-8deg", // "-5deg",
    counterRotate: "-10deg",
    customStyles: {
      width: "22rem",
    } as React.CSSProperties,
  },
  {
    path: "/img/3.JPG",
    rotate: "5deg", // "-5deg",
    counterRotate: "7deg",
    customStyles: {
      width: "22rem",
    } as React.CSSProperties,
  },
  {
    path: "/img/4.jpg",
    rotate: "-8deg", // "-5deg",
    counterRotate: "-10deg",
    customStyles: {
      width: "22rem",
    } as React.CSSProperties,
  },
  {
    path: "/img/5.jpeg",
    rotate: "5deg", // "-5deg",
    counterRotate: "7deg",
    customStyles: {
      width: "22rem",
    } as React.CSSProperties,
  },
  {
    path: "/img/6.jpeg",
    rotate: "-8deg", // "-5deg",
    counterRotate: "-10deg",
    customStyles: {
      width: "22rem",
    } as React.CSSProperties,
  },
  {
    path: "/img/7.JPG",
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
      <h1 className="main-header">
        At YinYang Leadership, we believe the way people lead, decide, and work
        together is what makes or breaks growth. When people thrive, culture
        thrives — and when culture thrives, performance accelerates.
      </h1>
      <div className="main">
        <div className="about-content">
          <div>
            {/* <p>
              At YinYang Leadership, we believe the way people lead, decide, and
              work together is what makes or breaks growth. When people thrive,
              culture thrives — and when culture thrives, performance
              accelerates.
            </p> */}
            <p>
              Our founder Tanisha and her team of business psychologists have
              spent over a decade working in{" "}
              <span>
                leadership development, executive coaching, and organizational
                change,
              </span>{" "}
              partnering with both fast-scaling startups and Fortune 500
              companies.{" "}
              <span>
                We’ve seen the same truth play out everywhere: growth stalls
                when leadership and culture don’t keep pace with the business.
              </span>
            </p>

            <p>
              That’s why we go beyond workshops and decks. We{" "}
              <span>architect the leadership and cultural foundations</span>{" "}
              that define “how we lead here”, and we hardwire them into everyday
              systems. From <span>hiring and onboarding</span> to{" "}
              <span>performance management and recognition,</span> culture thus
              becomes lived and not just laminated on a wall.
            </p>

            <p>
              With our proprietary <span>Culture Compass diagnostic,</span> we
              help organizations see where they stand, identify what’s blocking
              growth, and translate values into everyday behaviors. The approach
              is never theoretical: it’s powered by{" "}
              <span>
                evidence-based tools, immersive experiences, and real
                conversations
              </span>{" "}
              that shift culture and unlock performance.
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
