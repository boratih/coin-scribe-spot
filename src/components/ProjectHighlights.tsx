import { useState } from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { Star, TrendingUp } from "lucide-react";

const highlights = {
  gaming: [
    {
      id: 1,
      title: "DegenRoll",
      rating: 9.5,
      badge: "BEST OVERALL",
      features: ["Instant Payouts", "No KYC Required", "Provably Fair"],
      link: "https://www.degenroll.xyz"
    },
    {
      id: 2,
      title: "Stake",
      rating: 9.2,
      badge: "TRUSTED",
      features: ["Sports Betting", "Live Casino", "Crypto Rewards"],
      link: "https://stake.com"
    },
    {
      id: 3,
      title: "Shuffle",
      rating: 8.9,
      badge: "RISING STAR",
      features: ["Fast Withdrawals", "Wide Game Selection", "Bonus Program"],
      link: "https://shuffle.com"
    }
  ],
  perpdex: [
    {
      id: 4,
      title: "Lighter",
      rating: 9.1,
      badge: "INNOVATIVE",
      features: ["Order Book DEX", "Low Fees", "High Liquidity"],
      link: "https://lighter.xyz"
    },
    {
      id: 5,
      title: "Hyperliquid",
      rating: 9.3,
      badge: "TOP PERFORMER",
      features: ["On-chain Perps", "Zero Gas Fees", "50x Leverage"],
      link: "https://hyperliquid.xyz"
    },
    {
      id: 6,
      title: "Aster",
      rating: 8.8,
      badge: "NEW",
      features: ["Cross-chain Trading", "Advanced Orders", "Low Latency"],
      link: "https://aster.trade"
    }
  ],
  farming: [
    {
      id: 7,
      title: "Aave",
      rating: 9.4,
      badge: "BLUE CHIP",
      features: ["Multi-chain", "Battle-tested", "High TVL"],
      link: "https://aave.com"
    },
    {
      id: 8,
      title: "Curve Finance",
      rating: 9.2,
      badge: "STABLE YIELDS",
      features: ["Stablecoin Focus", "Low Slippage", "veCRV Rewards"],
      link: "https://curve.fi"
    },
    {
      id: 9,
      title: "Convex Finance",
      rating: 9.0,
      badge: "YIELD BOOSTER",
      features: ["Curve Optimizer", "Boosted APY", "Liquid Staking"],
      link: "https://convexfinance.com"
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
                <div className="flex items-start justify-between">
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
