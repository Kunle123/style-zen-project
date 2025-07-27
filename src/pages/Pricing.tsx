import { Navigation } from "@/components/Navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check } from "lucide-react";

const Pricing = () => {
  const plans = [
    {
      name: "Starter",
      price: "£9.99",
      period: "per month",
      description: "Perfect for occasional job applications",
      features: [
        "5 CV generations per month",
        "5 cover letters per month",
        "Basic keyword analysis",
        "PDF downloads",
        "Email support"
      ],
      recommended: false,
      buttonText: "Get Started",
      buttonVariant: "outline" as const
    },
    {
      name: "Professional",
      price: "£19.99",
      period: "per month",
      description: "Ideal for active job seekers",
      features: [
        "25 CV generations per month",
        "25 cover letters per month",
        "Advanced keyword analysis",
        "Multiple CV templates",
        "PDF downloads",
        "Priority email support",
        "Career Arc insights"
      ],
      recommended: true,
      buttonText: "Start Free Trial",
      buttonVariant: "default" as const
    },
    {
      name: "Enterprise",
      price: "£39.99",
      period: "per month",
      description: "For recruitment agencies and teams",
      features: [
        "Unlimited CV generations",
        "Unlimited cover letters",
        "Advanced analytics",
        "Custom templates",
        "Team collaboration",
        "API access",
        "Dedicated support",
        "White-label options"
      ],
      recommended: false,
      buttonText: "Contact Sales",
      buttonVariant: "secondary" as const
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4">
            Choose Your Plan
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Select the perfect plan for your career journey. All plans include our AI-powered CV and cover letter generation.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {plans.map((plan, index) => (
            <Card key={index} className={`relative ${plan.recommended ? 'border-primary shadow-lg scale-105' : ''}`}>
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
              
              <CardContent className="space-y-6">
                <ul className="space-y-3">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-3">
                      <Check className="h-5 w-5 text-success flex-shrink-0" />
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
                  <Check className="h-5 w-5 text-success" />
                  <span className="text-foreground">AI-powered CV generation</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Check className="h-5 w-5 text-success" />
                  <span className="text-foreground">Tailored cover letters</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Check className="h-5 w-5 text-success" />
                  <span className="text-foreground">Keyword matching analysis</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Check className="h-5 w-5 text-success" />
                  <span className="text-foreground">Career Arc profile management</span>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Check className="h-5 w-5 text-success" />
                  <span className="text-foreground">Professional PDF exports</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Check className="h-5 w-5 text-success" />
                  <span className="text-foreground">Mobile-responsive interface</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Check className="h-5 w-5 text-success" />
                  <span className="text-foreground">Secure data storage</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Check className="h-5 w-5 text-success" />
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
    </div>
  );
};

export default Pricing;