import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Link from 'next/link';

export default function Page() {
  return (
    <div className="bg-background text-foreground">
      <article className="mx-auto max-w-3xl px-4 py-12">
        <header className="mb-12 text-center">
          <h1 className="text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl">
            Get to the Point Instantly with an AI Text Summarizer
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            We&apos;re drowning in information. An AI Text Summarizer is your
            life raft, helping you quickly digest long articles, reports, and
            documents to find the insights that matter.
          </p>
        </header>

        <div className="space-y-12">
          <section>
            <h2 className="text-3xl font-bold tracking-tight text-foreground">
              Conquering Information Overload
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              The internet gives us access to a limitless library of knowledge,
              but who has time to read it all? From dense academic papers to
              lengthy news articles, the sheer volume of text is overwhelming.
              A text summarizer cuts through the noise, extracting the most
              critical information for you.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold tracking-tight text-foreground">
              Your Personal Research Assistant
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              Our{' '}
              <Link
                href="/text-summarizer"
                className="text-primary underline-offset-4 hover:underline"
              >
                AI Text Summarizer
              </Link>{' '}
              uses advanced natural language processing to understand the core
              arguments and key points of any text. Just paste in the content,
              and it will generate a concise, coherent summary, saving you
              valuable time and mental energy.
            </p>
            <div className="my-6 flex justify-center">
              <Button asChild size="lg">
                <Link href="/text-summarizer">Summarize Text Now</Link>
              </Button>
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-bold tracking-tight text-foreground">
              Read Smarter, Not Harder
            </h2>
            <Card className="my-6">
              <CardHeader>
                <CardTitle>Ideal Use Cases for Summarization</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-outside space-y-3 pl-5 text-lg text-muted-foreground">
                  <li>
                    <strong className="text-foreground">Students:</strong>{' '}
                    Quickly grasp the main ideas of research papers and textbook
                    chapters.
                  </li>
                  <li>
                    <strong className="text-foreground">Professionals:</strong>{' '}
                    Stay on top of industry reports, competitor analyses, and
                    long email threads.
                  </li>
                  <li>
                    <strong className="text-foreground">
                      Content Creators:
                    </strong>{' '}
                    Summarize a long video script from our{' '}
                    <Link
                      href="/youtube-summarizer"
                      className="text-primary underline-offset-4 hover:underline"
                    >
                      YouTube Summarizer
                    </Link>{' '}
                    into a short description or social media post.
                  </li>
                  <li>
                    <strong className="text-foreground">
                      Curious Minds:
                    </strong>{' '}
                    Efficiently consume news and articles on topics you&apos;re
                    passionate about.
                  </li>
                </ul>
              </CardContent>
            </Card>
          </section>

          <section>
            <h2 className="text-3xl font-bold tracking-tight text-foreground">
              Conclusion: The Ultimate Productivity Hack
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              In an age of information abundance, the ability to quickly filter
              and understand content is a superpower. An AI text summarizer is
              a crucial tool for anyone looking to boost their productivity,
              accelerate their learning, and stay informed without getting
              bogged down.
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