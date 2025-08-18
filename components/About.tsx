"use client";

import React from "react";
import "@/styles/css/About.css";
import Image from "next/image";
import ProgressBar from "./ProgressBar";
import { ScrollTrigger } from "gsap/all";
import { OnImageLoad } from "@/lib/gsap/loader";

const ratingsData = [
  {
    title: "AAA",
    value: 82,
  },
  {
    title: "BBB",
    value: 49,
  },
  {
    title: "CCC",
    value: 99,
  },
  {
    title: "DDD",
    value: 95,
  },
];

const About = () => {
  return (
    <div className="about-cont">
      <div className="main">
        <div className="about-content">
          <h2>About us:</h2>
          <div>
            <p>
              YinYang Leadership began with a simple but powerful question: What
              if the real strength of a business lies in what we can’t measure
              on a spreadsheet?
            </p>
            <p>
              Our founder, Tanisha, spent over a decade partnering with leaders,
              teams, and organisations driven by big ambitions, rapid growth,
              and impressive results. However, an invisible thread ran through
              every success story and every setback: Culture is an intangible
              asset but its impact is anything but invisible.  This became the
              seed of YinYang Leadership. Inspired by the ancient philosophy
              that seemingly opposite forces can exist in harmony, we help
              organisations hold space for both vulnerability and strength,
              stability and evolution, introspection and bold action.
            </p>
            <p>
              Today, we stand alongside leaders and teams who believe that
              culture should be their greatest advantage and not their biggest
              blind spot. Through a thoughtfully designed culture compass,
              YinYang weaves together evidence based tools and facilitation that
              brings real conversations to life. Whether we’re co-creating a
              leadership journey, redesigning how you work, or guiding you
              through complex change, our purpose stays the same: to make your
              workplace more conscious, connected, and alive; so your people and
              your business can thrive side by side.
            </p>
          </div>
        </div>
        <div className="about-images">
          <ReImage
            src="/img/3.png"
            style={{
              rotate: "-5deg",
            }}
          />
          <ReImage
            src="/img/2.png"
            style={{
              rotate: "5deg",
            }}
          />
          <ReImage
            src="/img/1.png"
            style={{
              rotate: "1deg",
            }}
          />
        </div>
      </div>

      <div className="ratings">
        <h2>lorem ipsum</h2>
        <div className="ratings-content">
          {ratingsData.map((data, indx) => (
            <ProgressBar key={indx} title={data.title} value={data.value} />
          ))}
        </div>
      </div>

      <div className="intro-container">
        <Image
          className="profile-bkg"
          src="/profile-bkg.jpg"
          alt="profile"
          width={0}
          height={0}
          sizes="100vw"
          onLoad={OnImageLoad}
        />
        <div className="intro">
          <div className="image-cont">
            <Image
              src="/profile.jpg"
              alt="profile"
              width={0}
              height={0}
              sizes="100vw"
              onLoad={OnImageLoad}
            />
          </div>
          <div className="intro-content">
            <h1>Meet Tanisha M Jain</h1>
            <h4>Founder | Leadership Coach | Culture Facilitator</h4>
            <div className="introduction">
              <p>
                Tanisha M Jain has always been drawn to what sits beneath the
                surface—what drives us, connects us, and helps us thrive not
                just as individuals, but as teams and systems. That curiosity
                has taken her across strikingly different rooms: from coaching
                military leaders in the U.S. Army to guiding the culture
                strategy of the world’s first LGBTQ credit union. From the
                boardrooms of Fortune 50 companies like Nike and Amazon to
                grassroots spaces redefining what leadership can look like.
              </p>
              <p>
                Through it all, one insight kept returning: when we focus only
                on performance, results may follow—but they rarely sustain. The
                real transformation happens when organizations stop trimming the
                branches and start tending to the roots. This became the seed of
                YinYang Leadership—a practice rooted in the belief that culture
                is not soft, nor secondary. It is the invisible force that
                determines whether people grow or burn out, whether strategy
                lands or floats.
              </p>
              <p>
                Tanisha is an ICF-certified coach and Columbia University
                graduate who blends over a decade of experience in leadership
                development with a lifelong exploration of Eastern wisdom and
                Western science. She integrates systems thinking, somatic
                practices, and deep dialogue to create spaces where both people
                and performance can evolve—together.
              </p>
              <p>
                She founded YinYang Leadership not as a consultancy, but as a
                collaborative movement. One that brings together best-in-class
                subject matter experts in coaching, talent management, systems
                change, and organizational design—so that clients have a single,
                trusted space for all their people and culture needs, without
                one-size-fits-all solutions.
              </p>
              <p>
                At the core of her work is a bold yet simple belief: when
                organizations lead from who they truly are—not just what they
                do—they unlock a kind of edge that no strategy slide can
                replicate. Culture becomes their differentiator. Their compass.
                And their most human advantage.
              </p>
            </div>
            <button>LET’S CONNECT WITH TANISHA</button>
          </div>
        </div>
      </div>
    </div>
  );
};

interface ImageProps {
  src: string;
  className?: string;
  style?: React.CSSProperties;
}
const ReImage: React.FC<ImageProps> = ({ style, src, className }) => {
  return (
    <Image
      style={style}
      src={src}
      alt="image-src"
      width={0}
      height={0}
      className={className}
      sizes="100vw"
      onLoad={OnImageLoad}
    />
  );
};

export default About;
