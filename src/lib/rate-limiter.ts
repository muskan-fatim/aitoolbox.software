const rateLimitStore = new Map<string, { count: number; timestamp: number }>();

export const rateLimiter = (
  ip: string,
  limit: number,
  windowMs: number
): boolean => {
  const now = Date.now();
  const windowStart = now - windowMs;

  const record = rateLimitStore.get(ip);

  if (record && record.timestamp > windowStart) {
    if (record.count >= limit) {
      return false; // Limit exceeded
    }
    rateLimitStore.set(ip, { ...record, count: record.count + 1 });
  } else {
    rateLimitStore.set(ip, { count: 1, timestamp: now });
  }

  // Clean up old records periodically to prevent memory leaks
  if (Math.random() < 0.01) { // 1% chance to clean up
    for (const [key, value] of rateLimitStore.entries()) {
      if (value.timestamp < windowStart) {
        rateLimitStore.delete(key);
      }
    }
  }

  return true; // Request is allowed
}; 