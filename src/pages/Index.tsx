import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import Header from "@/components/Header";
import ArticleCard from "@/components/ArticleCard";
import ProjectHighlights from "@/components/ProjectHighlights";
import { Button } from "@/components/ui/button";
import { articles } from "@/data/articles";
import heroImage from "@/assets/hero-bg.jpg";
import NewsletterDialog from "@/components/NewsletterDialog";

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
              Everything about Crypto and Web3
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8">
              Creating insights on the latest and best money-printing opportunities on web3 and crypto.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button 
                size="lg"
                asChild
                className="bg-gradient-to-r from-accent to-primary text-background font-bold text-lg px-8 py-6 hover:scale-105 transition-transform shadow-glow-accent"
              >
                <a href="https://www.degenroll.xyz" target="_blank" rel="noopener noreferrer">
                  🎮 Play Now
                </a>
              </Button>
              <Button variant="hero" size="lg" asChild>
                <a href="#latest-blog">Read Latest Blog</a>
              </Button>
              <NewsletterDialog 
                trigger={
                  <Button variant="outline" size="lg">
                    Subscribe to Newsletter
                  </Button>
                }
              />
            </div>
          </div>
        </div>
      </section>

      {/* Project Highlights Section */}
      <ProjectHighlights />

      {/* Articles Section */}
      <section id="latest-blog" className="container py-16 md:py-24">
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-4">
            {categoryFilter ? `${categoryFilter.charAt(0).toUpperCase() + categoryFilter.slice(1)} Articles` : 'Latest Blog'}
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

      {/* Footer */}
      <footer className="border-t border-border/40 bg-primary">
        <div className="container py-8 md:py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            <div>
              <h3 className="font-semibold mb-4 text-primary-foreground">Popular Pages</h3>
              <ul className="space-y-2 text-sm text-primary-foreground/80">
                <li><a href="#" className="hover:text-primary-foreground transition-colors">No KYC Casinos</a></li>
                <li><a href="#" className="hover:text-primary-foreground transition-colors">Crypto Bonuses</a></li>
                <li><a href="#" className="hover:text-primary-foreground transition-colors">Crypto Games</a></li>
                <li><a href="#" className="hover:text-primary-foreground transition-colors">Crypto Casino Guides</a></li>
                <li><a href="#" className="hover:text-primary-foreground transition-colors">Crypto Payments</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4 text-primary-foreground">Popular Crypto Casinos</h3>
              <ul className="space-y-2 text-sm text-primary-foreground/80">
                <li><a href="https://stake.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary-foreground transition-colors">BetPlay</a></li>
                <li><a href="#" className="hover:text-primary-foreground transition-colors">Flush Casino</a></li>
                <li><a href="https://bc.game" target="_blank" rel="noopener noreferrer" className="hover:text-primary-foreground transition-colors">BC.Game</a></li>
                <li><a href="#" className="hover:text-primary-foreground transition-colors">BitStarz</a></li>
                <li><a href="#" className="hover:text-primary-foreground transition-colors">BetPanda</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4 text-primary-foreground">Information</h3>
              <ul className="space-y-2 text-sm text-primary-foreground/80">
                <li><a href="#" className="hover:text-primary-foreground transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-primary-foreground transition-colors">Contact Us</a></li>
                <li><a href="#" className="hover:text-primary-foreground transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-primary-foreground transition-colors">Cookie Policy</a></li>
                <li><a href="#" className="hover:text-primary-foreground transition-colors">Terms & Conditions</a></li>
                <li><a href="#" className="hover:text-primary-foreground transition-colors">Responsible Gambling</a></li>
                <li><a href="#" className="hover:text-primary-foreground transition-colors">Review Process</a></li>
                <li><a href="#" className="hover:text-primary-foreground transition-colors">News</a></li>
              </ul>
            </div>
          </div>
          
          <div className="mt-8 pt-8 border-t border-primary-foreground/20 text-center text-sm text-primary-foreground/80">
            <p>&copy; 2024 Degen Blog. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
