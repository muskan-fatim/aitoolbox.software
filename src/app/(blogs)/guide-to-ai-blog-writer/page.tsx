import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Link from 'next/link';

export default function Page() {
  return (
    <div className="bg-background text-foreground">
      <article className="mx-auto max-w-3xl px-4 py-12">
        <header className="mb-12 text-center">
          <h1 className="text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl">
            Your Ultimate Guide to Using an AI Blog Writer
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            Struggling with writer&apos;s block or spending too much time on blog
            posts? Learn how to leverage AI to write high-quality, engaging,
            and SEO-optimized content in a fraction of the time.
          </p>
        </header>

        <div className="space-y-12">
          <section>
            <h2 className="text-3xl font-bold tracking-tight text-foreground">
              The Content Creation Revolution is Here
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              Content is king, but creating it consistently is a monumental
              task. AI blog writers have emerged as a game-changer for
              marketers, business owners, and bloggers alike. These tools
              aren&apos;t here to replace human creativity but to augment it, acting
              as a tireless brainstorming partner and writing assistant.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold tracking-tight text-foreground">
              Meet Your New Writing Partner: The AI Blog Writer
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              Our{' '}
              <Link
                href="/blog-writer"
                className="text-primary underline-offset-4 hover:underline"
              >
                AI Blog Writer
              </Link>{' '}
              is designed to streamline your content workflow. Simply provide a
              topic or a few keywords, and the AI will generate a structured,
              coherent, and often surprisingly creative blog post. It&apos;s the
              perfect way to overcome the blank page and kickstart your
              writing process.
            </p>
            <div className="my-6 flex justify-center">
              <Button asChild size="lg">
                <Link href="/blog-writer">Try the AI Blog Writer Now</Link>
              </Button>
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-bold tracking-tight text-foreground">
              How to Get the Most Out of an AI Blog Writer
            </h2>
            <Card className="my-6">
              <CardHeader>
                <CardTitle>A Step-by-Step Workflow</CardTitle>
              </CardHeader>
              <CardContent>
                <ol className="list-decimal list-outside space-y-3 pl-5 text-lg text-muted-foreground">
                  <li>
                    <strong className="text-foreground">
                      Start with an Idea:
                    </strong>{' '}
                    Use our{' '}
                    <Link
                      href="/idea-generator"
                      className="text-primary underline-offset-4 hover:underline"
                    >
                      Idea Generator
                    </Link>{' '}
                    to brainstorm compelling topics for your audience.
                  </li>
                  <li>
                    <strong className="text-foreground">
                      Generate the Draft:
                    </strong>{' '}
                    Input your topic into the{' '}
                    <Link
                      href="/blog-writer"
                      className="text-primary underline-offset-4 hover:underline"
                    >
                      Blog Writer
                    </Link>
                    . Let the AI produce the initial draft, including headings
                    and paragraphs.
                  </li>
                  <li>
                    <strong className="text-foreground">Refine and Edit:</strong>{' '}
                    This is where your expertise shines. Review the generated
                    text, add your personal voice, check facts, and inject your
                    unique insights. Use our{' '}
                    <Link
                      href="/grammar-fixer"
                      className="text-primary underline-offset-4 hover:underline"
                    >
                      Grammar Fixer
                    </Link>{' '}
                    to polish the final text.
                  </li>
                  <li>
                    <strong className="text-foreground">Optimize for SEO:</strong>{' '}
                    Ensure your main keywords are present, but focus on natural
                    language. The AI often does a good job of this, but a human
                    touch is essential for ranking.
                  </li>
                </ol>
              </CardContent>
            </Card>
          </section>

          <section>
            <h2 className="text-3xl font-bold tracking-tight text-foreground">
              Beyond Blogging: Other Uses
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              The principles of AI writing extend beyond just blogs. You can
              adapt the generated content for social media posts, video scripts,
              and even professional communication. For instance, our{' '}
              <Link
                href="/email-writer"
                className="text-primary underline-offset-4 hover:underline"
              >
                Email Writer
              </Link>{' '}
              uses similar technology tailored for crafting perfect emails.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold tracking-tight text-foreground">
              Conclusion: Embrace the Future of Content
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              AI writing tools are transforming the content landscape. By
              embracing them, you can produce more content, maintain quality,
              and free up valuable time to focus on strategy and growing your
              brand. Start your journey with our powerful suite of AI tools
              today.
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