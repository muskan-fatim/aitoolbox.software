import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Your Ultimate Guide to Using an AI Blog Writer',
  description:
    'Learn how to leverage AI to write high-quality, engaging, and SEO-optimized blog posts in a fraction of the time. Boost your content strategy today!',
  keywords: [
    'AI blog writer',
    'content creation',
    'SEO writing assistant',
    'automated content',
    'blogging tools',
    'AI writing tool',
  ],
  openGraph: {
    title: 'Your Ultimate Guide to Using an AI Blog Writer',
    description:
      'Unlock the power of AI for your blog. Our guide shows you how to write better content, faster, with our advanced AI Blog Writer.',
    url: 'https://aitoolbox.software/guide-to-ai-blog-writer',
    siteName: 'AI Toolbox',
    images: [
      {
        url: 'https://aitoolbox.software/og-image-blog-writer.png',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_US',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Your Ultimate Guide to Using an AI Blog Writer',
    description:
      'Learn how to use AI to supercharge your blogging and content creation process.',
    images: ['https://aitoolbox.software/og-image-blog-writer.png'],
  },
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
} 