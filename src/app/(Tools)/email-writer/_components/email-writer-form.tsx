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
import { Loader2 } from "lucide-react"

const tones = [
  "Formal",
  "Informal",
  "Friendly",
  "Apologetic",
  "Thankful",
  "Persuasive",
]
const purposes = [
  "Job Application",
  "Follow-Up",
  "Meeting Request",
  "Complaint",
  "Feedback",
  "Inquiry",
]
const languages = ["English", "Spanish", "French", "German", "Hindi"]

const formSchema = z.object({
  recipientName: z.string().optional(),
  recipientEmail: z.string().email().optional().or(z.literal("")),
  subject: z.string().optional(),
  tone: z.string().min(1, { message: "Please select a tone." }),
  purpose: z.string().min(1, { message: "Please select a purpose." }),
  message: z
    .string()
    .min(10, { message: "Message must be at least 10 characters." }),
  senderName: z.string().optional(),
  language: z.string().optional(),
})

export type EmailFormValues = z.infer<typeof formSchema>

interface EmailWriterFormProps {
  onSubmit: (data: EmailFormValues) => void
  isLoading: boolean
}

export function EmailWriterForm({
  onSubmit,
  isLoading,
}: EmailWriterFormProps) {
  const form = useForm<EmailFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      recipientName: "",
      recipientEmail: "",
      subject: "",
      tone: "Formal",
      purpose: "Follow-Up",
      message: "",
      senderName: "",
      language: "English",
    },
  })

  return (
    <Card>
      <CardHeader>
        <CardTitle>Email Details</CardTitle>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="recipientName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Recipient Name</FormLabel>
                    <FormControl>
                      <Input placeholder="John Doe" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="recipientEmail"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Recipient Email</FormLabel>
                    <FormControl>
                      <Input
                        type="email"
                        placeholder="john.doe@example.com"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <FormField
              control={form.control}
              name="subject"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Subject (Optional)</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="AI will generate one if left blank"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="tone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Tone</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select a tone" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {tones.map(tone => (
                          <SelectItem key={tone} value={tone}>
                            {tone}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="purpose"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Purpose</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select a purpose" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {purposes.map(purpose => (
                          <SelectItem key={purpose} value={purpose}>
                            {purpose}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Key Points / Message</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="e.g., Follow up on our meeting yesterday. I've attached the document we discussed."
                      className="resize-y min-h-[120px]"
                      {...field}
                    />
                  </FormControl>
                  <FormDescription>
                    Provide the main points or a rough draft. The AI will refine
                    it.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="senderName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Your Name (Optional)</FormLabel>
                    <FormControl>
                      <Input placeholder="Jane Smith" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="language"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Language</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select language" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {languages.map(lang => (
                          <SelectItem key={lang} value={lang}>
                            {lang}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <Button type="submit" disabled={isLoading} className="w-full">
              {isLoading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Generating...
                </>
              ) : (
                "Generate Email"
              )}
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  )
} 