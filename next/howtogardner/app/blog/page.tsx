import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { NewsletterSignup } from "@/components/newsletter-signup";
import { getAllPosts } from "@/lib/blog";

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
                className="border-slate-200 hover:shadow-lg transition-shadow"
              >
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="outline">{post.tags[0]}</Badge>
                    <span className="text-sm text-slate-500">{post.readTime}</span>
                  </div>
                  <CardTitle className="text-lg hover:text-green-600 transition-colors">
                    <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                  </CardTitle>
                  <CardDescription>{post.excerpt}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-slate-500">{post.date}</span>
                    <Link
                      href={`/blog/${post.slug}`}
                      className="text-green-600 hover:text-green-700 font-medium text-sm"
                    >
                      Read more →
                    </Link>
                  </div>
                </CardContent>
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
