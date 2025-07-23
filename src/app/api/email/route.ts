import { NextRequest, NextResponse } from "next/server";
import { rateLimiter } from "@/lib/rate-limiter";

// Helper function to handle errors
const handleError = (error: unknown) => {
  console.error("Email API Error:", error);
  const message = error instanceof Error ? error.message : "An unexpected error occurred";
  return NextResponse.json(
    { error: message },
    { status: 500 }
  );
};

// Check if API token is configured - optional but recommended
const POLLINATIONS_API_TOKEN = process.env.POLLINATIONS_API_TOKEN;

if (!POLLINATIONS_API_TOKEN) {
  console.warn("Warning: POLLINATIONS_API_TOKEN is not configured in environment variables - using anonymous access");
}

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

// Email Generation Endpoint
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
    const {
      tone,
      purpose,
      message,
      recipientName,
      senderName,
      subject: userSubject,
      language,
    } = await req.json();

    const systemPrompt = `You are an expert email writing assistant. Your task is to generate a professional and effective email based on the user's requirements.

      **Instructions:**
      1.  **Analyze the inputs:** Carefully consider the tone, purpose, key points, recipient, and sender details.
      2.  **Generate Subject Line:** If the user provides a subject, use it. Otherwise, create a clear, concise, and compelling subject line that reflects the email's purpose.
      3.  **Craft Email Body:**
          - Start with an appropriate salutation (e.g., "Dear ${recipientName || "Hiring Manager"
      }," or a more casual greeting if the tone is informal).
          - Write the body of the email, expanding on the user's key points. Ensure the language and style match the specified tone (${tone}) and purpose (${purpose}).
          - Maintain a logical flow and clear structure. Use paragraphs to separate ideas.
          - If the user provided bullet points, convert them into well-formed sentences.
      4.  **Closing:** Add a suitable closing (e.g., "Sincerely," "Best regards,") followed by the sender's name (${senderName || "Your Name"
      }).
      5.  **Language:** Write the entire email in ${language || "English"}.
      6.  **Output Format:** Respond with a JSON object containing "subject" and "body" fields. Do not include any other text, greetings, or explanations outside of the JSON object.

      Example output:
      {
        "subject": "Example Subject Line",
        "body": "Dear [Recipient Name],\\\\n\\\\nThis is the generated email body.\\\\n\\\\nBest regards,\\\\n[Sender Name]"
      }`;

    const userPrompt = `
      **Tone:** ${tone}
      **Purpose:** ${purpose}
      **Recipient's Name (optional):** ${recipientName}
      **My Name (optional):** ${senderName}
      **Subject (optional):** ${userSubject}
      **Key message to convey:**
      ---
      ${message}
      ---
    `;

    // Following Pollinations API documentation for Text-To-Text via POST
    const response = await fetch("https://text.pollinations.ai/openai", {
      method: "POST",
      headers: getAuthHeaders(),
      body: JSON.stringify({
        model: "openai", // Using default model from Pollinations
        messages: [
          { role: "system", content: systemPrompt },
          { role: "user", content: userPrompt },
        ],
        temperature: 0.7,
        response_format: { type: "json_object" },
        referrer: "aitoolbox.software", // Adding referrer for better rate limits
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error("Pollinations API Error:", errorText);
      
      // Try the GET endpoint as a fallback for simple text generation
      if (response.status === 404) {
        console.log("POST endpoint not found, trying GET endpoint as fallback...");
        
        // Construct a simplified prompt for the GET endpoint
        const simplePrompt = `Generate a ${tone} email for ${purpose}. ${message}`;
        const encodedPrompt = encodeURIComponent(simplePrompt);
        
        const getResponse = await fetch(`https://text.pollinations.ai/${encodedPrompt}?json=true&referrer=aitoolbox.software`, {
          headers: getAuthHeaders(),
        });
        
        if (!getResponse.ok) {
          throw new Error(`Failed to generate email: ${getResponse.status} ${getResponse.statusText}`);
        }
        
        const textResult = await getResponse.text();
        return NextResponse.json({
          success: true,
          data: textResult,
        });
      }
      
      throw new Error(`Failed to generate email: ${response.status} ${response.statusText}`);
    }

    const data = await response.json();
    
    // Handle different response structures from Pollinations API
    if (data.choices && data.choices[0] && data.choices[0].message && data.choices[0].message.content) {
      return NextResponse.json({
        success: true,
        data: data.choices[0].message.content,
      });
    } else if (data.content) {
      // Some Pollinations endpoints return content directly
      return NextResponse.json({
        success: true,
        data: data.content,
      });
    } else {
      console.error("Unexpected response structure:", data);
      // Attempt to return whatever we got if it might be useful
      if (typeof data === 'string') {
        return NextResponse.json({
          success: true,
          data: data,
        });
      } else {
        return NextResponse.json({
          success: true,
          data: JSON.stringify(data),
        });
      }
    }

  } catch (error) {
    return handleError(error);
  }
}