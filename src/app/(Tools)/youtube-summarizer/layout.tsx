import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AI YouTube Summarizer | AI Toolbox',
  description: 'Get summaries of YouTube videos without watching them.',
  openGraph: {
    title: 'AI YouTube Summarizer | AI Toolbox',
    description: 'Get summaries of YouTube videos without watching them.',
    type: 'website',
  },
};

export default function YoutubeSummarizerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
} 