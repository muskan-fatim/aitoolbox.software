import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Summarize Any YouTube Video Instantly with AI',
  description:
    'Save hours of watching time. Our AI YouTube Summarizer turns long videos into concise summaries with key takeaways, so you can learn faster.',
  keywords: [
    'YouTube summarizer',
    'AI video summary',
    'summarize videos',
    'video to text',
    'educational technology',
    'productivity hack',
  ],
  openGraph: {
    title: 'Summarize Any YouTube Video Instantly with AI',
    description:
      'Get the key points from any YouTube video without watching the whole thing. The perfect tool for students, researchers, and lifelong learners.',
    url: 'https://aitoolbox.software/ai-youtube-summarizer-guide',
    siteName: 'AI Toolbox',
    images: [
      {
        url: 'https://aitoolbox.software/og-image-youtube-summarizer.png',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_US',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Summarize Any YouTube Video Instantly with AI',
    description:
      'A guide on how to use AI to get the essence of any YouTube video in just a few seconds.',
    images: ['https://aitoolbox.software/og-image-youtube-summarizer.png'],
  },
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
} 