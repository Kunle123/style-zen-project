export const VideoSection = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            See Candidate 5 in Action
          </h2>
          <p className="text-xl text-muted-foreground">
            Watch how easy it is to create a tailored CV in minutes
          </p>
        </div>
        
        <div className="relative aspect-video bg-muted rounded-lg overflow-hidden">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-4 cursor-pointer hover:bg-primary/90 transition-colors">
                <svg className="w-8 h-8 text-primary-foreground ml-1" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z"/>
                </svg>
              </div>
              <p className="text-muted-foreground">60-Second Demo: Land Interviews Faster</p>
              <p className="text-sm text-muted-foreground mt-2">Click to play video</p>
            </div>
          </div>
        </div>
        
        <div className="mt-8 text-center text-muted-foreground max-w-3xl mx-auto">
          <p className="text-sm">
            <strong>What you'll see:</strong> Problem (80% CVs filtered), Solution (tailored CVs in minutes), 
            Benefit (faster interviews, save thousands), CTA (start free today)
          </p>
        </div>
      </div>
    </section>
  );
};