import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight } from 'lucide-react';

const blogPosts = [
  {
    title: 'How to Generate Ghibli Style Images with AI',
    description: 'Create beautiful, enchanting Ghibli-style art using AI. This guide will show you the best prompts and tools to capture the iconic Studio Ghibli aesthetic.',
    href: '/how-to-generate-ghibhli-style-images',
  },
  {
    title: 'How to Generate AI Images for Free: A Step-by-Step Guide',
    description: 'Learn how to create stunning AI-generated images for free. Our guide covers the best tools and techniques to get you started, no credit card required.',
    href: '/how-to-generate-ai-images-for-free',
  },
  {
    title: 'A-Z Guide to Your Next Viral Post with an AI Blog Writer',
    description: 'Go from a blank page to a polished, SEO-friendly article in minutes. This guide covers how to use an AI blog writer to supercharge your content creation.',
    href: '/guide-to-ai-blog-writer',
  },
  {
    title: 'How to Build a Custom AI Chatbot in Minutes',
    description: "Engage your audience and automate your support with a custom AI chatbot. Learn how to build and deploy one without writing a single line of code.",
    href: '/how-to-build-ai-chatbot',
  },
  {
    title: 'Demystifying Code: Your Guide to an AI Code Explainer',
    description: "Whether you're a beginner or a pro, understanding complex code can be tough. This guide shows you how an AI code explainer can make sense of any programming language.",
    href: '/ai-code-explainer-guide',
  },
  {
    title: 'The Ultimate Guide to Crafting Perfect Emails with AI',
    description: 'Say goodbye to writer\'s block. Learn how an AI email writer can help you compose professional, effective emails for any situation, from marketing to follow-ups.',
    href: '/ai-email-writer-guide',
  },
  {
    title: 'Perfect Your Writing with an AI Grammar Fixer',
    description: 'Eliminate typos and grammatical errors with the power of AI. This guide explains how an AI grammar fixer can improve your writing clarity and professionalism.',
    href: '/ai-grammar-fixer-guide',
  },
  {
    title: 'Never Run Out of Ideas Again with an AI Idea Generator',
    description: 'From blog topics to business names, an AI idea generator can break through any creative block. Learn how to leverage this tool for endless inspiration.',
    href: '/ai-idea-generator-guide',
  },
  {
    title: 'Design a Stunning Logo in Seconds with an AI Logo Generator',
    description: "Your brand's identity starts with a logo. This guide will show you how to use an AI-powered logo generator to create a unique and memorable design for free.",
    href: '/ai-logo-generator-guide',
  },
  {
    title: 'Build a Job-Winning Resume with an AI Resume Builder',
    description: 'Craft a polished, professional, and ATS-friendly resume that gets results. Learn how to use AI to highlight your skills and land your dream job.',
    href: '/ai-resume-builder-guide',
  },
  {
    title: 'Master Information Overload with an AI Text Summarizer',
    description: 'Save time and get the key points from any long document or article. This guide explores how to use an AI text summarizer to boost your productivity.',
    href: '/ai-text-summarizer-guide',
  },
  {
    title: 'The Best Way to Summarize YouTube Videos with AI',
    description: 'Get the essence of any YouTube video without watching the whole thing. This guide shows you how an AI YouTube summarizer can deliver concise summaries in seconds.',
    href: '/ai-youtube-summarizer-guide',
  },
];

export default function BlogPage() {
  return (
    <div className="bg-background text-foreground">
      <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6 lg:px-8">
        <header className="mb-12 text-center">
          <h1 className="text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl">
            The AI Toolbox Blog
          </h1>
          <p className="mt-4 text-xl text-muted-foreground">
            Your definitive source for AI guides, tutorials, and insights.
          </p>
        </header>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post) => (
            <Card key={post.href} className="flex transform flex-col transition-transform duration-300 hover:scale-105 hover:shadow-lg">
              <CardHeader>
                <CardTitle className="text-xl font-bold">{post.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-muted-foreground">{post.description}</p>
              </CardContent>
              <div className="p-6 pt-0">
                <Link href={post.href} className="font-semibold text-primary inline-flex items-center">
                  Read More <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
