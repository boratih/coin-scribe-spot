import { useState } from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { Star, TrendingUp } from "lucide-react";

const highlights = {
  crypto: [
    {
      id: 1,
      title: "Bitcoin ETF Analysis",
      rating: 9.2,
      badge: "HOT",
      features: ["Comprehensive Guide", "Market Analysis"],
      link: "/article/crypto-etf-guide"
    },
    {
      id: 2,
      title: "Altcoin Season Watch",
      rating: 8.8,
      badge: "TRENDING",
      features: ["Real-time Updates", "Expert Insights"],
      link: "/article/altcoin-opportunities"
    }
  ],
  gaming: [
    {
      id: 3,
      title: "DegenRoll Casino",
      rating: 9.5,
      badge: "FEATURED",
      features: ["Instant Payouts", "No KYC Required"],
      link: "https://www.degenroll.xyz"
    },
    {
      id: 4,
      title: "GameFi Platforms",
      rating: 8.9,
      badge: "NEW",
      features: ["Play-to-Earn", "NFT Integration"],
      link: "/article/gamefi-revolution"
    }
  ],
  perpdex: [
    {
      id: 5,
      title: "Top Perp DEX Guide",
      rating: 9.1,
      badge: "EXPERT PICK",
      features: ["High Leverage", "Low Fees"],
      link: "/article/perp-dex-trading"
    },
    {
      id: 6,
      title: "Leverage Strategies",
      rating: 8.7,
      badge: "GUIDE",
      features: ["Risk Management", "Technical Analysis"],
      link: "/article/leverage-trading"
    }
  ],
  farming: [
    {
      id: 7,
      title: "High APY Farms",
      rating: 9.0,
      badge: "TOP YIELD",
      features: ["Audited Protocols", "Auto-Compound"],
      link: "/article/yield-farming"
    },
    {
      id: 8,
      title: "DeFi Staking",
      rating: 8.6,
      badge: "SAFE",
      features: ["Low Risk", "Stable Returns"],
      link: "/article/defi-staking"
    }
  ]
};

const ProjectHighlights = () => {
  const [category, setCategory] = useState("crypto");

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
            value="crypto" 
            className="px-6 py-2 data-[state=on]:bg-primary data-[state=on]:text-primary-foreground"
          >
            Crypto
          </ToggleGroupItem>
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
