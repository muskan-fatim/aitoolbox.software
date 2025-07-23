import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Twitter, Github, Mail } from "lucide-react";

export const metadata: Metadata = {
  title: "About | AI Toolbox",
  description: "Get to know the story, mission, and values behind AI Toolbox. Discover why we built this platform and how we help you find the best AI tools.",
  openGraph: {
    title: "About | AI Toolbox",
    description: "Get to know the story, mission, and values behind AI Toolbox. Discover why we built this platform and how we help you find the best AI tools.",
    type: "website",
    url: "https://aitoolbox.software/about",
    images: [
      {
        url: "/mainOG.webp",
        width: 1200,
        height: 630,
        alt: "AI Toolbox Open Graph Image",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "About | AI Toolbox",
    description: "Get to know the story, mission, and values behind AI Toolbox. Discover why we built this platform and how we help you find the best AI tools.",
    images: ["/mainOG.webp"],
  },
  icons: {
    icon: "/icon.png",
  },
};

export default function AboutPage() {
  return (
    <div className=" pl-5 sm:pl-14 container max-w-3xl py-6 md:py-10">
      <div className="flex flex-col items-start gap-4 md:flex-row md:justify-between md:gap-8">
        <div className="flex-1 space-y-4">
          <div className="flex items-center gap-3">
            <Image
              src="/icon.png"
              alt="AI Toolbox Logo"
              width={48}
              height={48}
              className="rounded"
              priority
            />
            <h1 className="font-heading text-4xl tracking-tight lg:text-5xl">
              About AI Toolbox
            </h1>
          </div>
          <div className="text-xl text-muted-foreground">
            Your trusted guide to the world of AI tools and software.
          </div>
        </div>
      </div>
      <hr className="my-8" />

      <div className="prose max-w-none dark:prose-invert">
        <h2>Why We Built AI Toolbox</h2>
        <p>
          The AI landscape is growing at breakneck speed, and it can be overwhelming to keep up. We started AI Toolbox because we believe everyone deserves a clear, honest, and practical way to discover the best AI-powered tools—whether you're a business owner, developer, or just curious about what's possible.
        </p>

        <h2>What Makes Us Different</h2>
        <ul>
          <li>
            <strong>Curated Directory:</strong> Every tool is handpicked and reviewed by real people, not bots.
          </li>
          <li>
            <strong>Real-World Insights:</strong> We focus on practical use-cases, not just features and buzzwords.
          </li>
          <li>
            <strong>Community-Driven:</strong> We welcome feedback, suggestions, and honest reviews from our users.
          </li>
        </ul>

        <h2>Our Mission & Values</h2>
        <p>
          We want to make AI accessible, understandable, and useful for everyone. Our core values are:
        </p>
        <ul>
          <li>
            <strong>Transparency:</strong> No hidden agendas—just clear, unbiased information.
          </li>
          <li>
            <strong>Privacy:</strong> Your data stays yours. Read our <Link href="/legal/privacy-policy">Privacy Policy</Link> for details.
          </li>
          <li>
            <strong>Quality:</strong> We strive for accuracy and depth in every listing and review.
          </li>
          <li>
            <strong>Openness:</strong> We believe in open dialogue and learning from our community.
          </li>
        </ul>

        <h2>Meet the Team</h2>
        <p>
          We're a small group of tech enthusiasts, designers, and writers passionate about AI and its real-world impact. We use the tools we list, and we love hearing from users about what works (and what doesn't).
        </p>

        {/* Platform Features Section */}
        <h2 className="mt-10">What You Can Do With AI Toolbox</h2>
        <p>
          Unlock the power of AI with our all-in-one platform. Whether you want to boost productivity, spark creativity, or streamline your workflow, AI Toolbox brings together the best tools in one place:
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6">
          <div className="border rounded-lg p-4 bg-muted/30">
            <h4 className="font-semibold mb-1">AI Email Writer</h4>
            <p className="mb-2 text-sm text-muted-foreground">Write professional emails with AI assistance</p>
            <Link href="/tools/ai-email-writer" className="text-primary hover:underline">Try now &rarr;</Link>
          </div>
          <div className="border rounded-lg p-4 bg-muted/30">
            <h4 className="font-semibold mb-1">GPT Chatbot</h4>
            <p className="mb-2 text-sm text-muted-foreground">Interactive AI chatbot for conversations</p>
            <Link href="/tools/gpt-chatbot" className="text-primary hover:underline">Try now &rarr;</Link>
          </div>
          <div className="border rounded-lg p-4 bg-muted/30">
            <h4 className="font-semibold mb-1">AI Translator</h4>
            <p className="mb-2 text-sm text-muted-foreground">Translate text between multiple languages</p>
            <Link href="/tools/ai-translator" className="text-primary hover:underline">Try now &rarr;</Link>
          </div>
          <div className="border rounded-lg p-4 bg-muted/30">
            <h4 className="font-semibold mb-1">Image Generator</h4>
            <p className="mb-2 text-sm text-muted-foreground">Create unique AI-generated images</p>
            <Link href="/tools/image-generator" className="text-primary hover:underline">Try now &rarr;</Link>
          </div>
          <div className="border rounded-lg p-4 bg-muted/30">
            <h4 className="font-semibold mb-1">Logo Generator</h4>
            <p className="mb-2 text-sm text-muted-foreground">Design professional logos with AI</p>
            <Link href="/tools/logo-generator" className="text-primary hover:underline">Try now &rarr;</Link>
          </div>
          <div className="border rounded-lg p-4 bg-muted/30">
            <h4 className="font-semibold mb-1">YouTube Summarizer</h4>
            <p className="mb-2 text-sm text-muted-foreground">Get quick summaries of YouTube videos</p>
            <Link href="/tools/youtube-summarizer" className="text-primary hover:underline">Try now &rarr;</Link>
          </div>
          <div className="border rounded-lg p-4 bg-muted/30">
            <h4 className="font-semibold mb-1">Code Explainer</h4>
            <p className="mb-2 text-sm text-muted-foreground">Understand code snippets easily</p>
            <Link href="/tools/code-explainer" className="text-primary hover:underline">Try now &rarr;</Link>
          </div>
          <div className="border rounded-lg p-4 bg-muted/30">
            <h4 className="font-semibold mb-1">Text Summarizer</h4>
            <p className="mb-2 text-sm text-muted-foreground">Summarize long texts quickly</p>
            <Link href="/tools/text-summarizer" className="text-primary hover:underline">Try now &rarr;</Link>
          </div>
          <div className="border rounded-lg p-4 bg-muted/30">
            <h4 className="font-semibold mb-1">Blog Writer</h4>
            <p className="mb-2 text-sm text-muted-foreground">Create engaging blog content</p>
            <Link href="/tools/blog-writer" className="text-primary hover:underline">Try now &rarr;</Link>
          </div>
          <div className="border rounded-lg p-4 bg-muted/30">
            <h4 className="font-semibold mb-1">Grammar Fixer</h4>
            <p className="mb-2 text-sm text-muted-foreground">Fix grammar and improve writing</p>
            <Link href="/tools/grammar-fixer" className="text-primary hover:underline">Try now &rarr;</Link>
          </div>
          <div className="border rounded-lg p-4 bg-muted/30">
            <h4 className="font-semibold mb-1">Resume Builder</h4>
            <p className="mb-2 text-sm text-muted-foreground">Create professional resumes</p>
            <Link href="/tools/resume-builder" className="text-primary hover:underline">Try now &rarr;</Link>
          </div>
          <div className="border rounded-lg p-4 bg-muted/30">
            <h4 className="font-semibold mb-1">Idea Generator</h4>
            <p className="mb-2 text-sm text-muted-foreground">Generate creative ideas</p>
            <Link href="/tools/idea-generator" className="text-primary hover:underline">Try now &rarr;</Link>
          </div>
        </div>
        {/* End Platform Features Section */}

        <h2>Connect With Us</h2>
        <div className="flex gap-4 mt-2">
          <Link href="https://twitter.com/aitoolbox" className="flex items-center gap-2" target="_blank" rel="noopener noreferrer">
            <Twitter className="h-5 w-5" aria-label="Twitter" />
            <span>Twitter</span>
          </Link>
          <Link href="https://github.com/aitoolbox" className="flex items-center gap-2" target="_blank" rel="noopener noreferrer">
            <Github className="h-5 w-5" aria-label="GitHub" />
            <span>GitHub</span>
          </Link>
          <Link href="/contact" className="flex items-center gap-2">
            <Mail className="h-5 w-5" aria-label="Contact" />
            <span>Contact Us</span>
          </Link>
        </div>

        <div className="mt-10 border-t pt-6">
          <h3 className="mb-2">Legal & Policies</h3>
          <ul className="flex flex-wrap gap-4 text-base">
            <li>
              <Link href="/terms-of-service" className="hover:underline">
                Terms of Service
              </Link>
            </li>
            <li>
              <Link href="/privacy-policy" className="hover:underline">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link href="/cookie-policy" className="hover:underline">
                Cookie Policy
              </Link>
            </li>
            <li>
              <Link href="/disclaimer" className="hover:underline">
                Disclaimer
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:underline">
                About
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
