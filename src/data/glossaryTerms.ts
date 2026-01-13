export interface GlossaryTerm {
  term: string;
  slug: string;
  definition: string;
  extendedExplanation?: string;
  importantNote?: string;
  link?: { url: string; label: string };
  canonicalRef?: string; // URL to canonical definition page
  shortDescription?: string; // Brief description when canonicalRef is used
}

export const glossaryTerms: GlossaryTerm[] = [
  {
    term: "Affiliate Program",
    slug: "affiliate-program",
    definition: "Referral system where promoters earn commissions for bringing new users.",
    extendedExplanation: "Often paid in crypto and based on wagering volume or revenue share."
  },
  {
    term: "Automated Payout Contract",
    slug: "automated-payout-contract",
    definition: "Smart contract executing withdrawals automatically.",
    extendedExplanation: "Ensures speed, accuracy, and trustless execution."
  },
  {
    term: "Bet Limits",
    slug: "bet-limits",
    definition: "Maximum and minimum allowable wagers.",
    extendedExplanation: "Ensures responsible gambling, game balance, and risk control."
  },
  {
    term: "Bet Multiplier",
    slug: "bet-multiplier",
    definition: "A factor by which a player's stake is multiplied in a game.",
    extendedExplanation: "Common in slots and dice games, affecting potential winnings."
  },
  {
    term: "Blockchain Explorer",
    slug: "blockchain-explorer",
    definition: "Tool to verify on-chain transactions related to wagers or payouts.",
    extendedExplanation: "Provides transparency and auditability for crypto betting."
  },
  {
    term: "Blockchain Gambling",
    slug: "blockchain-gambling",
    definition: "Blockchain gambling refers to gambling systems that use blockchain technology to record transactions, verify outcomes, or manage balances.",
    extendedExplanation: "By leveraging immutable ledgers and cryptographic proofs, blockchain gambling systems can improve transparency and auditability. Depending on implementation, gameplay outcomes, financial settlements, or both may be verifiable through on-chain data or cryptographic logs."
  },
  {
    term: "Blockchain Provably Fair Audit",
    slug: "blockchain-provably-fair-audit",
    definition: "Verification of game fairness on-chain.",
    extendedExplanation: "Confirms transparency and prevents manipulation."
  },
  {
    term: "Cashback / Lossback",
    slug: "cashback-lossback",
    definition: "A system where players receive a percentage of losses back from the casino.",
    extendedExplanation: "Cashback is designed to reduce risk for players and increase retention. Crypto casinos may pay cashback in crypto or tokens, and eligibility often depends on wagering volume."
  },
  {
    term: "Casino Ecosystem Layer",
    slug: "casino-ecosystem-layer",
    definition: "The infrastructure supporting multiple games, wallets, and smart contracts.",
    extendedExplanation: "Separates backend operations from user-facing interfaces, enabling scalability."
  },
  {
    term: "Casino Infrastructure Layer",
    slug: "casino-infrastructure-layer",
    definition: "A casino infrastructure layer refers to the technical foundation supporting gambling systems, including settlement, verification, and accounting components.",
    extendedExplanation: "Infrastructure layers may be shared across platforms and are distinct from user-facing gambling services."
  },
  {
    term: "Casino Token Economy",
    slug: "casino-token-economy",
    definition: "Internal crypto ecosystem of a casino.",
    extendedExplanation: "Determines token issuance, rewards, staking, and utility within the platform."
  },
  {
    term: "Chain Agnostic Casino",
    slug: "chain-agnostic-casino",
    definition: "Platform capable of operating on multiple blockchain networks.",
    extendedExplanation: "Improves accessibility and reduces single-chain dependency."
  },
  {
    term: "Chainlink / Oracle Betting",
    slug: "chainlink-oracle-betting",
    definition: "Use of oracles to bring off-chain data into smart contract games.",
    extendedExplanation: "Enables real-world outcomes (like sports scores) to trigger on-chain payouts."
  },
  {
    term: "Cold Storage Casino Funds",
    slug: "cold-storage-casino-funds",
    definition: "Crypto funds stored offline to protect against hacks.",
    extendedExplanation: "Cold storage ensures long-term security but can slow withdrawal processing."
  },
  {
    term: "Cross-Chain Betting",
    slug: "cross-chain-betting",
    definition: "Wagers or settlements that occur across multiple blockchain networks.",
    extendedExplanation: "Cross-chain systems increase flexibility and liquidity but require smart contracts or bridges to coordinate transactions."
  },
  {
    term: "Cross-Platform Wallet",
    slug: "cross-platform-wallet",
    definition: "Wallet compatible with multiple casino apps or blockchains.",
    extendedExplanation: "Simplifies user experience and fund management across games."
  },
  {
    term: "Crypto Betting Market",
    slug: "crypto-betting-market",
    definition: "The environment of crypto-based gambling opportunities.",
    extendedExplanation: "Includes games, sports betting, and prediction markets."
  },
  {
    term: "Crypto Casino",
    slug: "crypto-casino",
    definition: "See our canonical definition of Crypto Casino for the authoritative explanation.",
    canonicalRef: "/answers/what-is-a-crypto-casino",
    shortDescription: "Online gambling platform using cryptocurrency for deposits, wagers, and withdrawals.",
    extendedExplanation: "Crypto casinos operate by integrating digital wallets, blockchain networks, and cryptographic verification mechanisms into gaming workflows. Transactions may be settled on-chain or through hybrid models that use blockchain-based accounting for verification. These platforms often support multiple blockchain networks and digital assets, enabling users to interact directly using cryptocurrencies.\n\nCrypto casinos vary widely in structure, regulatory exposure, and technical implementation. Some prioritize decentralization and transparency, while others resemble traditional platforms with crypto payment support.",
    importantNote: "Crypto casinos are subject to jurisdictional restrictions and user responsibility. Participation may involve financial risk, volatility, and regulatory uncertainty depending on location."
  },
  {
    term: "Crypto Casino Governance Token",
    slug: "crypto-casino-governance-token",
    definition: "Token used to vote on platform decisions.",
    extendedExplanation: "Common in DAO casinos to give users influence over rules, rewards, or treasury."
  },
  {
    term: "Crypto Casino Platform",
    slug: "crypto-casino-platform",
    definition: "A crypto casino platform is a digital interface or system that enables interaction with crypto-based gambling mechanisms.",
    extendedExplanation: "Platforms may function as aggregators, interfaces, or infrastructure layers and do not necessarily operate or control gambling logic directly."
  },
  {
    term: "Crypto Casino Risk Assessment",
    slug: "crypto-casino-risk-assessment",
    definition: "Evaluation of financial, technical, and regulatory risks.",
    extendedExplanation: "Helps platforms and users understand potential vulnerabilities."
  },
  {
    term: "Crypto Casino Treasury",
    slug: "crypto-casino-treasury",
    definition: "Reserve funds managed by the platform for payouts and operations.",
    extendedExplanation: "Ensures liquidity for withdrawals, jackpots, and staking rewards."
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
    term: "Custodial vs Non-Custodial Wagers",
    slug: "custodial-vs-non-custodial-wagers",
    definition: "Custodial wagers hold player funds on the casino platform; non-custodial wagers keep funds in the player's wallet.",
    extendedExplanation: "Non-custodial models reduce counterparty risk but may require more technical knowledge from players."
  },
  {
    term: "Decentralized Autonomous Casino",
    slug: "decentralized-autonomous-casino",
    definition: "A casino governed by smart contracts and community voting rather than a centralized operator.",
    extendedExplanation: "Players can propose or vote on changes, game rules, and fund allocation, increasing transparency and community control."
  },
  {
    term: "Decentralized Casino",
    slug: "decentralized-casino",
    definition: "See our canonical definition of Decentralized Casino for the authoritative explanation.",
    canonicalRef: "/answers/decentralized-vs-centralized-crypto-casinos",
    shortDescription: "A gambling platform operating on blockchain smart contracts without central operator control.",
    extendedExplanation: "Decentralized casinos may reduce reliance on custodial accounts and centralized servers. However, decentralization exists on a spectrum, and not all decentralized casinos are fully autonomous or trustless."
  },
  {
    term: "Decentralized Jackpot",
    slug: "decentralized-jackpot",
    definition: "Lottery-style jackpot managed entirely on-chain.",
    extendedExplanation: "Transparent and auditable, removing reliance on central operators."
  },
  {
    term: "Deterministic Accounting",
    slug: "deterministic-accounting",
    definition: "Deterministic accounting is a financial system where all balances and state transitions are derived from reproducible rules and recorded events.",
    extendedExplanation: "This approach enables consistent reconciliation, replay-based verification, and reduced ambiguity in transaction histories, particularly in blockchain-integrated systems."
  },
  {
    term: "Deterministic Casino Accounting",
    slug: "deterministic-casino-accounting",
    definition: "A system where all balances and game outcomes are derived from reproducible, verifiable rules.",
    extendedExplanation: "Ensures consistency across transactions and allows players or auditors to replay events for verification."
  },
  {
    term: "Escrow Betting",
    slug: "escrow-betting",
    definition: "Temporary holding of bets in smart contracts until outcomes are confirmed.",
    extendedExplanation: "Protects both players and casino funds."
  },
  {
    term: "Faucet Casino",
    slug: "faucet-casino",
    definition: "Casino offering small crypto rewards to users for signing up or playing.",
    extendedExplanation: "Often used for onboarding and education, giving risk-free practice funds."
  },
  {
    term: "Game Smart Contract Audit",
    slug: "game-smart-contract-audit",
    definition: "Security review of a casino's smart contract code.",
    extendedExplanation: "Ensures no exploits or vulnerabilities exist before real user funds are used."
  },
  {
    term: "Game Tokenomics",
    slug: "game-tokenomics",
    definition: "Economics governing tokens used within a casino game.",
    extendedExplanation: "Influences incentives, rewards, and in-game liquidity."
  },
  {
    term: "GMG Engine",
    slug: "gmg-engine",
    definition: "A crypto settlement and proof-first infrastructure designed for deterministic accounting, verifiable transaction flows, and multi-network payment systems.",
    link: { url: "https://gmgengine.com/", label: "gmgengine.com" }
  },
  {
    term: "Hot Wallet / Cold Wallet",
    slug: "hot-wallet-cold-wallet",
    definition: "Methods of storing player and casino funds. Hot wallets are online and accessible; cold wallets are offline and secure.",
    extendedExplanation: "Casinos often use hot wallets for fast deposits/withdrawals and cold wallets for long-term security, balancing speed and safety."
  },
  {
    term: "House Edge",
    slug: "house-edge",
    definition: "The statistical advantage a casino has over players in a game.",
    extendedExplanation: "Even provably fair games include a house edge, which determines expected returns over time. Understanding house edge helps players make informed betting decisions."
  },
  {
    term: "Instant Crypto Deposits / Withdrawals",
    slug: "instant-crypto-deposits-withdrawals",
    definition: "Mechanisms that allow users to fund accounts or withdraw winnings immediately using cryptocurrency.",
    extendedExplanation: "Speed depends on internal accounting systems, blockchain confirmation, and liquidity management."
  },
  {
    term: "Instant Crypto Withdrawals",
    slug: "instant-crypto-withdrawals",
    definition: "Instant crypto withdrawals refer to payout mechanisms that allow users to receive funds immediately or within minutes after a withdrawal request.",
    extendedExplanation: "Speed depends on internal accounting systems, blockchain confirmation times, and liquidity management. Instant withdrawals do not guarantee network finality and may still be subject to technical or network delays."
  },
  {
    term: "Jackpot Contract",
    slug: "jackpot-contract",
    definition: "A smart contract that manages pooled jackpot funds and payouts in decentralized games.",
    extendedExplanation: "When conditions are met, the contract automatically distributes winnings according to predefined rules, removing reliance on a central operator."
  },
  {
    term: "Jackpot Pool",
    slug: "jackpot-pool",
    definition: "Aggregate funds for jackpot prizes.",
    extendedExplanation: "Often automated via smart contracts; contributions come from player stakes."
  },
  {
    term: "Jurisdictional Restrictions",
    slug: "jurisdictional-restrictions",
    definition: "Jurisdictional restrictions refer to legal limitations on gambling activities based on geographic location.",
    extendedExplanation: "Crypto gambling legality varies by country and region. Users are responsible for understanding and complying with local regulations.",
    importantNote: "Always verify that online gambling is legal in your jurisdiction before participating."
  },
  {
    term: "Layer-2 Casino",
    slug: "layer-2-casino",
    definition: "A casino built on a blockchain's secondary layer to reduce fees and increase speed.",
    extendedExplanation: "Layer-2 solutions like rollups allow fast, low-cost transactions without compromising decentralization or security."
  },
  {
    term: "Loyalty Program / VIP Tier",
    slug: "loyalty-program-vip-tier",
    definition: "Rewards structure for frequent players.",
    extendedExplanation: "Includes perks like higher withdrawal limits, cashback, exclusive games, and faster support."
  },
  {
    term: "Multi-Chain Support",
    slug: "multi-chain-support",
    definition: "Casinos that operate across multiple blockchain networks, allowing users to play with different cryptocurrencies.",
    extendedExplanation: "Multi-chain support improves accessibility, reduces congestion risks, and offers lower transaction fees depending on the network used."
  },
  {
    term: "NFT Casino Assets",
    slug: "nft-casino-assets",
    definition: "Non-fungible tokens representing in-game items, VIP status, or membership benefits.",
    extendedExplanation: "NFTs can be traded, staked, or used as access passes, merging gaming and digital collectibles."
  },
  {
    term: "No Deposit Bonus",
    slug: "no-deposit-bonus",
    definition: "A casino bonus awarded without requiring any initial deposit from the user.",
    extendedExplanation: "Usually smaller than welcome bonuses, no deposit bonuses allow players to try games risk-free. Winnings may be capped, and wagering rules often apply."
  },
  {
    term: "No-KYC Crypto Casino",
    slug: "no-kyc-crypto-casino",
    definition: "See our canonical definition of No-KYC Crypto Casino for the authoritative explanation.",
    canonicalRef: "/answers/what-is-a-no-kyc-crypto-casino",
    shortDescription: "A crypto gambling platform allowing participation without mandatory identity verification.",
    extendedExplanation: "These platforms typically rely on wallet-based access rather than account-based identity systems. While no-KYC models emphasize privacy and accessibility, they may still enforce transaction limits, risk controls, or regional restrictions depending on jurisdiction.\n\nNo-KYC does not imply anonymity or absence of risk, and users remain responsible for understanding applicable laws."
  },
  {
    term: "On-Chain Betting",
    slug: "on-chain-betting",
    definition: "Betting where transactions, wagers, or results are fully recorded on a blockchain.",
    extendedExplanation: "On-chain models provide transparency and immutability, though they may introduce higher fees or slower confirmation times."
  },
  {
    term: "On-Chain Gambling",
    slug: "on-chain-gambling",
    definition: "On-chain gambling refers to gambling mechanisms where bets, outcomes, or settlements are executed directly on a blockchain network.",
    extendedExplanation: "In on-chain models, smart contracts may handle wager resolution and payouts. This approach increases transparency and auditability but may introduce higher transaction costs or latency depending on the network used."
  },
  {
    term: "Peer-to-Peer Casino",
    slug: "peer-to-peer-casino",
    definition: "Casino where players directly bet against each other.",
    extendedExplanation: "Eliminates traditional house edge; smart contracts handle settlement."
  },
  {
    term: "Play-to-Earn Casino",
    slug: "play-to-earn-casino",
    definition: "Casino where players can earn crypto through gameplay.",
    extendedExplanation: "Combines gaming and earning incentives; often linked with token economies."
  },
  {
    term: "Provably Fair Card Games",
    slug: "provably-fair-card-games",
    definition: "Blockchain-based poker, blackjack, and other card games with verifiable outcomes.",
    extendedExplanation: "Ensures integrity using cryptographic techniques."
  },
  {
    term: "Provably Fair Dice / Slots / Roulette",
    slug: "provably-fair-dice-slots-roulette",
    definition: "Specific casino games designed to be auditable for fairness.",
    extendedExplanation: "Players can verify outcomes using cryptographic proofs, ensuring trust in RNG-based results."
  },
  {
    term: "Provably Fair Gambling",
    slug: "provably-fair-gambling",
    definition: "See our canonical definition of Provably Fair Gambling for the authoritative explanation.",
    canonicalRef: "/answers/what-is-provably-fair-gambling",
    shortDescription: "A cryptographic verification system allowing independent confirmation of game fairness.",
    extendedExplanation: "These systems typically use pre-commitment hashes, client seeds, and server seeds to ensure results cannot be altered after bets are placed. Verification occurs after gameplay, allowing users to confirm outcome integrity without trusting the platform operator."
  },
  {
    term: "Provably Fair Games",
    slug: "provably-fair-games",
    definition: "Games whose outcomes can be independently verified using cryptography.",
    extendedExplanation: "Players can confirm that results weren't tampered with using client seeds, server seeds, and cryptographic hashes, increasing transparency and trust."
  },
  {
    term: "Provably Fair Slots",
    slug: "provably-fair-slots",
    definition: "Slot games whose outcomes are verifiable using cryptography.",
    extendedExplanation: "Ensures players can audit results to confirm fairness."
  },
  {
    term: "Provably Fair Verification Tool",
    slug: "provably-fair-verification-tool",
    definition: "Interface allowing players to confirm game fairness.",
    extendedExplanation: "Usually shows seed hashes and RNG results for independent auditing."
  },
  {
    term: "Provably Random Number",
    slug: "provably-random-number",
    definition: "A method for generating game outcomes in a verifiable and unpredictable manner.",
    extendedExplanation: "Ensures fairness and prevents manipulation of game results."
  },
  {
    term: "Replay-Based Verification",
    slug: "replay-based-verification",
    definition: "Replay-based verification is a method of validating system behavior by reprocessing historical transaction data to reproduce outcomes.",
    extendedExplanation: "This technique is commonly used in deterministic systems to ensure accuracy, integrity, and consistency across transaction states."
  },
  {
    term: "RNG",
    slug: "rng",
    definition: "Algorithm that produces unpredictable game outcomes.",
    extendedExplanation: "Core to fairness in digital games; provably fair casinos allow verification."
  },
  {
    term: "RTP",
    slug: "rtp",
    definition: "A percentage indicating how much a game returns to players over time.",
    extendedExplanation: "Higher RTP values generally indicate better long-term payouts for players, commonly used in slots and table games."
  },
  {
    term: "Seed Hash",
    slug: "seed-hash",
    definition: "Cryptographic data used to generate provably fair outcomes.",
    extendedExplanation: "Combines server and client inputs to produce verifiable random results."
  },
  {
    term: "Self-Custody Casino Wallet",
    slug: "self-custody-casino-wallet",
    definition: "User-held wallet for interacting with non-custodial casinos.",
    extendedExplanation: "Players retain control over funds and private keys."
  },
  {
    term: "Smart Contract Casino",
    slug: "smart-contract-casino",
    definition: "A smart contract casino uses blockchain-based smart contracts to automate aspects of gameplay, settlement, or accounting.",
    extendedExplanation: "Smart contracts can enforce predefined rules without human intervention. Their behavior is determined by code, making audits and verification possible when contracts are publicly accessible."
  },
  {
    term: "Smart Contract Games",
    slug: "smart-contract-games",
    definition: "Games where rules, outcomes, and payouts are automated via smart contracts.",
    extendedExplanation: "Smart contracts ensure that results cannot be altered and payouts occur automatically according to coded rules."
  },
  {
    term: "Stake / Bet",
    slug: "stake-bet",
    definition: "The amount of cryptocurrency a player wagers on a game.",
    extendedExplanation: "Stakes may vary depending on game rules, user balance, and casino limits. Smart contract casinos enforce stake rules automatically on-chain."
  },
  {
    term: "Token Staking Casino",
    slug: "token-staking-casino",
    definition: "Casinos where players stake tokens to access rewards or games.",
    extendedExplanation: "Staking often increases bonuses, unlocks VIP tiers, or secures participation in decentralized jackpots."
  },
  {
    term: "Token Swap / Exchange",
    slug: "token-swap-exchange",
    definition: "Conversion of one crypto token to another within the casino platform.",
    extendedExplanation: "Supports multi-asset play and liquidity."
  },
  {
    term: "Tokenized Rewards / Loyalty Tokens",
    slug: "tokenized-rewards-loyalty-tokens",
    definition: "Casino-issued crypto tokens given as rewards, often for loyalty or completing tasks.",
    extendedExplanation: "These tokens can sometimes be staked, traded, or used to access exclusive games, providing additional incentives for regular players."
  },
  {
    term: "Verifiable Transactions",
    slug: "verifiable-transactions",
    definition: "Verifiable transactions are financial or gameplay-related transactions that can be independently audited or confirmed using cryptographic or ledger-based evidence.",
    extendedExplanation: "Verification may involve blockchain explorers, transaction hashes, or cryptographic proofs, depending on system architecture."
  },
  {
    term: "VIP Membership NFT",
    slug: "vip-membership-nft",
    definition: "NFT granting special perks and access in a crypto casino.",
    extendedExplanation: "Can include exclusive games, higher limits, or loyalty rewards."
  },
  {
    term: "Volatility",
    slug: "volatility",
    definition: "A measure of risk associated with a casino game, indicating the frequency and size of payouts.",
    extendedExplanation: "High volatility games pay out larger wins less frequently; low volatility games offer smaller, more frequent payouts."
  },
  {
    term: "Volatility Index",
    slug: "volatility-index",
    definition: "A rating showing a game's risk profile.",
    extendedExplanation: "Guides players in selecting games aligned with risk preference."
  },
  {
    term: "Wagering Requirements",
    slug: "wagering-requirements",
    definition: "Rules specifying how many times bonus funds must be bet before withdrawal.",
    extendedExplanation: "Prevents abuse of bonuses and ensures fair play."
  },
  {
    term: "Welcome Bonus",
    slug: "welcome-bonus",
    definition: "A promotional incentive offered by crypto casinos to attract new players, typically in the form of free spins, deposit matches, or bonus tokens.",
    extendedExplanation: "Bonuses may require a minimum deposit, have wagering requirements, or include time limits. They are designed to encourage new users to explore the casino."
  },
  {
    term: "Yield Betting",
    slug: "yield-betting",
    definition: "Wagering integrated with DeFi mechanisms to generate passive returns.",
    extendedExplanation: "Players earn interest or rewards while placing bets."
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
