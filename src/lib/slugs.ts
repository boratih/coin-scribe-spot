// Generate URL-friendly slug from article title
export function generateSlug(title: string): string {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '') // Remove special characters
    .replace(/\s+/g, '-') // Replace spaces with hyphens
    .replace(/-+/g, '-') // Replace multiple hyphens with single
    .replace(/^-|-$/g, ''); // Remove leading/trailing hyphens
}

// Article slug mapping for SEO-friendly URLs
export const articleSlugs: Record<string, string> = {
  "1": "future-of-decentralized-finance-2025",
  "2": "top-5-safest-crypto-casino-no-kyc",
  "3": "mastering-perpetual-trading-signals",
  "4": "bitcoin-etf-approval-market-impact",
  "5": "blockchain-gaming-nft-casinos",
  "6": "advanced-technical-analysis-crypto-traders",
  "7": "altcoin-season-2025-hidden-gems",
  "8": "best-crypto-slot-games-that-pay",
  "9": "leverage-trading-perpetual-dex-strategies",
  "10": "defi-yield-farming-strategies-2025",
  "11": "liquidity-mining-beginners-guide",
  "12": "layer-2-solutions-ethereum-scaling",
  "13": "gamefi-gaming-meets-finance",
  "14": "risk-management-crypto-trading",
  "15": "understanding-apy-defi-maximizing-returns",
  "16": "top-5-crypto-casino-bonuses-worth-it",
};

// Reverse lookup: slug to article ID
export const slugToId: Record<string, string> = Object.entries(articleSlugs).reduce(
  (acc, [id, slug]) => ({ ...acc, [slug]: id }),
  {}
);

// Get article ID from slug
export function getArticleIdFromSlug(slug: string): string | undefined {
  return slugToId[slug];
}

// Get slug from article ID
export function getSlugFromArticleId(id: string): string {
  return articleSlugs[id] || id;
}
