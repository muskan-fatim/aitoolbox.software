import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Demystify Code with an AI Code Explainer',
  description:
    "Understand any code snippet in seconds. Our AI Code Explainer breaks down complex code into simple, easy-to-understand language. Perfect for students and developers.",
  keywords: [
    'AI code explainer',
    'understand code',
    'code documentation',
    'learn programming',
    'developer tools',
    'code analysis',
  ],
  openGraph: {
    title: 'Demystify Code with an AI Code Explainer',
    description:
      'Struggling with complex code? Let our AI Code Explainer simplify it for you. Get clear, step-by-step explanations for any programming language.',
    url: 'https://aitoolbox.software/ai-code-explainer-guide',
    siteName: 'AI Toolbox',
    images: [
      {
        url: 'https://aitoolbox.software/og-image-code-explainer.png',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_US',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Demystify Code with an AI Code Explainer',
    description:
      'Learn how to use an AI to understand complex code snippets instantly. The ultimate tool for developers and programming students.',
    images: ['https://aitoolbox.software/og-image-code-explainer.png'],
  },
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
} 