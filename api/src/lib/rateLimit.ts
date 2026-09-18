/**
 * Minimal in-memory per-IP rate limit. This resets whenever the Function
 * instance recycles and is NOT shared across scaled-out instances — it is
 * a cheap first line of defense against basic spam scripts, not a
 * substitute for Turnstile. For stricter guarantees, move counters to a
 * shared store (e.g. Azure Table Storage) if abuse becomes a problem.
 */
const WINDOW_MS = 10 * 60 * 1000;
const MAX_REQUESTS_PER_WINDOW = 5;

const hits = new Map<string, number[]>();

export function isRateLimited(key: string): boolean {
  const now = Date.now();
  const timestamps = (hits.get(key) ?? []).filter((t) => now - t < WINDOW_MS);

  if (timestamps.length >= MAX_REQUESTS_PER_WINDOW) {
    hits.set(key, timestamps);
    return true;
  }

  timestamps.push(now);
  hits.set(key, timestamps);
  return false;
}
