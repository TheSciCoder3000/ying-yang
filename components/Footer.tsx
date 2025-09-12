"use client";

import React from "react";
import "@/styles/css/Footer.css";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { SiLinkedin } from "react-icons/si";
import Image from "./Image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer>
      <div className="main">
        <div className="links-cont">
          <div className="link-group">
            <Image className="logo" src={"/yinyang-logo.png"} alt="logo" />
            <p className="company-desc">
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

          <div className="link-group">
            <div className="social-cont">
              {/* <Link target="_blank" rel="noopener noreferrer" className="social-link" href={"https://www.linkedin.com/company/yinyang-leadership/"}>
                <SiInstagram className="icon" size={20} />
              </Link>

              <Link target="_blank" rel="noopener noreferrer" className="social-link" href={"https://www.linkedin.com/company/yinyang-leadership/"}>
                <SiFacebook className="icon" size={20} />
              </Link> */}

              <Link
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                href={"https://www.linkedin.com/company/yinyang-leadership/"}
              >
                <SiLinkedin className="icon" size={20} />
              </Link>
            </div>
            <div className="cat-cont">
              <div className="cat-content">
                <h2>Let&apos;s work together</h2>
                <h3>Call YinYang</h3>
              </div>
              <button>
                <ArrowUpRight size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="icon-cont">
        <h1>YinYang</h1>
      </div>
    </footer>
  );
};

export default Footer;
