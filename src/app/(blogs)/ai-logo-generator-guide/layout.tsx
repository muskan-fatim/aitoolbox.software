import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Design a Stunning Logo in Minutes with an AI Logo Generator',
  description:
    'Get a professional logo for your business or project without the high cost. Our AI Logo Generator creates unique, beautiful logos based on your style preferences.',
  keywords: [
    'AI logo generator',
    'logo design',
    'free logo maker',
    'business logo',
    'branding tool',
    'custom logo',
  ],
  openGraph: {
    title: 'Design a Stunning Logo in Minutes with an AI Logo Generator',
    description:
      'Create the perfect logo for your brand with AI. Fast, easy, and affordable logo design for startups, small businesses, and creators.',
    url: 'https://aitoolbox.software/ai-logo-generator-guide',
    siteName: 'AI Toolbox',
    images: [
      {
        url: 'https://aitoolbox.software/og-image-logo-generator.png',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_US',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Design a Stunning Logo in Minutes with an AI Logo Generator',
    description:
      'A guide to using AI to generate professional, unique logos for your brand instantly.',
    images: ['https://aitoolbox.software/og-image-logo-generator.png'],
  },
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
} 