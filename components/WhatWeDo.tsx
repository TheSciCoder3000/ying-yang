"use client";

import React, { useEffect, useRef, useState } from "react";
import "@/styles/css/WhatWeDo.css";
import Image from "./Image";
import { motion, AnimatePresence } from "motion/react";

const DataIndiv = [
  {
    id: "indiv-0",
    title: "Executive & Leadership Coaching",
    description: "Accelerate clarity, confidence, and impact",
    image: "/icons/bar.svg",
  },
  {
    id: "indiv-1",
    title: "Manager Development",
    description:
      "Turn people leaders into confident multipliers of high performance.",
    image: "/icons/leader.svg",
  },
  {
    id: "indiv-2",
    title: "High-Potential Development",
    description:
      "Fast-track next-gen leaders for bigger roles and responsibilities.",
    image: "/icons/growth.svg",
  },
];
const DataTeams = [
  {
    id: "team-0",
    title: "CoreStyles™ Team Diagnostic",
    description:
      "our proprietary psychometric tool to transform team dynamics.",
    image: "/icons/managers.svg",
  },
  {
    id: "team-1",
    title: "Leadership Team Visioning & Core Values Alignment",
    description:
      "Aligning leaders on a shared vision and values that drive every business decision.",
    image: "/icons/managers.svg",
  },
  {
    id: "team-2",
    title: "Strategic Team Offsite",
    description:
      "Interventions where strategy meets culture: teams learn how to speak openly, resolve tensions constructively, and align on shared goals.",
    image: "/icons/growth.svg",
  },
];
const DataOrg = [
  {
    id: "org-0",
    title: "Growth Barriers Diagnostic",
    description:
      "Identify blockers like retention, engagement, or alignment, and unlock targeted solutions.",
    image: "/icons/founder.svg",
  },
  {
    id: "org-1",
    title: "Build Your Culture Architecture",
    description:
      "Codify “how we lead here” into a clear model that drives clarity and consistency in performance.",
    image: "/icons/bar.svg",
  },
  {
    id: "org-2",
    title: "Embed Culture Into People Systems ",
    description:
      "Hardwire culture into hiring, onboarding, performance, and rewards.",
    image: "/icons/bar.svg",
  },
];

interface ItemSchema {
  id: string;
  title: string;
  description: string;
  image: string;
}

interface DataSchema {
  title: string;
  description: string;
  items: ItemSchema[];
}

const dataArr: DataSchema[] = [
  {
    title: "Coaching Leaders",
    description:
      "Equip your Leaders to grow the business faster and become multipliers of high performance",
    items: DataIndiv,
  },
  {
    title: "Training Teams",
    description:
      "Resolve trust gaps, align leadership teams and unlock high-performing collaboration.",
    items: DataTeams,
  },
  {
    title: "Hardwiring Culture",
    description:
      "Make your culture measurable, embedded, and a true driver of business outcomes.",
    items: DataOrg,
  },
];

const WhatWeDo = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [items, setitems] = useState<DataSchema>(dataArr[0]);
  const [selected, setSelected] = useState(0);
  const [contentBody, setContentBody] = useState(items.description);

  useEffect(() => {
    setitems(dataArr[selected]);
    setContentBody(dataArr[selected].description);
  }, [selected]);

  return (
    <div ref={containerRef} className="we-do-cont">
      <div className="header">
        <h1>How We Activate the People Side of Scale</h1>
        <p>
          {contentBody}
          {/* We help businesses unlock growth by aligning strategy with culture.
          From refining your brand voice to building systems that scale, we
          bridge the gap between vision and execution. Our approach blends data,
          design, and human insight—turning business challenges into
          opportunities for sustainable success. */}
        </p>
      </div>

      <div className="for-who-cont">
        {dataArr.map((item, indx) => (
          <div
            key={indx}
            className={`for-who-item${selected === indx ? " active" : ""}`}
          >
            <button onClick={() => setSelected(indx)}>
              <h1>{item.title}</h1>
            </button>
          </div>
        ))}
      </div>

      <div className="content-cont">
        <div className="content-body">
          <div className="content-items">
            <AnimatePresence mode="popLayout">
              {items.items.map(({ title, image, description }, indx) => (
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
