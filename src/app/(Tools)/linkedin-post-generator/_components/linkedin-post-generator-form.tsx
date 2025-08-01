"use client"

import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Linkedin, Send, Lightbulb, MessageSquare, TrendingUp, Users, Award, Building2 } from "lucide-react"

const linkedinPostSchema = z.object({
  topic: z.string().min(10, "Topic must be at least 10 characters").max(500, "Topic must be less than 500 characters"),
  tone: z.enum(["Professional", "Casual", "Inspirational", "Technical", "Conversational", "Authoritative"]),
  keyPoints: z.string().optional(),
})

export type LinkedInFormValues = z.infer<typeof linkedinPostSchema>

interface LinkedInPostGeneratorFormProps {
  onSubmit: (data: LinkedInFormValues) => void
  isLoading: boolean
}

const toneOptions = [
  { value: "Professional", label: "Professional", description: "Formal and business-focused" },
  { value: "Casual", label: "Casual", description: "Friendly and approachable" },
  { value: "Inspirational", label: "Inspirational", description: "Motivational and uplifting" },
  { value: "Technical", label: "Technical", description: "Detailed and expertise-focused" },
  { value: "Conversational", label: "Conversational", description: "Natural and engaging" },
  { value: "Authoritative", label: "Authoritative", description: "Confident and leadership-focused" },
]

const topicExamples = [
  "Launching a new product or service",
  "Sharing a career milestone or achievement",
  "Commenting on industry trends or news",
  "Sharing professional insights or lessons learned",
  "Announcing a job change or promotion",
  "Discussing a challenge and how you overcame it",
]

export function LinkedInPostGeneratorForm({ onSubmit, isLoading }: LinkedInPostGeneratorFormProps) {
  const form = useForm<LinkedInFormValues>({
    resolver: zodResolver(linkedinPostSchema),
    defaultValues: {
      topic: "",
      tone: "Professional",
      keyPoints: "",
    },
  })

  const handleSubmit = (data: LinkedInFormValues) => {
    onSubmit(data)
  }

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Linkedin className="h-5 w-5 text-blue-600" />
            LinkedIn Post Generator
          </CardTitle>
          <CardDescription>
            Create engaging, professional LinkedIn posts that drive engagement and build your network.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-6">
            {/* Topic Input */}
            <div className="space-y-2">
              <Label htmlFor="topic" className="text-base font-medium">
                Topic or Core Message *
              </Label>
              <Textarea
                id="topic"
                placeholder="e.g., launching a new product, sharing an article, celebrating a work anniversary..."
                className="min-h-[100px] resize-none"
                {...form.register("topic")}
              />
              {form.formState.errors.topic && (
                <p className="text-sm text-destructive">
                  {form.formState.errors.topic.message}
                </p>
              )}
              <div className="text-sm text-muted-foreground">
                <p className="font-medium mb-2">Example topics:</p>
                <ul className="space-y-1">
                  {topicExamples.map((example, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <span className="text-blue-600 mt-1">•</span>
                      {example}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Tone Selection */}
            <div className="space-y-2">
              <Label htmlFor="tone" className="text-base font-medium">
                Desired Tone *
              </Label>
              <Select
                value={form.watch("tone")}
                onValueChange={(value) => form.setValue("tone", value as any)}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select a tone" />
                </SelectTrigger>
                <SelectContent>
                  {toneOptions.map((tone) => (
                    <SelectItem key={tone.value} value={tone.value}>
                      <div className="flex flex-col">
                        <span className="font-medium">{tone.label}</span>
                        <span className="text-sm text-muted-foreground">{tone.description}</span>
                      </div>
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Key Points Input */}
            <div className="space-y-2">
              <Label htmlFor="keyPoints" className="text-base font-medium">
                Key Points or Keywords (Optional)
              </Label>
              <Textarea
                id="keyPoints"
                placeholder="e.g., specific achievements, metrics, hashtags, or points you want to emphasize..."
                className="min-h-[80px] resize-none"
                {...form.register("keyPoints")}
              />
              <p className="text-sm text-muted-foreground">
                Include specific details, achievements, or hashtags you'd like to incorporate.
              </p>
            </div>

            {/* Submit Button */}
            <Button
              type="submit"
              disabled={isLoading || !form.formState.isValid}
              className="w-full"
              size="lg"
            >
              {isLoading ? (
                <>
                  <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2" />
                  Generating Post...
                </>
              ) : (
                <>
                  <Send className="h-4 w-4 mr-2" />
                  Generate LinkedIn Post
                </>
              )}
            </Button>
          </form>
        </CardContent>
      </Card>

      {/* Tips Section */}
      <Card className="bg-blue-50 border-blue-200">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-blue-800">
            <Lightbulb className="h-5 w-5" />
            Pro Tips for Better LinkedIn Posts
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid md:grid-cols-2 gap-4">
            <div className="flex items-start gap-3">
              <MessageSquare className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
              <div>
                <h4 className="font-medium text-blue-800">Start with a Hook</h4>
                <p className="text-sm text-blue-700">
                  Capture attention in the first line to encourage reading.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <TrendingUp className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
              <div>
                <h4 className="font-medium text-blue-800">Include Metrics</h4>
                <p className="text-sm text-blue-700">
                  Share specific numbers and achievements when relevant.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Users className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
              <div>
                <h4 className="font-medium text-blue-800">Encourage Engagement</h4>
                <p className="text-sm text-blue-700">
                  End with questions to invite comments and discussions.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Award className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
              <div>
                <h4 className="font-medium text-blue-800">Be Authentic</h4>
                <p className="text-sm text-blue-700">
                  Share real experiences and personal insights.
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
} 