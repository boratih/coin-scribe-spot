import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import degenrollLogo from "@/assets/degenroll-logo.webp";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
      <div className="container flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <img src={degenrollLogo} alt="Degenroll" className="h-10" />
        </Link>
        
        <nav className="hidden md:flex items-center gap-8">
          <Link 
            to="/" 
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            Home
          </Link>
          <Link 
            to="/guides" 
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            Guides
          </Link>
          <Link 
            to="/glossary" 
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            Glossary
          </Link>
          <Link 
            to="/about" 
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            About
          </Link>
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <Button 
            asChild
            className="bg-gradient-to-r from-primary to-accent text-primary-foreground font-semibold hover:opacity-90 transition-opacity rounded-full"
          >
            <a href="https://degenroll.com" target="_blank" rel="noopener noreferrer">
              Visit DegenRoll.com
            </a>
          </Button>
        </div>

        {/* Mobile menu button */}
        <button 
          className="md:hidden p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-border/40 bg-background">
          <nav className="container py-4 flex flex-col gap-4">
            <Link 
              to="/" 
              className="text-sm font-medium py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/guides" 
              className="text-sm font-medium py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Guides
            </Link>
            <Link 
              to="/glossary" 
              className="text-sm font-medium py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Glossary
            </Link>
            <Link 
              to="/about" 
              className="text-sm font-medium py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              About
            </Link>
            <div className="flex gap-2 pt-2">
              <Button 
                asChild
                className="flex-1 bg-gradient-to-r from-primary to-accent text-primary-foreground rounded-full"
              >
                <a href="https://degenroll.com" target="_blank" rel="noopener noreferrer">
                  Visit DegenRoll.com
                </a>
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;