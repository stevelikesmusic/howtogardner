import Image from 'next/image';
import Story from './story.mdx';

export default function AboutPage() {
  return (
    <section className="container mx-auto px-4 py-12">
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
              I’m an engineering leader who believes the most effective way to
              build influence is to be of genuine service to your colleagues.
              Over the past decade at companies like Netflix and Zapier, I’ve
              learned that complex engineering problems aren’t just
              technical—they require empathy, adaptability, and the willingness
              to take on whatever role helps most. As a fractional CTO, I help
              growing companies ship faster with fewer outages by deeply
              understanding their challenges and working alongside teams to
              solve them, rather than mandating generic solutions.
            </p>
          </div>
        </div>
        <article className="prose prose-lg prose-slate mx-auto mb-16 max-w-prose">
          <Story />
        </article>
      </div>
    </section>
  );
}
