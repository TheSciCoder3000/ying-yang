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
                I didn’t learn leadership in a classroom. I learned it the hard
                way. In my very first job, I watched a merger implode. Brilliant
                people, powerful strategies, but without alignment or culture,
                everything collapsed. That was my wake-up call: if culture is
                ignored, even genius fails.
              </p>
              <p>
                That insight carried me from India to New York, where I earned
                my Master’s at Columbia and became an ICF-certified coach. Since
                then, my path has spanned unlikely extremes:
              </p>
              <p>
                And in every world, one truth roared louder than strategy decks
                or balance sheets:{" "}
                <span>culture isn’t the backdrop, it’s the stage.</span>
                It makes or breaks everything.
              </p>
              <ul>
                <li>Training officers in the Army.</li>
                <li>
                  Defining the culture playbook for the world’s first LGBTQ
                  credit union.
                </li>
                <li>Coaching with Fortune 50 giants like Nike and Amazon.</li>
                <li>
                  Building capacity in grassroots communities daring to lead in
                  new ways.
                </li>
              </ul>
              <p>
                That is why I founded <span>YinYang Leadership.</span> Not just
                a consultancy, but a movement. We refuse cookie-cutter fixes.
                Instead, we bring insiders who live the culture and outsiders
                who can disrupt it into the same room, sparking solutions
                neither could find alone. It is not theory. It is not workshops
                that die in binders. It is culture made actionable, measurable,
                and impossible to ignore.
              </p>
              <p>
                Our mission is radical in its simplicity: to make culture your{" "}
                <span>edge, compass, and unfair advantage.</span> Because
                strategy may point the way, but culture decides if you ever
                arrive.
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
