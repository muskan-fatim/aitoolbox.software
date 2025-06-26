import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'How to Build and Use an AI Chatbot for Your Website',
  description:
    'Engage visitors, answer questions, and capture leads 24/7 with a custom AI chatbot. Learn how to build and integrate one with our easy-to-use platform.',
  keywords: [
    'AI chatbot',
    'website chatbot',
    'customer service bot',
    'lead generation chatbot',
    'build a chatbot',
    'no-code chatbot',
  ],
  openGraph: {
    title: 'How to Build and Use an AI Chatbot for Your Website',
    description:
      'Transform your website engagement with a powerful AI chatbot. Our guide walks you through the benefits and setup process.',
    url: 'https://aitoolbox.software/how-to-build-ai-chatbot',
    siteName: 'AI Toolbox',
    images: [
      {
        url: 'https://aitoolbox.software/og-image-chatbot.png',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_US',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Build and Use an AI Chatbot for Your Website',
    description:
      'A step-by-step guide to implementing a powerful AI chatbot on your website to boost user engagement and support.',
    images: ['https://aitoolbox.software/og-image-chatbot.png'],
  },
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
} 