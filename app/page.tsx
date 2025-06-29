import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { getAllPosts } from '@/lib/blog';
import { ServiceCard } from '@/components/ServiceCard';
import { GetStartedStep } from '@/components/GetStartedStep';

export default async function HomePage() {
  const allPosts = await getAllPosts();
  const latestPost = allPosts[0];

  return (
    <div className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="bg-brand-gradient pt-32 pb-28 text-white">
        <div className="container mx-auto px-5">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="mb-4 text-5xl leading-tight font-bold lg:text-6xl">
              Engineering Leadership
              <br />
              That Adapts
            </h1>
            <p className="mx-auto mb-12 max-w-2xl text-lg opacity-80">
              I help early-stage companies build engineering culture that
              scales, reduce time-to-production, and grow remote teams that
              consistently ship. Whatever role your team needs most.
            </p>
            <Link
              className="inline-block rounded-full bg-white px-8 py-4 text-lg font-semibold text-indigo-600 transition-all hover:-translate-y-1 hover:shadow-2xl"
              href="/contact"
            >
              Start With a Free Assessment
            </Link>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-gray-50 py-24" id="services">
        <div className="container mx-auto px-5">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-4xl font-bold text-slate-800 lg:text-5xl">
              How I Help Engineering Teams Thrive
            </h2>
            <p className="mx-auto max-w-2xl text-xl text-gray-600">
              Every growing company faces similar challenges. I adapt my
              approach to what your team needs most right now.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-1 lg:grid-cols-3">
            <ServiceCard
              description="Transform your engineering organization from a group of individual contributors into a cohesive team that ships with confidence."
              features={[
                'Clear engineering practices and standards',
                'Effective code review and collaboration processes',
                'Sustainable on-call and incident response',
                'Remote-first culture that actually works',
              ]}
              icon="🚀"
              title="Building Engineering Culture That Scales"
            />
            <ServiceCard
              description="Ship faster with fewer bugs and outages through better technical planning, architecture decisions, and risk management."
              features={[
                'Streamlined deployment and testing processes',
                'Technical debt management strategies',
                'Architecture that supports growth',
                'Proactive monitoring and alerting',
              ]}
              icon="🎯"
              title="Reducing Time-to-Production & Technical Risk"
            />
            <ServiceCard
              description="Build and scale distributed engineering teams with the hiring, onboarding, and management practices that create lasting success."
              features={[
                'Effective technical hiring and interviewing',
                'Remote onboarding that actually works',
                'Engineering leadership development',
                'Cross-functional collaboration systems',
              ]}
              icon="🌐"
              title="Growing Remote Teams That Ship"
            />
          </div>
        </div>
      </section>

      {/* Approach Section */}
      <section className="bg-white py-24" id="approach">
        <div className="container mx-auto px-5">
          <div className="grid items-center gap-16 lg:grid-cols-2">
            <div>
              <h2 className="mb-6 text-4xl font-bold text-slate-800 lg:text-5xl">
                The Service-Oriented Leadership Approach
              </h2>
              <p className="mb-6 text-lg text-gray-600">
                Traditional consulting often fails because it&apos;s
                prescriptive—experts telling teams what to do without
                understanding their specific context and constraints.
              </p>
              <p className="mb-8 text-lg text-gray-600">
                My approach is different. I start by deeply understanding your
                team&apos;s challenges, then adapt to whatever role helps most:
                technical engineer, project manager, or engineering leader.
              </p>
              <ul className="space-y-4">
                <li className="border-b border-gray-200 pb-4 font-medium text-slate-700">
                  Deep preparation before every engagement
                </li>
                <li className="border-b border-gray-200 pb-4 font-medium text-slate-700">
                  Lead with solutions, not problems
                </li>
                <li className="border-b border-gray-200 pb-4 font-medium text-slate-700">
                  Take on whatever role helps most
                </li>
                <li className="border-b border-gray-200 pb-4 font-medium text-slate-700">
                  Build systems for reliable follow-through
                </li>
                <li className="border-b border-gray-200 pb-4 font-medium text-slate-700">
                  Make team success visible and sustainable
                </li>
              </ul>
            </div>
            <div className="relative">
              <div className="bg-brand-gradient rounded-3xl p-12 text-white">
                <div className="absolute top-4 left-8 text-6xl opacity-30">
                  &ldquo;
                </div>
                <blockquote className="relative z-10 mb-4 text-xl leading-relaxed italic">
                  The most effective way to build leadership influence is to be
                  of genuine service to your colleagues. When you consistently
                  make people&apos;s jobs easier and care about their success,
                  they choose to work with you on complex problems.
                </blockquote>
                <cite className="text-sm opacity-80">
                  From &ldquo;The Service Oriented Leader&rdquo;
                </cite>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Getting Started Section */}
      <section className="bg-gray-50 py-24">
        <div className="container mx-auto px-5">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-4xl font-bold text-slate-800 lg:text-5xl">
              How We Get Started
            </h2>
            <p className="mx-auto max-w-2xl text-xl text-gray-600">
              Every engagement begins with understanding your specific
              situation—no assumptions, no generic solutions.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-1 lg:grid-cols-3">
            <GetStartedStep
              description="We'll spend a week understanding your current engineering practices, team dynamics, and biggest challenges. No cost, no pressure."
              stepNumber={1}
              title="Free Technical Assessment"
            />
            <GetStartedStep
              description="If you want to start with a specific project—hiring plan, technical roadmap, culture assessment—we can deliver concrete value in 2-4 weeks."
              stepNumber={2}
              title="Strategy Sprint (Optional)"
            />
            <GetStartedStep
              description="Ongoing strategic guidance and hands-on leadership support. Regular check-ins, architectural reviews, and team development."
              stepNumber={3}
              title="Fractional CTO Partnership"
            />
          </div>
        </div>
      </section>

      {/* Latest Articles Section */}
      {/* <section className="bg-gray-50 py-24">
        <div className="container mx-auto px-5">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-4xl font-bold text-slate-800 lg:text-5xl">
              Latest Insights
            </h2>
            <p className="mx-auto max-w-2xl text-xl text-gray-600">
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
            <Link
              className="inline-flex items-center rounded-full border-2 border-slate-800 px-8 py-4 font-semibold text-slate-800 transition-all hover:bg-slate-800 hover:text-white"
              href="/blog"
            >
              View All Articles
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section> */}

      {/* Featured Article */}
      <section className="bg-white py-24" id="writing">
        <div className="container mx-auto px-5">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-4xl font-bold text-slate-800 lg:text-5xl">
              Featured Writing
            </h2>
            <p className="mx-auto max-w-2xl text-xl text-gray-600">
              Insights from over ten years in the engineering trenches from
              startups to big-tech and beyond.
            </p>
          </div>
          <div className="mx-auto max-w-4xl">
            <div className="bg-brand-gradient rounded-3xl p-12 text-center text-white">
              <h3 className="mb-4 text-3xl font-bold">
                The Service Oriented Leader
              </h3>
              <p className="mb-8 text-lg opacity-90">
                How a service-first approach prevented a three-year stalled
                migration from becoming a business disaster during
                Netflix&apos;s biggest live streaming event.
              </p>
              {latestPost && (
                <div className="flex flex-col justify-center gap-4 sm:flex-row">
                  <Link
                    className="inline-block rounded-full bg-white px-8 py-4 font-semibold text-indigo-600 transition-all hover:-translate-y-1"
                    href={`/blog/${latestPost.slug}`}
                  >
                    Read the Full Story
                  </Link>
                  <Link
                    className="inline-flex items-center justify-center rounded-full border-2 border-white px-8 py-4 font-semibold text-white transition-all hover:-translate-y-1"
                    href="/blog"
                  >
                    View All Articles
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
