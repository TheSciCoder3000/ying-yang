import About from "@/components/About";
import Contact from "@/components/Contact";
import DetailSection from "@/components/DetailSection";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Intro from "@/components/Intro";
import Services from "@/components/Services";
import VideoCarousel from "@/components/VideoCarousel";
import WhatWeDo from "@/components/WhatWeDo";

export default function Home() {
  return (
    <div>
      <div className="radial-gradient" />
      <Hero />
      <About />
      <WhatWeDo />
      <VideoCarousel />
      <Intro />
      <Services />
      <DetailSection />
      <Contact />
      <Footer />
    </div>
  );
}
