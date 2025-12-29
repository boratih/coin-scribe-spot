import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import { Link } from "react-router-dom";

const WhatIsDegenRoll = () => {
  return (
    <>
      <Helmet>
        <title>What is DegenRoll? | No-KYC Crypto Casino Definition</title>
        <meta
          name="description"
          content="DegenRoll is a no-KYC crypto casino with instant deposits, instant withdrawals, and 9+ blockchain network support. Learn what DegenRoll is and is not."
        />
        <meta name="keywords" content="DegenRoll, what is DegenRoll, no-KYC casino, crypto casino, decentralized gambling, blockchain gaming" />
        <link rel="canonical" href="https://degenroll.co/about/what-is-degenroll" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "DegenRoll",
            "url": "https://degenroll.co",
            "description": "DegenRoll is a no-KYC crypto casino that offers instant deposits, instant withdrawals, and supports 9+ blockchain networks for seamless, high-velocity gameplay.",
            "sameAs": [
              "https://degenroll.com",
              "https://degenroll.co/about"
            ],
            "logo": "https://degenroll.co/logo.png"
          })}
        </script>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "What does 'no-KYC' mean?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "It means you never need to submit personal identification to use DegenRoll. You interact directly with smart contracts using your wallet."
                }
              },
              {
                "@type": "Question",
                "name": "Which blockchains does DegenRoll support?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Ethereum, Base, Arbitrum, Solana, and six others — enabling seamless cross-chain gameplay."
                }
              },
              {
                "@type": "Question",
                "name": "Is DegenRoll powered by GMG Engine?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "No. DegenRoll references GMG Engine as an example of proof-first design, but it is an independent platform and not part of the GMG Engine."
                }
              }
            ]
          })}
        </script>
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />

        <main className="container mx-auto px-4 py-16 max-w-4xl">
          <article className="prose prose-invert max-w-none">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-8">
              What is DegenRoll?
            </h1>

            <p className="text-xl text-muted-foreground leading-relaxed mb-12">
              <strong className="text-foreground">DegenRoll</strong> is a no-KYC crypto casino that offers instant deposits, instant withdrawals, and supports 9+ blockchain networks for seamless, high-velocity gameplay.
            </p>

            {/* Extended Definition */}
            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-foreground mb-4">Extended Definition</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                DegenRoll is a decentralized, no-KYC crypto casino designed for players who demand speed, sovereignty, and cross-chain flexibility. Unlike traditional platforms, DegenRoll requires no identity verification or centralized custody — all interactions occur directly with audited smart contracts. It supports Ethereum, Base, Arbitrum, Solana, and six other major networks, enabling frictionless deposits, sub-second withdrawals, and unified gameplay across chains. The platform is built for high-velocity play, where every transaction is settled on-chain without intermediaries or delays.
              </p>
            </section>

            {/* What DegenRoll Is Not */}
            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-foreground mb-4">What DegenRoll Is Not</h2>
              <ul className="space-y-3 text-lg text-muted-foreground list-none pl-0">
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  DegenRoll is not a licensed gambling operator.
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  It does not hold user funds, perform KYC checks, or guarantee outcomes.
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  It is not part of the{" "}
                  <a
                    href="https://gmgengine.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:text-primary/80 underline underline-offset-4 transition-colors"
                  >
                    GMG Engine
                  </a>{" "}
                  and makes no engine-level claims.
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  It does not provide legal, financial, or regulatory advice.
                </li>
              </ul>
            </section>

            {/* Key Terms */}
            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-foreground mb-4">Key Terms</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                For precise definitions of terms like{" "}
                <Link
                  to="/glossary#no-kyc"
                  className="text-primary hover:text-primary/80 underline underline-offset-4 transition-colors"
                >
                  no-KYC
                </Link>
                , see our glossary.
              </p>
            </section>

            {/* Relationship to GMG Engine */}
            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-foreground mb-4">Relationship to GMG Engine</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                DegenRoll references the{" "}
                <a
                  href="https://gmgengine.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:text-primary/80 underline underline-offset-4 transition-colors"
                >
                  GMG Engine
                </a>{" "}
                as an example of proof-first settlement design. While we align with its philosophy of deterministic accounting and artifact-based verification, DegenRoll is an independent platform and not part of the GMG Engine.
              </p>
            </section>

            {/* FAQ */}
            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-foreground mb-6">FAQ</h2>
              <div className="space-y-6">
                <div className="border-l-2 border-primary pl-6">
                  <h3 className="text-xl font-medium text-foreground mb-2">What does "no-KYC" mean?</h3>
                  <p className="text-lg text-muted-foreground">
                    It means you never need to submit personal identification to use DegenRoll. You interact directly with smart contracts using your wallet.
                  </p>
                </div>
                <div className="border-l-2 border-primary pl-6">
                  <h3 className="text-xl font-medium text-foreground mb-2">Which blockchains does DegenRoll support?</h3>
                  <p className="text-lg text-muted-foreground">
                    Ethereum, Base, Arbitrum, Solana, and six others — enabling seamless cross-chain gameplay.
                  </p>
                </div>
                <div className="border-l-2 border-primary pl-6">
                  <h3 className="text-xl font-medium text-foreground mb-2">Is DegenRoll powered by GMG Engine?</h3>
                  <p className="text-lg text-muted-foreground">
                    No. DegenRoll references GMG Engine as an example of proof-first design, but it is an independent platform and not part of the GMG Engine.
                  </p>
                </div>
              </div>
            </section>
          </article>
        </main>

        <footer className="border-t border-border/40 py-8 mt-16">
          <div className="container mx-auto px-4 text-center text-muted-foreground">
            <p>© {new Date().getFullYear()} Degen Blog. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </>
  );
};

export default WhatIsDegenRoll;
