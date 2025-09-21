"use client";

import React, { useEffect, useRef, useState } from "react";
import "@/styles/css/WhatWeDo.css";
import Image from "./Image";
import { motion, AnimatePresence } from "motion/react";

const headers = ["Fore Individuals", "For Teams", "For Organizations"];

const DataIndiv = [
  {
    id: "indiv-0",
    title: "Executive & Leadership Coaching",
    description: "Unlock clarity and influence to scale faster accelerate",
    image: "/icons/bar.svg",
  },
  {
    id: "indiv-1",
    title: "Manager Development",
    description:
      "Turn first-time or seasoned people leaders into capable multipliers of high performance.",
    image: "/icons/leader.svg",
  },
  {
    id: "indiv-2",
    title: "High-Potential Development",
    description:
      "Fast-track future leaders for bigger roles and responsibilities.",
    image: "/icons/growth.svg",
  },
];
const DataTeams = [
  {
    id: "team-0",
    title: "CoreStyles™ Team Diagnostic",
    description:
      "Transform collaboration, resolve conflict, and build high-performing teams using psychometric tools.",
    image: "/icons/managers.svg",
  },
  {
    id: "team-1",
    title: "Leadership Team Visioning",
    description:
      "Align your top team on a unified future vision, values and ways of working.",
    image: "/icons/managers.svg",
  },
  {
    id: "team-2",
    title: "Strategic Team Offsite",
    description:
      "Design immersive experiences that build alignment, clarity, and momentum.",
    image: "/icons/growth.svg",
  },
];
const DataOrg = [
  {
    id: "org-0",
    title: "Growth Barriers Diagnostic",
    description:
      "Uncover what’s holding your team back — from retention and engagement to capability and communication gaps — and unlock targeted solutions to scale faster.",
    image: "/icons/founder.svg",
  },
  {
    id: "org-1",
    title: "Build Your Culture Architecture",
    description:
      "Codify “how we lead here” into a structured model that drives clarity, consistency, and performance across the company.",
    image: "/icons/bar.svg",
  },
  {
    id: "org-2",
    title: "Embed Culture Into People Systems",
    description:
      "Hardwire that model into hiring, onboarding, performance management, succession and rewards so culture lives in daily operations",
    image: "/icons/leader.svg",
  },
];

interface ItemSchema {
  id: string;
  title: string;
  description: string;
  image: string;
}

const dataArr = [DataIndiv, DataTeams, DataOrg];

const WhatWeDo = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [items, setitems] = useState<ItemSchema[]>(dataArr[0]);
  const [selected, setSelected] = useState(0);

  useEffect(() => {
    setitems(dataArr[selected]);
  }, [selected]);

  return (
    <div ref={containerRef} className="we-do-cont">
      <div className="header">
        <h1>what we do</h1>
        <p>
          We help businesses unlock growth by aligning strategy with culture.
          From refining your brand voice to building systems that scale, we
          bridge the gap between vision and execution. Our approach blends data,
          design, and human insight—turning business challenges into
          opportunities for sustainable success.
        </p>
      </div>

      <div className="for-who-cont">
        {headers.map((item, indx) => (
          <div
            key={indx}
            className={`for-who-item${selected === indx ? " active" : ""}`}
          >
            <button onClick={() => setSelected(indx)}>
              <h1>{item}</h1>
            </button>
          </div>
        ))}
      </div>

      <div className="content-cont">
        <div className="content-body">
          <div className="content-items">
            <AnimatePresence mode="popLayout">
              {items.map(({ title, image, description }, indx) => (
                <motion.div
                  key={title}
                  initial={{ y: 150, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: 150, opacity: 0 }}
                  transition={{ duration: 0.5, delay: indx * 0.2 }} // stagger effect
                  className="item-cont"
                >
                  <Image src={image} alt={image} />
                  <div className="item-content">
                    <h1>{title}</h1>
                    <p>{description}</p>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatWeDo;
