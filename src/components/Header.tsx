import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import degenBlogLogo from "@/assets/degen-blog-logo.png";
import NewsletterDialog from "@/components/NewsletterDialog";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center space-x-2">
          <img src={degenBlogLogo} alt="Degen Blog" className="h-8 w-8" />
          <span className="text-xl font-bold bg-gradient-primary bg-clip-text text-transparent">
            Degen Blog
          </span>
        </Link>
        
        <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
          <Link to="/" className="transition-colors hover:text-primary">
            Home
          </Link>
          <Link to="/?category=crypto" className="transition-colors hover:text-primary">
            Crypto
          </Link>
          <Link to="/?category=gaming" className="transition-colors hover:text-primary">
            Crypto Casino
          </Link>
          <Link to="/?category=perpdex" className="transition-colors hover:text-primary">
            Perpetuals
          </Link>
          <Link to="/?category=farming" className="transition-colors hover:text-primary">
            Farming
          </Link>
        </nav>

        <div className="flex items-center gap-2">
          <Button 
            size="lg"
            asChild
            className="bg-gradient-to-r from-accent to-primary text-background font-bold hover:scale-105 transition-transform shadow-glow-accent"
          >
            <a href="https://www.degenroll.xyz" target="_blank" rel="noopener noreferrer">
              🎮 Play Now
            </a>
          </Button>
          <NewsletterDialog 
            trigger={
              <Button variant="hero" size="sm">
                Subscribe
              </Button>
            }
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
