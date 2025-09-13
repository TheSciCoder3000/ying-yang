"use client";

import React, { useRef } from "react";
import "@/styles/css/VideoCarousel.css";
import gsap from "gsap";
import { Flip, ScrollTrigger } from "gsap/all";
import Image from "./Image";
import { useGSAP } from "@gsap/react";
import Intro from "./Intro";

gsap.registerPlugin(ScrollTrigger, useGSAP, Flip);

const data = [
  {
    title: "Melissa",
    subtitle: "Head of People & Culture",
    description:
      "“The Leadership Model that YinYang codified for us, has become our Bible. I link it in 360 Assessments, share it in leadership training - it’s the reference point for everything we do now. There’s no way I could’ve created something like that without YinYang.”",
    image: "/testimonials/melissa-hauser.jpg",
  },
  {
    title: "Sean",
    subtitle: "Chief Operations Officer",
    description:
      "“The implementation roadmap YinYang built for us was such a game-changer. It gave us structure but also freedom to adapt. It enabled us to take ownership and continue embedding the work even after YinYang left the system.”",
    image: "/testimonials/sean-young.jpg",
  },
  {
    title: "Farzeen Patel",
    subtitle: "Chief People Officer",
    description:
      "“Partnering with you has been a truly transformative experience for our recruitment process. Your expertise in developing clear, structured, and effective recruitment standards has not only streamlined our hiring practices but also ensured we attract and select the right talent for our organization. Thanks for your support, we now have a robust framework that aligns with our organizational values and long-term goals. We are grateful for your contribution.”",
    image: "/testimonials/stock.png",
  },
  {
    title: "Ankur v",
    subtitle: "Managing Director, Eminent Group",
    description:
      "“YinYang Leadership helped us move beyond buzzwords to uncover the values that truly define us. The process was honest, challenging, and left our leadership team more aligned than ever.”",
    image: "/testimonials/ankur-jain.jpg",
  },
];

const VideoCarousel = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const carouselRef = useRef<HTMLDivElement>(null);

  const ScaleUpAnime = (card: Element) => {
    const state = Flip.getState(card);
    card.classList.add("card-expanded");
    Flip.from(state, { duration: 0.5, ease: "power1.inOut" });
  };

  const ScaleDownAnime = (card: Element) => {
    const state = Flip.getState(card);
    card.classList.remove("card-expanded");
    Flip.from(state, { duration: 0.5, ease: "power1.inOut" });
  };

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      mm.add("(min-width: 480px)", () => {
        if (!carouselRef.current) return;

        const style = window.getComputedStyle(carouselRef.current);
        const gapValue = style.getPropertyValue("gap");
        const gapPx = parseFloat(gapValue);

        gsap.set(carouselRef.current, {
          xPercent: 100,
        });

        const masterTl = gsap.timeline();

        const horizontalTl = gsap.timeline().to(carouselRef.current, {
          xPercent: -50,
          ease: "none",
        });

        const panningTl = gsap
          .timeline()
          .from(".absolute-cont", { yPercent: 100 });

        masterTl.add(horizontalTl).add(panningTl);

        ScrollTrigger.create({
          animation: masterTl,
          trigger: containerRef.current,
          start: "top 0%",
          end: `0%+=5000`,
          toggleActions: "play none none none",
          scrub: true,
          pin: true,
          invalidateOnRefresh: true,
        });

        const cards = carouselRef.current?.querySelectorAll(".carousel-item");
        cards?.forEach((card) => {
          ScrollTrigger.create({
            trigger: card,
            containerAnimation: horizontalTl,
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
          });
        });
      });

      mm.add("(max-width: 479px)", () => {
        const itemEls =
          containerRef.current!.querySelectorAll(".carousel-item");

        itemEls.forEach((item) => {
          gsap.from(item, {
            x: 100,
            opacity: 0,
            scrollTrigger: {
              trigger: item,
              start: "top center",
            },
          });
        });
      });
    },
    { scope: containerRef }
  );

  return (
    <div className="carousel-cont" ref={containerRef}>
      <div className="carousel-main-cont">
        <h1 className="main-header">
          We empower our clients to scale today while building for the future.
        </h1>
        <div className="carousel" ref={carouselRef}>
          {data.map((item, indx) => (
            <div key={indx} className="carousel-item">
              <Image src={item.image} alt="cover" />
              <div className="content">
                <div className="quote">
                  <p>{item.description}</p>
                </div>
                <div className="header">
                  <h2>{item.title}</h2>
                  <h3>{item.subtitle}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Intro />
    </div>
  );
};

export default VideoCarousel;
