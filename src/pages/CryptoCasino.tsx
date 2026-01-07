import { useState } from "react";
import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideCard from "@/components/GuideCard";
import { cryptoCasinoGuides } from "@/data/cryptoCasinoGuides";

const CryptoCasino = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const searchedGuides = searchQuery 
    ? cryptoCasinoGuides.filter(guide => 
        guide.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        guide.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : cryptoCasinoGuides;

  return (
    <>
      <Helmet>
        <title>Crypto Casino Guides | DegenRoll</title>
        <meta name="description" content="Expert guides and insights on crypto casinos, no KYC gambling, provably fair systems, and blockchain gaming. Everything you need to know about cryptocurrency gambling." />
        <link rel="canonical" href="https://degenroll.co/crypto-casino" />
      </Helmet>
      
      <div className="min-h-screen bg-background">
        <Header />
        
        {/* Hero Section */}
        <section className="py-16 md:py-20 bg-gradient-to-b from-primary/5 to-transparent">
          <div className="container">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Crypto Casino Guides
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Expert insights and strategies for crypto casino players. Learn about no KYC gambling, provably fair systems, and blockchain gaming.
              </p>
              
              {/* Search */}
              <div className="relative max-w-md">
                <input
                  type="text"
                  placeholder="Search guides..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full h-12 px-4 rounded-lg bg-card border border-border/50 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Guides Grid */}
        <section className="py-16 md:py-20">
          <div className="container">
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

        <Footer />
      </div>
    </>
  );
};

export default CryptoCasino;
