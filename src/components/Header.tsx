import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center space-x-2">
          <div className="flex items-center space-x-2">
            <div className="h-8 w-8 rounded-lg bg-gradient-primary" />
            <span className="text-xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              Degen Blog
            </span>
          </div>
        </Link>
        
        <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
          <Link to="/" className="transition-colors hover:text-primary">
            Home
          </Link>
          <Link to="/?category=crypto" className="transition-colors hover:text-primary">
            Crypto
          </Link>
          <Link to="/?category=gaming" className="transition-colors hover:text-primary">
            Crypto Gaming
          </Link>
          <Link to="/?category=perpdex" className="transition-colors hover:text-primary">
            Perp Dex
          </Link>
          <Link to="/?category=farming" className="transition-colors hover:text-primary">
            Farming
          </Link>
        </nav>

        <Button variant="hero" size="sm">
          Subscribe
        </Button>
      </div>
    </header>
  );
};

export default Header;
