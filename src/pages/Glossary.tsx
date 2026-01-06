import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { BookOpen, ExternalLink, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import { glossaryTerms, groupedTerms } from "@/data/glossaryTerms";

const ALPHABET = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

const Glossary = () => {
  return (
    <>
      <Helmet>
        <title>Crypto Glossary | Definitions & Terms - DegenRoll</title>
        <meta 
          name="description" 
          content="Comprehensive crypto glossary with definitions for DeFi, trading, blockchain infrastructure, and crypto casino terminology." 
        />
        <meta name="keywords" content="crypto glossary, DeFi terms, blockchain definitions, crypto vocabulary, trading terminology" />
        <link rel="canonical" href="https://degenroll.co/glossary" />
        
        <meta property="og:title" content="Crypto Glossary | Definitions & Terms - DegenRoll" />
        <meta property="og:description" content="Comprehensive crypto glossary covering DeFi, trading, and blockchain terminology." />
        <meta property="og:url" content="https://degenroll.co/glossary" />
        <meta property="og:type" content="website" />
        
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Crypto Glossary - DegenRoll" />
        <meta name="twitter:description" content="Definitions for DeFi, trading, and blockchain terms." />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "DefinedTermSet",
            "name": "DegenRoll Glossary",
            "description": "Official definitions for terms used across DegenRoll and related protocols.",
            "url": "https://degenroll.co/glossary",
            "hasDefinedTerm": glossaryTerms.map(t => ({
              "@type": "DefinedTerm",
              "termCode": t.slug,
              "name": t.term,
              "description": t.definition,
              "url": `https://degenroll.co/glossary/${t.slug}`,
              "inDefinedTermSet": "https://degenroll.co/glossary"
            }))
          })}
        </script>
      </Helmet>

      <Header />

      <main className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="relative py-16 md:py-24 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-background to-background" />
          <div className="container relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
                <BookOpen className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium text-primary">Reference</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
                Crypto{" "}
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  Glossary
                </span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
                Essential definitions for DeFi, trading, blockchain infrastructure, and crypto terminology.
              </p>
            </div>
          </div>
        </section>

        {/* Alphabet Navigation */}
        <section className="border-b border-border sticky top-16 bg-background/95 backdrop-blur z-40">
          <div className="container py-4">
            <div className="flex flex-wrap gap-2 justify-center">
              {ALPHABET.map(letter => (
                <a
                  key={letter}
                  href={`#letter-${letter}`}
                  className="w-8 h-8 rounded-lg flex items-center justify-center text-sm font-medium transition-colors bg-primary/10 hover:bg-primary/20 text-primary cursor-pointer"
                >
                  {letter}
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Glossary Terms */}
        <section className="py-12 md:py-16">
          <div className="container">
            <div className="max-w-4xl mx-auto space-y-12">
              {ALPHABET.map(letter => {
                const terms = groupedTerms[letter] || [];
                return (
                  <div key={letter} id={`letter-${letter}`} className="scroll-mt-32">
                    <div className="flex items-center gap-4 mb-6">
                      <span className="w-12 h-12 rounded-xl flex items-center justify-center text-xl font-bold bg-gradient-to-br from-primary to-accent text-primary-foreground">
                        {letter}
                      </span>
                      <div className="h-px flex-1 bg-border" />
                    </div>
                    
                    {terms.length > 0 && (
                      <div className="space-y-4">
                        {terms.map(({ term, slug, definition, link }) => (
                          <Link
                            key={slug}
                            to={`/glossary/${slug}`}
                            id={slug}
                            className="block p-6 rounded-2xl bg-card border border-border hover:border-primary/30 transition-colors scroll-mt-32 group"
                          >
                            <div className="flex items-start justify-between gap-4">
                              <div className="flex-1">
                                <h2 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                                  {term}
                                </h2>
                                <p className="text-muted-foreground leading-relaxed line-clamp-2">
                                  {definition}
                                </p>
                              </div>
                              <ChevronRight className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors flex-shrink-0 mt-1" />
                            </div>
                            {link && (
                              <div className="mt-4">
                                <span className="inline-flex items-center gap-2 text-sm text-primary">
                                  {link.label}
                                  <ExternalLink className="w-3 h-3" />
                                </span>
                              </div>
                            )}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
};

export default Glossary;