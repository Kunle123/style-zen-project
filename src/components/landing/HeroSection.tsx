import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import celebratingProfessional from "@/assets/celebrating-professional-golden.jpg";

export const HeroSection = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-8">
            Land Interviews Twice as Fast...
          </h1>
          
          {/* Primary CTA above image */}
          <div className="mb-8">
            <Button asChild size="lg" className="text-lg px-8 py-6">
              <Link to="/application-wizard">
                Start Free - Build My CV
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <p className="text-sm text-muted-foreground mt-2">
              No credit card required. Cancel anytime.
            </p>
          </div>
          
          {/* Hero Image */}
          <div className="mb-12">
            <img 
              src={celebratingProfessional} 
              alt="Professional celebrating career success with proper CV optimization" 
              className="w-full max-w-4xl mx-auto rounded-lg"
            />
          </div>
          
          <h2 className="text-2xl md:text-3xl text-muted-foreground mb-8 max-w-4xl mx-auto">
            Generic CVs get ignored. Candidate 5 tailors your CV in minutes, making you over 100% more likely to land an interview.
          </h2>
          
          {/* Primary CTA below image */}
          <div>
            <Button asChild size="lg" className="text-lg px-8 py-6">
              <Link to="/application-wizard">
                Start Free - Build My CV
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <p className="text-sm text-muted-foreground mt-2">
              No credit card required. Cancel anytime.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};