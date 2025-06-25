import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AI Resume Builder | AI Toolbox',
  description: 'Create professional resumes with AI-powered suggestions.',
  openGraph: {
    title: 'AI Resume Builder | AI Toolbox',
    description: 'Create professional resumes with AI-powered suggestions.',
    type: 'website',
  },
};

export default function ResumeBuilderLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
} 