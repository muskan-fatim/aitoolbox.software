import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AI Logo Generator | AI Toolbox',
  description: 'Create professional logos for your business using AI.',
  openGraph: {
    title: 'AI Logo Generator | AI Toolbox',
    description: 'Create professional logos for your business using AI.',
    type: 'website',
  },
};

export default function LogoGeneratorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
} 