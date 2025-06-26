import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'How to Generate Ghibli Style Images with AI',
  description:
    'Create beautiful, enchanting Ghibli-style art using AI. This guide will show you the best prompts and tools to capture the iconic Studio Ghibli aesthetic.',
  keywords: [
    'Ghibli style AI art',
    'AI Ghibli art',
    'Midjourney Ghibli style',
    'Stable Diffusion Ghibli',
    'AI anime art',
    'Studio Ghibli AI',
  ],
  openGraph: {
    title: 'How to Generate Ghibli Style Images with AI',
    description:
      'A comprehensive guide on creating mesmerizing Ghibli-style artwork with AI image generators. Unleash your inner artist!',
    url: 'https://aitoolbox.software/how-to-generate-ghibhli-style-images',
    siteName: 'AI Toolbox',
    images: [
      {
        url: 'https://aitoolbox.software/og-image-ghibli-ai-images.png',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_US',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Generate Ghibli Style Images with AI',
    description:
      'Learn the prompts and techniques to generate stunning Ghibli-style images using AI.',
    images: ['https://aitoolbox.software/og-image-ghibli-ai-images.png'],
  },
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
