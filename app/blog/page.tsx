import { NewsletterSignup } from '@/components/newsletter-signup';
import { getAllPosts } from '@/lib/blog';
import { ArticleSummaryCard } from '@/components/ArticleSummaryCard';

export default async function BlogPage() {
  const blogPosts = await getAllPosts();

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-6xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
            Engineering Leadership Blog
          </h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Insights on technology leadership, software architecture, team building, and
            engineering best practices for growing companies.
          </p>
        </div>

        {/* All Posts */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">All Articles</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {blogPosts.map((post) => (
              <ArticleSummaryCard
                key={post.slug}
                slug={post.slug}
                title={post.title}
                excerpt={post.excerpt}
                date={post.date}
              />
            ))}
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="bg-gradient-to-br from-slate-200 to-slate-100 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Never Miss an Update</h2>
          <p className="text-slate-600 mb-6 max-w-2xl mx-auto">
            Get the latest articles on technology leadership and engineering best
            practices delivered straight to your inbox.
          </p>
          <NewsletterSignup />
        </div>
      </div>
    </div>
  );
}
