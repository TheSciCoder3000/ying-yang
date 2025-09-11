"use client";

import React, { useRef } from "react";
import "@/styles/css/WhatWeDo.css";
import Image from "./Image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";

const DataIndiv = [
  {
    title: "Executive & Leadership Coaching",
    description: "Unlock clarity and influence to scale faster accelerate",
    image: "/icons/bar.svg",
  },
  {
    title: "Manager Development",
    description:
      "Turn first-time or seasoned people leaders into capable multipliers of high performance.",
    image: "/icons/leader.svg",
  },
  {
    title: "High-Potential Development",
    description:
      "Fast-track future leaders for bigger roles and responsibilities.",
    image: "/icons/growth.svg",
  },
];
const DataTeams = [
  {
    title: "CoreStyles™ Team Diagnostic",
    description:
      "Transform collaboration, resolve conflict, and build high-performing teams using psychometric tools.",
    image: "/icons/managers.svg",
  },
  {
    title: "Leadership Team Visioning",
    description:
      "Align your top team on a unified future vision, values and ways of working.",
    image: "/icons/managers.svg",
  },
  {
    title: "Strategic Team Offsite",
    description:
      "Design immersive experiences that build alignment, clarity, and momentum.",
    image: "/icons/growth.svg",
  },
];
const DataOrg = [
  {
    title: "Growth Barriers Diagnostic",
    description:
      "Uncover what’s holding your team back — from retention and engagement to capability and communication gaps — and unlock targeted solutions to scale faster.",
    image: "/icons/founder.svg",
  },
  {
    title: "Build Your Culture Architecture",
    description:
      "Codify “how we lead here” into a structured model that drives clarity, consistency, and performance across the company.",
    image: "/icons/bar.svg",
  },
  {
    title: "Embed Culture Into People Systems",
    description:
      "Hardwire that model into hiring, onboarding, performance management, succession and rewards so culture lives in daily operations",
    image: "/icons/leader.svg",
  },
];

gsap.registerPlugin(useGSAP, ScrollTrigger);

const WhatWeDo = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  useGSAP(
    () => {
      if (!containerRef.current) return;

      gsap.from(".content-body", {
        xPercent: (indx) => (indx % 2 === 0 ? 110 : -110),
        scrollTrigger: {
          trigger: ".content",
          start: "top 50",
          pin: true,
          scrub: true,
        },
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
        <div className="content-body">
          {DataIndiv.map((item, indx) => (
            <Item key={indx} {...item} />
          ))}
        </div>
        <div className="content-body">
          {DataTeams.map((item, indx) => (
            <Item key={indx} {...item} />
          ))}
        </div>
        <div className="content-body">
          {DataOrg.map((item, indx) => (
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
      <Image src={image} alt={image} />
      <div className="item-content">
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default WhatWeDo;
