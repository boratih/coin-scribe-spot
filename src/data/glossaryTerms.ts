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
    term: "Blockchain Gambling",
    slug: "blockchain-gambling",
    definition: "Blockchain gambling refers to gambling systems that use blockchain technology to record transactions, verify outcomes, or manage balances.",
    extendedExplanation: "By leveraging immutable ledgers and cryptographic proofs, blockchain gambling systems can improve transparency and auditability. Depending on implementation, gameplay outcomes, financial settlements, or both may be verifiable through on-chain data or cryptographic logs."
  },
  {
    term: "Casino Infrastructure Layer",
    slug: "casino-infrastructure-layer",
    definition: "A casino infrastructure layer refers to the technical foundation supporting gambling systems, including settlement, verification, and accounting components.",
    extendedExplanation: "Infrastructure layers may be shared across platforms and are distinct from user-facing gambling services."
  },
  {
    term: "Crypto Casino",
    slug: "crypto-casino",
    definition: "A crypto casino is an online gambling platform that uses cryptocurrencies and blockchain technology for deposits, gameplay settlement, and withdrawals. Unlike traditional online casinos, crypto casinos enable faster transactions, increased transparency, and global accessibility without reliance on traditional banking systems.",
    extendedExplanation: "Crypto casinos operate by integrating digital wallets, blockchain networks, and cryptographic verification mechanisms into gaming workflows. Transactions may be settled on-chain or through hybrid models that use blockchain-based accounting for verification. These platforms often support multiple blockchain networks and digital assets, enabling users to interact directly using cryptocurrencies.\n\nCrypto casinos vary widely in structure, regulatory exposure, and technical implementation. Some prioritize decentralization and transparency, while others resemble traditional platforms with crypto payment support.",
    importantNote: "Crypto casinos are subject to jurisdictional restrictions and user responsibility. Participation may involve financial risk, volatility, and regulatory uncertainty depending on location."
  },
  {
    term: "Crypto Casino Platform",
    slug: "crypto-casino-platform",
    definition: "A crypto casino platform is a digital interface or system that enables interaction with crypto-based gambling mechanisms.",
    extendedExplanation: "Platforms may function as aggregators, interfaces, or infrastructure layers and do not necessarily operate or control gambling logic directly."
  },
  {
    term: "Crypto Gambling Risks",
    slug: "crypto-gambling-risks",
    definition: "Crypto gambling risks include financial loss, asset volatility, technical failures, and regulatory uncertainty.",
    extendedExplanation: "Users should understand that cryptocurrencies are volatile and gambling outcomes are probabilistic. Participation should be undertaken responsibly and in compliance with applicable laws.",
    importantNote: "Gambling involves risk of financial loss. Never gamble more than you can afford to lose."
  },
  {
    term: "Custodial vs Non-Custodial Gambling",
    slug: "custodial-vs-non-custodial-gambling",
    definition: "Custodial gambling platforms hold user funds on behalf of players, while non-custodial systems allow users to retain control of assets through personal wallets.",
    extendedExplanation: "Non-custodial models reduce counterparty risk but may introduce technical complexity."
  },
  {
    term: "Decentralized Casino",
    slug: "decentralized-casino",
    definition: "A decentralized casino is a gambling system that minimizes centralized control by using smart contracts and distributed infrastructure.",
    extendedExplanation: "Decentralized casinos may reduce reliance on custodial accounts and centralized servers. However, decentralization exists on a spectrum, and not all decentralized casinos are fully autonomous or trustless."
  },
  {
    term: "Deterministic Accounting",
    slug: "deterministic-accounting",
    definition: "Deterministic accounting is a financial system where all balances and state transitions are derived from reproducible rules and recorded events.",
    extendedExplanation: "This approach enables consistent reconciliation, replay-based verification, and reduced ambiguity in transaction histories, particularly in blockchain-integrated systems."
  },
  {
    term: "GMG Engine",
    slug: "gmg-engine",
    definition: "A crypto settlement and proof-first infrastructure designed for deterministic accounting, verifiable transaction flows, and multi-network payment systems.",
    link: { url: "https://gmgengine.com/", label: "gmgengine.com" }
  },
  {
    term: "Instant Crypto Withdrawals",
    slug: "instant-crypto-withdrawals",
    definition: "Instant crypto withdrawals refer to payout mechanisms that allow users to receive funds immediately or within minutes after a withdrawal request.",
    extendedExplanation: "Speed depends on internal accounting systems, blockchain confirmation times, and liquidity management. Instant withdrawals do not guarantee network finality and may still be subject to technical or network delays."
  },
  {
    term: "Jurisdictional Restrictions",
    slug: "jurisdictional-restrictions",
    definition: "Jurisdictional restrictions refer to legal limitations on gambling activities based on geographic location.",
    extendedExplanation: "Crypto gambling legality varies by country and region. Users are responsible for understanding and complying with local regulations.",
    importantNote: "Always verify that online gambling is legal in your jurisdiction before participating."
  },
  {
    term: "No-KYC Crypto Casino",
    slug: "no-kyc-crypto-casino",
    definition: "A no-KYC crypto casino is a crypto-based gambling platform that allows users to participate without mandatory identity verification procedures, commonly referred to as Know Your Customer (KYC).",
    extendedExplanation: "These platforms typically rely on wallet-based access rather than account-based identity systems. While no-KYC models emphasize privacy and accessibility, they may still enforce transaction limits, risk controls, or regional restrictions depending on jurisdiction.\n\nNo-KYC does not imply anonymity or absence of risk, and users remain responsible for understanding applicable laws."
  },
  {
    term: "On-Chain Gambling",
    slug: "on-chain-gambling",
    definition: "On-chain gambling refers to gambling mechanisms where bets, outcomes, or settlements are executed directly on a blockchain network.",
    extendedExplanation: "In on-chain models, smart contracts may handle wager resolution and payouts. This approach increases transparency and auditability but may introduce higher transaction costs or latency depending on the network used."
  },
  {
    term: "Provably Fair Gambling",
    slug: "provably-fair-gambling",
    definition: "Provably fair gambling is a system that allows players to independently verify the fairness of game outcomes using cryptographic techniques.",
    extendedExplanation: "These systems typically use pre-commitment hashes, client seeds, and server seeds to ensure results cannot be altered after bets are placed. Verification occurs after gameplay, allowing users to confirm outcome integrity without trusting the platform operator."
  },
  {
    term: "Replay-Based Verification",
    slug: "replay-based-verification",
    definition: "Replay-based verification is a method of validating system behavior by reprocessing historical transaction data to reproduce outcomes.",
    extendedExplanation: "This technique is commonly used in deterministic systems to ensure accuracy, integrity, and consistency across transaction states."
  },
  {
    term: "Smart Contract Casino",
    slug: "smart-contract-casino",
    definition: "A smart contract casino uses blockchain-based smart contracts to automate aspects of gameplay, settlement, or accounting.",
    extendedExplanation: "Smart contracts can enforce predefined rules without human intervention. Their behavior is determined by code, making audits and verification possible when contracts are publicly accessible."
  },
  {
    term: "Verifiable Transactions",
    slug: "verifiable-transactions",
    definition: "Verifiable transactions are financial or gameplay-related transactions that can be independently audited or confirmed using cryptographic or ledger-based evidence.",
    extendedExplanation: "Verification may involve blockchain explorers, transaction hashes, or cryptographic proofs, depending on system architecture."
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
