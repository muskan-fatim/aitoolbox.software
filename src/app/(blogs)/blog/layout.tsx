import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blog | AI Toolbox',
  description: 'Explore our blog for the latest articles, guides, and tutorials on AI tools and technology. Stay updated with tips and tricks from AI Toolbox.',
  openGraph: {
    title: 'Blog | AI Toolbox',
    description: 'Explore our blog for the latest articles, guides, and tutorials on AI tools and technology.',
    url: 'https://aitoolbox.software/blog',
    siteName: 'AI Toolbox',
    images: [
      {
        url: 'https://aitoolbox.software/og-image-blog.png',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Blog | AI Toolbox',
    description: 'The official blog for AI Toolbox. Find tutorials, guides, and more.',
    images: ['https://aitoolbox.software/og-image-blog.png'],
  },
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
