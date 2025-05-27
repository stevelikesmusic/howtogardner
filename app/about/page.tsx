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
                className="rounded-lg object-cover w-full"
              />
            </div>
          </div>

          <div className="lg:w-2/3">
            <h1 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
              Hi, I’m Steve 👋
            </h1>
            <p className="text-lg text-slate-600 leading-relaxed">
              I’m a technology leader with a passion for developing high-performing teams
              and innovative software products. With years of experience in high profile
              tech companies, and success in high impact roles, I specialize in product
              development, engineer mentoring, and technical leadership. I do this with
              the understanding that true leadership is service. I also provide fractional
              engineering to businesses seeking to leverage technology effectively.
            </p>
          </div>
        </div>
        <Story />
      </div>
    </div>
  );
}
