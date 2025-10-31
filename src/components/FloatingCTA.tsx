import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Rocket } from "lucide-react";

const FloatingCTA = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 animate-fade-in">
      <Button
        size="lg"
        className="bg-gradient-to-r from-accent to-primary text-background font-bold shadow-glow-accent hover:scale-110 transition-all duration-300 group"
        asChild
      >
        <a 
          href="https://www.degenroll.xyz" 
          target="_blank" 
          rel="noopener noreferrer"
          className="flex items-center gap-2"
        >
          <Rocket className="w-5 h-5 group-hover:rotate-12 transition-transform" />
          Play Now
        </a>
      </Button>
    </div>
  );
};

export default FloatingCTA;
