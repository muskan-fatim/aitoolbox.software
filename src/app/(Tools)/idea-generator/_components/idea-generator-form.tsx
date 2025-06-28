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
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { 
  Loader2, 
  Lightbulb, 
  Target, 
  Users, 
  Tag, 
  Layers, 
  Zap, 
  PenTool,
  Globe,
  Smartphone,
  Monitor,
  Gamepad2,
  GraduationCap,
  Heart,
  DollarSign,
  MapPin,
  Coffee,
  Palette,
  Music,
  Camera,
  Home,
  Shirt,
  Trophy,
  Leaf
} from "lucide-react"

const categories = [
  { value: "Tech Startup", icon: <Zap className="h-4 w-4" />, color: "text-blue-600" },
  { value: "Mobile App", icon: <Smartphone className="h-4 w-4" />, color: "text-green-600" },
  { value: "YouTube Channel", icon: <Monitor className="h-4 w-4" />, color: "text-red-600" },
  { value: "SaaS Tool", icon: <Globe className="h-4 w-4" />, color: "text-purple-600" },
  { value: "Blog Topic", icon: <PenTool className="h-4 w-4" />, color: "text-orange-600" },
  { value: "E-commerce", icon: <DollarSign className="h-4 w-4" />, color: "text-emerald-600" },
  { value: "Social Media", icon: <Users className="h-4 w-4" />, color: "text-pink-600" },
  { value: "Gaming", icon: <Gamepad2 className="h-4 w-4" />, color: "text-indigo-600" },
  { value: "Education", icon: <GraduationCap className="h-4 w-4" />, color: "text-cyan-600" },
  { value: "Health & Fitness", icon: <Heart className="h-4 w-4" />, color: "text-red-500" },
  { value: "Finance", icon: <DollarSign className="h-4 w-4" />, color: "text-yellow-600" },
  { value: "Travel", icon: <MapPin className="h-4 w-4" />, color: "text-teal-600" },
  { value: "Food & Beverage", icon: <Coffee className="h-4 w-4" />, color: "text-amber-600" },
  { value: "Art & Design", icon: <Palette className="h-4 w-4" />, color: "text-violet-600" },
  { value: "Music", icon: <Music className="h-4 w-4" />, color: "text-rose-600" },
  { value: "Photography", icon: <Camera className="h-4 w-4" />, color: "text-slate-600" },
  { value: "Real Estate", icon: <Home className="h-4 w-4" />, color: "text-stone-600" },
  { value: "Fashion", icon: <Shirt className="h-4 w-4" />, color: "text-fuchsia-600" },
  { value: "Sports", icon: <Trophy className="h-4 w-4" />, color: "text-orange-500" },
  { value: "Environment", icon: <Leaf className="h-4 w-4" />, color: "text-green-500" }
]

const targetAudiences = [
  "Developers", "Students", "Marketers", "Fitness Enthusiasts", "Entrepreneurs", 
  "Teachers", "Parents", "Gamers", "Content Creators", "Small Business Owners",
  "Freelancers", "Remote Workers", "Teenagers", "Seniors", "Professionals"
]

const platforms = [
  "Website", "Mobile App", "AI Tool", "Browser Extension", "Instagram", 
  "YouTube", "TikTok", "Twitter", "LinkedIn", "Discord", "Telegram",
  "WordPress Plugin", "Chrome Extension", "Desktop Software", "API Service"
]

const ideaTypes = [
  { id: "product", label: "Product", icon: <Layers className="h-4 w-4" />, color: "text-blue-600" },
  { id: "content", label: "Content", icon: <PenTool className="h-4 w-4" />, color: "text-purple-600" },
  { id: "business", label: "Business", icon: <DollarSign className="h-4 w-4" />, color: "text-green-600" },
  { id: "project", label: "Project", icon: <Target className="h-4 w-4" />, color: "text-orange-600" },
  { id: "startup", label: "Startup", icon: <Zap className="h-4 w-4" />, color: "text-red-600" },
  { id: "hackathon", label: "Hackathon", icon: <Gamepad2 className="h-4 w-4" />, color: "text-indigo-600" }
]

const formSchema = z.object({
  topic: z.string().min(1, { message: "Please enter a topic or select a category." }),
  purpose: z.string().min(10, { message: "Purpose must be at least 10 characters." }),
  targetAudience: z.string().min(1, { message: "Please specify your target audience." }),
  platformPreference: z.array(z.string()).optional(),
  innovationLevel: z.enum(["common", "unique", "problem-solving"], {
    required_error: "Please select an innovation level.",
  }),
  keyword: z.string().optional(),
  ideaType: z.array(z.string()).refine((value) => value.some((item) => item), {
    message: "Please select at least one idea type.",
  }),
  additionalInput: z.string().optional(),
})

export type IdeaFormValues = z.infer<typeof formSchema>

interface IdeaGeneratorFormProps {
  onSubmit: (data: IdeaFormValues) => void
  isLoading: boolean
}

export function IdeaGeneratorForm({
  onSubmit,
  isLoading,
}: IdeaGeneratorFormProps) {
  const form = useForm<IdeaFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      topic: "",
      purpose: "",
      targetAudience: "",
      platformPreference: [],
      innovationLevel: "unique",
      keyword: "",
      ideaType: [],
      additionalInput: "",
    },
  })

  return (
    <Card className="border-2 border-purple-100 shadow-xl">
      <CardHeader className="bg-gradient-to-r from-purple-50 to-blue-50">
        <CardTitle className="flex items-center gap-3">
          <div className="p-2 bg-gradient-to-br from-purple-500 to-blue-600 rounded-lg">
            <Lightbulb className="h-5 w-5 text-white" />
          </div>
          <span className="bg-gradient-to-r from-purple-700 to-blue-700 bg-clip-text text-transparent">
            Idea Requirements
          </span>
        </CardTitle>
      </CardHeader>
      <CardContent className="p-6">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            {/* Topic/Category */}
            <FormField
              control={form.control}
              name="topic"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="flex items-center gap-2 text-purple-700 font-semibold">
                    <Target className="h-4 w-4" />
                    Topic / Category *
                  </FormLabel>
                  <div className="space-y-3">
                    <FormControl>
                      <Input
                        placeholder="Enter custom topic or select from dropdown"
                        className="border-purple-200 focus:border-purple-400"
                        {...field}
                      />
                    </FormControl>
                    <Select onValueChange={field.onChange}>
                      <SelectTrigger className="border-purple-200 focus:border-purple-400">
                        <SelectValue placeholder="Or select a category" />
                      </SelectTrigger>
                      <SelectContent>
                        {categories.map(category => (
                          <SelectItem key={category.value} value={category.value}>
                            <div className="flex items-center gap-2">
                              <span className={category.color}>{category.icon}</span>
                              {category.value}
                            </div>
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <FormDescription className="text-purple-600">
                    Specify what type of idea you&apos;re looking for
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Purpose/Goal */}
            <FormField
              control={form.control}
              name="purpose"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="flex items-center gap-2 text-blue-700 font-semibold">
                    <Zap className="h-4 w-4" />
                    Purpose / Goal *
                  </FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="e.g., To make money, To help students, For entertainment, To improve productivity..."
                      className="resize-y min-h-[80px] border-blue-200 focus:border-blue-400"
                      {...field}
                    />
                  </FormControl>
                  <FormDescription className="text-blue-600">
                    What do you want to achieve with this idea?
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Target Audience */}
              <FormField
                control={form.control}
                name="targetAudience"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="flex items-center gap-2 text-green-700 font-semibold">
                      <Users className="h-4 w-4" />
                      Target Audience *
                    </FormLabel>
                    <div className="space-y-2">
                      <FormControl>
                        <Input
                          placeholder="Enter custom audience"
                          className="border-green-200 focus:border-green-400"
                          {...field}
                        />
                      </FormControl>
                      <Select onValueChange={field.onChange}>
                        <SelectTrigger className="border-green-200 focus:border-green-400">
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
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Keyword */}
              <FormField
                control={form.control}
                name="keyword"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="flex items-center gap-2 text-orange-700 font-semibold">
                      <Tag className="h-4 w-4" />
                      Keyword (Optional)
                    </FormLabel>
                    <FormControl>
                      <Input
                        placeholder="e.g., AI, Travel, Fitness..."
                        className="border-orange-200 focus:border-orange-400"
                        {...field}
                      />
                    </FormControl>
                    <FormDescription className="text-orange-600">
                      Force-inject a specific keyword
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            {/* Platform Preference */}
            <FormField
              control={form.control}
              name="platformPreference"
              render={() => (
                <FormItem>
                  <div className="mb-4">
                    <FormLabel className="flex items-center gap-2 text-indigo-700 font-semibold">
                      <Globe className="h-4 w-4" />
                      Platform Preference (Optional)
                    </FormLabel>
                    <FormDescription className="text-indigo-600">
                      Select platforms where your idea could be implemented
                    </FormDescription>
                  </div>
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                    {platforms.map((platform) => (
                      <FormField
                        key={platform}
                        control={form.control}
                        name="platformPreference"
                        render={({ field }) => {
                          return (
                            <FormItem
                              key={platform}
                              className="flex flex-row items-start space-x-3 space-y-0"
                            >
                              <FormControl>
                                <Checkbox
                                  checked={field.value?.includes(platform)}
                                  className="border-indigo-300 data-[state=checked]:bg-indigo-600"
                                  onCheckedChange={(checked) => {
                                    return checked
                                      ? field.onChange([...(field.value || []), platform])
                                      : field.onChange(
                                          field.value?.filter(
                                            (value) => value !== platform
                                          )
                                        )
                                  }}
                                />
                              </FormControl>
                              <FormLabel className="text-sm font-normal text-gray-700 hover:text-indigo-700 cursor-pointer">
                                {platform}
                              </FormLabel>
                            </FormItem>
                          )
                        }}
                      />
                    ))}
                  </div>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Innovation Level */}
            <FormField
              control={form.control}
              name="innovationLevel"
              render={({ field }) => (
                <FormItem className="space-y-3">
                  <FormLabel className="flex items-center gap-2 text-pink-700 font-semibold">
                    <Lightbulb className="h-4 w-4" />
                    Innovation Level *
                  </FormLabel>
                  <FormControl>
                    <RadioGroup
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                      className="flex flex-col space-y-2"
                    >
                      <div className="flex items-center space-x-3 p-3 rounded-lg border border-pink-200 hover:bg-pink-50">
                        <RadioGroupItem value="common" id="common" className="border-pink-400" />
                        <Label htmlFor="common" className="text-pink-700 font-medium cursor-pointer">Common/Trending</Label>
                      </div>
                      <div className="flex items-center space-x-3 p-3 rounded-lg border border-pink-200 hover:bg-pink-50">
                        <RadioGroupItem value="unique" id="unique" className="border-pink-400" />
                        <Label htmlFor="unique" className="text-pink-700 font-medium cursor-pointer">Unique/Cutting-edge</Label>
                      </div>
                      <div className="flex items-center space-x-3 p-3 rounded-lg border border-pink-200 hover:bg-pink-50">
                        <RadioGroupItem value="problem-solving" id="problem-solving" className="border-pink-400" />
                        <Label htmlFor="problem-solving" className="text-pink-700 font-medium cursor-pointer">Problem-solving</Label>
                      </div>
                    </RadioGroup>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Idea Type */}
            <FormField
              control={form.control}
              name="ideaType"
              render={() => (
                <FormItem>
                  <div className="mb-4">
                    <FormLabel className="flex items-center gap-2 text-teal-700 font-semibold">
                      <Layers className="h-4 w-4" />
                      Idea Type *
                    </FormLabel>
                    <FormDescription className="text-teal-600">
                      Select what type of idea you want to generate
                    </FormDescription>
                  </div>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                    {ideaTypes.map((type) => (
                      <FormField
                        key={type.id}
                        control={form.control}
                        name="ideaType"
                        render={({ field }) => {
                          return (
                            <FormItem
                              key={type.id}
                              className="flex flex-row items-start space-x-3 space-y-0"
                            >
                              <FormControl>
                                <Checkbox
                                  checked={field.value?.includes(type.id)}
                                  className="border-teal-300 data-[state=checked]:bg-teal-600"
                                  onCheckedChange={(checked) => {
                                    return checked
                                      ? field.onChange([...(field.value || []), type.id])
                                      : field.onChange(
                                          field.value?.filter(
                                            (value) => value !== type.id
                                          )
                                        )
                                  }}
                                />
                              </FormControl>
                              <FormLabel className="text-sm font-normal cursor-pointer flex items-center gap-2">
                                <span className={type.color}>{type.icon}</span>
                                <span className="text-gray-700 hover:text-teal-700">{type.label}</span>
                              </FormLabel>
                            </FormItem>
                          )
                        }}
                      />
                    ))}
                  </div>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Additional Input */}
            <FormField
              control={form.control}
              name="additionalInput"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="flex items-center gap-2 text-slate-700 font-semibold">
                    <PenTool className="h-4 w-4" />
                    Additional Input / Description (Optional)
                  </FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Any specific requirements, constraints, or additional context you'd like to provide..."
                      className="resize-y min-h-[100px] border-slate-200 focus:border-slate-400"
                      {...field}
                    />
                  </FormControl>
                  <FormDescription className="text-slate-600">
                    Provide any additional context or specific requirements
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button 
              type="submit" 
              disabled={isLoading} 
              className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-semibold py-3 text-lg shadow-lg transition-all duration-200 transform hover:scale-[1.02]"
            >
              {isLoading ? (
                <>
                  <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                  Generating Idea...
                </>
              ) : (
                <>
                  <Lightbulb className="mr-2 h-5 w-5" />
                  Generate Idea
                </>
              )}
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  )
} 