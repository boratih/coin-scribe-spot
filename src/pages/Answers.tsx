import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";

interface Answer {
  slug: string;
  title: string;
  excerpt: string;
}

const answers: Answer[] = [
  {
    slug: "what-is-a-crypto-casino",
    title: "What Is a Crypto Casino?",
    excerpt: "A crypto casino is an online gambling platform that allows players to deposit, wager, and withdraw using cryptocurrencies such as Bitcoin, Ethereum, or stablecoins.",
  },
  {
    slug: "how-do-crypto-casinos-work",
    title: "How Do Crypto Casinos Work?",
    excerpt: "Crypto casinos operate by allowing players to deposit cryptocurrency, place wagers on casino games, and withdraw funds through blockchain transactions.",
  },
  {
    slug: "are-crypto-casinos-legal",
    title: "Are Crypto Casinos Legal?",
    excerpt: "The legality of crypto casinos depends on local gambling and cryptocurrency laws. Some jurisdictions regulate them, while others leave them in a gray area.",
  },
  {
    slug: "are-crypto-casinos-safe",
    title: "Are Crypto Casinos Safe?",
    excerpt: "Crypto casinos can be safe, but security depends on the platform. Reputable casinos implement strong encryption, cold wallet storage, and provably fair systems.",
  },
  {
    slug: "what-is-a-no-kyc-crypto-casino",
    title: "What Is a No-KYC Crypto Casino?",
    excerpt: "A no-KYC crypto casino allows players to gamble using cryptocurrency without mandatory identity verification, offering increased privacy.",
  },
  {
    slug: "are-no-kyc-crypto-casinos-legal",
    title: "Are No-KYC Crypto Casinos Legal?",
    excerpt: "No-KYC crypto casinos often operate in a legal gray area. Their legality depends on local gambling regulations, AML laws, and cryptocurrency rules.",
  },
  {
    slug: "what-is-provably-fair-gambling",
    title: "What Is Provably Fair Gambling?",
    excerpt: "Provably fair gambling allows players to verify that game outcomes are fair using cryptographic techniques, increasing transparency.",
  },
  {
    slug: "how-do-crypto-casino-withdrawals-work",
    title: "How Do Crypto Casino Withdrawals Work?",
    excerpt: "Crypto casino withdrawals send cryptocurrency from the casino's wallet to the player's personal wallet via blockchain transactions.",
  },
  {
    slug: "what-cryptocurrencies-do-casinos-accept",
    title: "What Cryptocurrencies Do Casinos Accept?",
    excerpt: "Most crypto casinos accept Bitcoin and Ethereum. Many also support Litecoin, stablecoins like USDT or USDC, and various other altcoins.",
  },
  {
    slug: "what-are-the-risks-of-crypto-casinos",
    title: "What Are the Risks of Crypto Casinos?",
    excerpt: "Crypto casinos carry risks including cryptocurrency volatility, regulatory uncertainty, irreversible transactions, and limited consumer protection.",
  },
  {
    slug: "do-crypto-casinos-require-kyc",
    title: "Do Crypto Casinos Require KYC?",
    excerpt: "KYC requirements vary by platform. Some allow minimal verification for small transactions, while others enforce KYC for regulatory compliance.",
  },
  {
    slug: "how-to-verify-provably-fair-games",
    title: "How to Verify Provably Fair Games",
    excerpt: "Provably fair games allow players to verify outcomes using cryptographic hashes, seeds, and client inputs to confirm results independently.",
  },
  {
    slug: "provably-fair-vs-rng",
    title: "Provably Fair vs RNG",
    excerpt: "Provably fair systems allow cryptographic verification of outcomes, while RNG relies solely on the casino's software for random results.",
  },
  {
    slug: "crypto-casino-security-and-scam-detection",
    title: "Crypto Casino Security and Scam Detection",
    excerpt: "Security includes encryption, cold wallets, and 2FA. Scam detection involves checking licenses, reviews, and withdrawal policies.",
  },
  {
    slug: "crypto-casino-deposits-fees-speed-limits",
    title: "Crypto Casino Deposits: Fees, Speed & Limits",
    excerpt: "Deposit speed, fees, and limits vary by blockchain. Bitcoin, Ethereum, and stablecoins differ in transaction times and costs.",
  },
  {
    slug: "decentralized-vs-centralized-crypto-casinos",
    title: "Decentralized vs Centralized Crypto Casinos",
    excerpt: "Centralized casinos operate like traditional platforms. Decentralized casinos run on blockchain smart contracts with no central operator.",
  },
  {
    slug: "mobile-crypto-casino-experience",
    title: "Mobile Crypto Casino Experience",
    excerpt: "Mobile crypto casinos allow gameplay via smartphones with wallet integration for deposits and withdrawals on the go.",
  },
  {
    slug: "responsible-gambling-crypto-casinos",
    title: "Responsible Gambling in Crypto Casinos",
    excerpt: "Responsible gambling involves managing bankrolls, setting limits, and understanding cryptocurrency volatility during gameplay.",
  },
];

const Answers = () => {
  return (
    <>
      <Helmet>
        <title>Answers | DegenRoll</title>
        <meta
          name="description"
          content="Get clear, concise answers to common questions about crypto casinos, blockchain gambling, and cryptocurrency gaming."
        />
        <link rel="canonical" href="https://degenroll.co/answers" />
      </Helmet>

      <Header />

      <main className="container py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-4">Answers</h1>
          <p className="text-muted-foreground text-lg mb-10">
            Clear, concise answers to common questions about crypto casinos and blockchain gambling.
          </p>

          <div className="space-y-4">
            {answers.map((answer) => (
              <Link
                key={answer.slug}
                to={`/answers/${answer.slug}`}
                className="block p-6 bg-card border border-border/50 rounded-xl hover:border-primary/50 transition-colors"
              >
                <h2 className="text-xl font-semibold mb-2 text-foreground hover:text-primary transition-colors">
                  {answer.title}
                </h2>
                <p className="text-muted-foreground">{answer.excerpt}</p>
              </Link>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
};

export default Answers;
