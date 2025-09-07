import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import timerIcon from "@/assets/timer-8s-icon.png";
import cvFunnelIcon from "@/assets/cv-funnel-icon.png";
import calendarMoneyIcon from "@/assets/calendar-money-icon.png";

export const StatsSection = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Main Stats */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="text-center">
            <div className="text-6xl md:text-7xl font-bold text-black mb-4">80%</div>
            <div className="text-xl text-muted-foreground mb-6">CVs never seen</div>
            <img src={cvFunnelIcon} alt="CV funnel showing 80% filtered out by ATS systems" className="w-24 h-24 mx-auto" />
          </div>
          
          <div className="text-center">
            <div className="text-6xl md:text-7xl font-bold text-black mb-4">8s</div>
            <div className="text-xl text-muted-foreground mb-6">Average view time</div>
            <img src={timerIcon} alt="8 second stopwatch showing recruiter review time" className="w-24 h-24 mx-auto" />
          </div>
          
          <div className="text-center">
            <div className="text-6xl md:text-7xl font-bold text-black mb-4">£2,900</div>
            <div className="text-xl text-muted-foreground mb-6">Cost of 28 days out of work</div>
            <img src={calendarMoneyIcon} alt="Calendar with money showing financial cost of job searching" className="w-24 h-24 mx-auto" />
          </div>
        </div>

        {/* Key Stats Block */}
        <div className="bg-muted/50 rounded-lg p-8 md:p-12 mb-8">
          <h2 className="text-3xl font-bold mb-8 text-center">The Reality of Job Searching</h2>
          
          {/* CTA positioned higher */}
          <div className="flex justify-center mb-8">
            <Button asChild size="lg">
              <Link to="/application-wizard">
                Get My Free CVs
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
          
          <div className="space-y-4 text-lg max-w-4xl mx-auto">
            <div className="flex items-start gap-4">
              <span className="text-2xl font-bold text-primary">•</span>
              <p><strong>80% of CVs</strong> never reach a recruiter - filtered out by ATS systems</p>
            </div>
            <div className="flex items-start gap-4">
              <span className="text-2xl font-bold text-primary">•</span>
              <p>Recruiters spend just <strong>6-8 seconds</strong> reviewing a CV before rejecting it</p>
            </div>
            <div className="flex items-start gap-4">
              <span className="text-2xl font-bold text-primary">•</span>
              <p>Every <strong>28 days out of work</strong> costs the average UK professional <strong>£2,900</strong></p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};