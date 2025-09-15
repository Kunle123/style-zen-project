import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export const HowItWorksSection = () => {
  const steps = [
    {
      number: "1",
      title: "Paste a job posting",
      description: "Copy and paste any job posting you want to apply for. Our AI will analyze the requirements instantly.",
    },
    {
      number: "2", 
      title: "Showcase your skills",
      description: "Tell us about your experience, skills, and achievements. We'll help you highlight what matters most.",
    },
    {
      number: "3",
      title: "Stay informed",
      description: "Get notified when new opportunities match your profile and track your application progress.",
    },
  ];

  return (
    <section className="py-12 md:py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 text-foreground">
            How It Works
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Get interview-ready in just 3 simple steps
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mb-12 md:mb-16">
          {steps.map((step, index) => (
            <div key={index} className="text-center space-y-4">
              <div className="w-12 h-12 md:w-16 md:h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xl md:text-2xl font-bold mx-auto">
                {step.number}
              </div>
              <h3 className="text-lg md:text-xl font-semibold text-foreground">
                {step.title}
              </h3>
              <p className="text-sm md:text-base text-muted-foreground">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center bg-muted/30 rounded-lg p-6 md:p-8">
          <h3 className="text-xl md:text-2xl font-bold mb-4 text-foreground">
            Ready to accelerate your career?
          </h3>
          <p className="text-muted-foreground mb-6 md:mb-8">
            Join thousands of professionals who've landed their dream jobs faster
          </p>
          <Button asChild size="lg" className="text-base md:text-lg px-6 md:px-8 py-3 md:py-4">
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