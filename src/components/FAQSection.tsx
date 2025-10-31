import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQSection = () => {
  const faqs = [
    {
      question: "Is DegenRoll safe and secure?",
      answer: "Yes, absolutely. DegenRoll uses provably fair technology and industry-standard encryption. All games are transparent and verifiable, and we never store your private keys."
    },
    {
      question: "Do I need KYC to play?",
      answer: "No KYC required! We respect your privacy. Simply connect your wallet and start playing immediately with any supported cryptocurrency."
    },
    {
      question: "How fast are withdrawals?",
      answer: "Withdrawals are instant! Since we operate on blockchain technology, your winnings are transferred directly to your wallet within seconds of requesting a withdrawal."
    },
    {
      question: "What cryptocurrencies do you accept?",
      answer: "We accept all major cryptocurrencies including Bitcoin, Ethereum, BNB, Solana, and many more. Check our platform for the full list of supported tokens."
    },
    {
      question: "Are there any welcome bonuses?",
      answer: "Yes! New players receive exclusive welcome bonuses. Check our promotions page or sign up to see current offers available for you."
    },
    {
      question: "How do I know the games are fair?",
      answer: "All our games use provably fair technology. You can verify the fairness of every game round using cryptographic hashes. Full transparency is guaranteed."
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
