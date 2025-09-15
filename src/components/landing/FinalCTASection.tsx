import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export const FinalCTASection = () => {
  return (
    <section className="py-12 md:py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6 text-foreground">
          Get started today
        </h2>
        
        <p className="text-lg text-muted-foreground mb-8 md:mb-12 max-w-2xl mx-auto">
          Join thousands of professionals who are landing interviews faster with optimized CVs
        </p>
        
        <div className="space-y-6">
          <Button asChild size="lg" className="text-base md:text-lg px-8 md:px-12 py-4 md:py-6">
            <Link to="/application-wizard">
              Start Free Trial
              <ArrowRight className="ml-2 h-4 w-4 md:h-5 md:w-5" />
            </Link>
          </Button>
          
          <p className="text-sm text-muted-foreground">
            No credit card required • 7-day free trial • Cancel anytime
          </p>
        </div>
      </div>
    </section>
  );
};