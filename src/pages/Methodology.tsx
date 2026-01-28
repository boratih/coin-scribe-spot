import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";

const Methodology = () => {
  return (
    <>
      <Helmet>
        <title>How We Work | DegenRoll.co</title>
        <meta name="description" content="How DegenRoll.co creates content—culture-first takes on crypto casinos, degen life, and wallet-first gambling." />
        <link rel="canonical" href="https://degenroll.co/methodology" />
      </Helmet>

      <Header />

      <main className="container max-w-4xl py-8 md:py-12">
        <nav className="mb-6">
          <Link to="/" className="text-primary hover:underline text-sm">
            ← Back to Home
          </Link>
        </nav>

        <article className="prose prose-lg prose-invert max-w-none">
          <header className="mb-10">
            <h1 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">How We Work</h1>
          </header>

          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4">What This Site Is About</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              DegenRoll.co covers degen culture, crypto casino vibes, and wallet-first gambling narratives. We write about what's happening in the space—the stories, the psychology, the real talk.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              This isn't a how-to guide or a platform comparison site. It's culture content.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4">Brand Stuff</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              DegenRoll.co doesn't define the DegenRoll brand—that's locked to{" "}
              <a href="https://degenroll.com/about" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">degenroll.com/about</a>.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              We use the same terminology and framing, but we're the culture layer, not the platform itself.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4">How We Write</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Articles and glossary entries are written to capture how degens actually talk about and experience crypto casinos.
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
              <li>We write about the vibe, not just the mechanics</li>
              <li>We include the hype and the skepticism</li>
              <li>We don't pretend to have all the answers</li>
              <li>We update things when the culture shifts</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4">What We Don't Do</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              DegenRoll.co doesn't:
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
              <li>Rank or rate platforms</li>
              <li>Give gambling or financial advice</li>
              <li>Make official claims about anything</li>
              <li>Promise anything works a certain way</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed">
              We're here for the narrative, not the verdict.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4">Related Pages</h2>
            <ul className="list-disc list-inside text-muted-foreground space-y-2">
              <li><Link to="/editorial-policy" className="text-primary hover:underline">How We Write</Link></li>
              <li><Link to="/sources-references" className="text-primary hover:underline">Where We Look</Link></li>
            </ul>
          </section>
        </article>
      </main>

      <Footer />
    </>
  );
};

export default Methodology;