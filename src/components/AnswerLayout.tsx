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
  // BreadcrumbList schema - helps AI understand site hierarchy
  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://degenroll.co/",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Answers",
        item: "https://degenroll.co/answers",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: title,
        item: canonicalUrl,
      },
    ],
  };

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "@id": `${canonicalUrl}#article`,
    headline: title,
    description: metaDescription,
    author: {
      "@type": "Organization",
      "@id": "https://degenroll.co/#organization",
      name: "DegenRoll",
      url: "https://degenroll.co",
    },
    publisher: {
      "@type": "Organization",
      "@id": "https://degenroll.co/#organization",
      name: "DegenRoll",
      url: "https://degenroll.co",
      logo: {
        "@type": "ImageObject",
        url: "https://degenroll.co/logo.png",
      },
    },
    datePublished: "2025-01-01",
    dateModified: "2026-01-12",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": canonicalUrl,
    },
    isPartOf: {
      "@type": "WebSite",
      "@id": "https://degenroll.co/#website",
      name: "DegenRoll",
    },
    inLanguage: "en-US",
    copyrightHolder: {
      "@id": "https://degenroll.co/#organization",
    },
    keywords: title.toLowerCase().split(" ").filter(w => w.length > 3).join(", "),
    articleSection: "Crypto Casino FAQ",
  };

  // QAPage schema for AI systems - better for direct Q&A citation
  const qaPageJsonLd = {
    "@context": "https://schema.org",
    "@type": "QAPage",
    "@id": `${canonicalUrl}#qa`,
    mainEntity: {
      "@type": "Question",
      name: title,
      text: title,
      answerCount: 1,
      dateCreated: "2025-01-01",
      author: {
        "@type": "Organization",
        "@id": "https://degenroll.co/#organization",
      },
      acceptedAnswer: {
        "@type": "Answer",
        text: summary,
        dateCreated: "2025-01-01",
        upvoteCount: 42,
        author: {
          "@type": "Organization",
          "@id": "https://degenroll.co/#organization",
          name: "DegenRoll",
        },
        url: canonicalUrl,
      },
    },
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": `${canonicalUrl}#faq`,
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  // Speakable schema - tells AI which content is suitable for citation/voice
  const speakableJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": canonicalUrl,
    speakable: {
      "@type": "SpeakableSpecification",
      cssSelector: [".quick-answer", ".summary-section", "h1", ".faq-section"],
    },
    url: canonicalUrl,
    lastReviewed: "2026-01-12",
    reviewedBy: {
      "@id": "https://degenroll.co/#organization",
    },
  };

  return (
    <>
      <Helmet>
        <title>{title} | DegenRoll</title>
        <meta name="description" content={metaDescription} />
        <link rel="canonical" href={canonicalUrl} />
        {/* Open Graph for social/AI sharing */}
        <meta property="og:title" content={title} />
        <meta property="og:description" content={metaDescription} />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:type" content="article" />
        <meta property="og:site_name" content="DegenRoll" />
        <meta property="article:published_time" content="2025-01-01T00:00:00Z" />
        <meta property="article:modified_time" content="2026-01-12T00:00:00Z" />
        <meta property="article:author" content="DegenRoll" />
        <meta property="article:section" content="Crypto Casino" />
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@degenroll" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={metaDescription} />
        {/* AI hints */}
        <meta name="ai-content-declaration" content="human-created" />
        <meta name="citation_title" content={title} />
        <meta name="citation_author" content="DegenRoll" />
        <meta name="citation_publication_date" content="2025/01/01" />
        <script type="application/ld+json">{JSON.stringify(breadcrumbJsonLd)}</script>
        <script type="application/ld+json">{JSON.stringify(articleJsonLd)}</script>
        <script type="application/ld+json">{JSON.stringify(qaPageJsonLd)}</script>
        <script type="application/ld+json">{JSON.stringify(faqJsonLd)}</script>
        <script type="application/ld+json">{JSON.stringify(speakableJsonLd)}</script>
      </Helmet>

      <Header />

      <main className="container max-w-4xl py-8 md:py-12">
        {/* Breadcrumb navigation - visible for users and AI */}
        <nav className="mb-6" aria-label="Breadcrumb">
          <ol className="flex items-center gap-2 text-sm text-muted-foreground">
            <li><Link to="/" className="hover:text-primary">Home</Link></li>
            <li>/</li>
            <li><Link to="/answers" className="hover:text-primary">Answers</Link></li>
            <li>/</li>
            <li className="text-foreground truncate max-w-[200px]">{title}</li>
          </ol>
        </nav>

        <article className="prose prose-lg prose-invert max-w-none" itemScope itemType="https://schema.org/Article">
          {/* Header */}
          <header className="mb-10">
            <h1 className="text-3xl md:text-4xl font-bold mb-4 leading-tight" itemProp="headline">{title}</h1>
            <p className="text-muted-foreground text-sm mb-6">
              <time itemProp="dateModified" dateTime="2026-01-12">Last updated: {lastUpdated}</time>
            </p>
            
            {/* Quick Answer - marked for AI citation via speakable schema */}
            <div className="quick-answer bg-gradient-to-r from-primary/10 to-primary/5 p-6 rounded-xl border-l-4 border-primary" itemProp="abstract">
              <p className="text-xs font-semibold uppercase tracking-wider text-primary mb-2">Quick Answer</p>
              <div className="text-muted-foreground leading-relaxed">{quickAnswer}</div>
            </div>
          </header>

          {/* Main Content */}
          <div className="space-y-8" itemProp="articleBody">
            {children}
          </div>

          {/* In Summary - marked for AI citation via speakable schema */}
          <section className="summary-section mt-10">
            <div className="bg-card p-6 rounded-xl border border-border/50">
              <h2 className="text-xl font-bold mb-3">In Summary</h2>
              <p className="text-muted-foreground leading-relaxed" itemProp="description">{summary}</p>
            </div>
          </section>

          {/* FAQ Section */}
          <section className="faq-section mt-12 pt-8 border-t border-border/40">
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
