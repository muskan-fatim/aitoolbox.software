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
import { Skeleton } from "@/components/ui/skeleton"
import { Textarea } from "@/components/ui/textarea"
import { 
  Bot, 
  Check, 
  Copy, 
  Edit, 
  Brain, 
  Sparkles, 
  User, 
  Settings,
  MessageSquare,
  Zap,
  Download,
  RefreshCw
} from "lucide-react"
import { Badge } from "@/components/ui/badge"

interface PromptOutputProps {
  generatedPrompt: string
  isLoading: boolean
  promptType: "user" | "system"
  originalPrompt: string
  onRegenerate?: () => void
}

export function PromptOutput({ 
  generatedPrompt, 
  isLoading, 
  promptType,
  originalPrompt,
  onRegenerate 
}: PromptOutputProps) {
  const [isCopied, setIsCopied] = React.useState(false)
  const [isEditing, setIsEditing] = React.useState(false)
  const [editedPrompt, setEditedPrompt] = React.useState("")

  React.useEffect(() => {
    if (generatedPrompt) {
      setEditedPrompt(generatedPrompt)
      setIsEditing(false)
    }
  }, [generatedPrompt])

  const handleCopy = () => {
    navigator.clipboard.writeText(isEditing ? editedPrompt : generatedPrompt)
    setIsCopied(true)
    setTimeout(() => setIsCopied(false), 2000)
  }

  const handleEditToggle = () => {
    setIsEditing(!isEditing)
  }

  const handleDownload = () => {
    const content = isEditing ? editedPrompt : generatedPrompt
    const blob = new Blob([content], { type: 'text/plain' })
    const url = URL.createObjectURL(blob)
    const link = document.createElement('a')
    link.href = url
    link.download = `${promptType}-prompt.txt`
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
    URL.revokeObjectURL(url)
  }

  const formatPrompt = (prompt: string) => {
    if (!prompt) return null

    // Return the prompt as plain text without any formatting or styling
    return (
      <div className="p-6 rounded-lg bg-white border border-gray-200">
        <pre className="text-gray-800 leading-relaxed whitespace-pre-wrap font-sans text-sm">
          {prompt}
        </pre>
      </div>
    )
  }

  if (isLoading) {
    return (
      <Card className="border-2 border-purple-100">
        <CardHeader className="bg-gradient-to-r from-purple-50 to-blue-50">
          <CardTitle className="flex items-center gap-3">
            <div className="p-2 bg-gradient-to-br from-purple-500 to-blue-600 rounded-lg">
              <Brain className="h-5 w-5 text-white animate-pulse" />
            </div>
            <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              Enhancing Your Prompt...
            </span>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6 p-6">
          <div className="space-y-4">
            <div className="flex items-center gap-2 mb-4">
              <Skeleton className="h-6 w-24" />
              <Skeleton className="h-6 w-32" />
            </div>
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-5/6" />
            <Skeleton className="h-4 w-4/5" />
            <div className="space-y-2 mt-6">
              <Skeleton className="h-6 w-48" />
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-3/4" />
            </div>
          </div>
        </CardContent>
      </Card>
    )
  }

  if (!generatedPrompt) {
    return (
      <Card className="flex flex-col items-center justify-center h-full text-center p-8 min-h-[400px] border-2 border-dashed border-gray-200">
        <CardHeader>
          <div className="flex items-center justify-center w-24 h-24 mx-auto bg-gradient-to-br from-purple-100 to-blue-100 rounded-full mb-6">
            <Brain className="w-12 h-12 text-purple-600" />
          </div>
          <CardTitle className="text-2xl bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
            Your Enhanced Prompt Will Appear Here
          </CardTitle>
          <CardDescription className="text-lg text-gray-600 mt-4">
            Fill out the form and click{" "}
            <span className="font-semibold text-purple-600">&quot;Generate Enhanced Prompt&quot;</span>{" "}
            to optimize your prompt with AI-powered enhancements.
          </CardDescription>
          <div className="flex items-center justify-center gap-2 mt-6 text-sm text-gray-500">
            <Zap className="h-4 w-4" />
            <span>Advanced Prompt Engineering</span>
          </div>
        </CardHeader>
      </Card>
    )
  }

  return (
    <Card className="border-2 border-green-100 shadow-xl">
      <CardHeader className="bg-gradient-to-r from-green-50 to-blue-50 flex flex-row items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-gradient-to-br from-green-500 to-blue-600 rounded-lg">
            <Bot className="h-5 w-5 text-white" />
          </div>
          <div className="flex flex-col">
            <CardTitle className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
              Enhanced Prompt
            </CardTitle>
            <div className="flex items-center gap-2 mt-1">
              <Badge variant="outline" className="text-xs">
                {promptType === "user" ? (
                  <>
                    <User className="h-3 w-3 mr-1" />
                    User Prompt
                  </>
                ) : (
                  <>
                    <Settings className="h-3 w-3 mr-1" />
                    System Prompt
                  </>
                )}
              </Badge>
            </div>
          </div>
        </div>
        <div className="flex gap-2">
          {onRegenerate && (
            <Button
              variant="outline"
              size="icon"
              onClick={onRegenerate}
              title="Regenerate"
              className="border-blue-300 text-blue-700 hover:bg-blue-100"
            >
              <RefreshCw className="h-4 w-4" />
            </Button>
          )}
          <Button
            variant="outline"
            size="icon"
            onClick={handleEditToggle}
            title={isEditing ? "Save" : "Edit"}
            className="border-purple-300 text-purple-700 hover:bg-purple-100"
          >
            <Edit className="h-4 w-4" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            onClick={handleDownload}
            title="Download as file"
            className="border-orange-300 text-orange-700 hover:bg-orange-100"
          >
            <Download className="h-4 w-4" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            onClick={handleCopy}
            title="Copy to clipboard"
            className="border-green-300 text-green-700 hover:bg-green-100"
          >
            {isCopied ? (
              <Check className="h-4 w-4" />
            ) : (
              <Copy className="h-4 w-4" />
            )}
          </Button>
        </div>
      </CardHeader>
      <CardContent className="p-6">
        {/* Original Prompt Preview */}
        {originalPrompt && (
          <div className="mb-6 p-4 bg-gray-50 rounded-lg border border-gray-200">
            <h4 className="text-sm font-semibold text-gray-600 mb-2 flex items-center gap-2">
              <MessageSquare className="h-4 w-4" />
              Original Prompt:
            </h4>
            <p className="text-sm text-gray-700 italic line-clamp-3">{originalPrompt}</p>
          </div>
        )}

        {isEditing ? (
          <div className="space-y-4">
            <Textarea
              value={editedPrompt}
              onChange={e => setEditedPrompt(e.target.value)}
              className="w-full min-h-[400px] resize-y font-mono text-sm border-gray-300 focus:border-purple-400"
              placeholder="Edit your enhanced prompt..."
            />
            <div className="flex justify-end gap-2">
              <Button 
                variant="outline" 
                onClick={() => setIsEditing(false)}
                className="border-gray-300 text-gray-700 hover:bg-gray-100"
              >
                Cancel
              </Button>
              <Button 
                onClick={() => {
                  setIsEditing(false)
                  // You could save the edited version here if needed
                }}
                className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white"
              >
                Save Changes
              </Button>
            </div>
          </div>
        ) : (
          <div className="max-w-none">
            {formatPrompt(generatedPrompt)}
            
            {/* Success message */}
            <div className="mt-6 p-4 bg-gradient-to-r from-green-50 to-blue-50 border border-green-200 rounded-lg">
              <div className="flex items-center gap-2 text-green-700 font-medium">
                <Sparkles className="h-5 w-5" />
                <span>Your enhanced prompt is ready! Use the buttons above to copy, edit, or download.</span>
              </div>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  )
} 