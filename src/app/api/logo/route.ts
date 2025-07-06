import { NextRequest, NextResponse } from "next/server";
import { rateLimiter } from "@/lib/rate-limiter";

// Helper function to get dimensions based on ratio
function getRatioDimensions(ratio: string): { width: number; height: number } {
  const ratioMap: Record<string, { width: number; height: number }> = {
    "1:1": { width: 512, height: 512 },   // Square
    "16:9": { width: 640, height: 360 },  // Landscape
    "9:16": { width: 360, height: 640 },  // Portrait
    "4:3": { width: 512, height: 384 },   // Classic
    "3:4": { width: 384, height: 512 },   // Vertical
    "2:1": { width: 640, height: 320 },   // Wide
    "1:2": { width: 320, height: 640 },   // Tall
  };
  
  return ratioMap[ratio] || ratioMap["1:1"];
}

export async function POST(req: NextRequest) {
  // Rate limiting by IP
  const ip = req.headers.get("x-forwarded-for") ?? "127.0.0.1";
  const allowed = rateLimiter(ip, 1, 1000); // 1 request per 1 second

  if (!allowed) {
    return NextResponse.json(
      { error: "Too many requests. Please try again later." },
      { status: 429 }
    );
  }

  try {
    const { prompt, ratio = "1:1", slogan = "" } = await req.json();

    if (!prompt) {
      return NextResponse.json(
        { error: "Prompt is required" },
        { status: 400 }
      );
    }

    // Calculate dimensions based on ratio
    const dimensions = getRatioDimensions(ratio);
    
    // Build enhanced logo prompt
    let logoPrompt = `${prompt}. Professional logo design, clean and modern, transparent background, high quality, commercial use, vector style, scalable`;
    
    if (slogan && slogan.trim()) {
      logoPrompt += `, include text "${slogan}" as tagline or slogan integrated into the design`;
    } else {
      logoPrompt += `, no text unless specified`;
    }
    
    logoPrompt += `, ${ratio} aspect ratio, well-balanced composition`;

    // Use Pollinations API for image generation
    const imageUrl = `https://image.pollinations.ai/prompt/${encodeURIComponent(logoPrompt)}?width=${dimensions.width}&height=${dimensions.height}&model=flux&nologo=true&enhance=true`;

    // Fetch the image
    const response = await fetch(imageUrl);
    
    if (!response.ok) {
      throw new Error("Failed to generate logo");
    }

    const imageBuffer = await response.arrayBuffer();
    const base64Image = Buffer.from(imageBuffer).toString('base64');

    return NextResponse.json({
      success: true,
      image: `data:image/png;base64,${base64Image}`,
      prompt: logoPrompt
    });

  } catch (error) {
    console.error("Logo generation error:", error);
    return NextResponse.json(
      { error: "Failed to generate logo. Please try again." },
      { status: 500 }
    );
  }
}
