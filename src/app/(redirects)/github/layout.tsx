import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AIToolbox - GitHub Repository',
  description: 'Explore the source code of AIToolbox - An advanced AI tools collection platform. View our open-source project, contribute, and stay updated with the latest developments.',
  openGraph: {
    title: 'AIToolbox - GitHub Repository',
    description: 'Explore the source code of AIToolbox - An advanced AI tools collection platform.',
    type: 'website',
  }
}

export default function GitHubLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
