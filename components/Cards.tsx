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
    title: "Culture Immersion · See your culture with fresh eyes",
    description: `
      We start with a deep dive, including our proprietary Culture 
      Compass survey, to uncover your company’s strengths, growth 
      areas, and hidden dynamics shaping performance.
    `,
    color: "#00E7ED",
  },
  {
    title: "Leadership Alignment · Unite leaders around vision and values",
    description: `
      Through an interactive leadership workshop, we align your 
      top team on strategy, clarify values, and build the shared 
      commitment needed to drive change.
    `,
    color: "#00C9CE",
  },
  {
    title: "Tailored Interventions · Design solutions that stick",
    description: `
      From leadership coaching to team trainings to systems design, 
      we deliver a customized plan that addresses your specific 
      needs and accelerates performance.
    `,
    color: "#01B1B5",
  },
  {
    title: "Culture Roadmap · Build for the long game",
    description: `
      We hand over a 3–5 year roadmap that sets up your people 
      practices to sustain growth, resilience, and trust long 
      after the initial intervention
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

    // const mm = gsap.matchMedia();

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
    // mm.add("(min-width: 480px)", () => {
    // });

    // mm.add("(max-width: 479px)", () => {
    //   gsap.to(cardRef.current, {
    //     ease: "none",
    //     scrollTrigger: {
    //       trigger: cardRef.current,
    //       start: "top 12%-=" + 10 * indx,
    //       end: "bottom bottom",
    //       endTrigger: ".cards-container",
    //       scrub: true,
    //       pin: cardRef.current,
    //       pinSpacing: false,
    //     },
    //   });
    // });
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
