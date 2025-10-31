import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Alex M.",
      role: "Crypto Trader",
      rating: 5,
      text: "Best crypto casino I've used. Fast payouts and no KYC hassle. The variety of games is impressive!",
      profit: "+$8,450"
    },
    {
      name: "Sarah K.",
      role: "DeFi Enthusiast",
      rating: 5,
      text: "DegenRoll has been a game-changer. The platform is smooth, secure, and the bonuses are actually worth it.",
      profit: "+$12,300"
    },
    {
      name: "Mike R.",
      role: "Professional Gambler",
      rating: 5,
      text: "Finally, a platform that respects player privacy and pays out instantly. The provably fair system is transparent.",
      profit: "+$25,600"
    }
  ];

  return (
    <section className="container py-16 md:py-24">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">What Players Say</h2>
        <p className="text-muted-foreground">
          Join thousands of satisfied players winning big every day
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {testimonials.map((testimonial, index) => (
          <Card 
            key={index} 
            className="hover:shadow-glow-primary transition-all duration-300 hover:-translate-y-1 animate-fade-in"
            style={{ animationDelay: `${index * 0.15}s` }}
          >
            <CardContent className="pt-6">
              <div className="flex mb-3">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                ))}
              </div>
              <p className="text-muted-foreground mb-4 italic">"{testimonial.text}"</p>
              <div className="flex items-center justify-between pt-4 border-t border-border/40">
                <div>
                  <div className="font-semibold">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                </div>
                <div className="text-accent font-bold text-lg">{testimonial.profit}</div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default TestimonialsSection;
