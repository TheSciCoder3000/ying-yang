import React from "react";
import Image from "./Image";

const Intro = () => {
  return (
    <div className="w-screen mb-36 py-6 px-32 relative text-black">
      <Image
        className="absolute top-0 left-0 w-full h-full object-cover z-5"
        src="/profile-bkg.jpg"
        alt="profile"
      />
      <div className="relative z-10 flex gap-28 my-28">
        <div className="flex-1">
          <Image
            className="object-cover w-full h-full"
            src="/profile.jpg"
            alt="profile"
          />
        </div>
        <div className="flex-[1.5]">
          <h1 className="text-5xl mb-4">Meet Tanisha M Jain</h1>
          <h4
            style={{ wordSpacing: "1em" }}
            className="font-light text-sm uppercase mb-8"
          >
            Founder | Leadership Coach | Culture Facilitator
          </h4>
          <div className="introduction">
            <p className="text-sm mb-4 font-light">
              Our founder Tanisha, together with her partners at YinYang, are
              business psychologists who have spent over a decade working with
              fast-growing businesses, fortune 500 companies, ambitious leaders,
              and high-performing teams. Across every success and every
              struggle, they discovered the same truth: culture is intangible,
              but its impact is impossible to ignore.
            </p>
            <p className="text-sm mb-4 font-light">
              That insight became the seed of YinYang Leadership. Rooted in the
              philosophy that opposites must come together to form a whole, we
              help organizations design the leadership and cultural foundations
              that unlock faster business performance and long-term success.
            </p>
            <p className="text-sm mb-4 font-light">
              Through our proprietary Culture Compass, we bring evidence based
              tools, powerful facilitation, and an immersive learning
              experience. Whether we’re co-creating leadership journeys,
              redesigning ways of working, or guiding you through complex
              change, our purpose is clear: to make workplaces more conscious,
              connected, and alive; so your people and your business thrive
              together!
            </p>
          </div>
          <button className="text-sm border-2 border-black mt-8 py-3 px-5 tracking-[0.2em] bg-transparent cursor-pointer transition-all hover:bg-black hover:text-white">
            LET’S CONNECT WITH TANISHA
          </button>
        </div>
      </div>
    </div>
  );
};

export default Intro;
