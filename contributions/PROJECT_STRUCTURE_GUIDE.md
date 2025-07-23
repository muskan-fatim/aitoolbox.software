# AIToolbox Project Structure Guide

## Directory Structure

```
aitoolbox.software/
├── src/
│   ├── app/
│   │   ├── (Tools)/                  # Group for AI tool routes
│   │   │   ├── [tool-name]/          # Each tool has its own directory
│   │   │   │   ├── _components/      # Tool-specific components
│   │   │   │   ├── page.tsx          # Main page component
│   │   │   │   └── layout.tsx        # Optional layout component
│   │   ├── (blogs)/                  # Group for blog/guide content
│   │   │   ├── [blog-name]/          # Each blog has its own directory
│   │   │   │   └── page.tsx          # Blog content page
│   ├── components/                    # Shared/reusable components
│   │   ├── ui/                       # UI component library
│   └── hooks/                        # Custom React hooks
```

## Naming Conventions

1. **Directories**:
   - Tool directories: kebab-case (e.g., `blog-idea-generator`)
   - Component directories: PascalCase (e.g., `ButtonGroup`)
   - Group directories in parentheses: (e.g., `(Tools)`, `(blogs)`)

2. **Components**:
   - Component files: kebab-case with descriptive suffixes
   - Example: `blog-idea-generator-form.tsx`, `blog-idea-generator-output.tsx`

3. **Tool Structure**:
   Each tool should follow this pattern:
   ```
   tool-name/
   ├── _components/
   │   ├── tool-name-client.tsx       # Client component with main logic
   │   ├── tool-name-form.tsx         # Form component
   │   └── tool-name-output.tsx       # Output display component
   ├── page.tsx                       # Server component / page
   └── layout.tsx                     # Optional layout wrapper
   ```

## Component Organization

1. **Client Components**:
   - Name pattern: `[tool-name]-client.tsx`
   - Handles state management and API calls
   - Contains main layout structure
   - Example structure:
   ```tsx
   export default function ToolNameClient() {
     // State and handlers
     // Main layout with form and output components
   }
   ```

2. **Form Components**:
   - Name pattern: `[tool-name]-form.tsx`
   - Uses shadcn/ui form components
   - Includes form validation with zod
   - Example structure:
   ```tsx
   export function ToolNameForm({ onSubmit, isLoading }) {
     // Form implementation
   }
   ```

3. **Output Components**:
   - Name pattern: `[tool-name]-output.tsx`
   - Handles formatting and display of AI responses
   - Includes loading states and error handling
   - Example structure:
   ```tsx
   export function ToolNameOutput({ generatedContent, isLoading }) {
     // Output formatting and display
   }
   ```

## Best Practices

1. **State Management**:
   - Keep state in the client component
   - Pass data and handlers down as props
   - Use React hooks for complex state logic

2. **API Integration**:
   - Handle all API calls in client components
   - Use fetch with proper error handling
   - Include loading states and progress indicators

3. **Component Composition**:
   - Break down complex UIs into smaller components
   - Keep components focused on single responsibilities
   - Use shared UI components from ui/ directory

4. **Styling**:
   - Use Tailwind CSS classes
   - Follow gradient and color patterns from existing tools
   - Maintain consistent spacing and layouts

5. **Type Safety**:
   - Use TypeScript interfaces/types for all props
   - Export types for reuse when needed
   - Validate form data with zod schemas

## Common Patterns

1. **Form Implementation**:
```tsx
const formSchema = z.object({
  // Form fields and validation
})

type FormValues = z.infer<typeof formSchema>

export function ToolNameForm({ onSubmit, isLoading }: ToolFormProps) {
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      // Default values
    }
  })
  
  // Form JSX
}
```

2. **AI Prompt Construction**:
```tsx
const handleSubmit = async (data: FormValues) => {
  const systemPrompt = `...`
  const userPrompt = `...`
  
  const response = await fetch("/api/ai", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      type: "chat",
      prompt: userPrompt,
      options: {
        messages: [
          { role: "system", content: systemPrompt },
          { role: "user", content: userPrompt }
        ],
        model: "openai",
        temperature: 0.7,
        max_tokens: 2000
      }
    })
  })
}
```

3. **Output Formatting**:
```tsx
export function ToolNameOutput({ generatedContent, isLoading }) {
  const formatContent = (content: string) => {
    // Parse and format the AI response
  }

  if (isLoading) {
    // Loading state
  }

  return (
    <Card>
      <CardHeader>
        // Header content
      </CardHeader>
      <CardContent>
        // Formatted content
      </CardContent>
    </Card>
  )
}
```

## Adding New Tools

1. Create a new directory under `src/app/(Tools)/`
2. Follow the component structure outlined above
3. Reuse existing patterns and components where possible
4. Maintain consistency with existing tools
5. Include proper TypeScript types and documentation

Remember to:
- Test thoroughly in development
- Ensure mobile responsiveness
- Follow accessibility guidelines
- Keep code clean and well-commented
