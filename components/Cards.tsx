"use client";

// import { OnImageLoad } from "@/lib/gsap/loader";
import "@/styles/css/Cards.css";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import React, { useRef } from "react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const cardData = [
  {
    title: "Diagnose What’s Real · See Beneath the Surface",
    description: `
    We begin by listening deeply. Through conversations, 
    culture diagnostics, and immersive inquiry, we uncover 
    what’s really happening in your organization—beyond 
    the polished reports and numbers. This is about surfacing 
    truths that are often felt but rarely spoken.
  `,
    color: "#00E7ED",
  },
  {
    title: "Define What Matters · Clarity Through Alignment",
    description: `
    From what we learn, we work with you to name the core themes—your 
    culture’s strengths, struggles, and aspirations. Together, we define 
    what really matters: the values, behaviors, and patterns that will 
    unlock growth and wellbeing. This becomes your cultural “north star.”
  `,
    color: "#00C9CE",
  },
  {
    title: "Design Through Co-Creation · Solutions That Stick",
    description: `
    We don’t hand you a playbook and walk away. Instead, we co-create with 
    your leaders and teams—designing workshops, rituals, practices, and 
    structures that are born from your reality. Because solutions designed 
    with people—not for them—are the ones that last.
  `,
    color: "#01B1B5",
  },
  {
    title: "Activate With Integrity · From Insight to Everyday Practice",
    description: `
    Activation is where culture shifts from concept to lived experience. 
    We guide you through facilitated sessions, leadership coaching, and 
    on-the-ground practices that bring alignment into action. Every step 
    is built with integrity—anchored in both evidence and empathy—so change 
    feels authentic, not forced.
  `,
    color: "#009B9F",
  },
];

const Cards = () => {
  return (
    <div className="cards-container">
      <div className="stacked-cards">
        {cardData.map((card, indx) => (
          <Card
            color={card.color}
            indx={indx}
            key={indx}
            title={card.title}
            description={card.description}
          />
        ))}
      </div>
    </div>
  );
};

interface CardProps {
  indx: number;
  title: string;
  description: string;
  color: string;
}
const Card: React.FC<CardProps> = ({ indx, title, description, color }) => {
  const cardRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.set(cardRef.current, {
      rotate: `-${3 + 1.2 * indx}deg`,
    });

    const mm = gsap.matchMedia();

    mm.add("(min-width: 480px)", () => {
      gsap.to(cardRef.current, {
        ease: "none",
        scrollTrigger: {
          trigger: cardRef.current,
          start: "top 34%-=" + 10 * indx,
          end: "bottom bottom",
          endTrigger: ".cards-container",
          scrub: true,
          pin: cardRef.current,
          pinSpacing: false,
        },
      });
    });

    mm.add("(max-width: 479px)", () => {
      gsap.to(cardRef.current, {
        ease: "none",
        scrollTrigger: {
          trigger: cardRef.current,
          start: "top 12%-=" + 10 * indx,
          end: "bottom bottom",
          endTrigger: ".cards-container",
          scrub: true,
          pin: cardRef.current,
          pinSpacing: false,
        },
      });
    });
  }, []);

  return (
    <div className="card" ref={cardRef} style={{ backgroundColor: color }}>
      <h1>{indx + 1}</h1>
      <div className="card-content">
        <div className="card-text">
          <h1>{title}</h1>
          <p>{description}</p>
        </div>
        <div className="card-icon">
          {/* <Image
            src={icon}
            alt="icon"
            height={0}
            width={0}
            sizes="100vw"
            onLoad={OnImageLoad}
          /> */}
        </div>
      </div>
    </div>
  );
};

export default Cards;
