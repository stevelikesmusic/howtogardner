import Link from 'next/link';
import { ArrowRight, CheckCircle, Users, Zap, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { NewsletterSignup } from '@/components/newsletter-signup';
import { getAllPosts } from '@/lib/blog';
import { COMMON_CTA } from '@/lib/constants';
import { ArticleSummaryCard } from '@/components/ArticleSummaryCard';

export default async function HomePage() {
  const allPosts = await getAllPosts();
  const latestPosts = allPosts.slice(0, 3);

  return (
    <div className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-50 to-slate-100 py-20 lg:py-32">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="mb-6 text-4xl font-bold text-slate-900 lg:text-6xl">
              Engineering Leadership for Growing Companies
            </h1>
            <p className="mx-auto mb-8 max-w-2xl text-xl text-slate-600">
              Fractional CTO services and software consulting to scale your
              technology, build high-performing teams, and accelerate your
              business growth.
            </p>
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <Button asChild size="lg">
                <Link href="/contact">
                  {COMMON_CTA} <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold text-slate-900 lg:text-4xl">
              Comprehensive Technology Leadership
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-slate-600">
              From strategic planning to hands-on implementation, I help
              companies build scalable technology solutions and high-performing
              engineering teams.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            <Card className="border-slate-200">
              <CardHeader>
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-green-100">
                  <Zap className="h-6 w-6 text-green-600" />
                </div>
                <CardTitle>Strategic Technology Planning</CardTitle>
                <CardDescription>
                  Develop comprehensive technology roadmaps aligned with
                  business objectives
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-slate-600">
                  <li className="flex items-center">
                    <CheckCircle className="mr-2 h-4 w-4 text-green-500" />
                    Architecture design and review
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="mr-2 h-4 w-4 text-green-500" />
                    Technology stack evaluation
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="mr-2 h-4 w-4 text-green-500" />
                    Scalability planning
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-slate-200">
              <CardHeader>
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-green-100">
                  <Users className="h-6 w-6 text-green-600" />
                </div>
                <CardTitle>Team Building & Leadership</CardTitle>
                <CardDescription>
                  Build and mentor high-performing engineering teams
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-slate-600">
                  <li className="flex items-center">
                    <CheckCircle className="mr-2 h-4 w-4 text-green-500" />
                    Hiring and onboarding
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="mr-2 h-4 w-4 text-green-500" />
                    Engineering culture
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="mr-2 h-4 w-4 text-green-500" />
                    Performance management
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-slate-200">
              <CardHeader>
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-green-100">
                  <Shield className="h-6 w-6 text-green-600" />
                </div>
                <CardTitle>Risk Management & Security</CardTitle>
                <CardDescription>
                  Ensure robust security practices and risk mitigation
                  strategies
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-slate-600">
                  <li className="flex items-center">
                    <CheckCircle className="mr-2 h-4 w-4 text-green-500" />
                    Security audits
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="mr-2 h-4 w-4 text-green-500" />
                    Compliance planning
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="mr-2 h-4 w-4 text-green-500" />
                    Disaster recovery
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Blog Preview Section */}
      <section className="bg-slate-50 py-20">
        <div className="container mx-auto px-4">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold text-slate-900 lg:text-4xl">
              Latest Insights
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-slate-600">
              Stay updated with the latest trends in technology leadership,
              software architecture, and engineering best practices.
            </p>
          </div>

          <div className="mb-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {latestPosts.map((post) => (
              <ArticleSummaryCard
                key={post.slug}
                date={post.date}
                excerpt={post.excerpt}
                slug={post.slug}
                title={post.title}
              />
            ))}
          </div>

          <div className="text-center">
            <Button asChild variant="outline">
              <Link href="/blog">
                View All Articles <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="mb-4 text-3xl font-bold text-slate-900 lg:text-4xl">
              Stay Updated
            </h2>
            <p className="mb-8 text-lg text-slate-600">
              Get the latest insights on technology leadership, software
              architecture, and engineering best practices delivered to your
              inbox.
            </p>
            <NewsletterSignup />
          </div>
        </div>
      </section>
    </div>
  );
}
