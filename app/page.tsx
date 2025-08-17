import About from "@/components/About";
import Approach from "@/components/Approach";
import DetailSection from "@/components/DetailSection";
import Hero from "@/components/Hero";
import MetricsSection from "@/components/MetricsSection";
import Services from "@/components/Services";

export default function Home() {
  return (
    <div>
      <Hero />
      <About />
      <Services />
      <Approach />
      <DetailSection />
      <MetricsSection />
    </div>
  );
}
