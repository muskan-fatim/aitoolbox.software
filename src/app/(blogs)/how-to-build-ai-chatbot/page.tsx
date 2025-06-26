import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Link from 'next/link';

export default function Page() {
  return (
    <div className="bg-background text-foreground">
      <article className="mx-auto max-w-3xl px-4 py-12">
        <header className="mb-12 text-center">
          <h1 className="text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl">
            How to Build and Use an AI Chatbot for Your Website
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            Instantly upgrade your website's user experience by adding an AI
            chatbot. Engage visitors, provide instant answers, and capture
            leads 24/7, all without writing a single line of code.
          </p>
        </header>

        <div className="space-y-12">
          <section>
            <h2 className="text-3xl font-bold tracking-tight text-foreground">
              Why Your Website Needs an AI Chatbot
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              In today's fast-paced digital world, users expect instant
              gratification. An AI chatbot provides immediate, around-the-clock
              support, answering frequently asked questions and guiding users
              through your site. This not only improves customer satisfaction
              but also frees up your team to handle more complex issues.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold tracking-tight text-foreground">
              Effortless Integration with AI Toolbox
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              Building a chatbot might sound complicated, but our platform
              makes it simple. The{' '}
              <Link
                href="/chatbot"
                className="text-primary underline-offset-4 hover:underline"
              >
                AI Chatbot
              </Link>{' '}
              tool allows you to create and customize a conversational agent
              trained on your own data. You can have a helpful bot live on your
              site in just a few minutes.
            </p>
            <div className="my-6 flex justify-center">
              <Button asChild size="lg">
                <Link href="/chatbot">Build Your Free Chatbot Now</Link>
              </Button>
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-bold tracking-tight text-foreground">
              Use Cases: How a Chatbot Can Transform Your Business
            </h2>
            <Card className="my-6">
              <CardHeader>
                <CardTitle>Popular Chatbot Applications</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-outside space-y-3 pl-5 text-lg text-muted-foreground">
                  <li>
                    <strong className="text-foreground">
                      Customer Support:
                    </strong>{' '}
                    Instantly resolve common customer queries about your
                    products or services.
                  </li>
                  <li>
                    <strong className="text-foreground">
                      Lead Generation:
                    </strong>{' '}
                    Engage potential customers, qualify leads by asking relevant
                    questions, and schedule appointments.
                  </li>
                  <li>
                    <strong className="text-foreground">
                      User Onboarding:
                    </strong>{' '}
                    Guide new users through your platform, explaining features
                    like the{' '}
                    <Link
                      href="/code-explainer"
                      className="text-primary underline-offset-4 hover:underline"
                    >
                      Code Explainer
                    </Link>{' '}
                    or{' '}
                    <Link
                      href="/resume-builder"
                      className="text-primary underline-offset-4 hover:underline"
                    >
                      Resume Builder
                    </Link>
                    .
                  </li>
                  <li>
                    <strong className="text-foreground">
                      E-commerce Assistant:
                    </strong>{' '}
                    Help shoppers find products, track orders, and make
                    recommendations.
                  </li>
                </ul>
              </CardContent>
            </Card>
          </section>

          <section>
            <h2 className="text-3xl font-bold tracking-tight text-foreground">
              Conclusion: The Future of Customer Interaction
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              An AI chatbot is no longer a luxury; it's an essential tool for
              any modern website. It enhances user engagement, streamlines
              support, and drives business growth. By implementing a smart,
              responsive chatbot, you create a more dynamic and helpful digital
              experience for every visitor.
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