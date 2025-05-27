import fs from 'node:fs/promises';
import path from 'node:path';

export type BlogPostMetadata = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  featured?: boolean;
  tags: string[];
};

export type BlogPost = BlogPostMetadata & {
  content: string;
};

const postsDirectory = path.join(process.cwd(), 'articles');

// Helper to check if a file exists
async function fileExists(filePath: string): Promise<boolean> {
  try {
    await fs.access(filePath);
    return true;
  } catch {
    return false;
  }
}

// Get all blog post slugs (folder names)
export async function getAllPostSlugs(): Promise<string[]> {
  try {
    const entries = await fs.readdir(postsDirectory, { withFileTypes: true });
    const slugs: string[] = [];
    for (const entry of entries) {
      if (!entry.isDirectory()) continue;
      const indexMdxPath = path.join(postsDirectory, entry.name, 'index.mdx');
      if (await fileExists(indexMdxPath)) {
        slugs.push(entry.name);
      }
    }
    return slugs;
  } catch (error) {
    console.error('Error reading blog posts directory:', error);
    return [];
  }
}

// Get all blog posts metadata
export async function getAllPosts(): Promise<BlogPostMetadata[]> {
  const slugs = await getAllPostSlugs();
  const posts: BlogPostMetadata[] = [];
  for (const slug of slugs) {
    const { metadata } = await import(`@/articles/${slug}/index.mdx`);
    posts.push({
      slug,
      title: metadata.title,
      excerpt: metadata.excerpt || '',
      date: metadata.date,
      featured: metadata.featured || false,
      tags: metadata.tags || [],
    });
  }
  posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  return posts;
}

// Calculate read time
export function calculateReadTime(content: string): string {
  const wordsPerMinute = 200;
  const words = content.trim().split(/\s+/).length;
  const minutes = Math.ceil(words / wordsPerMinute);
  return `${minutes} min read`;
}
