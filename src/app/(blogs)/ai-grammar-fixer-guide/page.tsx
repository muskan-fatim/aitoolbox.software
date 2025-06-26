import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Link from 'next/link';

export default function Page() {
  return (
    <div className="bg-background text-foreground">
      <article className="mx-auto max-w-3xl px-4 py-12">
        <header className="mb-12 text-center">
          <h1 className="text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl">
            Achieve Flawless Writing with an AI Grammar Fixer
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            Nothing undermines credibility like a typo in an important document.
            Learn how an AI Grammar Fixer can be your safety net, ensuring your
            writing is always polished and professional.
          </p>
        </header>

        <div className="space-y-12">
          <section>
            <h2 className="text-3xl font-bold tracking-tight text-foreground">
              Your First Impression is Often Written
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              In a world of digital communication, your writing is a direct
              reflection of your professionalism. Grammatical errors, spelling
              mistakes, and awkward phrasing can distract from your message and
              damage your reputation. A reliable grammar checker is an essential
              tool for anyone who writes.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold tracking-tight text-foreground">
              Instant Proofreading, Powered by AI
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              Forget rereading your own work ten times. Our{' '}
              <Link
                href="/grammar-fixer"
                className="text-primary underline-offset-4 hover:underline"
              >
                AI Grammar Fixer
              </Link>{' '}
              instantly scans your text to identify and correct a wide range of
              errors. It's faster and often more accurate than manual
              proofreading, catching mistakes that human eyes might miss.
            </p>
            <div className="my-6 flex justify-center">
              <Button asChild size="lg">
                <Link href="/grammar-fixer">Fix Your Text for Free</Link>
              </Button>
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-bold tracking-tight text-foreground">
              More Than Just a Spell-Check
            </h2>
            <Card className="my-6">
              <CardHeader>
                <CardTitle>What an AI Grammar Fixer Corrects</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-outside space-y-3 pl-5 text-lg text-muted-foreground">
                  <li>
                    <strong className="text-foreground">Spelling Errors:</strong>{' '}
                    Catches common typos and misspellings.
                  </li>
                  <li>
                    <strong className="text-foreground">
                      Grammar & Punctuation:
                    </strong>{' '}
                    Fixes subject-verb agreement, comma splices, and more.
                  </li>
                  <li>
                    <strong className="text-foreground">
                      Style & Fluency:
                    </strong>{' '}
                    Suggests improvements for clarity, conciseness, and tone.
                  </li>
                  <li>
                    <strong className="text-foreground">
                      Putting it Together:
                    </strong>{' '}
                    Use it to polish text from our{' '}
                    <Link
                      href="/blog-writer"
                      className="text-primary underline-offset-4 hover:underline"
                    >
                      Blog Writer
                    </Link>{' '}
                    or to refine a summary from the{' '}
                    <Link
                      href="/youtube-summarizer"
                      className="text-primary underline-offset-4 hover:underline"
                    >
                      YouTube Summarizer
                    </Link>
                    .
                  </li>
                </ul>
              </CardContent>
            </Card>
          </section>

          <section>
            <h2 className="text-3xl font-bold tracking-tight text-foreground">
              Conclusion: Write with Unshakeable Confidence
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              By incorporating an AI grammar fixer into your writing process, you
              eliminate the fear of making embarrassing mistakes. This allows you
              to communicate more freely and effectively, knowing that every
              email, report, and blog post you produce is of the highest
              quality.
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