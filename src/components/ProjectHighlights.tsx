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
import aaveLogo from "@/assets/aave-logo.png";
import curveLogo from "@/assets/curve-logo.png";
import convexLogo from "@/assets/convex-logo.png";

const highlights = {
  gaming: [
    {
      id: 1,
      title: "DegenRoll",
      rating: 9.5,
      badge: "BEST OVERALL",
      features: ["Instant Payouts", "No KYC Required", "Accepts most crypto"],
      link: "https://www.degenroll.xyz",
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
  ],
  farming: [
    {
      id: 7,
      title: "Aave",
      rating: 9.4,
      badge: "BLUE CHIP",
      features: ["Multi-chain", "Battle-tested", "High TVL"],
      link: "https://aave.com",
      logo: aaveLogo
    },
    {
      id: 8,
      title: "Curve Finance",
      rating: 9.2,
      badge: "STABLE YIELDS",
      features: ["Stablecoin Focus", "Low Slippage", "veCRV Rewards"],
      link: "https://curve.fi",
      logo: curveLogo
    },
    {
      id: 9,
      title: "Convex Finance",
      rating: 9.0,
      badge: "YIELD BOOSTER",
      features: ["Curve Optimizer", "Boosted APY", "Liquid Staking"],
      link: "https://convexfinance.com",
      logo: convexLogo
    }
  ]
};

const ProjectHighlights = () => {
  const [category, setCategory] = useState("gaming");

  const currentHighlights = highlights[category as keyof typeof highlights];

  return (
    <section className="border-y border-border/40 bg-card/50">
      <div className="container py-16 md:py-20">
        <div className="mb-8">
          <h2 className="text-3xl font-bold mb-2 bg-gradient-primary bg-clip-text text-transparent">
            Project Highlights
          </h2>
          <p className="text-muted-foreground">
            Curated top picks across our favorite categories
          </p>
        </div>

        <ToggleGroup 
          type="single" 
          value={category} 
          onValueChange={(value) => value && setCategory(value)}
          className="justify-start mb-8 flex-wrap"
        >
          <ToggleGroupItem 
            value="gaming"
            className="px-6 py-2 data-[state=on]:bg-primary data-[state=on]:text-primary-foreground"
          >
            Crypto iGaming
          </ToggleGroupItem>
          <ToggleGroupItem 
            value="perpdex"
            className="px-6 py-2 data-[state=on]:bg-primary data-[state=on]:text-primary-foreground"
          >
            Perp Dex
          </ToggleGroupItem>
          <ToggleGroupItem 
            value="farming"
            className="px-6 py-2 data-[state=on]:bg-primary data-[state=on]:text-primary-foreground"
          >
            Farming
          </ToggleGroupItem>
        </ToggleGroup>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {currentHighlights.map((highlight, index) => (
            <Card key={highlight.id} className="group hover:shadow-glow-primary transition-all duration-300 hover:border-primary/50">
              <CardHeader>
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <Badge variant="secondary" className="bg-accent/20 text-accent border-accent/30">
                        {highlight.badge}
                      </Badge>
                      {index === 0 && (
                        <Badge variant="outline" className="border-primary/50">
                          <Star className="w-3 h-3 mr-1 fill-primary text-primary" />
                          Featured
                        </Badge>
                      )}
                    </div>
                    <h3 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors">
                      {highlight.title}
                    </h3>
                    <div className="flex items-center gap-2 text-sm">
                      <TrendingUp className="w-4 h-4 text-accent" />
                      <span className="font-semibold text-accent">{highlight.rating}</span>
                      <span className="text-muted-foreground">Rating</span>
                    </div>
                  </div>
                  <div className="flex-shrink-0">
                    <img 
                      src={highlight.logo} 
                      alt={`${highlight.title} logo`}
                      className="w-16 h-16 object-contain rounded-lg"
                    />
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 mb-4">
                  {highlight.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-muted-foreground">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button 
                  className="w-full" 
                  variant="outline"
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
