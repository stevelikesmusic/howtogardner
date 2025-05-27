import Link from 'next/link';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from '@/components/ui/card';
import { NewsletterSignup } from '@/components/newsletter-signup';
import { getAllPosts } from '@/lib/blog';

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
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <Card
                key={post.slug}
                className="group border-slate-200 hover:shadow-lg transition-shadow justify-between"
              >
                <CardHeader>
                  <CardTitle className="text-lg group-hover:text-green-600 transition-colors">
                    {post.title}
                  </CardTitle>
                  <CardDescription>
                    {new Date(post.date).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric',
                    })}
                  </CardDescription>
                </CardHeader>
                <CardContent>{post.excerpt}</CardContent>
                <CardFooter className="pt-0">
                  <Link
                    href={`/blog/${post.slug}`}
                    className="text-green-600 hover:text-green-700 font-medium"
                  >
                    Read more →
                  </Link>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="bg-slate-50 rounded-lg p-8 text-center">
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
