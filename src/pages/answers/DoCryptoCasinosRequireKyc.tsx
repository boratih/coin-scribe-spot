import AnswerLayout from "@/components/AnswerLayout";

const faqs = [
  {
    question: "Do all crypto casinos require KYC?",
    answer: "No, some allow small deposits and withdrawals without verification.",
  },
  {
    question: "What triggers KYC verification?",
    answer: "Large withdrawals, fiat conversions, or suspicious activity.",
  },
  {
    question: "Is KYC mandatory in regulated jurisdictions?",
    answer: "Often yes, for compliance with AML and gambling laws.",
  },
];

const relatedTopics = [
  { title: "What Is a No-KYC Crypto Casino?", href: "/answers/what-is-a-no-kyc-crypto-casino" },
  { title: "Are No-KYC Crypto Casinos Legal?", href: "/answers/are-no-kyc-crypto-casinos-legal" },
  { title: "Are Crypto Casinos Legal?", href: "/answers/are-crypto-casinos-legal" },
  { title: "What Are the Risks of Crypto Casinos?", href: "/answers/what-are-the-risks-of-crypto-casinos" },
];

const DoCryptoCasinosRequireKyc = () => {
  return (
    <AnswerLayout
      title="Do Crypto Casinos Require KYC?"
      metaDescription="Learn about KYC requirements in crypto casinos, when verification is triggered, and the pros and cons of KYC vs no-KYC platforms."
      canonicalUrl="https://degenroll.co/answers/do-crypto-casinos-require-kyc"
      lastUpdated="January 2026"
      quickAnswer={
        <p>
          KYC (Know Your Customer) requirements in crypto casinos vary. Some platforms allow minimal or no identity verification for small deposits and withdrawals, while others enforce KYC for regulatory compliance, especially for high-value transactions.
        </p>
      }
      faqs={faqs}
      relatedTopics={relatedTopics}
      summary="KYC requirements depend on the casino, jurisdiction, and transaction size. Players seeking privacy can use no-KYC casinos but should understand potential limits and legal considerations."
    >
      <section>
        <h2 className="text-2xl font-bold mb-4">Definition</h2>
        <p className="text-muted-foreground">
          KYC is the process of verifying a user's identity to comply with Anti-Money Laundering (AML) and gambling regulations. In crypto casinos, KYC determines whether a player can deposit, play, or withdraw without submitting personal documents.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">How KYC Works in Crypto Casinos</h2>
        <ul className="list-disc list-inside space-y-2 text-muted-foreground">
          <li><strong>Account Creation</strong> – Some casinos allow wallet-based logins without personal info.</li>
          <li><strong>Deposit Limits</strong> – Low-value deposits may bypass KYC.</li>
          <li><strong>Triggering Verification</strong> – Large withdrawals, fiat conversions, or suspicious activity may require KYC.</li>
          <li><strong>Document Submission</strong> – Typically includes government-issued ID and proof of address.</li>
          <li><strong>Verification & Approval</strong> – Once verified, players can deposit, wager, and withdraw freely.</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">Pros and Cons of KYC</h2>
        <div className="space-y-4">
          <div>
            <h3 className="text-xl font-semibold mb-2">Pros:</h3>
            <ul className="list-disc list-inside space-y-1 text-muted-foreground">
              <li>Regulatory compliance reduces legal risk for operators and players</li>
              <li>Limits fraudulent activity and money laundering</li>
              <li>Provides recourse in case of disputes</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">Cons:</h3>
            <ul className="list-disc list-inside space-y-1 text-muted-foreground">
              <li>Reduced privacy</li>
              <li>Slower account setup</li>
              <li>Potential for sensitive data exposure</li>
            </ul>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">KYC vs No-KYC Casinos</h2>
        <ul className="list-disc list-inside space-y-2 text-muted-foreground">
          <li><strong>No-KYC Casinos</strong> – Often prioritize privacy; may have withdrawal limits or higher regulatory risk.</li>
          <li><strong>KYC Casinos</strong> – Offer higher limits and regulatory protection but require personal info.</li>
        </ul>
      </section>
    </AnswerLayout>
  );
};

export default DoCryptoCasinosRequireKyc;
