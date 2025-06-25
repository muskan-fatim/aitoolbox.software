import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AI Idea Generator | AI Toolbox',
  description: 'Get creative ideas for your next project or content.',
  openGraph: {
    title: 'AI Idea Generator | AI Toolbox',
    description: 'Get creative ideas for your next project or content.',
    type: 'website',
  },
};

export default function IdeaGeneratorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
} 