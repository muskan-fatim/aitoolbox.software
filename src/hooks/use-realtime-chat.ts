import { useState, useEffect, useRef } from "react";

export interface ChatMessage {
  id: string;
  role: "user" | "assistant";
  content: string;
  isError?: boolean;
}

interface UseRealtimeChatProps {
  systemPrompt?: string;
}

const CHAT_HISTORY_KEY = 'ai-toolbox-chat-history';

export function useRealtimeChat({ systemPrompt }: UseRealtimeChatProps = {}) {
  const [messages, setMessages] = useState<ChatMessage[]>(() => {
    if (typeof window === 'undefined') {
      return [];
    }
    try {
      const savedMessages = window.localStorage.getItem(CHAT_HISTORY_KEY);
      return savedMessages ? JSON.parse(savedMessages) : [];
    } catch (error) {
      console.error("Failed to parse chat history from localStorage", error);
      return [];
    }
  });

  const [isLoading, setIsLoading] = useState(false);
  const [input, setInput] = useState("");
  const lastMessageTimeRef = useRef<number>(0);

  useEffect(() => {
    try {
      window.localStorage.setItem(CHAT_HISTORY_KEY, JSON.stringify(messages));
    } catch (error) {
      console.error("Failed to save chat history to localStorage", error);
    }
  }, [messages]);

  const sendMessage = async (content: string, currentMessages: ChatMessage[]) => {
    setIsLoading(true);

    try {
      const response = await fetch("/api/ai", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          type: "chat",
          prompt: content,
          options: {
            messages: [
              ...(systemPrompt ? [{ role: "system", content: systemPrompt }] : []),
              ...currentMessages.map(({ role, content }) => ({ role, content })),
            ]
          },
        }),
      });

      if (!response.ok) throw new Error("API request failed");

      const data = await response.json();
      if (!data.success) throw new Error(data.error || "Failed to get response");
      
      const assistantMessage: ChatMessage = {
        id: (Date.now() + 1).toString(),
        role: "assistant",
        content: data.data,
      };
      setMessages((prev) => [...prev, assistantMessage]);

    } catch (error) {
      console.error("Error sending message:", error);
      const errorMessage: ChatMessage = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: "I'm having some trouble connecting. Please check your connection or try again in a moment.",
        isError: true,
      };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = async () => {
    const now = Date.now();
    if (now - lastMessageTimeRef.current < 1000) {
      console.warn("Rate limit: Please wait 1 second between messages.");
      return; 
    }
    
    if (!input.trim() || isLoading) return;
    
    const userMessage: ChatMessage = {
      id: Date.now().toString(),
      role: "user",
      content: input.trim(),
    };

    const updatedMessages = [...messages, userMessage];
    setMessages(updatedMessages);
    setInput("");
    lastMessageTimeRef.current = now;
    
    await sendMessage(userMessage.content, updatedMessages);
  };

  return {
    messages,
    isLoading,
    input,
    setInput,
    handleSubmit,
  };
} 