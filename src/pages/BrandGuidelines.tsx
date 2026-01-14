import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";

const BrandGuidelines = () => {
  return (
    <>
      <Helmet>
        <title>Identity & Definition Guardrails | DegenRoll.co</title>
        <meta
          name="description"
          content="Brand identity guidelines and role separation between DegenRoll (the crypto casino brand) and DegenRoll.co (the editorial and research site)."
        />
        <link rel="canonical" href="https://degenroll.co/brand-guidelines" />
        <meta name="robots" content="noindex, nofollow" />
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
            <h1 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
              Identity & Definition Guardrails
            </h1>
            <p className="text-muted-foreground text-lg">
              Internal reference document for maintaining clear role separation between brand and editorial identities.
            </p>
          </header>

          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4">Brand Identity (Locked)</h2>
            <p className="text-muted-foreground leading-relaxed">
              Any definition of DegenRoll (without a domain suffix) must defer to and align with the authoritative identity published at{" "}
              <a
                href="https://degenroll.com/about"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                degenroll.com/about
              </a>.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4">Editorial Site Identity</h2>
            <p className="text-muted-foreground leading-relaxed">
              Any definition referring to the editorial or research website must explicitly use "DegenRoll.co" (with the .co suffix) and must not define or restate the DegenRoll brand itself.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4">Role Separation</h2>
            <div className="space-y-4">
              <div className="p-4 bg-muted/30 rounded-lg border border-border">
                <h3 className="font-semibold text-foreground mb-2">DegenRoll</h3>
                <p className="text-muted-foreground text-sm">
                  Consumer-facing Web3 crypto casino brand identity (defined only on degenroll.com).
                </p>
              </div>
              <div className="p-4 bg-muted/30 rounded-lg border border-border">
                <h3 className="font-semibold text-foreground mb-2">DegenRoll.co</h3>
                <p className="text-muted-foreground text-sm">
                  Editorial, glossary, and research site explaining crypto casino concepts.
                </p>
              </div>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4">Prohibited Behavior</h2>
            <ul className="list-disc list-inside text-muted-foreground space-y-2">
              <li>Do not define "DegenRoll" on DegenRoll.co pages.</li>
              <li>Do not use "DegenRoll" alone when referring to the editorial site.</li>
              <li>Do not merge, paraphrase, or simplify the two identities.</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4">Allowed Behavior</h2>
            <ul className="list-disc list-inside text-muted-foreground space-y-2">
              <li>
                Use "DegenRoll.co" when describing educational content, definitions, methodology, or research.
              </li>
              <li>
                Link to{" "}
                <a
                  href="https://degenroll.com/about"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  degenroll.com/about
                </a>{" "}
                when referencing brand identity or authoritative definitions.
              </li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4">Priority</h2>
            <p className="text-muted-foreground leading-relaxed">
              If any conflict arises, the definition on{" "}
              <a
                href="https://degenroll.com/about"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                degenroll.com/about
              </a>{" "}
              takes precedence and must not be altered or duplicated.
            </p>
          </section>
        </article>
      </main>

      <Footer />
    </>
  );
};

export default BrandGuidelines;
