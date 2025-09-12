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
    title: "Book a Chat · Unlock the Unseen",
    description: `
      Start with a conversation, not a spreadsheet. 
      Let’s explore what’s beneath the surface—what 
      spreadsheets can’t capture, but culture can.
    `,
    icon: "/bulb.png",
    color: "#00E7ED",
  },
  {
    title: "Connect with a Culture Coach · Real Talk, Real Insight",
    description: `
      No jargon, no fluff. Our experts speak 
      business and humanity fluently—helping 
      you uncover the invisible forces shaping 
      your organization.
    `,
    icon: "/stack.png",
    color: "#00C9CE",
  },
  {
    title: "Experience the Culture Compass · Evidence Meets Experience",
    description: `
      Dive into our proprietary tool. Be immersed in data-driven 
      workshops and powerful facilitation. See insights come alive 
      in ways you can feel—and act on.
    `,
    icon: "/tag.png",
    color: "#01B1B5",
  },
  {
    title: "Thrive in Harmony · Built for Long-Term Impact",
    description: `
      Your culture becomes your growth engine. Collaboration, 
      clarity, and conscious leadership become the bedrock of 
      your business—not just now, but for what’s next."
    `,
    icon: "/pencil.png",
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
            icon={card.icon}
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
  icon: string;
  color: string;
}
const Card: React.FC<CardProps> = ({
  indx,
  title,
  description,
  // icon,
  color,
}) => {
  const cardRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.set(cardRef.current, {
      rotate: `-${3 + 1.2 * indx}deg`,
    });
    gsap.to(cardRef.current, {
      ease: "none",
      scrollTrigger: {
        trigger: cardRef.current,
        start: "top 25%-=" + 10 * indx,
        end: "bottom bottom",
        endTrigger: ".cards-container",
        scrub: true,
        pin: cardRef.current,
        pinSpacing: false,
      },
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
