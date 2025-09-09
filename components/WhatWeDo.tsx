"use client";

import React, { useRef } from "react";
import "@/styles/css/WhatWeDo.css";
import Image from "./Image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";

const Data = [
  {
    title: "Growth Engine",
    description:
      "Build best-in-class capabilities to get your growth engine ready for 10x scale",
    image: "/we-do/1.png",
  },
  {
    title: "Organisation Design and Leadership Assessment",
    description: "Set up your org to fit your growth business plan",
    image: "/we-do/2.png",
  },
  {
    title: "Farm-to-Table Solutions",
    description:
      "Growing chemical-free crops with methods for healthier, sustainable farming.",
    image: "/we-do/3.png",
  },
  {
    title: "Growth Engine",
    description:
      "Build best-in-class capabilities to get your growth engine ready for 10x scale",
    image: "/we-do/1.png",
  },
  {
    title: "Organisation Design and Leadership Assessment",
    description: "Set up your org to fit your growth business plan",
    image: "/we-do/2.png",
  },
  {
    title: "Farm-to-Table Solutions",
    description:
      "Growing chemical-free crops with methods for healthier, sustainable farming.",
    image: "/we-do/3.png",
  },
];

gsap.registerPlugin(useGSAP, ScrollTrigger);

const WhatWeDo = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  useGSAP(
    () => {
      if (!containerRef.current) return;

      gsap.from(".item-cont", {
        y: 100,
        opacity: 0,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 15%",
          toggleActions: "play none none none",
        },
        stagger: 0.22,
        duration: 0.54,
      });
    },
    { scope: containerRef }
  );
  return (
    <div ref={containerRef} className="we-do-cont">
      <div className="header">
        <h1>what we do</h1>
        <p>
          Lorem ipsum farming services promote eco-friendly practices, enhance
          soil health, conserve water, et ensure chemical-free produce. We focus
          on sustainability, biodiversity, atque innovative agricultural
          solutions.
        </p>
      </div>

      <div className="content">
        <div className="content-header">
          <h1>Product</h1>
          <h1>Services</h1>
          <h1>Learning</h1>
        </div>
        <div className="content-body">
          {Data.map((item, indx) => (
            <Item key={indx} {...item} />
          ))}
        </div>
      </div>
    </div>
  );
};

interface ItemProps {
  title: string;
  description: string;
  image: string;
}
const Item: React.FC<ItemProps> = ({ title, description, image }) => {
  return (
    <div className="item-cont">
      <div className="item-content">
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
      <Image src={image} alt={image} />
    </div>
  );
};

export default WhatWeDo;
