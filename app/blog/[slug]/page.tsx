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
  const { default: Article, metadata } = await import(
    `@/articles/${slug}/index.mdx`
  );

  if (!Article || !metadata) {
    notFound();
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mx-auto max-w-4xl">
        {/* Article Header */}
        <header className="mb-6">
          <div className="mb-4">
            <Badge variant="secondary">{metadata.tags?.[0]}</Badge>
          </div>

          <h1 className="mb-6 text-4xl font-bold text-slate-900 lg:text-5xl">
            {metadata.title}
          </h1>

          <p className="mb-8 text-xl text-slate-500">{metadata.excerpt}</p>

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
        <article className="prose prose-lg prose-slate mx-auto mb-16 max-w-prose">
          <Article />
        </article>

        {/* Newsletter Signup */}
        <div className="mb-12 rounded-lg bg-gradient-to-br from-slate-50 to-slate-100 p-8 text-center">
          <h2 className="mb-4 text-2xl font-bold text-slate-900">
            Enjoyed this article?
          </h2>
          <p className="mb-6 text-slate-600">
            Subscribe to get more insights on technology leadership and
            engineering best practices.
          </p>
          <NewsletterSignup />
        </div>
      </div>
    </div>
  );
}
