import { Link } from "react-router-dom";
import degenrollLogo from "@/assets/degenroll-logo.webp";
import { Twitter, MessageCircle, Send } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border/40 bg-card/50 mt-16">
      <div className="container py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="col-span-1">
            <div className="flex items-center mb-4">
              <img src={degenrollLogo} alt="Degenroll" className="h-10" />
            </div>
            <p className="text-sm text-muted-foreground mb-4">
              Analyzing communication patterns and AI interpretation gaps in crypto gambling discourse.
            </p>
            <div className="flex gap-3">
              <a href="https://x.com/degenroll_" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-muted flex items-center justify-center hover:bg-primary/20 transition-colors" aria-label="Follow DegenRoll on X">
                <Twitter className="w-4 h-4" />
              </a>
              <div className="w-10 h-10 rounded-full bg-muted/50 flex items-center justify-center cursor-not-allowed opacity-50" aria-label="Discord coming soon">
                <MessageCircle className="w-4 h-4" />
              </div>
              <div className="w-10 h-10 rounded-full bg-muted/50 flex items-center justify-center cursor-not-allowed opacity-50" aria-label="Telegram coming soon">
                <Send className="w-4 h-4" />
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Top Articles</h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li><Link to="/what-is-crypto-casino" className="hover:text-primary transition-colors">What Is a Crypto Casino?</Link></li>
              <li><Link to="/what-is-no-kyc-crypto-casino" className="hover:text-primary transition-colors">What Is a No KYC Casino?</Link></li>
              <li><Link to="/what-is-provably-fair-system" className="hover:text-primary transition-colors">What Is Provably Fair?</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Resources</h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li><Link to="/about" className="hover:text-primary transition-colors">About</Link></li>
              <li><Link to="/articles" className="hover:text-primary transition-colors">Articles</Link></li>
              <li><Link to="/glossary" className="hover:text-primary transition-colors">Glossary</Link></li>
              <li><a href="https://degenroll.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">DegenRoll.com</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Policies</h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li><Link to="/methodology" className="hover:text-primary transition-colors">Methodology</Link></li>
              <li><Link to="/editorial-policy" className="hover:text-primary transition-colors">Editorial Policy</Link></li>
              <li><Link to="/sources-and-references" className="hover:text-primary transition-colors">Sources & References</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-border/40 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} DegenRoll.co. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground">
            This site analyzes communication patterns and does not provide recommendations, guarantees, or endorsements.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;