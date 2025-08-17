"use client";
import gsap from "gsap";
import { SplitText } from "gsap/all";
import React, { ReactNode, useEffect, useRef } from "react";

interface SplitTextProps {
  children: ReactNode | ReactNode[];
  color: string;
}

gsap.registerPlugin(SplitText);

const SplitTextAnime: React.FC<SplitTextProps> = ({ children, color }) => {
  const spanRef = useRef<HTMLSpanElement>(null);
  useEffect(() => {
    const splitText = new SplitText(spanRef.current, { type: "chars" });
    const chars = splitText.chars;

    gsap.to(chars, {
      color,
      duration: 0.5,
      stagger: 0.2,
    });
  }, []);
  return (
    <span ref={spanRef} className="split">
      {children}
    </span>
  );
};

export default SplitTextAnime;
