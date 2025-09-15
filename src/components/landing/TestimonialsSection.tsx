import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

export const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Sarah J.",
      role: "Marketing Manager",
      content: "I was skeptical at first, but this actually works. I went from getting no responses to landing 3 interviews in my first week! The AI really knows what recruiters want to see.",
      rating: 5,
    },
    {
      name: "Michael C.",
      role: "Software Engineer",
      content: "The tailoring is incredible. It highlighted skills I didn't even know were relevant to the jobs I was applying for. Got my dream job within 2 weeks!",
      rating: 5,
    },
    {
      name: "Emma R.",
      role: "Product Designer",
      content: "Simple, fast, and effective. The tailored CVs actually get read by recruiters instead of being ignored. Best investment in my career!",
      rating: 5,
    },
  ];

  return (
    <section className="py-12 md:py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 text-foreground">
            Testimonials
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground">
            What our users are saying about our platform
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="h-full bg-card border border-border">
              <CardContent className="p-6 md:p-8">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 md:w-5 md:h-5 fill-current text-yellow-400" />
                  ))}
                </div>
                
                <blockquote className="text-muted-foreground mb-6 text-sm md:text-base leading-relaxed">
                  "{testimonial.content}"
                </blockquote>
                
                <div className="border-t border-border pt-4">
                  <div className="font-semibold text-foreground text-sm md:text-base">{testimonial.name}</div>
                  <div className="text-xs md:text-sm text-muted-foreground">
                    {testimonial.role}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};