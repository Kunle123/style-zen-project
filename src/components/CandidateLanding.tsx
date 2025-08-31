import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, ArrowRight, Clock, Target, Shield, Briefcase, FileText, BarChart3, X, Menu } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

export const CandidateLanding = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const mainPlans = [
    {
      name: "Free",
      price: "£0",
      period: "",
      description: "Get started with basic access",
      features: [
        "3 credits per month",
        "Up to 3 CVs per month",
        "Every CV comes with a tailored cover letter",
        "Every CV tailored to every job",
        "Keep an archive of your complete career history",
        "Basic access",
        "DocX CV downloads",
        "Email support"
      ],
      recommended: false,
      buttonText: "Get Started Free",
      buttonVariant: "default" as const
    },
    {
      name: "Monthly",
      price: "£24.99",
      period: "per month",
      description: "Perfect for career focused professionals",
      features: [
        "50 credits monthly recurring",
        "3 credits per day",
        "Create up to 140 CVs per month",
        "Every CV comes with a tailored cover letter",
        "Every CV tailored to every job",
        "Keep an archive of your complete career history",
        "Priority support",
        "Advanced features",
        "DocX CV downloads",
        "Cancel anytime"
      ],
      recommended: true,
      buttonText: "Start Monthly Plan",
      buttonVariant: "default" as const
    },
    {
      name: "Annual",
      price: "£199",
      period: "per year",
      description: "Best value with 33% discount",
      features: [
        "50 credits monthly recurring",
        "5 credits per day",
        "Create up to 200 CVs per month",
        "Every CV comes with a tailored cover letter",
        "Every CV tailored to every job",
        "Keep an archive of your complete career history",
        "Priority support",
        "Advanced features",
        "DocX CV downloads",
        "33% discount",
        "Cancel anytime"
      ],
      recommended: false,
      buttonText: "Choose Annual - Save 33%!",
      buttonVariant: "default" as const
    }
  ];

  const topUpPlan = {
    name: "Top-up",
    price: "£29.99",
    period: "one-off",
    description: "Pay as you go with no subscription",
    features: [
      "50 credits (one-off purchase)",
      "No subscription required",
      "Credits expire after 1 month",
      "Can be added to any plan",
      "Every CV comes with a tailored cover letter",
      "Every CV tailored to every job",
      "Keep an archive of your complete career history",
      "DocX CV downloads",
      "Email support"
    ],
    buttonText: "Buy Credits",
    buttonVariant: "default" as const
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-primary">Candidate 5</h1>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <Link to="/" className="text-muted-foreground hover:text-foreground px-3 py-2 text-sm font-medium">
                  Home
                </Link>
                <Link to="/career-arc" className="text-muted-foreground hover:text-foreground px-3 py-2 text-sm font-medium">
                  Career Arc
                </Link>
                <Link to="/cv-download" className="text-muted-foreground hover:text-foreground px-3 py-2 text-sm font-medium">
                  My CVs
                </Link>
              </div>
            </div>

            <div className="hidden md:block">
              <Button variant="outline" className="mr-2">
                Login
              </Button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-muted-foreground hover:text-foreground"
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 border-t">
                <Link to="/" className="text-muted-foreground hover:text-foreground block px-3 py-2 text-base font-medium">
                  Home
                </Link>
                <Link to="/career-arc" className="text-muted-foreground hover:text-foreground block px-3 py-2 text-base font-medium">
                  Career Arc
                </Link>
                <Link to="/cv-download" className="text-muted-foreground hover:text-foreground block px-3 py-2 text-base font-medium">
                  My CVs
                </Link>
                <Button variant="outline" className="w-full mt-2">
                  Login
                </Button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Eliminate Job Application <span className="text-primary">Time Waste</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-4xl mx-auto">
              Born out of the frustration from losing days of downtime between roles I wanted a tool that'd cut down the time it takes. For any role you're serious about it's worth putting the time in to get the cover letter and cv just right. Typically I'll spend 1 - 2 hours on each application and it's really boring repetitive work. Candidate 5 eliminates that wasted time and produces a quality cv that presents you in the best light.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg px-8 py-6">
                Create Your Free Account
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
            <p className="text-sm text-muted-foreground mt-4">
              Join now for free and get 3 CVs on our free tier and another each month for the casual job seeker.
            </p>
          </div>
          
          {/* Hero visual */}
          <div className="mt-16 relative">
            <div className="aspect-video bg-gradient-to-br from-primary/20 to-secondary/20 rounded-lg flex items-center justify-center">
              <div className="text-center">
                <div className="w-24 h-24 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                  <Briefcase className="w-12 h-12 text-primary" />
                </div>
                <p className="text-muted-foreground">AI Career Intelligence</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-muted/50 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Candidate5 Features
            </h2>
            <p className="text-xl text-muted-foreground">
              Everything you need to transform your job search
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Briefcase className="w-6 h-6 text-primary" />
                </div>
                <CardTitle>Creates a one stop profile - your career ark</CardTitle>
                <CardDescription>
                  Which stores the complete history of your career and past roles
                </CardDescription>
              </CardHeader>
            </Card>

            <Card>
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <BarChart3 className="w-6 h-6 text-primary" />
                </div>
                <CardTitle>Gives you an ATS score for each role</CardTitle>
                <CardDescription>
                  Highlighting keywords and those you're missing
                </CardDescription>
              </CardHeader>
            </Card>

            <Card>
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <FileText className="w-6 h-6 text-primary" />
                </div>
                <CardTitle>Generates customised CVs and cover letters</CardTitle>
                <CardDescription>
                  Populated with the most relevant info from your career ark info to the requirements
                </CardDescription>
              </CardHeader>
            </Card>

            <Card>
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Target className="w-6 h-6 text-primary" />
                </div>
                <CardTitle>Creates a history of all your applications</CardTitle>
                <CardDescription>
                  Salary, date applied etc.. so you can keep track of your live apps
                </CardDescription>
              </CardHeader>
            </Card>

            <Card>
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Shield className="w-6 h-6 text-primary" />
                </div>
                <CardTitle>CVs tailored precisely to each role</CardTitle>
                <CardDescription>
                  Highlighting your relevant skills and pruning those that don't quite match
                </CardDescription>
              </CardHeader>
            </Card>

            <Card>
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Clock className="w-6 h-6 text-primary" />
                </div>
                <CardTitle>Set your cv length and controls</CardTitle>
                <CardDescription>
                  Whether or not to include keywords and use bespoke tweaks
                </CardDescription>
              </CardHeader>
            </Card>

            <Card>
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <FileText className="w-6 h-6 text-primary" />
                </div>
                <CardTitle>Multi-language support</CardTitle>
                <CardDescription>
                  Request your CV to be translated into 12 supported languages
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Choose Your Plan
            </h2>
            <p className="text-xl text-muted-foreground">
              Select the perfect plan for your career journey. All plans include our AI-powered CV and cover letter generation.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {mainPlans.map((plan, index) => (
              <Card key={index} className={`relative flex flex-col ${plan.recommended ? 'border-primary shadow-lg scale-105' : ''}`}>
                {plan.recommended && (
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-primary text-primary-foreground">
                    Most Popular
                  </Badge>
                )}
                
                <CardHeader className="text-center pb-4">
                  <CardTitle className="text-2xl font-bold text-foreground">
                    {plan.name}
                  </CardTitle>
                  <div className="space-y-2">
                    <div className="text-4xl font-bold text-primary">
                      {plan.price}
                    </div>
                    <p className="text-muted-foreground">{plan.period}</p>
                    <p className="text-sm text-muted-foreground">
                      {plan.description}
                    </p>
                  </div>
                </CardHeader>
                
                <CardContent className="flex flex-col flex-1 justify-between space-y-6">
                  <ul className="space-y-3">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-3">
                        <Check className="h-5 w-5 text-primary flex-shrink-0" />
                        <span className="text-foreground text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Button 
                    variant={plan.buttonVariant} 
                    className="w-full"
                    size="lg"
                  >
                    {plan.buttonText}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="max-w-md mx-auto mb-12">
            <Card className="border-dashed border-2">
              <CardHeader className="text-center pb-4">
                <CardTitle className="text-xl font-bold text-foreground">
                  {topUpPlan.name}
                </CardTitle>
                <div className="space-y-2">
                  <div className="text-3xl font-bold text-primary">
                    {topUpPlan.price}
                  </div>
                  <p className="text-muted-foreground">{topUpPlan.period}</p>
                  <p className="text-sm text-muted-foreground">
                    {topUpPlan.description}
                  </p>
                </div>
              </CardHeader>
              
              <CardContent className="space-y-6">
                <ul className="space-y-3">
                  {topUpPlan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-3">
                      <Check className="h-5 w-5 text-primary flex-shrink-0" />
                      <span className="text-foreground text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Button 
                  variant={topUpPlan.buttonVariant} 
                  className="w-full"
                  size="lg"
                >
                  {topUpPlan.buttonText}
                </Button>
              </CardContent>
            </Card>
          </div>

          <Card className="max-w-4xl mx-auto">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-center">
                All Plans Include
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <Check className="h-5 w-5 text-primary" />
                    <span className="text-foreground">AI-powered CV generation</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Check className="h-5 w-5 text-primary" />
                    <span className="text-foreground">Tailored cover letters</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Check className="h-5 w-5 text-primary" />
                    <span className="text-foreground">Keyword matching analysis</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Check className="h-5 w-5 text-primary" />
                    <span className="text-foreground">Career Arc profile management</span>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <Check className="h-5 w-5 text-primary" />
                    <span className="text-foreground">Professional DocX exports</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Check className="h-5 w-5 text-primary" />
                    <span className="text-foreground">Mobile-responsive interface</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Check className="h-5 w-5 text-primary" />
                    <span className="text-foreground">Secure data storage</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Check className="h-5 w-5 text-primary" />
                    <span className="text-foreground">Regular platform updates</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="text-center mt-12">
            <p className="text-muted-foreground mb-4">
              Questions about our pricing? <a href="/faq" className="text-primary hover:underline">Check our FAQ</a> or contact us.
            </p>
            <p className="text-sm text-muted-foreground">
              All prices are in GBP. Cancel anytime. 30-day money-back guarantee.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-muted/50 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your Job Search?
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Join thousands of professionals who've accelerated their careers with Candidate 5
          </p>
          <Button size="lg" className="text-lg px-8 py-6">
            Start Your Free Trial Today
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <p className="text-sm text-muted-foreground mt-4">
            No credit card required • 3 free CVs included • Cancel anytime
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-muted-foreground">
            © 2024 Candidate 5. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};