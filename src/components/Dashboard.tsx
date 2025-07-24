import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Navigation } from "@/components/Navigation";
import { 
  User, 
  Briefcase, 
  FileText, 
  Download,
  CheckCircle,
  Circle,
  ArrowRight
} from "lucide-react";
import { useNavigate } from "react-router-dom";

interface StepProps {
  number: number;
  title: string;
  description: string;
  icon: React.ReactNode;
  completed: boolean;
  current: boolean;
  actionText: string;
  actionPath?: string;
  onAction?: () => void;
}

const StepCard = ({ number, title, description, icon, completed, current, actionText, actionPath, onAction }: StepProps) => {
  const navigate = useNavigate();

  const handleAction = () => {
    if (onAction) {
      onAction();
    } else if (actionPath) {
      navigate(actionPath);
    }
  };

  return (
    <Card className={`relative transition-all duration-200 ${current ? 'ring-2 ring-primary' : ''} ${completed ? 'bg-success/5' : ''}`}>
      <CardHeader className="pb-4">
        <div className="flex items-center gap-4">
          <div className={`p-3 rounded-full ${completed ? 'bg-success text-success-foreground' : current ? 'bg-primary text-primary-foreground' : 'bg-muted text-muted-foreground'}`}>
            {completed ? <CheckCircle className="h-6 w-6" /> : icon}
          </div>
          <div className="flex-1">
            <div className="flex items-center gap-2">
              <Badge variant={completed ? 'default' : current ? 'outline' : 'secondary'} className="text-xs">
                Step {number}
              </Badge>
              {completed && <Badge variant="success">Completed</Badge>}
              {current && <Badge variant="outline">Current</Badge>}
            </div>
            <CardTitle className="text-lg mt-1">{title}</CardTitle>
          </div>
        </div>
      </CardHeader>
      <CardContent className="pt-0">
        <CardDescription className="mb-4 text-base">
          {description}
        </CardDescription>
        <Button 
          onClick={handleAction}
          variant={completed ? "secondary" : current ? "default" : "outline"}
          className="w-full gap-2"
          disabled={!current && !completed}
        >
          {actionText}
          <ArrowRight className="h-4 w-4" />
        </Button>
      </CardContent>
    </Card>
  );
};

export const Dashboard = () => {
  const navigate = useNavigate();

  // Mock user progress - in real app this would come from user state/API
  const userProgress = {
    personalDetails: true,
    careerHistory: false,
    applicationReady: false,
    hasDownloads: false
  };

  const getCurrentStep = () => {
    if (!userProgress.personalDetails) return 1;
    if (!userProgress.careerHistory) return 2;
    if (!userProgress.applicationReady) return 3;
    return 4;
  };

  const currentStep = getCurrentStep();

  const steps: Omit<StepProps, 'current' | 'completed'>[] = [
    {
      number: 1,
      title: "Personal Details",
      description: "Set up your profile with personal information, contact details, and preferences.",
      icon: <User className="h-6 w-6" />,
      actionText: userProgress.personalDetails ? "Edit Profile" : "Complete Profile",
      onAction: () => {
        // Navigate to profile settings or create profile page
        console.log("Navigate to profile setup");
      }
    },
    {
      number: 2,
      title: "Career History",
      description: "Build your career timeline using our Career Arc tool or upload an existing CV.",
      icon: <Briefcase className="h-6 w-6" />,
      actionText: userProgress.careerHistory ? "Edit Career Arc" : "Build Career Arc",
      actionPath: "/career-arc"
    },
    {
      number: 3,
      title: "Create Applications",
      description: "Generate tailored CVs and cover letters using our Application Wizard.",
      icon: <FileText className="h-6 w-6" />,
      actionText: userProgress.applicationReady ? "Create New Application" : "Start Application Wizard",
      onAction: () => {
        console.log("Start application wizard");
      }
    },
    {
      number: 4,
      title: "Download & Apply",
      description: "Download your completed CVs and cover letters, then apply to your dream jobs.",
      icon: <Download className="h-6 w-6" />,
      actionText: userProgress.hasDownloads ? "View Downloads" : "Go to My CVs",
      actionPath: "/my-cvs"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-6 py-12">
        <div className="text-center mb-12">
          <Badge variant="outline" className="mb-4">
            PAGE: Dashboard
          </Badge>
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Welcome to CandidateV
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Follow these steps to set up your profile and start creating professional 
            CVs and cover letters tailored to your dream jobs.
          </p>
        </div>

        {/* Progress Steps */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 mb-12">
          {steps.map((step) => (
            <StepCard
              key={step.number}
              {...step}
              completed={step.number < currentStep}
              current={step.number === currentStep}
            />
          ))}
        </div>

        {/* Quick Actions */}
        <Card className="bg-gradient-to-r from-primary/5 to-primary/10 border-primary/20">
          <CardHeader>
            <CardTitle className="text-xl">Quick Actions</CardTitle>
            <CardDescription>
              Jump to the most common tasks based on your current progress.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 md:grid-cols-3">
              <Button 
                variant="outline" 
                className="gap-2 h-auto py-4 flex-col"
                onClick={() => navigate("/career-arc")}
              >
                <Briefcase className="h-6 w-6" />
                <span>Career Arc</span>
                <span className="text-xs text-muted-foreground">Build your timeline</span>
              </Button>
              <Button 
                variant="outline" 
                className="gap-2 h-auto py-4 flex-col"
                disabled={currentStep < 3}
              >
                <FileText className="h-6 w-6" />
                <span>Application Wizard</span>
                <span className="text-xs text-muted-foreground">Create tailored CVs</span>
              </Button>
              <Button 
                variant="outline" 
                className="gap-2 h-auto py-4 flex-col"
                onClick={() => navigate("/my-cvs")}
              >
                <Download className="h-6 w-6" />
                <span>My CVs</span>
                <span className="text-xs text-muted-foreground">Download & manage</span>
              </Button>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};