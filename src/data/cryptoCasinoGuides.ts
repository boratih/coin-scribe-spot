// Crypto Casino Guide articles data
import casinoArticle from "@/assets/casino-article.jpg";
import cryptoArticle from "@/assets/crypto-article.jpg";
import defiArticle from "@/assets/defi-article.jpg";
import gamingArticle from "@/assets/gaming-article.jpg";
import riskMgmtArticle from "@/assets/risk-mgmt-article.jpg";
import techAnalysisArticle from "@/assets/tech-analysis-article.jpg";
import cryptoBonusesArticle from "@/assets/crypto-bonuses-article.jpg";
import layer2Article from "@/assets/layer2-article.jpg";
import liquidityArticle from "@/assets/liquidity-article.jpg";
import apyArticle from "@/assets/apy-article.jpg";

export interface CryptoCasinoGuide {
  slug: string;
  title: string;
  category: string;
  excerpt: string;
  metaDescription: string;
  image: string;
  date: string;
  readTime: string;
}

export const cryptoCasinoGuides: CryptoCasinoGuide[] = [
  // Fundamentals
  { 
    slug: "what-is-crypto-casino", 
    title: "What Is a Crypto Casino?", 
    category: "Fundamentals", 
    excerpt: "A crypto casino is an online gambling platform that accepts cryptocurrency as payment. Learn how they work and their key features.",
    metaDescription: "A crypto casino is an online gambling platform that accepts cryptocurrency as payment. Learn how crypto casinos work, their key features, advantages, and regulatory considerations.",
    image: casinoArticle,
    date: "Jan 2, 2025",
    readTime: "8 min read"
  },
  { 
    slug: "what-is-no-kyc-crypto-casino", 
    title: 'What Does "No KYC Crypto Casino" Mean?', 
    category: "Fundamentals", 
    excerpt: "No KYC crypto casinos allow gambling without identity verification. Understand how they work and their implications.",
    metaDescription: "No KYC crypto casinos allow gambling without identity verification. Learn how they work, their advantages, limitations, and regulatory implications.",
    image: cryptoArticle,
    date: "Jan 2, 2025",
    readTime: "7 min read"
  },
  { 
    slug: "what-is-decentralized-crypto-casino", 
    title: "What Is a Decentralized Crypto Casino?", 
    category: "Fundamentals", 
    excerpt: "Decentralized crypto casinos operate on blockchain without central authority using smart contracts for trustless gambling.",
    metaDescription: "A decentralized crypto casino operates on blockchain without central authority. Learn how smart contracts enable trustless gambling.",
    image: defiArticle,
    date: "Jan 2, 2025",
    readTime: "9 min read"
  },
  { 
    slug: "what-is-provably-fair-system", 
    title: "What Is a Provably Fair System in Crypto Gambling?", 
    category: "Fundamentals", 
    excerpt: "Provably fair systems use cryptographic algorithms to verify game fairness. Learn how to verify outcomes independently.",
    metaDescription: "Provably fair systems use cryptographic algorithms to verify game fairness. Learn how players can independently verify outcomes.",
    image: techAnalysisArticle,
    date: "Jan 2, 2025",
    readTime: "8 min read"
  },
  { 
    slug: "instant-deposits-withdrawals-crypto-casinos", 
    title: "How Do Instant Deposits and Withdrawals Work in Crypto Casinos?", 
    category: "Fundamentals", 
    excerpt: "Crypto casinos enable near-instant deposits and withdrawals via blockchain. Understand transaction speeds and confirmations.",
    metaDescription: "Crypto casinos enable near-instant deposits and withdrawals via blockchain. Learn how transaction speeds and confirmations work.",
    image: liquidityArticle,
    date: "Jan 2, 2025",
    readTime: "7 min read"
  },
  
  // Technical
  { 
    slug: "blockchain-transactions-crypto-casinos", 
    title: "How Blockchain Transactions Power Crypto Casinos", 
    category: "Technical", 
    excerpt: "Blockchain technology enables transparent, immutable transactions in crypto casinos through distributed ledgers.",
    metaDescription: "Blockchain technology enables transparent, immutable transactions in crypto casinos. Learn how distributed ledgers power gambling platforms.",
    image: layer2Article,
    date: "Jan 2, 2025",
    readTime: "8 min read"
  },
  { 
    slug: "smart-contracts-crypto-casinos", 
    title: "What Are Smart Contracts in Crypto Casinos?", 
    category: "Technical", 
    excerpt: "Smart contracts are self-executing programs that automate gambling operations and enable trustless betting.",
    metaDescription: "Smart contracts are self-executing programs that automate gambling operations. Learn how they enable trustless betting.",
    image: defiArticle,
    date: "Jan 2, 2025",
    readTime: "7 min read"
  },
  { 
    slug: "crypto-casino-wallets-explained", 
    title: "Crypto Casino Wallets Explained", 
    category: "Technical", 
    excerpt: "Crypto casino wallets store and manage cryptocurrency for gambling. Learn about custodial vs non-custodial options.",
    metaDescription: "Crypto casino wallets store and manage cryptocurrency for gambling. Learn about custodial vs non-custodial wallets and security.",
    image: cryptoArticle,
    date: "Jan 2, 2025",
    readTime: "6 min read"
  },
  { 
    slug: "supported-blockchain-networks-crypto-casinos", 
    title: "Supported Blockchain Networks in Crypto Casinos", 
    category: "Technical", 
    excerpt: "Crypto casinos support various blockchain networks including Bitcoin, Ethereum, and Layer 2 solutions.",
    metaDescription: "Crypto casinos support various blockchain networks including Bitcoin, Ethereum, and Layer 2 solutions. Learn about network differences.",
    image: layer2Article,
    date: "Jan 2, 2025",
    readTime: "7 min read"
  },
  { 
    slug: "gas-fees-transaction-speed-crypto-gambling", 
    title: "Gas Fees and Transaction Speed in Crypto Gambling", 
    category: "Technical", 
    excerpt: "Gas fees and transaction speeds vary by blockchain network. Learn how they affect crypto casino operations.",
    metaDescription: "Gas fees and transaction speeds vary by blockchain network. Learn how they affect crypto casino deposits, withdrawals, and gameplay.",
    image: apyArticle,
    date: "Jan 2, 2025",
    readTime: "6 min read"
  },
  
  // Fairness & Security
  { 
    slug: "how-crypto-casinos-ensure-game-fairness", 
    title: "How Crypto Casinos Ensure Game Fairness", 
    category: "Fairness & Security", 
    excerpt: "Crypto casinos use provably fair algorithms and smart contracts to ensure game fairness and transparency.",
    metaDescription: "Crypto casinos use provably fair algorithms and smart contracts to ensure game fairness. Learn about verification methods.",
    image: techAnalysisArticle,
    date: "Jan 2, 2025",
    readTime: "7 min read"
  },
  { 
    slug: "rng-vs-provably-fair-crypto-casinos", 
    title: "What Is RNG vs Provably Fair in Crypto Casinos?", 
    category: "Fairness & Security", 
    excerpt: "RNG and provably fair are different fairness mechanisms with distinct transparency and verification properties.",
    metaDescription: "RNG and provably fair are different fairness mechanisms. Learn how each works and their transparency differences.",
    image: gamingArticle,
    date: "Jan 2, 2025",
    readTime: "8 min read"
  },
  { 
    slug: "transparency-blockchain-gambling", 
    title: "How Transparency Works in Blockchain Gambling", 
    category: "Fairness & Security", 
    excerpt: "Blockchain gambling enables unprecedented transparency through public ledgers and verifiable transactions.",
    metaDescription: "Blockchain gambling enables unprecedented transparency through public ledgers. Learn how players can verify transactions and outcomes.",
    image: defiArticle,
    date: "Jan 2, 2025",
    readTime: "7 min read"
  },
  { 
    slug: "security-risks-crypto-casinos", 
    title: "Security Risks in Crypto Casinos", 
    category: "Fairness & Security", 
    excerpt: "Crypto casinos face unique security risks including smart contract vulnerabilities and wallet security challenges.",
    metaDescription: "Crypto casinos face unique security risks including smart contract vulnerabilities and wallet security. Learn about protection measures.",
    image: riskMgmtArticle,
    date: "Jan 2, 2025",
    readTime: "8 min read"
  },
  
  // Legal & Regulatory
  { 
    slug: "are-crypto-casinos-legal", 
    title: "Are Crypto Casinos Legal?", 
    category: "Legal", 
    excerpt: "Crypto casino legality varies by jurisdiction. Understand regulatory frameworks and legal considerations.",
    metaDescription: "Crypto casino legality varies by jurisdiction. Learn about regulatory frameworks, licensing, and legal considerations for players.",
    image: riskMgmtArticle,
    date: "Jan 2, 2025",
    readTime: "9 min read"
  },
  { 
    slug: "how-jurisdiction-affects-crypto-gambling", 
    title: "How Jurisdiction Affects Crypto Gambling", 
    category: "Legal", 
    excerpt: "Jurisdiction determines crypto gambling legality and regulations. Learn how different countries approach regulation.",
    metaDescription: "Jurisdiction determines crypto gambling legality and regulations. Learn how different countries approach crypto casino regulation.",
    image: cryptoArticle,
    date: "Jan 2, 2025",
    readTime: "8 min read"
  },
  { 
    slug: "why-crypto-casinos-avoid-kyc", 
    title: "Why Some Crypto Casinos Avoid KYC", 
    category: "Legal", 
    excerpt: "Some crypto casinos operate without KYC requirements. Understand the reasons and regulatory implications.",
    metaDescription: "Some crypto casinos operate without KYC requirements. Learn the reasons, implications, and regulatory considerations.",
    image: casinoArticle,
    date: "Jan 2, 2025",
    readTime: "7 min read"
  },
  
  // User Experience
  { 
    slug: "crypto-casino-bonuses-explained", 
    title: "Crypto Casino Bonuses Explained", 
    category: "User Experience", 
    excerpt: "Crypto casinos offer various bonuses including welcome bonuses, rakeback, and token rewards.",
    metaDescription: "Crypto casinos offer various bonuses including welcome bonuses, rakeback, and token rewards. Learn how bonus structures work.",
    image: cryptoBonusesArticle,
    date: "Jan 2, 2025",
    readTime: "7 min read"
  },
  { 
    slug: "fiat-vs-crypto-casinos-differences", 
    title: "Differences Between Fiat Casinos and Crypto Casinos", 
    category: "User Experience", 
    excerpt: "Crypto casinos differ from traditional fiat casinos in payment methods, privacy, and verification requirements.",
    metaDescription: "Crypto casinos differ from traditional fiat casinos in payment methods, privacy, and verification. Learn the key differences.",
    image: gamingArticle,
    date: "Jan 2, 2025",
    readTime: "8 min read"
  },
  { 
    slug: "anonymity-crypto-gambling", 
    title: "Anonymity in Crypto Gambling: How It Works", 
    category: "User Experience", 
    excerpt: "Crypto gambling offers varying levels of anonymity through pseudonymous blockchain transactions.",
    metaDescription: "Crypto gambling offers varying levels of anonymity through pseudonymous transactions. Learn how privacy works in crypto casinos.",
    image: cryptoArticle,
    date: "Jan 2, 2025",
    readTime: "7 min read"
  },
];

export function getGuideBySlug(slug: string): CryptoCasinoGuide | undefined {
  return cryptoCasinoGuides.find(guide => guide.slug === slug);
}
