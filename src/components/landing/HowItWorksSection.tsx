import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export const HowItWorksSection = () => {
  return (
    <section className="py-12 md:py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-6xl mx-auto">
        {/* Job Posting Section */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6 text-foreground">
            Paste a job posting
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Our AI will instantly analyze what the employer is looking for
          </p>
          
          {/* Large text area mockup */}
          <div className="max-w-2xl mx-auto bg-muted/50 border-2 border-dashed border-muted-foreground/30 rounded-lg p-8 md:p-12 mb-8">
            <div className="text-left space-y-3 text-muted-foreground">
              <p className="text-sm">Job Title: Senior Marketing Manager</p>
              <p className="text-sm">Company: Tech Startup Inc.</p>
              <p className="text-sm">Location: London, UK</p>
              <p className="text-sm">Requirements:</p>
              <p className="text-xs">• 5+ years marketing experience</p>
              <p className="text-xs">• Digital marketing expertise</p>
              <p className="text-xs">• Team leadership skills...</p>
            </div>
          </div>
          
          <Button asChild size="lg" className="mb-8">
            <Link to="/application-wizard">
              Analyze Job Posting
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>

        {/* Showcase Your Skills Section */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6 text-foreground">
            Showcase your skills
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Tell us about your experience and achievements
          </p>
          
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <Card className="text-left">
              <CardContent className="p-6">
                <h3 className="font-semibold mb-3">Experience</h3>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <p>• Marketing Manager at ABC Corp (3 years)</p>
                  <p>• Digital Marketing Specialist (2 years)</p>
                  <p>• Led team of 5 marketers</p>
                </div>
              </CardContent>
            </Card>
            
            <Card className="text-left">
              <CardContent className="p-6">
                <h3 className="font-semibold mb-3">Achievements</h3>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <p>• Increased leads by 150%</p>
                  <p>• Managed £500K marketing budget</p>
                  <p>• Launched 20+ campaigns</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Stay Informed Section */}
        <div className="text-center">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6 text-foreground">
            Stay informed
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Track your applications and get notified of new opportunities
          </p>
          
          <Card className="max-w-2xl mx-auto">
            <CardContent className="p-6">
              <div className="space-y-4 text-left">
                <div className="flex justify-between items-center">
                  <span className="text-sm">Marketing Manager - TechCorp</span>
                  <span className="text-xs bg-warning text-warning-foreground px-2 py-1 rounded">Applied</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm">Senior Marketing Role - StartupXYZ</span>
                  <span className="text-xs bg-success text-success-foreground px-2 py-1 rounded">Interview</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm">Marketing Director - BigCorp</span>
                  <span className="text-xs bg-muted text-muted-foreground px-2 py-1 rounded">Saved</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};