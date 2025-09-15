import { Link } from "react-router-dom";

export const FooterSection = () => {
  return (
    <footer className="bg-muted-foreground text-muted py-8 md:py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          <div className="col-span-2 md:col-span-1 space-y-4">
            <h3 className="text-lg font-semibold text-white">Candidate 5</h3>
            <p className="text-sm text-muted/80">
              AI-powered CV optimization for faster job search success.
            </p>
          </div>
          
          <div className="space-y-4">
            <h4 className="font-semibold text-white">Product</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/pricing" className="text-muted/80 hover:text-white transition-colors">Pricing</Link></li>
              <li><Link to="/faq" className="text-muted/80 hover:text-white transition-colors">FAQ</Link></li>
              <li><Link to="/features" className="text-muted/80 hover:text-white transition-colors">Features</Link></li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h4 className="font-semibold text-white">Company</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/privacy" className="text-muted/80 hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><Link to="/terms" className="text-muted/80 hover:text-white transition-colors">Terms of Service</Link></li>
              <li><Link to="/about" className="text-muted/80 hover:text-white transition-colors">About Us</Link></li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h4 className="font-semibold text-white">Support</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="mailto:support@candidate5.com" className="text-muted/80 hover:text-white transition-colors">Contact Us</a></li>
              <li><a href="#" className="text-muted/80 hover:text-white transition-colors">Help Center</a></li>
              <li><a href="#" className="text-muted/80 hover:text-white transition-colors">Documentation</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-muted/20 mt-6 md:mt-8 pt-6 md:pt-8 text-center text-sm text-muted/60">
          <p>&copy; 2024 Candidate 5. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};