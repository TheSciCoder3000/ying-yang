"use client";

import React, { useRef } from "react";
// import "@/styles/css/VideoCarousel.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
// import Image from "./Image";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const ScalingTweenVars: gsap.TweenVars = {
  ease: "none",
  duration: 0.3,
};

const data = [
  {
    title: "Mustafa Bayramoglu",
    link: "/testimonials/1.mp4",
    subtitle: "Founder, dev.tools",
    description:
      "“I’ve had a great experience. They research thoroughly, handle details, and save me a ton of time. Their designs are on point, and pricing is fair. Highly recommended!”",
  },
  {
    title: "Mustafa Bayramoglu",
    link: "/testimonials/2.mp4",
    subtitle: "Founder, dev.tools",
    description:
      "“I’ve had a great experience. They research thoroughly, handle details, and save me a ton of time. Their designs are on point, and pricing is fair. Highly recommended!”",
  },
  {
    title: "Mustafa Bayramoglu",
    link: "/testimonials/3.mp4",
    subtitle: "Founder, dev.tools",
    description:
      "“I’ve had a great experience. They research thoroughly, handle details, and save me a ton of time. Their designs are on point, and pricing is fair. Highly recommended!”",
  },
  {
    title: "Mustafa Bayramoglu",
    link: "/testimonials/4.mp4",
    subtitle: "Founder, dev.tools",
    description:
      "“I’ve had a great experience. They research thoroughly, handle details, and save me a ton of time. Their designs are on point, and pricing is fair. Highly recommended!”",
  },
  {
    title: "Mustafa Bayramoglu",
    link: "/testimonials/5.mp4",
    subtitle: "Founder, dev.tools",
    description:
      "“I’ve had a great experience. They research thoroughly, handle details, and save me a ton of time. Their designs are on point, and pricing is fair. Highly recommended!”",
  },
];

const TestimonialV2 = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const carouselRef = useRef<HTMLDivElement>(null);

  const ScaleUpAnime = (card: Element) => {
    const vidContainer = card.querySelector(".testimonial-img");
    const vid = vidContainer?.querySelector("video");

    gsap.to(vidContainer, {
      width: "24rem",
      ...ScalingTweenVars,
    });

    vid?.play();
  };

  const ScaleDownAnime = (card: Element) => {
    const vidContainer = card.querySelector(".testimonial-img");
    const vid = vidContainer?.querySelector("video") as HTMLMediaElement;

    gsap.to(vidContainer, {
      width: "14rem",
      ...ScalingTweenVars,
    });

    vid.currentTime = 0;
    vid.pause();
  };

  const initializeAnimation = (startPercent: number) => {
    if (!carouselRef.current || !containerRef.current) return;

    const style = window.getComputedStyle(carouselRef.current);
    const gapValue = style.getPropertyValue("gap");
    const gapPx = parseFloat(gapValue);
    const cards = carouselRef.current?.querySelectorAll(".carousel-item");

    const horizontalTween = gsap.fromTo(
      carouselRef.current,
      {
        xPercent: startPercent,
        ease: "none",
      },
      {
        xPercent: -60,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: `bottom+=${cards.length * 1000}`,
          pin: true,
          pinSpacing: true,
          scrub: true,
          // markers: true,
        },
      }
    );

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
        // markers: true,
      });
    });
  };

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      mm.add("(max-width: 800px)", () => initializeAnimation(20));
      mm.add("(min-width: 810px)", () => initializeAnimation(70));
    },
    { scope: containerRef }
  );

  return (
    <div
      className="carousel-cont pt-20 px-6 text-md lg:pt-[8%] lg:text-lg relative overflow-hidden min-h-[100vh] max-w-[50vw]"
      ref={containerRef}
    >
      <h1 className="text-4xl text-[#272666] ml-5 md:ml-20 mb-10 font-semibold max-w-[50rem]">
        We empower our clients to scale today while building for the future.
      </h1>
      <div className="carousel w-fit flex gap-15 flex-nowrap" ref={carouselRef}>
        {data.map((item, indx) => (
          <div
            key={indx}
            className="carousel-item flex flex-col gap-5 bg-[#F4F5F6] h-fit p-2 rounded-lg"
          >
            <div className="testimonial-img w-[14rem] aspect-video overflow-hidden rounded-lg">
              {/* <Image className="w-full" src="/testimonial.png" alt="cover" /> */}
              <YoutubePlayerContainer id={item.link} />
            </div>
            <div className="content px-1 pb-4">
              <div className="header">
                <h2 className="mb-1">{item.title}</h2>
                <h3 className="text-sm text-gray-500">{item.subtitle}</h3>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

interface YoutubeProps {
  id: string;
}
const YoutubePlayerContainer: React.FC<YoutubeProps> = ({ id }) => {
  return (
    <video
      src={id}
      className="video-player size-full"
      muted
      playsInline
      controls
    />
  );
};

export default TestimonialV2;
