import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AI Image Generator | AI Toolbox',
  description: 'Create stunning images with AI using simple text prompts.',
  openGraph: {
    title: 'AI Image Generator | AI Toolbox',
    description: 'Create stunning images with AI using simple text prompts.',
    type: 'website',
  },
};

export default function ImageGeneratorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
} 