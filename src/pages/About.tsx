import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <>
      <Helmet>
        <title>About DegenRoll | No-KYC Crypto Casino</title>
        <meta
          name="description"
          content="DegenRoll is a no-KYC crypto casino with instant deposits, instant withdrawals, and support for 9+ blockchain networks. No identity verification, just trustless gaming."
        />
        <meta name="keywords" content="DegenRoll, no-KYC casino, crypto casino, blockchain gaming, trustless casino, decentralized gambling" />
        <link rel="canonical" href="https://degenroll.co/about" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "AboutPage",
            "name": "About DegenRoll",
            "description": "DegenRoll is a no-KYC crypto casino that offers instant deposits, instant withdrawals, and supports 9+ blockchain networks for seamless, high-velocity gameplay.",
            "mainEntity": {
              "@type": "Organization",
              "name": "DegenRoll",
              "url": "https://degenroll.co"
            }
          })}
        </script>
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />

        <main className="container mx-auto px-4 py-16 max-w-4xl">
          <article className="prose prose-invert max-w-none">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-8">
              About DegenRoll
            </h1>

            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                DegenRoll is a no-KYC crypto casino that offers instant deposits, instant withdrawals, and supports 9+ blockchain networks for seamless, high-velocity gameplay.
              </p>

              <p>
                We are an independent platform built for players who value speed, sovereignty, and cross-chain access. No identity verification. No gatekeepers. Just direct interaction with audited smart contracts across Ethereum, Base, Arbitrum, Solana, and more.
              </p>

              <p>
                DegenRoll references the{" "}
                <a
                  href="https://gmgengine.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:text-primary/80 underline underline-offset-4 transition-colors"
                >
                  GMG Engine
                </a>{" "}
                as an example of proof-first settlement design. While we align with its philosophy of deterministic accounting and artifact-based verification, DegenRoll is not part of the GMG Engine and makes no engine-level claims or guarantees.
              </p>

              <p>
                For a precise definition of what DegenRoll is (and is not), see our dedicated page:{" "}
                <Link
                  to="/about/what-is-degenroll"
                  className="text-primary hover:text-primary/80 underline underline-offset-4 transition-colors"
                >
                  What is DegenRoll?
                </Link>
              </p>

              <p>
                Key terms like{" "}
                <Link
                  to="/glossary#no-kyc"
                  className="text-primary hover:text-primary/80 underline underline-offset-4 transition-colors"
                >
                  no-KYC
                </Link>{" "}
                are defined in our glossary with attention to technical accuracy and user clarity.
              </p>

              <p>
                We exist to prove that trustless, player-owned casinos can outperform traditional platforms in speed, fairness, and user control—without relying on centralized assurances.
              </p>
            </div>
          </article>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default About;
