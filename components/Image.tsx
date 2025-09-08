"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import NextImage from "next/image";

gsap.registerPlugin(ScrollTrigger);

interface ImageProps {
  src: string;
  alt: string;
  className?: string;
  style?: React.CSSProperties;
}
const Image: React.FC<ImageProps> = ({ style, src, alt, className }) => {
  const OnImageLoad = () => {
    ScrollTrigger.refresh();
  };

  return (
    <NextImage
      style={style}
      src={src}
      alt={alt}
      width={0}
      height={0}
      className={className}
      sizes="100vw"
      onLoad={OnImageLoad}
    />
  );
};

export default Image;
