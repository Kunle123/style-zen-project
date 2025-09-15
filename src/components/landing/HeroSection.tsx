import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export const HeroSection = () => {
  return (
    <section className="py-12 md:py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 md:mb-8 text-foreground">
            Land Interviews Twice as Fast
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-8 md:mb-12 max-w-3xl mx-auto">
            Generic CVs get ignored. Candidate 5 tailors your CV in minutes, making you over 100% more likely to land an interview.
          </p>
          
          {/* CTA Button */}
          <div className="mb-12 md:mb-16">
            <Button asChild size="lg" className="text-base md:text-lg px-6 md:px-8 py-3 md:py-4">
              <Link to="/application-wizard">
                Start Free - Build My CV
                <ArrowRight className="ml-2 h-4 w-4 md:h-5 md:w-5" />
              </Link>
            </Button>
            <p className="text-sm text-muted-foreground mt-3">
              No credit card required. Cancel anytime.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};