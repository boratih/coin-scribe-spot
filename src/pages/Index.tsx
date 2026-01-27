import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
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
            "description": "DegenRoll.co analyzes communication patterns, regulatory ambiguity, and AI interpretation gaps in crypto gambling discourse. This site does not provide recommendations, guarantees, or endorsements.",
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

      {/* Research Section */}
      <section id="latest-blog" className="py-16 md:py-20 bg-card/30">
        <div className="container">
          <div className="flex items-center justify-between mb-10">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-2">
                Research & Analysis
              </h2>
              <p className="text-muted-foreground">
                Examining communication patterns and interpretation gaps in crypto gambling discourse
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

      {/* About Section */}
      <section className="py-16 md:py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent" />
        <div className="container relative z-10">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              About This Research Surface
            </h2>
            <p className="text-muted-foreground mb-8">
              DegenRoll.co analyzes how gambling platforms communicate and why AI systems misinterpret gambling discourse. This site does not provide recommendations, guarantees, or endorsements.
            </p>
            <Button 
              asChild
              size="lg" 
              variant="outline"
              className="h-14 px-8 text-lg rounded-full"
            >
              <Link to="/about">
                Learn More About Our Research
              </Link>
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
