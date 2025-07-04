"use client";

import React, { useState } from "react";
import { LogoGeneratorForm } from "./logo-generator-form";
import { LogoGeneratorOutput } from "./logo-generator-output";
import { Badge } from "@/components/ui/badge";
import { Sparkles, Zap, Users, Shield, Award } from "lucide-react";

interface LogoData {
  prompt: string;
  brandName: string;
  slogan?: string;
  industry?: string;
  style?: string;
  colors?: string;
  icon?: string;
  font?: string;
  shape?: string;
  competitors?: string;
  useCase?: string;
  emotion?: string;
  doNotInclude?: string;
}

export default function LogoGeneratorClient() {
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedLogo, setGeneratedLogo] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleGenerate = async (data: LogoData) => {
    setIsGenerating(true);
    setError(null);
    setGeneratedLogo(null);

    try {
      // Enhanced prompt engineering with AI psychology and visual design principles
      const prompt = buildOptimalLogoPrompt(data);
      
      const response = await fetch('/api/ai', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          prompt,
          type: 'logo',
          model: 'dall-e-3' // Use DALL-E 3 for highest quality
        }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const result = await response.json();
      
      if (result.error) {
        throw new Error(result.error);
      }

      setGeneratedLogo(result.imageUrl);
    } catch (err) {
      console.error('Logo generation error:', err);
      setError(err instanceof Error ? err.message : 'Failed to generate logo. Please try again.');
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50">
      <div className="w-full max-w-7xl mx-auto px-4 py-6 sm:py-8 lg:py-12">
        {/* Header Section */}
        <div className="text-center space-y-6 mb-8 lg:mb-12">
          <div className="space-y-4">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Badge variant="secondary" className="bg-blue-100 text-blue-700 px-3 py-1">
                <Sparkles className="w-3 h-3 mr-1" />
                Free Forever
              </Badge>
              <Badge variant="secondary" className="bg-purple-100 text-purple-700 px-3 py-1">
                <Zap className="w-3 h-3 mr-1" />
                AI Powered
              </Badge>
            </div>
            
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent leading-tight">
              Free AI Logo Generator
            </h1>
            
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Create professional logos for your business in seconds using AI. 
              No design skills required - just describe your brand and let our AI do the work.
            </p>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-sm text-gray-500">
            <div className="flex items-center gap-2">
              <Users className="w-4 h-4 text-blue-600" />
              <span className="hidden sm:inline">50,000+ logos created</span>
              <span className="sm:hidden">50k+ created</span>
            </div>
            <div className="flex items-center gap-2">
              <Shield className="w-4 h-4 text-green-600" />
              <span className="hidden sm:inline">Commercial use allowed</span>
              <span className="sm:hidden">Commercial use</span>
            </div>
            <div className="flex items-center gap-2">
              <Award className="w-4 h-4 text-purple-600" />
              <span className="hidden sm:inline">No watermarks</span>
              <span className="sm:hidden">No watermarks</span>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 lg:gap-8">
          {/* Form Section */}
          <div className="space-y-6">
            <LogoGeneratorForm
              onGenerate={handleGenerate}
              isGenerating={isGenerating}
            />
            
            {/* Additional Info for Mobile */}
            <div className="xl:hidden bg-gradient-to-r from-yellow-50 to-orange-50 p-4 rounded-lg border border-yellow-200">
              <div className="flex items-start gap-3">
                <Sparkles className="w-5 h-5 text-yellow-600 mt-0.5 flex-shrink-0" />
                <div className="space-y-1">
                  <p className="font-medium text-sm text-yellow-800">
                    ⚡ Super Fast Generation
                  </p>
                  <p className="text-xs text-yellow-700">
                    Your logo will appear on the right after generation. Scroll down to see the results on mobile.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Output Section */}
          <div className="space-y-6">
            <LogoGeneratorOutput
              logo={generatedLogo}
              isGenerating={isGenerating}
              error={error}
            />
            
            {/* Feature Highlights */}
            {!generatedLogo && !isGenerating && (
              <div className="hidden xl:block bg-gradient-to-r from-gray-50 to-blue-50 p-6 rounded-lg border border-gray-200">
                <h3 className="font-semibold text-gray-800 mb-4 flex items-center gap-2">
                  <Award className="w-5 h-5 text-blue-600" />
                  Why Choose Our AI Logo Generator?
                </h3>
                <div className="space-y-3 text-sm text-gray-600">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span>100% Free with no hidden costs</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span>High-quality PNG downloads</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                    <span>Commercial usage rights included</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                    <span>No watermarks or branding</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                    <span>Instant generation in 30-60 seconds</span>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Bottom CTA Section */}
        {!isGenerating && !generatedLogo && (
          <div className="mt-12 text-center bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-6 sm:p-8 text-white">
            <div className="space-y-4">
              <h2 className="text-xl sm:text-2xl font-bold">
                Ready to Create Your Perfect Logo?
              </h2>
              <p className="text-blue-100 max-w-2xl mx-auto">
                Join thousands of entrepreneurs and businesses who trust our AI to create their brand identity. 
                Start by entering your brand name above!
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4 text-sm">
                <div className="flex items-center gap-2">
                  <Zap className="w-4 h-4" />
                  <span>Lightning Fast</span>
                </div>
                <div className="flex items-center gap-2">
                  <Shield className="w-4 h-4" />
                  <span>100% Free</span>
                </div>
                <div className="flex items-center gap-2">
                  <Award className="w-4 h-4" />
                  <span>Professional Quality</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

function buildOptimalLogoPrompt(data: LogoData): string {
  // Start with clear, authoritative instruction for premium logo design
  let prompt = `Create a premium, professional logo design with masterful craftsmanship`;
  
  // 1. BRAND IDENTITY FOUNDATION
  if (data.brandName) {
    prompt += ` for "${data.brandName}"`;
    
    // Add brand personality inference
    const brandPersonality = inferBrandPersonality(data.brandName, data.industry);
    if (brandPersonality) {
      prompt += ` (brand personality: ${brandPersonality})`;
    }
  }
  
  // 2. INDUSTRY CONTEXT WITH VISUAL EXPECTATIONS
  if (data.industry) {
    const industryContext = getIndustryVisualContext(data.industry);
    prompt += `. Industry: ${data.industry}${industryContext}`;
  }
  
  // 3. DESIGN STYLE WITH SPECIFIC VISUAL LANGUAGE
  if (data.style) {
    const styleDetails = getStyleSpecifications(data.style);
    prompt += `. Visual style: ${data.style}${styleDetails}`;
  }
  
  // 4. COLOR PSYCHOLOGY AND PALETTE
  if (data.colors) {
    const colorPsychology = getColorPsychology(data.colors);
    prompt += `. Color palette: ${data.colors}${colorPsychology}`;
  }
  
  // 5. TYPOGRAPHY WITH BRAND ALIGNMENT
  if (data.font) {
    const fontContext = getFontContext(data.font);
    prompt += `. Typography: ${data.font}${fontContext}`;
  }
  
  // 6. SYMBOLIC ELEMENTS WITH MEANING
  if (data.icon) {
    prompt += `. Key symbol: ${data.icon} - integrate meaningfully with perfect visual balance`;
  }
  
  // 7. EMOTIONAL IMPACT AND BRAND PERCEPTION
  if (data.emotion) {
    const emotionalDesignMap = getEmotionalDesignMapping(data.emotion);
    prompt += `. Emotional impact: ${data.emotion}${emotionalDesignMap}`;
  }
  
  // 8. SHAPE PSYCHOLOGY
  if (data.shape) {
    const shapePsychology = getShapePsychology(data.shape);
    prompt += `. Composition: ${data.shape}${shapePsychology}`;
  }
  
  // 9. FUNCTIONAL REQUIREMENTS
  if (data.useCase) {
    const useCaseSpecs = getUseCaseSpecifications(data.useCase);
    prompt += `. Primary use: ${data.useCase}${useCaseSpecs}`;
  }
  
  // 10. TAGLINE INTEGRATION
  if (data.slogan) {
    prompt += `. Tagline: "${data.slogan}" - integrate with perfect typographic hierarchy`;
  }
  
  // 11. EXPLICIT EXCLUSIONS
  if (data.doNotInclude) {
    prompt += `. STRICTLY AVOID: ${data.doNotInclude} - completely exclude these elements`;
  }
  
  // 12. TECHNICAL EXCELLENCE SPECIFICATIONS
  prompt += buildTechnicalSpecifications();
  
  // 13. DESIGN PRINCIPLES ENFORCEMENT
  prompt += buildDesignPrinciplesGuidance();
  
  // 14. QUALITY ASSURANCE CHECKLIST
  prompt += buildQualityChecklist();
  
  return prompt;
}

function inferBrandPersonality(brandName: string, industry?: string): string | null {
  // AI-friendly brand personality mapping
  const patterns: Record<string, string> = {
    tech: "innovative, forward-thinking, digital-first",
    health: "trustworthy, caring, reliable",
    finance: "reliable, professional, secure",
    creative: "artistic, expressive, imaginative",
    food: "appetizing, welcoming, warm"
  };
  
  if (industry && patterns[industry.toLowerCase()]) {
    return patterns[industry.toLowerCase()];
  }
  
  // Name-based inference
  if (brandName.includes('Pro') || brandName.includes('Elite')) {
    return "premium, sophisticated, expert";
  }
  if (brandName.includes('Green') || brandName.includes('Eco')) {
    return "sustainable, natural, environmentally conscious";
  }
  if (brandName.includes('Tech') || brandName.includes('Digital')) {
    return "technological, modern, innovative";
  }
  
  return null;
}

function getIndustryVisualContext(industry: string): string {
  const contexts: Record<string, string> = {
    "technology": " - expect clean lines, geometric forms, modern sans-serif fonts, blue/gray palette, circuit or connectivity symbols",
    "healthcare": " - use calming colors, rounded forms, crosses or hearts, serif fonts for trust, green/blue palette",
    "finance": " - incorporate pillars, shields, upward arrows, conservative colors, serif fonts, gold/blue accents",
    "food": " - warm colors, organic shapes, appetizing imagery, friendly fonts, red/orange/yellow palette",
    "education": " - approachable design, books/graduation symbols, clear typography, blue/green palette",
    "fitness": " - dynamic shapes, bold fonts, energetic colors, human forms, red/orange palette",
    "real estate": " - house/building symbols, stable design, professional fonts, earth tones",
    "legal": " - pillars, scales, shields, formal typography, navy/gold palette",
    "consulting": " - professional, clean, trustworthy design, blue/gray palette",
    "retail": " - approachable, friendly design, shopping-related symbols, varied color palette"
  };
  
  return contexts[industry.toLowerCase()] || "";
}

function getStyleSpecifications(style: string): string {
  const specs: Record<string, string> = {
    "modern": " - clean geometry, negative space usage, minimal elements, sans-serif preference",
    "minimalist": " - maximum simplicity, single focal point, abundant white space, no decorative elements",
    "vintage": " - aged textures, classic typography, ornamental details, muted color palette",
    "playful": " - rounded corners, bright colors, whimsical elements, casual fonts",
    "elegant": " - sophisticated curves, premium materials feel, refined typography, metallic accents",
    "bold": " - high contrast, thick strokes, impactful geometry, statement colors",
    "organic": " - natural forms, flowing lines, earth tones, hand-drawn feel",
    "corporate": " - professional, conservative, trustworthy, clean lines",
    "creative": " - artistic, unique, imaginative, expressive elements"
  };
  
  return specs[style.toLowerCase()] || "";
}

function getColorPsychology(colors: string): string {
  const psychology: Record<string, string> = {
    "blue": " (trust, professionalism, stability, reliability)",
    "red": " (energy, passion, urgency, power)",
    "green": " (growth, nature, harmony, prosperity)",
    "black": " (luxury, sophistication, power, elegance)",
    "orange": " (creativity, enthusiasm, warmth, energy)",
    "purple": " (royalty, creativity, luxury, innovation)",
    "yellow": " (optimism, clarity, innovation, happiness)",
    "white": " (purity, simplicity, cleanliness, minimalism)",
    "gray": " (neutrality, balance, sophistication)",
    "brown": " (reliability, stability, earthiness)"
  };
  
  let result = "";
  colors.split(',').forEach((color: string) => {
    const cleanColor = color.trim().toLowerCase();
    if (psychology[cleanColor]) {
      result += psychology[cleanColor];
    }
  });
  
  return result;
}

function getFontContext(font: string): string {
  const contexts: Record<string, string> = {
    "serif": " - conveys tradition, reliability, authority, timelessness",
    "sans-serif": " - modern, clean, approachable, readable",
    "script": " - elegant, personal, creative, sophisticated",
    "display": " - attention-grabbing, unique, memorable, bold",
    "monospace": " - technical, precise, digital, systematic"
  };
  
  return contexts[font.toLowerCase()] || "";
}

function getEmotionalDesignMapping(emotion: string): string {
  const mappings: Record<string, string> = {
    "trust": " - use stable shapes, consistent spacing, calming colors, clear hierarchy",
    "innovation": " - incorporate geometric abstractions, dynamic angles, tech-forward elements",
    "warmth": " - soft curves, warm color palette, friendly typography, approachable scale",
    "power": " - bold geometric forms, high contrast, strong verticals, commanding presence",
    "elegance": " - refined proportions, sophisticated curves, premium color palette, subtle details",
    "energy": " - dynamic shapes, vibrant colors, motion-implied design",
    "reliability": " - stable forms, consistent patterns, trustworthy color schemes"
  };
  
  return mappings[emotion.toLowerCase()] || "";
}

function getShapePsychology(shape: string): string {
  const psychology: Record<string, string> = {
    "circle": " - unity, community, protection, completeness, harmony",
    "square": " - stability, reliability, strength, order, professionalism",
    "triangle": " - direction, progress, hierarchy, innovation, movement",
    "hexagon": " - efficiency, balance, nature, technology, precision"
  };
  
  return psychology[shape.toLowerCase()] || "";
}

function getUseCaseSpecifications(useCase: string): string {
  const specs: Record<string, string> = {
    "web": " - optimize for 16px minimum size, high contrast ratios, pixel-perfect edges",
    "print": " - vector scalability, CMYK compatibility, fine detail preservation",
    "merchandise": " - bold, simple design, high contrast, readable at 1-inch size",
    "social media": " - square format optimization, mobile visibility, animated potential",
    "business cards": " - sophisticated detail, professional presence, small-scale legibility",
    "signage": " - high visibility, bold design, distance readability"
  };
  
  return specs[useCase.toLowerCase()] || "";
}

function buildTechnicalSpecifications(): string {
  return `. TECHNICAL REQUIREMENTS: Perfect vector scalability from 16px to billboard size, transparent background, crisp 1px edges, balanced visual weight, mathematical precision in spacing and proportions. Ensure 4.5:1 minimum contrast ratio for accessibility compliance. Use professional design software quality standards.`;
}

function buildDesignPrinciplesGuidance(): string {
  return `. DESIGN PRINCIPLES: Apply golden ratio proportions (1.618:1), establish clear visual hierarchy with 3-level maximum, maintain optical balance through strategic weight distribution, use purposeful negative space (30-40% minimum), ensure instant recognition at any size. Every element must serve the brand story - remove anything that doesn't add measurable value. Follow Swiss design principles for clarity and function.`;
}

function buildQualityChecklist(): string {
  return `. QUALITY ASSURANCE: Memorable at first glance (5-second test), distinctive from competitors, timeless design approach (10+ year relevance), culturally appropriate globally, legally defensible trademark potential, reproduction-friendly across all media formats. The logo must work perfectly in: black and white, single color, reversed/inverted, at favicon size (16x16px), and billboard scale. Achieve perfect symmetry, consistent line weights, and harmonious proportions.`;
} 