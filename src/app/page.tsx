import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import DonateSection from "../components/DonateSection";
import ImpactSection from "../components/ImpactSection";
import WhatWeDoSection from "../components/WhatWeDoSection";
import WhySection from "../components/WhySection";
import QuoteSection from "../components/QuoteSection";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="bg-white min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 flex flex-col gap-0">
        <HeroSection />
        <DonateSection />
        <ImpactSection />
        <WhatWeDoSection />
        <WhySection />
        <QuoteSection />
      </main>
      <Footer />
    </div>
  );
}
