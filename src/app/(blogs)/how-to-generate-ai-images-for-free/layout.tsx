import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'How to Generate AI Images for Free: A Step-by-Step Guide',
  description:
    'Learn how to create stunning AI-generated images for free. Our guide covers the best tools and techniques to get you started, no credit card required.',
  keywords: [
    'AI image generator',
    'free AI art generator',
    'generate AI images',
    'DALL-E free',
    'Midjourney free alternative',
    'AI art for free',
  ],
  openGraph: {
    title: 'How to Generate AI Images for Free: A Step-by-Step Guide',
    description:
      'Discover the secrets to generating amazing AI images without spending a dime. Perfect for artists, marketers, and hobbyists.',
    url: 'https://aitoolbox.software/how-to-generate-ai-images-for-free',
    siteName: 'AI Toolbox',
    images: [
      {
        url: 'https://aitoolbox.software/og-image-free-ai-images.png',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_US',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Generate AI Images for Free: A Step-by-Step Guide',
    description:
      'Learn how to create stunning AI-generated images for free with our comprehensive guide.',
    images: ['https://aitoolbox.software/og-image-free-ai-images.png'],
  },
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
