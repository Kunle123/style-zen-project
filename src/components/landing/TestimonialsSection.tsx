import { Card, CardContent } from "@/components/ui/card";

export const TestimonialsSection = () => {
  const testimonials = [
    {
      quote: "Within days, my reworked CV got noticed. The dashboard is a game-changer for tracking!",
      author: "A. Morgan",
      role: "Marketing Manager",
      initial: "AM"
    },
    {
      quote: "Finally, a CV that actually gets past the ATS. I landed 3 interviews in my first week!",
      author: "S. Patel", 
      role: "Software Developer",
      initial: "SP"
    },
    {
      quote: "The keyword optimization is brilliant. Recruiters are actually calling me back now.",
      author: "J. Thompson",
      role: "Project Manager", 
      initial: "JT"
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
          What Our Users Say
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="text-center p-6">
              <CardContent className="space-y-6">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                  <span className="text-lg font-bold text-primary">{testimonial.initial}</span>
                </div>
                <blockquote className="text-lg font-medium">
                  "{testimonial.quote.split('got noticed').length > 1 ? (
                    <>
                      {testimonial.quote.split('got noticed')[0]}
                      <strong>got noticed</strong>
                      {testimonial.quote.split('got noticed')[1]}
                    </>
                  ) : testimonial.quote.split('gets past the ATS').length > 1 ? (
                    <>
                      {testimonial.quote.split('gets past the ATS')[0]}
                      <strong>gets past the ATS</strong>
                      {testimonial.quote.split('gets past the ATS')[1]}
                    </>
                  ) : testimonial.quote.split('calling me back').length > 1 ? (
                    <>
                      {testimonial.quote.split('calling me back')[0]}
                      <strong>calling me back</strong>
                      {testimonial.quote.split('calling me back')[1]}
                    </>
                  ) : (
                    testimonial.quote
                  )}"
                </blockquote>
                <div>
                  <cite className="text-base font-semibold not-italic">{testimonial.author}</cite>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};