import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import Header from "@/components/Header";
import ArticleCard from "@/components/ArticleCard";
import { Button } from "@/components/ui/button";
import { articles } from "@/data/articles";
import heroImage from "@/assets/hero-bg.jpg";

const Index = () => {
  const [searchParams] = useSearchParams();
  const categoryFilter = searchParams.get("category");
  
  const filteredArticles = categoryFilter
    ? articles.filter(article => 
        article.category.toLowerCase().includes(categoryFilter.toLowerCase())
      )
    : articles;

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url(${heroImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="absolute inset-0 bg-gradient-hero opacity-90" />
        </div>
        
        <div className="container relative z-10 py-24 md:py-32">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
              Navigate the Crypto Future
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8">
              Expert insights on cryptocurrency, DeFi, trading signals, and crypto casinos. 
              Stay ahead of the curve with in-depth analysis and actionable strategies.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button variant="hero" size="lg">
                Read Latest Articles
              </Button>
              <Button variant="outline" size="lg">
                Subscribe to Newsletter
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Articles Section */}
      <section className="container py-16 md:py-24">
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-4">
            {categoryFilter ? `${categoryFilter.charAt(0).toUpperCase() + categoryFilter.slice(1)} Articles` : 'Latest Articles'}
          </h2>
          <p className="text-muted-foreground">
            Discover expert insights and stay updated with the latest trends in crypto
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredArticles.map((article) => (
            <ArticleCard
              key={article.id}
              id={article.id}
              title={article.title}
              excerpt={article.excerpt}
              category={article.category}
              date={article.date}
              image={article.image}
              readTime={article.readTime}
            />
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/40 bg-card">
        <div className="container py-8 md:py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <div className="h-8 w-8 rounded-lg bg-gradient-primary" />
                <span className="text-xl font-bold">CryptoInsights</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Your trusted source for cryptocurrency news, analysis, and trading insights.
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Categories</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="/?category=crypto" className="hover:text-primary transition-colors">Crypto</a></li>
                <li><a href="/?category=casino" className="hover:text-primary transition-colors">Crypto Casino</a></li>
                <li><a href="/?category=signals" className="hover:text-primary transition-colors">Trading Signals</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Connect</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">Twitter</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Telegram</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Discord</a></li>
              </ul>
            </div>
          </div>
          
          <div className="mt-8 pt-8 border-t border-border/40 text-center text-sm text-muted-foreground">
            <p>&copy; 2024 CryptoInsights. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
