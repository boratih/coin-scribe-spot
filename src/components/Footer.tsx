import { Link } from "react-router-dom";
import degenBlogLogo from "@/assets/degen-blog-logo.webp";

const Footer = () => {
  return (
    <footer className="border-t border-border/40 bg-card/30 mt-16">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo & Description */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-2">
              <img src={degenBlogLogo} alt="DegenRoll" className="h-8 w-auto" />
              <span className="font-bold text-lg">DegenRoll</span>
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Educational resource for crypto casinos and blockchain gambling. Clear, neutral, and structured information.
            </p>
          </div>

          {/* Resources */}
          <div className="space-y-4">
            <h3 className="font-semibold text-sm uppercase tracking-wider text-muted-foreground">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-sm text-foreground/80 hover:text-primary transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link to="/technology" className="text-sm text-foreground/80 hover:text-primary transition-colors">
                  Technology
                </Link>
              </li>
              <li>
                <Link to="/glossary" className="text-sm text-foreground/80 hover:text-primary transition-colors">
                  Glossary
                </Link>
              </li>
            </ul>
          </div>

          {/* Policies */}
          <div className="space-y-4">
            <h3 className="font-semibold text-sm uppercase tracking-wider text-muted-foreground">Policies</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/methodology" className="text-sm text-foreground/80 hover:text-primary transition-colors">
                  Methodology
                </Link>
              </li>
              <li>
                <Link to="/editorial-policy" className="text-sm text-foreground/80 hover:text-primary transition-colors">
                  Editorial Policy
                </Link>
              </li>
              <li>
                <Link to="/sources-and-references" className="text-sm text-foreground/80 hover:text-primary transition-colors">
                  Sources & References
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border/40 mt-8 pt-8 text-center">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} DegenRoll. All rights reserved. For educational purposes only.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;