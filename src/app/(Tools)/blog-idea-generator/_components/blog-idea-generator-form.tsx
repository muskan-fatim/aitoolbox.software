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
import { Input } from "@/components/ui/input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { 
  Loader2, 
  Newspaper, 
  Users, 
  Tag, 
  Target, 
  PenTool,
  BookOpen,
  FileText,
  BarChart,
  HelpCircle,
  ListChecks,
  Lightbulb,
  Search,
  MessageCircle
} from "lucide-react"

const blogNiches = [
  { value: "Technology", icon: <PenTool className="h-4 w-4" />, color: "text-blue-600" },
  { value: "Health & Wellness", icon: <PenTool className="h-4 w-4" />, color: "text-green-600" },
  { value: "Finance & Money", icon: <PenTool className="h-4 w-4" />, color: "text-yellow-600" },
  { value: "Travel", icon: <PenTool className="h-4 w-4" />, color: "text-purple-600" },
  { value: "Food & Cooking", icon: <PenTool className="h-4 w-4" />, color: "text-orange-600" },
  { value: "Lifestyle", icon: <PenTool className="h-4 w-4" />, color: "text-pink-600" },
  { value: "Business & Entrepreneurship", icon: <PenTool className="h-4 w-4" />, color: "text-indigo-600" },
  { value: "Marketing", icon: <PenTool className="h-4 w-4" />, color: "text-red-600" },
  { value: "Personal Development", icon: <PenTool className="h-4 w-4" />, color: "text-cyan-600" },
  { value: "Education", icon: <PenTool className="h-4 w-4" />, color: "text-emerald-600" },
  { value: "Parenting", icon: <PenTool className="h-4 w-4" />, color: "text-violet-600" },
  { value: "Fashion", icon: <PenTool className="h-4 w-4" />, color: "text-amber-600" },
  { value: "Home & Garden", icon: <PenTool className="h-4 w-4" />, color: "text-lime-600" },
  { value: "Entertainment", icon: <PenTool className="h-4 w-4" />, color: "text-rose-600" },
  { value: "Sports & Fitness", icon: <PenTool className="h-4 w-4" />, color: "text-teal-600" }
]

const targetAudiences = [
  "Beginners", "Professionals", "Students", "Parents", "Entrepreneurs", 
  "Millennials", "Gen Z", "Seniors", "Tech Enthusiasts", "Fitness Buffs",
  "Travelers", "Foodies", "Remote Workers", "Small Business Owners", "Marketers"
]

const contentGoals = [
  { id: "educate", label: "Educate & Inform", icon: <BookOpen className="h-4 w-4" />, color: "text-blue-600" },
  { id: "entertain", label: "Entertain & Engage", icon: <MessageCircle className="h-4 w-4" />, color: "text-purple-600" },
  { id: "solve-problems", label: "Solve Problems", icon: <HelpCircle className="h-4 w-4" />, color: "text-green-600" },
  { id: "generate-leads", label: "Generate Leads", icon: <Target className="h-4 w-4" />, color: "text-orange-600" },
  { id: "build-authority", label: "Build Authority", icon: <BarChart className="h-4 w-4" />, color: "text-red-600" },
  { id: "seo-traffic", label: "Boost SEO & Traffic", icon: <Search className="h-4 w-4" />, color: "text-indigo-600" }
]

const postTypes = [
  { id: "how-to", label: "How-To Guides", icon: <FileText className="h-4 w-4" />, color: "text-blue-600" },
  { id: "listicle", label: "Listicles", icon: <ListChecks className="h-4 w-4" />, color: "text-purple-600" },
  { id: "case-study", label: "Case Studies", icon: <BarChart className="h-4 w-4" />, color: "text-green-600" },
  { id: "opinion", label: "Opinion Pieces", icon: <MessageCircle className="h-4 w-4" />, color: "text-orange-600" },
  { id: "tutorial", label: "Tutorials", icon: <BookOpen className="h-4 w-4" />, color: "text-red-600" },
  { id: "comparison", label: "Comparisons", icon: <HelpCircle className="h-4 w-4" />, color: "text-indigo-600" },
  { id: "tips", label: "Tips & Tricks", icon: <Lightbulb className="h-4 w-4" />, color: "text-yellow-600" }
]

const formSchema = z.object({
  blogNiche: z.string().min(1, { message: "Please enter a blog niche or topic." }),
  targetAudience: z.string().min(1, { message: "Please specify your target audience." }),
  contentGoals: z.array(z.string()).refine((value) => value.length > 0, {
    message: "Select at least one content goal.",
  }),
  postTypes: z.array(z.string()).refine((value) => value.length > 0, {
    message: "Select at least one post type.",
  }),
  keywords: z.string().optional(),
  competitorTopics: z.string().optional(),
  additionalInfo: z.string().optional(),
})

export type BlogIdeaFormValues = z.infer<typeof formSchema>

interface BlogIdeaGeneratorFormProps {
  onSubmit: (data: BlogIdeaFormValues) => void
  isLoading: boolean
}

export function BlogIdeaGeneratorForm({
  onSubmit,
  isLoading,
}: BlogIdeaGeneratorFormProps) {
  const form = useForm<BlogIdeaFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      blogNiche: "",
      targetAudience: "",
      contentGoals: ["educate"],
      postTypes: ["how-to"],
      keywords: "",
      competitorTopics: "",
      additionalInfo: "",
    },
  })

  return (
    <Card className="border-2 border-blue-100 shadow-xl">
      <CardHeader className="bg-gradient-to-r from-blue-50 to-indigo-50">
        <CardTitle className="flex items-center gap-3">
          <div className="p-2 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-lg">
            <Newspaper className="h-5 w-5 text-white" />
          </div>
          <span className="bg-gradient-to-r from-blue-700 to-indigo-700 bg-clip-text text-transparent">
            Blog Idea Requirements
          </span>
        </CardTitle>
      </CardHeader>
      <CardContent className="p-6">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            {/* Blog Niche/Topic */}
            <FormField
              control={form.control}
              name="blogNiche"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="flex items-center gap-2 text-blue-700 font-semibold">
                    <Newspaper className="h-4 w-4" />
                    Blog Niche / Topic *
                  </FormLabel>
                  <div className="space-y-3">
                    <FormControl>
                      <Input
                        placeholder="Enter your blog niche or topic"
                        className="border-blue-200 focus:border-blue-400"
                        {...field}
                      />
                    </FormControl>
                    <Select onValueChange={field.onChange}>
                      <SelectTrigger className="border-blue-200 focus:border-blue-400">
                        <SelectValue placeholder="Or select a common niche" />
                      </SelectTrigger>
                      <SelectContent>
                        {blogNiches.map(niche => (
                          <SelectItem key={niche.value} value={niche.value}>
                            <div className="flex items-center gap-2">
                              <span className={niche.color}>{niche.icon}</span>
                              {niche.value}
                            </div>
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <FormDescription className="text-blue-600">
                    Specify what your blog is about or the topic you want ideas for
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Target Audience */}
            <FormField
              control={form.control}
              name="targetAudience"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="flex items-center gap-2 text-indigo-700 font-semibold">
                    <Users className="h-4 w-4" />
                    Target Audience *
                  </FormLabel>
                  <div className="space-y-3">
                    <FormControl>
                      <Input
                        placeholder="Enter your target audience"
                        className="border-indigo-200 focus:border-indigo-400"
                        {...field}
                      />
                    </FormControl>
                    <Select onValueChange={field.onChange}>
                      <SelectTrigger className="border-indigo-200 focus:border-indigo-400">
                        <SelectValue placeholder="Or select from common audiences" />
                      </SelectTrigger>
                      <SelectContent>
                        {targetAudiences.map(audience => (
                          <SelectItem key={audience} value={audience}>
                            {audience}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <FormDescription className="text-indigo-600">
                    Who will be reading your blog content?
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Content Goals */}
            <FormField
              control={form.control}
              name="contentGoals"
              render={() => (
                <FormItem>
                  <FormLabel className="flex items-center gap-2 text-purple-700 font-semibold">
                    <Target className="h-4 w-4" />
                    Content Goals *
                  </FormLabel>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {contentGoals.map((goal) => (
                      <FormField
                        key={goal.id}
                        control={form.control}
                        name="contentGoals"
                        render={({ field }) => {
                          return (
                            <FormItem
                              key={goal.id}
                              className="flex flex-row items-start space-x-3 space-y-0 rounded-md border border-purple-200 p-3 hover:bg-purple-50"
                            >
                              <FormControl>
                                <Checkbox
                                  checked={field.value?.includes(goal.id)}
                                  onCheckedChange={(checked) => {
                                    return checked
                                      ? field.onChange([...field.value, goal.id])
                                      : field.onChange(
                                          field.value?.filter(
                                            (value) => value !== goal.id
                                          )
                                        )
                                  }}
                                />
                              </FormControl>
                              <FormLabel className="font-normal cursor-pointer flex items-center gap-2">
                                <span className={goal.color}>{goal.icon}</span>
                                {goal.label}
                              </FormLabel>
                            </FormItem>
                          )
                        }}
                      />
                    ))}
                  </div>
                  <FormDescription className="text-purple-600">
                    What do you want to achieve with your blog content?
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Post Types */}
            <FormField
              control={form.control}
              name="postTypes"
              render={() => (
                <FormItem>
                  <FormLabel className="flex items-center gap-2 text-green-700 font-semibold">
                    <FileText className="h-4 w-4" />
                    Post Types *
                  </FormLabel>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {postTypes.map((type) => (
                      <FormField
                        key={type.id}
                        control={form.control}
                        name="postTypes"
                        render={({ field }) => {
                          return (
                            <FormItem
                              key={type.id}
                              className="flex flex-row items-start space-x-3 space-y-0 rounded-md border border-green-200 p-3 hover:bg-green-50"
                            >
                              <FormControl>
                                <Checkbox
                                  checked={field.value?.includes(type.id)}
                                  onCheckedChange={(checked) => {
                                    return checked
                                      ? field.onChange([...field.value, type.id])
                                      : field.onChange(
                                          field.value?.filter(
                                            (value) => value !== type.id
                                          )
                                        )
                                  }}
                                />
                              </FormControl>
                              <FormLabel className="font-normal cursor-pointer flex items-center gap-2">
                                <span className={type.color}>{type.icon}</span>
                                {type.label}
                              </FormLabel>
                            </FormItem>
                          )
                        }}
                      />
                    ))}
                  </div>
                  <FormDescription className="text-green-600">
                    What types of blog posts do you want to create?
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Keywords */}
              <FormField
                control={form.control}
                name="keywords"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="flex items-center gap-2 text-orange-700 font-semibold">
                      <Tag className="h-4 w-4" />
                      Target Keywords (Optional)
                    </FormLabel>
                    <FormControl>
                      <Input
                        placeholder="e.g., SEO, content marketing, blogging tips"
                        className="border-orange-200 focus:border-orange-400"
                        {...field}
                      />
                    </FormControl>
                    <FormDescription className="text-orange-600">
                      Keywords you want to target for SEO
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Competitor Topics */}
              <FormField
                control={form.control}
                name="competitorTopics"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="flex items-center gap-2 text-red-700 font-semibold">
                      <Search className="h-4 w-4" />
                      Competitor Topics (Optional)
                    </FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Topics your competitors are writing about"
                        className="border-red-200 focus:border-red-400"
                        {...field}
                      />
                    </FormControl>
                    <FormDescription className="text-red-600">
                      Topics you want to create better content for
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            {/* Additional Info */}
            <FormField
              control={form.control}
              name="additionalInfo"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="flex items-center gap-2 text-indigo-700 font-semibold">
                    <Lightbulb className="h-4 w-4" />
                    Additional Information (Optional)
                  </FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Any other details that might help generate better blog ideas..."
                      className="resize-y min-h-[80px] border-indigo-200 focus:border-indigo-400"
                      {...field}
                    />
                  </FormControl>
                  <FormDescription className="text-indigo-600">
                    Any specific requirements, brand voice, or content preferences
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button 
              type="submit" 
              className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white"
              disabled={isLoading}
            >
              {isLoading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Generating Ideas...
                </>
              ) : (
                <>
                  <Newspaper className="mr-2 h-4 w-4" />
                  Generate Blog Ideas
                </>
              )}
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  )
} 