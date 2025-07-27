import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import DashboardPage from "./pages/Dashboard";
import CVDownloadPage from "./pages/CVDownload";
import CareerArc from "./pages/CareerArc";
import ApplicationWizardPage from "./pages/ApplicationWizard";
import Account from "./pages/Account";
import SubscriptionCancel from "./pages/SubscriptionCancel";
import SubscriptionSuccess from "./pages/SubscriptionSuccess";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<DashboardPage />} />
          <Route path="/landing" element={<Index />} />
          <Route path="/career-arc" element={<CareerArc />} />
          <Route path="/application-wizard" element={<ApplicationWizardPage />} />
          <Route path="/my-cvs" element={<CVDownloadPage />} />
          <Route path="/account" element={<Account />} />
          <Route path="/subscription-cancel" element={<SubscriptionCancel />} />
          <Route path="/subscription-success" element={<SubscriptionSuccess />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;