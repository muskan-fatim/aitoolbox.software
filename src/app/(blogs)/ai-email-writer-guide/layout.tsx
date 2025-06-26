import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Craft the Perfect Email in Seconds with an AI Email Writer',
  description:
    'Save time and write more effective emails. Our AI Email Writer helps you draft professional, clear, and engaging emails for any situation.',
  keywords: [
    'AI email writer',
    'email assistant',
    'write emails faster',
    'professional emails',
    'business communication',
    'email productivity',
  ],
  openGraph: {
    title: 'Craft the Perfect Email in Seconds with an AI Email Writer',
    description:
      'From follow-ups to new pitches, our AI Email Writer helps you communicate perfectly every time. Say goodbye to email anxiety.',
    url: 'https://aitoolbox.software/ai-email-writer-guide',
    siteName: 'AI Toolbox',
    images: [
      {
        url: 'https://aitoolbox.software/og-image-email-writer.png',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_US',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Craft the Perfect Email in Seconds with an AI Email Writer',
    description:
      'Learn how to use AI to write better, more effective emails in a fraction of the time.',
    images: ['https://aitoolbox.software/og-image-email-writer.png'],
  },
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
} 