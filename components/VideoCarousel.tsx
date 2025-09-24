"use client";

import React, { useEffect, useRef, useState } from "react";
import "@/styles/css/VideoCarousel.css";
import gsap from "gsap";
import { Observer, ScrollTrigger } from "gsap/all";
import Image from "./Image";
import { useGSAP } from "@gsap/react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import usePinHook from "@/lib/hooks/usePinHook";

gsap.registerPlugin(ScrollTrigger, useGSAP, Observer);

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

function getItemState(index: number, active: number) {
  if (index === active) return " active";
  if (index === active - 1 || (active === 0 && index === data.length - 1))
    return " prev";
  if (index === active + 1 || (active === data.length - 1 && index === 0))
    return " next";
  return "";
}

function modWithLimits(value: number, min: number): number {
  const range = data.length - min;
  return ((((value - min) % range) + range) % range) + min;
}

const VideoCarousel = () => {
  const [active, setActive] = useState(0);
  const [mouseOverItem, setMouseOverItem] = useState(false);
  const containerRef = usePinHook();
  const carouselRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (mouseOverItem) return;

    const timeout = setTimeout(
      () => setActive((state) => (state + 1) % data.length),
      4000
    );
    return () => clearTimeout(timeout);
  }, [active, mouseOverItem]);

  const handleOver = () => setMouseOverItem(true);

  const handleOut = () => setMouseOverItem(false);

  useGSAP(
    () => {
      Observer.create({
        target: carouselRef.current,
        type: "touch",
        tolerance: 200,
        onRight: () => setActive((state) => modWithLimits(state - 1, 0)),
        onLeft: () => setActive((state) => modWithLimits(state + 1, 0)),
        // preventDefault: true,
      });
    },
    { scope: containerRef }
  );

  return (
    <div className="carousel-cont" ref={containerRef}>
      <div className="carousel-main-cont">
        <h1 className="main-header">What Our Clients Say</h1>
        <div className="carousel" ref={carouselRef}>
          {data.map((item, indx) => (
            <div
              key={indx}
              className={`carousel-item${getItemState(indx, active)}`}
            >
              <div
                className="carousel-card"
                onMouseOver={() => (indx === active ? handleOver() : null)}
                onMouseOut={() => (indx === active ? handleOut() : null)}
              >
                <div className="content">
                  <div className="header">
                    <div className="user-info">
                      <h2>{item.title}</h2>
                      <h3>{item.subtitle}</h3>
                    </div>
                    <Image src={item.image} alt="cover" />
                  </div>
                  <div className="quote">
                    <p>{item.description}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
          <div className="carousel-btn left">
            <button>
              <ChevronLeft
                size={50}
                onClick={() =>
                  setActive((state) => modWithLimits(state - 1, 0))
                }
              />
            </button>
          </div>
          <div className="carousel-btn right">
            <button>
              <ChevronRight
                size={50}
                onClick={() =>
                  setActive((state) => modWithLimits(state + 1, 0))
                }
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoCarousel;
