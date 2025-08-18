"use client";

import React, { useEffect, useRef } from "react";
import "@/styles/css/VideoCarousel.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import Image from "next/image";

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

  useEffect(() => {
    gsap.set(carouselRef.current, {
      x: "50%",
    });
    const horizontalTween = gsap.to(carouselRef.current, {
      x: "-50%",
      ease: "none",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 0%",
        toggleActions: "play none none none",
        scrub: true,
        pin: true,
      },
    });

    const cards = carouselRef.current?.querySelectorAll(".carousel-item");
    cards?.forEach((card, indx) => {
      gsap.fromTo(
        card,
        {
          scale: 1,
        },
        {
          scale: 1.2,
          ease: "none",
          scrollTrigger: {
            trigger: card,
            containerAnimation: horizontalTween,
            start: "top 60%",
            end: "center 50%",
            scrub: true,
            // markers: {
            //   indent: 100,
            //   fontSize: "20px",
            // },
          },
        }
      );
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
