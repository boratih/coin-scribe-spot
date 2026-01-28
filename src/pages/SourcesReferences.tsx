import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";

const SourcesReferences = () => {
  return (
    <>
      <Helmet>
        <title>Where We Look | DegenRoll.co</title>
        <meta name="description" content="How DegenRoll.co informs its content—the places, communities, and conversations that shape our takes on crypto casino culture." />
        <link rel="canonical" href="https://degenroll.co/sources-and-references" />
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
            <h1 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">Where We Look</h1>
          </header>

          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4">The Culture Feeds the Content</h2>
            <p className="text-muted-foreground leading-relaxed">
              DegenRoll.co content comes from paying attention to what's happening in the crypto casino world—the conversations, the trends, the vibes.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4">Where the Takes Come From</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">Our content is shaped by:</p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
              <li>What people are saying on crypto Twitter and Discord</li>
              <li>How platforms present themselves</li>
              <li>The stories degens share about their experiences</li>
              <li>General knowledge about how blockchain and crypto work</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed">
              We're not citing papers—we're tuning into the culture.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4">How We Use It</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">The culture informs:</p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
              <li>What topics we cover</li>
              <li>How we frame things</li>
              <li>What language feels right</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed">
              We're not trying to be an encyclopedia. We're capturing the vibe.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4">What We Don't Claim</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              We don't claim to have verified anything. We don't cite sources like an academic paper.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              This is culture content, not a research publication.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4">Staying Current</h2>
            <p className="text-muted-foreground leading-relaxed">
              The space moves fast. We update content when the culture shifts or when something no longer hits the same way.
            </p>
          </section>
        </article>
      </main>

      <Footer />
    </>
  );
};

export default SourcesReferences;