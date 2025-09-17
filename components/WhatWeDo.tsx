"use client";

import React, { useRef } from "react";
import "@/styles/css/WhatWeDo.css";
import Image from "./Image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { Observer, ScrollTrigger } from "gsap/all";

const DataIndiv = [
  {
    title: "Executive & Leadership Coaching",
    description: "Unlock clarity and influence to scale faster accelerate",
    image: "/icons/bar.svg",
  },
  {
    title: "Manager Development",
    description:
      "Turn first-time or seasoned people leaders into capable multipliers of high performance.",
    image: "/icons/leader.svg",
  },
  {
    title: "High-Potential Development",
    description:
      "Fast-track future leaders for bigger roles and responsibilities.",
    image: "/icons/growth.svg",
  },
];
const DataTeams = [
  {
    title: "CoreStyles™ Team Diagnostic",
    description:
      "Transform collaboration, resolve conflict, and build high-performing teams using psychometric tools.",
    image: "/icons/managers.svg",
  },
  {
    title: "Leadership Team Visioning",
    description:
      "Align your top team on a unified future vision, values and ways of working.",
    image: "/icons/managers.svg",
  },
  {
    title: "Strategic Team Offsite",
    description:
      "Design immersive experiences that build alignment, clarity, and momentum.",
    image: "/icons/growth.svg",
  },
];
const DataOrg = [
  {
    title: "Growth Barriers Diagnostic",
    description:
      "Uncover what’s holding your team back — from retention and engagement to capability and communication gaps — and unlock targeted solutions to scale faster.",
    image: "/icons/founder.svg",
  },
  {
    title: "Build Your Culture Architecture",
    description:
      "Codify “how we lead here” into a structured model that drives clarity, consistency, and performance across the company.",
    image: "/icons/bar.svg",
  },
  {
    title: "Embed Culture Into People Systems",
    description:
      "Hardwire that model into hiring, onboarding, performance management, succession and rewards so culture lives in daily operations",
    image: "/icons/leader.svg",
  },
];

gsap.registerPlugin(useGSAP, ScrollTrigger);

const WhatWeDo = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    let allowScroll = true; // sometimes we want to ignore scroll-related stuff, like when an Observer-based section is transitioning.
    const scrollTimeout = gsap
      .delayedCall(0.5, () => (allowScroll = true))
      .pause(); // controls how long we should wait after an Observer-based animation is initiated before we allow another scroll-related action
    let currentIndex = 0;
    const swipePanels = gsap.utils.toArray<HTMLDivElement>(".content-body");
    const labels = gsap.utils.toArray<HTMLDivElement>(".for-who-item");
    const isTouch = ScrollTrigger.isTouch;

    if (isTouch === 1) {
      ScrollTrigger.normalizeScroll(true);
    }

    // set z-index levels for the swipe panels
    gsap.set(swipePanels, { zIndex: (i) => swipePanels.length - i });

    interface MyObserver extends Observer {
      _restoreScroll?: () => void;
    }

    // create an observer and disable it to start
    const intentObserver = ScrollTrigger.observe({
      type: "wheel,touch",
      onUp: () => allowScroll && gotoPanel(currentIndex - 1, false),
      onDown: () => allowScroll && gotoPanel(currentIndex + 1, true),
      tolerance: 10,
      preventDefault: true,
      onEnable(self: MyObserver) {
        allowScroll = false;
        scrollTimeout.restart(true);
        // when enabling, we should save the scroll position and freeze it. This fixes momentum-scroll on Macs, for example.
        const savedScroll = self.scrollY();
        self._restoreScroll = () => self.scrollY(savedScroll); // if the native scroll repositions, force it back to where it should be
        document.addEventListener("scroll", self._restoreScroll, {
          passive: false,
        });
      },
      onDisable: (self: MyObserver) => {
        if (self._restoreScroll)
          document.removeEventListener("scroll", self._restoreScroll);
      },
    });
    intentObserver.disable();

    // handle the panel swipe animations
    function gotoPanel(index: number, isScrollingDown: boolean) {
      // return to normal scroll if we're at the end or back up to the start
      if (
        (index === swipePanels.length && isScrollingDown) ||
        (index === -1 && !isScrollingDown)
      ) {
        intentObserver.disable(); // resume native scroll
        return;
      }
      allowScroll = false;
      scrollTimeout.restart(true);

      const target = swipePanels[index];

      const prevTarget = isScrollingDown
        ? swipePanels[index - 1]
        : swipePanels[index + 1];

      const labelTarget = labels[index];

      const prevLabel = isScrollingDown ? labels[index - 1] : labels[index + 1];

      gsap.fromTo(
        target,
        {
          y: isScrollingDown ? 100 : -100,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
        }
      );

      gsap.to(prevTarget, {
        y: isScrollingDown ? 100 : -100,
        opacity: 0,
      });

      gsap.fromTo(
        labelTarget.querySelector("h1"),
        {
          background: "rgb(39, 39, 39)",
          color: "gray",
        },
        {
          background: "white",
          color: "black",
        }
      );

      gsap.fromTo(
        prevLabel.querySelector("h1"),
        {
          background: "white",
          color: "black",
        },
        {
          background: "rgb(39, 39, 39)",
          color: "gray",
        }
      );

      currentIndex = index;
    }

    // pin swipe section and initiate observer
    ScrollTrigger.create({
      trigger: containerRef.current,
      pin: true,
      start: "top 10%",
      onEnter: (self) => {
        if (intentObserver.isEnabled) {
          return;
        } // in case the native scroll jumped past the end and then we force it back to where it should be.
        self.scroll(self.start + 1); // jump to just one pixel past the start of this section so we can hold there.
        intentObserver.enable(); // STOP native scrolling
      },
      onEnterBack: (self) => {
        if (intentObserver.isEnabled) {
          return;
        } // in case the native scroll jumped backward past the start and then we force it back to where it should be.
        self.scroll(self.end - 1); // jump to one pixel before the end of this section so we can hold there.
        intentObserver.enable(); // STOP native scrolling
      },
    });
  });

  return (
    <div ref={containerRef} className="we-do-cont">
      <div className="header">
        <h1>what we do</h1>
        <p>
          We help businesses unlock growth by aligning strategy with culture.
          From refining your brand voice to building systems that scale, we
          bridge the gap between vision and execution. Our approach blends data,
          design, and human insight—turning business challenges into
          opportunities for sustainable success.
        </p>
      </div>

      <div className="for-who-cont">
        <div className="for-who-item">
          <h1>For Individuals</h1>
        </div>
        <div className="for-who-item">
          <h1>For Teams</h1>
        </div>
        <div className="for-who-item">
          <h1>For Organizations</h1>
        </div>
      </div>

      <div className="content-cont">
        <div className="content-body">
          <div className="content-items">
            {DataIndiv.map((item, indx) => (
              <Item key={indx} {...item} />
            ))}
          </div>
        </div>
        <div className="content-body">
          <div className="content-items">
            {DataTeams.map((item, indx) => (
              <Item key={indx} {...item} />
            ))}
          </div>
        </div>
        <div className="content-body">
          <div className="content-items">
            {DataOrg.map((item, indx) => (
              <Item key={indx} {...item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

interface ItemProps {
  title: string;
  description: string;
  image: string;
}
const Item: React.FC<ItemProps> = ({ title, description, image }) => {
  return (
    <div className="item-cont">
      <Image src={image} alt={image} />
      <div className="item-content">
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default WhatWeDo;
