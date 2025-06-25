'use client';

import { RealtimeChat } from "@/components/realtime-chat";

export default function ChatbotPage() {
  return (
    <div className="h-full flex flex-col">
      <div className="flex-1 relative">
        <RealtimeChat
          systemPrompt="You are a helpful AI assistant. You provide clear, accurate, and concise responses."
        />
      </div>
    </div>
  );
} 