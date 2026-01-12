import GuideArticleLayout from "@/components/GuideArticleLayout";
import transparencyThumb from "@/assets/thumbnails/transparency-thumb.jpg";

// Citation component for inline references
const Cite = ({ num }: { num: number }) => (
  <sup>
    <a 
      href={`#ref-${num}`} 
      className="text-primary hover:underline text-xs ml-0.5"
      title={`See reference [${num}]`}
    >
      [{num}]
    </a>
  </sup>
);

const TransparencyBlockchainGambling = () => {
  const faqs = [
    {
      question: "How does blockchain make gambling more transparent?",
      answer: "Blockchain records all transactions and game outcomes on a public, immutable ledger. Anyone can verify deposits, withdrawals, bet settlements, and smart contract code using blockchain explorers."
    },
    {
      question: "Can I see a crypto casino's bankroll on the blockchain?",
      answer: "For decentralized casinos using smart contracts, yes—the contract balance is publicly visible. Centralized casinos may not have transparent on-chain bankrolls."
    },
    {
      question: "What is a blockchain explorer?",
      answer: "A blockchain explorer is a tool that lets anyone view transactions, addresses, and smart contracts on a blockchain. Examples include Etherscan (Ethereum) and Solscan (Solana)."
    },
    {
      question: "Are all crypto casino transactions public?",
      answer: "Transactions on public blockchains are visible to anyone. However, wallet addresses are pseudonymous—your identity isn't attached unless you've revealed it."
    },
    {
      question: "Can smart contract casinos hide game logic?",
      answer: "Verified smart contracts have public source code that anyone can audit. Unverified contracts may hide their code, which should be a red flag."
    },
    {
      question: "How do I verify a crypto casino's transparency?",
      answer: "Check if their smart contracts are verified and audited, look up transactions on blockchain explorers, and verify provably fair seeds using their provided tools."
    }
  ];

  const references = [
    {
      num: 1,
      title: "Blockchain",
      siteName: "Wikipedia",
      url: "https://en.wikipedia.org/wiki/Blockchain"
    },
    {
      num: 2,
      title: "Smart Contract",
      siteName: "Wikipedia",
      url: "https://en.wikipedia.org/wiki/Smart_contract"
    }
  ];

  return (
    <GuideArticleLayout
      title="How Transparency Works in Blockchain Gambling"
      metaDescription="Blockchain gambling enables unprecedented transparency through public ledgers. Learn how players can verify transactions and outcomes."
      canonicalUrl="https://degenroll.co/transparency-blockchain-gambling"
      heroImage={transparencyThumb}
      heroImageAlt="Diagram showing transparency mechanisms in blockchain gambling including public transaction records and verifiable outcomes"
      publishDate="2025-01-02"
      faqs={faqs}
      references={references}
    >
      {/* Definition */}
      <section className="mb-12">
        <p className="text-lg bg-muted/30 p-6 rounded-lg border-l-4 border-primary">
          <strong>Blockchain gambling transparency</strong> refers to the public visibility of all transactions, game outcomes, and smart contract code on decentralized ledgers<Cite num={1} />. Players can independently verify deposits, withdrawals, bet settlements, and game logic through blockchain explorers and contract audits.
        </p>
      </section>

      {/* Overview */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Understanding Blockchain Transparency</h2>
        <p className="mb-4">
          Traditional online casinos operate as black boxes—players trust the operator's claims about fairness, payouts, and fund management without any way to verify them independently.
        </p>
        <p>
          Blockchain technology changes this by recording all transactions on a <strong>public, immutable ledger</strong><Cite num={1} />. Every deposit, withdrawal, and bet settlement is visible to anyone. Smart contract casinos go further by making their entire game logic publicly auditable<Cite num={2} />.
        </p>
      </section>

      {/* Transparency Features */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Key Transparency Features</h2>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-card p-5 rounded-lg border border-border">
            <h3 className="font-semibold text-primary mb-2">Public Transactions</h3>
            <p className="text-sm text-muted-foreground">All deposits and withdrawals visible on blockchain explorers. Track your transactions and casino activity.</p>
          </div>
          <div className="bg-card p-5 rounded-lg border border-border">
            <h3 className="font-semibold text-primary mb-2">Auditable Contracts</h3>
            <p className="text-sm text-muted-foreground">Smart contract source code publicly verifiable. Anyone can audit game logic and payout rules.</p>
          </div>
          <div className="bg-card p-5 rounded-lg border border-border">
            <h3 className="font-semibold text-primary mb-2">On-Chain Outcomes</h3>
            <p className="text-sm text-muted-foreground">Game results recorded immutably on blockchain. Historical outcomes cannot be altered.</p>
          </div>
          <div className="bg-card p-5 rounded-lg border border-border">
            <h3 className="font-semibold text-primary mb-2">Bankroll Visibility</h3>
            <p className="text-sm text-muted-foreground">Casino reserves can be verified on-chain. Know if the house can cover payouts.</p>
          </div>
        </div>
      </section>

      {/* How to Verify */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">How to Verify Transparency</h2>
        <div className="space-y-4">
          <div className="flex items-start gap-4 bg-card p-4 rounded-lg border border-border">
            <span className="bg-primary text-primary-foreground w-8 h-8 rounded-full flex items-center justify-center font-bold shrink-0">1</span>
            <div>
              <h3 className="font-semibold">Check Smart Contract Verification</h3>
              <p className="text-muted-foreground">Look up the casino's contract address on a blockchain explorer. Verified contracts show readable source code.</p>
            </div>
          </div>
          <div className="flex items-start gap-4 bg-card p-4 rounded-lg border border-border">
            <span className="bg-primary text-primary-foreground w-8 h-8 rounded-full flex items-center justify-center font-bold shrink-0">2</span>
            <div>
              <h3 className="font-semibold">Review Security Audits</h3>
              <p className="text-muted-foreground">Reputable casinos publish third-party security audits. Check that audits are recent and from known firms.</p>
            </div>
          </div>
          <div className="flex items-start gap-4 bg-card p-4 rounded-lg border border-border">
            <span className="bg-primary text-primary-foreground w-8 h-8 rounded-full flex items-center justify-center font-bold shrink-0">3</span>
            <div>
              <h3 className="font-semibold">Track Your Transactions</h3>
              <p className="text-muted-foreground">Use blockchain explorers to verify your deposits and withdrawals were processed correctly.</p>
            </div>
          </div>
          <div className="flex items-start gap-4 bg-card p-4 rounded-lg border border-border">
            <span className="bg-primary text-primary-foreground w-8 h-8 rounded-full flex items-center justify-center font-bold shrink-0">4</span>
            <div>
              <h3 className="font-semibold">Verify Provably Fair Games</h3>
              <p className="text-muted-foreground">Use the casino's verification tools to confirm game outcomes match the revealed seeds.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Transparency Levels */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Levels of Transparency</h2>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse border border-border rounded-lg">
            <thead>
              <tr className="bg-muted/30">
                <th className="border border-border p-3 text-left">Casino Type</th>
                <th className="border border-border p-3 text-left">Transparency Level</th>
                <th className="border border-border p-3 text-left">What's Visible</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-border p-3 font-semibold">Fully Decentralized</td>
                <td className="border border-border p-3">Highest</td>
                <td className="border border-border p-3">All code, transactions, bankroll</td>
              </tr>
              <tr className="bg-muted/10">
                <td className="border border-border p-3 font-semibold">Hybrid (Provably Fair)</td>
                <td className="border border-border p-3">High</td>
                <td className="border border-border p-3">Game outcomes, some transactions</td>
              </tr>
              <tr>
                <td className="border border-border p-3 font-semibold">Centralized Crypto</td>
                <td className="border border-border p-3">Medium</td>
                <td className="border border-border p-3">Deposit/withdrawal transactions only</td>
              </tr>
              <tr className="bg-muted/10">
                <td className="border border-border p-3 font-semibold">Traditional Casino</td>
                <td className="border border-border p-3">Low</td>
                <td className="border border-border p-3">Audit reports only (if published)</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Summary */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Summary</h2>
        <p className="bg-primary/10 p-6 rounded-lg border border-primary/30">
          Blockchain gambling provides transparency through public transaction records, auditable smart contract code, on-chain game outcomes, and verifiable casino bankrolls. This enables players to independently verify all aspects of gambling operations rather than trusting operator claims. The level of transparency varies—fully decentralized casinos offer the most visibility, while centralized crypto casinos may only show deposit/withdrawal transactions.
        </p>
      </section>
    </GuideArticleLayout>
  );
};

export default TransparencyBlockchainGambling;
