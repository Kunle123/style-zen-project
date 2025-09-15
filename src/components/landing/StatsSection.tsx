export const StatsSection = () => {
  return (
    <section className="py-12 md:py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        {/* Main headline */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6 text-foreground">
            The Reality of Job Hunting
          </h2>
          <p className="text-lg text-muted-foreground">
            Most CVs never make it past the first screening
          </p>
        </div>
        
        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mb-12 md:mb-16">
          <div className="text-center bg-card rounded-lg p-6 md:p-8 border">
            <div className="text-5xl md:text-6xl lg:text-7xl font-bold text-success mb-4">80%</div>
            <p className="text-base md:text-lg text-muted-foreground mb-2">of CVs rejected</p>
            <p className="text-sm text-muted-foreground/80">by ATS systems</p>
          </div>
          <div className="text-center bg-card rounded-lg p-6 md:p-8 border">
            <div className="text-5xl md:text-6xl lg:text-7xl font-bold text-warning mb-4">28</div>
            <p className="text-base md:text-lg text-muted-foreground mb-2">days average</p>
            <p className="text-sm text-muted-foreground/80">to find a job</p>
          </div>
          <div className="text-center bg-card rounded-lg p-6 md:p-8 border">
            <div className="text-5xl md:text-6xl lg:text-7xl font-bold text-primary mb-4">8</div>
            <p className="text-base md:text-lg text-muted-foreground mb-2">seconds to</p>
            <p className="text-sm text-muted-foreground/80">review your CV</p>
          </div>
        </div>
      </div>
    </section>
  );
};