"use client";

import React, { useEffect, useRef } from "react";
// import "@/styles/css/VideoCarousel.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import Image from "./Image";

gsap.registerPlugin(ScrollTrigger);

const data = [
  {
    title: "Melissa",
    subtitle: "Head of People & Culture",
    description:
      "“The Leadership Model that YinYang codified for us, has become our Bible. I link it in 360 Assessments, share it in leadership training - it’s the reference point for everything we do now. There’s no way I could’ve created something like that without YinYang.”",
  },
  {
    title: "Sean",
    subtitle: "Chief Operations Officer",
    description:
      "“The implementation roadmap YinYang built for us was such a game-changer. It gave us structure but also freedom to adapt. It enabled us to take ownership and continue embedding the work even after YinYang left the system.”",
  },
  {
    title: "Farzeen Patel",
    subtitle: "Chief People Officer",
    description:
      "“Partnering with you has been a truly transformative experience for our recruitment process. Your expertise in developing clear, structured, and effective recruitment standards has not only streamlined our hiring practices but also ensured we attract and select the right talent for our organization. Thanks for your support, we now have a robust framework that aligns with our organizational values and long-term goals. We are grateful for your contribution.”",
  },
  {
    title: "Ankur v",
    subtitle: "Managing Director, Eminent Group",
    description:
      "“YinYang Leadership helped us move beyond buzzwords to uncover the values that truly define us. The process was honest, challenging, and left our leadership team more aligned than ever.”",
  },
];

const VideoCarousel = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const carouselRef = useRef<HTMLDivElement>(null);

  const ScaleUpAnime = (card: Element) => {
    const vid = card.querySelector("img");
    const quote = card.querySelector(".quote");

    gsap.to(vid, {
      width: "30rem",
      ease: "none",
    });

    gsap.to(quote, {
      height: "auto",
      width: "28rem",
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
      width: "12rem",
      ease: "none",
    });
  };

  useEffect(() => {
    if (!carouselRef.current) return;

    const style = window.getComputedStyle(carouselRef.current);
    const gapValue = style.getPropertyValue("gap");
    const gapPx = parseFloat(gapValue);

    gsap.set(carouselRef.current, {
      xPercent: 60,
    });

    const horizontalTween = gsap.to(carouselRef.current, {
      xPercent: -50,
      ease: "none",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 0%",
        end: `0%+=5000`,
        toggleActions: "play none none none",
        scrub: true,
        pin: true,
        invalidateOnRefresh: true,
      },
    });

    const cards = carouselRef.current?.querySelectorAll(".carousel-item");
    gsap.set(".quote", {
      height: 0,
    });
    cards?.forEach((card) => {
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
      });
    });
  }, []);
  return (
    <div
      className="pt-20 px-6 text-md lg:text-lg relative overflow-hidden min-h-[100vh]"
      ref={containerRef}
    >
      <h1 className="text-4xl text-[#008080] ml-5 md:ml-20 mb-5 font-semibold max-w-[50rem]">
        We empower our clients to scale today while building for the future.
      </h1>
      <div className="carousel w-fit flex gap-5 flex-nowrap" ref={carouselRef}>
        {data.map((item, indx) => (
          <div
            key={indx}
            className="carousel-item flex flex-col gap-5 bg-[#ffffff12] h-fit w-fit p-2 rounded-lg"
          >
            <Image
              className="w-[15rem] aspect-video overflow-hidden rounded-lg object-cover"
              src="/img/1.png"
              alt="cover"
            />
            <div className="content px-1 pb-4 w-full">
              <div className="quote overflow-hidden text-sm font-light text-gray-400 w-[10rem] h-0 box-border">
                <p className="pb-4">{item.description}</p>
              </div>
              <div className="header">
                <h2 className="mb-1">{item.title}</h2>
                <h3 className="text-sm font-extralight text-gray-300">
                  {item.subtitle}
                </h3>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VideoCarousel;
