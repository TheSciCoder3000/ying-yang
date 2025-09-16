import React from "react";
import Image from "./Image";
import "@/styles/css/Intro.css";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const Intro = () => {
  return (
    <div className="absolute-cont">
      <div className="intro-container">
        <Image className="profile-bkg" src="/profile-bkg.jpg" alt="profile" />
        <div className="profile-filter" />
        <div className="intro">
          <div className="image-cont">
            <div className="radial-bkg" />
            <Image src="/portrait.png" alt="profile" />
          </div>
          <div className="intro-content">
            <h1>Meet Tanisha Jain</h1>
            <h4>Founder | Leadership Coach | Culture Facilitator</h4>
            <div className="introduction">
              <p>
                My journey into leadership and culture began not in a classroom,
                but in my very first job. I experienced a merger gone painfully
                wrong. Brilliant minds came together, but without alignment or
                processes, everything unraveled. That moment planted a seed: if
                culture is ignored, even the smartest strategies fail.
              </p>
              <p>
                This led me to New York, where I earned my Master’s at Columbia
                University and became an ICF-certified coach. Over the last
                decade, I have worked across very different worlds: coaching
                military leaders in the U.S. Army, shaping the culture strategy
                of the world’s first LGBTQ credit union, working inside Fortune
                50 companies like Nike and Amazon, and supporting grassroots
                communities experimenting with new ways of leading.
              </p>
              <p>
                Those experiences revealed one undeniable truth: in every
                industry, at every scale, culture is not the backdrop; it is the
                stage on which everything else plays out. It decides whether
                people grow or burn out, whether strategy takes root or drifts,
                whether trust is built or broken. After years of witnessing both
                success and failure up close, I’ve learned that culture is never
                secondary. It is the difference between organizations that
                merely perform and those that truly endure.
              </p>
              <p>
                This insight became the foundation for YinYang Leadership, a
                consultancy designed as a collaborative movement. We bring
                together internal leaders who understand their organizations
                deeply and external experts who bring fresh perspective,
                creating solutions neither could achieve alone.
              </p>
              <p>
                Our mission is simple: to help organizations make culture their
                edge, their compass, and their most human advantage.
              </p>
            </div>
            <button>LET’S CONNECT</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Intro;
