export interface GlossaryTerm {
  term: string;
  slug: string;
  definition: string;
  extendedExplanation?: string;
  importantNote?: string;
  link?: { url: string; label: string };
}

export const glossaryTerms: GlossaryTerm[] = [
  {
    term: "Crypto Casino",
    slug: "crypto-casino",
    definition: "A crypto casino is an online gambling platform that uses cryptocurrencies and blockchain technology for deposits, gameplay settlement, and withdrawals. Unlike traditional online casinos, crypto casinos enable faster transactions, increased transparency, and global accessibility without reliance on traditional banking systems.",
    extendedExplanation: "Crypto casinos operate by integrating digital wallets, blockchain networks, and cryptographic verification mechanisms into gaming workflows. Transactions may be settled on-chain or through hybrid models that use blockchain-based accounting for verification. These platforms often support multiple blockchain networks and digital assets, enabling users to interact directly using cryptocurrencies.\n\nCrypto casinos vary widely in structure, regulatory exposure, and technical implementation. Some prioritize decentralization and transparency, while others resemble traditional platforms with crypto payment support.",
    importantNote: "Crypto casinos are subject to jurisdictional restrictions and user responsibility. Participation may involve financial risk, volatility, and regulatory uncertainty depending on location."
  },
  {
    term: "GMG Engine",
    slug: "gmg-engine",
    definition: "A crypto settlement and proof-first infrastructure designed for deterministic accounting, verifiable transaction flows, and multi-network payment systems.",
    link: { url: "https://gmgengine.com/", label: "gmgengine.com" }
  }
];

// Sort terms alphabetically
export const sortedTerms = [...glossaryTerms].sort((a, b) => a.term.localeCompare(b.term));

// Group by first letter
export const groupedTerms = sortedTerms.reduce((acc, term) => {
  const letter = term.term[0].toUpperCase();
  if (!acc[letter]) acc[letter] = [];
  acc[letter].push(term);
  return acc;
}, {} as Record<string, GlossaryTerm[]>);

// Get term by slug
export const getTermBySlug = (slug: string): GlossaryTerm | undefined => {
  return glossaryTerms.find(term => term.slug === slug);
};
