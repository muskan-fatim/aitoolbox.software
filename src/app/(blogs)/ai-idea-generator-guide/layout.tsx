import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Never Run Out of Ideas with an AI Idea Generator',
  description:
    'Break through creative blocks with the push of a button. Our AI Idea Generator provides endless inspiration for blog posts, business names, creative projects, and more.',
  keywords: [
    'AI idea generator',
    'creative ideas',
    'content ideas',
    'brainstorming tool',
    'overcome creative block',
    'business ideas',
  ],
  openGraph: {
    title: 'Never Run Out of Ideas with an AI Idea Generator',
    description:
      'From your next big project to the perfect blog topic, get instant inspiration with our powerful AI Idea Generator.',
    url: 'https://aitoolbox.software/ai-idea-generator-guide',
    siteName: 'AI Toolbox',
    images: [
      {
        url: 'https://aitoolbox.software/og-image-idea-generator.png',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_US',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Never Run Out of Ideas with an AI Idea Generator',
    description:
      'Learn how to use AI to brainstorm and generate endless creative ideas for any project.',
    images: ['https://aitoolbox.software/og-image-idea-generator.png'],
  },
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
} 