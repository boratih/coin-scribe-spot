import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import CategoryCards from "@/components/CategoryCards";
import FeaturedProjects from "@/components/FeaturedProjects";
import ArticleCard from "@/components/ArticleCard";
import { Button } from "@/components/ui/button";
import { articles } from "@/data/articles";
import degenrollLogo from "@/assets/degenroll-logo.webp";
import NewsletterDialog from "@/components/NewsletterDialog";
import { Twitter, MessageCircle, Send } from "lucide-react";

const Index = () => {
  const [searchParams] = useSearchParams();
  const categoryFilter = searchParams.get("category");
  const [searchQuery, setSearchQuery] = useState("");
  
  // Filter to only show gaming (crypto casino) and perpdex articles
  const degenArticles = articles.filter(article => {
    const normalizedCategory = article.category.toLowerCase();
    return normalizedCategory.includes("crypto casino") || normalizedCategory.includes("perpdex");
  });

  const filteredArticles = categoryFilter
    ? degenArticles.filter(article => {
        const normalizedCategory = article.category.toLowerCase();
        const normalizedFilter = categoryFilter.toLowerCase();
        
        if (normalizedFilter === "gaming") {
          return normalizedCategory.includes("crypto casino");
        }
        
        return normalizedCategory.includes(normalizedFilter);
      })
    : degenArticles;

  // Apply search filter
  const searchedArticles = searchQuery 
    ? filteredArticles.filter(article => 
        article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        article.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : filteredArticles;

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    // Scroll to articles section
    document.getElementById('latest-blog')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <HeroSection onSearch={handleSearch} />

      {/* Category Cards - Only show on homepage without category filter */}
      {!categoryFilter && <CategoryCards />}

      {/* Featured Projects Section */}
      <FeaturedProjects categoryFilter={categoryFilter} />

      {/* Articles Section */}
      <section id="latest-blog" className="py-16 md:py-20 bg-card/30">
        <div className="container">
          <div className="flex items-center justify-between mb-10">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-2">
                {categoryFilter 
                  ? categoryFilter === "gaming" 
                    ? "Crypto Casino Guides"
                    : "Perpetual Trading Guides"
                  : 'Latest Articles'}
              </h2>
              <p className="text-muted-foreground">
                Expert insights and strategies for degens
              </p>
            </div>
          </div>

          {searchedArticles.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {searchedArticles.map((article) => (
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
          ) : (
            <div className="text-center py-12">
              <p className="text-muted-foreground">No articles found matching your search.</p>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-16 md:py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent" />
        <div className="container relative z-10">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Stay Ahead of the Game
            </h2>
            <p className="text-muted-foreground mb-8">
              Get the latest crypto casino reviews, perpetual trading strategies, and degen alpha straight to your inbox.
            </p>
            <NewsletterDialog 
              trigger={
                <Button size="lg" className="h-14 px-8 text-lg rounded-full">
                  Subscribe to Newsletter
                </Button>
              }
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/40 bg-card/50">
        <div className="container py-12 md:py-16">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
            <div className="col-span-1 md:col-span-1">
              <div className="flex items-center mb-4">
                <img src={degenrollLogo} alt="Degenroll" className="h-10" />
              </div>
              <p className="text-sm text-muted-foreground mb-4">
                Your ultimate guide to crypto casinos and perpetual trading. Built by degens, for degens.
              </p>
              <div className="flex gap-3">
                <a href="#" className="w-10 h-10 rounded-full bg-muted flex items-center justify-center hover:bg-primary/20 transition-colors">
                  <Twitter className="w-4 h-4" />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-muted flex items-center justify-center hover:bg-primary/20 transition-colors">
                  <MessageCircle className="w-4 h-4" />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-muted flex items-center justify-center hover:bg-primary/20 transition-colors">
                  <Send className="w-4 h-4" />
                </a>
              </div>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Categories</h3>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li><a href="/?category=gaming" className="hover:text-primary transition-colors">Crypto Casino</a></li>
                <li><a href="/?category=perpdex" className="hover:text-primary transition-colors">Perpetuals</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Top Casinos</h3>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li><a href="https://www.degenroll.xyz" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">DegenRoll</a></li>
                <li><a href="https://stake.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">Stake</a></li>
                <li><a href="https://bc.game" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">BC Game</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Top Perp DEXs</h3>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li><a href="https://hyperliquid.xyz" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">Hyperliquid</a></li>
                <li><a href="https://lighter.xyz" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">Lighter</a></li>
                <li><a href="https://aster.trade" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">Aster</a></li>
              </ul>
            </div>
          </div>
          
          <div className="mt-12 pt-8 border-t border-border/40 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Degenroll. All rights reserved.
            </p>
            <p className="text-xs text-muted-foreground">
              Gambling involves risk. Please gamble responsibly.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;