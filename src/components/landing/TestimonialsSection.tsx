import { Card, CardContent } from "@/components/ui/card";

export const TestimonialsSection = () => {
  return (
    <section className="py-12 md:py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 text-foreground">
            Testimonials
          </h2>
          <p className="text-lg text-muted-foreground">
            Hear from candidates who've successfully found jobs
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          <Card className="bg-card border">
            <CardContent className="p-6">
              <div className="text-center space-y-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                  <span className="text-lg font-bold text-primary">SJ</span>
                </div>
                <blockquote className="text-sm md:text-base text-muted-foreground">
                  "I got 3 interviews in my first week using this platform. The CV optimization really works!"
                </blockquote>
                <div>
                  <div className="font-semibold text-foreground">Sarah J.</div>
                  <div className="text-xs text-muted-foreground">Marketing Manager</div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-card border">
            <CardContent className="p-6">
              <div className="text-center space-y-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                  <span className="text-lg font-bold text-primary">MC</span>
                </div>
                <blockquote className="text-sm md:text-base text-muted-foreground">
                  "The job matching feature helped me find roles I never would have considered. Perfect fit!"
                </blockquote>
                <div>
                  <div className="font-semibold text-foreground">Michael C.</div>
                  <div className="text-xs text-muted-foreground">Software Engineer</div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-card border">
            <CardContent className="p-6">
              <div className="text-center space-y-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                  <span className="text-lg font-bold text-primary">ER</span>
                </div>
                <blockquote className="text-sm md:text-base text-muted-foreground">
                  "Finally, a service that actually understands what recruiters want to see in a CV."
                </blockquote>
                <div>
                  <div className="font-semibold text-foreground">Emma R.</div>
                  <div className="text-xs text-muted-foreground">Product Designer</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};