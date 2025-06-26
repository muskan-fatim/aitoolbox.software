import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Link from 'next/link';

export default function Page() {
  return (
    <div className="bg-background text-foreground">
      <article className="mx-auto max-w-3xl px-4 py-12">
        <header className="mb-12 text-center">
          <h1 className="text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl">
            Never Run Out of Ideas with an AI Idea Generator
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            Every great creation starts with a single idea. But what happens
            when the well runs dry? Discover how an AI Idea Generator can become
            your ultimate brainstorming partner.
          </p>
        </header>

        <div className="space-y-12">
          <section>
            <h2 className="text-3xl font-bold tracking-tight text-foreground">
              The Agony of the Creative Block
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              Whether you&apos;re a writer, an entrepreneur, a marketer, or an
              artist, you&apos;ve faced it: the dreaded creative block. Staring at a
              blank canvas or an empty document can be paralyzing. An AI Idea
              Generator is designed specifically to shatter that block and get
              your creative juices flowing.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold tracking-tight text-foreground">
              Instant Inspiration on Demand
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              Our{' '}
              <Link
                href="/idea-generator"
                className="text-primary underline-offset-4 hover:underline"
              >
                AI Idea Generator
              </Link>{' '}
              is a simple yet powerful tool. Just give it a starting point—a
              keyword, a theme, an industry—and it will produce a list of
              creative and often unexpected ideas. It&apos;s the spark you need to
              ignite your next big project.
            </p>
            <div className="my-6 flex justify-center">
              <Button asChild size="lg">
                <Link href="/idea-generator">Generate Ideas Now</Link>
              </Button>
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-bold tracking-tight text-foreground">
              A Launchpad for All Your Creative Needs
            </h2>
            <Card className="my-6">
              <CardHeader>
                <CardTitle>What Can You Brainstorm?</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-outside space-y-3 pl-5 text-lg text-muted-foreground">
                  <li>
                    <strong className="text-foreground">Blog Topics:</strong>{' '}
                    Generate a month&apos;s worth of content ideas, then bring them to
                    life with our{' '}
                    <Link
                      href="/blog-writer"
                      className="text-primary underline-offset-4 hover:underline"
                    >
                      AI Blog Writer
                    </Link>
                    .
                  </li>
                  <li>
                    <strong className="text-foreground">
                      Business & Product Names:
                    </strong>{' '}
                    Find a catchy, memorable name for your next venture and even
                    generate a{' '}
                    <Link
                      href="/logo-generator"
                      className="text-primary underline-offset-4 hover:underline"
                    >
                      Logo
                    </Link>{' '}
                    to go with it.
                  </li>
                  <li>
                    <strong className="text-foreground">
                      Marketing Angles:
                    </strong>{' '}
                    Discover new ways to position your product or service to
                    attract customers.
                  </li>
                  <li>
                    <strong className="text-foreground">
                      Creative Writing Prompts:
                    </strong>{' '}
                    Get unique prompts for stories, poems, or scripts.
                  </li>
                </ul>
              </CardContent>
            </Card>
          </section>

          <section>
            <h2 className="text-3xl font-bold tracking-tight text-foreground">
              Conclusion: Your Imagination, Amplified
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              An AI Idea Generator doesn&apos;t replace creativity; it fuels it. By
              providing a constant stream of diverse ideas, it frees you from the
              pressure of starting from scratch and allows you to focus on what
              you do best: developing those ideas into something amazing.
            </p>
            <div className="my-6 flex justify-center">
              <Button asChild size="lg" variant="outline">
                <Link href="/">Explore All Our AI Tools</Link>
              </Button>
            </div>
          </section>
        </div>
      </article>
    </div>
  );
} 