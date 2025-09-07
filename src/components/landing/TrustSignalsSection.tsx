export const TrustSignalsSection = () => {
  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-6xl mx-auto text-center">
        <p className="text-lg font-semibold text-muted-foreground mb-8">
          Trusted by professionals at leading companies
        </p>
        
        {/* Placeholder for company logos */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center opacity-60">
          {Array.from({ length: 5 }).map((_, index) => (
            <div key={index} className="h-12 bg-muted-foreground/20 rounded flex items-center justify-center">
              <span className="text-sm font-medium text-muted-foreground">Logo {index + 1}</span>
            </div>
          ))}
        </div>
        
        <div className="mt-8 pt-8 border-t">
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div>
              <div className="text-2xl font-bold text-primary mb-2">2,500+</div>
              <p className="text-sm text-muted-foreground">CVs Created</p>
            </div>
            <div>
              <div className="text-2xl font-bold text-primary mb-2">94%</div>
              <p className="text-sm text-muted-foreground">Interview Success Rate</p>
            </div>
            <div>
              <div className="text-2xl font-bold text-primary mb-2">4.8/5</div>
              <p className="text-sm text-muted-foreground">User Rating</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};