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

interface Reference {
  num: number;
  author?: string;
  year?: string;
  title: string;
  siteName: string;
  url: string;
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
  references?: Reference[];
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
  references,
}: GuideArticleLayoutProps) => {
  // BreadcrumbList schema for site hierarchy
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
        name: "Guides",
        item: "https://degenroll.co/#latest-blog",
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
    datePublished: publishDate,
    dateModified: lastUpdated || publishDate,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": canonicalUrl,
    },
    image: {
      "@type": "ImageObject",
      url: heroImage,
      caption: heroImageAlt || `Educational illustration for ${title}`,
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
    keywords: title.toLowerCase().split(" ").filter((w: string) => w.length > 3).join(", "),
    articleSection: "Crypto Casino Guides",
  };

  // HowTo schema for step-by-step guides
  const howToJsonLd = title.toLowerCase().includes("how") ? {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "@id": `${canonicalUrl}#howto`,
    name: title,
    description: metaDescription,
    image: heroImage,
    totalTime: `PT${readTime?.replace(" min read", "") || "5"}M`,
    step: faqs.slice(0, 5).map((faq, index) => ({
      "@type": "HowToStep",
      position: index + 1,
      name: faq.question,
      text: faq.answer,
    })),
  } : null;

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
      cssSelector: [".quick-answer", ".key-takeaways", "h1", ".introduction"],
    },
    url: canonicalUrl,
    lastReviewed: lastUpdated || publishDate,
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
        <meta property="og:image" content={heroImage} />
        <meta property="og:image:alt" content={heroImageAlt || `Educational illustration for ${title}`} />
        <meta property="og:site_name" content="DegenRoll" />
        <meta property="article:published_time" content={`${publishDate}T00:00:00Z`} />
        <meta property="article:modified_time" content={`${lastUpdated || publishDate}T00:00:00Z`} />
        <meta property="article:author" content="DegenRoll" />
        <meta property="article:section" content="Crypto Casino Guides" />
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@degenroll" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={metaDescription} />
        <meta name="twitter:image" content={heroImage} />
        <meta name="twitter:image:alt" content={heroImageAlt || `Educational illustration for ${title}`} />
        {/* AI hints */}
        <meta name="ai-content-declaration" content="human-created" />
        <meta name="citation_title" content={title} />
        <meta name="citation_author" content="DegenRoll" />
        <meta name="citation_publication_date" content={publishDate.replace(/-/g, "/")} />
        <script type="application/ld+json">{JSON.stringify(breadcrumbJsonLd)}</script>
        <script type="application/ld+json">{JSON.stringify(articleJsonLd)}</script>
        <script type="application/ld+json">{JSON.stringify(faqJsonLd)}</script>
        <script type="application/ld+json">{JSON.stringify(speakableJsonLd)}</script>
        {howToJsonLd && <script type="application/ld+json">{JSON.stringify(howToJsonLd)}</script>}
      </Helmet>

      <Header />

      <main className="container max-w-4xl py-8 md:py-12">
        {/* Breadcrumb navigation - visible for users and AI */}
        <nav className="mb-6" aria-label="Breadcrumb">
          <ol className="flex items-center gap-2 text-sm text-muted-foreground">
            <li><Link to="/" className="hover:text-primary">Home</Link></li>
            <li>/</li>
            <li><Link to="/#latest-blog" className="hover:text-primary">Guides</Link></li>
            <li>/</li>
            <li className="text-foreground truncate max-w-[200px]">{title}</li>
          </ol>
        </nav>

        <article className="prose prose-lg prose-invert max-w-none" itemScope itemType="https://schema.org/Article">
          {/* Hero Section */}
          <header className="mb-10">
            <h1 className="text-3xl md:text-4xl font-bold mb-4 leading-tight" itemProp="headline">{title}</h1>
            <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-muted-foreground text-sm mb-6">
              <span>Published: <time itemProp="datePublished" dateTime={publishDate}>{publishDate}</time></span>
              {lastUpdated && (
                <>
                  <span>•</span>
                  <span>Last Updated: <time itemProp="dateModified" dateTime={lastUpdated}>{lastUpdated}</time></span>
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
                className="w-full h-auto object-contain"
                itemProp="image"
              />
            </div>
            {introduction && (
              <div className="introduction quick-answer bg-gradient-to-r from-primary/10 to-primary/5 p-6 rounded-xl border-l-4 border-primary" itemProp="abstract">
                <p className="text-xs font-semibold uppercase tracking-wider text-primary mb-2">Quick Answer</p>
                {introduction}
              </div>
            )}
          </header>

          {/* Main Content (excluding sources/references) */}
          <div className="space-y-10" itemProp="articleBody">
            {children}
          </div>

          {/* FAQ Section - Visible in HTML for AI, interactive for users */}
          <section className="faq-section mt-12 pt-8 border-t border-border/40">
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
                <p className="text-muted-foreground leading-relaxed" itemProp="description">{summary}</p>
              </div>
            </section>
          )}

          {/* Sources & References Section */}
          {references && references.length > 0 && (
            <section id="references" className="sources-references mt-12 pt-8 border-t border-border/40">
              <h2 className="text-2xl font-bold mb-4">Sources & References</h2>
              <p className="text-muted-foreground mb-6 text-sm">
                This article was researched using authoritative sources from regulatory bodies, academic institutions, and industry publications.
              </p>
              <ol className="space-y-4 text-sm list-none pl-0">
                {references.map((ref) => (
                  <li key={ref.num} id={`ref-${ref.num}`} className="pl-8 -indent-8">
                    <span className="text-muted-foreground">[{ref.num}] </span>
                    {ref.author && <span>{ref.author}. </span>}
                    {ref.year && <span>({ref.year}). </span>}
                    <span className="italic">{ref.title}</span>
                    <span>. {ref.siteName}. </span>
                    <a 
                      href={ref.url} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-primary hover:underline break-all"
                    >
                      {ref.url}
                    </a>
                  </li>
                ))}
              </ol>
              <div className="mt-6 p-4 bg-card/30 rounded-lg border border-border/30">
                <p className="text-xs text-muted-foreground">
                  <strong>Last Verified:</strong> January 2026. Links may change over time. DegenRoll is not responsible for external content. See our{" "}
                  <Link to="/sources-and-references" className="text-primary hover:underline">Source Framework</Link> for citation methodology.
                </p>
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

export default GuideArticleLayout;
