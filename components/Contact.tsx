"use client";

import React, { useEffect, useRef } from "react";
import "@/styles/css/Contact.css";

import gsap from "gsap";

const Contact = () => {
  const arrowRef = useRef<HTMLHeadingElement>(null);
  const contactRef = useRef<HTMLHeadingElement>(null);

  const handleEnter = () => {
    gsap.to(contactRef.current, {
      x: "8.5rem",
    });
    gsap.to(arrowRef.current, {
      opacity: 1,
      x: "1rem",
    });
  };

  const handleExit = () => {
    gsap.to(contactRef.current, {
      x: 0,
    });
    gsap.to(arrowRef.current, {
      opacity: 0,
      x: 0,
    });
  };

  return (
    <>
      <div className="contact-cont">
        <h2>Ready to add some BeMotion to your project?</h2>
        <h3>Let’s make something amazing together!</h3>
        <div className="link-cont">
          <h1 ref={arrowRef} className="arrow">
            →
          </h1>
          <h1
            ref={contactRef}
            onMouseLeave={handleExit}
            onMouseEnter={handleEnter}
          >
            CONTACT ME TODAY!
          </h1>
        </div>
      </div>
      <div className="separator-end"></div>
    </>
  );
};

export default Contact;
