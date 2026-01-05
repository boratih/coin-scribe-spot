// Generate URL-friendly slug from article title
export function generateSlug(title: string): string {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '') // Remove special characters
    .replace(/\s+/g, '-') // Replace spaces with hyphens
    .replace(/-+/g, '-') // Replace multiple hyphens with single
    .replace(/^-|-$/g, ''); // Remove leading/trailing hyphens
}

// Article slug mapping for SEO-friendly URLs (Crypto Casino only)
export const articleSlugs: Record<string, string> = {
  "2": "top-5-safest-crypto-casino-no-kyc",
  "5": "blockchain-gaming-nft-casinos",
  "8": "best-crypto-slot-games-that-pay",
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
