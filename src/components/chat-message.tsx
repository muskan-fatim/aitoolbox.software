import ReactMarkdown from "react-markdown";
import { cn } from "@/lib/utils";
import { ChatMessage as ChatMessageType } from "@/hooks/use-realtime-chat";
import { AlertTriangle, Bot } from "lucide-react";

interface ChatMessageProps {
  message: ChatMessageType;
  isTyping?: boolean;
}

const TypingIndicator = () => (
  <div className="flex items-center space-x-1">
    <span className="h-2 w-2 animate-pulse rounded-full bg-current delay-0" />
    <span className="h-2 w-2 animate-pulse rounded-full bg-current delay-150" />
    <span className="h-2 w-2 animate-pulse rounded-full bg-current delay-300" />
  </div>
);

export function ChatMessage({ message, isTyping }: ChatMessageProps) {
  const isUser = message.role === "user";

  return (
    <div className={cn("flex w-full items-start gap-4", isUser ? "justify-end" : "justify-start")}>
      {!isUser && (
        <div className="flex-shrink-0">
          <Bot className="h-6 w-6 text-muted-foreground" />
        </div>
      )}

      <div
        className={cn(
          "max-w-[85%] md:max-w-[75%] lg:max-w-[65%] rounded-2xl px-4 py-3 shadow-sm",
          isUser
            ? "bg-primary text-primary-foreground"
            : message.isError
            ? "bg-destructive/20 text-destructive-foreground"
            : "bg-muted/70 text-foreground"
        )}
      >
        <div className="flex items-center gap-2 mb-1">
          <span className="text-xs font-bold opacity-80">
            {isUser ? "You" : "AIToolbox BOT"}
          </span>
          {message.isError && (
            <AlertTriangle className="h-4 w-4 text-destructive" />
          )}
        </div>
        
        <div className="prose prose-sm dark:prose-invert max-w-none break-words">
          {isTyping ? <TypingIndicator /> : <ReactMarkdown>{message.content}</ReactMarkdown>}
        </div>
      </div>
    </div>
  );
}
