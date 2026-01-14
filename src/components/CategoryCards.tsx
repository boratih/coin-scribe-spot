import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Dices, ChevronRight } from "lucide-react";

const categories = [
  {
    id: "gaming",
    title: "Crypto Casino",
    description: "Educational guides and reviews covering crypto casino concepts, features, and considerations.",
    icon: Dices,
    count: 20,
    href: "/?category=gaming",
    gradient: "from-orange-500 to-red-500"
  }
];

const CategoryCards = () => {
  return (
    <section id="categories" className="py-16 md:py-20 bg-card/30">
      <div className="container">
        <div className="flex items-center justify-between mb-10">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-2">Categories</h2>
            <p className="text-muted-foreground">Explore our curated content</p>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 max-w-2xl">
          {categories.map((category) => (
            <Link key={category.id} to={category.href}>
              <Card className="group h-full overflow-hidden hover-glow bg-gradient-card border-border/50 cursor-pointer">
                <CardContent className="p-8 flex items-start gap-6">
                  <div className={`p-4 rounded-2xl bg-gradient-to-br ${category.gradient} shrink-0`}>
                    <category.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-2xl font-bold group-hover:text-primary transition-colors">
                        {category.title}
                      </h3>
                      <ChevronRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
                    </div>
                    <p className="text-muted-foreground mb-4 line-clamp-2">
                      {category.description}
                    </p>
                    <span className="text-sm text-primary font-medium">
                      {category.count}+ guides & articles
                    </span>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoryCards;
