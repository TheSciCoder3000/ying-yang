import About from "@/components/About";
import Approach from "@/components/Approach";
import Contact from "@/components/Contact";
import DetailSection from "@/components/DetailSection";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
// import ProjectProposal from "@/components/ProjectProposal";
// import Ratings from "@/components/Ratings";
// import MetricsSection from "@/components/MetricsSection";
import Services from "@/components/Services";
import VideoCarousel from "@/components/VideoCarousel";
import WhatWeDo from "@/components/WhatWeDo";

export default function Home() {
  return (
    <div>
      <div className="radial-gradient" />
      <Hero />
      <About />
      {/* <Ratings /> */}
      <WhatWeDo />
      <VideoCarousel />
      <Services />
      <Approach />
      <DetailSection />
      {/* <ProjectProposal /> */}
      <Contact />
      <Footer />
    </div>
  );
}
