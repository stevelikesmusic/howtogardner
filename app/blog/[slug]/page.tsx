import Link from "next/link";
import { ArrowLeft, Calendar, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { NewsletterSignup } from "@/components/newsletter-signup";
import { getPostBySlug, getAllPostSlugs } from "@/lib/blog";
import { notFound } from "next/navigation";

// Add generateStaticParams for static generation
export async function generateStaticParams() {
  const slugs = await getAllPostSlugs();
  return slugs.map((slug) => ({
    slug: slug,
  }));
}

// Update the component to be async and load data dynamically
export default async function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = await getPostBySlug(params.slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        {/* Back Button */}
        <div className="mb-8">
          <Button variant="ghost" asChild>
            <Link href="/blog">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Blog
            </Link>
          </Button>
        </div>

        {/* Article Header */}
        <header className="mb-12">
          <div className="mb-4">
            <Badge variant="secondary">{post.tags[0]}</Badge>
          </div>

          <h1 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
            {post.title}
          </h1>

          <p className="text-xl text-slate-600 mb-8">{post.excerpt}</p>

          <div className="flex items-center gap-6 text-sm text-slate-500">
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              <span>
                {new Date(post.date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4" />
              <span>{post.readTime}</span>
            </div>
          </div>
        </header>

        <Separator className="mb-12" />

        {/* Article Content */}
        <article className="prose prose-slate max-w-none mb-16">
          <div
            dangerouslySetInnerHTML={{ __html: post.content }}
            className="space-y-6 text-slate-700 leading-relaxed"
          />
        </article>

        <Separator className="mb-12" />

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
