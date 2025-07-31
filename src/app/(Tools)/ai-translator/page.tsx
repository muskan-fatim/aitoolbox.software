import TranslatorClient from "./_components/translator-client";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Translator - Translate Text Between 100+ Languages Instantly",
  description: "Accurate, AI-powered translation tool supporting 100+ languages. Perfect for business, travel, education, and personal use. No signup required.",
  keywords: ["AI translator", "language translation", "translate text", "multilingual translation", "AI language tool", "free translator", "online translation"],
  openGraph: {
    title: "AI Translator - Translate Text Between 100+ Languages Instantly",
    description: "Accurate, AI-powered translation tool supporting 100+ languages. Perfect for business, travel, education, and personal use.",
  },
};

const translationUseCases = [
  {
    title: "Business & Professional",
    description: "Translate business documents, emails, and communications with clients and partners worldwide.",
  },
  {
    title: "Travel & Tourism",
    description: "Break language barriers while traveling with instant translations for common phrases and conversations.",
  },
  {
    title: "Education & Learning",
    description: "Support language learning by comparing translations and understanding context in different languages.",
  },
  {
    title: "Content Localization",
    description: "Adapt your website, app, or content for global audiences with accurate translations.",
  },
  {
    title: "Personal Communication",
    description: "Connect with friends and family across language barriers with natural-sounding translations.",
  },
  {
    title: "Academic Research",
    description: "Access and understand research papers and documents in multiple languages.",
  },
];

export default function TranslatorPage() {
  return (
    <div className="container mx-auto p-4 md:p-8">
      <div className="max-w-4xl mx-auto">
        <header className="mb-10">
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-center">
            AI-Powered Language Translator
          </h1>
          <p className="text-muted-foreground mt-3 max-w-2xl mx-auto text-center">
            Translate text between 100+ languages with high accuracy.
            <br className="hidden sm:inline" /> Our AI understands context for more natural translations.
          </p>
        </header>
        
        <main className="mb-12">
          <TranslatorClient />
        </main>

        {/* Translation Use Cases */}
        <div className="grid gap-6 mb-10">
          <h2 className="text-2xl font-bold">Perfect For</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {translationUseCases.map((useCase, index) => (
              <div key={index} className="border p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <h3 className="font-medium mb-1">{useCase.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {useCase.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* How It Works */}
        <div className="mb-10">
          <h2 className="text-2xl font-bold mb-4">How It Works</h2>
          <ol className="list-decimal ml-5 space-y-3">
            <li>Enter or paste your text in the source language</li>
            <li>Select the source and target languages from the dropdown menus</li>
            <li>Click "Translate" to get an instant, accurate translation</li>
            <li>Copy the translated text or listen to the pronunciation</li>
          </ol>
        </div>

        {/* Translation Tips */}
        <div className="mt-12 border-t pt-8">
          <h2 className="text-2xl font-bold mb-4">Translation Tips</h2>
          <ul className="space-y-4">
            <li>
              <strong>Be clear and concise:</strong> Shorter sentences often translate more accurately.
            </li>
            <li>
              <strong>Use proper punctuation:</strong> This helps the AI understand sentence structure better.
            </li>
            <li>
              <strong>Check for context:</strong> For important translations, verify the meaning with native speakers.
            </li>
            <li>
              <strong>Avoid slang and idioms:</strong> These often don't translate well between languages.
            </li>
          </ul>
        </div>

        {/* FAQ Section */}
        <div className="mt-12 border-t pt-8">
          <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
          <div className="space-y-6">
            <div>
              <h3 className="font-semibold text-lg">How accurate are the translations?</h3>
              <p className="text-muted-foreground mt-1">
                Our AI translator provides highly accurate translations by understanding context. However, for critical documents, we recommend professional human translation.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-lg">Which languages do you support?</h3>
              <p className="text-muted-foreground mt-1">
                We support over 100 languages including Spanish, French, German, Chinese, Japanese, Arabic, and many more.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-lg">Is there a word limit for translation?</h3>
              <p className="text-muted-foreground mt-1">
                Yes, there's a limit of 5000 characters per translation for optimal performance and accuracy.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}