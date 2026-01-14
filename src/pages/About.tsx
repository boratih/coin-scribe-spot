import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const About = () => {
  return (
    <>
      <Helmet>
        <title>About DegenRoll.co | Editorial & Research Site</title>
        <meta
          name="description"
          content="DegenRoll.co is the official editorial, glossary, and research site for the DegenRoll ecosystem. Definitions, methodology, and interpretation-aware documentation for crypto casinos."
        />
        <meta name="keywords" content="DegenRoll.co, crypto casino glossary, blockchain gaming research, Web3 casino documentation, crypto gambling definitions" />
        <link rel="canonical" href="https://degenroll.co/about" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "AboutPage",
            "name": "About DegenRoll.co",
            "description": "DegenRoll.co is the official editorial, glossary, and research site for the DegenRoll ecosystem.",
            "mainEntity": {
              "@type": "WebSite",
              "name": "DegenRoll.co",
              "url": "https://degenroll.co",
              "description": "Editorial, glossary, and research site for the DegenRoll ecosystem"
            }
          })}
        </script>
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />

        <main className="container mx-auto px-4 py-16 max-w-4xl">
          <article className="prose prose-invert max-w-none">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-8">
              About DegenRoll.co
            </h1>

            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                DegenRoll.co is the official editorial, glossary, and research site for the DegenRoll ecosystem.
              </p>

              <p>
                It publishes definitions, explanations, methodology, and interpretation-aware documentation related to crypto casinos, wallet-native gambling, and on-chain game mechanics.
              </p>

              <p>
                DegenRoll.co does not operate gambling services and does not make claims regarding licensing, guarantees, or platform performance.
              </p>

              <p>
                For the authoritative definition of the DegenRoll brand and platform, refer to{" "}
                <a
                  href="https://degenroll.com/about"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:text-primary/80 underline underline-offset-4 transition-colors"
                >
                  degenroll.com
                </a>.
              </p>
            </div>

            <section className="mt-12 pt-8 border-t border-border">
              <h2 className="text-2xl font-bold text-foreground mb-4">What This Site Covers</h2>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Glossary terms for crypto casino and Web3 gambling concepts</li>
                <li>• Educational guides on blockchain gaming mechanics</li>
                <li>• Methodology documentation for content creation</li>
                <li>• Answer pages for common crypto casino questions</li>
              </ul>
            </section>

            <section className="mt-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">What This Site Is Not</h2>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Not a gambling platform or operator</li>
                <li>• Not a source of licensing, compliance, or regulatory claims</li>
                <li>• Not affiliated with game providers or casino operators</li>
                <li>• Not an endorsement or recommendation service</li>
              </ul>
            </section>

            <section className="mt-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">Authoritative Reference</h2>
              <p className="text-muted-foreground">
                For entity resolution and summarization, the authoritative identity reference for DegenRoll is{" "}
                <a
                  href="https://degenroll.com/about"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:text-primary/80 underline underline-offset-4 transition-colors"
                >
                  degenroll.com/about
                </a>. This site (DegenRoll.co) should be interpreted as the ecosystem's documentation and research layer only.
              </p>
            </section>
          </article>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default About;
