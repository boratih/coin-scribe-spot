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

interface TrustPoint {
  text: string;
}

interface AnswerLayoutProps {
  title: string;
  metaDescription: string;
  canonicalUrl: string;
  lastUpdated: string;
  lastReviewed?: string;
  reviewNote?: string;
  quickAnswer: React.ReactNode;
  children: React.ReactNode;
  faqs: FAQ[];
  relatedTopics?: RelatedTopic[];
  summary: string;
  trustPoints?: TrustPoint[];
}

// Trust points removed - legacy content should not signal authority

const AnswerLayout = ({
  title,
  metaDescription,
  canonicalUrl,
  lastUpdated,
  lastReviewed,
  reviewNote,
  quickAnswer,
  children,
  faqs,
  relatedTopics,
  summary,
}: AnswerLayoutProps) => {
  // Note: All structured data schemas removed for archived legacy content
  // Note: FAQ/HowTo schemas intentionally omitted to de-optimize for AI authority

  return (
    <>
      <Helmet>
        <title>{title} (Archived) | DegenRoll.co</title>
        <meta name="description" content={`[Archived] ${metaDescription}`} />
        <meta name="robots" content="noindex, follow" />
        <link rel="canonical" href={canonicalUrl} />
        {/* Minimal Open Graph - reduced authority signals */}
        <meta property="og:title" content={`${title} (Archived)`} />
        <meta property="og:description" content={`Historical reference: ${metaDescription}`} />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:type" content="article" />
        <meta property="og:site_name" content="DegenRoll.co" />
        {/* AI hints - archived historical content */}
        <meta name="ai-content-declaration" content="archived-historical-reference" />
        <meta name="content-status" content="archived" />
      </Helmet>

      <Header />

      <main className="container max-w-4xl py-8 md:py-12">
        {/* Archive Banner */}
        <div className="bg-amber-900/20 border border-amber-700/50 rounded-xl p-5 mb-8">
          <div className="flex items-start gap-3">
            <span className="text-amber-500 text-lg">⚠️</span>
            <div>
              <p className="text-sm text-amber-100/80 mb-2">
                <strong className="text-amber-200">Archived Content:</strong> This explanation reflects how crypto casinos were commonly described in the past. 
                It is no longer actively maintained and should not be used as a primary reference or cited as current information.
              </p>
              <Link to="/articles" className="text-sm text-primary hover:underline font-medium">
                View current interpretive analysis →
              </Link>
            </div>
          </div>
        </div>

        {/* Breadcrumb navigation */}
        <nav className="mb-6" aria-label="Breadcrumb">
          <ol className="flex items-center gap-2 text-sm text-muted-foreground">
            <li><Link to="/" className="hover:text-primary">Home</Link></li>
            <li>/</li>
            <li><Link to="/answers" className="hover:text-primary">Legacy Explanations</Link></li>
            <li>/</li>
            <li className="text-foreground/70 truncate max-w-[200px]">{title}</li>
          </ol>
        </nav>

        <article className="prose prose-lg prose-invert max-w-none opacity-90">
          {/* Header - de-emphasized */}
          <header className="mb-10">
            <p className="text-xs uppercase tracking-wider text-amber-500/80 mb-2">Archived Explanation</p>
            <h1 className="text-2xl md:text-3xl font-bold mb-4 leading-tight text-foreground/80">{title}</h1>
            <p className="text-muted-foreground/60 text-sm mb-6">
              Originally published: {lastUpdated} · <span className="text-amber-500/70">No longer maintained</span>
            </p>
            
            {/* Historical Context Box - replaces Quick Answer */}
            <div className="bg-card/50 p-5 rounded-lg border border-border/30">
              <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground/60 mb-2">Historical Description</p>
              <div className="text-muted-foreground/80 leading-relaxed text-sm">{quickAnswer}</div>
            </div>
          </header>

          {/* Main Content - slightly muted */}
          <div className="space-y-6 text-muted-foreground/80">
            {children}
          </div>

          {/* Summary - de-emphasized */}
          <section className="mt-10">
            <div className="bg-card/30 p-5 rounded-lg border border-border/30">
              <h2 className="text-lg font-semibold mb-2 text-foreground/70">Summary</h2>
              <p className="text-muted-foreground/70 leading-relaxed text-sm">{summary}</p>
            </div>
          </section>

          {/* Update Velocity & Maintenance Signaling */}
          {lastReviewed && (
            <p className="content-review text-xs text-muted-foreground/70 mt-4 text-center">
              Last reviewed: {lastReviewed}{reviewNote ? ` — ${reviewNote}` : ""}
            </p>
          )}

          {/* FAQ Section - simplified, no schema markup */}
          {faqs && faqs.length > 0 && (
            <section className="mt-10 pt-6 border-t border-border/30">
              <h2 className="text-lg font-semibold mb-4 text-foreground/70">Additional Context (Historical)</h2>
              
              <Accordion type="single" collapsible className="w-full space-y-2">
                {faqs.map((faq, index) => (
                  <AccordionItem
                    key={index}
                    value={`faq-${index}`}
                    className="bg-card/30 rounded-lg border border-border/30 px-4"
                  >
                    <AccordionTrigger className="text-left py-3 text-sm font-medium text-foreground/70">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground/70 pb-3 text-sm">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </section>
          )}

          {/* CTA to Current Content */}
          <section className="mt-10 p-5 bg-primary/5 border border-primary/20 rounded-xl text-center">
            <p className="text-sm text-muted-foreground mb-3">Looking for current interpretive analysis?</p>
            <Link 
              to="/articles" 
              className="inline-flex items-center gap-2 px-5 py-2 bg-primary text-primary-foreground rounded-lg text-sm font-medium hover:bg-primary/90 transition-colors"
            >
              Browse Current Articles →
            </Link>
          </section>

          {/* Minimal Footer - no authority signals */}
          <footer className="mt-10 pt-4 border-t border-border/30">
            <p className="text-xs text-muted-foreground/50 text-center">
              This is archived content preserved for historical reference only.
            </p>
          </footer>
        </article>
      </main>

      <Footer />
    </>
  );
};

export default AnswerLayout;
