import gsap from "gsap";
import React, { useRef } from "react";

interface NavItemProps {
  text: string;
}
const NavItem: React.FC<NavItemProps> = ({ text }) => {
  const mainHeaderRef = useRef<HTMLHeadingElement>(null);
  const subHeaderRef = useRef<HTMLHeadingElement>(null);

  const handleMouseOver = () => {
    gsap.to(mainHeaderRef.current, {
      yPercent: -100,
      duration: 0.3,
    });
    gsap.to(subHeaderRef.current, {
      yPercent: -100,
      duration: 0.3,
    });
  };

  const handleMouseLeave = () => {
    gsap.to(mainHeaderRef.current, {
      yPercent: 0,
      duration: 0.3,
    });
    gsap.to(subHeaderRef.current, {
      yPercent: 0,
      duration: 0.3,
    });
  };

  return (
    <div
      className="nav-item"
      onMouseOver={handleMouseOver}
      onMouseLeave={handleMouseLeave}
    >
      <h1 ref={mainHeaderRef}>{text}</h1>
      <h1 ref={subHeaderRef} className="sub-text">
        {text}
      </h1>
    </div>
  );
};

export default NavItem;
