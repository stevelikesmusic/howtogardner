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
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-50 to-slate-100 py-20 lg:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-6xl font-bold text-slate-900 mb-6">
              Engineering Leadership for Growing Companies
            </h1>
            <p className="text-xl text-slate-600 mb-8 max-w-2xl mx-auto">
              Fractional CTO services and software consulting to scale your technology,
              build high-performing teams, and accelerate your business growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
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
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
              Comprehensive Technology Leadership
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              From strategic planning to hands-on implementation, I help companies build
              scalable technology solutions and high-performing engineering teams.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-slate-200">
              <CardHeader>
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <Zap className="h-6 w-6 text-green-600" />
                </div>
                <CardTitle>Strategic Technology Planning</CardTitle>
                <CardDescription>
                  Develop comprehensive technology roadmaps aligned with business
                  objectives
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-slate-600">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Architecture design and review
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Technology stack evaluation
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Scalability planning
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-slate-200">
              <CardHeader>
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
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
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Hiring and onboarding
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Engineering culture
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Performance management
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-slate-200">
              <CardHeader>
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <Shield className="h-6 w-6 text-green-600" />
                </div>
                <CardTitle>Risk Management & Security</CardTitle>
                <CardDescription>
                  Ensure robust security practices and risk mitigation strategies
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-slate-600">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Security audits
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Compliance planning
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
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
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
              Latest Insights
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Stay updated with the latest trends in technology leadership, software
              architecture, and engineering best practices.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {latestPosts.map((post) => (
              <ArticleSummaryCard
                key={post.slug}
                slug={post.slug}
                title={post.title}
                excerpt={post.excerpt}
                date={post.date}
              />
            ))}
          </div>

          <div className="text-center">
            <Button variant="outline" asChild>
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
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
              Stay Updated
            </h2>
            <p className="text-lg text-slate-600 mb-8">
              Get the latest insights on technology leadership, software architecture, and
              engineering best practices delivered to your inbox.
            </p>
            <NewsletterSignup />
          </div>
        </div>
      </section>
    </div>
  );
}
