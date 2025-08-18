"use client";

import React, { useEffect, useReducer, useRef, useState } from "react";
import "@/styles/css/VideoCarousel.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import Image from "next/image";
import { OnImageLoad } from "@/lib/gsap/loader";

gsap.registerPlugin(ScrollTrigger);

const data = [
  {
    title: "Mustafa Bayramoglu",
    subtitle: "Founder, dev.tools",
    description:
      "“I’ve had a great experience. They research thoroughly, handle details, and save me a ton of time. Their designs are on point, and pricing is fair. Highly recommended!”",
  },
  {
    title: "Mustafa Bayramoglu",
    subtitle: "Founder, dev.tools",
    description:
      "“I’ve had a great experience. They research thoroughly, handle details, and save me a ton of time. Their designs are on point, and pricing is fair. Highly recommended!”",
  },
  {
    title: "Mustafa Bayramoglu",
    subtitle: "Founder, dev.tools",
    description:
      "“I’ve had a great experience. They research thoroughly, handle details, and save me a ton of time. Their designs are on point, and pricing is fair. Highly recommended!”",
  },
  {
    title: "Mustafa Bayramoglu",
    subtitle: "Founder, dev.tools",
    description:
      "“I’ve had a great experience. They research thoroughly, handle details, and save me a ton of time. Their designs are on point, and pricing is fair. Highly recommended!”",
  },
  {
    title: "Mustafa Bayramoglu",
    subtitle: "Founder, dev.tools",
    description:
      "“I’ve had a great experience. They research thoroughly, handle details, and save me a ton of time. Their designs are on point, and pricing is fair. Highly recommended!”",
  },
];

const VideoCarousel = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const carouselRef = useRef<HTMLDivElement>(null);

  const ScaleUpAnime = (card: Element) => {
    const vid = card.querySelector("img");
    const quote = card.querySelector(".quote");

    gsap.to(vid, {
      width: "20rem",
      ease: "none",
    });

    gsap.to(quote, {
      height: "auto",
      ease: "none",
    });
  };

  const ScaleDownAnime = (card: Element) => {
    const vid = card.querySelector("img");
    const quote = card.querySelector(".quote");

    gsap.to(vid, {
      width: "15rem",
      ease: "none",
    });

    gsap.to(quote, {
      height: 0,
      ease: "none",
    });
  };

  useEffect(() => {
    if (!carouselRef.current) return;

    const style = window.getComputedStyle(carouselRef.current);
    const gapValue = style.getPropertyValue("gap");
    const gapPx = parseFloat(gapValue);

    gsap.set(carouselRef.current, {
      x: "50%",
    });

    const getWidth = () => {
      const cards = carouselRef.current?.querySelectorAll(".carousel-item");
      if (!cards || cards?.length <= 0) return 0;
      const width = cards[0].getBoundingClientRect().width;

      const finalWidth = (width + gapPx) * cards.length;
      console.log(`final width: ${finalWidth}`);
      return finalWidth;
    };

    const horizontalTween = gsap.to(carouselRef.current, {
      x: "-=" + getWidth(),
      ease: "none",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 0%",
        end: `0%+=${getWidth()}`,
        toggleActions: "play none none none",
        scrub: true,
        pin: true,
        invalidateOnRefresh: true,
        // markers: {
        //   indent: 100,
        //   fontSize: "20px",
        // },
      },
    });

    const cards = carouselRef.current?.querySelectorAll(".carousel-item");
    gsap.set(".quote", {
      height: 0,
    });
    cards?.forEach((card, indx) => {
      ScrollTrigger.create({
        trigger: card,
        containerAnimation: horizontalTween,
        start: "top 60%",
        end: `100%+=${gapPx} 60%`,
        invalidateOnRefresh: true,
        onEnter: () => {
          ScaleUpAnime(card);
        },
        onEnterBack: () => {
          ScaleUpAnime(card);
        },
        onLeaveBack: () => {
          ScaleDownAnime(card);
        },
        onLeave: () => {
          ScaleDownAnime(card);
        },
        // markers: {
        //   indent: 100,
        //   fontSize: "20px",
        // },
      });
    });
  }, []);
  return (
    <div className="carousel-cont" ref={containerRef}>
      <h1>
        We empower our clients to scale today while building for the future.
      </h1>
      <div className="carousel" ref={carouselRef}>
        {data.map((item, indx) => (
          <div key={indx} className="carousel-item">
            <Image
              src="/img/1.png"
              alt="cover"
              width={0}
              height={0}
              sizes="100vw"
              onLoad={OnImageLoad}
            />
            <div className="content">
              <div className="quote">{item.description}</div>
              <div className="header">
                <h2>{item.title}</h2>
                <h3>{item.subtitle}</h3>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VideoCarousel;
