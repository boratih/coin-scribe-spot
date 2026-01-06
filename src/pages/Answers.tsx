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
