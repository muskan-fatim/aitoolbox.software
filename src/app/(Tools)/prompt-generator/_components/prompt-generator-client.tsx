"use client"

import React, { useState, useRef, useEffect } from "react"
import { PromptGeneratorForm, PromptFormValues } from "./prompt-generator-form"
import { PromptOutput } from "./prompt-generator-output"
import { Progress } from "@/components/ui/progress"
import { toast } from "sonner"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"
import { Button } from "@/components/ui/button"
import { ChevronsUpDown, Brain, Zap, Sparkles, Code, MessageSquare } from "lucide-react"
import { useIsMobile } from "@/hooks/use-mobile"

export default function PromptGeneratorClient() {
  const [generatedPrompt, setGeneratedPrompt] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [progress, setProgress] = useState(0)
  const [error, setError] = useState<string | null>(null)
  const [isOutputOpen, setIsOutputOpen] = useState(false)
  const [currentFormData, setCurrentFormData] = useState<PromptFormValues | null>(null)

  const outputRef = useRef<HTMLDivElement>(null)
  const isMobile = useIsMobile()

  const handleFormSubmit = async (data: PromptFormValues) => {
    setIsLoading(true)
    setGeneratedPrompt("")
    setError(null)
    setProgress(0)
    setIsOutputOpen(true)
    setCurrentFormData(data)

    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 95) {
          clearInterval(interval)
          return prev
        }
        return prev + 5
      })
    }, 200)

    try {
      // Create different system prompts based on the prompt type
      const userPromptSystemPrompt = `You are an expert prompt engineer specializing in optimizing USER PROMPTS for AI interactions. Your role is to transform basic user prompts into powerful, well-structured instructions that produce better AI responses.

Core Principles for User Prompts:
1. Clarity: Make requests crystal clear and unambiguous
2. Specificity: Add relevant details, context, and constraints
3. Structure: Organize information logically for AI understanding
4. Purpose: Align with the intended outcome and desired response
5. Completeness: Include all necessary components for optimal results

Enhancement Framework for User Prompts:
- Analyze the original prompt's intent and identify gaps
- Add missing context, constraints, and specifications
- Structure with clear sections when appropriate
- Include desired format, length, tone, and style
- Add examples or format specifications when helpful
- Consider edge cases and potential misunderstandings
- Optimize for maximum AI comprehension and response quality

Best Practices for User Prompts:
- Start with clear role definition if needed
- Provide comprehensive context and background
- Specify desired output format and length
- Include tone and style requirements
- Add constraints and limitations
- Use examples when helpful
- End with clear call-to-action

Output Structure:
Present the enhanced user prompt in PLAIN TEXT format only. Do not use markdown, bold text, asterisks, hashtags, or any special formatting. Use simple line breaks and spacing for organization. Make it immediately usable and significantly more effective than the original.`

      const systemPromptSystemPrompt = `You are a master prompt engineer specializing in crafting SYSTEM PROMPTS that define AI behavior and capabilities. Your role is to transform basic system prompts into comprehensive, well-structured instructions that establish clear AI personas and operational guidelines.

Core Principles for System Prompts:
1. Role Definition: Establish clear AI identity and expertise
2. Behavioral Guidelines: Define how the AI should interact and respond
3. Capabilities: Specify what the AI can and cannot do
4. Response Format: Establish consistent output structure and style
5. Constraints: Set clear boundaries and limitations

Enhancement Framework for System Prompts:
- Define the AI's role, expertise, and identity clearly
- Establish behavioral guidelines and interaction patterns
- Set response format, tone, and communication style
- Include relevant constraints, rules, and limitations
- Define handling of edge cases and error scenarios
- Optimize for consistent, reliable AI behavior

Best Practices for System Prompts:
- Begin with clear role and identity definition
- Establish expertise level and knowledge domains
- Define communication style and tone
- Set response structure and formatting rules
- Include behavioral guidelines and constraints
- Specify handling of various scenarios
- End with clear operational parameters

Output Structure:
Present the enhanced system prompt in PLAIN TEXT format only. Do not use markdown, bold text, asterisks, hashtags, or any special formatting. Use simple line breaks and spacing for organization. Make it immediately deployable and significantly more effective than the original.`

      const systemPrompt = data.promptType === "user" ? userPromptSystemPrompt : systemPromptSystemPrompt

      const userPrompt = data.promptType === "user" 
        ? `Please enhance and optimize this USER PROMPT:

**Original User Prompt:** ${data.prompt}

**Purpose:** This is a user prompt that will be sent to an AI to get a specific response or output.

${data.category ? `**Category/Domain:** ${data.category}` : ""}
${data.tone ? `**Desired Response Tone:** ${data.tone}` : ""}
${data.objective ? `**Specific Objective/Goal:** ${data.objective}` : ""}

Transform this basic user prompt into a highly effective, well-structured instruction that will produce significantly better AI responses. Include:
- Clear context and background information
- Specific formatting requirements
- Desired output structure and length
- Tone and style specifications
- Relevant constraints and guidelines
- Examples if helpful

IMPORTANT: Provide your response in PLAIN TEXT format only. Do not use markdown formatting, asterisks, hashtags, bold text, or any special characters for formatting. Use simple line breaks and spacing for organization.

Make it immediately usable and significantly more effective than the original.`
        : `Please enhance and optimize this SYSTEM PROMPT:

**Original System Prompt:** ${data.prompt}

**Purpose:** This is a system prompt that will define an AI's role, behavior, and operational parameters.

${data.category ? `**Domain/Expertise Area:** ${data.category}` : ""}
${data.tone ? `**Desired AI Communication Style:** ${data.tone}` : ""}
${data.objective ? `**Primary Function/Objective:** ${data.objective}` : ""}

Transform this basic system prompt into a comprehensive, well-structured instruction set that clearly defines the AI's:
- Role and identity
- Expertise and capabilities
- Communication style and tone
- Response format and structure
- Behavioral guidelines and constraints
- Handling of various scenarios

IMPORTANT: Provide your response in PLAIN TEXT format only. Do not use markdown formatting, asterisks, hashtags, bold text, or any special characters for formatting. Use simple line breaks and spacing for organization.

Make it immediately deployable and significantly more effective than the original.`

      const response = await fetch("/api/ai", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          type: "chat",
          prompt: userPrompt,
          options: {
            messages: [
              { role: "system", content: systemPrompt },
              { role: "user", content: userPrompt },
            ],
            model: "openai",
            temperature: 0.7,
            max_tokens: 2000,
          },
        }),
      });

      clearInterval(interval);
      setProgress(100);

      if (!response.ok) {
        let errorData: { error?: string } = {};
        try {
          errorData = await response.json();
        } catch {
          errorData = {
            error: "An unexpected error occurred. Please try again.",
          };
        }
        throw new Error(
          errorData.error || `Request failed with status ${response.status}`
        );
      }

      const result = await response.json() as { data: string };
      setGeneratedPrompt(result.data);
      toast.success("Prompt Enhanced!", {
        description: "Your optimized prompt is ready to use.",
      });
    } catch (error) {
      const message = error instanceof Error ? error.message : "An unknown error occurred.";
      console.error("Submission Error:", error)
      setError(message)
      toast.error(message)
    } finally {
      setIsLoading(false)
      setTimeout(() => setProgress(0), 1000)
    }
  }

  const handleRegenerate = () => {
    if (currentFormData) {
      handleFormSubmit(currentFormData)
    }
  }

  useEffect(() => {
    if ((generatedPrompt || error) && isMobile && outputRef.current) {
      setTimeout(() => {
        outputRef.current?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  }, [generatedPrompt, error, isMobile]);

  return (
    <div className="container mx-auto p-4 md:p-6 lg:p-8">
      <div className="max-w-6xl mx-auto">
        <header className="text-center mb-8 md:mb-10 relative">
          {/* Background decoration */}
          <div className="absolute inset-0 -top-10 bg-gradient-to-br from-blue-50/50 via-purple-50/30 to-indigo-50/50 rounded-3xl -z-10"></div>
          
          <div className="relative pt-6">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="p-3 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl shadow-lg">
                <Brain className="h-8 w-8 text-white" />
              </div>
              <div className="p-2 bg-gradient-to-br from-orange-400 to-red-500 rounded-lg shadow-md animate-pulse">
                <Zap className="h-6 w-6 text-white" />
              </div>
            </div>
            
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent mb-3">
              Free AI Prompt Generator & Optimizer
            </h1>
            
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full mb-4">
              <Sparkles className="h-4 w-4 text-blue-600" />
              <span className="text-sm font-medium text-blue-700">Unlimited & No Login Required</span>
            </div>
            
            <p className="text-muted-foreground mt-2 md:mt-3 max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
              Generate optimized AI prompts for ChatGPT, Claude, Gemini, and more. 
              <span className="text-purple-600 font-medium"> Transform basic prompts into professional instructions</span> - completely free and unlimited.
            </p>

            <div className="mt-6 md:mt-8 grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
              <div className="p-3 bg-white rounded-lg shadow-sm border border-gray-200">
                <MessageSquare className="h-6 w-6 text-blue-600 mx-auto mb-2" />
                <div className="text-xs font-medium text-gray-700">User Prompts</div>
              </div>
              <div className="p-3 bg-white rounded-lg shadow-sm border border-gray-200">
                <Code className="h-6 w-6 text-purple-600 mx-auto mb-2" />
                <div className="text-xs font-medium text-gray-700">System Prompts</div>
              </div>
              <div className="p-3 bg-white rounded-lg shadow-sm border border-gray-200">
                <Sparkles className="h-6 w-6 text-green-600 mx-auto mb-2" />
                <div className="text-xs font-medium text-gray-700">Enhanced Output</div>
              </div>
              <div className="p-3 bg-white rounded-lg shadow-sm border border-gray-200">
                <Zap className="h-6 w-6 text-orange-600 mx-auto mb-2" />
                <div className="text-xs font-medium text-gray-700">Instant Results</div>
              </div>
            </div>
          </div>
        </header>

        <main className="space-y-6 md:space-y-8">
          <div>
            <PromptGeneratorForm onSubmit={handleFormSubmit} isLoading={isLoading} />
          </div>

          <div ref={outputRef}>
            <Collapsible
              open={isOutputOpen}
              onOpenChange={setIsOutputOpen}
              className="w-full"
            >
              {(isLoading || generatedPrompt || error) && (
                <div className="flex items-center justify-between rounded-t-lg border bg-gradient-to-r from-slate-50 to-gray-50 px-4 py-3">
                  <h4 className="font-semibold flex items-center gap-2">
                    <Brain className="h-4 w-4 text-purple-600" />
                    <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                      Enhanced Prompt
                    </span>
                  </h4>
                  <CollapsibleTrigger asChild>
                    <Button variant="ghost" size="sm" className="w-9 p-0 hover:bg-purple-100">
                      <ChevronsUpDown className="h-4 w-4 text-purple-600" />
                      <span className="sr-only">Toggle</span>
                    </Button>
                  </CollapsibleTrigger>
                </div>
              )}
              
              <CollapsibleContent className="rounded-b-lg border border-t-0 p-4 data-[state=closed]:hidden">
                <div className="space-y-4">
                  {isLoading && (
                    <div className="w-full space-y-2">
                      <div className="flex items-center gap-2 text-sm text-purple-600 font-medium">
                        <Brain className="h-4 w-4 animate-pulse" />
                        Enhancing your prompt with AI...
                      </div>
                      <Progress value={progress} className="h-2" />
                    </div>
                  )}
                  {error && !isLoading && (
                    <div className="text-destructive p-4 bg-destructive/10 rounded-md border border-destructive/20">
                      <div className="flex items-center gap-2 font-medium">
                        <Zap className="h-4 w-4" />
                        Error
                      </div>
                      <p className="mt-1">{error}</p>
                    </div>
                  )}
                  <PromptOutput
                    generatedPrompt={generatedPrompt}
                    isLoading={isLoading}
                    promptType={currentFormData?.promptType || "user"}
                    originalPrompt={currentFormData?.prompt || ""}
                    onRegenerate={handleRegenerate}
                  />
                </div>
              </CollapsibleContent>
            </Collapsible>
          </div>
        </main>
      </div>
    </div>
  )
} 