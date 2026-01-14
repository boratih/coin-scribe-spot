import { useState } from "react";
import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import FeaturedProjects from "@/components/FeaturedProjects";
import GuideCard from "@/components/GuideCard";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { cryptoCasinoGuides } from "@/data/cryptoCasinoGuides";

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
            "name": "DegenRoll.co",
            "url": "https://degenroll.co",
            "description": "DegenRoll.co is the canonical editorial, glossary, and research site for the DegenRoll ecosystem. For the DegenRoll brand identity, see degenroll.com/about.",
            "logo": "https://degenroll.co/logo.png",
            "sameAs": [
              "https://degenroll.com/about"
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
                  imageAlt={guide.imageAlt}
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
              Ready to Explore?
            </h2>
            <p className="text-muted-foreground mb-8">
              Visit DegenRoll for crypto casino gaming with instant deposits, provably fair games, and fast withdrawals.
            </p>
            <Button 
              asChild
              size="lg" 
              className="h-14 px-8 text-lg rounded-full bg-gradient-to-r from-primary to-accent"
            >
              <a href="https://degenroll.com" target="_blank" rel="noopener noreferrer">
                Visit DegenRoll.com
              </a>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
      </div>
    </>
  );
};

export default Index;
