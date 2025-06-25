"use client"

import { useState, useRef, useEffect } from "react"
import { EmailWriterForm, EmailFormValues } from "./email-writer-form"
import { EmailOutput } from "./email-output"
import { Progress } from "@/components/ui/progress"
import { toast } from "sonner"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"
import { Button } from "@/components/ui/button"
import { ChevronsUpDown } from "lucide-react"
import { useIsMobile } from "@/hooks/use-mobile"

export default function EmailWriterClient() {
  const [generatedEmail, setGeneratedEmail] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [progress, setProgress] = useState(0)
  const [error, setError] = useState<string | null>(null)
  const [isOutputOpen, setIsOutputOpen] = useState(false)

  const outputRef = useRef<HTMLDivElement>(null)
  const isMobile = useIsMobile()

  const handleFormSubmit = async (data: EmailFormValues) => {
    setIsLoading(true)
    setGeneratedEmail("")
    setError(null)
    setProgress(0)
    setIsOutputOpen(true) // Open on submit

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
      const response = await fetch("/api/email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      })

      clearInterval(interval)
      setProgress(100)

      if (!response.ok) {
        let errorData;
        try {
          errorData = await response.json();
          // eslint-disable-next-line @typescript-eslint/no-unused-vars
        } catch (_) {
          errorData = { error: "An unexpected error occurred. Please try again." }
        }
        throw new Error(errorData.error || `Request failed with status ${response.status}`);
      }

      const result = await response.json()
      setGeneratedEmail(result.data)
      toast.success("Email Generated!", {
        description: "Your AI-powered email is ready.",
      })
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

  useEffect(() => {
    if ((generatedEmail || error) && isMobile && outputRef.current) {
      setTimeout(() => {
        outputRef.current?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  }, [generatedEmail, error, isMobile]);


  return (
    <>
      <div className="container mx-auto p-4 md:p-8">
        <div className="max-w-4xl mx-auto">
          <header className="text-center mb-10">
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight">
              AI Email Writer
            </h1>
            <p className="text-muted-foreground mt-3 max-w-2xl mx-auto">
              Just provide the key points, and our AI will craft a professional
              email for any situation.
            </p>
          </header>

          <main className="space-y-8">
            <div>
              <EmailWriterForm onSubmit={handleFormSubmit} isLoading={isLoading} />
            </div>

            <div ref={outputRef}>
              <Collapsible
                open={isOutputOpen}
                onOpenChange={setIsOutputOpen}
                className="w-full"
              >
                {(isLoading || generatedEmail || error) && (
                  <div className="flex items-center justify-between rounded-t-lg border px-4 py-3">
                    <h4 className="font-semibold">Generated Output</h4>
                    <CollapsibleTrigger asChild>
                      <Button variant="ghost" size="sm" className="w-9 p-0">
                        <ChevronsUpDown className="h-4 w-4" />
                        <span className="sr-only">Toggle</span>
                      </Button>
                    </CollapsibleTrigger>
                  </div>
                )}
                
                <CollapsibleContent className="rounded-b-lg border border-t-0 p-4 data-[state=closed]:hidden">
                  <div className="space-y-4">
                    {isLoading && (
                      <div className="w-full">
                        <Progress value={progress} />
                      </div>
                    )}
                    {error && !isLoading && (
                      <div className="text-destructive p-4 bg-destructive/10 rounded-md">
                        {error}
                      </div>
                    )}
                    <EmailOutput
                      generatedEmail={generatedEmail}
                      isLoading={isLoading}
                    />
                  </div>
                </CollapsibleContent>
              </Collapsible>
            </div>
          </main>
        </div>
      </div>
    </>
  )
} 