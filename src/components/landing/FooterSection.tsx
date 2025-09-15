import { Link } from "react-router-dom";

export const FooterSection = () => {
  return (
    <footer className="bg-muted-foreground text-white py-8 md:py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6 md:gap-8">
          <div className="col-span-2 md:col-span-1 space-y-4">
            <h3 className="text-lg font-bold text-white">Candidate 5</h3>
            <p className="text-sm text-white/80">
              AI-powered job matching and CV optimization platform
            </p>
          </div>
          
          <div className="space-y-3">
            <h4 className="font-semibold text-white">Product</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/features" className="text-white/80 hover:text-white transition-colors">Features</Link></li>
              <li><Link to="/pricing" className="text-white/80 hover:text-white transition-colors">Pricing</Link></li>
              <li><Link to="/templates" className="text-white/80 hover:text-white transition-colors">CV Templates</Link></li>
            </ul>
          </div>
          
          <div className="space-y-3">
            <h4 className="font-semibold text-white">Resources</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/blog" className="text-white/80 hover:text-white transition-colors">Blog</Link></li>
              <li><Link to="/career-advice" className="text-white/80 hover:text-white transition-colors">Career Advice</Link></li>
              <li><Link to="/help" className="text-white/80 hover:text-white transition-colors">Help Center</Link></li>
            </ul>
          </div>
          
          <div className="space-y-3">
            <h4 className="font-semibold text-white">Company</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/about" className="text-white/80 hover:text-white transition-colors">About</Link></li>
              <li><Link to="/careers" className="text-white/80 hover:text-white transition-colors">Careers</Link></li>
              <li><Link to="/contact" className="text-white/80 hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>
          
          <div className="space-y-3">
            <h4 className="font-semibold text-white">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/privacy" className="text-white/80 hover:text-white transition-colors">Privacy</Link></li>
              <li><Link to="/terms" className="text-white/80 hover:text-white transition-colors">Terms</Link></li>
              <li><Link to="/cookies" className="text-white/80 hover:text-white transition-colors">Cookies</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/20 mt-8 pt-8 text-center text-sm text-white/60">
          <p>&copy; 2024 Candidate 5. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};