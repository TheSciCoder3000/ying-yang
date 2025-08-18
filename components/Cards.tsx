"use client";

import { OnImageLoad } from "@/lib/gsap/loader";
import "@/styles/css/Cards.css";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import Image from "next/image";
import React, { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const cardData = [
  {
    title: "LOREM",
    description:
      "I create strong, memorable brand identities that resonate with your values and connect with your target audience. From logo design to brand guidelines, I ensure your brand stands out and leaves a lasting impression.",
    icon: "/bulb.png",
    color: "black",
  },
  {
    title: "LOREM IPSUM",
    description:
      "Beautiful and user-friendly web design that not only looks great but also delivers an engaging experience. I focus on crafting designs that capture the essence of your brand and turn visitors into loyal customers.",
    icon: "/stack.png",
    color: "#008080",
  },
  {
    title: "LOREM IPSUM",
    description:
      "I bring web designs to life with clean, efficient code, prioritizing the performance and accessibility of the website. This ensures your site is fast, responsive, and usable for everyone.",
    icon: "/tag.png",
    color: "#BC2637",
  },
  {
    title: "LOREM",
    description:
      "Visual content that stands out. Whether it's marketing materials, social media graphics, or print design, I create eye-catching visuals that communicate your message effectively.",
    icon: "/pencil.png",
    color: "black",
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
        // invalidateOnRefresh: true,
        // markers: {
        //   indent: 100 * indx,
        //   fontSize: "20px",
        // },
      },
    });
  }, []);

  // useEffect(() => {
  //   gsap.set(cardRef.current, {
  //     rotate: `-${3 + 1.2 * indx}deg`,
  //   });
  //   gsap.to(cardRef.current, {
  //     ease: "none",
  //     scrollTrigger: {
  //       trigger: cardRef.current,
  //       start: "top " + (100 - 10 * indx),
  //       end: "bottom bottom",
  //       endTrigger: ".cards-container",
  //       scrub: true,
  //       pin: cardRef.current,
  //       pinSpacing: false,
  //       invalidateOnRefresh: true,
  //       // markers: {
  //       //   indent: 100 * indx,
  //       //   fontSize: "20px",
  //       // },
  //     },
  //   });
  // }, [indx]);
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
