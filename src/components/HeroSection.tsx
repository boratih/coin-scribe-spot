import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import degenrollLogo from "@/assets/degenroll-logo.webp";

interface HeroSectionProps {
  onSearch?: (query: string) => void;
}

const HeroSection = ({ onSearch }: HeroSectionProps) => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch?.(searchQuery);
  };

  return (
    <section className="relative overflow-hidden py-20 md:py-28">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-hero" />
      
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-48 h-48 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      
      {/* Floating particles */}
      <div className="floating-particles">
        <div className="particle" style={{ left: '10%', top: '20%', animationDelay: '0s' }} />
        <div className="particle" style={{ left: '20%', top: '60%', animationDelay: '1s' }} />
        <div className="particle" style={{ left: '80%', top: '30%', animationDelay: '2s' }} />
        <div className="particle" style={{ left: '70%', top: '70%', animationDelay: '3s' }} />
        <div className="particle" style={{ left: '50%', top: '15%', animationDelay: '4s' }} />
      </div>

      <div className="container relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Label */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-sm font-medium text-primary">THE DEGEN'S GUIDE</span>
          </div>

          {/* Main heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            Crypto Casinos
            <span className="block text-gradient">
              For Degens, By Degens
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
            Your ultimate guide to the best crypto casinos with no KYC, instant payouts, and provably fair games. 
            We cut through the noise so you can focus on what matters: winning.
          </p>

          {/* Search bar */}
          <form onSubmit={handleSearch} className="max-w-xl mx-auto mb-10">
            <div className="relative">
              <Input
                type="text"
                placeholder="Search casinos, guides, glossary..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full h-14 pl-6 pr-14 text-lg bg-card/80 border-border/50 rounded-full backdrop-blur-sm focus-visible:ring-primary"
              />
              <Button 
                type="submit"
                size="icon"
                className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full h-10 w-10"
              >
                <Search className="w-5 h-5" />
              </Button>
            </div>
          </form>

          {/* CTA buttons */}
          <div className="flex flex-wrap justify-center gap-4">
            <Button 
              size="lg"
              asChild
              className="h-14 px-8 text-lg font-semibold bg-gradient-to-r from-primary to-accent text-primary-foreground hover:opacity-90 transition-opacity shadow-glow-accent rounded-full"
            >
              <a href="https://degenroll.com" target="_blank" rel="noopener noreferrer">
                Visit DegenRoll.com
              </a>
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              asChild 
              className="h-14 px-8 text-lg font-semibold rounded-full border-border/50 hover:bg-card"
            >
              <a href="#latest-blog">Explore Guides</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;