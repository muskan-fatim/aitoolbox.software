import { MetadataRoute } from 'next';

const URL = 'https://aitoolbox.software';

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    '',
    '/blog-writer',
    '/chatbot',
    '/code-explainer',
    '/email-writer',
    '/grammar-fixer',
    '/idea-generator',
    '/image-generator',
    '/logo-generator',
    '/resume-builder',
    '/text-summarizer',
    '/youtube-summarizer',
  ].map((route) => ({
    url: `${URL}${route}`,
    lastModified: new Date().toISOString(),
  }));

  return [...routes];
} 