import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";

const Methodology = () => {
  return (
    <>
      <Helmet>
        <title>Content & Research Methodology | DegenRoll</title>
        <meta name="description" content="Learn about DegenRoll's content creation process, research methodology, and how we ensure accuracy in our crypto casino educational content." />
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
            <h1 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">Content & Research Methodology</h1>
          </header>

          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4">Purpose of This Website</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              DegenRoll.co is an educational resource focused on explaining crypto casinos, blockchain gaming mechanics, and wallet-native gambling concepts. This website provides clear, neutral, and structured information that helps readers understand how crypto casinos work, their advantages, limitations, and associated risks.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              All content is created for informational purposes only and does not constitute gambling, financial, or legal advice.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4">Terminology & Interpretation Framework</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              DegenRoll.co does not independently define brand-level terminology or operational meaning.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Interpretations of terms such as <em>proof</em>, <em>fair</em>, <em>supported</em>, <em>provider</em>, <em>instant</em>, and <em>transparency</em> follow the DegenRoll brand's canonical{" "}
              <a href="https://degenroll.com/transparency.html" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Transparency & Interpretation Boundaries</a> and{" "}
              <a href="https://degenroll.com/proof.html" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Proof & Verification Boundaries</a> published on degenroll.com.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              This site applies those interpretation rules when explaining concepts but does not publish certifications, audits, or operational guarantees.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4">How Definitions Are Created</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Definitions published on DegenRoll are written to reflect commonly accepted industry usage and technical understanding.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">Each definition is:</p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
              <li>Based on how terms are used in practice within crypto gambling, blockchain, and online casino industries</li>
              <li>Written in neutral, descriptive language without promotional intent</li>
              <li>Designed to be self-contained and understandable without external context</li>
              <li>Reviewed periodically to ensure terminology remains accurate as the industry evolves</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed">
              Definitions prioritize clarity and precision over marketing language.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4">How Articles Are Researched and Written</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Articles on DegenRoll are structured to explain concepts, systems, and mechanisms rather than promote specific platforms.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">The research and writing process typically includes:</p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
              <li>Identifying commonly asked questions and knowledge gaps related to crypto casinos</li>
              <li>Explaining concepts step-by-step using clear, structured sections</li>
              <li>Including both advantages and limitations to provide balanced coverage</li>
              <li>Avoiding exaggerated claims or unverified assertions</li>
              <li>Clearly distinguishing factual explanations from general observations</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Articles are written to be accessible to a general audience while maintaining technical accuracy.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Articles may reference external platforms, tools, or providers for explanatory purposes only and should not be interpreted as evidence of partnership, endorsement, or availability.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4">FAQ Creation Methodology</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Frequently Asked Questions (FAQs) are created to directly answer common user questions related to crypto casinos.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">FAQ answers are:</p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
              <li>Written as complete, standalone responses</li>
              <li>Visible directly on the page (not hidden or collapsed for indexing purposes)</li>
              <li>Aligned with the main content of the article or definition</li>
              <li>Structured to address a single question per answer</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed">
              FAQs are designed to improve clarity for readers and ensure accurate interpretation by automated systems.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4">Content Review and Updates</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">Content is reviewed periodically to reflect changes in:</p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
              <li>Industry practices</li>
              <li>Regulatory developments</li>
              <li>Terminology usage</li>
              <li>Technical standards</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed">
              When significant updates are made, the "Last Updated" date on the page is adjusted to reflect the revision.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4">Scope and Limitations</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              DegenRoll.co focuses on educational explanations of crypto casinos and related technologies. It does not:
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
              <li>Provide personalized gambling advice</li>
              <li>Recommend specific actions to users</li>
              <li>Guarantee accuracy of third-party platforms</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed">
              Readers are encouraged to conduct independent research and consult professionals where appropriate.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4">Related Documents</h2>
            <ul className="list-disc list-inside text-muted-foreground space-y-2">
              <li><Link to="/editorial-policy" className="text-primary hover:underline">Editorial Policy</Link></li>
              <li><Link to="/sources-references" className="text-primary hover:underline">Sources & References</Link></li>
            </ul>
          </section>
        </article>
      </main>

      <Footer />
    </>
  );
};

export default Methodology;