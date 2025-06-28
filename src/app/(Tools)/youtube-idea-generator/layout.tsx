import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AI YouTube Video Idea Generator | AI Toolbox',
  description: 'Generate creative YouTube video ideas for any niche or topic with AI assistance.',
  openGraph: {
    title: 'AI YouTube Video Idea Generator | AI Toolbox',
    description: 'Generate creative YouTube video ideas for any niche or topic with AI assistance.',
    type: 'website',
  },
};

export default function YoutubeIdeaGeneratorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
} 