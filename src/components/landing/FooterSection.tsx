import { Link } from "react-router-dom";

export const FooterSection = () => {
  return (
    <footer className="border-t py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-bold mb-4">Features</h3>
            <ul className="space-y-2">
              <li><Link to="/ats-proof" className="text-muted-foreground hover:text-foreground transition-colors">ATS Proof</Link></li>
              <li><Link to="/career-arc" className="text-muted-foreground hover:text-foreground transition-colors">Career Arc</Link></li>
              <li><Link to="/application-history" className="text-muted-foreground hover:text-foreground transition-colors">Application Tracker</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4">Company</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-muted-foreground hover:text-foreground transition-colors">About</Link></li>
              <li><Link to="/pricing" className="text-muted-foreground hover:text-foreground transition-colors">Pricing</Link></li>
              <li><Link to="/contact" className="text-muted-foreground hover:text-foreground transition-colors">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><Link to="/faq" className="text-muted-foreground hover:text-foreground transition-colors">FAQ</Link></li>
              <li><Link to="/privacy" className="text-muted-foreground hover:text-foreground transition-colors">Privacy Policy</Link></li>
              <li><Link to="/terms" className="text-muted-foreground hover:text-foreground transition-colors">Terms of Service</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="text-muted-foreground">support@candidate5.com</li>
              <li className="text-muted-foreground">+44 20 1234 5678</li>
            </ul>
          </div>
        </div>
        <div className="border-t mt-8 pt-8 text-center">
          <p className="text-muted-foreground">
            © 2024 Candidate 5. All rights reserved. | Helping professionals land interviews faster.
          </p>
        </div>
      </div>
    </footer>
  );
};