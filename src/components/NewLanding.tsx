import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, FileText, Target, BarChart3 } from "lucide-react";
import { Link } from "react-router-dom";
import celebratingProfessional from "@/assets/celebrating-professional.jpg";
import cvFolderIcon from "@/assets/cv-folder-icon.png";
import timerIcon from "@/assets/timer-icon.png";
import calendarIcon from "@/assets/calendar-icon.png";

export const NewLanding = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-primary">Candidate 5</h1>
            </div>
            
            <div className="flex items-center gap-4">
              <Button variant="outline">
                Start Free - Build My CV
              </Button>
              <Button>
                Get Started Free
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold mb-8">
              Land Interviews Twice as Fast...
            </h1>
            
            {/* Hero Image */}
            <div className="mb-12">
              <img 
                src={celebratingProfessional} 
                alt="Professional celebrating success" 
                className="w-full max-w-4xl mx-auto rounded-lg"
              />
            </div>
            
            <h2 className="text-2xl md:text-3xl text-muted-foreground mb-16 max-w-4xl mx-auto">
              Generic CVs get ignored. Candidate 5 tailors your CV in minutes, making you over 100% more likely to land an interview.
            </h2>
          </div>

          {/* Stats Section */}
          <div className="grid md:grid-cols-3 gap-8 mb-20">
            <div className="text-center">
              <div className="text-6xl md:text-7xl font-bold text-primary mb-4">80%</div>
              <div className="text-xl text-muted-foreground mb-6">CVs never seen</div>
              <img src={cvFolderIcon} alt="CV folder icon" className="w-20 h-20 mx-auto" />
            </div>
            
            <div className="text-center">
              <div className="text-6xl md:text-7xl font-bold text-primary mb-4">8s</div>
              <div className="text-xl text-muted-foreground mb-6">Average view time</div>
              <img src={timerIcon} alt="Timer icon" className="w-20 h-20 mx-auto" />
            </div>
            
            <div className="text-center">
              <div className="text-6xl md:text-7xl font-bold text-primary mb-4">28 days</div>
              <div className="text-xl text-muted-foreground mb-6">Avg. time to find a job</div>
              <img src={calendarIcon} alt="Calendar icon" className="w-20 h-20 mx-auto" />
            </div>
          </div>

          {/* Stats That Matter */}
          <div className="bg-muted/50 rounded-lg p-8 md:p-12 mb-20">
            <h2 className="text-3xl font-bold mb-8 text-center">Stats That Matter</h2>
            <div className="space-y-6 text-lg max-w-4xl mx-auto">
              <p>
                <strong>80% of CVs</strong> never reach a recruiter - they are filtered out by the Applicant Tracking System (ATS)
              </p>
              <p>
                A recruiter will spend <strong>6 - 8 seconds</strong> reviewing a CV before deciding whether to reject it
              </p>
              <p>
                The <strong>28 days spent searching</strong> can be costly, is often fraught and is very intense work.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
              <Button size="lg">Sign Up</Button>
              <Button variant="outline" size="lg">Download</Button>
            </div>
          </div>
        </div>
      </section>

      {/* How it Works */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">How it works</h2>
          
          <div className="grid lg:grid-cols-3 gap-12">
            <Card className="text-center p-8">
              <CardContent className="space-y-6">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                  <FileText className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold">Paste job description</h3>
                <p className="text-muted-foreground">
                  Candidate 5 will provide match analysis so you know which roles you're a match for and how to improve your chances.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-8">
              <CardContent className="space-y-6">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                  <Target className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold">Tailored CV instantly</h3>
                <p className="text-muted-foreground">
                  Immediately highlighting how you fit the role and using keywords to get you past the recruiters ATS screening.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-8">
              <CardContent className="space-y-6">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                  <BarChart3 className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold">Track your journey</h3>
                <p className="text-muted-foreground">
                  See your applications, get feedback prepare for interview and manage you search.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <blockquote className="text-2xl md:text-3xl font-medium mb-6">
            "Within days, my reworked CV got noticed. The dashboard is a game-changer for tracking!"
          </blockquote>
          <cite className="text-xl text-muted-foreground">A. Morgan</cite>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Build your CV in minutes.
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Instantly tailor. Start for free.
          </p>
          <Button size="lg" className="text-lg px-8 py-6">
            Start Free - Build My CV
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-bold mb-4">Features</h3>
              <ul className="space-y-2">
                <li><Link to="/ats-proof" className="text-muted-foreground hover:text-foreground">ATS Proof</Link></li>
                <li><Link to="/career-arc" className="text-muted-foreground hover:text-foreground">Career Arc</Link></li>
                <li><Link to="/application-tracker" className="text-muted-foreground hover:text-foreground">Application Tracker</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Company</h3>
              <ul className="space-y-2">
                <li><Link to="/about" className="text-muted-foreground hover:text-foreground">About</Link></li>
                <li><Link to="/pricing" className="text-muted-foreground hover:text-foreground">Pricing</Link></li>
                <li><Link to="/contact" className="text-muted-foreground hover:text-foreground">Contact</Link></li>
              </ul>
            </div>
          </div>
          <div className="border-t mt-8 pt-8 text-center">
            <p className="text-muted-foreground">
              © 2024 Candidate 5. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};