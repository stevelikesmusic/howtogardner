import { Calendar } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { NewsletterSignup } from '@/components/newsletter-signup';
import { getAllPostSlugs } from '@/lib/blog';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
  const slugs = await getAllPostSlugs();
  return slugs.map((slug) => ({
    slug: slug,
  }));
}

// Update the component to be async and load data dynamically
export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const { default: Article, metadata } = await import(`@/articles/${slug}/index.mdx`);

  if (!Article || !metadata) {
    notFound();
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        {/* Article Header */}
        <header className="mb-6">
          <div className="mb-4">
            <Badge variant="secondary">{metadata.tags?.[0]}</Badge>
          </div>

          <h1 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
            {metadata.title}
          </h1>

          <p className="text-xl text-slate-600 mb-8">{metadata.excerpt}</p>

          <div className="flex items-center gap-6 text-sm text-slate-500">
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              <span>
                {new Date(metadata.date).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </span>
            </div>
          </div>
        </header>

        <Separator className="mb-12" />

        {/* Article Content */}
        <article className="prose prose-lg max-w-prose mx-auto leading-relaxed tracking-normal text-gray-800 mb-16">
          <Article />
        </article>

        {/* Newsletter Signup */}
        <div className="bg-slate-50 rounded-lg p-8 text-center mb-12">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">
            Enjoyed this article?
          </h2>
          <p className="text-slate-600 mb-6">
            Subscribe to get more insights on technology leadership and engineering best
            practices.
          </p>
          <NewsletterSignup />
        </div>
      </div>
    </div>
  );
}
