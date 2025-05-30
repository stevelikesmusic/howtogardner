import Image from 'next/image';
import Story from './story.mdx';

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        {/* Hero Section with Image */}
        <div className="flex flex-col lg:flex-row gap-12 mb-16">
          <div className="lg:w-1/3">
            <div className="relative">
              <Image
                src="images/SteveHeadshot.jpeg"
                alt="Steve Gardner - Professional headshot"
                width={400}
                height={400}
                className="rounded-lg object-cover w-full md:w-100"
              />
            </div>
          </div>

          <div className="lg:w-2/3 prose prose-lg prose-slate">
            <h1 className="mb-6">Hi, I’m Steve 👋</h1>
            <p>
              I’m a technology leader with a passion for developing high-performing teams
              and innovative software products. With years of experience in high profile
              tech companies, and success in high impact roles, I specialize in product
              development, engineer mentoring, and technical leadership. I do this with
              the understanding that true leadership is service. I also provide fractional
              engineering to businesses seeking to leverage technology effectively.
            </p>
          </div>
        </div>
        <article className="prose prose-lg prose-slate max-w-prose mx-auto mb-16">
          <Story />
        </article>
      </div>
    </div>
  );
}
