import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Achieve Flawless Writing with an AI Grammar Fixer',
  description:
    'Write with confidence. Our AI Grammar Fixer instantly corrects spelling, grammar, and punctuation mistakes, helping you produce error-free text every time.',
  keywords: [
    'AI grammar fixer',
    'grammar checker',
    'proofreading tool',
    'writing assistant',
    'improve writing',
    'punctuation checker',
  ],
  openGraph: {
    title: 'Achieve Flawless Writing with an AI Grammar Fixer',
    description:
      'From simple typos to complex grammatical errors, our AI Grammar Fixer ensures your writing is always clear, professional, and polished.',
    url: 'https://aitoolbox.software/ai-grammar-fixer-guide',
    siteName: 'AI Toolbox',
    images: [
      {
        url: 'https://aitoolbox.software/og-image-grammar-fixer.png',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_US',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Achieve Flawless Writing with an AI Grammar Fixer',
    description:
      'A guide to using AI to eliminate grammatical errors and elevate the quality of your writing.',
    images: ['https://aitoolbox.software/og-image-grammar-fixer.png'],
  },
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
} 