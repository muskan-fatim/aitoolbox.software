import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AI Startup Idea Generator | AI Toolbox',
  description: 'Generate innovative startup ideas with AI assistance for any industry or market.',
  openGraph: {
    title: 'AI Startup Idea Generator | AI Toolbox',
    description: 'Generate innovative startup ideas with AI assistance for any industry or market.',
    type: 'website',
  },
};

export default function StartupIdeaGeneratorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
} 