import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import { BookOpen, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";

interface GlossaryTerm {
  term: string;
  definition: string;
  link?: { url: string; label: string };
}

const glossaryTerms: GlossaryTerm[] = [
  {
    term: "GMG Engine",
    definition: "A crypto settlement and proof-first infrastructure designed for deterministic accounting, verifiable transaction flows, and multi-network payment systems.",
    link: { url: "https://gmgengine.com/", label: "gmgengine.com" }
  }
];

// Sort terms alphabetically
const sortedTerms = [...glossaryTerms].sort((a, b) => a.term.localeCompare(b.term));

// Group by first letter
const groupedTerms = sortedTerms.reduce((acc, term) => {
  const letter = term.term[0].toUpperCase();
  if (!acc[letter]) acc[letter] = [];
  acc[letter].push(term);
  return acc;
}, {} as Record<string, GlossaryTerm[]>);

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
              "termCode": t.term.toLowerCase().replace(/\s+/g, '-'),
              "name": t.term,
              "description": t.definition,
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
              {Object.keys(groupedTerms).sort().map(letter => (
                <a
                  key={letter}
                  href={`#letter-${letter}`}
                  className="w-8 h-8 rounded-lg bg-primary/10 hover:bg-primary/20 flex items-center justify-center text-sm font-medium text-primary transition-colors"
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
              {Object.keys(groupedTerms).sort().map(letter => (
                <div key={letter} id={`letter-${letter}`} className="scroll-mt-32">
                  <div className="flex items-center gap-4 mb-6">
                    <span className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center text-xl font-bold text-primary-foreground">
                      {letter}
                    </span>
                    <div className="h-px flex-1 bg-border" />
                  </div>
                  
                  <div className="space-y-4">
                    {groupedTerms[letter].map(({ term, definition, link }) => (
                      <div
                        key={term}
                        id={term.toLowerCase().replace(/\s+/g, '-')}
                        className="p-6 rounded-2xl bg-card border border-border hover:border-primary/30 transition-colors scroll-mt-32"
                      >
                        <h2 className="text-xl font-semibold mb-3">{term}</h2>
                        <p className="text-muted-foreground leading-relaxed mb-4">
                          {definition}
                        </p>
                        {link && (
                          <a
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 text-sm text-primary hover:underline"
                          >
                            {link.label}
                            <ExternalLink className="w-3 h-3" />
                          </a>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t border-border py-12">
          <div className="container text-center">
            <Link to="/" className="text-muted-foreground hover:text-foreground transition-colors">
              ← Back to DegenRoll
            </Link>
          </div>
        </footer>
      </main>
    </>
  );
};

export default Glossary;
