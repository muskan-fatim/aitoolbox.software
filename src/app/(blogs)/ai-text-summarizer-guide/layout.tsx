import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Get to the Point Instantly with an AI Text Summarizer',
  description:
    'Condense long articles, reports, and documents into key points. Our AI Text Summarizer saves you time and helps you grasp complex information quickly.',
  keywords: [
    'AI text summarizer',
    'summarize text',
    'article summarizer',
    'reading comprehension',
    'productivity tool',
    'information overload',
  ],
  openGraph: {
    title: 'Get to the Point Instantly with an AI Text Summarizer',
    description:
      'Overwhelmed with information? Our AI Text Summarizer distills any text into a concise, easy-to-digest summary. Read smarter, not harder.',
    url: 'https://aitoolbox.software/ai-text-summarizer-guide',
    siteName: 'AI Toolbox',
    images: [
      {
        url: 'https://aitoolbox.software/og-image-text-summarizer.png',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_US',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Get to the Point Instantly with an AI Text Summarizer',
    description:
      'Learn how to use AI to summarize long texts and absorb key information in a fraction of the time.',
    images: ['https://aitoolbox.software/og-image-text-summarizer.png'],
  },
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
} 