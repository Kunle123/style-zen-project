import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export const FinalCTASection = () => {
  return (
    <section className="py-12 md:py-20 px-4 sm:px-6 lg:px-8 bg-primary text-primary-foreground">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 md:mb-6">
          Start a job posting
        </h2>
        
        <p className="text-base md:text-lg mb-8 md:mb-12 opacity-90 max-w-2xl mx-auto">
          Post a job and get matched with qualified candidates instantly
        </p>
        
        {/* Job Posting Form */}
        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 md:p-8 mb-8 md:mb-12">
          <div className="space-y-4 max-w-md mx-auto">
            <Input 
              placeholder="Job title" 
              className="bg-white/20 border-white/30 text-white placeholder:text-white/70"
            />
            <Input 
              placeholder="Company name" 
              className="bg-white/20 border-white/30 text-white placeholder:text-white/70"
            />
            <Input 
              placeholder="Location" 
              className="bg-white/20 border-white/30 text-white placeholder:text-white/70"
            />
            <Button variant="secondary" className="w-full text-primary font-semibold">
              Post Job
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Alternative CTA */}
        <div className="space-y-4">
          <p className="text-sm md:text-base opacity-75">
            Or start building your CV today
          </p>
          <Button asChild size="lg" variant="secondary" className="text-base md:text-lg px-6 md:px-8 py-3 md:py-4">
            <Link to="/application-wizard">
              Start Free - Build My CV
              <ArrowRight className="ml-2 h-4 w-4 md:h-5 md:w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};