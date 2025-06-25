import * as React from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Clock, Sparkles } from "lucide-react"

interface ComingSoonProps {
  title?: string
  description?: string
  className?: string
}

export function ComingSoon({ 
  title = "Coming Soon", 
  description = "This feature is currently under development.",
  className 
}: ComingSoonProps) {
  const suggestedTools = [
    { name: "AI Email Writer", href: "/email-writer", description: "Draft professional emails instantly" },
    { name: "GPT Chatbot", href: "/chatbot", description: "Chat with powerful AI on any topic" },
    { name: "Image Generator", href: "/image-generator", description: "Turn prompts into images" },
  ]

  return (
    <div className={`flex flex-col items-center justify-center min-h-[60vh] text-center space-y-6 ${className}`}>
      <div className="space-y-4">
        <div className="flex items-center justify-center w-16 h-16 mx-auto bg-primary/10 rounded-full">
          <Clock className="w-8 h-8 text-primary" />
        </div>
        
        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tight">{title}</h1>
          <p className="text-muted-foreground max-w-md mx-auto">{description}</p>
        </div>
      </div>

      <Separator className="w-24" />

      <div className="space-y-4">
        <div className="flex items-center gap-2 text-sm font-medium">
          <Sparkles className="w-4 h-4" />
          Try these tools instead
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-3xl">
          {suggestedTools.map((tool, index) => (
            <Card key={index} className="transition-colors hover:bg-muted/50">
              <CardHeader className="pb-2">
                <CardTitle className="text-sm">{tool.name}</CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <CardDescription className="text-xs mb-3">{tool.description}</CardDescription>
                <Button asChild size="sm" variant="outline" className="w-full">
                  <Link href="/">Go to Dashboard</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
} 