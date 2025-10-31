import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import Header from "@/components/Header";
import ArticleCard from "@/components/ArticleCard";
import ProjectHighlights from "@/components/ProjectHighlights";
import StatsSection from "@/components/StatsSection";
import TrustBadges from "@/components/TrustBadges";
import TestimonialsSection from "@/components/TestimonialsSection";
import ComparisonTable from "@/components/ComparisonTable";
import FAQSection from "@/components/FAQSection";
import FloatingCTA from "@/components/FloatingCTA";
import { Button } from "@/components/ui/button";
import { articles } from "@/data/articles";
import heroImage from "@/assets/hero-bg.jpg";
import degenBlogLogo from "@/assets/degen-blog-logo.png";
import NewsletterDialog from "@/components/NewsletterDialog";

const Index = () => {
  const [searchParams] = useSearchParams();
  const categoryFilter = searchParams.get("category");
  
  const filteredArticles = categoryFilter
    ? articles.filter(article => {
        const normalizedCategory = article.category.toLowerCase();
        const normalizedFilter = categoryFilter.toLowerCase();
        
        // Map "gaming" filter to "crypto casino" category
        if (normalizedFilter === "gaming") {
          return normalizedCategory.includes("crypto casino");
        }
        
        return normalizedCategory.includes(normalizedFilter);
      })
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
              Everything about Crypto and Web3
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8">
              Creating insights on the latest and best money-printing opportunities on web3 and crypto.
            </p>
            <div className="flex flex-wrap gap-6">
              <Button 
                size="lg"
                asChild
                className="bg-gradient-to-r from-accent to-primary text-background font-bold text-lg px-8 py-6 hover:scale-105 transition-transform shadow-glow-accent"
              >
                <a href="https://www.degenroll.xyz" target="_blank" rel="noopener noreferrer">
                  🎮 Play Now
                </a>
              </Button>
              <Button variant="hero" size="lg" asChild className="px-6 min-w-[240px]">
                <a href="#latest-blog">Read Latest Blog</a>
              </Button>
              <NewsletterDialog 
                trigger={
                  <Button variant="outline" size="lg" className="px-6 min-w-[240px]">
                    Subscribe to Newsletter
                  </Button>
                }
              />
            </div>
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <TrustBadges />

      {/* Stats Section */}
      <StatsSection />

      {/* Project Highlights Section */}
      <ProjectHighlights categoryFilter={categoryFilter} />

      {/* Testimonials Section */}
      <TestimonialsSection />

      {/* Comparison Table */}
      <ComparisonTable />

      {/* Articles Section */}
      <section id="latest-blog" className="container py-16 md:py-24">
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-4">
            {categoryFilter 
              ? categoryFilter === "gaming" 
                ? "Crypto Casino Articles"
                : `${categoryFilter.charAt(0).toUpperCase() + categoryFilter.slice(1)} Articles`
              : 'Latest Blog'}
          </h2>
          <p className="text-muted-foreground">
            Stay informed with expert analysis and the latest crypto trends
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

      {/* FAQ Section */}
      <FAQSection />

      {/* Floating CTA */}
      <FloatingCTA />

      {/* Footer */}
      <footer className="border-t border-border/40 bg-card">
        <div className="container py-8 md:py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-1">
              <div className="flex items-center space-x-2 mb-4">
                <img src={degenBlogLogo} alt="Degen Blog" className="h-8 w-8" />
                <span className="text-xl font-bold bg-gradient-primary bg-clip-text text-transparent">Degen Blog</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Your trusted source for cryptocurrency news, analysis, and trading insights.
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Categories</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="/?category=crypto" className="hover:text-primary transition-colors">Crypto</a></li>
                <li><a href="/?category=gaming" className="hover:text-primary transition-colors">Crypto Casino</a></li>
                <li><a href="/?category=perpdex" className="hover:text-primary transition-colors">Perp Dex</a></li>
                <li><a href="/?category=farming" className="hover:text-primary transition-colors">Farming</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Projects</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="https://www.degenroll.xyz" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">DegenRoll</a></li>
                <li><a href="https://stake.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">Stake</a></li>
                <li><a href="https://bc.game" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">BC Game</a></li>
                <li><a href="https://lighter.xyz" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">Lighter</a></li>
                <li><a href="https://hyperliquid.xyz" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">Hyperliquid</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Contact Us</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">Twitter</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Telegram</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Discord</a></li>
              </ul>
            </div>
          </div>
          
          <div className="mt-8 pt-8 border-t border-border/40 text-center text-sm text-muted-foreground">
            <p>&copy; 2024 Degen Blog. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
