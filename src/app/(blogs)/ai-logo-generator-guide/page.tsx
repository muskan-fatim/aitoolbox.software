import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Link from 'next/link';

export default function Page() {
  return (
    <div className="bg-background text-foreground">
      <article className="mx-auto max-w-3xl px-4 py-12">
        <header className="mb-12 text-center">
          <h1 className="text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl">
            Design a Stunning Logo in Minutes with an AI Logo Generator
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            A great logo is the face of your brand. But you don&apos;t need a massive
            budget or a design degree to get one. Learn how AI can create a
            professional logo for you.
          </p>
        </header>

        <div className="space-y-12">
          <section>
            <h2 className="text-3xl font-bold tracking-tight text-foreground">
              Your Brand&apos;s Visual Identity Matters
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              A logo is more than just a pretty picture; it&apos;s a symbol of your
              brand&apos;s identity, values, and promise to your customers. A strong,
              professional logo builds trust and recognition. Traditionally, this
              meant hiring expensive design agencies, but AI has democratized
              the design process.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold tracking-tight text-foreground">
              High-Quality Design, Instantly
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              Our{' '}
              <Link
                href="/logo-generator"
                className="text-primary underline-offset-4 hover:underline"
              >
                AI Logo Generator
              </Link>{' '}
              puts a designer in your pocket. By analyzing your industry, style
              preferences, and brand name, it generates a wide variety of unique
              logo concepts. You can then customize the colors, fonts, and
              layouts to create the perfect visual identity for your brand.
            </p>
            <div className="my-6 flex justify-center">
              <Button asChild size="lg">
                <Link href="/logo-generator">Generate Your Logo Now</Link>
              </Button>
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-bold tracking-tight text-foreground">
              The Simple Path to a Professional Logo
            </h2>
            <Card className="my-6">
              <CardHeader>
                <CardTitle>How It Works</CardTitle>
              </CardHeader>
              <CardContent>
                <ol className="list-decimal list-outside space-y-3 pl-5 text-lg text-muted-foreground">
                  <li>
                    <strong className="text-foreground">
                      Start with an Idea:
                    </strong>{' '}
                    Need a name for your brand first? Use our{' '}
                    <Link
                      href="/idea-generator"
                      className="text-primary underline-offset-4 hover:underline"
                    >
                      Idea Generator
                    </Link>{' '}
                    to brainstorm business names.
                  </li>
                  <li>
                    <strong className="text-foreground">
                      Provide Your Details:
                    </strong>{' '}
                    Enter your company name and select your industry and style
                    preferences (e.g., modern, minimalist, classic).
                  </li>
                  <li>
                    <strong className="text-foreground">
                      Browse & Customize:
                    </strong>{' '}
                    The AI will present you with dozens of logo options. Choose
                    your favorite and tweak the details until it&apos;s perfect.
                  </li>
                  <li>
                    <strong className="text-foreground">Download & Go:</strong>{' '}
                    Get high-resolution logo files ready for your website,
                    social media, and print materials.
                  </li>
                </ol>
              </CardContent>
            </Card>
          </section>

          <section>
            <h2 className="text-3xl font-bold tracking-tight text-foreground">
              Conclusion: Build a Brand You&apos;re Proud Of
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              An AI logo generator makes professional branding accessible to
              everyone, from solo entrepreneurs to growing startups. It removes
              the barriers of cost and complexity, empowering you to build a
              strong, memorable brand identity from day one.
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