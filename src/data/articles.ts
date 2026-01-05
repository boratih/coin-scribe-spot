// No articles - all content moved to crypto casino guides
// This file is kept for backwards compatibility

export interface Article {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  date: string;
  image: string;
  readTime: string;
  author: string;
}

// All articles have been migrated to the guides format
export const articles: Article[] = [];
