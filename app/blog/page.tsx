import { NewsletterSignup } from '@/components/newsletter-signup';
import { getAllPosts } from '@/lib/blog';
import { ArticleSummaryCard } from '@/components/ArticleSummaryCard';

export default async function BlogPage() {
  const blogPosts = await getAllPosts();

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mx-auto max-w-6xl">
        {/* Hero Section */}
        <div className="mb-16 text-center">
          <h1 className="mb-6 text-4xl font-bold text-slate-900 lg:text-5xl">
            Engineering Leadership Blog
          </h1>
          <p className="mx-auto max-w-2xl text-xl text-slate-600">
            Insights on technology leadership, software architecture, team
            building, and engineering best practices for growing companies.
          </p>
        </div>

        {/* All Posts */}
        <div className="mb-16">
          <h2 className="mb-6 text-2xl font-bold text-slate-900">
            All Articles
          </h2>
          <div className="grid gap-8 md:grid-cols-2">
            {blogPosts.map((post) => (
              <ArticleSummaryCard
                key={post.slug}
                date={post.date}
                excerpt={post.excerpt}
                slug={post.slug}
                title={post.title}
              />
            ))}
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="rounded-lg bg-gradient-to-br from-slate-200 to-slate-100 p-8 text-center">
          <h2 className="mb-4 text-2xl font-bold text-slate-900">
            Never Miss an Update
          </h2>
          <p className="mx-auto mb-6 max-w-2xl text-slate-600">
            Get the latest articles on technology leadership and engineering
            best practices delivered straight to your inbox.
          </p>
          <NewsletterSignup />
        </div>
      </div>
    </div>
  );
}
