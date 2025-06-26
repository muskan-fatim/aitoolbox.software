import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Build a Job-Winning Resume with an AI Resume Builder',
  description:
    'Create a professional, ATS-friendly resume in minutes. Our AI Resume Builder helps you highlight your skills and experience to land your dream job.',
  keywords: [
    'AI resume builder',
    'resume creator',
    'CV maker',
    'job application',
    'professional resume',
    'ATS-friendly resume',
  ],
  openGraph: {
    title: 'Build a Job-Winning Resume with an AI Resume Builder',
    description:
      'Stop struggling with resume formatting. Our AI-powered tool helps you build a perfectly tailored resume that gets noticed by recruiters.',
    url: 'https://aitoolbox.software/ai-resume-builder-guide',
    siteName: 'AI Toolbox',
    images: [
      {
        url: 'https://aitoolbox.software/og-image-resume-builder.png',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_US',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Build a Job-Winning Resume with an AI Resume Builder',
    description:
      'A step-by-step guide to using AI to create a powerful, professional resume that will help you stand out.',
    images: ['https://aitoolbox.software/og-image-resume-builder.png'],
  },
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
} 