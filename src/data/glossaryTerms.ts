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
    term: "Affiliate Program",
    slug: "affiliate-program",
    definition: "Often discussed as a referral system where promoters earn commissions, though the structure and reliability of these programs varies widely across platforms.",
    extendedExplanation: "Players may encounter affiliate links without clear disclosure of compensation structures or obligations."
  },
  {
    term: "Automated Payout Contract",
    slug: "automated-payout-contract",
    definition: "Commonly understood as smart contract logic that processes withdrawals, though 'automated' can mean different things depending on platform architecture.",
    extendedExplanation: "What counts as 'automated' versus 'manual' is often ambiguous in platform documentation."
  },
  {
    term: "Bet Limits",
    slug: "bet-limits",
    definition: "Players typically encounter bet limits as constraints on wagering amounts, though the rationale and enforcement of these limits is rarely explained.",
    extendedExplanation: "Whether limits exist for player protection, platform risk management, or regulatory compliance is often unclear."
  },
  {
    term: "Bet Multiplier",
    slug: "bet-multiplier",
    definition: "Commonly marketed as a factor that increases potential winnings, though players may misunderstand the relationship between multipliers and actual odds.",
    extendedExplanation: "High multipliers do not necessarily indicate favorable player outcomes."
  },
  {
    term: "Blockchain Explorer",
    slug: "blockchain-explorer",
    definition: "Players use blockchain explorers expecting transaction transparency, though interpretation of on-chain data requires technical understanding that is often assumed rather than provided.",
    extendedExplanation: "Visibility of transactions does not automatically mean verifiability of platform claims."
  },
  {
    term: "Blockchain Gambling",
    slug: "blockchain-gambling",
    definition: "Commonly interpreted as gambling that uses blockchain technology, though the extent and nature of blockchain integration varies significantly and is often overstated in marketing.",
    extendedExplanation: "Many platforms described as 'blockchain gambling' use blockchain only for payments rather than game logic."
  },
  {
    term: "Blockchain Provably Fair Audit",
    slug: "blockchain-provably-fair-audit",
    definition: "Often presented as verification of fairness, though 'audit' can mean internal checks, third-party reviews, or player-accessible verification tools, with no standard meaning.",
    extendedExplanation: "Players may assume 'audited' implies regulatory oversight when it does not."
  },
  {
    term: "Cashback / Lossback",
    slug: "cashback-lossback",
    definition: "Commonly understood as partial return of losses, though the terms, timing, and eligibility for these programs are frequently complex and subject to change.",
    extendedExplanation: "What appears as 'cashback' may involve wagering requirements or other conditions."
  },
  {
    term: "Casino Ecosystem Layer",
    slug: "casino-ecosystem-layer",
    definition: "A term sometimes used to describe infrastructure supporting multiple services, though its meaning varies by context and is rarely defined clearly.",
    extendedExplanation: "Players may encounter this term in marketing without understanding what it implies operationally."
  },
  {
    term: "Casino Infrastructure Layer",
    slug: "casino-infrastructure-layer",
    definition: "Sometimes referenced as technical foundation for gambling systems, though the distinction between infrastructure and user-facing services is often unclear.",
    extendedExplanation: "Infrastructure claims may be used to imply stability or reliability without evidence."
  },
  {
    term: "Casino Token Economy",
    slug: "casino-token-economy",
    definition: "Players may encounter internal token systems marketed as value-generating, though the economics and risks of these systems are often poorly explained.",
    extendedExplanation: "Token value may be influenced by platform decisions beyond player control."
  },
  {
    term: "Chain Agnostic Casino",
    slug: "chain-agnostic-casino",
    definition: "Sometimes claimed to mean multi-chain support, though what this means practically for deposits, withdrawals, and game access varies by platform.",
    extendedExplanation: "Claims of chain agnosticism may not reflect actual operational flexibility."
  },
  {
    term: "Chainlink / Oracle Betting",
    slug: "chainlink-oracle-betting",
    definition: "Often presented as trustless data integration, though players may not understand how oracles work or what happens if oracle data is disputed.",
    extendedExplanation: "Oracle reliance introduces dependencies that are rarely explained to players."
  },
  {
    term: "Cold Storage Casino Funds",
    slug: "cold-storage-casino-funds",
    definition: "Commonly referenced as security practice, though players have no way to verify claims about fund storage practices.",
    extendedExplanation: "Cold storage claims are often unverifiable by users."
  },
  {
    term: "Cross-Chain Betting",
    slug: "cross-chain-betting",
    definition: "Sometimes marketed as flexibility across networks, though the complexity and risks of cross-chain operations are rarely disclosed.",
    extendedExplanation: "Cross-chain systems may introduce bridge risks and delays."
  },
  {
    term: "Cross-Platform Wallet",
    slug: "cross-platform-wallet",
    definition: "Players may assume wallet compatibility across platforms, though interoperability claims often have limitations.",
    extendedExplanation: "What counts as 'cross-platform' varies significantly."
  },
  {
    term: "Crypto Betting Market",
    slug: "crypto-betting-market",
    definition: "A broad term that players may interpret differently depending on context, encompassing various forms of crypto-based wagering.",
    extendedExplanation: "Market conditions and regulations vary widely across jurisdictions."
  },
  {
    term: "Crypto Casino",
    slug: "crypto-casino",
    definition: "Players commonly understand this as gambling platforms accepting cryptocurrency, though the term encompasses a wide range of implementations with varying degrees of blockchain integration.",
    extendedExplanation: "The term 'crypto casino' does not imply any particular security standard, regulatory status, or fairness guarantee. Players should understand that crypto acceptance alone does not distinguish platforms on other dimensions.",
    importantNote: "Crypto casinos are subject to jurisdictional restrictions. Participation involves financial risk, volatility, and regulatory uncertainty."
  },
  {
    term: "Crypto Casino Governance Token",
    slug: "crypto-casino-governance-token",
    definition: "Sometimes marketed as giving players decision-making power, though the actual influence and value of governance tokens varies widely.",
    extendedExplanation: "Governance rights may be limited or subject to conditions not immediately apparent."
  },
  {
    term: "Crypto Casino Platform",
    slug: "crypto-casino-platform",
    definition: "A term used broadly to describe various crypto gambling interfaces, though the distinction between platforms, operators, and aggregators is often unclear.",
    extendedExplanation: "Platform claims may not reflect actual operational control or responsibility."
  },
  {
    term: "Crypto Casino Risk Assessment",
    slug: "crypto-casino-risk-assessment",
    definition: "Players may encounter risk frameworks without understanding who created them or what standards they apply.",
    extendedExplanation: "Self-reported risk assessments may not be independently verified."
  },
  {
    term: "Crypto Casino Treasury",
    slug: "crypto-casino-treasury",
    definition: "Sometimes referenced as reserve funds, though treasury management practices are rarely transparent to players.",
    extendedExplanation: "Treasury claims are typically unverifiable by users."
  },
  {
    term: "Crypto Gambling Risks",
    slug: "crypto-gambling-risks",
    definition: "Players commonly associate various risks with crypto gambling, though the full scope of risks—financial, regulatory, technical, and operational—is often understated.",
    extendedExplanation: "Risk communication varies significantly across platforms, and players may not receive complete information.",
    importantNote: "Gambling involves risk of financial loss. Never gamble more than you can afford to lose."
  },
  {
    term: "Custodial vs Non-Custodial Gambling",
    slug: "custodial-vs-non-custodial-gambling",
    definition: "Players may interpret this distinction as security-relevant, though the practical implications of custody models are complex and context-dependent.",
    extendedExplanation: "Non-custodial does not automatically mean safer; different risks apply."
  },
  {
    term: "Custodial vs Non-Custodial Wagers",
    slug: "custodial-vs-non-custodial-wagers",
    definition: "The distinction between custodial and non-custodial models is often presented as binary, though actual implementations exist on a spectrum.",
    extendedExplanation: "Players may not understand what custody model applies to their funds."
  },
  {
    term: "Decentralized Autonomous Casino",
    slug: "decentralized-autonomous-casino",
    definition: "Sometimes marketed as community-governed, though the degree of decentralization and actual governance mechanisms vary significantly.",
    extendedExplanation: "DAO structures may not provide the autonomy or transparency players expect."
  },
  {
    term: "Decentralized Casino",
    slug: "decentralized-casino",
    definition: "Players commonly interpret this as meaning no central operator, though decentralization exists on a spectrum and claims may not reflect operational reality.",
    extendedExplanation: "Many platforms marketed as 'decentralized' retain centralized elements. The term does not guarantee any particular security or fairness standard."
  },
  {
    term: "Decentralized Jackpot",
    slug: "decentralized-jackpot",
    definition: "Sometimes presented as on-chain managed, though jackpot mechanics and distribution may involve centralized elements.",
    extendedExplanation: "Players may not understand what 'decentralized' means for jackpot administration."
  },
  {
    term: "Deterministic Accounting",
    slug: "deterministic-accounting",
    definition: "A technical term players may encounter without understanding its implications for balance tracking or verification.",
    extendedExplanation: "Deterministic systems are not inherently more reliable from a player perspective."
  },
  {
    term: "Deterministic Casino Accounting",
    slug: "deterministic-casino-accounting",
    definition: "Players may see this term in technical documentation without clear explanation of what it means for their experience.",
    extendedExplanation: "Accounting system design does not guarantee accuracy or fairness."
  },
  {
    term: "Escrow Betting",
    slug: "escrow-betting",
    definition: "Sometimes presented as providing security, though escrow implementations and their protections vary.",
    extendedExplanation: "Escrow claims may not reflect actual fund protection mechanisms."
  },
  {
    term: "Faucet Casino",
    slug: "faucet-casino",
    definition: "Players may interpret faucets as risk-free opportunities, though the purpose and limitations of these offers are often unclear.",
    extendedExplanation: "Faucet distributions may be designed primarily for marketing rather than player benefit."
  },
  {
    term: "Game Smart Contract Audit",
    slug: "game-smart-contract-audit",
    definition: "Players often assume 'audited' means verified as secure, though audit scope, auditor qualifications, and findings are rarely disclosed.",
    extendedExplanation: "Audit claims do not guarantee security or fairness."
  },
  {
    term: "Game Tokenomics",
    slug: "game-tokenomics",
    definition: "Players may encounter tokenomics claims without understanding the economic models or risks involved.",
    extendedExplanation: "Token economics are typically designed to benefit the platform first."
  },
  {
    term: "GMG Engine",
    slug: "gmg-engine",
    definition: "A specific infrastructure project referenced in some contexts, though players may not understand what distinguishes it from other solutions.",
    link: { url: "https://gmgengine.com/", label: "gmgengine.com" }
  },
  {
    term: "Hot Wallet / Cold Wallet",
    slug: "hot-wallet-cold-wallet",
    definition: "Players commonly understand this as online vs. offline storage, though claims about wallet practices are typically unverifiable.",
    extendedExplanation: "Security claims related to wallet types may not reflect actual practices."
  },
  {
    term: "House Edge",
    slug: "house-edge",
    definition: "Players often misunderstand house edge as the amount they will lose, rather than as a statistical advantage over many games.",
    extendedExplanation: "Actual player outcomes vary significantly from theoretical house edge calculations."
  },
  {
    term: "Instant Crypto Deposits / Withdrawals",
    slug: "instant-crypto-deposits-withdrawals",
    definition: "Players often interpret 'instant' literally, though actual speeds depend on network conditions, platform processing, and other factors.",
    extendedExplanation: "'Instant' claims may not account for confirmation requirements or platform delays."
  },
  {
    term: "Instant Crypto Withdrawals",
    slug: "instant-crypto-withdrawals",
    definition: "A common marketing term that players may interpret more literally than warranted; actual withdrawal times vary based on multiple factors.",
    extendedExplanation: "'Instant' typically refers to platform processing, not blockchain finality."
  },
  {
    term: "Jackpot Contract",
    slug: "jackpot-contract",
    definition: "Sometimes presented as automated distribution, though contract mechanics and conditions may be complex.",
    extendedExplanation: "Players may not understand jackpot eligibility or distribution rules."
  },
  {
    term: "Jackpot Pool",
    slug: "jackpot-pool",
    definition: "Players commonly assume pools represent available prizes, though pool composition and distribution mechanics vary.",
    extendedExplanation: "Jackpot pool transparency varies significantly across platforms."
  },
  {
    term: "Jurisdictional Restrictions",
    slug: "jurisdictional-restrictions",
    definition: "Players encounter access restrictions without always understanding the legal basis or their own responsibilities.",
    extendedExplanation: "Restriction messaging may not provide complete information about legal implications.",
    importantNote: "Always verify that online gambling is legal in your jurisdiction before participating."
  },
  {
    term: "Layer-2 Casino",
    slug: "layer-2-casino",
    definition: "Players may interpret Layer-2 as inherently better without understanding the tradeoffs involved.",
    extendedExplanation: "Layer-2 solutions introduce different risks and dependencies."
  },
  {
    term: "Loyalty Program / VIP Tier",
    slug: "loyalty-program-vip-tier",
    definition: "Players commonly expect loyalty benefits, though program terms, eligibility, and actual value vary significantly.",
    extendedExplanation: "VIP program benefits may be subject to conditions not immediately apparent."
  },
  {
    term: "Multi-Chain Support",
    slug: "multi-chain-support",
    definition: "Players may assume multi-chain means flexibility, though support levels and functionality may differ across networks.",
    extendedExplanation: "Multi-chain claims may not reflect equal functionality across all supported chains."
  },
  {
    term: "NFT Casino Assets",
    slug: "nft-casino-assets",
    definition: "Players may interpret NFTs as valuable assets, though the utility and transferability of casino NFTs varies.",
    extendedExplanation: "NFT value propositions are often tied to platform-specific conditions."
  },
  {
    term: "No Deposit Bonus",
    slug: "no-deposit-bonus",
    definition: "Players often interpret these as free money, though wagering requirements and withdrawal restrictions typically apply.",
    extendedExplanation: "No deposit bonuses usually have conditions that limit actual value."
  },
  {
    term: "No-KYC Crypto Casino",
    slug: "no-kyc-crypto-casino",
    definition: "Players commonly understand this as anonymous access, though 'no-KYC' may still involve data collection and access restrictions.",
    extendedExplanation: "No-KYC does not mean anonymous or untracked. Platforms may still collect data and enforce restrictions based on other factors."
  },
  {
    term: "On-Chain Betting",
    slug: "on-chain-betting",
    definition: "Players may interpret 'on-chain' as meaning fully transparent, though what is actually recorded on-chain varies by implementation.",
    extendedExplanation: "On-chain claims may not mean all operations are blockchain-based."
  },
  {
    term: "On-Chain Gambling",
    slug: "on-chain-gambling",
    definition: "A term players may interpret as blockchain-native, though actual implementations vary significantly in what occurs on-chain.",
    extendedExplanation: "The extent of on-chain activity varies and is often overstated in marketing."
  },
  {
    term: "Peer-to-Peer Casino",
    slug: "peer-to-peer-casino",
    definition: "Players may assume direct player interaction, though 'peer-to-peer' implementations often involve intermediary systems.",
    extendedExplanation: "P2P claims may not reflect fully decentralized interactions."
  },
  {
    term: "Play-to-Earn Casino",
    slug: "play-to-earn-casino",
    definition: "Players may interpret this as guaranteed income potential, though earnings depend on many factors including token economics and market conditions.",
    extendedExplanation: "Play-to-earn models may involve significant risks not immediately apparent."
  },
  {
    term: "Provably Fair Card Games",
    slug: "provably-fair-card-games",
    definition: "Players may assume verification is straightforward, though understanding provably fair systems requires technical knowledge.",
    extendedExplanation: "Provably fair claims do not mean players can easily verify outcomes."
  },
  {
    term: "Provably Fair Dice / Slots / Roulette",
    slug: "provably-fair-dice-slots-roulette",
    definition: "Players commonly interpret these as verified fair, though verification capability varies by game and player technical ability.",
    extendedExplanation: "Provably fair labeling does not guarantee that verification is practical for most users."
  },
  {
    term: "Provably Fair Gambling",
    slug: "provably-fair-gambling",
    definition: "Players often interpret this as meaning games are fair, though 'provably fair' refers specifically to verifiability, not fairness of odds.",
    extendedExplanation: "Provably fair systems enable verification but do not guarantee favorable odds or platform trustworthiness in other respects."
  },
  {
    term: "Provably Fair Games",
    slug: "provably-fair-games",
    definition: "A label players may trust without understanding what verification actually involves or requires.",
    extendedExplanation: "The presence of provably fair labeling does not mean verification is accessible to all players."
  },
  {
    term: "Provably Fair Slots",
    slug: "provably-fair-slots",
    definition: "Players may assume provably fair slots are better, though the term refers to verifiability rather than odds or payouts.",
    extendedExplanation: "Provably fair does not mean higher RTP or better player outcomes."
  },
  {
    term: "Provably Fair Verification Tool",
    slug: "provably-fair-verification-tool",
    definition: "Players may encounter verification tools without understanding how to use them or interpret results.",
    extendedExplanation: "Tool availability does not ensure practical usability for most players."
  },
  {
    term: "Provably Random Number",
    slug: "provably-random-number",
    definition: "Players may not distinguish between verifiable randomness and perceived randomness in gameplay.",
    extendedExplanation: "Randomness verification is a technical concept that may not affect player experience directly."
  },
  {
    term: "Replay-Based Verification",
    slug: "replay-based-verification",
    definition: "A technical approach players may encounter without understanding its implications or limitations.",
    extendedExplanation: "Replay capabilities do not automatically mean transparency or auditability for players."
  },
  {
    term: "RNG",
    slug: "rng",
    definition: "Players commonly trust RNG as fair, though they have no way to verify claims about random number generation.",
    extendedExplanation: "RNG claims are typically unverifiable by players without provably fair systems."
  },
  {
    term: "RTP",
    slug: "rtp",
    definition: "Players often misinterpret RTP percentages as expected returns per session rather than long-term statistical averages.",
    extendedExplanation: "Individual session outcomes can vary significantly from stated RTP values."
  },
  {
    term: "Seed Hash",
    slug: "seed-hash",
    definition: "A technical component players may not understand despite it being central to provably fair systems.",
    extendedExplanation: "Seed mechanics are often explained in documentation but may not be practically understood by most players."
  },
  {
    term: "Self-Custody Casino Wallet",
    slug: "self-custody-casino-wallet",
    definition: "Players may interpret self-custody as inherently safer, though it introduces different responsibilities and risks.",
    extendedExplanation: "Self-custody means players bear full responsibility for security."
  },
  {
    term: "Smart Contract Casino",
    slug: "smart-contract-casino",
    definition: "Players may associate smart contracts with trustlessness, though contract quality, auditing, and control vary significantly.",
    extendedExplanation: "Smart contract presence does not guarantee security or fairness."
  },
  {
    term: "Smart Contract Games",
    slug: "smart-contract-games",
    definition: "Players may assume smart contract games are more reliable, though contract implementation quality varies.",
    extendedExplanation: "Smart contract automation does not eliminate all risks."
  },
  {
    term: "Stake / Bet",
    slug: "stake-bet",
    definition: "A fundamental gambling term, though players may not fully understand how staking mechanics work across different game types.",
    extendedExplanation: "Stake terminology may vary by platform and game type."
  },
  {
    term: "Token Staking Casino",
    slug: "token-staking-casino",
    definition: "Players may interpret staking as passive income, though staking returns depend on platform economics and may involve risks.",
    extendedExplanation: "Staking programs are subject to platform conditions and token volatility."
  },
  {
    term: "Token Swap / Exchange",
    slug: "token-swap-exchange",
    definition: "Players may assume swaps are straightforward, though exchange rates, fees, and slippage may apply.",
    extendedExplanation: "Swap functionality may have costs or limitations not immediately apparent."
  },
  {
    term: "Tokenized Rewards / Loyalty Tokens",
    slug: "tokenized-rewards-loyalty-tokens",
    definition: "Players may value tokens without understanding their actual utility or liquidity limitations.",
    extendedExplanation: "Reward token value depends on platform-specific factors."
  },
  {
    term: "Verifiable Transactions",
    slug: "verifiable-transactions",
    definition: "Players may interpret 'verifiable' as meaning trustworthy, though verification capability is distinct from verification practice.",
    extendedExplanation: "Transaction visibility does not automatically mean all claims can be verified."
  },
  {
    term: "VIP Membership NFT",
    slug: "vip-membership-nft",
    definition: "Players may value VIP NFTs for perceived benefits, though actual utility depends on platform terms.",
    extendedExplanation: "NFT-based VIP status may be subject to changing conditions."
  },
  {
    term: "Volatility",
    slug: "volatility",
    definition: "Players often misunderstand volatility as a quality indicator rather than a risk characteristic.",
    extendedExplanation: "High volatility means higher variance in outcomes, not better or worse games."
  },
  {
    term: "Volatility Index",
    slug: "volatility-index",
    definition: "Players may use volatility ratings without understanding how they're calculated or what they predict.",
    extendedExplanation: "Volatility ratings may not be standardized across platforms or games."
  },
  {
    term: "Wagering Requirements",
    slug: "wagering-requirements",
    definition: "Players frequently underestimate the impact of wagering requirements on bonus value.",
    extendedExplanation: "Requirements effectively reduce or eliminate bonus value for most players."
  },
  {
    term: "Welcome Bonus",
    slug: "welcome-bonus",
    definition: "Players commonly overestimate welcome bonus value due to focus on headline amounts rather than terms.",
    extendedExplanation: "Bonuses typically have conditions that significantly affect actual value."
  },
  {
    term: "Yield Betting",
    slug: "yield-betting",
    definition: "Players may interpret yield betting as combining gambling with passive income, though the risks compound rather than diversify.",
    extendedExplanation: "Yield mechanics add complexity and risk to gambling activity."
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
