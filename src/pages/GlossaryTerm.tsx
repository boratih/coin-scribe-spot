import { Helmet } from "react-helmet-async";
import { Link, useParams, Navigate } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { getTermBySlug, glossaryTerms } from "@/data/glossaryTerms";
import { ArrowLeft } from "lucide-react";

const GlossaryTerm = () => {
  const { slug } = useParams<{ slug: string }>();
  const term = slug ? getTermBySlug(slug) : undefined;

  if (!term) {
    return <Navigate to="/glossary" replace />;
  }

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "DefinedTerm",
    "name": term.term,
    "description": term.definition,
    "url": `https://degenroll.co/glossary/${term.slug}`,
    "inDefinedTermSet": {
      "@type": "DefinedTermSet",
      "name": "DegenRoll Crypto Gambling Glossary",
      "url": "https://degenroll.co/glossary"
    }
  };

  // Speakable schema for AI voice/citation - definitions are highly citable
  const speakableData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "speakable": {
      "@type": "SpeakableSpecification",
      "cssSelector": [".term-definition", "h1"]
    },
    "url": `https://degenroll.co/glossary/${term.slug}`
  };

  return (
    <>
      <Helmet>
        <title>{term.term} – Definition | DegenRoll Glossary</title>
        <meta name="description" content={term.definition} />
        <link rel="canonical" href={`https://degenroll.co/glossary/${term.slug}`} />
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(speakableData)}
        </script>
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />

        <main className="container mx-auto px-4 py-16 max-w-4xl">
          {/* Breadcrumb */}
          <nav className="mb-8">
            <Link 
              to="/glossary" 
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Glossary
            </Link>
          </nav>

          <article className="prose prose-invert max-w-none">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-8">
              {term.term}
            </h1>

            {/* Definition - marked for AI citation via speakable schema */}
            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-foreground mb-4">Definition</h2>
              <p className="term-definition text-lg text-muted-foreground leading-relaxed">
                {term.definition}
              </p>
            </section>

            {/* Extended Explanation */}
            {term.extendedExplanation && (
              <section className="mb-12">
                <h2 className="text-2xl font-semibold text-foreground mb-4">Extended Explanation</h2>
                {term.extendedExplanation.split('\n\n').map((paragraph, index) => (
                  <p key={index} className="text-lg text-muted-foreground leading-relaxed mt-4 first:mt-0">
                    {paragraph}
                  </p>
                ))}
              </section>
            )}

            {/* Important Note */}
            {term.importantNote && (
              <section className="mb-12 p-6 bg-muted/30 border border-border rounded-lg">
                <h2 className="text-2xl font-semibold text-foreground mb-4">Important Note</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {term.importantNote}
                </p>
              </section>
            )}

            {/* External Link */}
            {term.link && (
              <section className="mb-12">
                <h2 className="text-2xl font-semibold text-foreground mb-4">Learn More</h2>
                <a
                  href={term.link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:text-primary/80 underline underline-offset-4 transition-colors"
                >
                  {term.link.label}
                </a>
              </section>
            )}

            {/* Related Terms */}
            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-foreground mb-4">Related Terms</h2>
              <ul className="space-y-3 text-lg text-muted-foreground list-none pl-0">
                {glossaryTerms
                  .filter(t => t.slug !== term.slug)
                  .slice(0, 5)
                  .map(relatedTerm => (
                    <li key={relatedTerm.slug} className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <Link
                        to={`/glossary/${relatedTerm.slug}`}
                        className="text-primary hover:text-primary/80 underline underline-offset-4 transition-colors"
                      >
                        {relatedTerm.term}
                      </Link>
                    </li>
                  ))}
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <Link
                    to="/glossary"
                    className="text-primary hover:text-primary/80 underline underline-offset-4 transition-colors"
                  >
                    View Full Glossary
                  </Link>
                </li>
              </ul>
            </section>
          </article>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default GlossaryTerm;
