"use client";

import React from "react";
import "@/styles/css/Footer.css";
import Image from "next/image";
import { OnImageLoad } from "@/lib/gsap/loader";
import { ArrowDown } from "lucide-react";

const Footer = () => {
  return (
    <footer>
      <div className="main">
        <div className="links-cont">
          <div className="link-group">
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry&apos;s standard dummy.
            </p>
            <button>
              Company Deck{" "}
              <div className="arrow-cont">
                <ArrowDown color="#EAFE57" className="arrow-down" size={20} />
              </div>
            </button>
          </div>
          <div className="link-group">
            <h1>MENU</h1>
            <div className="links">
              <a href="">About</a>
              <a href="">Work</a>
              <a href="">Contact</a>
            </div>
          </div>
          <div className="link-group">
            <h1>GET INSPIRED</h1>
            <div className="links">
              <a href="">Facebook</a>
              <a href="">Instagram</a>
            </div>
          </div>
        </div>

        <div className="icon-cont">
          <Image
            src={"/icon.png"}
            alt="icon"
            width={0}
            height={0}
            sizes="100vw"
            onLoad={OnImageLoad}
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
