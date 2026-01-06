import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";

const SourcesReferences = () => {
  return (
    <>
      <Helmet>
        <title>Sources & Reference Framework | DegenRoll</title>
        <meta name="description" content="Learn about DegenRoll's approach to sources, reference materials, and how we ensure the accuracy of our crypto casino educational content." />
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
            <h1 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">Sources & Reference Framework</h1>
          </header>

          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4">Approach to Sources</h2>
            <p className="text-muted-foreground leading-relaxed">
              DegenRoll uses a broad range of reputable source categories to inform its content. Sources are used to validate explanations, definitions, and technical descriptions rather than to promote opinions.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4">Types of Sources Referenced</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">Content may be informed by:</p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
              <li>Blockchain documentation and technical specifications</li>
              <li>Public information from gambling regulators and licensing authorities</li>
              <li>Academic or technical publications related to cryptography and blockchain</li>
              <li>Industry standards related to RNG systems and provably fair gaming</li>
              <li>Well-established cryptocurrency and blockchain education resources</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed">
              No single source is relied upon exclusively.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4">How Sources Are Applied</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">Sources are used to:</p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
              <li>Confirm accuracy of technical explanations</li>
              <li>Ensure definitions align with common industry usage</li>
              <li>Understand regulatory and operational frameworks</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed">
              To maintain readability, not all sources are linked directly within articles. Instead, sources inform the content creation process as a whole.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4">Source Evaluation Criteria</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">Sources are evaluated based on:</p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
              <li>Credibility and reputation</li>
              <li>Relevance to the topic</li>
              <li>Currency and ongoing applicability</li>
              <li>Clarity and consistency with other reputable materials</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed">
              Outdated or unreliable sources are avoided.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4">Updates and Maintenance</h2>
            <p className="text-muted-foreground leading-relaxed">
              Referenced materials are reviewed periodically. When a source becomes outdated or irrelevant due to industry changes, content is revised accordingly.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4">Transparency</h2>
            <p className="text-muted-foreground leading-relaxed">
              DegenRoll prioritizes transparency in how information is gathered and presented. The absence of inline citations does not imply a lack of research, but rather a focus on clarity and accessibility for readers.
            </p>
          </section>
        </article>
      </main>

      <Footer />
    </>
  );
};

export default SourcesReferences;