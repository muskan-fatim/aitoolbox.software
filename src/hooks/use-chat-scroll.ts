import { useEffect, useRef } from 'react'

export function useChatScroll<T>(dep: T) {
  const scrollRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTo({
        top: scrollRef.current.scrollHeight,
        behavior: 'smooth',
      })
    }
  }, [dep])

  return scrollRef
} 