"use client"

import * as React from "react"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Skeleton } from "@/components/ui/skeleton"
import { Textarea } from "@/components/ui/textarea"
import { Bot, Check, Copy, Edit } from "lucide-react"

interface EmailOutputProps {
  generatedEmail: string
  isLoading: boolean
}

export function EmailOutput({ generatedEmail, isLoading }: EmailOutputProps) {
  const [isCopied, setIsCopied] = React.useState(false)
  const [isEditing, setIsEditing] = React.useState(false)
  const [subject, setSubject] = React.useState("")
  const [body, setBody] = React.useState("")

  React.useEffect(() => {
    if (generatedEmail) {
      try {
        const parsed = JSON.parse(generatedEmail)
        setSubject(parsed.subject || "Generated Subject")
        setBody(parsed.body || generatedEmail)
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
      } catch (_) {
        const lines = generatedEmail.split("\n")
        if (
          lines.length > 1 &&
          lines[0].toLowerCase().startsWith("subject:")
        ) {
          setSubject(lines[0].substring(8).trim())
          setBody(lines.slice(1).join("\n").trim())
        } else {
          setSubject("Generated Subject")
          setBody(generatedEmail)
        }
      }
      setIsEditing(false)
    }
  }, [generatedEmail])

  const handleCopy = () => {
    const fullEmail = `Subject: ${subject}\n\n${body}`
    navigator.clipboard.writeText(fullEmail)
    setIsCopied(true)
    setTimeout(() => setIsCopied(false), 2000)
  }

  const handleEditToggle = () => {
    setIsEditing(!isEditing)
  }

  if (isLoading) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Generated Email</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <Skeleton className="h-8 w-1/3" />
          <div className="space-y-2">
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-5/6" />
          </div>
          <Skeleton className="h-8 w-1/4" />
        </CardContent>
      </Card>
    )
  }

  if (!generatedEmail) {
    return (
      <Card className="flex flex-col items-center justify-center h-full text-center p-6">
        <CardHeader>
          <div className="flex items-center justify-center w-16 h-16 mx-auto bg-primary/10 rounded-full mb-4">
            <Bot className="w-8 h-8 text-primary" />
          </div>
          <CardTitle>Your email will appear here</CardTitle>
          <CardDescription>
            Fill in the details and let the AI work its magic.
          </CardDescription>
        </CardHeader>
      </Card>
    )
  }

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle>Generated Email</CardTitle>
        <div className="flex gap-2">
          <Button
            variant="outline"
            size="icon"
            onClick={handleEditToggle}
            title={isEditing ? "Save" : "Edit"}
          >
            <Edit className="h-4 w-4" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            onClick={handleCopy}
            title="Copy"
          >
            {isCopied ? (
              <Check className="h-4 w-4" />
            ) : (
              <Copy className="h-4 w-4" />
            )}
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        {isEditing ? (
          <div className="space-y-4">
            <Input
              value={subject}
              onChange={e => setSubject(e.target.value)}
              className="font-semibold text-lg"
              placeholder="Subject"
            />
            <Textarea
              value={body}
              onChange={e => setBody(e.target.value)}
              className="w-full h-80 resize-y"
              placeholder="Email body"
            />
          </div>
        ) : (
          <div className="space-y-4">
            <h3 className="font-semibold border-b pb-2 text-lg">{subject}</h3>
            <div className="prose prose-sm max-w-none whitespace-pre-wrap text-sm">
              {body}
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  )
} 