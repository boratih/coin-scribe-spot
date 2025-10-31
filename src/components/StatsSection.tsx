import { useEffect, useState } from "react";
import { Users, Trophy, TrendingUp, Shield } from "lucide-react";

const StatsSection = () => {
  const [activeUsers, setActiveUsers] = useState(8247);
  const [totalWins, setTotalWins] = useState(45632);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveUsers(prev => prev + Math.floor(Math.random() * 3));
      setTotalWins(prev => prev + Math.floor(Math.random() * 5));
    }, 3000);
    
    return () => clearInterval(interval);
  }, []);

  const stats = [
    {
      icon: Users,
      value: activeUsers.toLocaleString(),
      label: "Active Players",
      color: "text-accent"
    },
    {
      icon: Trophy,
      value: totalWins.toLocaleString(),
      label: "Total Wins",
      color: "text-primary"
    },
    {
      icon: TrendingUp,
      value: "$12.5M+",
      label: "Paid Out",
      color: "text-accent"
    },
    {
      icon: Shield,
      value: "100%",
      label: "Secure & Licensed",
      color: "text-primary"
    }
  ];

  return (
    <section className="border-y border-border/40 bg-gradient-to-br from-card/50 to-card/30 backdrop-blur-sm">
      <div className="container py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={index}
                className="text-center p-6 rounded-lg bg-card/50 border border-border/40 hover:border-primary/50 transition-all duration-300 hover:shadow-glow-primary animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <Icon className={`w-8 h-8 mx-auto mb-3 ${stat.color}`} />
                <div className="text-3xl font-bold mb-1 bg-gradient-primary bg-clip-text text-transparent">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
