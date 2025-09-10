import About from "@/components/About";
import Approach from "@/components/Approach";
import Contact from "@/components/Contact";
import DetailSection from "@/components/DetailSection";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import InfiniteScroll from "@/components/InfiniteScroll";
import Intro from "@/components/Intro";
import ProjectProposal from "@/components/ProjectProposal";
import Ratings from "@/components/Ratings";
// import MetricsSection from "@/components/MetricsSection";
import Services from "@/components/Services";
import TestimonialV2 from "@/components/TestimonialV2";
import VideoCarousel from "@/components/VideoCarousel";
import WhatWeDo from "@/components/WhatWeDo";

export default function Home() {
  return (
    <div>
      <Hero />
      <InfiniteScroll />
      <TestimonialV2 />
      {/* <About />
      <Ratings />
      <Intro />
      <WhatWeDo />
      <Services />
      <Approach />
      <DetailSection />
      <VideoCarousel />
      <ProjectProposal />
      <Contact />
      <Footer /> */}
    </div>
  );
}
