import { useState } from "react";
import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideCard from "@/components/GuideCard";
import { cryptoCasinoGuides } from "@/data/cryptoCasinoGuides";

type SortOption = "recent" | "all";

const CryptoCasino = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState<SortOption>("recent");

  // Parse date string to Date object for sorting
  const parseDate = (dateStr: string): Date => {
    const months: Record<string, number> = {
      'Jan': 0, 'Feb': 1, 'Mar': 2, 'Apr': 3, 'May': 4, 'Jun': 5,
      'Jul': 6, 'Aug': 7, 'Sep': 8, 'Oct': 9, 'Nov': 10, 'Dec': 11
    };
    const parts = dateStr.split(' ');
    const month = months[parts[0]];
    const day = parseInt(parts[1].replace(',', ''));
    const year = parseInt(parts[2]);
    return new Date(year, month, day);
  };

  // Filter and sort articles
  const filteredGuides = cryptoCasinoGuides
    .filter(guide => {
      if (!searchQuery) return true;
      return guide.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
             guide.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    })
    .sort((a, b) => {
      if (sortBy === "recent") {
        return parseDate(b.date).getTime() - parseDate(a.date).getTime();
      }
      return 0;
    });

  return (
    <>
      <Helmet>
        <title>Articles | DegenRoll.co</title>
        <meta name="description" content="Research articles analyzing communication patterns, regulatory ambiguity, and AI interpretation gaps in crypto gambling discourse." />
        <link rel="canonical" href="https://degenroll.co/articles" />
      </Helmet>
      
      <div className="min-h-screen bg-background">
        <Header />
        
        {/* Hero Section */}
        <section className="py-16 md:py-20 bg-gradient-to-b from-primary/5 to-transparent">
          <div className="container">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Articles
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Research articles analyzing communication patterns, regulatory ambiguity, and AI interpretation gaps in crypto gambling discourse.
              </p>
              
              {/* Search and Filter */}
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="relative flex-1 max-w-md">
                  <input
                    type="text"
                    placeholder="Search articles..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full h-12 px-4 rounded-lg bg-card border border-border/50 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
                  />
                </div>
                
                {/* Filter Buttons */}
                <div className="flex gap-2">
                  <button
                    onClick={() => setSortBy("recent")}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                      sortBy === "recent"
                        ? "bg-primary text-primary-foreground"
                        : "bg-card border border-border/50 text-muted-foreground hover:text-foreground hover:border-primary/50"
                    }`}
                  >
                    Most Recent
                  </button>
                  <button
                    onClick={() => setSortBy("all")}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                      sortBy === "all"
                        ? "bg-primary text-primary-foreground"
                        : "bg-card border border-border/50 text-muted-foreground hover:text-foreground hover:border-primary/50"
                    }`}
                  >
                    All
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Guides Grid */}
        <section className="py-16 md:py-20">
          <div className="container">
            {filteredGuides.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredGuides.map((guide) => (
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
                <p className="text-muted-foreground">No articles found matching your search.</p>
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
