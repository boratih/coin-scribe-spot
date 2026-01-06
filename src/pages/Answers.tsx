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
