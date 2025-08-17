"use client";

import React, { useEffect, useRef, useState } from "react";
import "@/styles/css/Details.css";
import Image from "next/image";
import gsap from "gsap";

const detailsData = [
  {
    id: 0,
    title: "in necessitate",
    content: `Cum privata assecuratione medica, es haesus per annum. Non potes
          addere autremovere tegmen. Punica est variabilis subscriptio et potes
          addere aut removere servitia quandocumque vis.`,
  },
  {
    id: 1,
    title: "in necessitate",
    content: `Cum privata assecuratione medica, es haesus per annum. Non potes
          addere autremovere tegmen. Punica est variabilis subscriptio et potes
          addere aut removere servitia quandocumque vis.`,
  },
  {
    id: 2,
    title: "in necessitate",
    content: `Cum privata assecuratione medica, es haesus per annum. Non potes
          addere autremovere tegmen. Punica est variabilis subscriptio et potes
          addere aut removere servitia quandocumque vis.`,
  },
];

const DetailSection = () => {
  const [openId, setOpenId] = useState<number | null>(null);

  const handleToggle = (id: number) => {
    if (id === openId) setOpenId(null);
    else setOpenId(id);
  };
  return (
    <div className="details-cont">
      <div className="text-slider">
        <div className="header">
          <h1>Lorem-lorem sapiens sanitas</h1>
          <p>
            Five strata of leniter integrata sapiens sanitas that curat de te
            omni tempore, non solum cum iam scis te aegrotum esse.
          </p>
        </div>
        <div className="container">
          <div className="summary-cont">
            {detailsData.map((data, indx) => (
              <Info
                key={indx}
                onToggle={handleToggle}
                open={openId === data.id}
                id={data.id}
                title={data.title}
                content={data.content}
              />
            ))}
          </div>

          <div className="img-cont">
            <Image
              src={"/details.png"}
              alt="details"
              height={0}
              width={0}
              sizes="100vw"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

interface InfoProps {
  id: number;
  open: boolean;
  onToggle?: (id: number) => void;
  title: string;
  content: string;
}
const Info: React.FC<InfoProps> = ({ id, onToggle, open, title, content }) => {
  const contentRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    gsap.set(contentRef.current, { height: 0, opacity: 0 });
  }, []);

  useEffect(() => {
    if (!open) {
      gsap.to(contentRef.current, {
        height: 0,
        opacity: 0,
        duration: 0.5,
      });
    } else {
      gsap.to(contentRef.current, {
        height: "auto",
        opacity: 1,
        duration: 0.5,
      });
    }
  }, [open]);

  const handleDetails = () => {
    if (onToggle) onToggle(id);
  };
  return (
    <div className="info-cont">
      <div className="summary" onClick={handleDetails}>
        <h3>{title}</h3>
        <div>{open ? "-" : "+"}</div>
      </div>
      <div ref={contentRef}>
        <p>{content}</p>
      </div>
    </div>
  );
};

export default DetailSection;
