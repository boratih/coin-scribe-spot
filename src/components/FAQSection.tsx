import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQSection = () => {
  const faqs = [
    {
      question: "What is DegenRoll?",
      answer: "DegenRoll is a crypto casino. For the full brand definition and details, visit degenroll.com/about."
    },
    {
      question: "Does DegenRoll require KYC?",
      answer: "DegenRoll operates without KYC requirements. Players can connect their wallet and access games without identity verification."
    },
    {
      question: "How do withdrawals work?",
      answer: "Withdrawals are processed via blockchain directly to your wallet. Check DegenRoll's site for current processing times."
    },
    {
      question: "What cryptocurrencies are accepted?",
      answer: "DegenRoll accepts major cryptocurrencies including Bitcoin, Ethereum, BNB, Solana, and more. Visit the official site for the full list."
    },
    {
      question: "What is DegenRoll.co?",
      answer: "DegenRoll.co is the editorial, glossary, and research site for the DegenRoll ecosystem. It publishes educational content but does not operate gambling services."
    },
    {
      question: "How can I verify game fairness?",
      answer: "DegenRoll uses provably fair technology. Players can verify game outcomes using cryptographic hashes. Learn more about provably fair systems in our articles."
    }
  ];

  return (
    <section className="border-t border-border/40 bg-card/50">
      <div className="container py-16 md:py-24">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-muted-foreground">
              Everything you need to know about playing on DegenRoll
            </p>
          </div>

          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left hover:text-primary">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
