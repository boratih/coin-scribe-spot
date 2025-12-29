import { Link } from "react-router-dom";
import Header from "@/components/Header";
import StatsSection from "@/components/StatsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ComparisonTable from "@/components/ComparisonTable";
import FloatingCTA from "@/components/FloatingCTA";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { 
  Star, 
  CheckCircle2, 
  XCircle, 
  Gamepad2, 
  Wallet, 
  Shield, 
  Gift, 
  Zap,
  Clock,
  FileCheck,
  Globe,
  CheckCircle,
  X
} from "lucide-react";
import pragmaticPlayLogo from "@/assets/pragmatic-play-logo.png";
import evolutionGamingLogo from "@/assets/evolution-gaming-logo.png";
import playngoLogo from "@/assets/playngo-logo.png";
import hacksawGamingLogo from "@/assets/hacksaw-gaming-logo.png";
import bgamingLogo from "@/assets/bgaming-logo.png";
import degenrollLogo from "@/assets/degenroll-logo.png";

const DegenRollReview = () => {
  const ratings = [
    { category: "Game Variety", icon: Gamepad2, rating: 5.0, value: 100 },
    { category: "Deposit & Crypto Options", icon: Wallet, rating: 5.0, value: 100 },
    { category: "Security & Privacy", icon: Shield, rating: 4.0, value: 80 },
    { category: "Bonuses & Rewards", icon: Gift, rating: 4.0, value: 80 },
    { category: "UX & Performance", icon: Zap, rating: 5.0, value: 100 },
  ];

  const pros = [
    "No KYC, full privacy",
    "Accepts all major cryptos",
    "Massive game library",
    "Sports betting included",
    "Fast wallet deposits"
  ];

  const cons = [
    "No native token yet",
    "No audit report (still new)",
    "Smaller community for now"
  ];

  const quickFacts = [
    { icon: Globe, label: "Casino Name", value: "DegenRoll" },
    { icon: Wallet, label: "Min. withdrawal", value: "None" },
    { icon: Clock, label: "Year Established", value: "2024" },
    { icon: Wallet, label: "Min. deposit", value: "None" },
    { icon: Clock, label: "Payout time", value: "Instant" },
  ];

  const features = [
    "No minimum deposit requirement",
    "Over 4,000 games",
    "Over 20 cryptocurrencies available",
    "Fast transactions",
    "Built-in swap feature"
  ];

  const negatives = [
    "Still building community",
    "No mobile app yet",
    "Limited payment methods outside crypto",
    "New platform (less track record)"
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-primary/20 via-background to-background pt-24 pb-16">
        <div className="container">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-12">
            <div className="flex-1">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                DegenRoll Casino Review 2025
              </h1>
              <p className="text-xl text-muted-foreground">
                The No-KYC Crypto Casino Built for True Degens
              </p>
            </div>
            <div className="flex flex-col items-center gap-4">
              <img 
                src={degenrollLogo} 
                alt="DegenRoll Logo" 
                className="w-48 h-48 rounded-xl object-contain"
              />
              <Badge className="text-lg px-4 py-2 bg-gradient-primary border-0">
                <Star className="w-5 h-5 mr-2 fill-current" />
                4.6 / 5 Overall Rating
              </Badge>
              <Button 
                asChild
                size="lg"
                className="bg-accent hover:bg-accent/90 text-accent-foreground"
              >
                <a href="https://www.degenroll.xyz" target="_blank" rel="noopener noreferrer">
                  Play Now
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Review Summary Box */}
      <section className="container mb-16 px-4">
        <Card className="border-primary/20 overflow-visible shadow-xl">
          <CardContent className="p-6 md:p-8 lg:p-10">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
              {/* Ratings Breakdown */}
              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-white mb-6">Ratings Breakdown</h2>
                <div className="space-y-5">
                  {ratings.map((item) => (
                    <div key={item.category} className="space-y-2">
                      <div className="flex items-center justify-between flex-wrap gap-2">
                        <div className="flex items-center gap-2 min-w-0">
                          <item.icon className="w-5 h-5 text-primary shrink-0" />
                          <span className="text-foreground text-sm md:text-base">{item.category}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="flex">
                            {[...Array(5)].map((_, i) => (
                              <Star
                                key={i}
                                className={`w-3.5 h-3.5 md:w-4 md:h-4 ${
                                  i < Math.floor(item.rating)
                                    ? "fill-accent text-accent"
                                    : "text-muted"
                                }`}
                              />
                            ))}
                          </div>
                          <span className="text-white font-semibold text-sm md:text-base">{item.rating}</span>
                        </div>
                      </div>
                      <Progress value={item.value} className="h-2" />
                    </div>
                  ))}
                </div>
              </div>

              {/* Pros & Cons */}
              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-white mb-6">Pros & Cons</h2>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0" />
                      Pros
                    </h3>
                    <ul className="space-y-2.5">
                      {pros.map((pro, idx) => (
                        <li key={idx} className="flex items-start gap-2.5 text-muted-foreground text-sm md:text-base">
                          <CheckCircle className="w-4 h-4 md:w-5 md:h-5 text-green-500 shrink-0 mt-0.5" />
                          <span className="min-w-0">{pro}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                      <XCircle className="w-5 h-5 text-destructive shrink-0" />
                      Cons
                    </h3>
                    <ul className="space-y-2.5">
                      {cons.map((con, idx) => (
                        <li key={idx} className="flex items-start gap-2.5 text-muted-foreground text-sm md:text-base">
                          <X className="w-4 h-4 md:w-5 md:h-5 text-destructive shrink-0 mt-0.5" />
                          <span className="min-w-0">{con}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Combined CTA Banner */}
      <section className="container mb-16 px-4">
        <Card className="bg-accent border-0 overflow-hidden relative">
          <div className="absolute inset-0 bg-gradient-to-br from-accent via-accent to-accent/80"></div>
          <CardContent className="py-12 px-6 md:px-12 text-center relative">
            <img 
              src={degenrollLogo} 
              alt="DegenRoll Logo" 
              className="w-32 h-32 mx-auto mb-4 object-contain"
            />
            <h3 className="text-3xl md:text-4xl font-bold text-accent-foreground mb-4">
              Play Now at DegenRoll
            </h3>
            <div className="flex flex-wrap justify-center gap-3 mb-6">
              <Badge variant="secondary" className="text-sm px-4 py-2 bg-white/20 text-accent-foreground border-white/30">
                🕵️‍♂️ No KYC Required
              </Badge>
              <Badge variant="secondary" className="text-sm px-4 py-2 bg-white/20 text-accent-foreground border-white/30">
                ⚡ Instant Deposits
              </Badge>
              <Badge variant="secondary" className="text-sm px-4 py-2 bg-white/20 text-accent-foreground border-white/30">
                🪙 All Major Crypto
              </Badge>
            </div>
            <p className="text-accent-foreground/90 text-lg mb-8 max-w-2xl mx-auto">
              Start playing with complete privacy. Volume-based rewards, instant payouts, and over 4,000 games waiting for you.
            </p>
            <Button 
              asChild
              size="lg"
              className="bg-white text-accent hover:bg-white/90 font-bold text-lg px-8 py-6"
            >
              <a href="https://www.degenroll.xyz" target="_blank" rel="noopener noreferrer">
                CLAIM BONUS
              </a>
            </Button>
            <p className="text-accent-foreground/70 text-xs mt-4">18+ | Play Responsibly</p>
          </CardContent>
        </Card>
      </section>

      {/* Quick Facts */}
      <section className="container mb-16">
        <Card>
          <CardContent className="p-8">
            <h2 className="text-3xl font-bold text-white mb-8">Quick Facts</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {quickFacts.map((fact, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <fact.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <div className="font-bold text-white">{fact.value}</div>
                    <div className="text-sm text-muted-foreground">{fact.label}</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 pt-8 border-t border-border">
              <h3 className="text-xl font-bold text-white mb-4">Languages Supported</h3>
              <div className="flex flex-wrap gap-2">
                {["English", "Spanish", "Turkish", "Russian", "Japanese"].map((lang) => (
                  <Badge key={lang} variant="secondary">{lang}</Badge>
                ))}
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mt-8 pt-8 border-t border-border">
              <div>
                <div className="space-y-3">
                  {features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <div className="space-y-3">
                  {negatives.map((negative, idx) => (
                    <div key={idx} className="flex items-start gap-2">
                      <X className="w-5 h-5 text-destructive shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{negative}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-8 pt-8 border-t border-border">
              <h3 className="text-xl font-bold text-white mb-4">Cryptocurrency</h3>
              <p className="text-muted-foreground mb-4 text-sm">
                DegenRoll accepts over 20 cryptocurrencies with built-in swap feature:
              </p>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary" className="text-base px-5 py-2">₿ Bitcoin</Badge>
                <Badge variant="secondary" className="text-base px-5 py-2">◈ Ethereum</Badge>
                <Badge variant="secondary" className="text-base px-5 py-2">◎ Solana</Badge>
                <Badge variant="secondary" className="text-base px-5 py-2">₮ USDT</Badge>
                <Badge variant="secondary" className="text-base px-5 py-2">$ USDC</Badge>
                <Badge variant="secondary" className="text-base px-5 py-2">Ⓑ BNB</Badge>
                <Badge variant="secondary" className="text-base px-5 py-2">⬡ Polygon</Badge>
                <Badge variant="secondary" className="text-base px-5 py-2">✕ XRP</Badge>
                <Badge variant="secondary" className="text-base px-5 py-2">Ð Doge</Badge>
              </div>
            </div>

            <div className="mt-8 pt-8 border-t border-border">
              <h3 className="text-xl font-bold text-white mb-4">Game Selection</h3>
              <p className="text-muted-foreground mb-4 text-sm">
                Over 4,000 games across all major categories:
              </p>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary" className="text-base px-5 py-2">🎰 Slots</Badge>
                <Badge variant="secondary" className="text-base px-5 py-2">🃏 Table Games</Badge>
                <Badge variant="secondary" className="text-base px-5 py-2">🎡 Roulette</Badge>
                <Badge variant="secondary" className="text-base px-5 py-2">🎲 Jackpots</Badge>
                <Badge variant="secondary" className="text-base px-5 py-2">🎲 Dice Games</Badge>
                <Badge variant="secondary" className="text-base px-5 py-2">🎮 Live Casino</Badge>
                <Badge variant="secondary" className="text-base px-5 py-2">⚽ Sports Betting</Badge>
              </div>
            </div>

            <div className="mt-8 pt-8 border-t border-border">
              <h3 className="text-xl font-bold text-white mb-4">Software Providers</h3>
              <p className="text-muted-foreground mb-4 text-sm">
                DegenRoll partners with top-tier software providers:
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-3 px-5 py-2 bg-muted/30 rounded-lg">
                  <img src={pragmaticPlayLogo} alt="Pragmatic Play" className="h-8 w-8 object-contain" />
                  <span className="text-base font-medium text-foreground">Pragmatic Play</span>
                </div>
                <div className="flex items-center gap-3 px-5 py-2 bg-muted/30 rounded-lg">
                  <img src={evolutionGamingLogo} alt="Evolution Gaming" className="h-8 w-8 object-contain" />
                  <span className="text-base font-medium text-foreground">Evolution Gaming</span>
                </div>
                <div className="flex items-center gap-3 px-5 py-2 bg-muted/30 rounded-lg">
                  <img src={playngoLogo} alt="Play'n GO" className="h-8 w-8 object-contain" />
                  <span className="text-base font-medium text-foreground">Play'n GO</span>
                </div>
                <div className="flex items-center gap-3 px-5 py-2 bg-muted/30 rounded-lg">
                  <img src={hacksawGamingLogo} alt="Hacksaw Gaming" className="h-8 w-8 object-contain" />
                  <span className="text-base font-medium text-foreground">Hacksaw Gaming</span>
                </div>
                <div className="flex items-center gap-3 px-5 py-2 bg-muted/30 rounded-lg">
                  <img src={bgamingLogo} alt="BGaming" className="h-8 w-8 object-contain" />
                  <span className="text-base font-medium text-foreground">BGaming</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Main Review Content */}
      <section className="container mb-16">
        <div className="max-w-4xl mx-auto space-y-12">
          <Card>
            <CardContent className="p-10">
              <div className="flex items-center gap-3 mb-6">
                <Wallet className="w-6 h-6 text-primary" />
                <h2 className="text-2xl font-bold text-white">Deposits & Withdrawals</h2>
              </div>
              <div className="prose prose-invert max-w-none mb-8">
                <p className="text-muted-foreground leading-relaxed">
                  DegenRoll supports a wide range of cryptocurrencies including Bitcoin, Ethereum, USDT, Solana, and BNB. 
                  What sets it apart is the built-in swap feature that allows you to instantly exchange tokens before playing. 
                  Deposits are instant with no minimum requirements, and withdrawals are processed immediately to your wallet.
                </p>
              </div>
              
              {/* Main Cryptos */}
              <div className="bg-muted/30 rounded-xl p-6 mb-4">
                <h3 className="text-lg font-semibold text-white mb-4">Primary Cryptocurrencies</h3>
                <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                  <div className="flex flex-col items-center gap-2 p-4 bg-card rounded-lg hover:bg-card/80 transition-colors">
                    <div className="w-12 h-12 rounded-full bg-orange-500/20 flex items-center justify-center text-2xl">
                      ₿
                    </div>
                    <span className="text-sm font-medium text-white">Bitcoin</span>
                  </div>
                  <div className="flex flex-col items-center gap-2 p-4 bg-card rounded-lg hover:bg-card/80 transition-colors">
                    <div className="w-12 h-12 rounded-full bg-purple-500/20 flex items-center justify-center text-2xl">
                      ◈
                    </div>
                    <span className="text-sm font-medium text-white">Ethereum</span>
                  </div>
                  <div className="flex flex-col items-center gap-2 p-4 bg-card rounded-lg hover:bg-card/80 transition-colors">
                    <div className="w-12 h-12 rounded-full bg-purple-600/20 flex items-center justify-center text-2xl">
                      ◎
                    </div>
                    <span className="text-sm font-medium text-white">Solana</span>
                  </div>
                  <div className="flex flex-col items-center gap-2 p-4 bg-card rounded-lg hover:bg-card/80 transition-colors">
                    <div className="w-12 h-12 rounded-full bg-green-500/20 flex items-center justify-center text-2xl">
                      ₮
                    </div>
                    <span className="text-sm font-medium text-white">USDT</span>
                  </div>
                  <div className="flex flex-col items-center gap-2 p-4 bg-card rounded-lg hover:bg-card/80 transition-colors">
                    <div className="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center text-2xl">
                      $
                    </div>
                    <span className="text-sm font-medium text-white">USDC</span>
                  </div>
                </div>
              </div>

              {/* Additional Cryptos */}
              <div className="bg-muted/30 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-white mb-4">Also Supported</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="flex flex-col items-center gap-2 p-4 bg-card rounded-lg hover:bg-card/80 transition-colors">
                    <div className="w-12 h-12 rounded-full bg-yellow-500/20 flex items-center justify-center text-2xl">
                      Ⓑ
                    </div>
                    <span className="text-sm font-medium text-white">BNB</span>
                  </div>
                  <div className="flex flex-col items-center gap-2 p-4 bg-card rounded-lg hover:bg-card/80 transition-colors">
                    <div className="w-12 h-12 rounded-full bg-purple-400/20 flex items-center justify-center text-2xl">
                      ⬡
                    </div>
                    <span className="text-sm font-medium text-white">Polygon</span>
                  </div>
                  <div className="flex flex-col items-center gap-2 p-4 bg-card rounded-lg hover:bg-card/80 transition-colors">
                    <div className="w-12 h-12 rounded-full bg-blue-400/20 flex items-center justify-center text-2xl">
                      ✕
                    </div>
                    <span className="text-sm font-medium text-white">XRP</span>
                  </div>
                  <div className="flex flex-col items-center gap-2 p-4 bg-card rounded-lg hover:bg-card/80 transition-colors">
                    <div className="w-12 h-12 rounded-full bg-yellow-400/20 flex items-center justify-center text-2xl">
                      Ð
                    </div>
                    <span className="text-sm font-medium text-white">Doge</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-8">
              <div className="flex items-center gap-3 mb-4">
                <Gamepad2 className="w-6 h-6 text-primary" />
                <h2 className="text-2xl font-bold text-white">Game Selection</h2>
              </div>
              <div className="prose prose-invert max-w-none">
                <p className="text-muted-foreground leading-relaxed">
                  With over 4,000 games in their library, DegenRoll offers everything from classic slots to live dealer games 
                  and sports betting. The platform features top providers and ensures smooth gameplay across all devices. 
                  Whether you're into high-stakes poker or casual slots, there's something for every type of player.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-8">
              <div className="flex items-center gap-3 mb-4">
                <Shield className="w-6 h-6 text-primary" />
                <h2 className="text-2xl font-bold text-white">Security & Privacy</h2>
              </div>
              <div className="prose prose-invert max-w-none">
                <p className="text-muted-foreground leading-relaxed">
                  DegenRoll operates with complete anonymity - no KYC verification required. Simply connect your crypto wallet 
                  and start playing. The platform uses industry-standard encryption and holds a Curacao gaming license. 
                  While they're still new and don't have an independent audit report yet, their commitment to privacy and 
                  transparent operations has built strong early trust in the community.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-8">
              <div className="flex items-center gap-3 mb-4">
                <Gift className="w-6 h-6 text-primary" />
                <h2 className="text-2xl font-bold text-white">Bonuses & Rewards</h2>
              </div>
              <div className="prose prose-invert max-w-none">
                <p className="text-muted-foreground leading-relaxed">
                  Unlike traditional casinos with complex wagering requirements, DegenRoll's reward system is based on your 
                  actual play volume and swap activity. The more you use the platform, the more benefits you unlock. 
                  They're also planning to introduce a native token system that will provide additional rewards and governance 
                  features for active players.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-8">
              <div className="flex items-center gap-3 mb-4">
                <Zap className="w-6 h-6 text-primary" />
                <h2 className="text-2xl font-bold text-white">User Experience</h2>
              </div>
              <div className="prose prose-invert max-w-none">
                <p className="text-muted-foreground leading-relaxed">
                  The platform features a clean, modern interface that's easy to navigate. Games load quickly, and the 
                  integrated wallet system makes deposits and withdrawals seamless. The built-in swap feature is particularly 
                  convenient, eliminating the need to use external exchanges. While there's no dedicated mobile app yet, 
                  the responsive web design works well on all devices.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Final Verdict Card */}
      <section className="container pb-16">
        <Card className="border-primary/50 bg-gradient-to-br from-primary/10 to-accent/10 relative overflow-hidden">
          <div className="absolute inset-0 bg-grid-white/5"></div>
          <CardContent className="p-12 text-center relative">
            <Badge className="text-2xl px-6 py-3 bg-gradient-primary border-0 mb-6">
              <Star className="w-6 h-6 mr-2 fill-current" />
              Our Verdict: 4.6 / 5
            </Badge>
            <h2 className="text-3xl font-bold text-white mb-4">
              A Fresh, No-KYC Crypto Casino with Huge Potential
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              DegenRoll delivers on its promise of privacy-first crypto gambling with an impressive game library, 
              instant transactions, and a user-friendly experience. Perfect for players who value anonymity and speed.
            </p>
            
            <div className="flex flex-wrap justify-center gap-3 mb-8">
              <Badge variant="secondary" className="text-sm px-4 py-2">
                🪙 All Crypto Accepted
              </Badge>
              <Badge variant="secondary" className="text-sm px-4 py-2">
                🕵️‍♂️ No KYC
              </Badge>
              <Badge variant="secondary" className="text-sm px-4 py-2">
                🎮 Full Game Suite
              </Badge>
              <Badge variant="secondary" className="text-sm px-4 py-2">
                🚀 Token Rewards Coming
              </Badge>
            </div>

            <Button 
              asChild
              size="lg"
              className="text-lg px-8 py-6 bg-gradient-primary border-0 hover:opacity-90 transition-opacity"
            >
              <a href="https://www.degenroll.xyz" target="_blank" rel="noopener noreferrer">
                <Gamepad2 className="w-5 h-5 mr-2" />
                Play on DegenRoll
              </a>
            </Button>
          </CardContent>
        </Card>
      </section>

      {/* Testimonials Section */}
      <TestimonialsSection />

      {/* Comparison Table */}
      <ComparisonTable />

      {/* Floating CTA */}
      <FloatingCTA />

      {/* Back to Home */}
      <section className="container pb-16 text-center">
        <Button asChild variant="outline">
          <Link to="/">
            ← Back to Home
          </Link>
        </Button>
      </section>
    </div>
  );
};

export default DegenRollReview;
