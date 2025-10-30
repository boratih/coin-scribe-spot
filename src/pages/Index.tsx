import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import Header from "@/components/Header";
import ArticleCard from "@/components/ArticleCard";
import { Button } from "@/components/ui/button";
import { articles } from "@/data/articles";
import heroImage from "@/assets/hero-bg.jpg";
import degenBlogLogo from "@/assets/degen-blog-logo.png";
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
      <footer className="border-t border-border/40 bg-card">
        <div className="container py-8 md:py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
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
                <li><a href="/?category=gaming" className="hover:text-primary transition-colors">Crypto Gaming</a></li>
                <li><a href="/?category=perpdex" className="hover:text-primary transition-colors">Perp Dex</a></li>
                <li><a href="/?category=farming" className="hover:text-primary transition-colors">Farming</a></li>
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
            <p>&copy; 2024 Degen Blog. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
