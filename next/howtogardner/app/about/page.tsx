import Image from "next/image";
import Link from "next/link";
import { Mail, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        {/* Hero Section with Image */}
        <div className="flex flex-col lg:flex-row gap-12 mb-16">
          <div className="lg:w-1/3">
            <div className="relative">
              <Image
                src="images/SteveHeadshot.jpeg?height=400&width=400"
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

        {/* Main Content */}
        <div className="prose prose-slate max-w-none">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">My Story</h2>

          <p className="text-slate-700 leading-relaxed mb-6">
            I got my start working the keys—of a saxophone. That’s right, I originally
            went to school for music. After graduating with a master’s degree, I moved to
            Los Angeles to make it as a rich and famous saxophone player, as we musicians
            do. There, I played in a band, shot a music video, and eventually met my best
            friend, whom I married in 2014. Getting married made me seriously consider my
            life. Was there a career more conducive to raising a family and living abroad
            than roving musicianship? Of course there was.
          </p>

          <p className="text-slate-700 leading-relaxed mb-6">
            After doing some research, I found an article by a former DJ from San Diego
            who taught himself to code and was happily living as a creative software
            engineer. I thought, “I can do that!” I began teaching myself through
            tutorials, mini-courses, and books from the library. Along the way, I’d build
            small projects and share them on my website. After 14 months of learning, I
            landed my first job as a software engineer at Blackboard. I am forever
            grateful to my first manager, who took a chance on me.
          </p>

          <p className="text-slate-700 leading-relaxed mb-8">
            I was a junior engineer with no formal experience, but I had the drive and
            passion to learn. I worked hard, and my manager’s leadership played a great
            role in my success. He demonstrated more than software development. With him,
            I learned to work on a team, and how to communicate with a blend of humility
            and confidence, how to take feedback and iterate on my work. I also learned
            how to be a leader, even as a junior engineer. I led stand-ups and sprint
            planning meetings. I took the initiative to help my colleagues with their
            work. I was a sponge, soaking up everything I could. I learned how to be a
            good engineer, and I learned how to be a good teammate.
          </p>

          <h3 className="text-2xl font-semibold text-slate-900 mb-4">Growing Skills</h3>

          <p className="text-slate-700 leading-relaxed mb-6">
            Over the next several years, I developed deep skills, both technically and
            relationally. I worked at a few different companies, each time taking on more
            responsibility and producing more robust outputs. I developed expertise across
            a variety of technologies and programming languages. I built upon the
            foundation of my experience as a full-stack engineer at Blackboard.
          </p>

          <p className="text-slate-700 leading-relaxed mb-6">
            As I supported Kroger’s entry into eCommerce, I dug deeper into Java. At
            Learning Without Tears, as one of the first 3 software engineers at the
            company, I helped launch a 0 to 1 product and build an engineering team. I
            also had my first entry into engineering management, leading a team of 3
            contract engineers. Eventually, I had the opportunity to work at a company I
            had been following since I began my tech journey, Zapier. Zapier was a company
            I’d long admired for its product and culture. I was thrilled to join the team
            as a Frontend Engineer. There, I was able to work with excellent engineers,
            and I learned a lot from them. I was able to take my skills to the next level
            and contribute to a product that I truly believed in.
          </p>

          <h3 className="text-2xl font-semibold text-slate-900 mb-4">
            Working Around the World
          </h3>

          <p className="text-slate-700 leading-relaxed mb-6">
            Zapier was my first remote-first company. This changed my life in many ways. I
            learned to work remotely, not just from the United States but from all over
            the world. Within a month of starting at Zapier, my wife and I packed up the
            house and our 1 and 3 year olds, and traveled to Santa Theresa, Costa Rica as
            digital nomads.
          </p>

          <p className="text-slate-700 leading-relaxed mb-6">
            Working remotely, I began to think differently about building relationships in
            the virtual office. My work as a musician, where I actively listened to blend
            the sound of my saxophone with many other instruments, served me well. I
            realized that consistent collaboration in remote tech requires deliberately
            listening to and blending multiple perspectives in product building.
          </p>

          <p className="text-slate-700 leading-relaxed mb-4">
            At Zapier, I built out the new UI for Zapier’s Developer Platform, allowing
            companies to more easily integrate their products with Zapier. I made a point
            to constantly seek my colleagues’ contexts. It was quite the task: During this
            time, Zapier grew from 100 employees to over 500 people. I discovered how to
            scale teams, processes, and products.
          </p>

          <p className="text-slate-700 leading-relaxed mb-4">
            During this time, my family and I slow-traveled through:
          </p>

          <ul className="list-disc list-inside text-slate-700 mb-8 space-y-1">
            <li>Costa Rica (Santa Teresa, Trinidad de Dota, Escazu)</li>
            <li>Toronto, Canada</li>
            <li>New Zealand (Wellington area)</li>
            <li>Melbourne, Australia</li>
            <li>Indio, California</li>
            <li>US Virgin Islands (Water Island, St. Thomas)</li>
          </ul>

          <h3 className="text-2xl font-semibold text-slate-900 mb-4">Growing Food Too</h3>

          <p className="text-slate-700 leading-relaxed mb-6">
            In 2022 we moved back to the US for two big changes. I began working at
            Netflix as a Senior Software Engineer and we bought a house situated on 3
            barren acres outside of Atlanta. Over time, we developed our rocky soil into a
            lush green oasis using permaculture techniques. At the same time, my 3 years
            at Netflix were a great experience. I moved across 3 different teams—from
            enterprise software, to Privacy Engineering, and finally over to the streaming
            side. There I tackled tech-debt across the company while supporting the Edge
            APIs that powered 70% of Netflix’s traffic. I learned a lot about building
            scalable distributed systems, working with a multitude of diverse teams, and
            navigating the complexities of a large organization. I also had the
            opportunity to work with some of the most stunning colleagues in the industry.
          </p>

          <p className="text-slate-700 leading-relaxed mb-8">
            On the farm, my wife Adina led the design and implementation of our
            permaculture farm. We planted over 40 fruit trees, berry bushes, and nut
            trees. We grew a variety of vegetables, herbs, and wild flowers. We also kept
            a small flock of laying hens and four Nigerian dwarf goats. I tried my hand at
            a new skill—carpentry! Using the blueprint out of a book, I built a mobile
            chicken coop that I used to free range our hens. We became knowledgable about
            growing food, permaculture, and soil development. Adina transformed our solid
            Georgia clay into rich, loamy soil.
          </p>

          <h2 className="text-3xl font-bold text-slate-900 mb-6">How I Work</h2>

          <h3 className="text-2xl font-semibold text-slate-900 mb-4">Product Thinking</h3>

          <p className="text-slate-700 leading-relaxed mb-6">
            I’m a full-stack engineer who focuses on the product as a whole. Although I
            started out in UI, I don’t prefer any part of the stack over the other. For
            me, effective engineering means developing the end-to-end context of the
            product, and seating that in an understanding of trends and data. This type of
            broad context enables evidence-based decision-making. As I gain context, I
            pursue the conversations and data necessary to highlight product areas
            amenable to improvement. I ask questions, learn, and then build.
          </p>

          <p className="text-slate-700 leading-relaxed mb-6">
            Often, I aggregate all the conversations into an easily accessible document,
            then develop a prototype solution that colleagues can test and provide
            feedback on. It’s all part of the implementation process. Bottom line—I’m a
            life-long learner and very curious. I bring this curiosity into my product
            thinking. I love to learn about the business, the customers, and the
            technology. Understanding the “why” behind a product is just as important as
            the “how”.
          </p>

          <h3 className="text-2xl font-semibold text-slate-900 mb-4">Remote Work</h3>

          <p className="text-slate-700 leading-relaxed mb-6">
            I started working remotely off and on in 2015. Since 2018, I’ve been fully
            remote. I love the flexibility and freedom that remote work provides. I
            believe that remote work is the future of work, and I’m passionate about
            helping others succeed in this environment. I have experience working with
            teams across different time zones and cultures, and I understand the
            challenges and opportunities that come with remote work.
          </p>

          <p className="text-slate-700 leading-relaxed mb-4">
            I also believe that a lot of the patterns that make a remote team successful
            can be applied to any team. Some of the strategies I’ve adopted include:
          </p>

          <ul className="list-disc list-inside text-slate-700 mb-6 space-y-2">
            <li>
              <strong>Asynchronous Communication</strong>: I prioritize async
              communication to ensure that everyone has the opportunity to contribute,
              regardless of their time zone. I never assume that someones working hours
              are the same as mine.
            </li>
            <li>
              <strong>Documentation</strong>: I believe that documentation is key to
              successful remote work. I document everything. This ensures that everyone is
              on the same page and can refer back to important information when needed.
              For me personally, it suits my learning style. I learn best when I write
              things down. This helps me to gather feedback and broadly share context.
            </li>
            <li>
              <strong>Transparency</strong>: I believe in being transparent about my work
              and the work of my team. This helps to build trust and accountability, and
              ensures that everyone is aligned on our goals and priorities. Building trust
              is crucial to
            </li>
          </ul>

          <p className="text-slate-700 leading-relaxed mb-6">
            All of this is to build trust. I believe that trust is the foundation of any
            successful team, and I work hard to build and maintain that trust with my
            colleagues.
          </p>

          <h3 className="text-2xl font-semibold text-slate-900 mb-4">Mentoring</h3>

          <p className="text-slate-700 leading-relaxed mb-8">
            I’ve been passionate about mentoring and education since I was a musician
            teaching saxophone lessons. I love helping others grow and develop their
            skills. I’ve had the opportunity to mentor many developers, both formally and
            informally, and I find it incredibly rewarding. I find opportunities to mentor
            in every role I’ve had. This includes 1:1 mentoring as well as group
            presentations. I love to share my knowledge and experience with others, and
            I’m always looking for ways to help others grow. A couple friends started a
            non-profit called The Collab Lab, that I helped with in its first few years.
            While it existed, we coached cohorts of early career engineers coming from
            non-traditional backgrounds in working on a remote team.
          </p>

          <h2 className="text-3xl font-bold text-slate-900 mb-6">
            Let’s Work Together 🤝
          </h2>

          <p className="text-slate-700 leading-relaxed mb-8">
            I’m always interested in connecting with fellow technology professionals,
            potential clients, or anyone passionate about leveraging technology to solve
            meaningful problems.
          </p>

          <p className="text-slate-700 leading-relaxed mb-8">
            Feel free to{" "}
            <Link
              href="mailto:steve@howtogardner.com"
              className="text-green-600 hover:text-green-700 underline"
            >
              contact me
            </Link>{" "}
            to discuss potential collaborations, mentoring opportunities, or just to chat
            about building.
          </p>

          <p className="text-slate-700 leading-relaxed mb-8">
            For more details about my professional background, you can find me on{" "}
            <Link
              href="https://linkedin.com/in/gardnersj"
              className="text-green-600 hover:text-green-700 underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </Link>
            .
          </p>

          {/* Contact Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mt-12">
            <Button asChild>
              <Link href="mailto:steve@howtogardner.com">
                <Mail className="mr-2 h-4 w-4" />
                Send Email
              </Link>
            </Button>
            <Button variant="outline" asChild>
              <Link
                href="https://linkedin.com/in/gardnersj"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="mr-2 h-4 w-4" />
                Connect on LinkedIn
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
