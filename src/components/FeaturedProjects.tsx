import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Star, ExternalLink, Check, Zap } from "lucide-react";
import degenrollLogo from "@/assets/degenroll-logo.png";
import stakeLogo from "@/assets/stake-logo.png";
import bcgameLogo from "@/assets/bcgame-logo.png";

const projects = [
  {
    id: 1,
    title: "DegenRoll",
    rating: 9.5,
    badge: "BEST OVERALL",
    badgeColor: "bg-gradient-to-r from-orange-500 to-red-500",
    bonus: "100% up to 1 BTC",
    features: ["Crypto Deposits", "Privacy-Focused", "Multiple Cryptocurrencies"],
    cryptos: ["BTC", "ETH", "SOL", "USDT"],
    link: "/degenroll-review",
    logo: degenrollLogo,
    rank: 1
  },
  {
    id: 2,
    title: "Stake",
    rating: 9.2,
    badge: "TRUSTED",
    badgeColor: "bg-gradient-to-r from-blue-500 to-cyan-500",
    bonus: "200% First Deposit",
    features: ["Established Brand", "Various Games", "24/7 Support"],
    cryptos: ["BTC", "ETH", "LTC", "DOGE"],
    link: "https://stake.com",
    logo: stakeLogo,
    rank: 2
  },
  {
    id: 3,
    title: "BC Game",
    rating: 8.9,
    badge: "POPULAR",
    badgeColor: "bg-gradient-to-r from-purple-500 to-pink-500",
    bonus: "300% Welcome Package",
    features: ["Well Known Brand", "Established Presence", "Large Game Selection"],
    cryptos: ["BTC", "ETH", "BNB", "TRX"],
    link: "https://bc.game",
    logo: bcgameLogo,
    rank: 3
  }
];

const FeaturedProjects = () => {
  return (
    <section className="py-16 md:py-20">
      <div className="container">
        <div className="mb-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-2">
            Top Crypto Casinos {new Date().getFullYear()}
          </h2>
          <p className="text-muted-foreground">
            Reviewed and ranked by our team of degen experts
          </p>
        </div>

        <div className="space-y-4">
          {projects.map((project, index) => (
            <Card 
              key={project.id} 
              className={`group relative overflow-hidden bg-gradient-card border-border/50 hover-glow ${index === 0 ? 'ring-1 ring-primary/30' : ''}`}
            >
              {/* Rank badge */}
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-primary via-primary/50 to-transparent" />
              
              <CardContent className="p-6">
                <div className="flex flex-col lg:flex-row lg:items-center gap-6">
                  {/* Rank & Logo */}
                  <div className="flex items-center gap-4 lg:w-64 shrink-0">
                    <span className="text-3xl font-bold text-primary w-8">{project.rank}</span>
                    <div className="flex items-center gap-3">
                      <div className="w-16 h-16 rounded-xl bg-muted/50 p-2 flex items-center justify-center">
                        <img 
                          src={project.logo} 
                          alt={project.title}
                          className="w-12 h-12 object-contain"
                        />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold group-hover:text-primary transition-colors">
                          {project.title}
                        </h3>
                        <div className="flex items-center gap-1 text-sm">
                          <Star className="w-4 h-4 fill-yellow-500 text-yellow-500" />
                          <span className="font-semibold">{project.rating}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Badge & Bonus */}
                  <div className="lg:w-52 shrink-0">
                    <Badge className={`${project.badgeColor} text-white border-0 mb-2`}>
                      {project.badge}
                    </Badge>
                    <div className="flex items-center gap-2 text-sm text-primary font-medium">
                      <Zap className="w-4 h-4" />
                      {project.bonus}
                    </div>
                  </div>

                  {/* Features */}
                  <div className="flex-1 min-w-0">
                    <ul className="space-y-1">
                      {project.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Check className="w-4 h-4 text-primary shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Cryptos */}
                  <div className="flex items-center gap-2 lg:w-32 shrink-0">
                    {project.cryptos.slice(0, 3).map((crypto, idx) => (
                      <div 
                        key={idx}
                        className="w-8 h-8 rounded-full bg-muted flex items-center justify-center text-xs font-medium"
                        title={crypto}
                      >
                        {crypto.slice(0, 2)}
                      </div>
                    ))}
                    {project.cryptos.length > 3 && (
                      <span className="text-xs text-muted-foreground">+{project.cryptos.length - 3}</span>
                    )}
                  </div>

                  {/* CTA */}
                  <div className="flex gap-3 lg:w-48 shrink-0">
                    <Button 
                      className="flex-1"
                      asChild
                    >
                      <a 
                        href={project.link} 
                        target={project.link.startsWith('http') ? '_blank' : undefined} 
                        rel={project.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                      >
                        Visit Site
                        <ExternalLink className="w-4 h-4 ml-2" />
                      </a>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;
