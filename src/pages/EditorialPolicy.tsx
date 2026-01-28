import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";

const EditorialPolicy = () => {
  return (
    <>
      <Helmet>
        <title>How We Write | DegenRoll.co</title>
        <meta name="description" content="DegenRoll.co's approach to content—culture-first, no rankings, no endorsements, no official claims." />
        <link rel="canonical" href="https://degenroll.co/editorial-policy" />
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
            <h1 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">How We Write</h1>
          </header>

          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4">It's About the Culture</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              DegenRoll.co covers degen culture, crypto casino vibes, and the real talk around wallet-first gambling.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              We write stories and takes based on what's happening in the space—not to tell you what to do, but to reflect how people think, play, and talk about it.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4">No Rankings, No Endorsements</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              We don't rank platforms. We don't pick winners. We don't tell you where to play.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              This isn't a "top 10" site. It's culture and narrative—takes on how the crypto casino world operates and what degens care about.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4">Keeping It Real</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              We write from a place of understanding the space, not pretending to be above it.
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
              <li>We talk about risk because it's part of the game</li>
              <li>We cover both the hype and the reality</li>
              <li>We don't sugarcoat or oversell</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4">The DegenRoll Platform</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              DegenRoll.co is the content layer. The actual platform is at degenroll.com.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Content here stands on its own—we're not trying to push you anywhere. If you want the platform, you'll find it.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4">Who This Is For</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">This content is for:</p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
              <li>Degens who want to understand the culture</li>
              <li>People curious about crypto casinos</li>
              <li>Anyone who wants real talk, not sales pitches</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed">
              Not financial advice. Not gambling tips. Just the culture.
            </p>
          </section>
        </article>
      </main>

      <Footer />
    </>
  );
};

export default EditorialPolicy;