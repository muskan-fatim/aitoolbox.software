'use client'

import { useRef, KeyboardEvent, useEffect } from "react";
import { useRealtimeChat } from "@/hooks/use-realtime-chat";
import { ChatMessage } from "./chat-message";
import { Button } from "./ui/button";
import { Textarea } from "./ui/textarea";
import { cn } from "@/lib/utils";
import { ArrowUp } from "lucide-react";

interface RealtimeChatProps {
  systemPrompt?: string;
}

export function RealtimeChat({ systemPrompt }: RealtimeChatProps) {
  const inputRef = useRef<HTMLTextAreaElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const { messages, input, setInput, handleSubmit, isLoading } = useRealtimeChat({ systemPrompt });

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTo({
        top: containerRef.current.scrollHeight,
        behavior: 'smooth',
      });
    }
  }, [messages, isLoading]);

  const handleKeyDown = (e: KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSubmit();
    }
  };

  return (
    <div className="flex h-[calc(100vh-4rem)] flex-col bg-background">
      <div 
        ref={containerRef}
        className="flex-1 overflow-y-auto px-4 md:px-8 lg:px-16 py-6 space-y-8"
      >
        {messages.map((message) => (
          <ChatMessage key={message.id} message={message} />
        ))}
        {isLoading && (
          <ChatMessage 
            message={{ id: 'typing', role: 'assistant', content: '' }} 
            isTyping={true} 
          />
        )}
      </div>

      <div className="border-t bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60 p-4 md:p-6 lg:px-16">
        <form 
          onSubmit={(e) => { e.preventDefault(); handleSubmit(); }} 
          className="flex items-start gap-4 max-w-4xl mx-auto"
        >
          <Textarea
            ref={inputRef}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Ask AIToolbox BOT anything..."
            className="min-h-[60px] w-full resize-none rounded-xl bg-muted/50 px-4 py-[1.3rem] text-base focus-within:bg-muted/70 border-2 border-transparent focus-within:border-primary/50 transition-all"
            rows={1}
          />
          <Button 
            type="submit" 
            size="icon"
            disabled={isLoading || !input.trim()}
            className={cn(
              "h-16 w-16 rounded-xl transition-all font-medium flex-shrink-0",
              isLoading && "opacity-50 cursor-not-allowed"
            )}
          >
            <ArrowUp className="h-6 w-6" />
            <span className="sr-only">Send</span>
          </Button>
        </form>
      </div>
    </div>
  );
}
