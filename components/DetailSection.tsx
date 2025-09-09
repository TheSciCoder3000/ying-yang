"use client";

import React, { useEffect, useRef, useState } from "react";
import "@/styles/css/Details.css";
import gsap from "gsap";
import Image from "./Image";

const detailsData = [
  {
    id: 0,
    title: "How do I know if we’re ready to work on culture?",
    content: `If you’re growing fast, struggling with retention, 
          feeling the strain of change, or sensing that “something’s off,” 
          you’re ready. You don’t need a crisis to start.`,
  },
  {
    id: 1,
    title: "Why is culture such a big deal for business success?",
    content: `Because culture shows up in everything. It’s in how your 
          leaders make decisions, how teams collaborate, and how people 
          feel about showing up every day. A strong culture drives performance, 
          retention, and innovation. A weak one slows everything down.`,
  },
  {
    id: 2,
    title: "Isn’t culture just HR’s job?",
    content: `Not at all. HR supports it, but culture is shaped daily by 
          leaders and teams. Every decision, meeting, and conversation either 
          strengthens or weakens it. We help you take charge of that.`,
  },
  {
    id: 3,
    title: "Can you measure culture, or is it too fluffy?",
    content: `Yes, you can measure it. We use surveys, behavioural data, 
          and live observations to track shifts in trust, collaboration, 
          and leadership behaviour. `,
  },
  {
    id: 4,
    title: "Do we need to be a big company to work with you?",
    content: `No. We work with ambitious startups, scaling mid sized 
          firms, and established organisations. What matters most is that 
          you care about your people and are ready to invest in culture 
          as a real advantage.`,
  },
  {
    id: 5,
    title: "How do you actually work with clients?",
    content: `We design end to end roadmaps. Sometimes that’s a one 
          off intervention like a workshop. Other times it’s a long term 
          journey where we embed systems, redesign processes, or coach 
          leaders over time. Whatever the format, we stay with you to make 
          sure the change sticks.`,
  },
  {
    id: 6,
    title: "Will this take a lot of our time?",
    content: `No. The goal is to integrate culture work into your existing 
          rhythms. That means better one on ones, sharper meetings, and 
          clearer systems, not adding another layer of work.`,
  },
  {
    id: 7,
    title: "Do you also work with conflict or “messy” situations?",
    content: `Yes. In fact, that’s where we do some of our best work. 
          Whether it’s team tension, leadership misalignment, or burnout, 
          we create a safe space to untangle it and rebuild trust.`,
  },
  {
    id: 8,
    title: "What makes YinYang different from other consultants?",
    content: `We don’t do cookie cutter frameworks or endless theory. 
          We bring evidence based tools, real conversations, and a coaching 
          style that’s practical and human. You won’t just get a deck of 
          recommendations. You’ll see change play out in the day to day.`,
  },
  {
    id: 9,
    title: "How do I get started?",
    content: `Simple. Let’s talk about your goals and challenges. 
          From there, we’ll create a plan that fits your context, 
          your people, and your vision.`,
  },
];

const DetailSection = () => {
  const [openId, setOpenId] = useState<number | null>(null);

  const handleToggle = (id: number) => {
    if (id === openId) setOpenId(null);
    else setOpenId(id);
  };

  return (
    <div className="details-cont">
      <div className="text-slider">
        <div className="header">
          <h1>FAQ</h1>
          <p>
            Five strata of leniter integrata sapiens sanitas that curat de te
            omni tempore, non solum cum iam scis te aegrotum esse.
          </p>
        </div>
        <div className="container">
          <div className="summary-cont">
            {detailsData.map((data, indx) => (
              <Info
                key={indx}
                onToggle={handleToggle}
                open={openId === data.id}
                id={data.id}
                title={data.title}
                content={data.content}
              />
            ))}
          </div>

          <div className="img-cont">
            <Image src={"/details.png"} alt="details" />
          </div>
        </div>
      </div>
    </div>
  );
};

interface InfoProps {
  id: number;
  open: boolean;
  onToggle?: (id: number) => void;
  title: string;
  content: string;
}
const Info: React.FC<InfoProps> = ({ id, onToggle, open, title, content }) => {
  const contentRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    gsap.set(contentRef.current, { height: 0, opacity: 0 });
  }, []);

  useEffect(() => {
    if (!open) {
      gsap.to(contentRef.current, {
        height: 0,
        opacity: 0,
        duration: 0.5,
      });
    } else {
      gsap.to(contentRef.current, {
        height: "auto",
        opacity: 1,
        duration: 0.5,
      });
    }
  }, [open]);

  const handleDetails = () => {
    if (onToggle) onToggle(id);
  };
  return (
    <div className="info-cont">
      <div className="summary" onClick={handleDetails}>
        <h3>{title}</h3>
        <div>{open ? "-" : "+"}</div>
      </div>
      <div ref={contentRef}>
        <p>{content}</p>
      </div>
    </div>
  );
};

export default DetailSection;
