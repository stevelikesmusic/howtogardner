import fs from "node:fs/promises";
import path from "node:path";
import matter from "gray-matter";
import { remark } from "remark";
import remarkHtml from "remark-html";
import remarkGfm from "remark-gfm";

export type BlogPostMetadata = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  featured?: boolean;
  tags: string[];
};

export type BlogPost = BlogPostMetadata & {
  content: string;
};

const postsDirectory = path.join(process.cwd(), "public/blog-posts");

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
      const indexMdPath = path.join(postsDirectory, entry.name, "index.md");
      const indexMdxPath = path.join(postsDirectory, entry.name, "index.mdx");
      if ((await fileExists(indexMdPath)) || (await fileExists(indexMdxPath))) {
        slugs.push(entry.name);
      }
    }
    return slugs;
  } catch (error) {
    console.error("Error reading blog posts directory:", error);
    return [];
  }
}

// Get blog post data by slug
export async function getPostBySlug(slug: string): Promise<BlogPost> {
  try {
    const postDirectory = path.join(postsDirectory, slug);
    try {
      await fs.access(postDirectory);
    } catch {
      throw new Error(`Post directory not found: ${postDirectory}`);
    }
    const indexMdPath = path.join(postDirectory, "index.md");
    const indexMdxPath = path.join(postDirectory, "index.mdx");
    let filePath = indexMdPath;
    if (!(await fileExists(indexMdPath)) && (await fileExists(indexMdxPath))) {
      filePath = indexMdxPath;
    }
    if (!(await fileExists(filePath))) {
      throw new Error(`Post file not found: ${filePath}`);
    }
    const fileContents = await fs.readFile(filePath, "utf8");
    const { data, content } = matter(fileContents);
    // Process markdown content with image path resolution
    const processedContent = await remark()
      .use(remarkGfm)
      .use(remarkHtml, { sanitize: false })
      .process(content);
    let contentHtml = processedContent.toString();
    // Update relative image paths to be absolute from the blog post folder
    contentHtml = contentHtml.replace(/src="(?!http|\/)/g, `src="/blog-posts/${slug}/`);
    return {
      slug,
      title: data.title,
      excerpt: data?.excerpt || "",
      content: contentHtml,
      date: data.date,
      readTime: data.readTime || calculateReadTime(content),
      featured: data.featured || false,
      tags: data.tags || [],
    };
  } catch (error) {
    throw new Error(`Failed to load post: ${slug}, error: ${error}`);
  }
}

// Get all blog posts metadata
export async function getAllPosts(): Promise<BlogPostMetadata[]> {
  const slugs = await getAllPostSlugs();
  const posts: BlogPostMetadata[] = [];
  for (const slug of slugs) {
    const postDirectory = path.join(postsDirectory, slug);
    const indexMdPath = path.join(postDirectory, "index.md");
    const indexMdxPath = path.join(postDirectory, "index.mdx");
    let filePath = indexMdPath;
    if (!(await fileExists(indexMdPath)) && (await fileExists(indexMdxPath))) {
      filePath = indexMdxPath;
    }
    const fileContents = await fs.readFile(filePath, "utf8");
    const { data, content } = matter(fileContents);
    posts.push({
      slug,
      title: data.title,
      excerpt: data.excerpt || "",
      date: data.date,
      readTime: data.readTime || calculateReadTime(content),
      featured: data.featured || false,
      tags: data.tags || [],
    });
  }
  posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  return posts;
}

// Calculate read time
function calculateReadTime(content: string): string {
  const wordsPerMinute = 200;
  const words = content.trim().split(/\s+/).length;
  const minutes = Math.ceil(words / wordsPerMinute);
  return `${minutes} min read`;
}
