import { Card, CardContent } from "@/components/ui/card";
import { FileText, Target, BarChart3 } from "lucide-react";

export const HowItWorksSection = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16">How it works</h2>
        
        <div className="grid lg:grid-cols-3 gap-12">
          <Card className="text-center p-8 relative">
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-lg">
              1
            </div>
            <CardContent className="space-y-6 pt-4">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                <FileText className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold">Paste job description</h3>
              <p className="text-muted-foreground">
                Candidate 5 provides match analysis so you know which roles you're a match for and how to improve your chances.
              </p>
              <div className="bg-accent/50 rounded p-4 mt-4">
                <p className="text-xs text-muted-foreground">
                  💡 Instant compatibility score with improvement suggestions
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="text-center p-8 relative">
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-lg">
              2
            </div>
            <CardContent className="space-y-6 pt-4">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                <Target className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold">Tailored CV instantly</h3>
              <p className="text-muted-foreground">
                Immediately highlighting how you fit the role and using keywords to get you past the recruiter's ATS screening.
              </p>
              <div className="bg-accent/50 rounded p-4 mt-4">
                <p className="text-xs text-muted-foreground">
                  🎯 ATS-optimized with role-specific keywords
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="text-center p-8 relative">
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-lg">
              3
            </div>
            <CardContent className="space-y-6 pt-4">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                <BarChart3 className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold">Stay organised</h3>
              <p className="text-muted-foreground">
                Track applications, get feedback, prepare for interviews and never miss deadlines in your job search.
              </p>
              <div className="bg-accent/50 rounded p-4 mt-4">
                <p className="text-xs text-muted-foreground">
                  📊 Complete application management dashboard
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};