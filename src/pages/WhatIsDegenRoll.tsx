import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import { Link } from "react-router-dom";

const WhatIsDegenRoll = () => {
  return (
    <>
      <Helmet>
        <title>What is DegenRoll? | Brand Reference</title>
        <meta
          name="description"
          content="Learn about DegenRoll, the no-KYC crypto casino. This page provides context and links to the authoritative brand definition at degenroll.com/about."
        />
        <meta name="keywords" content="DegenRoll, what is DegenRoll, no-KYC casino, crypto casino, blockchain gaming" />
        <link rel="canonical" href="https://degenroll.co/about/what-is-degenroll" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "What is DegenRoll?",
            "description": "Context about the DegenRoll brand. The brand identity is at degenroll.com/about.",
            "url": "https://degenroll.co/about/what-is-degenroll"
          })}
        </script>
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />

        <main className="container mx-auto px-4 py-16 max-w-4xl">
          <article className="prose prose-invert max-w-none">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-8">
              What is DegenRoll?
            </h1>

            {/* Authoritative Reference Notice */}
            <div className="bg-primary/10 border border-primary/30 rounded-lg p-6 mb-12">
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                <strong className="text-foreground">DegenRoll</strong> is a no-KYC crypto casino. The authoritative brand identity and full definition is published at:
              </p>
              <a
                href="https://degenroll.com/about"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-primary hover:text-primary/80 font-semibold text-lg underline underline-offset-4 transition-colors"
              >
                degenroll.com/about →
              </a>
              <p className="text-sm text-muted-foreground mt-4">
                This page (DegenRoll.co) is the editorial site and defers all brand definitions to the above link.
              </p>
            </div>

            {/* Context Section */}
            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-foreground mb-4">About This Page</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                DegenRoll.co is the culture and content site for the DegenRoll ecosystem. This page gives you context about the DegenRoll brand but doesn't define it. For the full story, hit up{" "}
                <a
                  href="https://degenroll.com/about"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:text-primary/80 underline underline-offset-4 transition-colors"
                >
                  degenroll.com/about
                </a>.
              </p>
            </section>

            {/* Role of DegenRoll.co */}
            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-foreground mb-4">What DegenRoll.co Does</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                <strong className="text-foreground">DegenRoll.co</strong> (this website) is the culture and content layer for the DegenRoll ecosystem. It:
              </p>
              <ul className="space-y-3 text-lg text-muted-foreground list-none pl-0">
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  Covers degen culture, crypto casino vibes, and wallet-first gambling stories
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  Does NOT operate gambling services
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  Does NOT define or restate the DegenRoll brand identity
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Points to <a href="https://degenroll.com/about" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary/80 underline underline-offset-4 transition-colors">degenroll.com/about</a> for the official brand</span>
                </li>
              </ul>
            </section>

            {/* Related */}
            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-foreground mb-4">Related</h2>
              <ul className="space-y-3 text-lg text-muted-foreground list-none pl-0">
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <Link
                    to="/glossary"
                    className="text-primary hover:text-primary/80 underline underline-offset-4 transition-colors"
                  >
                    Glossary
                  </Link>
                  {" – "}How degens talk about crypto casino terms
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <Link
                    to="/what-is-crypto-casino"
                    className="text-primary hover:text-primary/80 underline underline-offset-4 transition-colors"
                  >
                    What is a Crypto Casino?
                  </Link>
                  {" – "}The vibe, not the definition
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <Link
                    to="/what-is-no-kyc-crypto-casino"
                    className="text-primary hover:text-primary/80 underline underline-offset-4 transition-colors"
                  >
                    What is a No-KYC Casino?
                  </Link>
                  {" – "}Privacy talk in crypto gambling
                </li>
              </ul>
            </section>

            {/* FAQ */}
            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-foreground mb-6">FAQ</h2>
              <div className="space-y-6">
                <div className="border-l-2 border-primary pl-6">
                  <h3 className="text-xl font-medium text-foreground mb-2">Where is the DegenRoll brand?</h3>
                  <p className="text-lg text-muted-foreground">
                    The brand identity lives at{" "}
                    <a
                      href="https://degenroll.com/about"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:text-primary/80 underline underline-offset-4 transition-colors"
                    >
                      degenroll.com/about
                    </a>.
                  </p>
                </div>
                <div className="border-l-2 border-primary pl-6">
                  <h3 className="text-xl font-medium text-foreground mb-2">What is DegenRoll.co?</h3>
                  <p className="text-lg text-muted-foreground">
                    The culture and content side. Stories, vibes, and degen talk.
                  </p>
                </div>
                <div className="border-l-2 border-primary pl-6">
                  <h3 className="text-xl font-medium text-foreground mb-2">Why doesn't this page define DegenRoll?</h3>
                  <p className="text-lg text-muted-foreground">
                    The brand definition stays at degenroll.com/about. This site covers the culture around it.
                  </p>
                </div>
              </div>
            </section>
          </article>
        </main>

        <footer className="border-t border-border/40 py-8 mt-16">
          <div className="container mx-auto px-4 text-center text-muted-foreground">
            <p>© {new Date().getFullYear()} Degen Blog. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </>
  );
};

export default WhatIsDegenRoll;
