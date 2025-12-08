import { useState } from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { Star, TrendingUp } from "lucide-react";
import degenrollLogo from "@/assets/degenroll-logo.png";
import stakeLogo from "@/assets/stake-logo.png";
import bcgameLogo from "@/assets/bcgame-logo.png";
import lighterLogo from "@/assets/lighter-logo.png";
import hyperliquidLogo from "@/assets/hyperliquid-logo.png";
import asterLogo from "@/assets/aster-logo.png";

const highlights = {
  gaming: [
    {
      id: 1,
      title: "DegenRoll",
      rating: 9.5,
      badge: "BEST OVERALL",
      features: ["Instant Payouts", "No KYC Required", "Accepts most crypto"],
      link: "/degenroll-review",
      logo: degenrollLogo
    },
    {
      id: 2,
      title: "Stake",
      rating: 9.2,
      badge: "TRUSTED",
      features: ["Trusted and Well Known", "Various Games", "Secure and Licensed Platform"],
      link: "https://stake.com",
      logo: stakeLogo
    },
    {
      id: 3,
      title: "BC Game",
      rating: 8.9,
      badge: "POPULAR",
      features: ["Well Known Brand", "Fast Payouts", "Various Games"],
      link: "https://bc.game",
      logo: bcgameLogo
    }
  ],
  perpdex: [
    {
      id: 4,
      title: "Lighter",
      rating: 9.1,
      badge: "INNOVATIVE",
      features: ["Order Book DEX", "Low Fees", "High Liquidity"],
      link: "https://lighter.xyz",
      logo: lighterLogo
    },
    {
      id: 5,
      title: "Hyperliquid",
      rating: 9.3,
      badge: "TOP PERFORMER",
      features: ["On-chain Perps", "Zero Gas Fees", "50x Leverage"],
      link: "https://hyperliquid.xyz",
      logo: hyperliquidLogo
    },
    {
      id: 6,
      title: "Aster",
      rating: 8.8,
      badge: "NEW",
      features: ["Cross-chain Trading", "Advanced Orders", "Low Latency"],
      link: "https://aster.trade",
      logo: asterLogo
    }
  ]
};

interface ProjectHighlightsProps {
  categoryFilter?: string | null;
}

const ProjectHighlights = ({ categoryFilter }: ProjectHighlightsProps) => {
  // Map URL category filter to internal category
  const getCategoryFromFilter = (filter: string | null | undefined): keyof typeof highlights => {
    if (!filter) return "gaming";
    if (filter === "gaming") return "gaming";
    if (filter === "perpdex") return "perpdex";
    return "gaming";
  };

  const initialCategory = getCategoryFromFilter(categoryFilter);
  const [category, setCategory] = useState<keyof typeof highlights>(initialCategory);

  // If there's a category filter, use it; otherwise use the toggle state
  const activeCategory = categoryFilter ? getCategoryFromFilter(categoryFilter) : category;
  const currentHighlights = highlights[activeCategory];

  return (
    <section className="border-y border-border/40 bg-card/50">
      <div className="container py-16 md:py-20">
        <div className="mb-8">
          <h2 className="text-3xl font-bold mb-2 text-white">
            Project Highlights
          </h2>
          <p className="text-muted-foreground">
            Curated top picks across our favorite categories
          </p>
        </div>

        {!categoryFilter && (
          <ToggleGroup 
            type="single" 
            value={category} 
            onValueChange={(value) => value && setCategory(value as keyof typeof highlights)}
            className="justify-start mb-8 flex-wrap"
          >
            <ToggleGroupItem 
              value="gaming"
              className="px-6 py-2 data-[state=on]:bg-primary data-[state=on]:text-primary-foreground"
            >
              Crypto Casino
            </ToggleGroupItem>
            <ToggleGroupItem 
              value="perpdex"
              className="px-6 py-2 data-[state=on]:bg-primary data-[state=on]:text-primary-foreground"
            >
              Perpetuals
            </ToggleGroupItem>
          </ToggleGroup>
        )}

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {currentHighlights.map((highlight, index) => (
            <Card key={highlight.id} className="group hover:shadow-glow-primary transition-all duration-300 hover:border-primary/50 hover:-translate-y-1 overflow-hidden">
              <CardHeader className="relative pb-4">
                <div className="absolute top-4 right-4 z-10">
                  {index === 0 && (
                    <Badge variant="outline" className="border-primary/50 bg-background/80 backdrop-blur-sm">
                      <Star className="w-3 h-3 mr-1 fill-primary text-primary" />
                      Featured
                    </Badge>
                  )}
                </div>
                <div className="flex flex-col items-center text-center mb-4">
                  <div className="mb-4 p-4 rounded-2xl bg-muted/50 group-hover:bg-primary/10 transition-colors">
                    <img 
                      src={highlight.logo} 
                      alt={`${highlight.title} logo`}
                      className="w-24 h-24 object-contain"
                    />
                  </div>
                  <Badge variant="secondary" className="bg-accent/20 text-accent border-accent/30 mb-3">
                    {highlight.badge}
                  </Badge>
                  <h3 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors">
                    {highlight.title}
                  </h3>
                  <div className="flex items-center gap-2 text-sm">
                    <TrendingUp className="w-4 h-4 text-accent" />
                    <span className="font-semibold text-accent text-lg">{highlight.rating}</span>
                    <span className="text-muted-foreground">Rating</span>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="pt-0">
                <ul className="space-y-3 mb-6">
                  {highlight.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start text-sm text-muted-foreground">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mr-2 mt-1.5 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button 
                  className="w-full group-hover:shadow-lg" 
                  variant="default"
                  asChild
                >
                  <a href={highlight.link} target={highlight.link.startsWith('http') ? '_blank' : undefined} rel={highlight.link.startsWith('http') ? 'noopener noreferrer' : undefined}>
                    View Details
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectHighlights;
