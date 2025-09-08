"use client";

import { OnImageLoad } from "@/lib/gsap/loader";
import "@/styles/css/Cards.css";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import Image from "next/image";
import React, { useRef } from "react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const cardData = [
  {
    title: "BOOK A DEMO",
    description: `
      It all starts with a click. Schedule a demo and lett us 
      prove we're more useful than your friend who still owes you 500 bucks.
    `,
    icon: "/bulb.png",
    color: "#00E7ED",
  },
  {
    title: "MEET OUR EXECUTIVE",
    description: `
      No jargon, no boring PPTs. Our team explains the software 
      in plain English (and maybe some sarcasm) so you actually get it.
    `,
    icon: "/stack.png",
    color: "#00C9CE",
  },
  {
    title: "EXPERIENCE THE BEST SUPPORT",
    description: `
      Questions? Issues? Existential crises about accounting? 
      Our support is faster than your client's "payment in 2 
      working days" reply.
    `,
    icon: "/tag.png",
    color: "#01B1B5",
  },
  {
    title: "BEYOND JUST SOFTWARE",
    description: `
      We don't just leave you hanging. We also guide you with accounting 
      queries, tips, and shortcuts-because real business problems need real solutions.
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
  icon,
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
        start: "top " + (100 - 10 * indx),
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
          <Image
            src={icon}
            alt="icon"
            height={0}
            width={0}
            sizes="100vw"
            onLoad={OnImageLoad}
          />
        </div>
      </div>
    </div>
  );
};

export default Cards;
