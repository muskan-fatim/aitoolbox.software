import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Link from 'next/link';

export default function Page() {
  return (
    <div className="bg-background text-foreground">
      <article className="mx-auto max-w-3xl px-4 py-12">
        <header className="mb-12 text-center">
          <h1 className="text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl">
            Build a Job-Winning Resume with an AI Resume Builder
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            Your resume is the most important document in your job search. Learn
            how to use AI to craft a polished, professional, and
            applicant-tracking-system (ATS) friendly resume that gets results.
          </p>
        </header>

        <div className="space-y-12">
          <section>
            <h2 className="text-3xl font-bold tracking-tight text-foreground">
              Beating the Bots and Impressing Recruiters
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              Did you know that most large companies use Applicant Tracking
              Systems (ATS) to screen resumes before a human ever sees them? If
              your resume isn't formatted correctly, it might be rejected
              automatically. An AI Resume Builder helps you create a document
              that is optimized for both bots and human recruiters.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold tracking-tight text-foreground">
              Your Blueprint for a Perfect Resume
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              Our{' '}
              <Link
                href="/resume-builder"
                className="text-primary underline-offset-4 hover:underline"
              >
                AI Resume Builder
              </Link>{' '}
              guides you through the entire process. It provides proven
              templates, suggests powerful action verbs, and helps you tailor
              your experience to the specific job you're applying for. No more
              guessing what recruiters want to see.
            </p>
            <div className="my-6 flex justify-center">
              <Button asChild size="lg">
                <Link href="/resume-builder">Build Your Resume Now</Link>
              </Button>
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-bold tracking-tight text-foreground">
              The AI-Powered Job Application Toolkit
            </h2>
            <Card className="my-6">
              <CardHeader>
                <CardTitle>From First Draft to Final Application</CardTitle>
              </CardHeader>
              <CardContent>
                <ol className="list-decimal list-outside space-y-3 pl-5 text-lg text-muted-foreground">
                  <li>
                    <strong className="text-foreground">
                      Build the Foundation:
                    </strong>{' '}
                    Use the{' '}
                    <Link
                      href="/resume-builder"
                      className="text-primary underline-offset-4 hover:underline"
                    >
                      Resume Builder
                    </Link>{' '}
                    to structure your skills and experience.
                  </li>
                  <li>
                    <strong className="text-foreground">
                      Write a Compelling Cover Letter:
                    </strong>{' '}
                    Use our{' '}
                    <Link
                      href="/email-writer"
                      className="text-primary underline-offset-4 hover:underline"
                    >
                      AI Email Writer
                    </Link>{' '}
                    to draft a persuasive cover letter tailored to the company.
                  </li>
                  <li>
                    <strong className="text-foreground">
                      Proofread Everything:
                    </strong>{' '}
                    Run your final resume and cover letter through the{' '}
                    <Link
                      href="/grammar-fixer"
                      className="text-primary underline-offset-4 hover:underline"
                    >
                      Grammar Fixer
                    </Link>{' '}
                    to catch any last-minute errors.
                  </li>
                </ol>
              </CardContent>
            </Card>
          </section>

          <section>
            <h2 className="text-3xl font-bold tracking-tight text-foreground">
              Conclusion: Land Your Dream Job Faster
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              A well-crafted resume is your ticket to an interview. By using an
              AI resume builder, you're not just creating a document; you're
              building a strategic tool designed to navigate the modern hiring
              process successfully. Take the next step in your career with
              confidence.
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
