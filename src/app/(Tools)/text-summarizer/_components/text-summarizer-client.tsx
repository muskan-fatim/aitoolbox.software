"use client"

import { useState } from "react"
import { toast } from "sonner"
import { TextSummarizerForm, FormValues } from "./text-summarizer-form"
import { TextSummarizerOutput } from "./text-summarizer-output"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function TextSummarizerClient() {
  const [isLoading, setIsLoading] = useState(false)
  const [summary, setSummary] = useState("")

  const handleSubmit = async (data: FormValues) => {
    setIsLoading(true)
    setSummary("")

    try {
      const lengthMap = {
        "very-short": "approximately 50 words",
        "short": "approximately 100 words",
        "medium": "approximately 250 words",
        "detailed": "approximately 500 words",
      }
      const targetLength = lengthMap[data.summaryLength]
      const systemPrompt = `You are an expert text summarizer. Create a concise, accurate summary that captures the main points, key arguments, and conclusions of the input text. Preserve the original meaning and important details. Aim for a summary that is ${targetLength}.`

      const response = await fetch("/api/ai", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          type: "chat",
          options: {
            messages: [
              { role: "system", content: systemPrompt },
              { role: "user", content: `Summarize this text:\n\n${data.text}` },
            ],
            model: "openai",
            temperature: 0.3,
            max_tokens: 2000,
          },
        }),      })

      if (!response.ok) throw new Error("Failed to generate summary")

      const result = await response.json()
      setSummary(result.data)
    } catch (error) {
      console.error(error)
      toast.error("Failed to generate summary. Please try again.")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="container mx-auto py-8 max-w-4xl">
      <h1 className="text-3xl font-bold mb-2">AI Text Summarizer</h1>
      <p className="text-muted-foreground mb-6">
        Compress lengthy text into concise summaries while preserving key information. Free online AI text summarization tool for articles, reports, and more.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
        <TextSummarizerForm onSubmit={handleSubmit} isLoading={isLoading} />
        <TextSummarizerOutput summary={summary} isLoading={isLoading} />
      </div>
      <Card>
        <CardHeader>
          <CardTitle>About Our Free AI Text Summarizer Tool</CardTitle>
          <CardDescription>Discover the best AI summary generator for efficient content condensation and quick reading</CardDescription>
        </CardHeader>
        <CardContent className="space-y-8">
          <section className="prose max-w-none">
            <h2 className="text-2xl font-bold mb-4">The Power of AI Text Summarization</h2>
            <p>In today's information-overloaded world, the ability to quickly distill key insights from lengthy texts is invaluable. Our AI Text Summarizer is a free online tool that helps you create concise summaries of articles, reports, research papers, and more. Whether you're a student, researcher, or professional, this AI-powered summary generator saves time while preserving essential information.</p>
          </section>
          <section>
            <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
              Why Use Our AI Summary Generator?
            </h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>Save hours of reading time with instant summaries</li>
              <li>Improve comprehension of complex documents</li>
              <li>Enhance productivity in research and content creation</li>
              <li>Get customizable summary lengths for different needs</li>
              <li>Free online access with no sign-up required</li>
            </ul>
          </section>
          <section>
            <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
              How Our AI Text Summarizer Works
            </h2>
            <p>Our advanced AI summary tool uses cutting-edge natural language processing (NLP) and machine learning algorithms to analyze your text. It identifies main ideas, key arguments, and supporting details, then reconstructs them into a coherent, shorter version. This free AI text summarizer processes content in seconds, making it the best choice for quick, accurate summarization.</p>
          </section>
          <section>
            <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
              Best Practices for Effective Text Summarization
            </h2>
            <ol className="list-decimal pl-5 space-y-2">
              <li>Input clean, well-structured text for optimal results</li>
              <li>Choose the appropriate summary length based on your needs</li>
              <li>Review the generated summary and cross-reference with original text</li>
              <li>Use for initial understanding, not as a replacement for full reading</li>
              <li>Combine with other AI tools for comprehensive content analysis</li>
            </ol>
          </section>
          <section className="prose max-w-none">
            <h2 className="text-2xl font-bold mb-4">A Comprehensive Guide to Text Summarization</h2>
            <p>Text summarization is both an art and a science. Our AI tool automates this process, but understanding the principles behind it can help you make the most of the results. This guide covers everything from basic concepts to advanced techniques in AI-powered summarization.</p>
            <h3 className="text-xl font-semibold mt-6 mb-3">The Psychology of Summarization</h3>
            <p>Effective summaries tap into how our brains process information. Research shows that people retain key points better when presented concisely. Our AI summary generator leverages this by focusing on core messages while eliminating redundancy.</p>
            <h3 className="text-xl font-semibold mt-6 mb-3">Types of Summaries</h3>
            <p>From extractive (pulling key sentences) to abstractive (paraphrasing content), our tool uses advanced abstractive techniques for more natural, human-like summaries.</p>
            <h3 className="text-xl font-semibold mt-6 mb-3">SEO Benefits of Summarization</h3>
            <p>Using our free online AI text summarizer can boost your content strategy. Create meta descriptions, social media teasers, and article abstracts optimized for search engines like Google.</p>
            <p>As the best free AI summary tool, we're committed to helping you navigate the sea of information efficiently. Try our text summarizer today and experience the difference in your productivity.</p>
          </section>
        </CardContent>
      </Card>
    </div>
  )
} 