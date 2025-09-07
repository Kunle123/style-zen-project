import { Button } from "@/components/ui/button";
import { ArrowRight, Clock } from "lucide-react";
import { Link } from "react-router-dom";

export const FinalCTASection = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-primary/5 to-primary-glow/5">
      <div className="max-w-4xl mx-auto text-center">
        <div className="flex items-center justify-center gap-2 mb-6">
          <Clock className="w-6 h-6 text-primary" />
          <span className="text-lg font-semibold text-primary">Don't Get Lost</span>
        </div>
        
        <h2 className="text-3xl md:text-5xl font-bold mb-6">
          Start Free Today
        </h2>
        
        <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
          While you're reading this, <strong>thousands of CVs are being filtered out</strong>. 
          Make sure yours isn't one of them.
        </p>
        
        <div className="space-y-4">
          <Button asChild size="lg" className="text-lg px-12 py-6">
            <Link to="/application-wizard">
              Start Free - Build My CV
              <ArrowRight className="ml-2 h-6 w-6" />
            </Link>
          </Button>
          
          <p className="text-sm text-muted-foreground">
            ✓ No credit card required &nbsp;•&nbsp; ✓ Cancel anytime &nbsp;•&nbsp; ✓ Start in 30 seconds
          </p>
        </div>
        
        <div className="mt-12 p-6 bg-warning-light rounded-lg border border-warning/20">
          <p className="text-warning-foreground font-medium">
            ⚠️ <strong>Every day you wait costs money.</strong> The average professional loses £104 per day while job searching.
          </p>
        </div>
      </div>
    </section>
  );
};