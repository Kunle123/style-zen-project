import { NavigationHeader } from "./landing/NavigationHeader";
import { HeroSection } from "./landing/HeroSection";
import { StatsSection } from "./landing/StatsSection";
import { VideoSection } from "./landing/VideoSection";
import { HowItWorksSection } from "./landing/HowItWorksSection";
import { TestimonialsSection } from "./landing/TestimonialsSection";
import { TrustSignalsSection } from "./landing/TrustSignalsSection";
import { FinalCTASection } from "./landing/FinalCTASection";
import { FooterSection } from "./landing/FooterSection";

export const NewLanding = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <NavigationHeader />
      <main>
        <HeroSection />
        <StatsSection />
        <VideoSection />
        <HowItWorksSection />
        <TestimonialsSection />
        <TrustSignalsSection />
        <FinalCTASection />
      </main>
      <FooterSection />
    </div>
  );
};