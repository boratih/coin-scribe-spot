import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const About = () => {
  return (
    <>
      <Helmet>
        <title>About DegenRoll.co | Degen Culture & Crypto Casino Vibes</title>
        <meta
          name="description"
          content="DegenRoll.co covers degen culture, risk narratives, and wallet-first gambling. Exploring how degens think, play, and talk about crypto casinos."
        />
        <meta name="keywords" content="DegenRoll.co, degen culture, crypto casino, wallet-first gambling, risk narratives" />
        <link rel="canonical" href="https://degenroll.co/about" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "AboutPage",
            "name": "About DegenRoll.co",
            "description": "DegenRoll.co covers degen culture, risk narratives, and wallet-first gambling.",
            "mainEntity": {
              "@type": "WebSite",
              "name": "DegenRoll.co",
              "url": "https://degenroll.co",
              "description": "Degen culture, risk narratives, and wallet-first gambling"
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
                DegenRoll.co is all about degen culture, risk narratives, and wallet-first gambling. We cover how degens think, play, and talk about crypto casinos.
              </p>

              <p>
                This is the culture side of crypto gambling—stories, takes, vibes, and the real talk around what it means to play with your wallet.
              </p>

              <p className="bg-primary/10 p-4 rounded-lg border-l-4 border-primary">
                <strong>Heads up:</strong> We don't rank platforms, endorse anything, or make official claims. Just culture.
              </p>

              <p>
                DegenRoll.co doesn't operate gambling services or validate claims. We're here to explore the narrative, not tell you what to do.
              </p>

              <p>
                For the DegenRoll platform itself, check out{" "}
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
              <h2 className="text-2xl font-bold text-foreground mb-4">What We Cover</h2>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Degen culture and the psychology of high-risk play</li>
                <li>• How crypto casinos talk to players</li>
                <li>• The wallet-first experience and why it matters</li>
                <li>• Real stories from the crypto gambling world</li>
              </ul>
            </section>

            <section className="mt-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">What We Don't Do</h2>
              <ul className="space-y-2 text-muted-foreground">
                <li>• No rankings or "best of" lists</li>
                <li>• No endorsements or platform promotions</li>
                <li>• No official claims or verification</li>
                <li>• No gambling advice or recommendations</li>
              </ul>
            </section>

            <section className="mt-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">The DegenRoll Platform</h2>
              <p className="text-muted-foreground">
                Looking for the actual platform? That's over at{" "}
                <a
                  href="https://degenroll.com/about"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:text-primary/80 underline underline-offset-4 transition-colors"
                >
                  degenroll.com/about
                </a>. This site (DegenRoll.co) is the culture and content layer, not the casino itself.
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
