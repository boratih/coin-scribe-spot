import { useState } from "react";
import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import FeaturedProjects from "@/components/FeaturedProjects";
import GuideCard from "@/components/GuideCard";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { cryptoCasinoGuides } from "@/data/cryptoCasinoGuides";
import degenrollLogo from "@/assets/degenroll-logo.webp";
import { Twitter, MessageCircle, Send } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  const [searchQuery, setSearchQuery] = useState("");

  // Filter guides based on search
  const searchedGuides = searchQuery 
    ? cryptoCasinoGuides.filter(guide => 
        guide.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        guide.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : cryptoCasinoGuides;

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    // Scroll to guides section
    document.getElementById('latest-blog')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "DegenRoll",
            "url": "https://degenroll.co",
            "description": "DegenRoll is a no-KYC crypto casino that offers instant deposits, instant withdrawals, and supports 9+ blockchain networks for seamless, high-velocity gameplay.",
            "logo": "https://degenroll.co/logo.png",
            "sameAs": [
              "https://degenroll.com",
              "https://degenroll.co/about",
              "https://degenroll.co/about/what-is-degenroll"
            ]
          })}
        </script>
      </Helmet>
      <div className="min-h-screen bg-background">
        <Header />
      
      {/* Hero Section */}
      <HeroSection onSearch={handleSearch} />

      {/* Featured Projects Section */}
      <FeaturedProjects />

      {/* Guides Section */}
      <section id="latest-blog" className="py-16 md:py-20 bg-card/30">
        <div className="container">
          <div className="flex items-center justify-between mb-10">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-2">
                Crypto Casino Guides
              </h2>
              <p className="text-muted-foreground">
                Expert insights and strategies for crypto casino players
              </p>
            </div>
          </div>

          {searchedGuides.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {searchedGuides.map((guide) => (
                <GuideCard
                  key={guide.slug}
                  slug={guide.slug}
                  title={guide.title}
                  excerpt={guide.excerpt}
                  category={guide.category}
                  date={guide.date}
                  image={guide.image}
                  readTime={guide.readTime}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-muted-foreground">No guides found matching your search.</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent" />
        <div className="container relative z-10">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Play?
            </h2>
            <p className="text-muted-foreground mb-8">
              Experience the best crypto casino with instant deposits, provably fair games, and fast withdrawals.
            </p>
            <Button 
              asChild
              size="lg" 
              className="h-14 px-8 text-lg rounded-full bg-gradient-to-r from-primary to-accent"
            >
              <a href="https://www.degenroll.xyz" target="_blank" rel="noopener noreferrer">
                Play Now on DegenRoll
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/40 bg-card/50">
        <div className="container py-12 md:py-16">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
            <div className="col-span-1">
              <div className="flex items-center mb-4">
                <img src={degenrollLogo} alt="Degenroll" className="h-10" />
              </div>
              <p className="text-sm text-muted-foreground mb-4">
                Your ultimate guide to crypto casinos. Built by degens, for degens.
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
              <h3 className="font-semibold mb-4">Guides</h3>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li><Link to="/what-is-crypto-casino" className="hover:text-primary transition-colors">What is a Crypto Casino?</Link></li>
                <li><Link to="/what-is-no-kyc-crypto-casino" className="hover:text-primary transition-colors">No KYC Casinos Explained</Link></li>
                <li><Link to="/what-is-provably-fair-system" className="hover:text-primary transition-colors">Provably Fair Gaming</Link></li>
                <li><Link to="/crypto-casino" className="hover:text-primary transition-colors">All Guides</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Resources</h3>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li><Link to="/glossary" className="hover:text-primary transition-colors">Glossary</Link></li>
                <li><Link to="/about" className="hover:text-primary transition-colors">About</Link></li>
                <li><Link to="/technology" className="hover:text-primary transition-colors">Technology</Link></li>
                <li><a href="https://degenroll.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">DegenRoll Casino →</a></li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Policies</h3>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li><Link to="/methodology" className="hover:text-primary transition-colors">Methodology</Link></li>
                <li><Link to="/editorial-policy" className="hover:text-primary transition-colors">Editorial Policy</Link></li>
                <li><Link to="/sources-and-references" className="hover:text-primary transition-colors">Sources & References</Link></li>
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
    </>
  );
};

export default Index;
