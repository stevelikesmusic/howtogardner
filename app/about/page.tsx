import Image from 'next/image';
import Story from './story.mdx';

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mx-auto max-w-4xl">
        {/* Hero Section with Image */}
        <div className="mb-16 flex flex-col gap-12 lg:flex-row">
          <div className="lg:w-1/3">
            <div className="relative">
              <Image
                alt="Steve Gardner - Professional headshot"
                className="w-full rounded-lg object-cover md:w-100"
                height={400}
                src="images/SteveHeadshot.jpeg"
                width={400}
              />
            </div>
          </div>

          <div className="prose prose-lg prose-slate lg:w-2/3">
            <h1 className="mb-6">Hi, I’m Steve 👋</h1>
            <p>
              I’m a technology leader with a passion for developing
              high-performing teams and innovative software products. With years
              of experience in high profile tech companies, and success in high
              impact roles, I specialize in product development, engineer
              mentoring, and technical leadership. I do this with the
              understanding that true leadership is service. I also provide
              fractional engineering to businesses seeking to leverage
              technology effectively.
            </p>
          </div>
        </div>
        <article className="prose prose-lg prose-slate mx-auto mb-16 max-w-prose">
          <Story />
        </article>
      </div>
    </div>
  );
}
