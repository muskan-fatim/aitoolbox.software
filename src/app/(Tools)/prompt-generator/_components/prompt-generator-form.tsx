"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { 
  Loader2, 
  Zap, 
  Code, 
  User, 
  Settings, 
  Brain,
  Sparkles,
  Target,
  MessageSquare
} from "lucide-react"

const promptTypes = [
  { value: "user", label: "User Prompt", icon: <User className="h-4 w-4" />, color: "text-blue-600" },
  { value: "system", label: "System Prompt", icon: <Settings className="h-4 w-4" />, color: "text-purple-600" },
]

const promptCategories = [
  "Creative Writing",
  "Code Generation", 
  "Data Analysis",
  "Customer Support",
  "Content Creation",
  "Research & Summarization",
  "Problem Solving",
  "Education & Learning",
  "Business & Marketing",
  "Translation & Language",
  "General Purpose"
]

const toneOptions = [
  "Professional",
  "Casual", 
  "Technical",
  "Creative",
  "Authoritative",
  "Friendly",
  "Academic",
  "Conversational"
]

const formSchema = z.object({
  prompt: z
    .string()
    .min(10, { message: "Prompt must be at least 10 characters." })
    .max(2000, { message: "Prompt must be less than 2000 characters." }),
  promptType: z.enum(["user", "system"], {
    required_error: "Please select a prompt type.",
  }),
  category: z.string().optional(),
  tone: z.string().optional(),
  objective: z.string().optional(),
})

export type PromptFormValues = z.infer<typeof formSchema>

interface PromptGeneratorFormProps {
  onSubmit: (data: PromptFormValues) => void
  isLoading: boolean
}

export function PromptGeneratorForm({
  onSubmit,
  isLoading,
}: PromptGeneratorFormProps) {
  const form = useForm<PromptFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      prompt: "",
      promptType: "user",
      category: "",
      tone: "",
      objective: "",
    },
  })

  return (
    <Card className="border-2 border-blue-100 shadow-xl">
      <CardHeader className="bg-gradient-to-r from-blue-50 to-purple-50">
        <CardTitle className="flex items-center gap-3">
          <div className="p-2 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg">
            <Brain className="h-5 w-5 text-white" />
          </div>
          <span className="bg-gradient-to-r from-blue-700 to-purple-700 bg-clip-text text-transparent">
            Prompt Configuration
          </span>
        </CardTitle>
      </CardHeader>
      <CardContent className="p-6">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            {/* Prompt Type */}
            <FormField
              control={form.control}
              name="promptType"
              render={({ field }) => (
                <FormItem className="space-y-3">
                  <FormLabel className="flex items-center gap-2 text-blue-700 font-semibold">
                    <Target className="h-4 w-4" />
                    Prompt Type *
                  </FormLabel>
                  <FormControl>
                    <RadioGroup
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                      className="flex flex-col space-y-2"
                    >
                      {promptTypes.map((type) => (
                        <div key={type.value} className="flex items-center space-x-3 p-3 rounded-lg border border-blue-200 hover:bg-blue-50">
                          <RadioGroupItem value={type.value} id={type.value} className="border-blue-400" />
                          <Label htmlFor={type.value} className="flex items-center gap-2 cursor-pointer">
                            <span className={type.color}>{type.icon}</span>
                            <span className="text-blue-700 font-medium">{type.label}</span>
                          </Label>
                        </div>
                      ))}
                    </RadioGroup>
                  </FormControl>
                  <FormDescription className="text-blue-600">
                    User prompts are instructions for AI responses. System prompts define AI behavior and context.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Original Prompt */}
            <FormField
              control={form.control}
              name="prompt"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="flex items-center gap-2 text-purple-700 font-semibold">
                    <MessageSquare className="h-4 w-4" />
                    Your Prompt *
                  </FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Enter your basic prompt here... (e.g., 'Write a blog post about AI' or 'You are a helpful assistant')"
                      className="resize-y min-h-[120px] border-purple-200 focus:border-purple-400"
                      {...field}
                    />
                  </FormControl>
                  <FormDescription className="text-purple-600">
                    Enter your basic prompt that you want to enhance and optimize.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Category */}
              <FormField
                control={form.control}
                name="category"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="flex items-center gap-2 text-green-700 font-semibold">
                      <Code className="h-4 w-4" />
                      Category (Optional)
                    </FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger className="border-green-200 focus:border-green-400">
                          <SelectValue placeholder="Select category" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {promptCategories.map(category => (
                          <SelectItem key={category} value={category}>
                            {category}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormDescription className="text-green-600">
                      Help us understand the context
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Tone */}
              <FormField
                control={form.control}
                name="tone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="flex items-center gap-2 text-orange-700 font-semibold">
                      <Sparkles className="h-4 w-4" />
                      Desired Tone (Optional)
                    </FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger className="border-orange-200 focus:border-orange-400">
                          <SelectValue placeholder="Select tone" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {toneOptions.map(tone => (
                          <SelectItem key={tone} value={tone}>
                            {tone}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormDescription className="text-orange-600">
                      The style you want for responses
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            {/* Objective */}
            <FormField
              control={form.control}
              name="objective"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="flex items-center gap-2 text-indigo-700 font-semibold">
                    <Target className="h-4 w-4" />
                    Specific Objective (Optional)
                  </FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="What specific outcome do you want? (e.g., 'Generate engaging content for social media', 'Provide step-by-step debugging help')"
                      className="resize-y min-h-[80px] border-indigo-200 focus:border-indigo-400"
                      {...field}
                    />
                  </FormControl>
                  <FormDescription className="text-indigo-600">
                    Describe what you want to achieve with this prompt
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button 
              type="submit" 
              disabled={isLoading} 
              className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-3 text-lg shadow-lg transition-all duration-200 transform hover:scale-[1.02]"
            >
              {isLoading ? (
                <>
                  <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                  Enhancing Prompt...
                </>
              ) : (
                <>
                  <Zap className="mr-2 h-5 w-5" />
                  Generate Enhanced Prompt
                </>
              )}
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  )
} 