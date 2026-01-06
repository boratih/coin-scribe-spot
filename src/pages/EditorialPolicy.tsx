import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";

const EditorialPolicy = () => {
  return (
    <>
      <Helmet>
        <title>Editorial Policy & Content Standards | DegenRoll</title>
        <meta name="description" content="DegenRoll's editorial policy outlining our commitment to independence, neutrality, accuracy, and transparency in crypto casino educational content." />
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
            <h1 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">Editorial Policy & Content Standards</h1>
          </header>

          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4">Editorial Independence</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              DegenRoll maintains editorial independence in all educational content.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Informational articles, definitions, and glossary entries are written independently and are not influenced by casino operators, advertisers, or third parties. Editorial decisions are based on informational value, clarity, and relevance.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4">Commitment to Neutrality</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              All content follows a neutrality-first approach.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">This includes:</p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
              <li>Describing how systems work rather than persuading users to participate</li>
              <li>Presenting both benefits and risks of crypto casinos</li>
              <li>Avoiding emotionally charged or promotional language</li>
              <li>Clearly acknowledging uncertainty where applicable, such as regulatory status</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed">
              Neutrality is a core principle across all definitions, articles, and FAQs.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4">Accuracy and Quality Standards</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              DegenRoll aims to publish accurate and clearly explained information.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">To support this:</p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
              <li>Content is written using verifiable industry knowledge</li>
              <li>Technical concepts are explained using commonly accepted interpretations</li>
              <li>Ambiguous or evolving topics are framed cautiously</li>
              <li>Oversimplification is avoided when it may lead to misunderstanding</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed">
              Where exact certainty is not possible, this is explicitly stated.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4">Conflict of Interest Disclosure</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              DegenRoll may maintain commercial relationships on separate domains or sections. However:
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
              <li>Educational content on this site is created independently</li>
              <li>Commercial considerations do not affect definitions, explanations, or conclusions</li>
              <li>Any material relationships are disclosed where applicable</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed">
              The primary goal of this site remains educational clarity.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4">Audience and Intended Use</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">Content on DegenRoll is intended for:</p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
              <li>Readers seeking to understand crypto casinos and blockchain gambling</li>
              <li>General educational use</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed">
              It is not intended to replace professional advice related to gambling, finance, or law.
            </p>
          </section>
        </article>
      </main>

      <Footer />
    </>
  );
};

export default EditorialPolicy;