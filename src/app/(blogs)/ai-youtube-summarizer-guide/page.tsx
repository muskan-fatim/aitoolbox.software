import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Link from 'next/link';

export default function Page() {
  return (
    <div className="bg-background text-foreground">
      <article className="mx-auto max-w-3xl px-4 py-12">
        <header className="mb-12 text-center">
          <h1 className="text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl">
            Summarize Any YouTube Video Instantly with AI
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            YouTube is an incredible learning resource, but videos can be long.
            Learn how to extract the key insights from any video in seconds with
            our AI-powered summarizer.
          </p>
        </header>

        <div className="space-y-12">
          <section>
            <h2 className="text-3xl font-bold tracking-tight text-foreground">
              The University of YouTube: A Time-Consuming Classroom
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              From lectures and tutorials to documentaries and news reports,
              YouTube is a treasure trove of knowledge. However, finding the
              crucial information within a long video can feel like searching
              for a needle in a haystack. An AI summarizer acts as your personal
              research assistant, saving you countless hours.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold tracking-tight text-foreground">
              Get the TL;DW (Too Long; Didn&apos;t Watch) Version
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              Our{' '}
              <Link
                href="/youtube-summarizer"
                className="text-primary underline-offset-4 hover:underline"
              >
                AI YouTube Summarizer
              </Link>{' '}
              is incredibly easy to use. Simply paste a YouTube video link, and
              the AI will analyze its transcript to provide a concise,
              easy-to-read summary of the main points. It&apos;s the ultimate hack
              for efficient learning.
            </p>
            <div className="my-6 flex justify-center">
              <Button asChild size="lg">
                <Link href="/youtube-summarizer">Summarize a Video Now</Link>
              </Button>
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-bold tracking-tight text-foreground">
              Unlock a More Efficient Workflow
            </h2>
            <Card className="my-6">
              <CardHeader>
                <CardTitle>Who is This For?</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-outside space-y-3 pl-5 text-lg text-muted-foreground">
                  <li>
                    <strong className="text-foreground">Students:</strong>{' '}
                    Quickly review lectures and educational content without
                    rewatching entire videos.
                  </li>
                  <li>
                    <strong className="text-foreground">
                      Researchers & Professionals:
                    </strong>{' '}
                    Stay up-to-date with industry news, conference talks, and
                    webinars.
                  </li>
                  <li>
                    <strong className="text-foreground">
                      Content Creators:
                    </strong>{' '}
                    Use the summary as a starting point for a reaction video, a
                    blog post (with our{' '}
                    <Link
                      href="/blog-writer"
                      className="text-primary underline-offset-4 hover:underline"
                    >
                      Blog Writer
                    </Link>
                    ), or social media content.
                  </li>
                </ul>
              </CardContent>
            </Card>
          </section>

          <section>
            <h2 className="text-3xl font-bold tracking-tight text-foreground">
              Conclusion: Learn More in Less Time
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              The ability to quickly extract knowledge from video content is a
              game-changer for personal and professional development. An AI
              YouTube summarizer is an essential tool for anyone who values their
              time and is committed to continuous learning.
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