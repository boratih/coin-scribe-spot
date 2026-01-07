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

interface GuideArticleLayoutProps {
  title: string;
  metaDescription: string;
  canonicalUrl: string;
  heroImage: string;
  heroImageAlt?: string;
  publishDate: string;
  lastUpdated?: string;
  readTime?: string;
  introduction?: React.ReactNode;
  children: React.ReactNode;
  faqs: FAQ[];
  summary?: string;
}

const GuideArticleLayout = ({
  title,
  metaDescription,
  canonicalUrl,
  heroImage,
  heroImageAlt,
  publishDate,
  lastUpdated,
  readTime,
  introduction,
  children,
  faqs,
  summary,
}: GuideArticleLayoutProps) => {
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description: metaDescription,
    author: { "@type": "Organization", name: "DegenRoll", url: "https://degenroll.co" },
    publisher: { "@type": "Organization", name: "DegenRoll", url: "https://degenroll.co" },
    datePublished: publishDate,
    dateModified: lastUpdated || publishDate,
    mainEntityOfPage: canonicalUrl,
    image: {
      "@type": "ImageObject",
      url: heroImage,
      caption: heroImageAlt || `Educational illustration for ${title}`,
    },
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

  // Speakable schema - tells AI which content is suitable for citation/voice
  const speakableJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    speakable: {
      "@type": "SpeakableSpecification",
      cssSelector: [".quick-answer", ".key-takeaways", "h1"],
    },
    url: canonicalUrl,
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
        <meta property="og:image" content={heroImage} />
        <meta property="og:image:alt" content={heroImageAlt || `Educational illustration for ${title}`} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={metaDescription} />
        <meta name="twitter:image" content={heroImage} />
        <meta name="twitter:image:alt" content={heroImageAlt || `Educational illustration for ${title}`} />
        <script type="application/ld+json">{JSON.stringify(articleJsonLd)}</script>
        <script type="application/ld+json">{JSON.stringify(faqJsonLd)}</script>
        <script type="application/ld+json">{JSON.stringify(speakableJsonLd)}</script>
      </Helmet>

      <Header />

      <main className="container max-w-4xl py-8 md:py-12">
        <nav className="mb-6">
          <Link to="/?category=gaming" className="text-primary hover:underline text-sm">
            ← Back to Crypto Casino Guides
          </Link>
        </nav>

        <article className="prose prose-lg prose-invert max-w-none">
          {/* Hero Section */}
          <header className="mb-10">
            <h1 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">{title}</h1>
            <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-muted-foreground text-sm mb-6">
              <span>Published: {publishDate}</span>
              {lastUpdated && (
                <>
                  <span>•</span>
                  <span>Last Updated: {lastUpdated}</span>
                </>
              )}
              {readTime && (
                <>
                  <span>•</span>
                  <span>{readTime}</span>
                </>
              )}
            </div>
            <div className="rounded-xl overflow-hidden mb-6">
              <img
                src={heroImage}
                alt={heroImageAlt || title}
                className="w-full h-64 md:h-80 object-cover"
              />
            </div>
            {introduction && (
              <div className="quick-answer bg-gradient-to-r from-primary/10 to-primary/5 p-6 rounded-xl border-l-4 border-primary">
                <p className="text-xs font-semibold uppercase tracking-wider text-primary mb-2">Quick Answer</p>
                {introduction}
              </div>
            )}
          </header>

          {/* Main Content */}
          <div className="space-y-10">
            {children}
          </div>

          {/* FAQ Section - Visible in HTML for AI, interactive for users */}
          <section className="mt-12 pt-8 border-t border-border/40">
            <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
            
            {/* Hidden div with full FAQ content for AI crawlers - visually hidden but in DOM */}
            <div className="sr-only" aria-hidden="false">
              {faqs.map((faq, index) => (
                <div key={`faq-hidden-${index}`}>
                  <h3>{faq.question}</h3>
                  <p>{faq.answer}</p>
                </div>
              ))}
            </div>
            
            {/* Interactive accordion for users */}
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

          {/* Summary Section - marked for AI citation via speakable schema */}
          {summary && (
            <section className="key-takeaways mt-10">
              <div className="bg-card p-6 rounded-xl border border-border/50">
                <h2 className="text-xl font-bold mb-3">Key Takeaways</h2>
                <p className="text-muted-foreground leading-relaxed">{summary}</p>
              </div>
            </section>
          )}
        </article>
      </main>

      <Footer />
    </>
  );
};

export default GuideArticleLayout;
