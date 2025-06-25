git import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AI Code Explainer | AI Toolbox',
  description: 'Get clear explanations for complex code snippets.',
  openGraph: {
    title: 'AI Code Explainer | AI Toolbox',
    description: 'Get clear explanations for complex code snippets.',
    type: 'website',
  },
};

export default function CodeExplainerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
} 