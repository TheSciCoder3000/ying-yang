import React from "react";
import "@/styles/css/Footer.css";
import Image from "next/image";

const Footer = () => {
  return (
    <footer>
      <div className="main">
        <div className="links-cont">
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
          />
        </div>
      </div>
      <div className="copyright-cont">
        <h4>
          © 2024 CONTRAZT MEDIA • Designed & developed by BeMotion • Privacy
          Policy
        </h4>
      </div>
    </footer>
  );
};

export default Footer;
