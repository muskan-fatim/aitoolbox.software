import { NextRequest, NextResponse } from "next/server";
import { rateLimiter } from "@/lib/rate-limiter";

// Helper function to handle errors
const handleError = (error: unknown) => {
  console.error("AI API Error:", error);
  return NextResponse.json(
    { error: "An error occurred while processing your request" },
    { status: 500 }
  );
};

// Check if API token is configured
const POLLINATIONS_API_TOKEN = process.env.POLLINATIONS_API_TOKEN;
console.log(POLLINATIONS_API_TOKEN);

if (!POLLINATIONS_API_TOKEN) {
  console.warn("Warning: POLLINATIONS_API_TOKEN is not configured in environment variables");
}

// Helper to add auth token to URLs
const addAuthToUrl = (url: string) => {
  const finalUrl = new URL(url);
  if (POLLINATIONS_API_TOKEN) {
    finalUrl.searchParams.append('token', POLLINATIONS_API_TOKEN);
  }
  return finalUrl.toString();
};

// Helper to get auth headers
const getAuthHeaders = () => {
  const headers: Record<string, string> = {
    "Content-Type": "application/json"
  };
  if (POLLINATIONS_API_TOKEN) {
    headers["Authorization"] = `Bearer ${POLLINATIONS_API_TOKEN}`;
  }
  return headers;
};

// Image Generation Endpoint
export async function POST(req: NextRequest) {
  // Rate limiting by IP
  const ip = req.headers.get("x-forwarded-for") ?? "127.0.0.1"
  const allowed = rateLimiter(ip, 1, 1000); // 1 request per 1 second

  if (!allowed) {
    return NextResponse.json(
      { error: "Too many requests. Please try again later." },
      { status: 429 }
    );
  }

  try {
    const { type, ...body } = await req.json();

    switch (type) {
      case "image": {
        const { prompt, options = {} } = body;
        // Construct the Pollinations image URL with parameters
        const params = new URLSearchParams({
          ...options,
          nologo: "true", // Hide Pollinations branding
        });
        
        const encodedPrompt = encodeURIComponent(prompt);
        const baseUrl = `https://image.pollinations.ai/prompt/${encodedPrompt}?${params}`;
        const imageUrl = addAuthToUrl(baseUrl);
        
        // Fetch the image and return as base64
        const response = await fetch(imageUrl);
        const imageBuffer = await response.arrayBuffer();
        const base64Image = Buffer.from(imageBuffer).toString('base64');
        
        return NextResponse.json({ 
          success: true, 
          data: `data:image/jpeg;base64,${base64Image}` 
        });
      }

      case "chat": {
        const { prompt, options = {} } = body;
        // Handle chat/text generation
        const response = await fetch("https://text.pollinations.ai/openai", {
          method: "POST",
          headers: getAuthHeaders(),
          body: JSON.stringify({
            model: options.model || "openai",
            messages: options.messages || [
              { role: "user", content: prompt }
            ],
            ...options
          })
        });

        const data = await response.json();
        return NextResponse.json({ 
          success: true, 
          data: data.choices[0].message.content 
        });
      }

      case "audio": {
        const { prompt, options = {} } = body;
        // Handle text-to-speech
        const response = await fetch("https://text.pollinations.ai/openai", {
          method: "POST",
          headers: getAuthHeaders(),
          body: JSON.stringify({
            model: "openai-audio",
            messages: [{ role: "user", content: prompt }],
            voice: options.voice || "nova",
            ...options
          })
        });

        const data = await response.json();
        return NextResponse.json({ 
          success: true, 
          data: data.choices[0].message.audio.data // Returns base64 audio
        });
      }

      default:
        return NextResponse.json(
          { error: "Invalid request type" },
          { status: 400 }
        );
    }
  } catch (error) {
    return handleError(error);
  }
}

// Get available models
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export async function GET(_req: NextRequest) {
  try {
    const [imageModels, textModels] = await Promise.all([
      fetch(addAuthToUrl("https://image.pollinations.ai/models")).then(res => res.json()),
      fetch(addAuthToUrl("https://text.pollinations.ai/models")).then(res => res.json())
    ]);

    return NextResponse.json({
      success: true,
      data: {
        image: imageModels,
        text: textModels
      }
    });
  } catch (error) {
    return handleError(error);
  }
} 