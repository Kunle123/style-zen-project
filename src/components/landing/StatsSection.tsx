export const StatsSection = () => {
  return (
    <section className="py-12 md:py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 text-foreground">
            Our Results Speak for Themselves
          </h2>
          <p className="text-lg text-muted-foreground">
            Join thousands of professionals who've accelerated their careers
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 md:gap-12 text-center">
          <div className="space-y-2">
            <div className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary">80%</div>
            <p className="text-sm md:text-base text-muted-foreground">More interviews</p>
            <p className="text-xs md:text-sm text-muted-foreground/80">vs generic CVs</p>
          </div>
          <div className="space-y-2">
            <div className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary">28</div>
            <p className="text-sm md:text-base text-muted-foreground">Days faster</p>
            <p className="text-xs md:text-sm text-muted-foreground/80">to land interviews</p>
          </div>
          <div className="space-y-2">
            <div className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary">8</div>
            <p className="text-sm md:text-base text-muted-foreground">Minutes</p>
            <p className="text-xs md:text-sm text-muted-foreground/80">to optimize your CV</p>
          </div>
        </div>
      </div>
    </section>
  );
};