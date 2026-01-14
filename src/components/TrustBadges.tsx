import { Shield, Lock, Zap, Award } from "lucide-react";

const TrustBadges = () => {
  const badges = [
    {
      icon: Shield,
      text: "Research-Based"
    },
    {
      icon: Lock,
      text: "Editorial Standards"
    },
    {
      icon: Zap,
      text: "Updated Content"
    },
    {
      icon: Award,
      text: "Expert Reviews"
    }
  ];

  return (
    <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6 py-8">
      {badges.map((badge, index) => {
        const Icon = badge.icon;
        return (
          <div
            key={index}
            className="flex items-center gap-2 px-4 py-2 rounded-full bg-card/50 border border-border/40 hover:border-primary/50 transition-all duration-300 animate-fade-in"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <Icon className="w-4 h-4 text-accent" />
            <span className="text-sm font-medium">{badge.text}</span>
          </div>
        );
      })}
    </div>
  );
};

export default TrustBadges;
