import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FAQ {
  question: string;
  answer: string;
}

interface RelatedTopic {
  title: string;
  href: string;
}

interface AnswerLayoutProps {
  title: string;
  metaDescription: string;
  canonicalUrl: string;
  lastUpdated: string;
  quickAnswer: React.ReactNode;
  children: React.ReactNode;
  faqs: FAQ[];
  relatedTopics?: RelatedTopic[];
  summary: string;
}

const AnswerLayout = ({
  title,
  metaDescription,
  canonicalUrl,
  lastUpdated,
  quickAnswer,
  children,
  faqs,
  relatedTopics,
  summary,
}: AnswerLayoutProps) => {
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description: metaDescription,
    author: { "@type": "Organization", name: "DegenRoll" },
    publisher: { "@type": "Organization", name: "DegenRoll", url: "https://degenroll.co" },
    dateModified: lastUpdated,
    mainEntityOfPage: canonicalUrl,
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <>
      <Helmet>
        <title>{title} | DegenRoll</title>
        <meta name="description" content={metaDescription} />
        <link rel="canonical" href={canonicalUrl} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={metaDescription} />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:type" content="article" />
        <script type="application/ld+json">{JSON.stringify(articleJsonLd)}</script>
        <script type="application/ld+json">{JSON.stringify(faqJsonLd)}</script>
      </Helmet>

      <Header />

      <main className="container max-w-4xl py-8 md:py-12">
        <nav className="mb-6">
          <Link to="/answers" className="text-primary hover:underline text-sm">
            ← Back to Answers
          </Link>
        </nav>

        <article className="prose prose-lg prose-invert max-w-none">
          {/* Header */}
          <header className="mb-10">
            <h1 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">{title}</h1>
            <p className="text-muted-foreground text-sm mb-6">Last updated: {lastUpdated}</p>
            
            {/* Quick Answer */}
            <div className="bg-gradient-to-r from-primary/10 to-primary/5 p-6 rounded-xl border-l-4 border-primary">
              <p className="text-xs font-semibold uppercase tracking-wider text-primary mb-2">Quick Answer</p>
              <div className="text-muted-foreground leading-relaxed">{quickAnswer}</div>
            </div>
          </header>

          {/* Main Content */}
          <div className="space-y-8">
            {children}
          </div>

          {/* In Summary */}
          <section className="mt-10">
            <div className="bg-card p-6 rounded-xl border border-border/50">
              <h2 className="text-xl font-bold mb-3">In Summary</h2>
              <p className="text-muted-foreground leading-relaxed">{summary}</p>
            </div>
          </section>

          {/* FAQ Section */}
          <section className="mt-12 pt-8 border-t border-border/40">
            <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
            
            <div className="sr-only" aria-hidden="false">
              {faqs.map((faq, index) => (
                <div key={`faq-hidden-${index}`}>
                  <h3>{faq.question}</h3>
                  <p>{faq.answer}</p>
                </div>
              ))}
            </div>
            
            <Accordion type="single" collapsible className="w-full space-y-3">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`faq-${index}`}
                  className="bg-card/50 rounded-lg border border-border/50 px-4"
                >
                  <AccordionTrigger className="text-left hover:text-primary py-4 text-base font-medium">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-4">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </section>

          {/* Related Topics */}
          {relatedTopics && relatedTopics.length > 0 && (
            <section className="mt-10">
              <h2 className="text-xl font-bold mb-4">Related Topics</h2>
              <div className="flex flex-wrap gap-3">
                {relatedTopics.map((topic, index) => (
                  <Link
                    key={index}
                    to={topic.href}
                    className="px-4 py-2 bg-card hover:bg-card/80 border border-border/50 rounded-lg text-sm text-foreground hover:text-primary transition-colors"
                  >
                    {topic.title}
                  </Link>
                ))}
              </div>
            </section>
          )}

          {/* Trust Line */}
          <footer className="mt-12 pt-6 border-t border-border/40">
            <p className="text-sm text-muted-foreground text-center">
              Content on DegenRoll is created following our{" "}
              <Link to="/methodology" className="text-primary hover:underline">Methodology</Link>,{" "}
              <Link to="/editorial-policy" className="text-primary hover:underline">Editorial Policy</Link>, and{" "}
              <Link to="/sources-and-references" className="text-primary hover:underline">Source Framework</Link>.
            </p>
          </footer>
        </article>
      </main>

      <Footer />
    </>
  );
};

export default AnswerLayout;
