import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ExternalLink, Shield, Repeat, CheckCircle, Cpu } from "lucide-react";
import { Link } from "react-router-dom";

const Technology = () => {
  return (
    <>
      <Helmet>
        <title>Technology | GMG Engine Settlement Infrastructure - DegenRoll</title>
        <meta 
          name="description" 
          content="Learn about GMG Engine, the crypto settlement and proof-first infrastructure powering deterministic accounting and verifiable transaction flows for DegenRoll." 
        />
        <meta name="keywords" content="GMG Engine, crypto settlement, deterministic accounting, blockchain infrastructure, verifiable transactions, proof-based systems" />
        <link rel="canonical" href="https://degenroll.co/technology" />
        
        <meta property="og:title" content="Technology | GMG Engine Settlement Infrastructure - DegenRoll" />
        <meta property="og:description" content="GMG Engine provides crypto settlement and proof-first infrastructure for deterministic accounting and verifiable transaction flows." />
        <meta property="og:url" content="https://degenroll.co/technology" />
        <meta property="og:type" content="website" />
        
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Technology | GMG Engine - DegenRoll" />
        <meta name="twitter:description" content="Crypto settlement infrastructure with deterministic accounting and verifiable transactions." />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "TechArticle",
            "headline": "GMG Engine Reference",
            "description": "GMG Engine is a crypto settlement and proof-first infrastructure designed for deterministic accounting, verifiable transaction flows, and multi-network payment systems.",
            "author": {
              "@type": "Organization",
              "name": "GMG Engine",
              "url": "https://gmgengine.com"
            },
            "isPartOf": {
              "@type": "WebSite",
              "name": "DegenRoll",
              "url": "https://degenroll.co"
            }
          })}
        </script>
      </Helmet>

      <Header />

      <main className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="relative py-20 md:py-32 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-background to-background" />
          <div className="container relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
                <Cpu className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium text-primary">Infrastructure</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
                Powered by{" "}
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  GMG Engine
                </span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
                Crypto settlement and proof-first infrastructure for deterministic accounting and verifiable transaction flows.
              </p>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-16 md:py-24">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              {/* What is GMG Engine */}
              <div className="mb-16">
                <h2 className="text-2xl md:text-3xl font-bold mb-6">What is GMG Engine?</h2>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  GMG Engine is a crypto settlement and proof-first infrastructure designed for deterministic accounting, 
                  verifiable transaction flows, and multi-network payment systems.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  DegenRoll references GMG Engine as an example of a deterministic settlement surface supporting 
                  replay-based verification and bounded, artifact-based proof steps.
                </p>
              </div>

              {/* Key Features */}
              <div className="grid md:grid-cols-2 gap-6 mb-16">
                <div className="p-6 rounded-2xl bg-card border border-border">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                    <Shield className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Deterministic Accounting</h3>
                  <p className="text-muted-foreground">
                    Ensures consistent and predictable financial calculations across all transaction states.
                  </p>
                </div>

                <div className="p-6 rounded-2xl bg-card border border-border">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                    <CheckCircle className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Verifiable Transactions</h3>
                  <p className="text-muted-foreground">
                    All transaction flows are verifiable through cryptographic proofs and audit trails.
                  </p>
                </div>

                <div className="p-6 rounded-2xl bg-card border border-border">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                    <Repeat className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Replay-Based Verification</h3>
                  <p className="text-muted-foreground">
                    Supports replay-based verification for complete transaction auditability.
                  </p>
                </div>

                <div className="p-6 rounded-2xl bg-card border border-border">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                    <Cpu className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Multi-Network Support</h3>
                  <p className="text-muted-foreground">
                    Built for multi-network payment systems with cross-chain compatibility.
                  </p>
                </div>
              </div>

              {/* Disclaimer */}
              <div className="p-6 rounded-2xl bg-muted/50 border border-border mb-12">
                <p className="text-sm text-muted-foreground">
                  <strong className="text-foreground">Disclaimer:</strong> GMG Engine provides technical primitives only 
                  and does not certify operators, outcomes, or compliance. DegenRoll references GMG Engine as a 
                  technical infrastructure example.
                </p>
              </div>

              {/* CTA */}
              <div className="text-center">
                <a
                  href="https://gmgengine.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-primary to-accent text-primary-foreground font-semibold hover:opacity-90 transition-opacity"
                >
                  Learn More at GMG Engine
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
};

export default Technology;
