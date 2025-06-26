import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Link from 'next/link';

export default function Page() {
  return (
    <div className="bg-background text-foreground">
      <article className="mx-auto max-w-3xl px-4 py-12">
        <header className="mb-12 text-center">
          <h1 className="text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl">
            A-Z Guide: How to Generate Beautiful Ghibli Style Images Using AI
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            The enchanting, hand-drawn aesthetic of Studio Ghibli films has
            captivated audiences for decades. Now, with the power of AI, you can
            recreate this iconic style yourself. This guide will teach you how to
            craft prompts that capture the heart and soul of Ghibli&apos;s artistry.
          </p>
        </header>

        <div className="space-y-12">
          <section>
            <h2 className="text-3xl font-bold tracking-tight text-foreground">
              What Defines the &quot;Ghibli Style&quot;?
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              The Ghibli style is more than just &quot;anime.&quot; It&apos;s characterized by
              lush, painterly backgrounds, soft lighting, a deep connection with
              nature, and characters with expressive, rounded faces. Key elements
              include vibrant watercolors, attention to tiny details, and a
              sense of whimsical nostalgia.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold tracking-tight text-foreground">
              The Best AI Tool for Ghibli Art
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              To capture this nuanced style, you need a flexible and powerful
              tool. Our{' '}
              <Link
                href="/image-generator"
                className="text-primary underline-offset-4 hover:underline"
              >
                AI Image Generator
              </Link>{' '}
              is perfectly suited for the task, allowing you to blend specific
              keywords and styles to achieve the Ghibli look with precision.
            </p>
            <div className="my-6 flex justify-center">
              <Button asChild size="lg">
                <Link href="/image-generator">Create Ghibli-Style Art Now</Link>
              </Button>
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-bold tracking-tight text-foreground">
              Crafting the Perfect Ghibli-Style Prompt
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              The secret to Ghibli-style AI art lies in the prompt. You need to
              be descriptive and use the right keywords.
            </p>
            <Card className="my-6">
              <CardHeader>
                <CardTitle>Example Ghibli-Style Prompts</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-lg text-muted-foreground">
                <div>
                  <p className="font-bold text-foreground">
                    Prompt 1: The Classic Scene
                  </p>
                  <code className="mt-1 block rounded-md bg-muted p-3 text-sm">
                    A girl with a straw hat in a field of sun-drenched flowers,
                    vast blue sky, fluffy clouds, anime key visual, by Hayao
                    Miyazaki, watercolor, cinematic.
                  </code>
                </div>
                <div>
                  <p className="font-bold text-foreground">
                    Prompt 2: The Cozy Interior
                  </p>
                  <code className="mt-1 block rounded-md bg-muted p-3 text-sm">
                    A cozy, cluttered room with a cat sleeping on a windowsill,
                    sunbeams streaming in, detailed anime background, Studio
                    Ghibli style, warm and inviting.
                  </code>
                </div>
                <div>
                  <p className="font-bold text-foreground">
                    Prompt 3: The Mystical Forest
                  </p>
                  <code className="mt-1 block rounded-md bg-muted p-3 text-sm">
                    A glowing forest spirit in a mossy, ancient forest at night,
                    fireflies, mystical, fantasy, art by Studio Ghibli and
                    Makoto Shinkai.
                  </code>
                </div>
              </CardContent>
            </Card>
          </section>

          <section>
            <h2 className="text-3xl font-bold tracking-tight text-foreground">
              Key Prompting Phrases for the Ghibli Look
            </h2>
            <ul className="mt-4 list-disc list-outside space-y-3 pl-5 text-lg text-muted-foreground">
              <li>
                <strong className="text-foreground">Core Keywords:</strong>{' '}
                &quot;Studio Ghibli style,&quot; &quot;Hayao Miyazaki,&quot; &quot;Isao Takahata.&quot;
              </li>
              <li>
                <strong className="text-foreground">Artistic Style:</strong>{' '}
                &quot;Watercolor,&quot; &quot;hand-drawn,&quot; &quot;painterly,&quot; &quot;anime key visual.&quot;
              </li>
              <li>
                <strong className="text-foreground">Themes & Mood:</strong>{' '}
                &quot;Nostalgic,&quot; &quot;whimsical,&quot; &quot;serene,&quot; &quot;adventurous.&quot;
              </li>
              <li>
                <strong className="text-foreground">Environment:</strong> &quot;Lush
                nature,&quot; &quot;overgrown ruins,&quot; &quot;charming village,&quot; &quot;cloudscape.&quot;
              </li>
            </ul>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              Don&apos;t forget to use our{' '}
              <Link
                href="/idea-generator"
                className="text-primary underline-offset-4 hover:underline"
              >
                Idea Generator
              </Link>{' '}
              if you need help coming up with a unique scene to create!
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold tracking-tight text-foreground">
              Conclusion: Bring Your Imagination to Life
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              Creating Ghibli-style art is a rewarding way to blend your own
              ideas with a beloved aesthetic. Experiment with different
              characters, settings, and moods. Our platform provides all the
              resources you need, from image generation to a{' '}
              <Link
                href="/text-summarizer"
                className="text-primary underline-offset-4 hover:underline"
              >
                Text Summarizer
              </Link>{' '}
              to help you condense your favorite Ghibli movie plots for
              inspiration.
            </p>
            <div className="my-6 flex justify-center">
              <Button asChild size="lg" variant="outline">
                <Link href="/image-generator">
                  Start Your Ghibli Creation
                </Link>
              </Button>
            </div>
          </section>
        </div>
      </article>
    </div>
  );
}
