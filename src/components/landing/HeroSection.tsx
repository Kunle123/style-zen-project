import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export const HeroSection = () => {
  return (
    <section className="py-12 md:py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-8 md:mb-12 text-foreground leading-tight">
            Land Interviews twice as fast
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-8 md:mb-12 max-w-3xl mx-auto">
            Our AI analyses job postings and instantly optimises your CV to match exactly what recruiters are looking for
          </p>
          
          <div className="mb-12 md:mb-16">
            <Button asChild size="lg" className="text-base md:text-lg px-8 md:px-12 py-4 md:py-6">
              <Link to="/application-wizard">
                Get started for free
                <ArrowRight className="ml-2 h-4 w-4 md:h-5 md:w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};