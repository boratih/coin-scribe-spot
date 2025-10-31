import { Check, X } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const ComparisonTable = () => {
  const features = [
    { name: "No KYC Required", degenroll: true, stake: false, bcgame: false },
    { name: "Instant Withdrawals", degenroll: true, stake: true, bcgame: true },
    { name: "Provably Fair Games", degenroll: true, stake: true, bcgame: true },
    { name: "Multiple Crypto Support", degenroll: true, stake: true, bcgame: true },
    { name: "Low House Edge", degenroll: true, stake: false, bcgame: false },
    { name: "24/7 Support", degenroll: true, stake: true, bcgame: true },
    { name: "Anonymous Play", degenroll: true, stake: false, bcgame: false },
    { name: "No Withdrawal Limits", degenroll: true, stake: false, bcgame: false }
  ];

  return (
    <section className="container py-16 md:py-24">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">Why Choose DegenRoll?</h2>
        <p className="text-muted-foreground">
          See how we compare to other top crypto casinos
        </p>
      </div>

      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-4 gap-4 mb-4">
          <div className="col-span-1"></div>
          <Card className="bg-gradient-to-br from-primary/10 to-accent/10 border-primary/50">
            <CardHeader className="py-4 flex items-center justify-center">
              <CardTitle className="text-lg bg-gradient-primary bg-clip-text text-transparent m-0">
                DegenRoll
              </CardTitle>
            </CardHeader>
          </Card>
          <Card>
            <CardHeader className="py-4 flex items-center justify-center">
              <CardTitle className="text-lg text-muted-foreground m-0">
                Stake
              </CardTitle>
            </CardHeader>
          </Card>
          <Card>
            <CardHeader className="py-4 flex items-center justify-center">
              <CardTitle className="text-lg text-muted-foreground m-0">
                BC Game
              </CardTitle>
            </CardHeader>
          </Card>
        </div>

        {features.map((feature, index) => (
          <div
            key={index}
            className="grid grid-cols-4 gap-4 py-4 border-b border-border/40 items-center animate-fade-in"
            style={{ animationDelay: `${index * 0.05}s` }}
          >
            <div className="font-medium">{feature.name}</div>
            <div className="flex justify-center">
              {feature.degenroll ? (
                <Check className="w-6 h-6 text-accent" />
              ) : (
                <X className="w-6 h-6 text-muted-foreground" />
              )}
            </div>
            <div className="flex justify-center">
              {feature.stake ? (
                <Check className="w-6 h-6 text-muted-foreground" />
              ) : (
                <X className="w-6 h-6 text-muted-foreground" />
              )}
            </div>
            <div className="flex justify-center">
              {feature.bcgame ? (
                <Check className="w-6 h-6 text-muted-foreground" />
              ) : (
                <X className="w-6 h-6 text-muted-foreground" />
              )}
            </div>
          </div>
        ))}

        <div className="mt-8 text-center">
          <Button
            size="lg"
            className="bg-gradient-to-r from-accent to-primary text-background font-bold text-lg px-8 py-6 hover:scale-105 transition-transform shadow-glow-accent"
            asChild
          >
            <a href="https://www.degenroll.xyz" target="_blank" rel="noopener noreferrer">
              Start Playing Now 🎮
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ComparisonTable;
