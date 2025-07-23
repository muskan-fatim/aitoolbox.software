# AIToolbox Contributor Instructions

## Getting Started

### Development Environment
1. Node.js 18+ required
2. Install dependencies: `npm install`
3. Copy `.env.example` to `.env.local`
4. Run development server: `npm run dev`

### Tool Development Guidelines

#### 1. Creating New Tools
- Follow the established directory structure
- Implement both client and server components
- Include comprehensive error handling
- Add loading states and progress indicators
- Implement proper TypeScript types

#### 2. SEO Requirements
- Include metadata in layout.tsx
- Implement proper heading hierarchy
- Add structured data when applicable
- Create SEO-friendly URLs
- Include descriptive alt text for images

#### 3. Performance Guidelines
- Lazy load non-critical components
- Optimize images and assets
- Minimize client-side JavaScript
- Implement proper caching strategies
- Use streaming where appropriate

#### 4. UI/UX Standards
- Follow existing design patterns
- Maintain mobile responsiveness
- Implement proper loading states
- Add proper focus management
- Include proper ARIA attributes

#### 5. Content Guidelines
- Follow Google Ads content policies
- Avoid prohibited content categories
- Maintain professional tone
- Include helpful documentation
- Add proper content warnings

### Testing Requirements

#### Local Testing
```bash
# Run unit tests
npm run test

# Run e2e tests
npm run test:e2e

# Check types
npm run type-check
```

#### Pre-submission Checklist
1. TypeScript compilation passes
2. All tests pass
3. Lighthouse score > 90
4. Mobile responsive
5. Accessibility tested
6. SEO metadata included
7. Content policy compliant

### Deployment Process
1. Create feature branch
2. Submit PR with detailed description
3. Pass automated checks
4. Get code review approval
5. Merge to main branch

## Adding New Tools

### Required Files
```
tool-name/
├── _components/
│   ├── tool-name-client.tsx
│   ├── tool-name-form.tsx
│   └── tool-name-output.tsx
├── page.tsx
└── layout.tsx
```

### Required Components
1. Client Component
   - State management
   - API integration
   - Error handling
   - Progress tracking

2. Form Component
   - Input validation
   - Type safety
   - Loading states
   - Error messages

3. Output Component
   - Result formatting
   - Copy functionality
   - Export options
   - Error states

### SEO Requirements
1. Unique title and meta description
2. Proper heading hierarchy
3. Structured data where applicable
4. Alt text for images
5. Semantic HTML

### Performance Requirements
1. Initial load < 3s
2. First Input Delay < 100ms
3. Cumulative Layout Shift < 0.1
4. First Contentful Paint < 1.8s

### Accessibility Requirements
1. WCAG 2.1 AA compliant
2. Keyboard navigation
3. Screen reader friendly
4. Proper color contrast
5. Focus management

## Content Guidelines

### Prohibited Content
- Adult content
- Gambling
- Weapons
- Drugs
- Hate speech
- Misinformation

### Required Content
- Tool description
- Usage instructions
- Example outputs
- Limitations
- Privacy notice

### Best Practices
1. Clear value proposition
2. Step-by-step instructions
3. Helpful error messages
4. Professional tone
5. Accurate descriptions
