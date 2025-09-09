import React from "react";
import Image from "./Image";
import "@/styles/css/Intro.css";

const Intro = () => {
  return (
    <div className="intro-container">
      <Image className="profile-bkg" src="/profile-bkg.jpg" alt="profile" />
      <div className="intro">
        <div className="image-cont">
          <Image src="/profile.jpg" alt="profile" />
        </div>
        <div className="intro-content">
          <h1>Meet Tanisha M Jain</h1>
          <h4>Founder | Leadership Coach | Culture Facilitator</h4>
          <div className="introduction">
            <p>
              Our founder Tanisha, together with her partners at YinYang, are
              business psychologists who have spent over a decade working with
              fast-growing businesses, fortune 500 companies, ambitious leaders,
              and high-performing teams. Across every success and every
              struggle, they discovered the same truth: culture is intangible,
              but its impact is impossible to ignore.
            </p>
            <p>
              That insight became the seed of YinYang Leadership. Rooted in the
              philosophy that opposites must come together to form a whole, we
              help organizations design the leadership and cultural foundations
              that unlock faster business performance and long-term success.
            </p>
            <p>
              Through our proprietary Culture Compass, we bring evidence based
              tools, powerful facilitation, and an immersive learning
              experience. Whether we’re co-creating leadership journeys,
              redesigning ways of working, or guiding you through complex
              change, our purpose is clear: to make workplaces more conscious,
              connected, and alive; so your people and your business thrive
              together!
            </p>
          </div>
          <button>LET’S CONNECT WITH TANISHA</button>
        </div>
      </div>
    </div>
  );
};

export default Intro;
